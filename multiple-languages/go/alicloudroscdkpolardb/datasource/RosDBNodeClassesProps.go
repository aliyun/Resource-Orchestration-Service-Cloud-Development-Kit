package datasource


// Properties for defining a `RosDBNodeClasses`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-polardb-dbnodeclasses
type RosDBNodeClassesProps struct {
	PayType interface{} `field:"required" json:"payType" yaml:"payType"`
	DbNodeClass interface{} `field:"optional" json:"dbNodeClass" yaml:"dbNodeClass"`
	DbType interface{} `field:"optional" json:"dbType" yaml:"dbType"`
	DbVersion interface{} `field:"optional" json:"dbVersion" yaml:"dbVersion"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
	ZoneId interface{} `field:"optional" json:"zoneId" yaml:"zoneId"`
}

