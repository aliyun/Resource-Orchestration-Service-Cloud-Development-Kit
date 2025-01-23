package alicloudroscdkmaxcompute

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkmaxcompute/internal"
)

// Represents a `Table`.
type ITable interface {
	alicloudroscdkcore.IResource
	// Attribute Name: Table name.
	AttrName() interface{}
	// Attribute Project: Project name.
	AttrProject() interface{}
	Props() *TableProps
}

// The jsii proxy for ITable
type jsiiProxy_ITable struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_ITable) AttrName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ITable) AttrProject() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrProject",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ITable) Props() *TableProps {
	var returns *TableProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

