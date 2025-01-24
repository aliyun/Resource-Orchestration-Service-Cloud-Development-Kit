package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkfnf/datasource/internal"
)

// Represents a `Flows`.
type IFlows interface {
	alicloudroscdkcore.IResource
	// Attribute FlowNames: The list of flow names.
	AttrFlowNames() interface{}
	// Attribute Flows: The details about flows.
	AttrFlows() interface{}
	Props() *FlowsProps
}

// The jsii proxy for IFlows
type jsiiProxy_IFlows struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IFlows) AttrFlowNames() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrFlowNames",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IFlows) AttrFlows() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrFlows",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IFlows) Props() *FlowsProps {
	var returns *FlowsProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

