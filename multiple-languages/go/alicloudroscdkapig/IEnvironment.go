package alicloudroscdkapig

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkapig/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `Environment`.
type IEnvironment interface {
	alicloudroscdkcore.IResource
	// Attribute Description: Description of the environment.
	AttrDescription() interface{}
	// Attribute EnvironmentId: The ID of the environment.
	AttrEnvironmentId() interface{}
	// Attribute EnvironmentName: The name of the resource.
	AttrEnvironmentName() interface{}
	// Attribute GatewayId: The ID of the Gateway.
	AttrGatewayId() interface{}
	Props() *EnvironmentProps
}

// The jsii proxy for IEnvironment
type jsiiProxy_IEnvironment struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IEnvironment) AttrDescription() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDescription",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IEnvironment) AttrEnvironmentId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrEnvironmentId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IEnvironment) AttrEnvironmentName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrEnvironmentName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IEnvironment) AttrGatewayId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrGatewayId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IEnvironment) Props() *EnvironmentProps {
	var returns *EnvironmentProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

