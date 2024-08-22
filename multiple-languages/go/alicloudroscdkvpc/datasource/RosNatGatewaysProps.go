package datasource


// Properties for defining a `RosNatGateways`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-natgateways
type RosNatGatewaysProps struct {
	InstanceChargeType interface{} `field:"optional" json:"instanceChargeType" yaml:"instanceChargeType"`
	Name interface{} `field:"optional" json:"name" yaml:"name"`
	NatGatewayId interface{} `field:"optional" json:"natGatewayId" yaml:"natGatewayId"`
	NatType interface{} `field:"optional" json:"natType" yaml:"natType"`
	NetworkType interface{} `field:"optional" json:"networkType" yaml:"networkType"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	Status interface{} `field:"optional" json:"status" yaml:"status"`
	VpcId interface{} `field:"optional" json:"vpcId" yaml:"vpcId"`
	ZoneId interface{} `field:"optional" json:"zoneId" yaml:"zoneId"`
}

