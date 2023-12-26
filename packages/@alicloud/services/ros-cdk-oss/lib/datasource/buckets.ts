import * as ros from '@alicloud/ros-cdk-core';
import { RosBuckets } from './oss.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosBuckets as BucketsProperty };

/**
 * Properties for defining a `Buckets`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-oss-buckets
 */
export interface BucketsProps {
}

/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::OSS::Buckets`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosBuckets`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-oss-buckets
 */
export class Buckets extends ros.Resource {

    /**
     * Attribute BucketNames: The list of bucket names.
     */
    public readonly attrBucketNames: ros.IResolvable;

    /**
     * Attribute Buckets: The list of buckets.
     */
    public readonly attrBuckets: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: BucketsProps = {}, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosBuckets = new RosBuckets(this, id,  {
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        props;
        this.resource = rosBuckets;
        this.attrBucketNames = rosBuckets.attrBucketNames;
        this.attrBuckets = rosBuckets.attrBuckets;
    }
}
