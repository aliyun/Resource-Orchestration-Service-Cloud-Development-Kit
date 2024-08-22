package datasource


// Properties for defining a `RosHaVip`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-havip
type RosHaVipProps struct {
	HaVipId interface{} `field:"required" json:"haVipId" yaml:"haVipId"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

