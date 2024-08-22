package alicloudroscdkslb


// Properties for defining a `MasterSlaveServerGroup`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-slb-masterslaveservergroup
type MasterSlaveServerGroupProps struct {
	// Property loadBalancerId: The ID of the Server Load Balancer instance.
	LoadBalancerId interface{} `field:"required" json:"loadBalancerId" yaml:"loadBalancerId"`
	// Property masterSlaveBackendServers: A list of active\/standby server group.
	//
	// An active\/standby server group can only contain two backend servers.
	MasterSlaveBackendServers interface{} `field:"required" json:"masterSlaveBackendServers" yaml:"masterSlaveBackendServers"`
	// Property masterSlaveServerGroupName: The name of the active\/standby server group.
	MasterSlaveServerGroupName interface{} `field:"optional" json:"masterSlaveServerGroupName" yaml:"masterSlaveServerGroupName"`
}

