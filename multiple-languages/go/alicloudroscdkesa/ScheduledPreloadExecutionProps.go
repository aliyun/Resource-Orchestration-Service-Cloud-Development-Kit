package alicloudroscdkesa


// Properties for defining a `ScheduledPreloadExecution`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-scheduledpreloadexecution
type ScheduledPreloadExecutionProps struct {
	// Property interval: The time interval between each batch execution.
	//
	// Unit: seconds.
	Interval interface{} `field:"required" json:"interval" yaml:"interval"`
	// Property scheduledPreloadJobId: The ID of the prefetch task.
	ScheduledPreloadJobId interface{} `field:"required" json:"scheduledPreloadJobId" yaml:"scheduledPreloadJobId"`
	// Property sliceLen: The number of URLs prefetched in each batch.
	SliceLen interface{} `field:"required" json:"sliceLen" yaml:"sliceLen"`
	// Property endTime: The end time of the prefetch plan.
	EndTime interface{} `field:"optional" json:"endTime" yaml:"endTime"`
	// Property startTime: The start time of the prefetch plan.
	StartTime interface{} `field:"optional" json:"startTime" yaml:"startTime"`
}

