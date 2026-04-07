package datasource


// Properties for defining a `RosInstances`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-swas-instances
type RosInstancesProps struct {
	InstanceIds interface{} `field:"optional" json:"instanceIds" yaml:"instanceIds"`
	InstanceName interface{} `field:"optional" json:"instanceName" yaml:"instanceName"`
	PlanType interface{} `field:"optional" json:"planType" yaml:"planType"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	Status interface{} `field:"optional" json:"status" yaml:"status"`
}

