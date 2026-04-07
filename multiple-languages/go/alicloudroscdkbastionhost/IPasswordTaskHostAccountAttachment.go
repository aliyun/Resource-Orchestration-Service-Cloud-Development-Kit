package alicloudroscdkbastionhost

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkbastionhost/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `PasswordTaskHostAccountAttachment`.
type IPasswordTaskHostAccountAttachment interface {
	alicloudroscdkcore.IResource
	Props() *PasswordTaskHostAccountAttachmentProps
}

// The jsii proxy for IPasswordTaskHostAccountAttachment
type jsiiProxy_IPasswordTaskHostAccountAttachment struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IPasswordTaskHostAccountAttachment) Props() *PasswordTaskHostAccountAttachmentProps {
	var returns *PasswordTaskHostAccountAttachmentProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

