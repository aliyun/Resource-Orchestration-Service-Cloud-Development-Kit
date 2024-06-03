import { ISynthesisSession } from "../construct-compat";
import { Stack } from "../stack";
import { addStackArtifactToAssembly, assertBound } from "./_shared";
import { IBoundStackSynthesizer, IReusableStackSynthesizer } from "./types";
import {FileAssetLocation, FileAssetSource} from "../assets";
import { AssetManifestBuilder } from "./asset-manifest-builder";
import { StackSynthesizer } from "./stack-synthesizer";
import { Token } from "../token";
import * as cxapi from '@alicloud/ros-cdk-cxapi';
import {StringSpecializer, generateRandomString} from "../helpers-internal";
import * as path from "path";
import * as fs from 'fs-extra';

/**
 * Configuration properties for DefaultStackSynthesizer
 */
export interface DefaultStackSynthesizerProps {
  /**
   * Name of the OSS bucket to hold file assets
   *
   * You must supply this if you have given a non-standard name to the staging bucket.
   *
   * The placeholders `${Qualifier}`, `${ALIYUN::AccountId}` and `${ALIYUN::Region}` will
   * be replaced with the values of qualifier and the stack's account and region,
   * respectively.
   *
   * @default DefaultStackSynthesizer.DEFAULT_FILE_ASSETS_BUCKET_NAME
   */
  readonly fileAssetsBucketName?: string;

  /**
   * Qualifier to disambiguate multiple environments in the same account
   *
   * You can use this and leave the other naming properties empty if you have deployed
   * the bootstrap environment with standard names but only differnet qualifiers.
   */
  readonly qualifier?: string;

  /**
   * bucketPrefix to use while storing OSS Assets
   *
   * @default - DefaultStackSynthesizer.DEFAULT_FILE_ASSET_PREFIX
   */
  readonly bucketPrefix?: string;
}

/**
 * Uses conventionally named roles and reify asset storage locations
 */
export class DefaultStackSynthesizer extends StackSynthesizer implements IReusableStackSynthesizer, IBoundStackSynthesizer {
  /**
   * Default ARN qualifier
   */
  public static readonly DEFAULT_QUALIFIER = "";

  /**
   * Default file assets bucket name
   */
  public static readonly DEFAULT_FILE_ASSETS_BUCKET_NAME = 'cdk-${Qualifier}-assets-${ALIYUN::Region}';

  /**
   * Default file asset prefix
   */
  public static readonly DEFAULT_FILE_ASSET_PREFIX = '';

  private _stack?: Stack;
  private qualifier?: string;
  private bucketName?: string;
  private bucketPrefix?: string;
  private assetManifest = new AssetManifestBuilder();

  constructor(private readonly props: DefaultStackSynthesizerProps = {}) {
    super();

    for (const key in props) {
      if (props.hasOwnProperty(key)) {
        validateNoToken(key as keyof DefaultStackSynthesizerProps);
      }
    }

    function validateNoToken<A extends keyof DefaultStackSynthesizerProps>(key: A) {
      const prop = props[key];
      if (typeof prop === 'string' && Token.isUnresolved(prop)) {
        throw new Error(`DefaultStackSynthesizer property '${key}' cannot contain tokens; only the following placeholder strings are allowed: ` + [
          '${Qualifier}',
          cxapi.EnvironmentPlaceholders.CURRENT_REGION,
          cxapi.EnvironmentPlaceholders.CURRENT_ACCOUNT,
        ].join(', '));
      }
    }
  }

  /**
   * Produce a bound Stack Synthesizer for the given stack.
   *
   * This method may be called more than once on the same object.
   */
  public reusableBind(stack: Stack): IBoundStackSynthesizer {
    // Create a copy of the current object and bind that
    const copy = Object.create(this);
    copy.bind(stack);
    return copy;
  }

  public bind(stack: Stack): void {
    super.bind(stack);

    const qualifier = this.props.qualifier ?? generateRandomString(9);
    this.qualifier = qualifier;

    const spec = new StringSpecializer(stack, qualifier);

    let defaultBucketName = DefaultStackSynthesizer.DEFAULT_FILE_ASSETS_BUCKET_NAME;
    const stackInfoFile = path.join('stack.info.json');
    if (fs.existsSync(stackInfoFile)) {
      const stackInfo: { [key: string]: any } = JSON.parse(fs.readFileSync(stackInfoFile).toString('utf-8').trim());
      if (stack.artifactId in stackInfo && stackInfo[stack.artifactId]['assetAssociatedBucketName'] !== undefined && stackInfo[stack.artifactId]['assetAssociatedBucketName'] !== null) {
        defaultBucketName = stackInfo[stack.artifactId]['assetAssociatedBucketName'];
      }
    }

    /* eslint-disable max-len */
    this.bucketName = spec.specialize(this.props.fileAssetsBucketName ?? defaultBucketName);
    this.bucketPrefix = spec.specialize(this.props.bucketPrefix ?? DefaultStackSynthesizer.DEFAULT_FILE_ASSET_PREFIX);
    /* eslint-enable max-len */
  }

  public addFileAsset(asset: FileAssetSource): FileAssetLocation {
    assertBound(this.bucketName);

    const location = this.assetManifest.defaultAddFileAsset(this.boundStack, asset, {
      bucketName: this.bucketName,
      bucketPrefix: this.bucketPrefix
    });
    return this.rosLocationFromFileAsset(location);
  }

  /**
   * Synthesize the associated stack to the session
   */
  public synthesize(session: ISynthesisSession): void {
    assertBound(this.qualifier);

    // Must be done here -- if it's done in bind() (called in the Stack's constructor)
    // then it will become impossible to set context after that.
    //
    // If it's done AFTER _synthesizeTemplate(), then the template won't contain the
    // right constructs.
    const templateAssetSource = this.synthesizeTemplate(session);
    this.addFileAsset(templateAssetSource);

    const assetManifestId = this.assetManifest.emitManifest(this.boundStack, session);

    this.emitArtifact(session, {
      additionalDependencies: [assetManifestId],
    });
  }

  public synthesizeStackArtifacts(session: ISynthesisSession): void {
    assertBound(this.stack);

    const artifactId = this.writeAssetManifest();

    addStackArtifactToAssembly(session, this.stack, {}, [artifactId]);
  }

  protected get stack(): Stack | undefined {
    return this._stack;
  }

  /**
   * Write an asset manifest to the Cloud Assembly, return the artifact IDs written
   */
  private writeAssetManifest(): string {
    assertBound(this.stack);

    const artifactId = `${this.stack.artifactId}.assets`;

    return artifactId;
  }
}
