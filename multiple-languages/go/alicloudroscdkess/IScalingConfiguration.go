package alicloudroscdkess

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkess/internal"
)

// Represents a `ScalingConfiguration`.
type IScalingConfiguration interface {
	alicloudroscdkcore.IResource
	// Attribute ScalingConfigurationId: The scaling configuration id.
	AttrScalingConfigurationId() interface{}
	// Attribute ScalingGroupId: The id of the scaling group to which the scaling configuration belongs.
	AttrScalingGroupId() interface{}
	Props() *ScalingConfigurationProps
}

// The jsii proxy for IScalingConfiguration
type jsiiProxy_IScalingConfiguration struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IScalingConfiguration) AttrScalingConfigurationId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrScalingConfigurationId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IScalingConfiguration) AttrScalingGroupId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrScalingGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IScalingConfiguration) Props() *ScalingConfigurationProps {
	var returns *ScalingConfigurationProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

