package alicloudroscdkecs


type RosInstanceGroup_CpuOptionsProperty struct {
	Core interface{} `field:"optional" json:"core" yaml:"core"`
	NestedVirtualization interface{} `field:"optional" json:"nestedVirtualization" yaml:"nestedVirtualization"`
	ThreadsPerCore interface{} `field:"optional" json:"threadsPerCore" yaml:"threadsPerCore"`
}

