package alicloudroscdkcloudsso

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcloudsso/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `Directory`.
type IDirectory interface {
	alicloudroscdkcore.IResource
	// Attribute DirectoryId: The ID of the directory.
	AttrDirectoryId() interface{}
	Props() *DirectoryProps
}

// The jsii proxy for IDirectory
type jsiiProxy_IDirectory struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IDirectory) AttrDirectoryId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDirectoryId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDirectory) Props() *DirectoryProps {
	var returns *DirectoryProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

