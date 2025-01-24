package alicloudroscdkpolardb

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkpolardb/internal"
)

// Represents a `ParameterGroup`.
type IParameterGroup interface {
	alicloudroscdkcore.IResource
	// Attribute CreateTime: The time when the parameter template was created.
	AttrCreateTime() interface{}
	// Attribute DbType: The type of the database engine.
	AttrDbType() interface{}
	// Attribute DbVersion: The version of the database engine.
	AttrDbVersion() interface{}
	// Attribute ForceRestart: Indicates whether to restart the cluster when this parameter template is applied.
	AttrForceRestart() interface{}
	// Attribute ParameterCounts: The number of parameters in the parameter template.
	AttrParameterCounts() interface{}
	// Attribute ParameterGroupDesc: The description of the parameter template.
	AttrParameterGroupDesc() interface{}
	// Attribute ParameterGroupId: The ID of the parameter group.
	AttrParameterGroupId() interface{}
	// Attribute ParameterGroupName: The name of the parameter template.
	AttrParameterGroupName() interface{}
	// Attribute ParameterGroupType: The type of the parameter template.
	AttrParameterGroupType() interface{}
	// Attribute Parameters: The list of the parameters.
	AttrParameters() interface{}
	Props() *ParameterGroupProps
}

// The jsii proxy for IParameterGroup
type jsiiProxy_IParameterGroup struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IParameterGroup) AttrCreateTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCreateTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IParameterGroup) AttrDbType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDbType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IParameterGroup) AttrDbVersion() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDbVersion",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IParameterGroup) AttrForceRestart() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrForceRestart",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IParameterGroup) AttrParameterCounts() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrParameterCounts",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IParameterGroup) AttrParameterGroupDesc() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrParameterGroupDesc",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IParameterGroup) AttrParameterGroupId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrParameterGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IParameterGroup) AttrParameterGroupName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrParameterGroupName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IParameterGroup) AttrParameterGroupType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrParameterGroupType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IParameterGroup) AttrParameters() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrParameters",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IParameterGroup) Props() *ParameterGroupProps {
	var returns *ParameterGroupProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

