import * as ros from '@alicloud/ros-cdk-core';
import { RosInstance } from './apigateway.generated';
export { RosInstance as InstanceProperty };
/**
 * Properties for defining a `ALIYUN::ApiGateway::Instance`
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
}
/**
 * A ROS resource type:  `ALIYUN::ApiGateway::Instance`
 */
export declare class Instance extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute EgressIpv6Enable: Whether enable egress IPV6.
     */
    readonly attrEgressIpv6Enable: ros.IResolvable;
    /**
     * Attribute InstanceId: Instance ID.
     */
    readonly attrInstanceId: ros.IResolvable;
    /**
     * Attribute InstanceType: Instance type.
     */
    readonly attrInstanceType: ros.IResolvable;
    /**
     * Attribute InternetEgressAddress: Internet egress dddress.
     */
    readonly attrInternetEgressAddress: ros.IResolvable;
    /**
     * Attribute SupportIpv6: Whether support IPV6.
     */
    readonly attrSupportIpv6: ros.IResolvable;
    /**
     * Attribute VpcEgressAddress: VPC network egress address.
     */
    readonly attrVpcEgressAddress: ros.IResolvable;
    /**
     * Attribute VpcIntranetEnable: Whether enable VPC intranet.
     */
    readonly attrVpcIntranetEnable: ros.IResolvable;
    /**
     * Attribute VpcSlbIntranetEnable: Whether enable VPC SLB intranet.
     */
    readonly attrVpcSlbIntranetEnable: ros.IResolvable;
    /**
     * Create a new `ALIYUN::ApiGateway::Instance`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: InstanceProps, enableResourcePropertyConstraint?: boolean);
}
