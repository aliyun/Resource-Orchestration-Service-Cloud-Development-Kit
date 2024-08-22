package alicloudroscdkcs


type RosKubernetesCluster_NodePoolsProperty struct {
	ScalingGroup interface{} `field:"required" json:"scalingGroup" yaml:"scalingGroup"`
	Count interface{} `field:"optional" json:"count" yaml:"count"`
	KubernetesConfig interface{} `field:"optional" json:"kubernetesConfig" yaml:"kubernetesConfig"`
	NodePoolInfo interface{} `field:"optional" json:"nodePoolInfo" yaml:"nodePoolInfo"`
}

