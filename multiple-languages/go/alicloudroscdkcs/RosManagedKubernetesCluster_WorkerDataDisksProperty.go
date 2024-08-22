package alicloudroscdkcs


type RosManagedKubernetesCluster_WorkerDataDisksProperty struct {
	Category interface{} `field:"required" json:"category" yaml:"category"`
	Size interface{} `field:"required" json:"size" yaml:"size"`
	PerformanceLevel interface{} `field:"optional" json:"performanceLevel" yaml:"performanceLevel"`
}

