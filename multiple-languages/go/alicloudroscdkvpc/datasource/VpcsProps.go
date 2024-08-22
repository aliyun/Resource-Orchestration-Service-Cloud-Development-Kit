package datasource


// Properties for defining a `Vpcs`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-vpcs
type VpcsProps struct {
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
	// Property vpcIds: The list of The VPC IDs.
	//
	// You can specify up to 20 VPC IDs.
	VpcIds interface{} `field:"optional" json:"vpcIds" yaml:"vpcIds"`
	// Property vpcName: The name of the VPC.
	VpcName interface{} `field:"optional" json:"vpcName" yaml:"vpcName"`
	// Property vpcOwnerId: The ID of the Alibaba Cloud account to which the VPC belongs.
	VpcOwnerId interface{} `field:"optional" json:"vpcOwnerId" yaml:"vpcOwnerId"`
}

