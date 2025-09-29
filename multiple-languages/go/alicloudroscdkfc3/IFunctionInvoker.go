package alicloudroscdkfc3

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkfc3/internal"
)

// Represents a `FunctionInvoker`.
type IFunctionInvoker interface {
	alicloudroscdkcore.IResource
	// Attribute Result: Depends on result type: NoResult: Async invoke has no result.
	//
	// Success: The response of the function. The response should be utf-8 encoded string, otherwise ROS will report an error. If the response is binary, encode it via base64 before it is returned.
	// Failure: Error Message.
	AttrResult() interface{}
	// Attribute ResultType: Result type: NoResult: Async invoke has no result.
	//
	// Success: Sync invoke succeeds.
	// Failure: Sync invoke fails.
	AttrResultType() interface{}
	Props() *FunctionInvokerProps
}

// The jsii proxy for IFunctionInvoker
type jsiiProxy_IFunctionInvoker struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IFunctionInvoker) AttrResult() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrResult",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IFunctionInvoker) AttrResultType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrResultType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IFunctionInvoker) Props() *FunctionInvokerProps {
	var returns *FunctionInvokerProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

