package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkoos/datasource/internal"
)

// Represents a `Templates`.
type ITemplates interface {
	alicloudroscdkcore.IResource
	// Attribute TemplateNames: The list of template_names.
	AttrTemplateNames() interface{}
	// Attribute Templates: The list of templates.
	AttrTemplates() interface{}
	Props() *TemplatesProps
}

// The jsii proxy for ITemplates
type jsiiProxy_ITemplates struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_ITemplates) AttrTemplateNames() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTemplateNames",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ITemplates) AttrTemplates() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTemplates",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ITemplates) Props() *TemplatesProps {
	var returns *TemplatesProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

