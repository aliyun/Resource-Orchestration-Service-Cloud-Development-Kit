package alicloudroscdkappflow


// Properties for defining a `Chatbot`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-appflow-chatbot
type ChatbotProps struct {
	// Property chatbotName: The name of the chatbot.
	ChatbotName interface{} `field:"required" json:"chatbotName" yaml:"chatbotName"`
	// Property chatbotConfig: AI assistant configuration.
	ChatbotConfig interface{} `field:"optional" json:"chatbotConfig" yaml:"chatbotConfig"`
	// Property chatbotDesc: The description of the chatbot.
	ChatbotDesc interface{} `field:"optional" json:"chatbotDesc" yaml:"chatbotDesc"`
	// Property chatbotIcon: The icon of the chatbot.
	ChatbotIcon interface{} `field:"optional" json:"chatbotIcon" yaml:"chatbotIcon"`
	// Property from: The source of the request.
	From interface{} `field:"optional" json:"from" yaml:"from"`
	// Property templateId: The ID of the chatbot template.
	TemplateId interface{} `field:"optional" json:"templateId" yaml:"templateId"`
}

