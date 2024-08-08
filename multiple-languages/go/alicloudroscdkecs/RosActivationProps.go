package alicloudroscdkecs


// Properties for defining a `RosActivation`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-activation
type RosActivationProps struct {
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	InstanceCount interface{} `field:"optional" json:"instanceCount" yaml:"instanceCount"`
	InstanceName interface{} `field:"optional" json:"instanceName" yaml:"instanceName"`
	IpAddressRange interface{} `field:"optional" json:"ipAddressRange" yaml:"ipAddressRange"`
	Tags *[]*RosActivation_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
	TimeToLiveInHours interface{} `field:"optional" json:"timeToLiveInHours" yaml:"timeToLiveInHours"`
}

