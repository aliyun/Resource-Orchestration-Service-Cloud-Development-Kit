package alicloudroscdkess


// Properties for defining a `LoadBalancerAttachment`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ess-loadbalancerattachment
type LoadBalancerAttachmentProps struct {
	// Property scalingGroupId: The ID of the scaling group.
	ScalingGroupId interface{} `field:"required" json:"scalingGroupId" yaml:"scalingGroupId"`
	// Property forceAttach: Specifies whether to add all instances in the current scaling group to the backend server groups of the attached CLB instance.
	//
	// Valid values:
	// true
	// false
	// Default value: false.
	ForceAttach interface{} `field:"optional" json:"forceAttach" yaml:"forceAttach"`
	// Property loadBalancerConfigs: Load balancer configuration list.
	LoadBalancerConfigs interface{} `field:"optional" json:"loadBalancerConfigs" yaml:"loadBalancerConfigs"`
	// Property loadBalancers: The ID of CLB instance N that you want to attach to the scaling group.
	//
	// Valid values of N: 1 to 5.
	LoadBalancers interface{} `field:"optional" json:"loadBalancers" yaml:"loadBalancers"`
}

