package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkarms/datasource/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `GrafanaWorkspace`.
type IGrafanaWorkspace interface {
	alicloudroscdkcore.IResource
	// Attribute CreateTime: The time when the workspace was created.
	AttrCreateTime() interface{}
	// Attribute Description: The description of the workspace.
	AttrDescription() interface{}
	// Attribute GrafanaVersion: The version number of Grafana.
	AttrGrafanaVersion() interface{}
	// Attribute GrafanaWorkspaceEdition: The version of the workspace.
	AttrGrafanaWorkspaceEdition() interface{}
	// Attribute GrafanaWorkspaceId: The ID of the workspace.
	AttrGrafanaWorkspaceId() interface{}
	// Attribute GrafanaWorkspaceName: The workspace name.
	AttrGrafanaWorkspaceName() interface{}
	// Attribute ResourceGroupId: The resource group ID.
	AttrResourceGroupId() interface{}
	// Attribute Tags: The tags of the resource.
	AttrTags() interface{}
	Props() *GrafanaWorkspaceProps
}

// The jsii proxy for IGrafanaWorkspace
type jsiiProxy_IGrafanaWorkspace struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IGrafanaWorkspace) AttrCreateTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCreateTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IGrafanaWorkspace) AttrDescription() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDescription",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IGrafanaWorkspace) AttrGrafanaVersion() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrGrafanaVersion",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IGrafanaWorkspace) AttrGrafanaWorkspaceEdition() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrGrafanaWorkspaceEdition",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IGrafanaWorkspace) AttrGrafanaWorkspaceId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrGrafanaWorkspaceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IGrafanaWorkspace) AttrGrafanaWorkspaceName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrGrafanaWorkspaceName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IGrafanaWorkspace) AttrResourceGroupId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrResourceGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IGrafanaWorkspace) AttrTags() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTags",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IGrafanaWorkspace) Props() *GrafanaWorkspaceProps {
	var returns *GrafanaWorkspaceProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

