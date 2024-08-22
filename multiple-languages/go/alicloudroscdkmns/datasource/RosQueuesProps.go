package datasource


// Properties for defining a `RosQueues`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-mns-queues
type RosQueuesProps struct {
	QueueName interface{} `field:"optional" json:"queueName" yaml:"queueName"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

