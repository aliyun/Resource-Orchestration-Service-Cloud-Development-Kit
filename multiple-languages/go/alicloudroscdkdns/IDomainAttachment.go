package alicloudroscdkdns

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkdns/internal"
)

// Represents a `DomainAttachment`.
type IDomainAttachment interface {
	alicloudroscdkcore.IResource
	Props() *DomainAttachmentProps
}

// The jsii proxy for IDomainAttachment
type jsiiProxy_IDomainAttachment struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IDomainAttachment) Props() *DomainAttachmentProps {
	var returns *DomainAttachmentProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

