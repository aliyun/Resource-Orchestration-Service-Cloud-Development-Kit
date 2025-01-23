package alicloudroscdkvod

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkvod/internal"
)

// Represents a `MessageCallback`.
type IMessageCallback interface {
	alicloudroscdkcore.IResource
	// Attribute AppId: appid.
	AttrAppId() interface{}
	// Attribute AuthKey: auth key.
	AttrAuthKey() interface{}
	// Attribute AuthSwitch: auth swith.
	AttrAuthSwitch() interface{}
	// Attribute CallbackType: callback type.
	AttrCallbackType() interface{}
	// Attribute CallbackUrl: url.
	AttrCallbackUrl() interface{}
	// Attribute EventTypeList: event type.
	AttrEventTypeList() interface{}
	// Attribute MnsEndpoint: mns endpoint.
	AttrMnsEndpoint() interface{}
	// Attribute MnsQueueName: queue name.
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

