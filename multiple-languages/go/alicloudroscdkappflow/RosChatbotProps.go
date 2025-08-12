package alicloudroscdkappflow


// Properties for defining a `RosChatbot`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-appflow-chatbot
type RosChatbotProps struct {
	ChatbotName interface{} `field:"required" json:"chatbotName" yaml:"chatbotName"`
	ChatbotConfig interface{} `field:"optional" json:"chatbotConfig" yaml:"chatbotConfig"`
	ChatbotDesc interface{} `field:"optional" json:"chatbotDesc" yaml:"chatbotDesc"`
	ChatbotIcon interface{} `field:"optional" json:"chatbotIcon" yaml:"chatbotIcon"`
	From interface{} `field:"optional" json:"from" yaml:"from"`
	TemplateId interface{} `field:"optional" json:"templateId" yaml:"templateId"`
}

