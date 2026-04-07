package alicloudroscdkcdn


// Properties for defining a `RosFcTrigger`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cdn-fctrigger
type RosFcTriggerProps struct {
	EventMetaName interface{} `field:"required" json:"eventMetaName" yaml:"eventMetaName"`
	EventMetaVersion interface{} `field:"required" json:"eventMetaVersion" yaml:"eventMetaVersion"`
	Notes interface{} `field:"required" json:"notes" yaml:"notes"`
	RoleArn interface{} `field:"required" json:"roleArn" yaml:"roleArn"`
	SourceArn interface{} `field:"required" json:"sourceArn" yaml:"sourceArn"`
	TriggerArn interface{} `field:"required" json:"triggerArn" yaml:"triggerArn"`
	FunctionArn interface{} `field:"optional" json:"functionArn" yaml:"functionArn"`
}

