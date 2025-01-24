package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkvod/datasource/internal"
)

// Represents a `MessageCallback`.
type IMessageCallback interface {
	alicloudroscdkcore.IResource
	// Attribute AppId: The ID of the application.
	AttrAppId() interface{}
	// Attribute AuthKey: The cryptographic key.
	//
	// This parameter is returned only for HTTP callbacks.
	AttrAuthKey() interface{}
	// Attribute AuthSwitch: Indicates whether callback authentication is enabled.
	//
	// This parameter is returned only for HTTP callbacks.
	AttrAuthSwitch() interface{}
	// Attribute CallbackType: The callback method.
	AttrCallbackType() interface{}
	// Attribute CallbackUrl: The callback URL.
	//
	// This parameter is returned only for HTTP callbacks.
	AttrCallbackUrl() interface{}
	// Attribute EventTypeList: The type of the callback event.
	AttrEventTypeList() interface{}
	// Attribute MnsEndpoint: The public endpoint of MNS.
	//
	// This parameter is returned only for MNS callbacks.
	AttrMnsEndpoint() interface{}
	// Attribute MnsQueueName: The name of the Message Service (MNS) queue.
	//
	// This parameter is returned only for MNS callbacks.
	AttrMnsQueueName() interface{}
	Props() *MessageCallbackProps
}

// The jsii proxy for IMessageCallback
type jsiiProxy_IMessageCallback struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IMessageCallback) AttrAppId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAppId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IMessageCallback) AttrAuthKey() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAuthKey",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IMessageCallback) AttrAuthSwitch() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAuthSwitch",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IMessageCallback) AttrCallbackType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCallbackType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IMessageCallback) AttrCallbackUrl() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCallbackUrl",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IMessageCallback) AttrEventTypeList() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrEventTypeList",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IMessageCallback) AttrMnsEndpoint() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrMnsEndpoint",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IMessageCallback) AttrMnsQueueName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrMnsQueueName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IMessageCallback) Props() *MessageCallbackProps {
	var returns *MessageCallbackProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

