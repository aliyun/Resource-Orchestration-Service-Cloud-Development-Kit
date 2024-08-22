package alicloudroscdkrds


// Properties for defining a `ReadOnlyDBInstance`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-rds-readonlydbinstance
type ReadOnlyDBInstanceProps struct {
	// Property dbInstanceClass: The type of the instance.
	//
	// For more information, see Instance type list. The type of the read-only instance must be no less than that of the master instance. Otherwise, the read-only instance incurs high latency and high load.
	DbInstanceClass interface{} `field:"required" json:"dbInstanceClass" yaml:"dbInstanceClass"`
	// Property dbInstanceId: The ID of the master instance.
	DbInstanceId interface{} `field:"required" json:"dbInstanceId" yaml:"dbInstanceId"`
	// Property dbInstanceStorage: The storage space of the instance.
	//
	// Value range: 5 to 3000. The value must be a multiple of 5. Unit: GB.
	DbInstanceStorage interface{} `field:"required" json:"dbInstanceStorage" yaml:"dbInstanceStorage"`
	// Property engineVersion: The version of the database.
	//
	// The database and the master instance must have the same database version. Valid values: 5.6, 5.7, 8.0, 2017_ent, 2019_ent
	EngineVersion interface{} `field:"required" json:"engineVersion" yaml:"engineVersion"`
	// Property zoneId: The ID of the zone.
	//
	// You can call the DescribeRegions API operation to view the latest zones.
	ZoneId interface{} `field:"required" json:"zoneId" yaml:"zoneId"`
	// Property autoRenew: Specifies whether to enable auto-renewal.
	//
	// Valid values: true and false. Note
	// :Monthly subscription: The auto-renewal cycle is one month.
	// Annual subscription: The auto-renewal cycle is one year.
	AutoRenew interface{} `field:"optional" json:"autoRenew" yaml:"autoRenew"`
	// Property category: The RDS edition of the read-only instance.
	//
	// Valid values:
	// Basic: Basic Edition.
	// HighAvailability: High-availability Edition. This is the default value.
	// AlwaysOn: Cluster Edition.
	// Finance: Enterprise Edition. This edition is available only on the China site (aliyun.com).
	Category interface{} `field:"optional" json:"category" yaml:"category"`
	// Property dbInstanceDescription: Description of created database instance.
	DbInstanceDescription interface{} `field:"optional" json:"dbInstanceDescription" yaml:"dbInstanceDescription"`
	// Property dbInstanceStorageType: The type of storage media that is used by the instance.
	//
	// Valid values:
	// local_ssd: local SSDs
	// cloud_ssd: standard SSDs
	// cloud_essd: ESSDs of performance level 1 (PL1)
	// cloud_essd2: ESSDs of PL2
	// cloud_essd3: ESSDs of PL3.
	DbInstanceStorageType interface{} `field:"optional" json:"dbInstanceStorageType" yaml:"dbInstanceStorageType"`
	// Property dedicatedHostGroupId: The ID of the dedicated cluster to which the read-only instance belongs.
	//
	// This parameter is valid when you create the read-only instance in a dedicated cluster.
	DedicatedHostGroupId interface{} `field:"optional" json:"dedicatedHostGroupId" yaml:"dedicatedHostGroupId"`
	// Property deletionProtection: Specifies whether to enable the release protection feature for the read-only instance.
	//
	// Valid values:- **true**: enables the feature.- **false** (default): disables the feature.
	DeletionProtection interface{} `field:"optional" json:"deletionProtection" yaml:"deletionProtection"`
	// Property payType: The billing method.
	PayType interface{} `field:"optional" json:"payType" yaml:"payType"`
	// Property period: The subscription duration.
	//
	// Valid values:
	// When PeriodType is Month, it could be from 1 to 12, 24, 36, 48, 60.
	//   When PeriodType is Year, it could be from 1 to 5.
	Period interface{} `field:"optional" json:"period" yaml:"period"`
	// Property periodType: Charge period for created instances.
	PeriodType interface{} `field:"optional" json:"periodType" yaml:"periodType"`
	// Property privateIpAddress: The private IP address of the read-only instance.
	//
	// It must be within the IP address range provided by the switch. The system automatically assigns an IP address based on the VPCId and VSwitchId by default.
	PrivateIpAddress interface{} `field:"optional" json:"privateIpAddress" yaml:"privateIpAddress"`
	// Property resourceGroupId: Resource group id.
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	// Property tags: The tags of an instance.
	//
	// You should input the information of the tag with the format of the Key-Value, such as {"key1":"value1","key2":"value2", ... "key5":"value5"}.
	// At most 5 tags can be specified.
	// Key
	// It can be up to 64 characters in length.
	// Cannot begin with aliyun.
	// Cannot begin with http:\/\/ or https:\/\/.
	// Cannot be a null string.
	// Value
	// It can be up to 128 characters in length.
	// Cannot begin with aliyun.
	// Cannot begin with http:\/\/ or https:\/\/.
	// Can be a null string.
	Tags *map[string]interface{} `field:"optional" json:"tags" yaml:"tags"`
	// Property targetDedicatedHostIdForMaster: The ID of the host on which the primary instance resides.
	//
	// This parameter is valid when you create the read-only instance in a dedicated cluster.
	TargetDedicatedHostIdForMaster interface{} `field:"optional" json:"targetDedicatedHostIdForMaster" yaml:"targetDedicatedHostIdForMaster"`
	// Property vpcId: The ID of the VPC.
	VpcId interface{} `field:"optional" json:"vpcId" yaml:"vpcId"`
	// Property vSwitchId: The ID of the VSwitch.
	VSwitchId interface{} `field:"optional" json:"vSwitchId" yaml:"vSwitchId"`
}

