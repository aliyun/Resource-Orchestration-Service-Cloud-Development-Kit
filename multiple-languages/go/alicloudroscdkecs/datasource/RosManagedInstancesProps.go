package datasource


// Properties for defining a `RosManagedInstances`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-managedinstances
type RosManagedInstancesProps struct {
	ActivationId interface{} `field:"optional" json:"activationId" yaml:"activationId"`
	InstanceId interface{} `field:"optional" json:"instanceId" yaml:"instanceId"`
	InstanceIp interface{} `field:"optional" json:"instanceIp" yaml:"instanceIp"`
	InstanceName interface{} `field:"optional" json:"instanceName" yaml:"instanceName"`
	OsType interface{} `field:"optional" json:"osType" yaml:"osType"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
	Tags *[]*RosManagedInstances_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
}

