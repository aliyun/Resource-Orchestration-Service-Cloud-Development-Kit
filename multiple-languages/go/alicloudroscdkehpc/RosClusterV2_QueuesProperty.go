package alicloudroscdkehpc


type RosClusterV2_QueuesProperty struct {
	QueueName interface{} `field:"required" json:"queueName" yaml:"queueName"`
	AllocationStrategy interface{} `field:"optional" json:"allocationStrategy" yaml:"allocationStrategy"`
	ComputeNodes interface{} `field:"optional" json:"computeNodes" yaml:"computeNodes"`
	EnableScaleIn interface{} `field:"optional" json:"enableScaleIn" yaml:"enableScaleIn"`
	EnableScaleOut interface{} `field:"optional" json:"enableScaleOut" yaml:"enableScaleOut"`
	HostnamePrefix interface{} `field:"optional" json:"hostnamePrefix" yaml:"hostnamePrefix"`
	HostnameSuffix interface{} `field:"optional" json:"hostnameSuffix" yaml:"hostnameSuffix"`
	InitialCount interface{} `field:"optional" json:"initialCount" yaml:"initialCount"`
	InterConnect interface{} `field:"optional" json:"interConnect" yaml:"interConnect"`
	KeepAliveNodes interface{} `field:"optional" json:"keepAliveNodes" yaml:"keepAliveNodes"`
	MaxCount interface{} `field:"optional" json:"maxCount" yaml:"maxCount"`
	MaxCountPerCycle interface{} `field:"optional" json:"maxCountPerCycle" yaml:"maxCountPerCycle"`
	MinCount interface{} `field:"optional" json:"minCount" yaml:"minCount"`
	RamRole interface{} `field:"optional" json:"ramRole" yaml:"ramRole"`
	VSwitchIds interface{} `field:"optional" json:"vSwitchIds" yaml:"vSwitchIds"`
}

