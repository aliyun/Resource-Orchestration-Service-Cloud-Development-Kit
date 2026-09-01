package alicloudroscdkslb


// Properties for defining a `LoadBalancer`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-slb-loadbalancer
type LoadBalancerProps struct {
	// Property addressIpVersion: The IP version of the CLB instance.
	//
	// Valid values: ipv4 and ipv6.
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
	// Property instanceChargeType: The resource metering method for the CLB instance.
	//
	// Valid value:
	// - PayByCLCU: pay-by-data-transfer
	// > As of 00:00:00 (UTC+8) on June 1, 2025, pay-by-specification CLB instances are
	// no longer available for purchase. For more details, see [](t2857909.xdita#).
	InstanceChargeType interface{} `field:"optional" json:"instanceChargeType" yaml:"instanceChargeType"`
	// Property internetChargeType: The metering method of the Internet-facing CLB instance.
	//
	// Valid values:
	// - **paybytraffic** (default): If you set the value to paybytraffic, you do not need to specify Bandwidth. Even if you specify Bandwidth, the value does not take effect.
	// - **paybybandwidth**: pay-by-bandwidth.
	// **Note** If you set PayType to PayOnDemand and set InstanceChargeType to PayByCLCU, you must set InternetChargeType to paybytraffic.
	InternetChargeType interface{} `field:"optional" json:"internetChargeType" yaml:"internetChargeType"`
	// Property loadBalancerName: The CLB instance name.
	//
	// The name must be 1 to 80 characters in length, and can contain digits, periods
	// (.), underscores (_), and hyphens (-). It must start with a letter.
	// If you do not specify this parameter, the system automatically assigns a name to
	// the CLB instance.
	LoadBalancerName interface{} `field:"optional" json:"loadBalancerName" yaml:"loadBalancerName"`
	// Property loadBalancerSpec: The specification of the CLB instance.
	//
	// Valid values:
	// - slb.s1.small
	// - slb.s2.small
	// - slb.s2.medium
	// - slb.s3.small
	// - slb.s3.medium
	// - slb.s3.large
	// > * If InstanceChargeType is set to PayByCLCU, this parameter is invalid and you
	// do not need to specify this parameter.
	// >
	// > * As of 00:00:00 (UTC+8) on June 1, 2025, pay-by-specification CLB instances
	// are no longer available for purchase. For more details, see [](t2857909.xdita#).
	LoadBalancerSpec interface{} `field:"optional" json:"loadBalancerSpec" yaml:"loadBalancerSpec"`
	// Property masterZoneId: The master zone id to create load balancer instance.
	MasterZoneId interface{} `field:"optional" json:"masterZoneId" yaml:"masterZoneId"`
	// Property modificationProtectionReason: The reason for enabling the configuration read-only mode.
	//
	// The reason must be 1 to
	// 80 characters in length. It must start with a letter and can contain letters,
	// digits, periods (.), underscores (_), and hyphens (-).
	// > This parameter takes effect only when ModificationProtectionStatus is set to
	// ConsoleProtection.
	ModificationProtectionReason interface{} `field:"optional" json:"modificationProtectionReason" yaml:"modificationProtectionReason"`
	// Property modificationProtectionStatus: Specifies whether to enable the configuration read-only mode.
	//
	// Valid values:
	// - NonProtection: disables the configuration read-only mode. After you disable the
	// configuration read-only mode, the value of ModificationProtectionReason is
	// cleared.
	// - ConsoleProtection: enables the configuration read-only mode.
	// > If you set this parameter to ConsoleProtection, you cannot modify instance
	// configurations in the CLB console. However, you can modify instance
	// configurations by calling API operations.
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
	// Property vSwitchId: The ID of the vSwitch to which the CLB instance belongs.
	//
	// If you want to deploy the CLB instance in a VPC, this parameter is required. If
	// this parameter is specified, AddessType is set to intranet by default.
	// > The vSwitch must be in the primary zone.
	VSwitchId interface{} `field:"optional" json:"vSwitchId" yaml:"vSwitchId"`
}

