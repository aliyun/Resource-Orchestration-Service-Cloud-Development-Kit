package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkecs/datasource/internal"
)

// Represents a `DeploymentSets`.
type IDeploymentSets interface {
	alicloudroscdkcore.IResource
	// Attribute DeploymentSetIds: the list of deployment set ids.
	AttrDeploymentSetIds() interface{}
	// Attribute DeploymentSets: The list of deployment sets.
	AttrDeploymentSets() interface{}
	Props() *DeploymentSetsProps
}

// The jsii proxy for IDeploymentSets
type jsiiProxy_IDeploymentSets struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IDeploymentSets) AttrDeploymentSetIds() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDeploymentSetIds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDeploymentSets) AttrDeploymentSets() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDeploymentSets",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDeploymentSets) Props() *DeploymentSetsProps {
	var returns *DeploymentSetsProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

