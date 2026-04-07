import * as ros from '@alicloud/ros-cdk-core';
import { RosDBInstance } from './rds.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosDBInstance as DBInstanceProperty };

/**
 * Properties for defining a `DBInstance`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-rds-dbinstance
 */
export interface DBInstanceProps {

    /**
     * Property dbInstanceId: The ID of the instance.
     */
    readonly dbInstanceId?: string | ros.IResolvable;

    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}

/**
 * Represents a `DBInstance`.
 */
export interface IDBInstance extends ros.IResource {
    readonly props: DBInstanceProps;

    /**
     * Attribute AccountMaxQuantity: The maximum number of accounts that can be created on the instance.
     */
    readonly attrAccountMaxQuantity: ros.IResolvable | string;

    /**
     * Attribute AdvancedFeatures: The advanced features that are enabled for the instance. If multiple advanced features are enabled, the advanced features are separated by commas (,). This parameter is available only to instances that run SQL Server. Valid values:
LinkedServer
DistributeTransaction
     */
    readonly attrAdvancedFeatures: ros.IResolvable | string;

    /**
     * Attribute AutoUpgradeMinorVersion: The method that is used to update the minor engine version of the instance. Valid values:
Auto: automatic update.
Manual: manual update. The minor engine version of the instance is forcefully updated only when the in-use minor engine version is phased out.
     */
    readonly attrAutoUpgradeMinorVersion: ros.IResolvable | string;

    /**
     * Attribute AvailabilityValue: The availability status of the instance in percentage.
     */
    readonly attrAvailabilityValue: ros.IResolvable | string;

    /**
     * Attribute BabelfishConfig: The configuration of the Babelfish feature for the ApsaraDB RDS for PostgreSQL instance.
     */
    readonly attrBabelfishConfig: ros.IResolvable | string;

    /**
     * Attribute Category: The RDS edition of the instance. Valid values:
Basic: RDS Basic Edition
HighAvailability: RDS High-availability Edition
cluster: RDS Cluster Edition for ApsaraDB RDS for MySQL
AlwaysOn: RDS Cluster Edition for ApsaraDB RDS for SQL Server
Finance: RDS Enterprise Edition
Serverless_basic: RDS Basic Edition for serverless instances
     */
    readonly attrCategory: ros.IResolvable | string;

    /**
     * Attribute Collation: The character set collation of the instance.
     */
    readonly attrCollation: ros.IResolvable | string;

    /**
     * Attribute ConnectionMode: The connection mode of the instance. Valid values:
Standard: standard mode
Safe: database proxy mode
     */
    readonly attrConnectionMode: ros.IResolvable | string;

    /**
     * Attribute ConnectionString: The internal endpoint of the instance.
     */
    readonly attrConnectionString: ros.IResolvable | string;

    /**
     * Attribute ConsoleVersion: The type of the proxy that is used by the instance. Valid values:
1: shared proxy
2: dedicated proxy
     */
    readonly attrConsoleVersion: ros.IResolvable | string;

    /**
     * Attribute CreationTime: The creation time. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
     */
    readonly attrCreationTime: ros.IResolvable | string;

    /**
     * Attribute CurrentKernelVersion: The minor engine version of the instance.
     */
    readonly attrCurrentKernelVersion: ros.IResolvable | string;

    /**
     * Attribute DBClusterNodes: The information about the node in the cluster.
     */
    readonly attrDbClusterNodes: ros.IResolvable | string;

    /**
     * Attribute DBInstanceCPU: The number of CPU cores.
     */
    readonly attrDbInstanceCpu: ros.IResolvable | string;

    /**
     * Attribute DBInstanceClass: The instance type of the instance.
     */
    readonly attrDbInstanceClass: ros.IResolvable | string;

    /**
     * Attribute DBInstanceClassType: The instance family to which the instance belongs. Valid values:
s: shared instance family
x: general-purpose instance family
d: dedicated instance family
h: dedicated host instance family
     */
    readonly attrDbInstanceClassType: ros.IResolvable | string;

    /**
     * Attribute DBInstanceDescription: The description of the instance.
     */
    readonly attrDbInstanceDescription: ros.IResolvable | string;

    /**
     * Attribute DBInstanceDiskUsed: The disk usage of the instance.
     */
    readonly attrDbInstanceDiskUsed: ros.IResolvable | string;

    /**
     * Attribute DBInstanceId: The instance ID.
     */
    readonly attrDbInstanceId: ros.IResolvable | string;

    /**
     * Attribute DBInstanceMemory: The memory capacity of the instance. Unit: MB.
     */
    readonly attrDbInstanceMemory: ros.IResolvable | string;

    /**
     * Attribute DBInstanceNetType: The type of the network over which the instance is connected. Valid values:
Internet: Internet
Intranet: internal network
     */
    readonly attrDbInstanceNetType: ros.IResolvable | string;

    /**
     * Attribute DBInstanceStatus: The status of the instance.
     */
    readonly attrDbInstanceStatus: ros.IResolvable | string;

    /**
     * Attribute DBInstanceStorage: The storage capacity of the instance. Unit: GB.
     */
    readonly attrDbInstanceStorage: ros.IResolvable | string;

    /**
     * Attribute DBInstanceStorageType: The storage type of the instance. Valid values:
local_ssd and ephemeral_ssd: local SSD
cloud_ssd: standard SSD
cloud_essd: enhanced SSD (ESSD)
     */
    readonly attrDbInstanceStorageType: ros.IResolvable | string;

    /**
     * Attribute DBInstanceType: The type of the instance. Valid values:
Primary: primary instance
Readonly: read-only instance
Guard: disaster recovery instance
Temp: temporary instance
     */
    readonly attrDbInstanceType: ros.IResolvable | string;

    /**
     * Attribute DBMaxQuantity: The maximum number of databases that can be created on the instance.
     */
    readonly attrDbMaxQuantity: ros.IResolvable | string;

    /**
     * Attribute DedicatedHostGroupId: The ID of the dedicated cluster.
     */
    readonly attrDedicatedHostGroupId: ros.IResolvable | string;

    /**
     * Attribute DeletionProtection: Indicates whether the release protection feature is enabled. Valid values:
true
false
     */
    readonly attrDeletionProtection: ros.IResolvable | string;

    /**
     * Attribute Engine: The database engine of the instance. Valid values:
MySQL
PostgreSQL
SQLServer
MariaDB
     */
    readonly attrEngine: ros.IResolvable | string;

    /**
     * Attribute EngineVersion: The database engine version.
     */
    readonly attrEngineVersion: ros.IResolvable | string;

    /**
     * Attribute ExpireTime: The expiration time. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
Note: Pay-as-you-go instances never expire.
     */
    readonly attrExpireTime: ros.IResolvable | string;

    /**
     * Attribute Extra: The extended information of the instance.
     */
    readonly attrExtra: ros.IResolvable | string;

    /**
     * Attribute GeneralGroupName: The name of the dedicated cluster to which the instance belongs. This parameter is returned only when the instance is created in an ApsaraDB MyBase cluster that runs MySQL on Standard Edition.
     */
    readonly attrGeneralGroupName: ros.IResolvable | string;

    /**
     * Attribute GuardDBInstanceId: The ID of the disaster recovery instance that is attached to the instance.
     */
    readonly attrGuardDbInstanceId: ros.IResolvable | string;

    /**
     * Attribute IPType: The type of the IP address. Only IPv4 addresses are supported.
     */
    readonly attrIpType: ros.IResolvable | string;

    /**
     * Attribute IncrementSourceDBInstanceId: The ID of the instance from which incremental data comes. The incremental data of a disaster recovery instance or read-only instance comes from its primary instance. If this parameter is not returned, the instance is a primary instance.
     */
    readonly attrIncrementSourceDbInstanceId: ros.IResolvable | string;

    /**
     * Attribute InstanceNetworkType: The network type of the instance. Valid values:
Classic
VPC
     */
    readonly attrInstanceNetworkType: ros.IResolvable | string;

    /**
     * Attribute InstructionSetArch: The architecture type of the instance. Valid values:
x86
arm
     */
    readonly attrInstructionSetArch: ros.IResolvable | string;

    /**
     * Attribute LatestKernelVersion: The latest minor engine version that is supported by the instance.
     */
    readonly attrLatestKernelVersion: ros.IResolvable | string;

    /**
     * Attribute LockMode: The lock mode of the instance. Valid values:
Unlock: The instance is not locked.
ManualLock: The instance is manually locked.
LockByExpiration: The instance is automatically locked due to instance expiration.
LockByRestoration: The instance is automatically locked due to instance restoration.
LockByDiskQuota: The instance is automatically locked due to exhausted storage space.
LockReadInstanceByDiskQuota: The instance is a read-only instance and is automatically locked due to exhausted storage.
     */
    readonly attrLockMode: ros.IResolvable | string;

    /**
     * Attribute LockReason: The reason why the instance was locked.
     */
    readonly attrLockReason: ros.IResolvable | string;

    /**
     * Attribute MaintainTime: The maintenance window of the instance. The time is displayed in UTC. Take note that the maintenance window displayed in the ApsaraDB RDS console is equal to the value of this parameter plus 8 hours.
     */
    readonly attrMaintainTime: ros.IResolvable | string;

    /**
     * Attribute MasterInstanceId: The ID of the primary instance.
Note: If this parameter is not returned, the instance is the primary instance.
     */
    readonly attrMasterInstanceId: ros.IResolvable | string;

    /**
     * Attribute MasterZone: The zone ID of the primary instance.
     */
    readonly attrMasterZone: ros.IResolvable | string;

    /**
     * Attribute MaxConnections: The maximum number of concurrent connections.
     */
    readonly attrMaxConnections: ros.IResolvable | string;

    /**
     * Attribute MaxIOMBPS: The maximum I/O throughput. Unit: MB/s.
     */
    readonly attrMaxIombps: ros.IResolvable | string;

    /**
     * Attribute MaxIOPS: The maximum number of I/O requests per second.
     */
    readonly attrMaxIops: ros.IResolvable | string;

    /**
     * Attribute PGBouncerEnabled: Indicates whether PgBouncer is enabled.
     */
    readonly attrPgBouncerEnabled: ros.IResolvable | string;

    /**
     * Attribute PayType: The billing method of the instance. Valid values:
Postpaid: pay-as-you-go
Prepaid: subscription
     */
    readonly attrPayType: ros.IResolvable | string;

    /**
     * Attribute Port: The port that is used to connect to the instance over an internal network.
     */
    readonly attrPort: ros.IResolvable | string;

    /**
     * Attribute ProxyType: The type of the proxy that is supported by the instance. Valid values:
0: The instance does not support database proxies.
1: The instance supports shared proxies, with which the instance runs in multi-tenant mode.
2: The instance supports dedicated proxies, with which the instance runs in single-tenant mode.
     */
    readonly attrProxyType: ros.IResolvable | string;

    /**
     * Attribute ReadOnlyDBInstanceIds: The IDs of the read-only instances that are attached to the primary instance.
     */
    readonly attrReadOnlyDbInstanceIds: ros.IResolvable | string;

    /**
     * Attribute ReadonlyInstanceSQLDelayedTime: The latency at which the system replicates data to read-only instances. The system replicates data from the primary instance to the read-only instances at the latency that is specified by the ReadonlyInstanceSQLDelayedTime parameter. Unit: seconds.
     */
    readonly attrReadonlyInstanceSqlDelayedTime: ros.IResolvable | string;

    /**
     * Attribute ResourceGroupId: The resource group ID.
     */
    readonly attrResourceGroupId: ros.IResolvable | string;

    /**
     * Attribute SecurityIPList: The IP addresses in the IP address whitelist.
     */
    readonly attrSecurityIpList: ros.IResolvable | string;

    /**
     * Attribute SecurityIPMode: The whitelist mode of the instance. Valid values:
normal: standard whitelist mode
safety: enhanced whitelist mode
     */
    readonly attrSecurityIpMode: ros.IResolvable | string;

    /**
     * Attribute ServerlessConfig: The settings of the serverless instance.
     */
    readonly attrServerlessConfig: ros.IResolvable | string;

    /**
     * Attribute SlaveZones: The information about the zone of the secondary instance.
     */
    readonly attrSlaveZones: ros.IResolvable | string;

    /**
     * Attribute SuperPermissionMode: Indicates whether the instance supports superuser accounts, such as the system administrator (SA) account, the Active Directory (AD) account, and the host account.
Enable
Disabled
     */
    readonly attrSuperPermissionMode: ros.IResolvable | string;

    /**
     * Attribute TempDBInstanceId: The ID of the temporary instance that is attached to the instance.
     */
    readonly attrTempDbInstanceId: ros.IResolvable | string;

    /**
     * Attribute TimeZone: The time zone of the instance.
     */
    readonly attrTimeZone: ros.IResolvable | string;

    /**
     * Attribute Tips: The information about the exception that is detected on the instance. This parameter is returned only when the instance is created in an ApsaraDB MyBase cluster that runs MySQL on Standard Edition.
     */
    readonly attrTips: ros.IResolvable | string;

    /**
     * Attribute TipsLevel: The severity level of the exception that is detected on the instance. This parameter is returned only when the instance is created in an ApsaraDB MyBase cluster that runs MySQL on Standard Edition. Valid values:
1: The instance is normal.
2: The specifications of the read-only instances do not match the specifications of the primary instance. You must adjust the specifications of these instances based on your business requirements.
     */
    readonly attrTipsLevel: ros.IResolvable | string;

    /**
     * Attribute VSwitchId: The vSwitch ID.
     */
    readonly attrVSwitchId: ros.IResolvable | string;

    /**
     * Attribute VpcCloudInstanceId: The VPC ID.
     */
    readonly attrVpcCloudInstanceId: ros.IResolvable | string;

    /**
     * Attribute VpcId: The virtual private cloud (VPC) ID of the instance.
     */
    readonly attrVpcId: ros.IResolvable | string;

    /**
     * Attribute ZoneId: The zone ID.
     */
    readonly attrZoneId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::RDS::DBInstance`, which is used to query an ApsaraDB RDS instance.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosDBInstance`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-rds-dbinstance
 */
export class DBInstance extends ros.Resource implements IDBInstance {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: DBInstanceProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute AccountMaxQuantity: The maximum number of accounts that can be created on the instance.
     */
    public readonly attrAccountMaxQuantity: ros.IResolvable | string;

    /**
     * Attribute AdvancedFeatures: The advanced features that are enabled for the instance. If multiple advanced features are enabled, the advanced features are separated by commas (,). This parameter is available only to instances that run SQL Server. Valid values:
LinkedServer
DistributeTransaction
     */
    public readonly attrAdvancedFeatures: ros.IResolvable | string;

    /**
     * Attribute AutoUpgradeMinorVersion: The method that is used to update the minor engine version of the instance. Valid values:
Auto: automatic update.
Manual: manual update. The minor engine version of the instance is forcefully updated only when the in-use minor engine version is phased out.
     */
    public readonly attrAutoUpgradeMinorVersion: ros.IResolvable | string;

    /**
     * Attribute AvailabilityValue: The availability status of the instance in percentage.
     */
    public readonly attrAvailabilityValue: ros.IResolvable | string;

    /**
     * Attribute BabelfishConfig: The configuration of the Babelfish feature for the ApsaraDB RDS for PostgreSQL instance.
     */
    public readonly attrBabelfishConfig: ros.IResolvable | string;

    /**
     * Attribute Category: The RDS edition of the instance. Valid values:
Basic: RDS Basic Edition
HighAvailability: RDS High-availability Edition
cluster: RDS Cluster Edition for ApsaraDB RDS for MySQL
AlwaysOn: RDS Cluster Edition for ApsaraDB RDS for SQL Server
Finance: RDS Enterprise Edition
Serverless_basic: RDS Basic Edition for serverless instances
     */
    public readonly attrCategory: ros.IResolvable | string;

    /**
     * Attribute Collation: The character set collation of the instance.
     */
    public readonly attrCollation: ros.IResolvable | string;

    /**
     * Attribute ConnectionMode: The connection mode of the instance. Valid values:
Standard: standard mode
Safe: database proxy mode
     */
    public readonly attrConnectionMode: ros.IResolvable | string;

    /**
     * Attribute ConnectionString: The internal endpoint of the instance.
     */
    public readonly attrConnectionString: ros.IResolvable | string;

    /**
     * Attribute ConsoleVersion: The type of the proxy that is used by the instance. Valid values:
1: shared proxy
2: dedicated proxy
     */
    public readonly attrConsoleVersion: ros.IResolvable | string;

    /**
     * Attribute CreationTime: The creation time. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
     */
    public readonly attrCreationTime: ros.IResolvable | string;

    /**
     * Attribute CurrentKernelVersion: The minor engine version of the instance.
     */
    public readonly attrCurrentKernelVersion: ros.IResolvable | string;

    /**
     * Attribute DBClusterNodes: The information about the node in the cluster.
     */
    public readonly attrDbClusterNodes: ros.IResolvable | string;

    /**
     * Attribute DBInstanceCPU: The number of CPU cores.
     */
    public readonly attrDbInstanceCpu: ros.IResolvable | string;

    /**
     * Attribute DBInstanceClass: The instance type of the instance.
     */
    public readonly attrDbInstanceClass: ros.IResolvable | string;

    /**
     * Attribute DBInstanceClassType: The instance family to which the instance belongs. Valid values:
s: shared instance family
x: general-purpose instance family
d: dedicated instance family
h: dedicated host instance family
     */
    public readonly attrDbInstanceClassType: ros.IResolvable | string;

    /**
     * Attribute DBInstanceDescription: The description of the instance.
     */
    public readonly attrDbInstanceDescription: ros.IResolvable | string;

    /**
     * Attribute DBInstanceDiskUsed: The disk usage of the instance.
     */
    public readonly attrDbInstanceDiskUsed: ros.IResolvable | string;

    /**
     * Attribute DBInstanceId: The instance ID.
     */
    public readonly attrDbInstanceId: ros.IResolvable | string;

    /**
     * Attribute DBInstanceMemory: The memory capacity of the instance. Unit: MB.
     */
    public readonly attrDbInstanceMemory: ros.IResolvable | string;

    /**
     * Attribute DBInstanceNetType: The type of the network over which the instance is connected. Valid values:
Internet: Internet
Intranet: internal network
     */
    public readonly attrDbInstanceNetType: ros.IResolvable | string;

    /**
     * Attribute DBInstanceStatus: The status of the instance.
     */
    public readonly attrDbInstanceStatus: ros.IResolvable | string;

    /**
     * Attribute DBInstanceStorage: The storage capacity of the instance. Unit: GB.
     */
    public readonly attrDbInstanceStorage: ros.IResolvable | string;

    /**
     * Attribute DBInstanceStorageType: The storage type of the instance. Valid values:
local_ssd and ephemeral_ssd: local SSD
cloud_ssd: standard SSD
cloud_essd: enhanced SSD (ESSD)
     */
    public readonly attrDbInstanceStorageType: ros.IResolvable | string;

    /**
     * Attribute DBInstanceType: The type of the instance. Valid values:
Primary: primary instance
Readonly: read-only instance
Guard: disaster recovery instance
Temp: temporary instance
     */
    public readonly attrDbInstanceType: ros.IResolvable | string;

    /**
     * Attribute DBMaxQuantity: The maximum number of databases that can be created on the instance.
     */
    public readonly attrDbMaxQuantity: ros.IResolvable | string;

    /**
     * Attribute DedicatedHostGroupId: The ID of the dedicated cluster.
     */
    public readonly attrDedicatedHostGroupId: ros.IResolvable | string;

    /**
     * Attribute DeletionProtection: Indicates whether the release protection feature is enabled. Valid values:
true
false
     */
    public readonly attrDeletionProtection: ros.IResolvable | string;

    /**
     * Attribute Engine: The database engine of the instance. Valid values:
MySQL
PostgreSQL
SQLServer
MariaDB
     */
    public readonly attrEngine: ros.IResolvable | string;

    /**
     * Attribute EngineVersion: The database engine version.
     */
    public readonly attrEngineVersion: ros.IResolvable | string;

    /**
     * Attribute ExpireTime: The expiration time. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
Note: Pay-as-you-go instances never expire.
     */
    public readonly attrExpireTime: ros.IResolvable | string;

    /**
     * Attribute Extra: The extended information of the instance.
     */
    public readonly attrExtra: ros.IResolvable | string;

    /**
     * Attribute GeneralGroupName: The name of the dedicated cluster to which the instance belongs. This parameter is returned only when the instance is created in an ApsaraDB MyBase cluster that runs MySQL on Standard Edition.
     */
    public readonly attrGeneralGroupName: ros.IResolvable | string;

    /**
     * Attribute GuardDBInstanceId: The ID of the disaster recovery instance that is attached to the instance.
     */
    public readonly attrGuardDbInstanceId: ros.IResolvable | string;

    /**
     * Attribute IPType: The type of the IP address. Only IPv4 addresses are supported.
     */
    public readonly attrIpType: ros.IResolvable | string;

    /**
     * Attribute IncrementSourceDBInstanceId: The ID of the instance from which incremental data comes. The incremental data of a disaster recovery instance or read-only instance comes from its primary instance. If this parameter is not returned, the instance is a primary instance.
     */
    public readonly attrIncrementSourceDbInstanceId: ros.IResolvable | string;

    /**
     * Attribute InstanceNetworkType: The network type of the instance. Valid values:
Classic
VPC
     */
    public readonly attrInstanceNetworkType: ros.IResolvable | string;

    /**
     * Attribute InstructionSetArch: The architecture type of the instance. Valid values:
x86
arm
     */
    public readonly attrInstructionSetArch: ros.IResolvable | string;

    /**
     * Attribute LatestKernelVersion: The latest minor engine version that is supported by the instance.
     */
    public readonly attrLatestKernelVersion: ros.IResolvable | string;

    /**
     * Attribute LockMode: The lock mode of the instance. Valid values:
Unlock: The instance is not locked.
ManualLock: The instance is manually locked.
LockByExpiration: The instance is automatically locked due to instance expiration.
LockByRestoration: The instance is automatically locked due to instance restoration.
LockByDiskQuota: The instance is automatically locked due to exhausted storage space.
LockReadInstanceByDiskQuota: The instance is a read-only instance and is automatically locked due to exhausted storage.
     */
    public readonly attrLockMode: ros.IResolvable | string;

    /**
     * Attribute LockReason: The reason why the instance was locked.
     */
    public readonly attrLockReason: ros.IResolvable | string;

    /**
     * Attribute MaintainTime: The maintenance window of the instance. The time is displayed in UTC. Take note that the maintenance window displayed in the ApsaraDB RDS console is equal to the value of this parameter plus 8 hours.
     */
    public readonly attrMaintainTime: ros.IResolvable | string;

    /**
     * Attribute MasterInstanceId: The ID of the primary instance.
Note: If this parameter is not returned, the instance is the primary instance.
     */
    public readonly attrMasterInstanceId: ros.IResolvable | string;

    /**
     * Attribute MasterZone: The zone ID of the primary instance.
     */
    public readonly attrMasterZone: ros.IResolvable | string;

    /**
     * Attribute MaxConnections: The maximum number of concurrent connections.
     */
    public readonly attrMaxConnections: ros.IResolvable | string;

    /**
     * Attribute MaxIOMBPS: The maximum I/O throughput. Unit: MB/s.
     */
    public readonly attrMaxIombps: ros.IResolvable | string;

    /**
     * Attribute MaxIOPS: The maximum number of I/O requests per second.
     */
    public readonly attrMaxIops: ros.IResolvable | string;

    /**
     * Attribute PGBouncerEnabled: Indicates whether PgBouncer is enabled.
     */
    public readonly attrPgBouncerEnabled: ros.IResolvable | string;

    /**
     * Attribute PayType: The billing method of the instance. Valid values:
Postpaid: pay-as-you-go
Prepaid: subscription
     */
    public readonly attrPayType: ros.IResolvable | string;

    /**
     * Attribute Port: The port that is used to connect to the instance over an internal network.
     */
    public readonly attrPort: ros.IResolvable | string;

    /**
     * Attribute ProxyType: The type of the proxy that is supported by the instance. Valid values:
0: The instance does not support database proxies.
1: The instance supports shared proxies, with which the instance runs in multi-tenant mode.
2: The instance supports dedicated proxies, with which the instance runs in single-tenant mode.
     */
    public readonly attrProxyType: ros.IResolvable | string;

    /**
     * Attribute ReadOnlyDBInstanceIds: The IDs of the read-only instances that are attached to the primary instance.
     */
    public readonly attrReadOnlyDbInstanceIds: ros.IResolvable | string;

    /**
     * Attribute ReadonlyInstanceSQLDelayedTime: The latency at which the system replicates data to read-only instances. The system replicates data from the primary instance to the read-only instances at the latency that is specified by the ReadonlyInstanceSQLDelayedTime parameter. Unit: seconds.
     */
    public readonly attrReadonlyInstanceSqlDelayedTime: ros.IResolvable | string;

    /**
     * Attribute ResourceGroupId: The resource group ID.
     */
    public readonly attrResourceGroupId: ros.IResolvable | string;

    /**
     * Attribute SecurityIPList: The IP addresses in the IP address whitelist.
     */
    public readonly attrSecurityIpList: ros.IResolvable | string;

    /**
     * Attribute SecurityIPMode: The whitelist mode of the instance. Valid values:
normal: standard whitelist mode
safety: enhanced whitelist mode
     */
    public readonly attrSecurityIpMode: ros.IResolvable | string;

    /**
     * Attribute ServerlessConfig: The settings of the serverless instance.
     */
    public readonly attrServerlessConfig: ros.IResolvable | string;

    /**
     * Attribute SlaveZones: The information about the zone of the secondary instance.
     */
    public readonly attrSlaveZones: ros.IResolvable | string;

    /**
     * Attribute SuperPermissionMode: Indicates whether the instance supports superuser accounts, such as the system administrator (SA) account, the Active Directory (AD) account, and the host account.
Enable
Disabled
     */
    public readonly attrSuperPermissionMode: ros.IResolvable | string;

    /**
     * Attribute TempDBInstanceId: The ID of the temporary instance that is attached to the instance.
     */
    public readonly attrTempDbInstanceId: ros.IResolvable | string;

    /**
     * Attribute TimeZone: The time zone of the instance.
     */
    public readonly attrTimeZone: ros.IResolvable | string;

    /**
     * Attribute Tips: The information about the exception that is detected on the instance. This parameter is returned only when the instance is created in an ApsaraDB MyBase cluster that runs MySQL on Standard Edition.
     */
    public readonly attrTips: ros.IResolvable | string;

    /**
     * Attribute TipsLevel: The severity level of the exception that is detected on the instance. This parameter is returned only when the instance is created in an ApsaraDB MyBase cluster that runs MySQL on Standard Edition. Valid values:
1: The instance is normal.
2: The specifications of the read-only instances do not match the specifications of the primary instance. You must adjust the specifications of these instances based on your business requirements.
     */
    public readonly attrTipsLevel: ros.IResolvable | string;

    /**
     * Attribute VSwitchId: The vSwitch ID.
     */
    public readonly attrVSwitchId: ros.IResolvable | string;

    /**
     * Attribute VpcCloudInstanceId: The VPC ID.
     */
    public readonly attrVpcCloudInstanceId: ros.IResolvable | string;

    /**
     * Attribute VpcId: The virtual private cloud (VPC) ID of the instance.
     */
    public readonly attrVpcId: ros.IResolvable | string;

    /**
     * Attribute ZoneId: The zone ID.
     */
    public readonly attrZoneId: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: DBInstanceProps = {}, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosDBInstance = new RosDBInstance(this, id,  {
            dbInstanceId: props.dbInstanceId,
            refreshOptions: props.refreshOptions === undefined || props.refreshOptions === null ? 'Never' : props.refreshOptions,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosDBInstance;
        this.attrAccountMaxQuantity = rosDBInstance.attrAccountMaxQuantity;
        this.attrAdvancedFeatures = rosDBInstance.attrAdvancedFeatures;
        this.attrAutoUpgradeMinorVersion = rosDBInstance.attrAutoUpgradeMinorVersion;
        this.attrAvailabilityValue = rosDBInstance.attrAvailabilityValue;
        this.attrBabelfishConfig = rosDBInstance.attrBabelfishConfig;
        this.attrCategory = rosDBInstance.attrCategory;
        this.attrCollation = rosDBInstance.attrCollation;
        this.attrConnectionMode = rosDBInstance.attrConnectionMode;
        this.attrConnectionString = rosDBInstance.attrConnectionString;
        this.attrConsoleVersion = rosDBInstance.attrConsoleVersion;
        this.attrCreationTime = rosDBInstance.attrCreationTime;
        this.attrCurrentKernelVersion = rosDBInstance.attrCurrentKernelVersion;
        this.attrDbClusterNodes = rosDBInstance.attrDbClusterNodes;
        this.attrDbInstanceCpu = rosDBInstance.attrDbInstanceCpu;
        this.attrDbInstanceClass = rosDBInstance.attrDbInstanceClass;
        this.attrDbInstanceClassType = rosDBInstance.attrDbInstanceClassType;
        this.attrDbInstanceDescription = rosDBInstance.attrDbInstanceDescription;
        this.attrDbInstanceDiskUsed = rosDBInstance.attrDbInstanceDiskUsed;
        this.attrDbInstanceId = rosDBInstance.attrDbInstanceId;
        this.attrDbInstanceMemory = rosDBInstance.attrDbInstanceMemory;
        this.attrDbInstanceNetType = rosDBInstance.attrDbInstanceNetType;
        this.attrDbInstanceStatus = rosDBInstance.attrDbInstanceStatus;
        this.attrDbInstanceStorage = rosDBInstance.attrDbInstanceStorage;
        this.attrDbInstanceStorageType = rosDBInstance.attrDbInstanceStorageType;
        this.attrDbInstanceType = rosDBInstance.attrDbInstanceType;
        this.attrDbMaxQuantity = rosDBInstance.attrDbMaxQuantity;
        this.attrDedicatedHostGroupId = rosDBInstance.attrDedicatedHostGroupId;
        this.attrDeletionProtection = rosDBInstance.attrDeletionProtection;
        this.attrEngine = rosDBInstance.attrEngine;
        this.attrEngineVersion = rosDBInstance.attrEngineVersion;
        this.attrExpireTime = rosDBInstance.attrExpireTime;
        this.attrExtra = rosDBInstance.attrExtra;
        this.attrGeneralGroupName = rosDBInstance.attrGeneralGroupName;
        this.attrGuardDbInstanceId = rosDBInstance.attrGuardDbInstanceId;
        this.attrIpType = rosDBInstance.attrIpType;
        this.attrIncrementSourceDbInstanceId = rosDBInstance.attrIncrementSourceDbInstanceId;
        this.attrInstanceNetworkType = rosDBInstance.attrInstanceNetworkType;
        this.attrInstructionSetArch = rosDBInstance.attrInstructionSetArch;
        this.attrLatestKernelVersion = rosDBInstance.attrLatestKernelVersion;
        this.attrLockMode = rosDBInstance.attrLockMode;
        this.attrLockReason = rosDBInstance.attrLockReason;
        this.attrMaintainTime = rosDBInstance.attrMaintainTime;
        this.attrMasterInstanceId = rosDBInstance.attrMasterInstanceId;
        this.attrMasterZone = rosDBInstance.attrMasterZone;
        this.attrMaxConnections = rosDBInstance.attrMaxConnections;
        this.attrMaxIombps = rosDBInstance.attrMaxIombps;
        this.attrMaxIops = rosDBInstance.attrMaxIops;
        this.attrPgBouncerEnabled = rosDBInstance.attrPgBouncerEnabled;
        this.attrPayType = rosDBInstance.attrPayType;
        this.attrPort = rosDBInstance.attrPort;
        this.attrProxyType = rosDBInstance.attrProxyType;
        this.attrReadOnlyDbInstanceIds = rosDBInstance.attrReadOnlyDbInstanceIds;
        this.attrReadonlyInstanceSqlDelayedTime = rosDBInstance.attrReadonlyInstanceSqlDelayedTime;
        this.attrResourceGroupId = rosDBInstance.attrResourceGroupId;
        this.attrSecurityIpList = rosDBInstance.attrSecurityIpList;
        this.attrSecurityIpMode = rosDBInstance.attrSecurityIpMode;
        this.attrServerlessConfig = rosDBInstance.attrServerlessConfig;
        this.attrSlaveZones = rosDBInstance.attrSlaveZones;
        this.attrSuperPermissionMode = rosDBInstance.attrSuperPermissionMode;
        this.attrTempDbInstanceId = rosDBInstance.attrTempDbInstanceId;
        this.attrTimeZone = rosDBInstance.attrTimeZone;
        this.attrTips = rosDBInstance.attrTips;
        this.attrTipsLevel = rosDBInstance.attrTipsLevel;
        this.attrVSwitchId = rosDBInstance.attrVSwitchId;
        this.attrVpcCloudInstanceId = rosDBInstance.attrVpcCloudInstanceId;
        this.attrVpcId = rosDBInstance.attrVpcId;
        this.attrZoneId = rosDBInstance.attrZoneId;
    }
}
