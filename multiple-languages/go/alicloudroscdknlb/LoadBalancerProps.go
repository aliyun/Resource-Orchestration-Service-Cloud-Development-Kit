package alicloudroscdknlb


// Properties for defining a `LoadBalancer`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nlb-loadbalancer
type LoadBalancerProps struct {
	// Property addressType: The type of IP address that the NLB instance uses to provide services.
	//
	// Valid values:
	// Internet: The NLB instance uses a public IP address. The domain name of the NLB instance is resolved to the public IP address. Therefore, the NLB instance can be accessed over the Internet.
	// Intranet: The NLB instance uses a private IP address. The domain name of the NLB instance is resolved to the private IP address. Therefore, the NLB instance can be accessed over the VPC where the NLB instance is deployed.
	AddressType interface{} `field:"required" json:"addressType" yaml:"addressType"`
	// Property vpcId: The ID of the virtual private cloud (VPC) where the NLB instance is deployed.
	VpcId interface{} `field:"required" json:"vpcId" yaml:"vpcId"`
	// Property zoneMappings: The zones and the vSwitches in the zones.
	//
	// You must specify at least two zones.
	ZoneMappings interface{} `field:"required" json:"zoneMappings" yaml:"zoneMappings"`
	// Property addressIpVersion: The version of IP address that the NLB instance uses to provide services.
	AddressIpVersion interface{} `field:"optional" json:"addressIpVersion" yaml:"addressIpVersion"`
	// Property bandwidthPackageId: Attach common bandwidth package to load balancer.
	BandwidthPackageId interface{} `field:"optional" json:"bandwidthPackageId" yaml:"bandwidthPackageId"`
	// Property crossZoneEnabled: Whether enable cross zone.
	//
	// Default: true.
	CrossZoneEnabled interface{} `field:"optional" json:"crossZoneEnabled" yaml:"crossZoneEnabled"`
	// Property deletionProtectionConfig: The configuration of the deletion protection feature.
	DeletionProtectionConfig interface{} `field:"optional" json:"deletionProtectionConfig" yaml:"deletionProtectionConfig"`
	// Property loadBalancerBillingConfig: The configuration of the billing method.
	LoadBalancerBillingConfig interface{} `field:"optional" json:"loadBalancerBillingConfig" yaml:"loadBalancerBillingConfig"`
	// Property loadBalancerName: The name of the NLB instance.
	//
	// The name must be 2 to 128 characters in length, and can contain letters, digits, periods(.), underscores (_), and hyphens (-). The name must start with a letter.
	LoadBalancerName interface{} `field:"optional" json:"loadBalancerName" yaml:"loadBalancerName"`
	// Property loadBalancerType: The type of the NLB instance.
	LoadBalancerType interface{} `field:"optional" json:"loadBalancerType" yaml:"loadBalancerType"`
	// Property modificationProtectionConfig: The configuration of the configuration read-only mode.
	ModificationProtectionConfig interface{} `field:"optional" json:"modificationProtectionConfig" yaml:"modificationProtectionConfig"`
	// Property resourceGroupId: The ID of the resource group.
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	// Property tags: Tags to attach to instance.
	//
	// Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
	Tags *[]*RosLoadBalancer_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
	// Property trafficAffinityEnabled: Whether enable traffic affinity.
	//
	// Default: false.
	TrafficAffinityEnabled interface{} `field:"optional" json:"trafficAffinityEnabled" yaml:"trafficAffinityEnabled"`
}

