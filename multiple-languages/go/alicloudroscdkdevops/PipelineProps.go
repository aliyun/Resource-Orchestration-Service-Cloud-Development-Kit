package alicloudroscdkdevops


// Properties for defining a `Pipeline`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-devops-pipeline
type PipelineProps struct {
	// Property content: Pipeline description in YAML format.
	Content interface{} `field:"required" json:"content" yaml:"content"`
	// Property name: Pipeline name.
	Name interface{} `field:"required" json:"name" yaml:"name"`
	// Property organizationId: Corporate identity, also known as enterprise id, can obtain in cloud effect access links.
	OrganizationId interface{} `field:"required" json:"organizationId" yaml:"organizationId"`
}

