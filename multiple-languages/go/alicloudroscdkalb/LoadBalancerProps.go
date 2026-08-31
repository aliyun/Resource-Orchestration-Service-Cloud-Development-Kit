package alicloudroscdkalb


// Properties for defining a `LoadBalancer`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-alb-loadbalancer
type LoadBalancerProps struct {
	// Property addressType: The type of IP address that the ALB instance uses to provide services.
	//
	// Valid values:
	// Internet: The ALB instance uses a public IP address. The domain name of the ALB instance is resolved to the public IP address. Therefore, the ALB instance can be accessed over the Internet.
	// Intranet: The ALB instance uses a private IP address. The domain name of the ALB instance is resolved to the private IP address. Therefore, the ALB instance can be accessed over the VPC where the ALB instance is deployed.
	AddressType interface{} `field:"required" json:"addressType" yaml:"addressType"`
	// Property loadBalancerBillingConfig: The configuration of the billing method.
	LoadBalancerBillingConfig interface{} `field:"required" json:"loadBalancerBillingConfig" yaml:"loadBalancerBillingConfig"`
	// Property loadBalancerEdition: The edition of the ALB instance.
	//
	// Different editions have different limits and billing methods. Valid values:
	// Basic: Basic Edition
	// Standard: Standard Edition
	// StandardWithWaf: Standard Edition with WAF.
	LoadBalancerEdition interface{} `field:"required" json:"loadBalancerEdition" yaml:"loadBalancerEdition"`
	// Property vpcId: The ID of the virtual private cloud (VPC) where the ALB instance is deployed.
	VpcId interface{} `field:"required" json:"vpcId" yaml:"vpcId"`
	// Property zoneMappings: The zones and the vSwitches in the zones.
	//
	// You must specify at least two zones.
	ZoneMappings interface{} `field:"required" json:"zoneMappings" yaml:"zoneMappings"`
	// Property accessLogConfig:.
	AccessLogConfig interface{} `field:"optional" json:"accessLogConfig" yaml:"accessLogConfig"`
	// Property addressAllocatedMode: Address allocation mode.
	//
	// Valid values:
	// - Fixed (Default): A fixed IP address is allocated to each zone.
	// - Dynamic: Dynamic IP mode. IP addresses are dynamically allocated for each zone.
	// > Starting from , when you create a new instance by using this interface, it is
	// created as an upgraded ALB instance regardless of the mode you specify. The
	// distinction between IP modes is removed, and the allocated IP addresses are
	// automatically elastic. ALB instances created before the upgrade are not affected.
	AddressAllocatedMode interface{} `field:"optional" json:"addressAllocatedMode" yaml:"addressAllocatedMode"`
	// Property addressIpVersion: The protocol version.
	//
	// Valid values:
	// IPv4: IPv4
	// DualStack: dual stack.
	AddressIpVersion interface{} `field:"optional" json:"addressIpVersion" yaml:"addressIpVersion"`
	// Property bandwidthPackageId: Attach common bandwidth package to load balancer.
	//
	// It only takes effect when AddressType=Internet.
	BandwidthPackageId interface{} `field:"optional" json:"bandwidthPackageId" yaml:"bandwidthPackageId"`
	// Property deletionProtectionEnabled: Specifies whether to enable deletion protection.
	//
	// Default value: false.
	DeletionProtectionEnabled interface{} `field:"optional" json:"deletionProtectionEnabled" yaml:"deletionProtectionEnabled"`
	// Property ipv6AddressType: The type of IPv6 address that the ALB instance uses to provide services.
	//
	// Valid values:
	// Internet: The ALB instance uses a public IPv6 address. The domain name of the ALB instance is resolved to the public IPv6 address.
	// Intranet: The ALB instance uses a private IPv6 address. The domain name of the ALB instance is resolved to the private IP address.
	Ipv6AddressType interface{} `field:"optional" json:"ipv6AddressType" yaml:"ipv6AddressType"`
	// Property loadBalancerName: The name of the Application Load Balancer (ALB) instance.
	//
	// The name must be 2 to 128 characters long, must start with a letter, digit, or
	// Chinese character, and can contain digits, periods (.), underscores (_), hyphens
	// (-), and spaces.
	LoadBalancerName interface{} `field:"optional" json:"loadBalancerName" yaml:"loadBalancerName"`
	// Property modificationProtectionConfig: The modification protection configuration.
	ModificationProtectionConfig interface{} `field:"optional" json:"modificationProtectionConfig" yaml:"modificationProtectionConfig"`
	// Property resourceGroupId: The ID of the resource group.
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	// Property securityGroupIds: The IDs of the security group to which the ALB instance join.
	SecurityGroupIds interface{} `field:"optional" json:"securityGroupIds" yaml:"securityGroupIds"`
	// Property tags: Tags to attach to instance.
	//
	// Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
	Tags *[]*RosLoadBalancer_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
}

