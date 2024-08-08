package alicloudroscdkedas


// Properties for defining a `Cluster`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-edas-cluster
type ClusterProps struct {
	// Property clusterName: Cluster name.
	ClusterName interface{} `field:"required" json:"clusterName" yaml:"clusterName"`
	// Property clusterType: Cluster type.
	//
	// 1-Swarm cluster, 2-ECS cluster, 3-Kubernetes Cluster.
	ClusterType interface{} `field:"required" json:"clusterType" yaml:"clusterType"`
	// Property networkMode: Network Type.
	//
	// 1- classic network, 2-VPC.
	NetworkMode interface{} `field:"required" json:"networkMode" yaml:"networkMode"`
	// Property logicalRegionId: Custom namespace RegionId (format: Physical Region: custom namespace identifier).
	LogicalRegionId interface{} `field:"optional" json:"logicalRegionId" yaml:"logicalRegionId"`
	// Property oversoldFactor: Docker CPU cluster oversold.
	//
	// Support 2 (1: 2 ratio) \/ 4 (1: 4) \/ 8 (1: 8 ratio).
	OversoldFactor interface{} `field:"optional" json:"oversoldFactor" yaml:"oversoldFactor"`
	// Property resourceGroupId: Resource group id.
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	// Property vpcId: VPC network ID.
	//
	// If network selection VPC, this parameter Required.
	VpcId interface{} `field:"optional" json:"vpcId" yaml:"vpcId"`
}

