import * as ros from '@alicloud/ros-cdk-core';
import { RosLoadBalancer } from './slb.generated';
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
 * Represents a `LoadBalancer`.
 */
export interface ILoadBalancer extends ros.IResource {
    readonly props: LoadBalancerProps;
    /**
     * Attribute Address: The service IP address of the CLB instance.
     */
    readonly attrAddress: ros.IResolvable | string;
    /**
     * Attribute AddressIpVersion: The version of the IP address. Valid values: ipv4 and ipv6.
     */
    readonly attrAddressIpVersion: ros.IResolvable | string;
    /**
     * Attribute AddressType: The address type of the CLB instance.
     */
    readonly attrAddressType: ros.IResolvable | string;
    /**
     * Attribute AutoReleaseTime: The timestamp generated when the CLB instance is released.
     */
    readonly attrAutoReleaseTime: ros.IResolvable | string;
    /**
     * Attribute BackendServers: The backend servers of the CLB instance.
     */
    readonly attrBackendServers: ros.IResolvable | string;
    /**
     * Attribute Bandwidth: The maximum bandwidth of the Internet-facing CLB instance that is billed on a pay-by-bandwidth basis.
     */
    readonly attrBandwidth: ros.IResolvable | string;
    /**
     * Attribute CreateTime: The time when the CLB instance was created.
     */
    readonly attrCreateTime: ros.IResolvable | string;
    /**
     * Attribute CreateTimeStamp: The timestamp generated when the CA certificate is uploaded.
     */
    readonly attrCreateTimeStamp: ros.IResolvable | string;
    /**
     * Attribute DeleteProtection: Indicates whether deletion protection is enabled for the CLB instance.
     */
    readonly attrDeleteProtection: ros.IResolvable | string;
    /**
     * Attribute EndTime: The time when the CLB instance expires.
     */
    readonly attrEndTime: ros.IResolvable | string;
    /**
     * Attribute EndTimeStamp: The timestamp that indicates the expiration time of the CLB instance.
     */
    readonly attrEndTimeStamp: ros.IResolvable | string;
    /**
     * Attribute InstanceChargeType: Instance billing method.
     */
    readonly attrInstanceChargeType: ros.IResolvable | string;
    /**
     * Attribute InternetChargeType: The metering method of the Internet-facing CLB instance.
     */
    readonly attrInternetChargeType: ros.IResolvable | string;
    /**
     * Attribute ListenerPortsAndProtocal: The ports or protocols of the listeners.
     */
    readonly attrListenerPortsAndProtocal: ros.IResolvable | string;
    /**
     * Attribute ListenerPortsAndProtocol: The ports or protocols of the listeners.
     */
    readonly attrListenerPortsAndProtocol: ros.IResolvable | string;
    /**
     * Attribute LoadBalancerId: The CLB instance ID.
     */
    readonly attrLoadBalancerId: ros.IResolvable | string;
    /**
     * Attribute LoadBalancerName: The name of the CLB instance.
     */
    readonly attrLoadBalancerName: ros.IResolvable | string;
    /**
     * Attribute LoadBalancerSpec: The specification of the CLB instance.
     */
    readonly attrLoadBalancerSpec: ros.IResolvable | string;
    /**
     * Attribute MasterZoneId: The ID of the primary zone to which the CLB instance belongs.
     */
    readonly attrMasterZoneId: ros.IResolvable | string;
    /**
     * Attribute ModificationProtectionReason: The reason why the configuration read-only mode is enabled.
     */
    readonly attrModificationProtectionReason: ros.IResolvable | string;
    /**
     * Attribute ModificationProtectionStatus: Load balancing modifies the protection state.
     */
    readonly attrModificationProtectionStatus: ros.IResolvable | string;
    /**
     * Attribute NetworkType: The network type of the CLB instance.
     */
    readonly attrNetworkType: ros.IResolvable | string;
    /**
     * Attribute PaymentType: Load balancing instance payment type.
     */
    readonly attrPaymentType: ros.IResolvable | string;
    /**
     * Attribute RegionIdAlias: The alias of the region to which the CLB instance belongs.
     */
    readonly attrRegionIdAlias: ros.IResolvable | string;
    /**
     * Attribute RenewalCycUnit: The auto-renewal cycle. Valid values: Year and Month. Default value: Month.
     */
    readonly attrRenewalCycUnit: ros.IResolvable | string;
    /**
     * Attribute RenewalDuration: The auto-renewal duration. This parameter is valid only if RenewalStatus is set to AutoRenewal.
     */
    readonly attrRenewalDuration: ros.IResolvable | string;
    /**
     * Attribute RenewalStatus: Indicates whether auto-renewal is enabled.
     */
    readonly attrRenewalStatus: ros.IResolvable | string;
    /**
     * Attribute ResourceGroupId: The resource group ID.
     */
    readonly attrResourceGroupId: ros.IResolvable | string;
    /**
     * Attribute SlaveZoneId: The ID of the secondary zone to which the CLB instance belongs.
     */
    readonly attrSlaveZoneId: ros.IResolvable | string;
    /**
     * Attribute Tags: The tags of the CLB instance.
     */
    readonly attrTags: ros.IResolvable | string;
    /**
     * Attribute VSwitchId: The ID of the vSwitch to which the internal-facing CLB instance belongs.
     */
    readonly attrVSwitchId: ros.IResolvable | string;
    /**
     * Attribute VpcId: The ID of the virtual private cloud (VPC) where the internal-facing CLB instance is deployed.
     */
    readonly attrVpcId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::SLB::LoadBalancer`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosLoadBalancer`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-slb-loadbalancer
 */
export declare class LoadBalancer extends ros.Resource implements ILoadBalancer {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: LoadBalancerProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute Address: The service IP address of the CLB instance.
     */
    readonly attrAddress: ros.IResolvable | string;
    /**
     * Attribute AddressIpVersion: The version of the IP address. Valid values: ipv4 and ipv6.
     */
    readonly attrAddressIpVersion: ros.IResolvable | string;
    /**
     * Attribute AddressType: The address type of the CLB instance.
     */
    readonly attrAddressType: ros.IResolvable | string;
    /**
     * Attribute AutoReleaseTime: The timestamp generated when the CLB instance is released.
     */
    readonly attrAutoReleaseTime: ros.IResolvable | string;
    /**
     * Attribute BackendServers: The backend servers of the CLB instance.
     */
    readonly attrBackendServers: ros.IResolvable | string;
    /**
     * Attribute Bandwidth: The maximum bandwidth of the Internet-facing CLB instance that is billed on a pay-by-bandwidth basis.
     */
    readonly attrBandwidth: ros.IResolvable | string;
    /**
     * Attribute CreateTime: The time when the CLB instance was created.
     */
    readonly attrCreateTime: ros.IResolvable | string;
    /**
     * Attribute CreateTimeStamp: The timestamp generated when the CA certificate is uploaded.
     */
    readonly attrCreateTimeStamp: ros.IResolvable | string;
    /**
     * Attribute DeleteProtection: Indicates whether deletion protection is enabled for the CLB instance.
     */
    readonly attrDeleteProtection: ros.IResolvable | string;
    /**
     * Attribute EndTime: The time when the CLB instance expires.
     */
    readonly attrEndTime: ros.IResolvable | string;
    /**
     * Attribute EndTimeStamp: The timestamp that indicates the expiration time of the CLB instance.
     */
    readonly attrEndTimeStamp: ros.IResolvable | string;
    /**
     * Attribute InstanceChargeType: Instance billing method.
     */
    readonly attrInstanceChargeType: ros.IResolvable | string;
    /**
     * Attribute InternetChargeType: The metering method of the Internet-facing CLB instance.
     */
    readonly attrInternetChargeType: ros.IResolvable | string;
    /**
     * Attribute ListenerPortsAndProtocal: The ports or protocols of the listeners.
     */
    readonly attrListenerPortsAndProtocal: ros.IResolvable | string;
    /**
     * Attribute ListenerPortsAndProtocol: The ports or protocols of the listeners.
     */
    readonly attrListenerPortsAndProtocol: ros.IResolvable | string;
    /**
     * Attribute LoadBalancerId: The CLB instance ID.
     */
    readonly attrLoadBalancerId: ros.IResolvable | string;
    /**
     * Attribute LoadBalancerName: The name of the CLB instance.
     */
    readonly attrLoadBalancerName: ros.IResolvable | string;
    /**
     * Attribute LoadBalancerSpec: The specification of the CLB instance.
     */
    readonly attrLoadBalancerSpec: ros.IResolvable | string;
    /**
     * Attribute MasterZoneId: The ID of the primary zone to which the CLB instance belongs.
     */
    readonly attrMasterZoneId: ros.IResolvable | string;
    /**
     * Attribute ModificationProtectionReason: The reason why the configuration read-only mode is enabled.
     */
    readonly attrModificationProtectionReason: ros.IResolvable | string;
    /**
     * Attribute ModificationProtectionStatus: Load balancing modifies the protection state.
     */
    readonly attrModificationProtectionStatus: ros.IResolvable | string;
    /**
     * Attribute NetworkType: The network type of the CLB instance.
     */
    readonly attrNetworkType: ros.IResolvable | string;
    /**
     * Attribute PaymentType: Load balancing instance payment type.
     */
    readonly attrPaymentType: ros.IResolvable | string;
    /**
     * Attribute RegionIdAlias: The alias of the region to which the CLB instance belongs.
     */
    readonly attrRegionIdAlias: ros.IResolvable | string;
    /**
     * Attribute RenewalCycUnit: The auto-renewal cycle. Valid values: Year and Month. Default value: Month.
     */
    readonly attrRenewalCycUnit: ros.IResolvable | string;
    /**
     * Attribute RenewalDuration: The auto-renewal duration. This parameter is valid only if RenewalStatus is set to AutoRenewal.
     */
    readonly attrRenewalDuration: ros.IResolvable | string;
    /**
     * Attribute RenewalStatus: Indicates whether auto-renewal is enabled.
     */
    readonly attrRenewalStatus: ros.IResolvable | string;
    /**
     * Attribute ResourceGroupId: The resource group ID.
     */
    readonly attrResourceGroupId: ros.IResolvable | string;
    /**
     * Attribute SlaveZoneId: The ID of the secondary zone to which the CLB instance belongs.
     */
    readonly attrSlaveZoneId: ros.IResolvable | string;
    /**
     * Attribute Tags: The tags of the CLB instance.
     */
    readonly attrTags: ros.IResolvable | string;
    /**
     * Attribute VSwitchId: The ID of the vSwitch to which the internal-facing CLB instance belongs.
     */
    readonly attrVSwitchId: ros.IResolvable | string;
    /**
     * Attribute VpcId: The ID of the virtual private cloud (VPC) where the internal-facing CLB instance is deployed.
     */
    readonly attrVpcId: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: LoadBalancerProps, enableResourcePropertyConstraint?: boolean);
}
