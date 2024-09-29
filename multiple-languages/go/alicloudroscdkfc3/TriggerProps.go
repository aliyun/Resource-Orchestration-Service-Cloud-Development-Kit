package alicloudroscdkfc3


// Properties for defining a `Trigger`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-fc3-trigger
type TriggerProps struct {
	// Property functionName: The name of the function.
	FunctionName interface{} `field:"required" json:"functionName" yaml:"functionName"`
	// Property triggerConfig: Trigger config.
	TriggerConfig interface{} `field:"required" json:"triggerConfig" yaml:"triggerConfig"`
	// Property triggerName: Name of the trigger.
	TriggerName interface{} `field:"required" json:"triggerName" yaml:"triggerName"`
	// Property triggerType: Type of the trigger.
	TriggerType interface{} `field:"required" json:"triggerType" yaml:"triggerType"`
	// Property description: Description of the trigger.
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	// Property invocationRole: Invocation role.
	InvocationRole interface{} `field:"optional" json:"invocationRole" yaml:"invocationRole"`
	// Property qualifier: Qualifier of the trigger.
	Qualifier interface{} `field:"optional" json:"qualifier" yaml:"qualifier"`
	// Property sourceArn: Source ARN of the trigger.
	SourceArn interface{} `field:"optional" json:"sourceArn" yaml:"sourceArn"`
}

