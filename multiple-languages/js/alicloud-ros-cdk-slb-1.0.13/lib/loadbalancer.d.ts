import * as ros from '@alicloud/ros-cdk-core';
import { RosLoadBalancer } from './slb.generated';
export { RosLoadBalancer as LoadBalancerProperty };
/**
 * Properties for defining a `ALIYUN::SLB::LoadBalancer`
 */
export interface LoadBalancerProps {
    /**
     * Property addressIpVersion: IP version, support 'ipv4' or 'ipv6'. If 'ipv6' is selected, please note that the zone and the specification are supported.
     */
    readonly addressIpVersion?: string | ros.IResolvable;
    /**
     * Property addressType: Loader balancer address type. Support 'internet' and 'intranet' only, default is 'internet'.
     */
    readonly addressType?: string | ros.IResolvable;
    /**
     * Property autoPay: Optional. Indicates whether to automatically pay the bill for the Subscription-billed Internet instance to be created.
     * Valid values: true | false. Default true.
     */
    readonly autoPay?: boolean | ros.IResolvable;
    /**
     * Property autoRenew: Indicates whether automatic renewal is enabled for the instance. Valid values:true: Automatic renewal is enabled.false: Automatic renewal is not enabled. You must renew the instance manually.Default value: false.
     */
    readonly autoRenew?: boolean | ros.IResolvable;
    /**
     * Property autoRenewPeriod: Automatic renewal cycle, which takes effect when AutoRenew is true, and is required:
     * When PricingCycle = month, the value range is 1 to 9 or 12, 24, 36.
     * When PeriodUnit = year, the value range is 1-3.
     */
    readonly autoRenewPeriod?: number | ros.IResolvable;
    /**
     * Property bandwidth: The bandwidth for network, unit in Mbps(Mega bit per second). Default is 1. If InternetChargeType is specified as "paybytraffic", this property will be ignore and please specify the "Bandwidth" in ALIYUN::SLB::Listener.
     */
    readonly bandwidth?: number | ros.IResolvable;
    /**
     * Property deletionProtection: Whether to enable deletion protection.
     */
    readonly deletionProtection?: boolean | ros.IResolvable;
    /**
     * Property duration: Optional. The subscription duration of a Subscription Internet instance.
     * Valid values:
     * If PricingCycle is month, the valid range is 1 to 9 or 12, 24, 36, 48, 60.
     * If PricingCycle is year, the value range is 1 to 5.
     */
    readonly duration?: number | ros.IResolvable;
    /**
     * Property instanceChargeType: Instance billing method. Value:PayBySpec: Pay by spec.
     * PayByCLCU: billed by usage.
     * Default: PayBySpec
     */
    readonly instanceChargeType?: string | ros.IResolvable;
    /**
     * Property internetChargeType: Instance internet access charge type.Support 'paybybandwidth' and 'paybytraffic' only. Default is 'paybytraffic'. If load balancer is created in VPC, the charge type will be set as 'paybytraffic' by default.
     */
    readonly internetChargeType?: string | ros.IResolvable;
    /**
     * Property loadBalancerName: Name of created load balancer. Length is limited to 1-80 characters, allowed to contain letters, numbers, '-, /, _,.' When not specified, a default name will be assigned.
     */
    readonly loadBalancerName?: string | ros.IResolvable;
    /**
     * Property loadBalancerSpec: The specification of the Server Load Balancer instance. Allowed value: slb.s1.small|slb.s2.small|slb.s2.medium|slb.s3.small|slb.s3.medium|slb.s3.large|slb.s3.xlarge|slb.s3.xxlarge. Default value: slb.s1.small. The supported performance specification in each region is different, two specifications are supported in the US East 1 region. If the region does not support the performance-guaranteed instances, the value will not take effect.
     */
    readonly loadBalancerSpec?: string | ros.IResolvable;
    /**
     * Property masterZoneId: The master zone id to create load balancer instance.
     */
    readonly masterZoneId?: string | ros.IResolvable;
    /**
     * Property modificationProtectionReason: Set the reason for modifying the protection status. The length is 1-80 English or Chinese characters, must start with upper and lower letters or Chinese, and can include numbers, periods (.), underscores (_) and dashes (-).
     * Only valid when ModificationProtectionStatus is ConsoleProtection.
     */
    readonly modificationProtectionReason?: string | ros.IResolvable;
    /**
     * Property modificationProtectionStatus: NonProtection or empty: means no restriction on modification protection
     * ConsoleProtection: Modify instance protection status by console
     * Default value is empty.
     */
    readonly modificationProtectionStatus?: string | ros.IResolvable;
    /**
     * Property payType: Optional. The billing method of the instance to be created.
     * Valid value: PayOnDemand (Pay-As-You-Go) | PrePay (Subscription)
     */
    readonly payType?: string | ros.IResolvable;
    /**
     * Property pricingCycle: Optional. The duration of the Subscription-billed Internet instance to be created.
     * Valid values: month | year.
     */
    readonly pricingCycle?: string | ros.IResolvable;
    /**
     * Property resourceGroupId: Resource group id.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * Property slaveZoneId: The slave zone id to create load balancer instance.
     */
    readonly slaveZoneId?: string | ros.IResolvable;
    /**
     * Property tags: Tags to attach to slb. Max support 5 tags to add during create slb. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosLoadBalancer.TagsProperty[];
    /**
     * Property vpcId: The VPC id to create load balancer instance. For VPC network only.
     */
    readonly vpcId?: string | ros.IResolvable;
    /**
     * Property vSwitchId: The VSwitch id to create load balancer instance. For VPC network only.
     */
    readonly vSwitchId?: string | ros.IResolvable;
}
/**
 * A ROS resource type:  `ALIYUN::SLB::LoadBalancer`
 */
export declare class LoadBalancer extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute AddressIPVersion: IP version
     */
    readonly attrAddressIpVersion: ros.IResolvable;
    /**
     * Attribute AddressType: The address type of the load balancer. "intranet" or "internet".
     */
    readonly attrAddressType: ros.IResolvable;
    /**
     * Attribute Bandwidth: The bandwidth for network
     */
    readonly attrBandwidth: ros.IResolvable;
    /**
     * Attribute IpAddress: The ip address of the load balancer.
     */
    readonly attrIpAddress: ros.IResolvable;
    /**
     * Attribute LoadBalancerId: The id of load balance created.
     */
    readonly attrLoadBalancerId: ros.IResolvable;
    /**
     * Attribute LoadBalancerName: Name of created load balancer.
     */
    readonly attrLoadBalancerName: ros.IResolvable;
    /**
     * Attribute LoadBalancerSpec: The specification of the Server Load Balancer instance
     */
    readonly attrLoadBalancerSpec: ros.IResolvable;
    /**
     * Attribute MasterZoneId: The master zone id to create load balancer instance.
     */
    readonly attrMasterZoneId: ros.IResolvable;
    /**
     * Attribute NetworkType: The network type of the load balancer. "vpc" or "classic" network.
     */
    readonly attrNetworkType: ros.IResolvable;
    /**
     * Attribute OrderId: The order ID.
     */
    readonly attrOrderId: ros.IResolvable;
    /**
     * Attribute PayType: The billing method of the instance to be created.
     */
    readonly attrPayType: ros.IResolvable;
    /**
     * Attribute ResourceGroupId: Resource group id.
     */
    readonly attrResourceGroupId: ros.IResolvable;
    /**
     * Attribute SlaveZoneId: The slave zone id to create load balancer instance.
     */
    readonly attrSlaveZoneId: ros.IResolvable;
    /**
     * Attribute VSwitchId: VSwitch id
     */
    readonly attrVSwitchId: ros.IResolvable;
    /**
     * Attribute VpcId: Vpc id
     */
    readonly attrVpcId: ros.IResolvable;
    /**
     * Create a new `ALIYUN::SLB::LoadBalancer`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props?: LoadBalancerProps, enableResourcePropertyConstraint?: boolean);
}
