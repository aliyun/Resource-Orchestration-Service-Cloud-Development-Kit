package alicloudroscdkslb


// Properties for defining a `LoadBalancerClone`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-slb-loadbalancerclone
type LoadBalancerCloneProps struct {
	// Property sourceLoadBalancerId: Source load balancer id to clone.
	SourceLoadBalancerId interface{} `field:"required" json:"sourceLoadBalancerId" yaml:"sourceLoadBalancerId"`
	// Property backendServers: The list of ECS instance, which will attached to load balancer.
	BackendServers interface{} `field:"optional" json:"backendServers" yaml:"backendServers"`
	// Property backendServersPolicy: Solution for handle the backend server and weights.
	//
	// If select 'clone', it will clone from source load balancer. If select 'empty' it will not attach any backend servers. If select 'append' it will append the new backend server list to source backed servers. If select 'replace' it will only attach new backend server list. Default is 'clone'.
	BackendServersPolicy interface{} `field:"optional" json:"backendServersPolicy" yaml:"backendServersPolicy"`
	// Property instanceChargeType: Instance billing method.
	//
	// Value:PayBySpec: Pay by spec.
	// PayByCLCU: billed by usage.
	// If not specified, it is same with the source load balancer.
	InstanceChargeType interface{} `field:"optional" json:"instanceChargeType" yaml:"instanceChargeType"`
	// Property loadBalancerName: Name of created load balancer.
	//
	// Length is limited to 1-80 characters, allowed to contain letters, numbers, '-, \/, _,.' When not specified, a default name will be assigned.
	LoadBalancerName interface{} `field:"optional" json:"loadBalancerName" yaml:"loadBalancerName"`
	// Property loadBalancerSpec: The specification of the load balancer.
	//
	// If not specified, it is same with the source load balancer.
	// Note If InstanceChargeType is set to PayByCLCU, the LoadBalancerSpec parameter is invalid and you do not need to set this parameter.
	LoadBalancerSpec interface{} `field:"optional" json:"loadBalancerSpec" yaml:"loadBalancerSpec"`
	// Property resourceGroupId: Resource group id.
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	// Property tags: Tags to attach to slb.
	//
	// Max support 5 tags to add during create slb. Each tag with two properties Key and Value, and Key is required.
	Tags *[]*RosLoadBalancerClone_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
	// Property tagsPolicy: Solution for handle the tags.
	//
	// If select 'clone', it will clone from source load balancer. If select 'empty' it will not copy tags. If select 'append' it will append the new tags. If select 'replace' it will add new tags.
	// Default is 'empty'.
	TagsPolicy interface{} `field:"optional" json:"tagsPolicy" yaml:"tagsPolicy"`
	// Property vSwitchId: The new VSwitch ID to create load balancer instance.
	//
	// For VPC network only and the VSwitch should belong to the VPC which source load balancer is located.When not specified, source load balancer VSwitch ID will be used.
	VSwitchId interface{} `field:"optional" json:"vSwitchId" yaml:"vSwitchId"`
}

