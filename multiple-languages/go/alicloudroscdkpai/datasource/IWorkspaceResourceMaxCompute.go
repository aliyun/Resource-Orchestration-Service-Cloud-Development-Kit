package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkpai/datasource/internal"
)

// Represents a `WorkspaceResourceMaxCompute`.
type IWorkspaceResourceMaxCompute interface {
	alicloudroscdkcore.IResource
	// Attribute CreateTime: The creation time of the resource.
	AttrCreateTime() interface{}
	// Attribute GroupName: Resource group name.
	//
	// If you want to obtain a resource group name.
	AttrGroupName() interface{}
	// Attribute IsDefault: Indicates whether it is the default resource.
	//
	// Currently, this parameter only supports the input of true and does not support false.
	AttrIsDefault() interface{}
	// Attribute Resources: Resource List.
	AttrResources() interface{}
	Props() *WorkspaceResourceMaxComputeProps
}

// The jsii proxy for IWorkspaceResourceMaxCompute
type jsiiProxy_IWorkspaceResourceMaxCompute struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IWorkspaceResourceMaxCompute) AttrCreateTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCreateTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IWorkspaceResourceMaxCompute) AttrGroupName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrGroupName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IWorkspaceResourceMaxCompute) AttrIsDefault() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrIsDefault",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IWorkspaceResourceMaxCompute) AttrResources() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrResources",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IWorkspaceResourceMaxCompute) Props() *WorkspaceResourceMaxComputeProps {
	var returns *WorkspaceResourceMaxComputeProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

