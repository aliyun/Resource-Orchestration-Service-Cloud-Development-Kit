package alicloudroscdkess


// Properties for defining a `RosLoadBalancerAttachment`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ess-loadbalancerattachment
type RosLoadBalancerAttachmentProps struct {
	ScalingGroupId interface{} `field:"required" json:"scalingGroupId" yaml:"scalingGroupId"`
	ForceAttach interface{} `field:"optional" json:"forceAttach" yaml:"forceAttach"`
	LoadBalancerConfigs interface{} `field:"optional" json:"loadBalancerConfigs" yaml:"loadBalancerConfigs"`
	LoadBalancers interface{} `field:"optional" json:"loadBalancers" yaml:"loadBalancers"`
}

