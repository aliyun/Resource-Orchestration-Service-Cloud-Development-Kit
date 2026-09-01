package alicloudroscdkemr

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkemr/internal"
)

// Represents a `SparkWorkspace`.
type ISparkWorkspace interface {
	alicloudroscdkcore.IResource
	// Attribute Storage: The OSS storage path of the workspace.
	AttrStorage() interface{}
	// Attribute WorkspaceId: The ID of the workspace.
	AttrWorkspaceId() interface{}
	Props() *SparkWorkspaceProps
}

// The jsii proxy for ISparkWorkspace
type jsiiProxy_ISparkWorkspace struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_ISparkWorkspace) AttrStorage() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrStorage",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISparkWorkspace) AttrWorkspaceId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrWorkspaceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_ISparkWorkspace) Props() *SparkWorkspaceProps {
	var returns *SparkWorkspaceProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

