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
	AcceptLanguage interface{} `field:"optional" json:"acceptLanguage" yaml:"acceptLanguage"`
	AclEntryList interface{} `field:"optional" json:"aclEntryList" yaml:"aclEntryList"`
	ClusterAliasName interface{} `field:"optional" json:"clusterAliasName" yaml:"clusterAliasName"`
	ConnectionType interface{} `field:"optional" json:"connectionType" yaml:"connectionType"`
	DiskType interface{} `field:"optional" json:"diskType" yaml:"diskType"`
	MseVersion interface{} `field:"optional" json:"mseVersion" yaml:"mseVersion"`
	PrivateSlbSpecification interface{} `field:"optional" json:"privateSlbSpecification" yaml:"privateSlbSpecification"`
	PubNetworkFlow interface{} `field:"optional" json:"pubNetworkFlow" yaml:"pubNetworkFlow"`
	PubSlbSpecification interface{} `field:"optional" json:"pubSlbSpecification" yaml:"pubSlbSpecification"`
	RequestPars interface{} `field:"optional" json:"requestPars" yaml:"requestPars"`
	VpcId interface{} `field:"optional" json:"vpcId" yaml:"vpcId"`
	VSwitchId interface{} `field:"optional" json:"vSwitchId" yaml:"vSwitchId"`
}

