package alicloudroscdkess

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkess/internal"
)

// Represents a `EciScalingConfiguration`.
type IEciScalingConfiguration interface {
	alicloudroscdkcore.IResource
	// Attribute ScalingConfigurationId: The ID of the elastic container instance.
	AttrScalingConfigurationId() interface{}
	Props() *EciScalingConfigurationProps
}

// The jsii proxy for IEciScalingConfiguration
type jsiiProxy_IEciScalingConfiguration struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IEciScalingConfiguration) AttrScalingConfigurationId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrScalingConfigurationId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IEciScalingConfiguration) Props() *EciScalingConfigurationProps {
	var returns *EciScalingConfigurationProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

