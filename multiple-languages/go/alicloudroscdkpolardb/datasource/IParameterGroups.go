package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkpolardb/datasource/internal"
)

// Represents a `ParameterGroups`.
type IParameterGroups interface {
	alicloudroscdkcore.IResource
	// Attribute ParameterGroupIds: The list of parameter group IDs.
	AttrParameterGroupIds() interface{}
	// Attribute ParameterGroups: The list of parameter groups.
	AttrParameterGroups() interface{}
	Props() *ParameterGroupsProps
}

// The jsii proxy for IParameterGroups
type jsiiProxy_IParameterGroups struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IParameterGroups) AttrParameterGroupIds() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrParameterGroupIds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IParameterGroups) AttrParameterGroups() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrParameterGroups",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IParameterGroups) Props() *ParameterGroupsProps {
	var returns *ParameterGroupsProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

