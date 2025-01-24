package alicloudroscdkecs

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkecs/internal"
)

// Represents a `DiskAttachment`.
type IDiskAttachment interface {
	alicloudroscdkcore.IResource
	// Attribute Device: The device where the volume is exposed on ecs instance.
	AttrDevice() interface{}
	// Attribute DiskId: The disk id of created disk.
	AttrDiskId() interface{}
	// Attribute Status: The disk status now.
	AttrStatus() interface{}
	Props() *DiskAttachmentProps
}

// The jsii proxy for IDiskAttachment
type jsiiProxy_IDiskAttachment struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IDiskAttachment) AttrDevice() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDevice",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDiskAttachment) AttrDiskId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDiskId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDiskAttachment) AttrStatus() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrStatus",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDiskAttachment) Props() *DiskAttachmentProps {
	var returns *DiskAttachmentProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

