package alicloudroscdkecs


// Properties for defining a `RosLaunchTemplateVersion`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-launchtemplateversion
type RosLaunchTemplateVersionProps struct {
	LaunchTemplateData interface{} `field:"optional" json:"launchTemplateData" yaml:"launchTemplateData"`
	LaunchTemplateId interface{} `field:"optional" json:"launchTemplateId" yaml:"launchTemplateId"`
	LaunchTemplateName interface{} `field:"optional" json:"launchTemplateName" yaml:"launchTemplateName"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	VersionDescription interface{} `field:"optional" json:"versionDescription" yaml:"versionDescription"`
}

