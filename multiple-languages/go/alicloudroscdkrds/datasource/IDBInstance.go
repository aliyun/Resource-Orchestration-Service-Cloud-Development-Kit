package datasource

import (
	_jsii_ "github.com/aws/jsii-runtime-go/runtime"

	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkcore"
	"github.com/alibabacloud-go/ros-cdk/alicloudroscdkrds/datasource/internal"
)

// Represents a `DBInstance`.
type IDBInstance interface {
	alicloudroscdkcore.IResource
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
	Props() *DBInstanceProps
}

// The jsii proxy for IDBInstance
type jsiiProxy_IDBInstance struct {
	internal.Type__alicloudroscdkcoreIResource
}

func (j *jsiiProxy_IDBInstance) AttrAccountMaxQuantity() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAccountMaxQuantity",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDBInstance) AttrAdvancedFeatures() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAdvancedFeatures",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDBInstance) AttrAutoUpgradeMinorVersion() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAutoUpgradeMinorVersion",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDBInstance) AttrAvailabilityValue() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrAvailabilityValue",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDBInstance) AttrBabelfishConfig() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrBabelfishConfig",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDBInstance) AttrCategory() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCategory",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDBInstance) AttrCollation() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCollation",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDBInstance) AttrConnectionMode() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrConnectionMode",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDBInstance) AttrConnectionString() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrConnectionString",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDBInstance) AttrConsoleVersion() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrConsoleVersion",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDBInstance) AttrCreationTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCreationTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDBInstance) AttrCurrentKernelVersion() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrCurrentKernelVersion",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDBInstance) AttrDbClusterNodes() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDbClusterNodes",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDBInstance) AttrDbInstanceClass() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDbInstanceClass",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDBInstance) AttrDbInstanceClassType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDbInstanceClassType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDBInstance) AttrDbInstanceCpu() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDbInstanceCpu",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDBInstance) AttrDbInstanceDescription() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDbInstanceDescription",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDBInstance) AttrDbInstanceDiskUsed() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDbInstanceDiskUsed",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDBInstance) AttrDbInstanceId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDbInstanceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDBInstance) AttrDbInstanceMemory() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDbInstanceMemory",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDBInstance) AttrDbInstanceNetType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDbInstanceNetType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDBInstance) AttrDbInstanceStatus() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDbInstanceStatus",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDBInstance) AttrDbInstanceStorage() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDbInstanceStorage",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDBInstance) AttrDbInstanceStorageType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDbInstanceStorageType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDBInstance) AttrDbInstanceType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDbInstanceType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDBInstance) AttrDbMaxQuantity() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDbMaxQuantity",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDBInstance) AttrDedicatedHostGroupId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDedicatedHostGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDBInstance) AttrDeletionProtection() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrDeletionProtection",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDBInstance) AttrEngine() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrEngine",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDBInstance) AttrEngineVersion() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrEngineVersion",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDBInstance) AttrExpireTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrExpireTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDBInstance) AttrExtra() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrExtra",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDBInstance) AttrGeneralGroupName() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrGeneralGroupName",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDBInstance) AttrGuardDbInstanceId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrGuardDbInstanceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDBInstance) AttrIncrementSourceDbInstanceId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrIncrementSourceDbInstanceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDBInstance) AttrInstanceNetworkType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrInstanceNetworkType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDBInstance) AttrInstructionSetArch() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrInstructionSetArch",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDBInstance) AttrIpType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrIpType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDBInstance) AttrLatestKernelVersion() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrLatestKernelVersion",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDBInstance) AttrLockMode() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrLockMode",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDBInstance) AttrLockReason() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrLockReason",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDBInstance) AttrMaintainTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrMaintainTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDBInstance) AttrMasterInstanceId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrMasterInstanceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDBInstance) AttrMasterZone() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrMasterZone",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDBInstance) AttrMaxConnections() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrMaxConnections",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDBInstance) AttrMaxIombps() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrMaxIombps",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDBInstance) AttrMaxIops() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrMaxIops",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDBInstance) AttrPayType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPayType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDBInstance) AttrPgBouncerEnabled() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPgBouncerEnabled",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDBInstance) AttrPort() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrPort",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDBInstance) AttrProxyType() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrProxyType",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDBInstance) AttrReadOnlyDbInstanceIds() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrReadOnlyDbInstanceIds",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDBInstance) AttrReadonlyInstanceSqlDelayedTime() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrReadonlyInstanceSqlDelayedTime",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDBInstance) AttrResourceGroupId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrResourceGroupId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDBInstance) AttrSecurityIpList() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSecurityIpList",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDBInstance) AttrSecurityIpMode() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSecurityIpMode",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDBInstance) AttrServerlessConfig() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrServerlessConfig",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDBInstance) AttrSlaveZones() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSlaveZones",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDBInstance) AttrSuperPermissionMode() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrSuperPermissionMode",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDBInstance) AttrTempDbInstanceId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTempDbInstanceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDBInstance) AttrTimeZone() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTimeZone",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDBInstance) AttrTips() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTips",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDBInstance) AttrTipsLevel() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrTipsLevel",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDBInstance) AttrVpcCloudInstanceId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrVpcCloudInstanceId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDBInstance) AttrVpcId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrVpcId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDBInstance) AttrVSwitchId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrVSwitchId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDBInstance) AttrZoneId() interface{} {
	var returns interface{}
	_jsii_.Get(
		j,
		"attrZoneId",
		&returns,
	)
	return returns
}

func (j *jsiiProxy_IDBInstance) Props() *DBInstanceProps {
	var returns *DBInstanceProps
	_jsii_.Get(
		j,
		"props",
		&returns,
	)
	return returns
}

