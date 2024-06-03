import * as ros from '@alicloud/ros-cdk-core';
import * as oss_assets from '@alicloud/ros-cdk-ossassets';
import * as path from 'path';
import * as fc from "@alicloud/ros-cdk-fc";

export class AssetTest extends ros.Stack {
  constructor(scope: ros.Construct, id: string, props?: ros.StackProps) {
    super(scope, id, props);
    new ros.RosInfo(
      this,
      ros.RosInfo.description,
      'Create a file asset and a directory asset.',
    );

      const directoryAsset = new oss_assets.Asset(this, 'SampleZippedDirAsset', {
          path: path.join(__dirname, 'sample-asset-directory')
      });

      const fileAsset = new oss_assets.Asset(this, 'SampleSingleFileAsset', {
          path: path.join(__dirname, 'sample-asset-directory/sample-asset-file.txt')
      });

      const fcService = new fc.Service(this, `FCService`, {
          serviceName: `ros-cdk-oss-deployment`,
          description: 'FC service for oss deployment by CDK',
      });

      const fcFunction = new fc.RosFunction(this, `FCFunction1`, {
          functionName: `ros-cdk-oss-deployment-1`,
          serviceName: fcService.attrServiceName,
          runtime: 'python3.10',
          handler: 'index.handler',
          code: {
              ossBucketName: directoryAsset.bucketName,
              ossObjectName: directoryAsset.objectKey
          }
      }, true);

      directoryAsset.addResourceMetadata(fcFunction, 'SampleDeployment')


      new ros.RosOutput(this, 'FileAssetBucketName', {
          value: fileAsset.bucketName
      });

      new ros.RosOutput(this, 'FileAssetObjectKey', {
          value: fileAsset.objectKey
      });

      new ros.RosOutput(this, 'FileAssetHttpUrl', {
          value: fileAsset.httpUrl
      });

      new ros.RosOutput(this, 'DirectoryAssetBucketName', {
          value: directoryAsset.bucketName
      });

      new ros.RosOutput(this, 'DirectoryAssetObjectKey', {
          value: directoryAsset.objectKey
      });

      new ros.RosOutput(this, 'DirectoryAssetHttpUrl', {
          value: directoryAsset.httpUrl
      });
  }
}