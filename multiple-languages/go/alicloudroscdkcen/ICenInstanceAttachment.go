package alicloudroscdkcen

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcen/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `CenInstanceAttachment`.
type ICenInstanceAttachment interface {
	alicloudroscdkcore.IResource
	Props() *CenInstanceAttachmentProps
}

// The jsii proxy for ICenInstanceAttachment
type jsiiProxy_ICenInstanceAttachment struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_ICenInstanceAttachment) Props() *CenInstanceAttachmentProps {
	var returns *CenInstanceAttachmentProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

