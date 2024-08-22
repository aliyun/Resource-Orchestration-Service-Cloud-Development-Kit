package alicloudroscdknlb


// Properties for defining a `RosLoadBalancer`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nlb-loadbalancer
type RosLoadBalancerProps struct {
	AddressType interface{} `field:"required" json:"addressType" yaml:"addressType"`
	VpcId interface{} `field:"required" json:"vpcId" yaml:"vpcId"`
	ZoneMappings interface{} `field:"required" json:"zoneMappings" yaml:"zoneMappings"`
	AddressIpVersion interface{} `field:"optional" json:"addressIpVersion" yaml:"addressIpVersion"`
	BandwidthPackageId interface{} `field:"optional" json:"bandwidthPackageId" yaml:"bandwidthPackageId"`
	CrossZoneEnabled interface{} `field:"optional" json:"crossZoneEnabled" yaml:"crossZoneEnabled"`
	DeletionProtectionConfig interface{} `field:"optional" json:"deletionProtectionConfig" yaml:"deletionProtectionConfig"`
	LoadBalancerBillingConfig interface{} `field:"optional" json:"loadBalancerBillingConfig" yaml:"loadBalancerBillingConfig"`
	LoadBalancerName interface{} `field:"optional" json:"loadBalancerName" yaml:"loadBalancerName"`
	LoadBalancerType interface{} `field:"optional" json:"loadBalancerType" yaml:"loadBalancerType"`
	ModificationProtectionConfig interface{} `field:"optional" json:"modificationProtectionConfig" yaml:"modificationProtectionConfig"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	Tags *[]*RosLoadBalancer_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
	TrafficAffinityEnabled interface{} `field:"optional" json:"trafficAffinityEnabled" yaml:"trafficAffinityEnabled"`
}

