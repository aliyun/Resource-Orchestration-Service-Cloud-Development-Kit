package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkapig/datasource/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `Gateways`.
type IGateways interface {
	alicloudroscdkcore.IResource
	// Attribute GatewayIds: The list of gateway IDs.
	AttrGatewayIds() interface{}
	// Attribute Gateways: The list of gateways.
	AttrGateways() interface{}
	Props() *GatewaysProps
}

// The jsii proxy for IGateways
type jsiiProxy_IGateways struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IGateways) AttrGatewayIds() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrGatewayIds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IGateways) AttrGateways() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrGateways",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IGateways) Props() *GatewaysProps {
	var returns *GatewaysProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

