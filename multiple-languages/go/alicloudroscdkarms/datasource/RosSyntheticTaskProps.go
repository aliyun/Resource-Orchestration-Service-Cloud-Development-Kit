package datasource


// Properties for defining a `RosSyntheticTask`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-arms-synthetictask
type RosSyntheticTaskProps struct {
	TaskId interface{} `field:"required" json:"taskId" yaml:"taskId"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

