package datasource


// Properties for defining a `RosZone`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-pvtz-zone
type RosZoneProps struct {
	ZoneId interface{} `field:"required" json:"zoneId" yaml:"zoneId"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

