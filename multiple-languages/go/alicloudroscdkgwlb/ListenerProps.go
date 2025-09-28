package alicloudroscdkgwlb


// Properties for defining a `Listener`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-gwlb-listener
type ListenerProps struct {
	// Property loadBalancerId: The ID of the gateway load balancer instance.
	LoadBalancerId interface{} `field:"required" json:"loadBalancerId" yaml:"loadBalancerId"`
	// Property serverGroupId: The ID of the server group.
	ServerGroupId interface{} `field:"required" json:"serverGroupId" yaml:"serverGroupId"`
	// Property listenerDescription: The custom listener description.
	//
	// The length is limited to 2 to 256 characters. It supports Chinese and English letters and can contain numbers, half-width commas (,), half-width periods (.), half-width semicolons (;), forward slashes (\/), at(@), underscores (_), and dashes (-).
	ListenerDescription interface{} `field:"optional" json:"listenerDescription" yaml:"listenerDescription"`
	// Property tags: Tags of listener.
	Tags *[]*RosListener_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
}

