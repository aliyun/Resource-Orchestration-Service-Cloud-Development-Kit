package alicloudroscdkvpc

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkvpc/internal"
)

// Represents a `NatGateway`.
type INatGateway interface {
	alicloudroscdkcore.IResource
	// Attribute ForwardTableId: The forward table id.
	AttrForwardTableId() interface{}
	// Attribute NatGatewayId: The Id of created NAT gateway.
	AttrNatGatewayId() interface{}
	// Attribute SNatTableId: The SNAT table id.
	AttrSNatTableId() interface{}
	Props() *NatGatewayProps
}

// The jsii proxy for INatGateway
type jsiiProxy_INatGateway struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_INatGateway) AttrForwardTableId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrForwardTableId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_INatGateway) AttrNatGatewayId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrNatGatewayId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_INatGateway) AttrSNatTableId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSNatTableId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_INatGateway) Props() *NatGatewayProps {
	var returns *NatGatewayProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

