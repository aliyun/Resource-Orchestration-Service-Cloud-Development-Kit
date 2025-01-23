package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkecs/datasource/internal"
)

// Represents a `Disks`.
type IDisks interface {
	alicloudroscdkcore.IResource
	// Attribute DiskIds: The list of disk IDs.
	AttrDiskIds() interface{}
	// Attribute Disks: The list of disks.
	AttrDisks() interface{}
	Props() *DisksProps
}

// The jsii proxy for IDisks
type jsiiProxy_IDisks struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IDisks) AttrDiskIds() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDiskIds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDisks) AttrDisks() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDisks",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDisks) Props() *DisksProps {
	var returns *DisksProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

