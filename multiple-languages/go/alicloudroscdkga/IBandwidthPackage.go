package alicloudroscdkga

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkga/internal"
)

// Represents a `BandwidthPackage`.
type IBandwidthPackage interface {
	alicloudroscdkcore.IResource
	// Attribute AutoPay: The AutoPay of the bandwidth.
	AttrAutoPay() interface{}
	// Attribute AutoUseCoupon: The AutoUseCoupon  of the bandwidth.
	AttrAutoUseCoupon() interface{}
	// Attribute Bandwidth: The bandwidth provided by the bandwidth plan.
	AttrBandwidth() interface{}
	// Attribute BandwidthPackageId: The Resource ID of the bandwidth.
	AttrBandwidthPackageId() interface{}
	// Attribute BandwidthPackageName: The Resource name of the bandwidth.
	AttrBandwidthPackageName() interface{}
	// Attribute BandwidthType: the bandwidth BandwidthType of the bandwidth.
	AttrBandwidthType() interface{}
	// Attribute BillingType: The BillingType of the bandwidth.
	AttrBillingType() interface{}
	// Attribute CbnGeographicRegionIdA: The CbnGeographicRegionIdA  of the bandwidth.
	AttrCbnGeographicRegionIdA() interface{}
	// Attribute CbnGeographicRegionIdB: The CbnGeographicRegionIdB of the bandwidth.
	AttrCbnGeographicRegionIdB() interface{}
	// Attribute ChargeType: The ChargeType of the bandwidth.
	AttrChargeType() interface{}
	// Attribute PaymentType: The Payment Type of the bandwidth.
	AttrPaymentType() interface{}
	// Attribute Ratio: The Ratio of the bandwidth.
	AttrRatio() interface{}
	// Attribute Type: The type of the bandwidth plan.
	AttrType() interface{}
	Props() *BandwidthPackageProps
}

// The jsii proxy for IBandwidthPackage
type jsiiProxy_IBandwidthPackage struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IBandwidthPackage) AttrAutoPay() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAutoPay",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IBandwidthPackage) AttrAutoUseCoupon() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAutoUseCoupon",
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

func (j *jsiiProxy_IBandwidthPackage) AttrChargeType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrChargeType",
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

