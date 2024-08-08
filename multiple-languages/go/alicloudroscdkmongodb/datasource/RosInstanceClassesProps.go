package datasource


// Properties for defining a `RosInstanceClasses`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-mongodb-instanceclasses
type RosInstanceClassesProps struct {
	DbType interface{} `field:"optional" json:"dbType" yaml:"dbType"`
	InstanceChargeType interface{} `field:"optional" json:"instanceChargeType" yaml:"instanceChargeType"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	ZoneId interface{} `field:"optional" json:"zoneId" yaml:"zoneId"`
}

