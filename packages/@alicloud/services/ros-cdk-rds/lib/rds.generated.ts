// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `ALIYUN::RDS::ADInfo`
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
 * Determine whether the given properties match those of a `RosADInfoProps`
 *
 * @param properties - the TypeScript properties of a `RosADInfoProps`
 *
 * @returns the result of the validation.
 */
function RosADInfoPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('adServerIpAddress', ros.requiredValidator)(properties.adServerIpAddress));
    errors.collect(ros.propertyValidator('adServerIpAddress', ros.validateString)(properties.adServerIpAddress));
    errors.collect(ros.propertyValidator('addns', ros.requiredValidator)(properties.addns));
    errors.collect(ros.propertyValidator('addns', ros.validateString)(properties.addns));
    errors.collect(ros.propertyValidator('dbInstanceId', ros.requiredValidator)(properties.dbInstanceId));
    errors.collect(ros.propertyValidator('dbInstanceId', ros.validateString)(properties.dbInstanceId));
    errors.collect(ros.propertyValidator('adPassword', ros.requiredValidator)(properties.adPassword));
    errors.collect(ros.propertyValidator('adPassword', ros.validateString)(properties.adPassword));
    errors.collect(ros.propertyValidator('adAccountName', ros.requiredValidator)(properties.adAccountName));
    errors.collect(ros.propertyValidator('adAccountName', ros.validateString)(properties.adAccountName));
    return errors.wrap('supplied properties not correct for "RosADInfoProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::RDS::ADInfo` resource
 *
 * @param properties - the TypeScript properties of a `RosADInfoProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::RDS::ADInfo` resource.
 */
// @ts-ignore TS6133
function rosADInfoPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosADInfoPropsValidator(properties).assertSuccess();
    }
    return {
      ADAccountName: ros.stringToRosTemplate(properties.adAccountName),
      ADDNS: ros.stringToRosTemplate(properties.addns),
      ADPassword: ros.stringToRosTemplate(properties.adPassword),
      ADServerIpAddress: ros.stringToRosTemplate(properties.adServerIpAddress),
      DBInstanceId: ros.stringToRosTemplate(properties.dbInstanceId),
    };
}

/**
 * A ROS template type:  `ALIYUN::RDS::ADInfo`
 */
export class RosADInfo extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::RDS::ADInfo";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute ADDNS: Active directory domain name.
     */
    public readonly attrAddns: ros.IResolvable;

    /**
     * @Attribute DBInstanceId: The ID of the instance.
     */
    public readonly attrDbInstanceId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property adAccountName: Domain account name.
     */
    public adAccountName: string | ros.IResolvable;

    /**
     * @Property addns: Active directory domain name.
     */
    public addns: string | ros.IResolvable;

    /**
     * @Property adPassword: Domain password.
     */
    public adPassword: string | ros.IResolvable;

    /**
     * @Property adServerIpAddress: The IP address of the AD server, it must be in the same VPC as the RDS.
     */
    public adServerIpAddress: string | ros.IResolvable;

    /**
     * @Property dbInstanceId: The ID of the instance.
     */
    public dbInstanceId: string | ros.IResolvable;

    /**
     * Create a new `ALIYUN::RDS::ADInfo`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosADInfoProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosADInfo.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAddns = this.getAtt('ADDNS');
        this.attrDbInstanceId = this.getAtt('DBInstanceId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.adAccountName = props.adAccountName;
        this.addns = props.addns;
        this.adPassword = props.adPassword;
        this.adServerIpAddress = props.adServerIpAddress;
        this.dbInstanceId = props.dbInstanceId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            adAccountName: this.adAccountName,
            addns: this.addns,
            adPassword: this.adPassword,
            adServerIpAddress: this.adServerIpAddress,
            dbInstanceId: this.dbInstanceId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosADInfoPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `ALIYUN::RDS::Account`
 */
export interface RosAccountProps {

    /**
     * @Property accountName: Account name, which must be unique and meet the following requirements:
     * Start with a letter;
     * Consist of lower-case letters, digits, and underscores (_);
     * Contain no more than 16 characters.
     * For other invalid characters, see Forbidden keywords table.
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
     * It cannot begin with http:// or https://.
     * It must start with a Chinese character or English letter.
     * It can include Chinese and English characters/letters, underscores (_), hyphens (-), and digits.
     * The length may be 2-256 characters.
     */
    readonly accountDescription?: string | ros.IResolvable;

    /**
     * @Property accountType: Privilege type of account.
     * Normal: Common privilege.
     * Super: High privilege. And the default value is Normal.
     * This parameter is valid for MySQL 5.5/5.6 only.
     * MySQL 5.7, SQL Server 2012/2016, PostgreSQL, and PPAS each can have only one initial account. Other accounts are created by the initial account that has logged on to the database.
     */
    readonly accountType?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosAccountProps`
 *
 * @param properties - the TypeScript properties of a `RosAccountProps`
 *
 * @returns the result of the validation.
 */
function RosAccountPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('accountDescription', ros.validateString)(properties.accountDescription));
    errors.collect(ros.propertyValidator('dbInstanceId', ros.requiredValidator)(properties.dbInstanceId));
    errors.collect(ros.propertyValidator('dbInstanceId', ros.validateString)(properties.dbInstanceId));
    if(properties.accountType && (typeof properties.accountType) !== 'object') {
        errors.collect(ros.propertyValidator('accountType', ros.validateAllowedValues)({
          data: properties.accountType,
          allowedValues: ["Normal","Super"],
        }));
    }
    errors.collect(ros.propertyValidator('accountType', ros.validateString)(properties.accountType));
    errors.collect(ros.propertyValidator('accountPassword', ros.requiredValidator)(properties.accountPassword));
    if(properties.accountPassword && (Array.isArray(properties.accountPassword) || (typeof properties.accountPassword) === 'string')) {
        errors.collect(ros.propertyValidator('accountPassword', ros.validateLength)({
            data: properties.accountPassword.length,
            min: 8,
            max: 32,
          }));
    }
    errors.collect(ros.propertyValidator('accountPassword', ros.validateString)(properties.accountPassword));
    errors.collect(ros.propertyValidator('accountName', ros.requiredValidator)(properties.accountName));
    errors.collect(ros.propertyValidator('accountName', ros.validateString)(properties.accountName));
    return errors.wrap('supplied properties not correct for "RosAccountProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::RDS::Account` resource
 *
 * @param properties - the TypeScript properties of a `RosAccountProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::RDS::Account` resource.
 */
// @ts-ignore TS6133
function rosAccountPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosAccountPropsValidator(properties).assertSuccess();
    }
    return {
      AccountName: ros.stringToRosTemplate(properties.accountName),
      AccountPassword: ros.stringToRosTemplate(properties.accountPassword),
      DBInstanceId: ros.stringToRosTemplate(properties.dbInstanceId),
      AccountDescription: ros.stringToRosTemplate(properties.accountDescription),
      AccountType: ros.stringToRosTemplate(properties.accountType),
    };
}

/**
 * A ROS template type:  `ALIYUN::RDS::Account`
 */
export class RosAccount extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::RDS::Account";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute AccountName: Account name
     */
    public readonly attrAccountName: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property accountName: Account name, which must be unique and meet the following requirements:
     * Start with a letter;
     * Consist of lower-case letters, digits, and underscores (_);
     * Contain no more than 16 characters.
     * For other invalid characters, see Forbidden keywords table.
     */
    public accountName: string | ros.IResolvable;

    /**
     * @Property accountPassword: The account password for the database instance. It may consist of letters, digits, or underlines, with a length of 8 to 32 characters.
     */
    public accountPassword: string | ros.IResolvable;

    /**
     * @Property dbInstanceId: RDS instance ID.
     */
    public dbInstanceId: string | ros.IResolvable;

    /**
     * @Property accountDescription: Account remarks.
     * It cannot begin with http:// or https://.
     * It must start with a Chinese character or English letter.
     * It can include Chinese and English characters/letters, underscores (_), hyphens (-), and digits.
     * The length may be 2-256 characters.
     */
    public accountDescription: string | ros.IResolvable | undefined;

    /**
     * @Property accountType: Privilege type of account.
     * Normal: Common privilege.
     * Super: High privilege. And the default value is Normal.
     * This parameter is valid for MySQL 5.5/5.6 only.
     * MySQL 5.7, SQL Server 2012/2016, PostgreSQL, and PPAS each can have only one initial account. Other accounts are created by the initial account that has logged on to the database.
     */
    public accountType: string | ros.IResolvable | undefined;

    /**
     * Create a new `ALIYUN::RDS::Account`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosAccountProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosAccount.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAccountName = this.getAtt('AccountName');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.accountName = props.accountName;
        this.accountPassword = props.accountPassword;
        this.dbInstanceId = props.dbInstanceId;
        this.accountDescription = props.accountDescription;
        this.accountType = props.accountType;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            accountName: this.accountName,
            accountPassword: this.accountPassword,
            dbInstanceId: this.dbInstanceId,
            accountDescription: this.accountDescription,
            accountType: this.accountType,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosAccountPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `ALIYUN::RDS::AccountPrivilege`
 */
export interface RosAccountPrivilegeProps {

    /**
     * @Property accountName: RDS account name.
     */
    readonly accountName: string | ros.IResolvable;

    /**
     * @Property accountPrivilege: RDS account privilege
     */
    readonly accountPrivilege: string | ros.IResolvable;

    /**
     * @Property dbInstanceId: RDS instance ID.
     */
    readonly dbInstanceId: string | ros.IResolvable;

    /**
     * @Property dbName: RDS database name
     */
    readonly dbName: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosAccountPrivilegeProps`
 *
 * @param properties - the TypeScript properties of a `RosAccountPrivilegeProps`
 *
 * @returns the result of the validation.
 */
function RosAccountPrivilegePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('accountPrivilege', ros.requiredValidator)(properties.accountPrivilege));
    if(properties.accountPrivilege && (typeof properties.accountPrivilege) !== 'object') {
        errors.collect(ros.propertyValidator('accountPrivilege', ros.validateAllowedValues)({
          data: properties.accountPrivilege,
          allowedValues: ["ReadOnly","ReadWrite","DDLOnly","DMLOnly","DBOwner"],
        }));
    }
    errors.collect(ros.propertyValidator('accountPrivilege', ros.validateString)(properties.accountPrivilege));
    errors.collect(ros.propertyValidator('dbInstanceId', ros.requiredValidator)(properties.dbInstanceId));
    errors.collect(ros.propertyValidator('dbInstanceId', ros.validateString)(properties.dbInstanceId));
    errors.collect(ros.propertyValidator('dbName', ros.requiredValidator)(properties.dbName));
    errors.collect(ros.propertyValidator('dbName', ros.validateString)(properties.dbName));
    errors.collect(ros.propertyValidator('accountName', ros.requiredValidator)(properties.accountName));
    errors.collect(ros.propertyValidator('accountName', ros.validateString)(properties.accountName));
    return errors.wrap('supplied properties not correct for "RosAccountPrivilegeProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::RDS::AccountPrivilege` resource
 *
 * @param properties - the TypeScript properties of a `RosAccountPrivilegeProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::RDS::AccountPrivilege` resource.
 */
// @ts-ignore TS6133
function rosAccountPrivilegePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosAccountPrivilegePropsValidator(properties).assertSuccess();
    }
    return {
      AccountName: ros.stringToRosTemplate(properties.accountName),
      AccountPrivilege: ros.stringToRosTemplate(properties.accountPrivilege),
      DBInstanceId: ros.stringToRosTemplate(properties.dbInstanceId),
      DBName: ros.stringToRosTemplate(properties.dbName),
    };
}

/**
 * A ROS template type:  `ALIYUN::RDS::AccountPrivilege`
 */
export class RosAccountPrivilege extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::RDS::AccountPrivilege";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property accountName: RDS account name.
     */
    public accountName: string | ros.IResolvable;

    /**
     * @Property accountPrivilege: RDS account privilege
     */
    public accountPrivilege: string | ros.IResolvable;

    /**
     * @Property dbInstanceId: RDS instance ID.
     */
    public dbInstanceId: string | ros.IResolvable;

    /**
     * @Property dbName: RDS database name
     */
    public dbName: string | ros.IResolvable;

    /**
     * Create a new `ALIYUN::RDS::AccountPrivilege`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosAccountPrivilegeProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosAccountPrivilege.ROS_RESOURCE_TYPE_NAME, properties: props });

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.accountName = props.accountName;
        this.accountPrivilege = props.accountPrivilege;
        this.dbInstanceId = props.dbInstanceId;
        this.dbName = props.dbName;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            accountName: this.accountName,
            accountPrivilege: this.accountPrivilege,
            dbInstanceId: this.dbInstanceId,
            dbName: this.dbName,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosAccountPrivilegePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `ALIYUN::RDS::DBInstance`
 */
export interface RosDBInstanceProps {

    /**
     * @Property dbInstanceClass: Database instance type. Refer the RDS database instance type reference, such as 'rds.mys2.large', 'rds.mss1.large', 'rds.pg.s1.small' etc
     */
    readonly dbInstanceClass: string | ros.IResolvable;

    /**
     * @Property dbInstanceStorage: Database instance storage size. mysql is [5,1000]. sql server 2008r2 is [10,1000], sql server 2012/2012_web/2016-web is [20,1000]. PostgreSQL and PPAS is [5,2000]. Increased every 5 GB, Unit in GB
     */
    readonly dbInstanceStorage: number | ros.IResolvable;

    /**
     * @Property engine: Database instance engine type. Support MySQL/SQLServer/PostgreSQL/PPAS/MariaDB now.
     */
    readonly engine: string | ros.IResolvable;

    /**
     * @Property engineVersion: Database instance version of the relative engine type.Support MySQL: 5.5/5.6/5.7/8.0;
     * SQLServer: 2008r2/2012/2012_ent_ha/2012_std_ha/2012_web/2016_ent_ha/2016_std_ha/2016_web/2017_std_ha/2017_ent;
     * PostgreSQL: 9.4/10.0/11.0/12.0;
     * PPAS: 9.3/10.0;
     * MariaDB: 10.3.
     */
    readonly engineVersion: string | ros.IResolvable;

    /**
     * @Property securityIpList: Security ip to access the database instance, combine with comma, 0.0.0.0/0 means no limitation.
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
     * @Property category: The edition of the instance. Valid values:
     * Basic: specifies to use the Basic Edition.
     * HighAvailability: specifies to use the High-availability Edition.
     * AlwaysOn: specifies to use the Cluster Edition.
     * Finance: specifies to use the Enterprise Edition.
     */
    readonly category?: string | ros.IResolvable;

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
    readonly preferredBackupPeriod?: Array<any | ros.IResolvable> | ros.IResolvable;

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
     * @Property tags: The tags of an instance.
     * You should input the information of the tag with the format of the Key-Value, such as {"key1":"value1","key2":"value2", ... "key5":"value5"}.
     * At most 5 tags can be specified.
     * Key
     * It can be up to 64 characters in length.
     * Cannot begin with aliyun.
     * Cannot begin with http:// or https://.
     * Cannot be a null string.
     * Value
     * It can be up to 128 characters in length.
     * Cannot begin with aliyun.
     * Cannot begin with http:// or https://.
     * Can be a null string.
     */
    readonly tags?: { [key: string]: (any) };

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
 * Determine whether the given properties match those of a `RosDBInstanceProps`
 *
 * @param properties - the TypeScript properties of a `RosDBInstanceProps`
 *
 * @returns the result of the validation.
 */
function RosDBInstancePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.periodType && (typeof properties.periodType) !== 'object') {
        errors.collect(ros.propertyValidator('periodType', ros.validateAllowedValues)({
          data: properties.periodType,
          allowedValues: ["Month","Year"],
        }));
    }
    errors.collect(ros.propertyValidator('periodType', ros.validateString)(properties.periodType));
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    if(properties.archiveBackupRetentionPeriod && (typeof properties.archiveBackupRetentionPeriod) !== 'object') {
        errors.collect(ros.propertyValidator('archiveBackupRetentionPeriod', ros.validateRange)({
            data: properties.archiveBackupRetentionPeriod,
            min: 30,
            max: 1095,
          }));
    }
    errors.collect(ros.propertyValidator('archiveBackupRetentionPeriod', ros.validateNumber)(properties.archiveBackupRetentionPeriod));
    errors.collect(ros.propertyValidator('dbTimeZone', ros.validateString)(properties.dbTimeZone));
    if(properties.port && (typeof properties.port) !== 'object') {
        errors.collect(ros.propertyValidator('port', ros.validateRange)({
            data: properties.port,
            min: 1,
            max: 65535,
          }));
    }
    errors.collect(ros.propertyValidator('port', ros.validateNumber)(properties.port));
    if(properties.archiveBackupKeepCount && (typeof properties.archiveBackupKeepCount) !== 'object') {
        errors.collect(ros.propertyValidator('archiveBackupKeepCount', ros.validateRange)({
            data: properties.archiveBackupKeepCount,
            min: 1,
            max: 31,
          }));
    }
    errors.collect(ros.propertyValidator('archiveBackupKeepCount', ros.validateNumber)(properties.archiveBackupKeepCount));
    if(properties.logBackupRetentionPeriod && (typeof properties.logBackupRetentionPeriod) !== 'object') {
        errors.collect(ros.propertyValidator('logBackupRetentionPeriod', ros.validateRange)({
            data: properties.logBackupRetentionPeriod,
            min: 7,
            max: 730,
          }));
    }
    errors.collect(ros.propertyValidator('logBackupRetentionPeriod', ros.validateNumber)(properties.logBackupRetentionPeriod));
    errors.collect(ros.propertyValidator('dbInstanceStorage', ros.requiredValidator)(properties.dbInstanceStorage));
    errors.collect(ros.propertyValidator('dbInstanceStorage', ros.validateNumber)(properties.dbInstanceStorage));
    errors.collect(ros.propertyValidator('dbMappings', ros.listValidator(RosDBInstance_DBMappingsPropertyValidator))(properties.dbMappings));
    if(properties.connectionStringPrefix && (typeof properties.connectionStringPrefix) !== 'object') {
        errors.collect(ros.propertyValidator('connectionStringPrefix', ros.validateAllowedPattern)({
          data: properties.connectionStringPrefix,
          reg: /[a-zA-Z0-9-]{8,64}/
        }));
    }
    errors.collect(ros.propertyValidator('connectionStringPrefix', ros.validateString)(properties.connectionStringPrefix));
    errors.collect(ros.propertyValidator('multiAz', ros.validateBoolean)(properties.multiAz));
    errors.collect(ros.propertyValidator('engine', ros.requiredValidator)(properties.engine));
    if(properties.engine && (typeof properties.engine) !== 'object') {
        errors.collect(ros.propertyValidator('engine', ros.validateAllowedValues)({
          data: properties.engine,
          allowedValues: ["MySQL","SQLServer","PostgreSQL","PPAS","MariaDB"],
        }));
    }
    errors.collect(ros.propertyValidator('engine', ros.validateString)(properties.engine));
    errors.collect(ros.propertyValidator('tags', ros.hashValidator(ros.validateAny))(properties.tags));
    errors.collect(ros.propertyValidator('dbInstanceDescription', ros.validateString)(properties.dbInstanceDescription));
    errors.collect(ros.propertyValidator('targetDedicatedHostIdForMaster', ros.validateString)(properties.targetDedicatedHostIdForMaster));
    errors.collect(ros.propertyValidator('engineVersion', ros.requiredValidator)(properties.engineVersion));
    errors.collect(ros.propertyValidator('engineVersion', ros.validateString)(properties.engineVersion));
    errors.collect(ros.propertyValidator('dbInstanceClass', ros.requiredValidator)(properties.dbInstanceClass));
    errors.collect(ros.propertyValidator('dbInstanceClass', ros.validateString)(properties.dbInstanceClass));
    if(properties.archiveBackupKeepPolicy && (typeof properties.archiveBackupKeepPolicy) !== 'object') {
        errors.collect(ros.propertyValidator('archiveBackupKeepPolicy', ros.validateAllowedValues)({
          data: properties.archiveBackupKeepPolicy,
          allowedValues: ["ByMonth","ByWeek","KeepAll"],
        }));
    }
    errors.collect(ros.propertyValidator('archiveBackupKeepPolicy', ros.validateString)(properties.archiveBackupKeepPolicy));
    errors.collect(ros.propertyValidator('vSwitchId', ros.validateString)(properties.vSwitchId));
    if(properties.backupPolicyMode && (typeof properties.backupPolicyMode) !== 'object') {
        errors.collect(ros.propertyValidator('backupPolicyMode', ros.validateAllowedValues)({
          data: properties.backupPolicyMode,
          allowedValues: ["DataBackupPolicy","LogBackupPolicy"],
        }));
    }
    errors.collect(ros.propertyValidator('backupPolicyMode', ros.validateString)(properties.backupPolicyMode));
    if(properties.period && (typeof properties.period) !== 'object') {
        errors.collect(ros.propertyValidator('period', ros.validateAllowedValues)({
          data: properties.period,
          allowedValues: [1,2,3,4,5,6,7,8,9,10,11,12,24,36,48,60],
        }));
    }
    errors.collect(ros.propertyValidator('period', ros.validateNumber)(properties.period));
    if(properties.localLogRetentionHours && (typeof properties.localLogRetentionHours) !== 'object') {
        errors.collect(ros.propertyValidator('localLogRetentionHours', ros.validateRange)({
            data: properties.localLogRetentionHours,
            min: 0,
            max: 168,
          }));
    }
    errors.collect(ros.propertyValidator('localLogRetentionHours', ros.validateNumber)(properties.localLogRetentionHours));
    if(properties.payType && (typeof properties.payType) !== 'object') {
        errors.collect(ros.propertyValidator('payType', ros.validateAllowedValues)({
          data: properties.payType,
          allowedValues: ["Subscription","PrePaid","PrePay","Prepaid","PayAsYouGo","PostPaid","PayOnDemand","Postpaid"],
        }));
    }
    errors.collect(ros.propertyValidator('payType', ros.validateString)(properties.payType));
    if(properties.highSpaceUsageProtection && (typeof properties.highSpaceUsageProtection) !== 'object') {
        errors.collect(ros.propertyValidator('highSpaceUsageProtection', ros.validateAllowedValues)({
          data: properties.highSpaceUsageProtection,
          allowedValues: ["Enable","Disable"],
        }));
    }
    errors.collect(ros.propertyValidator('highSpaceUsageProtection', ros.validateString)(properties.highSpaceUsageProtection));
    errors.collect(ros.propertyValidator('roleArn', ros.validateString)(properties.roleArn));
    if(properties.masterUserPassword && (Array.isArray(properties.masterUserPassword) || (typeof properties.masterUserPassword) === 'string')) {
        errors.collect(ros.propertyValidator('masterUserPassword', ros.validateLength)({
            data: properties.masterUserPassword.length,
            min: 8,
            max: 32,
          }));
    }
    errors.collect(ros.propertyValidator('masterUserPassword', ros.validateString)(properties.masterUserPassword));
    errors.collect(ros.propertyValidator('vpcId', ros.validateString)(properties.vpcId));
    if(properties.sslSetting && (typeof properties.sslSetting) !== 'object') {
        errors.collect(ros.propertyValidator('sslSetting', ros.validateAllowedValues)({
          data: properties.sslSetting,
          allowedValues: ["Disabled","EnabledForPublicConnection","EnabledForInnerConnection"],
        }));
    }
    errors.collect(ros.propertyValidator('sslSetting', ros.validateString)(properties.sslSetting));
    errors.collect(ros.propertyValidator('masterUsername', ros.validateString)(properties.masterUsername));
    errors.collect(ros.propertyValidator('connectionMode', ros.validateString)(properties.connectionMode));
    if(properties.localLogRetentionSpace && (typeof properties.localLogRetentionSpace) !== 'object') {
        errors.collect(ros.propertyValidator('localLogRetentionSpace', ros.validateRange)({
            data: properties.localLogRetentionSpace,
            min: 0,
            max: 50,
          }));
    }
    errors.collect(ros.propertyValidator('localLogRetentionSpace', ros.validateNumber)(properties.localLogRetentionSpace));
    if(properties.category && (typeof properties.category) !== 'object') {
        errors.collect(ros.propertyValidator('category', ros.validateAllowedValues)({
          data: properties.category,
          allowedValues: ["Basic","HighAvailability","AlwaysOn","Finance"],
        }));
    }
    errors.collect(ros.propertyValidator('category', ros.validateString)(properties.category));
    errors.collect(ros.propertyValidator('privateIpAddress', ros.validateString)(properties.privateIpAddress));
    errors.collect(ros.propertyValidator('targetDedicatedHostIdForSlave', ros.validateString)(properties.targetDedicatedHostIdForSlave));
    if(properties.dbInstanceNetType && (typeof properties.dbInstanceNetType) !== 'object') {
        errors.collect(ros.propertyValidator('dbInstanceNetType', ros.validateAllowedValues)({
          data: properties.dbInstanceNetType,
          allowedValues: ["Internet","Intranet"],
        }));
    }
    errors.collect(ros.propertyValidator('dbInstanceNetType', ros.validateString)(properties.dbInstanceNetType));
    if(properties.releasedKeepPolicy && (typeof properties.releasedKeepPolicy) !== 'object') {
        errors.collect(ros.propertyValidator('releasedKeepPolicy', ros.validateAllowedValues)({
          data: properties.releasedKeepPolicy,
          allowedValues: ["Lastest","All"],
        }));
    }
    errors.collect(ros.propertyValidator('releasedKeepPolicy', ros.validateString)(properties.releasedKeepPolicy));
    errors.collect(ros.propertyValidator('dedicatedHostGroupId', ros.validateString)(properties.dedicatedHostGroupId));
    errors.collect(ros.propertyValidator('autoRenew', ros.validateBoolean)(properties.autoRenew));
    errors.collect(ros.propertyValidator('encryptionKey', ros.validateString)(properties.encryptionKey));
    errors.collect(ros.propertyValidator('preferredBackupPeriod', ros.listValidator(ros.validateAny))(properties.preferredBackupPeriod));
    if(properties.logBackupLocalRetentionNumber && (typeof properties.logBackupLocalRetentionNumber) !== 'object') {
        errors.collect(ros.propertyValidator('logBackupLocalRetentionNumber', ros.validateRange)({
            data: properties.logBackupLocalRetentionNumber,
            min: 6,
            max: 100,
          }));
    }
    errors.collect(ros.propertyValidator('logBackupLocalRetentionNumber', ros.validateNumber)(properties.logBackupLocalRetentionNumber));
    if(properties.slaveZoneIds && (Array.isArray(properties.slaveZoneIds) || (typeof properties.slaveZoneIds) === 'string')) {
        errors.collect(ros.propertyValidator('slaveZoneIds', ros.validateLength)({
            data: properties.slaveZoneIds.length,
            min: undefined,
            max: 2,
          }));
    }
    errors.collect(ros.propertyValidator('slaveZoneIds', ros.listValidator(ros.validateString))(properties.slaveZoneIds));
    errors.collect(ros.propertyValidator('securityIpList', ros.requiredValidator)(properties.securityIpList));
    errors.collect(ros.propertyValidator('securityIpList', ros.validateString)(properties.securityIpList));
    errors.collect(ros.propertyValidator('dbIsIgnoreCase', ros.validateNumber)(properties.dbIsIgnoreCase));
    errors.collect(ros.propertyValidator('maintainTime', ros.validateString)(properties.maintainTime));
    errors.collect(ros.propertyValidator('dbParamGroupId', ros.validateString)(properties.dbParamGroupId));
    errors.collect(ros.propertyValidator('zoneId', ros.validateString)(properties.zoneId));
    errors.collect(ros.propertyValidator('targetDedicatedHostIdForLog', ros.validateString)(properties.targetDedicatedHostIdForLog));
    errors.collect(ros.propertyValidator('allocatePublicConnection', ros.validateBoolean)(properties.allocatePublicConnection));
    errors.collect(ros.propertyValidator('preferredBackupTime', ros.validateString)(properties.preferredBackupTime));
    errors.collect(ros.propertyValidator('securityGroupId', ros.validateString)(properties.securityGroupId));
    errors.collect(ros.propertyValidator('dbInstanceStorageType', ros.validateString)(properties.dbInstanceStorageType));
    if(properties.backUpCategory && (typeof properties.backUpCategory) !== 'object') {
        errors.collect(ros.propertyValidator('backUpCategory', ros.validateAllowedValues)({
          data: properties.backUpCategory,
          allowedValues: ["Flash","Standard"],
        }));
    }
    errors.collect(ros.propertyValidator('backUpCategory', ros.validateString)(properties.backUpCategory));
    errors.collect(ros.propertyValidator('compressType', ros.validateNumber)(properties.compressType));
    errors.collect(ros.propertyValidator('logBackupFrequency', ros.validateString)(properties.logBackupFrequency));
    if(properties.connectionStringType && (typeof properties.connectionStringType) !== 'object') {
        errors.collect(ros.propertyValidator('connectionStringType', ros.validateAllowedValues)({
          data: properties.connectionStringType,
          allowedValues: ["Inner","Public"],
        }));
    }
    errors.collect(ros.propertyValidator('connectionStringType', ros.validateString)(properties.connectionStringType));
    if(properties.masterUserType && (typeof properties.masterUserType) !== 'object') {
        errors.collect(ros.propertyValidator('masterUserType', ros.validateAllowedValues)({
          data: properties.masterUserType,
          allowedValues: ["Normal","Super","Sysadmin"],
        }));
    }
    errors.collect(ros.propertyValidator('masterUserType', ros.validateString)(properties.masterUserType));
    errors.collect(ros.propertyValidator('enableBackupLog', ros.validateBoolean)(properties.enableBackupLog));
    if(properties.sqlCollectorStatus && (typeof properties.sqlCollectorStatus) !== 'object') {
        errors.collect(ros.propertyValidator('sqlCollectorStatus', ros.validateAllowedValues)({
          data: properties.sqlCollectorStatus,
          allowedValues: ["Enable","Disabled"],
        }));
    }
    errors.collect(ros.propertyValidator('sqlCollectorStatus', ros.validateString)(properties.sqlCollectorStatus));
    errors.collect(ros.propertyValidator('backupRetentionPeriod', ros.validateNumber)(properties.backupRetentionPeriod));
    return errors.wrap('supplied properties not correct for "RosDBInstanceProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::RDS::DBInstance` resource
 *
 * @param properties - the TypeScript properties of a `RosDBInstanceProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::RDS::DBInstance` resource.
 */
// @ts-ignore TS6133
function rosDBInstancePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosDBInstancePropsValidator(properties).assertSuccess();
    }
    return {
      DBInstanceClass: ros.stringToRosTemplate(properties.dbInstanceClass),
      DBInstanceStorage: ros.numberToRosTemplate(properties.dbInstanceStorage),
      Engine: ros.stringToRosTemplate(properties.engine),
      EngineVersion: ros.stringToRosTemplate(properties.engineVersion),
      SecurityIPList: ros.stringToRosTemplate(properties.securityIpList),
      AllocatePublicConnection: ros.booleanToRosTemplate(properties.allocatePublicConnection),
      ArchiveBackupKeepCount: ros.numberToRosTemplate(properties.archiveBackupKeepCount),
      ArchiveBackupKeepPolicy: ros.stringToRosTemplate(properties.archiveBackupKeepPolicy),
      ArchiveBackupRetentionPeriod: ros.numberToRosTemplate(properties.archiveBackupRetentionPeriod),
      AutoRenew: ros.booleanToRosTemplate(properties.autoRenew),
      BackUpCategory: ros.stringToRosTemplate(properties.backUpCategory),
      BackupPolicyMode: ros.stringToRosTemplate(properties.backupPolicyMode),
      BackupRetentionPeriod: ros.numberToRosTemplate(properties.backupRetentionPeriod),
      Category: ros.stringToRosTemplate(properties.category),
      CompressType: ros.numberToRosTemplate(properties.compressType),
      ConnectionMode: ros.stringToRosTemplate(properties.connectionMode),
      ConnectionStringPrefix: ros.stringToRosTemplate(properties.connectionStringPrefix),
      ConnectionStringType: ros.stringToRosTemplate(properties.connectionStringType),
      DBInstanceDescription: ros.stringToRosTemplate(properties.dbInstanceDescription),
      DBInstanceNetType: ros.stringToRosTemplate(properties.dbInstanceNetType),
      DBInstanceStorageType: ros.stringToRosTemplate(properties.dbInstanceStorageType),
      DBIsIgnoreCase: ros.numberToRosTemplate(properties.dbIsIgnoreCase),
      DBMappings: ros.listMapper(rosDBInstanceDBMappingsPropertyToRosTemplate)(properties.dbMappings),
      DBParamGroupId: ros.stringToRosTemplate(properties.dbParamGroupId),
      DBTimeZone: ros.stringToRosTemplate(properties.dbTimeZone),
      DedicatedHostGroupId: ros.stringToRosTemplate(properties.dedicatedHostGroupId),
      EnableBackupLog: ros.booleanToRosTemplate(properties.enableBackupLog),
      EncryptionKey: ros.stringToRosTemplate(properties.encryptionKey),
      HighSpaceUsageProtection: ros.stringToRosTemplate(properties.highSpaceUsageProtection),
      LocalLogRetentionHours: ros.numberToRosTemplate(properties.localLogRetentionHours),
      LocalLogRetentionSpace: ros.numberToRosTemplate(properties.localLogRetentionSpace),
      LogBackupFrequency: ros.stringToRosTemplate(properties.logBackupFrequency),
      LogBackupLocalRetentionNumber: ros.numberToRosTemplate(properties.logBackupLocalRetentionNumber),
      LogBackupRetentionPeriod: ros.numberToRosTemplate(properties.logBackupRetentionPeriod),
      MaintainTime: ros.stringToRosTemplate(properties.maintainTime),
      MasterUsername: ros.stringToRosTemplate(properties.masterUsername),
      MasterUserPassword: ros.stringToRosTemplate(properties.masterUserPassword),
      MasterUserType: ros.stringToRosTemplate(properties.masterUserType),
      MultiAZ: ros.booleanToRosTemplate(properties.multiAz),
      PayType: ros.stringToRosTemplate(properties.payType),
      Period: ros.numberToRosTemplate(properties.period),
      PeriodType: ros.stringToRosTemplate(properties.periodType),
      Port: ros.numberToRosTemplate(properties.port),
      PreferredBackupPeriod: ros.listMapper(ros.objectToRosTemplate)(properties.preferredBackupPeriod),
      PreferredBackupTime: ros.stringToRosTemplate(properties.preferredBackupTime),
      PrivateIpAddress: ros.stringToRosTemplate(properties.privateIpAddress),
      ReleasedKeepPolicy: ros.stringToRosTemplate(properties.releasedKeepPolicy),
      ResourceGroupId: ros.stringToRosTemplate(properties.resourceGroupId),
      RoleARN: ros.stringToRosTemplate(properties.roleArn),
      SecurityGroupId: ros.stringToRosTemplate(properties.securityGroupId),
      SlaveZoneIds: ros.listMapper(ros.stringToRosTemplate)(properties.slaveZoneIds),
      SQLCollectorStatus: ros.stringToRosTemplate(properties.sqlCollectorStatus),
      SSLSetting: ros.stringToRosTemplate(properties.sslSetting),
      Tags: ros.hashMapper(ros.objectToRosTemplate)(properties.tags),
      TargetDedicatedHostIdForLog: ros.stringToRosTemplate(properties.targetDedicatedHostIdForLog),
      TargetDedicatedHostIdForMaster: ros.stringToRosTemplate(properties.targetDedicatedHostIdForMaster),
      TargetDedicatedHostIdForSlave: ros.stringToRosTemplate(properties.targetDedicatedHostIdForSlave),
      VpcId: ros.stringToRosTemplate(properties.vpcId),
      VSwitchId: ros.stringToRosTemplate(properties.vSwitchId),
      ZoneId: ros.stringToRosTemplate(properties.zoneId),
    };
}

/**
 * A ROS template type:  `ALIYUN::RDS::DBInstance`
 */
export class RosDBInstance extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::RDS::DBInstance";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute DBInstanceId: The instance id of created database instance.
     */
    public readonly attrDbInstanceId: ros.IResolvable;

    /**
     * @Attribute InnerConnectionString: DB instance connection url by Intranet.
     */
    public readonly attrInnerConnectionString: ros.IResolvable;

    /**
     * @Attribute InnerIPAddress: IP Address for created DB instance of Intranet.
     */
    public readonly attrInnerIpAddress: ros.IResolvable;

    /**
     * @Attribute InnerPort: Intranet port of created DB instance.
     */
    public readonly attrInnerPort: ros.IResolvable;

    /**
     * @Attribute PublicConnectionString: DB instance connection url by Internet.
     */
    public readonly attrPublicConnectionString: ros.IResolvable;

    /**
     * @Attribute PublicIPAddress: IP Address for created DB instance of Internet.
     */
    public readonly attrPublicIpAddress: ros.IResolvable;

    /**
     * @Attribute PublicPort: Internet port of created DB instance.
     */
    public readonly attrPublicPort: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property dbInstanceClass: Database instance type. Refer the RDS database instance type reference, such as 'rds.mys2.large', 'rds.mss1.large', 'rds.pg.s1.small' etc
     */
    public dbInstanceClass: string | ros.IResolvable;

    /**
     * @Property dbInstanceStorage: Database instance storage size. mysql is [5,1000]. sql server 2008r2 is [10,1000], sql server 2012/2012_web/2016-web is [20,1000]. PostgreSQL and PPAS is [5,2000]. Increased every 5 GB, Unit in GB
     */
    public dbInstanceStorage: number | ros.IResolvable;

    /**
     * @Property engine: Database instance engine type. Support MySQL/SQLServer/PostgreSQL/PPAS/MariaDB now.
     */
    public engine: string | ros.IResolvable;

    /**
     * @Property engineVersion: Database instance version of the relative engine type.Support MySQL: 5.5/5.6/5.7/8.0;
     * SQLServer: 2008r2/2012/2012_ent_ha/2012_std_ha/2012_web/2016_ent_ha/2016_std_ha/2016_web/2017_std_ha/2017_ent;
     * PostgreSQL: 9.4/10.0/11.0/12.0;
     * PPAS: 9.3/10.0;
     * MariaDB: 10.3.
     */
    public engineVersion: string | ros.IResolvable;

    /**
     * @Property securityIpList: Security ip to access the database instance, combine with comma, 0.0.0.0/0 means no limitation.
     */
    public securityIpList: string | ros.IResolvable;

    /**
     * @Property allocatePublicConnection: If true, allocate public connection automate.
     */
    public allocatePublicConnection: boolean | ros.IResolvable | undefined;

    /**
     * @Property archiveBackupKeepCount: The number of archived backups that can be retained. Default value: 1. Valid values: 
     * The value of this parameter ranges from 1 to 31 when the ArchiveBackupKeepPolicy 
     *  parameter is set to ByMonth. 
     * The value of this parameter ranges from 1 to 7 when the ArchiveBackupKeepPolicy 
     *  parameter is set to ByWeek. 
     * Note You do not need to specify this parameter when the ArchiveBackupKeepPolicy 
     * parameter is set to KeepAll.
     */
    public archiveBackupKeepCount: number | ros.IResolvable | undefined;

    /**
     * @Property archiveBackupKeepPolicy: The period for which to retain archived backups. The number of archived backups that can 
     *  be retained within the specified period is determined by the ArchiveBackupKeepCount parameter. 
     *  Default value: 0. Valid values: 
     * ByMonth 
     *  ByWeek 
     *  KeepAll
     */
    public archiveBackupKeepPolicy: string | ros.IResolvable | undefined;

    /**
     * @Property archiveBackupRetentionPeriod: The number of days for which to retain archived backups. 
     *  The default value 0 specifies not to enable the backup archiving function. Valid values: 30 to 1095.
     */
    public archiveBackupRetentionPeriod: number | ros.IResolvable | undefined;

    /**
     * @Property autoRenew: Specifies whether to enable auto-renewal. Valid values: true and false. Note
     * :Monthly subscription: The auto-renewal cycle is one month.
     * Annual subscription: The auto-renewal cycle is one year.
     */
    public autoRenew: boolean | ros.IResolvable | undefined;

    /**
     * @Property backUpCategory: Specifies whether to enable the second-level backup function. This function allows a backup 
     * to be completed within seconds. Valid values: 
     * Flash: specifies to enable the second-level backup function. 
     *  Standard: specifies to disable the second-level backup function.
     */
    public backUpCategory: string | ros.IResolvable | undefined;

    /**
     * @Property backupPolicyMode: Backup type, 
     * DataBackupPolicy: data backup 
     * LogBackupPolicy: log backup
     */
    public backupPolicyMode: string | ros.IResolvable | undefined;

    /**
     * @Property backupRetentionPeriod: The retention period of the data backup. Value range: 7 to 730. The default value is the original value. Note When the BackupPolicyMode parameter is set to LogBackupPolicy, this parameter is required.
     */
    public backupRetentionPeriod: number | ros.IResolvable | undefined;

    /**
     * @Property category: The edition of the instance. Valid values:
     * Basic: specifies to use the Basic Edition.
     * HighAvailability: specifies to use the High-availability Edition.
     * AlwaysOn: specifies to use the Cluster Edition.
     * Finance: specifies to use the Enterprise Edition.
     */
    public category: string | ros.IResolvable | undefined;

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
    public compressType: number | ros.IResolvable | undefined;

    /**
     * @Property connectionMode: Connection Mode for database instance,support 'Standard' and 'Safe' mode. Default is RDS system assigns.
     */
    public connectionMode: string | ros.IResolvable | undefined;

    /**
     * @Property connectionStringPrefix: The prefix of the endpoint. 
     * Only the prefix of the CurrentConnectionString parameter value can be modified.
     * The prefix must be 8 to 64 characters in length and can contain letters, digits, and hyphens (-).
     */
    public connectionStringPrefix: string | ros.IResolvable | undefined;

    /**
     * @Property connectionStringType: The endpoint type of the instance, allow values: Inner, Public
     */
    public connectionStringType: string | ros.IResolvable | undefined;

    /**
     * @Property dbInstanceDescription: Description of created database instance.
     */
    public dbInstanceDescription: string | ros.IResolvable | undefined;

    /**
     * @Property dbInstanceNetType: Database instance net type, default is Intranet.Internet for public access, Intranet for private access.
     */
    public dbInstanceNetType: string | ros.IResolvable | undefined;

    /**
     * @Property dbInstanceStorageType: The storage type of the instance. Valid values:
     * local_ssd: specifies to use local SSDs. This is the recommended storage type.
     * cloud_ssd: specifies to use standard SSDs.
     * cloud_essd: enhanced SSD of performance level (PL)1.
     * cloud_essd2: enhanced SSD of PL2.
     * cloud_essd3: enhanced SSD of PL3.
     */
    public dbInstanceStorageType: string | ros.IResolvable | undefined;

    /**
     * @Property dbIsIgnoreCase: Specifies whether table names are case-sensitive. Valid values:
     * 1: Table names are not case-sensitive. This is the default value.
     * 0: Table names are case-sensitive.
     */
    public dbIsIgnoreCase: number | ros.IResolvable | undefined;

    /**
     * @Property dbMappings: Database mappings to attach to db instance.
     */
    public dbMappings: Array<RosDBInstance.DBMappingsProperty | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property dbParamGroupId: The ID of the parameter template used by the instance.
     */
    public dbParamGroupId: string | ros.IResolvable | undefined;

    /**
     * @Property dbTimeZone: The UTC time zone of the instance. Valid values: -12:00 to +12:00. The time zone must be an integer value such as +08:00. Values such as +08:30 are not allowed.
     */
    public dbTimeZone: string | ros.IResolvable | undefined;

    /**
     * @Property dedicatedHostGroupId: The ID of the host group to which the instance belongs if you create an instance in a host group.
     */
    public dedicatedHostGroupId: string | ros.IResolvable | undefined;

    /**
     * @Property enableBackupLog: Specifies whether to enable the log backup function. Valid values: 
     * True: specifies to enable the log backup function. 
     * False: specifies to disable the log backup function. 
     * Note You must specify this parameter when the BackupPolicyMode parameter is set to LogBackupPolicy.
     */
    public enableBackupLog: boolean | ros.IResolvable | undefined;

    /**
     * @Property encryptionKey: The ID of the encryption key that is used to encrypt data on SSDs in the region. You can view the encryption key ID in the Key Management Service (KMS) console. You can also create an encryption key.
     */
    public encryptionKey: string | ros.IResolvable | undefined;

    /**
     * @Property highSpaceUsageProtection: Specifies whether to forcibly delete log backup files when the space usage of the 
     *  instance exceeds 80% or the remaining space is less than 5 GB. Valid values: 
     *  Enable and Disable. You can retain the default value. Note You must specify 
     *  this parameter when the BackupPolicyMode parameter is set to LogBackupPolicy.
     */
    public highSpaceUsageProtection: string | ros.IResolvable | undefined;

    /**
     * @Property localLogRetentionHours: The number of hours for which to retain log backup files on the instance. 
     * Valid values: 0 to 168. The value 0 specifies not to retain log backup files on the instance. 
     * You can retain the default value. Note You must specify this parameter when the BackupPolicyMode 
     * parameter is set to LogBackupPolicy.
     */
    public localLogRetentionHours: number | ros.IResolvable | undefined;

    /**
     * @Property localLogRetentionSpace: The maximum percentage of space that is allowed to store log backup files on the instance. 
     *  If the space usage for log backup files exceeds this percentage, the system deletes earlier 
     *  log backup files until the space usage falls below this percentage. Valid values:0 to 50. 
     *  You can retain the default value. Note You must specify this parameter when the 
     *  BackupPolicyMode parameter is set to LogBackupPolicy.
     */
    public localLogRetentionSpace: number | ros.IResolvable | undefined;

    /**
     * @Property logBackupFrequency: The frequency at which to back up logs. Valid values: 
     * The value LogInterval specifies to back up logs every 30 minutes. 
     *  The default value of this parameter is the same as the data backup frequency. 
     * Note The value LogInterval is supported only when the instance runs SQL Server.
     */
    public logBackupFrequency: string | ros.IResolvable | undefined;

    /**
     * @Property logBackupLocalRetentionNumber: The number of log backup files that can be retained on the instance. 
     * Default value: 60. Valid values: 6 to 100.
     */
    public logBackupLocalRetentionNumber: number | ros.IResolvable | undefined;

    /**
     * @Property logBackupRetentionPeriod: The number of days for which to retain log backup files. Valid values: 7 to 730. The log backup 
     *  retention period cannot be longer than the data backup retention period.Note If you enable the log 
     *  backup function, you can specify the log backup retention period. This applies only when the 
     *  instance runs MySQL, PostgreSQL, or PPAS.
     */
    public logBackupRetentionPeriod: number | ros.IResolvable | undefined;

    /**
     * @Property maintainTime: The period during which the maintenance performs. The format is HH:mmZ-HH:mmZ.
     */
    public maintainTime: string | ros.IResolvable | undefined;

    /**
     * @Property masterUsername: The master user name for the database instance.
     */
    public masterUsername: string | ros.IResolvable | undefined;

    /**
     * @Property masterUserPassword: The master password for the database instance.
     */
    public masterUserPassword: string | ros.IResolvable | undefined;

    /**
     * @Property masterUserType: Privilege type of account.
     *  Normal: Common privilege. 
     *  Super: High privilege. 
     * Sysadmin: Super privileges (SA) (only supported by SQL Server)
     * The default value is Normal.
     */
    public masterUserType: string | ros.IResolvable | undefined;

    /**
     * @Property multiAz: Specifies if the database instance is a multiple Availability Zone deployment.
     */
    public multiAz: boolean | ros.IResolvable | undefined;

    /**
     * @Property payType: The charge type of created instance.
     */
    public payType: string | ros.IResolvable | undefined;

    /**
     * @Property period: The subscription duration. Valid values:
     * When PeriodType is Month, it could be from 1 to 12, 24, 36, 48, 60.
     *  When PeriodType is Year, it could be from 1 to 5.
     */
    public period: number | ros.IResolvable | undefined;

    /**
     * @Property periodType: Charge period for created instances.
     */
    public periodType: string | ros.IResolvable | undefined;

    /**
     * @Property port: The port of the database service.
     */
    public port: number | ros.IResolvable | undefined;

    /**
     * @Property preferredBackupPeriod: The backup period. Separate multiple values with commas (,). The default value is the original value. Valid values:Monday Tuesday Wednesday Thursday Friday Saturday Sunday Note When the BackupPolicyMode parameter is set to DataBackupPolicy, this parameter is required.
     */
    public preferredBackupPeriod: Array<any | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property preferredBackupTime: The time when the backup task is performed. Format: yyyy-MM-ddZ-HH:mm:ssZ.Note When the BackupPolicyMode parameter is set to DataBackupPolicy, this parameter is required.
     */
    public preferredBackupTime: string | ros.IResolvable | undefined;

    /**
     * @Property privateIpAddress: The private ip for created instance.
     */
    public privateIpAddress: string | ros.IResolvable | undefined;

    /**
     * @Property releasedKeepPolicy: The policy used to retain archived backups if the instance is released. Default value: None. 
     *  Valid values: 
     * Lastest: Only the last archived backup is retained. 
     *  All: All of the archived backups are retained.
     */
    public releasedKeepPolicy: string | ros.IResolvable | undefined;

    /**
     * @Property resourceGroupId: Resource group id.
     */
    public resourceGroupId: string | ros.IResolvable | undefined;

    /**
     * @Property roleArn: The Alibaba Cloud Resource Name (ARN) provided to the service account of the instance by your Alibaba Cloud account to connect to KMS. You can copy the ARN from the RAM console.
     */
    public roleArn: string | ros.IResolvable | undefined;

    /**
     * @Property securityGroupId: The ID of the ECS security groups. 
     * Each RDS instance can be associated with up to three ECS security groups. 
     * You must separate them with commas (,). 
     * To delete an ECS Security group, leave this parameter empty. 
     *
     */
    public securityGroupId: string | ros.IResolvable | undefined;

    /**
     * @Property slaveZoneIds: List of slave zone ids can specify slave zone ids when creating the high-availability or enterprise edition instance. Meanwhile, VSwitchId needs to pass in the corresponding vswitch id to the slave zone by order. For example, ZoneId = "zone-a" and SlaveZoneIds = ["zone-c", "zone-b"], then the VSwitchId must be "vsw-zone-a,vsw-zone-c,vsw-zone-b".
     */
    public slaveZoneIds: Array<string | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property sqlCollectorStatus: Specifies whether to enable or disable the SQL Explorer (SQL audit) feature. 
     * Valid values:Enable | Disabled.
     */
    public sqlCollectorStatus: string | ros.IResolvable | undefined;

    /**
     * @Property sslSetting: Secure Sockets Layer (SSL) link setting of the instance. Valid values:
     * Disabled: Disable SSL
     * EnabledForPublicConnection: Public connection address will be protected by the SSL certificate. It requires AllocatePublicConnection is true.
     * EnabledForInnerConnection: Private connection address will be protected by the SSL certificate.
     * Default value is Disabled.
     */
    public sslSetting: string | ros.IResolvable | undefined;

    /**
     * @Property tags: The tags of an instance.
     * You should input the information of the tag with the format of the Key-Value, such as {"key1":"value1","key2":"value2", ... "key5":"value5"}.
     * At most 5 tags can be specified.
     * Key
     * It can be up to 64 characters in length.
     * Cannot begin with aliyun.
     * Cannot begin with http:// or https://.
     * Cannot be a null string.
     * Value
     * It can be up to 128 characters in length.
     * Cannot begin with aliyun.
     * Cannot begin with http:// or https://.
     * Can be a null string.
     */
    public tags: { [key: string]: (any) } | undefined;

    /**
     * @Property targetDedicatedHostIdForLog: The ID of the host to which the instance belongs if you create a log instance in a host group.
     */
    public targetDedicatedHostIdForLog: string | ros.IResolvable | undefined;

    /**
     * @Property targetDedicatedHostIdForMaster: The ID of the host to which the instance belongs if you create a primary instance in a host group.
     */
    public targetDedicatedHostIdForMaster: string | ros.IResolvable | undefined;

    /**
     * @Property targetDedicatedHostIdForSlave: The ID of the host to which the instance belongs if you create a secondary instance in a host group.
     */
    public targetDedicatedHostIdForSlave: string | ros.IResolvable | undefined;

    /**
     * @Property vpcId: The VPC id of created database instance. For VPC network, the property is required.
     */
    public vpcId: string | ros.IResolvable | undefined;

    /**
     * @Property vSwitchId: The vSwitch id of created instance. For VPC network, the property is required.
     */
    public vSwitchId: string | ros.IResolvable | undefined;

    /**
     * @Property zoneId: selected zone to create database instance. You cannot set the ZoneId parameter if the MultiAZ parameter is set to true.
     */
    public zoneId: string | ros.IResolvable | undefined;

    /**
     * Create a new `ALIYUN::RDS::DBInstance`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDBInstanceProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosDBInstance.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrDbInstanceId = this.getAtt('DBInstanceId');
        this.attrInnerConnectionString = this.getAtt('InnerConnectionString');
        this.attrInnerIpAddress = this.getAtt('InnerIPAddress');
        this.attrInnerPort = this.getAtt('InnerPort');
        this.attrPublicConnectionString = this.getAtt('PublicConnectionString');
        this.attrPublicIpAddress = this.getAtt('PublicIPAddress');
        this.attrPublicPort = this.getAtt('PublicPort');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.dbInstanceClass = props.dbInstanceClass;
        this.dbInstanceStorage = props.dbInstanceStorage;
        this.engine = props.engine;
        this.engineVersion = props.engineVersion;
        this.securityIpList = props.securityIpList;
        this.allocatePublicConnection = props.allocatePublicConnection;
        this.archiveBackupKeepCount = props.archiveBackupKeepCount;
        this.archiveBackupKeepPolicy = props.archiveBackupKeepPolicy;
        this.archiveBackupRetentionPeriod = props.archiveBackupRetentionPeriod;
        this.autoRenew = props.autoRenew;
        this.backUpCategory = props.backUpCategory;
        this.backupPolicyMode = props.backupPolicyMode;
        this.backupRetentionPeriod = props.backupRetentionPeriod;
        this.category = props.category;
        this.compressType = props.compressType;
        this.connectionMode = props.connectionMode;
        this.connectionStringPrefix = props.connectionStringPrefix;
        this.connectionStringType = props.connectionStringType;
        this.dbInstanceDescription = props.dbInstanceDescription;
        this.dbInstanceNetType = props.dbInstanceNetType;
        this.dbInstanceStorageType = props.dbInstanceStorageType;
        this.dbIsIgnoreCase = props.dbIsIgnoreCase;
        this.dbMappings = props.dbMappings;
        this.dbParamGroupId = props.dbParamGroupId;
        this.dbTimeZone = props.dbTimeZone;
        this.dedicatedHostGroupId = props.dedicatedHostGroupId;
        this.enableBackupLog = props.enableBackupLog;
        this.encryptionKey = props.encryptionKey;
        this.highSpaceUsageProtection = props.highSpaceUsageProtection;
        this.localLogRetentionHours = props.localLogRetentionHours;
        this.localLogRetentionSpace = props.localLogRetentionSpace;
        this.logBackupFrequency = props.logBackupFrequency;
        this.logBackupLocalRetentionNumber = props.logBackupLocalRetentionNumber;
        this.logBackupRetentionPeriod = props.logBackupRetentionPeriod;
        this.maintainTime = props.maintainTime;
        this.masterUsername = props.masterUsername;
        this.masterUserPassword = props.masterUserPassword;
        this.masterUserType = props.masterUserType;
        this.multiAz = props.multiAz;
        this.payType = props.payType;
        this.period = props.period;
        this.periodType = props.periodType;
        this.port = props.port;
        this.preferredBackupPeriod = props.preferredBackupPeriod;
        this.preferredBackupTime = props.preferredBackupTime;
        this.privateIpAddress = props.privateIpAddress;
        this.releasedKeepPolicy = props.releasedKeepPolicy;
        this.resourceGroupId = props.resourceGroupId;
        this.roleArn = props.roleArn;
        this.securityGroupId = props.securityGroupId;
        this.slaveZoneIds = props.slaveZoneIds;
        this.sqlCollectorStatus = props.sqlCollectorStatus;
        this.sslSetting = props.sslSetting;
        this.tags = props.tags;
        this.targetDedicatedHostIdForLog = props.targetDedicatedHostIdForLog;
        this.targetDedicatedHostIdForMaster = props.targetDedicatedHostIdForMaster;
        this.targetDedicatedHostIdForSlave = props.targetDedicatedHostIdForSlave;
        this.vpcId = props.vpcId;
        this.vSwitchId = props.vSwitchId;
        this.zoneId = props.zoneId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            dbInstanceClass: this.dbInstanceClass,
            dbInstanceStorage: this.dbInstanceStorage,
            engine: this.engine,
            engineVersion: this.engineVersion,
            securityIpList: this.securityIpList,
            allocatePublicConnection: this.allocatePublicConnection,
            archiveBackupKeepCount: this.archiveBackupKeepCount,
            archiveBackupKeepPolicy: this.archiveBackupKeepPolicy,
            archiveBackupRetentionPeriod: this.archiveBackupRetentionPeriod,
            autoRenew: this.autoRenew,
            backUpCategory: this.backUpCategory,
            backupPolicyMode: this.backupPolicyMode,
            backupRetentionPeriod: this.backupRetentionPeriod,
            category: this.category,
            compressType: this.compressType,
            connectionMode: this.connectionMode,
            connectionStringPrefix: this.connectionStringPrefix,
            connectionStringType: this.connectionStringType,
            dbInstanceDescription: this.dbInstanceDescription,
            dbInstanceNetType: this.dbInstanceNetType,
            dbInstanceStorageType: this.dbInstanceStorageType,
            dbIsIgnoreCase: this.dbIsIgnoreCase,
            dbMappings: this.dbMappings,
            dbParamGroupId: this.dbParamGroupId,
            dbTimeZone: this.dbTimeZone,
            dedicatedHostGroupId: this.dedicatedHostGroupId,
            enableBackupLog: this.enableBackupLog,
            encryptionKey: this.encryptionKey,
            highSpaceUsageProtection: this.highSpaceUsageProtection,
            localLogRetentionHours: this.localLogRetentionHours,
            localLogRetentionSpace: this.localLogRetentionSpace,
            logBackupFrequency: this.logBackupFrequency,
            logBackupLocalRetentionNumber: this.logBackupLocalRetentionNumber,
            logBackupRetentionPeriod: this.logBackupRetentionPeriod,
            maintainTime: this.maintainTime,
            masterUsername: this.masterUsername,
            masterUserPassword: this.masterUserPassword,
            masterUserType: this.masterUserType,
            multiAz: this.multiAz,
            payType: this.payType,
            period: this.period,
            periodType: this.periodType,
            port: this.port,
            preferredBackupPeriod: this.preferredBackupPeriod,
            preferredBackupTime: this.preferredBackupTime,
            privateIpAddress: this.privateIpAddress,
            releasedKeepPolicy: this.releasedKeepPolicy,
            resourceGroupId: this.resourceGroupId,
            roleArn: this.roleArn,
            securityGroupId: this.securityGroupId,
            slaveZoneIds: this.slaveZoneIds,
            sqlCollectorStatus: this.sqlCollectorStatus,
            sslSetting: this.sslSetting,
            tags: this.tags,
            targetDedicatedHostIdForLog: this.targetDedicatedHostIdForLog,
            targetDedicatedHostIdForMaster: this.targetDedicatedHostIdForMaster,
            targetDedicatedHostIdForSlave: this.targetDedicatedHostIdForSlave,
            vpcId: this.vpcId,
            vSwitchId: this.vSwitchId,
            zoneId: this.zoneId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosDBInstancePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosDBInstance {
    /**
     * @stability external
     */
    export interface DBMappingsProperty {
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
/**
 * Determine whether the given properties match those of a `DBMappingsProperty`
 *
 * @param properties - the TypeScript properties of a `DBMappingsProperty`
 *
 * @returns the result of the validation.
 */
function RosDBInstance_DBMappingsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('characterSetName', ros.requiredValidator)(properties.characterSetName));
    errors.collect(ros.propertyValidator('characterSetName', ros.validateString)(properties.characterSetName));
    if(properties.dbDescription && (Array.isArray(properties.dbDescription) || (typeof properties.dbDescription) === 'string')) {
        errors.collect(ros.propertyValidator('dbDescription', ros.validateLength)({
            data: properties.dbDescription.length,
            min: undefined,
            max: 256,
          }));
    }
    errors.collect(ros.propertyValidator('dbDescription', ros.validateString)(properties.dbDescription));
    errors.collect(ros.propertyValidator('dbName', ros.requiredValidator)(properties.dbName));
    errors.collect(ros.propertyValidator('dbName', ros.validateString)(properties.dbName));
    return errors.wrap('supplied properties not correct for "DBMappingsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::RDS::DBInstance.DBMappings` resource
 *
 * @param properties - the TypeScript properties of a `DBMappingsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::RDS::DBInstance.DBMappings` resource.
 */
// @ts-ignore TS6133
function rosDBInstanceDBMappingsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosDBInstance_DBMappingsPropertyValidator(properties).assertSuccess();
    return {
      CharacterSetName: ros.stringToRosTemplate(properties.characterSetName),
      DBDescription: ros.stringToRosTemplate(properties.dbDescription),
      DBName: ros.stringToRosTemplate(properties.dbName),
    };
}

/**
 * Properties for defining a `ALIYUN::RDS::DBInstanceClone`
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
     * Basic: specifies to use the Basic Edition.
     * HighAvailability: specifies to use the High-availability Edition.
     * AlwaysOn: specifies to use the Cluster Edition.
     * Finance: specifies to use the Enterprise Edition.
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
     * @Property dbInstanceStorage: Database instance storage size. mysql is [5,1000]. sql server 2008r2 is [10,1000], sql server 2012/2012_web/2016-web is [20,1000]. PostgreSQL and PPAS is [5,2000]. Increased every 5 GB, Unit in GB
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
    readonly preferredBackupPeriod?: Array<any | ros.IResolvable> | ros.IResolvable;

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
     * @Property securityIpList: Security ip to access the database instance, combine with comma, 0.0.0.0/0 means no limitation.
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
     * At most 5 tags can be specified.
     * Key
     * It can be up to 64 characters in length.
     * Cannot begin with aliyun.
     * Cannot begin with http:// or https://.
     * Cannot be a null string.
     * Value
     * It can be up to 128 characters in length.
     * Cannot begin with aliyun.
     * Cannot begin with http:// or https://.
     * Can be a null string.
     */
    readonly tags?: { [key: string]: (any) };

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
 * Determine whether the given properties match those of a `RosDBInstanceCloneProps`
 *
 * @param properties - the TypeScript properties of a `RosDBInstanceCloneProps`
 *
 * @returns the result of the validation.
 */
function RosDBInstanceClonePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.periodType && (typeof properties.periodType) !== 'object') {
        errors.collect(ros.propertyValidator('periodType', ros.validateAllowedValues)({
          data: properties.periodType,
          allowedValues: ["Month","Year"],
        }));
    }
    errors.collect(ros.propertyValidator('periodType', ros.validateString)(properties.periodType));
    if(properties.category && (typeof properties.category) !== 'object') {
        errors.collect(ros.propertyValidator('category', ros.validateAllowedValues)({
          data: properties.category,
          allowedValues: ["Basic","HighAvailability","AlwaysOn","Finance"],
        }));
    }
    errors.collect(ros.propertyValidator('category', ros.validateString)(properties.category));
    errors.collect(ros.propertyValidator('privateIpAddress', ros.validateString)(properties.privateIpAddress));
    errors.collect(ros.propertyValidator('dedicatedHostGroupId', ros.validateString)(properties.dedicatedHostGroupId));
    if(properties.port && (typeof properties.port) !== 'object') {
        errors.collect(ros.propertyValidator('port', ros.validateRange)({
            data: properties.port,
            min: 1,
            max: 65535,
          }));
    }
    errors.collect(ros.propertyValidator('port', ros.validateNumber)(properties.port));
    errors.collect(ros.propertyValidator('backupId', ros.validateString)(properties.backupId));
    errors.collect(ros.propertyValidator('instanceNetworkType', ros.validateString)(properties.instanceNetworkType));
    errors.collect(ros.propertyValidator('restoreTime', ros.validateString)(properties.restoreTime));
    errors.collect(ros.propertyValidator('preferredBackupPeriod', ros.listValidator(ros.validateAny))(properties.preferredBackupPeriod));
    errors.collect(ros.propertyValidator('dbNames', ros.validateString)(properties.dbNames));
    if(properties.slaveZoneIds && (Array.isArray(properties.slaveZoneIds) || (typeof properties.slaveZoneIds) === 'string')) {
        errors.collect(ros.propertyValidator('slaveZoneIds', ros.validateLength)({
            data: properties.slaveZoneIds.length,
            min: undefined,
            max: 2,
          }));
    }
    errors.collect(ros.propertyValidator('slaveZoneIds', ros.listValidator(ros.validateString))(properties.slaveZoneIds));
    errors.collect(ros.propertyValidator('dbInstanceId', ros.requiredValidator)(properties.dbInstanceId));
    errors.collect(ros.propertyValidator('dbInstanceId', ros.validateString)(properties.dbInstanceId));
    errors.collect(ros.propertyValidator('securityIpList', ros.validateString)(properties.securityIpList));
    errors.collect(ros.propertyValidator('dbInstanceStorage', ros.validateNumber)(properties.dbInstanceStorage));
    if(properties.backupType && (typeof properties.backupType) !== 'object') {
        errors.collect(ros.propertyValidator('backupType', ros.validateAllowedValues)({
          data: properties.backupType,
          allowedValues: ["FullBackup","IncrementalBackup"],
        }));
    }
    errors.collect(ros.propertyValidator('backupType', ros.validateString)(properties.backupType));
    errors.collect(ros.propertyValidator('dbMappings', ros.listValidator(RosDBInstanceClone_DBMappingsPropertyValidator))(properties.dbMappings));
    if(properties.connectionStringPrefix && (typeof properties.connectionStringPrefix) !== 'object') {
        errors.collect(ros.propertyValidator('connectionStringPrefix', ros.validateAllowedPattern)({
          data: properties.connectionStringPrefix,
          reg: /[a-zA-Z0-9-]{8,64}/
        }));
    }
    errors.collect(ros.propertyValidator('connectionStringPrefix', ros.validateString)(properties.connectionStringPrefix));
    errors.collect(ros.propertyValidator('maintainTime', ros.validateString)(properties.maintainTime));
    errors.collect(ros.propertyValidator('tags', ros.hashValidator(ros.validateAny))(properties.tags));
    errors.collect(ros.propertyValidator('dbInstanceDescription', ros.validateString)(properties.dbInstanceDescription));
    errors.collect(ros.propertyValidator('zoneId', ros.validateString)(properties.zoneId));
    errors.collect(ros.propertyValidator('dbInstanceClass', ros.validateString)(properties.dbInstanceClass));
    errors.collect(ros.propertyValidator('allocatePublicConnection', ros.validateBoolean)(properties.allocatePublicConnection));
    errors.collect(ros.propertyValidator('preferredBackupTime', ros.validateString)(properties.preferredBackupTime));
    errors.collect(ros.propertyValidator('vSwitchId', ros.validateString)(properties.vSwitchId));
    errors.collect(ros.propertyValidator('securityGroupId', ros.validateString)(properties.securityGroupId));
    if(properties.period && (typeof properties.period) !== 'object') {
        errors.collect(ros.propertyValidator('period', ros.validateAllowedValues)({
          data: properties.period,
          allowedValues: [1,2,3,4,5,6,7,8,9,10,11,12,24,36,48,60],
        }));
    }
    errors.collect(ros.propertyValidator('period', ros.validateNumber)(properties.period));
    errors.collect(ros.propertyValidator('payType', ros.requiredValidator)(properties.payType));
    if(properties.payType && (typeof properties.payType) !== 'object') {
        errors.collect(ros.propertyValidator('payType', ros.validateAllowedValues)({
          data: properties.payType,
          allowedValues: ["Subscription","PrePaid","PrePay","Prepaid","PayAsYouGo","PostPaid","PayOnDemand","Postpaid"],
        }));
    }
    errors.collect(ros.propertyValidator('payType', ros.validateString)(properties.payType));
    errors.collect(ros.propertyValidator('dbInstanceStorageType', ros.validateString)(properties.dbInstanceStorageType));
    if(properties.connectionStringType && (typeof properties.connectionStringType) !== 'object') {
        errors.collect(ros.propertyValidator('connectionStringType', ros.validateAllowedValues)({
          data: properties.connectionStringType,
          allowedValues: ["Inner","Public"],
        }));
    }
    errors.collect(ros.propertyValidator('connectionStringType', ros.validateString)(properties.connectionStringType));
    errors.collect(ros.propertyValidator('restoreTable', ros.validateString)(properties.restoreTable));
    if(properties.masterUserPassword && (Array.isArray(properties.masterUserPassword) || (typeof properties.masterUserPassword) === 'string')) {
        errors.collect(ros.propertyValidator('masterUserPassword', ros.validateLength)({
            data: properties.masterUserPassword.length,
            min: 8,
            max: 32,
          }));
    }
    errors.collect(ros.propertyValidator('masterUserPassword', ros.validateString)(properties.masterUserPassword));
    if(properties.masterUserType && (typeof properties.masterUserType) !== 'object') {
        errors.collect(ros.propertyValidator('masterUserType', ros.validateAllowedValues)({
          data: properties.masterUserType,
          allowedValues: ["Normal","Super","Sysadmin"],
        }));
    }
    errors.collect(ros.propertyValidator('masterUserType', ros.validateString)(properties.masterUserType));
    errors.collect(ros.propertyValidator('vpcId', ros.validateString)(properties.vpcId));
    if(properties.sslSetting && (typeof properties.sslSetting) !== 'object') {
        errors.collect(ros.propertyValidator('sslSetting', ros.validateAllowedValues)({
          data: properties.sslSetting,
          allowedValues: ["Disabled","EnabledForPublicConnection","EnabledForInnerConnection"],
        }));
    }
    errors.collect(ros.propertyValidator('sslSetting', ros.validateString)(properties.sslSetting));
    errors.collect(ros.propertyValidator('masterUsername', ros.validateString)(properties.masterUsername));
    if(properties.sqlCollectorStatus && (typeof properties.sqlCollectorStatus) !== 'object') {
        errors.collect(ros.propertyValidator('sqlCollectorStatus', ros.validateAllowedValues)({
          data: properties.sqlCollectorStatus,
          allowedValues: ["Enable","Disabled"],
        }));
    }
    errors.collect(ros.propertyValidator('sqlCollectorStatus', ros.validateString)(properties.sqlCollectorStatus));
    errors.collect(ros.propertyValidator('backupRetentionPeriod', ros.validateNumber)(properties.backupRetentionPeriod));
    errors.collect(ros.propertyValidator('tableMeta', ros.listValidator(RosDBInstanceClone_TableMetaPropertyValidator))(properties.tableMeta));
    if(properties.timeoutInMinutes && (typeof properties.timeoutInMinutes) !== 'object') {
        errors.collect(ros.propertyValidator('timeoutInMinutes', ros.validateAllowedValues)({
          data: properties.timeoutInMinutes,
          allowedValues: [30,60,90,120,150,180,210,240,270,300,330,360],
        }));
    }
    errors.collect(ros.propertyValidator('timeoutInMinutes', ros.validateNumber)(properties.timeoutInMinutes));
    return errors.wrap('supplied properties not correct for "RosDBInstanceCloneProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::RDS::DBInstanceClone` resource
 *
 * @param properties - the TypeScript properties of a `RosDBInstanceCloneProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::RDS::DBInstanceClone` resource.
 */
// @ts-ignore TS6133
function rosDBInstanceClonePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosDBInstanceClonePropsValidator(properties).assertSuccess();
    }
    return {
      DBInstanceId: ros.stringToRosTemplate(properties.dbInstanceId),
      PayType: ros.stringToRosTemplate(properties.payType),
      AllocatePublicConnection: ros.booleanToRosTemplate(properties.allocatePublicConnection),
      BackupId: ros.stringToRosTemplate(properties.backupId),
      BackupRetentionPeriod: ros.numberToRosTemplate(properties.backupRetentionPeriod),
      BackupType: ros.stringToRosTemplate(properties.backupType),
      Category: ros.stringToRosTemplate(properties.category),
      ConnectionStringPrefix: ros.stringToRosTemplate(properties.connectionStringPrefix),
      ConnectionStringType: ros.stringToRosTemplate(properties.connectionStringType),
      DBInstanceClass: ros.stringToRosTemplate(properties.dbInstanceClass),
      DBInstanceDescription: ros.stringToRosTemplate(properties.dbInstanceDescription),
      DBInstanceStorage: ros.numberToRosTemplate(properties.dbInstanceStorage),
      DBInstanceStorageType: ros.stringToRosTemplate(properties.dbInstanceStorageType),
      DBMappings: ros.listMapper(rosDBInstanceCloneDBMappingsPropertyToRosTemplate)(properties.dbMappings),
      DbNames: ros.stringToRosTemplate(properties.dbNames),
      DedicatedHostGroupId: ros.stringToRosTemplate(properties.dedicatedHostGroupId),
      InstanceNetworkType: ros.stringToRosTemplate(properties.instanceNetworkType),
      MaintainTime: ros.stringToRosTemplate(properties.maintainTime),
      MasterUsername: ros.stringToRosTemplate(properties.masterUsername),
      MasterUserPassword: ros.stringToRosTemplate(properties.masterUserPassword),
      MasterUserType: ros.stringToRosTemplate(properties.masterUserType),
      Period: ros.numberToRosTemplate(properties.period),
      PeriodType: ros.stringToRosTemplate(properties.periodType),
      Port: ros.numberToRosTemplate(properties.port),
      PreferredBackupPeriod: ros.listMapper(ros.objectToRosTemplate)(properties.preferredBackupPeriod),
      PreferredBackupTime: ros.stringToRosTemplate(properties.preferredBackupTime),
      PrivateIpAddress: ros.stringToRosTemplate(properties.privateIpAddress),
      RestoreTable: ros.stringToRosTemplate(properties.restoreTable),
      RestoreTime: ros.stringToRosTemplate(properties.restoreTime),
      SecurityGroupId: ros.stringToRosTemplate(properties.securityGroupId),
      SecurityIPList: ros.stringToRosTemplate(properties.securityIpList),
      SlaveZoneIds: ros.listMapper(ros.stringToRosTemplate)(properties.slaveZoneIds),
      SQLCollectorStatus: ros.stringToRosTemplate(properties.sqlCollectorStatus),
      SSLSetting: ros.stringToRosTemplate(properties.sslSetting),
      TableMeta: ros.listMapper(rosDBInstanceCloneTableMetaPropertyToRosTemplate)(properties.tableMeta),
      Tags: ros.hashMapper(ros.objectToRosTemplate)(properties.tags),
      TimeoutInMinutes: ros.numberToRosTemplate(properties.timeoutInMinutes),
      VpcId: ros.stringToRosTemplate(properties.vpcId),
      VSwitchId: ros.stringToRosTemplate(properties.vSwitchId),
      ZoneId: ros.stringToRosTemplate(properties.zoneId),
    };
}

/**
 * A ROS template type:  `ALIYUN::RDS::DBInstanceClone`
 */
export class RosDBInstanceClone extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::RDS::DBInstanceClone";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute DBInstanceId: The instance id of created database instance.
     */
    public readonly attrDbInstanceId: ros.IResolvable;

    /**
     * @Attribute InnerConnectionString: DB instance connection url by Intranet.
     */
    public readonly attrInnerConnectionString: ros.IResolvable;

    /**
     * @Attribute InnerIPAddress: IP Address for created DB instance of Intranet.
     */
    public readonly attrInnerIpAddress: ros.IResolvable;

    /**
     * @Attribute InnerPort: Intranet port of created DB instance.
     */
    public readonly attrInnerPort: ros.IResolvable;

    /**
     * @Attribute PublicConnectionString: DB instance connection url by Internet.
     */
    public readonly attrPublicConnectionString: ros.IResolvable;

    /**
     * @Attribute PublicIPAddress: IP Address for created DB instance of Internet.
     */
    public readonly attrPublicIpAddress: ros.IResolvable;

    /**
     * @Attribute PublicPort: Internet port of created DB instance.
     */
    public readonly attrPublicPort: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property dbInstanceId: Instance id
     */
    public dbInstanceId: string | ros.IResolvable;

    /**
     * @Property payType: The charge type of created instance.
     */
    public payType: string | ros.IResolvable;

    /**
     * @Property allocatePublicConnection: If true, allocate public connection automate.
     */
    public allocatePublicConnection: boolean | ros.IResolvable | undefined;

    /**
     * @Property backupId: The ID of the backup set that you want to use. 
     * You can call the DescribeBackups operation to query the most recent backup set list. 
     * Note You must specify at least one of the BackupId and RestoreTime parameters.
     */
    public backupId: string | ros.IResolvable | undefined;

    /**
     * @Property backupRetentionPeriod: The retention period of the data backup. Value range: 7 to 730. The default value is the original value. Note When the BackupPolicyMode parameter is set to LogBackupPolicy, this parameter is required.
     */
    public backupRetentionPeriod: number | ros.IResolvable | undefined;

    /**
     * @Property backupType: The type of backup used by the new instance. Valid values: 
     *  - FullBackup: full backup 
     *  - IncrementalBackup: incremental backup
     */
    public backupType: string | ros.IResolvable | undefined;

    /**
     * @Property category: The edition of the instance. Valid values:
     * Basic: specifies to use the Basic Edition.
     * HighAvailability: specifies to use the High-availability Edition.
     * AlwaysOn: specifies to use the Cluster Edition.
     * Finance: specifies to use the Enterprise Edition.
     */
    public category: string | ros.IResolvable | undefined;

    /**
     * @Property connectionStringPrefix: The prefix of the endpoint. 
     * Only the prefix of the CurrentConnectionString parameter value can be modified.
     * The prefix must be 8 to 64 characters in length and can contain letters, digits, and hyphens (-).
     */
    public connectionStringPrefix: string | ros.IResolvable | undefined;

    /**
     * @Property connectionStringType: The endpoint type of the instance, allow values: Inner, Public
     */
    public connectionStringType: string | ros.IResolvable | undefined;

    /**
     * @Property dbInstanceClass: Database instance type. Refer the RDS database instance type reference, such as 'rds.mys2.large', 'rds.mss1.large', 'rds.pg.s1.small' etc
     */
    public dbInstanceClass: string | ros.IResolvable | undefined;

    /**
     * @Property dbInstanceDescription: Description of created database instance.
     */
    public dbInstanceDescription: string | ros.IResolvable | undefined;

    /**
     * @Property dbInstanceStorage: Database instance storage size. mysql is [5,1000]. sql server 2008r2 is [10,1000], sql server 2012/2012_web/2016-web is [20,1000]. PostgreSQL and PPAS is [5,2000]. Increased every 5 GB, Unit in GB
     */
    public dbInstanceStorage: number | ros.IResolvable | undefined;

    /**
     * @Property dbInstanceStorageType: The storage type of the instance. Valid values:
     * local_ssd: specifies to use local SSDs. This is the recommended storage type.
     * cloud_ssd: specifies to use standard SSDs.
     * cloud_essd: enhanced SSD of performance level (PL)1.
     * cloud_essd2: enhanced SSD of PL2.
     * cloud_essd3: enhanced SSD of PL3.
     */
    public dbInstanceStorageType: string | ros.IResolvable | undefined;

    /**
     * @Property dbMappings: Database mappings to attach to db instance.
     */
    public dbMappings: Array<RosDBInstanceClone.DBMappingsProperty | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property dbNames: The names of the databases that you want to create on the new instance.
     */
    public dbNames: string | ros.IResolvable | undefined;

    /**
     * @Property dedicatedHostGroupId: The ID of the host group to which the instance belongs if you create an instance in a host group.
     */
    public dedicatedHostGroupId: string | ros.IResolvable | undefined;

    /**
     * @Property instanceNetworkType: The network type of the new instance. Valid values: 
     * - VPC 
     * - Classic 
     * The default value is the network type of the original instance.
     */
    public instanceNetworkType: string | ros.IResolvable | undefined;

    /**
     * @Property maintainTime: The period during which the maintenance performs. The format is HH:mmZ-HH:mmZ.
     */
    public maintainTime: string | ros.IResolvable | undefined;

    /**
     * @Property masterUsername: The master user name for the database instance.
     */
    public masterUsername: string | ros.IResolvable | undefined;

    /**
     * @Property masterUserPassword: The master password for the database instance.
     */
    public masterUserPassword: string | ros.IResolvable | undefined;

    /**
     * @Property masterUserType: Privilege type of account.
     *  Normal: Common privilege. 
     *  Super: High privilege. 
     * Sysadmin: Super privileges (SA) (only supported by SQL Server)
     * The default value is Normal.
     */
    public masterUserType: string | ros.IResolvable | undefined;

    /**
     * @Property period: The subscription duration. Valid values:
     * When PeriodType is Month, it could be from 1 to 12, 24, 36, 48, 60.
     *  When PeriodType is Year, it could be from 1 to 5.
     */
    public period: number | ros.IResolvable | undefined;

    /**
     * @Property periodType: Charge period for created instances.
     */
    public periodType: string | ros.IResolvable | undefined;

    /**
     * @Property port: The port of the database service.
     */
    public port: number | ros.IResolvable | undefined;

    /**
     * @Property preferredBackupPeriod: The backup period. Separate multiple values with commas (,). The default value is the original value. Valid values:Monday Tuesday Wednesday Thursday Friday Saturday Sunday Note When the BackupPolicyMode parameter is set to DataBackupPolicy, this parameter is required.
     */
    public preferredBackupPeriod: Array<any | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property preferredBackupTime: The time when the backup task is performed. Format: yyyy-MM-ddZ-HH:mm:ssZ.Note When the BackupPolicyMode parameter is set to DataBackupPolicy, this parameter is required.
     */
    public preferredBackupTime: string | ros.IResolvable | undefined;

    /**
     * @Property privateIpAddress: The private ip for created instance.
     */
    public privateIpAddress: string | ros.IResolvable | undefined;

    /**
     * @Property restoreTable: Specifies whether to restore specific databases and tables. 
     * The value 1 specifies to restore specific databases and tables. 
     * If you do not want to restore specific databases or tables, you can choose not to specify this parameter.
     */
    public restoreTable: string | ros.IResolvable | undefined;

    /**
     * @Property restoreTime: The point in time to which you want to restore the data of the original instance. 
     * The point in time must fall within the specified log backup retention period. 
     * The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. 
     * The time must be in UTC.
     */
    public restoreTime: string | ros.IResolvable | undefined;

    /**
     * @Property securityGroupId: The ID of the ECS security groups. 
     * Each RDS instance can be associated with up to three ECS security groups. 
     * You must separate them with commas (,). 
     * To delete an ECS Security group, leave this parameter empty. 
     *
     */
    public securityGroupId: string | ros.IResolvable | undefined;

    /**
     * @Property securityIpList: Security ip to access the database instance, combine with comma, 0.0.0.0/0 means no limitation.
     */
    public securityIpList: string | ros.IResolvable | undefined;

    /**
     * @Property slaveZoneIds: List of slave zone ids can specify slave zone ids when creating the high-availability or enterprise edition instance. Meanwhile, VSwitchId needs to pass in the corresponding vswitch id to the slave zone by order. For example, ZoneId = "zone-a" and SlaveZoneIds = ["zone-c", "zone-b"], then the VSwitchId must be "vsw-zone-a,vsw-zone-c,vsw-zone-b".
     */
    public slaveZoneIds: Array<string | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property sqlCollectorStatus: Specifies whether to enable or disable the SQL Explorer (SQL audit) feature. 
     * Valid values:Enable | Disabled.
     */
    public sqlCollectorStatus: string | ros.IResolvable | undefined;

    /**
     * @Property sslSetting: Secure Sockets Layer (SSL) link setting of the instance. Valid values:
     * Disabled: Disable SSL
     * EnabledForPublicConnection: Public connection address will be protected by the SSL certificate. It requires AllocatePublicConnection is true.
     * EnabledForInnerConnection: Private connection address will be protected by the SSL certificate.
     * Default value is Disabled.
     */
    public sslSetting: string | ros.IResolvable | undefined;

    /**
     * @Property tableMeta: The information about the databases and tables that you want to restore.
     */
    public tableMeta: Array<RosDBInstanceClone.TableMetaProperty | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property tags: The tags of an instance.
     * You should input the information of the tag with the format of the Key-Value, such as {"key1":"value1","key2":"value2", ... "key5":"value5"}.
     * At most 5 tags can be specified.
     * Key
     * It can be up to 64 characters in length.
     * Cannot begin with aliyun.
     * Cannot begin with http:// or https://.
     * Cannot be a null string.
     * Value
     * It can be up to 128 characters in length.
     * Cannot begin with aliyun.
     * Cannot begin with http:// or https://.
     * Can be a null string.
     */
    public tags: { [key: string]: (any) } | undefined;

    /**
     * @Property timeoutInMinutes: The timeout period for creating the clone instance resource. Unit: Minute. Default: 120.
     */
    public timeoutInMinutes: number | ros.IResolvable | undefined;

    /**
     * @Property vpcId: The VPC id of created database instance. For VPC network, the property is required.
     */
    public vpcId: string | ros.IResolvable | undefined;

    /**
     * @Property vSwitchId: The vSwitch id of created instance. For VPC network, the property is required.
     */
    public vSwitchId: string | ros.IResolvable | undefined;

    /**
     * @Property zoneId: selected zone to create database instance. You cannot set the ZoneId parameter if the MultiAZ parameter is set to true.
     */
    public zoneId: string | ros.IResolvable | undefined;

    /**
     * Create a new `ALIYUN::RDS::DBInstanceClone`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDBInstanceCloneProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosDBInstanceClone.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrDbInstanceId = this.getAtt('DBInstanceId');
        this.attrInnerConnectionString = this.getAtt('InnerConnectionString');
        this.attrInnerIpAddress = this.getAtt('InnerIPAddress');
        this.attrInnerPort = this.getAtt('InnerPort');
        this.attrPublicConnectionString = this.getAtt('PublicConnectionString');
        this.attrPublicIpAddress = this.getAtt('PublicIPAddress');
        this.attrPublicPort = this.getAtt('PublicPort');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.dbInstanceId = props.dbInstanceId;
        this.payType = props.payType;
        this.allocatePublicConnection = props.allocatePublicConnection;
        this.backupId = props.backupId;
        this.backupRetentionPeriod = props.backupRetentionPeriod;
        this.backupType = props.backupType;
        this.category = props.category;
        this.connectionStringPrefix = props.connectionStringPrefix;
        this.connectionStringType = props.connectionStringType;
        this.dbInstanceClass = props.dbInstanceClass;
        this.dbInstanceDescription = props.dbInstanceDescription;
        this.dbInstanceStorage = props.dbInstanceStorage;
        this.dbInstanceStorageType = props.dbInstanceStorageType;
        this.dbMappings = props.dbMappings;
        this.dbNames = props.dbNames;
        this.dedicatedHostGroupId = props.dedicatedHostGroupId;
        this.instanceNetworkType = props.instanceNetworkType;
        this.maintainTime = props.maintainTime;
        this.masterUsername = props.masterUsername;
        this.masterUserPassword = props.masterUserPassword;
        this.masterUserType = props.masterUserType;
        this.period = props.period;
        this.periodType = props.periodType;
        this.port = props.port;
        this.preferredBackupPeriod = props.preferredBackupPeriod;
        this.preferredBackupTime = props.preferredBackupTime;
        this.privateIpAddress = props.privateIpAddress;
        this.restoreTable = props.restoreTable;
        this.restoreTime = props.restoreTime;
        this.securityGroupId = props.securityGroupId;
        this.securityIpList = props.securityIpList;
        this.slaveZoneIds = props.slaveZoneIds;
        this.sqlCollectorStatus = props.sqlCollectorStatus;
        this.sslSetting = props.sslSetting;
        this.tableMeta = props.tableMeta;
        this.tags = props.tags;
        this.timeoutInMinutes = props.timeoutInMinutes;
        this.vpcId = props.vpcId;
        this.vSwitchId = props.vSwitchId;
        this.zoneId = props.zoneId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            dbInstanceId: this.dbInstanceId,
            payType: this.payType,
            allocatePublicConnection: this.allocatePublicConnection,
            backupId: this.backupId,
            backupRetentionPeriod: this.backupRetentionPeriod,
            backupType: this.backupType,
            category: this.category,
            connectionStringPrefix: this.connectionStringPrefix,
            connectionStringType: this.connectionStringType,
            dbInstanceClass: this.dbInstanceClass,
            dbInstanceDescription: this.dbInstanceDescription,
            dbInstanceStorage: this.dbInstanceStorage,
            dbInstanceStorageType: this.dbInstanceStorageType,
            dbMappings: this.dbMappings,
            dbNames: this.dbNames,
            dedicatedHostGroupId: this.dedicatedHostGroupId,
            instanceNetworkType: this.instanceNetworkType,
            maintainTime: this.maintainTime,
            masterUsername: this.masterUsername,
            masterUserPassword: this.masterUserPassword,
            masterUserType: this.masterUserType,
            period: this.period,
            periodType: this.periodType,
            port: this.port,
            preferredBackupPeriod: this.preferredBackupPeriod,
            preferredBackupTime: this.preferredBackupTime,
            privateIpAddress: this.privateIpAddress,
            restoreTable: this.restoreTable,
            restoreTime: this.restoreTime,
            securityGroupId: this.securityGroupId,
            securityIpList: this.securityIpList,
            slaveZoneIds: this.slaveZoneIds,
            sqlCollectorStatus: this.sqlCollectorStatus,
            sslSetting: this.sslSetting,
            tableMeta: this.tableMeta,
            tags: this.tags,
            timeoutInMinutes: this.timeoutInMinutes,
            vpcId: this.vpcId,
            vSwitchId: this.vSwitchId,
            zoneId: this.zoneId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosDBInstanceClonePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosDBInstanceClone {
    /**
     * @stability external
     */
    export interface DBMappingsProperty {
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
/**
 * Determine whether the given properties match those of a `DBMappingsProperty`
 *
 * @param properties - the TypeScript properties of a `DBMappingsProperty`
 *
 * @returns the result of the validation.
 */
function RosDBInstanceClone_DBMappingsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('characterSetName', ros.requiredValidator)(properties.characterSetName));
    errors.collect(ros.propertyValidator('characterSetName', ros.validateString)(properties.characterSetName));
    if(properties.dbDescription && (Array.isArray(properties.dbDescription) || (typeof properties.dbDescription) === 'string')) {
        errors.collect(ros.propertyValidator('dbDescription', ros.validateLength)({
            data: properties.dbDescription.length,
            min: undefined,
            max: 256,
          }));
    }
    errors.collect(ros.propertyValidator('dbDescription', ros.validateString)(properties.dbDescription));
    errors.collect(ros.propertyValidator('dbName', ros.requiredValidator)(properties.dbName));
    errors.collect(ros.propertyValidator('dbName', ros.validateString)(properties.dbName));
    return errors.wrap('supplied properties not correct for "DBMappingsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::RDS::DBInstanceClone.DBMappings` resource
 *
 * @param properties - the TypeScript properties of a `DBMappingsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::RDS::DBInstanceClone.DBMappings` resource.
 */
// @ts-ignore TS6133
function rosDBInstanceCloneDBMappingsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosDBInstanceClone_DBMappingsPropertyValidator(properties).assertSuccess();
    return {
      CharacterSetName: ros.stringToRosTemplate(properties.characterSetName),
      DBDescription: ros.stringToRosTemplate(properties.dbDescription),
      DBName: ros.stringToRosTemplate(properties.dbName),
    };
}

export namespace RosDBInstanceClone {
    /**
     * @stability external
     */
    export interface TableMetaProperty {
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
/**
 * Determine whether the given properties match those of a `TableMetaProperty`
 *
 * @param properties - the TypeScript properties of a `TableMetaProperty`
 *
 * @returns the result of the validation.
 */
function RosDBInstanceClone_TableMetaPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('type', ros.validateString)(properties.type));
    errors.collect(ros.propertyValidator('tables', ros.listValidator(RosDBInstanceClone_TablesPropertyValidator))(properties.tables));
    errors.collect(ros.propertyValidator('newName', ros.validateString)(properties.newName));
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    return errors.wrap('supplied properties not correct for "TableMetaProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::RDS::DBInstanceClone.TableMeta` resource
 *
 * @param properties - the TypeScript properties of a `TableMetaProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::RDS::DBInstanceClone.TableMeta` resource.
 */
// @ts-ignore TS6133
function rosDBInstanceCloneTableMetaPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosDBInstanceClone_TableMetaPropertyValidator(properties).assertSuccess();
    return {
      Type: ros.stringToRosTemplate(properties.type),
      Tables: ros.listMapper(rosDBInstanceCloneTablesPropertyToRosTemplate)(properties.tables),
      NewName: ros.stringToRosTemplate(properties.newName),
      Name: ros.stringToRosTemplate(properties.name),
    };
}

export namespace RosDBInstanceClone {
    /**
     * @stability external
     */
    export interface TablesProperty {
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
 * Determine whether the given properties match those of a `TablesProperty`
 *
 * @param properties - the TypeScript properties of a `TablesProperty`
 *
 * @returns the result of the validation.
 */
function RosDBInstanceClone_TablesPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('type', ros.validateString)(properties.type));
    errors.collect(ros.propertyValidator('newName', ros.validateString)(properties.newName));
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    return errors.wrap('supplied properties not correct for "TablesProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::RDS::DBInstanceClone.Tables` resource
 *
 * @param properties - the TypeScript properties of a `TablesProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::RDS::DBInstanceClone.Tables` resource.
 */
// @ts-ignore TS6133
function rosDBInstanceCloneTablesPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosDBInstanceClone_TablesPropertyValidator(properties).assertSuccess();
    return {
      Type: ros.stringToRosTemplate(properties.type),
      NewName: ros.stringToRosTemplate(properties.newName),
      Name: ros.stringToRosTemplate(properties.name),
    };
}

/**
 * Properties for defining a `ALIYUN::RDS::DBInstanceParameterGroup`
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
 * Determine whether the given properties match those of a `RosDBInstanceParameterGroupProps`
 *
 * @param properties - the TypeScript properties of a `RosDBInstanceParameterGroupProps`
 *
 * @returns the result of the validation.
 */
function RosDBInstanceParameterGroupPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('parameters', ros.requiredValidator)(properties.parameters));
    errors.collect(ros.propertyValidator('parameters', ros.listValidator(RosDBInstanceParameterGroup_ParametersPropertyValidator))(properties.parameters));
    errors.collect(ros.propertyValidator('dbInstanceId', ros.requiredValidator)(properties.dbInstanceId));
    errors.collect(ros.propertyValidator('dbInstanceId', ros.validateString)(properties.dbInstanceId));
    if(properties.forcerestart && (typeof properties.forcerestart) !== 'object') {
        errors.collect(ros.propertyValidator('forcerestart', ros.validateAllowedValues)({
          data: properties.forcerestart,
          allowedValues: ["true","false"],
        }));
    }
    errors.collect(ros.propertyValidator('forcerestart', ros.validateString)(properties.forcerestart));
    return errors.wrap('supplied properties not correct for "RosDBInstanceParameterGroupProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::RDS::DBInstanceParameterGroup` resource
 *
 * @param properties - the TypeScript properties of a `RosDBInstanceParameterGroupProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::RDS::DBInstanceParameterGroup` resource.
 */
// @ts-ignore TS6133
function rosDBInstanceParameterGroupPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosDBInstanceParameterGroupPropsValidator(properties).assertSuccess();
    }
    return {
      DBInstanceId: ros.stringToRosTemplate(properties.dbInstanceId),
      Parameters: ros.listMapper(rosDBInstanceParameterGroupParametersPropertyToRosTemplate)(properties.parameters),
      Forcerestart: ros.stringToRosTemplate(properties.forcerestart),
    };
}

/**
 * A ROS template type:  `ALIYUN::RDS::DBInstanceParameterGroup`
 */
export class RosDBInstanceParameterGroup extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::RDS::DBInstanceParameterGroup";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property dbInstanceId: Database InstanceId to update properties.
     */
    public dbInstanceId: string | ros.IResolvable;

    /**
     * @Property parameters: Parameters to update for selected database instance.
     */
    public parameters: Array<RosDBInstanceParameterGroup.ParametersProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property forcerestart: whether restart database instance.
     */
    public forcerestart: string | ros.IResolvable | undefined;

    /**
     * Create a new `ALIYUN::RDS::DBInstanceParameterGroup`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDBInstanceParameterGroupProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosDBInstanceParameterGroup.ROS_RESOURCE_TYPE_NAME, properties: props });

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.dbInstanceId = props.dbInstanceId;
        this.parameters = props.parameters;
        this.forcerestart = props.forcerestart;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            dbInstanceId: this.dbInstanceId,
            parameters: this.parameters,
            forcerestart: this.forcerestart,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosDBInstanceParameterGroupPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosDBInstanceParameterGroup {
    /**
     * @stability external
     */
    export interface ParametersProperty {
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
 * Determine whether the given properties match those of a `ParametersProperty`
 *
 * @param properties - the TypeScript properties of a `ParametersProperty`
 *
 * @returns the result of the validation.
 */
function RosDBInstanceParameterGroup_ParametersPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('value', ros.requiredValidator)(properties.value));
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    errors.collect(ros.propertyValidator('key', ros.requiredValidator)(properties.key));
    errors.collect(ros.propertyValidator('key', ros.validateString)(properties.key));
    return errors.wrap('supplied properties not correct for "ParametersProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::RDS::DBInstanceParameterGroup.Parameters` resource
 *
 * @param properties - the TypeScript properties of a `ParametersProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::RDS::DBInstanceParameterGroup.Parameters` resource.
 */
// @ts-ignore TS6133
function rosDBInstanceParameterGroupParametersPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosDBInstanceParameterGroup_ParametersPropertyValidator(properties).assertSuccess();
    return {
      Value: ros.stringToRosTemplate(properties.value),
      Key: ros.stringToRosTemplate(properties.key),
    };
}

/**
 * Properties for defining a `ALIYUN::RDS::DBInstanceSecurityIps`
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
 * Determine whether the given properties match those of a `RosDBInstanceSecurityIpsProps`
 *
 * @param properties - the TypeScript properties of a `RosDBInstanceSecurityIpsProps`
 *
 * @returns the result of the validation.
 */
function RosDBInstanceSecurityIpsPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('dbInstanceIpArrayAttribute', ros.requiredValidator)(properties.dbInstanceIpArrayAttribute));
    errors.collect(ros.propertyValidator('dbInstanceIpArrayAttribute', ros.validateString)(properties.dbInstanceIpArrayAttribute));
    errors.collect(ros.propertyValidator('dbInstanceId', ros.requiredValidator)(properties.dbInstanceId));
    errors.collect(ros.propertyValidator('dbInstanceId', ros.validateString)(properties.dbInstanceId));
    errors.collect(ros.propertyValidator('dbInstanceIpArrayName', ros.validateString)(properties.dbInstanceIpArrayName));
    return errors.wrap('supplied properties not correct for "RosDBInstanceSecurityIpsProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::RDS::DBInstanceSecurityIps` resource
 *
 * @param properties - the TypeScript properties of a `RosDBInstanceSecurityIpsProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::RDS::DBInstanceSecurityIps` resource.
 */
// @ts-ignore TS6133
function rosDBInstanceSecurityIpsPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosDBInstanceSecurityIpsPropsValidator(properties).assertSuccess();
    }
    return {
      DBInstanceId: ros.stringToRosTemplate(properties.dbInstanceId),
      DBInstanceIPArrayAttribute: ros.stringToRosTemplate(properties.dbInstanceIpArrayAttribute),
      DBInstanceIPArrayName: ros.stringToRosTemplate(properties.dbInstanceIpArrayName),
    };
}

/**
 * A ROS template type:  `ALIYUN::RDS::DBInstanceSecurityIps`
 */
export class RosDBInstanceSecurityIps extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::RDS::DBInstanceSecurityIps";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute SecurityIps: The security ips of selected database instance.
     */
    public readonly attrSecurityIps: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property dbInstanceId: Database instance id to update security ips.
     */
    public dbInstanceId: string | ros.IResolvable;

    /**
     * @Property dbInstanceIpArrayAttribute: Security ips to add or remove.
     */
    public dbInstanceIpArrayAttribute: string | ros.IResolvable;

    /**
     * @Property dbInstanceIpArrayName: Group name of the security ips, only support lower characters and '_'. Advice use a new group name avoid effect your database system. If the properties is not specified, it will set to default group, please be careful.
     */
    public dbInstanceIpArrayName: string | ros.IResolvable | undefined;

    /**
     * Create a new `ALIYUN::RDS::DBInstanceSecurityIps`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDBInstanceSecurityIpsProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosDBInstanceSecurityIps.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrSecurityIps = this.getAtt('SecurityIps');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.dbInstanceId = props.dbInstanceId;
        this.dbInstanceIpArrayAttribute = props.dbInstanceIpArrayAttribute;
        this.dbInstanceIpArrayName = props.dbInstanceIpArrayName;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            dbInstanceId: this.dbInstanceId,
            dbInstanceIpArrayAttribute: this.dbInstanceIpArrayAttribute,
            dbInstanceIpArrayName: this.dbInstanceIpArrayName,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosDBInstanceSecurityIpsPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `ALIYUN::RDS::Database`
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
     * Note The description cannot start with http:// or https://.
     */
    readonly dbDescription?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosDatabaseProps`
 *
 * @param properties - the TypeScript properties of a `RosDatabaseProps`
 *
 * @returns the result of the validation.
 */
function RosDatabasePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('characterSetName', ros.requiredValidator)(properties.characterSetName));
    errors.collect(ros.propertyValidator('characterSetName', ros.validateString)(properties.characterSetName));
    errors.collect(ros.propertyValidator('dbInstanceId', ros.requiredValidator)(properties.dbInstanceId));
    errors.collect(ros.propertyValidator('dbInstanceId', ros.validateString)(properties.dbInstanceId));
    errors.collect(ros.propertyValidator('dbDescription', ros.validateString)(properties.dbDescription));
    errors.collect(ros.propertyValidator('dbName', ros.requiredValidator)(properties.dbName));
    errors.collect(ros.propertyValidator('dbName', ros.validateString)(properties.dbName));
    return errors.wrap('supplied properties not correct for "RosDatabaseProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::RDS::Database` resource
 *
 * @param properties - the TypeScript properties of a `RosDatabaseProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::RDS::Database` resource.
 */
// @ts-ignore TS6133
function rosDatabasePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosDatabasePropsValidator(properties).assertSuccess();
    }
    return {
      CharacterSetName: ros.stringToRosTemplate(properties.characterSetName),
      DBInstanceId: ros.stringToRosTemplate(properties.dbInstanceId),
      DBName: ros.stringToRosTemplate(properties.dbName),
      DBDescription: ros.stringToRosTemplate(properties.dbDescription),
    };
}

/**
 * A ROS template type:  `ALIYUN::RDS::Database`
 */
export class RosDatabase extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::RDS::Database";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute DBInstanceId: The ID of the instance.
     */
    public readonly attrDbInstanceId: ros.IResolvable;

    /**
     * @Attribute DBName: The name of the database.
     */
    public readonly attrDbName: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


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
    public characterSetName: string | ros.IResolvable;

    /**
     * @Property dbInstanceId: The ID of the instance.
     */
    public dbInstanceId: string | ros.IResolvable;

    /**
     * @Property dbName: The name of the database you want to create.
     * Note
     * The name must be 2 to 64 characters in length.
     * The name must start with a lowercase letter and end with a lowercase letter or digit.
     * The name can contain lowercase letters, digits, underscores (_), and hyphens (-).
     * The name must be unique in the instance.
     * For more information about invalid characters, see Forbidden keywords table.
     */
    public dbName: string | ros.IResolvable;

    /**
     * @Property dbDescription: The description of the database. The description must be 2 to 256 characters in length.
     * The description must start with a letter and can contain letters, digits, underscores
     * (_), and hyphens (-).
     * Note The description cannot start with http:// or https://.
     */
    public dbDescription: string | ros.IResolvable | undefined;

    /**
     * Create a new `ALIYUN::RDS::Database`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDatabaseProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosDatabase.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrDbInstanceId = this.getAtt('DBInstanceId');
        this.attrDbName = this.getAtt('DBName');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.characterSetName = props.characterSetName;
        this.dbInstanceId = props.dbInstanceId;
        this.dbName = props.dbName;
        this.dbDescription = props.dbDescription;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            characterSetName: this.characterSetName,
            dbInstanceId: this.dbInstanceId,
            dbName: this.dbName,
            dbDescription: this.dbDescription,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosDatabasePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `ALIYUN::RDS::PrepayDBInstance`
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
     * @Property dbInstanceStorage: Database instance storage size. mysql is [5,1000]. sql server 2008r2 is [10,1000], sql server 2012/2012_web/2016-web is [20,1000]. PostgreSQL and PPAS is [5,2000]. Increased every 5 GB, Unit in GB
     */
    readonly dbInstanceStorage: number | ros.IResolvable;

    /**
     * @Property engine: Database instance engine type. Support MySQL/SQLServer/PostgreSQL/PPAS/MariaDB now.
     */
    readonly engine: string | ros.IResolvable;

    /**
     * @Property engineVersion: Database instance version of the relative engine type.Support MySQL: 5.5/5.6/5.7/8.0;
     * SQLServer: 2008r2/2012/2012_ent_ha/2012_std_ha/2012_web/2016_ent_ha/2016_std_ha/2016_web/2017_std_ha/2017_ent;
     * PostgreSQL: 9.4/10.0/11.0/12.0;
     * PPAS: 9.3/10.0;
     * MariaDB: 10.3.
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
     * @Property autoPay: Automatic Payment. Default is false.
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
     * @Property category: The edition of the instance. Valid values:
     * Basic: specifies to use the Basic Edition.
     * HighAvailability: specifies to use the High-availability Edition.
     * AlwaysOn: specifies to use the Cluster Edition.
     * Finance: specifies to use the Enterprise Edition.
     */
    readonly category?: string | ros.IResolvable;

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
    readonly preferredBackupPeriod?: Array<any | ros.IResolvable> | ros.IResolvable;

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
     * @Property tags: The tags of an instance.
     * You should input the information of the tag with the format of the Key-Value, such as {"key1":"value1","key2":"value2", ... "key5":"value5"}.
     * At most 5 tags can be specified.
     * Key
     * It can be up to 64 characters in length.
     * Cannot begin with aliyun.
     * Cannot begin with http:// or https://.
     * Cannot be a null string.
     * Value
     * It can be up to 128 characters in length.
     * Cannot begin with aliyun.
     * Cannot begin with http:// or https://.
     * Can be a null string.
     */
    readonly tags?: { [key: string]: (any) };

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
 * Determine whether the given properties match those of a `RosPrepayDBInstanceProps`
 *
 * @param properties - the TypeScript properties of a `RosPrepayDBInstanceProps`
 *
 * @returns the result of the validation.
 */
function RosPrepayDBInstancePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('periodType', ros.requiredValidator)(properties.periodType));
    if(properties.periodType && (typeof properties.periodType) !== 'object') {
        errors.collect(ros.propertyValidator('periodType', ros.validateAllowedValues)({
          data: properties.periodType,
          allowedValues: ["Month","Year"],
        }));
    }
    errors.collect(ros.propertyValidator('periodType', ros.validateString)(properties.periodType));
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    if(properties.archiveBackupRetentionPeriod && (typeof properties.archiveBackupRetentionPeriod) !== 'object') {
        errors.collect(ros.propertyValidator('archiveBackupRetentionPeriod', ros.validateRange)({
            data: properties.archiveBackupRetentionPeriod,
            min: 30,
            max: 1095,
          }));
    }
    errors.collect(ros.propertyValidator('archiveBackupRetentionPeriod', ros.validateNumber)(properties.archiveBackupRetentionPeriod));
    errors.collect(ros.propertyValidator('dbTimeZone', ros.validateString)(properties.dbTimeZone));
    if(properties.port && (typeof properties.port) !== 'object') {
        errors.collect(ros.propertyValidator('port', ros.validateRange)({
            data: properties.port,
            min: 1,
            max: 65535,
          }));
    }
    errors.collect(ros.propertyValidator('port', ros.validateNumber)(properties.port));
    if(properties.archiveBackupKeepCount && (typeof properties.archiveBackupKeepCount) !== 'object') {
        errors.collect(ros.propertyValidator('archiveBackupKeepCount', ros.validateRange)({
            data: properties.archiveBackupKeepCount,
            min: 1,
            max: 31,
          }));
    }
    errors.collect(ros.propertyValidator('archiveBackupKeepCount', ros.validateNumber)(properties.archiveBackupKeepCount));
    if(properties.logBackupRetentionPeriod && (typeof properties.logBackupRetentionPeriod) !== 'object') {
        errors.collect(ros.propertyValidator('logBackupRetentionPeriod', ros.validateRange)({
            data: properties.logBackupRetentionPeriod,
            min: 7,
            max: 730,
          }));
    }
    errors.collect(ros.propertyValidator('logBackupRetentionPeriod', ros.validateNumber)(properties.logBackupRetentionPeriod));
    errors.collect(ros.propertyValidator('dbInstanceStorage', ros.requiredValidator)(properties.dbInstanceStorage));
    errors.collect(ros.propertyValidator('dbInstanceStorage', ros.validateNumber)(properties.dbInstanceStorage));
    errors.collect(ros.propertyValidator('dbMappings', ros.listValidator(RosPrepayDBInstance_DBMappingsPropertyValidator))(properties.dbMappings));
    if(properties.connectionStringPrefix && (typeof properties.connectionStringPrefix) !== 'object') {
        errors.collect(ros.propertyValidator('connectionStringPrefix', ros.validateAllowedPattern)({
          data: properties.connectionStringPrefix,
          reg: /[a-zA-Z0-9-]{8,64}/
        }));
    }
    errors.collect(ros.propertyValidator('connectionStringPrefix', ros.validateString)(properties.connectionStringPrefix));
    errors.collect(ros.propertyValidator('multiAz', ros.validateBoolean)(properties.multiAz));
    errors.collect(ros.propertyValidator('engine', ros.requiredValidator)(properties.engine));
    if(properties.engine && (typeof properties.engine) !== 'object') {
        errors.collect(ros.propertyValidator('engine', ros.validateAllowedValues)({
          data: properties.engine,
          allowedValues: ["MySQL","SQLServer","PostgreSQL","PPAS","MariaDB"],
        }));
    }
    errors.collect(ros.propertyValidator('engine', ros.validateString)(properties.engine));
    errors.collect(ros.propertyValidator('tags', ros.hashValidator(ros.validateAny))(properties.tags));
    errors.collect(ros.propertyValidator('dbInstanceDescription', ros.validateString)(properties.dbInstanceDescription));
    errors.collect(ros.propertyValidator('targetDedicatedHostIdForMaster', ros.validateString)(properties.targetDedicatedHostIdForMaster));
    errors.collect(ros.propertyValidator('engineVersion', ros.requiredValidator)(properties.engineVersion));
    errors.collect(ros.propertyValidator('engineVersion', ros.validateString)(properties.engineVersion));
    errors.collect(ros.propertyValidator('dbInstanceClass', ros.requiredValidator)(properties.dbInstanceClass));
    errors.collect(ros.propertyValidator('dbInstanceClass', ros.validateString)(properties.dbInstanceClass));
    if(properties.archiveBackupKeepPolicy && (typeof properties.archiveBackupKeepPolicy) !== 'object') {
        errors.collect(ros.propertyValidator('archiveBackupKeepPolicy', ros.validateAllowedValues)({
          data: properties.archiveBackupKeepPolicy,
          allowedValues: ["ByMonth","ByWeek","KeepAll"],
        }));
    }
    errors.collect(ros.propertyValidator('archiveBackupKeepPolicy', ros.validateString)(properties.archiveBackupKeepPolicy));
    errors.collect(ros.propertyValidator('vSwitchId', ros.validateString)(properties.vSwitchId));
    if(properties.backupPolicyMode && (typeof properties.backupPolicyMode) !== 'object') {
        errors.collect(ros.propertyValidator('backupPolicyMode', ros.validateAllowedValues)({
          data: properties.backupPolicyMode,
          allowedValues: ["DataBackupPolicy","LogBackupPolicy"],
        }));
    }
    errors.collect(ros.propertyValidator('backupPolicyMode', ros.validateString)(properties.backupPolicyMode));
    errors.collect(ros.propertyValidator('period', ros.requiredValidator)(properties.period));
    if(properties.period && (typeof properties.period) !== 'object') {
        errors.collect(ros.propertyValidator('period', ros.validateRange)({
            data: properties.period,
            min: 1,
            max: 9,
          }));
    }
    errors.collect(ros.propertyValidator('period', ros.validateNumber)(properties.period));
    if(properties.localLogRetentionHours && (typeof properties.localLogRetentionHours) !== 'object') {
        errors.collect(ros.propertyValidator('localLogRetentionHours', ros.validateRange)({
            data: properties.localLogRetentionHours,
            min: 0,
            max: 168,
          }));
    }
    errors.collect(ros.propertyValidator('localLogRetentionHours', ros.validateNumber)(properties.localLogRetentionHours));
    if(properties.highSpaceUsageProtection && (typeof properties.highSpaceUsageProtection) !== 'object') {
        errors.collect(ros.propertyValidator('highSpaceUsageProtection', ros.validateAllowedValues)({
          data: properties.highSpaceUsageProtection,
          allowedValues: ["Enable","Disable"],
        }));
    }
    errors.collect(ros.propertyValidator('highSpaceUsageProtection', ros.validateString)(properties.highSpaceUsageProtection));
    errors.collect(ros.propertyValidator('roleArn', ros.validateString)(properties.roleArn));
    if(properties.masterUserPassword && (Array.isArray(properties.masterUserPassword) || (typeof properties.masterUserPassword) === 'string')) {
        errors.collect(ros.propertyValidator('masterUserPassword', ros.validateLength)({
            data: properties.masterUserPassword.length,
            min: 8,
            max: 32,
          }));
    }
    errors.collect(ros.propertyValidator('masterUserPassword', ros.validateString)(properties.masterUserPassword));
    errors.collect(ros.propertyValidator('vpcId', ros.validateString)(properties.vpcId));
    if(properties.sslSetting && (typeof properties.sslSetting) !== 'object') {
        errors.collect(ros.propertyValidator('sslSetting', ros.validateAllowedValues)({
          data: properties.sslSetting,
          allowedValues: ["Disabled","EnabledForPublicConnection","EnabledForInnerConnection"],
        }));
    }
    errors.collect(ros.propertyValidator('sslSetting', ros.validateString)(properties.sslSetting));
    errors.collect(ros.propertyValidator('masterUsername', ros.validateString)(properties.masterUsername));
    errors.collect(ros.propertyValidator('connectionMode', ros.validateString)(properties.connectionMode));
    if(properties.localLogRetentionSpace && (typeof properties.localLogRetentionSpace) !== 'object') {
        errors.collect(ros.propertyValidator('localLogRetentionSpace', ros.validateRange)({
            data: properties.localLogRetentionSpace,
            min: 0,
            max: 50,
          }));
    }
    errors.collect(ros.propertyValidator('localLogRetentionSpace', ros.validateNumber)(properties.localLogRetentionSpace));
    if(properties.category && (typeof properties.category) !== 'object') {
        errors.collect(ros.propertyValidator('category', ros.validateAllowedValues)({
          data: properties.category,
          allowedValues: ["Basic","HighAvailability","AlwaysOn","Finance"],
        }));
    }
    errors.collect(ros.propertyValidator('category', ros.validateString)(properties.category));
    errors.collect(ros.propertyValidator('privateIpAddress', ros.validateString)(properties.privateIpAddress));
    errors.collect(ros.propertyValidator('targetDedicatedHostIdForSlave', ros.validateString)(properties.targetDedicatedHostIdForSlave));
    if(properties.dbInstanceNetType && (typeof properties.dbInstanceNetType) !== 'object') {
        errors.collect(ros.propertyValidator('dbInstanceNetType', ros.validateAllowedValues)({
          data: properties.dbInstanceNetType,
          allowedValues: ["Internet","Intranet"],
        }));
    }
    errors.collect(ros.propertyValidator('dbInstanceNetType', ros.validateString)(properties.dbInstanceNetType));
    if(properties.releasedKeepPolicy && (typeof properties.releasedKeepPolicy) !== 'object') {
        errors.collect(ros.propertyValidator('releasedKeepPolicy', ros.validateAllowedValues)({
          data: properties.releasedKeepPolicy,
          allowedValues: ["Lastest","All"],
        }));
    }
    errors.collect(ros.propertyValidator('releasedKeepPolicy', ros.validateString)(properties.releasedKeepPolicy));
    errors.collect(ros.propertyValidator('dedicatedHostGroupId', ros.validateString)(properties.dedicatedHostGroupId));
    errors.collect(ros.propertyValidator('autoRenew', ros.validateBoolean)(properties.autoRenew));
    errors.collect(ros.propertyValidator('encryptionKey', ros.validateString)(properties.encryptionKey));
    errors.collect(ros.propertyValidator('preferredBackupPeriod', ros.listValidator(ros.validateAny))(properties.preferredBackupPeriod));
    if(properties.logBackupLocalRetentionNumber && (typeof properties.logBackupLocalRetentionNumber) !== 'object') {
        errors.collect(ros.propertyValidator('logBackupLocalRetentionNumber', ros.validateRange)({
            data: properties.logBackupLocalRetentionNumber,
            min: 6,
            max: 100,
          }));
    }
    errors.collect(ros.propertyValidator('logBackupLocalRetentionNumber', ros.validateNumber)(properties.logBackupLocalRetentionNumber));
    if(properties.slaveZoneIds && (Array.isArray(properties.slaveZoneIds) || (typeof properties.slaveZoneIds) === 'string')) {
        errors.collect(ros.propertyValidator('slaveZoneIds', ros.validateLength)({
            data: properties.slaveZoneIds.length,
            min: undefined,
            max: 2,
          }));
    }
    errors.collect(ros.propertyValidator('slaveZoneIds', ros.listValidator(ros.validateString))(properties.slaveZoneIds));
    errors.collect(ros.propertyValidator('dbIsIgnoreCase', ros.validateNumber)(properties.dbIsIgnoreCase));
    errors.collect(ros.propertyValidator('commodityCode', ros.requiredValidator)(properties.commodityCode));
    if(properties.commodityCode && (typeof properties.commodityCode) !== 'object') {
        errors.collect(ros.propertyValidator('commodityCode', ros.validateAllowedValues)({
          data: properties.commodityCode,
          allowedValues: ["rds","bards","rords"],
        }));
    }
    errors.collect(ros.propertyValidator('commodityCode', ros.validateString)(properties.commodityCode));
    errors.collect(ros.propertyValidator('maintainTime', ros.validateString)(properties.maintainTime));
    errors.collect(ros.propertyValidator('dbParamGroupId', ros.validateString)(properties.dbParamGroupId));
    errors.collect(ros.propertyValidator('zoneId', ros.validateString)(properties.zoneId));
    errors.collect(ros.propertyValidator('targetDedicatedHostIdForLog', ros.validateString)(properties.targetDedicatedHostIdForLog));
    errors.collect(ros.propertyValidator('allocatePublicConnection', ros.validateBoolean)(properties.allocatePublicConnection));
    errors.collect(ros.propertyValidator('preferredBackupTime', ros.validateString)(properties.preferredBackupTime));
    errors.collect(ros.propertyValidator('securityGroupId', ros.validateString)(properties.securityGroupId));
    if(properties.quantity && (typeof properties.quantity) !== 'object') {
        errors.collect(ros.propertyValidator('quantity', ros.validateRange)({
            data: properties.quantity,
            min: 1,
            max: 99,
          }));
    }
    errors.collect(ros.propertyValidator('quantity', ros.validateNumber)(properties.quantity));
    errors.collect(ros.propertyValidator('autoPay', ros.validateBoolean)(properties.autoPay));
    errors.collect(ros.propertyValidator('dbInstanceStorageType', ros.validateString)(properties.dbInstanceStorageType));
    if(properties.backUpCategory && (typeof properties.backUpCategory) !== 'object') {
        errors.collect(ros.propertyValidator('backUpCategory', ros.validateAllowedValues)({
          data: properties.backUpCategory,
          allowedValues: ["Flash","Standard"],
        }));
    }
    errors.collect(ros.propertyValidator('backUpCategory', ros.validateString)(properties.backUpCategory));
    errors.collect(ros.propertyValidator('compressType', ros.validateNumber)(properties.compressType));
    errors.collect(ros.propertyValidator('logBackupFrequency', ros.validateString)(properties.logBackupFrequency));
    if(properties.connectionStringType && (typeof properties.connectionStringType) !== 'object') {
        errors.collect(ros.propertyValidator('connectionStringType', ros.validateAllowedValues)({
          data: properties.connectionStringType,
          allowedValues: ["Inner","Public"],
        }));
    }
    errors.collect(ros.propertyValidator('connectionStringType', ros.validateString)(properties.connectionStringType));
    errors.collect(ros.propertyValidator('couponCode', ros.validateString)(properties.couponCode));
    if(properties.masterUserType && (typeof properties.masterUserType) !== 'object') {
        errors.collect(ros.propertyValidator('masterUserType', ros.validateAllowedValues)({
          data: properties.masterUserType,
          allowedValues: ["Normal","Super","Sysadmin"],
        }));
    }
    errors.collect(ros.propertyValidator('masterUserType', ros.validateString)(properties.masterUserType));
    errors.collect(ros.propertyValidator('enableBackupLog', ros.validateBoolean)(properties.enableBackupLog));
    if(properties.sqlCollectorStatus && (typeof properties.sqlCollectorStatus) !== 'object') {
        errors.collect(ros.propertyValidator('sqlCollectorStatus', ros.validateAllowedValues)({
          data: properties.sqlCollectorStatus,
          allowedValues: ["Enable","Disabled"],
        }));
    }
    errors.collect(ros.propertyValidator('sqlCollectorStatus', ros.validateString)(properties.sqlCollectorStatus));
    errors.collect(ros.propertyValidator('backupRetentionPeriod', ros.validateNumber)(properties.backupRetentionPeriod));
    return errors.wrap('supplied properties not correct for "RosPrepayDBInstanceProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::RDS::PrepayDBInstance` resource
 *
 * @param properties - the TypeScript properties of a `RosPrepayDBInstanceProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::RDS::PrepayDBInstance` resource.
 */
// @ts-ignore TS6133
function rosPrepayDBInstancePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosPrepayDBInstancePropsValidator(properties).assertSuccess();
    }
    return {
      CommodityCode: ros.stringToRosTemplate(properties.commodityCode),
      DBInstanceClass: ros.stringToRosTemplate(properties.dbInstanceClass),
      DBInstanceStorage: ros.numberToRosTemplate(properties.dbInstanceStorage),
      Engine: ros.stringToRosTemplate(properties.engine),
      EngineVersion: ros.stringToRosTemplate(properties.engineVersion),
      Period: ros.numberToRosTemplate(properties.period),
      PeriodType: ros.stringToRosTemplate(properties.periodType),
      AllocatePublicConnection: ros.booleanToRosTemplate(properties.allocatePublicConnection),
      ArchiveBackupKeepCount: ros.numberToRosTemplate(properties.archiveBackupKeepCount),
      ArchiveBackupKeepPolicy: ros.stringToRosTemplate(properties.archiveBackupKeepPolicy),
      ArchiveBackupRetentionPeriod: ros.numberToRosTemplate(properties.archiveBackupRetentionPeriod),
      AutoPay: ros.booleanToRosTemplate(properties.autoPay),
      AutoRenew: ros.booleanToRosTemplate(properties.autoRenew),
      BackUpCategory: ros.stringToRosTemplate(properties.backUpCategory),
      BackupPolicyMode: ros.stringToRosTemplate(properties.backupPolicyMode),
      BackupRetentionPeriod: ros.numberToRosTemplate(properties.backupRetentionPeriod),
      Category: ros.stringToRosTemplate(properties.category),
      CompressType: ros.numberToRosTemplate(properties.compressType),
      ConnectionMode: ros.stringToRosTemplate(properties.connectionMode),
      ConnectionStringPrefix: ros.stringToRosTemplate(properties.connectionStringPrefix),
      ConnectionStringType: ros.stringToRosTemplate(properties.connectionStringType),
      CouponCode: ros.stringToRosTemplate(properties.couponCode),
      DBInstanceDescription: ros.stringToRosTemplate(properties.dbInstanceDescription),
      DBInstanceNetType: ros.stringToRosTemplate(properties.dbInstanceNetType),
      DBInstanceStorageType: ros.stringToRosTemplate(properties.dbInstanceStorageType),
      DBIsIgnoreCase: ros.numberToRosTemplate(properties.dbIsIgnoreCase),
      DBMappings: ros.listMapper(rosPrepayDBInstanceDBMappingsPropertyToRosTemplate)(properties.dbMappings),
      DBParamGroupId: ros.stringToRosTemplate(properties.dbParamGroupId),
      DBTimeZone: ros.stringToRosTemplate(properties.dbTimeZone),
      DedicatedHostGroupId: ros.stringToRosTemplate(properties.dedicatedHostGroupId),
      EnableBackupLog: ros.booleanToRosTemplate(properties.enableBackupLog),
      EncryptionKey: ros.stringToRosTemplate(properties.encryptionKey),
      HighSpaceUsageProtection: ros.stringToRosTemplate(properties.highSpaceUsageProtection),
      LocalLogRetentionHours: ros.numberToRosTemplate(properties.localLogRetentionHours),
      LocalLogRetentionSpace: ros.numberToRosTemplate(properties.localLogRetentionSpace),
      LogBackupFrequency: ros.stringToRosTemplate(properties.logBackupFrequency),
      LogBackupLocalRetentionNumber: ros.numberToRosTemplate(properties.logBackupLocalRetentionNumber),
      LogBackupRetentionPeriod: ros.numberToRosTemplate(properties.logBackupRetentionPeriod),
      MaintainTime: ros.stringToRosTemplate(properties.maintainTime),
      MasterUsername: ros.stringToRosTemplate(properties.masterUsername),
      MasterUserPassword: ros.stringToRosTemplate(properties.masterUserPassword),
      MasterUserType: ros.stringToRosTemplate(properties.masterUserType),
      MultiAZ: ros.booleanToRosTemplate(properties.multiAz),
      Port: ros.numberToRosTemplate(properties.port),
      PreferredBackupPeriod: ros.listMapper(ros.objectToRosTemplate)(properties.preferredBackupPeriod),
      PreferredBackupTime: ros.stringToRosTemplate(properties.preferredBackupTime),
      PrivateIpAddress: ros.stringToRosTemplate(properties.privateIpAddress),
      Quantity: ros.numberToRosTemplate(properties.quantity),
      ReleasedKeepPolicy: ros.stringToRosTemplate(properties.releasedKeepPolicy),
      ResourceGroupId: ros.stringToRosTemplate(properties.resourceGroupId),
      RoleARN: ros.stringToRosTemplate(properties.roleArn),
      SecurityGroupId: ros.stringToRosTemplate(properties.securityGroupId),
      SlaveZoneIds: ros.listMapper(ros.stringToRosTemplate)(properties.slaveZoneIds),
      SQLCollectorStatus: ros.stringToRosTemplate(properties.sqlCollectorStatus),
      SSLSetting: ros.stringToRosTemplate(properties.sslSetting),
      Tags: ros.hashMapper(ros.objectToRosTemplate)(properties.tags),
      TargetDedicatedHostIdForLog: ros.stringToRosTemplate(properties.targetDedicatedHostIdForLog),
      TargetDedicatedHostIdForMaster: ros.stringToRosTemplate(properties.targetDedicatedHostIdForMaster),
      TargetDedicatedHostIdForSlave: ros.stringToRosTemplate(properties.targetDedicatedHostIdForSlave),
      VpcId: ros.stringToRosTemplate(properties.vpcId),
      VSwitchId: ros.stringToRosTemplate(properties.vSwitchId),
      ZoneId: ros.stringToRosTemplate(properties.zoneId),
    };
}

/**
 * A ROS template type:  `ALIYUN::RDS::PrepayDBInstance`
 */
export class RosPrepayDBInstance extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::RDS::PrepayDBInstance";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute DBInstanceId: The instance id of created database instance.
     */
    public readonly attrDbInstanceId: ros.IResolvable;

    /**
     * @Attribute InnerConnectionString: DB instance connection url by Intranet.
     */
    public readonly attrInnerConnectionString: ros.IResolvable;

    /**
     * @Attribute InnerIPAddress: IP Address for created DB instance of Intranet.
     */
    public readonly attrInnerIpAddress: ros.IResolvable;

    /**
     * @Attribute InnerPort: Intranet port of created DB instance.
     */
    public readonly attrInnerPort: ros.IResolvable;

    /**
     * @Attribute OrderId: The order id list of created instance.
     */
    public readonly attrOrderId: ros.IResolvable;

    /**
     * @Attribute PublicConnectionString: DB instance connection url by Internet.
     */
    public readonly attrPublicConnectionString: ros.IResolvable;

    /**
     * @Attribute PublicIPAddress: IP Address for created DB instance of Internet.
     */
    public readonly attrPublicIpAddress: ros.IResolvable;

    /**
     * @Attribute PublicPort: Internet port of created DB instance.
     */
    public readonly attrPublicPort: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property commodityCode: The CommodityCode of the order.
     */
    public commodityCode: string | ros.IResolvable;

    /**
     * @Property dbInstanceClass: Database instance type. Refer the RDS database instance type reference, such as 'rds.mys2.large', 'rds.mss1.large', 'rds.pg.s1.small' etc
     */
    public dbInstanceClass: string | ros.IResolvable;

    /**
     * @Property dbInstanceStorage: Database instance storage size. mysql is [5,1000]. sql server 2008r2 is [10,1000], sql server 2012/2012_web/2016-web is [20,1000]. PostgreSQL and PPAS is [5,2000]. Increased every 5 GB, Unit in GB
     */
    public dbInstanceStorage: number | ros.IResolvable;

    /**
     * @Property engine: Database instance engine type. Support MySQL/SQLServer/PostgreSQL/PPAS/MariaDB now.
     */
    public engine: string | ros.IResolvable;

    /**
     * @Property engineVersion: Database instance version of the relative engine type.Support MySQL: 5.5/5.6/5.7/8.0;
     * SQLServer: 2008r2/2012/2012_ent_ha/2012_std_ha/2012_web/2016_ent_ha/2016_std_ha/2016_web/2017_std_ha/2017_ent;
     * PostgreSQL: 9.4/10.0/11.0/12.0;
     * PPAS: 9.3/10.0;
     * MariaDB: 10.3.
     */
    public engineVersion: string | ros.IResolvable;

    /**
     * @Property period: Prepaid time period. While choose by pay by month, it could be from 1 to 9. While choose pay by year, it could be from 1 to 3.
     */
    public period: number | ros.IResolvable;

    /**
     * @Property periodType: Charge period for created instances.
     */
    public periodType: string | ros.IResolvable;

    /**
     * @Property allocatePublicConnection: If true, allocate public connection automate.
     */
    public allocatePublicConnection: boolean | ros.IResolvable | undefined;

    /**
     * @Property archiveBackupKeepCount: The number of archived backups that can be retained. Default value: 1. Valid values: 
     * The value of this parameter ranges from 1 to 31 when the ArchiveBackupKeepPolicy 
     *  parameter is set to ByMonth. 
     * The value of this parameter ranges from 1 to 7 when the ArchiveBackupKeepPolicy 
     *  parameter is set to ByWeek. 
     * Note You do not need to specify this parameter when the ArchiveBackupKeepPolicy 
     * parameter is set to KeepAll.
     */
    public archiveBackupKeepCount: number | ros.IResolvable | undefined;

    /**
     * @Property archiveBackupKeepPolicy: The period for which to retain archived backups. The number of archived backups that can 
     *  be retained within the specified period is determined by the ArchiveBackupKeepCount parameter. 
     *  Default value: 0. Valid values: 
     * ByMonth 
     *  ByWeek 
     *  KeepAll
     */
    public archiveBackupKeepPolicy: string | ros.IResolvable | undefined;

    /**
     * @Property archiveBackupRetentionPeriod: The number of days for which to retain archived backups. 
     *  The default value 0 specifies not to enable the backup archiving function. Valid values: 30 to 1095.
     */
    public archiveBackupRetentionPeriod: number | ros.IResolvable | undefined;

    /**
     * @Property autoPay: Automatic Payment. Default is false.
     */
    public autoPay: boolean | ros.IResolvable | undefined;

    /**
     * @Property autoRenew: Auto renew the prepay instance. If the period type is by year, it will renew by year, else it will renew by month.
     */
    public autoRenew: boolean | ros.IResolvable | undefined;

    /**
     * @Property backUpCategory: Specifies whether to enable the second-level backup function. This function allows a backup 
     * to be completed within seconds. Valid values: 
     * Flash: specifies to enable the second-level backup function. 
     *  Standard: specifies to disable the second-level backup function.
     */
    public backUpCategory: string | ros.IResolvable | undefined;

    /**
     * @Property backupPolicyMode: Backup type, 
     * DataBackupPolicy: data backup 
     * LogBackupPolicy: log backup
     */
    public backupPolicyMode: string | ros.IResolvable | undefined;

    /**
     * @Property backupRetentionPeriod: The retention period of the data backup. Value range: 7 to 730. The default value is the original value. Note When the BackupPolicyMode parameter is set to LogBackupPolicy, this parameter is required.
     */
    public backupRetentionPeriod: number | ros.IResolvable | undefined;

    /**
     * @Property category: The edition of the instance. Valid values:
     * Basic: specifies to use the Basic Edition.
     * HighAvailability: specifies to use the High-availability Edition.
     * AlwaysOn: specifies to use the Cluster Edition.
     * Finance: specifies to use the Enterprise Edition.
     */
    public category: string | ros.IResolvable | undefined;

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
    public compressType: number | ros.IResolvable | undefined;

    /**
     * @Property connectionMode: Connection Mode for database instance,support 'Standard' and 'Safe' mode. Default is RDS system assigns.
     */
    public connectionMode: string | ros.IResolvable | undefined;

    /**
     * @Property connectionStringPrefix: The prefix of the endpoint. 
     * Only the prefix of the CurrentConnectionString parameter value can be modified.
     * The prefix must be 8 to 64 characters in length and can contain letters, digits, and hyphens (-).
     */
    public connectionStringPrefix: string | ros.IResolvable | undefined;

    /**
     * @Property connectionStringType: The endpoint type of the instance, allow values: Inner, Public
     */
    public connectionStringType: string | ros.IResolvable | undefined;

    /**
     * @Property couponCode: The coupon code of the order.
     */
    public couponCode: string | ros.IResolvable | undefined;

    /**
     * @Property dbInstanceDescription: Description of created database instance.
     */
    public dbInstanceDescription: string | ros.IResolvable | undefined;

    /**
     * @Property dbInstanceNetType: Database instance net type, default is Intranet.Internet for public access, Intranet for private access.
     */
    public dbInstanceNetType: string | ros.IResolvable | undefined;

    /**
     * @Property dbInstanceStorageType: The storage type of the instance. Valid values:
     * local_ssd: specifies to use local SSDs. This is the recommended storage type.
     * cloud_ssd: specifies to use standard SSDs.
     * cloud_essd: enhanced SSD of performance level (PL)1.
     * cloud_essd2: enhanced SSD of PL2.
     * cloud_essd3: enhanced SSD of PL3.
     */
    public dbInstanceStorageType: string | ros.IResolvable | undefined;

    /**
     * @Property dbIsIgnoreCase: Specifies whether table names are case-sensitive. Valid values:
     * 1: Table names are not case-sensitive. This is the default value.
     * 0: Table names are case-sensitive.
     */
    public dbIsIgnoreCase: number | ros.IResolvable | undefined;

    /**
     * @Property dbMappings: Database mappings to attach to db instance.
     */
    public dbMappings: Array<RosPrepayDBInstance.DBMappingsProperty | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property dbParamGroupId: The ID of the parameter template used by the instance.
     */
    public dbParamGroupId: string | ros.IResolvable | undefined;

    /**
     * @Property dbTimeZone: The UTC time zone of the instance. Valid values: -12:00 to +12:00. The time zone must be an integer value such as +08:00. Values such as +08:30 are not allowed.
     */
    public dbTimeZone: string | ros.IResolvable | undefined;

    /**
     * @Property dedicatedHostGroupId: The ID of the host group to which the instance belongs if you create an instance in a host group.
     */
    public dedicatedHostGroupId: string | ros.IResolvable | undefined;

    /**
     * @Property enableBackupLog: Specifies whether to enable the log backup function. Valid values: 
     * True: specifies to enable the log backup function. 
     * False: specifies to disable the log backup function. 
     * Note You must specify this parameter when the BackupPolicyMode parameter is set to LogBackupPolicy.
     */
    public enableBackupLog: boolean | ros.IResolvable | undefined;

    /**
     * @Property encryptionKey: The ID of the encryption key that is used to encrypt data on SSDs in the region. You can view the encryption key ID in the Key Management Service (KMS) console. You can also create an encryption key.
     */
    public encryptionKey: string | ros.IResolvable | undefined;

    /**
     * @Property highSpaceUsageProtection: Specifies whether to forcibly delete log backup files when the space usage of the 
     *  instance exceeds 80% or the remaining space is less than 5 GB. Valid values: 
     *  Enable and Disable. You can retain the default value. Note You must specify 
     *  this parameter when the BackupPolicyMode parameter is set to LogBackupPolicy.
     */
    public highSpaceUsageProtection: string | ros.IResolvable | undefined;

    /**
     * @Property localLogRetentionHours: The number of hours for which to retain log backup files on the instance. 
     * Valid values: 0 to 168. The value 0 specifies not to retain log backup files on the instance. 
     * You can retain the default value. Note You must specify this parameter when the BackupPolicyMode 
     * parameter is set to LogBackupPolicy.
     */
    public localLogRetentionHours: number | ros.IResolvable | undefined;

    /**
     * @Property localLogRetentionSpace: The maximum percentage of space that is allowed to store log backup files on the instance. 
     *  If the space usage for log backup files exceeds this percentage, the system deletes earlier 
     *  log backup files until the space usage falls below this percentage. Valid values:0 to 50. 
     *  You can retain the default value. Note You must specify this parameter when the 
     *  BackupPolicyMode parameter is set to LogBackupPolicy.
     */
    public localLogRetentionSpace: number | ros.IResolvable | undefined;

    /**
     * @Property logBackupFrequency: The frequency at which to back up logs. Valid values: 
     * The value LogInterval specifies to back up logs every 30 minutes. 
     *  The default value of this parameter is the same as the data backup frequency. 
     * Note The value LogInterval is supported only when the instance runs SQL Server.
     */
    public logBackupFrequency: string | ros.IResolvable | undefined;

    /**
     * @Property logBackupLocalRetentionNumber: The number of log backup files that can be retained on the instance. 
     * Default value: 60. Valid values: 6 to 100.
     */
    public logBackupLocalRetentionNumber: number | ros.IResolvable | undefined;

    /**
     * @Property logBackupRetentionPeriod: The number of days for which to retain log backup files. Valid values: 7 to 730. The log backup 
     *  retention period cannot be longer than the data backup retention period.Note If you enable the log 
     *  backup function, you can specify the log backup retention period. This applies only when the 
     *  instance runs MySQL, PostgreSQL, or PPAS.
     */
    public logBackupRetentionPeriod: number | ros.IResolvable | undefined;

    /**
     * @Property maintainTime: The period during which the maintenance performs. The format is HH:mmZ-HH:mmZ.
     */
    public maintainTime: string | ros.IResolvable | undefined;

    /**
     * @Property masterUsername: The master user name for the database instance.
     */
    public masterUsername: string | ros.IResolvable | undefined;

    /**
     * @Property masterUserPassword: The master password for the database instance.
     */
    public masterUserPassword: string | ros.IResolvable | undefined;

    /**
     * @Property masterUserType: Privilege type of account.
     *  Normal: Common privilege. 
     *  Super: High privilege. 
     * Sysadmin: Super privileges (SA) (only supported by SQL Server)
     * The default value is Normal.
     */
    public masterUserType: string | ros.IResolvable | undefined;

    /**
     * @Property multiAz: Specifies if the database instance is a multiple Availability Zone deployment.
     */
    public multiAz: boolean | ros.IResolvable | undefined;

    /**
     * @Property port: The port of the database service.
     */
    public port: number | ros.IResolvable | undefined;

    /**
     * @Property preferredBackupPeriod: The backup period. Separate multiple values with commas (,). The default value is the original value. Valid values:Monday Tuesday Wednesday Thursday Friday Saturday Sunday Note When the BackupPolicyMode parameter is set to DataBackupPolicy, this parameter is required.
     */
    public preferredBackupPeriod: Array<any | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property preferredBackupTime: The time when the backup task is performed. Format: yyyy-MM-ddZ-HH:mm:ssZ.Note When the BackupPolicyMode parameter is set to DataBackupPolicy, this parameter is required.
     */
    public preferredBackupTime: string | ros.IResolvable | undefined;

    /**
     * @Property privateIpAddress: The private ip for created instance.
     */
    public privateIpAddress: string | ros.IResolvable | undefined;

    /**
     * @Property quantity: The number of instance to be created, default is 1, max number is 99
     */
    public quantity: number | ros.IResolvable | undefined;

    /**
     * @Property releasedKeepPolicy: The policy used to retain archived backups if the instance is released. Default value: None. 
     *  Valid values: 
     * Lastest: Only the last archived backup is retained. 
     *  All: All of the archived backups are retained.
     */
    public releasedKeepPolicy: string | ros.IResolvable | undefined;

    /**
     * @Property resourceGroupId: Resource group id.
     */
    public resourceGroupId: string | ros.IResolvable | undefined;

    /**
     * @Property roleArn: The Alibaba Cloud Resource Name (ARN) provided to the service account of the instance by your Alibaba Cloud account to connect to KMS. You can copy the ARN from the RAM console.
     */
    public roleArn: string | ros.IResolvable | undefined;

    /**
     * @Property securityGroupId: The ID of the ECS security groups. 
     * Each RDS instance can be associated with up to three ECS security groups. 
     * You must separate them with commas (,). 
     * To delete an ECS Security group, leave this parameter empty. 
     *
     */
    public securityGroupId: string | ros.IResolvable | undefined;

    /**
     * @Property slaveZoneIds: List of slave zone ids can specify slave zone ids when creating the high-availability or enterprise edition instance. Meanwhile, VSwitchId needs to pass in the corresponding vswitch id to the slave zone by order. For example, ZoneId = "zone-a" and SlaveZoneIds = ["zone-c", "zone-b"], then the VSwitchId must be "vsw-zone-a,vsw-zone-c,vsw-zone-b".
     */
    public slaveZoneIds: Array<string | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property sqlCollectorStatus: Specifies whether to enable or disable the SQL Explorer (SQL audit) feature. 
     * Valid values:Enable | Disabled.
     */
    public sqlCollectorStatus: string | ros.IResolvable | undefined;

    /**
     * @Property sslSetting: Secure Sockets Layer (SSL) link setting of the instance. Valid values:
     * Disabled: Disable SSL
     * EnabledForPublicConnection: Public connection address will be protected by the SSL certificate. It requires AllocatePublicConnection is true.
     * EnabledForInnerConnection: Private connection address will be protected by the SSL certificate.
     * Default value is Disabled.
     */
    public sslSetting: string | ros.IResolvable | undefined;

    /**
     * @Property tags: The tags of an instance.
     * You should input the information of the tag with the format of the Key-Value, such as {"key1":"value1","key2":"value2", ... "key5":"value5"}.
     * At most 5 tags can be specified.
     * Key
     * It can be up to 64 characters in length.
     * Cannot begin with aliyun.
     * Cannot begin with http:// or https://.
     * Cannot be a null string.
     * Value
     * It can be up to 128 characters in length.
     * Cannot begin with aliyun.
     * Cannot begin with http:// or https://.
     * Can be a null string.
     */
    public tags: { [key: string]: (any) } | undefined;

    /**
     * @Property targetDedicatedHostIdForLog: The ID of the host to which the instance belongs if you create a log instance in a host group.
     */
    public targetDedicatedHostIdForLog: string | ros.IResolvable | undefined;

    /**
     * @Property targetDedicatedHostIdForMaster: The ID of the host to which the instance belongs if you create a primary instance in a host group.
     */
    public targetDedicatedHostIdForMaster: string | ros.IResolvable | undefined;

    /**
     * @Property targetDedicatedHostIdForSlave: The ID of the host to which the instance belongs if you create a secondary instance in a host group.
     */
    public targetDedicatedHostIdForSlave: string | ros.IResolvable | undefined;

    /**
     * @Property vpcId: The VPC id of created database instance. For VPC network, the property is required.
     */
    public vpcId: string | ros.IResolvable | undefined;

    /**
     * @Property vSwitchId: The vSwitch id of created instance. For VPC network, the property is required.
     */
    public vSwitchId: string | ros.IResolvable | undefined;

    /**
     * @Property zoneId: selected zone to create database instance. You cannot set the ZoneId parameter if the MultiAZ parameter is set to true.
     */
    public zoneId: string | ros.IResolvable | undefined;

    /**
     * Create a new `ALIYUN::RDS::PrepayDBInstance`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosPrepayDBInstanceProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosPrepayDBInstance.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrDbInstanceId = this.getAtt('DBInstanceId');
        this.attrInnerConnectionString = this.getAtt('InnerConnectionString');
        this.attrInnerIpAddress = this.getAtt('InnerIPAddress');
        this.attrInnerPort = this.getAtt('InnerPort');
        this.attrOrderId = this.getAtt('OrderId');
        this.attrPublicConnectionString = this.getAtt('PublicConnectionString');
        this.attrPublicIpAddress = this.getAtt('PublicIPAddress');
        this.attrPublicPort = this.getAtt('PublicPort');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.commodityCode = props.commodityCode;
        this.dbInstanceClass = props.dbInstanceClass;
        this.dbInstanceStorage = props.dbInstanceStorage;
        this.engine = props.engine;
        this.engineVersion = props.engineVersion;
        this.period = props.period;
        this.periodType = props.periodType;
        this.allocatePublicConnection = props.allocatePublicConnection;
        this.archiveBackupKeepCount = props.archiveBackupKeepCount;
        this.archiveBackupKeepPolicy = props.archiveBackupKeepPolicy;
        this.archiveBackupRetentionPeriod = props.archiveBackupRetentionPeriod;
        this.autoPay = props.autoPay;
        this.autoRenew = props.autoRenew;
        this.backUpCategory = props.backUpCategory;
        this.backupPolicyMode = props.backupPolicyMode;
        this.backupRetentionPeriod = props.backupRetentionPeriod;
        this.category = props.category;
        this.compressType = props.compressType;
        this.connectionMode = props.connectionMode;
        this.connectionStringPrefix = props.connectionStringPrefix;
        this.connectionStringType = props.connectionStringType;
        this.couponCode = props.couponCode;
        this.dbInstanceDescription = props.dbInstanceDescription;
        this.dbInstanceNetType = props.dbInstanceNetType;
        this.dbInstanceStorageType = props.dbInstanceStorageType;
        this.dbIsIgnoreCase = props.dbIsIgnoreCase;
        this.dbMappings = props.dbMappings;
        this.dbParamGroupId = props.dbParamGroupId;
        this.dbTimeZone = props.dbTimeZone;
        this.dedicatedHostGroupId = props.dedicatedHostGroupId;
        this.enableBackupLog = props.enableBackupLog;
        this.encryptionKey = props.encryptionKey;
        this.highSpaceUsageProtection = props.highSpaceUsageProtection;
        this.localLogRetentionHours = props.localLogRetentionHours;
        this.localLogRetentionSpace = props.localLogRetentionSpace;
        this.logBackupFrequency = props.logBackupFrequency;
        this.logBackupLocalRetentionNumber = props.logBackupLocalRetentionNumber;
        this.logBackupRetentionPeriod = props.logBackupRetentionPeriod;
        this.maintainTime = props.maintainTime;
        this.masterUsername = props.masterUsername;
        this.masterUserPassword = props.masterUserPassword;
        this.masterUserType = props.masterUserType;
        this.multiAz = props.multiAz;
        this.port = props.port;
        this.preferredBackupPeriod = props.preferredBackupPeriod;
        this.preferredBackupTime = props.preferredBackupTime;
        this.privateIpAddress = props.privateIpAddress;
        this.quantity = props.quantity;
        this.releasedKeepPolicy = props.releasedKeepPolicy;
        this.resourceGroupId = props.resourceGroupId;
        this.roleArn = props.roleArn;
        this.securityGroupId = props.securityGroupId;
        this.slaveZoneIds = props.slaveZoneIds;
        this.sqlCollectorStatus = props.sqlCollectorStatus;
        this.sslSetting = props.sslSetting;
        this.tags = props.tags;
        this.targetDedicatedHostIdForLog = props.targetDedicatedHostIdForLog;
        this.targetDedicatedHostIdForMaster = props.targetDedicatedHostIdForMaster;
        this.targetDedicatedHostIdForSlave = props.targetDedicatedHostIdForSlave;
        this.vpcId = props.vpcId;
        this.vSwitchId = props.vSwitchId;
        this.zoneId = props.zoneId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            commodityCode: this.commodityCode,
            dbInstanceClass: this.dbInstanceClass,
            dbInstanceStorage: this.dbInstanceStorage,
            engine: this.engine,
            engineVersion: this.engineVersion,
            period: this.period,
            periodType: this.periodType,
            allocatePublicConnection: this.allocatePublicConnection,
            archiveBackupKeepCount: this.archiveBackupKeepCount,
            archiveBackupKeepPolicy: this.archiveBackupKeepPolicy,
            archiveBackupRetentionPeriod: this.archiveBackupRetentionPeriod,
            autoPay: this.autoPay,
            autoRenew: this.autoRenew,
            backUpCategory: this.backUpCategory,
            backupPolicyMode: this.backupPolicyMode,
            backupRetentionPeriod: this.backupRetentionPeriod,
            category: this.category,
            compressType: this.compressType,
            connectionMode: this.connectionMode,
            connectionStringPrefix: this.connectionStringPrefix,
            connectionStringType: this.connectionStringType,
            couponCode: this.couponCode,
            dbInstanceDescription: this.dbInstanceDescription,
            dbInstanceNetType: this.dbInstanceNetType,
            dbInstanceStorageType: this.dbInstanceStorageType,
            dbIsIgnoreCase: this.dbIsIgnoreCase,
            dbMappings: this.dbMappings,
            dbParamGroupId: this.dbParamGroupId,
            dbTimeZone: this.dbTimeZone,
            dedicatedHostGroupId: this.dedicatedHostGroupId,
            enableBackupLog: this.enableBackupLog,
            encryptionKey: this.encryptionKey,
            highSpaceUsageProtection: this.highSpaceUsageProtection,
            localLogRetentionHours: this.localLogRetentionHours,
            localLogRetentionSpace: this.localLogRetentionSpace,
            logBackupFrequency: this.logBackupFrequency,
            logBackupLocalRetentionNumber: this.logBackupLocalRetentionNumber,
            logBackupRetentionPeriod: this.logBackupRetentionPeriod,
            maintainTime: this.maintainTime,
            masterUsername: this.masterUsername,
            masterUserPassword: this.masterUserPassword,
            masterUserType: this.masterUserType,
            multiAz: this.multiAz,
            port: this.port,
            preferredBackupPeriod: this.preferredBackupPeriod,
            preferredBackupTime: this.preferredBackupTime,
            privateIpAddress: this.privateIpAddress,
            quantity: this.quantity,
            releasedKeepPolicy: this.releasedKeepPolicy,
            resourceGroupId: this.resourceGroupId,
            roleArn: this.roleArn,
            securityGroupId: this.securityGroupId,
            slaveZoneIds: this.slaveZoneIds,
            sqlCollectorStatus: this.sqlCollectorStatus,
            sslSetting: this.sslSetting,
            tags: this.tags,
            targetDedicatedHostIdForLog: this.targetDedicatedHostIdForLog,
            targetDedicatedHostIdForMaster: this.targetDedicatedHostIdForMaster,
            targetDedicatedHostIdForSlave: this.targetDedicatedHostIdForSlave,
            vpcId: this.vpcId,
            vSwitchId: this.vSwitchId,
            zoneId: this.zoneId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosPrepayDBInstancePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosPrepayDBInstance {
    /**
     * @stability external
     */
    export interface DBMappingsProperty {
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
/**
 * Determine whether the given properties match those of a `DBMappingsProperty`
 *
 * @param properties - the TypeScript properties of a `DBMappingsProperty`
 *
 * @returns the result of the validation.
 */
function RosPrepayDBInstance_DBMappingsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('characterSetName', ros.requiredValidator)(properties.characterSetName));
    errors.collect(ros.propertyValidator('characterSetName', ros.validateString)(properties.characterSetName));
    if(properties.dbDescription && (Array.isArray(properties.dbDescription) || (typeof properties.dbDescription) === 'string')) {
        errors.collect(ros.propertyValidator('dbDescription', ros.validateLength)({
            data: properties.dbDescription.length,
            min: undefined,
            max: 256,
          }));
    }
    errors.collect(ros.propertyValidator('dbDescription', ros.validateString)(properties.dbDescription));
    errors.collect(ros.propertyValidator('dbName', ros.requiredValidator)(properties.dbName));
    errors.collect(ros.propertyValidator('dbName', ros.validateString)(properties.dbName));
    return errors.wrap('supplied properties not correct for "DBMappingsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::RDS::PrepayDBInstance.DBMappings` resource
 *
 * @param properties - the TypeScript properties of a `DBMappingsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::RDS::PrepayDBInstance.DBMappings` resource.
 */
// @ts-ignore TS6133
function rosPrepayDBInstanceDBMappingsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosPrepayDBInstance_DBMappingsPropertyValidator(properties).assertSuccess();
    return {
      CharacterSetName: ros.stringToRosTemplate(properties.characterSetName),
      DBDescription: ros.stringToRosTemplate(properties.dbDescription),
      DBName: ros.stringToRosTemplate(properties.dbName),
    };
}

/**
 * Properties for defining a `ALIYUN::RDS::ReadOnlyDBInstance`
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
     * @Property payType: The billing method. Valid value: Postpaid, Prepaid.
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
     * Cannot begin with http:// or https://.
     * Cannot be a null string.
     * Value
     * It can be up to 128 characters in length.
     * Cannot begin with aliyun.
     * Cannot begin with http:// or https://.
     * Can be a null string.
     */
    readonly tags?: { [key: string]: (any) };

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
 * Determine whether the given properties match those of a `RosReadOnlyDBInstanceProps`
 *
 * @param properties - the TypeScript properties of a `RosReadOnlyDBInstanceProps`
 *
 * @returns the result of the validation.
 */
function RosReadOnlyDBInstancePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.periodType && (typeof properties.periodType) !== 'object') {
        errors.collect(ros.propertyValidator('periodType', ros.validateAllowedValues)({
          data: properties.periodType,
          allowedValues: ["Month","Year"],
        }));
    }
    errors.collect(ros.propertyValidator('periodType', ros.validateString)(properties.periodType));
    if(properties.category && (typeof properties.category) !== 'object') {
        errors.collect(ros.propertyValidator('category', ros.validateAllowedValues)({
          data: properties.category,
          allowedValues: ["Basic","HighAvailability","AlwaysOn","Finance"],
        }));
    }
    errors.collect(ros.propertyValidator('category', ros.validateString)(properties.category));
    errors.collect(ros.propertyValidator('engineVersion', ros.requiredValidator)(properties.engineVersion));
    errors.collect(ros.propertyValidator('engineVersion', ros.validateString)(properties.engineVersion));
    errors.collect(ros.propertyValidator('privateIpAddress', ros.validateString)(properties.privateIpAddress));
    errors.collect(ros.propertyValidator('zoneId', ros.requiredValidator)(properties.zoneId));
    errors.collect(ros.propertyValidator('zoneId', ros.validateString)(properties.zoneId));
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    errors.collect(ros.propertyValidator('vpcId', ros.validateString)(properties.vpcId));
    errors.collect(ros.propertyValidator('dbInstanceClass', ros.requiredValidator)(properties.dbInstanceClass));
    errors.collect(ros.propertyValidator('dbInstanceClass', ros.validateString)(properties.dbInstanceClass));
    errors.collect(ros.propertyValidator('vSwitchId', ros.validateString)(properties.vSwitchId));
    errors.collect(ros.propertyValidator('autoRenew', ros.validateBoolean)(properties.autoRenew));
    if(properties.period && (typeof properties.period) !== 'object') {
        errors.collect(ros.propertyValidator('period', ros.validateAllowedValues)({
          data: properties.period,
          allowedValues: [1,2,3,4,5,6,7,8,9,10,11,12,24,36,48,60],
        }));
    }
    errors.collect(ros.propertyValidator('period', ros.validateNumber)(properties.period));
    if(properties.payType && (typeof properties.payType) !== 'object') {
        errors.collect(ros.propertyValidator('payType', ros.validateAllowedValues)({
          data: properties.payType,
          allowedValues: ["Prepaid","Postpaid"],
        }));
    }
    errors.collect(ros.propertyValidator('payType', ros.validateString)(properties.payType));
    errors.collect(ros.propertyValidator('dbInstanceStorageType', ros.validateString)(properties.dbInstanceStorageType));
    errors.collect(ros.propertyValidator('dbInstanceId', ros.requiredValidator)(properties.dbInstanceId));
    errors.collect(ros.propertyValidator('dbInstanceId', ros.validateString)(properties.dbInstanceId));
    errors.collect(ros.propertyValidator('dbInstanceStorage', ros.requiredValidator)(properties.dbInstanceStorage));
    errors.collect(ros.propertyValidator('dbInstanceStorage', ros.validateNumber)(properties.dbInstanceStorage));
    errors.collect(ros.propertyValidator('dbInstanceDescription', ros.validateString)(properties.dbInstanceDescription));
    errors.collect(ros.propertyValidator('tags', ros.hashValidator(ros.validateAny))(properties.tags));
    return errors.wrap('supplied properties not correct for "RosReadOnlyDBInstanceProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::RDS::ReadOnlyDBInstance` resource
 *
 * @param properties - the TypeScript properties of a `RosReadOnlyDBInstanceProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::RDS::ReadOnlyDBInstance` resource.
 */
// @ts-ignore TS6133
function rosReadOnlyDBInstancePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosReadOnlyDBInstancePropsValidator(properties).assertSuccess();
    }
    return {
      DBInstanceClass: ros.stringToRosTemplate(properties.dbInstanceClass),
      DBInstanceId: ros.stringToRosTemplate(properties.dbInstanceId),
      DBInstanceStorage: ros.numberToRosTemplate(properties.dbInstanceStorage),
      EngineVersion: ros.stringToRosTemplate(properties.engineVersion),
      ZoneId: ros.stringToRosTemplate(properties.zoneId),
      AutoRenew: ros.booleanToRosTemplate(properties.autoRenew),
      Category: ros.stringToRosTemplate(properties.category),
      DBInstanceDescription: ros.stringToRosTemplate(properties.dbInstanceDescription),
      DBInstanceStorageType: ros.stringToRosTemplate(properties.dbInstanceStorageType),
      PayType: ros.stringToRosTemplate(properties.payType),
      Period: ros.numberToRosTemplate(properties.period),
      PeriodType: ros.stringToRosTemplate(properties.periodType),
      PrivateIpAddress: ros.stringToRosTemplate(properties.privateIpAddress),
      ResourceGroupId: ros.stringToRosTemplate(properties.resourceGroupId),
      Tags: ros.hashMapper(ros.objectToRosTemplate)(properties.tags),
      VPCId: ros.stringToRosTemplate(properties.vpcId),
      VSwitchId: ros.stringToRosTemplate(properties.vSwitchId),
    };
}

/**
 * A ROS template type:  `ALIYUN::RDS::ReadOnlyDBInstance`
 */
export class RosReadOnlyDBInstance extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::RDS::ReadOnlyDBInstance";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute ConnectionString: DB instance connection url by Intranet.
     */
    public readonly attrConnectionString: ros.IResolvable;

    /**
     * @Attribute DBInstanceId: The instance id of created database instance.
     */
    public readonly attrDbInstanceId: ros.IResolvable;

    /**
     * @Attribute Port: Intranet port of created DB instance.
     */
    public readonly attrPort: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property dbInstanceClass: The type of the instance. For more information, see Instance type list. The type of the read-only instance must be no less than that of the master instance. Otherwise, the read-only instance incurs high latency and high load.
     */
    public dbInstanceClass: string | ros.IResolvable;

    /**
     * @Property dbInstanceId: The ID of the master instance.
     */
    public dbInstanceId: string | ros.IResolvable;

    /**
     * @Property dbInstanceStorage: The storage space of the instance. Value range: 5 to 3000. The value must be a multiple of 5. Unit: GB.
     */
    public dbInstanceStorage: number | ros.IResolvable;

    /**
     * @Property engineVersion: The version of the database. The database and the master instance must have the same database version. Valid values: 5.6, 5.7, 8.0, 2017_ent, 2019_ent
     */
    public engineVersion: string | ros.IResolvable;

    /**
     * @Property zoneId: The ID of the zone. You can call the DescribeRegions API operation to view the latest zones.
     */
    public zoneId: string | ros.IResolvable;

    /**
     * @Property autoRenew: Specifies whether to enable auto-renewal. Valid values: true and false. Note
     * :Monthly subscription: The auto-renewal cycle is one month.
     * Annual subscription: The auto-renewal cycle is one year.
     */
    public autoRenew: boolean | ros.IResolvable | undefined;

    /**
     * @Property category: The RDS edition of the read-only instance. Valid values:
     * Basic: Basic Edition.
     * HighAvailability: High-availability Edition. This is the default value.
     * AlwaysOn: Cluster Edition.
     * Finance: Enterprise Edition. This edition is available only on the China site (aliyun.com).
     */
    public category: string | ros.IResolvable | undefined;

    /**
     * @Property dbInstanceDescription: Description of created database instance.
     */
    public dbInstanceDescription: string | ros.IResolvable | undefined;

    /**
     * @Property dbInstanceStorageType: The type of storage media that is used by the instance. Valid values:
     * local_ssd: local SSDs
     * cloud_ssd: standard SSDs
     * cloud_essd: ESSDs of performance level 1 (PL1)
     * cloud_essd2: ESSDs of PL2
     * cloud_essd3: ESSDs of PL3
     */
    public dbInstanceStorageType: string | ros.IResolvable | undefined;

    /**
     * @Property payType: The billing method. Valid value: Postpaid, Prepaid.
     */
    public payType: string | ros.IResolvable | undefined;

    /**
     * @Property period: The subscription duration. Valid values:
     * When PeriodType is Month, it could be from 1 to 12, 24, 36, 48, 60.
     *  When PeriodType is Year, it could be from 1 to 5.
     */
    public period: number | ros.IResolvable | undefined;

    /**
     * @Property periodType: Charge period for created instances.
     */
    public periodType: string | ros.IResolvable | undefined;

    /**
     * @Property privateIpAddress: The private IP address of the read-only instance. It must be within the IP address range provided by the switch. The system automatically assigns an IP address based on the VPCId and VSwitchId by default.
     */
    public privateIpAddress: string | ros.IResolvable | undefined;

    /**
     * @Property resourceGroupId: Resource group id.
     */
    public resourceGroupId: string | ros.IResolvable | undefined;

    /**
     * @Property tags: The tags of an instance.
     * You should input the information of the tag with the format of the Key-Value, such as {"key1":"value1","key2":"value2", ... "key5":"value5"}.
     * At most 5 tags can be specified.
     * Key
     * It can be up to 64 characters in length.
     * Cannot begin with aliyun.
     * Cannot begin with http:// or https://.
     * Cannot be a null string.
     * Value
     * It can be up to 128 characters in length.
     * Cannot begin with aliyun.
     * Cannot begin with http:// or https://.
     * Can be a null string.
     */
    public tags: { [key: string]: (any) } | undefined;

    /**
     * @Property vpcId: The ID of the VPC.
     */
    public vpcId: string | ros.IResolvable | undefined;

    /**
     * @Property vSwitchId: The ID of the VSwitch.
     */
    public vSwitchId: string | ros.IResolvable | undefined;

    /**
     * Create a new `ALIYUN::RDS::ReadOnlyDBInstance`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosReadOnlyDBInstanceProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosReadOnlyDBInstance.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrConnectionString = this.getAtt('ConnectionString');
        this.attrDbInstanceId = this.getAtt('DBInstanceId');
        this.attrPort = this.getAtt('Port');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.dbInstanceClass = props.dbInstanceClass;
        this.dbInstanceId = props.dbInstanceId;
        this.dbInstanceStorage = props.dbInstanceStorage;
        this.engineVersion = props.engineVersion;
        this.zoneId = props.zoneId;
        this.autoRenew = props.autoRenew;
        this.category = props.category;
        this.dbInstanceDescription = props.dbInstanceDescription;
        this.dbInstanceStorageType = props.dbInstanceStorageType;
        this.payType = props.payType;
        this.period = props.period;
        this.periodType = props.periodType;
        this.privateIpAddress = props.privateIpAddress;
        this.resourceGroupId = props.resourceGroupId;
        this.tags = props.tags;
        this.vpcId = props.vpcId;
        this.vSwitchId = props.vSwitchId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            dbInstanceClass: this.dbInstanceClass,
            dbInstanceId: this.dbInstanceId,
            dbInstanceStorage: this.dbInstanceStorage,
            engineVersion: this.engineVersion,
            zoneId: this.zoneId,
            autoRenew: this.autoRenew,
            category: this.category,
            dbInstanceDescription: this.dbInstanceDescription,
            dbInstanceStorageType: this.dbInstanceStorageType,
            payType: this.payType,
            period: this.period,
            periodType: this.periodType,
            privateIpAddress: this.privateIpAddress,
            resourceGroupId: this.resourceGroupId,
            tags: this.tags,
            vpcId: this.vpcId,
            vSwitchId: this.vSwitchId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosReadOnlyDBInstancePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
