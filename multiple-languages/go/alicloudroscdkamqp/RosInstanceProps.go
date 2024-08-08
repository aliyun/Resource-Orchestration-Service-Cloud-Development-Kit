package alicloudroscdkamqp


// Properties for defining a `RosInstance`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-amqp-instance
type RosInstanceProps struct {
	InstanceName interface{} `field:"optional" json:"instanceName" yaml:"instanceName"`
	InstanceType interface{} `field:"optional" json:"instanceType" yaml:"instanceType"`
	MaxEipTps interface{} `field:"optional" json:"maxEipTps" yaml:"maxEipTps"`
	MaxTps interface{} `field:"optional" json:"maxTps" yaml:"maxTps"`
	OrderNum interface{} `field:"optional" json:"orderNum" yaml:"orderNum"`
	PayType interface{} `field:"optional" json:"payType" yaml:"payType"`
	Period interface{} `field:"optional" json:"period" yaml:"period"`
	PeriodUnit interface{} `field:"optional" json:"periodUnit" yaml:"periodUnit"`
	QueueCapacity interface{} `field:"optional" json:"queueCapacity" yaml:"queueCapacity"`
	StorageSize interface{} `field:"optional" json:"storageSize" yaml:"storageSize"`
	SupportEip interface{} `field:"optional" json:"supportEip" yaml:"supportEip"`
	SupportTracing interface{} `field:"optional" json:"supportTracing" yaml:"supportTracing"`
	TracingStorageTime interface{} `field:"optional" json:"tracingStorageTime" yaml:"tracingStorageTime"`
}

