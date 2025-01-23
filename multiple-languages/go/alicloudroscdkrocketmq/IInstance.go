package alicloudroscdkrocketmq

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkrocketmq/internal"
)

// Represents a `Instance`.
type IInstance interface {
	alicloudroscdkcore.IResource
	// Attribute HttpInternalEndpoint: The internal HTTP endpoint for the Message Queue for Apache RocketMQ instance.
	AttrHttpInternalEndpoint() interface{}
	// Attribute HttpInternetEndpoint: The Internet HTTP endpoint for the Message Queue for Apache RocketMQ instance.
	AttrHttpInternetEndpoint() interface{}
	// Attribute HttpInternetSecureEndpoint: The Internet HTTPS endpoint for the Message Queue for Apache RocketMQ instance.
	AttrHttpInternetSecureEndpoint() interface{}
	// Attribute InstanceId: Instance ID created.
	AttrInstanceId() interface{}
	// Attribute InstanceName: Instance name.
	AttrInstanceName() interface{}
	// Attribute InstanceType: Instance Type.
	AttrInstanceType() interface{}
	// Attribute TcpEndpoint: The TCP endpoint for the Message Queue for Apache RocketMQ instance.
	AttrTcpEndpoint() interface{}
	Props() *InstanceProps
}

// The jsii proxy for IInstance
type jsiiProxy_IInstance struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IInstance) AttrHttpInternalEndpoint() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrHttpInternalEndpoint",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrHttpInternetEndpoint() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrHttpInternetEndpoint",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrHttpInternetSecureEndpoint() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrHttpInternetSecureEndpoint",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrInstanceId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrInstanceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrInstanceName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrInstanceName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrInstanceType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrInstanceType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrTcpEndpoint() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTcpEndpoint",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) Props() *InstanceProps {
	var returns *InstanceProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

