package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcomputenest/datasource/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `ServiceInstances`.
type IServiceInstances interface {
	alicloudroscdkcore.IResource
	// Attribute ServiceInstanceIds: The list of service instance IDs.
	AttrServiceInstanceIds() interface{}
	// Attribute ServiceInstances: The list of service instances.
	AttrServiceInstances() interface{}
	Props() *ServiceInstancesProps
}

// The jsii proxy for IServiceInstances
type jsiiProxy_IServiceInstances struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IServiceInstances) AttrServiceInstanceIds() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrServiceInstanceIds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IServiceInstances) AttrServiceInstances() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrServiceInstances",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IServiceInstances) Props() *ServiceInstancesProps {
	var returns *ServiceInstancesProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

