package alicloudroscdkgwlb


// Properties for defining a `RosServerGroup`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-gwlb-servergroup
type RosServerGroupProps struct {
	VpcId interface{} `field:"required" json:"vpcId" yaml:"vpcId"`
	ConnectionDrainConfig interface{} `field:"optional" json:"connectionDrainConfig" yaml:"connectionDrainConfig"`
	HealthCheckConfig interface{} `field:"optional" json:"healthCheckConfig" yaml:"healthCheckConfig"`
	Protocol interface{} `field:"optional" json:"protocol" yaml:"protocol"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	Scheduler interface{} `field:"optional" json:"scheduler" yaml:"scheduler"`
	ServerGroupName interface{} `field:"optional" json:"serverGroupName" yaml:"serverGroupName"`
	ServerGroupType interface{} `field:"optional" json:"serverGroupType" yaml:"serverGroupType"`
	Servers interface{} `field:"optional" json:"servers" yaml:"servers"`
	Tags *[]*RosServerGroup_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
}

