import * as ros from '@alicloud/ros-cdk-core';
import { RosLoadBalancer } from './slb.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosLoadBalancer as LoadBalancerProperty };

/**
 * Properties for defining a `LoadBalancer`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-slb-loadbalancer
 */
export interface LoadBalancerProps {

    /**
     * Property loadBalancerId: The CLB instance ID.
     */
    readonly loadBalancerId: string | ros.IResolvable;

    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}

/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::SLB::LoadBalancer`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosLoadBalancer`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-slb-loadbalancer
 */
export class LoadBalancer extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: LoadBalancerProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute Address: The service IP address of the CLB instance.
     */
    public readonly attrAddress: ros.IResolvable;

    /**
     * Attribute AddressIpVersion: The version of the IP address. Valid values: ipv4 and ipv6.
     */
    public readonly attrAddressIpVersion: ros.IResolvable;

    /**
     * Attribute AddressType: The address type of the CLB instance.
     */
    public readonly attrAddressType: ros.IResolvable;

    /**
     * Attribute AutoReleaseTime: The timestamp generated when the CLB instance is released.
     */
    public readonly attrAutoReleaseTime: ros.IResolvable;

    /**
     * Attribute BackendServers: The backend servers of the CLB instance.
     */
    public readonly attrBackendServers: ros.IResolvable;

    /**
     * Attribute Bandwidth: The maximum bandwidth of the Internet-facing CLB instance that is billed on a pay-by-bandwidth basis.
     */
    public readonly attrBandwidth: ros.IResolvable;

    /**
     * Attribute CreateTime: The time when the CLB instance was created.
     */
    public readonly attrCreateTime: ros.IResolvable;

    /**
     * Attribute CreateTimeStamp: The timestamp generated when the CA certificate is uploaded.
     */
    public readonly attrCreateTimeStamp: ros.IResolvable;

    /**
     * Attribute DeleteProtection: Indicates whether deletion protection is enabled for the CLB instance.
     */
    public readonly attrDeleteProtection: ros.IResolvable;

    /**
     * Attribute EndTime: The time when the CLB instance expires.
     */
    public readonly attrEndTime: ros.IResolvable;

    /**
     * Attribute EndTimeStamp: The timestamp that indicates the expiration time of the CLB instance.
     */
    public readonly attrEndTimeStamp: ros.IResolvable;

    /**
     * Attribute InstanceChargeType: Instance billing method.
     */
    public readonly attrInstanceChargeType: ros.IResolvable;

    /**
     * Attribute InternetChargeType: The metering method of the Internet-facing CLB instance.
     */
    public readonly attrInternetChargeType: ros.IResolvable;

    /**
     * Attribute ListenerPortsAndProtocal: The ports or protocols of the listeners.
     */
    public readonly attrListenerPortsAndProtocal: ros.IResolvable;

    /**
     * Attribute ListenerPortsAndProtocol: The ports or protocols of the listeners.
     */
    public readonly attrListenerPortsAndProtocol: ros.IResolvable;

    /**
     * Attribute LoadBalancerId: The CLB instance ID.
     */
    public readonly attrLoadBalancerId: ros.IResolvable;

    /**
     * Attribute LoadBalancerName: The name of the CLB instance.
     */
    public readonly attrLoadBalancerName: ros.IResolvable;

    /**
     * Attribute LoadBalancerSpec: The specification of the CLB instance.
     */
    public readonly attrLoadBalancerSpec: ros.IResolvable;

    /**
     * Attribute MasterZoneId: The ID of the primary zone to which the CLB instance belongs.
     */
    public readonly attrMasterZoneId: ros.IResolvable;

    /**
     * Attribute ModificationProtectionReason: The reason why the configuration read-only mode is enabled.
     */
    public readonly attrModificationProtectionReason: ros.IResolvable;

    /**
     * Attribute ModificationProtectionStatus: Load balancing modifies the protection state.
     */
    public readonly attrModificationProtectionStatus: ros.IResolvable;

    /**
     * Attribute NetworkType: The network type of the CLB instance.
     */
    public readonly attrNetworkType: ros.IResolvable;

    /**
     * Attribute PaymentType: Load balancing instance payment type.
     */
    public readonly attrPaymentType: ros.IResolvable;

    /**
     * Attribute RegionIdAlias: The alias of the region to which the CLB instance belongs.
     */
    public readonly attrRegionIdAlias: ros.IResolvable;

    /**
     * Attribute RenewalCycUnit: The auto-renewal cycle. Valid values: Year and Month. Default value: Month.
     */
    public readonly attrRenewalCycUnit: ros.IResolvable;

    /**
     * Attribute RenewalDuration: The auto-renewal duration. This parameter is valid only if RenewalStatus is set to AutoRenewal.
     */
    public readonly attrRenewalDuration: ros.IResolvable;

    /**
     * Attribute RenewalStatus: Indicates whether auto-renewal is enabled.
     */
    public readonly attrRenewalStatus: ros.IResolvable;

    /**
     * Attribute ResourceGroupId: The resource group ID.
     */
    public readonly attrResourceGroupId: ros.IResolvable;

    /**
     * Attribute SlaveZoneId: The ID of the secondary zone to which the CLB instance belongs.
     */
    public readonly attrSlaveZoneId: ros.IResolvable;

    /**
     * Attribute Tags: The tags of the CLB instance.
     */
    public readonly attrTags: ros.IResolvable;

    /**
     * Attribute VSwitchId: The ID of the vSwitch to which the internal-facing CLB instance belongs.
     */
    public readonly attrVSwitchId: ros.IResolvable;

    /**
     * Attribute VpcId: The ID of the virtual private cloud (VPC) where the internal-facing CLB instance is deployed.
     */
    public readonly attrVpcId: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: LoadBalancerProps, enableResourcePropertyConstraint:boolean = true) {
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
        this.attrAddress = rosLoadBalancer.attrAddress;
        this.attrAddressIpVersion = rosLoadBalancer.attrAddressIpVersion;
        this.attrAddressType = rosLoadBalancer.attrAddressType;
        this.attrAutoReleaseTime = rosLoadBalancer.attrAutoReleaseTime;
        this.attrBackendServers = rosLoadBalancer.attrBackendServers;
        this.attrBandwidth = rosLoadBalancer.attrBandwidth;
        this.attrCreateTime = rosLoadBalancer.attrCreateTime;
        this.attrCreateTimeStamp = rosLoadBalancer.attrCreateTimeStamp;
        this.attrDeleteProtection = rosLoadBalancer.attrDeleteProtection;
        this.attrEndTime = rosLoadBalancer.attrEndTime;
        this.attrEndTimeStamp = rosLoadBalancer.attrEndTimeStamp;
        this.attrInstanceChargeType = rosLoadBalancer.attrInstanceChargeType;
        this.attrInternetChargeType = rosLoadBalancer.attrInternetChargeType;
        this.attrListenerPortsAndProtocal = rosLoadBalancer.attrListenerPortsAndProtocal;
        this.attrListenerPortsAndProtocol = rosLoadBalancer.attrListenerPortsAndProtocol;
        this.attrLoadBalancerId = rosLoadBalancer.attrLoadBalancerId;
        this.attrLoadBalancerName = rosLoadBalancer.attrLoadBalancerName;
        this.attrLoadBalancerSpec = rosLoadBalancer.attrLoadBalancerSpec;
        this.attrMasterZoneId = rosLoadBalancer.attrMasterZoneId;
        this.attrModificationProtectionReason = rosLoadBalancer.attrModificationProtectionReason;
        this.attrModificationProtectionStatus = rosLoadBalancer.attrModificationProtectionStatus;
        this.attrNetworkType = rosLoadBalancer.attrNetworkType;
        this.attrPaymentType = rosLoadBalancer.attrPaymentType;
        this.attrRegionIdAlias = rosLoadBalancer.attrRegionIdAlias;
        this.attrRenewalCycUnit = rosLoadBalancer.attrRenewalCycUnit;
        this.attrRenewalDuration = rosLoadBalancer.attrRenewalDuration;
        this.attrRenewalStatus = rosLoadBalancer.attrRenewalStatus;
        this.attrResourceGroupId = rosLoadBalancer.attrResourceGroupId;
        this.attrSlaveZoneId = rosLoadBalancer.attrSlaveZoneId;
        this.attrTags = rosLoadBalancer.attrTags;
        this.attrVSwitchId = rosLoadBalancer.attrVSwitchId;
        this.attrVpcId = rosLoadBalancer.attrVpcId;
    }
}
