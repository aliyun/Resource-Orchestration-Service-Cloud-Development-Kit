package datasource


// Properties for defining a `RosSynchronizationJobs`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-dts-synchronizationjobs
type RosSynchronizationJobsProps struct {
	DtsInstanceId interface{} `field:"optional" json:"dtsInstanceId" yaml:"dtsInstanceId"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

