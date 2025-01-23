package alicloudroscdkrds

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkrds/internal"
)

// Represents a `DBInstanceClone`.
type IDBInstanceClone interface {
	alicloudroscdkcore.IResource
	// Attribute DBInstanceId: The instance id of created database instance.
	AttrDbInstanceId() interface{}
	// Attribute InnerConnectionString: DB instance connection url by Intranet.
	AttrInnerConnectionString() interface{}
	// Attribute InnerIPAddress: IP Address for created DB instance of Intranet.
	AttrInnerIpAddress() interface{}
	// Attribute InnerPort: Intranet port of created DB instance.
	AttrInnerPort() interface{}
	// Attribute PublicConnectionString: DB instance connection url by Internet.
	AttrPublicConnectionString() interface{}
	// Attribute PublicIPAddress: IP Address for created DB instance of Internet.
	AttrPublicIpAddress() interface{}
	// Attribute PublicPort: Internet port of created DB instance.
	AttrPublicPort() interface{}
	Props() *DBInstanceCloneProps
}

// The jsii proxy for IDBInstanceClone
type jsiiProxy_IDBInstanceClone struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IDBInstanceClone) AttrDbInstanceId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDbInstanceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDBInstanceClone) AttrInnerConnectionString() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrInnerConnectionString",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDBInstanceClone) AttrInnerIpAddress() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrInnerIpAddress",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDBInstanceClone) AttrInnerPort() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrInnerPort",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDBInstanceClone) AttrPublicConnectionString() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPublicConnectionString",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDBInstanceClone) AttrPublicIpAddress() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPublicIpAddress",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDBInstanceClone) AttrPublicPort() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPublicPort",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDBInstanceClone) Props() *DBInstanceCloneProps {
	var returns *DBInstanceCloneProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

