package alicloudroscdkesa


// Properties for defining a `RosScheduledPreloadExecution`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-scheduledpreloadexecution
type RosScheduledPreloadExecutionProps struct {
	Interval interface{} `field:"required" json:"interval" yaml:"interval"`
	ScheduledPreloadJobId interface{} `field:"required" json:"scheduledPreloadJobId" yaml:"scheduledPreloadJobId"`
	SliceLen interface{} `field:"required" json:"sliceLen" yaml:"sliceLen"`
	EndTime interface{} `field:"optional" json:"endTime" yaml:"endTime"`
	StartTime interface{} `field:"optional" json:"startTime" yaml:"startTime"`
}

