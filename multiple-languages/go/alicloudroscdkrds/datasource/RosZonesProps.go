package datasource


// Properties for defining a `RosZones`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-rds-zones
type RosZonesProps struct {
	Engine interface{} `field:"required" json:"engine" yaml:"engine"`
	Category interface{} `field:"optional" json:"category" yaml:"category"`
	CommodityCode interface{} `field:"optional" json:"commodityCode" yaml:"commodityCode"`
	DispenseMode interface{} `field:"optional" json:"dispenseMode" yaml:"dispenseMode"`
	EngineVersion interface{} `field:"optional" json:"engineVersion" yaml:"engineVersion"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
	ZoneId interface{} `field:"optional" json:"zoneId" yaml:"zoneId"`
}

