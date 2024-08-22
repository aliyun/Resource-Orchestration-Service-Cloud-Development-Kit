package alicloudroscdkecs


type RosAutoProvisioningGroup_LaunchTemplateConfigProperty struct {
	VSwitchId interface{} `field:"required" json:"vSwitchId" yaml:"vSwitchId"`
	InstanceType interface{} `field:"optional" json:"instanceType" yaml:"instanceType"`
	MaxPrice interface{} `field:"optional" json:"maxPrice" yaml:"maxPrice"`
	Priority interface{} `field:"optional" json:"priority" yaml:"priority"`
	WeightedCapacity interface{} `field:"optional" json:"weightedCapacity" yaml:"weightedCapacity"`
}

