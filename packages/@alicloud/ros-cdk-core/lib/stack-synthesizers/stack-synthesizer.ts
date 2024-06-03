import * as fs from 'fs';
import * as path from 'path';
import { addStackArtifactToAssembly, contentHash } from './_shared';
import { IStackSynthesizer } from './types';
import { ISynthesisSession } from "../construct-compat";
import * as cxschema from '@alicloud/ros-cdk-assembly-schema';
import {FileAssetLocation, FileAssetSource, FileAssetPackaging} from '../assets';
import { Fn } from '../ros-fn';
import { resolvedOr } from '../helpers-internal';
import { Stack } from '../stack';

/**
 * Base class for implementing an IStackSynthesizer
 *
 * This class needs to exist to provide public surface area for external
 * implementations of stack synthesizers. The protected methods give
 * access to functions that are otherwise @_internal to the framework
 * and could not be accessed by external implementors.
 */
export abstract class StackSynthesizer implements IStackSynthesizer {

  private _boundStack?: Stack;

  /**
   * Bind to the stack this environment is going to be used on
   *
   * Must be called before any of the other methods are called.
   */
  public bind(stack: Stack): void {
    if (this._boundStack !== undefined) {
      throw new Error('A StackSynthesizer can only be used for one Stack: create a new instance to use with a different Stack');
    }

    this._boundStack = stack;
  }

  /**
   * Register a File Asset
   *
   * Returns the parameters that can be used to refer to the asset inside the template.
   *
   * The synthesizer must rely on some out-of-band mechanism to make sure the given files
   * are actually placed in the returned location before the deployment happens. This can
   * be by writing the instructions to the asset manifest (for use by the `cdk-assets` tool),
   * by relying on the CLI to upload files (legacy behavior), or some other operator controlled
   * mechanism.
   */
  public abstract addFileAsset(asset: FileAssetSource): FileAssetLocation;

  /**
   * Synthesize the associated stack to the session
   */
  public abstract synthesize(session: ISynthesisSession): void;

  /**
   * Write the stack template to the given session
   *
   * Return a descriptor that represents the stack template as a file asset
   * source, for adding to an asset manifest (if desired). This can be used to
   * have the asset manifest system (`cdk-assets`) upload the template to OSS
   * using the appropriate role, so that afterwards only a ROS
   * deployment is necessary.
   *
   * If the template is uploaded as an asset, the `stackTemplateAssetObjectUrl`
   * property should be set when calling `emitArtifact.`
   *
   * If the template is *NOT* uploaded as an asset first and the template turns
   * out to be >50KB, it will need to be uploaded to OSS anyway. At that point
   * the credentials will be the same identity that is doing the `UpdateStack`
   * call, which may not have the right permissions to write to OSS.
   */
  protected synthesizeTemplate(session: ISynthesisSession): FileAssetSource {
    this.boundStack.synthesize(session);
    return stackTemplateFileAsset(this.boundStack, session);
  }

  /**
   * Write the ROS stack artifact to the session
   *
   * Use default settings to add a ROSStackArtifact artifact to
   * the given synthesis session. The Stack artifact will control the settings for the
   * ROS deployment.
   */
  protected emitArtifact(session: ISynthesisSession, options: SynthesizeStackArtifactOptions = {}) {
    addStackArtifactToAssembly(session, this.boundStack, options ?? {}, options.additionalDependencies ?? []);
  }

  /**
   * Retrieve the bound stack
   *
   * Fails if the stack hasn't been bound yet.
   */
  protected get boundStack(): Stack {
    if (!this._boundStack) {
      throw new Error('The StackSynthesizer must be bound to a Stack first before boundStack() can be called');
    }
    return this._boundStack;
  }

  /**
   * Turn a file asset location into a ROS representation of that location
   *
   * If any of the fields contain placeholders, the result will be wrapped in a `Fn.sub`.
   */
  protected rosLocationFromFileAsset(location: cxschema.FileDestination): FileAssetLocation {
    const { region } = stackLocationOrInstrinsics(this.boundStack);
    const httpUrl = `https://${location.bucketName}.oss-${region}.aliyuncs.com/${location.objectKey}`;

    return {
      bucketName: rosify(location.bucketName),
      objectKey: rosify(location.objectKey),
      httpUrl,
      region
    };
  }
}

/**
 * Stack artifact options
 *
 */
export interface SynthesizeStackArtifactOptions {
  /**
   * Identifiers of additional dependencies
   *
   * @default - No additional dependencies
   */
  readonly additionalDependencies?: string[];

  /**
   * Values for ROS stack parameters that should be passed when the stack is deployed.
   *
   * @default - No parameters
   */
  readonly parameters?: { [id: string]: string };
}

function stackTemplateFileAsset(stack: Stack, session: ISynthesisSession): FileAssetSource {
  const templatePath = path.join(session.assembly.outdir, stack.templateFile);

  if (!fs.existsSync(templatePath)) {
    throw new Error(`Stack template ${stack.stackName} not written yet: ${templatePath}`);
  }

  const template = fs.readFileSync(templatePath, { encoding: 'utf-8' });

  const sourceHash = contentHash(template);

  return {
    fileName: stack.templateFile,
    packaging: FileAssetPackaging.FILE,
    sourceHash,
    deployTime: true,
  };
}

/**
 * Return the stack locations if they're concrete, or the original ROS intrisics otherwise
 *
 * We need to return these instead of the tokenized versions of the strings,
 * since we must accept those same ${ALIYUN::AccountId}/${ALIYUN::Region} placeholders
 * in bucket names and role names (in order to allow environment-agnostic stacks).
 *
 * We'll wrap a single {Fn::Sub} around the final string in order to replace everything,
 * but we can't have the token system render part of the string to {Fn::Join} because
 * the ROS specification doesn't allow the {Fn::Sub} template string to be an arbitrary
 * expression--it must be a string literal.
 */
function stackLocationOrInstrinsics(stack: Stack) {
  return {
    account: resolvedOr(stack.account, '${ALIYUN::AccountId}'),
    region: resolvedOr(stack.region, '${ALIYUN::Region}'),
  };
}

/**
 * If the string still contains placeholders, wrap it in a Fn::Sub so they will be substituted at ROS deployment time
 *
 * (This happens to work because the placeholders we picked map directly onto ROS
 * placeholders. If they didn't we'd have to do a transformation here).
 */
function rosify(s: string): string {
  return s.indexOf('${') > -1 ? Fn.sub(s) : s;
}
