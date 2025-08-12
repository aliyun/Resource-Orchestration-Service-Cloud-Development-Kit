package alicloudroscdkappflow


// Properties for defining a `ChatbotFlow`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-appflow-chatbotflow
type ChatbotFlowProps struct {
	// Property chatbotId: The ID of the chatbot.
	ChatbotId interface{} `field:"required" json:"chatbotId" yaml:"chatbotId"`
	// Property flowConfig: The config of the chatbot flow.
	FlowConfig interface{} `field:"optional" json:"flowConfig" yaml:"flowConfig"`
	// Property flowName: The name of the chatbot flow.
	FlowName interface{} `field:"optional" json:"flowName" yaml:"flowName"`
	// Property flowType: The type of the chatbot flow.
	FlowType interface{} `field:"optional" json:"flowType" yaml:"flowType"`
}

