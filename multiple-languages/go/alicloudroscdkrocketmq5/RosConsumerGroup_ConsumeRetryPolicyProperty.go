package alicloudroscdkrocketmq5


type RosConsumerGroup_ConsumeRetryPolicyProperty struct {
	RetryPolicy interface{} `field:"required" json:"retryPolicy" yaml:"retryPolicy"`
	MaxRetryTimes interface{} `field:"optional" json:"maxRetryTimes" yaml:"maxRetryTimes"`
}

