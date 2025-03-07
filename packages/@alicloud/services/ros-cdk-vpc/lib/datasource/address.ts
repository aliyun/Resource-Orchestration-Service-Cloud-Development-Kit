import * as ros from '@alicloud/ros-cdk-core';
import { RosAddress } from './vpc.generated';
// Generated from the AliCloud ROS Resource Specification
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
 * This class encapsulates and extends the ROS resource type `DATASOURCE::EIP::Address`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosAddress`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-eip-address
 */
export class Address extends ros.Resource implements IAddress {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: AddressProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute AddressName: The name of the EIP.
     */
    public readonly attrAddressName: ros.IResolvable | string;

    /**
     * Attribute AllocationId: The ID of the EIP instance.
     */
    public readonly attrAllocationId: ros.IResolvable | string;

    /**
     * Attribute Bandwidth: The peak bandwidth of the EIP. Unit: Mbps.
     */
    public readonly attrBandwidth: ros.IResolvable | string;

    /**
     * Attribute BandwidthPackageBandwidth: The bandwidth value of the Internet shared bandwidth added to the EIP. The unit is Mbps.
     */
    public readonly attrBandwidthPackageBandwidth: ros.IResolvable | string;

    /**
     * Attribute BandwidthPackageId: The ID of the added shared bandwidth.
     */
    public readonly attrBandwidthPackageId: ros.IResolvable | string;

    /**
     * Attribute BandwidthPackageType: The type of bandwidth. Only **CommonBandwidthPackage** (shared bandwidth) is supported.
     */
    public readonly attrBandwidthPackageType: ros.IResolvable | string;

    /**
     * Attribute BusinessStatus: The business status of the EIP instance.
     */
    public readonly attrBusinessStatus: ros.IResolvable | string;

    /**
     * Attribute CreateTime: The time when the EIP was created.
     */
    public readonly attrCreateTime: ros.IResolvable | string;

    /**
     * Attribute DeletionProtection: Whether the delete protection function is turned on.
     */
    public readonly attrDeletionProtection: ros.IResolvable | string;

    /**
     * Attribute Description: The description of the EIP instance.
     */
    public readonly attrDescription: ros.IResolvable | string;

    /**
     * Attribute EipBandwidth: AN EIP is added to an Internet shared bandwidth before or exit purchase an Internet shared bandwidth instance after the bandwidth Mbps Set for the bandwidth.
     */
    public readonly attrEipBandwidth: ros.IResolvable | string;

    /**
     * Attribute ExpiredTime: Expiration time, format' YYYY-MM-DDThh:mm:ssZ '.
     */
    public readonly attrExpiredTime: ros.IResolvable | string;

    /**
     * Attribute HasReservationData: Whether there is renewal data.
     */
    public readonly attrHasReservationData: ros.IResolvable | string;

    /**
     * Attribute HdMonitorStatus: Whether the second-level monitoring is enabled for the EIP.
     */
    public readonly attrHdMonitorStatus: ros.IResolvable | string;

    /**
     * Attribute InstanceId: The ID of the current bound instance.
     */
    public readonly attrInstanceId: ros.IResolvable | string;

    /**
     * Attribute InstanceRegionId: The region ID of the currently bound resource.
     */
    public readonly attrInstanceRegionId: ros.IResolvable | string;

    /**
     * Attribute InstanceType: The type of the current bound instance.
     */
    public readonly attrInstanceType: ros.IResolvable | string;

    /**
     * Attribute IpAddress: The IP address of the EIP.
     */
    public readonly attrIpAddress: ros.IResolvable | string;

    /**
     * Attribute Isp: Service providers.
     */
    public readonly attrIsp: ros.IResolvable | string;

    /**
     * Attribute Netmode: Network type.
     */
    public readonly attrNetmode: ros.IResolvable | string;

    /**
     * Attribute OperationLocks: Lock details.
     */
    public readonly attrOperationLocks: ros.IResolvable | string;

    /**
     * Attribute PaymentType: The billing method of the EIP.
     */
    public readonly attrPaymentType: ros.IResolvable | string;

    /**
     * Attribute PublicIpAddressPoolId: The ID of the IP address pool to which the EIP belongs.
     */
    public readonly attrPublicIpAddressPoolId: ros.IResolvable | string;

    /**
     * Attribute ReservationActiveTime: The effective time of the renewal fee, in the format of 'YYYY-MM-DDThh:mm:ssZ'.
     */
    public readonly attrReservationActiveTime: ros.IResolvable | string;

    /**
     * Attribute ReservationBandwidth: Renewal bandwidth, in Mbps.
     */
    public readonly attrReservationBandwidth: ros.IResolvable | string;

    /**
     * Attribute ReservationInternetChargeType: Renewal Payment type.
     */
    public readonly attrReservationInternetChargeType: ros.IResolvable | string;

    /**
     * Attribute ReservationOrderType: Renewal order type.
     */
    public readonly attrReservationOrderType: ros.IResolvable | string;

    /**
     * Attribute ResourceGroupId: The ID of the resource group.
     */
    public readonly attrResourceGroupId: ros.IResolvable | string;

    /**
     * Attribute SecondLimited: Whether a secondary speed limit is configured.
     */
    public readonly attrSecondLimited: ros.IResolvable | string;

    /**
     * Attribute SecurityProtectionTypes: Security protection level.
     */
    public readonly attrSecurityProtectionTypes: ros.IResolvable | string;

    /**
     * Attribute SegmentInstanceId: The ID of the consecutive EIPs.
     */
    public readonly attrSegmentInstanceId: ros.IResolvable | string;

    /**
     * Attribute ServiceManaged: Indicates the resource created for the service account.
     */
    public readonly attrServiceManaged: ros.IResolvable | string;

    /**
     * Attribute Tags: The tag of the resource.
     */
    public readonly attrTags: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: AddressProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosAddress = new RosAddress(this, id,  {
            allocationId: props.allocationId,
            refreshOptions: props.refreshOptions === undefined || props.refreshOptions === null ? 'Never' : props.refreshOptions,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosAddress;
        this.attrAddressName = rosAddress.attrAddressName;
        this.attrAllocationId = rosAddress.attrAllocationId;
        this.attrBandwidth = rosAddress.attrBandwidth;
        this.attrBandwidthPackageBandwidth = rosAddress.attrBandwidthPackageBandwidth;
        this.attrBandwidthPackageId = rosAddress.attrBandwidthPackageId;
        this.attrBandwidthPackageType = rosAddress.attrBandwidthPackageType;
        this.attrBusinessStatus = rosAddress.attrBusinessStatus;
        this.attrCreateTime = rosAddress.attrCreateTime;
        this.attrDeletionProtection = rosAddress.attrDeletionProtection;
        this.attrDescription = rosAddress.attrDescription;
        this.attrEipBandwidth = rosAddress.attrEipBandwidth;
        this.attrExpiredTime = rosAddress.attrExpiredTime;
        this.attrHasReservationData = rosAddress.attrHasReservationData;
        this.attrHdMonitorStatus = rosAddress.attrHdMonitorStatus;
        this.attrInstanceId = rosAddress.attrInstanceId;
        this.attrInstanceRegionId = rosAddress.attrInstanceRegionId;
        this.attrInstanceType = rosAddress.attrInstanceType;
        this.attrIpAddress = rosAddress.attrIpAddress;
        this.attrIsp = rosAddress.attrIsp;
        this.attrNetmode = rosAddress.attrNetmode;
        this.attrOperationLocks = rosAddress.attrOperationLocks;
        this.attrPaymentType = rosAddress.attrPaymentType;
        this.attrPublicIpAddressPoolId = rosAddress.attrPublicIpAddressPoolId;
        this.attrReservationActiveTime = rosAddress.attrReservationActiveTime;
        this.attrReservationBandwidth = rosAddress.attrReservationBandwidth;
        this.attrReservationInternetChargeType = rosAddress.attrReservationInternetChargeType;
        this.attrReservationOrderType = rosAddress.attrReservationOrderType;
        this.attrResourceGroupId = rosAddress.attrResourceGroupId;
        this.attrSecondLimited = rosAddress.attrSecondLimited;
        this.attrSecurityProtectionTypes = rosAddress.attrSecurityProtectionTypes;
        this.attrSegmentInstanceId = rosAddress.attrSegmentInstanceId;
        this.attrServiceManaged = rosAddress.attrServiceManaged;
        this.attrTags = rosAddress.attrTags;
    }
}
