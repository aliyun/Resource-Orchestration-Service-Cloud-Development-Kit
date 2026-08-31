import * as ros from '@alicloud/ros-cdk-core';
import { RosLoadBalancer } from './slb.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosLoadBalancer as LoadBalancerProperty };

/**
 * Properties for defining a `LoadBalancer`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-slb-loadbalancer
 */
export interface LoadBalancerProps {

    /**
     * Property addressIpVersion: The IP version of the CLB instance. Valid values: ipv4 and ipv6.
     */
    readonly addressIpVersion?: string | ros.IResolvable;

    /**
     * Property addressType: The network type of the CLB instance. Valid values:
     * - **internet** (default): After an internet-facing CLB instance is created, the system assigns a public IP address to the CLB instance. Then, the CLB instance can forward requests over the Internet.
     * - **intranet**: After an internal-facing CLB instance is created, the system assigns a private IP address to the CLB instance. Then, the CLB instance can forward requests only over the internal networks.
     */
    readonly addressType?: string | ros.IResolvable;

    /**
     * Property bandwidth: The bandwidth for network, unit in Mbps(Mega bit per second). Default is 1. If InternetChargeType is specified as "paybytraffic", this property will be ignore and please specify the "Bandwidth" in ALIYUN::SLB::Listener.
     */
    readonly bandwidth?: number | ros.IResolvable;

    /**
     * Property deletionProtection: Whether to enable deletion protection.
     */
    readonly deletionProtection?: boolean | ros.IResolvable;

    /**
     * Property instanceChargeType: The resource metering method for the CLB instance. Valid value:
     * - PayByCLCU: pay-by-data-transfer
     * > As of 00:00:00 (UTC+8) on June 1, 2025, pay-by-specification CLB instances are
     * no longer available for purchase. For more details, see [](t2857909.xdita#).
     */
    readonly instanceChargeType?: string | ros.IResolvable;

    /**
     * Property internetChargeType: The metering method of the Internet-facing CLB instance. Valid values:
     * - **paybytraffic** (default): If you set the value to paybytraffic, you do not need to specify Bandwidth. Even if you specify Bandwidth, the value does not take effect.
     * - **paybybandwidth**: pay-by-bandwidth.
     * **Note** If you set PayType to PayOnDemand and set InstanceChargeType to PayByCLCU, you must set InternetChargeType to paybytraffic.
     */
    readonly internetChargeType?: string | ros.IResolvable;

    /**
     * Property loadBalancerName: The CLB instance name.
     * The name must be 1 to 80 characters in length, and can contain digits, periods
     * (.), underscores (_), and hyphens (-). It must start with a letter.
     * If you do not specify this parameter, the system automatically assigns a name to
     * the CLB instance.
     */
    readonly loadBalancerName?: string | ros.IResolvable;

    /**
     * Property loadBalancerSpec: The specification of the CLB instance. Valid values:
     * - slb.s1.small
     * - slb.s2.small
     * - slb.s2.medium
     * - slb.s3.small
     * - slb.s3.medium
     * - slb.s3.large
     * > * If InstanceChargeType is set to PayByCLCU, this parameter is invalid and you
     * do not need to specify this parameter.
     * >
     * > * As of 00:00:00 (UTC+8) on June 1, 2025, pay-by-specification CLB instances
     * are no longer available for purchase. For more details, see [](t2857909.xdita#).
     */
    readonly loadBalancerSpec?: string | ros.IResolvable;

    /**
     * Property masterZoneId: The master zone id to create load balancer instance.
     */
    readonly masterZoneId?: string | ros.IResolvable;

    /**
     * Property modificationProtectionReason: The reason for enabling the configuration read-only mode. The reason must be 1 to
     * 80 characters in length. It must start with a letter and can contain letters,
     * digits, periods (.), underscores (_), and hyphens (-).
     * > This parameter takes effect only when ModificationProtectionStatus is set to
     * ConsoleProtection.
     */
    readonly modificationProtectionReason?: string | ros.IResolvable;

    /**
     * Property modificationProtectionStatus: Specifies whether to enable the configuration read-only mode. Valid values:
     * - NonProtection: disables the configuration read-only mode. After you disable the
     * configuration read-only mode, the value of ModificationProtectionReason is
     * cleared.
     * - ConsoleProtection: enables the configuration read-only mode.
     * > If you set this parameter to ConsoleProtection, you cannot modify instance
     * configurations in the CLB console. However, you can modify instance
     * configurations by calling API operations.
     */
    readonly modificationProtectionStatus?: string | ros.IResolvable;

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
     * Property vSwitchId: The ID of the vSwitch to which the CLB instance belongs.
     * If you want to deploy the CLB instance in a VPC, this parameter is required. If
     * this parameter is specified, AddessType is set to intranet by default.
     * > The vSwitch must be in the primary zone.
     */
    readonly vSwitchId?: string | ros.IResolvable;
}

/**
 * Represents a `LoadBalancer`.
 */
export interface ILoadBalancer extends ros.IResource {
    readonly props: LoadBalancerProps;

    /**
     * Attribute AddressIPVersion: IP version
     */
    readonly attrAddressIpVersion: ros.IResolvable | string;

    /**
     * Attribute AddressType: The address type of the load balancer. "intranet" or "internet".
     */
    readonly attrAddressType: ros.IResolvable | string;

    /**
     * Attribute Bandwidth: The bandwidth for network
     */
    readonly attrBandwidth: ros.IResolvable | string;

    /**
     * Attribute IpAddress: The ip address of the load balancer.
     */
    readonly attrIpAddress: ros.IResolvable | string;

    /**
     * Attribute LoadBalancerId: The id of load balance created.
     */
    readonly attrLoadBalancerId: ros.IResolvable | string;

    /**
     * Attribute LoadBalancerName: Name of created load balancer.
     */
    readonly attrLoadBalancerName: ros.IResolvable | string;

    /**
     * Attribute LoadBalancerSpec: The specification of the Server Load Balancer instance
     */
    readonly attrLoadBalancerSpec: ros.IResolvable | string;

    /**
     * Attribute MasterZoneId: The master zone id to create load balancer instance.
     */
    readonly attrMasterZoneId: ros.IResolvable | string;

    /**
     * Attribute NetworkType: The network type of the load balancer. "vpc" or "classic" network.
     */
    readonly attrNetworkType: ros.IResolvable | string;

    /**
     * Attribute OrderId: The order ID.
     */
    readonly attrOrderId: ros.IResolvable | string;

    /**
     * Attribute PayType: The billing method of the instance to be created.
     */
    readonly attrPayType: ros.IResolvable | string;

    /**
     * Attribute ResourceGroupId: Resource group id.
     */
    readonly attrResourceGroupId: ros.IResolvable | string;

    /**
     * Attribute SlaveZoneId: The slave zone id to create load balancer instance.
     */
    readonly attrSlaveZoneId: ros.IResolvable | string;

    /**
     * Attribute VSwitchId: VSwitch id
     */
    readonly attrVSwitchId: ros.IResolvable | string;

    /**
     * Attribute VpcId: Vpc id
     */
    readonly attrVpcId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::SLB::LoadBalancer`Use the , which resource type to create an SLB instance.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosLoadBalancer`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-slb-loadbalancer
 */
export class LoadBalancer extends ros.Resource implements ILoadBalancer {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: LoadBalancerProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute AddressIPVersion: IP version
     */
    public readonly attrAddressIpVersion: ros.IResolvable | string;

    /**
     * Attribute AddressType: The address type of the load balancer. "intranet" or "internet".
     */
    public readonly attrAddressType: ros.IResolvable | string;

    /**
     * Attribute Bandwidth: The bandwidth for network
     */
    public readonly attrBandwidth: ros.IResolvable | string;

    /**
     * Attribute IpAddress: The ip address of the load balancer.
     */
    public readonly attrIpAddress: ros.IResolvable | string;

    /**
     * Attribute LoadBalancerId: The id of load balance created.
     */
    public readonly attrLoadBalancerId: ros.IResolvable | string;

    /**
     * Attribute LoadBalancerName: Name of created load balancer.
     */
    public readonly attrLoadBalancerName: ros.IResolvable | string;

    /**
     * Attribute LoadBalancerSpec: The specification of the Server Load Balancer instance
     */
    public readonly attrLoadBalancerSpec: ros.IResolvable | string;

    /**
     * Attribute MasterZoneId: The master zone id to create load balancer instance.
     */
    public readonly attrMasterZoneId: ros.IResolvable | string;

    /**
     * Attribute NetworkType: The network type of the load balancer. "vpc" or "classic" network.
     */
    public readonly attrNetworkType: ros.IResolvable | string;

    /**
     * Attribute OrderId: The order ID.
     */
    public readonly attrOrderId: ros.IResolvable | string;

    /**
     * Attribute PayType: The billing method of the instance to be created.
     */
    public readonly attrPayType: ros.IResolvable | string;

    /**
     * Attribute ResourceGroupId: Resource group id.
     */
    public readonly attrResourceGroupId: ros.IResolvable | string;

    /**
     * Attribute SlaveZoneId: The slave zone id to create load balancer instance.
     */
    public readonly attrSlaveZoneId: ros.IResolvable | string;

    /**
     * Attribute VSwitchId: VSwitch id
     */
    public readonly attrVSwitchId: ros.IResolvable | string;

    /**
     * Attribute VpcId: Vpc id
     */
    public readonly attrVpcId: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: LoadBalancerProps = {}, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosLoadBalancer = new RosLoadBalancer(this, id,  {
            resourceGroupId: props.resourceGroupId,
            instanceChargeType: props.instanceChargeType,
            vSwitchId: props.vSwitchId,
            addressIpVersion: props.addressIpVersion,
            deletionProtection: props.deletionProtection === undefined || props.deletionProtection === null ? false : props.deletionProtection,
            slaveZoneId: props.slaveZoneId,
            modificationProtectionStatus: props.modificationProtectionStatus,
            internetChargeType: props.internetChargeType === undefined || props.internetChargeType === null ? 'paybytraffic' : props.internetChargeType,
            loadBalancerSpec: props.loadBalancerSpec,
            loadBalancerName: props.loadBalancerName,
            vpcId: props.vpcId,
            bandwidth: props.bandwidth === undefined || props.bandwidth === null ? 1 : props.bandwidth,
            modificationProtectionReason: props.modificationProtectionReason,
            addressType: props.addressType === undefined || props.addressType === null ? 'internet' : props.addressType,
            masterZoneId: props.masterZoneId,
            tags: props.tags,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosLoadBalancer;
        this.attrAddressIpVersion = rosLoadBalancer.attrAddressIpVersion;
        this.attrAddressType = rosLoadBalancer.attrAddressType;
        this.attrBandwidth = rosLoadBalancer.attrBandwidth;
        this.attrIpAddress = rosLoadBalancer.attrIpAddress;
        this.attrLoadBalancerId = rosLoadBalancer.attrLoadBalancerId;
        this.attrLoadBalancerName = rosLoadBalancer.attrLoadBalancerName;
        this.attrLoadBalancerSpec = rosLoadBalancer.attrLoadBalancerSpec;
        this.attrMasterZoneId = rosLoadBalancer.attrMasterZoneId;
        this.attrNetworkType = rosLoadBalancer.attrNetworkType;
        this.attrOrderId = rosLoadBalancer.attrOrderId;
        this.attrPayType = rosLoadBalancer.attrPayType;
        this.attrResourceGroupId = rosLoadBalancer.attrResourceGroupId;
        this.attrSlaveZoneId = rosLoadBalancer.attrSlaveZoneId;
        this.attrVSwitchId = rosLoadBalancer.attrVSwitchId;
        this.attrVpcId = rosLoadBalancer.attrVpcId;
    }
}
