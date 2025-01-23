package alicloudroscdknas

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdknas/internal"
)

// Represents a `FileSystem`.
type IFileSystem interface {
	alicloudroscdkcore.IResource
	// Attribute FileSystemId: ID of the file system created.
	AttrFileSystemId() interface{}
	Props() *FileSystemProps
}

// The jsii proxy for IFileSystem
type jsiiProxy_IFileSystem struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IFileSystem) AttrFileSystemId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrFileSystemId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IFileSystem) Props() *FileSystemProps {
	var returns *FileSystemProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

