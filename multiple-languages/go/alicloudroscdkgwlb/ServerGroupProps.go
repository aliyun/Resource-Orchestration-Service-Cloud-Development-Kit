package alicloudroscdkgwlb


// Properties for defining a `ServerGroup`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-gwlb-servergroup
type ServerGroupProps struct {
	// Property vpcId: The VPC instance ID.
	//
	// > If the value of ServerGroupType is Instance, only servers in the VPC can be added to the server group.
	VpcId interface{} `field:"required" json:"vpcId" yaml:"vpcId"`
	// Property connectionDrainConfig: Connected graceful interrupt configuration.
	ConnectionDrainConfig interface{} `field:"optional" json:"connectionDrainConfig" yaml:"connectionDrainConfig"`
	// Property healthCheckConfig: Health check configurations.
	HealthCheckConfig interface{} `field:"optional" json:"healthCheckConfig" yaml:"healthCheckConfig"`
	// Property protocol: Backend Protocol.
	//
	// Value:
	// **GENEVE (default)**.
	Protocol interface{} `field:"optional" json:"protocol" yaml:"protocol"`
	// Property resourceGroupId: The ID of the resource group.
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	// Property scheduler: Scheduling algorithm.
	//
	// Value:
	// - **5TCH (default)**: quintuple hash, which is based on the consistent hash of the quintuple (source IP, Destination IP, source port, destination port, and protocol). The same flow is scheduled to the same backend server.
	// - **3TCH**: a three-tuple hash, which is based on the consistent hash of three tuples (source IP address, destination IP address, and protocol). The same flow is dispatched to the same backend server.
	// - **2TCH**: Binary Group hash, which is based on the consistent hash of the binary group (source IP and destination IP). The same flow is scheduled to the same backend server.
	Scheduler interface{} `field:"optional" json:"scheduler" yaml:"scheduler"`
	// Property serverGroupName: The server group name.
	//
	// It must be 2 to 128 characters in length, start with an uppercase letter or a Chinese character, and can contain digits, half-width periods (.), underscores (_), and dashes (-).
	ServerGroupName interface{} `field:"optional" json:"serverGroupName" yaml:"serverGroupName"`
	// Property serverGroupType: The server group type.
	//
	// Value:
	// - **Instance (default)**: The instance type. You can add Ecs, Eni, and Eci instances to the server group.
	// - **Ip**: The Ip address type. You can directly add backend servers of the Ip address type to the server group.
	ServerGroupType interface{} `field:"optional" json:"serverGroupType" yaml:"serverGroupType"`
	// Property servers: List of servers.
	Servers interface{} `field:"optional" json:"servers" yaml:"servers"`
	// Property tags: Tags of server group.
	Tags *[]*RosServerGroup_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
}

