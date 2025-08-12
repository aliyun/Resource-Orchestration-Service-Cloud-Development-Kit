package alicloudroscdkappflow


// Properties for defining a `RosChatbotModel`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-appflow-chatbotmodel
type RosChatbotModelProps struct {
	ChatbotId interface{} `field:"required" json:"chatbotId" yaml:"chatbotId"`
	ModelActionId interface{} `field:"optional" json:"modelActionId" yaml:"modelActionId"`
	ModelId interface{} `field:"optional" json:"modelId" yaml:"modelId"`
	Parameters interface{} `field:"optional" json:"parameters" yaml:"parameters"`
	Status interface{} `field:"optional" json:"status" yaml:"status"`
	UserAuthConfigId interface{} `field:"optional" json:"userAuthConfigId" yaml:"userAuthConfigId"`
}

