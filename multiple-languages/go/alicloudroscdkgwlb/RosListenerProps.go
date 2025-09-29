package alicloudroscdkgwlb


// Properties for defining a `RosListener`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-gwlb-listener
type RosListenerProps struct {
	LoadBalancerId interface{} `field:"required" json:"loadBalancerId" yaml:"loadBalancerId"`
	ServerGroupId interface{} `field:"required" json:"serverGroupId" yaml:"serverGroupId"`
	ListenerDescription interface{} `field:"optional" json:"listenerDescription" yaml:"listenerDescription"`
	Tags *[]*RosListener_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
}

