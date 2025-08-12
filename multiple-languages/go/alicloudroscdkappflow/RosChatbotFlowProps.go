package alicloudroscdkappflow


// Properties for defining a `RosChatbotFlow`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-appflow-chatbotflow
type RosChatbotFlowProps struct {
	ChatbotId interface{} `field:"required" json:"chatbotId" yaml:"chatbotId"`
	FlowConfig interface{} `field:"optional" json:"flowConfig" yaml:"flowConfig"`
	FlowName interface{} `field:"optional" json:"flowName" yaml:"flowName"`
	FlowType interface{} `field:"optional" json:"flowType" yaml:"flowType"`
}

