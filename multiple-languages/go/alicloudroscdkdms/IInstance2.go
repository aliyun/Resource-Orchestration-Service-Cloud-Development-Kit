package alicloudroscdkdms

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkdms/internal"
)

// Represents a `Instance2`.
type IInstance2 interface {
	alicloudroscdkcore.IResource
	// Attribute Host: The endpoint of the database instance.
	AttrHost() interface{}
	// Attribute InstanceId: The ID of the database instance.
	AttrInstanceId() interface{}
	// Attribute Port: The connection port of the database instance.
	AttrPort() interface{}
	Props() *Instance2Props
}

// The jsii proxy for IInstance2
type jsiiProxy_IInstance2 struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IInstance2) AttrHost() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrHost",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance2) AttrInstanceId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrInstanceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance2) AttrPort() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPort",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance2) Props() *Instance2Props {
	var returns *Instance2Props
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

