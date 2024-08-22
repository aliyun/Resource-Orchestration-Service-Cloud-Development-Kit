package datasource


// Properties for defining a `RosNatIpCidrs`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-natipcidrs
type RosNatIpCidrsProps struct {
	NatGatewayId interface{} `field:"required" json:"natGatewayId" yaml:"natGatewayId"`
	NatIpCidr interface{} `field:"optional" json:"natIpCidr" yaml:"natIpCidr"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

