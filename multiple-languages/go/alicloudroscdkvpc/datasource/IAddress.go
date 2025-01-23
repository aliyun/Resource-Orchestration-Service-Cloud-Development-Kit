package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkvpc/datasource/internal"
)

// Represents a `Address`.
type IAddress interface {
	alicloudroscdkcore.IResource
	// Attribute AddressName: The name of the EIP.
	AttrAddressName() interface{}
	// Attribute AllocationId: The ID of the EIP instance.
	AttrAllocationId() interface{}
	// Attribute Bandwidth: The peak bandwidth of the EIP.
	//
	// Unit: Mbps.
	AttrBandwidth() interface{}
	// Attribute BandwidthPackageBandwidth: The bandwidth value of the Internet shared bandwidth added to the EIP.
	//
	// The unit is Mbps.
	AttrBandwidthPackageBandwidth() interface{}
	// Attribute BandwidthPackageId: The ID of the added shared bandwidth.
	AttrBandwidthPackageId() interface{}
	// Attribute BandwidthPackageType: The type of bandwidth.
	//
	// Only **CommonBandwidthPackage** (shared bandwidth) is supported.
	AttrBandwidthPackageType() interface{}
	// Attribute BusinessStatus: The business status of the EIP instance.
	AttrBusinessStatus() interface{}
	// Attribute CreateTime: The time when the EIP was created.
	AttrCreateTime() interface{}
	// Attribute DeletionProtection: Whether the delete protection function is turned on.
	AttrDeletionProtection() interface{}
	// Attribute Description: The description of the EIP instance.
	AttrDescription() interface{}
	// Attribute EipBandwidth: AN EIP is added to an Internet shared bandwidth before or exit purchase an Internet shared bandwidth instance after the bandwidth Mbps Set for the bandwidth.
	AttrEipBandwidth() interface{}
	// Attribute ExpiredTime: Expiration time, format' YYYY-MM-DDThh:mm:ssZ '.
	AttrExpiredTime() interface{}
	// Attribute HasReservationData: Whether there is renewal data.
	AttrHasReservationData() interface{}
	// Attribute HdMonitorStatus: Whether the second-level monitoring is enabled for the EIP.
	AttrHdMonitorStatus() interface{}
	// Attribute InstanceId: The ID of the current bound instance.
	AttrInstanceId() interface{}
	// Attribute InstanceRegionId: The region ID of the currently bound resource.
	AttrInstanceRegionId() interface{}
	// Attribute InstanceType: The type of the current bound instance.
	AttrInstanceType() interface{}
	// Attribute IpAddress: The IP address of the EIP.
	AttrIpAddress() interface{}
	// Attribute Isp: Service providers.
	AttrIsp() interface{}
	// Attribute Netmode: Network type.
	AttrNetmode() interface{}
	// Attribute OperationLocks: Lock details.
	AttrOperationLocks() interface{}
	// Attribute PaymentType: The billing method of the EIP.
	AttrPaymentType() interface{}
	// Attribute PublicIpAddressPoolId: The ID of the IP address pool to which the EIP belongs.
	AttrPublicIpAddressPoolId() interface{}
	// Attribute ReservationActiveTime: The effective time of the renewal fee, in the format of 'YYYY-MM-DDThh:mm:ssZ'.
	AttrReservationActiveTime() interface{}
	// Attribute ReservationBandwidth: Renewal bandwidth, in Mbps.
	AttrReservationBandwidth() interface{}
	// Attribute ReservationInternetChargeType: Renewal Payment type.
	AttrReservationInternetChargeType() interface{}
	// Attribute ReservationOrderType: Renewal order type.
	AttrReservationOrderType() interface{}
	// Attribute ResourceGroupId: The ID of the resource group.
	AttrResourceGroupId() interface{}
	// Attribute SecondLimited: Whether a secondary speed limit is configured.
	AttrSecondLimited() interface{}
	// Attribute SecurityProtectionTypes: Security protection level.
	AttrSecurityProtectionTypes() interface{}
	// Attribute SegmentInstanceId: The ID of the consecutive EIPs.
	AttrSegmentInstanceId() interface{}
	// Attribute ServiceManaged: Indicates the resource created for the service account.
	AttrServiceManaged() interface{}
	// Attribute Tags: The tag of the resource.
	AttrTags() interface{}
	Props() *AddressProps
}

// The jsii proxy for IAddress
type jsiiProxy_IAddress struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IAddress) AttrAddressName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAddressName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAddress) AttrAllocationId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAllocationId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAddress) AttrBandwidth() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrBandwidth",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAddress) AttrBandwidthPackageBandwidth() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrBandwidthPackageBandwidth",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAddress) AttrBandwidthPackageId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrBandwidthPackageId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAddress) AttrBandwidthPackageType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrBandwidthPackageType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAddress) AttrBusinessStatus() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrBusinessStatus",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAddress) AttrCreateTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCreateTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAddress) AttrDeletionProtection() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDeletionProtection",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAddress) AttrDescription() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDescription",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAddress) AttrEipBandwidth() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrEipBandwidth",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAddress) AttrExpiredTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrExpiredTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAddress) AttrHasReservationData() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrHasReservationData",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAddress) AttrHdMonitorStatus() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrHdMonitorStatus",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAddress) AttrInstanceId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrInstanceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAddress) AttrInstanceRegionId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrInstanceRegionId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAddress) AttrInstanceType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrInstanceType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAddress) AttrIpAddress() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrIpAddress",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAddress) AttrIsp() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrIsp",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAddress) AttrNetmode() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrNetmode",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAddress) AttrOperationLocks() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrOperationLocks",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAddress) AttrPaymentType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPaymentType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAddress) AttrPublicIpAddressPoolId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPublicIpAddressPoolId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAddress) AttrReservationActiveTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrReservationActiveTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAddress) AttrReservationBandwidth() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrReservationBandwidth",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAddress) AttrReservationInternetChargeType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrReservationInternetChargeType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAddress) AttrReservationOrderType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrReservationOrderType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAddress) AttrResourceGroupId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrResourceGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAddress) AttrSecondLimited() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSecondLimited",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAddress) AttrSecurityProtectionTypes() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSecurityProtectionTypes",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAddress) AttrSegmentInstanceId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSegmentInstanceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAddress) AttrServiceManaged() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrServiceManaged",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAddress) AttrTags() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTags",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAddress) Props() *AddressProps {
	var returns *AddressProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

