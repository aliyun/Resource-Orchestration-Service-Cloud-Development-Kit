package datasource


// Properties for defining a `RosMigrationInstances`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-dts-migrationinstances
type RosMigrationInstancesProps struct {
	DtsInstanceId interface{} `field:"optional" json:"dtsInstanceId" yaml:"dtsInstanceId"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

