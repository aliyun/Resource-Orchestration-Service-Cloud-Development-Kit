package alicloudroscdkcr

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcr/internal"
)

// Represents a `InstanceV2`.
type IInstanceV2 interface {
	alicloudroscdkcore.IResource
	// Attribute CreateTime: The time when the instance was created.
	AttrCreateTime() interface{}
	// Attribute EndTime: Expiration Time of instance.
	AttrEndTime() interface{}
	// Attribute InstanceEndpoints: Instance Network Access Endpoints.
	AttrInstanceEndpoints() interface{}
	// Attribute InstanceId: The ID of the Container Registry instance.
	AttrInstanceId() interface{}
	// Attribute InstanceIssue: The issue occurs on the instance.
	AttrInstanceIssue() interface{}
	// Attribute InstanceName: The name of the Container Registry instance.
	AttrInstanceName() interface{}
	// Attribute ModifiedTime: The time when the instance was last modified.
	AttrModifiedTime() interface{}
	// Attribute PaymentType: Payment type.
	AttrPaymentType() interface{}
	// Attribute RenewalStatus: Automatic renewal status.
	AttrRenewalStatus() interface{}
	// Attribute RenewPeriod: Automatic renewal cycle, in months.
	AttrRenewPeriod() interface{}
	// Attribute ResourceGroupId: The ID of the resource group.
	AttrResourceGroupId() interface{}
	Props() *InstanceV2Props
}

// The jsii proxy for IInstanceV2
type jsiiProxy_IInstanceV2 struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IInstanceV2) AttrCreateTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCreateTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstanceV2) AttrEndTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrEndTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstanceV2) AttrInstanceEndpoints() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrInstanceEndpoints",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstanceV2) AttrInstanceId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrInstanceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstanceV2) AttrInstanceIssue() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrInstanceIssue",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstanceV2) AttrInstanceName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrInstanceName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstanceV2) AttrModifiedTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrModifiedTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstanceV2) AttrPaymentType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPaymentType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstanceV2) AttrRenewalStatus() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRenewalStatus",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstanceV2) AttrRenewPeriod() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRenewPeriod",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstanceV2) AttrResourceGroupId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrResourceGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstanceV2) Props() *InstanceV2Props {
	var returns *InstanceV2Props
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

