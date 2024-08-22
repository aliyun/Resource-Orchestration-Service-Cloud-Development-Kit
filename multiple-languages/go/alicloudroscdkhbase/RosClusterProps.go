package alicloudroscdkhbase


// Properties for defining a `RosCluster`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hbase-cluster
type RosClusterProps struct {
	CoreInstanceType interface{} `field:"required" json:"coreInstanceType" yaml:"coreInstanceType"`
	Engine interface{} `field:"required" json:"engine" yaml:"engine"`
	EngineVersion interface{} `field:"required" json:"engineVersion" yaml:"engineVersion"`
	NodeCount interface{} `field:"required" json:"nodeCount" yaml:"nodeCount"`
	PayType interface{} `field:"required" json:"payType" yaml:"payType"`
	ZoneId interface{} `field:"required" json:"zoneId" yaml:"zoneId"`
	AutoRenewPeriod interface{} `field:"optional" json:"autoRenewPeriod" yaml:"autoRenewPeriod"`
	ClusterName interface{} `field:"optional" json:"clusterName" yaml:"clusterName"`
	ColdStorageSize interface{} `field:"optional" json:"coldStorageSize" yaml:"coldStorageSize"`
	DiskSize interface{} `field:"optional" json:"diskSize" yaml:"diskSize"`
	DiskType interface{} `field:"optional" json:"diskType" yaml:"diskType"`
	EncryptionKey interface{} `field:"optional" json:"encryptionKey" yaml:"encryptionKey"`
	MasterInstanceType interface{} `field:"optional" json:"masterInstanceType" yaml:"masterInstanceType"`
	Period interface{} `field:"optional" json:"period" yaml:"period"`
	PeriodUnit interface{} `field:"optional" json:"periodUnit" yaml:"periodUnit"`
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	SecurityIpList interface{} `field:"optional" json:"securityIpList" yaml:"securityIpList"`
	VpcId interface{} `field:"optional" json:"vpcId" yaml:"vpcId"`
	VSwitchId interface{} `field:"optional" json:"vSwitchId" yaml:"vSwitchId"`
}

