package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkots/datasource/internal"
)

// Represents a `Instances`.
type IInstances interface {
	alicloudroscdkcore.IResource
	// Attribute InstanceNames: The list of instance names.
	AttrInstanceNames() interface{}
	// Attribute Instances: The list of instances.
	AttrInstances() interface{}
	Props() *InstancesProps
}

// The jsii proxy for IInstances
type jsiiProxy_IInstances struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IInstances) AttrInstanceNames() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrInstanceNames",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstances) AttrInstances() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrInstances",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstances) Props() *InstancesProps {
	var returns *InstancesProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

