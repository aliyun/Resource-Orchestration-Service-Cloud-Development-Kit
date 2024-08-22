package alicloudroscdkcore

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"
)

// ROS template options for a stack.
type ITemplateOptions interface {
	// Gets or sets the description of this stack.
	//
	// If provided, it will be included in the ROS template's "Description" attribute.
	Description() *string
	SetDescription(d *string)
	// Metadata associated with the ROS template.
	Metadata() *map[string]interface{}
	SetMetadata(m *map[string]interface{})
}

// The jsii proxy for ITemplateOptions
type jsiiProxy_ITemplateOptions struct {
	_ byte // padding
}

func (j *jsiiProxy_ITemplateOptions) Description() *string {
	var returns *string
	_jsii_.Get(
		j,
		"description",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ITemplateOptions)SetDescription(val *string) {
	_jsii_.Set(
		j,
		"description",
		val,
	)
}

func (j *jsiiProxy_ITemplateOptions) Metadata() *map[string]interface{} {
	var returns *map[string]interface{}
	_jsii_.Get(
		j,
		"metadata",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ITemplateOptions)SetMetadata(val *map[string]interface{}) {
	_jsii_.Set(
		j,
		"metadata",
		val,
	)
}

