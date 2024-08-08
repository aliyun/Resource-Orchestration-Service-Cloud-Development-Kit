package datasource


// Properties for defining a `RosInstances`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ens-instances
type RosInstancesProps struct {
	EnsRegionIds interface{} `field:"optional" json:"ensRegionIds" yaml:"ensRegionIds"`
	EnsServiceId interface{} `field:"optional" json:"ensServiceId" yaml:"ensServiceId"`
	ImageId interface{} `field:"optional" json:"imageId" yaml:"imageId"`
	InstanceIds interface{} `field:"optional" json:"instanceIds" yaml:"instanceIds"`
	InstanceName interface{} `field:"optional" json:"instanceName" yaml:"instanceName"`
	InstanceResourceType interface{} `field:"optional" json:"instanceResourceType" yaml:"instanceResourceType"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
	Status interface{} `field:"optional" json:"status" yaml:"status"`
}

