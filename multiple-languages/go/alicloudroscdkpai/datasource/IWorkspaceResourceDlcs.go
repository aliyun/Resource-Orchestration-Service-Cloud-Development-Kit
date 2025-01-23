package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkpai/datasource/internal"
)

// Represents a `WorkspaceResourceDlcs`.
type IWorkspaceResourceDlcs interface {
	alicloudroscdkcore.IResource
	// Attribute GroupNames: The list of group names.
	AttrGroupNames() interface{}
	// Attribute WorkspaceResourceDlcs: The list of workspace resource dlcs.
	AttrWorkspaceResourceDlcs() interface{}
	Props() *WorkspaceResourceDlcsProps
}

// The jsii proxy for IWorkspaceResourceDlcs
type jsiiProxy_IWorkspaceResourceDlcs struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IWorkspaceResourceDlcs) AttrGroupNames() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrGroupNames",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IWorkspaceResourceDlcs) AttrWorkspaceResourceDlcs() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrWorkspaceResourceDlcs",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IWorkspaceResourceDlcs) Props() *WorkspaceResourceDlcsProps {
	var returns *WorkspaceResourceDlcsProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

