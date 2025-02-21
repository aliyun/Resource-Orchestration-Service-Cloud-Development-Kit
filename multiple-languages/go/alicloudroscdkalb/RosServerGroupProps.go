package alicloudroscdkalb


// Properties for defining a `RosServerGroup`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-alb-servergroup
type RosServerGroupProps struct {
	HealthCheckConfig interface{} `field:"required" json:"healthCheckConfig" yaml:"healthCheckConfig"`
	ServerGroupName interface{} `field:"required" json:"serverGroupName" yaml:"serverGroupName"`
	ConnectionDrainConfig interface{} `field:"optional" json:"connectionDrainConfig" yaml:"connectionDrainConfig"`
	CrossZoneEnabled interface{} `field:"optional" json:"crossZoneEnabled" yaml:"crossZoneEnabled"`
	Ipv6Enabled interface{} `field:"optional" json:"ipv6Enabled" yaml:"ipv6Enabled"`
	Protocol interface{} `field:"optional" json:"protocol" yaml:"protocol"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	Scheduler interface{} `field:"optional" json:"scheduler" yaml:"scheduler"`
	ServerGroupType interface{} `field:"optional" json:"serverGroupType" yaml:"serverGroupType"`
	ServiceName interface{} `field:"optional" json:"serviceName" yaml:"serviceName"`
	SlowStartConfig interface{} `field:"optional" json:"slowStartConfig" yaml:"slowStartConfig"`
	StickySessionConfig interface{} `field:"optional" json:"stickySessionConfig" yaml:"stickySessionConfig"`
	Tags *[]*RosServerGroup_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
	UchConfig interface{} `field:"optional" json:"uchConfig" yaml:"uchConfig"`
	UpstreamKeepaliveEnabled interface{} `field:"optional" json:"upstreamKeepaliveEnabled" yaml:"upstreamKeepaliveEnabled"`
	VpcId interface{} `field:"optional" json:"vpcId" yaml:"vpcId"`
}

