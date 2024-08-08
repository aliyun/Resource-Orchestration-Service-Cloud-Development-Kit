package datasource


// Properties for defining a `NetworkInterfaces`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-networkinterfaces
type NetworkInterfacesProps struct {
	// Property instanceId: The ID of the instance to which the ENI is bound.
	InstanceId interface{} `field:"optional" json:"instanceId" yaml:"instanceId"`
	// Property ipv6Addresses: IPv6 address N of the ENI.
	//
	// You can specify multiple IPv6 addresses. Valid values of N: 1 to 100.
	Ipv6Addresses interface{} `field:"optional" json:"ipv6Addresses" yaml:"ipv6Addresses"`
	// Property networkInterfaceIds: The ID of ENI N.
	//
	// Valid values of N: 1 to 100.
	NetworkInterfaceIds interface{} `field:"optional" json:"networkInterfaceIds" yaml:"networkInterfaceIds"`
	// Property networkInterfaceName: The name of the ENI.
	NetworkInterfaceName interface{} `field:"optional" json:"networkInterfaceName" yaml:"networkInterfaceName"`
	// Property primaryIpAddress: The primary private IPv4 address of the ENI.
	PrimaryIpAddress interface{} `field:"optional" json:"primaryIpAddress" yaml:"primaryIpAddress"`
	// Property privateIpAddresses: Secondary private IPv4 address N of the ENI.
	//
	// Valid values of N: 1 to 100.
	PrivateIpAddresses interface{} `field:"optional" json:"privateIpAddresses" yaml:"privateIpAddresses"`
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
	// Property resourceGroupId: The ID of the resource group to which the eni belongs.
	//
	// If this parameter is specified to query resources,up to 1,000 resources that belong to the specified resource group can be displayed in the response.
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	// Property securityGroupId: The ID of the security group to which the secondary ENI belongs.
	//
	// To query the details of secondary ENIs based on the ID of a security group, specify this parameter.
	// To query the details of primary ENIs based on the ID of a security group, call the DescribeInstances operation and specify the SecurityGroupId parameter.
	SecurityGroupId interface{} `field:"optional" json:"securityGroupId" yaml:"securityGroupId"`
	// Property serviceManaged: Specifies whether the user is an Alibaba Cloud service or a distributor.
	ServiceManaged interface{} `field:"optional" json:"serviceManaged" yaml:"serviceManaged"`
	// Property status: The state of the ENI.
	//
	// Valid values:
	// Creating: The ENI is being created.
	// Available: The ENI is not bound to an instance.
	// Attaching: The ENI is being bound to an instance.
	// InUse: The ENI is bound to an instance.
	// Detaching: The ENI is being unbound from an instance.
	// Deleting: The ENI is being deleted.
	// CreateFailed: The ENI cannot be created.
	// This parameter is empty by default, which indicates that ENIs in all states are queried.
	Status interface{} `field:"optional" json:"status" yaml:"status"`
	// Property tags: Tags of eni.
	Tags *[]*RosNetworkInterfaces_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
	// Property type: The type of the ENI.
	//
	// Valid values:
	// Primary
	// Secondary
	// This parameter is empty by default, which indicates that both primary and secondary ENIs are queried.
	Type interface{} `field:"optional" json:"type" yaml:"type"`
	// Property vpcId: The ID of the virtual private cloud (VPC) to which the ENI belongs.
	VpcId interface{} `field:"optional" json:"vpcId" yaml:"vpcId"`
	// Property vSwitchId: The ID of the vSwitch to which the ENI is connected.
	VSwitchId interface{} `field:"optional" json:"vSwitchId" yaml:"vSwitchId"`
}

