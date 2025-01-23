package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdksearchengine/datasource/internal"
)

// Represents a `Instances`.
type IInstances interface {
	alicloudroscdkcore.IResource
	// Attribute InstanceIds: The list of instance IDs.
	AttrInstanceIds() interface{}
	// Attribute Instances: The list of instances.
	AttrInstances() interface{}
	Props() *InstancesProps
}

// The jsii proxy for IInstances
type jsiiProxy_IInstances struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IInstances) AttrInstanceIds() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrInstanceIds",
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

