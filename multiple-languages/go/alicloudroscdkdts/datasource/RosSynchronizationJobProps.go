package datasource


// Properties for defining a `RosSynchronizationJob`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-dts-synchronizationjob
type RosSynchronizationJobProps struct {
	DtsInstanceId interface{} `field:"required" json:"dtsInstanceId" yaml:"dtsInstanceId"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

