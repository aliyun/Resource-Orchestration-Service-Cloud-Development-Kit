package alicloudroscdkfc3

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkfc3/internal"
)

// Represents a `Function`.
type IFunction interface {
	alicloudroscdkcore.IResource
	// Attribute ARN: The ARN for ALIYUN::ROS::CustomResource.
	AttrArn() interface{}
	// Attribute FunctionId: The function ID.
	AttrFunctionId() interface{}
	// Attribute FunctionName: The function name.
	AttrFunctionName() interface{}
	Props() *FunctionProps
}

// The jsii proxy for IFunction
type jsiiProxy_IFunction struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IFunction) AttrArn() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrArn",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IFunction) AttrFunctionId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrFunctionId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IFunction) AttrFunctionName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrFunctionName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IFunction) Props() *FunctionProps {
	var returns *FunctionProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

