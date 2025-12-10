package alicloudroscdkmse


// Properties for defining a `RosCluster`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mse-cluster
type RosClusterProps struct {
	ClusterSpecification interface{} `field:"required" json:"clusterSpecification" yaml:"clusterSpecification"`
	ClusterType interface{} `field:"required" json:"clusterType" yaml:"clusterType"`
	ClusterVersion interface{} `field:"required" json:"clusterVersion" yaml:"clusterVersion"`
	InstanceCount interface{} `field:"required" json:"instanceCount" yaml:"instanceCount"`
	NetType interface{} `field:"required" json:"netType" yaml:"netType"`
	AclEntryList interface{} `field:"optional" json:"aclEntryList" yaml:"aclEntryList"`
	ChargeType interface{} `field:"optional" json:"chargeType" yaml:"chargeType"`
	ClusterAliasName interface{} `field:"optional" json:"clusterAliasName" yaml:"clusterAliasName"`
	ConnectionType interface{} `field:"optional" json:"connectionType" yaml:"connectionType"`
	EipEnabled interface{} `field:"optional" json:"eipEnabled" yaml:"eipEnabled"`
	MseVersion interface{} `field:"optional" json:"mseVersion" yaml:"mseVersion"`
	PubNetworkFlow interface{} `field:"optional" json:"pubNetworkFlow" yaml:"pubNetworkFlow"`
	RequestPars interface{} `field:"optional" json:"requestPars" yaml:"requestPars"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	SecurityGroupType interface{} `field:"optional" json:"securityGroupType" yaml:"securityGroupType"`
	Tags *[]*RosCluster_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
	VpcId interface{} `field:"optional" json:"vpcId" yaml:"vpcId"`
	VSwitchId interface{} `field:"optional" json:"vSwitchId" yaml:"vSwitchId"`
}

