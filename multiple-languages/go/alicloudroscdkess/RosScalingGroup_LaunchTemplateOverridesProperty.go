package alicloudroscdkess


type RosScalingGroup_LaunchTemplateOverridesProperty struct {
	InstanceType interface{} `field:"optional" json:"instanceType" yaml:"instanceType"`
	SpotPriceLimit interface{} `field:"optional" json:"spotPriceLimit" yaml:"spotPriceLimit"`
	WeightedCapacity interface{} `field:"optional" json:"weightedCapacity" yaml:"weightedCapacity"`
}

