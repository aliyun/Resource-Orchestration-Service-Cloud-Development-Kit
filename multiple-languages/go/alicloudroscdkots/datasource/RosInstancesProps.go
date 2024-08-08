package datasource


// Properties for defining a `RosInstances`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ots-instances
type RosInstancesProps struct {
	InstanceName interface{} `field:"optional" json:"instanceName" yaml:"instanceName"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
	Status interface{} `field:"optional" json:"status" yaml:"status"`
}

