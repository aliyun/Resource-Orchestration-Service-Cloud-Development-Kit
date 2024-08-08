package alicloudroscdkmns


// Properties for defining a `Subscription`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mns-subscription
type SubscriptionProps struct {
	// Property endpoint: Terminal address of the message recipient for the created subscription.
	//
	// Currently, four types of endpoints are supported:
	// 1. HttpEndpoint, which must be prefixed with "http:\/\/";
	// 2. QueueEndpoint, in the format of acs:mns:{REGION}:{AccountID}:queues\/{QueueName};
	// 3. MailEndpoint, in the format of mail:directmail:{MailAddress};
	// 4. SmsEndpoint, in the format of sms:directsms:anonymous or sms:directsms:{Phone}.
	Endpoint interface{} `field:"required" json:"endpoint" yaml:"endpoint"`
	// Property subscriptionName: Subscription name.
	SubscriptionName interface{} `field:"required" json:"subscriptionName" yaml:"subscriptionName"`
	// Property topicName: Topic name.
	TopicName interface{} `field:"required" json:"topicName" yaml:"topicName"`
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
}

