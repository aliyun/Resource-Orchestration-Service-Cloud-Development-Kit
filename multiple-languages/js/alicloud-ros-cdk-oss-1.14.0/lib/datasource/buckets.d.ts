import * as ros from '@alicloud/ros-cdk-core';
import { RosBuckets } from './oss.generated';
export { RosBuckets as BucketsProperty };
/**
 * Properties for defining a `Buckets`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-oss-buckets
 */
export interface BucketsProps {
    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * Represents a `Buckets`.
 */
export interface IBuckets extends ros.IResource {
    readonly props: BucketsProps;
    /**
     * Attribute BucketNames: The list of bucket names.
     */
    readonly attrBucketNames: ros.IResolvable | string;
    /**
     * Attribute Buckets: The list of buckets.
     */
    readonly attrBuckets: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::OSS::Buckets`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosBuckets`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-oss-buckets
 */
export declare class Buckets extends ros.Resource implements IBuckets {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: BucketsProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute BucketNames: The list of bucket names.
     */
    readonly attrBucketNames: ros.IResolvable | string;
    /**
     * Attribute Buckets: The list of buckets.
     */
    readonly attrBuckets: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props?: BucketsProps, enableResourcePropertyConstraint?: boolean);
}
