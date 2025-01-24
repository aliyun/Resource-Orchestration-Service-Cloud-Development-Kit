package alicloudroscdkvpc

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkvpc/internal"
)

// Represents a `VpnRouteEntry`.
type IVpnRouteEntry interface {
	alicloudroscdkcore.IResource
	// Attribute NextHop: The next hop of the destination route entry.
	AttrNextHop() interface{}
	// Attribute RouteDest: The destination CIDR block of the destination route.
	AttrRouteDest() interface{}
	// Attribute VpnGatewayId: The ID of the VPN Gateway.
	AttrVpnGatewayId() interface{}
	Props() *VpnRouteEntryProps
}

// The jsii proxy for IVpnRouteEntry
type jsiiProxy_IVpnRouteEntry struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IVpnRouteEntry) AttrNextHop() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrNextHop",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IVpnRouteEntry) AttrRouteDest() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRouteDest",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IVpnRouteEntry) AttrVpnGatewayId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrVpnGatewayId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IVpnRouteEntry) Props() *VpnRouteEntryProps {
	var returns *VpnRouteEntryProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

