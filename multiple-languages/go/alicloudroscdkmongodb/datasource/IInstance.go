package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkmongodb/datasource/internal"
)

// Represents a `Instance`.
type IInstance interface {
	alicloudroscdkcore.IResource
	// Attribute AccountDescription: The description of the account.
	AttrAccountDescription() interface{}
	// Attribute AccountName: The name of the account.
	//
	// Value: **root * *.
	AttrAccountName() interface{}
	// Attribute AutoRenew: Indicates whether auto-renewal is enabled for the instance.
	//
	// Valid values:
	// true: Auto-renewal is enabled for the instance.
	// false: Auto-renewal is disabled for the instance.
	AttrAutoRenew() interface{}
	// Attribute AutoRenewDuration: Auto Renew Duration.
	AttrAutoRenewDuration() interface{}
	// Attribute BackupInterval: The frequency at which high-frequency backup is created.
	//
	// Valid values:
	// -1: High-frequency backup is disabled.
	// 15: every 15 minutes.
	// 30: every 30 minutes.
	// 60: every hour.
	// 120: every 2 hours.
	// 180: every 3 hours.
	// 240: every 4 hours.
	// 360: every 6 hours.
	// 480: every 8 hours.
	// 720: every 12 hours.
	AttrBackupInterval() interface{}
	// Attribute BackupRetentionPeriod: The retention period of the backup data.
	//
	// Unit: day.
	AttrBackupRetentionPeriod() interface{}
	// Attribute CreateTime: The Database create time.
	AttrCreateTime() interface{}
	// Attribute DBInstanceClass: The instance type of the instance.
	AttrDbInstanceClass() interface{}
	// Attribute DBInstanceDescription: The name of the instance.
	AttrDbInstanceDescription() interface{}
	// Attribute DBInstanceReleaseProtection: Indicates whether release protection is enabled for the instance.
	//
	// Valid values:
	// true
	// false.
	AttrDbInstanceReleaseProtection() interface{}
	// Attribute DbInstanceStorage: The storage capacity of the instance.
	AttrDbInstanceStorage() interface{}
	// Attribute DBInstanceType: The architecture of the instance.
	//
	// Valid values:
	// replicate: replica set instance
	// sharding: sharded cluster instance.
	AttrDbInstanceType() interface{}
	// Attribute EnableBackupLog: Indicates whether the log backup feature is enabled.
	//
	// Valid values:
	// 0 (default): The log backup feature is disabled.
	// 1: The log backup feature is enabled.
	AttrEnableBackupLog() interface{}
	// Attribute Engine: The database engine of the instance.
	//
	// Default value: mongodb.
	AttrEngine() interface{}
	// Attribute EngineVersion: The database engine version of the instance.
	//
	// 6.0
	// 5.0
	// 4.4
	// 4.2
	// 4.0
	AttrEngineVersion() interface{}
	// Attribute ExpireTime: The time when the subscription instance expires.
	//
	// The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mmZ format. The time is displayed in UTC.
	AttrExpireTime() interface{}
	// Attribute HiddenZoneId: The zone where the hidden node resides for multi-zone deployment.
	AttrHiddenZoneId() interface{}
	// Attribute InstanceId: The ID of the mongos.
	AttrInstanceId() interface{}
	// Attribute KindCode: The kind code of the instance.
	//
	// Valid values:
	// 0: physical machine
	// 1: Elastic Compute Service (ECS) instance
	// 2: Docker cluster
	// 18: Kubernetes cluster.
	AttrKindCode() interface{}
	// Attribute LastDowngradeTime: The date when the last downgrade operation was performed on the instance.
	AttrLastDowngradeTime() interface{}
	// Attribute LockMode: The lock status of the instance.
	//
	// Valid values:
	// Unlock: The instance is not locked.
	// ManualLock: The instance is manually locked.
	// LockByExpiration: The instance is automatically locked due to instance expiration.
	// LockByRestoration: The instance is automatically locked before the instance is rolled back.
	// LockByDiskQuota: The instance is automatically locked after the storage space is exhausted.
	// Released: The instance is released.
	AttrLockMode() interface{}
	// Attribute LogBackupRetentionPeriod: The number of days for which log backups are retained.
	//
	// Valid values: 7 to 730.
	AttrLogBackupRetentionPeriod() interface{}
	// Attribute MaintainEndTime: The end time of the maintenance window.
	//
	// The time follows the ISO 8601 standard in the HH:mmZ format. The time is displayed in UTC.
	AttrMaintainEndTime() interface{}
	// Attribute MaintainStartTime: The start time of the maintenance window.
	//
	// The time follows the ISO 8601 standard in the HH:mmZ format. The time is displayed in UTC.
	AttrMaintainStartTime() interface{}
	// Attribute MongosList: The information of the mongos nodes.
	AttrMongosList() interface{}
	// Attribute NetworkAddresses: The endpoints of ApsaraDB for MongoDB instances.
	AttrNetworkAddresses() interface{}
	// Attribute NetworkType: The network type of the instance.
	//
	// Valid values:
	// Classic: classic network
	// VPC: VPC.
	AttrNetworkType() interface{}
	// Attribute Parameters: The settings of the parameters that have taken effect.
	AttrParameters() interface{}
	// Attribute PaymentType: The billing method of the Database.
	//
	// Valid values:  PrePaid: subscription PostPaid: pay-as-you-go.
	AttrPaymentType() interface{}
	// Attribute PreferredBackupPeriod: The day of a week on which to back up data.
	//
	// Valid values:
	// Monday
	// Tuesday
	// Wednesday
	// Thursday
	// Friday
	// Saturday
	// Sunday.
	AttrPreferredBackupPeriod() interface{}
	// Attribute PreferredBackupTime: The time range during which the backup was created.
	//
	// The time follows the ISO 8601 standard in the HH:mmZ-HH:mmZ format. The time is displayed in UTC.
	AttrPreferredBackupTime() interface{}
	// Attribute ProtocolType: The access protocol type of the instance.
	//
	// Valid values:
	// mongodb
	// dynamodb.
	AttrProtocolType() interface{}
	// Attribute ReadonlyReplicas: The number of read-only nodes in the shard node.
	//
	// Valid values: 0 to 5. The value must be an integer.
	AttrReadonlyReplicas() interface{}
	// Attribute ReplicaSetsConnections: ReplicaSets Connections.
	AttrReplicaSetsConnections() interface{}
	// Attribute ReplicationFactor: The number of nodes in the instance.
	AttrReplicationFactor() interface{}
	// Attribute ResourceGroupId: The ID of the resource group to which the instance belongs.
	AttrResourceGroupId() interface{}
	// Attribute SecondaryZoneId: The zone where the secondary node resides for multi-zone deployment.
	AttrSecondaryZoneId() interface{}
	// Attribute SecurityGroupId: The ID of the ECS security group.
	AttrSecurityGroupId() interface{}
	// Attribute SecurityIpList: The name of the IP whitelist.
	AttrSecurityIpList() interface{}
	// Attribute SecurityIps: The IP addresses in the default whitelist.
	AttrSecurityIps() interface{}
	// Attribute ShardList: The information of the shard nodes.
	AttrShardList() interface{}
	// Attribute SnapshotBackupType: The snapshot backup type.
	//
	// Valid values:
	// Flash: single-digit second backup
	// Standard (default): standard backup.
	AttrSnapshotBackupType() interface{}
	// Attribute SslExpiredTime: The time when the SSL certificate expires.
	//
	// The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in Coordinated Universal Time (UTC).
	AttrSslExpiredTime() interface{}
	// Attribute SslStatus: The status of the SSL feature.
	//
	// Valid values:
	// Open: The SSL feature is enabled.
	// Closed: The SSL feature is disabled.
	AttrSslStatus() interface{}
	// Attribute StorageEngine: The Storage Engine Of The Instance Type.
	AttrStorageEngine() interface{}
	// Attribute Tags: The details of the instance tags.
	AttrTags() interface{}
	// Attribute TdeStatus: The TDE status.
	//
	// Valid values:
	// enabled
	// disabled.
	AttrTdeStatus() interface{}
	// Attribute VpcAuthMode: Indicates whether password-free access within the VPC is enabled.
	//
	// Valid values:
	// Open: Password-free access within the VPC is enabled.
	// Close: Password-free access within the VPC is disabled, and you must use a password for access.
	// NotSupport: Password-free access within the VPC is not supported.
	AttrVpcAuthMode() interface{}
	// Attribute VpcId: The VPC ID of the instance.
	AttrVpcId() interface{}
	// Attribute VSwitchId: The vSwitch ID of the instance.
	AttrVSwitchId() interface{}
	// Attribute ZoneId: The ID of the zone in which the instance resides.
	AttrZoneId() interface{}
	Props() *InstanceProps
}

// The jsii proxy for IInstance
type jsiiProxy_IInstance struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IInstance) AttrAccountDescription() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAccountDescription",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrAccountName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAccountName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrAutoRenew() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAutoRenew",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrAutoRenewDuration() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAutoRenewDuration",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrBackupInterval() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrBackupInterval",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrBackupRetentionPeriod() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrBackupRetentionPeriod",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrCreateTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCreateTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrDbInstanceClass() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDbInstanceClass",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrDbInstanceDescription() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDbInstanceDescription",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrDbInstanceReleaseProtection() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDbInstanceReleaseProtection",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrDbInstanceStorage() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDbInstanceStorage",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrDbInstanceType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDbInstanceType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrEnableBackupLog() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrEnableBackupLog",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrEngine() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrEngine",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrEngineVersion() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrEngineVersion",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrExpireTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrExpireTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrHiddenZoneId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrHiddenZoneId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrInstanceId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrInstanceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrKindCode() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrKindCode",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrLastDowngradeTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrLastDowngradeTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrLockMode() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrLockMode",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrLogBackupRetentionPeriod() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrLogBackupRetentionPeriod",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrMaintainEndTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrMaintainEndTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrMaintainStartTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrMaintainStartTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrMongosList() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrMongosList",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrNetworkAddresses() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrNetworkAddresses",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrNetworkType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrNetworkType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrParameters() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrParameters",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrPaymentType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPaymentType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrPreferredBackupPeriod() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPreferredBackupPeriod",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrPreferredBackupTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPreferredBackupTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrProtocolType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrProtocolType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrReadonlyReplicas() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrReadonlyReplicas",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrReplicaSetsConnections() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrReplicaSetsConnections",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrReplicationFactor() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrReplicationFactor",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrResourceGroupId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrResourceGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrSecondaryZoneId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSecondaryZoneId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrSecurityGroupId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSecurityGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrSecurityIpList() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSecurityIpList",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrSecurityIps() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSecurityIps",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrShardList() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrShardList",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrSnapshotBackupType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSnapshotBackupType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrSslExpiredTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSslExpiredTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrSslStatus() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSslStatus",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrStorageEngine() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrStorageEngine",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrTags() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTags",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrTdeStatus() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTdeStatus",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrVpcAuthMode() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrVpcAuthMode",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrVpcId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrVpcId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrVSwitchId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrVSwitchId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) AttrZoneId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrZoneId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IInstance) Props() *InstanceProps {
	var returns *InstanceProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

