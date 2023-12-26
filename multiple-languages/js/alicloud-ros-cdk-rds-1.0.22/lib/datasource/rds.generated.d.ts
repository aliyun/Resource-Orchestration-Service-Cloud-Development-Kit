import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `RosAccounts`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-rds-accounts
 */
export interface RosAccountsProps {
    /**
     * @Property dbInstanceId: The ID of the RDS instance.
     */
    readonly dbInstanceId: string | ros.IResolvable;
    /**
     * @Property accountName: The name of the RDS account.
     */
    readonly accountName?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::RDS::Accounts`, which is used to query the database accounts of an ApsaraDB RDS instance.
 * @Note This class does not contain additional functions, so it is recommended to use the `Accounts` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-rds-accounts
 */
export declare class RosAccounts extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::RDS::Accounts";
    /**
     * @Attribute AccountNames: The list of The RDS account names.
     */
    readonly attrAccountNames: ros.IResolvable;
    /**
     * @Attribute Accounts: The list of The RDS accounts.
     */
    readonly attrAccounts: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property dbInstanceId: The ID of the RDS instance.
     */
    dbInstanceId: string | ros.IResolvable;
    /**
     * @Property accountName: The name of the RDS account.
     */
    accountName: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosAccountsProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
/**
 * Properties for defining a `RosDBInstance`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-rds-dbinstance
 */
export interface RosDBInstanceProps {
    /**
     * @Property dbInstanceId: The ID of the instance.
     */
    readonly dbInstanceId?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::RDS::DBInstance`ALIYUN::REDIS::Account is used to create an account that has the specified permissions on an ApsaraDB for Redis instance.
 * @Note This class does not contain additional functions, so it is recommended to use the `DBInstance` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-rds-dbinstance
 */
export declare class RosDBInstance extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::RDS::DBInstance";
    /**
     * @Attribute AccountMaxQuantity: The maximum number of accounts that can be created on the instance.
     */
    readonly attrAccountMaxQuantity: ros.IResolvable;
    /**
     * @Attribute AdvancedFeatures: The advanced features that are enabled for the instance. If multiple advanced features are enabled, the advanced features are separated by commas (,). This parameter is available only to instances that run SQL Server. Valid values:
LinkedServer
DistributeTransaction
     */
    readonly attrAdvancedFeatures: ros.IResolvable;
    /**
     * @Attribute AutoUpgradeMinorVersion: The method that is used to update the minor engine version of the instance. Valid values:
Auto: automatic update.
Manual: manual update. The minor engine version of the instance is forcefully updated only when the in-use minor engine version is phased out.
     */
    readonly attrAutoUpgradeMinorVersion: ros.IResolvable;
    /**
     * @Attribute AvailabilityValue: The availability status of the instance in percentage.
     */
    readonly attrAvailabilityValue: ros.IResolvable;
    /**
     * @Attribute BabelfishConfig: The configuration of the Babelfish feature for the ApsaraDB RDS for PostgreSQL instance.
     */
    readonly attrBabelfishConfig: ros.IResolvable;
    /**
     * @Attribute Category: The RDS edition of the instance. Valid values:
Basic: RDS Basic Edition
HighAvailability: RDS High-availability Edition
cluster: RDS Cluster Edition for ApsaraDB RDS for MySQL
AlwaysOn: RDS Cluster Edition for ApsaraDB RDS for SQL Server
Finance: RDS Enterprise Edition
Serverless_basic: RDS Basic Edition for serverless instances
     */
    readonly attrCategory: ros.IResolvable;
    /**
     * @Attribute Collation: The character set collation of the instance.
     */
    readonly attrCollation: ros.IResolvable;
    /**
     * @Attribute ConnectionMode: The connection mode of the instance. Valid values:
Standard: standard mode
Safe: database proxy mode
     */
    readonly attrConnectionMode: ros.IResolvable;
    /**
     * @Attribute ConnectionString: The internal endpoint of the instance.
     */
    readonly attrConnectionString: ros.IResolvable;
    /**
     * @Attribute ConsoleVersion: The type of the proxy that is used by the instance. Valid values:
1: shared proxy
2: dedicated proxy
     */
    readonly attrConsoleVersion: ros.IResolvable;
    /**
     * @Attribute CreationTime: The creation time. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
     */
    readonly attrCreationTime: ros.IResolvable;
    /**
     * @Attribute CurrentKernelVersion: The minor engine version of the instance.
     */
    readonly attrCurrentKernelVersion: ros.IResolvable;
    /**
     * @Attribute DBClusterNodes: The information about the node in the cluster.
     */
    readonly attrDbClusterNodes: ros.IResolvable;
    /**
     * @Attribute DBInstanceCPU: The number of CPU cores.
     */
    readonly attrDbInstanceCpu: ros.IResolvable;
    /**
     * @Attribute DBInstanceClass: The instance type of the instance.
     */
    readonly attrDbInstanceClass: ros.IResolvable;
    /**
     * @Attribute DBInstanceClassType: The instance family to which the instance belongs. Valid values:
s: shared instance family
x: general-purpose instance family
d: dedicated instance family
h: dedicated host instance family
     */
    readonly attrDbInstanceClassType: ros.IResolvable;
    /**
     * @Attribute DBInstanceDescription: The description of the instance.
     */
    readonly attrDbInstanceDescription: ros.IResolvable;
    /**
     * @Attribute DBInstanceDiskUsed: The disk usage of the instance.
     */
    readonly attrDbInstanceDiskUsed: ros.IResolvable;
    /**
     * @Attribute DBInstanceId: The instance ID.
     */
    readonly attrDbInstanceId: ros.IResolvable;
    /**
     * @Attribute DBInstanceMemory: The memory capacity of the instance. Unit: MB.
     */
    readonly attrDbInstanceMemory: ros.IResolvable;
    /**
     * @Attribute DBInstanceNetType: The type of the network over which the instance is connected. Valid values:
Internet: Internet
Intranet: internal network
     */
    readonly attrDbInstanceNetType: ros.IResolvable;
    /**
     * @Attribute DBInstanceStatus: The status of the instance.
     */
    readonly attrDbInstanceStatus: ros.IResolvable;
    /**
     * @Attribute DBInstanceStorage: The storage capacity of the instance. Unit: GB.
     */
    readonly attrDbInstanceStorage: ros.IResolvable;
    /**
     * @Attribute DBInstanceStorageType: The storage type of the instance. Valid values:
local_ssd and ephemeral_ssd: local SSD
cloud_ssd: standard SSD
cloud_essd: enhanced SSD (ESSD)
     */
    readonly attrDbInstanceStorageType: ros.IResolvable;
    /**
     * @Attribute DBInstanceType: The type of the instance. Valid values:
Primary: primary instance
Readonly: read-only instance
Guard: disaster recovery instance
Temp: temporary instance
     */
    readonly attrDbInstanceType: ros.IResolvable;
    /**
     * @Attribute DBMaxQuantity: The maximum number of databases that can be created on the instance.
     */
    readonly attrDbMaxQuantity: ros.IResolvable;
    /**
     * @Attribute DedicatedHostGroupId: The ID of the dedicated cluster.
     */
    readonly attrDedicatedHostGroupId: ros.IResolvable;
    /**
     * @Attribute DeletionProtection: Indicates whether the release protection feature is enabled. Valid values:
true
false
     */
    readonly attrDeletionProtection: ros.IResolvable;
    /**
     * @Attribute Engine: The database engine of the instance. Valid values:
MySQL
PostgreSQL
SQLServer
MariaDB
     */
    readonly attrEngine: ros.IResolvable;
    /**
     * @Attribute EngineVersion: The database engine version.
     */
    readonly attrEngineVersion: ros.IResolvable;
    /**
     * @Attribute ExpireTime: The expiration time. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
Note: Pay-as-you-go instances never expire.
     */
    readonly attrExpireTime: ros.IResolvable;
    /**
     * @Attribute Extra: The extended information of the instance.
     */
    readonly attrExtra: ros.IResolvable;
    /**
     * @Attribute GeneralGroupName: The name of the dedicated cluster to which the instance belongs. This parameter is returned only when the instance is created in an ApsaraDB MyBase cluster that runs MySQL on Standard Edition.
     */
    readonly attrGeneralGroupName: ros.IResolvable;
    /**
     * @Attribute GuardDBInstanceId: The ID of the disaster recovery instance that is attached to the instance.
     */
    readonly attrGuardDbInstanceId: ros.IResolvable;
    /**
     * @Attribute IPType: The type of the IP address. Only IPv4 addresses are supported.
     */
    readonly attrIpType: ros.IResolvable;
    /**
     * @Attribute IncrementSourceDBInstanceId: The ID of the instance from which incremental data comes. The incremental data of a disaster recovery instance or read-only instance comes from its primary instance. If this parameter is not returned, the instance is a primary instance.
     */
    readonly attrIncrementSourceDbInstanceId: ros.IResolvable;
    /**
     * @Attribute InstanceNetworkType: The network type of the instance. Valid values:
Classic
VPC
     */
    readonly attrInstanceNetworkType: ros.IResolvable;
    /**
     * @Attribute InstructionSetArch: The architecture type of the instance. Valid values:
x86
arm
     */
    readonly attrInstructionSetArch: ros.IResolvable;
    /**
     * @Attribute LatestKernelVersion: The latest minor engine version that is supported by the instance.
     */
    readonly attrLatestKernelVersion: ros.IResolvable;
    /**
     * @Attribute LockMode: The lock mode of the instance. Valid values:
Unlock: The instance is not locked.
ManualLock: The instance is manually locked.
LockByExpiration: The instance is automatically locked due to instance expiration.
LockByRestoration: The instance is automatically locked due to instance restoration.
LockByDiskQuota: The instance is automatically locked due to exhausted storage space.
LockReadInstanceByDiskQuota: The instance is a read-only instance and is automatically locked due to exhausted storage.
     */
    readonly attrLockMode: ros.IResolvable;
    /**
     * @Attribute LockReason: The reason why the instance was locked.
     */
    readonly attrLockReason: ros.IResolvable;
    /**
     * @Attribute MaintainTime: The maintenance window of the instance. The time is displayed in UTC. Take note that the maintenance window displayed in the ApsaraDB RDS console is equal to the value of this parameter plus 8 hours.
     */
    readonly attrMaintainTime: ros.IResolvable;
    /**
     * @Attribute MasterInstanceId: The ID of the primary instance.
Note: If this parameter is not returned, the instance is the primary instance.
     */
    readonly attrMasterInstanceId: ros.IResolvable;
    /**
     * @Attribute MasterZone: The zone ID of the primary instance.
     */
    readonly attrMasterZone: ros.IResolvable;
    /**
     * @Attribute MaxConnections: The maximum number of concurrent connections.
     */
    readonly attrMaxConnections: ros.IResolvable;
    /**
     * @Attribute MaxIOMBPS: The maximum I/O throughput. Unit: MB/s.
     */
    readonly attrMaxIombps: ros.IResolvable;
    /**
     * @Attribute MaxIOPS: The maximum number of I/O requests per second.
     */
    readonly attrMaxIops: ros.IResolvable;
    /**
     * @Attribute PGBouncerEnabled: Indicates whether PgBouncer is enabled.
     */
    readonly attrPgBouncerEnabled: ros.IResolvable;
    /**
     * @Attribute PayType: The billing method of the instance. Valid values:
Postpaid: pay-as-you-go
Prepaid: subscription
     */
    readonly attrPayType: ros.IResolvable;
    /**
     * @Attribute Port: The port that is used to connect to the instance over an internal network.
     */
    readonly attrPort: ros.IResolvable;
    /**
     * @Attribute ProxyType: The type of the proxy that is supported by the instance. Valid values:
0: The instance does not support database proxies.
1: The instance supports shared proxies, with which the instance runs in multi-tenant mode.
2: The instance supports dedicated proxies, with which the instance runs in single-tenant mode.
     */
    readonly attrProxyType: ros.IResolvable;
    /**
     * @Attribute ReadOnlyDBInstanceIds: The IDs of the read-only instances that are attached to the primary instance.
     */
    readonly attrReadOnlyDbInstanceIds: ros.IResolvable;
    /**
     * @Attribute ReadonlyInstanceSQLDelayedTime: The latency at which the system replicates data to read-only instances. The system replicates data from the primary instance to the read-only instances at the latency that is specified by the ReadonlyInstanceSQLDelayedTime parameter. Unit: seconds.
     */
    readonly attrReadonlyInstanceSqlDelayedTime: ros.IResolvable;
    /**
     * @Attribute ResourceGroupId: The resource group ID.
     */
    readonly attrResourceGroupId: ros.IResolvable;
    /**
     * @Attribute SecurityIPList: The IP addresses in the IP address whitelist.
     */
    readonly attrSecurityIpList: ros.IResolvable;
    /**
     * @Attribute SecurityIPMode: The whitelist mode of the instance. Valid values:
normal: standard whitelist mode
safety: enhanced whitelist mode
     */
    readonly attrSecurityIpMode: ros.IResolvable;
    /**
     * @Attribute ServerlessConfig: The settings of the serverless instance.
     */
    readonly attrServerlessConfig: ros.IResolvable;
    /**
     * @Attribute SlaveZones: The information about the zone of the secondary instance.
     */
    readonly attrSlaveZones: ros.IResolvable;
    /**
     * @Attribute SuperPermissionMode: Indicates whether the instance supports superuser accounts, such as the system administrator (SA) account, the Active Directory (AD) account, and the host account.
Enable
Disabled
     */
    readonly attrSuperPermissionMode: ros.IResolvable;
    /**
     * @Attribute TempDBInstanceId: The ID of the temporary instance that is attached to the instance.
     */
    readonly attrTempDbInstanceId: ros.IResolvable;
    /**
     * @Attribute TimeZone: The time zone of the instance.
     */
    readonly attrTimeZone: ros.IResolvable;
    /**
     * @Attribute Tips: The information about the exception that is detected on the instance. This parameter is returned only when the instance is created in an ApsaraDB MyBase cluster that runs MySQL on Standard Edition.
     */
    readonly attrTips: ros.IResolvable;
    /**
     * @Attribute TipsLevel: The severity level of the exception that is detected on the instance. This parameter is returned only when the instance is created in an ApsaraDB MyBase cluster that runs MySQL on Standard Edition. Valid values:
1: The instance is normal.
2: The specifications of the read-only instances do not match the specifications of the primary instance. You must adjust the specifications of these instances based on your business requirements.
     */
    readonly attrTipsLevel: ros.IResolvable;
    /**
     * @Attribute VSwitchId: The vSwitch ID.
     */
    readonly attrVSwitchId: ros.IResolvable;
    /**
     * @Attribute VpcCloudInstanceId: The VPC ID.
     */
    readonly attrVpcCloudInstanceId: ros.IResolvable;
    /**
     * @Attribute VpcId: The virtual private cloud (VPC) ID of the instance.
     */
    readonly attrVpcId: ros.IResolvable;
    /**
     * @Attribute ZoneId: The zone ID.
     */
    readonly attrZoneId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property dbInstanceId: The ID of the instance.
     */
    dbInstanceId: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDBInstanceProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
/**
 * Properties for defining a `RosDBInstances`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-rds-dbinstances
 */
export interface RosDBInstancesProps {
    /**
     * @Property connectionMode: The connection mode of the instance.
     */
    readonly connectionMode?: string | ros.IResolvable;
    /**
     * @Property connectionString: The endpoint of the instance.
     */
    readonly connectionString?: string | ros.IResolvable;
    /**
     * @Property dbInstanceClass: The instance type of the instances.
     */
    readonly dbInstanceClass?: string | ros.IResolvable;
    /**
     * @Property dbInstanceId: The ID of the instance.
     */
    readonly dbInstanceId?: string | ros.IResolvable;
    /**
     * @Property dbInstanceStatus: The status of the instances.
     */
    readonly dbInstanceStatus?: string | ros.IResolvable;
    /**
     * @Property dbInstanceType: The role of the instances.
     */
    readonly dbInstanceType?: string | ros.IResolvable;
    /**
     * @Property dedicatedHostGroupId: The ID of the dedicated cluster to which the instances belong.
     */
    readonly dedicatedHostGroupId?: string | ros.IResolvable;
    /**
     * @Property dedicatedHostId: The ID of the host to which the instances belong in the specified dedicated cluster.
     */
    readonly dedicatedHostId?: string | ros.IResolvable;
    /**
     * @Property engine: The database engine that is run by the instances.
     */
    readonly engine?: string | ros.IResolvable;
    /**
     * @Property engineVersion: The version of the database engine that is run by the instances.
     */
    readonly engineVersion?: string | ros.IResolvable;
    /**
     * @Property expired: Specifies whether the instances have expired.
     */
    readonly expired?: string | ros.IResolvable;
    /**
     * @Property instanceLevel: Specifies whether to return the RDS editions of the instances by using the Category parameter.
     */
    readonly instanceLevel?: number | ros.IResolvable;
    /**
     * @Property instanceNetworkType: The network type of the instances.
     */
    readonly instanceNetworkType?: string | ros.IResolvable;
    /**
     * @Property payType: The billing method of the instances.
     */
    readonly payType?: string | ros.IResolvable;
    /**
     * @Property proxyId: The ID of the proxy mode.
     */
    readonly proxyId?: string | ros.IResolvable;
    /**
     * @Property resourceGroupId: The ID of the resource group to which the instances belong.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * @Property searchKey: The keywords that are contained in the IDs or descriptions of the instances.
     */
    readonly searchKey?: string | ros.IResolvable;
    /**
     * @Property vpcId: The ID of the virtual private cloud (VPC) to which the instances belong.
     */
    readonly vpcId?: string | ros.IResolvable;
    /**
     * @Property vSwitchId: The ID of the vSwitch that is associated with the specified VPC.
     */
    readonly vSwitchId?: string | ros.IResolvable;
    /**
     * @Property zoneId: The ID of the zone to which the instances belong
     */
    readonly zoneId?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::RDS::DBInstances`, which is used to query ApsaraDB RDS instances.
 * @Note This class does not contain additional functions, so it is recommended to use the `DBInstances` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-rds-dbinstances
 */
export declare class RosDBInstances extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::RDS::DBInstances";
    /**
     * @Attribute DBInstanceIds: The list of The RDS Database instance Ids.
     */
    readonly attrDbInstanceIds: ros.IResolvable;
    /**
     * @Attribute DBInstances: The list of The RDS Database instances.
     */
    readonly attrDbInstances: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property connectionMode: The connection mode of the instance.
     */
    connectionMode: string | ros.IResolvable | undefined;
    /**
     * @Property connectionString: The endpoint of the instance.
     */
    connectionString: string | ros.IResolvable | undefined;
    /**
     * @Property dbInstanceClass: The instance type of the instances.
     */
    dbInstanceClass: string | ros.IResolvable | undefined;
    /**
     * @Property dbInstanceId: The ID of the instance.
     */
    dbInstanceId: string | ros.IResolvable | undefined;
    /**
     * @Property dbInstanceStatus: The status of the instances.
     */
    dbInstanceStatus: string | ros.IResolvable | undefined;
    /**
     * @Property dbInstanceType: The role of the instances.
     */
    dbInstanceType: string | ros.IResolvable | undefined;
    /**
     * @Property dedicatedHostGroupId: The ID of the dedicated cluster to which the instances belong.
     */
    dedicatedHostGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property dedicatedHostId: The ID of the host to which the instances belong in the specified dedicated cluster.
     */
    dedicatedHostId: string | ros.IResolvable | undefined;
    /**
     * @Property engine: The database engine that is run by the instances.
     */
    engine: string | ros.IResolvable | undefined;
    /**
     * @Property engineVersion: The version of the database engine that is run by the instances.
     */
    engineVersion: string | ros.IResolvable | undefined;
    /**
     * @Property expired: Specifies whether the instances have expired.
     */
    expired: string | ros.IResolvable | undefined;
    /**
     * @Property instanceLevel: Specifies whether to return the RDS editions of the instances by using the Category parameter.
     */
    instanceLevel: number | ros.IResolvable | undefined;
    /**
     * @Property instanceNetworkType: The network type of the instances.
     */
    instanceNetworkType: string | ros.IResolvable | undefined;
    /**
     * @Property payType: The billing method of the instances.
     */
    payType: string | ros.IResolvable | undefined;
    /**
     * @Property proxyId: The ID of the proxy mode.
     */
    proxyId: string | ros.IResolvable | undefined;
    /**
     * @Property resourceGroupId: The ID of the resource group to which the instances belong.
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property searchKey: The keywords that are contained in the IDs or descriptions of the instances.
     */
    searchKey: string | ros.IResolvable | undefined;
    /**
     * @Property vpcId: The ID of the virtual private cloud (VPC) to which the instances belong.
     */
    vpcId: string | ros.IResolvable | undefined;
    /**
     * @Property vSwitchId: The ID of the vSwitch that is associated with the specified VPC.
     */
    vSwitchId: string | ros.IResolvable | undefined;
    /**
     * @Property zoneId: The ID of the zone to which the instances belong
     */
    zoneId: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDBInstancesProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
/**
 * Properties for defining a `RosDatabases`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-rds-databases
 */
export interface RosDatabasesProps {
    /**
     * @Property dbInstanceId: The ID of the RDS instance.
     */
    readonly dbInstanceId: string | ros.IResolvable;
    /**
     * @Property dbName: The names of the databases whose information you want to query.
     */
    readonly dbName?: string | ros.IResolvable;
    /**
     * @Property dbStatus: The status of the databases whose information you want to query.
     */
    readonly dbStatus?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::RDS::Databases`, which is used to query the details of databases in an ApsaraDB RDS instance.
 * @Note This class does not contain additional functions, so it is recommended to use the `Databases` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-rds-databases
 */
export declare class RosDatabases extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::RDS::Databases";
    /**
     * @Attribute DBNames: The list of The RDS database names.
     */
    readonly attrDbNames: ros.IResolvable;
    /**
     * @Attribute Databases: The list of The RDS databases.
     */
    readonly attrDatabases: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property dbInstanceId: The ID of the RDS instance.
     */
    dbInstanceId: string | ros.IResolvable;
    /**
     * @Property dbName: The names of the databases whose information you want to query.
     */
    dbName: string | ros.IResolvable | undefined;
    /**
     * @Property dbStatus: The status of the databases whose information you want to query.
     */
    dbStatus: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDatabasesProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
/**
 * Properties for defining a `RosZones`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-rds-zones
 */
export interface RosZonesProps {
    /**
     * @Property engine: The database engine that is run by the instance.
     */
    readonly engine: string | ros.IResolvable;
    /**
     * @Property category: The RDS edition of the instance. Valid values:
     * Basic: RDS Basic Edition
     * HighAvailability: RDS High-availability Edition
     * AlwaysOn: RDS Cluster Edition
     * Finance: RDS Enterprise Edition
     */
    readonly category?: string | ros.IResolvable;
    /**
     * @Property commodityCode: The commodity code of the instance.
     */
    readonly commodityCode?: string | ros.IResolvable;
    /**
     * @Property dispenseMode: Specifies whether to return the zones in which the single-zone deployment method is supported. Valid values:
     * 1: returns the zones.
     * 0: does not return the zones.
     * Default value: 0.
     */
    readonly dispenseMode?: string | ros.IResolvable;
    /**
     * @Property engineVersion: The version of the database engine that is run by the instance.
     */
    readonly engineVersion?: string | ros.IResolvable;
    /**
     * @Property zoneId: The ID of the zone in which the instance is located.
     * If the instance spans more than one zone, the value of this parameter contains an MAZ part,such as cn-hangzhou-MAZ6(b,f) and cn-hangzhou-MAZ5(b,e,f)
     */
    readonly zoneId?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::RDS::Zones`, which is used to query the zones that are available to an ApsaraDB RDS instance.
 * @Note This class does not contain additional functions, so it is recommended to use the `Zones` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-rds-zones
 */
export declare class RosZones extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::RDS::Zones";
    /**
     * @Attribute ZoneIds: The list of zone IDs.
     */
    readonly attrZoneIds: ros.IResolvable;
    /**
     * @Attribute Zones: The list of The Zones.
     */
    readonly attrZones: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property engine: The database engine that is run by the instance.
     */
    engine: string | ros.IResolvable;
    /**
     * @Property category: The RDS edition of the instance. Valid values:
     * Basic: RDS Basic Edition
     * HighAvailability: RDS High-availability Edition
     * AlwaysOn: RDS Cluster Edition
     * Finance: RDS Enterprise Edition
     */
    category: string | ros.IResolvable | undefined;
    /**
     * @Property commodityCode: The commodity code of the instance.
     */
    commodityCode: string | ros.IResolvable | undefined;
    /**
     * @Property dispenseMode: Specifies whether to return the zones in which the single-zone deployment method is supported. Valid values:
     * 1: returns the zones.
     * 0: does not return the zones.
     * Default value: 0.
     */
    dispenseMode: string | ros.IResolvable | undefined;
    /**
     * @Property engineVersion: The version of the database engine that is run by the instance.
     */
    engineVersion: string | ros.IResolvable | undefined;
    /**
     * @Property zoneId: The ID of the zone in which the instance is located.
     * If the instance spans more than one zone, the value of this parameter contains an MAZ part,such as cn-hangzhou-MAZ6(b,f) and cn-hangzhou-MAZ5(b,e,f)
     */
    zoneId: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosZonesProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
