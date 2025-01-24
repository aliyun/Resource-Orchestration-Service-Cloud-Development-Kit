package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkeci/datasource/internal"
)

// Represents a `ImageCache`.
type IImageCache interface {
	alicloudroscdkcore.IResource
	// Attribute ContainerGroupId: ContainerGroupId.
	AttrContainerGroupId() interface{}
	// Attribute CreateTime: CreateTime.
	AttrCreateTime() interface{}
	// Attribute EliminationStrategy: The elimination strategy of the mirror cache.
	//
	// The default is empty, indicating that it has been kept.
	AttrEliminationStrategy() interface{}
	// Attribute Events: Events.
	AttrEvents() interface{}
	// Attribute ExpireDateTime: ExpireDateTime.
	AttrExpireDateTime() interface{}
	// Attribute FlashSnapshotId: FlashSnapshotId.
	AttrFlashSnapshotId() interface{}
	// Attribute ImageCacheId: ImageCacheId.
	AttrImageCacheId() interface{}
	// Attribute ImageCacheName: ImageCacheName.
	AttrImageCacheName() interface{}
	// Attribute ImageCacheSize: ImageCacheSize.
	AttrImageCacheSize() interface{}
	// Attribute ImageCacheTags: Tags.
	AttrImageCacheTags() interface{}
	// Attribute Images: Images.
	AttrImages() interface{}
	// Attribute Progress: Progress.
	AttrProgress() interface{}
	// Attribute ResourceGroupId: ResourceGroupId.
	AttrResourceGroupId() interface{}
	// Attribute SnapshotId: SnapshotId.
	AttrSnapshotId() interface{}
	Props() *ImageCacheProps
}

// The jsii proxy for IImageCache
type jsiiProxy_IImageCache struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IImageCache) AttrContainerGroupId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrContainerGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IImageCache) AttrCreateTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCreateTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IImageCache) AttrEliminationStrategy() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrEliminationStrategy",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IImageCache) AttrEvents() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrEvents",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IImageCache) AttrExpireDateTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrExpireDateTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IImageCache) AttrFlashSnapshotId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrFlashSnapshotId",
		&returns,
	)
	return returns
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

func (j *jsiiProxy_IImageCache) AttrImageCacheName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrImageCacheName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IImageCache) AttrImageCacheSize() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrImageCacheSize",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IImageCache) AttrImageCacheTags() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrImageCacheTags",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IImageCache) AttrImages() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrImages",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IImageCache) AttrProgress() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrProgress",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IImageCache) AttrResourceGroupId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrResourceGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IImageCache) AttrSnapshotId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSnapshotId",
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

