package alicloudroscdkappflow


// Properties for defining a `Flow`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-appflow-flow
type FlowProps struct {
	// Property flowName: The name of the flow.
	FlowName interface{} `field:"required" json:"flowName" yaml:"flowName"`
	// Property flowDesc: The description of the flow.
	FlowDesc interface{} `field:"optional" json:"flowDesc" yaml:"flowDesc"`
	// Property flowId: The ID of the flow.
	FlowId interface{} `field:"optional" json:"flowId" yaml:"flowId"`
	// Property launchFlow: Whether to launch the flow.
	LaunchFlow interface{} `field:"optional" json:"launchFlow" yaml:"launchFlow"`
	// Property parameters: The parameters of the flow.
	Parameters interface{} `field:"optional" json:"parameters" yaml:"parameters"`
	// Property template: The template of the flow.
	Template interface{} `field:"optional" json:"template" yaml:"template"`
	// Property templateId: The ID of the template.
	TemplateId interface{} `field:"optional" json:"templateId" yaml:"templateId"`
}

