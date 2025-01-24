package alicloudroscdkgpdb

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkgpdb/internal"
)

// Represents a `DBInstance`.
type IDBInstance interface {
	alicloudroscdkcore.IResource
	// Attribute ConnectionString: The endpoint of the instance.
	AttrConnectionString() interface{}
	// Attribute DBInstanceId: The ID of the instance.
	AttrDbInstanceId() interface{}
	// Attribute OrderId: The order ID of the instance.
	AttrOrderId() interface{}
	// Attribute Port: The port used to connect to the instance.
	AttrPort() interface{}
	Props() *DBInstanceProps
}

// The jsii proxy for IDBInstance
type jsiiProxy_IDBInstance struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IDBInstance) AttrConnectionString() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrConnectionString",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDBInstance) AttrDbInstanceId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDbInstanceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDBInstance) AttrOrderId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrOrderId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDBInstance) AttrPort() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPort",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDBInstance) Props() *DBInstanceProps {
	var returns *DBInstanceProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

