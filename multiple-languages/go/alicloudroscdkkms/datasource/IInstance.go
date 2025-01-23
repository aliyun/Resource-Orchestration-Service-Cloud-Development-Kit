package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkkms/datasource/internal"
)

// Represents a `Instance`.
type IInstance interface {
	alicloudroscdkcore.IResource
	// Attribute CreateTime: The time when the KMS instance is created.
	AttrCreateTime() interface{}
	// Attribute InstanceId: The ID of the KMS instance.
	AttrInstanceId() interface{}
	// Attribute InstanceName: The name of the KMS instance.
	AttrInstanceName() interface{}
	// Attribute KeyNum: The number of keys that can be created for the KMS instance.
	AttrKeyNum() interface{}
	// Attribute SecretNum: The number of secrets that can be created for the KMS instance.
	AttrSecretNum() interface{}
	// Attribute Spec: The computation performance level of the KMS instance.
	AttrSpec() interface{}
	// Attribute VpcId: The virtual private cloud (VPC) with which the KMS instance is associated..
	AttrVpcId() interface{}
	// Attribute VpcNum: The number of managed accesses.
	//
	// The maximum number of VPCs that can access this KMS instance.
	AttrVpcNum() interface{}
	// Attribute VswitchIds: The VSwitch in the VPC.
	AttrVswitchIds() interface{}
	// Attribute ZoneIds: The zone with which the KMS instance is associated.
	AttrZoneIds() interface{}
	Props() *InstanceProps
}

// The jsii proxy for IInstance
type jsiiProxy_IInstance struct {
	internal.Type__alicloudroscdkcoreIResource
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

func (j *jsiiProxy_IInstance) AttrKeyNum() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrKeyNum",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrSecretNum() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSecretNum",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrSpec() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSpec",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrVpcId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrVpcId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrVpcNum() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrVpcNum",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrVswitchIds() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrVswitchIds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrZoneIds() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrZoneIds",
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

