package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkvpc/datasource/internal"
)

// Represents a `NatGateways`.
type INatGateways interface {
	alicloudroscdkcore.IResource
	// Attribute NatGatewayIds: The list of The nat gateway ids.
	AttrNatGatewayIds() interface{}
	// Attribute NatGateways: The list of The nat gateways.
	AttrNatGateways() interface{}
	Props() *NatGatewaysProps
}

// The jsii proxy for INatGateways
type jsiiProxy_INatGateways struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_INatGateways) AttrNatGatewayIds() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrNatGatewayIds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_INatGateways) AttrNatGateways() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrNatGateways",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_INatGateways) Props() *NatGatewaysProps {
	var returns *NatGatewaysProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

