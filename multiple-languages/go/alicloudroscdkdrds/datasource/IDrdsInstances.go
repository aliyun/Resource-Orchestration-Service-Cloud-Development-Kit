package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkdrds/datasource/internal"
)

// Represents a `DrdsInstances`.
type IDrdsInstances interface {
	alicloudroscdkcore.IResource
	// Attribute InstanceIds: The list of drds instance IDs.
	AttrInstanceIds() interface{}
	// Attribute Instances: The list of drds instances.
	AttrInstances() interface{}
	Props() *DrdsInstancesProps
}

// The jsii proxy for IDrdsInstances
type jsiiProxy_IDrdsInstances struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IDrdsInstances) AttrInstanceIds() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrInstanceIds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDrdsInstances) AttrInstances() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrInstances",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDrdsInstances) Props() *DrdsInstancesProps {
	var returns *DrdsInstancesProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

