import * as ros from '@alicloud/ros-cdk-core';
import { RosDBInstance } from './rds.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosDBInstance as DBInstanceProperty };

/**
 * Properties for defining a `DBInstance`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-rds-dbinstance
 */
export interface DBInstanceProps {

    /**
     * Property dbInstanceClass: Database instance type. Refer the RDS database instance type reference, such as 'rds.mys2.large', 'rds.mss1.large', 'rds.pg.s1.small' etc
     */
    readonly dbInstanceClass: string | ros.IResolvable;

    /**
     * Property dbInstanceStorage: The storage capacity of the instance. Unit: GB. The storage capacity increases in increments of 5 GB. 
     * You can call the DescribeAvailableResource operation to query the storage capacity range that is supported for a specified instance type in a region.
     */
    readonly dbInstanceStorage: number | ros.IResolvable;

    /**
     * Property engine: Database instance engine type. Support MySQL\/SQLServer\/PostgreSQL\/PPAS\/MariaDB now.
     */
    readonly engine: string | ros.IResolvable;

    /**
     * Property engineVersion: Database instance version of the relative engine type. Support:
     * Valid values when you set the Engine parameter to MySQL: 5.5, 5.6, 5.7, and 8.0
     * Valid values when you set the Engine parameter to SQL Server: 2008r2, 08r2_ent_ha, 2012, 2012_ent_ha, 2012_std_ha, 2012_web, 2014_std_ha, 2016_ent_ha, 2016_std_ha, 2016_web, 2017_std_ha, 2017_ent, 2019_std_ha, and 2019_ent
     * Valid values when you set the Engine parameter to PostgreSQL: 10.0, 11.0, 12.0, 13.0, and 14.0
     * Valid values when you set the Engine parameter to MariaDB: 10.3
     */
    readonly engineVersion: string | ros.IResolvable;

    /**
     * Property securityIpList: Security ip to access the database instance, combine with comma, 0.0.0.0\/0 means no limitation.
     */
    readonly securityIpList: string | ros.IResolvable;

    /**
     * Property allocatePublicConnection: If true, allocate public connection automate.
     */
    readonly allocatePublicConnection?: boolean | ros.IResolvable;

    /**
     * Property archiveBackupKeepCount: The number of archived backups that can be retained. Default value: 1. Valid values: 
     * The value of this parameter ranges from 1 to 31 when the ArchiveBackupKeepPolicy 
     *  parameter is set to ByMonth. 
     * The value of this parameter ranges from 1 to 7 when the ArchiveBackupKeepPolicy 
     *  parameter is set to ByWeek. 
     * Note You do not need to specify this parameter when the ArchiveBackupKeepPolicy 
     * parameter is set to KeepAll.
     */
    readonly archiveBackupKeepCount?: number | ros.IResolvable;

    /**
     * Property archiveBackupKeepPolicy: The period for which to retain archived backups. The number of archived backups that can 
     *  be retained within the specified period is determined by the ArchiveBackupKeepCount parameter. 
     *  Default value: 0. Valid values: 
     * ByMonth 
     *  ByWeek 
     *  KeepAll
     */
    readonly archiveBackupKeepPolicy?: string | ros.IResolvable;

    /**
     * Property archiveBackupRetentionPeriod: The number of days for which to retain archived backups. 
     *  The default value 0 specifies not to enable the backup archiving function. Valid values: 30 to 1095.
     */
    readonly archiveBackupRetentionPeriod?: number | ros.IResolvable;

    /**
     * Property autoRenew: Specifies whether to enable auto-renewal. Valid values: true and false. Note
     * :Monthly subscription: The auto-renewal cycle is one month.
     * Annual subscription: The auto-renewal cycle is one year.
     */
    readonly autoRenew?: boolean | ros.IResolvable;

    /**
     * Property autoUpgradeMinorVersion: How the instance upgrades to a minor version.Valid values:
     * - Auto (default) : Updates minor versions automatically.
     * - Manual: No automatic upgrade, only forced when the current version is offline.
     */
    readonly autoUpgradeMinorVersion?: string | ros.IResolvable;

    /**
     * Property backUpCategory: Specifies whether to enable the second-level backup function. This function allows a backup 
     * to be completed within seconds. Valid values: 
     * Flash: specifies to enable the second-level backup function. 
     *  Standard: specifies to disable the second-level backup function.
     */
    readonly backUpCategory?: string | ros.IResolvable;

    /**
     * Property backupPolicyMode: Backup type, 
     * DataBackupPolicy: data backup 
     * LogBackupPolicy: log backup
     */
    readonly backupPolicyMode?: string | ros.IResolvable;

    /**
     * Property backupRetentionPeriod: The retention period of the data backup. Value range: 7 to 730. The default value is the original value. Note When the BackupPolicyMode parameter is set to LogBackupPolicy, this parameter is required.
     */
    readonly backupRetentionPeriod?: number | ros.IResolvable;

    /**
     * Property burstingEnabled: Whether to enable bursting.
     */
    readonly burstingEnabled?: boolean | ros.IResolvable;

    /**
     * Property category: The edition of the instance. Valid values:
     * Basic: RDS Basic Edition
     * HighAvailability: RDS High-availability Edition
     * cluster: RDS Cluster Edition
     * AlwaysOn: RDS Cluster Edition for SQL Server
     * Finance: RDS Enterprise Edition
     * serverless_basic: RDS Serverless Basic Edition
     */
    readonly category?: string | ros.IResolvable;

    /**
     * Property coldDataEnabled: Whether to enable cold data storage.
     */
    readonly coldDataEnabled?: boolean | ros.IResolvable;

    /**
     * Property compressType: The format used to compress backups. Valid values: 
     *  1: The zlib tool is used to compress backups into .tar.gz files. 
     *  4: The QuickLZ tool is used to compress backups into .xb.gz files. 
     * This compression format is supported only when the instance runs MySQL 5.6 or 5.7. 
     * It can be used to restore individual databases and tables. 
     *  8: The QuickLZ tool is used to compress backups into .xb.gz files. 
     *  This compression format is supported only when the instance runs MySQL 8.0. 
     * It cannot be used to restore individual databases or tables.
     */
    readonly compressType?: number | ros.IResolvable;

    /**
     * Property connectionMode: Connection Mode for database instance,support 'Standard' and 'Safe' mode. Default is RDS system assigns.
     */
    readonly connectionMode?: string | ros.IResolvable;

    /**
     * Property connectionStringPrefix: The prefix of the endpoint. 
     * Only the prefix of the CurrentConnectionString parameter value can be modified.
     * The prefix must be 8 to 64 characters in length and can contain letters, digits, and hyphens (-).
     */
    readonly connectionStringPrefix?: string | ros.IResolvable;

    /**
     * Property connectionStringType: The endpoint type of the instance, allow values: Inner, Public
     */
    readonly connectionStringType?: string | ros.IResolvable;

    /**
     * Property dbInstanceDescription: Description of created database instance.
     */
    readonly dbInstanceDescription?: string | ros.IResolvable;

    /**
     * Property dbInstanceNetType: Database instance net type, default is Intranet.Internet for public access, Intranet for private access.
     */
    readonly dbInstanceNetType?: string | ros.IResolvable;

    /**
     * Property dbInstanceStorageType: The storage type of the instance. Valid values:
     * local_ssd: specifies to use local SSDs. This is the recommended storage type.
     * cloud_ssd: specifies to use standard SSDs.
     * cloud_essd: enhanced SSD of performance level (PL)1.
     * cloud_essd2: enhanced SSD of PL2.
     * cloud_essd3: enhanced SSD of PL3.
     */
    readonly dbInstanceStorageType?: string | ros.IResolvable;

    /**
     * Property dbIsIgnoreCase: Specifies whether table names are case-sensitive. Valid values:
     * 1: Table names are not case-sensitive. This is the default value.
     * 0: Table names are case-sensitive.
     */
    readonly dbIsIgnoreCase?: number | ros.IResolvable;

    /**
     * Property dbMappings: Database mappings to attach to db instance.
     */
    readonly dbMappings?: Array<RosDBInstance.DBMappingsProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * Property dbParamGroupId: The ID of the parameter template used by the instance.
     */
    readonly dbParamGroupId?: string | ros.IResolvable;

    /**
     * Property dbTimeZone: The UTC time zone of the instance. Valid values: -12:00 to +12:00. The time zone must be an integer value such as +08:00. Values such as +08:30 are not allowed.
     */
    readonly dbTimeZone?: string | ros.IResolvable;

    /**
     * Property dedicatedHostGroupId: The ID of the host group to which the instance belongs if you create an instance in a host group.
     */
    readonly dedicatedHostGroupId?: string | ros.IResolvable;

    /**
     * Property deletionProtection: Specifies whether to enable the release protection feature for the instance. This feature is available only for pay-as-you-go instances. Default is false.
     */
    readonly deletionProtection?: boolean | ros.IResolvable;

    /**
     * Property enableBackupLog: Specifies whether to enable the log backup function. Valid values: 
     * True: specifies to enable the log backup function. 
     * False: specifies to disable the log backup function. 
     * Note You must specify this parameter when the BackupPolicyMode parameter is set to LogBackupPolicy.
     */
    readonly enableBackupLog?: boolean | ros.IResolvable;

    /**
     * Property encryptionKey: The ID of the encryption key that is used to encrypt data on SSDs in the region. You can view the encryption key ID in the Key Management Service (KMS) console. You can also create an encryption key.
     */
    readonly encryptionKey?: string | ros.IResolvable;

    /**
     * Property highSpaceUsageProtection: Specifies whether to forcibly delete log backup files when the space usage of the 
     *  instance exceeds 80% or the remaining space is less than 5 GB. Valid values: 
     *  Enable and Disable. You can retain the default value. Note You must specify 
     *  this parameter when the BackupPolicyMode parameter is set to LogBackupPolicy.
     */
    readonly highSpaceUsageProtection?: string | ros.IResolvable;

    /**
     * Property instanceNetworkType: Instance network type, VPC or Classic
     */
    readonly instanceNetworkType?: string | ros.IResolvable;

    /**
     * Property ioAccelerationEnabled: Whether to enable IO Acceleration, 1 for enable 0 for disable.
     */
    readonly ioAccelerationEnabled?: string | ros.IResolvable;

    /**
     * Property localLogRetentionHours: The number of hours for which to retain log backup files on the instance. 
     * Valid values: 0 to 168. The value 0 specifies not to retain log backup files on the instance. 
     * You can retain the default value. Note You must specify this parameter when the BackupPolicyMode 
     * parameter is set to LogBackupPolicy.
     */
    readonly localLogRetentionHours?: number | ros.IResolvable;

    /**
     * Property localLogRetentionSpace: The maximum percentage of space that is allowed to store log backup files on the instance. 
     *  If the space usage for log backup files exceeds this percentage, the system deletes earlier 
     *  log backup files until the space usage falls below this percentage. Valid values:0 to 50. 
     *  You can retain the default value. Note You must specify this parameter when the 
     *  BackupPolicyMode parameter is set to LogBackupPolicy.
     */
    readonly localLogRetentionSpace?: number | ros.IResolvable;

    /**
     * Property logBackupFrequency: The frequency at which to back up logs. Valid values: 
     * The value LogInterval specifies to back up logs every 30 minutes. 
     *  The default value of this parameter is the same as the data backup frequency. 
     * Note The value LogInterval is supported only when the instance runs SQL Server.
     */
    readonly logBackupFrequency?: string | ros.IResolvable;

    /**
     * Property logBackupLocalRetentionNumber: The number of log backup files that can be retained on the instance. 
     * Default value: 60. Valid values: 6 to 100.
     */
    readonly logBackupLocalRetentionNumber?: number | ros.IResolvable;

    /**
     * Property logBackupRetentionPeriod: The number of days for which to retain log backup files. Valid values: 7 to 730. The log backup 
     *  retention period cannot be longer than the data backup retention period.Note If you enable the log 
     *  backup function, you can specify the log backup retention period. This applies only when the 
     *  instance runs MySQL, PostgreSQL, or PPAS.
     */
    readonly logBackupRetentionPeriod?: number | ros.IResolvable;

    /**
     * Property maintainTime: The period during which the maintenance performs. The format is HH:mmZ-HH:mmZ.
     */
    readonly maintainTime?: string | ros.IResolvable;

    /**
     * Property masterUsername: The master user name for the database instance.
     */
    readonly masterUsername?: string | ros.IResolvable;

    /**
     * Property masterUserPassword: The master password for the database instance.
     */
    readonly masterUserPassword?: string | ros.IResolvable;

    /**
     * Property masterUserType: Privilege type of account.
     *  Normal: Common privilege. 
     *  Super: High privilege. 
     * Sysadmin: Super privileges (SA) (only supported by SQL Server)
     * The default value is Normal.
     */
    readonly masterUserType?: string | ros.IResolvable;

    /**
     * Property multiAz: Specifies if the database instance is a multiple Availability Zone deployment.
     */
    readonly multiAz?: boolean | ros.IResolvable;

    /**
     * Property payType: The charge type of created instance.
     */
    readonly payType?: string | ros.IResolvable;

    /**
     * Property period: The subscription duration. Valid values:
     * When PeriodType is Month, it could be from 1 to 12, 24, 36, 48, 60.
     *  When PeriodType is Year, it could be from 1 to 5.
     */
    readonly period?: number | ros.IResolvable;

    /**
     * Property periodType: Charge period for created instances.
     */
    readonly periodType?: string | ros.IResolvable;

    /**
     * Property port: The port of the database service.
     */
    readonly port?: number | ros.IResolvable;

    /**
     * Property preferredBackupPeriod: The backup period. Separate multiple values with commas (,). The default value is the original value. Valid values:Monday Tuesday Wednesday Thursday Friday Saturday Sunday Note When the BackupPolicyMode parameter is set to DataBackupPolicy, this parameter is required.
     */
    readonly preferredBackupPeriod?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * Property preferredBackupTime: The time when the backup task is performed. Format: yyyy-MM-ddZ-HH:mm:ssZ.Note When the BackupPolicyMode parameter is set to DataBackupPolicy, this parameter is required.
     */
    readonly preferredBackupTime?: string | ros.IResolvable;

    /**
     * Property privateIpAddress: The private ip for created instance.
     */
    readonly privateIpAddress?: string | ros.IResolvable;

    /**
     * Property releasedKeepPolicy: The policy used to retain archived backups if the instance is released. 
     *  Valid values: 
     * None: No archived backup files are retained.Lastest: Only the last archived backup is retained. 
     *  All: All of the archived backups are retained.
     */
    readonly releasedKeepPolicy?: string | ros.IResolvable;

    /**
     * Property resourceGroupId: Resource group id.
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * Property roleArn: The Alibaba Cloud Resource Name (ARN) provided to the service account of the instance by your Alibaba Cloud account to connect to KMS. You can copy the ARN from the RAM console.
     */
    readonly roleArn?: string | ros.IResolvable;

    /**
     * Property securityGroupId: The ID of the ECS security groups. 
     * Each RDS instance can be associated with up to three ECS security groups. 
     * You must separate them with commas (,). 
     * To delete an ECS Security group, leave this parameter empty. 
     *
     */
    readonly securityGroupId?: string | ros.IResolvable;

    /**
     * Property serverlessConfig: The config of RDS serverless instance. This is required when creating serverless instance.
     */
    readonly serverlessConfig?: RosDBInstance.ServerlessConfigProperty | ros.IResolvable;

    /**
     * Property slaveZoneIds: List of slave zone ids can specify slave zone ids when creating the high-availability or enterprise edition instance. Meanwhile, VSwitchId needs to pass in the corresponding vswitch id to the slave zone by order. For example, ZoneId = "zone-a" and SlaveZoneIds = ["zone-c", "zone-b"], then the VSwitchId must be "vsw-zone-a,vsw-zone-c,vsw-zone-b".
     */
    readonly slaveZoneIds?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * Property sqlCollectorStatus: Specifies whether to enable or disable the SQL Explorer (SQL audit) feature. 
     * Valid values:Enable | Disabled.
     */
    readonly sqlCollectorStatus?: string | ros.IResolvable;

    /**
     * Property sslSetting: Secure Sockets Layer (SSL) link setting of the instance. Valid values:
     * Disabled: Disable SSL
     * EnabledForPublicConnection: Public connection address will be protected by the SSL certificate. It requires AllocatePublicConnection is true.
     * EnabledForInnerConnection: Private connection address will be protected by the SSL certificate.
     * Default value is Disabled.
     */
    readonly sslSetting?: string | ros.IResolvable;

    /**
     * Property storageAutoScale: Storage space automatic expansion switch, only supported by MySQL and PostgreSQL
     */
    readonly storageAutoScale?: string | ros.IResolvable;

    /**
     * Property storageThreshold: Storage space automatic expansion trigger threshold (percentage)
     */
    readonly storageThreshold?: number | ros.IResolvable;

    /**
     * Property storageUpperBound: The total storage space upper limit for automatic storage space expansion, that is, automatic expansion will not cause the total storage space of the instance to exceed this value.
     */
    readonly storageUpperBound?: number | ros.IResolvable;

    /**
     * Property subscriptionDeletionForce: This option is only applicable to subscription instances. For subscription instances, if this option is true, the instance will be converted to a postpaid instance before being deleted. If false, the forced deletion will not be performed. This operation will incur additional fees, so choose carefully.
     */
    readonly subscriptionDeletionForce?: boolean | ros.IResolvable;

    /**
     * Property tags: The tags of an instance.
     * You should input the information of the tag with the format of the Key-Value, such as {"key1":"value1","key2":"value2", ... "key5":"value5"}.
     * At most 20 tags can be specified.
     * Key
     * It can be up to 64 characters in length.
     * Cannot begin with aliyun.
     * Cannot begin with http:\/\/ or https:\/\/.
     * Cannot be a null string.
     * Value
     * It can be up to 128 characters in length.
     * Cannot begin with aliyun.
     * Cannot begin with http:\/\/ or https:\/\/.
     * Can be a null string.
     */
    readonly tags?: { [key: string]: (any) };

    /**
     * Property targetDedicatedHostIdForLog: The ID of the host to which the instance belongs if you create a log instance in a host group.
     */
    readonly targetDedicatedHostIdForLog?: string | ros.IResolvable;

    /**
     * Property targetDedicatedHostIdForMaster: The ID of the host to which the instance belongs if you create a primary instance in a host group.
     */
    readonly targetDedicatedHostIdForMaster?: string | ros.IResolvable;

    /**
     * Property targetDedicatedHostIdForSlave: The ID of the host to which the instance belongs if you create a secondary instance in a host group.
     */
    readonly targetDedicatedHostIdForSlave?: string | ros.IResolvable;

    /**
     * Property vpcId: The VPC id of created database instance. For VPC network, the property is required.
     */
    readonly vpcId?: string | ros.IResolvable;

    /**
     * Property vSwitchId: The vSwitch id of created instance. For VPC network, the property is required.
     */
    readonly vSwitchId?: string | ros.IResolvable;

    /**
     * Property zoneId: selected zone to create database instance. You cannot set the ZoneId parameter if the MultiAZ parameter is set to true.
     */
    readonly zoneId?: string | ros.IResolvable;
}

/**
 * Represents a `DBInstance`.
 */
export interface IDBInstance extends ros.IResource {
    readonly props: DBInstanceProps;

    /**
     * Attribute DBInstanceId: The instance id of created database instance.
     */
    readonly attrDbInstanceId: ros.IResolvable | string;

    /**
     * Attribute InnerConnectionString: DB instance connection url by Intranet.
     */
    readonly attrInnerConnectionString: ros.IResolvable | string;

    /**
     * Attribute InnerIPAddress: IP Address for created DB instance of Intranet.
     */
    readonly attrInnerIpAddress: ros.IResolvable | string;

    /**
     * Attribute InnerPort: Intranet port of created DB instance.
     */
    readonly attrInnerPort: ros.IResolvable | string;

    /**
     * Attribute PublicConnectionString: DB instance connection url by Internet.
     */
    readonly attrPublicConnectionString: ros.IResolvable | string;

    /**
     * Attribute PublicIPAddress: IP Address for created DB instance of Internet.
     */
    readonly attrPublicIpAddress: ros.IResolvable | string;

    /**
     * Attribute PublicPort: Internet port of created DB instance.
     */
    readonly attrPublicPort: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::RDS::DBInstance`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosDBInstance`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-rds-dbinstance
 */
export class DBInstance extends ros.Resource implements IDBInstance {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: DBInstanceProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute DBInstanceId: The instance id of created database instance.
     */
    public readonly attrDbInstanceId: ros.IResolvable | string;

    /**
     * Attribute InnerConnectionString: DB instance connection url by Intranet.
     */
    public readonly attrInnerConnectionString: ros.IResolvable | string;

    /**
     * Attribute InnerIPAddress: IP Address for created DB instance of Intranet.
     */
    public readonly attrInnerIpAddress: ros.IResolvable | string;

    /**
     * Attribute InnerPort: Intranet port of created DB instance.
     */
    public readonly attrInnerPort: ros.IResolvable | string;

    /**
     * Attribute PublicConnectionString: DB instance connection url by Internet.
     */
    public readonly attrPublicConnectionString: ros.IResolvable | string;

    /**
     * Attribute PublicIPAddress: IP Address for created DB instance of Internet.
     */
    public readonly attrPublicIpAddress: ros.IResolvable | string;

    /**
     * Attribute PublicPort: Internet port of created DB instance.
     */
    public readonly attrPublicPort: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: DBInstanceProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosDBInstance = new RosDBInstance(this, id,  {
            periodType: props.periodType === undefined || props.periodType === null ? 'Month' : props.periodType,
            resourceGroupId: props.resourceGroupId,
            archiveBackupRetentionPeriod: props.archiveBackupRetentionPeriod,
            dbTimeZone: props.dbTimeZone,
            port: props.port,
            storageThreshold: props.storageThreshold,
            storageAutoScale: props.storageAutoScale === undefined || props.storageAutoScale === null ? 'Disable' : props.storageAutoScale,
            instanceNetworkType: props.instanceNetworkType,
            archiveBackupKeepCount: props.archiveBackupKeepCount,
            logBackupRetentionPeriod: props.logBackupRetentionPeriod,
            autoUpgradeMinorVersion: props.autoUpgradeMinorVersion,
            dbInstanceStorage: props.dbInstanceStorage,
            dbMappings: props.dbMappings,
            connectionStringPrefix: props.connectionStringPrefix,
            multiAz: props.multiAz === undefined || props.multiAz === null ? false : props.multiAz,
            tags: props.tags,
            engine: props.engine,
            dbInstanceDescription: props.dbInstanceDescription,
            ioAccelerationEnabled: props.ioAccelerationEnabled,
            targetDedicatedHostIdForMaster: props.targetDedicatedHostIdForMaster,
            engineVersion: props.engineVersion,
            dbInstanceClass: props.dbInstanceClass,
            archiveBackupKeepPolicy: props.archiveBackupKeepPolicy,
            backupPolicyMode: props.backupPolicyMode,
            vSwitchId: props.vSwitchId,
            period: props.period === undefined || props.period === null ? 1 : props.period,
            localLogRetentionHours: props.localLogRetentionHours,
            deletionProtection: props.deletionProtection,
            payType: props.payType === undefined || props.payType === null ? 'Postpaid' : props.payType,
            highSpaceUsageProtection: props.highSpaceUsageProtection,
            roleArn: props.roleArn,
            masterUserPassword: props.masterUserPassword,
            sslSetting: props.sslSetting === undefined || props.sslSetting === null ? 'Disabled' : props.sslSetting,
            vpcId: props.vpcId,
            masterUsername: props.masterUsername,
            connectionMode: props.connectionMode,
            localLogRetentionSpace: props.localLogRetentionSpace,
            storageUpperBound: props.storageUpperBound,
            category: props.category,
            privateIpAddress: props.privateIpAddress,
            targetDedicatedHostIdForSlave: props.targetDedicatedHostIdForSlave,
            dbInstanceNetType: props.dbInstanceNetType === undefined || props.dbInstanceNetType === null ? 'Intranet' : props.dbInstanceNetType,
            releasedKeepPolicy: props.releasedKeepPolicy,
            dedicatedHostGroupId: props.dedicatedHostGroupId,
            autoRenew: props.autoRenew,
            encryptionKey: props.encryptionKey,
            preferredBackupPeriod: props.preferredBackupPeriod,
            logBackupLocalRetentionNumber: props.logBackupLocalRetentionNumber,
            slaveZoneIds: props.slaveZoneIds,
            securityIpList: props.securityIpList,
            dbIsIgnoreCase: props.dbIsIgnoreCase,
            maintainTime: props.maintainTime,
            dbParamGroupId: props.dbParamGroupId,
            burstingEnabled: props.burstingEnabled,
            coldDataEnabled: props.coldDataEnabled,
            zoneId: props.zoneId,
            targetDedicatedHostIdForLog: props.targetDedicatedHostIdForLog,
            subscriptionDeletionForce: props.subscriptionDeletionForce === undefined || props.subscriptionDeletionForce === null ? false : props.subscriptionDeletionForce,
            allocatePublicConnection: props.allocatePublicConnection,
            securityGroupId: props.securityGroupId,
            preferredBackupTime: props.preferredBackupTime,
            dbInstanceStorageType: props.dbInstanceStorageType,
            backUpCategory: props.backUpCategory,
            compressType: props.compressType,
            logBackupFrequency: props.logBackupFrequency,
            connectionStringType: props.connectionStringType === undefined || props.connectionStringType === null ? 'Inner' : props.connectionStringType,
            masterUserType: props.masterUserType === undefined || props.masterUserType === null ? 'Normal' : props.masterUserType,
            serverlessConfig: props.serverlessConfig,
            enableBackupLog: props.enableBackupLog,
            sqlCollectorStatus: props.sqlCollectorStatus,
            backupRetentionPeriod: props.backupRetentionPeriod === undefined || props.backupRetentionPeriod === null ? 7 : props.backupRetentionPeriod,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosDBInstance;
        this.attrDbInstanceId = rosDBInstance.attrDbInstanceId;
        this.attrInnerConnectionString = rosDBInstance.attrInnerConnectionString;
        this.attrInnerIpAddress = rosDBInstance.attrInnerIpAddress;
        this.attrInnerPort = rosDBInstance.attrInnerPort;
        this.attrPublicConnectionString = rosDBInstance.attrPublicConnectionString;
        this.attrPublicIpAddress = rosDBInstance.attrPublicIpAddress;
        this.attrPublicPort = rosDBInstance.attrPublicPort;
    }
}
