package alicloudroscdkappflow

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkappflow/internal"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
)

// Represents a `ChatbotModel`.
type IChatbotModel interface {
	alicloudroscdkcore.IResource
	// Attribute ChatbotModelId: The ID of the chatbot model.
	AttrChatbotModelId() interface{}
	Props() *ChatbotModelProps
}

// The jsii proxy for IChatbotModel
type jsiiProxy_IChatbotModel struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IChatbotModel) AttrChatbotModelId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrChatbotModelId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IChatbotModel) Props() *ChatbotModelProps {
	var returns *ChatbotModelProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

