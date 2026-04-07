package alicloudroscdkoss

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkoss/internal"
)

// Represents a `BucketStyle`.
type IBucketStyle interface {
	alicloudroscdkcore.IResource
	// Attribute Category: Style category, valid values: image, document, video.
	AttrCategory() interface{}
	// Attribute Content: The Image style content can contain single or multiple image processing parameters.
	AttrContent() interface{}
	// Attribute CreateTime: Image Style Creation Time.
	AttrCreateTime() interface{}
	// Attribute LastModifyTime: Last modification time of Image style.
	AttrLastModifyTime() interface{}
	// Attribute StyleName: Image Style Name.
	AttrStyleName() interface{}
	Props() *BucketStyleProps
}

// The jsii proxy for IBucketStyle
type jsiiProxy_IBucketStyle struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IBucketStyle) AttrCategory() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCategory",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IBucketStyle) AttrContent() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrContent",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IBucketStyle) AttrCreateTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCreateTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IBucketStyle) AttrLastModifyTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrLastModifyTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IBucketStyle) AttrStyleName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrStyleName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IBucketStyle) Props() *BucketStyleProps {
	var returns *BucketStyleProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

