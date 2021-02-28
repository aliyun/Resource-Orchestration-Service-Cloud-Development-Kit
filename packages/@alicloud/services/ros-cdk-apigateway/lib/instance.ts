import * as ros from '@alicloud/ros-cdk-core';
import { RosInstance } from './apigateway.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosInstance as InstanceProperty };

/**
 * Properties for defining a `ALIYUN::ApiGateway::Instance`
 */
export interface InstanceProps {

    /**
     * Property httpsPolicy: HTTPS security policy. Valid values: HTTPS2_TLS1_0, HTTPS2_TLS1_2, HTTPS1_1_TLS1_0
     */
    readonly httpsPolicy: string;

    /**
     * Property instanceName: Instance name
     */
    readonly instanceName: string;

    /**
     * Property instanceSpec: Instance specification. For example: api.s1.small
     */
    readonly instanceSpec: string;

    /**
     * Property zoneId: Zone to which the instance belongs. For example: cn-beijing-MAZ2(f,g).
     * Pleas call DescribeZones to get supported zone list.
     */
    readonly zoneId: string;

    /**
     * Property autoPay: Indicates whether automatic payment is enabled. Valid values:false: Automatic payment is disabled. You need to go to Orders to make the payment once an order is generated. true: Automatic payment is enabled. The payment is automatically made.
     */
    readonly autoPay?: boolean | ros.IResolvable;

    /**
     * Property chargeType: The billing method of the router interface. Valid values: PrePaid (Subscription), PostPaid (default, Pay-As-You-Go). Default value: PostPaid.
     */
    readonly chargeType?: string;

    /**
     * Property duration: Prepaid time period. It could be from 1 to 9 when PricingCycle is Month, or 1 to 3 when PricingCycle is Year. Default value is 3.
     */
    readonly duration?: number;

    /**
     * Property pricingCycle: Unit of the payment cycle. It could be Month (default) or Year.
     */
    readonly pricingCycle?: string;
}

/**
 * A ROS resource type:  `ALIYUN::ApiGateway::Instance`
 */
export class Instance extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute EgressIpv6Enable: Whether enable egress IPV6.
     */
    public readonly attrEgressIpv6Enable: any;

    /**
     * Attribute InstanceId: Instance ID.
     */
    public readonly attrInstanceId: any;

    /**
     * Attribute InstanceType: Instance type.
     */
    public readonly attrInstanceType: any;

    /**
     * Attribute InternetEgressAddress: Internet egress dddress.
     */
    public readonly attrInternetEgressAddress: any;

    /**
     * Attribute SupportIpv6: Whether support IPV6.
     */
    public readonly attrSupportIpv6: any;

    /**
     * Attribute VpcEgressAddress: VPC network egress address.
     */
    public readonly attrVpcEgressAddress: any;

    /**
     * Attribute VpcIntranetEnable: Whether enable VPC intranet.
     */
    public readonly attrVpcIntranetEnable: any;

    /**
     * Attribute VpcSlbIntranetEnable: Whether enable VPC SLB intranet.
     */
    public readonly attrVpcSlbIntranetEnable: any;

    /**
     * Create a new `ALIYUN::ApiGateway::Instance`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: InstanceProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosInstance = new RosInstance(this, id,  {
            instanceName: props.instanceName,
            instanceSpec: props.instanceSpec,
            httpsPolicy: props.httpsPolicy,
            zoneId: props.zoneId,
            pricingCycle: props.pricingCycle,
            chargeType: props.chargeType ? props.chargeType : 'PostPaid',
            duration: props.duration,
            autoPay: props.autoPay,
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
