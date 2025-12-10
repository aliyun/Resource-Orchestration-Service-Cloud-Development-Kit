package alicloudroscdkmse


// Properties for defining a `Cluster`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mse-cluster
type ClusterProps struct {
	// Property clusterSpecification: Engine specification.
	//
	// [Professional Edition]
	// - `MSE_SC_2_4_60_c`: 2 cores 4GB
	// - `MSE_SC_1_2_60_c`: 1 core 2GB
	// - `MSE_SC_4_8_60_c`: 4 cores 8GB
	// - `MSE_SC_8_16_60_c`: 8 cores 16GB
	// - `MSE_SC_16_32_60_c`: 16 cores 32GB
	//
	// [Development Edition]
	// - `MSE_SC_1_2_60_c`: 1 core 2GB
	// - `MSE_SC_2_4_60_c`: 2 cores 4GB
	//
	// [Serverless Edition]
	// - Ignore this parameter or fill with `MSE_SC_SERVERLESS`.
	ClusterSpecification interface{} `field:"required" json:"clusterSpecification" yaml:"clusterSpecification"`
	// Property clusterType: Cluster type, including ZooKeeper, Nacos-Ans.
	ClusterType interface{} `field:"required" json:"clusterType" yaml:"clusterType"`
	// Property clusterVersion: Cluster version.
	//
	// [Professional Edition]
	// - `NACOS_2_0_0`: Nacos 2.x.x version.
	// - `ZooKeeper_3_8_0`: ZooKeeper 3.8.x version.
	//
	// [Development Edition]
	// - `NACOS_2_0_0`: Nacos 2.x version.
	// - `ZooKeeper_3_8_0`: ZooKeeper 3.8.x version.
	//
	// [Serverless Edition]
	// - `NACOS_2_0_0`: Nacos 2.x version.
	// - `ZooKeeper_3_8_0`: ZooKeeper 3.8.x version.
	ClusterVersion interface{} `field:"required" json:"clusterVersion" yaml:"clusterVersion"`
	// Property instanceCount: Number of instance nodes. Range: 1~15.
	//
	// [Professional Edition]
	// - Must be >=3 and odd number.
	//
	// [Development Edition]
	// - Only 1 allowed.
	//
	// [Serverless Edition]
	// - Ignore this parameter.
	InstanceCount interface{} `field:"required" json:"instanceCount" yaml:"instanceCount"`
	// Property netType: Network type.
	//
	// Valid values:
	// - `privatenet`: Private network.
	// - `pubnet`: Public network.
	NetType interface{} `field:"required" json:"netType" yaml:"netType"`
	// Property aclEntryList: List of ACL entries.
	AclEntryList interface{} `field:"optional" json:"aclEntryList" yaml:"aclEntryList"`
	// Property chargeType: Billing mode, including PREPAY (annual\/monthly) and POSTPAY (pay-as-you-go).
	//
	// Ignored for Serverless Edition.
	ChargeType interface{} `field:"optional" json:"chargeType" yaml:"chargeType"`
	// Property clusterAliasName: cluster alias name.
	ClusterAliasName interface{} `field:"optional" json:"clusterAliasName" yaml:"clusterAliasName"`
	// Property connectionType: Network access type, `slb` or `single_eni`;
	//
	// some regions only support `single_eni` for Development Edition.
	ConnectionType interface{} `field:"optional" json:"connectionType" yaml:"connectionType"`
	// Property eipEnabled: Effective when ConnectionType is `single_eni`, indicates whether to enable public access (elastic IP).
	EipEnabled interface{} `field:"optional" json:"eipEnabled" yaml:"eipEnabled"`
	// Property mseVersion: Must be filled unless special circumstances.
	//
	// Valid values:
	// - `mse_pro`: Professional Edition.
	// - `mse_dev`: Development Edition.
	// - `mse_serverless`: Serverless Edition.
	MseVersion interface{} `field:"optional" json:"mseVersion" yaml:"mseVersion"`
	// Property pubNetworkFlow: Public network flow.
	//
	// Valid when ConnectionType is `slb`. 0 means do not create public SLB; 1 or above indicates fixed bandwidth value in Mbps. Range: 0~5000.
	PubNetworkFlow interface{} `field:"optional" json:"pubNetworkFlow" yaml:"pubNetworkFlow"`
	// Property requestPars: Extended request parameters in JSON format.
	RequestPars interface{} `field:"optional" json:"requestPars" yaml:"requestPars"`
	// Property resourceGroupId: Resource group id.
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	// Property securityGroupType: Effective when ConnectionType is `single_eni`, represents the security group type of the instance.
	SecurityGroupType interface{} `field:"optional" json:"securityGroupType" yaml:"securityGroupType"`
	// Property tags: Tags to attach to cluster.
	//
	// Max support 20 tags to add during create cluster. Each tag with two properties Key and Value, and Key is required.
	Tags *[]*RosCluster_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
	// Property vpcId: VPC ID.
	VpcId interface{} `field:"optional" json:"vpcId" yaml:"vpcId"`
	// Property vSwitchId: Switch ID.
	VSwitchId interface{} `field:"optional" json:"vSwitchId" yaml:"vSwitchId"`
}

