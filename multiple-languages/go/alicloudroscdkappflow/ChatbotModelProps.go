package alicloudroscdkappflow


// Properties for defining a `ChatbotModel`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-appflow-chatbotmodel
type ChatbotModelProps struct {
	// Property chatbotId: The ID of the chatbot.
	ChatbotId interface{} `field:"required" json:"chatbotId" yaml:"chatbotId"`
	// Property modelActionId: The ID of the model action.
	ModelActionId interface{} `field:"optional" json:"modelActionId" yaml:"modelActionId"`
	// Property modelId: The ID of the model.
	ModelId interface{} `field:"optional" json:"modelId" yaml:"modelId"`
	// Property parameters: The parameters of the model.
	Parameters interface{} `field:"optional" json:"parameters" yaml:"parameters"`
	// Property status: The status of the model.
	Status interface{} `field:"optional" json:"status" yaml:"status"`
	// Property userAuthConfigId: The ID of the user auth config.
	UserAuthConfigId interface{} `field:"optional" json:"userAuthConfigId" yaml:"userAuthConfigId"`
}

