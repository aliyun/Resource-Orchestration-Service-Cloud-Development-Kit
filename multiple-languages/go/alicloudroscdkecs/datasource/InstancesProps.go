package datasource


// Properties for defining a `Instances`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-instances
type InstancesProps struct {
	// Property additionalAttributes: The value of attribute N.
	//
	// Valid values of N: 1 to 20. Valid values:
	// META_OPTIONS: instance metadata
	// DDH_CLUSTER: dedicated host cluster
	// NETWORK_PRIMARY_ENI_IP: secondary IP address associated with the primary ENI of the instance.
	AdditionalAttributes interface{} `field:"optional" json:"additionalAttributes" yaml:"additionalAttributes"`
	// Property eipAddresses: The elastic IP addresses (EIPs) of instances.
	//
	// This parameter is valid when InstanceNetworkType is set to vpc. The value can be a JSON array that consists of up to 100 IP addresses. Separate the IP addresses with commas (,).
	EipAddresses interface{} `field:"optional" json:"eipAddresses" yaml:"eipAddresses"`
	// Property filters: Filter value when querying resources.
	Filters interface{} `field:"optional" json:"filters" yaml:"filters"`
	// Property hpcClusterId: The ID of the High Performance Computing (HPC) cluster to which the instance belongs.
	HpcClusterId interface{} `field:"optional" json:"hpcClusterId" yaml:"hpcClusterId"`
	// Property imageId: The ID of the image.
	ImageId interface{} `field:"optional" json:"imageId" yaml:"imageId"`
	// Property innerIpAddresses: The internal IP addresses of instances located in the classic network.
	//
	// This parameter is valid when InstanceNetworkType is set to classic. The value can be a JSON array that consists of up to 100 IP addresses. Separate the IP addresses with commas (,).
	InnerIpAddresses interface{} `field:"optional" json:"innerIpAddresses" yaml:"innerIpAddresses"`
	// Property instanceChargeType: The billing method of the instance.
	//
	// Valid values:
	// PostPaid: pay-as-you-go
	// PrePaid: subscription.
	InstanceChargeType interface{} `field:"optional" json:"instanceChargeType" yaml:"instanceChargeType"`
	// Property instanceId: The IDs of instances.
	//
	// The value can be a JSON array that consists of up to 100 instance IDs. Separate the instance IDs with commas (,).
	InstanceId interface{} `field:"optional" json:"instanceId" yaml:"instanceId"`
	// Property instanceIds: The IDs of instances.
	//
	// The value can be a JSON array that consists of up to 100 instance IDs. Separate the instance IDs with commas (,).
	InstanceIds interface{} `field:"optional" json:"instanceIds" yaml:"instanceIds"`
	// Property instanceName: The name of the instance.
	//
	// Fuzzy search with the asterisk (*) wildcard is supported.
	InstanceName interface{} `field:"optional" json:"instanceName" yaml:"instanceName"`
	// Property instanceNetworkType: The network type of the instance.
	//
	// Valid values:
	// classic: classic network
	// vpc: VPC.
	InstanceNetworkType interface{} `field:"optional" json:"instanceNetworkType" yaml:"instanceNetworkType"`
	// Property instanceType: The instance type of the instance.
	InstanceType interface{} `field:"optional" json:"instanceType" yaml:"instanceType"`
	// Property instanceTypeFamily: The instance family of the instance.
	InstanceTypeFamily interface{} `field:"optional" json:"instanceTypeFamily" yaml:"instanceTypeFamily"`
	// Property internetChargeType: The billing method for network usage.
	//
	// Valid values:
	// PayByBandwidth: pay-by-bandwidth
	// PayByTraffic: pay-by-traffic.
	InternetChargeType interface{} `field:"optional" json:"internetChargeType" yaml:"internetChargeType"`
	// Property ioOptimized: Specifies whether the instance is I\/O optimized.
	IoOptimized interface{} `field:"optional" json:"ioOptimized" yaml:"ioOptimized"`
	// Property ipv6Address: IPv6 address N of the elastic network interface (ENI).
	//
	// You can specify multiple IPv6 addresses. Valid values of N: 1 to 100.
	Ipv6Address interface{} `field:"optional" json:"ipv6Address" yaml:"ipv6Address"`
	// Property keyPairName: The name of the SSH key pair bound to the instance.
	KeyPairName interface{} `field:"optional" json:"keyPairName" yaml:"keyPairName"`
	// Property privateIpAddresses: The private IP addresses of instances located in VPCs.
	//
	// This parameter is valid when InstanceNetworkType is set to vpc. The value can be a JSON array that consists of up to 100 IP addresses. Separate the IP addresses with commas (,).
	PrivateIpAddresses interface{} `field:"optional" json:"privateIpAddresses" yaml:"privateIpAddresses"`
	// Property publicIpAddresses: The public IP addresses of instances.
	//
	// The value can be a JSON array that consists of up to 100 IP addresses. Separate the IP addresses with commas (,).
	PublicIpAddresses interface{} `field:"optional" json:"publicIpAddresses" yaml:"publicIpAddresses"`
	// Property rdmaIpAddresses: The Remote Direct Memory Access (RDMA) IP addresses of HPC instances.
	RdmaIpAddresses interface{} `field:"optional" json:"rdmaIpAddresses" yaml:"rdmaIpAddresses"`
	// Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
	//
	// Valid values:
	// - Never: Never refresh the datasource resource when the stack is updated.
	// - Always: Always refresh the datasource resource when the stack is updated.
	// Default is Never.
	RefreshOptions interface{} `field:"optional" json:"refreshOptions" yaml:"refreshOptions"`
	// Property resourceGroupId: The ID of the resource group to which the instance belongs.
	//
	// If this parameter is specified to query resources,up to 1,000 resources that belong to the specified resource group can be displayed in the response.
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	// Property securityGroupId: The ID of the security group to which the instance belongs.
	SecurityGroupId interface{} `field:"optional" json:"securityGroupId" yaml:"securityGroupId"`
	// Property status: The state of the instance.
	//
	// Valid values:
	// Pending
	// Running
	// Starting
	// Stopping
	// Stopped.
	Status interface{} `field:"optional" json:"status" yaml:"status"`
	// Property tags: Tags of instance.
	Tags *[]*RosInstances_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
	// Property vpcId: The ID of the virtual private cloud (VPC).
	VpcId interface{} `field:"optional" json:"vpcId" yaml:"vpcId"`
	// Property vSwitchId: The ID of the vSwitch.
	VSwitchId interface{} `field:"optional" json:"vSwitchId" yaml:"vSwitchId"`
	// Property zoneId: The zone ID of the instance.
	ZoneId interface{} `field:"optional" json:"zoneId" yaml:"zoneId"`
}

