package datasource

import (
	_init_ "github.com/alibabacloud-go/ros-cdk/alicloudroscdkmongodb/jsii"
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkmongodb/datasource/internal"
	"github.com/aws/constructs-go/constructs/v3"
)

// This class encapsulates and extends the ROS resource type `DATASOURCE::MONGODB::Instance`, which is used to query the information about an ApsaraDB for MongoDB instance.
type Instance interface {
	alicloudroscdkcore.Resource
	IInstance
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
	EnableResourcePropertyConstraint() *bool
	SetEnableResourcePropertyConstraint(val *bool)
	// The environment this resource belongs to.
	//
	// For resources that are created and managed by the CDK
	// (generally, those created by creating new class instances like Role, Bucket, etc.),
	// this is always the same as the environment of the stack they belong to;
	// however, for imported resources
	// (those obtained from static methods like fromRoleArn, fromBucketName, etc.),
	// that might be different than the stack they were imported into.
	Env() *alicloudroscdkcore.ResourceEnvironment
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
	FetchCondition() alicloudroscdkcore.RosCondition
	FetchDependency() *[]*string
	FetchResourceDesc() *string
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
	jsiiProxy_IInstance
}

func (j *jsiiProxy_Instance) AttrAccountDescription() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAccountDescription",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) AttrAccountName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAccountName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) AttrAutoRenew() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAutoRenew",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) AttrAutoRenewDuration() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAutoRenewDuration",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) AttrBackupInterval() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrBackupInterval",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) AttrBackupRetentionPeriod() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrBackupRetentionPeriod",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) AttrCreateTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCreateTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) AttrDbInstanceClass() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDbInstanceClass",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) AttrDbInstanceDescription() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDbInstanceDescription",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) AttrDbInstanceReleaseProtection() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDbInstanceReleaseProtection",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) AttrDbInstanceStorage() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDbInstanceStorage",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) AttrDbInstanceType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDbInstanceType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) AttrEnableBackupLog() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrEnableBackupLog",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) AttrEngine() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrEngine",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) AttrEngineVersion() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrEngineVersion",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) AttrExpireTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrExpireTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) AttrHiddenZoneId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrHiddenZoneId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) AttrInstanceId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrInstanceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) AttrKindCode() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrKindCode",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) AttrLastDowngradeTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrLastDowngradeTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) AttrLockMode() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrLockMode",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) AttrLogBackupRetentionPeriod() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrLogBackupRetentionPeriod",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) AttrMaintainEndTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrMaintainEndTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) AttrMaintainStartTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrMaintainStartTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) AttrMongosList() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrMongosList",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) AttrNetworkAddresses() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrNetworkAddresses",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) AttrNetworkType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrNetworkType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) AttrParameters() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrParameters",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) AttrPaymentType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPaymentType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) AttrPreferredBackupPeriod() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPreferredBackupPeriod",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) AttrPreferredBackupTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPreferredBackupTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) AttrProtocolType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrProtocolType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) AttrReadonlyReplicas() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrReadonlyReplicas",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) AttrReplicaSetsConnections() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrReplicaSetsConnections",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) AttrReplicationFactor() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrReplicationFactor",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) AttrResourceGroupId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrResourceGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) AttrSecondaryZoneId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSecondaryZoneId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) AttrSecurityGroupId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSecurityGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) AttrSecurityIpList() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSecurityIpList",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) AttrSecurityIps() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSecurityIps",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) AttrShardList() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrShardList",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) AttrSnapshotBackupType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSnapshotBackupType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) AttrSslExpiredTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSslExpiredTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) AttrSslStatus() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSslStatus",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) AttrStorageEngine() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrStorageEngine",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) AttrTags() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTags",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) AttrTdeStatus() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTdeStatus",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) AttrVpcAuthMode() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrVpcAuthMode",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) AttrVpcId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrVpcId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) AttrVSwitchId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrVSwitchId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_Instance) AttrZoneId() interface{} {
	var returns interface{}
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

func (j *jsiiProxy_Instance) Env() *alicloudroscdkcore.ResourceEnvironment {
	var returns *alicloudroscdkcore.ResourceEnvironment
	_jsii_.Get(
		j,
		"env",
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

func (i *jsiiProxy_Instance) FetchCondition() alicloudroscdkcore.RosCondition {
	var returns alicloudroscdkcore.RosCondition

	_jsii_.Invoke(
		i,
		"fetchCondition",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (i *jsiiProxy_Instance) FetchDependency() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		i,
		"fetchDependency",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (i *jsiiProxy_Instance) FetchResourceDesc() *string {
	var returns *string

	_jsii_.Invoke(
		i,
		"fetchResourceDesc",
		nil, // no parameters
		&returns,
	)

	return returns
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

