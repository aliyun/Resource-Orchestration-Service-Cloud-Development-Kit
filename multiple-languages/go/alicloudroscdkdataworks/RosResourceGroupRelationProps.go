package alicloudroscdkdataworks


// Properties for defining a `RosResourceGroupRelation`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dataworks-resourcegrouprelation
type RosResourceGroupRelationProps struct {
	ProjectId interface{} `field:"required" json:"projectId" yaml:"projectId"`
	ResourceGroupId interface{} `field:"required" json:"resourceGroupId" yaml:"resourceGroupId"`
}

