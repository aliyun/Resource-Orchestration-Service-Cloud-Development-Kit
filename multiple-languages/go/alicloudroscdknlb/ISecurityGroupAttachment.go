package alicloudroscdknlb

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdknlb/internal"
)

// Represents a `SecurityGroupAttachment`.
type ISecurityGroupAttachment interface {
	alicloudroscdkcore.IResource
	Props() *SecurityGroupAttachmentProps
}

// The jsii proxy for ISecurityGroupAttachment
type jsiiProxy_ISecurityGroupAttachment struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_ISecurityGroupAttachment) Props() *SecurityGroupAttachmentProps {
	var returns *SecurityGroupAttachmentProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

