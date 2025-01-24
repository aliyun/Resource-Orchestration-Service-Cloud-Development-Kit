package alicloudroscdkgpdb

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkgpdb/internal"
)

// Represents a `InstancePublicConnection`.
type IInstancePublicConnection interface {
	alicloudroscdkcore.IResource
	// Attribute ConnectionString: The connection string of the instance.
	AttrConnectionString() interface{}
	// Attribute DBInstanceId: The ID of the instance.
	AttrDbInstanceId() interface{}
	Props() *InstancePublicConnectionProps
}

// The jsii proxy for IInstancePublicConnection
type jsiiProxy_IInstancePublicConnection struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IInstancePublicConnection) AttrConnectionString() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrConnectionString",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstancePublicConnection) AttrDbInstanceId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDbInstanceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstancePublicConnection) Props() *InstancePublicConnectionProps {
	var returns *InstancePublicConnectionProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

