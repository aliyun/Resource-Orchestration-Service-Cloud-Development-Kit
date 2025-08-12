package alicloudroscdkvpc

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkvpc/internal"
)

// Represents a `VcoRouteEntry`.
type IVcoRouteEntry interface {
	alicloudroscdkcore.IResource
	// Attribute VpnConnectionId: The ID of the VPN connection.
	AttrVpnConnectionId() interface{}
	Props() *VcoRouteEntryProps
}

// The jsii proxy for IVcoRouteEntry
type jsiiProxy_IVcoRouteEntry struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IVcoRouteEntry) AttrVpnConnectionId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrVpnConnectionId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IVcoRouteEntry) Props() *VcoRouteEntryProps {
	var returns *VcoRouteEntryProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

