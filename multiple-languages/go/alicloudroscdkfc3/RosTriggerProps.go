package alicloudroscdkfc3


// Properties for defining a `RosTrigger`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-fc3-trigger
type RosTriggerProps struct {
	FunctionName interface{} `field:"required" json:"functionName" yaml:"functionName"`
	TriggerConfig interface{} `field:"required" json:"triggerConfig" yaml:"triggerConfig"`
	TriggerName interface{} `field:"required" json:"triggerName" yaml:"triggerName"`
	TriggerType interface{} `field:"required" json:"triggerType" yaml:"triggerType"`
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	InvocationRole interface{} `field:"optional" json:"invocationRole" yaml:"invocationRole"`
	Qualifier interface{} `field:"optional" json:"qualifier" yaml:"qualifier"`
	SourceArn interface{} `field:"optional" json:"sourceArn" yaml:"sourceArn"`
}

