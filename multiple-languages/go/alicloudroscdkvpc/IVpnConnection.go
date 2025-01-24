package alicloudroscdkvpc

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkvpc/internal"
)

// Represents a `VpnConnection`.
type IVpnConnection interface {
	alicloudroscdkcore.IResource
	// Attribute PeerVpnConnectionConfig: Peer vpc connection config.
	AttrPeerVpnConnectionConfig() interface{}
	// Attribute Status: Status of the IPsec connection.
	AttrStatus() interface{}
	// Attribute VpnConnectionId: ID of the IPsec connection.
	AttrVpnConnectionId() interface{}
	Props() *VpnConnectionProps
}

// The jsii proxy for IVpnConnection
type jsiiProxy_IVpnConnection struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IVpnConnection) AttrPeerVpnConnectionConfig() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPeerVpnConnectionConfig",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IVpnConnection) AttrStatus() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrStatus",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IVpnConnection) AttrVpnConnectionId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrVpnConnectionId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IVpnConnection) Props() *VpnConnectionProps {
	var returns *VpnConnectionProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

