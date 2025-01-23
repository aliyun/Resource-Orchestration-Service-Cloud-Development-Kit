package alicloudroscdkredis

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkredis/internal"
)

// Represents a `Connection`.
type IConnection interface {
	alicloudroscdkcore.IResource
	// Attribute ConnectionString: The allocated connection string.
	AttrConnectionString() interface{}
	Props() *ConnectionProps
}

// The jsii proxy for IConnection
type jsiiProxy_IConnection struct {
	internal.Type__alicloudroscdkcoreIResource
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

func (j *jsiiProxy_IConnection) Props() *ConnectionProps {
	var returns *ConnectionProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

