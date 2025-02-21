package alicloudroscdknlb

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdknlb/internal"
)

// Represents a `BackendServerAttachment`.
type IBackendServerAttachment interface {
	alicloudroscdkcore.IResource
	// Attribute ServerGroupId: The ID of the server group.
	AttrServerGroupId() interface{}
	Props() *BackendServerAttachmentProps
}

// The jsii proxy for IBackendServerAttachment
type jsiiProxy_IBackendServerAttachment struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IBackendServerAttachment) AttrServerGroupId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrServerGroupId",
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

