package alicloudroscdktsdb

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdktsdb/internal"
)

// Represents a `InfluxDBDatabase`.
type IInfluxDBDatabase interface {
	alicloudroscdkcore.IResource
	// Attribute DBName: The name of database.
	AttrDbName() interface{}
	// Attribute InstanceId: The ID of TSDB for InfluxDB.
	AttrInstanceId() interface{}
	Props() *InfluxDBDatabaseProps
}

// The jsii proxy for IInfluxDBDatabase
type jsiiProxy_IInfluxDBDatabase struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IInfluxDBDatabase) AttrDbName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDbName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInfluxDBDatabase) AttrInstanceId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrInstanceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInfluxDBDatabase) Props() *InfluxDBDatabaseProps {
	var returns *InfluxDBDatabaseProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

