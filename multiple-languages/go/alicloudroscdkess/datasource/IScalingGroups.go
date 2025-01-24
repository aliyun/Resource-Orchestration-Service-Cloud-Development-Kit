package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkess/datasource/internal"
)

// Represents a `ScalingGroups`.
type IScalingGroups interface {
	alicloudroscdkcore.IResource
	// Attribute ScalingGroupIds: The list of scaling group IDs.
	AttrScalingGroupIds() interface{}
	// Attribute ScalingGroups: The list of scaling groups.
	AttrScalingGroups() interface{}
	Props() *ScalingGroupsProps
}

// The jsii proxy for IScalingGroups
type jsiiProxy_IScalingGroups struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IScalingGroups) AttrScalingGroupIds() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrScalingGroupIds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IScalingGroups) AttrScalingGroups() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrScalingGroups",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IScalingGroups) Props() *ScalingGroupsProps {
	var returns *ScalingGroupsProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

