package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkga/datasource/internal"
)

// Represents a `BandwidthPackage`.
type IBandwidthPackage interface {
	alicloudroscdkcore.IResource
	// Attribute AutoRenew: Whether to enable automatic renewal.
	AttrAutoRenew() interface{}
	// Attribute AutoRenewDuration: The duration of automatic renewal.
	//
	// Unit: Month.
	AttrAutoRenewDuration() interface{}
	// Attribute Bandwidth: The bandwidth value of the bandwidth package.
	//
	// Unit: Mbps. Value range: 2~2000.
	AttrBandwidth() interface{}
	// Attribute BandwidthPackageId: The Resource ID of the bandwidth.
	AttrBandwidthPackageId() interface{}
	// Attribute BandwidthPackageName: The Resource name of the bandwidth.
	AttrBandwidthPackageName() interface{}
	// Attribute BandwidthType: Bandwidth type.
	AttrBandwidthType() interface{}
	// Attribute BillingType: Post-payment billing method.
	AttrBillingType() interface{}
	// Attribute CbnGeographicRegionIdA: The interworking region A of cross-region acceleration packages.
	//
	// The value is China-mainland only.
	AttrCbnGeographicRegionIdA() interface{}
	// Attribute CbnGeographicRegionIdB: The interworking Region B of cross-region acceleration packages.
	//
	// The value is Global only.
	AttrCbnGeographicRegionIdB() interface{}
	// Attribute CreateTime: Bandwidth package creation time.
	AttrCreateTime() interface{}
	// Attribute Description: the description of bandwidth package.
	AttrDescription() interface{}
	// Attribute ExpiredTime: Bandwidth package expiration time.
	AttrExpiredTime() interface{}
	// Attribute PaymentType: Type of payment.
	AttrPaymentType() interface{}
	// Attribute Ratio: 95 Billing guaranteed percentage.
	//
	// Value range: 30~100.
	AttrRatio() interface{}
	// Attribute RenewalStatus: Renewal status.
	AttrRenewalStatus() interface{}
	// Attribute ResourceGroupId: The ID of the resource group.
	AttrResourceGroupId() interface{}
	// Attribute Type: The type of the bandwidth package.
	AttrType() interface{}
	Props() *BandwidthPackageProps
}

// The jsii proxy for IBandwidthPackage
type jsiiProxy_IBandwidthPackage struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IBandwidthPackage) AttrAutoRenew() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAutoRenew",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IBandwidthPackage) AttrAutoRenewDuration() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAutoRenewDuration",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IBandwidthPackage) AttrBandwidth() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrBandwidth",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IBandwidthPackage) AttrBandwidthPackageId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrBandwidthPackageId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IBandwidthPackage) AttrBandwidthPackageName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrBandwidthPackageName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IBandwidthPackage) AttrBandwidthType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrBandwidthType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IBandwidthPackage) AttrBillingType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrBillingType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IBandwidthPackage) AttrCbnGeographicRegionIdA() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCbnGeographicRegionIdA",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IBandwidthPackage) AttrCbnGeographicRegionIdB() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCbnGeographicRegionIdB",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IBandwidthPackage) AttrCreateTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCreateTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IBandwidthPackage) AttrDescription() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDescription",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IBandwidthPackage) AttrExpiredTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrExpiredTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IBandwidthPackage) AttrPaymentType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPaymentType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IBandwidthPackage) AttrRatio() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRatio",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IBandwidthPackage) AttrRenewalStatus() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRenewalStatus",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IBandwidthPackage) AttrResourceGroupId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrResourceGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IBandwidthPackage) AttrType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IBandwidthPackage) Props() *BandwidthPackageProps {
	var returns *BandwidthPackageProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

