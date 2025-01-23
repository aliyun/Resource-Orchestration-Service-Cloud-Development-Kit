package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkess/datasource/internal"
)

// Represents a `ScalingConfigurations`.
type IScalingConfigurations interface {
	alicloudroscdkcore.IResource
	// Attribute ScalingConfigurationIds: The list of scaling configuration IDs.
	AttrScalingConfigurationIds() interface{}
	// Attribute ScalingConfigurations: The list of scaling configurations.
	AttrScalingConfigurations() interface{}
	Props() *ScalingConfigurationsProps
}

// The jsii proxy for IScalingConfigurations
type jsiiProxy_IScalingConfigurations struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IScalingConfigurations) AttrScalingConfigurationIds() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrScalingConfigurationIds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IScalingConfigurations) AttrScalingConfigurations() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrScalingConfigurations",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IScalingConfigurations) Props() *ScalingConfigurationsProps {
	var returns *ScalingConfigurationsProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

