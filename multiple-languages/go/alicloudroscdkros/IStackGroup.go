package alicloudroscdkros

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkros/internal"
)

// Represents a `StackGroup`.
type IStackGroup interface {
	alicloudroscdkcore.IResource
	// Attribute StackGroupId: undefined.
	AttrStackGroupId() interface{}
	Props() *StackGroupProps
}

// The jsii proxy for IStackGroup
type jsiiProxy_IStackGroup struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IStackGroup) AttrStackGroupId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrStackGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IStackGroup) Props() *StackGroupProps {
	var returns *StackGroupProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

