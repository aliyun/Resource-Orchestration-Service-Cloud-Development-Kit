package alicloudroscdkvpc


// Properties for defining a `RosNatIpCidr`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-natipcidr
type RosNatIpCidrProps struct {
	NatGatewayId interface{} `field:"required" json:"natGatewayId" yaml:"natGatewayId"`
	NatIpCidr interface{} `field:"required" json:"natIpCidr" yaml:"natIpCidr"`
	NatIpCidrDescription interface{} `field:"required" json:"natIpCidrDescription" yaml:"natIpCidrDescription"`
	NatIpCidrName interface{} `field:"required" json:"natIpCidrName" yaml:"natIpCidrName"`
}

