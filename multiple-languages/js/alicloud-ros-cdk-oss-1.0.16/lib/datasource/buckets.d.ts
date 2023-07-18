import * as ros from '@alicloud/ros-cdk-core';
import { RosBuckets } from './oss.generated';
export { RosBuckets as BucketsProperty };
/**
 * Properties for defining a `DATASOURCE::OSS::Buckets`
 */
export interface BucketsProps {
}
/**
 * A ROS resource type:  `DATASOURCE::OSS::Buckets`
 */
export declare class Buckets extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute BucketNames: The list of bucket names.
     */
    readonly attrBucketNames: ros.IResolvable;
    /**
     * Attribute Buckets: The list of buckets.
     */
    readonly attrBuckets: ros.IResolvable;
    /**
     * Create a new `DATASOURCE::OSS::Buckets`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props?: BucketsProps, enableResourcePropertyConstraint?: boolean);
}
