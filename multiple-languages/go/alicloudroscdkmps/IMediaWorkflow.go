package alicloudroscdkmps

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkmps/internal"
)

// Represents a `MediaWorkflow`.
type IMediaWorkflow interface {
	alicloudroscdkcore.IResource
	// Attribute CreationTime: The time when the media workflow was created.
	AttrCreationTime() interface{}
	// Attribute MediaWorkflowId: The ID of the media workflow.
	AttrMediaWorkflowId() interface{}
	// Attribute Name: The name of the media workflow.
	AttrName() interface{}
	// Attribute State: The state of the media workflow.
	AttrState() interface{}
	// Attribute Topology: The topology of the media workflow.
	AttrTopology() interface{}
	// Attribute TriggerMode: The trigger mode of the media workflow.
	AttrTriggerMode() interface{}
	Props() *MediaWorkflowProps
}

// The jsii proxy for IMediaWorkflow
type jsiiProxy_IMediaWorkflow struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IMediaWorkflow) AttrCreationTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCreationTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IMediaWorkflow) AttrMediaWorkflowId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrMediaWorkflowId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IMediaWorkflow) AttrName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IMediaWorkflow) AttrState() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrState",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IMediaWorkflow) AttrTopology() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTopology",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IMediaWorkflow) AttrTriggerMode() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTriggerMode",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IMediaWorkflow) Props() *MediaWorkflowProps {
	var returns *MediaWorkflowProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

