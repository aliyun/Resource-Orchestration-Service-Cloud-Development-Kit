package alicloudroscdkehpc


// Properties for defining a `ClusterV2`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ehpc-clusterv2
type ClusterV2Props struct {
	// Property clusterName: Cluster name.
	//
	// The length is from 2 to 128 characters, and it supports English, Chinese and numbers. You can include a dash (-) and an underscore (_).
	ClusterName interface{} `field:"required" json:"clusterName" yaml:"clusterName"`
	// Property sharedStorages: The list of shared storage configurations.
	SharedStorages interface{} `field:"required" json:"sharedStorages" yaml:"sharedStorages"`
	// Property vpcId: The ID of the VPC used by the cluster.
	VpcId interface{} `field:"required" json:"vpcId" yaml:"vpcId"`
	// Property vSwitchId: The ID of the VSwitch used by the cluster.
	VSwitchId interface{} `field:"required" json:"vSwitchId" yaml:"vSwitchId"`
	// Property additionalPackages: A list of software to install on the cluster.
	//
	// Range from 0 to 10.
	AdditionalPackages interface{} `field:"optional" json:"additionalPackages" yaml:"additionalPackages"`
	// Property addons: Cluster custom service component configuration to support only one component.
	Addons interface{} `field:"optional" json:"addons" yaml:"addons"`
	// Property clientVersion: Cluster client version.
	//
	// By default, the latest version is used.
	ClientVersion interface{} `field:"optional" json:"clientVersion" yaml:"clientVersion"`
	// Property clusterCategory: Cluster series.
	//
	// Valid values:
	// - Standard: The standard version.
	// - Serverless: Hosted version.
	ClusterCategory interface{} `field:"optional" json:"clusterCategory" yaml:"clusterCategory"`
	// Property clusterCredentials: Security credentials for the cluster.
	ClusterCredentials interface{} `field:"optional" json:"clusterCredentials" yaml:"clusterCredentials"`
	// Property clusterCustomConfiguration: Cluster post-processing scripts.
	ClusterCustomConfiguration interface{} `field:"optional" json:"clusterCustomConfiguration" yaml:"clusterCustomConfiguration"`
	// Property clusterDescription: Cluster description.
	//
	// The length is from 2 to 128 characters, and it supports English, Chinese and numbers. You can include a dash (-) and an underscore (_).
	ClusterDescription interface{} `field:"optional" json:"clusterDescription" yaml:"clusterDescription"`
	// Property clusterMode: Cluster deployment type.
	//
	// Valid values:
	// - Integrated: Public cloud clustering.
	// - Hybrid: Hybrid cloud cluster.
	// - Custom: The cluster is customized.
	ClusterMode interface{} `field:"optional" json:"clusterMode" yaml:"clusterMode"`
	// Property deletionProtection: The cluster deletion protection property, which specifies whether cluster deletion via the console or the DeleteCluster API is supported.
	//
	// - true: Cluster deletion protection is enabled.
	// - false: This turns off cluster deletion protection.
	// Default value: false.
	DeletionProtection interface{} `field:"optional" json:"deletionProtection" yaml:"deletionProtection"`
	// Property isEnterpriseSecurityGroup: Whether to create an enterprise security group.
	//
	// Valid values:
	// - true: Enterprise security groups are automatically created and used.
	// - false: Normal security groups are automatically created and used instead of enterprise security groups.
	IsEnterpriseSecurityGroup interface{} `field:"optional" json:"isEnterpriseSecurityGroup" yaml:"isEnterpriseSecurityGroup"`
	// Property manager: The cluster manages node configuration.
	Manager interface{} `field:"optional" json:"manager" yaml:"manager"`
	// Property maxCoreCount: Total number of cores that the cluster can manage on compute nodes, ranging from 0 to 100,000.
	MaxCoreCount interface{} `field:"optional" json:"maxCoreCount" yaml:"maxCoreCount"`
	// Property maxCount: Number of compute nodes that can be managed by the cluster, ranging from 0 to 5,000.
	MaxCount interface{} `field:"optional" json:"maxCount" yaml:"maxCount"`
	// Property queues: Cluster queue configuration.
	//
	// The number of queues is supported from 0 to 8.
	Queues interface{} `field:"optional" json:"queues" yaml:"queues"`
	// Property resourceGroupId: The ID of the resource group.
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	// Property securityGroupId: Specifies the security group ID to which the newly created cluster belongs.
	SecurityGroupId interface{} `field:"optional" json:"securityGroupId" yaml:"securityGroupId"`
	// Property tags: Tags to attach to cluster_v2.
	//
	// Max support 20 tags to add during create cluster_v2. Each tag with two properties Key and Value, and Key is required.
	Tags *[]*RosClusterV2_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
}

