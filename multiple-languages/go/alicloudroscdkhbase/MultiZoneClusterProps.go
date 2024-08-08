package alicloudroscdkhbase


// Properties for defining a `MultiZoneCluster`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hbase-multizonecluster
type MultiZoneClusterProps struct {
	// Property arbiterVSwitchId: Arbitration virtual switch ID.
	//
	// The switch must be in the availability zone corresponding to ArbiterZoneId.
	ArbiterVSwitchId interface{} `field:"required" json:"arbiterVSwitchId" yaml:"arbiterVSwitchId"`
	// Property arbiterZoneId: Arbiter zond id.
	ArbiterZoneId interface{} `field:"required" json:"arbiterZoneId" yaml:"arbiterZoneId"`
	// Property archVersion: Version of the deployment architecture.
	//
	// Currently, only the hbaseue engine type is supported. The value can be 2.0.
	ArchVersion interface{} `field:"required" json:"archVersion" yaml:"archVersion"`
	// Property coreDiskSize: The value ranges from 400 GB to 64,000 GB.
	//
	// The step size is 40 GB.
	CoreDiskSize interface{} `field:"required" json:"coreDiskSize" yaml:"coreDiskSize"`
	// Property coreDiskType: Core node disk type.
	//
	// Valid values:
	// cloud_efficiency
	// cloud_ssd
	// local_hdd_pro
	// local_ssd_pro.
	CoreDiskType interface{} `field:"required" json:"coreDiskType" yaml:"coreDiskType"`
	// Property coreInstanceType: You can call the DescribeAvailableResource operation to obtain the value of this parameter.
	CoreInstanceType interface{} `field:"required" json:"coreInstanceType" yaml:"coreInstanceType"`
	// Property coreNodeCount: Number of Core nodes.
	//
	// The value of the number of Core nodes ranges from 2 to 20, and the increment is a multiple of 2.
	CoreNodeCount interface{} `field:"required" json:"coreNodeCount" yaml:"coreNodeCount"`
	// Property engine: Service type.
	//
	// Currently, only HBase enhanced version is supported. The value can be hbaseue.
	Engine interface{} `field:"required" json:"engine" yaml:"engine"`
	// Property engineVersion: The version of the engine.
	//
	// Valid values:
	// hbaseue:2.0
	EngineVersion interface{} `field:"required" json:"engineVersion" yaml:"engineVersion"`
	// Property logDiskSize: log disk size.
	//
	// The value ranges from 400 GB to 64,000 GB. The step size is 40 GB.
	LogDiskSize interface{} `field:"required" json:"logDiskSize" yaml:"logDiskSize"`
	// Property logDiskType: Log node disk type.
	//
	// Valid values:
	// cloud_efficiency
	// cloud_ssd
	// local_hdd_pro
	// local_ssd_pro.
	LogDiskType interface{} `field:"required" json:"logDiskType" yaml:"logDiskType"`
	// Property logInstanceType: Log instance type.
	LogInstanceType interface{} `field:"required" json:"logInstanceType" yaml:"logInstanceType"`
	// Property logNodeCount: Log number of nodes.
	//
	// The value of log nodes ranges from 4 to 400 and is a multiple of 4.
	LogNodeCount interface{} `field:"required" json:"logNodeCount" yaml:"logNodeCount"`
	// Property multiZoneCombination: Availability zone combination.
	MultiZoneCombination interface{} `field:"required" json:"multiZoneCombination" yaml:"multiZoneCombination"`
	// Property payType: The billing method.
	//
	// Prepaid: The subscription billing method is used.
	// Postpaid: The pay-as-you-go billing method is used.
	PayType interface{} `field:"required" json:"payType" yaml:"payType"`
	// Property primaryVSwitchId: The virtual switch ID of the instance in primary availability zone must be in the availability zone corresponding to PrimaryZoneId.
	PrimaryVSwitchId interface{} `field:"required" json:"primaryVSwitchId" yaml:"primaryVSwitchId"`
	// Property primaryZoneId: Availability zone ID of the primary availability zone instance.
	PrimaryZoneId interface{} `field:"required" json:"primaryZoneId" yaml:"primaryZoneId"`
	// Property standbyVSwitchId: The virtual switch ID of the standby availability zone instance must be in the corresponding availability zone of StandbyZoneId.
	StandbyVSwitchId interface{} `field:"required" json:"standbyVSwitchId" yaml:"standbyVSwitchId"`
	// Property standbyZoneId: Standby zone id.
	StandbyZoneId interface{} `field:"required" json:"standbyZoneId" yaml:"standbyZoneId"`
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
}

