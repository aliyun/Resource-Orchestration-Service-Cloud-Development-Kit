package alicloudroscdkrds

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkrds/internal"
)

// Represents a `DBInstance`.
type IDBInstance interface {
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
	Props() *DBInstanceProps
}

// The jsii proxy for IDBInstance
type jsiiProxy_IDBInstance struct {
	internal.Type__alicloudroscdkcoreIResource
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

func (j *jsiiProxy_IDBInstance) AttrInnerConnectionString() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrInnerConnectionString",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDBInstance) AttrInnerIpAddress() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrInnerIpAddress",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDBInstance) AttrInnerPort() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrInnerPort",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDBInstance) AttrPublicConnectionString() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPublicConnectionString",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDBInstance) AttrPublicIpAddress() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPublicIpAddress",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDBInstance) AttrPublicPort() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPublicPort",
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

