package alicloudroscdkdevops

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkdevops/internal"
)

// Represents a `VariableGroup`.
type IVariableGroup interface {
	alicloudroscdkcore.IResource
	// Attribute VariableGroupId: Variable group id.
	AttrVariableGroupId() interface{}
	Props() *VariableGroupProps
}

// The jsii proxy for IVariableGroup
type jsiiProxy_IVariableGroup struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IVariableGroup) AttrVariableGroupId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrVariableGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IVariableGroup) Props() *VariableGroupProps {
	var returns *VariableGroupProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

