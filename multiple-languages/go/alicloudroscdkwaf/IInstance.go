package alicloudroscdkwaf

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkwaf/internal"
)

// Represents a `Instance`.
type IInstance interface {
	alicloudroscdkcore.IResource
	// Attribute EndDate: Due date of the instance.
	AttrEndDate() interface{}
	// Attribute InDebt: Instance is overdue.
	AttrInDebt() interface{}
	// Attribute InstanceId: Instance ID.
	AttrInstanceId() interface{}
	// Attribute RemainDay: Number of available days for WAF Trial version.
	AttrRemainDay() interface{}
	// Attribute SubscriptionType: Subscription type of the instance.
	AttrSubscriptionType() interface{}
	// Attribute Trial: Trial version.
	AttrTrial() interface{}
	Props() *InstanceProps
}

// The jsii proxy for IInstance
type jsiiProxy_IInstance struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IInstance) AttrEndDate() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrEndDate",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrInDebt() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrInDebt",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrInstanceId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrInstanceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrRemainDay() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRemainDay",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrSubscriptionType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSubscriptionType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrTrial() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTrial",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) Props() *InstanceProps {
	var returns *InstanceProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

