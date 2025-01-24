package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkarms/datasource/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `GrafanaWorkspaces`.
type IGrafanaWorkspaces interface {
	alicloudroscdkcore.IResource
	// Attribute GrafanaWorkspaceIds: The list of grafana workspace IDs.
	AttrGrafanaWorkspaceIds() interface{}
	// Attribute GrafanaWorkspaces: The list of grafana workspaces.
	AttrGrafanaWorkspaces() interface{}
	Props() *GrafanaWorkspacesProps
}

// The jsii proxy for IGrafanaWorkspaces
type jsiiProxy_IGrafanaWorkspaces struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IGrafanaWorkspaces) AttrGrafanaWorkspaceIds() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrGrafanaWorkspaceIds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IGrafanaWorkspaces) AttrGrafanaWorkspaces() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrGrafanaWorkspaces",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IGrafanaWorkspaces) Props() *GrafanaWorkspacesProps {
	var returns *GrafanaWorkspacesProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

