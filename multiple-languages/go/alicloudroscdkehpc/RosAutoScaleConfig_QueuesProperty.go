package alicloudroscdkehpc


type RosAutoScaleConfig_QueuesProperty struct {
	DataDisks interface{} `field:"optional" json:"dataDisks" yaml:"dataDisks"`
	EnableAutoGrow interface{} `field:"optional" json:"enableAutoGrow" yaml:"enableAutoGrow"`
	EnableAutoShrink interface{} `field:"optional" json:"enableAutoShrink" yaml:"enableAutoShrink"`
	HostNamePrefix interface{} `field:"optional" json:"hostNamePrefix" yaml:"hostNamePrefix"`
	HostNameSuffix interface{} `field:"optional" json:"hostNameSuffix" yaml:"hostNameSuffix"`
	InstanceType interface{} `field:"optional" json:"instanceType" yaml:"instanceType"`
	InstanceTypes interface{} `field:"optional" json:"instanceTypes" yaml:"instanceTypes"`
	MaxNodesInQueue interface{} `field:"optional" json:"maxNodesInQueue" yaml:"maxNodesInQueue"`
	MaxNodesPerCycle interface{} `field:"optional" json:"maxNodesPerCycle" yaml:"maxNodesPerCycle"`
	MinNodesInQueue interface{} `field:"optional" json:"minNodesInQueue" yaml:"minNodesInQueue"`
	MinNodesPerCycle interface{} `field:"optional" json:"minNodesPerCycle" yaml:"minNodesPerCycle"`
	QueueImageId interface{} `field:"optional" json:"queueImageId" yaml:"queueImageId"`
	QueueName interface{} `field:"optional" json:"queueName" yaml:"queueName"`
	SpotPriceLimit interface{} `field:"optional" json:"spotPriceLimit" yaml:"spotPriceLimit"`
	SpotStrategy interface{} `field:"optional" json:"spotStrategy" yaml:"spotStrategy"`
	SystemDiskCategory interface{} `field:"optional" json:"systemDiskCategory" yaml:"systemDiskCategory"`
	SystemDiskLevel interface{} `field:"optional" json:"systemDiskLevel" yaml:"systemDiskLevel"`
	SystemDiskSize interface{} `field:"optional" json:"systemDiskSize" yaml:"systemDiskSize"`
}

