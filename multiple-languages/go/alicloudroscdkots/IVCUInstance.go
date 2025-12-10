package alicloudroscdkots

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkots/internal"
)

// Represents a `VCUInstance`.
type IVCUInstance interface {
	alicloudroscdkcore.IResource
	// Attribute InstanceName: Name of the tablestore VCU instance.
	AttrInstanceName() interface{}
	Props() *VCUInstanceProps
}

// The jsii proxy for IVCUInstance
type jsiiProxy_IVCUInstance struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IVCUInstance) AttrInstanceName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrInstanceName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IVCUInstance) Props() *VCUInstanceProps {
	var returns *VCUInstanceProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

