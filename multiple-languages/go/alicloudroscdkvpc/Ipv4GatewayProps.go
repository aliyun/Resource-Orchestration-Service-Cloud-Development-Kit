package alicloudroscdkvpc


// Properties for defining a `Ipv4Gateway`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-ipv4gateway
type Ipv4GatewayProps struct {
	// Property vpcId: The ID of the VPC associated with the IPv4 Gateway.
	VpcId interface{} `field:"required" json:"vpcId" yaml:"vpcId"`
	// Property ipv4GatewayDescription: Description information.
	Ipv4GatewayDescription interface{} `field:"optional" json:"ipv4GatewayDescription" yaml:"ipv4GatewayDescription"`
	// Property ipv4GatewayName: Resource name.
	Ipv4GatewayName interface{} `field:"optional" json:"ipv4GatewayName" yaml:"ipv4GatewayName"`
}

