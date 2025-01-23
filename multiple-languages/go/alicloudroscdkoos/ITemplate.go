package alicloudroscdkoos

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkoos/internal"
)

// Represents a `Template`.
type ITemplate interface {
	alicloudroscdkcore.IResource
	// Attribute ExecutionPolicy: Execution Policy.
	AttrExecutionPolicy() interface{}
	// Attribute TemplateId: Template ID.
	AttrTemplateId() interface{}
	// Attribute TemplateName: Template Name.
	AttrTemplateName() interface{}
	Props() *TemplateProps
}

// The jsii proxy for ITemplate
type jsiiProxy_ITemplate struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_ITemplate) AttrExecutionPolicy() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrExecutionPolicy",
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

