package datasource


// Properties for defining a `RosIpv4Gateways`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-ipv4gateways
type RosIpv4GatewaysProps struct {
	Ipv4GatewayId interface{} `field:"optional" json:"ipv4GatewayId" yaml:"ipv4GatewayId"`
	Ipv4GatewayName interface{} `field:"optional" json:"ipv4GatewayName" yaml:"ipv4GatewayName"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
	VpcId interface{} `field:"optional" json:"vpcId" yaml:"vpcId"`
}

