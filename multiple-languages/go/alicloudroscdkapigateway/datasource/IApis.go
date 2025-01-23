package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkapigateway/datasource/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `Apis`.
type IApis interface {
	alicloudroscdkcore.IResource
	// Attribute ApiIds: The list of The ApiGateway api ids.
	AttrApiIds() interface{}
	// Attribute Apis: The information about ApiGateway apis.
	AttrApis() interface{}
	Props() *ApisProps
}

// The jsii proxy for IApis
type jsiiProxy_IApis struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IApis) AttrApiIds() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrApiIds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IApis) AttrApis() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrApis",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IApis) Props() *ApisProps {
	var returns *ApisProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

