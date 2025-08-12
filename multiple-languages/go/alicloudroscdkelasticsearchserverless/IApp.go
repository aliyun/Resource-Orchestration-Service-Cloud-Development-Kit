package alicloudroscdkelasticsearchserverless

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkelasticsearchserverless/internal"
)

// Represents a `App`.
type IApp interface {
	alicloudroscdkcore.IResource
	// Attribute InstanceId: The Id of the ElasticSearch serverless instance.
	AttrInstanceId() interface{}
	// Attribute PrivateESDomain: The private network domain of the app.
	AttrPrivateEsDomain() interface{}
	// Attribute PrivateKibanaDomain: The private network kibana domain of the app.
	AttrPrivateKibanaDomain() interface{}
	// Attribute PublicESDomain: The public network domain of the app.
	AttrPublicEsDomain() interface{}
	// Attribute PublicKibanaDomain: The public network kibana domain of the app.
	AttrPublicKibanaDomain() interface{}
	// Attribute Username: The username of the app.
	AttrUsername() interface{}
	Props() *AppProps
}

// The jsii proxy for IApp
type jsiiProxy_IApp struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IApp) AttrInstanceId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrInstanceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IApp) AttrPrivateEsDomain() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPrivateEsDomain",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IApp) AttrPrivateKibanaDomain() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPrivateKibanaDomain",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IApp) AttrPublicEsDomain() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPublicEsDomain",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IApp) AttrPublicKibanaDomain() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPublicKibanaDomain",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IApp) AttrUsername() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrUsername",
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

