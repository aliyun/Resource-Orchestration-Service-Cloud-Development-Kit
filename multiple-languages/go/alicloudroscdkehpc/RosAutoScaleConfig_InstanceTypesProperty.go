package alicloudroscdkehpc


type RosAutoScaleConfig_InstanceTypesProperty struct {
	InstanceType interface{} `field:"required" json:"instanceType" yaml:"instanceType"`
	VSwitchId interface{} `field:"required" json:"vSwitchId" yaml:"vSwitchId"`
	ZoneId interface{} `field:"required" json:"zoneId" yaml:"zoneId"`
	SpotPriceLimit interface{} `field:"optional" json:"spotPriceLimit" yaml:"spotPriceLimit"`
	SpotStrategy interface{} `field:"optional" json:"spotStrategy" yaml:"spotStrategy"`
}

