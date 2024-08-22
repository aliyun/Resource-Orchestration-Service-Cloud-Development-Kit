package alicloudroscdkdevops


// Properties for defining a `RosPipeline`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-devops-pipeline
type RosPipelineProps struct {
	Content interface{} `field:"required" json:"content" yaml:"content"`
	Name interface{} `field:"required" json:"name" yaml:"name"`
	OrganizationId interface{} `field:"required" json:"organizationId" yaml:"organizationId"`
}

