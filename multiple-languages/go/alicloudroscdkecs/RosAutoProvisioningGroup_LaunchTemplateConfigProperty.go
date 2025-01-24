package alicloudroscdkecs


type RosAutoProvisioningGroup_LaunchTemplateConfigProperty struct {
	VSwitchId interface{} `field:"required" json:"vSwitchId" yaml:"vSwitchId"`
	Architectures interface{} `field:"optional" json:"architectures" yaml:"architectures"`
	BurstablePerformance interface{} `field:"optional" json:"burstablePerformance" yaml:"burstablePerformance"`
	Cores interface{} `field:"optional" json:"cores" yaml:"cores"`
	ExcludedInstanceTypes interface{} `field:"optional" json:"excludedInstanceTypes" yaml:"excludedInstanceTypes"`
	ImageId interface{} `field:"optional" json:"imageId" yaml:"imageId"`
	InstanceFamilyLevel interface{} `field:"optional" json:"instanceFamilyLevel" yaml:"instanceFamilyLevel"`
	InstanceType interface{} `field:"optional" json:"instanceType" yaml:"instanceType"`
	MaxPrice interface{} `field:"optional" json:"maxPrice" yaml:"maxPrice"`
	Memories interface{} `field:"optional" json:"memories" yaml:"memories"`
	Priority interface{} `field:"optional" json:"priority" yaml:"priority"`
	WeightedCapacity interface{} `field:"optional" json:"weightedCapacity" yaml:"weightedCapacity"`
}

