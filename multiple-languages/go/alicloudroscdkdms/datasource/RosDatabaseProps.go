package datasource


// Properties for defining a `RosDatabase`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-dms-database
type RosDatabaseProps struct {
	Host interface{} `field:"required" json:"host" yaml:"host"`
	Port interface{} `field:"required" json:"port" yaml:"port"`
	SchemaName interface{} `field:"required" json:"schemaName" yaml:"schemaName"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
	Sid interface{} `field:"optional" json:"sid" yaml:"sid"`
	Tid interface{} `field:"optional" json:"tid" yaml:"tid"`
}

