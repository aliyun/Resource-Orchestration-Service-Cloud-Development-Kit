package alicloudroscdkga

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkga/internal"
)

// Represents a `BasicAccelerator`.
type IBasicAccelerator interface {
	alicloudroscdkcore.IResource
	// Attribute AcceleratorId: The ID of the accelerated IP address.
	AttrAcceleratorId() interface{}
	Props() *BasicAcceleratorProps
}

// The jsii proxy for IBasicAccelerator
type jsiiProxy_IBasicAccelerator struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IBasicAccelerator) AttrAcceleratorId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAcceleratorId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IBasicAccelerator) Props() *BasicAcceleratorProps {
	var returns *BasicAcceleratorProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

