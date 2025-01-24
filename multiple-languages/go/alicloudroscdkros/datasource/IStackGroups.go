package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkros/datasource/internal"
)

// Represents a `StackGroups`.
type IStackGroups interface {
	alicloudroscdkcore.IResource
	// Attribute StackGroupNames: The list of stack group names.
	AttrStackGroupNames() interface{}
	// Attribute StackGroups: The list of stack groups.
	AttrStackGroups() interface{}
	Props() *StackGroupsProps
}

// The jsii proxy for IStackGroups
type jsiiProxy_IStackGroups struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IStackGroups) AttrStackGroupNames() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrStackGroupNames",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IStackGroups) AttrStackGroups() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrStackGroups",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IStackGroups) Props() *StackGroupsProps {
	var returns *StackGroupsProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

