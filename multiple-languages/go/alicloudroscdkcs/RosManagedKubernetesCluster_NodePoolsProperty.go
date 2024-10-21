package alicloudroscdkcs


type RosManagedKubernetesCluster_NodePoolsProperty struct {
	ScalingGroup interface{} `field:"required" json:"scalingGroup" yaml:"scalingGroup"`
	KubernetesConfig interface{} `field:"optional" json:"kubernetesConfig" yaml:"kubernetesConfig"`
	NodePoolInfo interface{} `field:"optional" json:"nodePoolInfo" yaml:"nodePoolInfo"`
}

