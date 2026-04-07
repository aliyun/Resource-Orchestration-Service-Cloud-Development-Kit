package alicloudroscdkvpc


// Properties for defining a `RosTrafficQosQueue`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-trafficqosqueue
type RosTrafficQosQueueProps struct {
	QosId interface{} `field:"required" json:"qosId" yaml:"qosId"`
	QueueType interface{} `field:"required" json:"queueType" yaml:"queueType"`
	BandwidthPercent interface{} `field:"optional" json:"bandwidthPercent" yaml:"bandwidthPercent"`
	QueueDescription interface{} `field:"optional" json:"queueDescription" yaml:"queueDescription"`
	QueueName interface{} `field:"optional" json:"queueName" yaml:"queueName"`
}

