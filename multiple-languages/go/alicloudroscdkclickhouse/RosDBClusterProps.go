package alicloudroscdkclickhouse


// Properties for defining a `RosDBCluster`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-clickhouse-dbcluster
type RosDBClusterProps struct {
	Category interface{} `field:"required" json:"category" yaml:"category"`
	DbClusterNetworkType interface{} `field:"required" json:"dbClusterNetworkType" yaml:"dbClusterNetworkType"`
	DbClusterType interface{} `field:"required" json:"dbClusterType" yaml:"dbClusterType"`
	DbClusterVersion interface{} `field:"required" json:"dbClusterVersion" yaml:"dbClusterVersion"`
	DbNodeCount interface{} `field:"required" json:"dbNodeCount" yaml:"dbNodeCount"`
	DbNodeStorage interface{} `field:"required" json:"dbNodeStorage" yaml:"dbNodeStorage"`
	DbNodeStorageType interface{} `field:"required" json:"dbNodeStorageType" yaml:"dbNodeStorageType"`
	PaymentType interface{} `field:"required" json:"paymentType" yaml:"paymentType"`
	DbClusterDescription interface{} `field:"optional" json:"dbClusterDescription" yaml:"dbClusterDescription"`
	EncryptionKey interface{} `field:"optional" json:"encryptionKey" yaml:"encryptionKey"`
	EncryptionType interface{} `field:"optional" json:"encryptionType" yaml:"encryptionType"`
	Period interface{} `field:"optional" json:"period" yaml:"period"`
	UsedTime interface{} `field:"optional" json:"usedTime" yaml:"usedTime"`
	VpcId interface{} `field:"optional" json:"vpcId" yaml:"vpcId"`
	VSwitchId interface{} `field:"optional" json:"vSwitchId" yaml:"vSwitchId"`
	ZoneId interface{} `field:"optional" json:"zoneId" yaml:"zoneId"`
}

