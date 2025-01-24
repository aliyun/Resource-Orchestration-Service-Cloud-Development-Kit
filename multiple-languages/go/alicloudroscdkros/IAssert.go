package alicloudroscdkros

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkros/internal"
)

// Represents a `Assert`.
type IAssert interface {
	alicloudroscdkcore.IResource
	// Attribute FailureCause: The reason the assertion failed.
	AttrFailureCause() interface{}
	// Attribute Result: The result of the assert.
	AttrResult() interface{}
	Props() *AssertProps
}

// The jsii proxy for IAssert
type jsiiProxy_IAssert struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IAssert) AttrFailureCause() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrFailureCause",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAssert) AttrResult() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrResult",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAssert) Props() *AssertProps {
	var returns *AssertProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

