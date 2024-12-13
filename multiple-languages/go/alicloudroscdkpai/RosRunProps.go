package alicloudroscdkpai


// Properties for defining a `RosRun`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pai-run
type RosRunProps struct {
	ExperimentId interface{} `field:"required" json:"experimentId" yaml:"experimentId"`
	RunName interface{} `field:"optional" json:"runName" yaml:"runName"`
	SourceId interface{} `field:"optional" json:"sourceId" yaml:"sourceId"`
	SourceType interface{} `field:"optional" json:"sourceType" yaml:"sourceType"`
}

