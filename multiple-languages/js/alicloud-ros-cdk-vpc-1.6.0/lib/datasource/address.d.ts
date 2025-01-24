import * as ros from '@alicloud/ros-cdk-core';
import { RosAddress } from './vpc.generated';
export { RosAddress as AddressProperty };
/**
 * Properties for defining a `Address`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-eip-address
 */
export interface AddressProps {
    /**
     * Property allocationId: The ID of the EIP instance.
     */
    readonly allocationId: string | ros.IResolvable;
    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * Represents a `Address`.
 */
export interface IAddress extends ros.IResource {
    readonly props: AddressProps;
    /**
     * Attribute AddressName: The name of the EIP.
     */
    readonly attrAddressName: ros.IResolvable | string;
    /**
     * Attribute AllocationId: The ID of the EIP instance.
     */
    readonly attrAllocationId: ros.IResolvable | string;
    /**
     * Attribute Bandwidth: The peak bandwidth of the EIP. Unit: Mbps.
     */
    readonly attrBandwidth: ros.IResolvable | string;
    /**
     * Attribute BandwidthPackageBandwidth: The bandwidth value of the Internet shared bandwidth added to the EIP. The unit is Mbps.
     */
    readonly attrBandwidthPackageBandwidth: ros.IResolvable | string;
    /**
     * Attribute BandwidthPackageId: The ID of the added shared bandwidth.
     */
    readonly attrBandwidthPackageId: ros.IResolvable | string;
    /**
     * Attribute BandwidthPackageType: The type of bandwidth. Only **CommonBandwidthPackage** (shared bandwidth) is supported.
     */
    readonly attrBandwidthPackageType: ros.IResolvable | string;
    /**
     * Attribute BusinessStatus: The business status of the EIP instance.
     */
    readonly attrBusinessStatus: ros.IResolvable | string;
    /**
     * Attribute CreateTime: The time when the EIP was created.
     */
    readonly attrCreateTime: ros.IResolvable | string;
    /**
     * Attribute DeletionProtection: Whether the delete protection function is turned on.
     */
    readonly attrDeletionProtection: ros.IResolvable | string;
    /**
     * Attribute Description: The description of the EIP instance.
     */
    readonly attrDescription: ros.IResolvable | string;
    /**
     * Attribute EipBandwidth: AN EIP is added to an Internet shared bandwidth before or exit purchase an Internet shared bandwidth instance after the bandwidth Mbps Set for the bandwidth.
     */
    readonly attrEipBandwidth: ros.IResolvable | string;
    /**
     * Attribute ExpiredTime: Expiration time, format' YYYY-MM-DDThh:mm:ssZ '.
     */
    readonly attrExpiredTime: ros.IResolvable | string;
    /**
     * Attribute HasReservationData: Whether there is renewal data.
     */
    readonly attrHasReservationData: ros.IResolvable | string;
    /**
     * Attribute HdMonitorStatus: Whether the second-level monitoring is enabled for the EIP.
     */
    readonly attrHdMonitorStatus: ros.IResolvable | string;
    /**
     * Attribute InstanceId: The ID of the current bound instance.
     */
    readonly attrInstanceId: ros.IResolvable | string;
    /**
     * Attribute InstanceRegionId: The region ID of the currently bound resource.
     */
    readonly attrInstanceRegionId: ros.IResolvable | string;
    /**
     * Attribute InstanceType: The type of the current bound instance.
     */
    readonly attrInstanceType: ros.IResolvable | string;
    /**
     * Attribute IpAddress: The IP address of the EIP.
     */
    readonly attrIpAddress: ros.IResolvable | string;
    /**
     * Attribute Isp: Service providers.
     */
    readonly attrIsp: ros.IResolvable | string;
    /**
     * Attribute Netmode: Network type.
     */
    readonly attrNetmode: ros.IResolvable | string;
    /**
     * Attribute OperationLocks: Lock details.
     */
    readonly attrOperationLocks: ros.IResolvable | string;
    /**
     * Attribute PaymentType: The billing method of the EIP.
     */
    readonly attrPaymentType: ros.IResolvable | string;
    /**
     * Attribute PublicIpAddressPoolId: The ID of the IP address pool to which the EIP belongs.
     */
    readonly attrPublicIpAddressPoolId: ros.IResolvable | string;
    /**
     * Attribute ReservationActiveTime: The effective time of the renewal fee, in the format of 'YYYY-MM-DDThh:mm:ssZ'.
     */
    readonly attrReservationActiveTime: ros.IResolvable | string;
    /**
     * Attribute ReservationBandwidth: Renewal bandwidth, in Mbps.
     */
    readonly attrReservationBandwidth: ros.IResolvable | string;
    /**
     * Attribute ReservationInternetChargeType: Renewal Payment type.
     */
    readonly attrReservationInternetChargeType: ros.IResolvable | string;
    /**
     * Attribute ReservationOrderType: Renewal order type.
     */
    readonly attrReservationOrderType: ros.IResolvable | string;
    /**
     * Attribute ResourceGroupId: The ID of the resource group.
     */
    readonly attrResourceGroupId: ros.IResolvable | string;
    /**
     * Attribute SecondLimited: Whether a secondary speed limit is configured.
     */
    readonly attrSecondLimited: ros.IResolvable | string;
    /**
     * Attribute SecurityProtectionTypes: Security protection level.
     */
    readonly attrSecurityProtectionTypes: ros.IResolvable | string;
    /**
     * Attribute SegmentInstanceId: The ID of the consecutive EIPs.
     */
    readonly attrSegmentInstanceId: ros.IResolvable | string;
    /**
     * Attribute ServiceManaged: Indicates the resource created for the service account.
     */
    readonly attrServiceManaged: ros.IResolvable | string;
    /**
     * Attribute Tags: The tag of the resource.
     */
    readonly attrTags: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::EIP::Address`, which is used to query the information about a created elastic IP address (EIP).
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosAddress`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-eip-address
 */
export declare class Address extends ros.Resource implements IAddress {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: AddressProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute AddressName: The name of the EIP.
     */
    readonly attrAddressName: ros.IResolvable | string;
    /**
     * Attribute AllocationId: The ID of the EIP instance.
     */
    readonly attrAllocationId: ros.IResolvable | string;
    /**
     * Attribute Bandwidth: The peak bandwidth of the EIP. Unit: Mbps.
     */
    readonly attrBandwidth: ros.IResolvable | string;
    /**
     * Attribute BandwidthPackageBandwidth: The bandwidth value of the Internet shared bandwidth added to the EIP. The unit is Mbps.
     */
    readonly attrBandwidthPackageBandwidth: ros.IResolvable | string;
    /**
     * Attribute BandwidthPackageId: The ID of the added shared bandwidth.
     */
    readonly attrBandwidthPackageId: ros.IResolvable | string;
    /**
     * Attribute BandwidthPackageType: The type of bandwidth. Only **CommonBandwidthPackage** (shared bandwidth) is supported.
     */
    readonly attrBandwidthPackageType: ros.IResolvable | string;
    /**
     * Attribute BusinessStatus: The business status of the EIP instance.
     */
    readonly attrBusinessStatus: ros.IResolvable | string;
    /**
     * Attribute CreateTime: The time when the EIP was created.
     */
    readonly attrCreateTime: ros.IResolvable | string;
    /**
     * Attribute DeletionProtection: Whether the delete protection function is turned on.
     */
    readonly attrDeletionProtection: ros.IResolvable | string;
    /**
     * Attribute Description: The description of the EIP instance.
     */
    readonly attrDescription: ros.IResolvable | string;
    /**
     * Attribute EipBandwidth: AN EIP is added to an Internet shared bandwidth before or exit purchase an Internet shared bandwidth instance after the bandwidth Mbps Set for the bandwidth.
     */
    readonly attrEipBandwidth: ros.IResolvable | string;
    /**
     * Attribute ExpiredTime: Expiration time, format' YYYY-MM-DDThh:mm:ssZ '.
     */
    readonly attrExpiredTime: ros.IResolvable | string;
    /**
     * Attribute HasReservationData: Whether there is renewal data.
     */
    readonly attrHasReservationData: ros.IResolvable | string;
    /**
     * Attribute HdMonitorStatus: Whether the second-level monitoring is enabled for the EIP.
     */
    readonly attrHdMonitorStatus: ros.IResolvable | string;
    /**
     * Attribute InstanceId: The ID of the current bound instance.
     */
    readonly attrInstanceId: ros.IResolvable | string;
    /**
     * Attribute InstanceRegionId: The region ID of the currently bound resource.
     */
    readonly attrInstanceRegionId: ros.IResolvable | string;
    /**
     * Attribute InstanceType: The type of the current bound instance.
     */
    readonly attrInstanceType: ros.IResolvable | string;
    /**
     * Attribute IpAddress: The IP address of the EIP.
     */
    readonly attrIpAddress: ros.IResolvable | string;
    /**
     * Attribute Isp: Service providers.
     */
    readonly attrIsp: ros.IResolvable | string;
    /**
     * Attribute Netmode: Network type.
     */
    readonly attrNetmode: ros.IResolvable | string;
    /**
     * Attribute OperationLocks: Lock details.
     */
    readonly attrOperationLocks: ros.IResolvable | string;
    /**
     * Attribute PaymentType: The billing method of the EIP.
     */
    readonly attrPaymentType: ros.IResolvable | string;
    /**
     * Attribute PublicIpAddressPoolId: The ID of the IP address pool to which the EIP belongs.
     */
    readonly attrPublicIpAddressPoolId: ros.IResolvable | string;
    /**
     * Attribute ReservationActiveTime: The effective time of the renewal fee, in the format of 'YYYY-MM-DDThh:mm:ssZ'.
     */
    readonly attrReservationActiveTime: ros.IResolvable | string;
    /**
     * Attribute ReservationBandwidth: Renewal bandwidth, in Mbps.
     */
    readonly attrReservationBandwidth: ros.IResolvable | string;
    /**
     * Attribute ReservationInternetChargeType: Renewal Payment type.
     */
    readonly attrReservationInternetChargeType: ros.IResolvable | string;
    /**
     * Attribute ReservationOrderType: Renewal order type.
     */
    readonly attrReservationOrderType: ros.IResolvable | string;
    /**
     * Attribute ResourceGroupId: The ID of the resource group.
     */
    readonly attrResourceGroupId: ros.IResolvable | string;
    /**
     * Attribute SecondLimited: Whether a secondary speed limit is configured.
     */
    readonly attrSecondLimited: ros.IResolvable | string;
    /**
     * Attribute SecurityProtectionTypes: Security protection level.
     */
    readonly attrSecurityProtectionTypes: ros.IResolvable | string;
    /**
     * Attribute SegmentInstanceId: The ID of the consecutive EIPs.
     */
    readonly attrSegmentInstanceId: ros.IResolvable | string;
    /**
     * Attribute ServiceManaged: Indicates the resource created for the service account.
     */
    readonly attrServiceManaged: ros.IResolvable | string;
    /**
     * Attribute Tags: The tag of the resource.
     */
    readonly attrTags: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: AddressProps, enableResourcePropertyConstraint?: boolean);
}
