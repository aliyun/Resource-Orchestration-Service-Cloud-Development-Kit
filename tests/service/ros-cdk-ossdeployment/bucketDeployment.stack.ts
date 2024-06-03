import * as ros from '@alicloud/ros-cdk-core';
import * as oss_deployment from '@alicloud/ros-cdk-ossdeployment';
import * as oss from '@alicloud/ros-cdk-oss';
import * as oss_assets from '@alicloud/ros-cdk-ossassets';
import * as path from 'path';

export class BucketDeploymentTest extends ros.Stack {
    constructor(scope: ros.Construct, id: string, props?: ros.StackProps) {
        super(scope, id, props);
        new ros.RosInfo(
            this,
            ros.RosInfo.description,
            'Deploy file to OSS bucket from local/another bucket/data/json data.',
        );

        const destBucket = new oss.Bucket(this, 'SampleDestBucket', {
            bucketName: 'sample-dest-bucket-name',
        });

        new oss_deployment.BucketDeployment(this, 'SampleFileDeployment', {
            sources: [
                oss_deployment.Source.asset(path.join(__dirname, '../ros-cdk-ossassets/sample-asset-directory/sample-asset-file.txt')),
                oss_deployment.Source.bucket('source-bucket', 'sample-source-object-key'),
                oss_deployment.Source.data('sample-data.txt','This is sample data.'),
                oss_deployment.Source.jsonData('sample-map.json', {
                    key1: 'value1',
                    key2: 'value2',
                }),
            ],
            destinationBucket: destBucket
        });
    }
}