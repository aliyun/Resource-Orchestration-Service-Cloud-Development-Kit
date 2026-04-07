package alicloudroscdkdts


// Properties for defining a `RosConsumerChannel`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dts-consumerchannel
type RosConsumerChannelProps struct {
	ConsumerGroupName interface{} `field:"required" json:"consumerGroupName" yaml:"consumerGroupName"`
	ConsumerGroupPassword interface{} `field:"required" json:"consumerGroupPassword" yaml:"consumerGroupPassword"`
	ConsumerGroupUserName interface{} `field:"required" json:"consumerGroupUserName" yaml:"consumerGroupUserName"`
	DtsInstanceId interface{} `field:"optional" json:"dtsInstanceId" yaml:"dtsInstanceId"`
	DtsJobId interface{} `field:"optional" json:"dtsJobId" yaml:"dtsJobId"`
}

