package datasource


// Properties for defining a `RosInstances`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-apigateway-instances
type RosInstancesProps struct {
	InstanceId interface{} `field:"optional" json:"instanceId" yaml:"instanceId"`
	Language interface{} `field:"optional" json:"language" yaml:"language"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

