package datasource


// Properties for defining a `NatGateways`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-natgateways
type NatGatewaysProps struct {
	// Property instanceChargeType: The billing method of the NAT gateway.
	//
	// Set the value to PostPaid, which specifies the pay-as-you-go billing method.
	InstanceChargeType interface{} `field:"optional" json:"instanceChargeType" yaml:"instanceChargeType"`
	// Property name: The name of the NAT gateway.
	Name interface{} `field:"optional" json:"name" yaml:"name"`
	// Property natGatewayId: The ID of the NAT gateway.
	NatGatewayId interface{} `field:"optional" json:"natGatewayId" yaml:"natGatewayId"`
	// Property natType: The type of NAT gateway.
	//
	// Set the value to Enhanced (enhanced NAT gateway).
	NatType interface{} `field:"optional" json:"natType" yaml:"natType"`
	// Property networkType: The type of the NAT gateway.
	//
	// Valid values:
	// internet: an Internet NAT gateway
	// intranet: a VPC NAT gateway.
	NetworkType interface{} `field:"optional" json:"networkType" yaml:"networkType"`
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
	// Property resourceGroupId: The ID of the resource group to which the NAT gateway belongs.
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	// Property status: The status of the NAT gateway.
	//
	// Valid values:
	// Creating: After you send a request to create a NAT gateway, the system creates the NAT gateway in the background. The NAT gateway remains in the Creating state until the operation is completed.
	//   Available: The NAT gateway remains in a stable state after the NAT gateway is created.
	//   Modifying: After you send a request to modify a NAT gateway, the system modifies the NAT gateway in the background. The NAT gateway remains in the Modifying state until the operation is completed.
	//   Deleting: After you send a request to delete a NAT gateway, the system deletes the NAT gateway in the background. The NAT gateway remains in the Deleting state until the operation is completed.
	//   Converting: After you send a request to upgrade a standard NAT gateway to an enhanced NAT gateway, the system upgrades the NAT gateway in the background. The NAT gateway remains in the Converting state until the operation is completed.
	Status interface{} `field:"optional" json:"status" yaml:"status"`
	// Property vpcId: The ID of the VPC to which the NAT gateway belongs.
	VpcId interface{} `field:"optional" json:"vpcId" yaml:"vpcId"`
	// Property zoneId: The ID of the zone to which the NAT gateway belongs.
	ZoneId interface{} `field:"optional" json:"zoneId" yaml:"zoneId"`
}

