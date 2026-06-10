package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkbpstudio/datasource/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `Template`.
type ITemplate interface {
	alicloudroscdkcore.IResource
	// Attribute CreateTime: The creation time of the resource.
	AttrCreateTime() interface{}
	// Attribute Description: Template description.
	AttrDescription() interface{}
	// Attribute ImageUrl: Representative resource picture address.
	AttrImageUrl() interface{}
	// Attribute ResourceGroupId: The ID of the resource group.
	AttrResourceGroupId() interface{}
	// Attribute TemplateId: The first ID of the resource.
	AttrTemplateId() interface{}
	// Attribute TemplateName: The name of the resource.
	AttrTemplateName() interface{}
	// Attribute TopoUrl: Represents resource file address.
	AttrTopoUrl() interface{}
	Props() *TemplateProps
}

// The jsii proxy for ITemplate
type jsiiProxy_ITemplate struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_ITemplate) AttrCreateTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCreateTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ITemplate) AttrDescription() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDescription",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ITemplate) AttrImageUrl() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrImageUrl",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ITemplate) AttrResourceGroupId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrResourceGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ITemplate) AttrTemplateId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTemplateId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ITemplate) AttrTemplateName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTemplateName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ITemplate) AttrTopoUrl() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTopoUrl",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ITemplate) Props() *TemplateProps {
	var returns *TemplateProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

