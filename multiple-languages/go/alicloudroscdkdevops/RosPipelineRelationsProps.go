package alicloudroscdkdevops


// Properties for defining a `RosPipelineRelations`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-devops-pipelinerelations
type RosPipelineRelationsProps struct {
	OrganizationId interface{} `field:"required" json:"organizationId" yaml:"organizationId"`
	PipelineId interface{} `field:"required" json:"pipelineId" yaml:"pipelineId"`
	RelObjectIds interface{} `field:"required" json:"relObjectIds" yaml:"relObjectIds"`
	RelObjectType interface{} `field:"required" json:"relObjectType" yaml:"relObjectType"`
}

