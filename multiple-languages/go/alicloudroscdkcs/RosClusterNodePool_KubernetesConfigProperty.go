package alicloudroscdkcs


type RosClusterNodePool_KubernetesConfigProperty struct {
	Runtime interface{} `field:"required" json:"runtime" yaml:"runtime"`
	RuntimeVersion interface{} `field:"required" json:"runtimeVersion" yaml:"runtimeVersion"`
	CmsEnabled interface{} `field:"optional" json:"cmsEnabled" yaml:"cmsEnabled"`
	CpuPolicy interface{} `field:"optional" json:"cpuPolicy" yaml:"cpuPolicy"`
	Labels interface{} `field:"optional" json:"labels" yaml:"labels"`
	NodeNameMode interface{} `field:"optional" json:"nodeNameMode" yaml:"nodeNameMode"`
	Taints interface{} `field:"optional" json:"taints" yaml:"taints"`
	Unschedulable interface{} `field:"optional" json:"unschedulable" yaml:"unschedulable"`
	UserData interface{} `field:"optional" json:"userData" yaml:"userData"`
}

