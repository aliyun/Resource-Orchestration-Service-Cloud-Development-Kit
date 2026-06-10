package alicloudroscdkbpstudio


// Properties for defining a `RosApplication`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-bpstudio-application
type RosApplicationProps struct {
	ImageUrl interface{} `field:"required" json:"imageUrl" yaml:"imageUrl"`
	TemplateId interface{} `field:"required" json:"templateId" yaml:"templateId"`
	TopoUrl interface{} `field:"required" json:"topoUrl" yaml:"topoUrl"`
	ApplicationName interface{} `field:"optional" json:"applicationName" yaml:"applicationName"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
}

