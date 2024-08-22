package datasource


// Properties for defining a `RosLaunchTemplate`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-launchtemplate
type RosLaunchTemplateProps struct {
	LaunchTemplateId interface{} `field:"required" json:"launchTemplateId" yaml:"launchTemplateId"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

