package alicloudroscdkgpdb


// Properties for defining a `RosDBResourceGroup`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-gpdb-dbresourcegroup
type RosDBResourceGroupProps struct {
	DbInstanceId interface{} `field:"required" json:"dbInstanceId" yaml:"dbInstanceId"`
	ResourceGroupConfig interface{} `field:"required" json:"resourceGroupConfig" yaml:"resourceGroupConfig"`
	ResourceGroupName interface{} `field:"required" json:"resourceGroupName" yaml:"resourceGroupName"`
}

