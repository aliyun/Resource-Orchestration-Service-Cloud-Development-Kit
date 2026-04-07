import * as ros from '@alicloud/ros-cdk-core';
import { RosBucketLogging } from './oss.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosBucketLogging as BucketLoggingProperty };

/**
 * Properties for defining a `BucketLogging`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oss-bucketlogging
 */
export interface BucketLoggingProps {

    /**
     * Property bucket: The name of the bucket.
     */
    readonly bucket: string | ros.IResolvable;

    /**
     * Property targetBucket: The bucket that stores access logs.
     */
    readonly targetBucket: string | ros.IResolvable;

    /**
     * Property loggingRole: Authorization role used for bucket logging.
     */
    readonly loggingRole?: string | ros.IResolvable;

    /**
     * Property targetPrefix: The prefix of the saved log objects. This element can be left empty.
     */
    readonly targetPrefix?: string | ros.IResolvable;
}

/**
 * Represents a `BucketLogging`.
 */
export interface IBucketLogging extends ros.IResource {
    readonly props: BucketLoggingProps;

    /**
     * Attribute LoggingRole: Authorization role used for bucket logging.
     */
    readonly attrLoggingRole: ros.IResolvable | string;

    /**
     * Attribute TargetBucket: The bucket that stores access logs.
     */
    readonly attrTargetBucket: ros.IResolvable | string;

    /**
     * Attribute TargetPrefix: The prefix of the saved log objects. This element can be left empty.
     */
    readonly attrTargetPrefix: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::OSS::BucketLogging`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosBucketLogging`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oss-bucketlogging
 */
export class BucketLogging extends ros.Resource implements IBucketLogging {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: BucketLoggingProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute LoggingRole: Authorization role used for bucket logging.
     */
    public readonly attrLoggingRole: ros.IResolvable | string;

    /**
     * Attribute TargetBucket: The bucket that stores access logs.
     */
    public readonly attrTargetBucket: ros.IResolvable | string;

    /**
     * Attribute TargetPrefix: The prefix of the saved log objects. This element can be left empty.
     */
    public readonly attrTargetPrefix: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: BucketLoggingProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosBucketLogging = new RosBucketLogging(this, id,  {
            loggingRole: props.loggingRole,
            targetPrefix: props.targetPrefix,
            bucket: props.bucket,
            targetBucket: props.targetBucket,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosBucketLogging;
        this.attrLoggingRole = rosBucketLogging.attrLoggingRole;
        this.attrTargetBucket = rosBucketLogging.attrTargetBucket;
        this.attrTargetPrefix = rosBucketLogging.attrTargetPrefix;
    }
}
