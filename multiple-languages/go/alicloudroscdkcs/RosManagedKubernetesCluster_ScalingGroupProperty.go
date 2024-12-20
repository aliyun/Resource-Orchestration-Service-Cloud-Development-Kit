package alicloudroscdkcs


type RosManagedKubernetesCluster_ScalingGroupProperty struct {
	InstanceTypes interface{} `field:"required" json:"instanceTypes" yaml:"instanceTypes"`
	SystemDiskSize interface{} `field:"required" json:"systemDiskSize" yaml:"systemDiskSize"`
	VSwitchIds interface{} `field:"required" json:"vSwitchIds" yaml:"vSwitchIds"`
	DataDisks interface{} `field:"optional" json:"dataDisks" yaml:"dataDisks"`
	DesiredSize interface{} `field:"optional" json:"desiredSize" yaml:"desiredSize"`
	ImageId interface{} `field:"optional" json:"imageId" yaml:"imageId"`
	InstanceChargeType interface{} `field:"optional" json:"instanceChargeType" yaml:"instanceChargeType"`
	InternetChargeType interface{} `field:"optional" json:"internetChargeType" yaml:"internetChargeType"`
	InternetMaxBandwidthOut interface{} `field:"optional" json:"internetMaxBandwidthOut" yaml:"internetMaxBandwidthOut"`
	IsEnterpriseSecurityGroup interface{} `field:"optional" json:"isEnterpriseSecurityGroup" yaml:"isEnterpriseSecurityGroup"`
	KeyPair interface{} `field:"optional" json:"keyPair" yaml:"keyPair"`
	LoginPassword interface{} `field:"optional" json:"loginPassword" yaml:"loginPassword"`
	Period interface{} `field:"optional" json:"period" yaml:"period"`
	PeriodUnit interface{} `field:"optional" json:"periodUnit" yaml:"periodUnit"`
	RdsInstances interface{} `field:"optional" json:"rdsInstances" yaml:"rdsInstances"`
	SystemDiskCategory interface{} `field:"optional" json:"systemDiskCategory" yaml:"systemDiskCategory"`
	SystemDiskPerformanceLevel interface{} `field:"optional" json:"systemDiskPerformanceLevel" yaml:"systemDiskPerformanceLevel"`
	Tags *[]*RosManagedKubernetesCluster_ScalingGroupTagsProperty `field:"optional" json:"tags" yaml:"tags"`
	ZoneIds interface{} `field:"optional" json:"zoneIds" yaml:"zoneIds"`
}

