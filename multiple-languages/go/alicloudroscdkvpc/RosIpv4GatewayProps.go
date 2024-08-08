package alicloudroscdkvpc


// Properties for defining a `RosIpv4Gateway`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-ipv4gateway
type RosIpv4GatewayProps struct {
	VpcId interface{} `field:"required" json:"vpcId" yaml:"vpcId"`
	Ipv4GatewayDescription interface{} `field:"optional" json:"ipv4GatewayDescription" yaml:"ipv4GatewayDescription"`
	Ipv4GatewayName interface{} `field:"optional" json:"ipv4GatewayName" yaml:"ipv4GatewayName"`
}

