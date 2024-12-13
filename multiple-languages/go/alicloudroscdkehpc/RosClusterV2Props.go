package alicloudroscdkehpc


// Properties for defining a `RosClusterV2`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ehpc-clusterv2
type RosClusterV2Props struct {
	ClusterName interface{} `field:"required" json:"clusterName" yaml:"clusterName"`
	SharedStorages interface{} `field:"required" json:"sharedStorages" yaml:"sharedStorages"`
	VpcId interface{} `field:"required" json:"vpcId" yaml:"vpcId"`
	VSwitchId interface{} `field:"required" json:"vSwitchId" yaml:"vSwitchId"`
	AdditionalPackages interface{} `field:"optional" json:"additionalPackages" yaml:"additionalPackages"`
	Addons interface{} `field:"optional" json:"addons" yaml:"addons"`
	ClientVersion interface{} `field:"optional" json:"clientVersion" yaml:"clientVersion"`
	ClusterCategory interface{} `field:"optional" json:"clusterCategory" yaml:"clusterCategory"`
	ClusterCredentials interface{} `field:"optional" json:"clusterCredentials" yaml:"clusterCredentials"`
	ClusterCustomConfiguration interface{} `field:"optional" json:"clusterCustomConfiguration" yaml:"clusterCustomConfiguration"`
	ClusterDescription interface{} `field:"optional" json:"clusterDescription" yaml:"clusterDescription"`
	ClusterMode interface{} `field:"optional" json:"clusterMode" yaml:"clusterMode"`
	DeletionProtection interface{} `field:"optional" json:"deletionProtection" yaml:"deletionProtection"`
	IsEnterpriseSecurityGroup interface{} `field:"optional" json:"isEnterpriseSecurityGroup" yaml:"isEnterpriseSecurityGroup"`
	Manager interface{} `field:"optional" json:"manager" yaml:"manager"`
	MaxCoreCount interface{} `field:"optional" json:"maxCoreCount" yaml:"maxCoreCount"`
	MaxCount interface{} `field:"optional" json:"maxCount" yaml:"maxCount"`
	Queues interface{} `field:"optional" json:"queues" yaml:"queues"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	SecurityGroupId interface{} `field:"optional" json:"securityGroupId" yaml:"securityGroupId"`
	Tags *[]*RosClusterV2_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
}

