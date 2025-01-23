package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkfc/datasource/internal"
)

// Represents a `Functions`.
type IFunctions interface {
	alicloudroscdkcore.IResource
	// Attribute FunctionNames: The list of function names.
	AttrFunctionNames() interface{}
	// Attribute Functions: The list of functions.
	AttrFunctions() interface{}
	Props() *FunctionsProps
}

// The jsii proxy for IFunctions
type jsiiProxy_IFunctions struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IFunctions) AttrFunctionNames() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrFunctionNames",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IFunctions) AttrFunctions() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrFunctions",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IFunctions) Props() *FunctionsProps {
	var returns *FunctionsProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

