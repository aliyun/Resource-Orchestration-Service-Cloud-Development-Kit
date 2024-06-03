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
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::EIP::Address`, which is used to query the information about a created elastic IP address (EIP).
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosAddress`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-eip-address
 */
export declare class Address extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: AddressProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute AddressName: The name of the EIP.
     */
    readonly attrAddressName: ros.IResolvable;
    /**
     * Attribute AllocationId: The ID of the EIP instance.
     */
    readonly attrAllocationId: ros.IResolvable;
    /**
     * Attribute Bandwidth: The peak bandwidth of the EIP. Unit: Mbps.
     */
    readonly attrBandwidth: ros.IResolvable;
    /**
     * Attribute BandwidthPackageBandwidth: The bandwidth value of the Internet shared bandwidth added to the EIP. The unit is Mbps.
     */
    readonly attrBandwidthPackageBandwidth: ros.IResolvable;
    /**
     * Attribute BandwidthPackageId: The ID of the added shared bandwidth.
     */
    readonly attrBandwidthPackageId: ros.IResolvable;
    /**
     * Attribute BandwidthPackageType: The type of bandwidth. Only **CommonBandwidthPackage** (shared bandwidth) is supported.
     */
    readonly attrBandwidthPackageType: ros.IResolvable;
    /**
     * Attribute BusinessStatus: The business status of the EIP instance.
     */
    readonly attrBusinessStatus: ros.IResolvable;
    /**
     * Attribute CreateTime: The time when the EIP was created.
     */
    readonly attrCreateTime: ros.IResolvable;
    /**
     * Attribute DeletionProtection: Whether the delete protection function is turned on.
     */
    readonly attrDeletionProtection: ros.IResolvable;
    /**
     * Attribute Description: The description of the EIP instance.
     */
    readonly attrDescription: ros.IResolvable;
    /**
     * Attribute EipBandwidth: AN EIP is added to an Internet shared bandwidth before or exit purchase an Internet shared bandwidth instance after the bandwidth Mbps Set for the bandwidth.
     */
    readonly attrEipBandwidth: ros.IResolvable;
    /**
     * Attribute ExpiredTime: Expiration time, format' YYYY-MM-DDThh:mm:ssZ '.
     */
    readonly attrExpiredTime: ros.IResolvable;
    /**
     * Attribute HasReservationData: Whether there is renewal data.
     */
    readonly attrHasReservationData: ros.IResolvable;
    /**
     * Attribute HdMonitorStatus: Whether the second-level monitoring is enabled for the EIP.
     */
    readonly attrHdMonitorStatus: ros.IResolvable;
    /**
     * Attribute InstanceId: The ID of the current bound instance.
     */
    readonly attrInstanceId: ros.IResolvable;
    /**
     * Attribute InstanceRegionId: The region ID of the currently bound resource.
     */
    readonly attrInstanceRegionId: ros.IResolvable;
    /**
     * Attribute InstanceType: The type of the current bound instance.
     */
    readonly attrInstanceType: ros.IResolvable;
    /**
     * Attribute IpAddress: The IP address of the EIP.
     */
    readonly attrIpAddress: ros.IResolvable;
    /**
     * Attribute Isp: Service providers.
     */
    readonly attrIsp: ros.IResolvable;
    /**
     * Attribute Netmode: Network type.
     */
    readonly attrNetmode: ros.IResolvable;
    /**
     * Attribute OperationLocks: Lock details.
     */
    readonly attrOperationLocks: ros.IResolvable;
    /**
     * Attribute PaymentType: The billing method of the EIP.
     */
    readonly attrPaymentType: ros.IResolvable;
    /**
     * Attribute PublicIpAddressPoolId: The ID of the IP address pool to which the EIP belongs.
     */
    readonly attrPublicIpAddressPoolId: ros.IResolvable;
    /**
     * Attribute ReservationActiveTime: The effective time of the renewal fee, in the format of 'YYYY-MM-DDThh:mm:ssZ'.
     */
    readonly attrReservationActiveTime: ros.IResolvable;
    /**
     * Attribute ReservationBandwidth: Renewal bandwidth, in Mbps.
     */
    readonly attrReservationBandwidth: ros.IResolvable;
    /**
     * Attribute ReservationInternetChargeType: Renewal Payment type.
     */
    readonly attrReservationInternetChargeType: ros.IResolvable;
    /**
     * Attribute ReservationOrderType: Renewal order type.
     */
    readonly attrReservationOrderType: ros.IResolvable;
    /**
     * Attribute ResourceGroupId: The ID of the resource group.
     */
    readonly attrResourceGroupId: ros.IResolvable;
    /**
     * Attribute SecondLimited: Whether a secondary speed limit is configured.
     */
    readonly attrSecondLimited: ros.IResolvable;
    /**
     * Attribute SecurityProtectionTypes: Security protection level.
     */
    readonly attrSecurityProtectionTypes: ros.IResolvable;
    /**
     * Attribute SegmentInstanceId: The ID of the consecutive EIPs.
     */
    readonly attrSegmentInstanceId: ros.IResolvable;
    /**
     * Attribute ServiceManaged: Indicates the resource created for the service account.
     */
    readonly attrServiceManaged: ros.IResolvable;
    /**
     * Attribute Tags: The tag of the resource.
     */
    readonly attrTags: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: AddressProps, enableResourcePropertyConstraint?: boolean);
}
