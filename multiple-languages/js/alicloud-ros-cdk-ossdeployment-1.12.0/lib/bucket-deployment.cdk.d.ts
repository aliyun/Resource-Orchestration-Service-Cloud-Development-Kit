import * as ros from '@alicloud/ros-cdk-core';
import { ISource } from './source.cdk';
import { RosCustomResource } from "@alicloud/ros-cdk-ros";
import { Service, Function } from "@alicloud/ros-cdk-fc";
import { Bucket } from "@alicloud/ros-cdk-oss";
export interface BucketDeploymentProps {
    /**
     * The sources from which to deploy the contents of this bucket.
     */
    readonly sources: ISource[];
    /**
     * The OSS bucket to sync the contents of the zip file to.
     */
    readonly destinationBucket: string | ros.IResolvable | Bucket;
    /**
     * The ARN of the execution role associated with this function
     *
     * @default -  A role is automatically created
     */
    readonly roleArn?: string | ros.IResolvable;
    /**
     * The timeout period in seconds for the function to run.
     *
     * @default - 60
     */
    readonly timeout?: number;
    /**
     * Whether log monitoring is enabled.
     * Enabling log monitoring allows you to record the details of your deployment,
     * which makes it easier to troubleshoot when something goes wrong.
     *
     * Enabling logging monitoring incurs an additional logging service fee.
     *
     * @default - false
     */
    readonly logMonitoring?: boolean;
    /**
     * If this is set to false, the bucket temporarily storing the asset or data will be deleted
     * after the asset or data is deployed to the destination bucket.
     *
     * Otherwise, the temporary bucket will be deleted when the stack is destroyed.
     *
     * @default - false
     */
    readonly retainOnCreate?: boolean;
}
/**
 * `BucketDeployment` populates an OSS bucket with the contents of .zip files from
 * other OSS buckets or from local disk
 */
export declare class BucketDeployment extends ros.Resource {
    private readonly destinationBucket;
    private readonly sources;
    readonly handlerRoleArn: string | ros.IResolvable;
    /**
     * Attribute fcService: FC service to use to forward content to the destination bucket.
     */
    readonly fcService: Service;
    /**
     * Attribute fcFunction: FC function to use to forward content to the destination bucket.
     */
    readonly fcFunction: Function;
    /**
     * Attribute cr: Custom resource to trigger the bucket deployment.
     */
    readonly cr: RosCustomResource;
    constructor(scope: ros.Construct, id: string, props: BucketDeploymentProps, enableResourcePropertyConstraint?: boolean);
}
