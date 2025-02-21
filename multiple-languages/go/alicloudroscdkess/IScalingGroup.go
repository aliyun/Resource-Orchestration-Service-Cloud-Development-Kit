package alicloudroscdkess

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkess/internal"
)

// Represents a `ScalingGroup`.
type IScalingGroup interface {
	alicloudroscdkcore.IResource
	// Attribute Arn: The Alibaba Cloud Resource Name (ARN).
	AttrArn() interface{}
	// Attribute ScalingGroupId: Scaling group Id.
	AttrScalingGroupId() interface{}
	// Attribute ScalingGroupName: Scaling group name.
	AttrScalingGroupName() interface{}
	Props() *ScalingGroupProps
}

// The jsii proxy for IScalingGroup
type jsiiProxy_IScalingGroup struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IScalingGroup) AttrArn() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrArn",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IScalingGroup) AttrScalingGroupId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrScalingGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IScalingGroup) AttrScalingGroupName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrScalingGroupName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IScalingGroup) Props() *ScalingGroupProps {
	var returns *ScalingGroupProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

