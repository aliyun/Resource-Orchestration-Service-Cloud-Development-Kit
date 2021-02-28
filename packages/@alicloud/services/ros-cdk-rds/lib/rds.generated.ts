// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `ALIYUN::RDS::ADInfo`
 */
export interface RosADInfoProps {

    /**
     * @Property adAccountName: Domain account name.
     */
    readonly adAccountName: string;

    /**
     * @Property addns: Active directory domain name.
     */
    readonly addns: string;

    /**
     * @Property adPassword: Domain password.
     */
    readonly adPassword: string;

    /**
     * @Property adServerIpAddress: The IP address of the AD server, it must be in the same VPC as the RDS.
     */
    readonly adServerIpAddress: string;

    /**
     * @Property dbInstanceId: The ID of the instance.
     */
    readonly dbInstanceId: string;
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
    public readonly attrAddns: any;

    /**
     * @Attribute DBInstanceId: The ID of the instance.
     */
    public readonly attrDbInstanceId: any;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property adAccountName: Domain account name.
     */
    public adAccountName: string;

    /**
     * @Property addns: Active directory domain name.
     */
    public addns: string;

    /**
     * @Property adPassword: Domain password.
     */
    public adPassword: string;

    /**
     * @Property adServerIpAddress: The IP address of the AD server, it must be in the same VPC as the RDS.
     */
    public adServerIpAddress: string;

    /**
     * @Property dbInstanceId: The ID of the instance.
     */
    public dbInstanceId: string;

    /**
     * Create a new `ALIYUN::RDS::ADInfo`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosADInfoProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosADInfo.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAddns = ros.Token.asString(this.getAtt('ADDNS'));
        this.attrDbInstanceId = ros.Token.asString(this.getAtt('DBInstanceId'));

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
    readonly accountName: string;

    /**
     * @Property accountPassword: The account password for the database instance. It may consist of letters, digits, or underlines, with a length of 8 to 32 characters.
     */
    readonly accountPassword: string;

    /**
     * @Property dbInstanceId: RDS instance ID.
     */
    readonly dbInstanceId: string;

    /**
     * @Property accountDescription: Account remarks.
     * It cannot begin with http:// or https://.
     * It must start with a Chinese character or English letter.
     * It can include Chinese and English characters/letters, underscores (_), hyphens (-), and digits.
     * The length may be 2-256 characters.
     */
    readonly accountDescription?: string;

    /**
     * @Property accountType: Privilege type of account.
     * Normal: Common privilege.
     * Super: High privilege. And the default value is Normal.
     * This parameter is valid for MySQL 5.5/5.6 only.
     * MySQL 5.7, SQL Server 2012/2016, PostgreSQL, and PPAS each can have only one initial account. Other accounts are created by the initial account that has logged on to the database.
     */
    readonly accountType?: string;
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
    public readonly attrAccountName: any;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property accountName: Account name, which must be unique and meet the following requirements:
     * Start with a letter;
     * Consist of lower-case letters, digits, and underscores (_);
     * Contain no more than 16 characters.
     * For other invalid characters, see Forbidden keywords table.
     */
    public accountName: string;

    /**
     * @Property accountPassword: The account password for the database instance. It may consist of letters, digits, or underlines, with a length of 8 to 32 characters.
     */
    public accountPassword: string;

    /**
     * @Property dbInstanceId: RDS instance ID.
     */
    public dbInstanceId: string;

    /**
     * @Property accountDescription: Account remarks.
     * It cannot begin with http:// or https://.
     * It must start with a Chinese character or English letter.
     * It can include Chinese and English characters/letters, underscores (_), hyphens (-), and digits.
     * The length may be 2-256 characters.
     */
    public accountDescription: string | undefined;

    /**
     * @Property accountType: Privilege type of account.
     * Normal: Common privilege.
     * Super: High privilege. And the default value is Normal.
     * This parameter is valid for MySQL 5.5/5.6 only.
     * MySQL 5.7, SQL Server 2012/2016, PostgreSQL, and PPAS each can have only one initial account. Other accounts are created by the initial account that has logged on to the database.
     */
    public accountType: string | undefined;

    /**
     * Create a new `ALIYUN::RDS::Account`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosAccountProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosAccount.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAccountName = ros.Token.asString(this.getAtt('AccountName'));

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
    readonly accountName: string;

    /**
     * @Property accountPrivilege: RDS account privilege
     */
    readonly accountPrivilege: string;

    /**
     * @Property dbInstanceId: RDS instance ID.
     */
    readonly dbInstanceId: string;

    /**
     * @Property dbName: RDS database name
     */
    readonly dbName: string;
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
    public accountName: string;

    /**
     * @Property accountPrivilege: RDS account privilege
     */
    public accountPrivilege: string;

    /**
     * @Property dbInstanceId: RDS instance ID.
     */
    public dbInstanceId: string;

    /**
     * @Property dbName: RDS database name
     */
    public dbName: string;

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
    readonly dbInstanceClass: string;

    /**
     * @Property dbInstanceStorage: Database instance storage size. mysql is [5,1000]. sql server 2008r2 is [10,1000], sql server 2012/2012_web/2016-web is [20,1000]. PostgreSQL and PPAS is [5,2000]. Increased every 5 GB, Unit in GB
     */
    readonly dbInstanceStorage: number;

    /**
     * @Property engine: Database instance engine type. Support MySQL/SQLServer/PostgreSQL/PPAS/MariaDB now.
     */
    readonly engine: string;

    /**
     * @Property engineVersion: Database instance version of the relative engine type.Support MySQL: 5.5/5.6/5.7/8.0;
     * SQLServer: 2008r2/2012/2012_ent_ha/2012_std_ha/2012_web/2016_ent_ha/2016_std_ha/2016_web/2017_std_ha/2017_ent;
     * PostgreSQL: 9.4/10.0/11.0/12.0;
     * PPAS: 9.3/10.0;
     * MariaDB: 10.3.
     */
    readonly engineVersion: string;

    /**
     * @Property securityIpList: Security ip to access the database instance, combine with comma, 0.0.0.0/0 means no limitation.
     */
    readonly securityIpList: string;

    /**
     * @Property allocatePublicConnection: If true, allocate public connection automate.
     */
    readonly allocatePublicConnection?: boolean | ros.IResolvable;

    /**
     * @Property backupRetentionPeriod: The retention period of the data backup. Value range: 7 to 730. The default value is the original value. Note When the BackupPolicyMode parameter is set to LogBackupPolicy, this parameter is required.
     */
    readonly backupRetentionPeriod?: number;

    /**
     * @Property category: The edition of the instance. Valid values:
     * Basic: specifies to use the Basic Edition.
     * HighAvailability: specifies to use the High-availability Edition.
     * AlwaysOn: specifies to use the Cluster Edition.
     * Finance: specifies to use the Enterprise Edition.
     */
    readonly category?: string;

    /**
     * @Property connectionMode: Connection Mode for database instance,support 'Standard' and 'Safe' mode. Default is RDS system assigns.
     */
    readonly connectionMode?: string;

    /**
     * @Property connectionStringPrefix: The prefix of the endpoint. 
     * Only the prefix of the CurrentConnectionString parameter value can be modified.
     * The prefix must be 8 to 64 characters in length and can contain letters, digits, and hyphens (-).
     */
    readonly connectionStringPrefix?: string;

    /**
     * @Property connectionStringType: The endpoint type of the instance, allow values: Inner, Public
     */
    readonly connectionStringType?: string;

    /**
     * @Property dbInstanceDescription: Description of created database instance.
     */
    readonly dbInstanceDescription?: string;

    /**
     * @Property dbInstanceNetType: Database instance net type, default is Intranet.Internet for public access, Intranet for private access.
     */
    readonly dbInstanceNetType?: string;

    /**
     * @Property dbInstanceStorageType: The storage type of the instance. Valid values:
     * local_ssd: specifies to use local SSDs. This is the recommended storage type.
     * cloud_ssd: specifies to use standard SSDs.
     * cloud_essd: specifies to use enhanced SSDs.
     */
    readonly dbInstanceStorageType?: string;

    /**
     * @Property dbIsIgnoreCase: Specifies whether table names are case-sensitive. Valid values:
     * 1: Table names are not case-sensitive. This is the default value.
     * 0: Table names are case-sensitive.
     */
    readonly dbIsIgnoreCase?: number;

    /**
     * @Property dbMappings: Database mappings to attach to db instance.
     */
    readonly dbMappings?: Array<RosDBInstance.DBMappingsProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property dbParamGroupId: The ID of the parameter template used by the instance.
     */
    readonly dbParamGroupId?: string;

    /**
     * @Property dbTimeZone: The UTC time zone of the instance. Valid values: -12:00 to +12:00. The time zone must be an integer value such as +08:00. Values such as +08:30 are not allowed.
     */
    readonly dbTimeZone?: string;

    /**
     * @Property dedicatedHostGroupId: The ID of the host group to which the instance belongs if you create an instance in a host group.
     */
    readonly dedicatedHostGroupId?: string;

    /**
     * @Property encryptionKey: The ID of the encryption key that is used to encrypt data on SSDs in the region. You can view the encryption key ID in the Key Management Service (KMS) console. You can also create an encryption key.
     */
    readonly encryptionKey?: string;

    /**
     * @Property maintainTime: The period during which the maintenance performs. The format is HH:mmZ-HH:mmZ.
     */
    readonly maintainTime?: string;

    /**
     * @Property masterUsername: The master user name for the database instance.
     */
    readonly masterUsername?: string;

    /**
     * @Property masterUserPassword: The master password for the database instance.
     */
    readonly masterUserPassword?: string;

    /**
     * @Property masterUserType: Privilege type of account.
     *  Normal: Common privilege. 
     *  Super: High privilege. 
     * Sysadmin: Super privileges (SA) (only supported by SQL Server)
     * The default value is Normal.
     */
    readonly masterUserType?: string;

    /**
     * @Property multiAz: Specifies if the database instance is a multiple Availability Zone deployment.
     */
    readonly multiAz?: boolean | ros.IResolvable;

    /**
     * @Property payType: The charge type of created instance.
     */
    readonly payType?: string;

    /**
     * @Property period: Prepaid time period. While choose by pay by month, it could be from 1 to 9. While choose pay by year, it could be from 1 to 3.
     */
    readonly period?: number;

    /**
     * @Property periodType: Charge period for created instances.
     */
    readonly periodType?: string;

    /**
     * @Property port: The port of the database service.
     */
    readonly port?: number;

    /**
     * @Property preferredBackupPeriod: The backup period. Separate multiple values with commas (,). The default value is the original value. Valid values:Monday Tuesday Wednesday Thursday Friday Saturday Sunday Note When the BackupPolicyMode parameter is set to DataBackupPolicy, this parameter is required.
     */
    readonly preferredBackupPeriod?: Array<any | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property preferredBackupTime: The time when the backup task is performed. Format: yyyy-MM-ddZ-HH:mm:ssZ.Note When the BackupPolicyMode parameter is set to DataBackupPolicy, this parameter is required.
     */
    readonly preferredBackupTime?: string;

    /**
     * @Property privateIpAddress: The private ip for created instance.
     */
    readonly privateIpAddress?: string;

    /**
     * @Property resourceGroupId: Resource group id.
     */
    readonly resourceGroupId?: string;

    /**
     * @Property roleArn: The Alibaba Cloud Resource Name (ARN) provided to the service account of the instance by your Alibaba Cloud account to connect to KMS. You can copy the ARN from the RAM console.
     */
    readonly roleArn?: string;

    /**
     * @Property securityGroupId: The ID of the ECS security groups. 
     * Each RDS instance can be associated with up to three ECS security groups. 
     * You must separate them with commas (,). 
     * To delete an ECS Security group, leave this parameter empty. 
     *
     */
    readonly securityGroupId?: string;

    /**
     * @Property slaveZoneIds: List of slave zone ids can specify slave zone ids when creating the high-availability or enterprise edition instance. Meanwhile, VSwitchId needs to pass in the corresponding vswitch id to the slave zone by order. For example, ZoneId = "zone-a" and SlaveZoneIds = ["zone-c", "zone-b"], then the VSwitchId must be "vsw-zone-a,vsw-zone-c,vsw-zone-b". Of course, you can also choose automatic allocation, for example, ZoneId = "zone-a" and SlaveZoneIds = ["Auto", "Auto"], then the VSwitchId must be "vsw-zone-a,Auto,Auto". The list contains up to 2 slave zone ids, separated by commas.
     */
    readonly slaveZoneIds?: string[];

    /**
     * @Property sqlCollectorStatus: Specifies whether to enable or disable the SQL Explorer (SQL audit) feature. 
     * Valid values:Enable | Disabled.
     */
    readonly sqlCollectorStatus?: string;

    /**
     * @Property sslSetting: Secure Sockets Layer (SSL) link setting of the instance. Valid values:
     * Disabled: Disable SSL
     * EnabledForPublicConnection: Public connection address will be protected by the SSL certificate. It requires AllocatePublicConnection is true.
     * EnabledForInnerConnection: Private connection address will be protected by the SSL certificate.
     * Default value is Disabled.
     */
    readonly sslSetting?: string;

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
    readonly tags?: ros.RosTag[];

    /**
     * @Property targetDedicatedHostIdForLog: The ID of the host to which the instance belongs if you create a log instance in a host group.
     */
    readonly targetDedicatedHostIdForLog?: string;

    /**
     * @Property targetDedicatedHostIdForMaster: The ID of the host to which the instance belongs if you create a primary instance in a host group.
     */
    readonly targetDedicatedHostIdForMaster?: string;

    /**
     * @Property targetDedicatedHostIdForSlave: The ID of the host to which the instance belongs if you create a secondary instance in a host group.
     */
    readonly targetDedicatedHostIdForSlave?: string;

    /**
     * @Property vpcId: The VPC id of created database instance. For VPC network, the property is required.
     */
    readonly vpcId?: string;

    /**
     * @Property vSwitchId: The vSwitch id of created instance. For VPC network, the property is required.
     */
    readonly vSwitchId?: string;

    /**
     * @Property zoneId: selected zone to create database instance. You cannot set the ZoneId parameter if the MultiAZ parameter is set to true.
     */
    readonly zoneId?: string;
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
    if(properties.category && (typeof properties.category) !== 'object') {
        errors.collect(ros.propertyValidator('category', ros.validateAllowedValues)({
          data: properties.category,
          allowedValues: ["Basic","HighAvailability","AlwaysOn","Finance"],
        }));
    }
    errors.collect(ros.propertyValidator('category', ros.validateString)(properties.category));
    errors.collect(ros.propertyValidator('privateIpAddress', ros.validateString)(properties.privateIpAddress));
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    errors.collect(ros.propertyValidator('targetDedicatedHostIdForSlave', ros.validateString)(properties.targetDedicatedHostIdForSlave));
    if(properties.dbInstanceNetType && (typeof properties.dbInstanceNetType) !== 'object') {
        errors.collect(ros.propertyValidator('dbInstanceNetType', ros.validateAllowedValues)({
          data: properties.dbInstanceNetType,
          allowedValues: ["Internet","Intranet"],
        }));
    }
    errors.collect(ros.propertyValidator('dbInstanceNetType', ros.validateString)(properties.dbInstanceNetType));
    errors.collect(ros.propertyValidator('dbTimeZone', ros.validateString)(properties.dbTimeZone));
    errors.collect(ros.propertyValidator('dedicatedHostGroupId', ros.validateString)(properties.dedicatedHostGroupId));
    if(properties.port && (typeof properties.port) !== 'object') {
        errors.collect(ros.propertyValidator('port', ros.validateRange)({
            data: properties.port,
            min: 1,
            max: 65535,
          }));
    }
    errors.collect(ros.propertyValidator('port', ros.validateNumber)(properties.port));
    errors.collect(ros.propertyValidator('encryptionKey', ros.validateString)(properties.encryptionKey));
    errors.collect(ros.propertyValidator('preferredBackupPeriod', ros.listValidator(ros.validateAny))(properties.preferredBackupPeriod));
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
    errors.collect(ros.propertyValidator('maintainTime', ros.validateString)(properties.maintainTime));
    errors.collect(ros.propertyValidator('engine', ros.requiredValidator)(properties.engine));
    if(properties.engine && (typeof properties.engine) !== 'object') {
        errors.collect(ros.propertyValidator('engine', ros.validateAllowedValues)({
          data: properties.engine,
          allowedValues: ["MySQL","SQLServer","PostgreSQL","PPAS","MariaDB"],
        }));
    }
    errors.collect(ros.propertyValidator('engine', ros.validateString)(properties.engine));
    errors.collect(ros.propertyValidator('tags', ros.listValidator(ros.validateRosTag))(properties.tags));
    errors.collect(ros.propertyValidator('dbParamGroupId', ros.validateString)(properties.dbParamGroupId));
    errors.collect(ros.propertyValidator('dbInstanceDescription', ros.validateString)(properties.dbInstanceDescription));
    errors.collect(ros.propertyValidator('targetDedicatedHostIdForMaster', ros.validateString)(properties.targetDedicatedHostIdForMaster));
    errors.collect(ros.propertyValidator('engineVersion', ros.requiredValidator)(properties.engineVersion));
    errors.collect(ros.propertyValidator('engineVersion', ros.validateString)(properties.engineVersion));
    errors.collect(ros.propertyValidator('zoneId', ros.validateString)(properties.zoneId));
    errors.collect(ros.propertyValidator('targetDedicatedHostIdForLog', ros.validateString)(properties.targetDedicatedHostIdForLog));
    errors.collect(ros.propertyValidator('dbInstanceClass', ros.requiredValidator)(properties.dbInstanceClass));
    errors.collect(ros.propertyValidator('dbInstanceClass', ros.validateString)(properties.dbInstanceClass));
    errors.collect(ros.propertyValidator('allocatePublicConnection', ros.validateBoolean)(properties.allocatePublicConnection));
    errors.collect(ros.propertyValidator('securityGroupId', ros.validateString)(properties.securityGroupId));
    errors.collect(ros.propertyValidator('preferredBackupTime', ros.validateString)(properties.preferredBackupTime));
    errors.collect(ros.propertyValidator('vSwitchId', ros.validateString)(properties.vSwitchId));
    if(properties.period && (typeof properties.period) !== 'object') {
        errors.collect(ros.propertyValidator('period', ros.validateRange)({
            data: properties.period,
            min: 1,
            max: 9,
          }));
    }
    errors.collect(ros.propertyValidator('period', ros.validateNumber)(properties.period));
    if(properties.payType && (typeof properties.payType) !== 'object') {
        errors.collect(ros.propertyValidator('payType', ros.validateAllowedValues)({
          data: properties.payType,
          allowedValues: ["Subscription","PrePaid","PrePay","Prepaid","PayAsYouGo","PostPaid","PayOnDemand","Postpaid"],
        }));
    }
    errors.collect(ros.propertyValidator('payType', ros.validateString)(properties.payType));
    errors.collect(ros.propertyValidator('dbInstanceStorageType', ros.validateString)(properties.dbInstanceStorageType));
    errors.collect(ros.propertyValidator('roleArn', ros.validateString)(properties.roleArn));
    if(properties.connectionStringType && (typeof properties.connectionStringType) !== 'object') {
        errors.collect(ros.propertyValidator('connectionStringType', ros.validateAllowedValues)({
          data: properties.connectionStringType,
          allowedValues: ["Inner","Public"],
        }));
    }
    errors.collect(ros.propertyValidator('connectionStringType', ros.validateString)(properties.connectionStringType));
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
    errors.collect(ros.propertyValidator('connectionMode', ros.validateString)(properties.connectionMode));
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
      BackupRetentionPeriod: ros.numberToRosTemplate(properties.backupRetentionPeriod),
      Category: ros.stringToRosTemplate(properties.category),
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
      EncryptionKey: ros.stringToRosTemplate(properties.encryptionKey),
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
      ResourceGroupId: ros.stringToRosTemplate(properties.resourceGroupId),
      RoleARN: ros.stringToRosTemplate(properties.roleArn),
      SecurityGroupId: ros.stringToRosTemplate(properties.securityGroupId),
      SlaveZoneIds: ros.listMapper(ros.stringToRosTemplate)(properties.slaveZoneIds),
      SQLCollectorStatus: ros.stringToRosTemplate(properties.sqlCollectorStatus),
      SSLSetting: ros.stringToRosTemplate(properties.sslSetting),
      Tags: ros.listMapper(ros.rosTagToRosTemplate)(properties.tags),
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
    public readonly attrDbInstanceId: any;

    /**
     * @Attribute InnerConnectionString: DB instance connection url by Intranet.
     */
    public readonly attrInnerConnectionString: any;

    /**
     * @Attribute InnerIPAddress: IP Address for created DB instance of Intranet.
     */
    public readonly attrInnerIpAddress: any;

    /**
     * @Attribute InnerPort: Intranet port of created DB instance.
     */
    public readonly attrInnerPort: any;

    /**
     * @Attribute PublicConnectionString: DB instance connection url by Internet.
     */
    public readonly attrPublicConnectionString: any;

    /**
     * @Attribute PublicIPAddress: IP Address for created DB instance of Internet.
     */
    public readonly attrPublicIpAddress: any;

    /**
     * @Attribute PublicPort: Internet port of created DB instance.
     */
    public readonly attrPublicPort: any;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property dbInstanceClass: Database instance type. Refer the RDS database instance type reference, such as 'rds.mys2.large', 'rds.mss1.large', 'rds.pg.s1.small' etc
     */
    public dbInstanceClass: string;

    /**
     * @Property dbInstanceStorage: Database instance storage size. mysql is [5,1000]. sql server 2008r2 is [10,1000], sql server 2012/2012_web/2016-web is [20,1000]. PostgreSQL and PPAS is [5,2000]. Increased every 5 GB, Unit in GB
     */
    public dbInstanceStorage: number;

    /**
     * @Property engine: Database instance engine type. Support MySQL/SQLServer/PostgreSQL/PPAS/MariaDB now.
     */
    public engine: string;

    /**
     * @Property engineVersion: Database instance version of the relative engine type.Support MySQL: 5.5/5.6/5.7/8.0;
     * SQLServer: 2008r2/2012/2012_ent_ha/2012_std_ha/2012_web/2016_ent_ha/2016_std_ha/2016_web/2017_std_ha/2017_ent;
     * PostgreSQL: 9.4/10.0/11.0/12.0;
     * PPAS: 9.3/10.0;
     * MariaDB: 10.3.
     */
    public engineVersion: string;

    /**
     * @Property securityIpList: Security ip to access the database instance, combine with comma, 0.0.0.0/0 means no limitation.
     */
    public securityIpList: string;

    /**
     * @Property allocatePublicConnection: If true, allocate public connection automate.
     */
    public allocatePublicConnection: boolean | ros.IResolvable | undefined;

    /**
     * @Property backupRetentionPeriod: The retention period of the data backup. Value range: 7 to 730. The default value is the original value. Note When the BackupPolicyMode parameter is set to LogBackupPolicy, this parameter is required.
     */
    public backupRetentionPeriod: number | undefined;

    /**
     * @Property category: The edition of the instance. Valid values:
     * Basic: specifies to use the Basic Edition.
     * HighAvailability: specifies to use the High-availability Edition.
     * AlwaysOn: specifies to use the Cluster Edition.
     * Finance: specifies to use the Enterprise Edition.
     */
    public category: string | undefined;

    /**
     * @Property connectionMode: Connection Mode for database instance,support 'Standard' and 'Safe' mode. Default is RDS system assigns.
     */
    public connectionMode: string | undefined;

    /**
     * @Property connectionStringPrefix: The prefix of the endpoint. 
     * Only the prefix of the CurrentConnectionString parameter value can be modified.
     * The prefix must be 8 to 64 characters in length and can contain letters, digits, and hyphens (-).
     */
    public connectionStringPrefix: string | undefined;

    /**
     * @Property connectionStringType: The endpoint type of the instance, allow values: Inner, Public
     */
    public connectionStringType: string | undefined;

    /**
     * @Property dbInstanceDescription: Description of created database instance.
     */
    public dbInstanceDescription: string | undefined;

    /**
     * @Property dbInstanceNetType: Database instance net type, default is Intranet.Internet for public access, Intranet for private access.
     */
    public dbInstanceNetType: string | undefined;

    /**
     * @Property dbInstanceStorageType: The storage type of the instance. Valid values:
     * local_ssd: specifies to use local SSDs. This is the recommended storage type.
     * cloud_ssd: specifies to use standard SSDs.
     * cloud_essd: specifies to use enhanced SSDs.
     */
    public dbInstanceStorageType: string | undefined;

    /**
     * @Property dbIsIgnoreCase: Specifies whether table names are case-sensitive. Valid values:
     * 1: Table names are not case-sensitive. This is the default value.
     * 0: Table names are case-sensitive.
     */
    public dbIsIgnoreCase: number | undefined;

    /**
     * @Property dbMappings: Database mappings to attach to db instance.
     */
    public dbMappings: Array<RosDBInstance.DBMappingsProperty | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property dbParamGroupId: The ID of the parameter template used by the instance.
     */
    public dbParamGroupId: string | undefined;

    /**
     * @Property dbTimeZone: The UTC time zone of the instance. Valid values: -12:00 to +12:00. The time zone must be an integer value such as +08:00. Values such as +08:30 are not allowed.
     */
    public dbTimeZone: string | undefined;

    /**
     * @Property dedicatedHostGroupId: The ID of the host group to which the instance belongs if you create an instance in a host group.
     */
    public dedicatedHostGroupId: string | undefined;

    /**
     * @Property encryptionKey: The ID of the encryption key that is used to encrypt data on SSDs in the region. You can view the encryption key ID in the Key Management Service (KMS) console. You can also create an encryption key.
     */
    public encryptionKey: string | undefined;

    /**
     * @Property maintainTime: The period during which the maintenance performs. The format is HH:mmZ-HH:mmZ.
     */
    public maintainTime: string | undefined;

    /**
     * @Property masterUsername: The master user name for the database instance.
     */
    public masterUsername: string | undefined;

    /**
     * @Property masterUserPassword: The master password for the database instance.
     */
    public masterUserPassword: string | undefined;

    /**
     * @Property masterUserType: Privilege type of account.
     *  Normal: Common privilege. 
     *  Super: High privilege. 
     * Sysadmin: Super privileges (SA) (only supported by SQL Server)
     * The default value is Normal.
     */
    public masterUserType: string | undefined;

    /**
     * @Property multiAz: Specifies if the database instance is a multiple Availability Zone deployment.
     */
    public multiAz: boolean | ros.IResolvable | undefined;

    /**
     * @Property payType: The charge type of created instance.
     */
    public payType: string | undefined;

    /**
     * @Property period: Prepaid time period. While choose by pay by month, it could be from 1 to 9. While choose pay by year, it could be from 1 to 3.
     */
    public period: number | undefined;

    /**
     * @Property periodType: Charge period for created instances.
     */
    public periodType: string | undefined;

    /**
     * @Property port: The port of the database service.
     */
    public port: number | undefined;

    /**
     * @Property preferredBackupPeriod: The backup period. Separate multiple values with commas (,). The default value is the original value. Valid values:Monday Tuesday Wednesday Thursday Friday Saturday Sunday Note When the BackupPolicyMode parameter is set to DataBackupPolicy, this parameter is required.
     */
    public preferredBackupPeriod: Array<any | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property preferredBackupTime: The time when the backup task is performed. Format: yyyy-MM-ddZ-HH:mm:ssZ.Note When the BackupPolicyMode parameter is set to DataBackupPolicy, this parameter is required.
     */
    public preferredBackupTime: string | undefined;

    /**
     * @Property privateIpAddress: The private ip for created instance.
     */
    public privateIpAddress: string | undefined;

    /**
     * @Property resourceGroupId: Resource group id.
     */
    public resourceGroupId: string | undefined;

    /**
     * @Property roleArn: The Alibaba Cloud Resource Name (ARN) provided to the service account of the instance by your Alibaba Cloud account to connect to KMS. You can copy the ARN from the RAM console.
     */
    public roleArn: string | undefined;

    /**
     * @Property securityGroupId: The ID of the ECS security groups. 
     * Each RDS instance can be associated with up to three ECS security groups. 
     * You must separate them with commas (,). 
     * To delete an ECS Security group, leave this parameter empty. 
     *
     */
    public securityGroupId: string | undefined;

    /**
     * @Property slaveZoneIds: List of slave zone ids can specify slave zone ids when creating the high-availability or enterprise edition instance. Meanwhile, VSwitchId needs to pass in the corresponding vswitch id to the slave zone by order. For example, ZoneId = "zone-a" and SlaveZoneIds = ["zone-c", "zone-b"], then the VSwitchId must be "vsw-zone-a,vsw-zone-c,vsw-zone-b". Of course, you can also choose automatic allocation, for example, ZoneId = "zone-a" and SlaveZoneIds = ["Auto", "Auto"], then the VSwitchId must be "vsw-zone-a,Auto,Auto". The list contains up to 2 slave zone ids, separated by commas.
     */
    public slaveZoneIds: string[] | undefined;

    /**
     * @Property sqlCollectorStatus: Specifies whether to enable or disable the SQL Explorer (SQL audit) feature. 
     * Valid values:Enable | Disabled.
     */
    public sqlCollectorStatus: string | undefined;

    /**
     * @Property sslSetting: Secure Sockets Layer (SSL) link setting of the instance. Valid values:
     * Disabled: Disable SSL
     * EnabledForPublicConnection: Public connection address will be protected by the SSL certificate. It requires AllocatePublicConnection is true.
     * EnabledForInnerConnection: Private connection address will be protected by the SSL certificate.
     * Default value is Disabled.
     */
    public sslSetting: string | undefined;

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
    public readonly tags: ros.TagManager;

    /**
     * @Property targetDedicatedHostIdForLog: The ID of the host to which the instance belongs if you create a log instance in a host group.
     */
    public targetDedicatedHostIdForLog: string | undefined;

    /**
     * @Property targetDedicatedHostIdForMaster: The ID of the host to which the instance belongs if you create a primary instance in a host group.
     */
    public targetDedicatedHostIdForMaster: string | undefined;

    /**
     * @Property targetDedicatedHostIdForSlave: The ID of the host to which the instance belongs if you create a secondary instance in a host group.
     */
    public targetDedicatedHostIdForSlave: string | undefined;

    /**
     * @Property vpcId: The VPC id of created database instance. For VPC network, the property is required.
     */
    public vpcId: string | undefined;

    /**
     * @Property vSwitchId: The vSwitch id of created instance. For VPC network, the property is required.
     */
    public vSwitchId: string | undefined;

    /**
     * @Property zoneId: selected zone to create database instance. You cannot set the ZoneId parameter if the MultiAZ parameter is set to true.
     */
    public zoneId: string | undefined;

    /**
     * Create a new `ALIYUN::RDS::DBInstance`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDBInstanceProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosDBInstance.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrDbInstanceId = ros.Token.asString(this.getAtt('DBInstanceId'));
        this.attrInnerConnectionString = ros.Token.asString(this.getAtt('InnerConnectionString'));
        this.attrInnerIpAddress = ros.Token.asString(this.getAtt('InnerIPAddress'));
        this.attrInnerPort = ros.Token.asString(this.getAtt('InnerPort'));
        this.attrPublicConnectionString = ros.Token.asString(this.getAtt('PublicConnectionString'));
        this.attrPublicIpAddress = ros.Token.asString(this.getAtt('PublicIPAddress'));
        this.attrPublicPort = ros.Token.asString(this.getAtt('PublicPort'));

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.dbInstanceClass = props.dbInstanceClass;
        this.dbInstanceStorage = props.dbInstanceStorage;
        this.engine = props.engine;
        this.engineVersion = props.engineVersion;
        this.securityIpList = props.securityIpList;
        this.allocatePublicConnection = props.allocatePublicConnection;
        this.backupRetentionPeriod = props.backupRetentionPeriod;
        this.category = props.category;
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
        this.encryptionKey = props.encryptionKey;
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
        this.resourceGroupId = props.resourceGroupId;
        this.roleArn = props.roleArn;
        this.securityGroupId = props.securityGroupId;
        this.slaveZoneIds = props.slaveZoneIds;
        this.sqlCollectorStatus = props.sqlCollectorStatus;
        this.sslSetting = props.sslSetting;
        this.tags = new ros.TagManager(ros.TagType.STANDARD, "ALIYUN::RDS::DBInstance", props.tags, { tagPropertyName: 'tags' });
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
            backupRetentionPeriod: this.backupRetentionPeriod,
            category: this.category,
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
            encryptionKey: this.encryptionKey,
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
            resourceGroupId: this.resourceGroupId,
            roleArn: this.roleArn,
            securityGroupId: this.securityGroupId,
            slaveZoneIds: this.slaveZoneIds,
            sqlCollectorStatus: this.sqlCollectorStatus,
            sslSetting: this.sslSetting,
            tags: this.tags.renderTags(),
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
        readonly characterSetName: string;
        /**
         * @Property dbDescription: Specifies the database description, containing up to 256 characters.
         */
        readonly dbDescription?: string;
        /**
         * @Property dbName: Consists of [2, 64] lower case letters, numbers, underscores, lines, letters. Must start with a letter, end with letters or numbers
         */
        readonly dbName: string;
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
    readonly dbInstanceId: string;

    /**
     * @Property payType: The charge type of created instance.
     */
    readonly payType: string;

    /**
     * @Property allocatePublicConnection: If true, allocate public connection automate.
     */
    readonly allocatePublicConnection?: boolean | ros.IResolvable;

    /**
     * @Property backupId: The ID of the backup set that you want to use. 
     * You can call the DescribeBackups operation to query the most recent backup set list. 
     * Note You must specify at least one of the BackupId and RestoreTime parameters.
     */
    readonly backupId?: string;

    /**
     * @Property backupRetentionPeriod: The retention period of the data backup. Value range: 7 to 730. The default value is the original value. Note When the BackupPolicyMode parameter is set to LogBackupPolicy, this parameter is required.
     */
    readonly backupRetentionPeriod?: number;

    /**
     * @Property backupType: The type of backup used by the new instance. Valid values: 
     *  - FullBackup: full backup 
     *  - IncrementalBackup: incremental backup
     */
    readonly backupType?: string;

    /**
     * @Property category: The edition of the instance. Valid values:
     * Basic: specifies to use the Basic Edition.
     * HighAvailability: specifies to use the High-availability Edition.
     * AlwaysOn: specifies to use the Cluster Edition.
     * Finance: specifies to use the Enterprise Edition.
     */
    readonly category?: string;

    /**
     * @Property connectionStringPrefix: The prefix of the endpoint. 
     * Only the prefix of the CurrentConnectionString parameter value can be modified.
     * The prefix must be 8 to 64 characters in length and can contain letters, digits, and hyphens (-).
     */
    readonly connectionStringPrefix?: string;

    /**
     * @Property connectionStringType: The endpoint type of the instance, allow values: Inner, Public
     */
    readonly connectionStringType?: string;

    /**
     * @Property dbInstanceClass: Database instance type. Refer the RDS database instance type reference, such as 'rds.mys2.large', 'rds.mss1.large', 'rds.pg.s1.small' etc
     */
    readonly dbInstanceClass?: string;

    /**
     * @Property dbInstanceDescription: Description of created database instance.
     */
    readonly dbInstanceDescription?: string;

    /**
     * @Property dbInstanceStorage: Database instance storage size. mysql is [5,1000]. sql server 2008r2 is [10,1000], sql server 2012/2012_web/2016-web is [20,1000]. PostgreSQL and PPAS is [5,2000]. Increased every 5 GB, Unit in GB
     */
    readonly dbInstanceStorage?: number;

    /**
     * @Property dbInstanceStorageType: The storage type of the instance. Valid values:
     * local_ssd: specifies to use local SSDs. This is the recommended storage type.
     * cloud_ssd: specifies to use standard SSDs.
     * cloud_essd: specifies to use enhanced SSDs.
     */
    readonly dbInstanceStorageType?: string;

    /**
     * @Property dbMappings: Database mappings to attach to db instance.
     */
    readonly dbMappings?: Array<RosDBInstanceClone.DBMappingsProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property dbNames: The names of the databases that you want to create on the new instance.
     */
    readonly dbNames?: string;

    /**
     * @Property dedicatedHostGroupId: The ID of the host group to which the instance belongs if you create an instance in a host group.
     */
    readonly dedicatedHostGroupId?: string;

    /**
     * @Property instanceNetworkType: The network type of the new instance. Valid values: 
     * - VPC 
     * - Classic 
     * The default value is the network type of the original instance.
     */
    readonly instanceNetworkType?: string;

    /**
     * @Property maintainTime: The period during which the maintenance performs. The format is HH:mmZ-HH:mmZ.
     */
    readonly maintainTime?: string;

    /**
     * @Property masterUsername: The master user name for the database instance.
     */
    readonly masterUsername?: string;

    /**
     * @Property masterUserPassword: The master password for the database instance.
     */
    readonly masterUserPassword?: string;

    /**
     * @Property masterUserType: Privilege type of account.
     *  Normal: Common privilege. 
     *  Super: High privilege. 
     * Sysadmin: Super privileges (SA) (only supported by SQL Server)
     * The default value is Normal.
     */
    readonly masterUserType?: string;

    /**
     * @Property period: Prepaid time period. While choose by pay by month, it could be from 1 to 9. While choose pay by year, it could be from 1 to 3.
     */
    readonly period?: number;

    /**
     * @Property periodType: Charge period for created instances.
     */
    readonly periodType?: string;

    /**
     * @Property port: The port of the database service.
     */
    readonly port?: number;

    /**
     * @Property preferredBackupPeriod: The backup period. Separate multiple values with commas (,). The default value is the original value. Valid values:Monday Tuesday Wednesday Thursday Friday Saturday Sunday Note When the BackupPolicyMode parameter is set to DataBackupPolicy, this parameter is required.
     */
    readonly preferredBackupPeriod?: Array<any | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property preferredBackupTime: The time when the backup task is performed. Format: yyyy-MM-ddZ-HH:mm:ssZ.Note When the BackupPolicyMode parameter is set to DataBackupPolicy, this parameter is required.
     */
    readonly preferredBackupTime?: string;

    /**
     * @Property privateIpAddress: The private ip for created instance.
     */
    readonly privateIpAddress?: string;

    /**
     * @Property restoreTable: Specifies whether to restore specific databases and tables. 
     * The value 1 specifies to restore specific databases and tables. 
     * If you do not want to restore specific databases or tables, you can choose not to specify this parameter.
     */
    readonly restoreTable?: string;

    /**
     * @Property restoreTime: The point in time to which you want to restore the data of the original instance. 
     * The point in time must fall within the specified log backup retention period. 
     * The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. 
     * The time must be in UTC.
     */
    readonly restoreTime?: string;

    /**
     * @Property securityGroupId: The ID of the ECS security groups. 
     * Each RDS instance can be associated with up to three ECS security groups. 
     * You must separate them with commas (,). 
     * To delete an ECS Security group, leave this parameter empty. 
     *
     */
    readonly securityGroupId?: string;

    /**
     * @Property securityIpList: Security ip to access the database instance, combine with comma, 0.0.0.0/0 means no limitation.
     */
    readonly securityIpList?: string;

    /**
     * @Property slaveZoneIds: List of slave zone ids can specify slave zone ids when creating the high-availability or enterprise edition instance. Meanwhile, VSwitchId needs to pass in the corresponding vswitch id to the slave zone by order. For example, ZoneId = "zone-a" and SlaveZoneIds = ["zone-c", "zone-b"], then the VSwitchId must be "vsw-zone-a,vsw-zone-c,vsw-zone-b". Of course, you can also choose automatic allocation, for example, ZoneId = "zone-a" and SlaveZoneIds = ["Auto", "Auto"], then the VSwitchId must be "vsw-zone-a,Auto,Auto". The list contains up to 2 slave zone ids, separated by commas.
     */
    readonly slaveZoneIds?: string[];

    /**
     * @Property sqlCollectorStatus: Specifies whether to enable or disable the SQL Explorer (SQL audit) feature. 
     * Valid values:Enable | Disabled.
     */
    readonly sqlCollectorStatus?: string;

    /**
     * @Property sslSetting: Secure Sockets Layer (SSL) link setting of the instance. Valid values:
     * Disabled: Disable SSL
     * EnabledForPublicConnection: Public connection address will be protected by the SSL certificate. It requires AllocatePublicConnection is true.
     * EnabledForInnerConnection: Private connection address will be protected by the SSL certificate.
     * Default value is Disabled.
     */
    readonly sslSetting?: string;

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
    readonly tags?: ros.RosTag[];

    /**
     * @Property timeoutInMinutes: The timeout period for creating the clone instance resource. Unit: Minute. Default: 120.
     */
    readonly timeoutInMinutes?: number;

    /**
     * @Property vpcId: The VPC id of created database instance. For VPC network, the property is required.
     */
    readonly vpcId?: string;

    /**
     * @Property vSwitchId: The vSwitch id of created instance. For VPC network, the property is required.
     */
    readonly vSwitchId?: string;

    /**
     * @Property zoneId: selected zone to create database instance. You cannot set the ZoneId parameter if the MultiAZ parameter is set to true.
     */
    readonly zoneId?: string;
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
    errors.collect(ros.propertyValidator('dbNames', ros.validateString)(properties.dbNames));
    errors.collect(ros.propertyValidator('preferredBackupPeriod', ros.listValidator(ros.validateAny))(properties.preferredBackupPeriod));
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
    errors.collect(ros.propertyValidator('tags', ros.listValidator(ros.validateRosTag))(properties.tags));
    errors.collect(ros.propertyValidator('dbInstanceDescription', ros.validateString)(properties.dbInstanceDescription));
    errors.collect(ros.propertyValidator('zoneId', ros.validateString)(properties.zoneId));
    errors.collect(ros.propertyValidator('dbInstanceClass', ros.validateString)(properties.dbInstanceClass));
    errors.collect(ros.propertyValidator('allocatePublicConnection', ros.validateBoolean)(properties.allocatePublicConnection));
    errors.collect(ros.propertyValidator('preferredBackupTime', ros.validateString)(properties.preferredBackupTime));
    errors.collect(ros.propertyValidator('vSwitchId', ros.validateString)(properties.vSwitchId));
    errors.collect(ros.propertyValidator('securityGroupId', ros.validateString)(properties.securityGroupId));
    if(properties.period && (typeof properties.period) !== 'object') {
        errors.collect(ros.propertyValidator('period', ros.validateRange)({
            data: properties.period,
            min: 1,
            max: 9,
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
      Tags: ros.listMapper(ros.rosTagToRosTemplate)(properties.tags),
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
    public readonly attrDbInstanceId: any;

    /**
     * @Attribute InnerConnectionString: DB instance connection url by Intranet.
     */
    public readonly attrInnerConnectionString: any;

    /**
     * @Attribute InnerIPAddress: IP Address for created DB instance of Intranet.
     */
    public readonly attrInnerIpAddress: any;

    /**
     * @Attribute InnerPort: Intranet port of created DB instance.
     */
    public readonly attrInnerPort: any;

    /**
     * @Attribute PublicConnectionString: DB instance connection url by Internet.
     */
    public readonly attrPublicConnectionString: any;

    /**
     * @Attribute PublicIPAddress: IP Address for created DB instance of Internet.
     */
    public readonly attrPublicIpAddress: any;

    /**
     * @Attribute PublicPort: Internet port of created DB instance.
     */
    public readonly attrPublicPort: any;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property dbInstanceId: Instance id
     */
    public dbInstanceId: string;

    /**
     * @Property payType: The charge type of created instance.
     */
    public payType: string;

    /**
     * @Property allocatePublicConnection: If true, allocate public connection automate.
     */
    public allocatePublicConnection: boolean | ros.IResolvable | undefined;

    /**
     * @Property backupId: The ID of the backup set that you want to use. 
     * You can call the DescribeBackups operation to query the most recent backup set list. 
     * Note You must specify at least one of the BackupId and RestoreTime parameters.
     */
    public backupId: string | undefined;

    /**
     * @Property backupRetentionPeriod: The retention period of the data backup. Value range: 7 to 730. The default value is the original value. Note When the BackupPolicyMode parameter is set to LogBackupPolicy, this parameter is required.
     */
    public backupRetentionPeriod: number | undefined;

    /**
     * @Property backupType: The type of backup used by the new instance. Valid values: 
     *  - FullBackup: full backup 
     *  - IncrementalBackup: incremental backup
     */
    public backupType: string | undefined;

    /**
     * @Property category: The edition of the instance. Valid values:
     * Basic: specifies to use the Basic Edition.
     * HighAvailability: specifies to use the High-availability Edition.
     * AlwaysOn: specifies to use the Cluster Edition.
     * Finance: specifies to use the Enterprise Edition.
     */
    public category: string | undefined;

    /**
     * @Property connectionStringPrefix: The prefix of the endpoint. 
     * Only the prefix of the CurrentConnectionString parameter value can be modified.
     * The prefix must be 8 to 64 characters in length and can contain letters, digits, and hyphens (-).
     */
    public connectionStringPrefix: string | undefined;

    /**
     * @Property connectionStringType: The endpoint type of the instance, allow values: Inner, Public
     */
    public connectionStringType: string | undefined;

    /**
     * @Property dbInstanceClass: Database instance type. Refer the RDS database instance type reference, such as 'rds.mys2.large', 'rds.mss1.large', 'rds.pg.s1.small' etc
     */
    public dbInstanceClass: string | undefined;

    /**
     * @Property dbInstanceDescription: Description of created database instance.
     */
    public dbInstanceDescription: string | undefined;

    /**
     * @Property dbInstanceStorage: Database instance storage size. mysql is [5,1000]. sql server 2008r2 is [10,1000], sql server 2012/2012_web/2016-web is [20,1000]. PostgreSQL and PPAS is [5,2000]. Increased every 5 GB, Unit in GB
     */
    public dbInstanceStorage: number | undefined;

    /**
     * @Property dbInstanceStorageType: The storage type of the instance. Valid values:
     * local_ssd: specifies to use local SSDs. This is the recommended storage type.
     * cloud_ssd: specifies to use standard SSDs.
     * cloud_essd: specifies to use enhanced SSDs.
     */
    public dbInstanceStorageType: string | undefined;

    /**
     * @Property dbMappings: Database mappings to attach to db instance.
     */
    public dbMappings: Array<RosDBInstanceClone.DBMappingsProperty | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property dbNames: The names of the databases that you want to create on the new instance.
     */
    public dbNames: string | undefined;

    /**
     * @Property dedicatedHostGroupId: The ID of the host group to which the instance belongs if you create an instance in a host group.
     */
    public dedicatedHostGroupId: string | undefined;

    /**
     * @Property instanceNetworkType: The network type of the new instance. Valid values: 
     * - VPC 
     * - Classic 
     * The default value is the network type of the original instance.
     */
    public instanceNetworkType: string | undefined;

    /**
     * @Property maintainTime: The period during which the maintenance performs. The format is HH:mmZ-HH:mmZ.
     */
    public maintainTime: string | undefined;

    /**
     * @Property masterUsername: The master user name for the database instance.
     */
    public masterUsername: string | undefined;

    /**
     * @Property masterUserPassword: The master password for the database instance.
     */
    public masterUserPassword: string | undefined;

    /**
     * @Property masterUserType: Privilege type of account.
     *  Normal: Common privilege. 
     *  Super: High privilege. 
     * Sysadmin: Super privileges (SA) (only supported by SQL Server)
     * The default value is Normal.
     */
    public masterUserType: string | undefined;

    /**
     * @Property period: Prepaid time period. While choose by pay by month, it could be from 1 to 9. While choose pay by year, it could be from 1 to 3.
     */
    public period: number | undefined;

    /**
     * @Property periodType: Charge period for created instances.
     */
    public periodType: string | undefined;

    /**
     * @Property port: The port of the database service.
     */
    public port: number | undefined;

    /**
     * @Property preferredBackupPeriod: The backup period. Separate multiple values with commas (,). The default value is the original value. Valid values:Monday Tuesday Wednesday Thursday Friday Saturday Sunday Note When the BackupPolicyMode parameter is set to DataBackupPolicy, this parameter is required.
     */
    public preferredBackupPeriod: Array<any | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property preferredBackupTime: The time when the backup task is performed. Format: yyyy-MM-ddZ-HH:mm:ssZ.Note When the BackupPolicyMode parameter is set to DataBackupPolicy, this parameter is required.
     */
    public preferredBackupTime: string | undefined;

    /**
     * @Property privateIpAddress: The private ip for created instance.
     */
    public privateIpAddress: string | undefined;

    /**
     * @Property restoreTable: Specifies whether to restore specific databases and tables. 
     * The value 1 specifies to restore specific databases and tables. 
     * If you do not want to restore specific databases or tables, you can choose not to specify this parameter.
     */
    public restoreTable: string | undefined;

    /**
     * @Property restoreTime: The point in time to which you want to restore the data of the original instance. 
     * The point in time must fall within the specified log backup retention period. 
     * The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. 
     * The time must be in UTC.
     */
    public restoreTime: string | undefined;

    /**
     * @Property securityGroupId: The ID of the ECS security groups. 
     * Each RDS instance can be associated with up to three ECS security groups. 
     * You must separate them with commas (,). 
     * To delete an ECS Security group, leave this parameter empty. 
     *
     */
    public securityGroupId: string | undefined;

    /**
     * @Property securityIpList: Security ip to access the database instance, combine with comma, 0.0.0.0/0 means no limitation.
     */
    public securityIpList: string | undefined;

    /**
     * @Property slaveZoneIds: List of slave zone ids can specify slave zone ids when creating the high-availability or enterprise edition instance. Meanwhile, VSwitchId needs to pass in the corresponding vswitch id to the slave zone by order. For example, ZoneId = "zone-a" and SlaveZoneIds = ["zone-c", "zone-b"], then the VSwitchId must be "vsw-zone-a,vsw-zone-c,vsw-zone-b". Of course, you can also choose automatic allocation, for example, ZoneId = "zone-a" and SlaveZoneIds = ["Auto", "Auto"], then the VSwitchId must be "vsw-zone-a,Auto,Auto". The list contains up to 2 slave zone ids, separated by commas.
     */
    public slaveZoneIds: string[] | undefined;

    /**
     * @Property sqlCollectorStatus: Specifies whether to enable or disable the SQL Explorer (SQL audit) feature. 
     * Valid values:Enable | Disabled.
     */
    public sqlCollectorStatus: string | undefined;

    /**
     * @Property sslSetting: Secure Sockets Layer (SSL) link setting of the instance. Valid values:
     * Disabled: Disable SSL
     * EnabledForPublicConnection: Public connection address will be protected by the SSL certificate. It requires AllocatePublicConnection is true.
     * EnabledForInnerConnection: Private connection address will be protected by the SSL certificate.
     * Default value is Disabled.
     */
    public sslSetting: string | undefined;

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
    public readonly tags: ros.TagManager;

    /**
     * @Property timeoutInMinutes: The timeout period for creating the clone instance resource. Unit: Minute. Default: 120.
     */
    public timeoutInMinutes: number | undefined;

    /**
     * @Property vpcId: The VPC id of created database instance. For VPC network, the property is required.
     */
    public vpcId: string | undefined;

    /**
     * @Property vSwitchId: The vSwitch id of created instance. For VPC network, the property is required.
     */
    public vSwitchId: string | undefined;

    /**
     * @Property zoneId: selected zone to create database instance. You cannot set the ZoneId parameter if the MultiAZ parameter is set to true.
     */
    public zoneId: string | undefined;

    /**
     * Create a new `ALIYUN::RDS::DBInstanceClone`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDBInstanceCloneProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosDBInstanceClone.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrDbInstanceId = ros.Token.asString(this.getAtt('DBInstanceId'));
        this.attrInnerConnectionString = ros.Token.asString(this.getAtt('InnerConnectionString'));
        this.attrInnerIpAddress = ros.Token.asString(this.getAtt('InnerIPAddress'));
        this.attrInnerPort = ros.Token.asString(this.getAtt('InnerPort'));
        this.attrPublicConnectionString = ros.Token.asString(this.getAtt('PublicConnectionString'));
        this.attrPublicIpAddress = ros.Token.asString(this.getAtt('PublicIPAddress'));
        this.attrPublicPort = ros.Token.asString(this.getAtt('PublicPort'));

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
        this.tags = new ros.TagManager(ros.TagType.STANDARD, "ALIYUN::RDS::DBInstanceClone", props.tags, { tagPropertyName: 'tags' });
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
            tags: this.tags.renderTags(),
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
        readonly characterSetName: string;
        /**
         * @Property dbDescription: Specifies the database description, containing up to 256 characters.
         */
        readonly dbDescription?: string;
        /**
         * @Property dbName: Consists of [2, 64] lower case letters, numbers, underscores, lines, letters. Must start with a letter, end with letters or numbers
         */
        readonly dbName: string;
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
        readonly type?: string;
        /**
         * @Property tables: The table information that you want to restore.
         */
        readonly tables?: Array<RosDBInstanceClone.TablesProperty | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property newName: New database name in clone instance.
         */
        readonly newName?: string;
        /**
         * @Property name: Name of database you want to restore.
         */
        readonly name?: string;
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
        readonly type?: string;
        /**
         * @Property newName: New name of the table in db
         */
        readonly newName?: string;
        /**
         * @Property name: Name of table you want to restore
         */
        readonly name?: string;
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
    readonly dbInstanceId: string;

    /**
     * @Property parameters: Parameters to update for selected database instance.
     */
    readonly parameters: Array<RosDBInstanceParameterGroup.ParametersProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property forcerestart: whether restart database instance.
     */
    readonly forcerestart?: string;
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
    public dbInstanceId: string;

    /**
     * @Property parameters: Parameters to update for selected database instance.
     */
    public parameters: Array<RosDBInstanceParameterGroup.ParametersProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property forcerestart: whether restart database instance.
     */
    public forcerestart: string | undefined;

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
        readonly value: string;
        /**
         * @Property key: Key to update for instance property.
         */
        readonly key: string;
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
    readonly dbInstanceId: string;

    /**
     * @Property dbInstanceIpArrayAttribute: Security ips to add or remove.
     */
    readonly dbInstanceIpArrayAttribute: string;

    /**
     * @Property dbInstanceIpArrayName: Group name of the security ips, only support lower characters and '_'. Advice use a new group name avoid effect your database system. If the properties is not specified, it will set to default group, please be careful.
     */
    readonly dbInstanceIpArrayName?: string;
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
    public readonly attrSecurityIps: any;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property dbInstanceId: Database instance id to update security ips.
     */
    public dbInstanceId: string;

    /**
     * @Property dbInstanceIpArrayAttribute: Security ips to add or remove.
     */
    public dbInstanceIpArrayAttribute: string;

    /**
     * @Property dbInstanceIpArrayName: Group name of the security ips, only support lower characters and '_'. Advice use a new group name avoid effect your database system. If the properties is not specified, it will set to default group, please be careful.
     */
    public dbInstanceIpArrayName: string | undefined;

    /**
     * Create a new `ALIYUN::RDS::DBInstanceSecurityIps`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDBInstanceSecurityIpsProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosDBInstanceSecurityIps.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrSecurityIps = ros.Token.asString(this.getAtt('SecurityIps'));

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
    readonly characterSetName: string;

    /**
     * @Property dbInstanceId: The ID of the instance.
     */
    readonly dbInstanceId: string;

    /**
     * @Property dbName: The name of the database you want to create.
     * Note
     * The name must be 2 to 64 characters in length.
     * The name must start with a lowercase letter and end with a lowercase letter or digit.
     * The name can contain lowercase letters, digits, underscores (_), and hyphens (-).
     * The name must be unique in the instance.
     * For more information about invalid characters, see Forbidden keywords table.
     */
    readonly dbName: string;

    /**
     * @Property dbDescription: The description of the database. The description must be 2 to 256 characters in length.
     * The description must start with a letter and can contain letters, digits, underscores
     * (_), and hyphens (-).
     * Note The description cannot start with http:// or https://.
     */
    readonly dbDescription?: string;
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
    public readonly attrDbInstanceId: any;

    /**
     * @Attribute DBName: The name of the database.
     */
    public readonly attrDbName: any;

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
    public characterSetName: string;

    /**
     * @Property dbInstanceId: The ID of the instance.
     */
    public dbInstanceId: string;

    /**
     * @Property dbName: The name of the database you want to create.
     * Note
     * The name must be 2 to 64 characters in length.
     * The name must start with a lowercase letter and end with a lowercase letter or digit.
     * The name can contain lowercase letters, digits, underscores (_), and hyphens (-).
     * The name must be unique in the instance.
     * For more information about invalid characters, see Forbidden keywords table.
     */
    public dbName: string;

    /**
     * @Property dbDescription: The description of the database. The description must be 2 to 256 characters in length.
     * The description must start with a letter and can contain letters, digits, underscores
     * (_), and hyphens (-).
     * Note The description cannot start with http:// or https://.
     */
    public dbDescription: string | undefined;

    /**
     * Create a new `ALIYUN::RDS::Database`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDatabaseProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosDatabase.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrDbInstanceId = ros.Token.asString(this.getAtt('DBInstanceId'));
        this.attrDbName = ros.Token.asString(this.getAtt('DBName'));

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
    readonly commodityCode: string;

    /**
     * @Property dbInstanceClass: Database instance type. Refer the RDS database instance type reference, such as 'rds.mys2.large', 'rds.mss1.large', 'rds.pg.s1.small' etc
     */
    readonly dbInstanceClass: string;

    /**
     * @Property dbInstanceStorage: Database instance storage size. mysql is [5,1000]. sql server 2008r2 is [10,1000], sql server 2012/2012_web/2016-web is [20,1000]. PostgreSQL and PPAS is [5,2000]. Increased every 5 GB, Unit in GB
     */
    readonly dbInstanceStorage: number;

    /**
     * @Property engine: Database instance engine type. Support MySQL/SQLServer/PostgreSQL/PPAS/MariaDB now.
     */
    readonly engine: string;

    /**
     * @Property engineVersion: Database instance version of the relative engine type.Support MySQL: 5.5/5.6/5.7/8.0;
     * SQLServer: 2008r2/2012/2012_ent_ha/2012_std_ha/2012_web/2016_ent_ha/2016_std_ha/2016_web/2017_std_ha/2017_ent;
     * PostgreSQL: 9.4/10.0/11.0/12.0;
     * PPAS: 9.3/10.0;
     * MariaDB: 10.3.
     */
    readonly engineVersion: string;

    /**
     * @Property period: Prepaid time period. While choose by pay by month, it could be from 1 to 9. While choose pay by year, it could be from 1 to 3.
     */
    readonly period: number;

    /**
     * @Property periodType: Charge period for created instances.
     */
    readonly periodType: string;

    /**
     * @Property allocatePublicConnection: If true, allocate public connection automate.
     */
    readonly allocatePublicConnection?: boolean | ros.IResolvable;

    /**
     * @Property autoPay: Automatic Payment. Default is false.
     */
    readonly autoPay?: boolean | ros.IResolvable;

    /**
     * @Property autoRenew: Auto renew the prepay instance. If the period type is by year, it will renew by year, else it will renew by month.
     */
    readonly autoRenew?: boolean | ros.IResolvable;

    /**
     * @Property backupRetentionPeriod: The retention period of the data backup. Value range: 7 to 730. The default value is the original value. Note When the BackupPolicyMode parameter is set to LogBackupPolicy, this parameter is required.
     */
    readonly backupRetentionPeriod?: number;

    /**
     * @Property category: The edition of the instance. Valid values:
     * Basic: specifies to use the Basic Edition.
     * HighAvailability: specifies to use the High-availability Edition.
     * AlwaysOn: specifies to use the Cluster Edition.
     * Finance: specifies to use the Enterprise Edition.
     */
    readonly category?: string;

    /**
     * @Property connectionMode: Connection Mode for database instance,support 'Standard' and 'Safe' mode. Default is RDS system assigns.
     */
    readonly connectionMode?: string;

    /**
     * @Property connectionStringPrefix: The prefix of the endpoint. 
     * Only the prefix of the CurrentConnectionString parameter value can be modified.
     * The prefix must be 8 to 64 characters in length and can contain letters, digits, and hyphens (-).
     */
    readonly connectionStringPrefix?: string;

    /**
     * @Property connectionStringType: The endpoint type of the instance, allow values: Inner, Public
     */
    readonly connectionStringType?: string;

    /**
     * @Property couponCode: The coupon code of the order.
     */
    readonly couponCode?: string;

    /**
     * @Property dbInstanceDescription: Description of created database instance.
     */
    readonly dbInstanceDescription?: string;

    /**
     * @Property dbInstanceNetType: Database instance net type, default is Intranet.Internet for public access, Intranet for private access.
     */
    readonly dbInstanceNetType?: string;

    /**
     * @Property dbInstanceStorageType: The storage type of the instance. Valid values:
     * local_ssd: specifies to use local SSDs. This is the recommended storage type.
     * cloud_ssd: specifies to use standard SSDs.
     * cloud_essd: specifies to use enhanced SSDs.
     */
    readonly dbInstanceStorageType?: string;

    /**
     * @Property dbIsIgnoreCase: Specifies whether table names are case-sensitive. Valid values:
     * 1: Table names are not case-sensitive. This is the default value.
     * 0: Table names are case-sensitive.
     */
    readonly dbIsIgnoreCase?: number;

    /**
     * @Property dbMappings: Database mappings to attach to db instance.
     */
    readonly dbMappings?: Array<RosPrepayDBInstance.DBMappingsProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property dbParamGroupId: The ID of the parameter template used by the instance.
     */
    readonly dbParamGroupId?: string;

    /**
     * @Property dbTimeZone: The UTC time zone of the instance. Valid values: -12:00 to +12:00. The time zone must be an integer value such as +08:00. Values such as +08:30 are not allowed.
     */
    readonly dbTimeZone?: string;

    /**
     * @Property dedicatedHostGroupId: The ID of the host group to which the instance belongs if you create an instance in a host group.
     */
    readonly dedicatedHostGroupId?: string;

    /**
     * @Property encryptionKey: The ID of the encryption key that is used to encrypt data on SSDs in the region. You can view the encryption key ID in the Key Management Service (KMS) console. You can also create an encryption key.
     */
    readonly encryptionKey?: string;

    /**
     * @Property maintainTime: The period during which the maintenance performs. The format is HH:mmZ-HH:mmZ.
     */
    readonly maintainTime?: string;

    /**
     * @Property masterUsername: The master user name for the database instance.
     */
    readonly masterUsername?: string;

    /**
     * @Property masterUserPassword: The master password for the database instance.
     */
    readonly masterUserPassword?: string;

    /**
     * @Property masterUserType: Privilege type of account.
     *  Normal: Common privilege. 
     *  Super: High privilege. 
     * Sysadmin: Super privileges (SA) (only supported by SQL Server)
     * The default value is Normal.
     */
    readonly masterUserType?: string;

    /**
     * @Property multiAz: Specifies if the database instance is a multiple Availability Zone deployment.
     */
    readonly multiAz?: boolean | ros.IResolvable;

    /**
     * @Property port: The port of the database service.
     */
    readonly port?: number;

    /**
     * @Property preferredBackupPeriod: The backup period. Separate multiple values with commas (,). The default value is the original value. Valid values:Monday Tuesday Wednesday Thursday Friday Saturday Sunday Note When the BackupPolicyMode parameter is set to DataBackupPolicy, this parameter is required.
     */
    readonly preferredBackupPeriod?: Array<any | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property preferredBackupTime: The time when the backup task is performed. Format: yyyy-MM-ddZ-HH:mm:ssZ.Note When the BackupPolicyMode parameter is set to DataBackupPolicy, this parameter is required.
     */
    readonly preferredBackupTime?: string;

    /**
     * @Property privateIpAddress: The private ip for created instance.
     */
    readonly privateIpAddress?: string;

    /**
     * @Property quantity: The number of instance to be created, default is 1, max number is 99
     */
    readonly quantity?: number;

    /**
     * @Property resourceGroupId: Resource group id.
     */
    readonly resourceGroupId?: string;

    /**
     * @Property roleArn: The Alibaba Cloud Resource Name (ARN) provided to the service account of the instance by your Alibaba Cloud account to connect to KMS. You can copy the ARN from the RAM console.
     */
    readonly roleArn?: string;

    /**
     * @Property securityGroupId: The ID of the ECS security groups. 
     * Each RDS instance can be associated with up to three ECS security groups. 
     * You must separate them with commas (,). 
     * To delete an ECS Security group, leave this parameter empty. 
     *
     */
    readonly securityGroupId?: string;

    /**
     * @Property slaveZoneIds: List of slave zone ids can specify slave zone ids when creating the high-availability or enterprise edition instance. Meanwhile, VSwitchId needs to pass in the corresponding vswitch id to the slave zone by order. For example, ZoneId = "zone-a" and SlaveZoneIds = ["zone-c", "zone-b"], then the VSwitchId must be "vsw-zone-a,vsw-zone-c,vsw-zone-b". Of course, you can also choose automatic allocation, for example, ZoneId = "zone-a" and SlaveZoneIds = ["Auto", "Auto"], then the VSwitchId must be "vsw-zone-a,Auto,Auto". The list contains up to 2 slave zone ids, separated by commas.
     */
    readonly slaveZoneIds?: string[];

    /**
     * @Property sqlCollectorStatus: Specifies whether to enable or disable the SQL Explorer (SQL audit) feature. 
     * Valid values:Enable | Disabled.
     */
    readonly sqlCollectorStatus?: string;

    /**
     * @Property sslSetting: Secure Sockets Layer (SSL) link setting of the instance. Valid values:
     * Disabled: Disable SSL
     * EnabledForPublicConnection: Public connection address will be protected by the SSL certificate. It requires AllocatePublicConnection is true.
     * EnabledForInnerConnection: Private connection address will be protected by the SSL certificate.
     * Default value is Disabled.
     */
    readonly sslSetting?: string;

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
    readonly tags?: ros.RosTag[];

    /**
     * @Property targetDedicatedHostIdForLog: The ID of the host to which the instance belongs if you create a log instance in a host group.
     */
    readonly targetDedicatedHostIdForLog?: string;

    /**
     * @Property targetDedicatedHostIdForMaster: The ID of the host to which the instance belongs if you create a primary instance in a host group.
     */
    readonly targetDedicatedHostIdForMaster?: string;

    /**
     * @Property targetDedicatedHostIdForSlave: The ID of the host to which the instance belongs if you create a secondary instance in a host group.
     */
    readonly targetDedicatedHostIdForSlave?: string;

    /**
     * @Property vpcId: The VPC id of created database instance. For VPC network, the property is required.
     */
    readonly vpcId?: string;

    /**
     * @Property vSwitchId: The vSwitch id of created instance. For VPC network, the property is required.
     */
    readonly vSwitchId?: string;

    /**
     * @Property zoneId: selected zone to create database instance. You cannot set the ZoneId parameter if the MultiAZ parameter is set to true.
     */
    readonly zoneId?: string;
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
    if(properties.category && (typeof properties.category) !== 'object') {
        errors.collect(ros.propertyValidator('category', ros.validateAllowedValues)({
          data: properties.category,
          allowedValues: ["Basic","HighAvailability","AlwaysOn","Finance"],
        }));
    }
    errors.collect(ros.propertyValidator('category', ros.validateString)(properties.category));
    errors.collect(ros.propertyValidator('privateIpAddress', ros.validateString)(properties.privateIpAddress));
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    errors.collect(ros.propertyValidator('targetDedicatedHostIdForSlave', ros.validateString)(properties.targetDedicatedHostIdForSlave));
    if(properties.dbInstanceNetType && (typeof properties.dbInstanceNetType) !== 'object') {
        errors.collect(ros.propertyValidator('dbInstanceNetType', ros.validateAllowedValues)({
          data: properties.dbInstanceNetType,
          allowedValues: ["Internet","Intranet"],
        }));
    }
    errors.collect(ros.propertyValidator('dbInstanceNetType', ros.validateString)(properties.dbInstanceNetType));
    errors.collect(ros.propertyValidator('dbTimeZone', ros.validateString)(properties.dbTimeZone));
    errors.collect(ros.propertyValidator('dedicatedHostGroupId', ros.validateString)(properties.dedicatedHostGroupId));
    errors.collect(ros.propertyValidator('autoRenew', ros.validateBoolean)(properties.autoRenew));
    if(properties.port && (typeof properties.port) !== 'object') {
        errors.collect(ros.propertyValidator('port', ros.validateRange)({
            data: properties.port,
            min: 1,
            max: 65535,
          }));
    }
    errors.collect(ros.propertyValidator('port', ros.validateNumber)(properties.port));
    errors.collect(ros.propertyValidator('encryptionKey', ros.validateString)(properties.encryptionKey));
    errors.collect(ros.propertyValidator('preferredBackupPeriod', ros.listValidator(ros.validateAny))(properties.preferredBackupPeriod));
    if(properties.slaveZoneIds && (Array.isArray(properties.slaveZoneIds) || (typeof properties.slaveZoneIds) === 'string')) {
        errors.collect(ros.propertyValidator('slaveZoneIds', ros.validateLength)({
            data: properties.slaveZoneIds.length,
            min: undefined,
            max: 2,
          }));
    }
    errors.collect(ros.propertyValidator('slaveZoneIds', ros.listValidator(ros.validateString))(properties.slaveZoneIds));
    errors.collect(ros.propertyValidator('dbIsIgnoreCase', ros.validateNumber)(properties.dbIsIgnoreCase));
    errors.collect(ros.propertyValidator('dbInstanceStorage', ros.requiredValidator)(properties.dbInstanceStorage));
    errors.collect(ros.propertyValidator('dbInstanceStorage', ros.validateNumber)(properties.dbInstanceStorage));
    errors.collect(ros.propertyValidator('commodityCode', ros.requiredValidator)(properties.commodityCode));
    if(properties.commodityCode && (typeof properties.commodityCode) !== 'object') {
        errors.collect(ros.propertyValidator('commodityCode', ros.validateAllowedValues)({
          data: properties.commodityCode,
          allowedValues: ["rds","bards","rords"],
        }));
    }
    errors.collect(ros.propertyValidator('commodityCode', ros.validateString)(properties.commodityCode));
    errors.collect(ros.propertyValidator('dbMappings', ros.listValidator(RosPrepayDBInstance_DBMappingsPropertyValidator))(properties.dbMappings));
    if(properties.connectionStringPrefix && (typeof properties.connectionStringPrefix) !== 'object') {
        errors.collect(ros.propertyValidator('connectionStringPrefix', ros.validateAllowedPattern)({
          data: properties.connectionStringPrefix,
          reg: /[a-zA-Z0-9-]{8,64}/
        }));
    }
    errors.collect(ros.propertyValidator('connectionStringPrefix', ros.validateString)(properties.connectionStringPrefix));
    errors.collect(ros.propertyValidator('multiAz', ros.validateBoolean)(properties.multiAz));
    errors.collect(ros.propertyValidator('maintainTime', ros.validateString)(properties.maintainTime));
    errors.collect(ros.propertyValidator('engine', ros.requiredValidator)(properties.engine));
    if(properties.engine && (typeof properties.engine) !== 'object') {
        errors.collect(ros.propertyValidator('engine', ros.validateAllowedValues)({
          data: properties.engine,
          allowedValues: ["MySQL","SQLServer","PostgreSQL","PPAS","MariaDB"],
        }));
    }
    errors.collect(ros.propertyValidator('engine', ros.validateString)(properties.engine));
    errors.collect(ros.propertyValidator('tags', ros.listValidator(ros.validateRosTag))(properties.tags));
    errors.collect(ros.propertyValidator('dbParamGroupId', ros.validateString)(properties.dbParamGroupId));
    errors.collect(ros.propertyValidator('dbInstanceDescription', ros.validateString)(properties.dbInstanceDescription));
    errors.collect(ros.propertyValidator('targetDedicatedHostIdForMaster', ros.validateString)(properties.targetDedicatedHostIdForMaster));
    errors.collect(ros.propertyValidator('engineVersion', ros.requiredValidator)(properties.engineVersion));
    errors.collect(ros.propertyValidator('engineVersion', ros.validateString)(properties.engineVersion));
    errors.collect(ros.propertyValidator('zoneId', ros.validateString)(properties.zoneId));
    errors.collect(ros.propertyValidator('targetDedicatedHostIdForLog', ros.validateString)(properties.targetDedicatedHostIdForLog));
    errors.collect(ros.propertyValidator('dbInstanceClass', ros.requiredValidator)(properties.dbInstanceClass));
    errors.collect(ros.propertyValidator('dbInstanceClass', ros.validateString)(properties.dbInstanceClass));
    errors.collect(ros.propertyValidator('allocatePublicConnection', ros.validateBoolean)(properties.allocatePublicConnection));
    errors.collect(ros.propertyValidator('securityGroupId', ros.validateString)(properties.securityGroupId));
    errors.collect(ros.propertyValidator('preferredBackupTime', ros.validateString)(properties.preferredBackupTime));
    errors.collect(ros.propertyValidator('vSwitchId', ros.validateString)(properties.vSwitchId));
    if(properties.quantity && (typeof properties.quantity) !== 'object') {
        errors.collect(ros.propertyValidator('quantity', ros.validateRange)({
            data: properties.quantity,
            min: 1,
            max: 99,
          }));
    }
    errors.collect(ros.propertyValidator('quantity', ros.validateNumber)(properties.quantity));
    errors.collect(ros.propertyValidator('period', ros.requiredValidator)(properties.period));
    if(properties.period && (typeof properties.period) !== 'object') {
        errors.collect(ros.propertyValidator('period', ros.validateRange)({
            data: properties.period,
            min: 1,
            max: 9,
          }));
    }
    errors.collect(ros.propertyValidator('period', ros.validateNumber)(properties.period));
    errors.collect(ros.propertyValidator('autoPay', ros.validateBoolean)(properties.autoPay));
    errors.collect(ros.propertyValidator('dbInstanceStorageType', ros.validateString)(properties.dbInstanceStorageType));
    errors.collect(ros.propertyValidator('roleArn', ros.validateString)(properties.roleArn));
    if(properties.connectionStringType && (typeof properties.connectionStringType) !== 'object') {
        errors.collect(ros.propertyValidator('connectionStringType', ros.validateAllowedValues)({
          data: properties.connectionStringType,
          allowedValues: ["Inner","Public"],
        }));
    }
    errors.collect(ros.propertyValidator('connectionStringType', ros.validateString)(properties.connectionStringType));
    if(properties.masterUserPassword && (Array.isArray(properties.masterUserPassword) || (typeof properties.masterUserPassword) === 'string')) {
        errors.collect(ros.propertyValidator('masterUserPassword', ros.validateLength)({
            data: properties.masterUserPassword.length,
            min: 8,
            max: 32,
          }));
    }
    errors.collect(ros.propertyValidator('masterUserPassword', ros.validateString)(properties.masterUserPassword));
    errors.collect(ros.propertyValidator('couponCode', ros.validateString)(properties.couponCode));
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
    errors.collect(ros.propertyValidator('connectionMode', ros.validateString)(properties.connectionMode));
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
      AutoPay: ros.booleanToRosTemplate(properties.autoPay),
      AutoRenew: ros.booleanToRosTemplate(properties.autoRenew),
      BackupRetentionPeriod: ros.numberToRosTemplate(properties.backupRetentionPeriod),
      Category: ros.stringToRosTemplate(properties.category),
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
      EncryptionKey: ros.stringToRosTemplate(properties.encryptionKey),
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
      ResourceGroupId: ros.stringToRosTemplate(properties.resourceGroupId),
      RoleARN: ros.stringToRosTemplate(properties.roleArn),
      SecurityGroupId: ros.stringToRosTemplate(properties.securityGroupId),
      SlaveZoneIds: ros.listMapper(ros.stringToRosTemplate)(properties.slaveZoneIds),
      SQLCollectorStatus: ros.stringToRosTemplate(properties.sqlCollectorStatus),
      SSLSetting: ros.stringToRosTemplate(properties.sslSetting),
      Tags: ros.listMapper(ros.rosTagToRosTemplate)(properties.tags),
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
    public readonly attrDbInstanceId: any;

    /**
     * @Attribute InnerConnectionString: DB instance connection url by Intranet.
     */
    public readonly attrInnerConnectionString: any;

    /**
     * @Attribute InnerIPAddress: IP Address for created DB instance of Intranet.
     */
    public readonly attrInnerIpAddress: any;

    /**
     * @Attribute InnerPort: Intranet port of created DB instance.
     */
    public readonly attrInnerPort: any;

    /**
     * @Attribute OrderId: The order id list of created instance.
     */
    public readonly attrOrderId: any;

    /**
     * @Attribute PublicConnectionString: DB instance connection url by Internet.
     */
    public readonly attrPublicConnectionString: any;

    /**
     * @Attribute PublicIPAddress: IP Address for created DB instance of Internet.
     */
    public readonly attrPublicIpAddress: any;

    /**
     * @Attribute PublicPort: Internet port of created DB instance.
     */
    public readonly attrPublicPort: any;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property commodityCode: The CommodityCode of the order.
     */
    public commodityCode: string;

    /**
     * @Property dbInstanceClass: Database instance type. Refer the RDS database instance type reference, such as 'rds.mys2.large', 'rds.mss1.large', 'rds.pg.s1.small' etc
     */
    public dbInstanceClass: string;

    /**
     * @Property dbInstanceStorage: Database instance storage size. mysql is [5,1000]. sql server 2008r2 is [10,1000], sql server 2012/2012_web/2016-web is [20,1000]. PostgreSQL and PPAS is [5,2000]. Increased every 5 GB, Unit in GB
     */
    public dbInstanceStorage: number;

    /**
     * @Property engine: Database instance engine type. Support MySQL/SQLServer/PostgreSQL/PPAS/MariaDB now.
     */
    public engine: string;

    /**
     * @Property engineVersion: Database instance version of the relative engine type.Support MySQL: 5.5/5.6/5.7/8.0;
     * SQLServer: 2008r2/2012/2012_ent_ha/2012_std_ha/2012_web/2016_ent_ha/2016_std_ha/2016_web/2017_std_ha/2017_ent;
     * PostgreSQL: 9.4/10.0/11.0/12.0;
     * PPAS: 9.3/10.0;
     * MariaDB: 10.3.
     */
    public engineVersion: string;

    /**
     * @Property period: Prepaid time period. While choose by pay by month, it could be from 1 to 9. While choose pay by year, it could be from 1 to 3.
     */
    public period: number;

    /**
     * @Property periodType: Charge period for created instances.
     */
    public periodType: string;

    /**
     * @Property allocatePublicConnection: If true, allocate public connection automate.
     */
    public allocatePublicConnection: boolean | ros.IResolvable | undefined;

    /**
     * @Property autoPay: Automatic Payment. Default is false.
     */
    public autoPay: boolean | ros.IResolvable | undefined;

    /**
     * @Property autoRenew: Auto renew the prepay instance. If the period type is by year, it will renew by year, else it will renew by month.
     */
    public autoRenew: boolean | ros.IResolvable | undefined;

    /**
     * @Property backupRetentionPeriod: The retention period of the data backup. Value range: 7 to 730. The default value is the original value. Note When the BackupPolicyMode parameter is set to LogBackupPolicy, this parameter is required.
     */
    public backupRetentionPeriod: number | undefined;

    /**
     * @Property category: The edition of the instance. Valid values:
     * Basic: specifies to use the Basic Edition.
     * HighAvailability: specifies to use the High-availability Edition.
     * AlwaysOn: specifies to use the Cluster Edition.
     * Finance: specifies to use the Enterprise Edition.
     */
    public category: string | undefined;

    /**
     * @Property connectionMode: Connection Mode for database instance,support 'Standard' and 'Safe' mode. Default is RDS system assigns.
     */
    public connectionMode: string | undefined;

    /**
     * @Property connectionStringPrefix: The prefix of the endpoint. 
     * Only the prefix of the CurrentConnectionString parameter value can be modified.
     * The prefix must be 8 to 64 characters in length and can contain letters, digits, and hyphens (-).
     */
    public connectionStringPrefix: string | undefined;

    /**
     * @Property connectionStringType: The endpoint type of the instance, allow values: Inner, Public
     */
    public connectionStringType: string | undefined;

    /**
     * @Property couponCode: The coupon code of the order.
     */
    public couponCode: string | undefined;

    /**
     * @Property dbInstanceDescription: Description of created database instance.
     */
    public dbInstanceDescription: string | undefined;

    /**
     * @Property dbInstanceNetType: Database instance net type, default is Intranet.Internet for public access, Intranet for private access.
     */
    public dbInstanceNetType: string | undefined;

    /**
     * @Property dbInstanceStorageType: The storage type of the instance. Valid values:
     * local_ssd: specifies to use local SSDs. This is the recommended storage type.
     * cloud_ssd: specifies to use standard SSDs.
     * cloud_essd: specifies to use enhanced SSDs.
     */
    public dbInstanceStorageType: string | undefined;

    /**
     * @Property dbIsIgnoreCase: Specifies whether table names are case-sensitive. Valid values:
     * 1: Table names are not case-sensitive. This is the default value.
     * 0: Table names are case-sensitive.
     */
    public dbIsIgnoreCase: number | undefined;

    /**
     * @Property dbMappings: Database mappings to attach to db instance.
     */
    public dbMappings: Array<RosPrepayDBInstance.DBMappingsProperty | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property dbParamGroupId: The ID of the parameter template used by the instance.
     */
    public dbParamGroupId: string | undefined;

    /**
     * @Property dbTimeZone: The UTC time zone of the instance. Valid values: -12:00 to +12:00. The time zone must be an integer value such as +08:00. Values such as +08:30 are not allowed.
     */
    public dbTimeZone: string | undefined;

    /**
     * @Property dedicatedHostGroupId: The ID of the host group to which the instance belongs if you create an instance in a host group.
     */
    public dedicatedHostGroupId: string | undefined;

    /**
     * @Property encryptionKey: The ID of the encryption key that is used to encrypt data on SSDs in the region. You can view the encryption key ID in the Key Management Service (KMS) console. You can also create an encryption key.
     */
    public encryptionKey: string | undefined;

    /**
     * @Property maintainTime: The period during which the maintenance performs. The format is HH:mmZ-HH:mmZ.
     */
    public maintainTime: string | undefined;

    /**
     * @Property masterUsername: The master user name for the database instance.
     */
    public masterUsername: string | undefined;

    /**
     * @Property masterUserPassword: The master password for the database instance.
     */
    public masterUserPassword: string | undefined;

    /**
     * @Property masterUserType: Privilege type of account.
     *  Normal: Common privilege. 
     *  Super: High privilege. 
     * Sysadmin: Super privileges (SA) (only supported by SQL Server)
     * The default value is Normal.
     */
    public masterUserType: string | undefined;

    /**
     * @Property multiAz: Specifies if the database instance is a multiple Availability Zone deployment.
     */
    public multiAz: boolean | ros.IResolvable | undefined;

    /**
     * @Property port: The port of the database service.
     */
    public port: number | undefined;

    /**
     * @Property preferredBackupPeriod: The backup period. Separate multiple values with commas (,). The default value is the original value. Valid values:Monday Tuesday Wednesday Thursday Friday Saturday Sunday Note When the BackupPolicyMode parameter is set to DataBackupPolicy, this parameter is required.
     */
    public preferredBackupPeriod: Array<any | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property preferredBackupTime: The time when the backup task is performed. Format: yyyy-MM-ddZ-HH:mm:ssZ.Note When the BackupPolicyMode parameter is set to DataBackupPolicy, this parameter is required.
     */
    public preferredBackupTime: string | undefined;

    /**
     * @Property privateIpAddress: The private ip for created instance.
     */
    public privateIpAddress: string | undefined;

    /**
     * @Property quantity: The number of instance to be created, default is 1, max number is 99
     */
    public quantity: number | undefined;

    /**
     * @Property resourceGroupId: Resource group id.
     */
    public resourceGroupId: string | undefined;

    /**
     * @Property roleArn: The Alibaba Cloud Resource Name (ARN) provided to the service account of the instance by your Alibaba Cloud account to connect to KMS. You can copy the ARN from the RAM console.
     */
    public roleArn: string | undefined;

    /**
     * @Property securityGroupId: The ID of the ECS security groups. 
     * Each RDS instance can be associated with up to three ECS security groups. 
     * You must separate them with commas (,). 
     * To delete an ECS Security group, leave this parameter empty. 
     *
     */
    public securityGroupId: string | undefined;

    /**
     * @Property slaveZoneIds: List of slave zone ids can specify slave zone ids when creating the high-availability or enterprise edition instance. Meanwhile, VSwitchId needs to pass in the corresponding vswitch id to the slave zone by order. For example, ZoneId = "zone-a" and SlaveZoneIds = ["zone-c", "zone-b"], then the VSwitchId must be "vsw-zone-a,vsw-zone-c,vsw-zone-b". Of course, you can also choose automatic allocation, for example, ZoneId = "zone-a" and SlaveZoneIds = ["Auto", "Auto"], then the VSwitchId must be "vsw-zone-a,Auto,Auto". The list contains up to 2 slave zone ids, separated by commas.
     */
    public slaveZoneIds: string[] | undefined;

    /**
     * @Property sqlCollectorStatus: Specifies whether to enable or disable the SQL Explorer (SQL audit) feature. 
     * Valid values:Enable | Disabled.
     */
    public sqlCollectorStatus: string | undefined;

    /**
     * @Property sslSetting: Secure Sockets Layer (SSL) link setting of the instance. Valid values:
     * Disabled: Disable SSL
     * EnabledForPublicConnection: Public connection address will be protected by the SSL certificate. It requires AllocatePublicConnection is true.
     * EnabledForInnerConnection: Private connection address will be protected by the SSL certificate.
     * Default value is Disabled.
     */
    public sslSetting: string | undefined;

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
    public readonly tags: ros.TagManager;

    /**
     * @Property targetDedicatedHostIdForLog: The ID of the host to which the instance belongs if you create a log instance in a host group.
     */
    public targetDedicatedHostIdForLog: string | undefined;

    /**
     * @Property targetDedicatedHostIdForMaster: The ID of the host to which the instance belongs if you create a primary instance in a host group.
     */
    public targetDedicatedHostIdForMaster: string | undefined;

    /**
     * @Property targetDedicatedHostIdForSlave: The ID of the host to which the instance belongs if you create a secondary instance in a host group.
     */
    public targetDedicatedHostIdForSlave: string | undefined;

    /**
     * @Property vpcId: The VPC id of created database instance. For VPC network, the property is required.
     */
    public vpcId: string | undefined;

    /**
     * @Property vSwitchId: The vSwitch id of created instance. For VPC network, the property is required.
     */
    public vSwitchId: string | undefined;

    /**
     * @Property zoneId: selected zone to create database instance. You cannot set the ZoneId parameter if the MultiAZ parameter is set to true.
     */
    public zoneId: string | undefined;

    /**
     * Create a new `ALIYUN::RDS::PrepayDBInstance`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosPrepayDBInstanceProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosPrepayDBInstance.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrDbInstanceId = ros.Token.asString(this.getAtt('DBInstanceId'));
        this.attrInnerConnectionString = ros.Token.asString(this.getAtt('InnerConnectionString'));
        this.attrInnerIpAddress = ros.Token.asString(this.getAtt('InnerIPAddress'));
        this.attrInnerPort = ros.Token.asString(this.getAtt('InnerPort'));
        this.attrOrderId = ros.Token.asString(this.getAtt('OrderId'));
        this.attrPublicConnectionString = ros.Token.asString(this.getAtt('PublicConnectionString'));
        this.attrPublicIpAddress = ros.Token.asString(this.getAtt('PublicIPAddress'));
        this.attrPublicPort = ros.Token.asString(this.getAtt('PublicPort'));

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.commodityCode = props.commodityCode;
        this.dbInstanceClass = props.dbInstanceClass;
        this.dbInstanceStorage = props.dbInstanceStorage;
        this.engine = props.engine;
        this.engineVersion = props.engineVersion;
        this.period = props.period;
        this.periodType = props.periodType;
        this.allocatePublicConnection = props.allocatePublicConnection;
        this.autoPay = props.autoPay;
        this.autoRenew = props.autoRenew;
        this.backupRetentionPeriod = props.backupRetentionPeriod;
        this.category = props.category;
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
        this.encryptionKey = props.encryptionKey;
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
        this.resourceGroupId = props.resourceGroupId;
        this.roleArn = props.roleArn;
        this.securityGroupId = props.securityGroupId;
        this.slaveZoneIds = props.slaveZoneIds;
        this.sqlCollectorStatus = props.sqlCollectorStatus;
        this.sslSetting = props.sslSetting;
        this.tags = new ros.TagManager(ros.TagType.STANDARD, "ALIYUN::RDS::PrepayDBInstance", props.tags, { tagPropertyName: 'tags' });
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
            autoPay: this.autoPay,
            autoRenew: this.autoRenew,
            backupRetentionPeriod: this.backupRetentionPeriod,
            category: this.category,
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
            encryptionKey: this.encryptionKey,
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
            resourceGroupId: this.resourceGroupId,
            roleArn: this.roleArn,
            securityGroupId: this.securityGroupId,
            slaveZoneIds: this.slaveZoneIds,
            sqlCollectorStatus: this.sqlCollectorStatus,
            sslSetting: this.sslSetting,
            tags: this.tags.renderTags(),
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
        readonly characterSetName: string;
        /**
         * @Property dbDescription: Specifies the database description, containing up to 256 characters.
         */
        readonly dbDescription?: string;
        /**
         * @Property dbName: Consists of [2, 64] lower case letters, numbers, underscores, lines, letters. Must start with a letter, end with letters or numbers
         */
        readonly dbName: string;
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
    readonly dbInstanceClass: string;

    /**
     * @Property dbInstanceId: The ID of the master instance.
     */
    readonly dbInstanceId: string;

    /**
     * @Property dbInstanceStorage: The storage space of the instance. Value range: 5 to 3000. The value must be a multiple of 5. Unit: GB.
     */
    readonly dbInstanceStorage: number;

    /**
     * @Property engineVersion: The version of the database. The database and the master instance must have the same database version. Valid values:
     * - 5.6
     * - 5.7
     * - 8.0
     * - 2017_ent
     */
    readonly engineVersion: string;

    /**
     * @Property zoneId: The ID of the zone. You can call the DescribeRegions API operation to view the latest zones.
     */
    readonly zoneId: string;

    /**
     * @Property category: The edition of the instance. Valid values:
     * - Basic
     * - HighAvailability
     * - AlwaysOn
     */
    readonly category?: string;

    /**
     * @Property dbInstanceDescription: Description of created database instance.
     */
    readonly dbInstanceDescription?: string;

    /**
     * @Property dbInstanceStorageType: The storage type of the instance. Valid values:
     * - local_ssd/ephemeral_ssd: local SSDs.
     * - cloud_ssd: SSDs.
     * - cloud_essd: ESSDs.
     */
    readonly dbInstanceStorageType?: string;

    /**
     * @Property payType: The billing method. The system only supports Pay-As-You-Go. Valid value: Postpaid.
     */
    readonly payType?: string;

    /**
     * @Property privateIpAddress: The private IP address of the read-only instance. It must be within the IP address range provided by the switch. The system automatically assigns an IP address based on the VPCId and VSwitchId by default.
     */
    readonly privateIpAddress?: string;

    /**
     * @Property resourceGroupId: Resource group id.
     */
    readonly resourceGroupId?: string;

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
    readonly tags?: ros.RosTag[];

    /**
     * @Property vpcId: The ID of the VPC.
     */
    readonly vpcId?: string;

    /**
     * @Property vSwitchId: The ID of the VSwitch.
     */
    readonly vSwitchId?: string;
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
    if(properties.category && (typeof properties.category) !== 'object') {
        errors.collect(ros.propertyValidator('category', ros.validateAllowedValues)({
          data: properties.category,
          allowedValues: ["Basic","HighAvailability","AlwaysOn"],
        }));
    }
    errors.collect(ros.propertyValidator('category', ros.validateString)(properties.category));
    errors.collect(ros.propertyValidator('engineVersion', ros.requiredValidator)(properties.engineVersion));
    if(properties.engineVersion && (typeof properties.engineVersion) !== 'object') {
        errors.collect(ros.propertyValidator('engineVersion', ros.validateAllowedValues)({
          data: properties.engineVersion,
          allowedValues: ["5.6","5.7","8.0","2017_ent"],
        }));
    }
    errors.collect(ros.propertyValidator('engineVersion', ros.validateString)(properties.engineVersion));
    errors.collect(ros.propertyValidator('privateIpAddress', ros.validateString)(properties.privateIpAddress));
    errors.collect(ros.propertyValidator('zoneId', ros.requiredValidator)(properties.zoneId));
    errors.collect(ros.propertyValidator('zoneId', ros.validateString)(properties.zoneId));
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    errors.collect(ros.propertyValidator('vpcId', ros.validateString)(properties.vpcId));
    errors.collect(ros.propertyValidator('dbInstanceClass', ros.requiredValidator)(properties.dbInstanceClass));
    errors.collect(ros.propertyValidator('dbInstanceClass', ros.validateString)(properties.dbInstanceClass));
    errors.collect(ros.propertyValidator('vSwitchId', ros.validateString)(properties.vSwitchId));
    if(properties.payType && (typeof properties.payType) !== 'object') {
        errors.collect(ros.propertyValidator('payType', ros.validateAllowedValues)({
          data: properties.payType,
          allowedValues: ["Postpaid"],
        }));
    }
    errors.collect(ros.propertyValidator('payType', ros.validateString)(properties.payType));
    if(properties.dbInstanceStorageType && (typeof properties.dbInstanceStorageType) !== 'object') {
        errors.collect(ros.propertyValidator('dbInstanceStorageType', ros.validateAllowedValues)({
          data: properties.dbInstanceStorageType,
          allowedValues: ["local_ssd/ephemeral_ssd","cloud_ssd","cloud_essd"],
        }));
    }
    errors.collect(ros.propertyValidator('dbInstanceStorageType', ros.validateString)(properties.dbInstanceStorageType));
    errors.collect(ros.propertyValidator('dbInstanceId', ros.requiredValidator)(properties.dbInstanceId));
    errors.collect(ros.propertyValidator('dbInstanceId', ros.validateString)(properties.dbInstanceId));
    errors.collect(ros.propertyValidator('dbInstanceStorage', ros.requiredValidator)(properties.dbInstanceStorage));
    errors.collect(ros.propertyValidator('dbInstanceStorage', ros.validateNumber)(properties.dbInstanceStorage));
    errors.collect(ros.propertyValidator('dbInstanceDescription', ros.validateString)(properties.dbInstanceDescription));
    errors.collect(ros.propertyValidator('tags', ros.listValidator(ros.validateRosTag))(properties.tags));
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
      Category: ros.stringToRosTemplate(properties.category),
      DBInstanceDescription: ros.stringToRosTemplate(properties.dbInstanceDescription),
      DBInstanceStorageType: ros.stringToRosTemplate(properties.dbInstanceStorageType),
      PayType: ros.stringToRosTemplate(properties.payType),
      PrivateIpAddress: ros.stringToRosTemplate(properties.privateIpAddress),
      ResourceGroupId: ros.stringToRosTemplate(properties.resourceGroupId),
      Tags: ros.listMapper(ros.rosTagToRosTemplate)(properties.tags),
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
    public readonly attrConnectionString: any;

    /**
     * @Attribute DBInstanceId: The instance id of created database instance.
     */
    public readonly attrDbInstanceId: any;

    /**
     * @Attribute Port: Intranet port of created DB instance.
     */
    public readonly attrPort: any;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property dbInstanceClass: The type of the instance. For more information, see Instance type list. The type of the read-only instance must be no less than that of the master instance. Otherwise, the read-only instance incurs high latency and high load.
     */
    public dbInstanceClass: string;

    /**
     * @Property dbInstanceId: The ID of the master instance.
     */
    public dbInstanceId: string;

    /**
     * @Property dbInstanceStorage: The storage space of the instance. Value range: 5 to 3000. The value must be a multiple of 5. Unit: GB.
     */
    public dbInstanceStorage: number;

    /**
     * @Property engineVersion: The version of the database. The database and the master instance must have the same database version. Valid values:
     * - 5.6
     * - 5.7
     * - 8.0
     * - 2017_ent
     */
    public engineVersion: string;

    /**
     * @Property zoneId: The ID of the zone. You can call the DescribeRegions API operation to view the latest zones.
     */
    public zoneId: string;

    /**
     * @Property category: The edition of the instance. Valid values:
     * - Basic
     * - HighAvailability
     * - AlwaysOn
     */
    public category: string | undefined;

    /**
     * @Property dbInstanceDescription: Description of created database instance.
     */
    public dbInstanceDescription: string | undefined;

    /**
     * @Property dbInstanceStorageType: The storage type of the instance. Valid values:
     * - local_ssd/ephemeral_ssd: local SSDs.
     * - cloud_ssd: SSDs.
     * - cloud_essd: ESSDs.
     */
    public dbInstanceStorageType: string | undefined;

    /**
     * @Property payType: The billing method. The system only supports Pay-As-You-Go. Valid value: Postpaid.
     */
    public payType: string | undefined;

    /**
     * @Property privateIpAddress: The private IP address of the read-only instance. It must be within the IP address range provided by the switch. The system automatically assigns an IP address based on the VPCId and VSwitchId by default.
     */
    public privateIpAddress: string | undefined;

    /**
     * @Property resourceGroupId: Resource group id.
     */
    public resourceGroupId: string | undefined;

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
    public readonly tags: ros.TagManager;

    /**
     * @Property vpcId: The ID of the VPC.
     */
    public vpcId: string | undefined;

    /**
     * @Property vSwitchId: The ID of the VSwitch.
     */
    public vSwitchId: string | undefined;

    /**
     * Create a new `ALIYUN::RDS::ReadOnlyDBInstance`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosReadOnlyDBInstanceProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosReadOnlyDBInstance.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrConnectionString = ros.Token.asString(this.getAtt('ConnectionString'));
        this.attrDbInstanceId = ros.Token.asString(this.getAtt('DBInstanceId'));
        this.attrPort = ros.Token.asString(this.getAtt('Port'));

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.dbInstanceClass = props.dbInstanceClass;
        this.dbInstanceId = props.dbInstanceId;
        this.dbInstanceStorage = props.dbInstanceStorage;
        this.engineVersion = props.engineVersion;
        this.zoneId = props.zoneId;
        this.category = props.category;
        this.dbInstanceDescription = props.dbInstanceDescription;
        this.dbInstanceStorageType = props.dbInstanceStorageType;
        this.payType = props.payType;
        this.privateIpAddress = props.privateIpAddress;
        this.resourceGroupId = props.resourceGroupId;
        this.tags = new ros.TagManager(ros.TagType.STANDARD, "ALIYUN::RDS::ReadOnlyDBInstance", props.tags, { tagPropertyName: 'tags' });
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
            category: this.category,
            dbInstanceDescription: this.dbInstanceDescription,
            dbInstanceStorageType: this.dbInstanceStorageType,
            payType: this.payType,
            privateIpAddress: this.privateIpAddress,
            resourceGroupId: this.resourceGroupId,
            tags: this.tags.renderTags(),
            vpcId: this.vpcId,
            vSwitchId: this.vSwitchId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosReadOnlyDBInstancePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
