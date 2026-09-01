package alicloudroscdkmns


// Properties for defining a `Subscription`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mns-subscription
type SubscriptionProps struct {
	// Property endpoint: ## The message delivery endpoint.
	//
	// The format varies based on the `PushType` value:
	// - If `PushType` is `http`: An HTTP\/HTTPS callback URL, such as
	// `http:\/\/example.com\/callback` or `https:\/\/example.com\/callback`.
	// - If `PushType` is `queue`: The ARN of the destination queue, in the format
	// `acs:mns:{RegionId}:{account ID}:queues\/{QueueName}`.
	// - If `PushType` is `dm`: The endpoint for email push, in the fixed format
	// `smq-ep:dm:{account ID}:__dynamic`. Replace `{account
	// ID}` with your account ID.
	// - If `PushType` is `dysms`: The endpoint for SMS push, in the format
	// `smq-ep:dysms:{account ID}:{MobileNumber}`.
	// - If `PushType` is `kafka`: The Kafka push endpoint.
	// - If `PushType` is `fc`: The endpoint for Function Compute, in the format
	// `acs:fc:{RegionId}:{account
	// ID}:services\/{ServiceName}\/functions\/{FunctionName}`.
	// - If `PushType` is `eventbus`: The endpoint for EventBridge, in the format
	// `acs:eventbridge:{RegionId}:{account ID}:eventbus\/{EventBusName}`.
	Endpoint interface{} `field:"required" json:"endpoint" yaml:"endpoint"`
	// Property subscriptionName: Subscription name.
	SubscriptionName interface{} `field:"required" json:"subscriptionName" yaml:"subscriptionName"`
	// Property topicName: Topic name.
	TopicName interface{} `field:"required" json:"topicName" yaml:"topicName"`
	// Property dlqPolicy: Dead-letter queue policy.
	DlqPolicy interface{} `field:"optional" json:"dlqPolicy" yaml:"dlqPolicy"`
	// Property filterTag: Message filter tag in the created subscription (Only messages with consistent tags are pushed.) The value is a string of no more than 16 characters. The default value is no message filter.
	FilterTag interface{} `field:"optional" json:"filterTag" yaml:"filterTag"`
	// Property notifyContentFormat: Format of the message content pushed to the endpoint.
	//
	// XML, JSON, or SIMPLIFIED; default value: XML. For details about message formats, refer to Basic Concepts\/NotifyContentFormat.
	NotifyContentFormat interface{} `field:"optional" json:"notifyContentFormat" yaml:"notifyContentFormat"`
	// Property notifyStrategy: Retry policy that will be applied when an error occurs during message push to the endpoint.
	//
	// BACKOFF_RETRY or EXPONENTIAL_DECAY_RETRY; default value: BACKOFF_RETRY. For details about retry policies, refer to Basic Concepts\/NotifyStrategy.
	NotifyStrategy interface{} `field:"optional" json:"notifyStrategy" yaml:"notifyStrategy"`
	// Property pushType: Push type of the created subscription.
	PushType interface{} `field:"optional" json:"pushType" yaml:"pushType"`
}

