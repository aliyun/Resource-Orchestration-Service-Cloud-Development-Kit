package alicloudroscdkappflow


// Properties for defining a `RosFlow`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-appflow-flow
type RosFlowProps struct {
	FlowName interface{} `field:"required" json:"flowName" yaml:"flowName"`
	FlowDesc interface{} `field:"optional" json:"flowDesc" yaml:"flowDesc"`
	FlowId interface{} `field:"optional" json:"flowId" yaml:"flowId"`
	FlowStatus interface{} `field:"optional" json:"flowStatus" yaml:"flowStatus"`
	LaunchFlow interface{} `field:"optional" json:"launchFlow" yaml:"launchFlow"`
	Parameters interface{} `field:"optional" json:"parameters" yaml:"parameters"`
	Template interface{} `field:"optional" json:"template" yaml:"template"`
	TemplateId interface{} `field:"optional" json:"templateId" yaml:"templateId"`
}

