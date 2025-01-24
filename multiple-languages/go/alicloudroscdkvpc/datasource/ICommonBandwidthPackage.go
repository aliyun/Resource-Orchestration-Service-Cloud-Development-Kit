package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkvpc/datasource/internal"
)

// Represents a `CommonBandwidthPackage`.
type ICommonBandwidthPackage interface {
	alicloudroscdkcore.IResource
	// Attribute Bandwidth: The maximum bandwidth of the Internet Shared Bandwidth instance.
	//
	// Unit: Mbit/s.
	AttrBandwidth() interface{}
	// Attribute BusinessStatus: The service status of the Internet Shared Bandwidth instance.
	//
	// Valid values:
	// Normal: The Internet Shared Bandwidth instance runs as expected.
	// FinancialLocked: An overdue payment occurs in the Internet Shared Bandwidth instance
	// Unactivated: The Internet Shared Bandwidth instance is not activated.
	AttrBusinessStatus() interface{}
	// Attribute CommonBandwidthPackageId: The ID of the Internet shared bandwidth.
	AttrCommonBandwidthPackageId() interface{}
	// Attribute CommonBandwidthPackageName: The name of the Internet Shared Bandwidth instance.
	AttrCommonBandwidthPackageName() interface{}
	// Attribute CreationTime: The time when the Internet Shared Bandwidth instance was created.
	//
	// The time is displayed in the YYYY-MM-DDThh:mm:ssZ format.
	AttrCreationTime() interface{}
	// Attribute DeletionProtection: Indicates whether deletion protection is enabled.
	//
	// Valid values:
	// false
	// true.
	AttrDeletionProtection() interface{}
	// Attribute Description: The description of the Internet Shared Bandwidth instance.
	AttrDescription() interface{}
	// Attribute ExpiredTime: The time when the Internet Shared Bandwidth instance expired.
	//
	// The time is displayed in the YYYY-MM-DDThh:mm:ssZ format.
	AttrExpiredTime() interface{}
	// Attribute HasReservationData: Indicates whether the information about pending orders is returned.
	//
	// Valid values:
	// false
	// true.
	AttrHasReservationData() interface{}
	// Attribute InstanceChargeType: The billing method of the Internet Shared Bandwidth instance.
	//
	// Valid value:
	// PostPaid: pay-as-you-go
	// PrePaid: subscription.
	AttrInstanceChargeType() interface{}
	// Attribute InternetChargeType: The metering method of the Internet Shared Bandwidth instance.
	//
	// Valid value:
	// PayBy95: Charged by Enhanced 95th Percentile.
	// PayByBandwidth: Charged by Bandwidth.
	// PayByDominantTraffic: Charged by Dominant Traffic.
	AttrInternetChargeType() interface{}
	// Attribute Isp: The line type.
	//
	// Valid values:
	// BGP (default): BGP (Multi-ISP) lines.
	// BGP_PRO: BGP (Multi-ISP) Pro lines.
	// Valid values if you are allowed to use single-ISP bandwidth:
	// ChinaTelecom
	// ChinaUnicom
	// ChinaMobile
	// ChinaTelecom_L2
	// ChinaUnicom_L2
	// ChinaMobile_L2.
	AttrIsp() interface{}
	// Attribute PublicIpAddresses: The elastic IP addresses (EIPs) that are associated with the Internet Shared Bandwidth instance.
	AttrPublicIpAddresses() interface{}
	// Attribute Ratio: The percentage of the minimum bandwidth commitment.
	//
	// Only 20 is returned.
	AttrRatio() interface{}
	// Attribute ReservationActiveTime: The time when the renewal took effect.
	//
	// The time is displayed in the YYYY-MM-DDThh:mm:ssZ format.
	AttrReservationActiveTime() interface{}
	// Attribute ReservationBandwidth: The new maximum bandwidth after the configurations are changed.
	//
	// Unit: Mbit/s.
	AttrReservationBandwidth() interface{}
	// Attribute ReservationInternetChargeType: The metering method after the configurations are changed.
	//
	// Valid value:
	// PayBy95: Charged by Enhanced 95th Percentile.
	// PayByBandwidth: Charged by Bandwidth.
	// PayByDominantTraffic: Charged by Dominant Traffic.
	AttrReservationInternetChargeType() interface{}
	// Attribute ReservationOrderType: The renewal method.
	//
	// Valid values:
	// RENEWCHANGE: renewal with a specification change
	// TEMP_UPGRADE: renewal with a temporary upgrade
	// UPGRADE: renewal with an upgrade.
	AttrReservationOrderType() interface{}
	// Attribute ResourceGroupId: The ID of the resource group.
	AttrResourceGroupId() interface{}
	// Attribute ServiceManaged: Indicates whether the resource is created by the service account.
	//
	// Valid values:
	// 0: The resource is not created by the service account.
	// 1: The resource is created by the service account.
	AttrServiceManaged() interface{}
	// Attribute Status: The status of the Internet Shared Bandwidth instance.
	//
	// Valid values:
	// Available: The Internet Shared Bandwidth instance is available.
	// Modifying: The Internet Shared Bandwidth instance is being modified.
	AttrStatus() interface{}
	Props() *CommonBandwidthPackageProps
}

// The jsii proxy for ICommonBandwidthPackage
type jsiiProxy_ICommonBandwidthPackage struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_ICommonBandwidthPackage) AttrBandwidth() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrBandwidth",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICommonBandwidthPackage) AttrBusinessStatus() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrBusinessStatus",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICommonBandwidthPackage) AttrCommonBandwidthPackageId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCommonBandwidthPackageId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICommonBandwidthPackage) AttrCommonBandwidthPackageName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCommonBandwidthPackageName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICommonBandwidthPackage) AttrCreationTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCreationTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICommonBandwidthPackage) AttrDeletionProtection() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDeletionProtection",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICommonBandwidthPackage) AttrDescription() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDescription",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICommonBandwidthPackage) AttrExpiredTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrExpiredTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICommonBandwidthPackage) AttrHasReservationData() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrHasReservationData",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICommonBandwidthPackage) AttrInstanceChargeType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrInstanceChargeType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICommonBandwidthPackage) AttrInternetChargeType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrInternetChargeType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICommonBandwidthPackage) AttrIsp() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrIsp",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICommonBandwidthPackage) AttrPublicIpAddresses() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPublicIpAddresses",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICommonBandwidthPackage) AttrRatio() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRatio",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICommonBandwidthPackage) AttrReservationActiveTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrReservationActiveTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICommonBandwidthPackage) AttrReservationBandwidth() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrReservationBandwidth",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICommonBandwidthPackage) AttrReservationInternetChargeType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrReservationInternetChargeType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICommonBandwidthPackage) AttrReservationOrderType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrReservationOrderType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICommonBandwidthPackage) AttrResourceGroupId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrResourceGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICommonBandwidthPackage) AttrServiceManaged() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrServiceManaged",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICommonBandwidthPackage) AttrStatus() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrStatus",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICommonBandwidthPackage) Props() *CommonBandwidthPackageProps {
	var returns *CommonBandwidthPackageProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

