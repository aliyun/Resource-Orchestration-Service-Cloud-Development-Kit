package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkrds/datasource/internal"
)

// Represents a `Databases`.
type IDatabases interface {
	alicloudroscdkcore.IResource
	// Attribute Databases: The list of The RDS databases.
	AttrDatabases() interface{}
	// Attribute DBNames: The list of The RDS database names.
	AttrDbNames() interface{}
	Props() *DatabasesProps
}

// The jsii proxy for IDatabases
type jsiiProxy_IDatabases struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IDatabases) AttrDatabases() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDatabases",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDatabases) AttrDbNames() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDbNames",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDatabases) Props() *DatabasesProps {
	var returns *DatabasesProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

