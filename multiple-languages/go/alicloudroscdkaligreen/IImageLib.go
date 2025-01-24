package alicloudroscdkaligreen

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkaligreen/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `ImageLib`.
type IImageLib interface {
	alicloudroscdkcore.IResource
	// Attribute BizTypes: List of business scenarios.
	AttrBizTypes() interface{}
	// Attribute Category: The category of the image library.
	AttrCategory() interface{}
	// Attribute Enable: Specifies whether to enable the image library.
	AttrEnable() interface{}
	// Attribute ImageLibId: The ID of the primary key of the image library.
	AttrImageLibId() interface{}
	// Attribute ImageLibName: The name of the image library defined by the customer.
	AttrImageLibName() interface{}
	// Attribute Scene: The moderation scenario to which the custom image library applies.
	AttrScene() interface{}
	Props() *ImageLibProps
}

// The jsii proxy for IImageLib
type jsiiProxy_IImageLib struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IImageLib) AttrBizTypes() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrBizTypes",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IImageLib) AttrCategory() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCategory",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IImageLib) AttrEnable() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrEnable",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IImageLib) AttrImageLibId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrImageLibId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IImageLib) AttrImageLibName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrImageLibName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IImageLib) AttrScene() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrScene",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IImageLib) Props() *ImageLibProps {
	var returns *ImageLibProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

