package alicloudroscdkagentrun

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkagentrun/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `Template`.
type ITemplate interface {
	alicloudroscdkcore.IResource
	// Attribute TemplateArn: The ARN of the template.
	AttrTemplateArn() interface{}
	// Attribute TemplateId: The ID of the template.
	AttrTemplateId() interface{}
	// Attribute TemplateName: The name of the template.
	AttrTemplateName() interface{}
	Props() *TemplateProps
}

// The jsii proxy for ITemplate
type jsiiProxy_ITemplate struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_ITemplate) AttrTemplateArn() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTemplateArn",
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

func (j *jsiiProxy_ITemplate) Props() *TemplateProps {
	var returns *TemplateProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

