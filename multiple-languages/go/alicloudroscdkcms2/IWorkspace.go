package alicloudroscdkcms2

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcms2/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `Workspace`.
type IWorkspace interface {
	alicloudroscdkcore.IResource
	// Attribute WorkspaceName: The name of the workspace.
	AttrWorkspaceName() interface{}
	Props() *WorkspaceProps
}

// The jsii proxy for IWorkspace
type jsiiProxy_IWorkspace struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IWorkspace) AttrWorkspaceName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrWorkspaceName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IWorkspace) Props() *WorkspaceProps {
	var returns *WorkspaceProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

