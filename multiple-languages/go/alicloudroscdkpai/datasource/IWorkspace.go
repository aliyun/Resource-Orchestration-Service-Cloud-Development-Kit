package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkpai/datasource/internal"
)

// Represents a `Workspace`.
type IWorkspace interface {
	alicloudroscdkcore.IResource
	// Attribute AdminNames: List of administrator account names.
	AttrAdminNames() interface{}
	// Attribute Creator: The user ID of the creator.
	AttrCreator() interface{}
	// Attribute Description: The description of the workspace.
	AttrDescription() interface{}
	// Attribute DisplayName: The display name of the workspace.
	AttrDisplayName() interface{}
	// Attribute EnvTypes: The environments of the workspace.
	AttrEnvTypes() interface{}
	// Attribute ExtraInfos: Additional information, currently including TenantId (tenant ID).
	AttrExtraInfos() interface{}
	// Attribute IsDefault: Default Workspace.
	AttrIsDefault() interface{}
	// Attribute Users: List of users.
	AttrUsers() interface{}
	// Attribute WorkspaceId: The first ID of the resource.
	AttrWorkspaceId() interface{}
	// Attribute WorkspaceName: The name of the workspace.
	AttrWorkspaceName() interface{}
	Props() *WorkspaceProps
}

// The jsii proxy for IWorkspace
type jsiiProxy_IWorkspace struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IWorkspace) AttrAdminNames() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAdminNames",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IWorkspace) AttrCreator() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCreator",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IWorkspace) AttrDescription() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDescription",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IWorkspace) AttrDisplayName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDisplayName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IWorkspace) AttrEnvTypes() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrEnvTypes",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IWorkspace) AttrExtraInfos() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrExtraInfos",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IWorkspace) AttrIsDefault() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrIsDefault",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IWorkspace) AttrUsers() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrUsers",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IWorkspace) AttrWorkspaceId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrWorkspaceId",
		&returns,
	)
	return returns
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

