package alicloudroscdkredis


// Properties for defining a `Instance`.
//
// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-redis-instance
type InstanceProps struct {
	// Property autoRenewDuration: The auto-renewal period.
	//
	// Valid values: 1 to 12.
	//   When the instance is about to expire, the instance is automatically renewed
	// based on the number of months specified by this parameter.
	// Note This parameter is valid only when ChargeType is set to PrePaid.
	AutoRenewDuration interface{} `field:"optional" json:"autoRenewDuration" yaml:"autoRenewDuration"`
	// Property backupPolicy: Backup policy.
	BackupPolicy interface{} `field:"optional" json:"backupPolicy" yaml:"backupPolicy"`
	// Property chargeType: The billing method of the ApsaraDB for Redis instance.
	ChargeType interface{} `field:"optional" json:"chargeType" yaml:"chargeType"`
	// Property connections: Connection address.
	Connections interface{} `field:"optional" json:"connections" yaml:"connections"`
	// Property deletionForce: Whether destroy instance when it is in recycle.
	//
	// Default is false.
	DeletionForce interface{} `field:"optional" json:"deletionForce" yaml:"deletionForce"`
	// Property engineVersion: Engine version.
	//
	// Supported values: 2.8, 4.0, 5.0, 6.0 and 7.0
	EngineVersion interface{} `field:"optional" json:"engineVersion" yaml:"engineVersion"`
	// Property evictionPolicy: The eviction policy of cache data storage.
	EvictionPolicy interface{} `field:"optional" json:"evictionPolicy" yaml:"evictionPolicy"`
	// Property instanceClass: Redis instance type.
	//
	// Refer the Redis instance type reference, such as 'redis.master.small.default', 'redis.master.4xlarge.default', 'redis.sharding.mid.default' etc
	InstanceClass interface{} `field:"optional" json:"instanceClass" yaml:"instanceClass"`
	// Property instanceMaintainTime: Instance maintain time.
	InstanceMaintainTime interface{} `field:"optional" json:"instanceMaintainTime" yaml:"instanceMaintainTime"`
	// Property instanceName: Display name of the instance, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'.
	InstanceName interface{} `field:"optional" json:"instanceName" yaml:"instanceName"`
	// Property nodeType: The type of node.
	//
	// Valid value:
	// - **STAND_ALONE**
	// - **MASTER_SLAVE**
	// - **double**
	// - **single**.
	NodeType interface{} `field:"optional" json:"nodeType" yaml:"nodeType"`
	// Property password: The password of redis instance.length 8 to 30 characters, need to contain both uppercase and lowercase letters and numbers.
	Password interface{} `field:"optional" json:"password" yaml:"password"`
	// Property period: The period of order, when choose Prepaid required.optional value 1-9, 12, 24, 36, 60 Unit in month.
	Period interface{} `field:"optional" json:"period" yaml:"period"`
	// Property periodUnit: The unit of the subscription duration.
	//
	// Valid values:
	// Month
	// Year
	// Default value: Month.
	PeriodUnit interface{} `field:"optional" json:"periodUnit" yaml:"periodUnit"`
	// Property productType: Product type.
	//
	// Valid values:Local: Community Edition(Local) or Enhanced Edition(Local)Tair_rdb: Performance Enhanced(Cloud Disk)Tair_scm: Persistent Memory(Cloud Disk)Tair_essd: Capacity Storage(Cloud Disk)OnECS: Community Edition(Cloud Disk).
	ProductType interface{} `field:"optional" json:"productType" yaml:"productType"`
	// Property resourceGroupId: Resource group id.
	ResourceGroupId interface{} `field:"optional" json:"resourceGroupId" yaml:"resourceGroupId"`
	// Property secondaryZoneId: The secondary zone ID of the instance.
	SecondaryZoneId interface{} `field:"optional" json:"secondaryZoneId" yaml:"secondaryZoneId"`
	// Property securityGroupId: The IDs of security groups.
	//
	// Separate multiple security group IDs with commas (,) and up to 10 can be set.
	SecurityGroupId interface{} `field:"optional" json:"securityGroupId" yaml:"securityGroupId"`
	// Property shardCount: The number of data nodes in the instance.
	//
	// Default value: 1. Valid values:
	// 1: You can create an instance in the standard architecture that contains only a single data node.
	// For more information about the standard architecture, see Cluster master-replica instances.
	// 2 to 32: You can create an instance in the cluster architecturethat contains the specified number of data nodes.
	// For more information about the cluster architecture, see Cluster master-replica instances.
	ShardCount interface{} `field:"optional" json:"shardCount" yaml:"shardCount"`
	// Property sslEnabled: Modifies the SSL status.
	//
	// Valid values:
	// Disable: disables SSL encryption.
	// Enable: enables SSL encryption.
	// Update: updates the SSL certificate.
	SslEnabled interface{} `field:"optional" json:"sslEnabled" yaml:"sslEnabled"`
	// Property tags: Tags to attach to redis.
	//
	// Max support 20 tags to add during create redis. Each tag with two properties Key and Value, and Key is required.
	Tags *[]*RosInstance_TagsProperty `field:"optional" json:"tags" yaml:"tags"`
	// Property tairConfig: Tair config.
	//
	// This parameter is available only if the InstanceClass parameter is start with tair.
	TairConfig interface{} `field:"optional" json:"tairConfig" yaml:"tairConfig"`
	// Property vpcId: The VPC id to create ecs instance.
	VpcId interface{} `field:"optional" json:"vpcId" yaml:"vpcId"`
	// Property vpcPasswordFree: Specifies whether to enable password free for access within the VPC.
	//
	// If set to:
	// - true: enables password free.
	// - false: disables password free.
	VpcPasswordFree interface{} `field:"optional" json:"vpcPasswordFree" yaml:"vpcPasswordFree"`
	// Property vSwitchId: The vSwitch Id to create ecs instance.
	VSwitchId interface{} `field:"optional" json:"vSwitchId" yaml:"vSwitchId"`
	// Property zoneId: The zone id of input region.
	ZoneId interface{} `field:"optional" json:"zoneId" yaml:"zoneId"`
}

