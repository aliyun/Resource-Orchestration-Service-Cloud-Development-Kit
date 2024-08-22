package datasource


// Properties for defining a `RosInstances`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-eais-instances
type RosInstancesProps struct {
	InstanceId interface{} `field:"optional" json:"instanceId" yaml:"instanceId"`
	InstanceName interface{} `field:"optional" json:"instanceName" yaml:"instanceName"`
	InstanceType interface{} `field:"optional" json:"instanceType" yaml:"instanceType"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
}

