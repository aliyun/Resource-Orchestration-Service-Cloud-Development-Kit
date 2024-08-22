package datasource


// Properties for defining a `Zones`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-rds-zones
type ZonesProps struct {
	// Property engine: The database engine that is run by the instance.
	Engine interface{} `field:"required" json:"engine" yaml:"engine"`
	// Property category: The RDS edition of the instance.
	//
	// Valid values:
	// Basic: RDS Basic Edition
	// HighAvailability: RDS High-availability Edition
	// AlwaysOn: RDS Cluster Edition
	// Finance: RDS Enterprise Edition.
	Category interface{} `field:"optional" json:"category" yaml:"category"`
	// Property commodityCode: The commodity code of the instance.
	CommodityCode interface{} `field:"optional" json:"commodityCode" yaml:"commodityCode"`
	// Property dispenseMode: Specifies whether to return the zones in which the single-zone deployment method is supported.
	//
	// Valid values:
	// 1: returns the zones.
	// 0: does not return the zones.
	// Default value: 0.
	DispenseMode interface{} `field:"optional" json:"dispenseMode" yaml:"dispenseMode"`
	// Property engineVersion: The version of the database engine that is run by the instance.
	EngineVersion interface{} `field:"optional" json:"engineVersion" yaml:"engineVersion"`
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
	// Property zoneId: The ID of the zone in which the instance is located.
	//
	// If the instance spans more than one zone, the value of this parameter contains an MAZ part,such as cn-hangzhou-MAZ6(b,f) and cn-hangzhou-MAZ5(b,e,f).
	ZoneId interface{} `field:"optional" json:"zoneId" yaml:"zoneId"`
}

