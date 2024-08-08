package alicloudroscdkdevops


// Properties for defining a `PipelineRelations`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-devops-pipelinerelations
type PipelineRelationsProps struct {
	// Property organizationId: Corporate identity, also known as enterprise id, can obtain in cloud effect access links.
	OrganizationId interface{} `field:"required" json:"organizationId" yaml:"organizationId"`
	// Property pipelineId: The pipeline ID, which can be obtained from the pipeline link.
	PipelineId interface{} `field:"required" json:"pipelineId" yaml:"pipelineId"`
	// Property relObjectIds: Ids of the associated resource.
	//
	// For now, only variable group ids are supported.
	RelObjectIds interface{} `field:"required" json:"relObjectIds" yaml:"relObjectIds"`
	// Property relObjectType: Associated resource type.
	//
	// Valid values:
	// - VARIABLE_GROUP
	// - OOS_APP_ID
	// For now, only VARIABLE GROUP is supported.
	RelObjectType interface{} `field:"required" json:"relObjectType" yaml:"relObjectType"`
}

