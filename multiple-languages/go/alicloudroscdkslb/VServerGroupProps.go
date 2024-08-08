package alicloudroscdkslb


// Properties for defining a `VServerGroup`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-slb-vservergroup
type VServerGroupProps struct {
	// Property loadBalancerId: The id of load balancer.
	LoadBalancerId interface{} `field:"required" json:"loadBalancerId" yaml:"loadBalancerId"`
	// Property vServerGroupName: Display name of the VServerGroup.
	VServerGroupName interface{} `field:"required" json:"vServerGroupName" yaml:"vServerGroupName"`
	// Property backendServers: The list of a combination of ECS Instance-Port-Weight.Same ecs instance with different port is allowed, but same ecs instance with same port isn't.
	BackendServers interface{} `field:"optional" json:"backendServers" yaml:"backendServers"`
	// Property tags: Tags to attach to instance.
	//
	// Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
	Tags *[]*RosVServerGroup_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
}

