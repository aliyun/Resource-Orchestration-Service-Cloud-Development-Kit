package datasource


// Properties for defining a `LaunchTemplates`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-launchtemplates
type LaunchTemplatesProps struct {
	// Property launchTemplateId: The ID of the launch template.
	LaunchTemplateId interface{} `field:"optional" json:"launchTemplateId" yaml:"launchTemplateId"`
	// Property launchTemplateName: The name of the launch template.
	LaunchTemplateName interface{} `field:"optional" json:"launchTemplateName" yaml:"launchTemplateName"`
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
	// Property templateResourceGroupId: The ID of the enterprise resource group to which the template is launched.
	TemplateResourceGroupId interface{} `field:"optional" json:"templateResourceGroupId" yaml:"templateResourceGroupId"`
}

