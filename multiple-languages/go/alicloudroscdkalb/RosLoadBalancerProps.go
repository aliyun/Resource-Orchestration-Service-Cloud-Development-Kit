package alicloudroscdkalb


// Properties for defining a `RosLoadBalancer`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-alb-loadbalancer
type RosLoadBalancerProps struct {
	AddressType interface{} `field:"required" json:"addressType" yaml:"addressType"`
	LoadBalancerBillingConfig interface{} `field:"required" json:"loadBalancerBillingConfig" yaml:"loadBalancerBillingConfig"`
	LoadBalancerEdition interface{} `field:"required" json:"loadBalancerEdition" yaml:"loadBalancerEdition"`
	LoadBalancerName interface{} `field:"required" json:"loadBalancerName" yaml:"loadBalancerName"`
	VpcId interface{} `field:"required" json:"vpcId" yaml:"vpcId"`
	ZoneMappings interface{} `field:"required" json:"zoneMappings" yaml:"zoneMappings"`
	AccessLogConfig interface{} `field:"optional" json:"accessLogConfig" yaml:"accessLogConfig"`
	AddressAllocatedMode interface{} `field:"optional" json:"addressAllocatedMode" yaml:"addressAllocatedMode"`
	AddressIpVersion interface{} `field:"optional" json:"addressIpVersion" yaml:"addressIpVersion"`
	BandwidthPackageId interface{} `field:"optional" json:"bandwidthPackageId" yaml:"bandwidthPackageId"`
	DeletionProtectionEnabled interface{} `field:"optional" json:"deletionProtectionEnabled" yaml:"deletionProtectionEnabled"`
	ModificationProtectionConfig interface{} `field:"optional" json:"modificationProtectionConfig" yaml:"modificationProtectionConfig"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	SecurityGroupIds interface{} `field:"optional" json:"securityGroupIds" yaml:"securityGroupIds"`
	Tags *[]*RosLoadBalancer_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
}

