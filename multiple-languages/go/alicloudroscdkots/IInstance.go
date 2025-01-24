package alicloudroscdkots

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkots/internal"
)

// Represents a `Instance`.
type IInstance interface {
	alicloudroscdkcore.IResource
	// Attribute InstanceName: Instance name.
	AttrInstanceName() interface{}
	// Attribute PrivateEndpoint: Private endpoint.
	AttrPrivateEndpoint() interface{}
	// Attribute PublicEndpoint: Public endpoint.
	AttrPublicEndpoint() interface{}
	// Attribute VpcEndpoint: Vpc endpoint.
	AttrVpcEndpoint() interface{}
	Props() *InstanceProps
}

// The jsii proxy for IInstance
type jsiiProxy_IInstance struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IInstance) AttrInstanceName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrInstanceName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrPrivateEndpoint() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPrivateEndpoint",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrPublicEndpoint() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPublicEndpoint",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrVpcEndpoint() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrVpcEndpoint",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) Props() *InstanceProps {
	var returns *InstanceProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

