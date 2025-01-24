package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkpai/datasource/internal"
)

// Represents a `WorkspaceResourceFlinks`.
type IWorkspaceResourceFlinks interface {
	alicloudroscdkcore.IResource
	// Attribute GroupNames: The list of group names.
	AttrGroupNames() interface{}
	// Attribute WorkspaceResourceFlinks: The list of workspace resource flinks.
	AttrWorkspaceResourceFlinks() interface{}
	Props() *WorkspaceResourceFlinksProps
}

// The jsii proxy for IWorkspaceResourceFlinks
type jsiiProxy_IWorkspaceResourceFlinks struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IWorkspaceResourceFlinks) AttrGroupNames() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrGroupNames",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IWorkspaceResourceFlinks) AttrWorkspaceResourceFlinks() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrWorkspaceResourceFlinks",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IWorkspaceResourceFlinks) Props() *WorkspaceResourceFlinksProps {
	var returns *WorkspaceResourceFlinksProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

