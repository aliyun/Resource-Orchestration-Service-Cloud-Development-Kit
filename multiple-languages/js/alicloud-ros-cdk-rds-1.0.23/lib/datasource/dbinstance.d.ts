import * as ros from '@alicloud/ros-cdk-core';
import { RosDBInstance } from './rds.generated';
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
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::RDS::DBInstance`, which is used to query an ApsaraDB RDS instance.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosDBInstance`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-rds-dbinstance
 */
export declare class DBInstance extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: DBInstanceProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute AccountMaxQuantity: The maximum number of accounts that can be created on the instance.
     */
    readonly attrAccountMaxQuantity: ros.IResolvable;
    /**
     * Attribute AdvancedFeatures: The advanced features that are enabled for the instance. If multiple advanced features are enabled, the advanced features are separated by commas (,). This parameter is available only to instances that run SQL Server. Valid values:
LinkedServer
DistributeTransaction
     */
    readonly attrAdvancedFeatures: ros.IResolvable;
    /**
     * Attribute AutoUpgradeMinorVersion: The method that is used to update the minor engine version of the instance. Valid values:
Auto: automatic update.
Manual: manual update. The minor engine version of the instance is forcefully updated only when the in-use minor engine version is phased out.
     */
    readonly attrAutoUpgradeMinorVersion: ros.IResolvable;
    /**
     * Attribute AvailabilityValue: The availability status of the instance in percentage.
     */
    readonly attrAvailabilityValue: ros.IResolvable;
    /**
     * Attribute BabelfishConfig: The configuration of the Babelfish feature for the ApsaraDB RDS for PostgreSQL instance.
     */
    readonly attrBabelfishConfig: ros.IResolvable;
    /**
     * Attribute Category: The RDS edition of the instance. Valid values:
Basic: RDS Basic Edition
HighAvailability: RDS High-availability Edition
cluster: RDS Cluster Edition for ApsaraDB RDS for MySQL
AlwaysOn: RDS Cluster Edition for ApsaraDB RDS for SQL Server
Finance: RDS Enterprise Edition
Serverless_basic: RDS Basic Edition for serverless instances
     */
    readonly attrCategory: ros.IResolvable;
    /**
     * Attribute Collation: The character set collation of the instance.
     */
    readonly attrCollation: ros.IResolvable;
    /**
     * Attribute ConnectionMode: The connection mode of the instance. Valid values:
Standard: standard mode
Safe: database proxy mode
     */
    readonly attrConnectionMode: ros.IResolvable;
    /**
     * Attribute ConnectionString: The internal endpoint of the instance.
     */
    readonly attrConnectionString: ros.IResolvable;
    /**
     * Attribute ConsoleVersion: The type of the proxy that is used by the instance. Valid values:
1: shared proxy
2: dedicated proxy
     */
    readonly attrConsoleVersion: ros.IResolvable;
    /**
     * Attribute CreationTime: The creation time. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
     */
    readonly attrCreationTime: ros.IResolvable;
    /**
     * Attribute CurrentKernelVersion: The minor engine version of the instance.
     */
    readonly attrCurrentKernelVersion: ros.IResolvable;
    /**
     * Attribute DBClusterNodes: The information about the node in the cluster.
     */
    readonly attrDbClusterNodes: ros.IResolvable;
    /**
     * Attribute DBInstanceCPU: The number of CPU cores.
     */
    readonly attrDbInstanceCpu: ros.IResolvable;
    /**
     * Attribute DBInstanceClass: The instance type of the instance.
     */
    readonly attrDbInstanceClass: ros.IResolvable;
    /**
     * Attribute DBInstanceClassType: The instance family to which the instance belongs. Valid values:
s: shared instance family
x: general-purpose instance family
d: dedicated instance family
h: dedicated host instance family
     */
    readonly attrDbInstanceClassType: ros.IResolvable;
    /**
     * Attribute DBInstanceDescription: The description of the instance.
     */
    readonly attrDbInstanceDescription: ros.IResolvable;
    /**
     * Attribute DBInstanceDiskUsed: The disk usage of the instance.
     */
    readonly attrDbInstanceDiskUsed: ros.IResolvable;
    /**
     * Attribute DBInstanceId: The instance ID.
     */
    readonly attrDbInstanceId: ros.IResolvable;
    /**
     * Attribute DBInstanceMemory: The memory capacity of the instance. Unit: MB.
     */
    readonly attrDbInstanceMemory: ros.IResolvable;
    /**
     * Attribute DBInstanceNetType: The type of the network over which the instance is connected. Valid values:
Internet: Internet
Intranet: internal network
     */
    readonly attrDbInstanceNetType: ros.IResolvable;
    /**
     * Attribute DBInstanceStatus: The status of the instance.
     */
    readonly attrDbInstanceStatus: ros.IResolvable;
    /**
     * Attribute DBInstanceStorage: The storage capacity of the instance. Unit: GB.
     */
    readonly attrDbInstanceStorage: ros.IResolvable;
    /**
     * Attribute DBInstanceStorageType: The storage type of the instance. Valid values:
local_ssd and ephemeral_ssd: local SSD
cloud_ssd: standard SSD
cloud_essd: enhanced SSD (ESSD)
     */
    readonly attrDbInstanceStorageType: ros.IResolvable;
    /**
     * Attribute DBInstanceType: The type of the instance. Valid values:
Primary: primary instance
Readonly: read-only instance
Guard: disaster recovery instance
Temp: temporary instance
     */
    readonly attrDbInstanceType: ros.IResolvable;
    /**
     * Attribute DBMaxQuantity: The maximum number of databases that can be created on the instance.
     */
    readonly attrDbMaxQuantity: ros.IResolvable;
    /**
     * Attribute DedicatedHostGroupId: The ID of the dedicated cluster.
     */
    readonly attrDedicatedHostGroupId: ros.IResolvable;
    /**
     * Attribute DeletionProtection: Indicates whether the release protection feature is enabled. Valid values:
true
false
     */
    readonly attrDeletionProtection: ros.IResolvable;
    /**
     * Attribute Engine: The database engine of the instance. Valid values:
MySQL
PostgreSQL
SQLServer
MariaDB
     */
    readonly attrEngine: ros.IResolvable;
    /**
     * Attribute EngineVersion: The database engine version.
     */
    readonly attrEngineVersion: ros.IResolvable;
    /**
     * Attribute ExpireTime: The expiration time. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
Note: Pay-as-you-go instances never expire.
     */
    readonly attrExpireTime: ros.IResolvable;
    /**
     * Attribute Extra: The extended information of the instance.
     */
    readonly attrExtra: ros.IResolvable;
    /**
     * Attribute GeneralGroupName: The name of the dedicated cluster to which the instance belongs. This parameter is returned only when the instance is created in an ApsaraDB MyBase cluster that runs MySQL on Standard Edition.
     */
    readonly attrGeneralGroupName: ros.IResolvable;
    /**
     * Attribute GuardDBInstanceId: The ID of the disaster recovery instance that is attached to the instance.
     */
    readonly attrGuardDbInstanceId: ros.IResolvable;
    /**
     * Attribute IPType: The type of the IP address. Only IPv4 addresses are supported.
     */
    readonly attrIpType: ros.IResolvable;
    /**
     * Attribute IncrementSourceDBInstanceId: The ID of the instance from which incremental data comes. The incremental data of a disaster recovery instance or read-only instance comes from its primary instance. If this parameter is not returned, the instance is a primary instance.
     */
    readonly attrIncrementSourceDbInstanceId: ros.IResolvable;
    /**
     * Attribute InstanceNetworkType: The network type of the instance. Valid values:
Classic
VPC
     */
    readonly attrInstanceNetworkType: ros.IResolvable;
    /**
     * Attribute InstructionSetArch: The architecture type of the instance. Valid values:
x86
arm
     */
    readonly attrInstructionSetArch: ros.IResolvable;
    /**
     * Attribute LatestKernelVersion: The latest minor engine version that is supported by the instance.
     */
    readonly attrLatestKernelVersion: ros.IResolvable;
    /**
     * Attribute LockMode: The lock mode of the instance. Valid values:
Unlock: The instance is not locked.
ManualLock: The instance is manually locked.
LockByExpiration: The instance is automatically locked due to instance expiration.
LockByRestoration: The instance is automatically locked due to instance restoration.
LockByDiskQuota: The instance is automatically locked due to exhausted storage space.
LockReadInstanceByDiskQuota: The instance is a read-only instance and is automatically locked due to exhausted storage.
     */
    readonly attrLockMode: ros.IResolvable;
    /**
     * Attribute LockReason: The reason why the instance was locked.
     */
    readonly attrLockReason: ros.IResolvable;
    /**
     * Attribute MaintainTime: The maintenance window of the instance. The time is displayed in UTC. Take note that the maintenance window displayed in the ApsaraDB RDS console is equal to the value of this parameter plus 8 hours.
     */
    readonly attrMaintainTime: ros.IResolvable;
    /**
     * Attribute MasterInstanceId: The ID of the primary instance.
Note: If this parameter is not returned, the instance is the primary instance.
     */
    readonly attrMasterInstanceId: ros.IResolvable;
    /**
     * Attribute MasterZone: The zone ID of the primary instance.
     */
    readonly attrMasterZone: ros.IResolvable;
    /**
     * Attribute MaxConnections: The maximum number of concurrent connections.
     */
    readonly attrMaxConnections: ros.IResolvable;
    /**
     * Attribute MaxIOMBPS: The maximum I/O throughput. Unit: MB/s.
     */
    readonly attrMaxIombps: ros.IResolvable;
    /**
     * Attribute MaxIOPS: The maximum number of I/O requests per second.
     */
    readonly attrMaxIops: ros.IResolvable;
    /**
     * Attribute PGBouncerEnabled: Indicates whether PgBouncer is enabled.
     */
    readonly attrPgBouncerEnabled: ros.IResolvable;
    /**
     * Attribute PayType: The billing method of the instance. Valid values:
Postpaid: pay-as-you-go
Prepaid: subscription
     */
    readonly attrPayType: ros.IResolvable;
    /**
     * Attribute Port: The port that is used to connect to the instance over an internal network.
     */
    readonly attrPort: ros.IResolvable;
    /**
     * Attribute ProxyType: The type of the proxy that is supported by the instance. Valid values:
0: The instance does not support database proxies.
1: The instance supports shared proxies, with which the instance runs in multi-tenant mode.
2: The instance supports dedicated proxies, with which the instance runs in single-tenant mode.
     */
    readonly attrProxyType: ros.IResolvable;
    /**
     * Attribute ReadOnlyDBInstanceIds: The IDs of the read-only instances that are attached to the primary instance.
     */
    readonly attrReadOnlyDbInstanceIds: ros.IResolvable;
    /**
     * Attribute ReadonlyInstanceSQLDelayedTime: The latency at which the system replicates data to read-only instances. The system replicates data from the primary instance to the read-only instances at the latency that is specified by the ReadonlyInstanceSQLDelayedTime parameter. Unit: seconds.
     */
    readonly attrReadonlyInstanceSqlDelayedTime: ros.IResolvable;
    /**
     * Attribute ResourceGroupId: The resource group ID.
     */
    readonly attrResourceGroupId: ros.IResolvable;
    /**
     * Attribute SecurityIPList: The IP addresses in the IP address whitelist.
     */
    readonly attrSecurityIpList: ros.IResolvable;
    /**
     * Attribute SecurityIPMode: The whitelist mode of the instance. Valid values:
normal: standard whitelist mode
safety: enhanced whitelist mode
     */
    readonly attrSecurityIpMode: ros.IResolvable;
    /**
     * Attribute ServerlessConfig: The settings of the serverless instance.
     */
    readonly attrServerlessConfig: ros.IResolvable;
    /**
     * Attribute SlaveZones: The information about the zone of the secondary instance.
     */
    readonly attrSlaveZones: ros.IResolvable;
    /**
     * Attribute SuperPermissionMode: Indicates whether the instance supports superuser accounts, such as the system administrator (SA) account, the Active Directory (AD) account, and the host account.
Enable
Disabled
     */
    readonly attrSuperPermissionMode: ros.IResolvable;
    /**
     * Attribute TempDBInstanceId: The ID of the temporary instance that is attached to the instance.
     */
    readonly attrTempDbInstanceId: ros.IResolvable;
    /**
     * Attribute TimeZone: The time zone of the instance.
     */
    readonly attrTimeZone: ros.IResolvable;
    /**
     * Attribute Tips: The information about the exception that is detected on the instance. This parameter is returned only when the instance is created in an ApsaraDB MyBase cluster that runs MySQL on Standard Edition.
     */
    readonly attrTips: ros.IResolvable;
    /**
     * Attribute TipsLevel: The severity level of the exception that is detected on the instance. This parameter is returned only when the instance is created in an ApsaraDB MyBase cluster that runs MySQL on Standard Edition. Valid values:
1: The instance is normal.
2: The specifications of the read-only instances do not match the specifications of the primary instance. You must adjust the specifications of these instances based on your business requirements.
     */
    readonly attrTipsLevel: ros.IResolvable;
    /**
     * Attribute VSwitchId: The vSwitch ID.
     */
    readonly attrVSwitchId: ros.IResolvable;
    /**
     * Attribute VpcCloudInstanceId: The VPC ID.
     */
    readonly attrVpcCloudInstanceId: ros.IResolvable;
    /**
     * Attribute VpcId: The virtual private cloud (VPC) ID of the instance.
     */
    readonly attrVpcId: ros.IResolvable;
    /**
     * Attribute ZoneId: The zone ID.
     */
    readonly attrZoneId: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props?: DBInstanceProps, enableResourcePropertyConstraint?: boolean);
}
