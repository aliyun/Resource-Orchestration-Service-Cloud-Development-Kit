package alicloudroscdkemr


type RosCluster_HostGroupProperty struct {
	ChargeType interface{} `field:"required" json:"chargeType" yaml:"chargeType"`
	DiskCapacity interface{} `field:"required" json:"diskCapacity" yaml:"diskCapacity"`
	DiskCount interface{} `field:"required" json:"diskCount" yaml:"diskCount"`
	DiskType interface{} `field:"required" json:"diskType" yaml:"diskType"`
	HostGroupType interface{} `field:"required" json:"hostGroupType" yaml:"hostGroupType"`
	InstanceType interface{} `field:"required" json:"instanceType" yaml:"instanceType"`
	NodeCount interface{} `field:"required" json:"nodeCount" yaml:"nodeCount"`
	SysDiskCapacity interface{} `field:"required" json:"sysDiskCapacity" yaml:"sysDiskCapacity"`
	SysDiskType interface{} `field:"required" json:"sysDiskType" yaml:"sysDiskType"`
	AutoRenew interface{} `field:"optional" json:"autoRenew" yaml:"autoRenew"`
	ClusterId interface{} `field:"optional" json:"clusterId" yaml:"clusterId"`
	Comment interface{} `field:"optional" json:"comment" yaml:"comment"`
	CreateType interface{} `field:"optional" json:"createType" yaml:"createType"`
	GpuDriver interface{} `field:"optional" json:"gpuDriver" yaml:"gpuDriver"`
	HostGroupId interface{} `field:"optional" json:"hostGroupId" yaml:"hostGroupId"`
	HostGroupName interface{} `field:"optional" json:"hostGroupName" yaml:"hostGroupName"`
	HostKeyPairName interface{} `field:"optional" json:"hostKeyPairName" yaml:"hostKeyPairName"`
	HostPassword interface{} `field:"optional" json:"hostPassword" yaml:"hostPassword"`
	Period interface{} `field:"optional" json:"period" yaml:"period"`
	VSwitchId interface{} `field:"optional" json:"vSwitchId" yaml:"vSwitchId"`
}

