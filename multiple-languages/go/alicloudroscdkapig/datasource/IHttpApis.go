package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkapig/datasource/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `HttpApis`.
type IHttpApis interface {
	alicloudroscdkcore.IResource
	// Attribute HttpApiIds: The list of http api IDs.
	AttrHttpApiIds() interface{}
	// Attribute HttpApis: The list of http apis.
	AttrHttpApis() interface{}
	Props() *HttpApisProps
}

// The jsii proxy for IHttpApis
type jsiiProxy_IHttpApis struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IHttpApis) AttrHttpApiIds() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrHttpApiIds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IHttpApis) AttrHttpApis() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrHttpApis",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IHttpApis) Props() *HttpApisProps {
	var returns *HttpApisProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

