package alicloudroscdkcdn


// Properties for defining a `FcTrigger`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cdn-fctrigger
type FcTriggerProps struct {
	// Property eventMetaName: The event meta name.
	EventMetaName interface{} `field:"required" json:"eventMetaName" yaml:"eventMetaName"`
	// Property eventMetaVersion: The event meta version.
	EventMetaVersion interface{} `field:"required" json:"eventMetaVersion" yaml:"eventMetaVersion"`
	// Property notes: The notes.
	Notes interface{} `field:"required" json:"notes" yaml:"notes"`
	// Property roleArn: The role ARN.
	RoleArn interface{} `field:"required" json:"roleArn" yaml:"roleArn"`
	// Property sourceArn: The source ARN.
	SourceArn interface{} `field:"required" json:"sourceArn" yaml:"sourceArn"`
	// Property triggerArn: The trigger ARN.
	TriggerArn interface{} `field:"required" json:"triggerArn" yaml:"triggerArn"`
	// Property functionArn: The function ARN.
	FunctionArn interface{} `field:"optional" json:"functionArn" yaml:"functionArn"`
}

