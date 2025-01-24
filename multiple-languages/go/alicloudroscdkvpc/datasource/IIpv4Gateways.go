package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkvpc/datasource/internal"
)

// Represents a `Ipv4Gateways`.
type IIpv4Gateways interface {
	alicloudroscdkcore.IResource
	// Attribute Ipv4GatewayIds: The list of ipv4 gateway IDs.
	AttrIpv4GatewayIds() interface{}
	// Attribute Ipv4Gateways: The list of ipv4 gateways.
	AttrIpv4Gateways() interface{}
	Props() *Ipv4GatewaysProps
}

// The jsii proxy for IIpv4Gateways
type jsiiProxy_IIpv4Gateways struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IIpv4Gateways) AttrIpv4GatewayIds() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrIpv4GatewayIds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IIpv4Gateways) AttrIpv4Gateways() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrIpv4Gateways",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IIpv4Gateways) Props() *Ipv4GatewaysProps {
	var returns *Ipv4GatewaysProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

