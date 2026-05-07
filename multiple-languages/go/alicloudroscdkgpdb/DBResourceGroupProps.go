package alicloudroscdkgpdb


// Properties for defining a `DBResourceGroup`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-gpdb-dbresourcegroup
type DBResourceGroupProps struct {
	// Property dbInstanceId: The instance ID.> You can call the [DescribeDBInstances](~~ 86911 ~~) operation to view the instance IDs of all AnalyticDB PostgreSQL instances in the target region.
	DbInstanceId interface{} `field:"required" json:"dbInstanceId" yaml:"dbInstanceId"`
	// Property resourceGroupConfig: Resource group configuration.
	ResourceGroupConfig interface{} `field:"required" json:"resourceGroupConfig" yaml:"resourceGroupConfig"`
	// Property resourceGroupName: Resource group name.
	ResourceGroupName interface{} `field:"required" json:"resourceGroupName" yaml:"resourceGroupName"`
}

