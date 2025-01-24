package alicloudroscdkslb

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkslb/internal"
)

// Represents a `BackendServerAttachment`.
type IBackendServerAttachment interface {
	alicloudroscdkcore.IResource
	// Attribute BackendServers: The collection of attached backend server.
	AttrBackendServers() interface{}
	// Attribute LoadBalancerId: The id of load balancer.
	AttrLoadBalancerId() interface{}
	Props() *BackendServerAttachmentProps
}

// The jsii proxy for IBackendServerAttachment
type jsiiProxy_IBackendServerAttachment struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IBackendServerAttachment) AttrBackendServers() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrBackendServers",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IBackendServerAttachment) AttrLoadBalancerId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrLoadBalancerId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IBackendServerAttachment) Props() *BackendServerAttachmentProps {
	var returns *BackendServerAttachmentProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

