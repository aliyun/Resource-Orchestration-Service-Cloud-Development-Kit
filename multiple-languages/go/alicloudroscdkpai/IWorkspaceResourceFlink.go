package alicloudroscdkpai

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkpai/internal"
)

// Represents a `WorkspaceResourceFlink`.
type IWorkspaceResourceFlink interface {
	alicloudroscdkcore.IResource
	// Attribute CreateTime: The creation time of the resource.
	AttrCreateTime() interface{}
	// Attribute GroupName: Resource group name.
	//
	// If you want to obtain a resource group name, see [ListResources].
	AttrGroupName() interface{}
	// Attribute IsDefault: Indicates whether it is the default resource.
	//
	// Currently, this parameter only supports the input of true and does not support false.
	AttrIsDefault() interface{}
	// Attribute Resources: Resource List.
	AttrResources() interface{}
	Props() *WorkspaceResourceFlinkProps
}

// The jsii proxy for IWorkspaceResourceFlink
type jsiiProxy_IWorkspaceResourceFlink struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IWorkspaceResourceFlink) AttrCreateTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCreateTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IWorkspaceResourceFlink) AttrGroupName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrGroupName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IWorkspaceResourceFlink) AttrIsDefault() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrIsDefault",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IWorkspaceResourceFlink) AttrResources() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrResources",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IWorkspaceResourceFlink) Props() *WorkspaceResourceFlinkProps {
	var returns *WorkspaceResourceFlinkProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

