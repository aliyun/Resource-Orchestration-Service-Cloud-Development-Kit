package alicloudroscdkpolardbx

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkpolardbx/internal"
)

// Represents a `DBInstance`.
type IDBInstance interface {
	alicloudroscdkcore.IResource
	// Attribute ConnectionString: Intranet connection string.
	AttrConnectionString() interface{}
	// Attribute DBInstanceName: The name of the instance that you create.
	AttrDbInstanceName() interface{}
	// Attribute OrderId: The ID of the order.
	AttrOrderId() interface{}
	// Attribute Port: Intranet connection port.
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

func (j *jsiiProxy_IDBInstance) AttrDbInstanceName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDbInstanceName",
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

