package alicloudroscdkappflow

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkappflow/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `ChatbotFlow`.
type IChatbotFlow interface {
	alicloudroscdkcore.IResource
	// Attribute ChatbotFlowId: The ID of the chatbot flow.
	AttrChatbotFlowId() interface{}
	Props() *ChatbotFlowProps
}

// The jsii proxy for IChatbotFlow
type jsiiProxy_IChatbotFlow struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IChatbotFlow) AttrChatbotFlowId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrChatbotFlowId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IChatbotFlow) Props() *ChatbotFlowProps {
	var returns *ChatbotFlowProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

