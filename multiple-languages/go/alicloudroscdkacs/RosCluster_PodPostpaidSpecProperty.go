package alicloudroscdkacs


type RosCluster_PodPostpaidSpecProperty struct {
	CpuCore interface{} `field:"optional" json:"cpuCore" yaml:"cpuCore"`
	GpuQuantityConfigs interface{} `field:"optional" json:"gpuQuantityConfigs" yaml:"gpuQuantityConfigs"`
	MemGib interface{} `field:"optional" json:"memGib" yaml:"memGib"`
	Replicas interface{} `field:"optional" json:"replicas" yaml:"replicas"`
}

