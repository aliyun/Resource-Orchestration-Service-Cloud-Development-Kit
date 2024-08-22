package datasource

import (
	_init_ "github.com/alibabacloud-go/ros-cdk/alicloudroscdkmongodb/jsii"
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkmongodb/datasource/internal"
	"github.com/aws/constructs-go/constructs/v3"
)

// This class encapsulates and extends the ROS resource type `DATASOURCE::MONGODB::Instance`.
type Instance interface {
	alicloudroscdkcore.Resource
	// Attribute AccountDescription: The description of the account.
	AttrAccountDescription() alicloudroscdkcore.IResolvable
	// Attribute AccountName: The name of the account.
	//
	// Value: **root * *.
	AttrAccountName() alicloudroscdkcore.IResolvable
	// Attribute AutoRenew: Indicates whether auto-renewal is enabled for the instance.
	//
	// Valid values:
	// true: Auto-renewal is enabled for the instance.
	// false: Auto-renewal is disabled for the instance.
	AttrAutoRenew() alicloudroscdkcore.IResolvable
	// Attribute AutoRenewDuration: Auto Renew Duration.
	AttrAutoRenewDuration() alicloudroscdkcore.IResolvable
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
	AttrBackupInterval() alicloudroscdkcore.IResolvable
	// Attribute BackupRetentionPeriod: The retention period of the backup data.
	//
	// Unit: day.
	AttrBackupRetentionPeriod() alicloudroscdkcore.IResolvable
	// Attribute CreateTime: The Database create time.
	AttrCreateTime() alicloudroscdkcore.IResolvable
	// Attribute DBInstanceClass: The instance type of the instance.
	AttrDbInstanceClass() alicloudroscdkcore.IResolvable
	// Attribute DBInstanceDescription: The name of the instance.
	AttrDbInstanceDescription() alicloudroscdkcore.IResolvable
	// Attribute DBInstanceReleaseProtection: Indicates whether release protection is enabled for the instance.
	//
	// Valid values:
	// true
	// false.
	AttrDbInstanceReleaseProtection() alicloudroscdkcore.IResolvable
	// Attribute DbInstanceStorage: The storage capacity of the instance.
	AttrDbInstanceStorage() alicloudroscdkcore.IResolvable
	// Attribute DBInstanceType: The architecture of the instance.
	//
	// Valid values:
	// replicate: replica set instance
	// sharding: sharded cluster instance.
	AttrDbInstanceType() alicloudroscdkcore.IResolvable
	// Attribute EnableBackupLog: Indicates whether the log backup feature is enabled.
	//
	// Valid values:
	// 0 (default): The log backup feature is disabled.
	// 1: The log backup feature is enabled.
	AttrEnableBackupLog() alicloudroscdkcore.IResolvable
	// Attribute Engine: The database engine of the instance.
	//
	// Default value: mongodb.
	AttrEngine() alicloudroscdkcore.IResolvable
	// Attribute EngineVersion: The database engine version of the instance.
	//
	// 6.0
	// 5.0
	// 4.4
	// 4.2
	// 4.0
	AttrEngineVersion() alicloudroscdkcore.IResolvable
	// Attribute ExpireTime: The time when the subscription instance expires.
	//
	// The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mmZ format. The time is displayed in UTC.
	AttrExpireTime() alicloudroscdkcore.IResolvable
	// Attribute HiddenZoneId: The zone where the hidden node resides for multi-zone deployment.
	AttrHiddenZoneId() alicloudroscdkcore.IResolvable
	// Attribute InstanceId: The ID of the mongos.
	AttrInstanceId() alicloudroscdkcore.IResolvable
	// Attribute KindCode: The kind code of the instance.
	//
	// Valid values:
	// 0: physical machine
	// 1: Elastic Compute Service (ECS) instance
	// 2: Docker cluster
	// 18: Kubernetes cluster.
	AttrKindCode() alicloudroscdkcore.IResolvable
	// Attribute LastDowngradeTime: The date when the last downgrade operation was performed on the instance.
	AttrLastDowngradeTime() alicloudroscdkcore.IResolvable
	// Attribute LockMode: The lock status of the instance.
	//
	// Valid values:
	// Unlock: The instance is not locked.
	// ManualLock: The instance is manually locked.
	// LockByExpiration: The instance is automatically locked due to instance expiration.
	// LockByRestoration: The instance is automatically locked before the instance is rolled back.
	// LockByDiskQuota: The instance is automatically locked after the storage space is exhausted.
	// Released: The instance is released.
	AttrLockMode() alicloudroscdkcore.IResolvable
	// Attribute LogBackupRetentionPeriod: The number of days for which log backups are retained.
	//
	// Valid values: 7 to 730.
	AttrLogBackupRetentionPeriod() alicloudroscdkcore.IResolvable
	// Attribute MaintainEndTime: The end time of the maintenance window.
	//
	// The time follows the ISO 8601 standard in the HH:mmZ format. The time is displayed in UTC.
	AttrMaintainEndTime() alicloudroscdkcore.IResolvable
	// Attribute MaintainStartTime: The start time of the maintenance window.
	//
	// The time follows the ISO 8601 standard in the HH:mmZ format. The time is displayed in UTC.
	AttrMaintainStartTime() alicloudroscdkcore.IResolvable
	// Attribute MongosList: The information of the mongos nodes.
	AttrMongosList() alicloudroscdkcore.IResolvable
	// Attribute NetworkAddresses: The endpoints of ApsaraDB for MongoDB instances.
	AttrNetworkAddresses() alicloudroscdkcore.IResolvable
	// Attribute NetworkType: The network type of the instance.
	//
	// Valid values:
	// Classic: classic network
	// VPC: VPC.
	AttrNetworkType() alicloudroscdkcore.IResolvable
	// Attribute Parameters: The settings of the parameters that have taken effect.
	AttrParameters() alicloudroscdkcore.IResolvable
	// Attribute PaymentType: The billing method of the Database.
	//
	// Valid values:  PrePaid: subscription PostPaid: pay-as-you-go.
	AttrPaymentType() alicloudroscdkcore.IResolvable
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
	AttrPreferredBackupPeriod() alicloudroscdkcore.IResolvable
	// Attribute PreferredBackupTime: The time range during which the backup was created.
	//
	// The time follows the ISO 8601 standard in the HH:mmZ-HH:mmZ format. The time is displayed in UTC.
	AttrPreferredBackupTime() alicloudroscdkcore.IResolvable
	// Attribute ProtocolType: The access protocol type of the instance.
	//
	// Valid values:
	// mongodb
	// dynamodb.
	AttrProtocolType() alicloudroscdkcore.IResolvable
	// Attribute ReadonlyReplicas: The number of read-only nodes in the shard node.
	//
	// Valid values: 0 to 5. The value must be an integer.
	AttrReadonlyReplicas() alicloudroscdkcore.IResolvable
	// Attribute ReplicaSetsConnections: ReplicaSets Connections.
	AttrReplicaSetsConnections() alicloudroscdkcore.IResolvable
	// Attribute ReplicationFactor: The number of nodes in the instance.
	AttrReplicationFactor() alicloudroscdkcore.IResolvable
	// Attribute ResourceGroupId: The ID of the resource group to which the instance belongs.
	AttrResourceGroupId() alicloudroscdkcore.IResolvable
	// Attribute SecondaryZoneId: The zone where the secondary node resides for multi-zone deployment.
	AttrSecondaryZoneId() alicloudroscdkcore.IResolvable
	// Attribute SecurityGroupId: The ID of the ECS security group.
	AttrSecurityGroupId() alicloudroscdkcore.IResolvable
	// Attribute SecurityIpList: The name of the IP whitelist.
	AttrSecurityIpList() alicloudroscdkcore.IResolvable
	// Attribute SecurityIps: The IP addresses in the default whitelist.
	AttrSecurityIps() alicloudroscdkcore.IResolvable
	// Attribute ShardList: The information of the shard nodes.
	AttrShardList() alicloudroscdkcore.IResolvable
	// Attribute SnapshotBackupType: The snapshot backup type.
	//
	// Valid values:
	// Flash: single-digit second backup
	// Standard (default): standard backup.
	AttrSnapshotBackupType() alicloudroscdkcore.IResolvable
	// Attribute SslExpiredTime: The time when the SSL certificate expires.
	//
	// The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in Coordinated Universal Time (UTC).
	AttrSslExpiredTime() alicloudroscdkcore.IResolvable
	// Attribute SslStatus: The status of the SSL feature.
	//
	// Valid values:
	// Open: The SSL feature is enabled.
	// Closed: The SSL feature is disabled.
	AttrSslStatus() alicloudroscdkcore.IResolvable
	// Attribute StorageEngine: The Storage Engine Of The Instance Type.
	AttrStorageEngine() alicloudroscdkcore.IResolvable
	// Attribute Tags: The details of the instance tags.
	AttrTags() alicloudroscdkcore.IResolvable
	// Attribute TdeStatus: The TDE status.
	//
	// Valid values:
	// enabled
	// disabled.
	AttrTdeStatus() alicloudroscdkcore.IResolvable
	// Attribute VpcAuthMode: Indicates whether password-free access within the VPC is enabled.
	//
	// Valid values:
	// Open: Password-free access within the VPC is enabled.
	// Close: Password-free access within the VPC is disabled, and you must use a password for access.
	// NotSupport: Password-free access within the VPC is not supported.
	AttrVpcAuthMode() alicloudroscdkcore.IResolvable
	// Attribute VpcId: The VPC ID of the instance.
	AttrVpcId() alicloudroscdkcore.IResolvable
	// Attribute VSwitchId: The vSwitch ID of the instance.
	AttrVSwitchId() alicloudroscdkcore.IResolvable
	// Attribute ZoneId: The ID of the zone in which the instance resides.
	AttrZoneId() alicloudroscdkcore.IResolvable
	EnableResourcePropertyConstraint() *bool
	SetEnableResourcePropertyConstraint(val *bool)
	Id() *string
	SetId(val *string)
	// The construct tree node associated with this construct.
	Node() alicloudroscdkcore.ConstructNode
	// Returns a string-encoded token that resolves to the physical name that should be passed to the ROS resource.
	//
	// This value will resolve to one of the following:
	// - a concrete value (e.g. `"my-awesome-bucket"`)
	// - `undefined`, when a name should be generated by ROS
	// - a concrete name generated automatically during synthesis, in
	//    cross-environment scenarios.
	// Experimental.
	PhysicalName() *string
	Props() *InstanceProps
	SetProps(val *InstanceProps)
	Ref() *string
	Resource() alicloudroscdkcore.RosResource
	SetResource(val alicloudroscdkcore.RosResource)
	Scope() alicloudroscdkcore.Construct
	SetScope(val alicloudroscdkcore.Construct)
	// The stack in which this resource is defined.
	Stack() alicloudroscdkcore.Stack
	AddCondition(condition alicloudroscdkcore.RosCondition)
	AddCount(count interface{})
	AddDependency(resource alicloudroscdkcore.Resource)
	AddResourceDesc(desc *string)
	ApplyRemovalPolicy(policy alicloudroscdkcore.RemovalPolicy)
	GeneratePhysicalName() *string
	GetAtt(name *string) alicloudroscdkcore.IResolvable
	// Perform final modifications before synthesis.
	//
	// This method can be implemented by derived constructs in order to perform
	// final changes before synthesis. prepare() will be called after child
	// constructs have been prepared.
	//
	// This is an advanced framework feature. Only use this if you
	// understand the implications.
	OnPrepare()
	// Allows this construct to emit artifacts into the cloud assembly during synthesis.
	//
	// This method is usually implemented by framework-level constructs such as `Stack` and `Asset`
	// as they participate in synthesizing the cloud assembly.
	OnSynthesize(session constructs.ISynthesisSession)
	// Validate the current construct.
	//
	// This method can be implemented by derived constructs in order to perform
	// validation logic. It is called on all constructs before synthesis.
	//
	// Returns: An array of validation error messages, or an empty array if the construct is valid.
	OnValidate() *[]*string
	// Perform final modifications before synthesis.
	//
	// This method can be implemented by derived constructs in order to perform
	// final changes before synthesis. prepare() will be called after child
	// constructs have been prepared.
	//
	// This is an advanced framework feature. Only use this if you
	// understand the implications.
	Prepare()
	SetMetadata(key *string, value interface{})
	// Allows this construct to emit artifacts into the cloud assembly during synthesis.
	//
	// This method is usually implemented by framework-level constructs such as `Stack` and `Asset`
	// as they participate in synthesizing the cloud assembly.
	Synthesize(session alicloudroscdkcore.ISynthesisSession)
	// Returns a string representation of this construct.
	ToString() *string
	// Validate the current construct.
	//
	// This method can be implemented by derived constructs in order to perform
	// validation logic. It is called on all constructs before synthesis.
	//
	// Returns: An array of validation error messages, or an empty array if the construct is valid.
	Validate() *[]*string
}

// The jsii proxy struct for Instance
type jsiiProxy_Instance struct {
	internal.Type__alicloudroscdkcoreResource
}

func (j *jsiiProxy_Instance) AttrAccountDescription() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrAccountDescription",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) AttrAccountName() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrAccountName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) AttrAutoRenew() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrAutoRenew",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) AttrAutoRenewDuration() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrAutoRenewDuration",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) AttrBackupInterval() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrBackupInterval",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) AttrBackupRetentionPeriod() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrBackupRetentionPeriod",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) AttrCreateTime() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrCreateTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) AttrDbInstanceClass() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrDbInstanceClass",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) AttrDbInstanceDescription() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrDbInstanceDescription",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) AttrDbInstanceReleaseProtection() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrDbInstanceReleaseProtection",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) AttrDbInstanceStorage() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrDbInstanceStorage",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) AttrDbInstanceType() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrDbInstanceType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) AttrEnableBackupLog() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrEnableBackupLog",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) AttrEngine() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrEngine",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) AttrEngineVersion() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrEngineVersion",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) AttrExpireTime() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrExpireTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) AttrHiddenZoneId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrHiddenZoneId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) AttrInstanceId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrInstanceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) AttrKindCode() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrKindCode",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) AttrLastDowngradeTime() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrLastDowngradeTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) AttrLockMode() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrLockMode",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) AttrLogBackupRetentionPeriod() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrLogBackupRetentionPeriod",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) AttrMaintainEndTime() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrMaintainEndTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) AttrMaintainStartTime() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrMaintainStartTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) AttrMongosList() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrMongosList",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) AttrNetworkAddresses() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrNetworkAddresses",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) AttrNetworkType() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrNetworkType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) AttrParameters() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrParameters",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) AttrPaymentType() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrPaymentType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) AttrPreferredBackupPeriod() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrPreferredBackupPeriod",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) AttrPreferredBackupTime() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrPreferredBackupTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) AttrProtocolType() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrProtocolType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) AttrReadonlyReplicas() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrReadonlyReplicas",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) AttrReplicaSetsConnections() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrReplicaSetsConnections",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) AttrReplicationFactor() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrReplicationFactor",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) AttrResourceGroupId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrResourceGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) AttrSecondaryZoneId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrSecondaryZoneId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) AttrSecurityGroupId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrSecurityGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) AttrSecurityIpList() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrSecurityIpList",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) AttrSecurityIps() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrSecurityIps",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) AttrShardList() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrShardList",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) AttrSnapshotBackupType() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrSnapshotBackupType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) AttrSslExpiredTime() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrSslExpiredTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) AttrSslStatus() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrSslStatus",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) AttrStorageEngine() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrStorageEngine",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) AttrTags() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrTags",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) AttrTdeStatus() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrTdeStatus",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) AttrVpcAuthMode() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrVpcAuthMode",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) AttrVpcId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrVpcId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) AttrVSwitchId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrVSwitchId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) AttrZoneId() alicloudroscdkcore.IResolvable {
	var returns alicloudroscdkcore.IResolvable
	_jsii_.Get(
		j,
		"attrZoneId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) EnableResourcePropertyConstraint() *bool {
	var returns *bool
	_jsii_.Get(
		j,
		"enableResourcePropertyConstraint",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) Id() *string {
	var returns *string
	_jsii_.Get(
		j,
		"id",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) Node() alicloudroscdkcore.ConstructNode {
	var returns alicloudroscdkcore.ConstructNode
	_jsii_.Get(
		j,
		"node",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) PhysicalName() *string {
	var returns *string
	_jsii_.Get(
		j,
		"physicalName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) Props() *InstanceProps {
	var returns *InstanceProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) Ref() *string {
	var returns *string
	_jsii_.Get(
		j,
		"ref",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) Resource() alicloudroscdkcore.RosResource {
	var returns alicloudroscdkcore.RosResource
	_jsii_.Get(
		j,
		"resource",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) Scope() alicloudroscdkcore.Construct {
	var returns alicloudroscdkcore.Construct
	_jsii_.Get(
		j,
		"scope",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) Stack() alicloudroscdkcore.Stack {
	var returns alicloudroscdkcore.Stack
	_jsii_.Get(
		j,
		"stack",
		&returns,
	)
	return returns
}


// Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
func NewInstance(scope alicloudroscdkcore.Construct, id *string, props *InstanceProps, enableResourcePropertyConstraint *bool) Instance {
	_init_.Initialize()

	if err := validateNewInstanceParameters(scope, id, props); err != nil {
		panic(err)
	}
	j := jsiiProxy_Instance{}

	_jsii_.Create(
		"@alicloud/ros-cdk-mongodb.datasource.Instance",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		&j,
	)

	return &j
}

// Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
func NewInstance_Override(i Instance, scope alicloudroscdkcore.Construct, id *string, props *InstanceProps, enableResourcePropertyConstraint *bool) {
	_init_.Initialize()

	_jsii_.Create(
		"@alicloud/ros-cdk-mongodb.datasource.Instance",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		i,
	)
}

func (j *jsiiProxy_Instance)SetEnableResourcePropertyConstraint(val *bool) {
	if err := j.validateSetEnableResourcePropertyConstraintParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"enableResourcePropertyConstraint",
		val,
	)
}

func (j *jsiiProxy_Instance)SetId(val *string) {
	if err := j.validateSetIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"id",
		val,
	)
}

func (j *jsiiProxy_Instance)SetProps(val *InstanceProps) {
	if err := j.validateSetPropsParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"props",
		val,
	)
}

func (j *jsiiProxy_Instance)SetResource(val alicloudroscdkcore.RosResource) {
	_jsii_.Set(
		j,
		"resource",
		val,
	)
}

func (j *jsiiProxy_Instance)SetScope(val alicloudroscdkcore.Construct) {
	if err := j.validateSetScopeParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"scope",
		val,
	)
}

// Return whether the given object is a Construct.
func Instance_IsConstruct(x interface{}) *bool {
	_init_.Initialize()

	if err := validateInstance_IsConstructParameters(x); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-mongodb.datasource.Instance",
		"isConstruct",
		[]interface{}{x},
		&returns,
	)

	return returns
}

func (i *jsiiProxy_Instance) AddCondition(condition alicloudroscdkcore.RosCondition) {
	if err := i.validateAddConditionParameters(condition); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		i,
		"addCondition",
		[]interface{}{condition},
	)
}

func (i *jsiiProxy_Instance) AddCount(count interface{}) {
	if err := i.validateAddCountParameters(count); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		i,
		"addCount",
		[]interface{}{count},
	)
}

func (i *jsiiProxy_Instance) AddDependency(resource alicloudroscdkcore.Resource) {
	if err := i.validateAddDependencyParameters(resource); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		i,
		"addDependency",
		[]interface{}{resource},
	)
}

func (i *jsiiProxy_Instance) AddResourceDesc(desc *string) {
	if err := i.validateAddResourceDescParameters(desc); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		i,
		"addResourceDesc",
		[]interface{}{desc},
	)
}

func (i *jsiiProxy_Instance) ApplyRemovalPolicy(policy alicloudroscdkcore.RemovalPolicy) {
	if err := i.validateApplyRemovalPolicyParameters(policy); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		i,
		"applyRemovalPolicy",
		[]interface{}{policy},
	)
}

func (i *jsiiProxy_Instance) GeneratePhysicalName() *string {
	var returns *string

	_jsii_.Invoke(
		i,
		"generatePhysicalName",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (i *jsiiProxy_Instance) GetAtt(name *string) alicloudroscdkcore.IResolvable {
	if err := i.validateGetAttParameters(name); err != nil {
		panic(err)
	}
	var returns alicloudroscdkcore.IResolvable

	_jsii_.Invoke(
		i,
		"getAtt",
		[]interface{}{name},
		&returns,
	)

	return returns
}

func (i *jsiiProxy_Instance) OnPrepare() {
	_jsii_.InvokeVoid(
		i,
		"onPrepare",
		nil, // no parameters
	)
}

func (i *jsiiProxy_Instance) OnSynthesize(session constructs.ISynthesisSession) {
	if err := i.validateOnSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		i,
		"onSynthesize",
		[]interface{}{session},
	)
}

func (i *jsiiProxy_Instance) OnValidate() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		i,
		"onValidate",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (i *jsiiProxy_Instance) Prepare() {
	_jsii_.InvokeVoid(
		i,
		"prepare",
		nil, // no parameters
	)
}

func (i *jsiiProxy_Instance) SetMetadata(key *string, value interface{}) {
	if err := i.validateSetMetadataParameters(key, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		i,
		"setMetadata",
		[]interface{}{key, value},
	)
}

func (i *jsiiProxy_Instance) Synthesize(session alicloudroscdkcore.ISynthesisSession) {
	if err := i.validateSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		i,
		"synthesize",
		[]interface{}{session},
	)
}

func (i *jsiiProxy_Instance) ToString() *string {
	var returns *string

	_jsii_.Invoke(
		i,
		"toString",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (i *jsiiProxy_Instance) Validate() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		i,
		"validate",
		nil, // no parameters
		&returns,
	)

	return returns
}

