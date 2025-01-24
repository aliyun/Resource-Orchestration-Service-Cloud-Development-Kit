package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkpolardbx/datasource/internal"
)

// Represents a `Databases`.
type IDatabases interface {
	alicloudroscdkcore.IResource
	// Attribute PolarDBXDatabaseNames: The list of PolarDB-X 2.0 database names.
	AttrPolarDbxDatabaseNames() interface{}
	// Attribute PolarDBXDatabases: The list of PolarDB-X 2.0 databases.
	AttrPolarDbxDatabases() interface{}
	Props() *DatabasesProps
}

// The jsii proxy for IDatabases
type jsiiProxy_IDatabases struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IDatabases) AttrPolarDbxDatabaseNames() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPolarDbxDatabaseNames",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDatabases) AttrPolarDbxDatabases() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPolarDbxDatabases",
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

