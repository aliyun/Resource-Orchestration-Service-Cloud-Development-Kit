package alicloudroscdknlb


type RosLoadBalancer_ZoneMappingsProperty struct {
	VSwitchId interface{} `field:"required" json:"vSwitchId" yaml:"vSwitchId"`
	ZoneId interface{} `field:"required" json:"zoneId" yaml:"zoneId"`
	AllocationId interface{} `field:"optional" json:"allocationId" yaml:"allocationId"`
	EipType interface{} `field:"optional" json:"eipType" yaml:"eipType"`
	LoadBalancerAddresses interface{} `field:"optional" json:"loadBalancerAddresses" yaml:"loadBalancerAddresses"`
	PrivateIPv4Address interface{} `field:"optional" json:"privateIPv4Address" yaml:"privateIPv4Address"`
}

