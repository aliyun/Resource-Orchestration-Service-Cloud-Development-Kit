package alicloudroscdkros


// Properties for defining a `Stack`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ros-stack
type StackProps struct {
	// Property parameters: The set of parameters passed to this nested stack.
	Parameters interface{} `field:"optional" json:"parameters" yaml:"parameters"`
	// Property resourceGroupId: Resource group.
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	// Property tags: The tags of nested stack.
	//
	// If it is specified, it will be passed to all tag-supported resources in the nested stack.
	Tags *[]*RosStack_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
	// Property templateBody: Structure containing the template body.
	//
	// It is just to facilitate the passing of template. It is raw content.Functions in TemplateBody will not be resolved in parent stack.
	// You must specify either the TemplateBody or the TemplateURL property. If both are specified, TemplateBody will be used.
	TemplateBody interface{} `field:"optional" json:"templateBody" yaml:"templateBody"`
	// Property templateId: Template ID of template containing the template body.
	TemplateId interface{} `field:"optional" json:"templateId" yaml:"templateId"`
	// Property templateUrl: Location of file containing the template body.
	//
	// The URL must point to a template (max size: 524288 bytes) that is located in a http web server(http, https), or an Aliyun OSS bucket(Such as oss:\/\/ros-template\/demo?RegionId=cn-hangzhou, oss:\/\/ros-template\/demo. RegionId is default to the value of RegionId Parameter of the request.).
	// You must specify either the TemplateBody or the TemplateURL property. If both are specified, TemplateBody will be used.
	TemplateUrl interface{} `field:"optional" json:"templateUrl" yaml:"templateUrl"`
	// Property templateVersion: Template version of template containing the template body.
	TemplateVersion interface{} `field:"optional" json:"templateVersion" yaml:"templateVersion"`
	// Property timeoutMins: The length of time, in minutes, to wait for the nested stack creation or update.
	//
	// Default to 60 minutes.
	TimeoutMins interface{} `field:"optional" json:"timeoutMins" yaml:"timeoutMins"`
}

