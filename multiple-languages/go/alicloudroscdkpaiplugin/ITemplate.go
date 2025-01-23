package alicloudroscdkpaiplugin

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkpaiplugin/internal"
)

// Represents a `Template`.
type ITemplate interface {
	alicloudroscdkcore.IResource
	// Attribute CreatedTime: The creation time of the Signature.
	AttrCreatedTime() interface{}
	// Attribute Description: Application instructions.
	AttrDescription() interface{}
	// Attribute Id: The ID of the Signature.
	AttrId() interface{}
	// Attribute Name: The name of the Signature.
	AttrName() interface{}
	// Attribute Reason: Review recommendations.
	AttrReason() interface{}
	Props() *TemplateProps
}

// The jsii proxy for ITemplate
type jsiiProxy_ITemplate struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_ITemplate) AttrCreatedTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCreatedTime",
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

func (j *jsiiProxy_ITemplate) AttrId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ITemplate) AttrName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ITemplate) AttrReason() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrReason",
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

