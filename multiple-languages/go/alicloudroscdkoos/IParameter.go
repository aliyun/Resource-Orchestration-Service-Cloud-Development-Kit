package alicloudroscdkoos

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkoos/internal"
)

// Represents a `Parameter`.
type IParameter interface {
	alicloudroscdkcore.IResource
	// Attribute Name: The Name of the parameter.
	AttrName() interface{}
	// Attribute Value: The Value of the parameter.
	AttrValue() interface{}
	Props() *ParameterProps
}

// The jsii proxy for IParameter
type jsiiProxy_IParameter struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IParameter) AttrName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrName",
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

