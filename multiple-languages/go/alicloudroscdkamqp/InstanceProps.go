package alicloudroscdkamqp


// Properties for defining a `Instance`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-amqp-instance
type InstanceProps struct {
	// Property instanceName: The instance name.
	InstanceName interface{} `field:"optional" json:"instanceName" yaml:"instanceName"`
	// Property instanceType: The Instance Type.
	//
	// Valid values: professional, enterprise, vip.
	InstanceType interface{} `field:"optional" json:"instanceType" yaml:"instanceType"`
	// Property maxEipTps: The max eip tps.
	//
	// It is valid when support_eip is true.
	// The minimum value is 128, with the step size 128.
	MaxEipTps interface{} `field:"optional" json:"maxEipTps" yaml:"maxEipTps"`
	// Property maxTps: If instance type is professional, the valid value is [1000, 1500, 2000, 2500, 3000, 4000, 5000].
	//
	// If instance type is enterprise, the valid value is [3000, 5000, 8000, 10000, 15000, 20000, 3000040000, 50000, 80000, 10000].
	// If instance type is vip, the valid value is [8000, 15000, 25000, 40000, 50000, 100000, 200000, 300000, 500000, 800000, 1000000].
	MaxTps interface{} `field:"optional" json:"maxTps" yaml:"maxTps"`
	// Property orderNum: Set the number of instances to be created.
	OrderNum interface{} `field:"optional" json:"orderNum" yaml:"orderNum"`
	// Property payType: The billing method of the instance.
	//
	// The Message Queue RabbitMQ version does not support new pay-as-you-go instances. Valid values:
	// PrePaid: subscription.
	PayType interface{} `field:"optional" json:"payType" yaml:"payType"`
	// Property period: The period.
	//
	// Valid values: 1, 2, 3, 6, 12, 24, 36.
	Period interface{} `field:"optional" json:"period" yaml:"period"`
	// Property periodUnit: The unit of the subscription duration.
	//
	// Valid values:
	// Month
	// Year
	// Default value: Month.
	PeriodUnit interface{} `field:"optional" json:"periodUnit" yaml:"periodUnit"`
	// Property queueCapacity: The queue capacity.
	//
	// If instance type is professional, the valid value is [50, 1000] with the step size 5.
	// If instance type is enterprise, the valid value is [200, 6000] with the step size 100
	// If instance type is vip, the valid value is [200, 80000] with the step size 100.
	QueueCapacity interface{} `field:"optional" json:"queueCapacity" yaml:"queueCapacity"`
	// Property storageSize: The storage size.
	//
	// It is valid when instance_type is vip.
	// If instance type is professional or enterprise, the valid value is 0.If instance type is vip, the valid value is [700, 2800] with the step size 100
	StorageSize interface{} `field:"optional" json:"storageSize" yaml:"storageSize"`
	// Property supportEip: Whether to support EIP.
	//
	// Valid values: true, false.
	SupportEip interface{} `field:"optional" json:"supportEip" yaml:"supportEip"`
	// Property supportTracing: Whether to support tracing.
	//
	// Valid values: true, false.
	SupportTracing interface{} `field:"optional" json:"supportTracing" yaml:"supportTracing"`
	// Property tracingStorageTime: The retention period of message traces was set.
	//
	// Valid values: 3, 7, 15.
	// If instance_type=vip, the valid values is 15.
	// If instance_type!=vip, the valid values is 3, 7, 15.
	// If support_tracing == tracing_false, the valid values is 0.
	TracingStorageTime interface{} `field:"optional" json:"tracingStorageTime" yaml:"tracingStorageTime"`
}

