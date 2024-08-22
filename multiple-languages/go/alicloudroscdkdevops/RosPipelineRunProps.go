package alicloudroscdkdevops


// Properties for defining a `RosPipelineRun`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-devops-pipelinerun
type RosPipelineRunProps struct {
	OrganizationId interface{} `field:"required" json:"organizationId" yaml:"organizationId"`
	PipelineId interface{} `field:"required" json:"pipelineId" yaml:"pipelineId"`
	Params interface{} `field:"optional" json:"params" yaml:"params"`
	Sync interface{} `field:"optional" json:"sync" yaml:"sync"`
	Timeout interface{} `field:"optional" json:"timeout" yaml:"timeout"`
}

