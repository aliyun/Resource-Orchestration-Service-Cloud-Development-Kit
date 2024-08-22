package alicloudroscdkcs


type RosManagedKubernetesCluster_KubernetesConfigProperty struct {
	Runtime interface{} `field:"required" json:"runtime" yaml:"runtime"`
	RuntimeVersion interface{} `field:"required" json:"runtimeVersion" yaml:"runtimeVersion"`
	CpuPolicy interface{} `field:"optional" json:"cpuPolicy" yaml:"cpuPolicy"`
	Labels interface{} `field:"optional" json:"labels" yaml:"labels"`
	NodeNameMode interface{} `field:"optional" json:"nodeNameMode" yaml:"nodeNameMode"`
	Taints interface{} `field:"optional" json:"taints" yaml:"taints"`
}

