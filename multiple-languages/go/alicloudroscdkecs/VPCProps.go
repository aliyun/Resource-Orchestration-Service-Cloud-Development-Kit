package alicloudroscdkecs


// Properties for defining a `VPC`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-vpc
type VPCProps struct {
	// Property cidrBlock: The IP address range of the VPC in the CIDR block form.
	//
	// You can use the following IP address ranges and their subnets:
	// 10.0.0.0\/8
	// 172.16.0.0\/12 (Default)
	// 192.168.0.0\/16
	CidrBlock interface{} `field:"optional" json:"cidrBlock" yaml:"cidrBlock"`
	// Property description: Description of the vpc, [2, 256] characters.
	//
	// Do not fill or empty, the default is empty.
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	// Property enableIpv6: Whether to enable an IPv6 network cidr, the value is:False (default): not turned on.True: On.
	EnableIpv6 interface{} `field:"optional" json:"enableIpv6" yaml:"enableIpv6"`
	// Property ipv6CidrBlock: IPv6 network cidr of the VPC.
	Ipv6CidrBlock interface{} `field:"optional" json:"ipv6CidrBlock" yaml:"ipv6CidrBlock"`
	// Property ipv6Isp: The Internet service provider (ISP) for IPv6 addresses of the VPC.
	//
	// Valid values:
	// BGP(default): Alibaba Cloud BGP IPv6
	// ChinaMobile: China Mobile (single line)
	// ChinaUnicom: China Unicom (single line)
	// ChinaTelecom: China Telecom (single line)
	// Note If your Alibaba Cloud account is allowed to activate single-ISP bandwidth, you can set the parameter to ChinaTelecom, ChinaUnicom, and ChinaMobile.
	Ipv6Isp interface{} `field:"optional" json:"ipv6Isp" yaml:"ipv6Isp"`
	// Property resourceGroupId: Resource group id.
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	// Property secondaryCidrBlocks: The secondary IPv4 CIDR blocks.
	SecondaryCidrBlocks interface{} `field:"optional" json:"secondaryCidrBlocks" yaml:"secondaryCidrBlocks"`
	// Property tags: Tags to attach to vpc.
	//
	// Max support 20 tags to add during create vpc. Each tag with two properties Key and Value, and Key is required.
	Tags *[]*RosVPC_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
	// Property userCidr: The user CIDR block.
	//
	// Separate multiple CIDR blocks with commas (,). At most three CIDR blocks are supported.
	UserCidr interface{} `field:"optional" json:"userCidr" yaml:"userCidr"`
	// Property vpcName: Display name of the vpc instance, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'.
	VpcName interface{} `field:"optional" json:"vpcName" yaml:"vpcName"`
}

