import * as ros from '@alicloud/ros-cdk-core';
import { RosBucketWorm } from './oss.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosBucketWorm as BucketWormProperty };

/**
 * Properties for defining a `BucketWorm`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oss-bucketworm
 */
export interface BucketWormProps {

    /**
     * Property bucket: The name of the bucket.
     */
    readonly bucket: string | ros.IResolvable;

    /**
     * Property retentionPeriodInDays: The specified number of days to retain the Object.
     */
    readonly retentionPeriodInDays: number | ros.IResolvable;
}

/**
 * Represents a `BucketWorm`.
 */
export interface IBucketWorm extends ros.IResource {
    readonly props: BucketWormProps;

    /**
     * Attribute CreateTime: The creation time of the resource.
     */
    readonly attrCreateTime: ros.IResolvable | string;

    /**
     * Attribute ExpirationDate: Retention Policy Expiration Time.
     */
    readonly attrExpirationDate: ros.IResolvable | string;

    /**
     * Attribute RetentionPeriodInDays: The specified number of days to retain the Object.
     */
    readonly attrRetentionPeriodInDays: ros.IResolvable | string;

    /**
     * Attribute WormId: The ID of the retention policy.
     */
    readonly attrWormId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::OSS::BucketWorm`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosBucketWorm`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oss-bucketworm
 */
export class BucketWorm extends ros.Resource implements IBucketWorm {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: BucketWormProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute CreateTime: The creation time of the resource.
     */
    public readonly attrCreateTime: ros.IResolvable | string;

    /**
     * Attribute ExpirationDate: Retention Policy Expiration Time.
     */
    public readonly attrExpirationDate: ros.IResolvable | string;

    /**
     * Attribute RetentionPeriodInDays: The specified number of days to retain the Object.
     */
    public readonly attrRetentionPeriodInDays: ros.IResolvable | string;

    /**
     * Attribute WormId: The ID of the retention policy.
     */
    public readonly attrWormId: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: BucketWormProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosBucketWorm = new RosBucketWorm(this, id,  {
            bucket: props.bucket,
            retentionPeriodInDays: props.retentionPeriodInDays,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosBucketWorm;
        this.attrCreateTime = rosBucketWorm.attrCreateTime;
        this.attrExpirationDate = rosBucketWorm.attrExpirationDate;
        this.attrRetentionPeriodInDays = rosBucketWorm.attrRetentionPeriodInDays;
        this.attrWormId = rosBucketWorm.attrWormId;
    }
}
