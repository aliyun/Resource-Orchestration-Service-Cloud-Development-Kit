package datasource


// Properties for defining a `RosIpv4Gateway`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-ipv4gateway
type RosIpv4GatewayProps struct {
	Ipv4GatewayId interface{} `field:"required" json:"ipv4GatewayId" yaml:"ipv4GatewayId"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

