package alicloudroscdkfc


// Properties for defining a `RosTrigger`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-fc-trigger
type RosTriggerProps struct {
	FunctionName interface{} `field:"required" json:"functionName" yaml:"functionName"`
	ServiceName interface{} `field:"required" json:"serviceName" yaml:"serviceName"`
	TriggerConfig interface{} `field:"required" json:"triggerConfig" yaml:"triggerConfig"`
	TriggerName interface{} `field:"required" json:"triggerName" yaml:"triggerName"`
	TriggerType interface{} `field:"required" json:"triggerType" yaml:"triggerType"`
	InvocationRole interface{} `field:"optional" json:"invocationRole" yaml:"invocationRole"`
	Qualifier interface{} `field:"optional" json:"qualifier" yaml:"qualifier"`
	SourceArn interface{} `field:"optional" json:"sourceArn" yaml:"sourceArn"`
}

