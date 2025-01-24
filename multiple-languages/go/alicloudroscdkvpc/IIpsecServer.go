package alicloudroscdkvpc

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkvpc/internal"
)

// Represents a `IpsecServer`.
type IIpsecServer interface {
	alicloudroscdkcore.IResource
	// Attribute IpsecServerId: IPsec server ID.
	AttrIpsecServerId() interface{}
	// Attribute IpsecServerName: IPsec server name.
	AttrIpsecServerName() interface{}
	Props() *IpsecServerProps
}

// The jsii proxy for IIpsecServer
type jsiiProxy_IIpsecServer struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IIpsecServer) AttrIpsecServerId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrIpsecServerId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IIpsecServer) AttrIpsecServerName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrIpsecServerName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IIpsecServer) Props() *IpsecServerProps {
	var returns *IpsecServerProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

