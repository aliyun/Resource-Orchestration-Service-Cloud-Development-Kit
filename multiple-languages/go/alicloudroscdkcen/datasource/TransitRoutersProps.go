package datasource


// Properties for defining a `TransitRouters`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cen-transitrouters
type TransitRoutersProps struct {
	// Property cenId: The ID of the CEN instance.
	CenId interface{} `field:"required" json:"cenId" yaml:"cenId"`
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
	// Property regionId: The ID of the region where the transit router is deployed.
	//
	// You can call the DescribeRegions operation to query region IDs.
	RegionId interface{} `field:"optional" json:"regionId" yaml:"regionId"`
	// Property transitRouterId: The ID of the transit router.
	TransitRouterId interface{} `field:"optional" json:"transitRouterId" yaml:"transitRouterId"`
}

