package alicloudroscdkens

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkens/internal"
)

// Represents a `DiskInstanceAttachment`.
type IDiskInstanceAttachment interface {
	alicloudroscdkcore.IResource
	// Attribute DiskId: The ID of the cloud disk to be mounted.
	//
	// The Cloud Disk (DiskId) and the instance (InstanceId) must be on the same node.
	AttrDiskId() interface{}
	// Attribute InstanceId: Instance ID.
	AttrInstanceId() interface{}
	Props() *DiskInstanceAttachmentProps
}

// The jsii proxy for IDiskInstanceAttachment
type jsiiProxy_IDiskInstanceAttachment struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IDiskInstanceAttachment) AttrDiskId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDiskId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDiskInstanceAttachment) AttrInstanceId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrInstanceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDiskInstanceAttachment) Props() *DiskInstanceAttachmentProps {
	var returns *DiskInstanceAttachmentProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

