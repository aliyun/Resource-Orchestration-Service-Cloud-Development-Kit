package alicloudroscdkga

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkga/internal"
)

// Represents a `ResourceAttachment`.
type IResourceAttachment interface {
	alicloudroscdkcore.IResource
	Props() *ResourceAttachmentProps
}

// The jsii proxy for IResourceAttachment
type jsiiProxy_IResourceAttachment struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IResourceAttachment) Props() *ResourceAttachmentProps {
	var returns *ResourceAttachmentProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

