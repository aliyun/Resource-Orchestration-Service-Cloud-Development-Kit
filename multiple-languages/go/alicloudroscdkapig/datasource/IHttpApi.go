package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkapig/datasource/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `HttpApi`.
type IHttpApi interface {
	alicloudroscdkcore.IResource
	// Attribute BasePath: The base path of the API.
	AttrBasePath() interface{}
	// Attribute Description: Description of API.
	AttrDescription() interface{}
	// Attribute HttpApiId: The ID of the API.
	AttrHttpApiId() interface{}
	// Attribute HttpApiName: The name of the API.
	AttrHttpApiName() interface{}
	// Attribute Protocols: List of API Access Protocols.
	AttrProtocols() interface{}
	// Attribute ResourceGroupId: The ID of the resource group.
	AttrResourceGroupId() interface{}
	// Attribute Type: The type of HTTP API.
	AttrType() interface{}
	Props() *HttpApiProps
}

// The jsii proxy for IHttpApi
type jsiiProxy_IHttpApi struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IHttpApi) AttrBasePath() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrBasePath",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IHttpApi) AttrDescription() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDescription",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IHttpApi) AttrHttpApiId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrHttpApiId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IHttpApi) AttrHttpApiName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrHttpApiName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IHttpApi) AttrProtocols() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrProtocols",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IHttpApi) AttrResourceGroupId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrResourceGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IHttpApi) AttrType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IHttpApi) Props() *HttpApiProps {
	var returns *HttpApiProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

