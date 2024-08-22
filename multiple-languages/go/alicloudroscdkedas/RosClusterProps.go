package alicloudroscdkedas


// Properties for defining a `RosCluster`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-edas-cluster
type RosClusterProps struct {
	ClusterName interface{} `field:"required" json:"clusterName" yaml:"clusterName"`
	ClusterType interface{} `field:"required" json:"clusterType" yaml:"clusterType"`
	NetworkMode interface{} `field:"required" json:"networkMode" yaml:"networkMode"`
	LogicalRegionId interface{} `field:"optional" json:"logicalRegionId" yaml:"logicalRegionId"`
	OversoldFactor interface{} `field:"optional" json:"oversoldFactor" yaml:"oversoldFactor"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	VpcId interface{} `field:"optional" json:"vpcId" yaml:"vpcId"`
}

