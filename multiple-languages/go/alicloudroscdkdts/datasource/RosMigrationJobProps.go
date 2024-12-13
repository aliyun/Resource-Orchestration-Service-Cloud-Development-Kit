package datasource


// Properties for defining a `RosMigrationJob`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-dts-migrationjob
type RosMigrationJobProps struct {
	DtsInstanceId interface{} `field:"required" json:"dtsInstanceId" yaml:"dtsInstanceId"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

