package alicloudroscdkcloudphone

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcloudphone/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `Image`.
type IImage interface {
	alicloudroscdkcore.IResource
	// Attribute CreateTime: The time when the image was created.
	//
	// The time follows the ISO 8601 standard.
	AttrCreateTime() interface{}
	// Attribute Description: The image description.
	AttrDescription() interface{}
	// Attribute ImageCategory: The image type.
	AttrImageCategory() interface{}
	// Attribute ImageId: The image ID.
	AttrImageId() interface{}
	// Attribute ImageName: The image name.
	AttrImageName() interface{}
	// Attribute IsSelfShared: Indicates whether the image is shared with other Alibaba Cloud accounts.
	AttrIsSelfShared() interface{}
	// Attribute OsName: The display name of the OS in Chinese.
	AttrOsName() interface{}
	// Attribute OsNameEn: The display name of the OS in English.
	AttrOsNameEn() interface{}
	// Attribute OsType: The image OS.
	AttrOsType() interface{}
	// Attribute Platform: The OS distribution.
	AttrPlatform() interface{}
	// Attribute Progress: The progress of image creation.
	AttrProgress() interface{}
	// Attribute Usage: Whether the image is already running in the cloud phone instance.
	AttrUsage() interface{}
	Props() *ImageProps
}

// The jsii proxy for IImage
type jsiiProxy_IImage struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IImage) AttrCreateTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCreateTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IImage) AttrDescription() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDescription",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IImage) AttrImageCategory() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrImageCategory",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IImage) AttrImageId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrImageId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IImage) AttrImageName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrImageName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IImage) AttrIsSelfShared() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrIsSelfShared",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IImage) AttrOsName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrOsName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IImage) AttrOsNameEn() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrOsNameEn",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IImage) AttrOsType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrOsType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IImage) AttrPlatform() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPlatform",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IImage) AttrProgress() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrProgress",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IImage) AttrUsage() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrUsage",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IImage) Props() *ImageProps {
	var returns *ImageProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

