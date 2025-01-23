package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkecs/datasource/internal"
)

// Represents a `Images`.
type IImages interface {
	alicloudroscdkcore.IResource
	// Attribute ImageIds: The list of image IDs.
	AttrImageIds() interface{}
	// Attribute Images: The list of images.
	AttrImages() interface{}
	Props() *ImagesProps
}

// The jsii proxy for IImages
type jsiiProxy_IImages struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IImages) AttrImageIds() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrImageIds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IImages) AttrImages() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrImages",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IImages) Props() *ImagesProps {
	var returns *ImagesProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

