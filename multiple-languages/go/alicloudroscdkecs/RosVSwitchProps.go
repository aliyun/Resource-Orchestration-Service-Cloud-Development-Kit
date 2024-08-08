package alicloudroscdkecs


// Properties for defining a `RosVSwitch`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-vswitch
type RosVSwitchProps struct {
	CidrBlock interface{} `field:"required" json:"cidrBlock" yaml:"cidrBlock"`
	VpcId interface{} `field:"required" json:"vpcId" yaml:"vpcId"`
	ZoneId interface{} `field:"required" json:"zoneId" yaml:"zoneId"`
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	Ipv6CidrBlock interface{} `field:"optional" json:"ipv6CidrBlock" yaml:"ipv6CidrBlock"`
	Tags *[]*RosVSwitch_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
	VpcIpv6CidrBlock interface{} `field:"optional" json:"vpcIpv6CidrBlock" yaml:"vpcIpv6CidrBlock"`
	VSwitchName interface{} `field:"optional" json:"vSwitchName" yaml:"vSwitchName"`
	ZoneType interface{} `field:"optional" json:"zoneType" yaml:"zoneType"`
}

