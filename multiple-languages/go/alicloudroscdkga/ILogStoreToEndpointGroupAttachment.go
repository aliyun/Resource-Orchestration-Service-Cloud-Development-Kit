package alicloudroscdkga

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkga/internal"
)

// Represents a `LogStoreToEndpointGroupAttachment`.
type ILogStoreToEndpointGroupAttachment interface {
	alicloudroscdkcore.IResource
	Props() *LogStoreToEndpointGroupAttachmentProps
}

// The jsii proxy for ILogStoreToEndpointGroupAttachment
type jsiiProxy_ILogStoreToEndpointGroupAttachment struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_ILogStoreToEndpointGroupAttachment) Props() *LogStoreToEndpointGroupAttachmentProps {
	var returns *LogStoreToEndpointGroupAttachmentProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

