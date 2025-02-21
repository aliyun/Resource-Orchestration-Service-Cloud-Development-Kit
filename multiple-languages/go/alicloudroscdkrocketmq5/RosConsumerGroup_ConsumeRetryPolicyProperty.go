package alicloudroscdkrocketmq5


type RosConsumerGroup_ConsumeRetryPolicyProperty struct {
	RetryPolicy interface{} `field:"required" json:"retryPolicy" yaml:"retryPolicy"`
	DeadLetterTargetTopic interface{} `field:"optional" json:"deadLetterTargetTopic" yaml:"deadLetterTargetTopic"`
	MaxRetryTimes interface{} `field:"optional" json:"maxRetryTimes" yaml:"maxRetryTimes"`
}

