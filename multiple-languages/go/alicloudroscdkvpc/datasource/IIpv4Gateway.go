package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkvpc/datasource/internal"
)

// Represents a `Ipv4Gateway`.
type IIpv4Gateway interface {
	alicloudroscdkcore.IResource
	// Attribute CreateTime: The creation time of the resource.
	AttrCreateTime() interface{}
	// Attribute Enabled: Enabled.
	AttrEnabled() interface{}
	// Attribute Ipv4GatewayDescription: Description information.
	AttrIpv4GatewayDescription() interface{}
	// Attribute Ipv4GatewayId: The resource attribute field that represents the resource level 1 ID.
	AttrIpv4GatewayId() interface{}
	// Attribute Ipv4GatewayName: Resource name.
	AttrIpv4GatewayName() interface{}
	// Attribute Ipv4GatewayRouteTableId: ID of the route table associated with IPv4 Gateway.
	AttrIpv4GatewayRouteTableId() interface{}
	// Attribute VpcId: The ID of the VPC associated with the IPv4 Gateway.
	AttrVpcId() interface{}
	Props() *Ipv4GatewayProps
}

// The jsii proxy for IIpv4Gateway
type jsiiProxy_IIpv4Gateway struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IIpv4Gateway) AttrCreateTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCreateTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IIpv4Gateway) AttrEnabled() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrEnabled",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IIpv4Gateway) AttrIpv4GatewayDescription() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrIpv4GatewayDescription",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IIpv4Gateway) AttrIpv4GatewayId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrIpv4GatewayId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IIpv4Gateway) AttrIpv4GatewayName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrIpv4GatewayName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IIpv4Gateway) AttrIpv4GatewayRouteTableId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrIpv4GatewayRouteTableId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IIpv4Gateway) AttrVpcId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrVpcId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IIpv4Gateway) Props() *Ipv4GatewayProps {
	var returns *Ipv4GatewayProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

