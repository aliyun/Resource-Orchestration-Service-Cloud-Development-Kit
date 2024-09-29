package alicloudroscdkalb


type RosLoadBalancer_LoadBalancerAddressesProperty struct {
	AllocationId interface{} `field:"required" json:"allocationId" yaml:"allocationId"`
	EipType interface{} `field:"optional" json:"eipType" yaml:"eipType"`
	IntranetAddress interface{} `field:"optional" json:"intranetAddress" yaml:"intranetAddress"`
}

