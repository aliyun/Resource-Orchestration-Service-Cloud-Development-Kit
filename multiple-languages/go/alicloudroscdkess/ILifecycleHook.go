package alicloudroscdkess

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkess/internal"
)

// Represents a `LifecycleHook`.
type ILifecycleHook interface {
	alicloudroscdkcore.IResource
	// Attribute LifecycleHookId: The lifecycle hook ID.
	AttrLifecycleHookId() interface{}
	// Attribute ScalingGroupId: The id of the scaling group to which the lifecycle hook belongs.
	AttrScalingGroupId() interface{}
	Props() *LifecycleHookProps
}

// The jsii proxy for ILifecycleHook
type jsiiProxy_ILifecycleHook struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_ILifecycleHook) AttrLifecycleHookId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrLifecycleHookId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ILifecycleHook) AttrScalingGroupId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrScalingGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ILifecycleHook) Props() *LifecycleHookProps {
	var returns *LifecycleHookProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

