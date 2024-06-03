import { Construct } from '../construct-compat';
import { assertBound } from './_shared';
import { StackSynthesizer } from './stack-synthesizer';
import { ISynthesisSession } from "../construct-compat";
import { IReusableStackSynthesizer, IBoundStackSynthesizer } from './types';
import * as cxschema from "@alicloud/ros-cdk-assembly-schema";
import * as cxapi from '@alicloud/ros-cdk-cxapi';
import { FileAssetLocation, FileAssetSource } from '../assets';
import { Fn } from '../ros-fn';
import { FileAssetParameters } from '../private/asset-parameters';
import { Stack } from '../stack';

/**
 * Use the CDK classic way of referencing assets
 *
 * This synthesizer will generate ROS parameters for every referenced
 * asset, and use the CLI's current credentials to deploy the stack.
 *
 * - It does not support cross-account deployment (the CLI must have credentials
 *   to the account you are trying to deploy to).
 * - It cannot be used with **CDK Pipelines**. To deploy using CDK Pipelines,
 *   you must use the `DefaultStackSynthesizer`.
 * - Each asset will take up a ROS Parameter in your template. Keep in
 *   mind that there is a maximum of 200 parameters in a ROS template.
 *   To use deterministic asset locations instead, use `CliCredentialsStackSynthesizer`.
 *
 * Be aware that your CLI credentials must be valid for the duration of the
 * entire deployment. If you are using session credentials, make sure the
 * session lifetime is long enough.
 */
export class LegacyStackSynthesizer extends StackSynthesizer implements IReusableStackSynthesizer, IBoundStackSynthesizer {
  private cycle = false;

  /**
   * Includes all parameters synthesized for assets (lazy).
   */
  private _assetParameters?: Construct;

  public addFileAsset(asset: FileAssetSource): FileAssetLocation {
    // Backwards compatibility hack. We have a number of conflicting goals here:
    if (this.cycle) {
      return this.doAddFileAsset(asset);
    }
    this.cycle = true;
    try {
      const stack = this.boundStack;
      return withoutDeprecationWarnings(() => stack.synthesizer.addFileAsset(asset));
    } finally {
      this.cycle = false;
    }
  }

  /**
   * Synthesize the associated stack to the session
   */
  public synthesize(session: ISynthesisSession): void {
    this.synthesizeTemplate(session);

    // Just do the default stuff, nothing special
    this.emitArtifact(session);
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

  private doAddFileAsset(asset: FileAssetSource): FileAssetLocation {
    let params = this.assetParameters.node.tryFindChild(asset.sourceHash) as FileAssetParameters;
    if (!params) {
      params = new FileAssetParameters(this.assetParameters, asset.sourceHash);

      if (!asset.fileName || !asset.packaging) {
        throw new Error(`LegacyStackSynthesizer does not support this type of file asset: ${JSON.stringify(asset)}`);
      }

      const metadata: cxschema.FileAssetMetadataEntry = {
        path: asset.fileName,
        id: asset.sourceHash,
        packaging: asset.packaging,
        sourceHash: asset.sourceHash,

        ossBucketParameter: params.bucketNameParameter.logicalId,
        ossKeyParameter: params.objectKeyParameter.logicalId,
        artifactHashParameter: params.artifactHashParameter.logicalId,
      };

      this.boundStack.node.addMetadata(cxschema.ArtifactMetadataEntryType.ASSET, metadata);
    }

    const bucketName = params.bucketNameParameter.valueAsString;

    // key is prefix|postfix
    const encodedKey = params.objectKeyParameter.valueAsString;

    const ossPrefix = Fn.select(0, Fn.split(cxapi.ASSET_PREFIX_SEPARATOR, encodedKey));
    const ossFilename = Fn.select(1, Fn.split(cxapi.ASSET_PREFIX_SEPARATOR, encodedKey));
    const objectKey = `${ossPrefix}${ossFilename}`;

    const httpUrl = `https://${bucketName}.oss-${this.boundStack.region}.aliyuncs.com/${objectKey}`;

    return { bucketName, objectKey, httpUrl, region: this.boundStack.region };
  }

  private get assetParameters() {
    assertBound(this.boundStack);

    if (!this._assetParameters) {
      this._assetParameters = new Construct(this.boundStack, 'AssetParameters');
    }
    return this._assetParameters;
  }
}

function withoutDeprecationWarnings<A>(block: () => A): A {
  const orig = process.env.JSII_DEPRECATED;
  process.env.JSII_DEPRECATED = 'quiet';
  try {
    return block();
  } finally {
    process.env.JSII_DEPRECATED = orig;
  }
}
