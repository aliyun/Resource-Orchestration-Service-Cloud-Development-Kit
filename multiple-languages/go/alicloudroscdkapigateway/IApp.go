package alicloudroscdkapigateway

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkapigateway/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `App`.
type IApp interface {
	alicloudroscdkcore.IResource
	// Attribute AppCode: The code of the APP.
	AttrAppCode() interface{}
	// Attribute AppId: The id of the created APP.
	AttrAppId() interface{}
	// Attribute AppKey: The key of the APP.
	AttrAppKey() interface{}
	// Attribute AppSecret: The secret of the APP.
	AttrAppSecret() interface{}
	// Attribute Tags: Tags of app.
	AttrTags() interface{}
	Props() *AppProps
}

// The jsii proxy for IApp
type jsiiProxy_IApp struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IApp) AttrAppCode() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAppCode",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IApp) AttrAppId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAppId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IApp) AttrAppKey() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAppKey",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IApp) AttrAppSecret() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAppSecret",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IApp) AttrTags() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTags",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IApp) Props() *AppProps {
	var returns *AppProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

