package alicloudroscdkfc


// Properties for defining a `Trigger`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-fc-trigger
type TriggerProps struct {
	// Property functionName: Function name.
	FunctionName interface{} `field:"required" json:"functionName" yaml:"functionName"`
	// Property serviceName: Service name.
	ServiceName interface{} `field:"required" json:"serviceName" yaml:"serviceName"`
	// Property triggerConfig: Event source specific trigger configuration.
	//
	// The value is different according to trigger type.
	TriggerConfig interface{} `field:"required" json:"triggerConfig" yaml:"triggerConfig"`
	// Property triggerName: Trigger name.
	//
	// Example : "image_resize".
	TriggerName interface{} `field:"required" json:"triggerName" yaml:"triggerName"`
	// Property triggerType: Trigger type, e.g. oss, timer, logs. This determines how the trigger config is interpreted. Example : "oss".
	TriggerType interface{} `field:"required" json:"triggerType" yaml:"triggerType"`
	// Property invocationRole: The role grants event source the permission to run function on behalf of user.
	//
	// This is optional for some triggers.
	// Example : "acs:ram::1234567890:role\/fc-test".
	InvocationRole interface{} `field:"optional" json:"invocationRole" yaml:"invocationRole"`
	// Property qualifier: service version or alias.
	//
	// Example : "LATEST".
	Qualifier interface{} `field:"optional" json:"qualifier" yaml:"qualifier"`
	// Property sourceArn: The Aliyun Resource Name (ARN) of event source.
	//
	// This is optional for some triggers.
	// Example : "acs:oss:cn-shanghai:12345:mybucket".
	SourceArn interface{} `field:"optional" json:"sourceArn" yaml:"sourceArn"`
}

