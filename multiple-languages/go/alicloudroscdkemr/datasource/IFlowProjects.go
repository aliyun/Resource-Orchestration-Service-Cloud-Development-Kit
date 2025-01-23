package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkemr/datasource/internal"
)

// Represents a `FlowProjects`.
type IFlowProjects interface {
	alicloudroscdkcore.IResource
	// Attribute FlowProjectIds: The list of flow project IDs.
	AttrFlowProjectIds() interface{}
	// Attribute FlowProjects: The list of flow projects.
	AttrFlowProjects() interface{}
	Props() *FlowProjectsProps
}

// The jsii proxy for IFlowProjects
type jsiiProxy_IFlowProjects struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IFlowProjects) AttrFlowProjectIds() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrFlowProjectIds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IFlowProjects) AttrFlowProjects() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrFlowProjects",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IFlowProjects) Props() *FlowProjectsProps {
	var returns *FlowProjectsProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

