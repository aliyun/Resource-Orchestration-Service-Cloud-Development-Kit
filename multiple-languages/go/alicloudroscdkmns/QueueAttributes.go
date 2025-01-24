package alicloudroscdkmns


// Represents a `Queue`.
type QueueAttributes struct {
	// Attribute ARN.WithSlash: The ARN: acs:mns:$region:$accountid:/queues/$queueName.
	AttrArnWithSlash interface{} `field:"required" json:"attrArnWithSlash" yaml:"attrArnWithSlash"`
	// Attribute QueueName: Queue name.
	AttrQueueName interface{} `field:"optional" json:"attrQueueName" yaml:"attrQueueName"`
	// Attribute QueueUrl: URL of created queue.
	AttrQueueUrl interface{} `field:"optional" json:"attrQueueUrl" yaml:"attrQueueUrl"`
}

