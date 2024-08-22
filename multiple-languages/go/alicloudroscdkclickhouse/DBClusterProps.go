package alicloudroscdkclickhouse


// Properties for defining a `DBCluster`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-clickhouse-dbcluster
type DBClusterProps struct {
	// Property category: The edition of the cluster.
	//
	// Valid values:
	// Basic: Single-replica Edition
	// HighAvailability: Double-replica Edition.
	Category interface{} `field:"required" json:"category" yaml:"category"`
	// Property dbClusterNetworkType: Network type of the cluster instance, value: VPC.
	DbClusterNetworkType interface{} `field:"required" json:"dbClusterNetworkType" yaml:"dbClusterNetworkType"`
	// Property dbClusterType: The specification of the cluster.
	//
	// If the cluster is of the Single-replica Edition, the following values are valid:
	// S4: 4 cores, 16 GB.
	// S8: 8 cores, 32 GB.
	// S16: 16 cores, 64 GB.
	// S32: 32 cores, 128 GB.
	// S64: 64 cores, 256 GB.
	// S104: 104 cores, 384 GB.
	// If the cluster is of the Double-replica Edition, the following values are valid:
	// C4: 4 cores, 16 GB.
	// C8: 8 cores, 32 GB.
	// C16: 16 cores, 64 GB.
	// C32: 32 cores, 128 GB.
	// C64: 64 cores, 256 GB.
	// C104: 104 cores, 384 GB.
	DbClusterType interface{} `field:"required" json:"dbClusterType" yaml:"dbClusterType"`
	// Property dbClusterVersion: Version, value:  19.15.2.2.
	DbClusterVersion interface{} `field:"required" json:"dbClusterVersion" yaml:"dbClusterVersion"`
	// Property dbNodeCount: The number of nodes.
	//
	// If the cluster is of the Single-replica Edition, the value ranges from 1 to 48.
	// If the cluster is of the Double-replica Edition, the value ranges from 1 to 24.
	DbNodeCount interface{} `field:"required" json:"dbNodeCount" yaml:"dbNodeCount"`
	// Property dbNodeStorage: The storage capacity of a single node.
	//
	// Valid values: 100 to 32000. Unit: GB.
	// Note self value is a multiple of 100.
	DbNodeStorage interface{} `field:"required" json:"dbNodeStorage" yaml:"dbNodeStorage"`
	// Property dbNodeStorageType: Instance node storage type.
	//
	// Valid values:  cloud_essd, cloud_efficiency.
	DbNodeStorageType interface{} `field:"required" json:"dbNodeStorageType" yaml:"dbNodeStorageType"`
	// Property paymentType: The billing method of the cluster.
	//
	// Valid values:
	// Postpaid: pay-as-you-go
	// Prepaid: subscription.
	PaymentType interface{} `field:"required" json:"paymentType" yaml:"paymentType"`
	// Property dbClusterDescription: The description of the cluster.
	DbClusterDescription interface{} `field:"optional" json:"dbClusterDescription" yaml:"dbClusterDescription"`
	// Property encryptionKey: KMS key ID.
	EncryptionKey interface{} `field:"optional" json:"encryptionKey" yaml:"encryptionKey"`
	// Property encryptionType: Kms key type, only cloud disk encryption is supported and the value is CloudDisk.
	EncryptionType interface{} `field:"optional" json:"encryptionType" yaml:"encryptionType"`
	// Property period: Prepaid time period.If the payment type is Prepaid, this parameter is mandatory. Specify the prepaid cluster as a yearly or monthly type. Valid values:  Year, Month.
	Period interface{} `field:"optional" json:"period" yaml:"period"`
	// Property usedTime: The subscription duration.
	//
	// Valid values:
	// When Period is Month, it could be from 1 to 9, 12, 24, 36.
	//   When Period is Year, it could be from 1 to 3.
	UsedTime interface{} `field:"optional" json:"usedTime" yaml:"usedTime"`
	// Property vpcId: VpcId.
	VpcId interface{} `field:"optional" json:"vpcId" yaml:"vpcId"`
	// Property vSwitchId: VSwitchId.
	VSwitchId interface{} `field:"optional" json:"vSwitchId" yaml:"vSwitchId"`
	// Property zoneId: ZoneId.
	ZoneId interface{} `field:"optional" json:"zoneId" yaml:"zoneId"`
}

