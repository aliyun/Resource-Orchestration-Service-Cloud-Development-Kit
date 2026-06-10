import * as ros from '@alicloud/ros-cdk-core';
import { RosLoadBalancer } from './nlb.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosLoadBalancer as LoadBalancerProperty };

/**
 * Properties for defining a `LoadBalancer`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-nlb-loadbalancer
 */
export interface LoadBalancerProps {

    /**
     * Property loadBalancerId: ID of the LoadBalancer.
     */
    readonly loadBalancerId?: string | ros.IResolvable;

    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}

/**
 * Represents a `LoadBalancer`.
 */
export interface ILoadBalancer extends ros.IResource {
    readonly props: LoadBalancerProps;

    /**
     * Attribute AddressIpVersion: The protocol version.
     */
    readonly attrAddressIpVersion: ros.IResolvable | string;

    /**
     * Attribute AddressType: The IPv4 network type of the NLB instance.
     */
    readonly attrAddressType: ros.IResolvable | string;

    /**
     * Attribute BandwidthPackageId: The ID of the EIP bandwidth plan.
     */
    readonly attrBandwidthPackageId: ros.IResolvable | string;

    /**
     * Attribute Cps: The maximum number of new connections per second supported by the NLB instance in each zone (virtual IP address).
     */
    readonly attrCps: ros.IResolvable | string;

    /**
     * Attribute CreateTime: The time when the NLB instance was created.
     */
    readonly attrCreateTime: ros.IResolvable | string;

    /**
     * Attribute CrossZoneEnabled: Indicates whether the NLB instance is accessible across zones.
     */
    readonly attrCrossZoneEnabled: ros.IResolvable | string;

    /**
     * Attribute DNSName: The domain name of the NLB instance.
     */
    readonly attrDnsName: ros.IResolvable | string;

    /**
     * Attribute DeletionProtectionConfig: The configuration of the deletion protection feature.
     */
    readonly attrDeletionProtectionConfig: ros.IResolvable | string;

    /**
     * Attribute Ipv6AddressType: The IPv6 network type of the NLB instance.
     */
    readonly attrIpv6AddressType: ros.IResolvable | string;

    /**
     * Attribute LoadBalancerBillingConfig: The billing information of the NLB instance.
     */
    readonly attrLoadBalancerBillingConfig: ros.IResolvable | string;

    /**
     * Attribute LoadBalancerBusinessStatus: The status of workloads on the NLB instance.
     */
    readonly attrLoadBalancerBusinessStatus: ros.IResolvable | string;

    /**
     * Attribute LoadBalancerId: ID of the LoadBalancer.
     */
    readonly attrLoadBalancerId: ros.IResolvable | string;

    /**
     * Attribute LoadBalancerName: The NLB instance name.
     */
    readonly attrLoadBalancerName: ros.IResolvable | string;

    /**
     * Attribute LoadBalancerStatus: The NLB instance status.
     */
    readonly attrLoadBalancerStatus: ros.IResolvable | string;

    /**
     * Attribute LoadBalancerType: The type of the Server Load Balancer (SLB) instance. Set the value to network, which specifies NLB.
     */
    readonly attrLoadBalancerType: ros.IResolvable | string;

    /**
     * Attribute ModificationProtectionConfig: The configuration of the configuration read-only mode.
     */
    readonly attrModificationProtectionConfig: ros.IResolvable | string;

    /**
     * Attribute OperationLocks: The information about the locked NLB instance.
     */
    readonly attrOperationLocks: ros.IResolvable | string;

    /**
     * Attribute RegionId: The region ID of the NLB instance.
     */
    readonly attrRegionId: ros.IResolvable | string;

    /**
     * Attribute ResourceGroupId: The ID of the resource group.
     */
    readonly attrResourceGroupId: ros.IResolvable | string;

    /**
     * Attribute SecurityGroupIds: The ID of the security group associated with the NLB instance.
     */
    readonly attrSecurityGroupIds: ros.IResolvable | string;

    /**
     * Attribute Tags: The tags of the resource.
     */
    readonly attrTags: ros.IResolvable | string;

    /**
     * Attribute VpcId: The VPC ID of the NLB instance.
     */
    readonly attrVpcId: ros.IResolvable | string;

    /**
     * Attribute ZoneMappings: The list of zones and vSwitches in the zones.
     */
    readonly attrZoneMappings: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::NLB::LoadBalancer`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosLoadBalancer`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-nlb-loadbalancer
 */
export class LoadBalancer extends ros.Resource implements ILoadBalancer {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: LoadBalancerProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute AddressIpVersion: The protocol version.
     */
    public readonly attrAddressIpVersion: ros.IResolvable | string;

    /**
     * Attribute AddressType: The IPv4 network type of the NLB instance.
     */
    public readonly attrAddressType: ros.IResolvable | string;

    /**
     * Attribute BandwidthPackageId: The ID of the EIP bandwidth plan.
     */
    public readonly attrBandwidthPackageId: ros.IResolvable | string;

    /**
     * Attribute Cps: The maximum number of new connections per second supported by the NLB instance in each zone (virtual IP address).
     */
    public readonly attrCps: ros.IResolvable | string;

    /**
     * Attribute CreateTime: The time when the NLB instance was created.
     */
    public readonly attrCreateTime: ros.IResolvable | string;

    /**
     * Attribute CrossZoneEnabled: Indicates whether the NLB instance is accessible across zones.
     */
    public readonly attrCrossZoneEnabled: ros.IResolvable | string;

    /**
     * Attribute DNSName: The domain name of the NLB instance.
     */
    public readonly attrDnsName: ros.IResolvable | string;

    /**
     * Attribute DeletionProtectionConfig: The configuration of the deletion protection feature.
     */
    public readonly attrDeletionProtectionConfig: ros.IResolvable | string;

    /**
     * Attribute Ipv6AddressType: The IPv6 network type of the NLB instance.
     */
    public readonly attrIpv6AddressType: ros.IResolvable | string;

    /**
     * Attribute LoadBalancerBillingConfig: The billing information of the NLB instance.
     */
    public readonly attrLoadBalancerBillingConfig: ros.IResolvable | string;

    /**
     * Attribute LoadBalancerBusinessStatus: The status of workloads on the NLB instance.
     */
    public readonly attrLoadBalancerBusinessStatus: ros.IResolvable | string;

    /**
     * Attribute LoadBalancerId: ID of the LoadBalancer.
     */
    public readonly attrLoadBalancerId: ros.IResolvable | string;

    /**
     * Attribute LoadBalancerName: The NLB instance name.
     */
    public readonly attrLoadBalancerName: ros.IResolvable | string;

    /**
     * Attribute LoadBalancerStatus: The NLB instance status.
     */
    public readonly attrLoadBalancerStatus: ros.IResolvable | string;

    /**
     * Attribute LoadBalancerType: The type of the Server Load Balancer (SLB) instance. Set the value to network, which specifies NLB.
     */
    public readonly attrLoadBalancerType: ros.IResolvable | string;

    /**
     * Attribute ModificationProtectionConfig: The configuration of the configuration read-only mode.
     */
    public readonly attrModificationProtectionConfig: ros.IResolvable | string;

    /**
     * Attribute OperationLocks: The information about the locked NLB instance.
     */
    public readonly attrOperationLocks: ros.IResolvable | string;

    /**
     * Attribute RegionId: The region ID of the NLB instance.
     */
    public readonly attrRegionId: ros.IResolvable | string;

    /**
     * Attribute ResourceGroupId: The ID of the resource group.
     */
    public readonly attrResourceGroupId: ros.IResolvable | string;

    /**
     * Attribute SecurityGroupIds: The ID of the security group associated with the NLB instance.
     */
    public readonly attrSecurityGroupIds: ros.IResolvable | string;

    /**
     * Attribute Tags: The tags of the resource.
     */
    public readonly attrTags: ros.IResolvable | string;

    /**
     * Attribute VpcId: The VPC ID of the NLB instance.
     */
    public readonly attrVpcId: ros.IResolvable | string;

    /**
     * Attribute ZoneMappings: The list of zones and vSwitches in the zones.
     */
    public readonly attrZoneMappings: ros.IResolvable | string;

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
            loadBalancerId: props.loadBalancerId,
            refreshOptions: props.refreshOptions === undefined || props.refreshOptions === null ? 'Never' : props.refreshOptions,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosLoadBalancer;
        this.attrAddressIpVersion = rosLoadBalancer.attrAddressIpVersion;
        this.attrAddressType = rosLoadBalancer.attrAddressType;
        this.attrBandwidthPackageId = rosLoadBalancer.attrBandwidthPackageId;
        this.attrCps = rosLoadBalancer.attrCps;
        this.attrCreateTime = rosLoadBalancer.attrCreateTime;
        this.attrCrossZoneEnabled = rosLoadBalancer.attrCrossZoneEnabled;
        this.attrDnsName = rosLoadBalancer.attrDnsName;
        this.attrDeletionProtectionConfig = rosLoadBalancer.attrDeletionProtectionConfig;
        this.attrIpv6AddressType = rosLoadBalancer.attrIpv6AddressType;
        this.attrLoadBalancerBillingConfig = rosLoadBalancer.attrLoadBalancerBillingConfig;
        this.attrLoadBalancerBusinessStatus = rosLoadBalancer.attrLoadBalancerBusinessStatus;
        this.attrLoadBalancerId = rosLoadBalancer.attrLoadBalancerId;
        this.attrLoadBalancerName = rosLoadBalancer.attrLoadBalancerName;
        this.attrLoadBalancerStatus = rosLoadBalancer.attrLoadBalancerStatus;
        this.attrLoadBalancerType = rosLoadBalancer.attrLoadBalancerType;
        this.attrModificationProtectionConfig = rosLoadBalancer.attrModificationProtectionConfig;
        this.attrOperationLocks = rosLoadBalancer.attrOperationLocks;
        this.attrRegionId = rosLoadBalancer.attrRegionId;
        this.attrResourceGroupId = rosLoadBalancer.attrResourceGroupId;
        this.attrSecurityGroupIds = rosLoadBalancer.attrSecurityGroupIds;
        this.attrTags = rosLoadBalancer.attrTags;
        this.attrVpcId = rosLoadBalancer.attrVpcId;
        this.attrZoneMappings = rosLoadBalancer.attrZoneMappings;
    }
}
