package alicloudroscdkalb


// Properties for defining a `ServerGroup`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-alb-servergroup
type ServerGroupProps struct {
	// Property healthCheckConfig: The configuration of health checks.
	HealthCheckConfig interface{} `field:"required" json:"healthCheckConfig" yaml:"healthCheckConfig"`
	// Property serverGroupName: The name of the server group.
	//
	// The name must be 2 to 128 characters in length, and
	// can contain letters, digits, periods (.), underscores (_), and hyphens (-). The name
	// must start with a letter.
	ServerGroupName interface{} `field:"required" json:"serverGroupName" yaml:"serverGroupName"`
	// Property vpcId: The ID of the virtual private cloud (VPC).
	//
	// You can add only servers that are deployed
	// in the specified VPC to the server group.
	// Note: This parameter is required if the ServerGroupType parameter is set to Instance or Ip.
	// Note: This parameter takes effect when the ServerGroupType parameter is set to Instance or Ip.
	VpcId interface{} `field:"required" json:"vpcId" yaml:"vpcId"`
	// Property protocol: The backend protocol.
	//
	// Valid values:
	// HTTP (default): The server group can be associated with HTTPS, HTTP, and QUIC listeners.
	// HTTPS: The server group can be associated with HTTPS listeners.
	// gRPC: The server group can be associated with HTTPS and QUIC listeners.
	// Note: If the ServerGroupType parameter is set to Fc, you can set Protocol only to HTTP.
	Protocol interface{} `field:"optional" json:"protocol" yaml:"protocol"`
	// Property resourceGroupId: The ID of the resource group.
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	// Property scheduler: The scheduling algorithm.
	//
	// Valid values:
	// Wrr (default): The weighted round-robin algorithm is used. Backend servers that have higher weights receive more requests than those that have lower weights.
	// Wlc: The weighted least connections algorithm is used. Requests are distributed based on the weights and the number of connections to backend servers. If two backend servers have the same weight, the backend server that has fewer connections is expected to receive more requests.
	// Sch: The consistent hashing algorithm is used. Requests from the same source IP address are distributed to the same backend server.
	// Note: This parameter takes effect when the ServerGroupType parameter is set to Instance or Ip.
	Scheduler interface{} `field:"optional" json:"scheduler" yaml:"scheduler"`
	// Property serverGroupType: The type of the server group.
	//
	// Valid values:
	// Instance (default): allows you add servers by specifying Ecs, Ens, or Eci.
	// Ip: allows you to add servers by specifying IP addresses.
	// Fc: allows you to add servers by specifying functions of Function Compute.
	ServerGroupType interface{} `field:"optional" json:"serverGroupType" yaml:"serverGroupType"`
	// Property serviceName: This parameter is available only if the ALB Ingress controller is used.
	//
	// In this case, set the parameter to the name of the Kubernetes Service that is associated with the server group.
	ServiceName interface{} `field:"optional" json:"serviceName" yaml:"serviceName"`
	// Property stickySessionConfig: The configuration of session persistence.
	//
	// Note: This parameter is required if the ServerGroupType parameter is set to Instance or Ip.
	StickySessionConfig interface{} `field:"optional" json:"stickySessionConfig" yaml:"stickySessionConfig"`
	// Property tags: Tags to attach to instance.
	//
	// Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
	Tags *[]*RosServerGroup_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
}

