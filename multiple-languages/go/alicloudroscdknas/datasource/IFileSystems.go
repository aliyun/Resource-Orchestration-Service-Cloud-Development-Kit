package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdknas/datasource/internal"
)

// Represents a `FileSystems`.
type IFileSystems interface {
	alicloudroscdkcore.IResource
	// Attribute FileSystemIds: The list of file system IDs.
	AttrFileSystemIds() interface{}
	// Attribute FileSystems: The list of file systems.
	AttrFileSystems() interface{}
	Props() *FileSystemsProps
}

// The jsii proxy for IFileSystems
type jsiiProxy_IFileSystems struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IFileSystems) AttrFileSystemIds() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrFileSystemIds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IFileSystems) AttrFileSystems() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrFileSystems",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IFileSystems) Props() *FileSystemsProps {
	var returns *FileSystemsProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

