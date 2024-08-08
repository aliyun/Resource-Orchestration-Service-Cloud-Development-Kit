package datasource


// Properties for defining a `RosVSwitches`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-vswitches
type RosVSwitchesProps struct {
	DhcpOptionsSetId interface{} `field:"optional" json:"dhcpOptionsSetId" yaml:"dhcpOptionsSetId"`
	IsDefault interface{} `field:"optional" json:"isDefault" yaml:"isDefault"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	RouteTableId interface{} `field:"optional" json:"routeTableId" yaml:"routeTableId"`
	VpcId interface{} `field:"optional" json:"vpcId" yaml:"vpcId"`
	VSwitchIds interface{} `field:"optional" json:"vSwitchIds" yaml:"vSwitchIds"`
	VSwitchName interface{} `field:"optional" json:"vSwitchName" yaml:"vSwitchName"`
	VSwitchOwnerId interface{} `field:"optional" json:"vSwitchOwnerId" yaml:"vSwitchOwnerId"`
}

