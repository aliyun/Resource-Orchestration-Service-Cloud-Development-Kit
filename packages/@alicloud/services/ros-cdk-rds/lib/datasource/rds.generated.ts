// Generated from the AliCloud ROS Resource Specification

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
 * Determine whether the given properties match those of a `RosAccountsProps`
 *
 * @param properties - the TypeScript properties of a `RosAccountsProps`
 *
 * @returns the result of the validation.
 */
function RosAccountsPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('dbInstanceId', ros.requiredValidator)(properties.dbInstanceId));
    errors.collect(ros.propertyValidator('dbInstanceId', ros.validateString)(properties.dbInstanceId));
    errors.collect(ros.propertyValidator('accountName', ros.validateString)(properties.accountName));
    return errors.wrap('supplied properties not correct for "RosAccountsProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::RDS::Accounts` resource
 *
 * @param properties - the TypeScript properties of a `RosAccountsProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::RDS::Accounts` resource.
 */
// @ts-ignore TS6133
function rosAccountsPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosAccountsPropsValidator(properties).assertSuccess();
    }
    return {
      DBInstanceId: ros.stringToRosTemplate(properties.dbInstanceId),
      AccountName: ros.stringToRosTemplate(properties.accountName),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::RDS::Accounts`, which is used to query the database accounts of an ApsaraDB RDS instance.
 * @Note This class does not contain additional functions, so it is recommended to use the `Accounts` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-rds-accounts
 */
export class RosAccounts extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::RDS::Accounts";

    /**
     * @Attribute AccountNames: The list of The RDS account names.
     */
    public readonly attrAccountNames: ros.IResolvable;

    /**
     * @Attribute Accounts: The list of The RDS accounts.
     */
    public readonly attrAccounts: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property dbInstanceId: The ID of the RDS instance.
     */
    public dbInstanceId: string | ros.IResolvable;

    /**
     * @Property accountName: The name of the RDS account.
     */
    public accountName: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosAccountsProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosAccounts.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAccountNames = this.getAtt('AccountNames');
        this.attrAccounts = this.getAtt('Accounts');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.dbInstanceId = props.dbInstanceId;
        this.accountName = props.accountName;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            dbInstanceId: this.dbInstanceId,
            accountName: this.accountName,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosAccountsPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
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
 * Determine whether the given properties match those of a `RosDBInstanceProps`
 *
 * @param properties - the TypeScript properties of a `RosDBInstanceProps`
 *
 * @returns the result of the validation.
 */
function RosDBInstancePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('dbInstanceId', ros.validateString)(properties.dbInstanceId));
    return errors.wrap('supplied properties not correct for "RosDBInstanceProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::RDS::DBInstance` resource
 *
 * @param properties - the TypeScript properties of a `RosDBInstanceProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::RDS::DBInstance` resource.
 */
// @ts-ignore TS6133
function rosDBInstancePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosDBInstancePropsValidator(properties).assertSuccess();
    }
    return {
      DBInstanceId: ros.stringToRosTemplate(properties.dbInstanceId),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::RDS::DBInstance`ALIYUN::REDIS::Account is used to create an account that has the specified permissions on an ApsaraDB for Redis instance.
 * @Note This class does not contain additional functions, so it is recommended to use the `DBInstance` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-rds-dbinstance
 */
export class RosDBInstance extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::RDS::DBInstance";

    /**
     * @Attribute AccountMaxQuantity: The maximum number of accounts that can be created on the instance.
     */
    public readonly attrAccountMaxQuantity: ros.IResolvable;

    /**
     * @Attribute AdvancedFeatures: The advanced features that are enabled for the instance. If multiple advanced features are enabled, the advanced features are separated by commas (,). This parameter is available only to instances that run SQL Server. Valid values:
LinkedServer
DistributeTransaction
     */
    public readonly attrAdvancedFeatures: ros.IResolvable;

    /**
     * @Attribute AutoUpgradeMinorVersion: The method that is used to update the minor engine version of the instance. Valid values:
Auto: automatic update.
Manual: manual update. The minor engine version of the instance is forcefully updated only when the in-use minor engine version is phased out.
     */
    public readonly attrAutoUpgradeMinorVersion: ros.IResolvable;

    /**
     * @Attribute AvailabilityValue: The availability status of the instance in percentage.
     */
    public readonly attrAvailabilityValue: ros.IResolvable;

    /**
     * @Attribute BabelfishConfig: The configuration of the Babelfish feature for the ApsaraDB RDS for PostgreSQL instance.
     */
    public readonly attrBabelfishConfig: ros.IResolvable;

    /**
     * @Attribute Category: The RDS edition of the instance. Valid values:
Basic: RDS Basic Edition
HighAvailability: RDS High-availability Edition
cluster: RDS Cluster Edition for ApsaraDB RDS for MySQL
AlwaysOn: RDS Cluster Edition for ApsaraDB RDS for SQL Server
Finance: RDS Enterprise Edition
Serverless_basic: RDS Basic Edition for serverless instances
     */
    public readonly attrCategory: ros.IResolvable;

    /**
     * @Attribute Collation: The character set collation of the instance.
     */
    public readonly attrCollation: ros.IResolvable;

    /**
     * @Attribute ConnectionMode: The connection mode of the instance. Valid values:
Standard: standard mode
Safe: database proxy mode
     */
    public readonly attrConnectionMode: ros.IResolvable;

    /**
     * @Attribute ConnectionString: The internal endpoint of the instance.
     */
    public readonly attrConnectionString: ros.IResolvable;

    /**
     * @Attribute ConsoleVersion: The type of the proxy that is used by the instance. Valid values:
1: shared proxy
2: dedicated proxy
     */
    public readonly attrConsoleVersion: ros.IResolvable;

    /**
     * @Attribute CreationTime: The creation time. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
     */
    public readonly attrCreationTime: ros.IResolvable;

    /**
     * @Attribute CurrentKernelVersion: The minor engine version of the instance.
     */
    public readonly attrCurrentKernelVersion: ros.IResolvable;

    /**
     * @Attribute DBClusterNodes: The information about the node in the cluster.
     */
    public readonly attrDbClusterNodes: ros.IResolvable;

    /**
     * @Attribute DBInstanceCPU: The number of CPU cores.
     */
    public readonly attrDbInstanceCpu: ros.IResolvable;

    /**
     * @Attribute DBInstanceClass: The instance type of the instance.
     */
    public readonly attrDbInstanceClass: ros.IResolvable;

    /**
     * @Attribute DBInstanceClassType: The instance family to which the instance belongs. Valid values:
s: shared instance family
x: general-purpose instance family
d: dedicated instance family
h: dedicated host instance family
     */
    public readonly attrDbInstanceClassType: ros.IResolvable;

    /**
     * @Attribute DBInstanceDescription: The description of the instance.
     */
    public readonly attrDbInstanceDescription: ros.IResolvable;

    /**
     * @Attribute DBInstanceDiskUsed: The disk usage of the instance.
     */
    public readonly attrDbInstanceDiskUsed: ros.IResolvable;

    /**
     * @Attribute DBInstanceId: The instance ID.
     */
    public readonly attrDbInstanceId: ros.IResolvable;

    /**
     * @Attribute DBInstanceMemory: The memory capacity of the instance. Unit: MB.
     */
    public readonly attrDbInstanceMemory: ros.IResolvable;

    /**
     * @Attribute DBInstanceNetType: The type of the network over which the instance is connected. Valid values:
Internet: Internet
Intranet: internal network
     */
    public readonly attrDbInstanceNetType: ros.IResolvable;

    /**
     * @Attribute DBInstanceStatus: The status of the instance.
     */
    public readonly attrDbInstanceStatus: ros.IResolvable;

    /**
     * @Attribute DBInstanceStorage: The storage capacity of the instance. Unit: GB.
     */
    public readonly attrDbInstanceStorage: ros.IResolvable;

    /**
     * @Attribute DBInstanceStorageType: The storage type of the instance. Valid values:
local_ssd and ephemeral_ssd: local SSD
cloud_ssd: standard SSD
cloud_essd: enhanced SSD (ESSD)
     */
    public readonly attrDbInstanceStorageType: ros.IResolvable;

    /**
     * @Attribute DBInstanceType: The type of the instance. Valid values:
Primary: primary instance
Readonly: read-only instance
Guard: disaster recovery instance
Temp: temporary instance
     */
    public readonly attrDbInstanceType: ros.IResolvable;

    /**
     * @Attribute DBMaxQuantity: The maximum number of databases that can be created on the instance.
     */
    public readonly attrDbMaxQuantity: ros.IResolvable;

    /**
     * @Attribute DedicatedHostGroupId: The ID of the dedicated cluster.
     */
    public readonly attrDedicatedHostGroupId: ros.IResolvable;

    /**
     * @Attribute DeletionProtection: Indicates whether the release protection feature is enabled. Valid values:
true
false
     */
    public readonly attrDeletionProtection: ros.IResolvable;

    /**
     * @Attribute Engine: The database engine of the instance. Valid values:
MySQL
PostgreSQL
SQLServer
MariaDB
     */
    public readonly attrEngine: ros.IResolvable;

    /**
     * @Attribute EngineVersion: The database engine version.
     */
    public readonly attrEngineVersion: ros.IResolvable;

    /**
     * @Attribute ExpireTime: The expiration time. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
Note: Pay-as-you-go instances never expire.
     */
    public readonly attrExpireTime: ros.IResolvable;

    /**
     * @Attribute Extra: The extended information of the instance.
     */
    public readonly attrExtra: ros.IResolvable;

    /**
     * @Attribute GeneralGroupName: The name of the dedicated cluster to which the instance belongs. This parameter is returned only when the instance is created in an ApsaraDB MyBase cluster that runs MySQL on Standard Edition.
     */
    public readonly attrGeneralGroupName: ros.IResolvable;

    /**
     * @Attribute GuardDBInstanceId: The ID of the disaster recovery instance that is attached to the instance.
     */
    public readonly attrGuardDbInstanceId: ros.IResolvable;

    /**
     * @Attribute IPType: The type of the IP address. Only IPv4 addresses are supported.
     */
    public readonly attrIpType: ros.IResolvable;

    /**
     * @Attribute IncrementSourceDBInstanceId: The ID of the instance from which incremental data comes. The incremental data of a disaster recovery instance or read-only instance comes from its primary instance. If this parameter is not returned, the instance is a primary instance.
     */
    public readonly attrIncrementSourceDbInstanceId: ros.IResolvable;

    /**
     * @Attribute InstanceNetworkType: The network type of the instance. Valid values:
Classic
VPC
     */
    public readonly attrInstanceNetworkType: ros.IResolvable;

    /**
     * @Attribute InstructionSetArch: The architecture type of the instance. Valid values:
x86
arm
     */
    public readonly attrInstructionSetArch: ros.IResolvable;

    /**
     * @Attribute LatestKernelVersion: The latest minor engine version that is supported by the instance.
     */
    public readonly attrLatestKernelVersion: ros.IResolvable;

    /**
     * @Attribute LockMode: The lock mode of the instance. Valid values:
Unlock: The instance is not locked.
ManualLock: The instance is manually locked.
LockByExpiration: The instance is automatically locked due to instance expiration.
LockByRestoration: The instance is automatically locked due to instance restoration.
LockByDiskQuota: The instance is automatically locked due to exhausted storage space.
LockReadInstanceByDiskQuota: The instance is a read-only instance and is automatically locked due to exhausted storage.
     */
    public readonly attrLockMode: ros.IResolvable;

    /**
     * @Attribute LockReason: The reason why the instance was locked.
     */
    public readonly attrLockReason: ros.IResolvable;

    /**
     * @Attribute MaintainTime: The maintenance window of the instance. The time is displayed in UTC. Take note that the maintenance window displayed in the ApsaraDB RDS console is equal to the value of this parameter plus 8 hours.
     */
    public readonly attrMaintainTime: ros.IResolvable;

    /**
     * @Attribute MasterInstanceId: The ID of the primary instance.
Note: If this parameter is not returned, the instance is the primary instance.
     */
    public readonly attrMasterInstanceId: ros.IResolvable;

    /**
     * @Attribute MasterZone: The zone ID of the primary instance.
     */
    public readonly attrMasterZone: ros.IResolvable;

    /**
     * @Attribute MaxConnections: The maximum number of concurrent connections.
     */
    public readonly attrMaxConnections: ros.IResolvable;

    /**
     * @Attribute MaxIOMBPS: The maximum I/O throughput. Unit: MB/s.
     */
    public readonly attrMaxIombps: ros.IResolvable;

    /**
     * @Attribute MaxIOPS: The maximum number of I/O requests per second.
     */
    public readonly attrMaxIops: ros.IResolvable;

    /**
     * @Attribute PGBouncerEnabled: Indicates whether PgBouncer is enabled.
     */
    public readonly attrPgBouncerEnabled: ros.IResolvable;

    /**
     * @Attribute PayType: The billing method of the instance. Valid values:
Postpaid: pay-as-you-go
Prepaid: subscription
     */
    public readonly attrPayType: ros.IResolvable;

    /**
     * @Attribute Port: The port that is used to connect to the instance over an internal network.
     */
    public readonly attrPort: ros.IResolvable;

    /**
     * @Attribute ProxyType: The type of the proxy that is supported by the instance. Valid values:
0: The instance does not support database proxies.
1: The instance supports shared proxies, with which the instance runs in multi-tenant mode.
2: The instance supports dedicated proxies, with which the instance runs in single-tenant mode.
     */
    public readonly attrProxyType: ros.IResolvable;

    /**
     * @Attribute ReadOnlyDBInstanceIds: The IDs of the read-only instances that are attached to the primary instance.
     */
    public readonly attrReadOnlyDbInstanceIds: ros.IResolvable;

    /**
     * @Attribute ReadonlyInstanceSQLDelayedTime: The latency at which the system replicates data to read-only instances. The system replicates data from the primary instance to the read-only instances at the latency that is specified by the ReadonlyInstanceSQLDelayedTime parameter. Unit: seconds.
     */
    public readonly attrReadonlyInstanceSqlDelayedTime: ros.IResolvable;

    /**
     * @Attribute ResourceGroupId: The resource group ID.
     */
    public readonly attrResourceGroupId: ros.IResolvable;

    /**
     * @Attribute SecurityIPList: The IP addresses in the IP address whitelist.
     */
    public readonly attrSecurityIpList: ros.IResolvable;

    /**
     * @Attribute SecurityIPMode: The whitelist mode of the instance. Valid values:
normal: standard whitelist mode
safety: enhanced whitelist mode
     */
    public readonly attrSecurityIpMode: ros.IResolvable;

    /**
     * @Attribute ServerlessConfig: The settings of the serverless instance.
     */
    public readonly attrServerlessConfig: ros.IResolvable;

    /**
     * @Attribute SlaveZones: The information about the zone of the secondary instance.
     */
    public readonly attrSlaveZones: ros.IResolvable;

    /**
     * @Attribute SuperPermissionMode: Indicates whether the instance supports superuser accounts, such as the system administrator (SA) account, the Active Directory (AD) account, and the host account.
Enable
Disabled
     */
    public readonly attrSuperPermissionMode: ros.IResolvable;

    /**
     * @Attribute TempDBInstanceId: The ID of the temporary instance that is attached to the instance.
     */
    public readonly attrTempDbInstanceId: ros.IResolvable;

    /**
     * @Attribute TimeZone: The time zone of the instance.
     */
    public readonly attrTimeZone: ros.IResolvable;

    /**
     * @Attribute Tips: The information about the exception that is detected on the instance. This parameter is returned only when the instance is created in an ApsaraDB MyBase cluster that runs MySQL on Standard Edition.
     */
    public readonly attrTips: ros.IResolvable;

    /**
     * @Attribute TipsLevel: The severity level of the exception that is detected on the instance. This parameter is returned only when the instance is created in an ApsaraDB MyBase cluster that runs MySQL on Standard Edition. Valid values:
1: The instance is normal.
2: The specifications of the read-only instances do not match the specifications of the primary instance. You must adjust the specifications of these instances based on your business requirements.
     */
    public readonly attrTipsLevel: ros.IResolvable;

    /**
     * @Attribute VSwitchId: The vSwitch ID.
     */
    public readonly attrVSwitchId: ros.IResolvable;

    /**
     * @Attribute VpcCloudInstanceId: The VPC ID.
     */
    public readonly attrVpcCloudInstanceId: ros.IResolvable;

    /**
     * @Attribute VpcId: The virtual private cloud (VPC) ID of the instance.
     */
    public readonly attrVpcId: ros.IResolvable;

    /**
     * @Attribute ZoneId: The zone ID.
     */
    public readonly attrZoneId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property dbInstanceId: The ID of the instance.
     */
    public dbInstanceId: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDBInstanceProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosDBInstance.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAccountMaxQuantity = this.getAtt('AccountMaxQuantity');
        this.attrAdvancedFeatures = this.getAtt('AdvancedFeatures');
        this.attrAutoUpgradeMinorVersion = this.getAtt('AutoUpgradeMinorVersion');
        this.attrAvailabilityValue = this.getAtt('AvailabilityValue');
        this.attrBabelfishConfig = this.getAtt('BabelfishConfig');
        this.attrCategory = this.getAtt('Category');
        this.attrCollation = this.getAtt('Collation');
        this.attrConnectionMode = this.getAtt('ConnectionMode');
        this.attrConnectionString = this.getAtt('ConnectionString');
        this.attrConsoleVersion = this.getAtt('ConsoleVersion');
        this.attrCreationTime = this.getAtt('CreationTime');
        this.attrCurrentKernelVersion = this.getAtt('CurrentKernelVersion');
        this.attrDbClusterNodes = this.getAtt('DBClusterNodes');
        this.attrDbInstanceCpu = this.getAtt('DBInstanceCPU');
        this.attrDbInstanceClass = this.getAtt('DBInstanceClass');
        this.attrDbInstanceClassType = this.getAtt('DBInstanceClassType');
        this.attrDbInstanceDescription = this.getAtt('DBInstanceDescription');
        this.attrDbInstanceDiskUsed = this.getAtt('DBInstanceDiskUsed');
        this.attrDbInstanceId = this.getAtt('DBInstanceId');
        this.attrDbInstanceMemory = this.getAtt('DBInstanceMemory');
        this.attrDbInstanceNetType = this.getAtt('DBInstanceNetType');
        this.attrDbInstanceStatus = this.getAtt('DBInstanceStatus');
        this.attrDbInstanceStorage = this.getAtt('DBInstanceStorage');
        this.attrDbInstanceStorageType = this.getAtt('DBInstanceStorageType');
        this.attrDbInstanceType = this.getAtt('DBInstanceType');
        this.attrDbMaxQuantity = this.getAtt('DBMaxQuantity');
        this.attrDedicatedHostGroupId = this.getAtt('DedicatedHostGroupId');
        this.attrDeletionProtection = this.getAtt('DeletionProtection');
        this.attrEngine = this.getAtt('Engine');
        this.attrEngineVersion = this.getAtt('EngineVersion');
        this.attrExpireTime = this.getAtt('ExpireTime');
        this.attrExtra = this.getAtt('Extra');
        this.attrGeneralGroupName = this.getAtt('GeneralGroupName');
        this.attrGuardDbInstanceId = this.getAtt('GuardDBInstanceId');
        this.attrIpType = this.getAtt('IPType');
        this.attrIncrementSourceDbInstanceId = this.getAtt('IncrementSourceDBInstanceId');
        this.attrInstanceNetworkType = this.getAtt('InstanceNetworkType');
        this.attrInstructionSetArch = this.getAtt('InstructionSetArch');
        this.attrLatestKernelVersion = this.getAtt('LatestKernelVersion');
        this.attrLockMode = this.getAtt('LockMode');
        this.attrLockReason = this.getAtt('LockReason');
        this.attrMaintainTime = this.getAtt('MaintainTime');
        this.attrMasterInstanceId = this.getAtt('MasterInstanceId');
        this.attrMasterZone = this.getAtt('MasterZone');
        this.attrMaxConnections = this.getAtt('MaxConnections');
        this.attrMaxIombps = this.getAtt('MaxIOMBPS');
        this.attrMaxIops = this.getAtt('MaxIOPS');
        this.attrPgBouncerEnabled = this.getAtt('PGBouncerEnabled');
        this.attrPayType = this.getAtt('PayType');
        this.attrPort = this.getAtt('Port');
        this.attrProxyType = this.getAtt('ProxyType');
        this.attrReadOnlyDbInstanceIds = this.getAtt('ReadOnlyDBInstanceIds');
        this.attrReadonlyInstanceSqlDelayedTime = this.getAtt('ReadonlyInstanceSQLDelayedTime');
        this.attrResourceGroupId = this.getAtt('ResourceGroupId');
        this.attrSecurityIpList = this.getAtt('SecurityIPList');
        this.attrSecurityIpMode = this.getAtt('SecurityIPMode');
        this.attrServerlessConfig = this.getAtt('ServerlessConfig');
        this.attrSlaveZones = this.getAtt('SlaveZones');
        this.attrSuperPermissionMode = this.getAtt('SuperPermissionMode');
        this.attrTempDbInstanceId = this.getAtt('TempDBInstanceId');
        this.attrTimeZone = this.getAtt('TimeZone');
        this.attrTips = this.getAtt('Tips');
        this.attrTipsLevel = this.getAtt('TipsLevel');
        this.attrVSwitchId = this.getAtt('VSwitchId');
        this.attrVpcCloudInstanceId = this.getAtt('VpcCloudInstanceId');
        this.attrVpcId = this.getAtt('VpcId');
        this.attrZoneId = this.getAtt('ZoneId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.dbInstanceId = props.dbInstanceId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            dbInstanceId: this.dbInstanceId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosDBInstancePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
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
 * Determine whether the given properties match those of a `RosDBInstancesProps`
 *
 * @param properties - the TypeScript properties of a `RosDBInstancesProps`
 *
 * @returns the result of the validation.
 */
function RosDBInstancesPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('dedicatedHostId', ros.validateString)(properties.dedicatedHostId));
    errors.collect(ros.propertyValidator('engineVersion', ros.validateString)(properties.engineVersion));
    errors.collect(ros.propertyValidator('dbInstanceStatus', ros.validateString)(properties.dbInstanceStatus));
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    errors.collect(ros.propertyValidator('zoneId', ros.validateString)(properties.zoneId));
    errors.collect(ros.propertyValidator('dbInstanceClass', ros.validateString)(properties.dbInstanceClass));
    errors.collect(ros.propertyValidator('dedicatedHostGroupId', ros.validateString)(properties.dedicatedHostGroupId));
    errors.collect(ros.propertyValidator('vSwitchId', ros.validateString)(properties.vSwitchId));
    if(properties.dbInstanceType && (typeof properties.dbInstanceType) !== 'object') {
        errors.collect(ros.propertyValidator('dbInstanceType', ros.validateAllowedValues)({
          data: properties.dbInstanceType,
          allowedValues: ["Primary","Readonly","Guard","Temp"],
        }));
    }
    errors.collect(ros.propertyValidator('dbInstanceType', ros.validateString)(properties.dbInstanceType));
    errors.collect(ros.propertyValidator('instanceLevel', ros.validateNumber)(properties.instanceLevel));
    if(properties.expired && (typeof properties.expired) !== 'object') {
        errors.collect(ros.propertyValidator('expired', ros.validateAllowedValues)({
          data: properties.expired,
          allowedValues: ["True","False"],
        }));
    }
    errors.collect(ros.propertyValidator('expired', ros.validateString)(properties.expired));
    if(properties.payType && (typeof properties.payType) !== 'object') {
        errors.collect(ros.propertyValidator('payType', ros.validateAllowedValues)({
          data: properties.payType,
          allowedValues: ["Postpaid","Prepaid"],
        }));
    }
    errors.collect(ros.propertyValidator('payType', ros.validateString)(properties.payType));
    if(properties.instanceNetworkType && (typeof properties.instanceNetworkType) !== 'object') {
        errors.collect(ros.propertyValidator('instanceNetworkType', ros.validateAllowedValues)({
          data: properties.instanceNetworkType,
          allowedValues: ["VPC","Classic"],
        }));
    }
    errors.collect(ros.propertyValidator('instanceNetworkType', ros.validateString)(properties.instanceNetworkType));
    errors.collect(ros.propertyValidator('vpcId', ros.validateString)(properties.vpcId));
    errors.collect(ros.propertyValidator('dbInstanceId', ros.validateString)(properties.dbInstanceId));
    errors.collect(ros.propertyValidator('searchKey', ros.validateString)(properties.searchKey));
    if(properties.connectionMode && (typeof properties.connectionMode) !== 'object') {
        errors.collect(ros.propertyValidator('connectionMode', ros.validateAllowedValues)({
          data: properties.connectionMode,
          allowedValues: ["Standard","Safe"],
        }));
    }
    errors.collect(ros.propertyValidator('connectionMode', ros.validateString)(properties.connectionMode));
    errors.collect(ros.propertyValidator('connectionString', ros.validateString)(properties.connectionString));
    if(properties.engine && (typeof properties.engine) !== 'object') {
        errors.collect(ros.propertyValidator('engine', ros.validateAllowedValues)({
          data: properties.engine,
          allowedValues: ["MySQL","SQLServer","PostgreSQL","MariaDB"],
        }));
    }
    errors.collect(ros.propertyValidator('engine', ros.validateString)(properties.engine));
    errors.collect(ros.propertyValidator('proxyId', ros.validateString)(properties.proxyId));
    return errors.wrap('supplied properties not correct for "RosDBInstancesProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::RDS::DBInstances` resource
 *
 * @param properties - the TypeScript properties of a `RosDBInstancesProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::RDS::DBInstances` resource.
 */
// @ts-ignore TS6133
function rosDBInstancesPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosDBInstancesPropsValidator(properties).assertSuccess();
    }
    return {
      ConnectionMode: ros.stringToRosTemplate(properties.connectionMode),
      ConnectionString: ros.stringToRosTemplate(properties.connectionString),
      DBInstanceClass: ros.stringToRosTemplate(properties.dbInstanceClass),
      DBInstanceId: ros.stringToRosTemplate(properties.dbInstanceId),
      DBInstanceStatus: ros.stringToRosTemplate(properties.dbInstanceStatus),
      DBInstanceType: ros.stringToRosTemplate(properties.dbInstanceType),
      DedicatedHostGroupId: ros.stringToRosTemplate(properties.dedicatedHostGroupId),
      DedicatedHostId: ros.stringToRosTemplate(properties.dedicatedHostId),
      Engine: ros.stringToRosTemplate(properties.engine),
      EngineVersion: ros.stringToRosTemplate(properties.engineVersion),
      Expired: ros.stringToRosTemplate(properties.expired),
      InstanceLevel: ros.numberToRosTemplate(properties.instanceLevel),
      InstanceNetworkType: ros.stringToRosTemplate(properties.instanceNetworkType),
      PayType: ros.stringToRosTemplate(properties.payType),
      proxyId: ros.stringToRosTemplate(properties.proxyId),
      ResourceGroupId: ros.stringToRosTemplate(properties.resourceGroupId),
      SearchKey: ros.stringToRosTemplate(properties.searchKey),
      VpcId: ros.stringToRosTemplate(properties.vpcId),
      VSwitchId: ros.stringToRosTemplate(properties.vSwitchId),
      ZoneId: ros.stringToRosTemplate(properties.zoneId),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::RDS::DBInstances`, which is used to query ApsaraDB RDS instances.
 * @Note This class does not contain additional functions, so it is recommended to use the `DBInstances` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-rds-dbinstances
 */
export class RosDBInstances extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::RDS::DBInstances";

    /**
     * @Attribute DBInstanceIds: The list of The RDS Database instance Ids.
     */
    public readonly attrDbInstanceIds: ros.IResolvable;

    /**
     * @Attribute DBInstances: The list of The RDS Database instances.
     */
    public readonly attrDbInstances: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property connectionMode: The connection mode of the instance.
     */
    public connectionMode: string | ros.IResolvable | undefined;

    /**
     * @Property connectionString: The endpoint of the instance.
     */
    public connectionString: string | ros.IResolvable | undefined;

    /**
     * @Property dbInstanceClass: The instance type of the instances.
     */
    public dbInstanceClass: string | ros.IResolvable | undefined;

    /**
     * @Property dbInstanceId: The ID of the instance.
     */
    public dbInstanceId: string | ros.IResolvable | undefined;

    /**
     * @Property dbInstanceStatus: The status of the instances.
     */
    public dbInstanceStatus: string | ros.IResolvable | undefined;

    /**
     * @Property dbInstanceType: The role of the instances.
     */
    public dbInstanceType: string | ros.IResolvable | undefined;

    /**
     * @Property dedicatedHostGroupId: The ID of the dedicated cluster to which the instances belong.
     */
    public dedicatedHostGroupId: string | ros.IResolvable | undefined;

    /**
     * @Property dedicatedHostId: The ID of the host to which the instances belong in the specified dedicated cluster.
     */
    public dedicatedHostId: string | ros.IResolvable | undefined;

    /**
     * @Property engine: The database engine that is run by the instances.
     */
    public engine: string | ros.IResolvable | undefined;

    /**
     * @Property engineVersion: The version of the database engine that is run by the instances.
     */
    public engineVersion: string | ros.IResolvable | undefined;

    /**
     * @Property expired: Specifies whether the instances have expired.
     */
    public expired: string | ros.IResolvable | undefined;

    /**
     * @Property instanceLevel: Specifies whether to return the RDS editions of the instances by using the Category parameter.
     */
    public instanceLevel: number | ros.IResolvable | undefined;

    /**
     * @Property instanceNetworkType: The network type of the instances.
     */
    public instanceNetworkType: string | ros.IResolvable | undefined;

    /**
     * @Property payType: The billing method of the instances.
     */
    public payType: string | ros.IResolvable | undefined;

    /**
     * @Property proxyId: The ID of the proxy mode.
     */
    public proxyId: string | ros.IResolvable | undefined;

    /**
     * @Property resourceGroupId: The ID of the resource group to which the instances belong.
     */
    public resourceGroupId: string | ros.IResolvable | undefined;

    /**
     * @Property searchKey: The keywords that are contained in the IDs or descriptions of the instances.
     */
    public searchKey: string | ros.IResolvable | undefined;

    /**
     * @Property vpcId: The ID of the virtual private cloud (VPC) to which the instances belong.
     */
    public vpcId: string | ros.IResolvable | undefined;

    /**
     * @Property vSwitchId: The ID of the vSwitch that is associated with the specified VPC.
     */
    public vSwitchId: string | ros.IResolvable | undefined;

    /**
     * @Property zoneId: The ID of the zone to which the instances belong
     */
    public zoneId: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDBInstancesProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosDBInstances.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrDbInstanceIds = this.getAtt('DBInstanceIds');
        this.attrDbInstances = this.getAtt('DBInstances');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.connectionMode = props.connectionMode;
        this.connectionString = props.connectionString;
        this.dbInstanceClass = props.dbInstanceClass;
        this.dbInstanceId = props.dbInstanceId;
        this.dbInstanceStatus = props.dbInstanceStatus;
        this.dbInstanceType = props.dbInstanceType;
        this.dedicatedHostGroupId = props.dedicatedHostGroupId;
        this.dedicatedHostId = props.dedicatedHostId;
        this.engine = props.engine;
        this.engineVersion = props.engineVersion;
        this.expired = props.expired;
        this.instanceLevel = props.instanceLevel;
        this.instanceNetworkType = props.instanceNetworkType;
        this.payType = props.payType;
        this.proxyId = props.proxyId;
        this.resourceGroupId = props.resourceGroupId;
        this.searchKey = props.searchKey;
        this.vpcId = props.vpcId;
        this.vSwitchId = props.vSwitchId;
        this.zoneId = props.zoneId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            connectionMode: this.connectionMode,
            connectionString: this.connectionString,
            dbInstanceClass: this.dbInstanceClass,
            dbInstanceId: this.dbInstanceId,
            dbInstanceStatus: this.dbInstanceStatus,
            dbInstanceType: this.dbInstanceType,
            dedicatedHostGroupId: this.dedicatedHostGroupId,
            dedicatedHostId: this.dedicatedHostId,
            engine: this.engine,
            engineVersion: this.engineVersion,
            expired: this.expired,
            instanceLevel: this.instanceLevel,
            instanceNetworkType: this.instanceNetworkType,
            payType: this.payType,
            proxyId: this.proxyId,
            resourceGroupId: this.resourceGroupId,
            searchKey: this.searchKey,
            vpcId: this.vpcId,
            vSwitchId: this.vSwitchId,
            zoneId: this.zoneId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosDBInstancesPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
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
 * Determine whether the given properties match those of a `RosDatabasesProps`
 *
 * @param properties - the TypeScript properties of a `RosDatabasesProps`
 *
 * @returns the result of the validation.
 */
function RosDatabasesPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('dbInstanceId', ros.requiredValidator)(properties.dbInstanceId));
    errors.collect(ros.propertyValidator('dbInstanceId', ros.validateString)(properties.dbInstanceId));
    errors.collect(ros.propertyValidator('dbName', ros.validateString)(properties.dbName));
    if(properties.dbStatus && (typeof properties.dbStatus) !== 'object') {
        errors.collect(ros.propertyValidator('dbStatus', ros.validateAllowedValues)({
          data: properties.dbStatus,
          allowedValues: ["Creating","Running","Deleting"],
        }));
    }
    errors.collect(ros.propertyValidator('dbStatus', ros.validateString)(properties.dbStatus));
    return errors.wrap('supplied properties not correct for "RosDatabasesProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::RDS::Databases` resource
 *
 * @param properties - the TypeScript properties of a `RosDatabasesProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::RDS::Databases` resource.
 */
// @ts-ignore TS6133
function rosDatabasesPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosDatabasesPropsValidator(properties).assertSuccess();
    }
    return {
      DBInstanceId: ros.stringToRosTemplate(properties.dbInstanceId),
      DBName: ros.stringToRosTemplate(properties.dbName),
      DBStatus: ros.stringToRosTemplate(properties.dbStatus),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::RDS::Databases`, which is used to query the details of databases in an ApsaraDB RDS instance.
 * @Note This class does not contain additional functions, so it is recommended to use the `Databases` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-rds-databases
 */
export class RosDatabases extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::RDS::Databases";

    /**
     * @Attribute DBNames: The list of The RDS database names.
     */
    public readonly attrDbNames: ros.IResolvable;

    /**
     * @Attribute Databases: The list of The RDS databases.
     */
    public readonly attrDatabases: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property dbInstanceId: The ID of the RDS instance.
     */
    public dbInstanceId: string | ros.IResolvable;

    /**
     * @Property dbName: The names of the databases whose information you want to query.
     */
    public dbName: string | ros.IResolvable | undefined;

    /**
     * @Property dbStatus: The status of the databases whose information you want to query.
     */
    public dbStatus: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDatabasesProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosDatabases.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrDbNames = this.getAtt('DBNames');
        this.attrDatabases = this.getAtt('Databases');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.dbInstanceId = props.dbInstanceId;
        this.dbName = props.dbName;
        this.dbStatus = props.dbStatus;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            dbInstanceId: this.dbInstanceId,
            dbName: this.dbName,
            dbStatus: this.dbStatus,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosDatabasesPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
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
 * Determine whether the given properties match those of a `RosZonesProps`
 *
 * @param properties - the TypeScript properties of a `RosZonesProps`
 *
 * @returns the result of the validation.
 */
function RosZonesPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.dispenseMode && (typeof properties.dispenseMode) !== 'object') {
        errors.collect(ros.propertyValidator('dispenseMode', ros.validateAllowedValues)({
          data: properties.dispenseMode,
          allowedValues: ["0","1"],
        }));
    }
    errors.collect(ros.propertyValidator('dispenseMode', ros.validateString)(properties.dispenseMode));
    if(properties.category && (typeof properties.category) !== 'object') {
        errors.collect(ros.propertyValidator('category', ros.validateAllowedValues)({
          data: properties.category,
          allowedValues: ["Basic","HighAvailability","AlwaysOn","Finance"],
        }));
    }
    errors.collect(ros.propertyValidator('category', ros.validateString)(properties.category));
    errors.collect(ros.propertyValidator('engineVersion', ros.validateString)(properties.engineVersion));
    errors.collect(ros.propertyValidator('zoneId', ros.validateString)(properties.zoneId));
    if(properties.commodityCode && (typeof properties.commodityCode) !== 'object') {
        errors.collect(ros.propertyValidator('commodityCode', ros.validateAllowedValues)({
          data: properties.commodityCode,
          allowedValues: ["bards","rds","rords","rds_rordspre_public_cn","bards_intl","rds_intl","rords_intl","rds_rordspre_public_intl"],
        }));
    }
    errors.collect(ros.propertyValidator('commodityCode', ros.validateString)(properties.commodityCode));
    errors.collect(ros.propertyValidator('engine', ros.requiredValidator)(properties.engine));
    if(properties.engine && (typeof properties.engine) !== 'object') {
        errors.collect(ros.propertyValidator('engine', ros.validateAllowedValues)({
          data: properties.engine,
          allowedValues: ["MySQL","SQLServer","PostgreSQL","MariaDB"],
        }));
    }
    errors.collect(ros.propertyValidator('engine', ros.validateString)(properties.engine));
    return errors.wrap('supplied properties not correct for "RosZonesProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `DATASOURCE::RDS::Zones` resource
 *
 * @param properties - the TypeScript properties of a `RosZonesProps`
 *
 * @returns the AliCloud ROS Resource properties of an `DATASOURCE::RDS::Zones` resource.
 */
// @ts-ignore TS6133
function rosZonesPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosZonesPropsValidator(properties).assertSuccess();
    }
    return {
      Engine: ros.stringToRosTemplate(properties.engine),
      Category: ros.stringToRosTemplate(properties.category),
      CommodityCode: ros.stringToRosTemplate(properties.commodityCode),
      DispenseMode: ros.stringToRosTemplate(properties.dispenseMode),
      EngineVersion: ros.stringToRosTemplate(properties.engineVersion),
      ZoneId: ros.stringToRosTemplate(properties.zoneId),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::RDS::Zones`, which is used to query the zones that are available to an ApsaraDB RDS instance.
 * @Note This class does not contain additional functions, so it is recommended to use the `Zones` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-rds-zones
 */
export class RosZones extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::RDS::Zones";

    /**
     * @Attribute ZoneIds: The list of zone IDs.
     */
    public readonly attrZoneIds: ros.IResolvable;

    /**
     * @Attribute Zones: The list of The Zones.
     */
    public readonly attrZones: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property engine: The database engine that is run by the instance.
     */
    public engine: string | ros.IResolvable;

    /**
     * @Property category: The RDS edition of the instance. Valid values:
     * Basic: RDS Basic Edition
     * HighAvailability: RDS High-availability Edition
     * AlwaysOn: RDS Cluster Edition
     * Finance: RDS Enterprise Edition
     */
    public category: string | ros.IResolvable | undefined;

    /**
     * @Property commodityCode: The commodity code of the instance.
     */
    public commodityCode: string | ros.IResolvable | undefined;

    /**
     * @Property dispenseMode: Specifies whether to return the zones in which the single-zone deployment method is supported. Valid values:
     * 1: returns the zones.
     * 0: does not return the zones.
     * Default value: 0.
     */
    public dispenseMode: string | ros.IResolvable | undefined;

    /**
     * @Property engineVersion: The version of the database engine that is run by the instance.
     */
    public engineVersion: string | ros.IResolvable | undefined;

    /**
     * @Property zoneId: The ID of the zone in which the instance is located. 
     * If the instance spans more than one zone, the value of this parameter contains an MAZ part,such as cn-hangzhou-MAZ6(b,f) and cn-hangzhou-MAZ5(b,e,f)
     */
    public zoneId: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosZonesProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosZones.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrZoneIds = this.getAtt('ZoneIds');
        this.attrZones = this.getAtt('Zones');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.engine = props.engine;
        this.category = props.category;
        this.commodityCode = props.commodityCode;
        this.dispenseMode = props.dispenseMode;
        this.engineVersion = props.engineVersion;
        this.zoneId = props.zoneId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            engine: this.engine,
            category: this.category,
            commodityCode: this.commodityCode,
            dispenseMode: this.dispenseMode,
            engineVersion: this.engineVersion,
            zoneId: this.zoneId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosZonesPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
