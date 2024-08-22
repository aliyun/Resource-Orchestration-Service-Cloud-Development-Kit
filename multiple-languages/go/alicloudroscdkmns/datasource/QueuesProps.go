package datasource


// Properties for defining a `Queues`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-mns-queues
type QueuesProps struct {
	// Property queueName: Queue name.
	QueueName interface{} `field:"optional" json:"queueName" yaml:"queueName"`
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
}

