package alicloudroscdkapig

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkapig/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `Operation`.
type IOperation interface {
	alicloudroscdkcore.IResource
	// Attribute CreateTime: The creation timestamp of the operation.
	AttrCreateTime() interface{}
	// Attribute Description: The description of the operation.
	AttrDescription() interface{}
	// Attribute Method: The method of http protocol.
	AttrMethod() interface{}
	// Attribute Mock: Mock configuration.
	AttrMock() interface{}
	// Attribute OperationId: The ID of the operation.
	AttrOperationId() interface{}
	// Attribute OperationName: The name of the resource.
	AttrOperationName() interface{}
	// Attribute Path: The interface path of the operation.
	AttrPath() interface{}
	Props() *OperationProps
}

// The jsii proxy for IOperation
type jsiiProxy_IOperation struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IOperation) AttrCreateTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCreateTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IOperation) AttrDescription() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDescription",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IOperation) AttrMethod() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrMethod",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IOperation) AttrMock() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrMock",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IOperation) AttrOperationId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrOperationId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IOperation) AttrOperationName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrOperationName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IOperation) AttrPath() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPath",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IOperation) Props() *OperationProps {
	var returns *OperationProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

