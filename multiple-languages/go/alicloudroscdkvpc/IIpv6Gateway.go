package alicloudroscdkvpc

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkvpc/internal"
)

// Represents a `Ipv6Gateway`.
type IIpv6Gateway interface {
	alicloudroscdkcore.IResource
	// Attribute Ipv6GatewayId: ID IPv6 gateway.
	AttrIpv6GatewayId() interface{}
	Props() *Ipv6GatewayProps
}

// The jsii proxy for IIpv6Gateway
type jsiiProxy_IIpv6Gateway struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IIpv6Gateway) AttrIpv6GatewayId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrIpv6GatewayId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IIpv6Gateway) Props() *Ipv6GatewayProps {
	var returns *Ipv6GatewayProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

