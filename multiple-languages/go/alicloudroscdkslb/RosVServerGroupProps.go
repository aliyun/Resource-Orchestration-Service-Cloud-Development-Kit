package alicloudroscdkslb


// Properties for defining a `RosVServerGroup`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-slb-vservergroup
type RosVServerGroupProps struct {
	LoadBalancerId interface{} `field:"required" json:"loadBalancerId" yaml:"loadBalancerId"`
	VServerGroupName interface{} `field:"required" json:"vServerGroupName" yaml:"vServerGroupName"`
	BackendServers interface{} `field:"optional" json:"backendServers" yaml:"backendServers"`
	Tags *[]*RosVServerGroup_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
}

