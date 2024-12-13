package datasource


// Properties for defining a `RosMigrationJobs`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-dts-migrationjobs
type RosMigrationJobsProps struct {
	DtsInstanceId interface{} `field:"optional" json:"dtsInstanceId" yaml:"dtsInstanceId"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

