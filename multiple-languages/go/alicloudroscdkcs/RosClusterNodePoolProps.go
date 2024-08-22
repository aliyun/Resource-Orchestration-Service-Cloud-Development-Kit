package alicloudroscdkcs


// Properties for defining a `RosClusterNodePool`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cs-clusternodepool
type RosClusterNodePoolProps struct {
	ClusterId interface{} `field:"required" json:"clusterId" yaml:"clusterId"`
	ScalingGroup interface{} `field:"required" json:"scalingGroup" yaml:"scalingGroup"`
	AutoScaling interface{} `field:"optional" json:"autoScaling" yaml:"autoScaling"`
	Count interface{} `field:"optional" json:"count" yaml:"count"`
	KubernetesConfig interface{} `field:"optional" json:"kubernetesConfig" yaml:"kubernetesConfig"`
	Management interface{} `field:"optional" json:"management" yaml:"management"`
	NodePoolInfo interface{} `field:"optional" json:"nodePoolInfo" yaml:"nodePoolInfo"`
	TeeConfig interface{} `field:"optional" json:"teeConfig" yaml:"teeConfig"`
}

