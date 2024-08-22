package alicloudroscdkadb


// Properties for defining a `DBCluster`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-adb-dbcluster
type DBClusterProps struct {
	// Property dbClusterCategory: The edition of the cluster.
	//
	// Valid values when the cluster is in reserved mode:
	// Basic
	// Cluster
	// When the cluster is in elastic mode, set the value to MixedStorage.
	DbClusterCategory interface{} `field:"required" json:"dbClusterCategory" yaml:"dbClusterCategory"`
	// Property dbClusterVersion: The version of the cluster.
	//
	// Set the value to 3.0.
	DbClusterVersion interface{} `field:"required" json:"dbClusterVersion" yaml:"dbClusterVersion"`
	// Property mode: The mode of the cluster.
	//
	// Valid values:
	// Reserver: the reserved mode
	// Flexible: the elastic mode.
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
	// Property computeResource: The computing resource of the cluster.
	//
	// This parameter is required in elastic mode.
	ComputeResource interface{} `field:"optional" json:"computeResource" yaml:"computeResource"`
	// Property dbClusterClass: The specification of the cluster.
	//
	// This parameter is required in reserved mode. Valid values:
	// Basic Edition: T8, T16, T32, and T52
	// Cluster Edition: C8 and C32.
	DbClusterClass interface{} `field:"optional" json:"dbClusterClass" yaml:"dbClusterClass"`
	// Property dbClusterDescription: The description of the cluster.
	DbClusterDescription interface{} `field:"optional" json:"dbClusterDescription" yaml:"dbClusterDescription"`
	// Property dbNodeGroupCount: The number of node groups.
	//
	// This parameter is required in reserved mode. Valid values:
	// T8, T16, T32, and T52: 1
	// C8 and C32: 1 to 128.
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
	// Property elasticIoResource: Elastic IO Unit Note the flexible mode cluster will use this parameter.
	ElasticIoResource interface{} `field:"optional" json:"elasticIoResource" yaml:"elasticIoResource"`
	// Property executorCount: ExecutorCount.
	ExecutorCount interface{} `field:"optional" json:"executorCount" yaml:"executorCount"`
	// Property period: Valid values when the Period parameter is set to Month: 1, 2, 3, 4, 5, 6, 7, 8, and 9.
	//
	// Valid values when the Period parameter is set to Year: 1, 2, and 3.
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

