package datasource


// Properties for defining a `RosTransitRouters`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cen-transitrouters
type RosTransitRoutersProps struct {
	CenId interface{} `field:"required" json:"cenId" yaml:"cenId"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
	RegionId interface{} `field:"optional" json:"regionId" yaml:"regionId"`
	TransitRouterId interface{} `field:"optional" json:"transitRouterId" yaml:"transitRouterId"`
}

