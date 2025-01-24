package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkeci/datasource/internal"
)

// Represents a `ImageCaches`.
type IImageCaches interface {
	alicloudroscdkcore.IResource
	// Attribute ImageCacheIds: The list of image cache IDs.
	AttrImageCacheIds() interface{}
	// Attribute ImageCaches: The list of image caches.
	AttrImageCaches() interface{}
	Props() *ImageCachesProps
}

// The jsii proxy for IImageCaches
type jsiiProxy_IImageCaches struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IImageCaches) AttrImageCacheIds() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrImageCacheIds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IImageCaches) AttrImageCaches() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrImageCaches",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IImageCaches) Props() *ImageCachesProps {
	var returns *ImageCachesProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

