package alicloudroscdkots

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkots/internal"
)

// Represents a `Table`.
type ITable interface {
	alicloudroscdkcore.IResource
	// Attribute TableName: Table name.
	AttrTableName() interface{}
	Props() *TableProps
}

// The jsii proxy for ITable
type jsiiProxy_ITable struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_ITable) AttrTableName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTableName",
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

