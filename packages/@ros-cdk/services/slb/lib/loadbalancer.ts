import * as ros from '@ros-cdk/core';
import { RosLoadBalancer } from './slb.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosLoadBalancer as LoadBalancerProperty };

/**
 * Properties for defining a `ALIYUN::SLB::LoadBalancer`
 */
export interface LoadBalancerProps {

    /**
     * @Property addressType: Loader balancer address type. Support 'internet' and 'intranet' only, default is 'internet'.
     */
    readonly addressType?: string;

    /**
     * @Property autoPay: Optional. Indicates whether to automatically pay the bill for the Subscription-billed Internet instance to be created.
     * Valid values: true | false (default value)
     */
    readonly autoPay?: boolean | ros.IResolvable;

    /**
     * @Property bandwidth: The bandwidth for network, unit in Mbps(Mega bit per second). Range is 1 to 1000, default is 1. If InternetChargeType is specified as "paybytraffic", this property will be ignore and please specify the "Bandwidth" in ALIYUN::SLB::Listener.
     */
    readonly bandwidth?: number;

    /**
     * @Property deletionProtection: Whether to enable deletion protection.
     */
    readonly deletionProtection?: boolean | ros.IResolvable;

    /**
     * @Property duration: Optional. The subscription duration of a Subscription Internet instance.
     * Valid values:
     * If PricingCycle is month, the valid range is 1 to 9.
     * If PricingCycle is year, the value range is 1 to 3.
     */
    readonly duration?: number;

    /**
     * @Property internetChargeType: Instance internet access charge type.Support 'paybybandwidth' and 'paybytraffic' only. Default is 'paybytraffic'. If load balancer is created in VPC, the charge type will be set as 'paybytraffic' by default.
     */
    readonly internetChargeType?: string;

    /**
     * @Property loadBalancerName: Name of created load balancer. Length is limited to 1-80 characters, allowed to contain letters, numbers, '-, /, _,.' When not specified, a default name will be assigned.
     */
    readonly loadBalancerName?: string;

    /**
     * @Property loadBalancerSpec: The specification of the Server Load Balancer instance. Allowed value: slb.s1.small|slb.s2.small|slb.s2.medium|slb.s3.small|slb.s3.medium|slb.s3.large|slb.s3.xlarge|slb.s3.xxlarge. Default value: slb.s1.small. The supported performance specification in each region is different, two specifications are supported in the US East 1 region. If the region does not support the performance-guaranteed instances, the value will not take effect.
     */
    readonly loadBalancerSpec?: string;

    /**
     * @Property masterZoneId: The master zone id to create load balancer instance.
     */
    readonly masterZoneId?: string;

    /**
     * @Property modificationProtectionReason: Set the reason for modifying the protection status. The length is 1-80 English or Chinese characters, must start with upper and lower letters or Chinese, and can include numbers, periods (.), underscores (_) and dashes (-).
     * Only valid when ModificationProtectionStatus is ConsoleProtection.
     */
    readonly modificationProtectionReason?: string;

    /**
     * @Property modificationProtectionStatus: NonProtection or empty: means no restriction on modification protection
     * ConsoleProtection: Modify instance protection status by console
     * Default value is empty.
     */
    readonly modificationProtectionStatus?: string;

    /**
     * @Property payType: Optional. The billing method of the instance to be created.
     * Valid value: PayOnDemand (Pay-As-You-Go) | PrePay (Subscription)
     */
    readonly payType?: string;

    /**
     * @Property pricingCycle: Optional. The duration of the Subscription-billed Internet instance to be created.
     * Valid values: month | year.
     */
    readonly pricingCycle?: string;

    /**
     * @Property resourceGroupId: Resource group id.
     */
    readonly resourceGroupId?: string;

    /**
     * @Property slaveZoneId: The slave zone id to create load balancer instance.
     */
    readonly slaveZoneId?: string;

    /**
     * @Property tags: Tags to attach to slb. Max support 5 tags to add during create slb. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: { [key: string]: any }[];

    /**
     * @Property vpcId: The VPC id to create load balancer instance. For VPC network only.
     */
    readonly vpcId?: string;

    /**
     * @Property vSwitchId: The VSwitch id to create load balancer instance. For VPC network only.
     */
    readonly vSwitchId?: string;
}

/**
 * A ROS resource type:  `ALIYUN::SLB::LoadBalancer`
 */
export class LoadBalancer extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * @Attribute AddressType: The address type of the load balancer. "intranet" or "internet".
     */
    public readonly attrAddressType: any;

    /**
     * @Attribute IpAddress: The ip address of the load balancer.
     */
    public readonly attrIpAddress: any;

    /**
     * @Attribute LoadBalancerId: The id of load balance created.
     */
    public readonly attrLoadBalancerId: any;

    /**
     * @Attribute NetworkType: The network type of the load balancer. "vpc" or "classic" network.
     */
    public readonly attrNetworkType: any;

    /**
     * @Attribute OrderId: The order ID.
     */
    public readonly attrOrderId: any;

    /**
     * Create a new `ALIYUN::SLB::LoadBalancer`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: LoadBalancerProps = {}, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosLoadBalancer = new RosLoadBalancer(this, id,  {
            resourceGroupId: props.resourceGroupId,
            pricingCycle: props.pricingCycle,
            vSwitchId: props.vSwitchId,
            duration: props.duration,
            deletionProtection: props.deletionProtection ? props.deletionProtection : false,
            autoPay: props.autoPay ? props.autoPay : false,
            payType: props.payType,
            slaveZoneId: props.slaveZoneId,
            modificationProtectionStatus: props.modificationProtectionStatus,
            internetChargeType: props.internetChargeType ? props.internetChargeType : 'paybytraffic',
            loadBalancerSpec: props.loadBalancerSpec,
            loadBalancerName: props.loadBalancerName,
            vpcId: props.vpcId,
            bandwidth: props.bandwidth ? props.bandwidth : 1,
            modificationProtectionReason: props.modificationProtectionReason,
            addressType: props.addressType ? props.addressType : 'internet',
            tags: ros.tagFactory(props.tags),
            masterZoneId: props.masterZoneId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosLoadBalancer;
        this.attrAddressType = rosLoadBalancer.attrAddressType;
        this.attrIpAddress = rosLoadBalancer.attrIpAddress;
        this.attrLoadBalancerId = rosLoadBalancer.attrLoadBalancerId;
        this.attrNetworkType = rosLoadBalancer.attrNetworkType;
        this.attrOrderId = rosLoadBalancer.attrOrderId;
    }
}
