package datasource


// Properties for defining a `RosZones`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-slb-zones
type RosZonesProps struct {
	AddressIpVersion interface{} `field:"optional" json:"addressIpVersion" yaml:"addressIpVersion"`
	AddressType interface{} `field:"optional" json:"addressType" yaml:"addressType"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

