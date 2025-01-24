package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkmobi/datasource/internal"
)

// Represents a `Workspaces`.
type IWorkspaces interface {
	alicloudroscdkcore.IResource
	// Attribute WorkspaceIds: The list of workspace IDs.
	AttrWorkspaceIds() interface{}
	// Attribute Workspaces: The list of workspaces.
	AttrWorkspaces() interface{}
	Props() *WorkspacesProps
}

// The jsii proxy for IWorkspaces
type jsiiProxy_IWorkspaces struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IWorkspaces) AttrWorkspaceIds() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrWorkspaceIds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IWorkspaces) AttrWorkspaces() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrWorkspaces",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IWorkspaces) Props() *WorkspacesProps {
	var returns *WorkspacesProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

