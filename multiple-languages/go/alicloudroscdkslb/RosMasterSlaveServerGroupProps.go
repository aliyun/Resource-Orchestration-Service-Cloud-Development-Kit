package alicloudroscdkslb


// Properties for defining a `RosMasterSlaveServerGroup`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-slb-masterslaveservergroup
type RosMasterSlaveServerGroupProps struct {
	LoadBalancerId interface{} `field:"required" json:"loadBalancerId" yaml:"loadBalancerId"`
	MasterSlaveBackendServers interface{} `field:"required" json:"masterSlaveBackendServers" yaml:"masterSlaveBackendServers"`
	MasterSlaveServerGroupName interface{} `field:"optional" json:"masterSlaveServerGroupName" yaml:"masterSlaveServerGroupName"`
}

