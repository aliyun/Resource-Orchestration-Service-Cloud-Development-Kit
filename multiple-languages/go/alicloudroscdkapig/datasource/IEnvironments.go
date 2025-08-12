package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkapig/datasource/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `Environments`.
type IEnvironments interface {
	alicloudroscdkcore.IResource
	// Attribute EnvironmentIds: The list of environment IDs.
	AttrEnvironmentIds() interface{}
	// Attribute Environments: The list of environments.
	AttrEnvironments() interface{}
	Props() *EnvironmentsProps
}

// The jsii proxy for IEnvironments
type jsiiProxy_IEnvironments struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IEnvironments) AttrEnvironmentIds() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrEnvironmentIds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IEnvironments) AttrEnvironments() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrEnvironments",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IEnvironments) Props() *EnvironmentsProps {
	var returns *EnvironmentsProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

