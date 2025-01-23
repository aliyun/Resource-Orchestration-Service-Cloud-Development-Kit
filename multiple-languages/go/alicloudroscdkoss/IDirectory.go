package alicloudroscdkoss

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkoss/internal"
)

// Represents a `Directory`.
type IDirectory interface {
	alicloudroscdkcore.IResource
	// Attribute BucketName: The name of Bucket.
	AttrBucketName() interface{}
	// Attribute DirectoryName: The name of Directory.
	AttrDirectoryName() interface{}
	Props() *DirectoryProps
}

// The jsii proxy for IDirectory
type jsiiProxy_IDirectory struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IDirectory) AttrBucketName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrBucketName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDirectory) AttrDirectoryName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDirectoryName",
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

