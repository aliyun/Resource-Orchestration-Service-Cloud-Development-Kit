package alicloudroscdkvpc


// Properties for defining a `TrafficQosQueue`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-trafficqosqueue
type TrafficQosQueueProps struct {
	// Property qosId: The ID of the QoS policy.
	QosId interface{} `field:"required" json:"qosId" yaml:"qosId"`
	// Property queueType: QoS queue type, value: - **High**: High priority queue.
	//
	// - **Medium**: Normal priority queue.
	// - **Default**: the Default priority queue.
	// > Default priority queue cannot be created.
	QueueType interface{} `field:"required" json:"queueType" yaml:"queueType"`
	// Property bandwidthPercent: QoS queue bandwidth percentage.
	//
	// * When the QoS queue type is **Medium**, this field must be entered. Valid values: 1 to 100.
	// * When the QoS queue type is **Default**, this field is "-".
	BandwidthPercent interface{} `field:"optional" json:"bandwidthPercent" yaml:"bandwidthPercent"`
	// Property queueDescription: The description of the QoS queue.
	//
	// The length is 0 to 256 characters and cannot start with 'http:\/\/ 'or 'https.
	QueueDescription interface{} `field:"optional" json:"queueDescription" yaml:"queueDescription"`
	// Property queueName: The name of the QoS queue.
	//
	// The length is 0 to 128 characters and cannot start with 'http:\/\/ 'or 'https.
	QueueName interface{} `field:"optional" json:"queueName" yaml:"queueName"`
}

