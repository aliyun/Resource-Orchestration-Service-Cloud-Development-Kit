package alicloudroscdkfc

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkfc/internal"
)

// Represents a `ProvisionConfig`.
type IProvisionConfig interface {
	alicloudroscdkcore.IResource
	// Attribute FunctionName: The function name.
	AttrFunctionName() interface{}
	// Attribute Qualifier: The service alias.
	AttrQualifier() interface{}
	// Attribute Resource: The resource.
	AttrResource() interface{}
	// Attribute ServiceName: The service name.
	AttrServiceName() interface{}
	// Attribute Target: Number of provision.
	AttrTarget() interface{}
	Props() *ProvisionConfigProps
}

// The jsii proxy for IProvisionConfig
type jsiiProxy_IProvisionConfig struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IProvisionConfig) AttrFunctionName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrFunctionName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IProvisionConfig) AttrQualifier() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrQualifier",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IProvisionConfig) AttrResource() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrResource",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IProvisionConfig) AttrServiceName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrServiceName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IProvisionConfig) AttrTarget() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTarget",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IProvisionConfig) Props() *ProvisionConfigProps {
	var returns *ProvisionConfigProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

