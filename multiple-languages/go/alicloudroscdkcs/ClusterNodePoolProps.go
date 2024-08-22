package alicloudroscdkcs


// Properties for defining a `ClusterNodePool`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cs-clusternodepool
type ClusterNodePoolProps struct {
	// Property clusterId: Cluster ID.
	ClusterId interface{} `field:"required" json:"clusterId" yaml:"clusterId"`
	// Property scalingGroup: The configurations of the scaling group used by the node pool.
	ScalingGroup interface{} `field:"required" json:"scalingGroup" yaml:"scalingGroup"`
	// Property autoScaling: The configurations of auto scaling.
	AutoScaling interface{} `field:"optional" json:"autoScaling" yaml:"autoScaling"`
	// Property count: The number of nodes in the node pool.
	Count interface{} `field:"optional" json:"count" yaml:"count"`
	// Property kubernetesConfig: The configurations of the ACK cluster.
	KubernetesConfig interface{} `field:"optional" json:"kubernetesConfig" yaml:"kubernetesConfig"`
	// Property management: The configurations of the managed node pool.
	Management interface{} `field:"optional" json:"management" yaml:"management"`
	// Property nodePoolInfo: The configurations of the node pool.
	NodePoolInfo interface{} `field:"optional" json:"nodePoolInfo" yaml:"nodePoolInfo"`
	// Property teeConfig: The configurations of confidential computing.
	TeeConfig interface{} `field:"optional" json:"teeConfig" yaml:"teeConfig"`
}

