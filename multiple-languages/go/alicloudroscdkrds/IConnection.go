package alicloudroscdkrds

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkrds/internal"
)

// Represents a `Connection`.
type IConnection interface {
	alicloudroscdkcore.IResource
	// Attribute BabelfishPort: The name of the dedicated cluster to which the instance belongs.
	AttrBabelfishPort() interface{}
	// Attribute ConnectionString: Connection string.
	AttrConnectionString() interface{}
	// Attribute DBInstanceId: RDS instance ID.
	AttrDbInstanceId() interface{}
	// Attribute Port: The port of the database service.
	AttrPort() interface{}
	Props() *ConnectionProps
}

// The jsii proxy for IConnection
type jsiiProxy_IConnection struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IConnection) AttrBabelfishPort() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrBabelfishPort",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IConnection) AttrConnectionString() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrConnectionString",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IConnection) AttrDbInstanceId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDbInstanceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IConnection) AttrPort() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPort",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IConnection) Props() *ConnectionProps {
	var returns *ConnectionProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

