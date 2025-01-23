package alicloudroscdkpai

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkpai/internal"
)

// Represents a `Experiment`.
type IExperiment interface {
	alicloudroscdkcore.IResource
	// Attribute Accessibility: Experimental Visibility.
	AttrAccessibility() interface{}
	// Attribute ArtifactUri: ArtifactUri is default OSS storage path of the output of trials in the experiment.
	AttrArtifactUri() interface{}
	// Attribute CreateTime: GmtCreateTime is time when this entity is created.
	AttrCreateTime() interface{}
	// Attribute ExperimentId: ExperimentId is globally unique identifier of the experiment.
	AttrExperimentId() interface{}
	// Attribute ExperimentName: Name is the name of the experiment, unique in a namespace.
	AttrExperimentName() interface{}
	// Attribute GmtModifiedTime: GmtModifiedTime is time when this entity is modified.
	AttrGmtModifiedTime() interface{}
	// Attribute Labels: Labels are tags of the experiment.
	AttrLabels() interface{}
	// Attribute OwnerId: OwnerId is the user account id which this entity belongs to.
	AttrOwnerId() interface{}
	// Attribute TensorboardLogUri: TensorboardLogUri is the default OSS storage path of tensorboard log of trials in the experiment.
	AttrTensorboardLogUri() interface{}
	// Attribute UserId: UserId is the user account id which created this entity.
	AttrUserId() interface{}
	// Attribute WorkspaceId: WorkspaceId is the workspace id which contains the experiment.
	AttrWorkspaceId() interface{}
	Props() *ExperimentProps
}

// The jsii proxy for IExperiment
type jsiiProxy_IExperiment struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IExperiment) AttrAccessibility() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAccessibility",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IExperiment) AttrArtifactUri() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrArtifactUri",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IExperiment) AttrCreateTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCreateTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IExperiment) AttrExperimentId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrExperimentId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IExperiment) AttrExperimentName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrExperimentName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IExperiment) AttrGmtModifiedTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrGmtModifiedTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IExperiment) AttrLabels() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrLabels",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IExperiment) AttrOwnerId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrOwnerId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IExperiment) AttrTensorboardLogUri() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTensorboardLogUri",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IExperiment) AttrUserId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrUserId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IExperiment) AttrWorkspaceId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrWorkspaceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IExperiment) Props() *ExperimentProps {
	var returns *ExperimentProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

