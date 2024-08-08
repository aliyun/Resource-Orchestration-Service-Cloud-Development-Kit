package datasource


// Properties for defining a `RosInstanceClasses`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-redis-instanceclasses
type RosInstanceClassesProps struct {
	AcceptLanguage interface{} `field:"optional" json:"acceptLanguage" yaml:"acceptLanguage"`
	Engine interface{} `field:"optional" json:"engine" yaml:"engine"`
	InstanceChargeType interface{} `field:"optional" json:"instanceChargeType" yaml:"instanceChargeType"`
	InstanceId interface{} `field:"optional" json:"instanceId" yaml:"instanceId"`
	NodeId interface{} `field:"optional" json:"nodeId" yaml:"nodeId"`
	OrderType interface{} `field:"optional" json:"orderType" yaml:"orderType"`
	ProductType interface{} `field:"optional" json:"productType" yaml:"productType"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	ZoneId interface{} `field:"optional" json:"zoneId" yaml:"zoneId"`
}

