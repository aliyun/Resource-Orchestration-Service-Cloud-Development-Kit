package alicloudroscdkecs


// Properties for defining a `NetworkInterface`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-networkinterface
type NetworkInterfaceProps struct {
	// Property vSwitchId: VSwitch ID of the specified VPC.
	//
	// Specifies the switch ID for the VPC.
	VSwitchId interface{} `field:"required" json:"vSwitchId" yaml:"vSwitchId"`
	// Property deleteOnRelease: Specifies whether to delete the ENI when the instance is released.
	DeleteOnRelease interface{} `field:"optional" json:"deleteOnRelease" yaml:"deleteOnRelease"`
	// Property description: Description of your ENI.
	//
	// It is a string of [2, 256] English or Chinese characters.
	Description interface{} `field:"optional" json:"description" yaml:"description"`
	// Property ipv4PrefixCount: Specifies one or more IPv4 prefixes for the elastic network interface.
	//
	// Range: 1-10
	// **Note**: If you need to set an IPv4 prefix for an elastic network interface, you must set either Ipv4Prefixes or Ipv4PrefixCount, but not both.
	Ipv4PrefixCount interface{} `field:"optional" json:"ipv4PrefixCount" yaml:"ipv4PrefixCount"`
	// Property ipv4Prefixes: Specifies one or more IPv4 prefixes for the elastic network interface.
	Ipv4Prefixes interface{} `field:"optional" json:"ipv4Prefixes" yaml:"ipv4Prefixes"`
	// Property ipv6AddressCount: The number of randomly generated IPv6 addresses that are assigned to the ENI.
	Ipv6AddressCount interface{} `field:"optional" json:"ipv6AddressCount" yaml:"ipv6AddressCount"`
	// Property ipv6Addresses: The IPv6 address N to assign to the ENI.
	Ipv6Addresses interface{} `field:"optional" json:"ipv6Addresses" yaml:"ipv6Addresses"`
	// Property ipv6PrefixCount: Specifies one or more IPv6 prefixes for the elastic network interface.
	//
	// Range: 1-10
	// **Note**: If you need to set an IPv6 prefix for an elastic network interface, you must set either Ipv6Prefixes or Ipv6PrefixCount, but not both.
	Ipv6PrefixCount interface{} `field:"optional" json:"ipv6PrefixCount" yaml:"ipv6PrefixCount"`
	// Property ipv6Prefixes: Specifies one or more IPv6 prefixes for the elastic network interface.
	Ipv6Prefixes interface{} `field:"optional" json:"ipv6Prefixes" yaml:"ipv6Prefixes"`
	// Property networkInterfaceName: Name of your ENI.
	//
	// It is a string of [2, 128]  Chinese or English characters. It must begin with a letter and can contain numbers, underscores (_), colons (:), or hyphens (-).
	NetworkInterfaceName interface{} `field:"optional" json:"networkInterfaceName" yaml:"networkInterfaceName"`
	// Property networkInterfaceTrafficMode: The communication mode of the ENI.
	//
	// Valid values:
	// Standard: uses the TCP communication mode.
	// HighPerformance: enables the Elastic RDMA Interface (ERI) and uses the remote direct memory access (RDMA) communication mode.
	NetworkInterfaceTrafficMode interface{} `field:"optional" json:"networkInterfaceTrafficMode" yaml:"networkInterfaceTrafficMode"`
	// Property primaryIpAddress: The primary private IP address of the ENI.
	//
	// The specified IP address must have the same Host ID as the VSwitch. If no IP addresses are specified, a random network ID is assigned for the ENI.
	PrimaryIpAddress interface{} `field:"optional" json:"primaryIpAddress" yaml:"primaryIpAddress"`
	// Property privateIpAddresses: Specifies secondary private IP addresses of the ENI.
	//
	// This IP address must be an available IP address in the CIDR block of the VSwitch to which the ENI belongs.
	PrivateIpAddresses interface{} `field:"optional" json:"privateIpAddresses" yaml:"privateIpAddresses"`
	// Property queueNumber: The number of queues that are supported by the ENI.
	//
	// Valid values: 1 to 2048.
	// When you attach the ENI to an instance, make sure that the value of this parameter is less than the maximum number of queues per ENI that is allowed for the instance type. To view the maximum number of queues per ENI allowed for an instance type, you can call DescribeInstanceTypes and then check the return value of MaximumQueueNumberPerEni.
	// By default, this parameter is empty. If you do not specify this parameter, the default number of queues per ENI for the instance type of an instance is used when you attach the ENI to the instance. To learn about the default number of queues per ENI for an instance type, you can call DescribeInstanceTypes and then check the return value of SecondaryEniQueueNumber.
	QueueNumber interface{} `field:"optional" json:"queueNumber" yaml:"queueNumber"`
	// Property resourceGroupId: Resource group id.
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	// Property rxQueueSize: Elastic network card inbound queue depth.
	//
	// **Note**: The inbound queue depth of the network card must be equal to the outbound queue depth, ranging from 8192 to 16384, and must be a power of two.
	// Larger inbound queue depth can improve inbound throughput, but it consumes more memory.
	RxQueueSize interface{} `field:"optional" json:"rxQueueSize" yaml:"rxQueueSize"`
	// Property secondaryPrivateIpAddressCount: The number of private IP addresses that can be created automatically by ECS.
	SecondaryPrivateIpAddressCount interface{} `field:"optional" json:"secondaryPrivateIpAddressCount" yaml:"secondaryPrivateIpAddressCount"`
	// Property securityGroupId: The ID of the security group that the ENI joins.
	//
	// The security group and the ENI must be in a same VPC.
	SecurityGroupId interface{} `field:"optional" json:"securityGroupId" yaml:"securityGroupId"`
	// Property securityGroupIds: The IDs of the security groups that the ENI joins.
	//
	// The security groups and the ENI must belong to the same VPC.
	SecurityGroupIds interface{} `field:"optional" json:"securityGroupIds" yaml:"securityGroupIds"`
	// Property tags: Tags to attach to instance.
	//
	// Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
	Tags *[]*RosNetworkInterface_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
	// Property txQueueSize: Elastic network card outbound queue depth.
	//
	// **Note**: The outbound queue depth of the network card must be equal to the inbound queue depth, ranging from 8192 to 16384, and must be a power of two.
	// Larger outbound queue depth can improve outbound throughput, but it consumes more memory.
	TxQueueSize interface{} `field:"optional" json:"txQueueSize" yaml:"txQueueSize"`
}

