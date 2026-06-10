package alicloudroscdkeventbridge

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkeventbridge/internal"
)

// Represents a `ApiDestination`.
type IApiDestination interface {
	alicloudroscdkcore.IResource
	// Attribute ApiDestinationName: The name of the api.
	//
	// The maximum length is 127 characters. Minimum length 2 characters.
	AttrApiDestinationName() interface{}
	// Attribute ConnectionName: The connection configuration name.
	//
	// The maximum length is 127 characters. Minimum length 2 characters.
	AttrConnectionName() interface{}
	// Attribute CreateTime: Creation time.
	AttrCreateTime() interface{}
	// Attribute Description: The description of the api.
	//
	// It must be no more than 255 characters.
	AttrDescription() interface{}
	// Attribute HttpApiParameters: Configuration information for API endpoints.
	AttrHttpApiParameters() interface{}
	Props() *ApiDestinationProps
}

// The jsii proxy for IApiDestination
type jsiiProxy_IApiDestination struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IApiDestination) AttrApiDestinationName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrApiDestinationName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IApiDestination) AttrConnectionName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrConnectionName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IApiDestination) AttrCreateTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCreateTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IApiDestination) AttrDescription() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDescription",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IApiDestination) AttrHttpApiParameters() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrHttpApiParameters",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IApiDestination) Props() *ApiDestinationProps {
	var returns *ApiDestinationProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

