package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkacm/datasource/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `Configurations`.
type IConfigurations interface {
	alicloudroscdkcore.IResource
	// Attribute Configurations: The list of configurations.
	AttrConfigurations() interface{}
	// Attribute DataIds: The list of configuration data IDs.
	AttrDataIds() interface{}
	Props() *ConfigurationsProps
}

// The jsii proxy for IConfigurations
type jsiiProxy_IConfigurations struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IConfigurations) AttrConfigurations() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrConfigurations",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IConfigurations) AttrDataIds() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDataIds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IConfigurations) Props() *ConfigurationsProps {
	var returns *ConfigurationsProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

