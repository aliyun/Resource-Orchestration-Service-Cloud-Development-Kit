import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `RosADInfo`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-rds-adinfo
 */
export interface RosADInfoProps {
    /**
     * @Property adAccountName: Domain account name.
     */
    readonly adAccountName: string | ros.IResolvable;
    /**
     * @Property addns: Active directory domain name.
     */
    readonly addns: string | ros.IResolvable;
    /**
     * @Property adPassword: Domain password.
     */
    readonly adPassword: string | ros.IResolvable;
    /**
     * @Property adServerIpAddress: The IP address of the AD server, it must be in the same VPC as the RDS.
     */
    readonly adServerIpAddress: string | ros.IResolvable;
    /**
     * @Property dbInstanceId: The ID of the instance.
     */
    readonly dbInstanceId: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::RDS::ADInfo`.
 * @Note This class does not contain additional functions, so it is recommended to use the `ADInfo` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-rds-adinfo
 */
export declare class RosADInfo extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::RDS::ADInfo";
    /**
     * @Attribute ADDNS: Active directory domain name.
     */
    readonly attrAddns: ros.IResolvable;
    /**
     * @Attribute DBInstanceId: The ID of the instance.
     */
    readonly attrDbInstanceId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property adAccountName: Domain account name.
     */
    adAccountName: string | ros.IResolvable;
    /**
     * @Property addns: Active directory domain name.
     */
    addns: string | ros.IResolvable;
    /**
     * @Property adPassword: Domain password.
     */
    adPassword: string | ros.IResolvable;
    /**
     * @Property adServerIpAddress: The IP address of the AD server, it must be in the same VPC as the RDS.
     */
    adServerIpAddress: string | ros.IResolvable;
    /**
     * @Property dbInstanceId: The ID of the instance.
     */
    dbInstanceId: string | ros.IResolvable;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosADInfoProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosAccount`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-rds-account
 */
export interface RosAccountProps {
    /**
     * @Property accountName: Account name, which must be unique and meet the following requirements:
     * Start with a letter;
     * Consist of lower-case letters, digits, and underscores (_);
     * Length:
     * MySQL 8.0 and 5.7: 2-32 characters.
     * MySQL 5.6、MariaDB and PostgreSQL Local version: 2-16 characters.
     * SQL Server: 2-64 characters.
     * PostgreSQL Cloud version: 2-63 characters.
     */
    readonly accountName: string | ros.IResolvable;
    /**
     * @Property accountPassword: The account password for the database instance. It may consist of letters, digits, or underlines, with a length of 8 to 32 characters.
     */
    readonly accountPassword: string | ros.IResolvable;
    /**
     * @Property dbInstanceId: RDS instance ID.
     */
    readonly dbInstanceId: string | ros.IResolvable;
    /**
     * @Property accountDescription: Account remarks.
     * It cannot begin with http:\/\/ or https:\/\/.
     * It must start with a Chinese character or English letter.
     * It can include Chinese and English characters\/letters, underscores (_), hyphens (-), and digits.
     * The length may be 2-256 characters.
     */
    readonly accountDescription?: string | ros.IResolvable;
    /**
     * @Property accountType: Privilege type of account.
     * Normal: Common privilege.
     * Super: High privilege. And the default value is Normal.
     * Sysadmin: Super privileges (SA) (only supported by SQL Server)
     * This parameter is valid for MySQL 5.5\/5.6 only.
     * MySQL 5.7, SQL Server 2012\/2016, PostgreSQL, and PPAS each can have only one initial account. Other accounts are created by the initial account that has logged on to the database.
     */
    readonly accountType?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::RDS::Account`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Account` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-rds-account
 */
export declare class RosAccount extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::RDS::Account";
    /**
     * @Attribute AccountName: Account name
     */
    readonly attrAccountName: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property accountName: Account name, which must be unique and meet the following requirements:
     * Start with a letter;
     * Consist of lower-case letters, digits, and underscores (_);
     * Length:
     * MySQL 8.0 and 5.7: 2-32 characters.
     * MySQL 5.6、MariaDB and PostgreSQL Local version: 2-16 characters.
     * SQL Server: 2-64 characters.
     * PostgreSQL Cloud version: 2-63 characters.
     */
    accountName: string | ros.IResolvable;
    /**
     * @Property accountPassword: The account password for the database instance. It may consist of letters, digits, or underlines, with a length of 8 to 32 characters.
     */
    accountPassword: string | ros.IResolvable;
    /**
     * @Property dbInstanceId: RDS instance ID.
     */
    dbInstanceId: string | ros.IResolvable;
    /**
     * @Property accountDescription: Account remarks.
     * It cannot begin with http:\/\/ or https:\/\/.
     * It must start with a Chinese character or English letter.
     * It can include Chinese and English characters\/letters, underscores (_), hyphens (-), and digits.
     * The length may be 2-256 characters.
     */
    accountDescription: string | ros.IResolvable | undefined;
    /**
     * @Property accountType: Privilege type of account.
     * Normal: Common privilege.
     * Super: High privilege. And the default value is Normal.
     * Sysadmin: Super privileges (SA) (only supported by SQL Server)
     * This parameter is valid for MySQL 5.5\/5.6 only.
     * MySQL 5.7, SQL Server 2012\/2016, PostgreSQL, and PPAS each can have only one initial account. Other accounts are created by the initial account that has logged on to the database.
     */
    accountType: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosAccountProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosAccountPrivilege`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-rds-accountprivilege
 */
export interface RosAccountPrivilegeProps {
    /**
     * @Property accountName: RDS account name.
     */
    readonly accountName: string | ros.IResolvable;
    /**
     * @Property accountPrivilege: RDS account privilege. The specified number must be the same as the number of DbName
     */
    readonly accountPrivilege: string | ros.IResolvable;
    /**
     * @Property dbInstanceId: RDS instance ID.
     */
    readonly dbInstanceId: string | ros.IResolvable;
    /**
     * @Property dbName: RDS database name. Separate multiple database names with commas (,).
     */
    readonly dbName: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::RDS::AccountPrivilege`.
 * @Note This class does not contain additional functions, so it is recommended to use the `AccountPrivilege` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-rds-accountprivilege
 */
export declare class RosAccountPrivilege extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::RDS::AccountPrivilege";
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property accountName: RDS account name.
     */
    accountName: string | ros.IResolvable;
    /**
     * @Property accountPrivilege: RDS account privilege. The specified number must be the same as the number of DbName
     */
    accountPrivilege: string | ros.IResolvable;
    /**
     * @Property dbInstanceId: RDS instance ID.
     */
    dbInstanceId: string | ros.IResolvable;
    /**
     * @Property dbName: RDS database name. Separate multiple database names with commas (,).
     */
    dbName: string | ros.IResolvable;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosAccountPrivilegeProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosConnection`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-rds-connection
 */
export interface RosConnectionProps {
    /**
     * @Property dbInstanceId: RDS instance ID.
     */
    readonly dbInstanceId: string | ros.IResolvable;
    /**
     * @Property port: The port of the database service.
     */
    readonly port: number | ros.IResolvable;
    /**
     * @Property babelfishPort: The Tabular Data Stream (TDS) port of the instance for which Babelfish is enabled.
     * Note This parameter applies only to ApsaraDB RDS for PostgreSQL instances.
     * For more information about Babelfish for ApsaraDB RDS for PostgreSQL, see Introduction to Babelfish.
     */
    readonly babelfishPort?: string | ros.IResolvable;
    /**
     * @Property connectionStringPrefix: The prefix of the endpoint.
     * Only the prefix of the CurrentConnectionString parameter value can be modified.
     * The prefix must be 5 to 40 characters in length and can contain letters, digits, and hyphens (-).
     */
    readonly connectionStringPrefix?: string | ros.IResolvable;
    /**
     * @Property generalGroupName: The name of the dedicated cluster to which the instance belongs.
     * This parameter takes effect only when the instance runs MySQL on RDS
     * Standard Edition and is created in a dedicated cluster.
     */
    readonly generalGroupName?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::RDS::Connection`, which is used to apply for a public endpoint.
 * @Note This class does not contain additional functions, so it is recommended to use the `Connection` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-rds-connection
 */
export declare class RosConnection extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::RDS::Connection";
    /**
     * @Attribute BabelfishPort: The name of the dedicated cluster to which the instance belongs.
     */
    readonly attrBabelfishPort: ros.IResolvable;
    /**
     * @Attribute ConnectionString: Connection string
     */
    readonly attrConnectionString: ros.IResolvable;
    /**
     * @Attribute DBInstanceId: RDS instance ID.
     */
    readonly attrDbInstanceId: ros.IResolvable;
    /**
     * @Attribute Port: The port of the database service.
     */
    readonly attrPort: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property dbInstanceId: RDS instance ID.
     */
    dbInstanceId: string | ros.IResolvable;
    /**
     * @Property port: The port of the database service.
     */
    port: number | ros.IResolvable;
    /**
     * @Property babelfishPort: The Tabular Data Stream (TDS) port of the instance for which Babelfish is enabled.
     * Note This parameter applies only to ApsaraDB RDS for PostgreSQL instances.
     * For more information about Babelfish for ApsaraDB RDS for PostgreSQL, see Introduction to Babelfish.
     */
    babelfishPort: string | ros.IResolvable | undefined;
    /**
     * @Property connectionStringPrefix: The prefix of the endpoint.
     * Only the prefix of the CurrentConnectionString parameter value can be modified.
     * The prefix must be 5 to 40 characters in length and can contain letters, digits, and hyphens (-).
     */
    connectionStringPrefix: string | ros.IResolvable | undefined;
    /**
     * @Property generalGroupName: The name of the dedicated cluster to which the instance belongs.
     * This parameter takes effect only when the instance runs MySQL on RDS
     * Standard Edition and is created in a dedicated cluster.
     */
    generalGroupName: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosConnectionProps, enableResourcePropertyConstraint: boolean);
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
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-rds-dbinstance
 */
export interface RosDBInstanceProps {
    /**
     * @Property dbInstanceClass: Database instance type. Refer the RDS database instance type reference, such as 'rds.mys2.large', 'rds.mss1.large', 'rds.pg.s1.small' etc
     */
    readonly dbInstanceClass: string | ros.IResolvable;
    /**
     * @Property dbInstanceStorage: The storage capacity of the instance. Unit: GB. The storage capacity increases in increments of 5 GB.
     * You can call the DescribeAvailableResource operation to query the storage capacity range that is supported for a specified instance type in a region.
     */
    readonly dbInstanceStorage: number | ros.IResolvable;
    /**
     * @Property engine: Database instance engine type. Support MySQL\/SQLServer\/PostgreSQL\/PPAS\/MariaDB now.
     */
    readonly engine: string | ros.IResolvable;
    /**
     * @Property engineVersion: Database instance version of the relative engine type. Support:
     * Valid values when you set the Engine parameter to MySQL: 5.5, 5.6, 5.7, and 8.0
     * Valid values when you set the Engine parameter to SQL Server: 2008r2, 08r2_ent_ha, 2012, 2012_ent_ha, 2012_std_ha, 2012_web, 2014_std_ha, 2016_ent_ha, 2016_std_ha, 2016_web, 2017_std_ha, 2017_ent, 2019_std_ha, and 2019_ent
     * Valid values when you set the Engine parameter to PostgreSQL: 10.0, 11.0, 12.0, 13.0, and 14.0
     * Valid values when you set the Engine parameter to MariaDB: 10.3
     */
    readonly engineVersion: string | ros.IResolvable;
    /**
     * @Property securityIpList: Security ip to access the database instance, combine with comma, 0.0.0.0\/0 means no limitation.
     */
    readonly securityIpList: string | ros.IResolvable;
    /**
     * @Property allocatePublicConnection: If true, allocate public connection automate.
     */
    readonly allocatePublicConnection?: boolean | ros.IResolvable;
    /**
     * @Property archiveBackupKeepCount: The number of archived backups that can be retained. Default value: 1. Valid values:
     * The value of this parameter ranges from 1 to 31 when the ArchiveBackupKeepPolicy
     *  parameter is set to ByMonth.
     * The value of this parameter ranges from 1 to 7 when the ArchiveBackupKeepPolicy
     *  parameter is set to ByWeek.
     * Note You do not need to specify this parameter when the ArchiveBackupKeepPolicy
     * parameter is set to KeepAll.
     */
    readonly archiveBackupKeepCount?: number | ros.IResolvable;
    /**
     * @Property archiveBackupKeepPolicy: The period for which to retain archived backups. The number of archived backups that can
     *  be retained within the specified period is determined by the ArchiveBackupKeepCount parameter.
     *  Default value: 0. Valid values:
     * ByMonth
     *  ByWeek
     *  KeepAll
     */
    readonly archiveBackupKeepPolicy?: string | ros.IResolvable;
    /**
     * @Property archiveBackupRetentionPeriod: The number of days for which to retain archived backups.
     *  The default value 0 specifies not to enable the backup archiving function. Valid values: 30 to 1095.
     */
    readonly archiveBackupRetentionPeriod?: number | ros.IResolvable;
    /**
     * @Property autoRenew: Specifies whether to enable auto-renewal. Valid values: true and false. Note
     * :Monthly subscription: The auto-renewal cycle is one month.
     * Annual subscription: The auto-renewal cycle is one year.
     */
    readonly autoRenew?: boolean | ros.IResolvable;
    /**
     * @Property backUpCategory: Specifies whether to enable the second-level backup function. This function allows a backup
     * to be completed within seconds. Valid values:
     * Flash: specifies to enable the second-level backup function.
     *  Standard: specifies to disable the second-level backup function.
     */
    readonly backUpCategory?: string | ros.IResolvable;
    /**
     * @Property backupPolicyMode: Backup type,
     * DataBackupPolicy: data backup
     * LogBackupPolicy: log backup
     */
    readonly backupPolicyMode?: string | ros.IResolvable;
    /**
     * @Property backupRetentionPeriod: The retention period of the data backup. Value range: 7 to 730. The default value is the original value. Note When the BackupPolicyMode parameter is set to LogBackupPolicy, this parameter is required.
     */
    readonly backupRetentionPeriod?: number | ros.IResolvable;
    /**
     * @Property burstingEnabled: Whether to enable bursting.
     */
    readonly burstingEnabled?: boolean | ros.IResolvable;
    /**
     * @Property category: The edition of the instance. Valid values:
     * Basic: RDS Basic Edition
     * HighAvailability: RDS High-availability Edition
     * cluster: RDS Cluster Edition
     * AlwaysOn: RDS Cluster Edition for SQL Server
     * Finance: RDS Enterprise Edition
     * serverless_basic: RDS Serverless Basic Edition
     */
    readonly category?: string | ros.IResolvable;
    /**
     * @Property coldDataEnabled: Whether to enable cold data storage.
     */
    readonly coldDataEnabled?: boolean | ros.IResolvable;
    /**
     * @Property compressType: The format used to compress backups. Valid values:
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
     * @Property connectionMode: Connection Mode for database instance,support 'Standard' and 'Safe' mode. Default is RDS system assigns.
     */
    readonly connectionMode?: string | ros.IResolvable;
    /**
     * @Property connectionStringPrefix: The prefix of the endpoint.
     * Only the prefix of the CurrentConnectionString parameter value can be modified.
     * The prefix must be 8 to 64 characters in length and can contain letters, digits, and hyphens (-).
     */
    readonly connectionStringPrefix?: string | ros.IResolvable;
    /**
     * @Property connectionStringType: The endpoint type of the instance, allow values: Inner, Public
     */
    readonly connectionStringType?: string | ros.IResolvable;
    /**
     * @Property dbInstanceDescription: Description of created database instance.
     */
    readonly dbInstanceDescription?: string | ros.IResolvable;
    /**
     * @Property dbInstanceNetType: Database instance net type, default is Intranet.Internet for public access, Intranet for private access.
     */
    readonly dbInstanceNetType?: string | ros.IResolvable;
    /**
     * @Property dbInstanceStorageType: The storage type of the instance. Valid values:
     * local_ssd: specifies to use local SSDs. This is the recommended storage type.
     * cloud_ssd: specifies to use standard SSDs.
     * cloud_essd: enhanced SSD of performance level (PL)1.
     * cloud_essd2: enhanced SSD of PL2.
     * cloud_essd3: enhanced SSD of PL3.
     */
    readonly dbInstanceStorageType?: string | ros.IResolvable;
    /**
     * @Property dbIsIgnoreCase: Specifies whether table names are case-sensitive. Valid values:
     * 1: Table names are not case-sensitive. This is the default value.
     * 0: Table names are case-sensitive.
     */
    readonly dbIsIgnoreCase?: number | ros.IResolvable;
    /**
     * @Property dbMappings: Database mappings to attach to db instance.
     */
    readonly dbMappings?: Array<RosDBInstance.DBMappingsProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property dbParamGroupId: The ID of the parameter template used by the instance.
     */
    readonly dbParamGroupId?: string | ros.IResolvable;
    /**
     * @Property dbTimeZone: The UTC time zone of the instance. Valid values: -12:00 to +12:00. The time zone must be an integer value such as +08:00. Values such as +08:30 are not allowed.
     */
    readonly dbTimeZone?: string | ros.IResolvable;
    /**
     * @Property dedicatedHostGroupId: The ID of the host group to which the instance belongs if you create an instance in a host group.
     */
    readonly dedicatedHostGroupId?: string | ros.IResolvable;
    /**
     * @Property deletionProtection: Specifies whether to enable the release protection feature for the instance. This feature is available only for pay-as-you-go instances. Default is false.
     */
    readonly deletionProtection?: boolean | ros.IResolvable;
    /**
     * @Property enableBackupLog: Specifies whether to enable the log backup function. Valid values:
     * True: specifies to enable the log backup function.
     * False: specifies to disable the log backup function.
     * Note You must specify this parameter when the BackupPolicyMode parameter is set to LogBackupPolicy.
     */
    readonly enableBackupLog?: boolean | ros.IResolvable;
    /**
     * @Property encryptionKey: The ID of the encryption key that is used to encrypt data on SSDs in the region. You can view the encryption key ID in the Key Management Service (KMS) console. You can also create an encryption key.
     */
    readonly encryptionKey?: string | ros.IResolvable;
    /**
     * @Property highSpaceUsageProtection: Specifies whether to forcibly delete log backup files when the space usage of the
     *  instance exceeds 80% or the remaining space is less than 5 GB. Valid values:
     *  Enable and Disable. You can retain the default value. Note You must specify
     *  this parameter when the BackupPolicyMode parameter is set to LogBackupPolicy.
     */
    readonly highSpaceUsageProtection?: string | ros.IResolvable;
    /**
     * @Property instanceNetworkType: Instance network type, VPC or Classic
     */
    readonly instanceNetworkType?: string | ros.IResolvable;
    /**
     * @Property ioAccelerationEnabled: Whether to enable IO Acceleration, 1 for enable 0 for disable.
     */
    readonly ioAccelerationEnabled?: string | ros.IResolvable;
    /**
     * @Property localLogRetentionHours: The number of hours for which to retain log backup files on the instance.
     * Valid values: 0 to 168. The value 0 specifies not to retain log backup files on the instance.
     * You can retain the default value. Note You must specify this parameter when the BackupPolicyMode
     * parameter is set to LogBackupPolicy.
     */
    readonly localLogRetentionHours?: number | ros.IResolvable;
    /**
     * @Property localLogRetentionSpace: The maximum percentage of space that is allowed to store log backup files on the instance.
     *  If the space usage for log backup files exceeds this percentage, the system deletes earlier
     *  log backup files until the space usage falls below this percentage. Valid values:0 to 50.
     *  You can retain the default value. Note You must specify this parameter when the
     *  BackupPolicyMode parameter is set to LogBackupPolicy.
     */
    readonly localLogRetentionSpace?: number | ros.IResolvable;
    /**
     * @Property logBackupFrequency: The frequency at which to back up logs. Valid values:
     * The value LogInterval specifies to back up logs every 30 minutes.
     *  The default value of this parameter is the same as the data backup frequency.
     * Note The value LogInterval is supported only when the instance runs SQL Server.
     */
    readonly logBackupFrequency?: string | ros.IResolvable;
    /**
     * @Property logBackupLocalRetentionNumber: The number of log backup files that can be retained on the instance.
     * Default value: 60. Valid values: 6 to 100.
     */
    readonly logBackupLocalRetentionNumber?: number | ros.IResolvable;
    /**
     * @Property logBackupRetentionPeriod: The number of days for which to retain log backup files. Valid values: 7 to 730. The log backup
     *  retention period cannot be longer than the data backup retention period.Note If you enable the log
     *  backup function, you can specify the log backup retention period. This applies only when the
     *  instance runs MySQL, PostgreSQL, or PPAS.
     */
    readonly logBackupRetentionPeriod?: number | ros.IResolvable;
    /**
     * @Property maintainTime: The period during which the maintenance performs. The format is HH:mmZ-HH:mmZ.
     */
    readonly maintainTime?: string | ros.IResolvable;
    /**
     * @Property masterUsername: The master user name for the database instance.
     */
    readonly masterUsername?: string | ros.IResolvable;
    /**
     * @Property masterUserPassword: The master password for the database instance.
     */
    readonly masterUserPassword?: string | ros.IResolvable;
    /**
     * @Property masterUserType: Privilege type of account.
     *  Normal: Common privilege.
     *  Super: High privilege.
     * Sysadmin: Super privileges (SA) (only supported by SQL Server)
     * The default value is Normal.
     */
    readonly masterUserType?: string | ros.IResolvable;
    /**
     * @Property multiAz: Specifies if the database instance is a multiple Availability Zone deployment.
     */
    readonly multiAz?: boolean | ros.IResolvable;
    /**
     * @Property payType: The charge type of created instance.
     */
    readonly payType?: string | ros.IResolvable;
    /**
     * @Property period: The subscription duration. Valid values:
     * When PeriodType is Month, it could be from 1 to 12, 24, 36, 48, 60.
     *  When PeriodType is Year, it could be from 1 to 5.
     */
    readonly period?: number | ros.IResolvable;
    /**
     * @Property periodType: Charge period for created instances.
     */
    readonly periodType?: string | ros.IResolvable;
    /**
     * @Property port: The port of the database service.
     */
    readonly port?: number | ros.IResolvable;
    /**
     * @Property preferredBackupPeriod: The backup period. Separate multiple values with commas (,). The default value is the original value. Valid values:Monday Tuesday Wednesday Thursday Friday Saturday Sunday Note When the BackupPolicyMode parameter is set to DataBackupPolicy, this parameter is required.
     */
    readonly preferredBackupPeriod?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property preferredBackupTime: The time when the backup task is performed. Format: yyyy-MM-ddZ-HH:mm:ssZ.Note When the BackupPolicyMode parameter is set to DataBackupPolicy, this parameter is required.
     */
    readonly preferredBackupTime?: string | ros.IResolvable;
    /**
     * @Property privateIpAddress: The private ip for created instance.
     */
    readonly privateIpAddress?: string | ros.IResolvable;
    /**
     * @Property releasedKeepPolicy: The policy used to retain archived backups if the instance is released. Default value: None.
     *  Valid values:
     * Lastest: Only the last archived backup is retained.
     *  All: All of the archived backups are retained.
     */
    readonly releasedKeepPolicy?: string | ros.IResolvable;
    /**
     * @Property resourceGroupId: Resource group id.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * @Property roleArn: The Alibaba Cloud Resource Name (ARN) provided to the service account of the instance by your Alibaba Cloud account to connect to KMS. You can copy the ARN from the RAM console.
     */
    readonly roleArn?: string | ros.IResolvable;
    /**
     * @Property securityGroupId: The ID of the ECS security groups.
     * Each RDS instance can be associated with up to three ECS security groups.
     * You must separate them with commas (,).
     * To delete an ECS Security group, leave this parameter empty.
     *
     */
    readonly securityGroupId?: string | ros.IResolvable;
    /**
     * @Property serverlessConfig: The config of RDS serverless instance. This is required when creating serverless instance.
     */
    readonly serverlessConfig?: RosDBInstance.ServerlessConfigProperty | ros.IResolvable;
    /**
     * @Property slaveZoneIds: List of slave zone ids can specify slave zone ids when creating the high-availability or enterprise edition instance. Meanwhile, VSwitchId needs to pass in the corresponding vswitch id to the slave zone by order. For example, ZoneId = "zone-a" and SlaveZoneIds = ["zone-c", "zone-b"], then the VSwitchId must be "vsw-zone-a,vsw-zone-c,vsw-zone-b".
     */
    readonly slaveZoneIds?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property sqlCollectorStatus: Specifies whether to enable or disable the SQL Explorer (SQL audit) feature.
     * Valid values:Enable | Disabled.
     */
    readonly sqlCollectorStatus?: string | ros.IResolvable;
    /**
     * @Property sslSetting: Secure Sockets Layer (SSL) link setting of the instance. Valid values:
     * Disabled: Disable SSL
     * EnabledForPublicConnection: Public connection address will be protected by the SSL certificate. It requires AllocatePublicConnection is true.
     * EnabledForInnerConnection: Private connection address will be protected by the SSL certificate.
     * Default value is Disabled.
     */
    readonly sslSetting?: string | ros.IResolvable;
    /**
     * @Property storageAutoScale: Storage space automatic expansion switch, only supported by MySQL and PostgreSQL
     */
    readonly storageAutoScale?: string | ros.IResolvable;
    /**
     * @Property storageThreshold: Storage space automatic expansion trigger threshold (percentage)
     */
    readonly storageThreshold?: number | ros.IResolvable;
    /**
     * @Property storageUpperBound: The total storage space upper limit for automatic storage space expansion, that is, automatic expansion will not cause the total storage space of the instance to exceed this value.
     */
    readonly storageUpperBound?: number | ros.IResolvable;
    /**
     * @Property tags: The tags of an instance.
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
    readonly tags?: {
        [key: string]: (any);
    };
    /**
     * @Property targetDedicatedHostIdForLog: The ID of the host to which the instance belongs if you create a log instance in a host group.
     */
    readonly targetDedicatedHostIdForLog?: string | ros.IResolvable;
    /**
     * @Property targetDedicatedHostIdForMaster: The ID of the host to which the instance belongs if you create a primary instance in a host group.
     */
    readonly targetDedicatedHostIdForMaster?: string | ros.IResolvable;
    /**
     * @Property targetDedicatedHostIdForSlave: The ID of the host to which the instance belongs if you create a secondary instance in a host group.
     */
    readonly targetDedicatedHostIdForSlave?: string | ros.IResolvable;
    /**
     * @Property vpcId: The VPC id of created database instance. For VPC network, the property is required.
     */
    readonly vpcId?: string | ros.IResolvable;
    /**
     * @Property vSwitchId: The vSwitch id of created instance. For VPC network, the property is required.
     */
    readonly vSwitchId?: string | ros.IResolvable;
    /**
     * @Property zoneId: selected zone to create database instance. You cannot set the ZoneId parameter if the MultiAZ parameter is set to true.
     */
    readonly zoneId?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::RDS::DBInstance`.
 * @Note This class does not contain additional functions, so it is recommended to use the `DBInstance` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-rds-dbinstance
 */
export declare class RosDBInstance extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::RDS::DBInstance";
    /**
     * @Attribute DBInstanceId: The instance id of created database instance.
     */
    readonly attrDbInstanceId: ros.IResolvable;
    /**
     * @Attribute InnerConnectionString: DB instance connection url by Intranet.
     */
    readonly attrInnerConnectionString: ros.IResolvable;
    /**
     * @Attribute InnerIPAddress: IP Address for created DB instance of Intranet.
     */
    readonly attrInnerIpAddress: ros.IResolvable;
    /**
     * @Attribute InnerPort: Intranet port of created DB instance.
     */
    readonly attrInnerPort: ros.IResolvable;
    /**
     * @Attribute PublicConnectionString: DB instance connection url by Internet.
     */
    readonly attrPublicConnectionString: ros.IResolvable;
    /**
     * @Attribute PublicIPAddress: IP Address for created DB instance of Internet.
     */
    readonly attrPublicIpAddress: ros.IResolvable;
    /**
     * @Attribute PublicPort: Internet port of created DB instance.
     */
    readonly attrPublicPort: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property dbInstanceClass: Database instance type. Refer the RDS database instance type reference, such as 'rds.mys2.large', 'rds.mss1.large', 'rds.pg.s1.small' etc
     */
    dbInstanceClass: string | ros.IResolvable;
    /**
     * @Property dbInstanceStorage: The storage capacity of the instance. Unit: GB. The storage capacity increases in increments of 5 GB.
     * You can call the DescribeAvailableResource operation to query the storage capacity range that is supported for a specified instance type in a region.
     */
    dbInstanceStorage: number | ros.IResolvable;
    /**
     * @Property engine: Database instance engine type. Support MySQL\/SQLServer\/PostgreSQL\/PPAS\/MariaDB now.
     */
    engine: string | ros.IResolvable;
    /**
     * @Property engineVersion: Database instance version of the relative engine type. Support:
     * Valid values when you set the Engine parameter to MySQL: 5.5, 5.6, 5.7, and 8.0
     * Valid values when you set the Engine parameter to SQL Server: 2008r2, 08r2_ent_ha, 2012, 2012_ent_ha, 2012_std_ha, 2012_web, 2014_std_ha, 2016_ent_ha, 2016_std_ha, 2016_web, 2017_std_ha, 2017_ent, 2019_std_ha, and 2019_ent
     * Valid values when you set the Engine parameter to PostgreSQL: 10.0, 11.0, 12.0, 13.0, and 14.0
     * Valid values when you set the Engine parameter to MariaDB: 10.3
     */
    engineVersion: string | ros.IResolvable;
    /**
     * @Property securityIpList: Security ip to access the database instance, combine with comma, 0.0.0.0\/0 means no limitation.
     */
    securityIpList: string | ros.IResolvable;
    /**
     * @Property allocatePublicConnection: If true, allocate public connection automate.
     */
    allocatePublicConnection: boolean | ros.IResolvable | undefined;
    /**
     * @Property archiveBackupKeepCount: The number of archived backups that can be retained. Default value: 1. Valid values:
     * The value of this parameter ranges from 1 to 31 when the ArchiveBackupKeepPolicy
     *  parameter is set to ByMonth.
     * The value of this parameter ranges from 1 to 7 when the ArchiveBackupKeepPolicy
     *  parameter is set to ByWeek.
     * Note You do not need to specify this parameter when the ArchiveBackupKeepPolicy
     * parameter is set to KeepAll.
     */
    archiveBackupKeepCount: number | ros.IResolvable | undefined;
    /**
     * @Property archiveBackupKeepPolicy: The period for which to retain archived backups. The number of archived backups that can
     *  be retained within the specified period is determined by the ArchiveBackupKeepCount parameter.
     *  Default value: 0. Valid values:
     * ByMonth
     *  ByWeek
     *  KeepAll
     */
    archiveBackupKeepPolicy: string | ros.IResolvable | undefined;
    /**
     * @Property archiveBackupRetentionPeriod: The number of days for which to retain archived backups.
     *  The default value 0 specifies not to enable the backup archiving function. Valid values: 30 to 1095.
     */
    archiveBackupRetentionPeriod: number | ros.IResolvable | undefined;
    /**
     * @Property autoRenew: Specifies whether to enable auto-renewal. Valid values: true and false. Note
     * :Monthly subscription: The auto-renewal cycle is one month.
     * Annual subscription: The auto-renewal cycle is one year.
     */
    autoRenew: boolean | ros.IResolvable | undefined;
    /**
     * @Property backUpCategory: Specifies whether to enable the second-level backup function. This function allows a backup
     * to be completed within seconds. Valid values:
     * Flash: specifies to enable the second-level backup function.
     *  Standard: specifies to disable the second-level backup function.
     */
    backUpCategory: string | ros.IResolvable | undefined;
    /**
     * @Property backupPolicyMode: Backup type,
     * DataBackupPolicy: data backup
     * LogBackupPolicy: log backup
     */
    backupPolicyMode: string | ros.IResolvable | undefined;
    /**
     * @Property backupRetentionPeriod: The retention period of the data backup. Value range: 7 to 730. The default value is the original value. Note When the BackupPolicyMode parameter is set to LogBackupPolicy, this parameter is required.
     */
    backupRetentionPeriod: number | ros.IResolvable | undefined;
    /**
     * @Property burstingEnabled: Whether to enable bursting.
     */
    burstingEnabled: boolean | ros.IResolvable | undefined;
    /**
     * @Property category: The edition of the instance. Valid values:
     * Basic: RDS Basic Edition
     * HighAvailability: RDS High-availability Edition
     * cluster: RDS Cluster Edition
     * AlwaysOn: RDS Cluster Edition for SQL Server
     * Finance: RDS Enterprise Edition
     * serverless_basic: RDS Serverless Basic Edition
     */
    category: string | ros.IResolvable | undefined;
    /**
     * @Property coldDataEnabled: Whether to enable cold data storage.
     */
    coldDataEnabled: boolean | ros.IResolvable | undefined;
    /**
     * @Property compressType: The format used to compress backups. Valid values:
     *  1: The zlib tool is used to compress backups into .tar.gz files.
     *  4: The QuickLZ tool is used to compress backups into .xb.gz files.
     * This compression format is supported only when the instance runs MySQL 5.6 or 5.7.
     * It can be used to restore individual databases and tables.
     *  8: The QuickLZ tool is used to compress backups into .xb.gz files.
     *  This compression format is supported only when the instance runs MySQL 8.0.
     * It cannot be used to restore individual databases or tables.
     */
    compressType: number | ros.IResolvable | undefined;
    /**
     * @Property connectionMode: Connection Mode for database instance,support 'Standard' and 'Safe' mode. Default is RDS system assigns.
     */
    connectionMode: string | ros.IResolvable | undefined;
    /**
     * @Property connectionStringPrefix: The prefix of the endpoint.
     * Only the prefix of the CurrentConnectionString parameter value can be modified.
     * The prefix must be 8 to 64 characters in length and can contain letters, digits, and hyphens (-).
     */
    connectionStringPrefix: string | ros.IResolvable | undefined;
    /**
     * @Property connectionStringType: The endpoint type of the instance, allow values: Inner, Public
     */
    connectionStringType: string | ros.IResolvable | undefined;
    /**
     * @Property dbInstanceDescription: Description of created database instance.
     */
    dbInstanceDescription: string | ros.IResolvable | undefined;
    /**
     * @Property dbInstanceNetType: Database instance net type, default is Intranet.Internet for public access, Intranet for private access.
     */
    dbInstanceNetType: string | ros.IResolvable | undefined;
    /**
     * @Property dbInstanceStorageType: The storage type of the instance. Valid values:
     * local_ssd: specifies to use local SSDs. This is the recommended storage type.
     * cloud_ssd: specifies to use standard SSDs.
     * cloud_essd: enhanced SSD of performance level (PL)1.
     * cloud_essd2: enhanced SSD of PL2.
     * cloud_essd3: enhanced SSD of PL3.
     */
    dbInstanceStorageType: string | ros.IResolvable | undefined;
    /**
     * @Property dbIsIgnoreCase: Specifies whether table names are case-sensitive. Valid values:
     * 1: Table names are not case-sensitive. This is the default value.
     * 0: Table names are case-sensitive.
     */
    dbIsIgnoreCase: number | ros.IResolvable | undefined;
    /**
     * @Property dbMappings: Database mappings to attach to db instance.
     */
    dbMappings: Array<RosDBInstance.DBMappingsProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property dbParamGroupId: The ID of the parameter template used by the instance.
     */
    dbParamGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property dbTimeZone: The UTC time zone of the instance. Valid values: -12:00 to +12:00. The time zone must be an integer value such as +08:00. Values such as +08:30 are not allowed.
     */
    dbTimeZone: string | ros.IResolvable | undefined;
    /**
     * @Property dedicatedHostGroupId: The ID of the host group to which the instance belongs if you create an instance in a host group.
     */
    dedicatedHostGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property deletionProtection: Specifies whether to enable the release protection feature for the instance. This feature is available only for pay-as-you-go instances. Default is false.
     */
    deletionProtection: boolean | ros.IResolvable | undefined;
    /**
     * @Property enableBackupLog: Specifies whether to enable the log backup function. Valid values:
     * True: specifies to enable the log backup function.
     * False: specifies to disable the log backup function.
     * Note You must specify this parameter when the BackupPolicyMode parameter is set to LogBackupPolicy.
     */
    enableBackupLog: boolean | ros.IResolvable | undefined;
    /**
     * @Property encryptionKey: The ID of the encryption key that is used to encrypt data on SSDs in the region. You can view the encryption key ID in the Key Management Service (KMS) console. You can also create an encryption key.
     */
    encryptionKey: string | ros.IResolvable | undefined;
    /**
     * @Property highSpaceUsageProtection: Specifies whether to forcibly delete log backup files when the space usage of the
     *  instance exceeds 80% or the remaining space is less than 5 GB. Valid values:
     *  Enable and Disable. You can retain the default value. Note You must specify
     *  this parameter when the BackupPolicyMode parameter is set to LogBackupPolicy.
     */
    highSpaceUsageProtection: string | ros.IResolvable | undefined;
    /**
     * @Property instanceNetworkType: Instance network type, VPC or Classic
     */
    instanceNetworkType: string | ros.IResolvable | undefined;
    /**
     * @Property ioAccelerationEnabled: Whether to enable IO Acceleration, 1 for enable 0 for disable.
     */
    ioAccelerationEnabled: string | ros.IResolvable | undefined;
    /**
     * @Property localLogRetentionHours: The number of hours for which to retain log backup files on the instance.
     * Valid values: 0 to 168. The value 0 specifies not to retain log backup files on the instance.
     * You can retain the default value. Note You must specify this parameter when the BackupPolicyMode
     * parameter is set to LogBackupPolicy.
     */
    localLogRetentionHours: number | ros.IResolvable | undefined;
    /**
     * @Property localLogRetentionSpace: The maximum percentage of space that is allowed to store log backup files on the instance.
     *  If the space usage for log backup files exceeds this percentage, the system deletes earlier
     *  log backup files until the space usage falls below this percentage. Valid values:0 to 50.
     *  You can retain the default value. Note You must specify this parameter when the
     *  BackupPolicyMode parameter is set to LogBackupPolicy.
     */
    localLogRetentionSpace: number | ros.IResolvable | undefined;
    /**
     * @Property logBackupFrequency: The frequency at which to back up logs. Valid values:
     * The value LogInterval specifies to back up logs every 30 minutes.
     *  The default value of this parameter is the same as the data backup frequency.
     * Note The value LogInterval is supported only when the instance runs SQL Server.
     */
    logBackupFrequency: string | ros.IResolvable | undefined;
    /**
     * @Property logBackupLocalRetentionNumber: The number of log backup files that can be retained on the instance.
     * Default value: 60. Valid values: 6 to 100.
     */
    logBackupLocalRetentionNumber: number | ros.IResolvable | undefined;
    /**
     * @Property logBackupRetentionPeriod: The number of days for which to retain log backup files. Valid values: 7 to 730. The log backup
     *  retention period cannot be longer than the data backup retention period.Note If you enable the log
     *  backup function, you can specify the log backup retention period. This applies only when the
     *  instance runs MySQL, PostgreSQL, or PPAS.
     */
    logBackupRetentionPeriod: number | ros.IResolvable | undefined;
    /**
     * @Property maintainTime: The period during which the maintenance performs. The format is HH:mmZ-HH:mmZ.
     */
    maintainTime: string | ros.IResolvable | undefined;
    /**
     * @Property masterUsername: The master user name for the database instance.
     */
    masterUsername: string | ros.IResolvable | undefined;
    /**
     * @Property masterUserPassword: The master password for the database instance.
     */
    masterUserPassword: string | ros.IResolvable | undefined;
    /**
     * @Property masterUserType: Privilege type of account.
     *  Normal: Common privilege.
     *  Super: High privilege.
     * Sysadmin: Super privileges (SA) (only supported by SQL Server)
     * The default value is Normal.
     */
    masterUserType: string | ros.IResolvable | undefined;
    /**
     * @Property multiAz: Specifies if the database instance is a multiple Availability Zone deployment.
     */
    multiAz: boolean | ros.IResolvable | undefined;
    /**
     * @Property payType: The charge type of created instance.
     */
    payType: string | ros.IResolvable | undefined;
    /**
     * @Property period: The subscription duration. Valid values:
     * When PeriodType is Month, it could be from 1 to 12, 24, 36, 48, 60.
     *  When PeriodType is Year, it could be from 1 to 5.
     */
    period: number | ros.IResolvable | undefined;
    /**
     * @Property periodType: Charge period for created instances.
     */
    periodType: string | ros.IResolvable | undefined;
    /**
     * @Property port: The port of the database service.
     */
    port: number | ros.IResolvable | undefined;
    /**
     * @Property preferredBackupPeriod: The backup period. Separate multiple values with commas (,). The default value is the original value. Valid values:Monday Tuesday Wednesday Thursday Friday Saturday Sunday Note When the BackupPolicyMode parameter is set to DataBackupPolicy, this parameter is required.
     */
    preferredBackupPeriod: Array<string | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property preferredBackupTime: The time when the backup task is performed. Format: yyyy-MM-ddZ-HH:mm:ssZ.Note When the BackupPolicyMode parameter is set to DataBackupPolicy, this parameter is required.
     */
    preferredBackupTime: string | ros.IResolvable | undefined;
    /**
     * @Property privateIpAddress: The private ip for created instance.
     */
    privateIpAddress: string | ros.IResolvable | undefined;
    /**
     * @Property releasedKeepPolicy: The policy used to retain archived backups if the instance is released. Default value: None.
     *  Valid values:
     * Lastest: Only the last archived backup is retained.
     *  All: All of the archived backups are retained.
     */
    releasedKeepPolicy: string | ros.IResolvable | undefined;
    /**
     * @Property resourceGroupId: Resource group id.
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property roleArn: The Alibaba Cloud Resource Name (ARN) provided to the service account of the instance by your Alibaba Cloud account to connect to KMS. You can copy the ARN from the RAM console.
     */
    roleArn: string | ros.IResolvable | undefined;
    /**
     * @Property securityGroupId: The ID of the ECS security groups.
     * Each RDS instance can be associated with up to three ECS security groups.
     * You must separate them with commas (,).
     * To delete an ECS Security group, leave this parameter empty.
     *
     */
    securityGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property serverlessConfig: The config of RDS serverless instance. This is required when creating serverless instance.
     */
    serverlessConfig: RosDBInstance.ServerlessConfigProperty | ros.IResolvable | undefined;
    /**
     * @Property slaveZoneIds: List of slave zone ids can specify slave zone ids when creating the high-availability or enterprise edition instance. Meanwhile, VSwitchId needs to pass in the corresponding vswitch id to the slave zone by order. For example, ZoneId = "zone-a" and SlaveZoneIds = ["zone-c", "zone-b"], then the VSwitchId must be "vsw-zone-a,vsw-zone-c,vsw-zone-b".
     */
    slaveZoneIds: Array<string | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property sqlCollectorStatus: Specifies whether to enable or disable the SQL Explorer (SQL audit) feature.
     * Valid values:Enable | Disabled.
     */
    sqlCollectorStatus: string | ros.IResolvable | undefined;
    /**
     * @Property sslSetting: Secure Sockets Layer (SSL) link setting of the instance. Valid values:
     * Disabled: Disable SSL
     * EnabledForPublicConnection: Public connection address will be protected by the SSL certificate. It requires AllocatePublicConnection is true.
     * EnabledForInnerConnection: Private connection address will be protected by the SSL certificate.
     * Default value is Disabled.
     */
    sslSetting: string | ros.IResolvable | undefined;
    /**
     * @Property storageAutoScale: Storage space automatic expansion switch, only supported by MySQL and PostgreSQL
     */
    storageAutoScale: string | ros.IResolvable | undefined;
    /**
     * @Property storageThreshold: Storage space automatic expansion trigger threshold (percentage)
     */
    storageThreshold: number | ros.IResolvable | undefined;
    /**
     * @Property storageUpperBound: The total storage space upper limit for automatic storage space expansion, that is, automatic expansion will not cause the total storage space of the instance to exceed this value.
     */
    storageUpperBound: number | ros.IResolvable | undefined;
    /**
     * @Property tags: The tags of an instance.
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
    tags: {
        [key: string]: (any);
    } | undefined;
    /**
     * @Property targetDedicatedHostIdForLog: The ID of the host to which the instance belongs if you create a log instance in a host group.
     */
    targetDedicatedHostIdForLog: string | ros.IResolvable | undefined;
    /**
     * @Property targetDedicatedHostIdForMaster: The ID of the host to which the instance belongs if you create a primary instance in a host group.
     */
    targetDedicatedHostIdForMaster: string | ros.IResolvable | undefined;
    /**
     * @Property targetDedicatedHostIdForSlave: The ID of the host to which the instance belongs if you create a secondary instance in a host group.
     */
    targetDedicatedHostIdForSlave: string | ros.IResolvable | undefined;
    /**
     * @Property vpcId: The VPC id of created database instance. For VPC network, the property is required.
     */
    vpcId: string | ros.IResolvable | undefined;
    /**
     * @Property vSwitchId: The vSwitch id of created instance. For VPC network, the property is required.
     */
    vSwitchId: string | ros.IResolvable | undefined;
    /**
     * @Property zoneId: selected zone to create database instance. You cannot set the ZoneId parameter if the MultiAZ parameter is set to true.
     */
    zoneId: string | ros.IResolvable | undefined;
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
export declare namespace RosDBInstance {
    /**
     * @stability external
     */
    interface DBMappingsProperty {
        /**
         * @Property characterSetName: For supported engines, specifies the character set to associate with the database instance.
         */
        readonly characterSetName: string | ros.IResolvable;
        /**
         * @Property dbDescription: Specifies the database description, containing up to 256 characters.
         */
        readonly dbDescription?: string | ros.IResolvable;
        /**
         * @Property dbName: Consists of [2, 64] lower case letters, numbers, underscores, lines, letters. Must start with a letter, end with letters or numbers
         */
        readonly dbName: string | ros.IResolvable;
    }
}
export declare namespace RosDBInstance {
    /**
     * @stability external
     */
    interface ServerlessConfigProperty {
        /**
         * @Property switchForce: Whether to enable mandatory elastic scaling of serverless instances. Value:
     * true: enabled.
     * false: not enabled (default).
         */
        readonly switchForce?: boolean | ros.IResolvable;
        /**
         * @Property minCapacity: The minimum value of the automatic scaling range of an instance RCU (RDS Capacity Unit). Value: 0.5-8.
         */
        readonly minCapacity: number | ros.IResolvable;
        /**
         * @Property autoPause: Whether to enable intelligent pause and start of serverless instances. Value:
     * true: enabled.
     * false: not enabled (default).
         */
        readonly autoPause?: boolean | ros.IResolvable;
        /**
         * @Property maxCapacity: The maximum value of the automatic scaling range of an instance RCU (RDS Capacity Unit). Value: 0.5-8.
         */
        readonly maxCapacity: number | ros.IResolvable;
    }
}
/**
 * Properties for defining a `RosDBInstanceClone`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-rds-dbinstanceclone
 */
export interface RosDBInstanceCloneProps {
    /**
     * @Property dbInstanceId: Instance id
     */
    readonly dbInstanceId: string | ros.IResolvable;
    /**
     * @Property payType: The charge type of created instance.
     */
    readonly payType: string | ros.IResolvable;
    /**
     * @Property allocatePublicConnection: If true, allocate public connection automate.
     */
    readonly allocatePublicConnection?: boolean | ros.IResolvable;
    /**
     * @Property backupId: The ID of the backup set that you want to use.
     * You can call the DescribeBackups operation to query the most recent backup set list.
     * Note You must specify at least one of the BackupId and RestoreTime parameters.
     */
    readonly backupId?: string | ros.IResolvable;
    /**
     * @Property backupRetentionPeriod: The retention period of the data backup. Value range: 7 to 730. The default value is the original value. Note When the BackupPolicyMode parameter is set to LogBackupPolicy, this parameter is required.
     */
    readonly backupRetentionPeriod?: number | ros.IResolvable;
    /**
     * @Property backupType: The type of backup used by the new instance. Valid values:
     *  - FullBackup: full backup
     *  - IncrementalBackup: incremental backup
     */
    readonly backupType?: string | ros.IResolvable;
    /**
     * @Property category: The edition of the instance. Valid values:
     * Basic: RDS Basic Edition
     * HighAvailability: RDS High-availability Edition
     * cluster: RDS Cluster Edition
     * AlwaysOn: RDS Cluster Edition for SQL Server
     * Finance: RDS Enterprise Edition
     * serverless_basic: RDS Serverless Basic Edition
     */
    readonly category?: string | ros.IResolvable;
    /**
     * @Property connectionStringPrefix: The prefix of the endpoint.
     * Only the prefix of the CurrentConnectionString parameter value can be modified.
     * The prefix must be 8 to 64 characters in length and can contain letters, digits, and hyphens (-).
     */
    readonly connectionStringPrefix?: string | ros.IResolvable;
    /**
     * @Property connectionStringType: The endpoint type of the instance, allow values: Inner, Public
     */
    readonly connectionStringType?: string | ros.IResolvable;
    /**
     * @Property dbInstanceClass: Database instance type. Refer the RDS database instance type reference, such as 'rds.mys2.large', 'rds.mss1.large', 'rds.pg.s1.small' etc
     */
    readonly dbInstanceClass?: string | ros.IResolvable;
    /**
     * @Property dbInstanceDescription: Description of created database instance.
     */
    readonly dbInstanceDescription?: string | ros.IResolvable;
    /**
     * @Property dbInstanceStorage: The storage capacity of the instance. Unit: GB. The storage capacity increases in increments of 5 GB.
     * You can call the DescribeAvailableResource operation to query the storage capacity range that is supported for a specified instance type in a region.
     */
    readonly dbInstanceStorage?: number | ros.IResolvable;
    /**
     * @Property dbInstanceStorageType: The storage type of the instance. Valid values:
     * local_ssd: specifies to use local SSDs. This is the recommended storage type.
     * cloud_ssd: specifies to use standard SSDs.
     * cloud_essd: enhanced SSD of performance level (PL)1.
     * cloud_essd2: enhanced SSD of PL2.
     * cloud_essd3: enhanced SSD of PL3.
     */
    readonly dbInstanceStorageType?: string | ros.IResolvable;
    /**
     * @Property dbMappings: Database mappings to attach to db instance.
     */
    readonly dbMappings?: Array<RosDBInstanceClone.DBMappingsProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property dbNames: The names of the databases that you want to create on the new instance.
     */
    readonly dbNames?: string | ros.IResolvable;
    /**
     * @Property dedicatedHostGroupId: The ID of the host group to which the instance belongs if you create an instance in a host group.
     */
    readonly dedicatedHostGroupId?: string | ros.IResolvable;
    /**
     * @Property instanceNetworkType: The network type of the new instance. Valid values:
     * - VPC
     * - Classic
     * The default value is the network type of the original instance.
     */
    readonly instanceNetworkType?: string | ros.IResolvable;
    /**
     * @Property maintainTime: The period during which the maintenance performs. The format is HH:mmZ-HH:mmZ.
     */
    readonly maintainTime?: string | ros.IResolvable;
    /**
     * @Property masterUsername: The master user name for the database instance.
     */
    readonly masterUsername?: string | ros.IResolvable;
    /**
     * @Property masterUserPassword: The master password for the database instance.
     */
    readonly masterUserPassword?: string | ros.IResolvable;
    /**
     * @Property masterUserType: Privilege type of account.
     *  Normal: Common privilege.
     *  Super: High privilege.
     * Sysadmin: Super privileges (SA) (only supported by SQL Server)
     * The default value is Normal.
     */
    readonly masterUserType?: string | ros.IResolvable;
    /**
     * @Property period: The subscription duration. Valid values:
     * When PeriodType is Month, it could be from 1 to 12, 24, 36, 48, 60.
     *  When PeriodType is Year, it could be from 1 to 5.
     */
    readonly period?: number | ros.IResolvable;
    /**
     * @Property periodType: Charge period for created instances.
     */
    readonly periodType?: string | ros.IResolvable;
    /**
     * @Property port: The port of the database service.
     */
    readonly port?: number | ros.IResolvable;
    /**
     * @Property preferredBackupPeriod: The backup period. Separate multiple values with commas (,). The default value is the original value. Valid values:Monday Tuesday Wednesday Thursday Friday Saturday Sunday Note When the BackupPolicyMode parameter is set to DataBackupPolicy, this parameter is required.
     */
    readonly preferredBackupPeriod?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property preferredBackupTime: The time when the backup task is performed. Format: yyyy-MM-ddZ-HH:mm:ssZ.Note When the BackupPolicyMode parameter is set to DataBackupPolicy, this parameter is required.
     */
    readonly preferredBackupTime?: string | ros.IResolvable;
    /**
     * @Property privateIpAddress: The private ip for created instance.
     */
    readonly privateIpAddress?: string | ros.IResolvable;
    /**
     * @Property restoreTable: Specifies whether to restore specific databases and tables.
     * The value 1 specifies to restore specific databases and tables.
     * If you do not want to restore specific databases or tables, you can choose not to specify this parameter.
     */
    readonly restoreTable?: string | ros.IResolvable;
    /**
     * @Property restoreTime: The point in time to which you want to restore the data of the original instance.
     * The point in time must fall within the specified log backup retention period.
     * The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format.
     * The time must be in UTC.
     */
    readonly restoreTime?: string | ros.IResolvable;
    /**
     * @Property securityGroupId: The ID of the ECS security groups.
     * Each RDS instance can be associated with up to three ECS security groups.
     * You must separate them with commas (,).
     * To delete an ECS Security group, leave this parameter empty.
     *
     */
    readonly securityGroupId?: string | ros.IResolvable;
    /**
     * @Property securityIpList: Security ip to access the database instance, combine with comma, 0.0.0.0\/0 means no limitation.
     */
    readonly securityIpList?: string | ros.IResolvable;
    /**
     * @Property slaveZoneIds: List of slave zone ids can specify slave zone ids when creating the high-availability or enterprise edition instance. Meanwhile, VSwitchId needs to pass in the corresponding vswitch id to the slave zone by order. For example, ZoneId = "zone-a" and SlaveZoneIds = ["zone-c", "zone-b"], then the VSwitchId must be "vsw-zone-a,vsw-zone-c,vsw-zone-b".
     */
    readonly slaveZoneIds?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property sqlCollectorStatus: Specifies whether to enable or disable the SQL Explorer (SQL audit) feature.
     * Valid values:Enable | Disabled.
     */
    readonly sqlCollectorStatus?: string | ros.IResolvable;
    /**
     * @Property sslSetting: Secure Sockets Layer (SSL) link setting of the instance. Valid values:
     * Disabled: Disable SSL
     * EnabledForPublicConnection: Public connection address will be protected by the SSL certificate. It requires AllocatePublicConnection is true.
     * EnabledForInnerConnection: Private connection address will be protected by the SSL certificate.
     * Default value is Disabled.
     */
    readonly sslSetting?: string | ros.IResolvable;
    /**
     * @Property tableMeta: The information about the databases and tables that you want to restore.
     */
    readonly tableMeta?: Array<RosDBInstanceClone.TableMetaProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property tags: The tags of an instance.
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
    readonly tags?: {
        [key: string]: (any);
    };
    /**
     * @Property timeoutInMinutes: The timeout period for creating the clone instance resource. Unit: Minute. Default: 120.
     */
    readonly timeoutInMinutes?: number | ros.IResolvable;
    /**
     * @Property vpcId: The VPC id of created database instance. For VPC network, the property is required.
     */
    readonly vpcId?: string | ros.IResolvable;
    /**
     * @Property vSwitchId: The vSwitch id of created instance. For VPC network, the property is required.
     */
    readonly vSwitchId?: string | ros.IResolvable;
    /**
     * @Property zoneId: selected zone to create database instance. You cannot set the ZoneId parameter if the MultiAZ parameter is set to true.
     */
    readonly zoneId?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::RDS::DBInstanceClone`.
 * @Note This class does not contain additional functions, so it is recommended to use the `DBInstanceClone` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-rds-dbinstanceclone
 */
export declare class RosDBInstanceClone extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::RDS::DBInstanceClone";
    /**
     * @Attribute DBInstanceId: The instance id of created database instance.
     */
    readonly attrDbInstanceId: ros.IResolvable;
    /**
     * @Attribute InnerConnectionString: DB instance connection url by Intranet.
     */
    readonly attrInnerConnectionString: ros.IResolvable;
    /**
     * @Attribute InnerIPAddress: IP Address for created DB instance of Intranet.
     */
    readonly attrInnerIpAddress: ros.IResolvable;
    /**
     * @Attribute InnerPort: Intranet port of created DB instance.
     */
    readonly attrInnerPort: ros.IResolvable;
    /**
     * @Attribute PublicConnectionString: DB instance connection url by Internet.
     */
    readonly attrPublicConnectionString: ros.IResolvable;
    /**
     * @Attribute PublicIPAddress: IP Address for created DB instance of Internet.
     */
    readonly attrPublicIpAddress: ros.IResolvable;
    /**
     * @Attribute PublicPort: Internet port of created DB instance.
     */
    readonly attrPublicPort: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property dbInstanceId: Instance id
     */
    dbInstanceId: string | ros.IResolvable;
    /**
     * @Property payType: The charge type of created instance.
     */
    payType: string | ros.IResolvable;
    /**
     * @Property allocatePublicConnection: If true, allocate public connection automate.
     */
    allocatePublicConnection: boolean | ros.IResolvable | undefined;
    /**
     * @Property backupId: The ID of the backup set that you want to use.
     * You can call the DescribeBackups operation to query the most recent backup set list.
     * Note You must specify at least one of the BackupId and RestoreTime parameters.
     */
    backupId: string | ros.IResolvable | undefined;
    /**
     * @Property backupRetentionPeriod: The retention period of the data backup. Value range: 7 to 730. The default value is the original value. Note When the BackupPolicyMode parameter is set to LogBackupPolicy, this parameter is required.
     */
    backupRetentionPeriod: number | ros.IResolvable | undefined;
    /**
     * @Property backupType: The type of backup used by the new instance. Valid values:
     *  - FullBackup: full backup
     *  - IncrementalBackup: incremental backup
     */
    backupType: string | ros.IResolvable | undefined;
    /**
     * @Property category: The edition of the instance. Valid values:
     * Basic: RDS Basic Edition
     * HighAvailability: RDS High-availability Edition
     * cluster: RDS Cluster Edition
     * AlwaysOn: RDS Cluster Edition for SQL Server
     * Finance: RDS Enterprise Edition
     * serverless_basic: RDS Serverless Basic Edition
     */
    category: string | ros.IResolvable | undefined;
    /**
     * @Property connectionStringPrefix: The prefix of the endpoint.
     * Only the prefix of the CurrentConnectionString parameter value can be modified.
     * The prefix must be 8 to 64 characters in length and can contain letters, digits, and hyphens (-).
     */
    connectionStringPrefix: string | ros.IResolvable | undefined;
    /**
     * @Property connectionStringType: The endpoint type of the instance, allow values: Inner, Public
     */
    connectionStringType: string | ros.IResolvable | undefined;
    /**
     * @Property dbInstanceClass: Database instance type. Refer the RDS database instance type reference, such as 'rds.mys2.large', 'rds.mss1.large', 'rds.pg.s1.small' etc
     */
    dbInstanceClass: string | ros.IResolvable | undefined;
    /**
     * @Property dbInstanceDescription: Description of created database instance.
     */
    dbInstanceDescription: string | ros.IResolvable | undefined;
    /**
     * @Property dbInstanceStorage: The storage capacity of the instance. Unit: GB. The storage capacity increases in increments of 5 GB.
     * You can call the DescribeAvailableResource operation to query the storage capacity range that is supported for a specified instance type in a region.
     */
    dbInstanceStorage: number | ros.IResolvable | undefined;
    /**
     * @Property dbInstanceStorageType: The storage type of the instance. Valid values:
     * local_ssd: specifies to use local SSDs. This is the recommended storage type.
     * cloud_ssd: specifies to use standard SSDs.
     * cloud_essd: enhanced SSD of performance level (PL)1.
     * cloud_essd2: enhanced SSD of PL2.
     * cloud_essd3: enhanced SSD of PL3.
     */
    dbInstanceStorageType: string | ros.IResolvable | undefined;
    /**
     * @Property dbMappings: Database mappings to attach to db instance.
     */
    dbMappings: Array<RosDBInstanceClone.DBMappingsProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property dbNames: The names of the databases that you want to create on the new instance.
     */
    dbNames: string | ros.IResolvable | undefined;
    /**
     * @Property dedicatedHostGroupId: The ID of the host group to which the instance belongs if you create an instance in a host group.
     */
    dedicatedHostGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property instanceNetworkType: The network type of the new instance. Valid values:
     * - VPC
     * - Classic
     * The default value is the network type of the original instance.
     */
    instanceNetworkType: string | ros.IResolvable | undefined;
    /**
     * @Property maintainTime: The period during which the maintenance performs. The format is HH:mmZ-HH:mmZ.
     */
    maintainTime: string | ros.IResolvable | undefined;
    /**
     * @Property masterUsername: The master user name for the database instance.
     */
    masterUsername: string | ros.IResolvable | undefined;
    /**
     * @Property masterUserPassword: The master password for the database instance.
     */
    masterUserPassword: string | ros.IResolvable | undefined;
    /**
     * @Property masterUserType: Privilege type of account.
     *  Normal: Common privilege.
     *  Super: High privilege.
     * Sysadmin: Super privileges (SA) (only supported by SQL Server)
     * The default value is Normal.
     */
    masterUserType: string | ros.IResolvable | undefined;
    /**
     * @Property period: The subscription duration. Valid values:
     * When PeriodType is Month, it could be from 1 to 12, 24, 36, 48, 60.
     *  When PeriodType is Year, it could be from 1 to 5.
     */
    period: number | ros.IResolvable | undefined;
    /**
     * @Property periodType: Charge period for created instances.
     */
    periodType: string | ros.IResolvable | undefined;
    /**
     * @Property port: The port of the database service.
     */
    port: number | ros.IResolvable | undefined;
    /**
     * @Property preferredBackupPeriod: The backup period. Separate multiple values with commas (,). The default value is the original value. Valid values:Monday Tuesday Wednesday Thursday Friday Saturday Sunday Note When the BackupPolicyMode parameter is set to DataBackupPolicy, this parameter is required.
     */
    preferredBackupPeriod: Array<string | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property preferredBackupTime: The time when the backup task is performed. Format: yyyy-MM-ddZ-HH:mm:ssZ.Note When the BackupPolicyMode parameter is set to DataBackupPolicy, this parameter is required.
     */
    preferredBackupTime: string | ros.IResolvable | undefined;
    /**
     * @Property privateIpAddress: The private ip for created instance.
     */
    privateIpAddress: string | ros.IResolvable | undefined;
    /**
     * @Property restoreTable: Specifies whether to restore specific databases and tables.
     * The value 1 specifies to restore specific databases and tables.
     * If you do not want to restore specific databases or tables, you can choose not to specify this parameter.
     */
    restoreTable: string | ros.IResolvable | undefined;
    /**
     * @Property restoreTime: The point in time to which you want to restore the data of the original instance.
     * The point in time must fall within the specified log backup retention period.
     * The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format.
     * The time must be in UTC.
     */
    restoreTime: string | ros.IResolvable | undefined;
    /**
     * @Property securityGroupId: The ID of the ECS security groups.
     * Each RDS instance can be associated with up to three ECS security groups.
     * You must separate them with commas (,).
     * To delete an ECS Security group, leave this parameter empty.
     *
     */
    securityGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property securityIpList: Security ip to access the database instance, combine with comma, 0.0.0.0\/0 means no limitation.
     */
    securityIpList: string | ros.IResolvable | undefined;
    /**
     * @Property slaveZoneIds: List of slave zone ids can specify slave zone ids when creating the high-availability or enterprise edition instance. Meanwhile, VSwitchId needs to pass in the corresponding vswitch id to the slave zone by order. For example, ZoneId = "zone-a" and SlaveZoneIds = ["zone-c", "zone-b"], then the VSwitchId must be "vsw-zone-a,vsw-zone-c,vsw-zone-b".
     */
    slaveZoneIds: Array<string | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property sqlCollectorStatus: Specifies whether to enable or disable the SQL Explorer (SQL audit) feature.
     * Valid values:Enable | Disabled.
     */
    sqlCollectorStatus: string | ros.IResolvable | undefined;
    /**
     * @Property sslSetting: Secure Sockets Layer (SSL) link setting of the instance. Valid values:
     * Disabled: Disable SSL
     * EnabledForPublicConnection: Public connection address will be protected by the SSL certificate. It requires AllocatePublicConnection is true.
     * EnabledForInnerConnection: Private connection address will be protected by the SSL certificate.
     * Default value is Disabled.
     */
    sslSetting: string | ros.IResolvable | undefined;
    /**
     * @Property tableMeta: The information about the databases and tables that you want to restore.
     */
    tableMeta: Array<RosDBInstanceClone.TableMetaProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property tags: The tags of an instance.
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
    tags: {
        [key: string]: (any);
    } | undefined;
    /**
     * @Property timeoutInMinutes: The timeout period for creating the clone instance resource. Unit: Minute. Default: 120.
     */
    timeoutInMinutes: number | ros.IResolvable | undefined;
    /**
     * @Property vpcId: The VPC id of created database instance. For VPC network, the property is required.
     */
    vpcId: string | ros.IResolvable | undefined;
    /**
     * @Property vSwitchId: The vSwitch id of created instance. For VPC network, the property is required.
     */
    vSwitchId: string | ros.IResolvable | undefined;
    /**
     * @Property zoneId: selected zone to create database instance. You cannot set the ZoneId parameter if the MultiAZ parameter is set to true.
     */
    zoneId: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDBInstanceCloneProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosDBInstanceClone {
    /**
     * @stability external
     */
    interface DBMappingsProperty {
        /**
         * @Property characterSetName: For supported engines, specifies the character set to associate with the database instance.
         */
        readonly characterSetName: string | ros.IResolvable;
        /**
         * @Property dbDescription: Specifies the database description, containing up to 256 characters.
         */
        readonly dbDescription?: string | ros.IResolvable;
        /**
         * @Property dbName: Consists of [2, 64] lower case letters, numbers, underscores, lines, letters. Must start with a letter, end with letters or numbers
         */
        readonly dbName: string | ros.IResolvable;
    }
}
export declare namespace RosDBInstanceClone {
    /**
     * @stability external
     */
    interface TableMetaProperty {
        /**
         * @Property type: Restore type, db
         */
        readonly type?: string | ros.IResolvable;
        /**
         * @Property tables: The table information that you want to restore.
         */
        readonly tables?: Array<RosDBInstanceClone.TablesProperty | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property newName: New database name in clone instance.
         */
        readonly newName?: string | ros.IResolvable;
        /**
         * @Property name: Name of database you want to restore.
         */
        readonly name?: string | ros.IResolvable;
    }
}
export declare namespace RosDBInstanceClone {
    /**
     * @stability external
     */
    interface TablesProperty {
        /**
         * @Property type: Restore type, table
         */
        readonly type?: string | ros.IResolvable;
        /**
         * @Property newName: New name of the table in db
         */
        readonly newName?: string | ros.IResolvable;
        /**
         * @Property name: Name of table you want to restore
         */
        readonly name?: string | ros.IResolvable;
    }
}
/**
 * Properties for defining a `RosDBInstanceParameterGroup`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-rds-dbinstanceparametergroup
 */
export interface RosDBInstanceParameterGroupProps {
    /**
     * @Property dbInstanceId: Database InstanceId to update properties.
     */
    readonly dbInstanceId: string | ros.IResolvable;
    /**
     * @Property parameters: Parameters to update for selected database instance.
     */
    readonly parameters: Array<RosDBInstanceParameterGroup.ParametersProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property forcerestart: whether restart database instance.
     */
    readonly forcerestart?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::RDS::DBInstanceParameterGroup`.
 * @Note This class does not contain additional functions, so it is recommended to use the `DBInstanceParameterGroup` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-rds-dbinstanceparametergroup
 */
export declare class RosDBInstanceParameterGroup extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::RDS::DBInstanceParameterGroup";
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property dbInstanceId: Database InstanceId to update properties.
     */
    dbInstanceId: string | ros.IResolvable;
    /**
     * @Property parameters: Parameters to update for selected database instance.
     */
    parameters: Array<RosDBInstanceParameterGroup.ParametersProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property forcerestart: whether restart database instance.
     */
    forcerestart: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDBInstanceParameterGroupProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosDBInstanceParameterGroup {
    /**
     * @stability external
     */
    interface ParametersProperty {
        /**
         * @Property value: Value to update for instance property.
         */
        readonly value: string | ros.IResolvable;
        /**
         * @Property key: Key to update for instance property.
         */
        readonly key: string | ros.IResolvable;
    }
}
/**
 * Properties for defining a `RosDBInstanceSecurityIps`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-rds-dbinstancesecurityips
 */
export interface RosDBInstanceSecurityIpsProps {
    /**
     * @Property dbInstanceId: Database instance id to update security ips.
     */
    readonly dbInstanceId: string | ros.IResolvable;
    /**
     * @Property dbInstanceIpArrayAttribute: Security ips to add or remove.
     */
    readonly dbInstanceIpArrayAttribute: string | ros.IResolvable;
    /**
     * @Property dbInstanceIpArrayName: Group name of the security ips, only support lower characters and '_'. Advice use a new group name avoid effect your database system. If the properties is not specified, it will set to default group, please be careful.
     */
    readonly dbInstanceIpArrayName?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::RDS::DBInstanceSecurityIps`.
 * @Note This class does not contain additional functions, so it is recommended to use the `DBInstanceSecurityIps` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-rds-dbinstancesecurityips
 */
export declare class RosDBInstanceSecurityIps extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::RDS::DBInstanceSecurityIps";
    /**
     * @Attribute SecurityIps: The security ips of selected database instance.
     */
    readonly attrSecurityIps: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property dbInstanceId: Database instance id to update security ips.
     */
    dbInstanceId: string | ros.IResolvable;
    /**
     * @Property dbInstanceIpArrayAttribute: Security ips to add or remove.
     */
    dbInstanceIpArrayAttribute: string | ros.IResolvable;
    /**
     * @Property dbInstanceIpArrayName: Group name of the security ips, only support lower characters and '_'. Advice use a new group name avoid effect your database system. If the properties is not specified, it will set to default group, please be careful.
     */
    dbInstanceIpArrayName: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDBInstanceSecurityIpsProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosDatabase`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-rds-database
 */
export interface RosDatabaseProps {
    /**
     * @Property characterSetName: The character set you want to use for the database. Valid values:
     * MySQL and MariaDB: utf8 | gbk | latin1 | utf8mb4.
     * SQL Server: Chinese_PRC_CI_AS | Chinese_PRC_CS_AS | SQL_Latin1_General_CP1_CI_AS | SQL_Latin1_General_CP1_CS_AS
     * | Chinese_PRC_BIN.
     * PostgreSQL: KOI8U | UTF8 | WIN866 | WIN874 | WIN1250 | WIN1251 | WIN1252 | WIN1253 | WIN1254 |
     * WIN1255 | WIN1256 | WIN1257 | WIN1258 | EUC_CN | EUC_KR | EUC_TW | EUC_JP | EUC_JIS_2004
     * | KOI8R | MULE_INTERNAL | LATIN1 | LATIN2 | LATIN3 | LATIN4 | LATIN5 | LATIN6 | LATIN7
     * | LATIN8 | LATIN9 | LATIN10 | ISO_8859_5 | ISO_8859_6 | ISO_8859_7 | ISO_8859_8 |
     * SQL_ASCII.
     */
    readonly characterSetName: string | ros.IResolvable;
    /**
     * @Property dbInstanceId: The ID of the instance.
     */
    readonly dbInstanceId: string | ros.IResolvable;
    /**
     * @Property dbName: The name of the database you want to create.
     * Note
     * The name must be 2 to 64 characters in length.
     * The name must start with a lowercase letter and end with a lowercase letter or digit.
     * The name can contain lowercase letters, digits, underscores (_), and hyphens (-).
     * The name must be unique in the instance.
     * For more information about invalid characters, see Forbidden keywords table.
     */
    readonly dbName: string | ros.IResolvable;
    /**
     * @Property dbDescription: The description of the database. The description must be 2 to 256 characters in length.
     * The description must start with a letter and can contain letters, digits, underscores
     * (_), and hyphens (-).
     * Note The description cannot start with http:\/\/ or https:\/\/.
     */
    readonly dbDescription?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::RDS::Database`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Database` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-rds-database
 */
export declare class RosDatabase extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::RDS::Database";
    /**
     * @Attribute DBInstanceId: The ID of the instance.
     */
    readonly attrDbInstanceId: ros.IResolvable;
    /**
     * @Attribute DBName: The name of the database.
     */
    readonly attrDbName: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property characterSetName: The character set you want to use for the database. Valid values:
     * MySQL and MariaDB: utf8 | gbk | latin1 | utf8mb4.
     * SQL Server: Chinese_PRC_CI_AS | Chinese_PRC_CS_AS | SQL_Latin1_General_CP1_CI_AS | SQL_Latin1_General_CP1_CS_AS
     * | Chinese_PRC_BIN.
     * PostgreSQL: KOI8U | UTF8 | WIN866 | WIN874 | WIN1250 | WIN1251 | WIN1252 | WIN1253 | WIN1254 |
     * WIN1255 | WIN1256 | WIN1257 | WIN1258 | EUC_CN | EUC_KR | EUC_TW | EUC_JP | EUC_JIS_2004
     * | KOI8R | MULE_INTERNAL | LATIN1 | LATIN2 | LATIN3 | LATIN4 | LATIN5 | LATIN6 | LATIN7
     * | LATIN8 | LATIN9 | LATIN10 | ISO_8859_5 | ISO_8859_6 | ISO_8859_7 | ISO_8859_8 |
     * SQL_ASCII.
     */
    characterSetName: string | ros.IResolvable;
    /**
     * @Property dbInstanceId: The ID of the instance.
     */
    dbInstanceId: string | ros.IResolvable;
    /**
     * @Property dbName: The name of the database you want to create.
     * Note
     * The name must be 2 to 64 characters in length.
     * The name must start with a lowercase letter and end with a lowercase letter or digit.
     * The name can contain lowercase letters, digits, underscores (_), and hyphens (-).
     * The name must be unique in the instance.
     * For more information about invalid characters, see Forbidden keywords table.
     */
    dbName: string | ros.IResolvable;
    /**
     * @Property dbDescription: The description of the database. The description must be 2 to 256 characters in length.
     * The description must start with a letter and can contain letters, digits, underscores
     * (_), and hyphens (-).
     * Note The description cannot start with http:\/\/ or https:\/\/.
     */
    dbDescription: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDatabaseProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosMigrateTask`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-rds-migratetask
 */
export interface RosMigrateTaskProps {
    /**
     * @Property backupMode: The type of the migration task. Valid values:
     * FULL: specifies that full backup files are used to restore data.
     * UPDF: specifies that incremental backup files or log files are used to restore incremental data.
     */
    readonly backupMode: string | ros.IResolvable;
    /**
     * @Property dbInstanceId: The ID of the instance.
     */
    readonly dbInstanceId: string | ros.IResolvable;
    /**
     * @Property dbName: The name of the database that you want to restore.
     */
    readonly dbName: string | ros.IResolvable;
    /**
     * @Property isOnlineDb: Specifies whether to bring the restored database online for user access. Note The value for SQL Server 2008 R2 is fixed to True.
     */
    readonly isOnlineDb: boolean | ros.IResolvable;
    /**
     * @Property checkDbMode: The consistency check method of the database. Valid values:
     * SyncExecuteDBCheck: synchronous database check
     * AsyncExecuteDBCheck: asynchronous database check
     * Default value: AsyncExecuteDBCheck (compatible with SQL Server 2008 R2).
     * Note When IsOnlineDB is set to True, this value is valid.
     */
    readonly checkDbMode?: string | ros.IResolvable;
    /**
     * @Property ossObjectPositions: The information of the backup file in the OSS bucket.
     * The values consist of three parts that are separated by colons (:):
     * The endpoint of the OSS bucket: oss-ap-southeast-1.aliyuncs.com.
     * The name of the OSS bucket: rdsmssqlsingapore.
     * The key of the backup file in the OSS bucket: autotest_2008R2_TestMigration_FULL.bak.
     * Note
     * This parameter is optional for instances that run SQL Server 2008 R2.
     * This parameter is required for instances that run a database engine later than SQL
     * Server 2008 R2.
     */
    readonly ossObjectPositions?: string | ros.IResolvable;
    /**
     * @Property ossUrls: The shared URL of the backup file in the OSS bucket. The URL must be encoded.
     * If you specify multiple URLs, separate them with vertical bars (|) and then encode
     * them.
     * Note This parameter must be entered for instances that run SQL Server 2008 R2.
     */
    readonly ossUrls?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::RDS::MigrateTask`.
 * @Note This class does not contain additional functions, so it is recommended to use the `MigrateTask` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-rds-migratetask
 */
export declare class RosMigrateTask extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::RDS::MigrateTask";
    /**
     * @Attribute DBName: The name of the database that you want to restore.
     */
    readonly attrDbName: ros.IResolvable;
    /**
     * @Attribute MigrateTaskId: The ID of the migrate task.
     */
    readonly attrMigrateTaskId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property backupMode: The type of the migration task. Valid values:
     * FULL: specifies that full backup files are used to restore data.
     * UPDF: specifies that incremental backup files or log files are used to restore incremental data.
     */
    backupMode: string | ros.IResolvable;
    /**
     * @Property dbInstanceId: The ID of the instance.
     */
    dbInstanceId: string | ros.IResolvable;
    /**
     * @Property dbName: The name of the database that you want to restore.
     */
    dbName: string | ros.IResolvable;
    /**
     * @Property isOnlineDb: Specifies whether to bring the restored database online for user access. Note The value for SQL Server 2008 R2 is fixed to True.
     */
    isOnlineDb: boolean | ros.IResolvable;
    /**
     * @Property checkDbMode: The consistency check method of the database. Valid values:
     * SyncExecuteDBCheck: synchronous database check
     * AsyncExecuteDBCheck: asynchronous database check
     * Default value: AsyncExecuteDBCheck (compatible with SQL Server 2008 R2).
     * Note When IsOnlineDB is set to True, this value is valid.
     */
    checkDbMode: string | ros.IResolvable | undefined;
    /**
     * @Property ossObjectPositions: The information of the backup file in the OSS bucket.
     * The values consist of three parts that are separated by colons (:):
     * The endpoint of the OSS bucket: oss-ap-southeast-1.aliyuncs.com.
     * The name of the OSS bucket: rdsmssqlsingapore.
     * The key of the backup file in the OSS bucket: autotest_2008R2_TestMigration_FULL.bak.
     * Note
     * This parameter is optional for instances that run SQL Server 2008 R2.
     * This parameter is required for instances that run a database engine later than SQL
     * Server 2008 R2.
     */
    ossObjectPositions: string | ros.IResolvable | undefined;
    /**
     * @Property ossUrls: The shared URL of the backup file in the OSS bucket. The URL must be encoded.
     * If you specify multiple URLs, separate them with vertical bars (|) and then encode
     * them.
     * Note This parameter must be entered for instances that run SQL Server 2008 R2.
     */
    ossUrls: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosMigrateTaskProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosPostgresExtensions`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-rds-postgresextensions
 */
export interface RosPostgresExtensionsProps {
    /**
     * @Property accountName: The account of the user who owns the extension. Only privileged accounts are supported.
     */
    readonly accountName: string | ros.IResolvable;
    /**
     * @Property dbInstanceId: The instance ID. You can call the DescribeDBInstances operation to query the instance ID.
     */
    readonly dbInstanceId: string | ros.IResolvable;
    /**
     * @Property dbName: The database name. You can call the DescribeDatabases operation to query the database name.
     */
    readonly dbName: string | ros.IResolvable;
    /**
     * @Property extensions: The extensions that you want to install.
     */
    readonly extensions?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * @Property riskConfirmed: The risk description that you need to confirm. If your instance runs an outdated minor engine version, installing specific extensions on the instance poses security risks. Proceed with the installation only after you acknowledge these risks. Valid values:
     * true
     * false
     * Note For more information about the risks, see Limits on extension creation for ApsaraDB RDS for PostgreSQL instances.
     */
    readonly riskConfirmed?: boolean | ros.IResolvable;
    /**
     * @Property sourceDatabase: The source database from which you want to synchronize the extension to the destination database. If you do not specify the Extensions parameter, you must specify this parameter.
     */
    readonly sourceDatabase?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::RDS::PostgresExtensions`.
 * @Note This class does not contain additional functions, so it is recommended to use the `PostgresExtensions` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-rds-postgresextensions
 */
export declare class RosPostgresExtensions extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::RDS::PostgresExtensions";
    /**
     * @Attribute InstalledExtensionNames: Extension names installed via ROS
     */
    readonly attrInstalledExtensionNames: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property accountName: The account of the user who owns the extension. Only privileged accounts are supported.
     */
    accountName: string | ros.IResolvable;
    /**
     * @Property dbInstanceId: The instance ID. You can call the DescribeDBInstances operation to query the instance ID.
     */
    dbInstanceId: string | ros.IResolvable;
    /**
     * @Property dbName: The database name. You can call the DescribeDatabases operation to query the database name.
     */
    dbName: string | ros.IResolvable;
    /**
     * @Property extensions: The extensions that you want to install.
     */
    extensions: Array<string | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property riskConfirmed: The risk description that you need to confirm. If your instance runs an outdated minor engine version, installing specific extensions on the instance poses security risks. Proceed with the installation only after you acknowledge these risks. Valid values:
     * true
     * false
     * Note For more information about the risks, see Limits on extension creation for ApsaraDB RDS for PostgreSQL instances.
     */
    riskConfirmed: boolean | ros.IResolvable | undefined;
    /**
     * @Property sourceDatabase: The source database from which you want to synchronize the extension to the destination database. If you do not specify the Extensions parameter, you must specify this parameter.
     */
    sourceDatabase: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosPostgresExtensionsProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosPrepayDBInstance`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-rds-prepaydbinstance
 */
export interface RosPrepayDBInstanceProps {
    /**
     * @Property commodityCode: The CommodityCode of the order.
     */
    readonly commodityCode: string | ros.IResolvable;
    /**
     * @Property dbInstanceClass: Database instance type. Refer the RDS database instance type reference, such as 'rds.mys2.large', 'rds.mss1.large', 'rds.pg.s1.small' etc
     */
    readonly dbInstanceClass: string | ros.IResolvable;
    /**
     * @Property dbInstanceStorage: The storage capacity of the instance. Unit: GB. The storage capacity increases in increments of 5 GB.
     * You can call the DescribeAvailableResource operation to query the storage capacity range that is supported for a specified instance type in a region.
     */
    readonly dbInstanceStorage: number | ros.IResolvable;
    /**
     * @Property engine: Database instance engine type. Support MySQL\/SQLServer\/PostgreSQL\/PPAS\/MariaDB now.
     */
    readonly engine: string | ros.IResolvable;
    /**
     * @Property engineVersion: Database instance version of the relative engine type. Support:
     * Valid values when you set the Engine parameter to MySQL: 5.5, 5.6, 5.7, and 8.0
     * Valid values when you set the Engine parameter to SQL Server: 2008r2, 08r2_ent_ha, 2012, 2012_ent_ha, 2012_std_ha, 2012_web, 2014_std_ha, 2016_ent_ha, 2016_std_ha, 2016_web, 2017_std_ha, 2017_ent, 2019_std_ha, and 2019_ent
     * Valid values when you set the Engine parameter to PostgreSQL: 10.0, 11.0, 12.0, 13.0, and 14.0
     * Valid values when you set the Engine parameter to MariaDB: 10.3
     */
    readonly engineVersion: string | ros.IResolvable;
    /**
     * @Property period: Prepaid time period. While choose by pay by month, it could be from 1 to 9. While choose pay by year, it could be from 1 to 3.
     */
    readonly period: number | ros.IResolvable;
    /**
     * @Property periodType: Charge period for created instances.
     */
    readonly periodType: string | ros.IResolvable;
    /**
     * @Property allocatePublicConnection: If true, allocate public connection automate.
     */
    readonly allocatePublicConnection?: boolean | ros.IResolvable;
    /**
     * @Property archiveBackupKeepCount: The number of archived backups that can be retained. Default value: 1. Valid values:
     * The value of this parameter ranges from 1 to 31 when the ArchiveBackupKeepPolicy
     *  parameter is set to ByMonth.
     * The value of this parameter ranges from 1 to 7 when the ArchiveBackupKeepPolicy
     *  parameter is set to ByWeek.
     * Note You do not need to specify this parameter when the ArchiveBackupKeepPolicy
     * parameter is set to KeepAll.
     */
    readonly archiveBackupKeepCount?: number | ros.IResolvable;
    /**
     * @Property archiveBackupKeepPolicy: The period for which to retain archived backups. The number of archived backups that can
     *  be retained within the specified period is determined by the ArchiveBackupKeepCount parameter.
     *  Default value: 0. Valid values:
     * ByMonth
     *  ByWeek
     *  KeepAll
     */
    readonly archiveBackupKeepPolicy?: string | ros.IResolvable;
    /**
     * @Property archiveBackupRetentionPeriod: The number of days for which to retain archived backups.
     *  The default value 0 specifies not to enable the backup archiving function. Valid values: 30 to 1095.
     */
    readonly archiveBackupRetentionPeriod?: number | ros.IResolvable;
    /**
     * @Property autoPay: Automatic Payment. Default is true.
     */
    readonly autoPay?: boolean | ros.IResolvable;
    /**
     * @Property autoRenew: Auto renew the prepay instance. If the period type is by year, it will renew by year, else it will renew by month.
     */
    readonly autoRenew?: boolean | ros.IResolvable;
    /**
     * @Property backUpCategory: Specifies whether to enable the second-level backup function. This function allows a backup
     * to be completed within seconds. Valid values:
     * Flash: specifies to enable the second-level backup function.
     *  Standard: specifies to disable the second-level backup function.
     */
    readonly backUpCategory?: string | ros.IResolvable;
    /**
     * @Property backupPolicyMode: Backup type,
     * DataBackupPolicy: data backup
     * LogBackupPolicy: log backup
     */
    readonly backupPolicyMode?: string | ros.IResolvable;
    /**
     * @Property backupRetentionPeriod: The retention period of the data backup. Value range: 7 to 730. The default value is the original value. Note When the BackupPolicyMode parameter is set to LogBackupPolicy, this parameter is required.
     */
    readonly backupRetentionPeriod?: number | ros.IResolvable;
    /**
     * @Property burstingEnabled: Whether to enable bursting.
     */
    readonly burstingEnabled?: boolean | ros.IResolvable;
    /**
     * @Property category: The edition of the instance. Valid values:
     * Basic: RDS Basic Edition
     * HighAvailability: RDS High-availability Edition
     * cluster: RDS Cluster Edition
     * AlwaysOn: RDS Cluster Edition for SQL Server
     * Finance: RDS Enterprise Edition
     * serverless_basic: RDS Serverless Basic Edition
     */
    readonly category?: string | ros.IResolvable;
    /**
     * @Property coldDataEnabled: Whether to enable cold data storage.
     */
    readonly coldDataEnabled?: boolean | ros.IResolvable;
    /**
     * @Property compressType: The format used to compress backups. Valid values:
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
     * @Property connectionMode: Connection Mode for database instance,support 'Standard' and 'Safe' mode. Default is RDS system assigns.
     */
    readonly connectionMode?: string | ros.IResolvable;
    /**
     * @Property connectionStringPrefix: The prefix of the endpoint.
     * Only the prefix of the CurrentConnectionString parameter value can be modified.
     * The prefix must be 8 to 64 characters in length and can contain letters, digits, and hyphens (-).
     */
    readonly connectionStringPrefix?: string | ros.IResolvable;
    /**
     * @Property connectionStringType: The endpoint type of the instance, allow values: Inner, Public
     */
    readonly connectionStringType?: string | ros.IResolvable;
    /**
     * @Property couponCode: The coupon code of the order.
     */
    readonly couponCode?: string | ros.IResolvable;
    /**
     * @Property dbInstanceDescription: Description of created database instance.
     */
    readonly dbInstanceDescription?: string | ros.IResolvable;
    /**
     * @Property dbInstanceNetType: Database instance net type, default is Intranet.Internet for public access, Intranet for private access.
     */
    readonly dbInstanceNetType?: string | ros.IResolvable;
    /**
     * @Property dbInstanceStorageType: The storage type of the instance. Valid values:
     * local_ssd: specifies to use local SSDs. This is the recommended storage type.
     * cloud_ssd: specifies to use standard SSDs.
     * cloud_essd: enhanced SSD of performance level (PL)1.
     * cloud_essd2: enhanced SSD of PL2.
     * cloud_essd3: enhanced SSD of PL3.
     */
    readonly dbInstanceStorageType?: string | ros.IResolvable;
    /**
     * @Property dbIsIgnoreCase: Specifies whether table names are case-sensitive. Valid values:
     * 1: Table names are not case-sensitive. This is the default value.
     * 0: Table names are case-sensitive.
     */
    readonly dbIsIgnoreCase?: number | ros.IResolvable;
    /**
     * @Property dbMappings: Database mappings to attach to db instance.
     */
    readonly dbMappings?: Array<RosPrepayDBInstance.DBMappingsProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property dbParamGroupId: The ID of the parameter template used by the instance.
     */
    readonly dbParamGroupId?: string | ros.IResolvable;
    /**
     * @Property dbTimeZone: The UTC time zone of the instance. Valid values: -12:00 to +12:00. The time zone must be an integer value such as +08:00. Values such as +08:30 are not allowed.
     */
    readonly dbTimeZone?: string | ros.IResolvable;
    /**
     * @Property dedicatedHostGroupId: The ID of the host group to which the instance belongs if you create an instance in a host group.
     */
    readonly dedicatedHostGroupId?: string | ros.IResolvable;
    /**
     * @Property deletionProtection: Specifies whether to enable the release protection feature for the instance. This feature is available only for pay-as-you-go instances. Default is false.
     */
    readonly deletionProtection?: boolean | ros.IResolvable;
    /**
     * @Property enableBackupLog: Specifies whether to enable the log backup function. Valid values:
     * True: specifies to enable the log backup function.
     * False: specifies to disable the log backup function.
     * Note You must specify this parameter when the BackupPolicyMode parameter is set to LogBackupPolicy.
     */
    readonly enableBackupLog?: boolean | ros.IResolvable;
    /**
     * @Property encryptionKey: The ID of the encryption key that is used to encrypt data on SSDs in the region. You can view the encryption key ID in the Key Management Service (KMS) console. You can also create an encryption key.
     */
    readonly encryptionKey?: string | ros.IResolvable;
    /**
     * @Property highSpaceUsageProtection: Specifies whether to forcibly delete log backup files when the space usage of the
     *  instance exceeds 80% or the remaining space is less than 5 GB. Valid values:
     *  Enable and Disable. You can retain the default value. Note You must specify
     *  this parameter when the BackupPolicyMode parameter is set to LogBackupPolicy.
     */
    readonly highSpaceUsageProtection?: string | ros.IResolvable;
    /**
     * @Property instanceNetworkType: Instance network type, VPC or Classic
     */
    readonly instanceNetworkType?: string | ros.IResolvable;
    /**
     * @Property ioAccelerationEnabled: Whether to enable IO Acceleration, 1 for enable 0 for disable.
     */
    readonly ioAccelerationEnabled?: string | ros.IResolvable;
    /**
     * @Property localLogRetentionHours: The number of hours for which to retain log backup files on the instance.
     * Valid values: 0 to 168. The value 0 specifies not to retain log backup files on the instance.
     * You can retain the default value. Note You must specify this parameter when the BackupPolicyMode
     * parameter is set to LogBackupPolicy.
     */
    readonly localLogRetentionHours?: number | ros.IResolvable;
    /**
     * @Property localLogRetentionSpace: The maximum percentage of space that is allowed to store log backup files on the instance.
     *  If the space usage for log backup files exceeds this percentage, the system deletes earlier
     *  log backup files until the space usage falls below this percentage. Valid values:0 to 50.
     *  You can retain the default value. Note You must specify this parameter when the
     *  BackupPolicyMode parameter is set to LogBackupPolicy.
     */
    readonly localLogRetentionSpace?: number | ros.IResolvable;
    /**
     * @Property logBackupFrequency: The frequency at which to back up logs. Valid values:
     * The value LogInterval specifies to back up logs every 30 minutes.
     *  The default value of this parameter is the same as the data backup frequency.
     * Note The value LogInterval is supported only when the instance runs SQL Server.
     */
    readonly logBackupFrequency?: string | ros.IResolvable;
    /**
     * @Property logBackupLocalRetentionNumber: The number of log backup files that can be retained on the instance.
     * Default value: 60. Valid values: 6 to 100.
     */
    readonly logBackupLocalRetentionNumber?: number | ros.IResolvable;
    /**
     * @Property logBackupRetentionPeriod: The number of days for which to retain log backup files. Valid values: 7 to 730. The log backup
     *  retention period cannot be longer than the data backup retention period.Note If you enable the log
     *  backup function, you can specify the log backup retention period. This applies only when the
     *  instance runs MySQL, PostgreSQL, or PPAS.
     */
    readonly logBackupRetentionPeriod?: number | ros.IResolvable;
    /**
     * @Property maintainTime: The period during which the maintenance performs. The format is HH:mmZ-HH:mmZ.
     */
    readonly maintainTime?: string | ros.IResolvable;
    /**
     * @Property masterUsername: The master user name for the database instance.
     */
    readonly masterUsername?: string | ros.IResolvable;
    /**
     * @Property masterUserPassword: The master password for the database instance.
     */
    readonly masterUserPassword?: string | ros.IResolvable;
    /**
     * @Property masterUserType: Privilege type of account.
     *  Normal: Common privilege.
     *  Super: High privilege.
     * Sysadmin: Super privileges (SA) (only supported by SQL Server)
     * The default value is Normal.
     */
    readonly masterUserType?: string | ros.IResolvable;
    /**
     * @Property multiAz: Specifies if the database instance is a multiple Availability Zone deployment.
     */
    readonly multiAz?: boolean | ros.IResolvable;
    /**
     * @Property port: The port of the database service.
     */
    readonly port?: number | ros.IResolvable;
    /**
     * @Property preferredBackupPeriod: The backup period. Separate multiple values with commas (,). The default value is the original value. Valid values:Monday Tuesday Wednesday Thursday Friday Saturday Sunday Note When the BackupPolicyMode parameter is set to DataBackupPolicy, this parameter is required.
     */
    readonly preferredBackupPeriod?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property preferredBackupTime: The time when the backup task is performed. Format: yyyy-MM-ddZ-HH:mm:ssZ.Note When the BackupPolicyMode parameter is set to DataBackupPolicy, this parameter is required.
     */
    readonly preferredBackupTime?: string | ros.IResolvable;
    /**
     * @Property privateIpAddress: The private ip for created instance.
     */
    readonly privateIpAddress?: string | ros.IResolvable;
    /**
     * @Property quantity: The number of instance to be created, default is 1, max number is 99
     */
    readonly quantity?: number | ros.IResolvable;
    /**
     * @Property releasedKeepPolicy: The policy used to retain archived backups if the instance is released. Default value: None.
     *  Valid values:
     * Lastest: Only the last archived backup is retained.
     *  All: All of the archived backups are retained.
     */
    readonly releasedKeepPolicy?: string | ros.IResolvable;
    /**
     * @Property resourceGroupId: Resource group id.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * @Property roleArn: The Alibaba Cloud Resource Name (ARN) provided to the service account of the instance by your Alibaba Cloud account to connect to KMS. You can copy the ARN from the RAM console.
     */
    readonly roleArn?: string | ros.IResolvable;
    /**
     * @Property securityGroupId: The ID of the ECS security groups.
     * Each RDS instance can be associated with up to three ECS security groups.
     * You must separate them with commas (,).
     * To delete an ECS Security group, leave this parameter empty.
     *
     */
    readonly securityGroupId?: string | ros.IResolvable;
    /**
     * @Property serverlessConfig: The config of RDS serverless instance. This is required when creating serverless instance.
     */
    readonly serverlessConfig?: RosPrepayDBInstance.ServerlessConfigProperty | ros.IResolvable;
    /**
     * @Property slaveZoneIds: List of slave zone ids can specify slave zone ids when creating the high-availability or enterprise edition instance. Meanwhile, VSwitchId needs to pass in the corresponding vswitch id to the slave zone by order. For example, ZoneId = "zone-a" and SlaveZoneIds = ["zone-c", "zone-b"], then the VSwitchId must be "vsw-zone-a,vsw-zone-c,vsw-zone-b".
     */
    readonly slaveZoneIds?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property sqlCollectorStatus: Specifies whether to enable or disable the SQL Explorer (SQL audit) feature.
     * Valid values:Enable | Disabled.
     */
    readonly sqlCollectorStatus?: string | ros.IResolvable;
    /**
     * @Property sslSetting: Secure Sockets Layer (SSL) link setting of the instance. Valid values:
     * Disabled: Disable SSL
     * EnabledForPublicConnection: Public connection address will be protected by the SSL certificate. It requires AllocatePublicConnection is true.
     * EnabledForInnerConnection: Private connection address will be protected by the SSL certificate.
     * Default value is Disabled.
     */
    readonly sslSetting?: string | ros.IResolvable;
    /**
     * @Property storageAutoScale: Storage space automatic expansion switch, only supported by MySQL and PostgreSQL
     */
    readonly storageAutoScale?: string | ros.IResolvable;
    /**
     * @Property storageThreshold: Storage space automatic expansion trigger threshold (percentage)
     */
    readonly storageThreshold?: number | ros.IResolvable;
    /**
     * @Property storageUpperBound: The total storage space upper limit for automatic storage space expansion, that is, automatic expansion will not cause the total storage space of the instance to exceed this value.
     */
    readonly storageUpperBound?: number | ros.IResolvable;
    /**
     * @Property tags: The tags of an instance.
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
    readonly tags?: {
        [key: string]: (any);
    };
    /**
     * @Property targetDedicatedHostIdForLog: The ID of the host to which the instance belongs if you create a log instance in a host group.
     */
    readonly targetDedicatedHostIdForLog?: string | ros.IResolvable;
    /**
     * @Property targetDedicatedHostIdForMaster: The ID of the host to which the instance belongs if you create a primary instance in a host group.
     */
    readonly targetDedicatedHostIdForMaster?: string | ros.IResolvable;
    /**
     * @Property targetDedicatedHostIdForSlave: The ID of the host to which the instance belongs if you create a secondary instance in a host group.
     */
    readonly targetDedicatedHostIdForSlave?: string | ros.IResolvable;
    /**
     * @Property vpcId: The VPC id of created database instance. For VPC network, the property is required.
     */
    readonly vpcId?: string | ros.IResolvable;
    /**
     * @Property vSwitchId: The vSwitch id of created instance. For VPC network, the property is required.
     */
    readonly vSwitchId?: string | ros.IResolvable;
    /**
     * @Property zoneId: selected zone to create database instance. You cannot set the ZoneId parameter if the MultiAZ parameter is set to true.
     */
    readonly zoneId?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::RDS::PrepayDBInstance`.
 * @Note This class does not contain additional functions, so it is recommended to use the `PrepayDBInstance` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-rds-prepaydbinstance
 */
export declare class RosPrepayDBInstance extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::RDS::PrepayDBInstance";
    /**
     * @Attribute DBInstanceId: The instance id of created database instance.
     */
    readonly attrDbInstanceId: ros.IResolvable;
    /**
     * @Attribute InnerConnectionString: DB instance connection url by Intranet.
     */
    readonly attrInnerConnectionString: ros.IResolvable;
    /**
     * @Attribute InnerIPAddress: IP Address for created DB instance of Intranet.
     */
    readonly attrInnerIpAddress: ros.IResolvable;
    /**
     * @Attribute InnerPort: Intranet port of created DB instance.
     */
    readonly attrInnerPort: ros.IResolvable;
    /**
     * @Attribute OrderId: The order id list of created instance.
     */
    readonly attrOrderId: ros.IResolvable;
    /**
     * @Attribute PublicConnectionString: DB instance connection url by Internet.
     */
    readonly attrPublicConnectionString: ros.IResolvable;
    /**
     * @Attribute PublicIPAddress: IP Address for created DB instance of Internet.
     */
    readonly attrPublicIpAddress: ros.IResolvable;
    /**
     * @Attribute PublicPort: Internet port of created DB instance.
     */
    readonly attrPublicPort: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property commodityCode: The CommodityCode of the order.
     */
    commodityCode: string | ros.IResolvable;
    /**
     * @Property dbInstanceClass: Database instance type. Refer the RDS database instance type reference, such as 'rds.mys2.large', 'rds.mss1.large', 'rds.pg.s1.small' etc
     */
    dbInstanceClass: string | ros.IResolvable;
    /**
     * @Property dbInstanceStorage: The storage capacity of the instance. Unit: GB. The storage capacity increases in increments of 5 GB.
     * You can call the DescribeAvailableResource operation to query the storage capacity range that is supported for a specified instance type in a region.
     */
    dbInstanceStorage: number | ros.IResolvable;
    /**
     * @Property engine: Database instance engine type. Support MySQL\/SQLServer\/PostgreSQL\/PPAS\/MariaDB now.
     */
    engine: string | ros.IResolvable;
    /**
     * @Property engineVersion: Database instance version of the relative engine type. Support:
     * Valid values when you set the Engine parameter to MySQL: 5.5, 5.6, 5.7, and 8.0
     * Valid values when you set the Engine parameter to SQL Server: 2008r2, 08r2_ent_ha, 2012, 2012_ent_ha, 2012_std_ha, 2012_web, 2014_std_ha, 2016_ent_ha, 2016_std_ha, 2016_web, 2017_std_ha, 2017_ent, 2019_std_ha, and 2019_ent
     * Valid values when you set the Engine parameter to PostgreSQL: 10.0, 11.0, 12.0, 13.0, and 14.0
     * Valid values when you set the Engine parameter to MariaDB: 10.3
     */
    engineVersion: string | ros.IResolvable;
    /**
     * @Property period: Prepaid time period. While choose by pay by month, it could be from 1 to 9. While choose pay by year, it could be from 1 to 3.
     */
    period: number | ros.IResolvable;
    /**
     * @Property periodType: Charge period for created instances.
     */
    periodType: string | ros.IResolvable;
    /**
     * @Property allocatePublicConnection: If true, allocate public connection automate.
     */
    allocatePublicConnection: boolean | ros.IResolvable | undefined;
    /**
     * @Property archiveBackupKeepCount: The number of archived backups that can be retained. Default value: 1. Valid values:
     * The value of this parameter ranges from 1 to 31 when the ArchiveBackupKeepPolicy
     *  parameter is set to ByMonth.
     * The value of this parameter ranges from 1 to 7 when the ArchiveBackupKeepPolicy
     *  parameter is set to ByWeek.
     * Note You do not need to specify this parameter when the ArchiveBackupKeepPolicy
     * parameter is set to KeepAll.
     */
    archiveBackupKeepCount: number | ros.IResolvable | undefined;
    /**
     * @Property archiveBackupKeepPolicy: The period for which to retain archived backups. The number of archived backups that can
     *  be retained within the specified period is determined by the ArchiveBackupKeepCount parameter.
     *  Default value: 0. Valid values:
     * ByMonth
     *  ByWeek
     *  KeepAll
     */
    archiveBackupKeepPolicy: string | ros.IResolvable | undefined;
    /**
     * @Property archiveBackupRetentionPeriod: The number of days for which to retain archived backups.
     *  The default value 0 specifies not to enable the backup archiving function. Valid values: 30 to 1095.
     */
    archiveBackupRetentionPeriod: number | ros.IResolvable | undefined;
    /**
     * @Property autoPay: Automatic Payment. Default is true.
     */
    autoPay: boolean | ros.IResolvable | undefined;
    /**
     * @Property autoRenew: Auto renew the prepay instance. If the period type is by year, it will renew by year, else it will renew by month.
     */
    autoRenew: boolean | ros.IResolvable | undefined;
    /**
     * @Property backUpCategory: Specifies whether to enable the second-level backup function. This function allows a backup
     * to be completed within seconds. Valid values:
     * Flash: specifies to enable the second-level backup function.
     *  Standard: specifies to disable the second-level backup function.
     */
    backUpCategory: string | ros.IResolvable | undefined;
    /**
     * @Property backupPolicyMode: Backup type,
     * DataBackupPolicy: data backup
     * LogBackupPolicy: log backup
     */
    backupPolicyMode: string | ros.IResolvable | undefined;
    /**
     * @Property backupRetentionPeriod: The retention period of the data backup. Value range: 7 to 730. The default value is the original value. Note When the BackupPolicyMode parameter is set to LogBackupPolicy, this parameter is required.
     */
    backupRetentionPeriod: number | ros.IResolvable | undefined;
    /**
     * @Property burstingEnabled: Whether to enable bursting.
     */
    burstingEnabled: boolean | ros.IResolvable | undefined;
    /**
     * @Property category: The edition of the instance. Valid values:
     * Basic: RDS Basic Edition
     * HighAvailability: RDS High-availability Edition
     * cluster: RDS Cluster Edition
     * AlwaysOn: RDS Cluster Edition for SQL Server
     * Finance: RDS Enterprise Edition
     * serverless_basic: RDS Serverless Basic Edition
     */
    category: string | ros.IResolvable | undefined;
    /**
     * @Property coldDataEnabled: Whether to enable cold data storage.
     */
    coldDataEnabled: boolean | ros.IResolvable | undefined;
    /**
     * @Property compressType: The format used to compress backups. Valid values:
     *  1: The zlib tool is used to compress backups into .tar.gz files.
     *  4: The QuickLZ tool is used to compress backups into .xb.gz files.
     * This compression format is supported only when the instance runs MySQL 5.6 or 5.7.
     * It can be used to restore individual databases and tables.
     *  8: The QuickLZ tool is used to compress backups into .xb.gz files.
     *  This compression format is supported only when the instance runs MySQL 8.0.
     * It cannot be used to restore individual databases or tables.
     */
    compressType: number | ros.IResolvable | undefined;
    /**
     * @Property connectionMode: Connection Mode for database instance,support 'Standard' and 'Safe' mode. Default is RDS system assigns.
     */
    connectionMode: string | ros.IResolvable | undefined;
    /**
     * @Property connectionStringPrefix: The prefix of the endpoint.
     * Only the prefix of the CurrentConnectionString parameter value can be modified.
     * The prefix must be 8 to 64 characters in length and can contain letters, digits, and hyphens (-).
     */
    connectionStringPrefix: string | ros.IResolvable | undefined;
    /**
     * @Property connectionStringType: The endpoint type of the instance, allow values: Inner, Public
     */
    connectionStringType: string | ros.IResolvable | undefined;
    /**
     * @Property couponCode: The coupon code of the order.
     */
    couponCode: string | ros.IResolvable | undefined;
    /**
     * @Property dbInstanceDescription: Description of created database instance.
     */
    dbInstanceDescription: string | ros.IResolvable | undefined;
    /**
     * @Property dbInstanceNetType: Database instance net type, default is Intranet.Internet for public access, Intranet for private access.
     */
    dbInstanceNetType: string | ros.IResolvable | undefined;
    /**
     * @Property dbInstanceStorageType: The storage type of the instance. Valid values:
     * local_ssd: specifies to use local SSDs. This is the recommended storage type.
     * cloud_ssd: specifies to use standard SSDs.
     * cloud_essd: enhanced SSD of performance level (PL)1.
     * cloud_essd2: enhanced SSD of PL2.
     * cloud_essd3: enhanced SSD of PL3.
     */
    dbInstanceStorageType: string | ros.IResolvable | undefined;
    /**
     * @Property dbIsIgnoreCase: Specifies whether table names are case-sensitive. Valid values:
     * 1: Table names are not case-sensitive. This is the default value.
     * 0: Table names are case-sensitive.
     */
    dbIsIgnoreCase: number | ros.IResolvable | undefined;
    /**
     * @Property dbMappings: Database mappings to attach to db instance.
     */
    dbMappings: Array<RosPrepayDBInstance.DBMappingsProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property dbParamGroupId: The ID of the parameter template used by the instance.
     */
    dbParamGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property dbTimeZone: The UTC time zone of the instance. Valid values: -12:00 to +12:00. The time zone must be an integer value such as +08:00. Values such as +08:30 are not allowed.
     */
    dbTimeZone: string | ros.IResolvable | undefined;
    /**
     * @Property dedicatedHostGroupId: The ID of the host group to which the instance belongs if you create an instance in a host group.
     */
    dedicatedHostGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property deletionProtection: Specifies whether to enable the release protection feature for the instance. This feature is available only for pay-as-you-go instances. Default is false.
     */
    deletionProtection: boolean | ros.IResolvable | undefined;
    /**
     * @Property enableBackupLog: Specifies whether to enable the log backup function. Valid values:
     * True: specifies to enable the log backup function.
     * False: specifies to disable the log backup function.
     * Note You must specify this parameter when the BackupPolicyMode parameter is set to LogBackupPolicy.
     */
    enableBackupLog: boolean | ros.IResolvable | undefined;
    /**
     * @Property encryptionKey: The ID of the encryption key that is used to encrypt data on SSDs in the region. You can view the encryption key ID in the Key Management Service (KMS) console. You can also create an encryption key.
     */
    encryptionKey: string | ros.IResolvable | undefined;
    /**
     * @Property highSpaceUsageProtection: Specifies whether to forcibly delete log backup files when the space usage of the
     *  instance exceeds 80% or the remaining space is less than 5 GB. Valid values:
     *  Enable and Disable. You can retain the default value. Note You must specify
     *  this parameter when the BackupPolicyMode parameter is set to LogBackupPolicy.
     */
    highSpaceUsageProtection: string | ros.IResolvable | undefined;
    /**
     * @Property instanceNetworkType: Instance network type, VPC or Classic
     */
    instanceNetworkType: string | ros.IResolvable | undefined;
    /**
     * @Property ioAccelerationEnabled: Whether to enable IO Acceleration, 1 for enable 0 for disable.
     */
    ioAccelerationEnabled: string | ros.IResolvable | undefined;
    /**
     * @Property localLogRetentionHours: The number of hours for which to retain log backup files on the instance.
     * Valid values: 0 to 168. The value 0 specifies not to retain log backup files on the instance.
     * You can retain the default value. Note You must specify this parameter when the BackupPolicyMode
     * parameter is set to LogBackupPolicy.
     */
    localLogRetentionHours: number | ros.IResolvable | undefined;
    /**
     * @Property localLogRetentionSpace: The maximum percentage of space that is allowed to store log backup files on the instance.
     *  If the space usage for log backup files exceeds this percentage, the system deletes earlier
     *  log backup files until the space usage falls below this percentage. Valid values:0 to 50.
     *  You can retain the default value. Note You must specify this parameter when the
     *  BackupPolicyMode parameter is set to LogBackupPolicy.
     */
    localLogRetentionSpace: number | ros.IResolvable | undefined;
    /**
     * @Property logBackupFrequency: The frequency at which to back up logs. Valid values:
     * The value LogInterval specifies to back up logs every 30 minutes.
     *  The default value of this parameter is the same as the data backup frequency.
     * Note The value LogInterval is supported only when the instance runs SQL Server.
     */
    logBackupFrequency: string | ros.IResolvable | undefined;
    /**
     * @Property logBackupLocalRetentionNumber: The number of log backup files that can be retained on the instance.
     * Default value: 60. Valid values: 6 to 100.
     */
    logBackupLocalRetentionNumber: number | ros.IResolvable | undefined;
    /**
     * @Property logBackupRetentionPeriod: The number of days for which to retain log backup files. Valid values: 7 to 730. The log backup
     *  retention period cannot be longer than the data backup retention period.Note If you enable the log
     *  backup function, you can specify the log backup retention period. This applies only when the
     *  instance runs MySQL, PostgreSQL, or PPAS.
     */
    logBackupRetentionPeriod: number | ros.IResolvable | undefined;
    /**
     * @Property maintainTime: The period during which the maintenance performs. The format is HH:mmZ-HH:mmZ.
     */
    maintainTime: string | ros.IResolvable | undefined;
    /**
     * @Property masterUsername: The master user name for the database instance.
     */
    masterUsername: string | ros.IResolvable | undefined;
    /**
     * @Property masterUserPassword: The master password for the database instance.
     */
    masterUserPassword: string | ros.IResolvable | undefined;
    /**
     * @Property masterUserType: Privilege type of account.
     *  Normal: Common privilege.
     *  Super: High privilege.
     * Sysadmin: Super privileges (SA) (only supported by SQL Server)
     * The default value is Normal.
     */
    masterUserType: string | ros.IResolvable | undefined;
    /**
     * @Property multiAz: Specifies if the database instance is a multiple Availability Zone deployment.
     */
    multiAz: boolean | ros.IResolvable | undefined;
    /**
     * @Property port: The port of the database service.
     */
    port: number | ros.IResolvable | undefined;
    /**
     * @Property preferredBackupPeriod: The backup period. Separate multiple values with commas (,). The default value is the original value. Valid values:Monday Tuesday Wednesday Thursday Friday Saturday Sunday Note When the BackupPolicyMode parameter is set to DataBackupPolicy, this parameter is required.
     */
    preferredBackupPeriod: Array<string | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property preferredBackupTime: The time when the backup task is performed. Format: yyyy-MM-ddZ-HH:mm:ssZ.Note When the BackupPolicyMode parameter is set to DataBackupPolicy, this parameter is required.
     */
    preferredBackupTime: string | ros.IResolvable | undefined;
    /**
     * @Property privateIpAddress: The private ip for created instance.
     */
    privateIpAddress: string | ros.IResolvable | undefined;
    /**
     * @Property quantity: The number of instance to be created, default is 1, max number is 99
     */
    quantity: number | ros.IResolvable | undefined;
    /**
     * @Property releasedKeepPolicy: The policy used to retain archived backups if the instance is released. Default value: None.
     *  Valid values:
     * Lastest: Only the last archived backup is retained.
     *  All: All of the archived backups are retained.
     */
    releasedKeepPolicy: string | ros.IResolvable | undefined;
    /**
     * @Property resourceGroupId: Resource group id.
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property roleArn: The Alibaba Cloud Resource Name (ARN) provided to the service account of the instance by your Alibaba Cloud account to connect to KMS. You can copy the ARN from the RAM console.
     */
    roleArn: string | ros.IResolvable | undefined;
    /**
     * @Property securityGroupId: The ID of the ECS security groups.
     * Each RDS instance can be associated with up to three ECS security groups.
     * You must separate them with commas (,).
     * To delete an ECS Security group, leave this parameter empty.
     *
     */
    securityGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property serverlessConfig: The config of RDS serverless instance. This is required when creating serverless instance.
     */
    serverlessConfig: RosPrepayDBInstance.ServerlessConfigProperty | ros.IResolvable | undefined;
    /**
     * @Property slaveZoneIds: List of slave zone ids can specify slave zone ids when creating the high-availability or enterprise edition instance. Meanwhile, VSwitchId needs to pass in the corresponding vswitch id to the slave zone by order. For example, ZoneId = "zone-a" and SlaveZoneIds = ["zone-c", "zone-b"], then the VSwitchId must be "vsw-zone-a,vsw-zone-c,vsw-zone-b".
     */
    slaveZoneIds: Array<string | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property sqlCollectorStatus: Specifies whether to enable or disable the SQL Explorer (SQL audit) feature.
     * Valid values:Enable | Disabled.
     */
    sqlCollectorStatus: string | ros.IResolvable | undefined;
    /**
     * @Property sslSetting: Secure Sockets Layer (SSL) link setting of the instance. Valid values:
     * Disabled: Disable SSL
     * EnabledForPublicConnection: Public connection address will be protected by the SSL certificate. It requires AllocatePublicConnection is true.
     * EnabledForInnerConnection: Private connection address will be protected by the SSL certificate.
     * Default value is Disabled.
     */
    sslSetting: string | ros.IResolvable | undefined;
    /**
     * @Property storageAutoScale: Storage space automatic expansion switch, only supported by MySQL and PostgreSQL
     */
    storageAutoScale: string | ros.IResolvable | undefined;
    /**
     * @Property storageThreshold: Storage space automatic expansion trigger threshold (percentage)
     */
    storageThreshold: number | ros.IResolvable | undefined;
    /**
     * @Property storageUpperBound: The total storage space upper limit for automatic storage space expansion, that is, automatic expansion will not cause the total storage space of the instance to exceed this value.
     */
    storageUpperBound: number | ros.IResolvable | undefined;
    /**
     * @Property tags: The tags of an instance.
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
    tags: {
        [key: string]: (any);
    } | undefined;
    /**
     * @Property targetDedicatedHostIdForLog: The ID of the host to which the instance belongs if you create a log instance in a host group.
     */
    targetDedicatedHostIdForLog: string | ros.IResolvable | undefined;
    /**
     * @Property targetDedicatedHostIdForMaster: The ID of the host to which the instance belongs if you create a primary instance in a host group.
     */
    targetDedicatedHostIdForMaster: string | ros.IResolvable | undefined;
    /**
     * @Property targetDedicatedHostIdForSlave: The ID of the host to which the instance belongs if you create a secondary instance in a host group.
     */
    targetDedicatedHostIdForSlave: string | ros.IResolvable | undefined;
    /**
     * @Property vpcId: The VPC id of created database instance. For VPC network, the property is required.
     */
    vpcId: string | ros.IResolvable | undefined;
    /**
     * @Property vSwitchId: The vSwitch id of created instance. For VPC network, the property is required.
     */
    vSwitchId: string | ros.IResolvable | undefined;
    /**
     * @Property zoneId: selected zone to create database instance. You cannot set the ZoneId parameter if the MultiAZ parameter is set to true.
     */
    zoneId: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosPrepayDBInstanceProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosPrepayDBInstance {
    /**
     * @stability external
     */
    interface DBMappingsProperty {
        /**
         * @Property characterSetName: For supported engines, specifies the character set to associate with the database instance.
         */
        readonly characterSetName: string | ros.IResolvable;
        /**
         * @Property dbDescription: Specifies the database description, containing up to 256 characters.
         */
        readonly dbDescription?: string | ros.IResolvable;
        /**
         * @Property dbName: Consists of [2, 64] lower case letters, numbers, underscores, lines, letters. Must start with a letter, end with letters or numbers
         */
        readonly dbName: string | ros.IResolvable;
    }
}
export declare namespace RosPrepayDBInstance {
    /**
     * @stability external
     */
    interface ServerlessConfigProperty {
        /**
         * @Property switchForce: Whether to enable mandatory elastic scaling of serverless instances. Value:
     * true: enabled.
     * false: not enabled (default).
         */
        readonly switchForce?: boolean | ros.IResolvable;
        /**
         * @Property minCapacity: The minimum value of the automatic scaling range of an instance RCU (RDS Capacity Unit). Value: 0.5-8.
         */
        readonly minCapacity: number | ros.IResolvable;
        /**
         * @Property autoPause: Whether to enable intelligent pause and start of serverless instances. Value:
     * true: enabled.
     * false: not enabled (default).
         */
        readonly autoPause?: boolean | ros.IResolvable;
        /**
         * @Property maxCapacity: The maximum value of the automatic scaling range of an instance RCU (RDS Capacity Unit). Value: 0.5-8.
         */
        readonly maxCapacity: number | ros.IResolvable;
    }
}
/**
 * Properties for defining a `RosReadOnlyDBInstance`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-rds-readonlydbinstance
 */
export interface RosReadOnlyDBInstanceProps {
    /**
     * @Property dbInstanceClass: The type of the instance. For more information, see Instance type list. The type of the read-only instance must be no less than that of the master instance. Otherwise, the read-only instance incurs high latency and high load.
     */
    readonly dbInstanceClass: string | ros.IResolvable;
    /**
     * @Property dbInstanceId: The ID of the master instance.
     */
    readonly dbInstanceId: string | ros.IResolvable;
    /**
     * @Property dbInstanceStorage: The storage space of the instance. Value range: 5 to 3000. The value must be a multiple of 5. Unit: GB.
     */
    readonly dbInstanceStorage: number | ros.IResolvable;
    /**
     * @Property engineVersion: The version of the database. The database and the master instance must have the same database version. Valid values: 5.6, 5.7, 8.0, 2017_ent, 2019_ent
     */
    readonly engineVersion: string | ros.IResolvable;
    /**
     * @Property zoneId: The ID of the zone. You can call the DescribeRegions API operation to view the latest zones.
     */
    readonly zoneId: string | ros.IResolvable;
    /**
     * @Property autoRenew: Specifies whether to enable auto-renewal. Valid values: true and false. Note
     * :Monthly subscription: The auto-renewal cycle is one month.
     * Annual subscription: The auto-renewal cycle is one year.
     */
    readonly autoRenew?: boolean | ros.IResolvable;
    /**
     * @Property category: The RDS edition of the read-only instance. Valid values:
     * Basic: Basic Edition.
     * HighAvailability: High-availability Edition. This is the default value.
     * AlwaysOn: Cluster Edition.
     * Finance: Enterprise Edition. This edition is available only on the China site (aliyun.com).
     */
    readonly category?: string | ros.IResolvable;
    /**
     * @Property dbInstanceDescription: Description of created database instance.
     */
    readonly dbInstanceDescription?: string | ros.IResolvable;
    /**
     * @Property dbInstanceStorageType: The type of storage media that is used by the instance. Valid values:
     * local_ssd: local SSDs
     * cloud_ssd: standard SSDs
     * cloud_essd: ESSDs of performance level 1 (PL1)
     * cloud_essd2: ESSDs of PL2
     * cloud_essd3: ESSDs of PL3
     */
    readonly dbInstanceStorageType?: string | ros.IResolvable;
    /**
     * @Property dedicatedHostGroupId: The ID of the dedicated cluster to which the read-only instance belongs. This parameter is valid when you create the read-only instance in a dedicated cluster.
     */
    readonly dedicatedHostGroupId?: string | ros.IResolvable;
    /**
     * @Property deletionProtection: Specifies whether to enable the release protection feature for the read-only instance. Valid values:- **true**: enables the feature.- **false** (default): disables the feature.
     */
    readonly deletionProtection?: boolean | ros.IResolvable;
    /**
     * @Property payType: The billing method.
     */
    readonly payType?: string | ros.IResolvable;
    /**
     * @Property period: The subscription duration. Valid values:
     * When PeriodType is Month, it could be from 1 to 12, 24, 36, 48, 60.
     *  When PeriodType is Year, it could be from 1 to 5.
     */
    readonly period?: number | ros.IResolvable;
    /**
     * @Property periodType: Charge period for created instances.
     */
    readonly periodType?: string | ros.IResolvable;
    /**
     * @Property privateIpAddress: The private IP address of the read-only instance. It must be within the IP address range provided by the switch. The system automatically assigns an IP address based on the VPCId and VSwitchId by default.
     */
    readonly privateIpAddress?: string | ros.IResolvable;
    /**
     * @Property resourceGroupId: Resource group id.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * @Property tags: The tags of an instance.
     * You should input the information of the tag with the format of the Key-Value, such as {"key1":"value1","key2":"value2", ... "key5":"value5"}.
     * At most 5 tags can be specified.
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
    readonly tags?: {
        [key: string]: (any);
    };
    /**
     * @Property targetDedicatedHostIdForMaster: The ID of the host on which the primary instance resides. This parameter is valid when you create the read-only instance in a dedicated cluster.
     */
    readonly targetDedicatedHostIdForMaster?: string | ros.IResolvable;
    /**
     * @Property vpcId: The ID of the VPC.
     */
    readonly vpcId?: string | ros.IResolvable;
    /**
     * @Property vSwitchId: The ID of the VSwitch.
     */
    readonly vSwitchId?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::RDS::ReadOnlyDBInstance`.
 * @Note This class does not contain additional functions, so it is recommended to use the `ReadOnlyDBInstance` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-rds-readonlydbinstance
 */
export declare class RosReadOnlyDBInstance extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::RDS::ReadOnlyDBInstance";
    /**
     * @Attribute ConnectionString: DB instance connection url by Intranet.
     */
    readonly attrConnectionString: ros.IResolvable;
    /**
     * @Attribute DBInstanceId: The instance id of created database instance.
     */
    readonly attrDbInstanceId: ros.IResolvable;
    /**
     * @Attribute Port: Intranet port of created DB instance.
     */
    readonly attrPort: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property dbInstanceClass: The type of the instance. For more information, see Instance type list. The type of the read-only instance must be no less than that of the master instance. Otherwise, the read-only instance incurs high latency and high load.
     */
    dbInstanceClass: string | ros.IResolvable;
    /**
     * @Property dbInstanceId: The ID of the master instance.
     */
    dbInstanceId: string | ros.IResolvable;
    /**
     * @Property dbInstanceStorage: The storage space of the instance. Value range: 5 to 3000. The value must be a multiple of 5. Unit: GB.
     */
    dbInstanceStorage: number | ros.IResolvable;
    /**
     * @Property engineVersion: The version of the database. The database and the master instance must have the same database version. Valid values: 5.6, 5.7, 8.0, 2017_ent, 2019_ent
     */
    engineVersion: string | ros.IResolvable;
    /**
     * @Property zoneId: The ID of the zone. You can call the DescribeRegions API operation to view the latest zones.
     */
    zoneId: string | ros.IResolvable;
    /**
     * @Property autoRenew: Specifies whether to enable auto-renewal. Valid values: true and false. Note
     * :Monthly subscription: The auto-renewal cycle is one month.
     * Annual subscription: The auto-renewal cycle is one year.
     */
    autoRenew: boolean | ros.IResolvable | undefined;
    /**
     * @Property category: The RDS edition of the read-only instance. Valid values:
     * Basic: Basic Edition.
     * HighAvailability: High-availability Edition. This is the default value.
     * AlwaysOn: Cluster Edition.
     * Finance: Enterprise Edition. This edition is available only on the China site (aliyun.com).
     */
    category: string | ros.IResolvable | undefined;
    /**
     * @Property dbInstanceDescription: Description of created database instance.
     */
    dbInstanceDescription: string | ros.IResolvable | undefined;
    /**
     * @Property dbInstanceStorageType: The type of storage media that is used by the instance. Valid values:
     * local_ssd: local SSDs
     * cloud_ssd: standard SSDs
     * cloud_essd: ESSDs of performance level 1 (PL1)
     * cloud_essd2: ESSDs of PL2
     * cloud_essd3: ESSDs of PL3
     */
    dbInstanceStorageType: string | ros.IResolvable | undefined;
    /**
     * @Property dedicatedHostGroupId: The ID of the dedicated cluster to which the read-only instance belongs. This parameter is valid when you create the read-only instance in a dedicated cluster.
     */
    dedicatedHostGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property deletionProtection: Specifies whether to enable the release protection feature for the read-only instance. Valid values:- **true**: enables the feature.- **false** (default): disables the feature.
     */
    deletionProtection: boolean | ros.IResolvable | undefined;
    /**
     * @Property payType: The billing method.
     */
    payType: string | ros.IResolvable | undefined;
    /**
     * @Property period: The subscription duration. Valid values:
     * When PeriodType is Month, it could be from 1 to 12, 24, 36, 48, 60.
     *  When PeriodType is Year, it could be from 1 to 5.
     */
    period: number | ros.IResolvable | undefined;
    /**
     * @Property periodType: Charge period for created instances.
     */
    periodType: string | ros.IResolvable | undefined;
    /**
     * @Property privateIpAddress: The private IP address of the read-only instance. It must be within the IP address range provided by the switch. The system automatically assigns an IP address based on the VPCId and VSwitchId by default.
     */
    privateIpAddress: string | ros.IResolvable | undefined;
    /**
     * @Property resourceGroupId: Resource group id.
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property tags: The tags of an instance.
     * You should input the information of the tag with the format of the Key-Value, such as {"key1":"value1","key2":"value2", ... "key5":"value5"}.
     * At most 5 tags can be specified.
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
    tags: {
        [key: string]: (any);
    } | undefined;
    /**
     * @Property targetDedicatedHostIdForMaster: The ID of the host on which the primary instance resides. This parameter is valid when you create the read-only instance in a dedicated cluster.
     */
    targetDedicatedHostIdForMaster: string | ros.IResolvable | undefined;
    /**
     * @Property vpcId: The ID of the VPC.
     */
    vpcId: string | ros.IResolvable | undefined;
    /**
     * @Property vSwitchId: The ID of the VSwitch.
     */
    vSwitchId: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosReadOnlyDBInstanceProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
