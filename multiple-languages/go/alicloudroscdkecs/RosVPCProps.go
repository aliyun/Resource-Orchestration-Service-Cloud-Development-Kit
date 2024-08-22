package alicloudroscdkecs


// Properties for defining a `RosVPC`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-vpc
type RosVPCProps struct {
	CidrBlock interface{} `field:"optional" json:"cidrBlock" yaml:"cidrBlock"`
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	EnableIpv6 interface{} `field:"optional" json:"enableIpv6" yaml:"enableIpv6"`
	Ipv6CidrBlock interface{} `field:"optional" json:"ipv6CidrBlock" yaml:"ipv6CidrBlock"`
	Ipv6Isp interface{} `field:"optional" json:"ipv6Isp" yaml:"ipv6Isp"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	SecondaryCidrBlocks interface{} `field:"optional" json:"secondaryCidrBlocks" yaml:"secondaryCidrBlocks"`
	Tags *[]*RosVPC_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
	UserCidr interface{} `field:"optional" json:"userCidr" yaml:"userCidr"`
	VpcName interface{} `field:"optional" json:"vpcName" yaml:"vpcName"`
}

