package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkots/datasource/internal"
)

// Represents a `Tables`.
type ITables interface {
	alicloudroscdkcore.IResource
	// Attribute TableNames: The list of table names.
	AttrTableNames() interface{}
	// Attribute Tables: The list of tables.
	AttrTables() interface{}
	Props() *TablesProps
}

// The jsii proxy for ITables
type jsiiProxy_ITables struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_ITables) AttrTableNames() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTableNames",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ITables) AttrTables() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTables",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ITables) Props() *TablesProps {
	var returns *TablesProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

