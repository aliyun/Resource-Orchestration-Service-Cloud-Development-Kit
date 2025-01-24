package alicloudroscdkacm

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkacm/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `Configuration`.
type IConfiguration interface {
	alicloudroscdkcore.IResource
	// Attribute DataId: The ID of the configuration.
	AttrDataId() interface{}
	// Attribute Group: Group.
	AttrGroup() interface{}
	// Attribute NamespaceId: ID of namespace.
	AttrNamespaceId() interface{}
	Props() *ConfigurationProps
}

// The jsii proxy for IConfiguration
type jsiiProxy_IConfiguration struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IConfiguration) AttrDataId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDataId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IConfiguration) AttrGroup() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrGroup",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IConfiguration) AttrNamespaceId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrNamespaceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IConfiguration) Props() *ConfigurationProps {
	var returns *ConfigurationProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

