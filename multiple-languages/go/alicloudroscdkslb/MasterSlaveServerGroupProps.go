package alicloudroscdkslb


// Properties for defining a `MasterSlaveServerGroup`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-slb-masterslaveservergroup
type MasterSlaveServerGroupProps struct {
	// Property loadBalancerId: The ID of the Server Load Balancer instance.
	LoadBalancerId interface{} `field:"required" json:"loadBalancerId" yaml:"loadBalancerId"`
	// Property masterSlaveBackendServers: The backend servers in the primary\/secondary server group.
	//
	// Each primary\/secondary
	// server group consists of two backend servers.
	// Configure the following parameters:
	// - ServerId: required. The IDs of the backend servers. Specify the IDs in a
	// string. You can specify the IDs of Elastic Compute Service (ECS) instances,
	// elastic network interfaces (ENIs), and elastic container instances. If you set
	// ServerId to the IDs of ENIs or elastic container instances, you must configure
	// the Type parameter.
	// - Weight: the weight of the backend server. Valid values: 0 to 100. Default
	// value: 100. If you set the weight of a backend server to 0, no requests are
	// forwarded to the backend server.
	// - Description: optional. The description of the backend servers. Specify the
	// description in a string. The description must be 1 to 80 characters in length,
	// and can contain letters, digits, hyphens (-), forward slashes (\/). periods (.),
	// and underscores (_).
	// - Type: the type of the backend server. Valid values:
	// - ecs (default): ECS instance
	// - eni: ENI
	// - eci: elastic container instance
	// > You can specify ENIs and elastic container instances as backend servers only
	// for high-performance CLB instances.
	// - ServerIp: the IP address of the ENI or elastic container instance.
	// - Port: the backend port.
	// - ServerType: Specify the primary and secondary backend servers in a string.
	// Valid values:
	// - Master: primary server
	// - Slave: secondary server.
	MasterSlaveBackendServers interface{} `field:"required" json:"masterSlaveBackendServers" yaml:"masterSlaveBackendServers"`
	// Property masterSlaveServerGroupName: The name of the active\/standby server group.
	MasterSlaveServerGroupName interface{} `field:"optional" json:"masterSlaveServerGroupName" yaml:"masterSlaveServerGroupName"`
}

