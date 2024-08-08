package alicloudroscdkecs


// Properties for defining a `VSwitch`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-vswitch
type VSwitchProps struct {
	// Property cidrBlock: CIDR Block of created VSwitch, It must belong to itself VPC CIDR block.
	CidrBlock interface{} `field:"required" json:"cidrBlock" yaml:"cidrBlock"`
	// Property vpcId: VPC id to create vswtich.
	VpcId interface{} `field:"required" json:"vpcId" yaml:"vpcId"`
	// Property zoneId: The availability zone in which the VSwitch will be created.
	ZoneId interface{} `field:"required" json:"zoneId" yaml:"zoneId"`
	// Property description: Description of the VSwitch, [2, 256] characters.
	//
	// Do not fill or empty, the default is empty.
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	// Property ipv6CidrBlock: The IPv6 network segment of the switch supports the last 8 bits of the VPC IPv6 network segment.
	//
	// Value: 0-255 (decimal).
	// The IPv6 segment mask of the switch defaults to 64 bits.
	Ipv6CidrBlock interface{} `field:"optional" json:"ipv6CidrBlock" yaml:"ipv6CidrBlock"`
	// Property tags: Tags to attach to vswitch.
	//
	// Max support 20 tags to add during create vswitch. Each tag with two properties Key and Value, and Key is required.
	Tags *[]*RosVSwitch_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
	// Property vpcIpv6CidrBlock: The IPv6 CIDR block of the VPC.
	VpcIpv6CidrBlock interface{} `field:"optional" json:"vpcIpv6CidrBlock" yaml:"vpcIpv6CidrBlock"`
	// Property vSwitchName: Display name of the vSwitch instance, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'.
	VSwitchName interface{} `field:"optional" json:"vSwitchName" yaml:"vSwitchName"`
	// Property zoneType: The type of the zones to be queried.
	//
	// Default value: AvailabilityZone. This value indicates Alibaba Cloud zones.
	ZoneType interface{} `field:"optional" json:"zoneType" yaml:"zoneType"`
}

