package alicloudroscdkappflow

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkappflow/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `Flow`.
type IFlow interface {
	alicloudroscdkcore.IResource
	// Attribute FlowId: The ID of the flow.
	AttrFlowId() interface{}
	// Attribute WebhookAddress: The webhook address of the flow.
	AttrWebhookAddress() interface{}
	Props() *FlowProps
}

// The jsii proxy for IFlow
type jsiiProxy_IFlow struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IFlow) AttrFlowId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrFlowId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IFlow) AttrWebhookAddress() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrWebhookAddress",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IFlow) Props() *FlowProps {
	var returns *FlowProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

