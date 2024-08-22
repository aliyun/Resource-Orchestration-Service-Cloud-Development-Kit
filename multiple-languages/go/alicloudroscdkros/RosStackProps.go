package alicloudroscdkros


// Properties for defining a `RosStack`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ros-stack
type RosStackProps struct {
	Parameters interface{} `field:"optional" json:"parameters" yaml:"parameters"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	Tags *[]*RosStack_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
	TemplateBody interface{} `field:"optional" json:"templateBody" yaml:"templateBody"`
	TemplateId interface{} `field:"optional" json:"templateId" yaml:"templateId"`
	TemplateUrl interface{} `field:"optional" json:"templateUrl" yaml:"templateUrl"`
	TemplateVersion interface{} `field:"optional" json:"templateVersion" yaml:"templateVersion"`
	TimeoutMins interface{} `field:"optional" json:"timeoutMins" yaml:"timeoutMins"`
}

