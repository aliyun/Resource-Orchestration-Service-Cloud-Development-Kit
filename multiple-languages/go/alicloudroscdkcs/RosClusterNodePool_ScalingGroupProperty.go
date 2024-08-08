package alicloudroscdkcs


type RosClusterNodePool_ScalingGroupProperty struct {
	InstanceTypes interface{} `field:"required" json:"instanceTypes" yaml:"instanceTypes"`
	SystemDiskSize interface{} `field:"required" json:"systemDiskSize" yaml:"systemDiskSize"`
	VSwitchIds interface{} `field:"required" json:"vSwitchIds" yaml:"vSwitchIds"`
	AutoRenew interface{} `field:"optional" json:"autoRenew" yaml:"autoRenew"`
	AutoRenewPeriod interface{} `field:"optional" json:"autoRenewPeriod" yaml:"autoRenewPeriod"`
	CompensateWithOnDemand interface{} `field:"optional" json:"compensateWithOnDemand" yaml:"compensateWithOnDemand"`
	DataDisks interface{} `field:"optional" json:"dataDisks" yaml:"dataDisks"`
	ImageId interface{} `field:"optional" json:"imageId" yaml:"imageId"`
	InstanceChargeType interface{} `field:"optional" json:"instanceChargeType" yaml:"instanceChargeType"`
	InternetChargeType interface{} `field:"optional" json:"internetChargeType" yaml:"internetChargeType"`
	InternetMaxBandwidthOut interface{} `field:"optional" json:"internetMaxBandwidthOut" yaml:"internetMaxBandwidthOut"`
	KeyPair interface{} `field:"optional" json:"keyPair" yaml:"keyPair"`
	LoginPassword interface{} `field:"optional" json:"loginPassword" yaml:"loginPassword"`
	MultiAzPolicy interface{} `field:"optional" json:"multiAzPolicy" yaml:"multiAzPolicy"`
	OnDemandBaseCapacity interface{} `field:"optional" json:"onDemandBaseCapacity" yaml:"onDemandBaseCapacity"`
	OnDemandPercentageAboveBaseCapacity interface{} `field:"optional" json:"onDemandPercentageAboveBaseCapacity" yaml:"onDemandPercentageAboveBaseCapacity"`
	Period interface{} `field:"optional" json:"period" yaml:"period"`
	PeriodUnit interface{} `field:"optional" json:"periodUnit" yaml:"periodUnit"`
	Platform interface{} `field:"optional" json:"platform" yaml:"platform"`
	RdsInstances interface{} `field:"optional" json:"rdsInstances" yaml:"rdsInstances"`
	ScalingPolicy interface{} `field:"optional" json:"scalingPolicy" yaml:"scalingPolicy"`
	SecurityGroupId interface{} `field:"optional" json:"securityGroupId" yaml:"securityGroupId"`
	SpotInstancePools interface{} `field:"optional" json:"spotInstancePools" yaml:"spotInstancePools"`
	SpotInstanceRemedy interface{} `field:"optional" json:"spotInstanceRemedy" yaml:"spotInstanceRemedy"`
	SpotPriceLimit interface{} `field:"optional" json:"spotPriceLimit" yaml:"spotPriceLimit"`
	SpotStrategy interface{} `field:"optional" json:"spotStrategy" yaml:"spotStrategy"`
	SystemDiskCategory interface{} `field:"optional" json:"systemDiskCategory" yaml:"systemDiskCategory"`
	SystemDiskPerformanceLevel interface{} `field:"optional" json:"systemDiskPerformanceLevel" yaml:"systemDiskPerformanceLevel"`
	Tags *[]*RosClusterNodePool_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
	ZoneIds interface{} `field:"optional" json:"zoneIds" yaml:"zoneIds"`
}

