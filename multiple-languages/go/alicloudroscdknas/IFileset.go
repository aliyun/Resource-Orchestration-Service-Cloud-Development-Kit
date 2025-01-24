package alicloudroscdknas

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdknas/internal"
)

// Represents a `Fileset`.
type IFileset interface {
	alicloudroscdkcore.IResource
	// Attribute FileSystemId: File system ID.
	AttrFileSystemId() interface{}
	// Attribute FileSystemPath: File system path.
	AttrFileSystemPath() interface{}
	// Attribute FsetId: Fileset ID.
	AttrFsetId() interface{}
	Props() *FilesetProps
}

// The jsii proxy for IFileset
type jsiiProxy_IFileset struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IFileset) AttrFileSystemId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrFileSystemId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IFileset) AttrFileSystemPath() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrFileSystemPath",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IFileset) AttrFsetId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrFsetId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IFileset) Props() *FilesetProps {
	var returns *FilesetProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

