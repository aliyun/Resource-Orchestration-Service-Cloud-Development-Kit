import * as ros from '@alicloud/ros-cdk-core';
import { RosInstance } from './apigateway.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosInstance as InstanceProperty };

/**
 * Properties for defining a `Instance`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apigateway-instance
 */
export interface InstanceProps {

    /**
     * Property httpsPolicy: HTTPS security policy. Valid values: HTTPS2_TLS1_0, HTTPS2_TLS1_2, HTTPS1_1_TLS1_0
     */
    readonly httpsPolicy: string | ros.IResolvable;

    /**
     * Property instanceName: Instance name
     */
    readonly instanceName: string | ros.IResolvable;

    /**
     * Property instanceSpec: Instance specification. For example: api.s1.small
     */
    readonly instanceSpec: string | ros.IResolvable;

    /**
     * Property zoneId: Zone to which the instance belongs. For example: cn-beijing-MAZ2(f,g).
     * Pleas call DescribeZones to get supported zone list.
     */
    readonly zoneId: string | ros.IResolvable;

    /**
     * Property autoPay: Indicates whether automatic payment is enabled. Valid values:
     * false: Automatic payment is disabled. You need to go to Orders to make the payment once an order is generated. 
     * true: Automatic payment is enabled. The payment is automatically made.
     * Default true.
     */
    readonly autoPay?: boolean | ros.IResolvable;

    /**
     * Property chargeType: The billing method of the router interface. Valid values: PrePaid (Subscription), PostPaid (default, Pay-As-You-Go). Default value: PostPaid.
     */
    readonly chargeType?: string | ros.IResolvable;

    /**
     * Property deletionForce: Whether force delete the instance even if its status is START_FAILED. Default value is false.
     */
    readonly deletionForce?: boolean | ros.IResolvable;

    /**
     * Property duration: Prepaid time period. It could be from 1 to 9 when PricingCycle is Month, or 1 to 3 when PricingCycle is Year. Default value is 3.
     */
    readonly duration?: number | ros.IResolvable;

    /**
     * Property pricingCycle: Unit of the payment cycle. It could be Month (default) or Year.
     */
    readonly pricingCycle?: string | ros.IResolvable;

    /**
     * Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosInstance.TagsProperty[];
}

/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ApiGateway::Instance`, which is used to create a dedicated instance.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosInstance`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apigateway-instance
 */
export class Instance extends ros.Resource {

    /**
     * Attribute EgressIpv6Enable: Whether enable egress IPV6.
     */
    public readonly attrEgressIpv6Enable: ros.IResolvable;

    /**
     * Attribute InstanceId: Instance ID.
     */
    public readonly attrInstanceId: ros.IResolvable;

    /**
     * Attribute InstanceType: Instance type.
     */
    public readonly attrInstanceType: ros.IResolvable;

    /**
     * Attribute InternetEgressAddress: Internet egress dddress.
     */
    public readonly attrInternetEgressAddress: ros.IResolvable;

    /**
     * Attribute SupportIpv6: Whether support IPV6.
     */
    public readonly attrSupportIpv6: ros.IResolvable;

    /**
     * Attribute VpcEgressAddress: VPC network egress address.
     */
    public readonly attrVpcEgressAddress: ros.IResolvable;

    /**
     * Attribute VpcIntranetEnable: Whether enable VPC intranet.
     */
    public readonly attrVpcIntranetEnable: ros.IResolvable;

    /**
     * Attribute VpcSlbIntranetEnable: Whether enable VPC SLB intranet.
     */
    public readonly attrVpcSlbIntranetEnable: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: InstanceProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosInstance = new RosInstance(this, id,  {
            instanceName: props.instanceName,
            deletionForce: props.deletionForce === undefined || props.deletionForce === null ? false : props.deletionForce,
            instanceSpec: props.instanceSpec,
            httpsPolicy: props.httpsPolicy,
            zoneId: props.zoneId,
            pricingCycle: props.pricingCycle,
            chargeType: props.chargeType === undefined || props.chargeType === null ? 'PostPaid' : props.chargeType,
            duration: props.duration,
            autoPay: props.autoPay === undefined || props.autoPay === null ? true : props.autoPay,
            tags: props.tags,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosInstance;
        this.attrEgressIpv6Enable = rosInstance.attrEgressIpv6Enable;
        this.attrInstanceId = rosInstance.attrInstanceId;
        this.attrInstanceType = rosInstance.attrInstanceType;
        this.attrInternetEgressAddress = rosInstance.attrInternetEgressAddress;
        this.attrSupportIpv6 = rosInstance.attrSupportIpv6;
        this.attrVpcEgressAddress = rosInstance.attrVpcEgressAddress;
        this.attrVpcIntranetEnable = rosInstance.attrVpcIntranetEnable;
        this.attrVpcSlbIntranetEnable = rosInstance.attrVpcSlbIntranetEnable;
    }
}
