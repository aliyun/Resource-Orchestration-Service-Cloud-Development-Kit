package alicloudroscdkecs

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkecs/internal"
)

// Represents a `CloneDisks`.
type ICloneDisks interface {
	alicloudroscdkcore.IResource
	// Attribute DiskIds: The IDS of the disk.
	AttrDiskIds() interface{}
	Props() *CloneDisksProps
}

// The jsii proxy for ICloneDisks
type jsiiProxy_ICloneDisks struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_ICloneDisks) AttrDiskIds() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDiskIds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICloneDisks) Props() *CloneDisksProps {
	var returns *CloneDisksProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

