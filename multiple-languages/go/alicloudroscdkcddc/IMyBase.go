package alicloudroscdkcddc

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcddc/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `MyBase`.
type IMyBase interface {
	alicloudroscdkcore.IResource
	// Attribute InstanceIds: The instance id list of created ecs instances.
	AttrInstanceIds() interface{}
	// Attribute OrderIds: The order id list.
	AttrOrderIds() interface{}
	Props() *MyBaseProps
}

// The jsii proxy for IMyBase
type jsiiProxy_IMyBase struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IMyBase) AttrInstanceIds() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrInstanceIds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IMyBase) AttrOrderIds() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrOrderIds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IMyBase) Props() *MyBaseProps {
	var returns *MyBaseProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

