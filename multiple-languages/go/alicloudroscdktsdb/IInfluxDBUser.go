package alicloudroscdktsdb

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdktsdb/internal"
)

// Represents a `InfluxDBUser`.
type IInfluxDBUser interface {
	alicloudroscdkcore.IResource
	// Attribute InstanceId: The ID of TSDB for InfluxDB.
	AttrInstanceId() interface{}
	// Attribute UserName: The name of user.
	AttrUserName() interface{}
	// Attribute UserType: The type of user.
	AttrUserType() interface{}
	Props() *InfluxDBUserProps
}

// The jsii proxy for IInfluxDBUser
type jsiiProxy_IInfluxDBUser struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IInfluxDBUser) AttrInstanceId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrInstanceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInfluxDBUser) AttrUserName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrUserName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInfluxDBUser) AttrUserType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrUserType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInfluxDBUser) Props() *InfluxDBUserProps {
	var returns *InfluxDBUserProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

