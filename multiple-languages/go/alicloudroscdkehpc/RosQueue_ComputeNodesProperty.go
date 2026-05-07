package alicloudroscdkehpc


type RosQueue_ComputeNodesProperty struct {
	AutoRenew interface{} `field:"optional" json:"autoRenew" yaml:"autoRenew"`
	AutoRenewPeriod interface{} `field:"optional" json:"autoRenewPeriod" yaml:"autoRenewPeriod"`
	Duration interface{} `field:"optional" json:"duration" yaml:"duration"`
	EnableHt interface{} `field:"optional" json:"enableHt" yaml:"enableHt"`
	ImageId interface{} `field:"optional" json:"imageId" yaml:"imageId"`
	InstanceChargeType interface{} `field:"optional" json:"instanceChargeType" yaml:"instanceChargeType"`
	InstanceType interface{} `field:"optional" json:"instanceType" yaml:"instanceType"`
	Period interface{} `field:"optional" json:"period" yaml:"period"`
	PeriodUnit interface{} `field:"optional" json:"periodUnit" yaml:"periodUnit"`
	SpotPriceLimit interface{} `field:"optional" json:"spotPriceLimit" yaml:"spotPriceLimit"`
	SpotStrategy interface{} `field:"optional" json:"spotStrategy" yaml:"spotStrategy"`
	SystemDisk interface{} `field:"optional" json:"systemDisk" yaml:"systemDisk"`
}

