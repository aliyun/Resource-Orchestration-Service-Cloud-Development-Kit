package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkoos/datasource/internal"
)

// Represents a `Template`.
type ITemplate interface {
	alicloudroscdkcore.IResource
	// Attribute Content: The content of the template.
	AttrContent() interface{}
	// Attribute CreatedBy: The creator of the template.
	AttrCreatedBy() interface{}
	// Attribute CreatedDate: Specifies to query the template that is created at or before the specified time.The value must be in the YYYY-MM-DDThh:mm::ssZ format.
	AttrCreatedDate() interface{}
	// Attribute Description: The description of the template.
	AttrDescription() interface{}
	// Attribute Hash: The SHA-256 value of the template content.
	AttrHash() interface{}
	// Attribute HasTrigger: Specifies whether to query the template that is configured with a trigger.
	AttrHasTrigger() interface{}
	// Attribute ResourceGroupId: The ID of the resource group.
	AttrResourceGroupId() interface{}
	// Attribute ShareType: The share type of the template.
	//
	// Valid values:
	// Public
	// Private.
	AttrShareType() interface{}
	// Attribute Tags: The tag keys and values.
	//
	// The number of key-value pairs ranges from 1 to 20. Example: {"k1":"k2","k2":"v2"}
	AttrTags() interface{}
	// Attribute TemplateFormat: The format of the template.
	//
	// Valid values:
	// JSON
	// YAML.
	AttrTemplateFormat() interface{}
	// Attribute TemplateId: The ID of the template.
	AttrTemplateId() interface{}
	// Attribute TemplateType: The type of the template.
	//
	// Valid values:
	// Automation: the template for automated tasks.
	// State: the template for configuration inventories.
	// Package: the template for software packages.
	AttrTemplateType() interface{}
	// Attribute UpdatedBy: The user who last updated the template.
	AttrUpdatedBy() interface{}
	// Attribute UpdatedDate: The time when the template was last updated.
	AttrUpdatedDate() interface{}
	Props() *TemplateProps
}

// The jsii proxy for ITemplate
type jsiiProxy_ITemplate struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_ITemplate) AttrContent() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrContent",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ITemplate) AttrCreatedBy() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCreatedBy",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ITemplate) AttrCreatedDate() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCreatedDate",
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

func (j *jsiiProxy_ITemplate) AttrHash() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrHash",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ITemplate) AttrHasTrigger() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrHasTrigger",
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

func (j *jsiiProxy_ITemplate) AttrShareType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrShareType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ITemplate) AttrTags() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTags",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ITemplate) AttrTemplateFormat() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTemplateFormat",
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

func (j *jsiiProxy_ITemplate) AttrTemplateType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTemplateType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ITemplate) AttrUpdatedBy() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrUpdatedBy",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ITemplate) AttrUpdatedDate() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrUpdatedDate",
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

