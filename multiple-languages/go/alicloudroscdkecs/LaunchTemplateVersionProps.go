package alicloudroscdkecs


// Properties for defining a `LaunchTemplateVersion`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-launchtemplateversion
type LaunchTemplateVersionProps struct {
	// Property launchTemplateData: The configurations of the launch template.
	LaunchTemplateData interface{} `field:"optional" json:"launchTemplateData" yaml:"launchTemplateData"`
	// Property launchTemplateId: The ID of the launch template.
	//
	// You must specify LaunchTemplateId or LaunchTemplateName to specify a launch template.
	LaunchTemplateId interface{} `field:"optional" json:"launchTemplateId" yaml:"launchTemplateId"`
	// Property launchTemplateName: The name of the launch template.
	//
	// The name must be 2 to 128 characters in length. The name must start with a letter and cannot start with http:\/\/ or https:\/\/. The name can contain letters, digits, colons (:), underscores (_), and hyphens (-).
	LaunchTemplateName interface{} `field:"optional" json:"launchTemplateName" yaml:"launchTemplateName"`
	// Property resourceGroupId: The ID of the resource group to which to assign the instance.
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	// Property versionDescription: The description of the launch template version.
	//
	// The description must be 2 to 256 characters in length and cannot start with http:\/\/ or https:\/\/.
	VersionDescription interface{} `field:"optional" json:"versionDescription" yaml:"versionDescription"`
}

