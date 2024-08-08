package alicloudroscdkcs


type RosClusterNodePool_SpotPriceLimitProperty struct {
	InstanceType interface{} `field:"required" json:"instanceType" yaml:"instanceType"`
	PriceLimit interface{} `field:"required" json:"priceLimit" yaml:"priceLimit"`
}

