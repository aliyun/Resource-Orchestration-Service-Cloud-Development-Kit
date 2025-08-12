import * as ros from '@alicloud/ros-cdk-core';
import { RosBucketReplication } from './oss.generated';
export { RosBucketReplication as BucketReplicationProperty };
/**
 * Properties for defining a `BucketReplication`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oss-bucketreplication
 */
export interface BucketReplicationProps {
    /**
     * Property bucketName: Bucket name.
     */
    readonly bucketName: string | ros.IResolvable;
    /**
     * Property replicationConfiguration: Replication configuration.
     */
    readonly replicationConfiguration: RosBucketReplication.ReplicationConfigurationProperty | ros.IResolvable;
}
/**
 * Represents a `BucketReplication`.
 */
export interface IBucketReplication extends ros.IResource {
    readonly props: BucketReplicationProps;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::OSS::BucketReplication`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosBucketReplication`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oss-bucketreplication
 */
export declare class BucketReplication extends ros.Resource implements IBucketReplication {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: BucketReplicationProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: BucketReplicationProps, enableResourcePropertyConstraint?: boolean);
}
