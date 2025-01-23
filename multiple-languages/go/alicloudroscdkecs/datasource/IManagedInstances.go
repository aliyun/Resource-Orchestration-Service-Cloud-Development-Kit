package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkecs/datasource/internal"
)

// Represents a `ManagedInstances`.
type IManagedInstances interface {
	alicloudroscdkcore.IResource
	// Attribute InstanceIds: The list of managed instance ids.
	AttrInstanceIds() interface{}
	// Attribute Instances: The list of managed instances.
	AttrInstances() interface{}
	Props() *ManagedInstancesProps
}

// The jsii proxy for IManagedInstances
type jsiiProxy_IManagedInstances struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IManagedInstances) AttrInstanceIds() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrInstanceIds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IManagedInstances) AttrInstances() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrInstances",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IManagedInstances) Props() *ManagedInstancesProps {
	var returns *ManagedInstancesProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

