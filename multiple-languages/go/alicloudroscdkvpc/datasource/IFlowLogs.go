package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkvpc/datasource/internal"
)

// Represents a `FlowLogs`.
type IFlowLogs interface {
	alicloudroscdkcore.IResource
	// Attribute FlowLogIds: The list of flow log IDs.
	AttrFlowLogIds() interface{}
	// Attribute FlowLogs: The list of flow logs.
	AttrFlowLogs() interface{}
	Props() *FlowLogsProps
}

// The jsii proxy for IFlowLogs
type jsiiProxy_IFlowLogs struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IFlowLogs) AttrFlowLogIds() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrFlowLogIds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IFlowLogs) AttrFlowLogs() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrFlowLogs",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IFlowLogs) Props() *FlowLogsProps {
	var returns *FlowLogsProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

