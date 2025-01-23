package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkecs/datasource/internal"
)

// Represents a `DeploymentSet`.
type IDeploymentSet interface {
	alicloudroscdkcore.IResource
	// Attribute CreateTime: The time when the deployment set was created.
	AttrCreateTime() interface{}
	// Attribute DeploymentSetId: The ID of deployment set.
	AttrDeploymentSetId() interface{}
	// Attribute DeploymentSetName: The name of the deployment set.
	AttrDeploymentSetName() interface{}
	// Attribute Granularity: The deployment granularity.
	AttrGranularity() interface{}
	// Attribute GroupCount: The number of deployment set groups in the deployment set.
	AttrGroupCount() interface{}
	// Attribute InstanceAmount: The number of instances in the deployment set.
	AttrInstanceAmount() interface{}
	// Attribute InstanceIds: The IDs of the instances in the deployment set.
	AttrInstanceIds() interface{}
	// Attribute Strategy: The deployment strategy.
	AttrStrategy() interface{}
	Props() *DeploymentSetProps
}

// The jsii proxy for IDeploymentSet
type jsiiProxy_IDeploymentSet struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IDeploymentSet) AttrCreateTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCreateTime",
		&returns,
	)
	return returns
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

func (j *jsiiProxy_IDeploymentSet) AttrDeploymentSetName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDeploymentSetName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDeploymentSet) AttrGranularity() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrGranularity",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDeploymentSet) AttrGroupCount() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrGroupCount",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDeploymentSet) AttrInstanceAmount() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrInstanceAmount",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDeploymentSet) AttrInstanceIds() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrInstanceIds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDeploymentSet) AttrStrategy() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrStrategy",
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

