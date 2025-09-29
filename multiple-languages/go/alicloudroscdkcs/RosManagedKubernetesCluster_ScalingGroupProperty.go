package alicloudroscdkcs


type RosManagedKubernetesCluster_ScalingGroupProperty struct {
	SystemDiskSize interface{} `field:"required" json:"systemDiskSize" yaml:"systemDiskSize"`
	DataDisks interface{} `field:"optional" json:"dataDisks" yaml:"dataDisks"`
	DesiredSize interface{} `field:"optional" json:"desiredSize" yaml:"desiredSize"`
	ImageId interface{} `field:"optional" json:"imageId" yaml:"imageId"`
	ImageType interface{} `field:"optional" json:"imageType" yaml:"imageType"`
	InstanceChargeType interface{} `field:"optional" json:"instanceChargeType" yaml:"instanceChargeType"`
	InstancePatterns interface{} `field:"optional" json:"instancePatterns" yaml:"instancePatterns"`
	InstanceTypes interface{} `field:"optional" json:"instanceTypes" yaml:"instanceTypes"`
	InternetChargeType interface{} `field:"optional" json:"internetChargeType" yaml:"internetChargeType"`
	InternetMaxBandwidthOut interface{} `field:"optional" json:"internetMaxBandwidthOut" yaml:"internetMaxBandwidthOut"`
	IsEnterpriseSecurityGroup interface{} `field:"optional" json:"isEnterpriseSecurityGroup" yaml:"isEnterpriseSecurityGroup"`
	KeyPair interface{} `field:"optional" json:"keyPair" yaml:"keyPair"`
	LoginPassword interface{} `field:"optional" json:"loginPassword" yaml:"loginPassword"`
	Period interface{} `field:"optional" json:"period" yaml:"period"`
	PeriodUnit interface{} `field:"optional" json:"periodUnit" yaml:"periodUnit"`
	RdsInstances interface{} `field:"optional" json:"rdsInstances" yaml:"rdsInstances"`
	SecurityHardeningOs interface{} `field:"optional" json:"securityHardeningOs" yaml:"securityHardeningOs"`
	SocEnabled interface{} `field:"optional" json:"socEnabled" yaml:"socEnabled"`
	SystemDiskCategory interface{} `field:"optional" json:"systemDiskCategory" yaml:"systemDiskCategory"`
	SystemDiskPerformanceLevel interface{} `field:"optional" json:"systemDiskPerformanceLevel" yaml:"systemDiskPerformanceLevel"`
	Tags *[]*RosManagedKubernetesCluster_ScalingGroupTagsProperty `field:"optional" json:"tags" yaml:"tags"`
	VSwitchIds interface{} `field:"optional" json:"vSwitchIds" yaml:"vSwitchIds"`
	ZoneIds interface{} `field:"optional" json:"zoneIds" yaml:"zoneIds"`
}

