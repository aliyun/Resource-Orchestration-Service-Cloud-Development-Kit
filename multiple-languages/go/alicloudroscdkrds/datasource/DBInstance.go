package datasource

import (
	_init_ "github.com/alibabacloud-go/ros-cdk/alicloudroscdkrds/jsii"
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkrds/datasource/internal"
	"github.com/aws/constructs-go/constructs/v3"
)

// This class encapsulates and extends the ROS resource type `DATASOURCE::RDS::DBInstance`.
type DBInstance interface {
	alicloudroscdkcore.Resource
	IDBInstance
	// Attribute AccountMaxQuantity: The maximum number of accounts that can be created on the instance.
	AttrAccountMaxQuantity() interface{}
	// Attribute AdvancedFeatures: The advanced features that are enabled for the instance.
	//
	// If multiple advanced features are enabled, the advanced features are separated by commas (,). This parameter is available only to instances that run SQL Server. Valid values:
	// LinkedServer
	// DistributeTransaction.
	AttrAdvancedFeatures() interface{}
	// Attribute AutoUpgradeMinorVersion: The method that is used to update the minor engine version of the instance.
	//
	// Valid values:
	// Auto: automatic update.
	// Manual: manual update. The minor engine version of the instance is forcefully updated only when the in-use minor engine version is phased out.
	AttrAutoUpgradeMinorVersion() interface{}
	// Attribute AvailabilityValue: The availability status of the instance in percentage.
	AttrAvailabilityValue() interface{}
	// Attribute BabelfishConfig: The configuration of the Babelfish feature for the ApsaraDB RDS for PostgreSQL instance.
	AttrBabelfishConfig() interface{}
	// Attribute Category: The RDS edition of the instance.
	//
	// Valid values:
	// Basic: RDS Basic Edition
	// HighAvailability: RDS High-availability Edition
	// cluster: RDS Cluster Edition for ApsaraDB RDS for MySQL
	// AlwaysOn: RDS Cluster Edition for ApsaraDB RDS for SQL Server
	// Finance: RDS Enterprise Edition
	// Serverless_basic: RDS Basic Edition for serverless instances.
	AttrCategory() interface{}
	// Attribute Collation: The character set collation of the instance.
	AttrCollation() interface{}
	// Attribute ConnectionMode: The connection mode of the instance.
	//
	// Valid values:
	// Standard: standard mode
	// Safe: database proxy mode.
	AttrConnectionMode() interface{}
	// Attribute ConnectionString: The internal endpoint of the instance.
	AttrConnectionString() interface{}
	// Attribute ConsoleVersion: The type of the proxy that is used by the instance.
	//
	// Valid values:
	// 1: shared proxy
	// 2: dedicated proxy.
	AttrConsoleVersion() interface{}
	// Attribute CreationTime: The creation time.
	//
	// The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
	AttrCreationTime() interface{}
	// Attribute CurrentKernelVersion: The minor engine version of the instance.
	AttrCurrentKernelVersion() interface{}
	// Attribute DBClusterNodes: The information about the node in the cluster.
	AttrDbClusterNodes() interface{}
	// Attribute DBInstanceClass: The instance type of the instance.
	AttrDbInstanceClass() interface{}
	// Attribute DBInstanceClassType: The instance family to which the instance belongs.
	//
	// Valid values:
	// s: shared instance family
	// x: general-purpose instance family
	// d: dedicated instance family
	// h: dedicated host instance family.
	AttrDbInstanceClassType() interface{}
	// Attribute DBInstanceCPU: The number of CPU cores.
	AttrDbInstanceCpu() interface{}
	// Attribute DBInstanceDescription: The description of the instance.
	AttrDbInstanceDescription() interface{}
	// Attribute DBInstanceDiskUsed: The disk usage of the instance.
	AttrDbInstanceDiskUsed() interface{}
	// Attribute DBInstanceId: The instance ID.
	AttrDbInstanceId() interface{}
	// Attribute DBInstanceMemory: The memory capacity of the instance.
	//
	// Unit: MB.
	AttrDbInstanceMemory() interface{}
	// Attribute DBInstanceNetType: The type of the network over which the instance is connected.
	//
	// Valid values:
	// Internet: Internet
	// Intranet: internal network.
	AttrDbInstanceNetType() interface{}
	// Attribute DBInstanceStatus: The status of the instance.
	AttrDbInstanceStatus() interface{}
	// Attribute DBInstanceStorage: The storage capacity of the instance.
	//
	// Unit: GB.
	AttrDbInstanceStorage() interface{}
	// Attribute DBInstanceStorageType: The storage type of the instance.
	//
	// Valid values:
	// local_ssd and ephemeral_ssd: local SSD
	// cloud_ssd: standard SSD
	// cloud_essd: enhanced SSD (ESSD).
	AttrDbInstanceStorageType() interface{}
	// Attribute DBInstanceType: The type of the instance.
	//
	// Valid values:
	// Primary: primary instance
	// Readonly: read-only instance
	// Guard: disaster recovery instance
	// Temp: temporary instance.
	AttrDbInstanceType() interface{}
	// Attribute DBMaxQuantity: The maximum number of databases that can be created on the instance.
	AttrDbMaxQuantity() interface{}
	// Attribute DedicatedHostGroupId: The ID of the dedicated cluster.
	AttrDedicatedHostGroupId() interface{}
	// Attribute DeletionProtection: Indicates whether the release protection feature is enabled.
	//
	// Valid values:
	// true
	// false.
	AttrDeletionProtection() interface{}
	// Attribute Engine: The database engine of the instance.
	//
	// Valid values:
	// MySQL
	// PostgreSQL
	// SQLServer
	// MariaDB.
	AttrEngine() interface{}
	// Attribute EngineVersion: The database engine version.
	AttrEngineVersion() interface{}
	// Attribute ExpireTime: The expiration time.
	//
	// The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
	// Note: Pay-as-you-go instances never expire.
	AttrExpireTime() interface{}
	// Attribute Extra: The extended information of the instance.
	AttrExtra() interface{}
	// Attribute GeneralGroupName: The name of the dedicated cluster to which the instance belongs.
	//
	// This parameter is returned only when the instance is created in an ApsaraDB MyBase cluster that runs MySQL on Standard Edition.
	AttrGeneralGroupName() interface{}
	// Attribute GuardDBInstanceId: The ID of the disaster recovery instance that is attached to the instance.
	AttrGuardDbInstanceId() interface{}
	// Attribute IncrementSourceDBInstanceId: The ID of the instance from which incremental data comes.
	//
	// The incremental data of a disaster recovery instance or read-only instance comes from its primary instance. If this parameter is not returned, the instance is a primary instance.
	AttrIncrementSourceDbInstanceId() interface{}
	// Attribute InstanceNetworkType: The network type of the instance.
	//
	// Valid values:
	// Classic
	// VPC.
	AttrInstanceNetworkType() interface{}
	// Attribute InstructionSetArch: The architecture type of the instance.
	//
	// Valid values:
	// x86
	// arm.
	AttrInstructionSetArch() interface{}
	// Attribute IPType: The type of the IP address.
	//
	// Only IPv4 addresses are supported.
	AttrIpType() interface{}
	// Attribute LatestKernelVersion: The latest minor engine version that is supported by the instance.
	AttrLatestKernelVersion() interface{}
	// Attribute LockMode: The lock mode of the instance.
	//
	// Valid values:
	// Unlock: The instance is not locked.
	// ManualLock: The instance is manually locked.
	// LockByExpiration: The instance is automatically locked due to instance expiration.
	// LockByRestoration: The instance is automatically locked due to instance restoration.
	// LockByDiskQuota: The instance is automatically locked due to exhausted storage space.
	// LockReadInstanceByDiskQuota: The instance is a read-only instance and is automatically locked due to exhausted storage.
	AttrLockMode() interface{}
	// Attribute LockReason: The reason why the instance was locked.
	AttrLockReason() interface{}
	// Attribute MaintainTime: The maintenance window of the instance.
	//
	// The time is displayed in UTC. Take note that the maintenance window displayed in the ApsaraDB RDS console is equal to the value of this parameter plus 8 hours.
	AttrMaintainTime() interface{}
	// Attribute MasterInstanceId: The ID of the primary instance.
	//
	// Note: If this parameter is not returned, the instance is the primary instance.
	AttrMasterInstanceId() interface{}
	// Attribute MasterZone: The zone ID of the primary instance.
	AttrMasterZone() interface{}
	// Attribute MaxConnections: The maximum number of concurrent connections.
	AttrMaxConnections() interface{}
	// Attribute MaxIOMBPS: The maximum I/O throughput.
	//
	// Unit: MB/s.
	AttrMaxIombps() interface{}
	// Attribute MaxIOPS: The maximum number of I/O requests per second.
	AttrMaxIops() interface{}
	// Attribute PayType: The billing method of the instance.
	//
	// Valid values:
	// Postpaid: pay-as-you-go
	// Prepaid: subscription.
	AttrPayType() interface{}
	// Attribute PGBouncerEnabled: Indicates whether PgBouncer is enabled.
	AttrPgBouncerEnabled() interface{}
	// Attribute Port: The port that is used to connect to the instance over an internal network.
	AttrPort() interface{}
	// Attribute ProxyType: The type of the proxy that is supported by the instance.
	//
	// Valid values:
	// 0: The instance does not support database proxies.
	// 1: The instance supports shared proxies, with which the instance runs in multi-tenant mode.
	// 2: The instance supports dedicated proxies, with which the instance runs in single-tenant mode.
	AttrProxyType() interface{}
	// Attribute ReadOnlyDBInstanceIds: The IDs of the read-only instances that are attached to the primary instance.
	AttrReadOnlyDbInstanceIds() interface{}
	// Attribute ReadonlyInstanceSQLDelayedTime: The latency at which the system replicates data to read-only instances.
	//
	// The system replicates data from the primary instance to the read-only instances at the latency that is specified by the ReadonlyInstanceSQLDelayedTime parameter. Unit: seconds.
	AttrReadonlyInstanceSqlDelayedTime() interface{}
	// Attribute ResourceGroupId: The resource group ID.
	AttrResourceGroupId() interface{}
	// Attribute SecurityIPList: The IP addresses in the IP address whitelist.
	AttrSecurityIpList() interface{}
	// Attribute SecurityIPMode: The whitelist mode of the instance.
	//
	// Valid values:
	// normal: standard whitelist mode
	// safety: enhanced whitelist mode.
	AttrSecurityIpMode() interface{}
	// Attribute ServerlessConfig: The settings of the serverless instance.
	AttrServerlessConfig() interface{}
	// Attribute SlaveZones: The information about the zone of the secondary instance.
	AttrSlaveZones() interface{}
	// Attribute SuperPermissionMode: Indicates whether the instance supports superuser accounts, such as the system administrator (SA) account, the Active Directory (AD) account, and the host account.
	//
	// Enable
	// Disabled.
	AttrSuperPermissionMode() interface{}
	// Attribute TempDBInstanceId: The ID of the temporary instance that is attached to the instance.
	AttrTempDbInstanceId() interface{}
	// Attribute TimeZone: The time zone of the instance.
	AttrTimeZone() interface{}
	// Attribute Tips: The information about the exception that is detected on the instance.
	//
	// This parameter is returned only when the instance is created in an ApsaraDB MyBase cluster that runs MySQL on Standard Edition.
	AttrTips() interface{}
	// Attribute TipsLevel: The severity level of the exception that is detected on the instance.
	//
	// This parameter is returned only when the instance is created in an ApsaraDB MyBase cluster that runs MySQL on Standard Edition. Valid values:
	// 1: The instance is normal.
	// 2: The specifications of the read-only instances do not match the specifications of the primary instance. You must adjust the specifications of these instances based on your business requirements.
	AttrTipsLevel() interface{}
	// Attribute VpcCloudInstanceId: The VPC ID.
	AttrVpcCloudInstanceId() interface{}
	// Attribute VpcId: The virtual private cloud (VPC) ID of the instance.
	AttrVpcId() interface{}
	// Attribute VSwitchId: The vSwitch ID.
	AttrVSwitchId() interface{}
	// Attribute ZoneId: The zone ID.
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
	Env() alicloudroscdkcore.IResourceEnvironment
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
	Props() *DBInstanceProps
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

// The jsii proxy struct for DBInstance
type jsiiProxy_DBInstance struct {
	internal.Type__alicloudroscdkcoreResource
	jsiiProxy_IDBInstance
}

func (j *jsiiProxy_DBInstance) AttrAccountMaxQuantity() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAccountMaxQuantity",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_DBInstance) AttrAdvancedFeatures() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAdvancedFeatures",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_DBInstance) AttrAutoUpgradeMinorVersion() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAutoUpgradeMinorVersion",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_DBInstance) AttrAvailabilityValue() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAvailabilityValue",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_DBInstance) AttrBabelfishConfig() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrBabelfishConfig",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_DBInstance) AttrCategory() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCategory",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_DBInstance) AttrCollation() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCollation",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_DBInstance) AttrConnectionMode() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrConnectionMode",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_DBInstance) AttrConnectionString() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrConnectionString",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_DBInstance) AttrConsoleVersion() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrConsoleVersion",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_DBInstance) AttrCreationTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCreationTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_DBInstance) AttrCurrentKernelVersion() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCurrentKernelVersion",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_DBInstance) AttrDbClusterNodes() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDbClusterNodes",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_DBInstance) AttrDbInstanceClass() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDbInstanceClass",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_DBInstance) AttrDbInstanceClassType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDbInstanceClassType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_DBInstance) AttrDbInstanceCpu() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDbInstanceCpu",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_DBInstance) AttrDbInstanceDescription() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDbInstanceDescription",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_DBInstance) AttrDbInstanceDiskUsed() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDbInstanceDiskUsed",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_DBInstance) AttrDbInstanceId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDbInstanceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_DBInstance) AttrDbInstanceMemory() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDbInstanceMemory",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_DBInstance) AttrDbInstanceNetType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDbInstanceNetType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_DBInstance) AttrDbInstanceStatus() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDbInstanceStatus",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_DBInstance) AttrDbInstanceStorage() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDbInstanceStorage",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_DBInstance) AttrDbInstanceStorageType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDbInstanceStorageType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_DBInstance) AttrDbInstanceType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDbInstanceType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_DBInstance) AttrDbMaxQuantity() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDbMaxQuantity",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_DBInstance) AttrDedicatedHostGroupId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDedicatedHostGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_DBInstance) AttrDeletionProtection() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDeletionProtection",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_DBInstance) AttrEngine() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrEngine",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_DBInstance) AttrEngineVersion() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrEngineVersion",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_DBInstance) AttrExpireTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrExpireTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_DBInstance) AttrExtra() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrExtra",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_DBInstance) AttrGeneralGroupName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrGeneralGroupName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_DBInstance) AttrGuardDbInstanceId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrGuardDbInstanceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_DBInstance) AttrIncrementSourceDbInstanceId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrIncrementSourceDbInstanceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_DBInstance) AttrInstanceNetworkType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrInstanceNetworkType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_DBInstance) AttrInstructionSetArch() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrInstructionSetArch",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_DBInstance) AttrIpType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrIpType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_DBInstance) AttrLatestKernelVersion() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrLatestKernelVersion",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_DBInstance) AttrLockMode() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrLockMode",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_DBInstance) AttrLockReason() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrLockReason",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_DBInstance) AttrMaintainTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrMaintainTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_DBInstance) AttrMasterInstanceId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrMasterInstanceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_DBInstance) AttrMasterZone() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrMasterZone",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_DBInstance) AttrMaxConnections() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrMaxConnections",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_DBInstance) AttrMaxIombps() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrMaxIombps",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_DBInstance) AttrMaxIops() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrMaxIops",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_DBInstance) AttrPayType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPayType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_DBInstance) AttrPgBouncerEnabled() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPgBouncerEnabled",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_DBInstance) AttrPort() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPort",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_DBInstance) AttrProxyType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrProxyType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_DBInstance) AttrReadOnlyDbInstanceIds() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrReadOnlyDbInstanceIds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_DBInstance) AttrReadonlyInstanceSqlDelayedTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrReadonlyInstanceSqlDelayedTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_DBInstance) AttrResourceGroupId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrResourceGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_DBInstance) AttrSecurityIpList() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSecurityIpList",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_DBInstance) AttrSecurityIpMode() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSecurityIpMode",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_DBInstance) AttrServerlessConfig() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrServerlessConfig",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_DBInstance) AttrSlaveZones() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSlaveZones",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_DBInstance) AttrSuperPermissionMode() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSuperPermissionMode",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_DBInstance) AttrTempDbInstanceId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTempDbInstanceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_DBInstance) AttrTimeZone() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTimeZone",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_DBInstance) AttrTips() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTips",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_DBInstance) AttrTipsLevel() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTipsLevel",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_DBInstance) AttrVpcCloudInstanceId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrVpcCloudInstanceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_DBInstance) AttrVpcId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrVpcId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_DBInstance) AttrVSwitchId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrVSwitchId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_DBInstance) AttrZoneId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrZoneId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_DBInstance) EnableResourcePropertyConstraint() *bool {
	var returns *bool
	_jsii_.Get(
		j,
		"enableResourcePropertyConstraint",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_DBInstance) Env() alicloudroscdkcore.IResourceEnvironment {
	var returns alicloudroscdkcore.IResourceEnvironment
	_jsii_.Get(
		j,
		"env",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_DBInstance) Id() *string {
	var returns *string
	_jsii_.Get(
		j,
		"id",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_DBInstance) Node() alicloudroscdkcore.ConstructNode {
	var returns alicloudroscdkcore.ConstructNode
	_jsii_.Get(
		j,
		"node",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_DBInstance) PhysicalName() *string {
	var returns *string
	_jsii_.Get(
		j,
		"physicalName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_DBInstance) Props() *DBInstanceProps {
	var returns *DBInstanceProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_DBInstance) Ref() *string {
	var returns *string
	_jsii_.Get(
		j,
		"ref",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_DBInstance) Resource() alicloudroscdkcore.RosResource {
	var returns alicloudroscdkcore.RosResource
	_jsii_.Get(
		j,
		"resource",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_DBInstance) Scope() alicloudroscdkcore.Construct {
	var returns alicloudroscdkcore.Construct
	_jsii_.Get(
		j,
		"scope",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_DBInstance) Stack() alicloudroscdkcore.Stack {
	var returns alicloudroscdkcore.Stack
	_jsii_.Get(
		j,
		"stack",
		&returns,
	)
	return returns
}


// Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
func NewDBInstance(scope alicloudroscdkcore.Construct, id *string, props *DBInstanceProps, enableResourcePropertyConstraint *bool) DBInstance {
	_init_.Initialize()

	if err := validateNewDBInstanceParameters(scope, id, props); err != nil {
		panic(err)
	}
	j := jsiiProxy_DBInstance{}

	_jsii_.Create(
		"@alicloud/ros-cdk-rds.datasource.DBInstance",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		&j,
	)

	return &j
}

// Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
func NewDBInstance_Override(d DBInstance, scope alicloudroscdkcore.Construct, id *string, props *DBInstanceProps, enableResourcePropertyConstraint *bool) {
	_init_.Initialize()

	_jsii_.Create(
		"@alicloud/ros-cdk-rds.datasource.DBInstance",
		[]interface{}{scope, id, props, enableResourcePropertyConstraint},
		d,
	)
}

func (j *jsiiProxy_DBInstance)SetEnableResourcePropertyConstraint(val *bool) {
	if err := j.validateSetEnableResourcePropertyConstraintParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"enableResourcePropertyConstraint",
		val,
	)
}

func (j *jsiiProxy_DBInstance)SetId(val *string) {
	if err := j.validateSetIdParameters(val); err != nil {
		panic(err)
	}
	_jsii_.Set(
		j,
		"id",
		val,
	)
}

func (j *jsiiProxy_DBInstance)SetResource(val alicloudroscdkcore.RosResource) {
	_jsii_.Set(
		j,
		"resource",
		val,
	)
}

func (j *jsiiProxy_DBInstance)SetScope(val alicloudroscdkcore.Construct) {
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
func DBInstance_IsConstruct(x interface{}) *bool {
	_init_.Initialize()

	if err := validateDBInstance_IsConstructParameters(x); err != nil {
		panic(err)
	}
	var returns *bool

	_jsii_.StaticInvoke(
		"@alicloud/ros-cdk-rds.datasource.DBInstance",
		"isConstruct",
		[]interface{}{x},
		&returns,
	)

	return returns
}

func (d *jsiiProxy_DBInstance) AddCondition(condition alicloudroscdkcore.RosCondition) {
	if err := d.validateAddConditionParameters(condition); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		d,
		"addCondition",
		[]interface{}{condition},
	)
}

func (d *jsiiProxy_DBInstance) AddCount(count interface{}) {
	if err := d.validateAddCountParameters(count); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		d,
		"addCount",
		[]interface{}{count},
	)
}

func (d *jsiiProxy_DBInstance) AddDependency(resource alicloudroscdkcore.Resource) {
	if err := d.validateAddDependencyParameters(resource); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		d,
		"addDependency",
		[]interface{}{resource},
	)
}

func (d *jsiiProxy_DBInstance) AddResourceDesc(desc *string) {
	if err := d.validateAddResourceDescParameters(desc); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		d,
		"addResourceDesc",
		[]interface{}{desc},
	)
}

func (d *jsiiProxy_DBInstance) ApplyRemovalPolicy(policy alicloudroscdkcore.RemovalPolicy) {
	if err := d.validateApplyRemovalPolicyParameters(policy); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		d,
		"applyRemovalPolicy",
		[]interface{}{policy},
	)
}

func (d *jsiiProxy_DBInstance) FetchCondition() alicloudroscdkcore.RosCondition {
	var returns alicloudroscdkcore.RosCondition

	_jsii_.Invoke(
		d,
		"fetchCondition",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (d *jsiiProxy_DBInstance) FetchDependency() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		d,
		"fetchDependency",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (d *jsiiProxy_DBInstance) FetchResourceDesc() *string {
	var returns *string

	_jsii_.Invoke(
		d,
		"fetchResourceDesc",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (d *jsiiProxy_DBInstance) GeneratePhysicalName() *string {
	var returns *string

	_jsii_.Invoke(
		d,
		"generatePhysicalName",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (d *jsiiProxy_DBInstance) GetAtt(name *string) alicloudroscdkcore.IResolvable {
	if err := d.validateGetAttParameters(name); err != nil {
		panic(err)
	}
	var returns alicloudroscdkcore.IResolvable

	_jsii_.Invoke(
		d,
		"getAtt",
		[]interface{}{name},
		&returns,
	)

	return returns
}

func (d *jsiiProxy_DBInstance) OnPrepare() {
	_jsii_.InvokeVoid(
		d,
		"onPrepare",
		nil, // no parameters
	)
}

func (d *jsiiProxy_DBInstance) OnSynthesize(session constructs.ISynthesisSession) {
	if err := d.validateOnSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		d,
		"onSynthesize",
		[]interface{}{session},
	)
}

func (d *jsiiProxy_DBInstance) OnValidate() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		d,
		"onValidate",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (d *jsiiProxy_DBInstance) Prepare() {
	_jsii_.InvokeVoid(
		d,
		"prepare",
		nil, // no parameters
	)
}

func (d *jsiiProxy_DBInstance) SetMetadata(key *string, value interface{}) {
	if err := d.validateSetMetadataParameters(key, value); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		d,
		"setMetadata",
		[]interface{}{key, value},
	)
}

func (d *jsiiProxy_DBInstance) Synthesize(session alicloudroscdkcore.ISynthesisSession) {
	if err := d.validateSynthesizeParameters(session); err != nil {
		panic(err)
	}
	_jsii_.InvokeVoid(
		d,
		"synthesize",
		[]interface{}{session},
	)
}

func (d *jsiiProxy_DBInstance) ToString() *string {
	var returns *string

	_jsii_.Invoke(
		d,
		"toString",
		nil, // no parameters
		&returns,
	)

	return returns
}

func (d *jsiiProxy_DBInstance) Validate() *[]*string {
	var returns *[]*string

	_jsii_.Invoke(
		d,
		"validate",
		nil, // no parameters
		&returns,
	)

	return returns
}

