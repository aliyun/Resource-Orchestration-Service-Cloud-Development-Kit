package datasource


// Properties for defining a `RosNatGateway`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-natgateway
type RosNatGatewayProps struct {
	NatGatewayId interface{} `field:"required" json:"natGatewayId" yaml:"natGatewayId"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

