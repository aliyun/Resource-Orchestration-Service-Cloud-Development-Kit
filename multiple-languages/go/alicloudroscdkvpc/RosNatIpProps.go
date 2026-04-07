package alicloudroscdkvpc


// Properties for defining a `RosNatIp`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-natip
type RosNatIpProps struct {
	NatGatewayId interface{} `field:"required" json:"natGatewayId" yaml:"natGatewayId"`
	NatIpCidr interface{} `field:"required" json:"natIpCidr" yaml:"natIpCidr"`
	NatIpDescription interface{} `field:"required" json:"natIpDescription" yaml:"natIpDescription"`
	NatIpName interface{} `field:"required" json:"natIpName" yaml:"natIpName"`
	Ipv4Prefix interface{} `field:"optional" json:"ipv4Prefix" yaml:"ipv4Prefix"`
	Ipv4PrefixCount interface{} `field:"optional" json:"ipv4PrefixCount" yaml:"ipv4PrefixCount"`
	NatIp interface{} `field:"optional" json:"natIp" yaml:"natIp"`
	NatIpCidrId interface{} `field:"optional" json:"natIpCidrId" yaml:"natIpCidrId"`
}

