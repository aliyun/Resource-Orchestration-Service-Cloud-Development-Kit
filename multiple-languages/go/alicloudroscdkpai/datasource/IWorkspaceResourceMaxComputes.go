package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkpai/datasource/internal"
)

// Represents a `WorkspaceResourceMaxComputes`.
type IWorkspaceResourceMaxComputes interface {
	alicloudroscdkcore.IResource
	// Attribute GroupNames: The list of group names.
	AttrGroupNames() interface{}
	// Attribute WorkspaceResourceMaxComputes: The list of workspace resource max computes.
	AttrWorkspaceResourceMaxComputes() interface{}
	Props() *WorkspaceResourceMaxComputesProps
}

// The jsii proxy for IWorkspaceResourceMaxComputes
type jsiiProxy_IWorkspaceResourceMaxComputes struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IWorkspaceResourceMaxComputes) AttrGroupNames() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrGroupNames",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IWorkspaceResourceMaxComputes) AttrWorkspaceResourceMaxComputes() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrWorkspaceResourceMaxComputes",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IWorkspaceResourceMaxComputes) Props() *WorkspaceResourceMaxComputesProps {
	var returns *WorkspaceResourceMaxComputesProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

