package alicloudroscdkamqp

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkamqp/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `VirtualHost`.
type IVirtualHost interface {
	alicloudroscdkcore.IResource
	// Attribute VirtualHost: The name of the virtual host.
	AttrVirtualHost() interface{}
	Props() *VirtualHostProps
}

// The jsii proxy for IVirtualHost
type jsiiProxy_IVirtualHost struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IVirtualHost) AttrVirtualHost() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrVirtualHost",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IVirtualHost) Props() *VirtualHostProps {
	var returns *VirtualHostProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

