package datasource


// Properties for defining a `RosQueue`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-mns-queue
type RosQueueProps struct {
	QueueName interface{} `field:"required" json:"queueName" yaml:"queueName"`
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

