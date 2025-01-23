package alicloudroscdkecs

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkecs/internal"
)

// Represents a `DeploymentSet`.
type IDeploymentSet interface {
	alicloudroscdkcore.IResource
	// Attribute DeploymentSetId: The ID of the deployment set.
	AttrDeploymentSetId() interface{}
	Props() *DeploymentSetProps
}

// The jsii proxy for IDeploymentSet
type jsiiProxy_IDeploymentSet struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IDeploymentSet) AttrDeploymentSetId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDeploymentSetId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDeploymentSet) Props() *DeploymentSetProps {
	var returns *DeploymentSetProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

