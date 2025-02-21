import * as ros from '@alicloud/ros-cdk-core';
import { RosPremiumInstance } from './ddospro.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosPremiumInstance as PremiumInstanceProperty };

/**
 * Properties for defining a `PremiumInstance`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ddospro-premiuminstance
 */
export interface PremiumInstanceProps {

    /**
     * Property burstBandwidthMode: The metering method of the 95th percentile burstable clean bandwidth. Valid values:
     * 0: disables the burstable clean bandwidth feature.
     * 1: enables the burstable clean bandwidth feature and uses the daily 95th percentile metering method.
     * 2: enables the burstable clean bandwidth feature and uses the monthly 95th percentile metering method.
     */
    readonly burstBandwidthMode?: string | ros.IResolvable;

    /**
     * Property domainCount: The number of domain names that you want to protect.
     * The value of DomainCount varies based on the value of ProductPlan.
     * If you set ProductPlan to 0, you can set DomainCount to a value that ranges from 10 to 200. The value must be a multiple of 10.
     * If you set ProductPlan to 1, you can set DomainCount to a value that ranges from 10 to 200. The value must be a multiple of 10.
     * If you set ProductPlan to 2, you do not need to specify this parameter.
     * If you set ProductPlan to 3, you can set DomainCount to a value that ranges from 10 to 200. The value must be a multiple of 10.
     */
    readonly domainCount?: number | ros.IResolvable;

    /**
     * Property functionVersion: The function plan of the instance. Valid values:
     * 0: the Standard function plan
     * 1: the Enhanced function plan.
     */
    readonly functionVersion?: string | ros.IResolvable;

    /**
     * Property normalBandwidth: The clean bandwidth provided by the instance. Unit: Mbit\/s.
     * The value of NormalBandwidth varies based on the value of ProductPlan.
     * If you set ProductPlan to 0, you can set NormalBandwidth to 100, 150, 200, 250, or 300.
     * If you set ProductPlan to 1, you can set NormalBandwidth to 100, 150, 200, 250, or 300.
     * If you set ProductPlan to 2, you can set NormalBandwidth to 10, 20, 30, 40, 50, 60, 70, 80, 90, or 100.
     * If you set ProductPlan to 3, you can set NormalBandwidth to 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 150, or 200.
     */
    readonly normalBandwidth?: number | ros.IResolvable;

    /**
     * Property normalQps: The clean QPS provided by the instance.
     * The value of NormalQps varies based on the value of ProductPlan.
     * If you set ProductPlan to 0, you can set NormalQps to a value that ranges from 500 to 100000. The value must be a multiple of 100.
     * If you set ProductPlan to 1, you can set NormalQps to a value that ranges from 1000 to 100000. The value must be a multiple of 100.
     * If you set ProductPlan to 2, you do not need to specify this parameter.
     * If you set ProductPlan to 3, you can set NormalQps to a value that ranges from 500 to 100000. The value must be a multiple of 100.
     */
    readonly normalQps?: number | ros.IResolvable;

    /**
     * Property period: The subscription period of the firewallIf PeriodUnit is Month, the valid range is 1, 2, 3, 4, 5, 6, 12, 24
     * If PeriodUnit is Year, the valid range is 1, 2
     */
    readonly period?: number | ros.IResolvable;

    /**
     * Property periodUnit: The unit of the subscription duration. Valid values:
     * Month
     * Year
     * Default value: Month.
     */
    readonly periodUnit?: string | ros.IResolvable;

    /**
     * Property portCount: The number of ports that you want to protect.
     * The value of PortCount varies based on the value of ProductPlan.
     * If you set ProductPlan to 0, you can set PortCount to a value that ranges from 5 to 400. The value must be a multiple of 5.
     * If you set ProductPlan to 1, you can set PortCount to a value that ranges from 5 to 400. The value must be a multiple of 5.
     * If you set ProductPlan to 2, you do not need to specify this parameter.
     * If you set ProductPlan to 3, you can set PortCount to a value that ranges from 5 to 400. The value must be a multiple of 5.
     */
    readonly portCount?: number | ros.IResolvable;

    /**
     * Property productPlan: The mitigation plan of the instance. Valid values:
     * 0: the Insurance mitigation plan
     * 1: the Unlimited mitigation plan
     * 2: the Chinese Mainland Acceleration (CMA) mitigation plan
     * 3: the Secure Chinese Mainland Acceleration (Sec-CMA) mitigation plan
     */
    readonly productPlan?: string | ros.IResolvable;

    /**
     * Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosPremiumInstance.TagsProperty[];
}

/**
 * Represents a `PremiumInstance`.
 */
export interface IPremiumInstance extends ros.IResource {
    readonly props: PremiumInstanceProps;

    /**
     * Attribute Arn: The Alibaba Cloud Resource Name (ARN).
     */
    readonly attrArn: ros.IResolvable | string;

    /**
     * Attribute InstanceId: The ID of the instance.
     */
    readonly attrInstanceId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::DDoSPro::PremiumInstance`, which is used to create an Anti-DDoS Proxy (Outside Chinese Mainland) instance.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosPremiumInstance`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ddospro-premiuminstance
 */
export class PremiumInstance extends ros.Resource implements IPremiumInstance {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: PremiumInstanceProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute Arn: The Alibaba Cloud Resource Name (ARN).
     */
    public readonly attrArn: ros.IResolvable | string;

    /**
     * Attribute InstanceId: The ID of the instance.
     */
    public readonly attrInstanceId: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: PremiumInstanceProps = {}, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosPremiumInstance = new RosPremiumInstance(this, id,  {
            normalQps: props.normalQps,
            normalBandwidth: props.normalBandwidth,
            functionVersion: props.functionVersion,
            productPlan: props.productPlan,
            period: props.period,
            portCount: props.portCount,
            tags: props.tags,
            burstBandwidthMode: props.burstBandwidthMode,
            periodUnit: props.periodUnit,
            domainCount: props.domainCount,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosPremiumInstance;
        this.attrArn = rosPremiumInstance.attrArn;
        this.attrInstanceId = rosPremiumInstance.attrInstanceId;
    }
}
