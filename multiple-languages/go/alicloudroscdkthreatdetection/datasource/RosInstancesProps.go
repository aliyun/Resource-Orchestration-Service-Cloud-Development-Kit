package datasource


// Properties for defining a `RosInstances`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-threatdetection-instances
type RosInstancesProps struct {
	InstanceId interface{} `field:"optional" json:"instanceId" yaml:"instanceId"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

