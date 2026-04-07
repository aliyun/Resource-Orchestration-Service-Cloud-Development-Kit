import * as ros from '@alicloud/ros-cdk-core';
import { RosBucketOverwriteConfig } from './oss.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosBucketOverwriteConfig as BucketOverwriteConfigProperty };

/**
 * Properties for defining a `BucketOverwriteConfig`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oss-bucketoverwriteconfig
 */
export interface BucketOverwriteConfigProps {

    /**
     * Property bucket: The name of the bucket.
     */
    readonly bucket: string | ros.IResolvable;

    /**
     * Property rule: Forbid overwrite rule.
     */
    readonly rule?: Array<RosBucketOverwriteConfig.RuleProperty | ros.IResolvable> | ros.IResolvable;
}

/**
 * Represents a `BucketOverwriteConfig`.
 */
export interface IBucketOverwriteConfig extends ros.IResource {
    readonly props: BucketOverwriteConfigProps;

    /**
     * Attribute Rule: Forbid overwrite rule.
     */
    readonly attrRule: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::OSS::BucketOverwriteConfig`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosBucketOverwriteConfig`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-oss-bucketoverwriteconfig
 */
export class BucketOverwriteConfig extends ros.Resource implements IBucketOverwriteConfig {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: BucketOverwriteConfigProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute Rule: Forbid overwrite rule.
     */
    public readonly attrRule: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: BucketOverwriteConfigProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosBucketOverwriteConfig = new RosBucketOverwriteConfig(this, id,  {
            bucket: props.bucket,
            rule: props.rule,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosBucketOverwriteConfig;
        this.attrRule = rosBucketOverwriteConfig.attrRule;
    }
}
