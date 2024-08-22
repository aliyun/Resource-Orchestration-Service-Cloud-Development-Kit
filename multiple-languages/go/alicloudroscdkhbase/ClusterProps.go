package alicloudroscdkhbase


// Properties for defining a `Cluster`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hbase-cluster
type ClusterProps struct {
	// Property coreInstanceType: You can call the DescribeAvailableResource operation to obtain the value of this parameter.
	CoreInstanceType interface{} `field:"required" json:"coreInstanceType" yaml:"coreInstanceType"`
	// Property engine: The type of the service.
	//
	// Valid values:
	// hbase
	// hbaseue
	// bds.
	Engine interface{} `field:"required" json:"engine" yaml:"engine"`
	// Property engineVersion: The version of the engine.
	//
	// Valid values:
	// hbase:1.1, 2.0
	// hbaseue:2.0
	// bds:1.0
	EngineVersion interface{} `field:"required" json:"engineVersion" yaml:"engineVersion"`
	// Property nodeCount: The number of nodes.
	//
	// Valid values: 1 to 100.
	// ApsaraDB for HBase in single-node mode: one node
	// ApsaraDB for HBase that runs in cluster mode and uses disks: at least two nodes
	// ApsaraDB for HBase that runs in cluster mode and uses local disks: at least three
	// nodes.
	NodeCount interface{} `field:"required" json:"nodeCount" yaml:"nodeCount"`
	// Property payType: The billing method.
	//
	// Prepaid: The subscription billing method is used.
	// Postpaid: The pay-as-you-go billing method is used.
	PayType interface{} `field:"required" json:"payType" yaml:"payType"`
	// Property zoneId: The ID of the zone.
	ZoneId interface{} `field:"required" json:"zoneId" yaml:"zoneId"`
	// Property autoRenewPeriod: The auto-renewal period.
	//
	// Unit: month.
	// The default value of this parameter is 0. This value indicates that auto-renewal is
	// disabled.
	// If this parameter is set to 2, the instance is automatically renewed for a two-month
	// subscription after the instance expires.
	AutoRenewPeriod interface{} `field:"optional" json:"autoRenewPeriod" yaml:"autoRenewPeriod"`
	// Property clusterName: The name of the instance.
	//
	// The name must be 2 to 128 characters in length, and can contain letters, digits, periods
	// (.), underscores (_), and hyphens (-). It must start with a letter.
	ClusterName interface{} `field:"optional" json:"clusterName" yaml:"clusterName"`
	// Property coldStorageSize: The size of cold data storage.
	//
	// If this parameter is set to 0, cold data storage is disabled.
	// If this parameter is set to a value greater than 0, cold data storage is enabled.
	// The storage size ranges from 800 GB to 100,000 GB and the step size is 10 GB.
	ColdStorageSize interface{} `field:"optional" json:"coldStorageSize" yaml:"coldStorageSize"`
	// Property diskSize: The disk size of the node.
	//
	// Unit: GB.
	// For ApsaraDB for HBase in single-node mode, the disk size ranges from 20 GB to 500
	// GB and the step size is 1 GB.
	// For ApsaraDB for HBase that runs in cluster mode and uses disks, the disk size ranges
	// from 400 GB to 64,000 GB and the step size is 40 GB.
	// For ApsaraDB for HBase that runs in cluster mode and uses local disks, the disk size
	// varies by instance type. The following list provides the mappings between disks sizes
	// and instance types:
	// hbase.d1.4xlarge =44000
	// hbase.d1.6xlarge =66000
	// hbase.d1.8xlarge =88000
	// hbase.i2.xlarge =894
	// hbase.i2.2xlarge =1788
	// hbase.i2.4xlarge =3576
	// hbase.i2.8xlarge =7152
	// hbase.d2s.5xlarge =58400
	// hbase.d2s.10xlarge =109500
	DiskSize interface{} `field:"optional" json:"diskSize" yaml:"diskSize"`
	// Property diskType: The type of the disk.
	//
	// Valid values:
	// cloud_efficiency
	// cloud_ssd
	// local_hdd_pro
	// local_ssd_pro
	// cloud_essd_pl1.
	DiskType interface{} `field:"optional" json:"diskType" yaml:"diskType"`
	// Property encryptionKey: The encrypted key ID is empty if the encryption is not enabled.
	//
	// It shows that the current cloud disk version is unable to close after the encryption is turned on.
	EncryptionKey interface{} `field:"optional" json:"encryptionKey" yaml:"encryptionKey"`
	// Property masterInstanceType: The instance type of the master node.
	//
	// You can call the DescribeAvailableResource operation to obtain the value of this parameter.
	MasterInstanceType interface{} `field:"optional" json:"masterInstanceType" yaml:"masterInstanceType"`
	// Property period: The subscription period.
	//
	// This parameter only takes effect when the PayType parameter is set to Prepaid.
	// When the PeriodUnit parameter is set to year, the value of the Period parameter ranges
	// from 1 to 5.
	// When the PeriodUnit parameter is set to month, the value of the Period parameter ranges
	// from 1 to 9.
	Period interface{} `field:"optional" json:"period" yaml:"period"`
	// Property periodUnit: The unit of the subscription period.
	//
	// Valid values:
	// year
	// month.
	PeriodUnit interface{} `field:"optional" json:"periodUnit" yaml:"periodUnit"`
	// Property resourceGroupId: The ID of the resource group.
	//
	// You can query the group ID in the resource group console.
	// If you leave this parameter empty, the instance is allocated to the default resource
	// group.
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	// Property securityIpList: The IP addresses in the whitelist.
	//
	// Example: 192.168.*.*\/24. The 0.0.0.0\/0 value cannot
	// be added to the whitelist. Separate multiple IP addresses with commas (,).
	SecurityIpList interface{} `field:"optional" json:"securityIpList" yaml:"securityIpList"`
	// Property vpcId: The ID of the virtual private cloud (VPC).
	//
	// If you leave this parameter and the VSwitchId
	// parameter empty, the classic network type is used. The VPC network type is preferred.
	VpcId interface{} `field:"optional" json:"vpcId" yaml:"vpcId"`
	// Property vSwitchId: The ID of the vSwitch.
	VSwitchId interface{} `field:"optional" json:"vSwitchId" yaml:"vSwitchId"`
}

