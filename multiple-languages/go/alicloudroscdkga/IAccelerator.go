package alicloudroscdkga

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkga/internal"
)

// Represents a `Accelerator`.
type IAccelerator interface {
	alicloudroscdkcore.IResource
	// Attribute AcceleratorId: The ID of the GA instance to query.
	AttrAcceleratorId() interface{}
	// Attribute AcceleratorName: The Name of the GA instance.
	AttrAcceleratorName() interface{}
	// Attribute AutoPay: The AutoPay of the GA instance.
	AttrAutoPay() interface{}
	// Attribute AutoUseCoupon: The AutoUseCoupon of the GA instance.
	AttrAutoUseCoupon() interface{}
	// Attribute DnsName: The DNS name of the accelerator.
	AttrDnsName() interface{}
	// Attribute Duration: The Duration of the GA instance.
	AttrDuration() interface{}
	// Attribute OrderId: The OrderId of the GA instance.
	AttrOrderId() interface{}
	// Attribute PaymentType: The Payment Typethe GA instance.
	AttrPaymentType() interface{}
	// Attribute PricingCycle: The PricingCycle of the GA instance.
	AttrPricingCycle() interface{}
	// Attribute Spec: The instance type of the GA instance.
	AttrSpec() interface{}
	Props() *AcceleratorProps
}

// The jsii proxy for IAccelerator
type jsiiProxy_IAccelerator struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IAccelerator) AttrAcceleratorId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAcceleratorId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAccelerator) AttrAcceleratorName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAcceleratorName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAccelerator) AttrAutoPay() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAutoPay",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAccelerator) AttrAutoUseCoupon() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAutoUseCoupon",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAccelerator) AttrDnsName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDnsName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAccelerator) AttrDuration() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDuration",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAccelerator) AttrOrderId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrOrderId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAccelerator) AttrPaymentType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPaymentType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAccelerator) AttrPricingCycle() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPricingCycle",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAccelerator) AttrSpec() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSpec",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAccelerator) Props() *AcceleratorProps {
	var returns *AcceleratorProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

