package alicloudroscdkdataworks


// Properties for defining a `ResourceGroupRelation`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dataworks-resourcegrouprelation
type ResourceGroupRelationProps struct {
	// Property projectId: Workspace ID to bind.
	ProjectId interface{} `field:"required" json:"projectId" yaml:"projectId"`
	// Property resourceGroupId: Unique ID of resource group.
	ResourceGroupId interface{} `field:"required" json:"resourceGroupId" yaml:"resourceGroupId"`
}

