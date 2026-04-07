package alicloudroscdkbastionhost

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkbastionhost/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `HostAccountUserGroupAttachment`.
type IHostAccountUserGroupAttachment interface {
	alicloudroscdkcore.IResource
	Props() *HostAccountUserGroupAttachmentProps
}

// The jsii proxy for IHostAccountUserGroupAttachment
type jsiiProxy_IHostAccountUserGroupAttachment struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IHostAccountUserGroupAttachment) Props() *HostAccountUserGroupAttachmentProps {
	var returns *HostAccountUserGroupAttachmentProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

