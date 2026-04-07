package alicloudroscdkcen

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcen/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `TransitRouterGrantAttachment`.
type ITransitRouterGrantAttachment interface {
	alicloudroscdkcore.IResource
	Props() *TransitRouterGrantAttachmentProps
}

// The jsii proxy for ITransitRouterGrantAttachment
type jsiiProxy_ITransitRouterGrantAttachment struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_ITransitRouterGrantAttachment) Props() *TransitRouterGrantAttachmentProps {
	var returns *TransitRouterGrantAttachmentProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

