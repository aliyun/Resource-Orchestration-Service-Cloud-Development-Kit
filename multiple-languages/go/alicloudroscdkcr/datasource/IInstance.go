package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcr/datasource/internal"
)

// Represents a `Instance`.
type IInstance interface {
	alicloudroscdkcore.IResource
	// Attribute CreateTime: The creation time of the resource.
	AttrCreateTime() interface{}
	// Attribute InstanceId: The first ID of the resource.
	AttrInstanceId() interface{}
	// Attribute InstanceName: InstanceName.
	AttrInstanceName() interface{}
	// Attribute InstanceSpecification: InstanceSpecification.
	AttrInstanceSpecification() interface{}
	// Attribute ModifiedTime: Last modification time.
	AttrModifiedTime() interface{}
	// Attribute ResourceGroupId: The ID of the resource group.
	AttrResourceGroupId() interface{}
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

func (j *jsiiProxy_IInstance) AttrInstanceSpecification() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrInstanceSpecification",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrModifiedTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrModifiedTime",
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

func (j *jsiiProxy_IInstance) Props() *InstanceProps {
	var returns *InstanceProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

