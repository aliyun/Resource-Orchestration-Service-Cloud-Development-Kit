package alicloudroscdkaligreen

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkaligreen/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `AuditCallback`.
type IAuditCallback interface {
	alicloudroscdkcore.IResource
	// Attribute AuditCallbackName: The AuditCallback name defined by the customer.
	AttrAuditCallbackName() interface{}
	// Attribute CallbackSuggestions: List of audit results supported by message notification.
	AttrCallbackSuggestions() interface{}
	// Attribute CallbackTypes: A list of Callback types.
	AttrCallbackTypes() interface{}
	// Attribute CryptType: The encryption algorithm is used to verify that the callback request is sent by the content security service to your business service.
	AttrCryptType() interface{}
	// Attribute Url: The detection result will be called back to the url.
	AttrUrl() interface{}
	Props() *AuditCallbackProps
}

// The jsii proxy for IAuditCallback
type jsiiProxy_IAuditCallback struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IAuditCallback) AttrAuditCallbackName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAuditCallbackName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAuditCallback) AttrCallbackSuggestions() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCallbackSuggestions",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAuditCallback) AttrCallbackTypes() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCallbackTypes",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAuditCallback) AttrCryptType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCryptType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAuditCallback) AttrUrl() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrUrl",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IAuditCallback) Props() *AuditCallbackProps {
	var returns *AuditCallbackProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

