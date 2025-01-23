package alicloudroscdkvpc

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkvpc/internal"
)

// Represents a `VpnPbrRouteEntry`.
type IVpnPbrRouteEntry interface {
	alicloudroscdkcore.IResource
	// Attribute NextHop: The next hop of the destination route entry.
	AttrNextHop() interface{}
	// Attribute RouteDest: The destination CIDR block of the destination route.
	AttrRouteDest() interface{}
	// Attribute RouteSource: The destination CIDR block of the policy-based route.
	AttrRouteSource() interface{}
	// Attribute VpnGatewayId: The ID of the VPN Gateway.
	AttrVpnGatewayId() interface{}
	Props() *VpnPbrRouteEntryProps
}

// The jsii proxy for IVpnPbrRouteEntry
type jsiiProxy_IVpnPbrRouteEntry struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IVpnPbrRouteEntry) AttrNextHop() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrNextHop",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IVpnPbrRouteEntry) AttrRouteDest() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRouteDest",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IVpnPbrRouteEntry) AttrRouteSource() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRouteSource",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IVpnPbrRouteEntry) AttrVpnGatewayId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrVpnGatewayId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IVpnPbrRouteEntry) Props() *VpnPbrRouteEntryProps {
	var returns *VpnPbrRouteEntryProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

