package datasource


// Properties for defining a `RosZones`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-nas-zones
type RosZonesProps struct {
	FileSystemType interface{} `field:"optional" json:"fileSystemType" yaml:"fileSystemType"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

