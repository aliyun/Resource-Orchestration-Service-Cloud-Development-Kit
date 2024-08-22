package datasource


// Properties for defining a `RosDbInstances`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-graphdatabase-dbinstances
type RosDbInstancesProps struct {
	DbInstanceDescription interface{} `field:"optional" json:"dbInstanceDescription" yaml:"dbInstanceDescription"`
	DbInstanceId interface{} `field:"optional" json:"dbInstanceId" yaml:"dbInstanceId"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
}

