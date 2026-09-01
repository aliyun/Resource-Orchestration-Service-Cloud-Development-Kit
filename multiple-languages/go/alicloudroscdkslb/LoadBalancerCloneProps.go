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
	// Property instanceChargeType: The resource metering method for the CLB instance.
	//
	// Valid value:
	// - PayByCLCU: pay-by-data-transfer
	// > As of 00:00:00 (UTC+8) on June 1, 2025, pay-by-specification CLB instances are
	// no longer available for purchase. For more details, see [](t2857909.xdita#).
	InstanceChargeType interface{} `field:"optional" json:"instanceChargeType" yaml:"instanceChargeType"`
	// Property loadBalancerName: The CLB instance name.
	//
	// The name must be 1 to 80 characters in length, and can contain digits, periods
	// (.), underscores (_), and hyphens (-). It must start with a letter.
	// If you do not specify this parameter, the system automatically assigns a name to
	// the CLB instance.
	LoadBalancerName interface{} `field:"optional" json:"loadBalancerName" yaml:"loadBalancerName"`
	// Property loadBalancerSpec: The specification of the CLB instance.
	//
	// Valid values:
	// - slb.s1.small
	// - slb.s2.small
	// - slb.s2.medium
	// - slb.s3.small
	// - slb.s3.medium
	// - slb.s3.large
	// > * If InstanceChargeType is set to PayByCLCU, this parameter is invalid and you
	// do not need to specify this parameter.
	// >
	// > * As of 00:00:00 (UTC+8) on June 1, 2025, pay-by-specification CLB instances
	// are no longer available for purchase. For more details, see [](t2857909.xdita#).
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
	// Property vSwitchId: The ID of the vSwitch to which the CLB instance belongs.
	//
	// If you want to deploy the CLB instance in a VPC, this parameter is required. If
	// this parameter is specified, AddessType is set to intranet by default.
	// > The vSwitch must be in the primary zone.
	VSwitchId interface{} `field:"optional" json:"vSwitchId" yaml:"vSwitchId"`
}

