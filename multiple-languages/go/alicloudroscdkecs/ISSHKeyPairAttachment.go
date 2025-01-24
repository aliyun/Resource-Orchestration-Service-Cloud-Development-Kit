package alicloudroscdkecs

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkecs/internal"
)

// Represents a `SSHKeyPairAttachment`.
type ISSHKeyPairAttachment interface {
	alicloudroscdkcore.IResource
	Props() *SSHKeyPairAttachmentProps
}

// The jsii proxy for ISSHKeyPairAttachment
type jsiiProxy_ISSHKeyPairAttachment struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_ISSHKeyPairAttachment) Props() *SSHKeyPairAttachmentProps {
	var returns *SSHKeyPairAttachmentProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

