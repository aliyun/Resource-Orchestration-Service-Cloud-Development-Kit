package alicloudroscdkeventbridge

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkeventbridge/internal"
)

// Represents a `Connection`.
type IConnection interface {
	alicloudroscdkcore.IResource
	// Attribute AuthParameters: Authentication Data Structure.
	AttrAuthParameters() interface{}
	// Attribute ConnectionName: The connection configuration name.
	//
	// The maximum length is 127 characters. Minimum length 2 characters.
	AttrConnectionName() interface{}
	// Attribute CreateTime: The creation time of the resource.
	AttrCreateTime() interface{}
	// Attribute Description: The connection configuration description.
	//
	// The maximum length is 255 characters.
	AttrDescription() interface{}
	// Attribute NetworkParameters: Network Configuration Data Structure.
	AttrNetworkParameters() interface{}
	Props() *ConnectionProps
}

// The jsii proxy for IConnection
type jsiiProxy_IConnection struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IConnection) AttrAuthParameters() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAuthParameters",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IConnection) AttrConnectionName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrConnectionName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IConnection) AttrCreateTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCreateTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IConnection) AttrDescription() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDescription",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IConnection) AttrNetworkParameters() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrNetworkParameters",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IConnection) Props() *ConnectionProps {
	var returns *ConnectionProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

