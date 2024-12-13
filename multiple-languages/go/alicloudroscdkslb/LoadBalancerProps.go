package alicloudroscdkslb


// Properties for defining a `LoadBalancer`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-slb-loadbalancer
type LoadBalancerProps struct {
	// Property addressIpVersion: IP version, support 'ipv4' or 'ipv6'.
	//
	// If 'ipv6' is selected, please note that the zone and the specification are supported.
	AddressIpVersion interface{} `field:"optional" json:"addressIpVersion" yaml:"addressIpVersion"`
	// Property addressType: The network type of the CLB instance.
	//
	// Valid values:
	// - **internet** (default): After an internet-facing CLB instance is created, the system assigns a public IP address to the CLB instance. Then, the CLB instance can forward requests over the Internet.
	// - **intranet**: After an internal-facing CLB instance is created, the system assigns a private IP address to the CLB instance. Then, the CLB instance can forward requests only over the internal networks.
	AddressType interface{} `field:"optional" json:"addressType" yaml:"addressType"`
	// Property bandwidth: The bandwidth for network, unit in Mbps(Mega bit per second).
	//
	// Default is 1. If InternetChargeType is specified as "paybytraffic", this property will be ignore and please specify the "Bandwidth" in ALIYUN::SLB::Listener.
	Bandwidth interface{} `field:"optional" json:"bandwidth" yaml:"bandwidth"`
	// Property deletionProtection: Whether to enable deletion protection.
	DeletionProtection interface{} `field:"optional" json:"deletionProtection" yaml:"deletionProtection"`
	// Property instanceChargeType: Instance billing method.
	//
	// Valid value:
	// - **PayBySpec** (default): Pay by spec.
	// - **PayByCLCU**: billed by usage.
	InstanceChargeType interface{} `field:"optional" json:"instanceChargeType" yaml:"instanceChargeType"`
	// Property internetChargeType: The metering method of the Internet-facing CLB instance.
	//
	// Valid values:
	// - **paybytraffic** (default): If you set the value to paybytraffic, you do not need to specify Bandwidth. Even if you specify Bandwidth, the value does not take effect.
	// - **paybybandwidth**: pay-by-bandwidth.
	// **Note** If you set PayType to PayOnDemand and set InstanceChargeType to PayByCLCU, you must set InternetChargeType to paybytraffic.
	InternetChargeType interface{} `field:"optional" json:"internetChargeType" yaml:"internetChargeType"`
	// Property loadBalancerName: Name of created load balancer.
	//
	// Length is limited to 1-80 characters, allowed to contain letters, numbers, '-, \/, _,.' When not specified, a default name will be assigned.
	LoadBalancerName interface{} `field:"optional" json:"loadBalancerName" yaml:"loadBalancerName"`
	// Property loadBalancerSpec: The specification of the CLB instance.
	//
	// Valid values:
	// - **slb.s1.small**
	// - **slb.s2.small**
	// - **slb.s2.medium**
	// - **slb.s3.small**
	// - **slb.s3.medium**
	// - **slb.s3.large**
	// **Note** If you do not specify this parameter, a shared-resource CLB instance is created. Shared-resource CLB instances are no longer available for purchase. Therefore, you must specify this parameter.
	// If InstanceChargeType is set to PayByCLCU, this parameter is invalid and you do not need to specify this parameter.
	LoadBalancerSpec interface{} `field:"optional" json:"loadBalancerSpec" yaml:"loadBalancerSpec"`
	// Property masterZoneId: The master zone id to create load balancer instance.
	MasterZoneId interface{} `field:"optional" json:"masterZoneId" yaml:"masterZoneId"`
	// Property modificationProtectionReason: Set the reason for modifying the protection status.
	//
	// The length is 1-80 English or Chinese characters, must start with upper and lower letters or Chinese, and can include numbers, periods (.), underscores (_) and dashes (-).
	// Only valid when ModificationProtectionStatus is ConsoleProtection.
	ModificationProtectionReason interface{} `field:"optional" json:"modificationProtectionReason" yaml:"modificationProtectionReason"`
	// Property modificationProtectionStatus: NonProtection or empty: means no restriction on modification protection ConsoleProtection: Modify instance protection status by console Default value is empty.
	ModificationProtectionStatus interface{} `field:"optional" json:"modificationProtectionStatus" yaml:"modificationProtectionStatus"`
	// Property resourceGroupId: Resource group id.
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	// Property slaveZoneId: The slave zone id to create load balancer instance.
	SlaveZoneId interface{} `field:"optional" json:"slaveZoneId" yaml:"slaveZoneId"`
	// Property tags: Tags to attach to slb.
	//
	// Max support 5 tags to add during create slb. Each tag with two properties Key and Value, and Key is required.
	Tags *[]*RosLoadBalancer_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
	// Property vpcId: The VPC id to create load balancer instance.
	//
	// For VPC network only.
	VpcId interface{} `field:"optional" json:"vpcId" yaml:"vpcId"`
	// Property vSwitchId: The VSwitch id to create load balancer instance.
	//
	// For VPC network only.
	VSwitchId interface{} `field:"optional" json:"vSwitchId" yaml:"vSwitchId"`
}

