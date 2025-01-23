package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkeais/datasource/internal"
)

// Represents a `Instance`.
type IInstance interface {
	alicloudroscdkcore.IResource
	// Attribute ClientInstanceId: The ID of the ECS instance to be bound.
	AttrClientInstanceId() interface{}
	// Attribute ClientInstanceName: The name of the ECS instance bound to the EAIS instance.
	AttrClientInstanceName() interface{}
	// Attribute ClientInstanceType: The type of the ECS instance bound to the EAIS instance.
	AttrClientInstanceType() interface{}
	// Attribute CreateTime: The creation time of the resource.
	AttrCreateTime() interface{}
	// Attribute InstanceId: Elastic accelerated instance ID.
	AttrInstanceId() interface{}
	// Attribute InstanceName: Name of the instance.
	AttrInstanceName() interface{}
	// Attribute InstanceType: EAIS instance type.
	AttrInstanceType() interface{}
	// Attribute JupyterUrl: The address of the Eais Notebook.
	AttrJupyterUrl() interface{}
	// Attribute ResourceGroupId: The ID of the resource group.
	AttrResourceGroupId() interface{}
	// Attribute SecurityGroupId: Security group ID.
	AttrSecurityGroupId() interface{}
	// Attribute VSwitchId: Switch ID.
	AttrVSwitchId() interface{}
	// Attribute ZoneId: The ID of the region to which the EAIS instance belongs.
	AttrZoneId() interface{}
	Props() *InstanceProps
}

// The jsii proxy for IInstance
type jsiiProxy_IInstance struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IInstance) AttrClientInstanceId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrClientInstanceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrClientInstanceName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrClientInstanceName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrClientInstanceType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrClientInstanceType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrCreateTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCreateTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrInstanceId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrInstanceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrInstanceName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrInstanceName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrInstanceType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrInstanceType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrJupyterUrl() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrJupyterUrl",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrResourceGroupId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrResourceGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrSecurityGroupId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSecurityGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrVSwitchId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrVSwitchId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrZoneId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrZoneId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) Props() *InstanceProps {
	var returns *InstanceProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

