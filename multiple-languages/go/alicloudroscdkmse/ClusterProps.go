package alicloudroscdkmse


// Properties for defining a `Cluster`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mse-cluster
type ClusterProps struct {
	// Property clusterSpecification: Cluster specifications.
	//
	// Note the msversion requirements of the version parameter,
	// Optional parameters:
	// "MSE_ SC _1_2_60_c",
	// "MSE_ SC _2_4_60_c",
	// "MSE_ SC _4_8_60_c",
	// "MSE_ SC _8_16_60_c",
	// "MSE_ SC _16_32_60_c".
	ClusterSpecification interface{} `field:"required" json:"clusterSpecification" yaml:"clusterSpecification"`
	// Property clusterType: cluster type.
	ClusterType interface{} `field:"required" json:"clusterType" yaml:"clusterType"`
	// Property clusterVersion: Cluster version, such as ZooKeeper_3_8_0,NACOS_2_0_0.
	ClusterVersion interface{} `field:"required" json:"clusterVersion" yaml:"clusterVersion"`
	// Property instanceCount: instance count.
	InstanceCount interface{} `field:"required" json:"instanceCount" yaml:"instanceCount"`
	// Property netType: Network type (whether private network is enabled or not).
	//
	// privatenet indicates that private network is enabled.
	NetType interface{} `field:"required" json:"netType" yaml:"netType"`
	// Property acceptLanguage:.
	AcceptLanguage interface{} `field:"optional" json:"acceptLanguage" yaml:"acceptLanguage"`
	// Property aclEntryList: The public network whitelist list is used only when the public network is enabled.
	AclEntryList interface{} `field:"optional" json:"aclEntryList" yaml:"aclEntryList"`
	// Property clusterAliasName: cluster alias name.
	ClusterAliasName interface{} `field:"optional" json:"clusterAliasName" yaml:"clusterAliasName"`
	// Property connectionType: network connect type.
	ConnectionType interface{} `field:"optional" json:"connectionType" yaml:"connectionType"`
	// Property diskType: disk type.
	DiskType interface{} `field:"optional" json:"diskType" yaml:"diskType"`
	// Property mseVersion: Required, the value is as follows:.
	//
	// -'mse_dev': indicates the development version.
	// -'Mse_pro': means professional version. When this version is selected, the specification is 2c4g or above, and the specification is 3 nodes or above.
	MseVersion interface{} `field:"optional" json:"mseVersion" yaml:"mseVersion"`
	// Property privateSlbSpecification:.
	PrivateSlbSpecification interface{} `field:"optional" json:"privateSlbSpecification" yaml:"privateSlbSpecification"`
	// Property pubNetworkFlow: Public network bandwidth.
	//
	// If the bandwidth is greater than 0, the public network is enabled.
	PubNetworkFlow interface{} `field:"optional" json:"pubNetworkFlow" yaml:"pubNetworkFlow"`
	// Property pubSlbSpecification:.
	PubSlbSpecification interface{} `field:"optional" json:"pubSlbSpecification" yaml:"pubSlbSpecification"`
	// Property requestPars:.
	RequestPars interface{} `field:"optional" json:"requestPars" yaml:"requestPars"`
	// Property vpcId: vpc id.
	VpcId interface{} `field:"optional" json:"vpcId" yaml:"vpcId"`
	// Property vSwitchId: switcher Id.
	VSwitchId interface{} `field:"optional" json:"vSwitchId" yaml:"vSwitchId"`
}

