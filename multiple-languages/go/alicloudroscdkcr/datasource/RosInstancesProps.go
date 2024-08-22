package datasource


// Properties for defining a `RosInstances`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cr-instances
type RosInstancesProps struct {
	InstanceName interface{} `field:"optional" json:"instanceName" yaml:"instanceName"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
}

