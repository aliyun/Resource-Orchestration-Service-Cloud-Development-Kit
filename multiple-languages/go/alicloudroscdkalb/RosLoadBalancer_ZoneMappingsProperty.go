package alicloudroscdkalb


type RosLoadBalancer_ZoneMappingsProperty struct {
	VSwitchId interface{} `field:"required" json:"vSwitchId" yaml:"vSwitchId"`
	ZoneId interface{} `field:"required" json:"zoneId" yaml:"zoneId"`
	AllocationId interface{} `field:"optional" json:"allocationId" yaml:"allocationId"`
	EipType interface{} `field:"optional" json:"eipType" yaml:"eipType"`
	IntranetAddress interface{} `field:"optional" json:"intranetAddress" yaml:"intranetAddress"`
	LoadBalancerAddresses interface{} `field:"optional" json:"loadBalancerAddresses" yaml:"loadBalancerAddresses"`
}

