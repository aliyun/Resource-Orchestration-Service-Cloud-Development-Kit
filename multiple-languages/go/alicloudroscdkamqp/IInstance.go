package alicloudroscdkamqp

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkamqp/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `Instance`.
type IInstance interface {
	alicloudroscdkcore.IResource
	// Attribute ClassicEndpoint: The classic endpoint of the instance.
	AttrClassicEndpoint() interface{}
	// Attribute InstanceId: The ID of the instance.
	AttrInstanceId() interface{}
	// Attribute PrivateEndpoint: The private endpoint of the instance.
	AttrPrivateEndpoint() interface{}
	// Attribute PublicEndpoint: The public endpoint of the instance.
	AttrPublicEndpoint() interface{}
	Props() *InstanceProps
}

// The jsii proxy for IInstance
type jsiiProxy_IInstance struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IInstance) AttrClassicEndpoint() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrClassicEndpoint",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrInstanceId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrInstanceId",
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

func (j *jsiiProxy_IInstance) Props() *InstanceProps {
	var returns *InstanceProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

