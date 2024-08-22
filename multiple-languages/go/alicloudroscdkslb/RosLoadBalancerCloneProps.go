package alicloudroscdkslb


// Properties for defining a `RosLoadBalancerClone`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-slb-loadbalancerclone
type RosLoadBalancerCloneProps struct {
	SourceLoadBalancerId interface{} `field:"required" json:"sourceLoadBalancerId" yaml:"sourceLoadBalancerId"`
	BackendServers interface{} `field:"optional" json:"backendServers" yaml:"backendServers"`
	BackendServersPolicy interface{} `field:"optional" json:"backendServersPolicy" yaml:"backendServersPolicy"`
	InstanceChargeType interface{} `field:"optional" json:"instanceChargeType" yaml:"instanceChargeType"`
	LoadBalancerName interface{} `field:"optional" json:"loadBalancerName" yaml:"loadBalancerName"`
	LoadBalancerSpec interface{} `field:"optional" json:"loadBalancerSpec" yaml:"loadBalancerSpec"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	Tags *[]*RosLoadBalancerClone_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
	TagsPolicy interface{} `field:"optional" json:"tagsPolicy" yaml:"tagsPolicy"`
	VSwitchId interface{} `field:"optional" json:"vSwitchId" yaml:"vSwitchId"`
}

