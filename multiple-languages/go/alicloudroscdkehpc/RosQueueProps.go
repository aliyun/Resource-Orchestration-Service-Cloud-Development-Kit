package alicloudroscdkehpc


// Properties for defining a `RosQueue`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ehpc-queue
type RosQueueProps struct {
	ClusterId interface{} `field:"optional" json:"clusterId" yaml:"clusterId"`
	ComputeNodes interface{} `field:"optional" json:"computeNodes" yaml:"computeNodes"`
	EnableScaleIn interface{} `field:"optional" json:"enableScaleIn" yaml:"enableScaleIn"`
	EnableScaleOut interface{} `field:"optional" json:"enableScaleOut" yaml:"enableScaleOut"`
	HostnamePrefix interface{} `field:"optional" json:"hostnamePrefix" yaml:"hostnamePrefix"`
	HostnameSuffix interface{} `field:"optional" json:"hostnameSuffix" yaml:"hostnameSuffix"`
	InitialCount interface{} `field:"optional" json:"initialCount" yaml:"initialCount"`
	InterConnect interface{} `field:"optional" json:"interConnect" yaml:"interConnect"`
	MaxCount interface{} `field:"optional" json:"maxCount" yaml:"maxCount"`
	MinCount interface{} `field:"optional" json:"minCount" yaml:"minCount"`
	QueueName interface{} `field:"optional" json:"queueName" yaml:"queueName"`
	VSwitchIds interface{} `field:"optional" json:"vSwitchIds" yaml:"vSwitchIds"`
}

