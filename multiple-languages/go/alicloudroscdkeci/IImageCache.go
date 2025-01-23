package alicloudroscdkeci

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkeci/internal"
)

// Represents a `ImageCache`.
type IImageCache interface {
	alicloudroscdkcore.IResource
	// Attribute ImageCacheId: The ID of the image cache.
	AttrImageCacheId() interface{}
	Props() *ImageCacheProps
}

// The jsii proxy for IImageCache
type jsiiProxy_IImageCache struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IImageCache) AttrImageCacheId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrImageCacheId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IImageCache) Props() *ImageCacheProps {
	var returns *ImageCacheProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

