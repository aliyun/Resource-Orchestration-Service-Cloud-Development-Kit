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
	//
	// This parameter is required when you update a flow or create a
	// new flow version.
	FlowId interface{} `field:"optional" json:"flowId" yaml:"flowId"`
	// Property flowStatus: The status of the flow.
	//
	// Allowed values:
	// Enable: enable flow
	// Disable: disable flow.
	FlowStatus interface{} `field:"optional" json:"flowStatus" yaml:"flowStatus"`
	// Property launchFlow: Whether to launch the flow.
	LaunchFlow interface{} `field:"optional" json:"launchFlow" yaml:"launchFlow"`
	// Property parameters: The parameters for the template.
	//
	// You can specify up to 200 parameters.
	// > This parameter is optional. If you use this parameter, you must specify both
	// ParameterKey and ParameterValue for each entry.
	Parameters interface{} `field:"optional" json:"parameters" yaml:"parameters"`
	// Property template: The template of the flow.
	Template interface{} `field:"optional" json:"template" yaml:"template"`
	// Property templateId: The ID of the template.
	//
	// Specify this parameter when you create a flow from a
	// template in the Template Center.
	TemplateId interface{} `field:"optional" json:"templateId" yaml:"templateId"`
}

