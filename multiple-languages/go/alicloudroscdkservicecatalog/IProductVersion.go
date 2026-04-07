package alicloudroscdkservicecatalog

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkservicecatalog/internal"
)

// Represents a `ProductVersion`.
type IProductVersion interface {
	alicloudroscdkcore.IResource
	// Attribute Active: Specifies whether the product version is active.
	AttrActive() interface{}
	// Attribute CreateTime: The creation time of the product version.
	AttrCreateTime() interface{}
	// Attribute Description: The description of the product version.
	AttrDescription() interface{}
	// Attribute Guidance: The recommendation information.
	AttrGuidance() interface{}
	// Attribute ProductId: The ID of the product to which the product version belongs.
	AttrProductId() interface{}
	// Attribute ProductVersionId: The ID of the product version.
	AttrProductVersionId() interface{}
	// Attribute ProductVersionName: The name of the product version.
	AttrProductVersionName() interface{}
	// Attribute TemplateType: The type of the product template.
	AttrTemplateType() interface{}
	// Attribute TemplateUrl: The URL of the template.
	AttrTemplateUrl() interface{}
	Props() *ProductVersionProps
}

// The jsii proxy for IProductVersion
type jsiiProxy_IProductVersion struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IProductVersion) AttrActive() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrActive",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IProductVersion) AttrCreateTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCreateTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IProductVersion) AttrDescription() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDescription",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IProductVersion) AttrGuidance() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrGuidance",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IProductVersion) AttrProductId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrProductId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IProductVersion) AttrProductVersionId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrProductVersionId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IProductVersion) AttrProductVersionName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrProductVersionName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IProductVersion) AttrTemplateType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTemplateType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IProductVersion) AttrTemplateUrl() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTemplateUrl",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IProductVersion) Props() *ProductVersionProps {
	var returns *ProductVersionProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

