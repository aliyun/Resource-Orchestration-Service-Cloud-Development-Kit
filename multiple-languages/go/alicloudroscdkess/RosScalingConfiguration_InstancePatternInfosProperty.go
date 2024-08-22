package alicloudroscdkess


type RosScalingConfiguration_InstancePatternInfosProperty struct {
	Architectures interface{} `field:"optional" json:"architectures" yaml:"architectures"`
	BurstablePerformance interface{} `field:"optional" json:"burstablePerformance" yaml:"burstablePerformance"`
	Cores interface{} `field:"optional" json:"cores" yaml:"cores"`
	ExcludedInstanceTypes interface{} `field:"optional" json:"excludedInstanceTypes" yaml:"excludedInstanceTypes"`
	InstanceFamilyLevel interface{} `field:"optional" json:"instanceFamilyLevel" yaml:"instanceFamilyLevel"`
	MaxPrice interface{} `field:"optional" json:"maxPrice" yaml:"maxPrice"`
	Memory interface{} `field:"optional" json:"memory" yaml:"memory"`
}

