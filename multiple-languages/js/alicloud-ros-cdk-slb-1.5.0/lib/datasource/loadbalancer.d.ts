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
 * This class encapsulates and extends the ROS resource type `DATASOURCE::SLB::LoadBalancer`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosLoadBalancer`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-slb-loadbalancer
 */
export declare class LoadBalancer extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: LoadBalancerProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute Address: The service IP address of the CLB instance.
     */
    readonly attrAddress: ros.IResolvable;
    /**
     * Attribute AddressIpVersion: The version of the IP address. Valid values: ipv4 and ipv6.
     */
    readonly attrAddressIpVersion: ros.IResolvable;
    /**
     * Attribute AddressType: The address type of the CLB instance.
     */
    readonly attrAddressType: ros.IResolvable;
    /**
     * Attribute AutoReleaseTime: The timestamp generated when the CLB instance is released.
     */
    readonly attrAutoReleaseTime: ros.IResolvable;
    /**
     * Attribute BackendServers: The backend servers of the CLB instance.
     */
    readonly attrBackendServers: ros.IResolvable;
    /**
     * Attribute Bandwidth: The maximum bandwidth of the Internet-facing CLB instance that is billed on a pay-by-bandwidth basis.
     */
    readonly attrBandwidth: ros.IResolvable;
    /**
     * Attribute CreateTime: The time when the CLB instance was created.
     */
    readonly attrCreateTime: ros.IResolvable;
    /**
     * Attribute CreateTimeStamp: The timestamp generated when the CA certificate is uploaded.
     */
    readonly attrCreateTimeStamp: ros.IResolvable;
    /**
     * Attribute DeleteProtection: Indicates whether deletion protection is enabled for the CLB instance.
     */
    readonly attrDeleteProtection: ros.IResolvable;
    /**
     * Attribute EndTime: The time when the CLB instance expires.
     */
    readonly attrEndTime: ros.IResolvable;
    /**
     * Attribute EndTimeStamp: The timestamp that indicates the expiration time of the CLB instance.
     */
    readonly attrEndTimeStamp: ros.IResolvable;
    /**
     * Attribute InstanceChargeType: Instance billing method.
     */
    readonly attrInstanceChargeType: ros.IResolvable;
    /**
     * Attribute InternetChargeType: The metering method of the Internet-facing CLB instance.
     */
    readonly attrInternetChargeType: ros.IResolvable;
    /**
     * Attribute ListenerPortsAndProtocal: The ports or protocols of the listeners.
     */
    readonly attrListenerPortsAndProtocal: ros.IResolvable;
    /**
     * Attribute ListenerPortsAndProtocol: The ports or protocols of the listeners.
     */
    readonly attrListenerPortsAndProtocol: ros.IResolvable;
    /**
     * Attribute LoadBalancerId: The CLB instance ID.
     */
    readonly attrLoadBalancerId: ros.IResolvable;
    /**
     * Attribute LoadBalancerName: The name of the CLB instance.
     */
    readonly attrLoadBalancerName: ros.IResolvable;
    /**
     * Attribute LoadBalancerSpec: The specification of the CLB instance.
     */
    readonly attrLoadBalancerSpec: ros.IResolvable;
    /**
     * Attribute MasterZoneId: The ID of the primary zone to which the CLB instance belongs.
     */
    readonly attrMasterZoneId: ros.IResolvable;
    /**
     * Attribute ModificationProtectionReason: The reason why the configuration read-only mode is enabled.
     */
    readonly attrModificationProtectionReason: ros.IResolvable;
    /**
     * Attribute ModificationProtectionStatus: Load balancing modifies the protection state.
     */
    readonly attrModificationProtectionStatus: ros.IResolvable;
    /**
     * Attribute NetworkType: The network type of the CLB instance.
     */
    readonly attrNetworkType: ros.IResolvable;
    /**
     * Attribute PaymentType: Load balancing instance payment type.
     */
    readonly attrPaymentType: ros.IResolvable;
    /**
     * Attribute RegionIdAlias: The alias of the region to which the CLB instance belongs.
     */
    readonly attrRegionIdAlias: ros.IResolvable;
    /**
     * Attribute RenewalCycUnit: The auto-renewal cycle. Valid values: Year and Month. Default value: Month.
     */
    readonly attrRenewalCycUnit: ros.IResolvable;
    /**
     * Attribute RenewalDuration: The auto-renewal duration. This parameter is valid only if RenewalStatus is set to AutoRenewal.
     */
    readonly attrRenewalDuration: ros.IResolvable;
    /**
     * Attribute RenewalStatus: Indicates whether auto-renewal is enabled.
     */
    readonly attrRenewalStatus: ros.IResolvable;
    /**
     * Attribute ResourceGroupId: The resource group ID.
     */
    readonly attrResourceGroupId: ros.IResolvable;
    /**
     * Attribute SlaveZoneId: The ID of the secondary zone to which the CLB instance belongs.
     */
    readonly attrSlaveZoneId: ros.IResolvable;
    /**
     * Attribute Tags: The tags of the CLB instance.
     */
    readonly attrTags: ros.IResolvable;
    /**
     * Attribute VSwitchId: The ID of the vSwitch to which the internal-facing CLB instance belongs.
     */
    readonly attrVSwitchId: ros.IResolvable;
    /**
     * Attribute VpcId: The ID of the virtual private cloud (VPC) where the internal-facing CLB instance is deployed.
     */
    readonly attrVpcId: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: LoadBalancerProps, enableResourcePropertyConstraint?: boolean);
}
