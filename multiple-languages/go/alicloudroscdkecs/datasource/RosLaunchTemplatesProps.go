package datasource


// Properties for defining a `RosLaunchTemplates`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-launchtemplates
type RosLaunchTemplatesProps struct {
	LaunchTemplateId interface{} `field:"optional" json:"launchTemplateId" yaml:"launchTemplateId"`
	LaunchTemplateName interface{} `field:"optional" json:"launchTemplateName" yaml:"launchTemplateName"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
	TemplateResourceGroupId interface{} `field:"optional" json:"templateResourceGroupId" yaml:"templateResourceGroupId"`
}

