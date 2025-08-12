package alicloudroscdkappflow

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkappflow/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `Chatbot`.
type IChatbot interface {
	alicloudroscdkcore.IResource
	// Attribute ChatbotId: The ID of the chatbot.
	AttrChatbotId() interface{}
	Props() *ChatbotProps
}

// The jsii proxy for IChatbot
type jsiiProxy_IChatbot struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IChatbot) AttrChatbotId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrChatbotId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IChatbot) Props() *ChatbotProps {
	var returns *ChatbotProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

