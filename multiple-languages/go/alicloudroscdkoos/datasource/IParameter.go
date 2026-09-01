package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkoos/datasource/internal"
)

// Represents a `Parameter`.
type IParameter interface {
	alicloudroscdkcore.IResource
	// Attribute Constraints: The constraints of the common parameter.
	AttrConstraints() interface{}
	// Attribute CreatedBy: The user who created the common parameter.
	AttrCreatedBy() interface{}
	// Attribute CreatedDate: The time when the common parameter was created.
	AttrCreatedDate() interface{}
	// Attribute Description: The description of the common parameter.
	AttrDescription() interface{}
	// Attribute ParameterId: The ID of the common parameter.
	AttrParameterId() interface{}
	// Attribute ParameterVersion: The version number of the common parameter.
	AttrParameterVersion() interface{}
	// Attribute ShareType: The share type of the common parameter.
	AttrShareType() interface{}
	// Attribute Tags: The tags of the common parameter.
	AttrTags() interface{}
	// Attribute Type: The data type of the common parameter.
	AttrType() interface{}
	// Attribute UpdatedBy: The user who last updated the common parameter.
	AttrUpdatedBy() interface{}
	// Attribute UpdatedDate: The time when the common parameter was last updated.
	AttrUpdatedDate() interface{}
	// Attribute Value: The value of the common parameter.
	AttrValue() interface{}
	Props() *ParameterProps
}

// The jsii proxy for IParameter
type jsiiProxy_IParameter struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IParameter) AttrConstraints() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrConstraints",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IParameter) AttrCreatedBy() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCreatedBy",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IParameter) AttrCreatedDate() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCreatedDate",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IParameter) AttrDescription() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDescription",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IParameter) AttrParameterId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrParameterId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IParameter) AttrParameterVersion() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrParameterVersion",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IParameter) AttrShareType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrShareType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IParameter) AttrTags() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTags",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IParameter) AttrType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IParameter) AttrUpdatedBy() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrUpdatedBy",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IParameter) AttrUpdatedDate() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrUpdatedDate",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IParameter) AttrValue() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrValue",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IParameter) Props() *ParameterProps {
	var returns *ParameterProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

