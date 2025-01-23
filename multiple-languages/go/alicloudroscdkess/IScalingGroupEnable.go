package alicloudroscdkess

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkess/internal"
)

// Represents a `ScalingGroupEnable`.
type IScalingGroupEnable interface {
	alicloudroscdkcore.IResource
	// Attribute LifecycleState: The scaling group status.
	AttrLifecycleState() interface{}
	// Attribute ScalingGroupId: The scaling group id.
	AttrScalingGroupId() interface{}
	// Attribute ScalingInstanceDetails: Detail information of auto created scaling instances.
	AttrScalingInstanceDetails() interface{}
	// Attribute ScalingInstances: The auto created scaling instances.
	AttrScalingInstances() interface{}
	// Attribute ScalingRuleArisExecuteErrorInfo: The error info of the execution of scaling rule aris.
	AttrScalingRuleArisExecuteErrorInfo() interface{}
	// Attribute ScalingRuleArisExecuteResultInstancesAdded: Instances added via the execution of scaling rule aris.
	AttrScalingRuleArisExecuteResultInstancesAdded() interface{}
	// Attribute ScalingRuleArisExecuteResultInstancesRemoved: Instances removed via the execution of scaling rule aris.
	AttrScalingRuleArisExecuteResultInstancesRemoved() interface{}
	// Attribute ScalingRuleArisExecuteResultNumberOfAddedInstances: The number of added vm via the execution of scaling rule aris.
	AttrScalingRuleArisExecuteResultNumberOfAddedInstances() interface{}
	Props() *ScalingGroupEnableProps
}

// The jsii proxy for IScalingGroupEnable
type jsiiProxy_IScalingGroupEnable struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IScalingGroupEnable) AttrLifecycleState() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrLifecycleState",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IScalingGroupEnable) AttrScalingGroupId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrScalingGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IScalingGroupEnable) AttrScalingInstanceDetails() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrScalingInstanceDetails",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IScalingGroupEnable) AttrScalingInstances() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrScalingInstances",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IScalingGroupEnable) AttrScalingRuleArisExecuteErrorInfo() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrScalingRuleArisExecuteErrorInfo",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IScalingGroupEnable) AttrScalingRuleArisExecuteResultInstancesAdded() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrScalingRuleArisExecuteResultInstancesAdded",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IScalingGroupEnable) AttrScalingRuleArisExecuteResultInstancesRemoved() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrScalingRuleArisExecuteResultInstancesRemoved",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IScalingGroupEnable) AttrScalingRuleArisExecuteResultNumberOfAddedInstances() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrScalingRuleArisExecuteResultNumberOfAddedInstances",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IScalingGroupEnable) Props() *ScalingGroupEnableProps {
	var returns *ScalingGroupEnableProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

