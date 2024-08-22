package datasource


// Properties for defining a `RosZones`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-pvtz-zones
type RosZonesProps struct {
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
}

