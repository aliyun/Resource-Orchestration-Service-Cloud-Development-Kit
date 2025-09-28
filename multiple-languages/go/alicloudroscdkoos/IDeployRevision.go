package alicloudroscdkoos

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkoos/internal"
)

// Represents a `DeployRevision`.
type IDeployRevision interface {
	alicloudroscdkcore.IResource
	// Attribute RevisionId: The ID of the revision.
	AttrRevisionId() interface{}
	Props() *DeployRevisionProps
}

// The jsii proxy for IDeployRevision
type jsiiProxy_IDeployRevision struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IDeployRevision) AttrRevisionId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrRevisionId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDeployRevision) Props() *DeployRevisionProps {
	var returns *DeployRevisionProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

