package alicloudroscdkvpc


// Properties for defining a `RosVpcCidrBlockAssociation`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-vpccidrblockassociation
type RosVpcCidrBlockAssociationProps struct {
	VpcId interface{} `field:"required" json:"vpcId" yaml:"vpcId"`
	IpamPoolId interface{} `field:"optional" json:"ipamPoolId" yaml:"ipamPoolId"`
	IPv6CidrBlock interface{} `field:"optional" json:"iPv6CidrBlock" yaml:"iPv6CidrBlock"`
	Ipv6Isp interface{} `field:"optional" json:"ipv6Isp" yaml:"ipv6Isp"`
	IpVersion interface{} `field:"optional" json:"ipVersion" yaml:"ipVersion"`
	SecondaryCidrBlock interface{} `field:"optional" json:"secondaryCidrBlock" yaml:"secondaryCidrBlock"`
	SecondaryCidrMask interface{} `field:"optional" json:"secondaryCidrMask" yaml:"secondaryCidrMask"`
}

