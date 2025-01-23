package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcloudphone/datasource/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `Image`.
type IImage interface {
	alicloudroscdkcore.IResource
	// Attribute CreateTime: Image creation time, in ISO 8601 format.
	AttrCreateTime() interface{}
	// Attribute Description: Image description.
	AttrDescription() interface{}
	// Attribute ImageCategory: Image type.
	AttrImageCategory() interface{}
	// Attribute ImageId: Image ID.
	AttrImageId() interface{}
	// Attribute ImageName: The name of the mirror image.
	AttrImageName() interface{}
	// Attribute IsSelfShared: Whether the image has been shared with other users.
	AttrIsSelfShared() interface{}
	// Attribute OsName: The Chinese display name of the operating system.
	AttrOsName() interface{}
	// Attribute OsNameEn: The English display name of the operating system.
	AttrOsNameEn() interface{}
	// Attribute OsType: Operating system type.
	AttrOsType() interface{}
	// Attribute Platform: Operating system distribution.
	AttrPlatform() interface{}
	// Attribute Progress: The progress of mirror image production.
	AttrProgress() interface{}
	// Attribute Status: Image state.
	AttrStatus() interface{}
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

func (j *jsiiProxy_IImage) AttrStatus() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrStatus",
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

