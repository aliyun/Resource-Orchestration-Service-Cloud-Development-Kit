package datasource


// Properties for defining a `RosHaVips`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-havips
type RosHaVipsProps struct {
	HaVipId interface{} `field:"optional" json:"haVipId" yaml:"haVipId"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

