package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkdrds/datasource/internal"
)

// Represents a `DrdsDBs`.
type IDrdsDBs interface {
	alicloudroscdkcore.IResource
	// Attribute Databases: The list of drds databases.
	AttrDatabases() interface{}
	// Attribute DrdsDatabaseNames: The list of drds database names.
	AttrDrdsDatabaseNames() interface{}
	Props() *DrdsDBsProps
}

// The jsii proxy for IDrdsDBs
type jsiiProxy_IDrdsDBs struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IDrdsDBs) AttrDatabases() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDatabases",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDrdsDBs) AttrDrdsDatabaseNames() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDrdsDatabaseNames",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDrdsDBs) Props() *DrdsDBsProps {
	var returns *DrdsDBsProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

