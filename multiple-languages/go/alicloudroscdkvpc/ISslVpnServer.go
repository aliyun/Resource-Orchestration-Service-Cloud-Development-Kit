package alicloudroscdkvpc

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkvpc/internal"
)

// Represents a `SslVpnServer`.
type ISslVpnServer interface {
	alicloudroscdkcore.IResource
	// Attribute SslVpnServerId: ID of the SSL-VPN server.
	AttrSslVpnServerId() interface{}
	Props() *SslVpnServerProps
}

// The jsii proxy for ISslVpnServer
type jsiiProxy_ISslVpnServer struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_ISslVpnServer) AttrSslVpnServerId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSslVpnServerId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISslVpnServer) Props() *SslVpnServerProps {
	var returns *SslVpnServerProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

