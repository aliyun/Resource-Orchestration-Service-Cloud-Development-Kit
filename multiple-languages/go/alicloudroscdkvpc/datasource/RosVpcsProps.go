package datasource


// Properties for defining a `RosVpcs`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-vpcs
type RosVpcsProps struct {
	DhcpOptionsSetId interface{} `field:"optional" json:"dhcpOptionsSetId" yaml:"dhcpOptionsSetId"`
	IsDefault interface{} `field:"optional" json:"isDefault" yaml:"isDefault"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	VpcIds interface{} `field:"optional" json:"vpcIds" yaml:"vpcIds"`
	VpcName interface{} `field:"optional" json:"vpcName" yaml:"vpcName"`
	VpcOwnerId interface{} `field:"optional" json:"vpcOwnerId" yaml:"vpcOwnerId"`
}

