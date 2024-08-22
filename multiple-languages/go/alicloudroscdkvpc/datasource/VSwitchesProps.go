package datasource


// Properties for defining a `VSwitches`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-vswitches
type VSwitchesProps struct {
	// Property dhcpOptionsSetId: The ID of the DHCP options set.
	DhcpOptionsSetId interface{} `field:"optional" json:"dhcpOptionsSetId" yaml:"dhcpOptionsSetId"`
	// Property isDefault: Specifies whether to query the default VPC in the specified region.
	//
	// Valid values:
	// true(default): queries all VPCs in the specified region.
	// false: does not query the default VPC.
	IsDefault interface{} `field:"optional" json:"isDefault" yaml:"isDefault"`
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
	// Property resourceGroupId: The ID of the resource group to which the VPC to be queried belongs.
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	// Property routeTableId: The ID of the route table.
	RouteTableId interface{} `field:"optional" json:"routeTableId" yaml:"routeTableId"`
	// Property vpcId: The ID of the VPC to which the vSwitch belongs.
	VpcId interface{} `field:"optional" json:"vpcId" yaml:"vpcId"`
	// Property vSwitchIds: The list of The vSwitch IDs.
	//
	// You can specify up to 20 vSwitch IDs.
	VSwitchIds interface{} `field:"optional" json:"vSwitchIds" yaml:"vSwitchIds"`
	// Property vSwitchName: The name of the vSwitch.
	VSwitchName interface{} `field:"optional" json:"vSwitchName" yaml:"vSwitchName"`
	// Property vSwitchOwnerId: The ID of the Alibaba Cloud account to which the vSwitch belongs.
	VSwitchOwnerId interface{} `field:"optional" json:"vSwitchOwnerId" yaml:"vSwitchOwnerId"`
}

