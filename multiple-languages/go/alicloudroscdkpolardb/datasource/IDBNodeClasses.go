package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkpolardb/datasource/internal"
)

// Represents a `DBNodeClasses`.
type IDBNodeClasses interface {
	alicloudroscdkcore.IResource
	// Attribute DBNodeClasses: The list of db node classes.
	AttrDbNodeClasses() interface{}
	// Attribute DBNodeClassIds: The list of db node class ids.
	AttrDbNodeClassIds() interface{}
	Props() *DBNodeClassesProps
}

// The jsii proxy for IDBNodeClasses
type jsiiProxy_IDBNodeClasses struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IDBNodeClasses) AttrDbNodeClasses() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDbNodeClasses",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDBNodeClasses) AttrDbNodeClassIds() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDbNodeClassIds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDBNodeClasses) Props() *DBNodeClassesProps {
	var returns *DBNodeClassesProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

