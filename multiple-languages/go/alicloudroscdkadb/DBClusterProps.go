package alicloudroscdkadb


// Properties for defining a `DBCluster`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-adb-dbcluster
type DBClusterProps struct {
	// Property dbClusterCategory: The cluster edition.
	//
	// Valid values:
	// - Cluster: reserved cluster.
	// > Reserved clusters are available only in the Chinese mainland and Singapore
	// regions. In the Singapore region, you can purchase reserved clusters only with
	// the pay-as-you-go billing method.
	// - MixedStorage: elastic cluster (new).
	// > If you set `DBClusterCategory` to `Cluster`, you must set the `Mode` parameter
	// to `Reserved`. If you set `DBClusterCategory` to `MixedStorage`, you must set the
	// `Mode` parameter to `Flexible`. Otherwise, cluster creation will fail.
	DbClusterCategory interface{} `field:"required" json:"dbClusterCategory" yaml:"dbClusterCategory"`
	// Property dbClusterVersion: The version of the cluster.
	//
	// Set the value to 3.0.
	DbClusterVersion interface{} `field:"required" json:"dbClusterVersion" yaml:"dbClusterVersion"`
	// Property mode: The cluster mode.
	//
	// Valid values:
	// - Reserved: reserved mode.
	// - Flexible: flexible mode.
	Mode interface{} `field:"required" json:"mode" yaml:"mode"`
	// Property payType: The billing method of the cluster.
	//
	// Valid values:
	// Postpaid: pay-as-you-go
	// Prepaid: subscription.
	PayType interface{} `field:"required" json:"payType" yaml:"payType"`
	// Property vpcId: The ID of the VPC.
	VpcId interface{} `field:"required" json:"vpcId" yaml:"vpcId"`
	// Property vSwitchId: The ID of the vSwitch.
	VSwitchId interface{} `field:"required" json:"vSwitchId" yaml:"vSwitchId"`
	// Property computeResource: The compute resources for the cluster.
	//
	// Compute resources are used for data
	// queries. A larger amount of compute resources can provide better query
	// performance. Compute resources are available in cluster and single-node editions:
	// - Cluster edition: includes specifications such as 16 cores\/64 GB, 24 cores\/96
	// GB, and 32 cores or more. The cluster edition supports resource pool isolation,
	// scheduled scaling, and tiered storage of hot and cold data.
	// - Single-node edition: includes specifications such as 8 cores\/32 GB and 16
	// cores\/64 GB. The single-node edition does not provide an SLA guarantee and has a
	// long recovery time from failures (4 to 8 hours). We do not recommend that you use
	// the single-node edition in production environments.
	// > * You can call the [DescribeAvailableResource]() operation to query the compute
	// resources that are available in a specific region.
	// >
	// > * This parameter is required when `Mode` is set to `Flexible` (flexible mode).
	ComputeResource interface{} `field:"optional" json:"computeResource" yaml:"computeResource"`
	// Property dbClusterClass: The specification of the cluster.
	//
	// This parameter is required in reserved mode. Valid values:
	// Basic Edition: T8, T16, T32, and T52
	// Cluster Edition: C8 and C32.
	DbClusterClass interface{} `field:"optional" json:"dbClusterClass" yaml:"dbClusterClass"`
	// Property dbClusterDescription: The description of the cluster.
	//
	// - The description cannot start with `http:\/\/` or `https:\/\/`.
	// - The description must be 2 to 256 characters long.
	DbClusterDescription interface{} `field:"optional" json:"dbClusterDescription" yaml:"dbClusterDescription"`
	// Property dbNodeGroupCount: The number of node groups.
	//
	// The value must be an integer from 1 to 200.
	// > This parameter is required when `Mode` is set to `Reserved` (reserved mode).
	DbNodeGroupCount interface{} `field:"optional" json:"dbNodeGroupCount" yaml:"dbNodeGroupCount"`
	// Property dbNodeStorage: The storage space of the node.
	//
	// This parameter is required in reserved mode. Unit: GB. Valid values:
	// T8: 100 to 500
	// T16 and T32: 100 to 2000
	// T52: 100 to 4000
	// C8: 100 to 1000
	// C32: 100 to 8000
	// Note The storage space less than 1,000 GB increases in increments of 100 GB. The storage space greater than 1,000 GB increases in increments of 1,000 GB.
	DbNodeStorage interface{} `field:"optional" json:"dbNodeStorage" yaml:"dbNodeStorage"`
	// Property diskEncryption: Whether to enable cloud disk encryption. Value:.
	//
	// - true: yes.
	// - false: no.
	DiskEncryption interface{} `field:"optional" json:"diskEncryption" yaml:"diskEncryption"`
	// Property elasticIoResource: The number of Elastic IO Units (EIUs).
	ElasticIoResource interface{} `field:"optional" json:"elasticIoResource" yaml:"elasticIoResource"`
	// Property enableSsl: Whether to enable SSL link encryption function, value:.
	//
	// - **true**: open.
	// - **false**: close.
	EnableSsl interface{} `field:"optional" json:"enableSsl" yaml:"enableSsl"`
	// Property executorCount: This parameter is reserved.
	ExecutorCount interface{} `field:"optional" json:"executorCount" yaml:"executorCount"`
	// Property kmsId: The kmsId used for cloud disk encryption, effective only when DiskEncryption is true.
	KmsId interface{} `field:"optional" json:"kmsId" yaml:"kmsId"`
	// Property period: The subscription period unit.
	//
	// Valid values:
	// - Year
	// - Month
	// > This parameter is required when `PayType` is set to `Prepaid` (subscription).
	Period interface{} `field:"optional" json:"period" yaml:"period"`
	// Property periodType: The subscription period for the cluster.
	//
	// This parameter is required if the PayType parameter is set to Prepaid. Valid values:
	// Year: subscription on a yearly basis
	// Month: subscription on a monthly basis.
	PeriodType interface{} `field:"optional" json:"periodType" yaml:"periodType"`
	// Property resourceGroupId: The ID of the resource group.
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	// Property tags: Tags to attach to instance.
	//
	// Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
	Tags *[]*RosDBCluster_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
	// Property zoneId: The zone ID of the cluster.
	//
	// You can call the DescribeRegions operation to query the most recent zone list.
	ZoneId interface{} `field:"optional" json:"zoneId" yaml:"zoneId"`
}

