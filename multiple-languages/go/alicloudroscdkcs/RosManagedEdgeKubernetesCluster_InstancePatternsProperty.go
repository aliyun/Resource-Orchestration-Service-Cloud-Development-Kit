package alicloudroscdkcs


type RosManagedEdgeKubernetesCluster_InstancePatternsProperty struct {
	Cores interface{} `field:"optional" json:"cores" yaml:"cores"`
	CpuArchitectures interface{} `field:"optional" json:"cpuArchitectures" yaml:"cpuArchitectures"`
	ExcludedInstanceTypes interface{} `field:"optional" json:"excludedInstanceTypes" yaml:"excludedInstanceTypes"`
	InstanceCategories interface{} `field:"optional" json:"instanceCategories" yaml:"instanceCategories"`
	InstanceFamilyLevel interface{} `field:"optional" json:"instanceFamilyLevel" yaml:"instanceFamilyLevel"`
	InstanceTypeFamilies interface{} `field:"optional" json:"instanceTypeFamilies" yaml:"instanceTypeFamilies"`
	MaxCpuCores interface{} `field:"optional" json:"maxCpuCores" yaml:"maxCpuCores"`
	MaxMemorySize interface{} `field:"optional" json:"maxMemorySize" yaml:"maxMemorySize"`
	Memory interface{} `field:"optional" json:"memory" yaml:"memory"`
	MinCpuCores interface{} `field:"optional" json:"minCpuCores" yaml:"minCpuCores"`
	MinMemorySize interface{} `field:"optional" json:"minMemorySize" yaml:"minMemorySize"`
}

