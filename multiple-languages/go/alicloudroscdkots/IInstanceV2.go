package alicloudroscdkots

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkots/internal"
)

// Represents a `InstanceV2`.
type IInstanceV2 interface {
	alicloudroscdkcore.IResource
	// Attribute InstanceName: Name of the tablestore instance.
	AttrInstanceName() interface{}
	Props() *InstanceV2Props
}

// The jsii proxy for IInstanceV2
type jsiiProxy_IInstanceV2 struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IInstanceV2) AttrInstanceName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrInstanceName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstanceV2) Props() *InstanceV2Props {
	var returns *InstanceV2Props
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

