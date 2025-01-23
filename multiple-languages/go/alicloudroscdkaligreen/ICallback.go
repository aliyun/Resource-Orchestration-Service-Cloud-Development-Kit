package alicloudroscdkaligreen

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkaligreen/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `Callback`.
type ICallback interface {
	alicloudroscdkcore.IResource
	// Attribute CallbackId: The ID of the primary key of the Callback.
	AttrCallbackId() interface{}
	// Attribute CallbackName: The Callback name defined by the customer.
	AttrCallbackName() interface{}
	// Attribute CallbackSuggestions: List of audit results supported by message notification.
	AttrCallbackSuggestions() interface{}
	// Attribute CallbackTypes: The list of Callback types.
	AttrCallbackTypes() interface{}
	// Attribute CallbackUrl: The detection result will be called back to the url.
	AttrCallbackUrl() interface{}
	// Attribute CryptType: The encryption algorithm is used to verify that the callback request is sent by the Aliyun Green Service to your business service.
	AttrCryptType() interface{}
	Props() *CallbackProps
}

// The jsii proxy for ICallback
type jsiiProxy_ICallback struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_ICallback) AttrCallbackId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCallbackId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICallback) AttrCallbackName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCallbackName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICallback) AttrCallbackSuggestions() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCallbackSuggestions",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICallback) AttrCallbackTypes() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCallbackTypes",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICallback) AttrCallbackUrl() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCallbackUrl",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICallback) AttrCryptType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCryptType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ICallback) Props() *CallbackProps {
	var returns *CallbackProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

