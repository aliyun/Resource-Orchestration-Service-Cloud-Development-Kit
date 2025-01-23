package alicloudroscdkens

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkens/internal"
)

// Represents a `Disk`.
type IDisk interface {
	alicloudroscdkcore.IResource
	// Attribute DiskId: The ID of the instance.
	AttrDiskId() interface{}
	Props() *DiskProps
}

// The jsii proxy for IDisk
type jsiiProxy_IDisk struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IDisk) AttrDiskId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDiskId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDisk) Props() *DiskProps {
	var returns *DiskProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

