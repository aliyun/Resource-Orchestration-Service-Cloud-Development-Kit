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
 * A ROS template type:  `ALIYUN::RDS::ADInfo`
 */
export declare class RosADInfo extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::RDS::ADInfo";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute ADDNS: Active directory domain name.
     */
    readonly attrAddns: any;
    /**
     * @Attribute DBInstanceId: The ID of the instance.
     */
    readonly attrDbInstanceId: any;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property adAccountName: Domain account name.
     */
    adAccountName: string;
    /**
     * @Property addns: Active directory domain name.
     */
    addns: string;
    /**
     * @Property adPassword: Domain password.
     */
    adPassword: string;
    /**
     * @Property adServerIpAddress: The IP address of the AD server, it must be in the same VPC as the RDS.
     */
    adServerIpAddress: string;
    /**
     * @Property dbInstanceId: The ID of the instance.
     */
    dbInstanceId: string;
    /**
     * Create a new `ALIYUN::RDS::ADInfo`.
     *
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
 * A ROS template type:  `ALIYUN::RDS::Account`
 */
export declare class RosAccount extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::RDS::Account";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute AccountName: Account name
     */
    readonly attrAccountName: any;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property accountName: Account name, which must be unique and meet the following requirements:
     * Start with a letter;
     * Consist of lower-case letters, digits, and underscores (_);
     * Contain no more than 16 characters.
     * For other invalid characters, see Forbidden keywords table.
     */
    accountName: string;
    /**
     * @Property accountPassword: The account password for the database instance. It may consist of letters, digits, or underlines, with a length of 8 to 32 characters.
     */
    accountPassword: string;
    /**
     * @Property dbInstanceId: RDS instance ID.
     */
    dbInstanceId: string;
    /**
     * @Property accountDescription: Account remarks.
     * It cannot begin with http:// or https://.
     * It must start with a Chinese character or English letter.
     * It can include Chinese and English characters/letters, underscores (_), hyphens (-), and digits.
     * The length may be 2-256 characters.
     */
    accountDescription: string | undefined;
    /**
     * @Property accountType: Privilege type of account.
     * Normal: Common privilege.
     * Super: High privilege. And the default value is Normal.
     * This parameter is valid for MySQL 5.5/5.6 only.
     * MySQL 5.7, SQL Server 2012/2016, PostgreSQL, and PPAS each can have only one initial account. Other accounts are created by the initial account that has logged on to the database.
     */
    accountType: string | undefined;
    /**
     * Create a new `ALIYUN::RDS::Account`.
     *
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
 * A ROS template type:  `ALIYUN::RDS::AccountPrivilege`
 */
export declare class RosAccountPrivilege extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::RDS::AccountPrivilege";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property accountName: RDS account name.
     */
    accountName: string;
    /**
     * @Property accountPrivilege: RDS account privilege
     */
    accountPrivilege: string;
    /**
     * @Property dbInstanceId: RDS instance ID.
     */
    dbInstanceId: string;
    /**
     * @Property dbName: RDS database name
     */
    dbName: string;
    /**
     * Create a new `ALIYUN::RDS::AccountPrivilege`.
     *
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
 * A ROS template type:  `ALIYUN::RDS::DBInstance`
 */
export declare class RosDBInstance extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::RDS::DBInstance";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute DBInstanceId: The instance id of created database instance.
     */
    readonly attrDbInstanceId: any;
    /**
     * @Attribute InnerConnectionString: DB instance connection url by Intranet.
     */
    readonly attrInnerConnectionString: any;
    /**
     * @Attribute InnerIPAddress: IP Address for created DB instance of Intranet.
     */
    readonly attrInnerIpAddress: any;
    /**
     * @Attribute InnerPort: Intranet port of created DB instance.
     */
    readonly attrInnerPort: any;
    /**
     * @Attribute PublicConnectionString: DB instance connection url by Internet.
     */
    readonly attrPublicConnectionString: any;
    /**
     * @Attribute PublicIPAddress: IP Address for created DB instance of Internet.
     */
    readonly attrPublicIpAddress: any;
    /**
     * @Attribute PublicPort: Internet port of created DB instance.
     */
    readonly attrPublicPort: any;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property dbInstanceClass: Database instance type. Refer the RDS database instance type reference, such as 'rds.mys2.large', 'rds.mss1.large', 'rds.pg.s1.small' etc
     */
    dbInstanceClass: string;
    /**
     * @Property dbInstanceStorage: Database instance storage size. mysql is [5,1000]. sql server 2008r2 is [10,1000], sql server 2012/2012_web/2016-web is [20,1000]. PostgreSQL and PPAS is [5,2000]. Increased every 5 GB, Unit in GB
     */
    dbInstanceStorage: number;
    /**
     * @Property engine: Database instance engine type. Support MySQL/SQLServer/PostgreSQL/PPAS/MariaDB now.
     */
    engine: string;
    /**
     * @Property engineVersion: Database instance version of the relative engine type.Support MySQL: 5.5/5.6/5.7/8.0;
     * SQLServer: 2008r2/2012/2012_ent_ha/2012_std_ha/2012_web/2016_ent_ha/2016_std_ha/2016_web/2017_std_ha/2017_ent;
     * PostgreSQL: 9.4/10.0/11.0/12.0;
     * PPAS: 9.3/10.0;
     * MariaDB: 10.3.
     */
    engineVersion: string;
    /**
     * @Property securityIpList: Security ip to access the database instance, combine with comma, 0.0.0.0/0 means no limitation.
     */
    securityIpList: string;
    /**
     * @Property allocatePublicConnection: If true, allocate public connection automate.
     */
    allocatePublicConnection: boolean | ros.IResolvable | undefined;
    /**
     * @Property backupRetentionPeriod: The retention period of the data backup. Value range: 7 to 730. The default value is the original value. Note When the BackupPolicyMode parameter is set to LogBackupPolicy, this parameter is required.
     */
    backupRetentionPeriod: number | undefined;
    /**
     * @Property category: The edition of the instance. Valid values:
     * Basic: specifies to use the Basic Edition.
     * HighAvailability: specifies to use the High-availability Edition.
     * AlwaysOn: specifies to use the Cluster Edition.
     * Finance: specifies to use the Enterprise Edition.
     */
    category: string | undefined;
    /**
     * @Property connectionMode: Connection Mode for database instance,support 'Standard' and 'Safe' mode. Default is RDS system assigns.
     */
    connectionMode: string | undefined;
    /**
     * @Property connectionStringPrefix: The prefix of the endpoint.
     * Only the prefix of the CurrentConnectionString parameter value can be modified.
     * The prefix must be 8 to 64 characters in length and can contain letters, digits, and hyphens (-).
     */
    connectionStringPrefix: string | undefined;
    /**
     * @Property connectionStringType: The endpoint type of the instance, allow values: Inner, Public
     */
    connectionStringType: string | undefined;
    /**
     * @Property dbInstanceDescription: Description of created database instance.
     */
    dbInstanceDescription: string | undefined;
    /**
     * @Property dbInstanceNetType: Database instance net type, default is Intranet.Internet for public access, Intranet for private access.
     */
    dbInstanceNetType: string | undefined;
    /**
     * @Property dbInstanceStorageType: The storage type of the instance. Valid values:
     * local_ssd: specifies to use local SSDs. This is the recommended storage type.
     * cloud_ssd: specifies to use standard SSDs.
     * cloud_essd: specifies to use enhanced SSDs.
     */
    dbInstanceStorageType: string | undefined;
    /**
     * @Property dbIsIgnoreCase: Specifies whether table names are case-sensitive. Valid values:
     * 1: Table names are not case-sensitive. This is the default value.
     * 0: Table names are case-sensitive.
     */
    dbIsIgnoreCase: number | undefined;
    /**
     * @Property dbMappings: Database mappings to attach to db instance.
     */
    dbMappings: Array<RosDBInstance.DBMappingsProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property dbParamGroupId: The ID of the parameter template used by the instance.
     */
    dbParamGroupId: string | undefined;
    /**
     * @Property dbTimeZone: The UTC time zone of the instance. Valid values: -12:00 to +12:00. The time zone must be an integer value such as +08:00. Values such as +08:30 are not allowed.
     */
    dbTimeZone: string | undefined;
    /**
     * @Property dedicatedHostGroupId: The ID of the host group to which the instance belongs if you create an instance in a host group.
     */
    dedicatedHostGroupId: string | undefined;
    /**
     * @Property encryptionKey: The ID of the encryption key that is used to encrypt data on SSDs in the region. You can view the encryption key ID in the Key Management Service (KMS) console. You can also create an encryption key.
     */
    encryptionKey: string | undefined;
    /**
     * @Property maintainTime: The period during which the maintenance performs. The format is HH:mmZ-HH:mmZ.
     */
    maintainTime: string | undefined;
    /**
     * @Property masterUsername: The master user name for the database instance.
     */
    masterUsername: string | undefined;
    /**
     * @Property masterUserPassword: The master password for the database instance.
     */
    masterUserPassword: string | undefined;
    /**
     * @Property masterUserType: Privilege type of account.
     *  Normal: Common privilege.
     *  Super: High privilege.
     * Sysadmin: Super privileges (SA) (only supported by SQL Server)
     * The default value is Normal.
     */
    masterUserType: string | undefined;
    /**
     * @Property multiAz: Specifies if the database instance is a multiple Availability Zone deployment.
     */
    multiAz: boolean | ros.IResolvable | undefined;
    /**
     * @Property payType: The charge type of created instance.
     */
    payType: string | undefined;
    /**
     * @Property period: Prepaid time period. While choose by pay by month, it could be from 1 to 9. While choose pay by year, it could be from 1 to 3.
     */
    period: number | undefined;
    /**
     * @Property periodType: Charge period for created instances.
     */
    periodType: string | undefined;
    /**
     * @Property port: The port of the database service.
     */
    port: number | undefined;
    /**
     * @Property preferredBackupPeriod: The backup period. Separate multiple values with commas (,). The default value is the original value. Valid values:Monday Tuesday Wednesday Thursday Friday Saturday Sunday Note When the BackupPolicyMode parameter is set to DataBackupPolicy, this parameter is required.
     */
    preferredBackupPeriod: Array<any | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property preferredBackupTime: The time when the backup task is performed. Format: yyyy-MM-ddZ-HH:mm:ssZ.Note When the BackupPolicyMode parameter is set to DataBackupPolicy, this parameter is required.
     */
    preferredBackupTime: string | undefined;
    /**
     * @Property privateIpAddress: The private ip for created instance.
     */
    privateIpAddress: string | undefined;
    /**
     * @Property resourceGroupId: Resource group id.
     */
    resourceGroupId: string | undefined;
    /**
     * @Property roleArn: The Alibaba Cloud Resource Name (ARN) provided to the service account of the instance by your Alibaba Cloud account to connect to KMS. You can copy the ARN from the RAM console.
     */
    roleArn: string | undefined;
    /**
     * @Property securityGroupId: The ID of the ECS security groups.
     * Each RDS instance can be associated with up to three ECS security groups.
     * You must separate them with commas (,).
     * To delete an ECS Security group, leave this parameter empty.
     *
     */
    securityGroupId: string | undefined;
    /**
     * @Property slaveZoneIds: List of slave zone ids can specify slave zone ids when creating the high-availability or enterprise edition instance. Meanwhile, VSwitchId needs to pass in the corresponding vswitch id to the slave zone by order. For example, ZoneId = "zone-a" and SlaveZoneIds = ["zone-c", "zone-b"], then the VSwitchId must be "vsw-zone-a,vsw-zone-c,vsw-zone-b". Of course, you can also choose automatic allocation, for example, ZoneId = "zone-a" and SlaveZoneIds = ["Auto", "Auto"], then the VSwitchId must be "vsw-zone-a,Auto,Auto". The list contains up to 2 slave zone ids, separated by commas.
     */
    slaveZoneIds: string[] | undefined;
    /**
     * @Property sqlCollectorStatus: Specifies whether to enable or disable the SQL Explorer (SQL audit) feature.
     * Valid values:Enable | Disabled.
     */
    sqlCollectorStatus: string | undefined;
    /**
     * @Property sslSetting: Secure Sockets Layer (SSL) link setting of the instance. Valid values:
     * Disabled: Disable SSL
     * EnabledForPublicConnection: Public connection address will be protected by the SSL certificate. It requires AllocatePublicConnection is true.
     * EnabledForInnerConnection: Private connection address will be protected by the SSL certificate.
     * Default value is Disabled.
     */
    sslSetting: string | undefined;
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
    readonly tags: ros.TagManager;
    /**
     * @Property targetDedicatedHostIdForLog: The ID of the host to which the instance belongs if you create a log instance in a host group.
     */
    targetDedicatedHostIdForLog: string | undefined;
    /**
     * @Property targetDedicatedHostIdForMaster: The ID of the host to which the instance belongs if you create a primary instance in a host group.
     */
    targetDedicatedHostIdForMaster: string | undefined;
    /**
     * @Property targetDedicatedHostIdForSlave: The ID of the host to which the instance belongs if you create a secondary instance in a host group.
     */
    targetDedicatedHostIdForSlave: string | undefined;
    /**
     * @Property vpcId: The VPC id of created database instance. For VPC network, the property is required.
     */
    vpcId: string | undefined;
    /**
     * @Property vSwitchId: The vSwitch id of created instance. For VPC network, the property is required.
     */
    vSwitchId: string | undefined;
    /**
     * @Property zoneId: selected zone to create database instance. You cannot set the ZoneId parameter if the MultiAZ parameter is set to true.
     */
    zoneId: string | undefined;
    /**
     * Create a new `ALIYUN::RDS::DBInstance`.
     *
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
 * Properties for defining a `ALIYUN::RDS::DBInstanceClone`
 */
export interface RosDBInstanceCloneProps {
    /**
     * @Property dbInstanceId: Instance id
     */
    readonly dbInstanceId: string;
    /**
     * @Property dbInstanceStorage: Database instance storage size. mysql is [5,1000]. sql server 2008r2 is [10,1000], sql server 2012/2012_web/2016-web is [20,1000]. PostgreSQL and PPAS is [5,2000]. Increased every 5 GB, Unit in GB
     */
    readonly dbInstanceStorage: number;
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
 * A ROS template type:  `ALIYUN::RDS::DBInstanceClone`
 */
export declare class RosDBInstanceClone extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::RDS::DBInstanceClone";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute DBInstanceId: The instance id of created database instance.
     */
    readonly attrDbInstanceId: any;
    /**
     * @Attribute InnerConnectionString: DB instance connection url by Intranet.
     */
    readonly attrInnerConnectionString: any;
    /**
     * @Attribute InnerIPAddress: IP Address for created DB instance of Intranet.
     */
    readonly attrInnerIpAddress: any;
    /**
     * @Attribute InnerPort: Intranet port of created DB instance.
     */
    readonly attrInnerPort: any;
    /**
     * @Attribute PublicConnectionString: DB instance connection url by Internet.
     */
    readonly attrPublicConnectionString: any;
    /**
     * @Attribute PublicIPAddress: IP Address for created DB instance of Internet.
     */
    readonly attrPublicIpAddress: any;
    /**
     * @Attribute PublicPort: Internet port of created DB instance.
     */
    readonly attrPublicPort: any;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property dbInstanceId: Instance id
     */
    dbInstanceId: string;
    /**
     * @Property dbInstanceStorage: Database instance storage size. mysql is [5,1000]. sql server 2008r2 is [10,1000], sql server 2012/2012_web/2016-web is [20,1000]. PostgreSQL and PPAS is [5,2000]. Increased every 5 GB, Unit in GB
     */
    dbInstanceStorage: number;
    /**
     * @Property payType: The charge type of created instance.
     */
    payType: string;
    /**
     * @Property allocatePublicConnection: If true, allocate public connection automate.
     */
    allocatePublicConnection: boolean | ros.IResolvable | undefined;
    /**
     * @Property backupId: The ID of the backup set that you want to use.
     * You can call the DescribeBackups operation to query the most recent backup set list.
     * Note You must specify at least one of the BackupId and RestoreTime parameters.
     */
    backupId: string | undefined;
    /**
     * @Property backupRetentionPeriod: The retention period of the data backup. Value range: 7 to 730. The default value is the original value. Note When the BackupPolicyMode parameter is set to LogBackupPolicy, this parameter is required.
     */
    backupRetentionPeriod: number | undefined;
    /**
     * @Property backupType: The type of backup used by the new instance. Valid values:
     *  - FullBackup: full backup
     *  - IncrementalBackup: incremental backup
     */
    backupType: string | undefined;
    /**
     * @Property category: The edition of the instance. Valid values:
     * Basic: specifies to use the Basic Edition.
     * HighAvailability: specifies to use the High-availability Edition.
     * AlwaysOn: specifies to use the Cluster Edition.
     * Finance: specifies to use the Enterprise Edition.
     */
    category: string | undefined;
    /**
     * @Property connectionStringPrefix: The prefix of the endpoint.
     * Only the prefix of the CurrentConnectionString parameter value can be modified.
     * The prefix must be 8 to 64 characters in length and can contain letters, digits, and hyphens (-).
     */
    connectionStringPrefix: string | undefined;
    /**
     * @Property connectionStringType: The endpoint type of the instance, allow values: Inner, Public
     */
    connectionStringType: string | undefined;
    /**
     * @Property dbInstanceClass: Database instance type. Refer the RDS database instance type reference, such as 'rds.mys2.large', 'rds.mss1.large', 'rds.pg.s1.small' etc
     */
    dbInstanceClass: string | undefined;
    /**
     * @Property dbInstanceDescription: Description of created database instance.
     */
    dbInstanceDescription: string | undefined;
    /**
     * @Property dbInstanceStorageType: The storage type of the instance. Valid values:
     * local_ssd: specifies to use local SSDs. This is the recommended storage type.
     * cloud_ssd: specifies to use standard SSDs.
     * cloud_essd: specifies to use enhanced SSDs.
     */
    dbInstanceStorageType: string | undefined;
    /**
     * @Property dbMappings: Database mappings to attach to db instance.
     */
    dbMappings: Array<RosDBInstanceClone.DBMappingsProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property dbNames: The names of the databases that you want to create on the new instance.
     */
    dbNames: string | undefined;
    /**
     * @Property dedicatedHostGroupId: The ID of the host group to which the instance belongs if you create an instance in a host group.
     */
    dedicatedHostGroupId: string | undefined;
    /**
     * @Property instanceNetworkType: The network type of the new instance. Valid values:
     * - VPC
     * - Classic
     * The default value is the network type of the original instance.
     */
    instanceNetworkType: string | undefined;
    /**
     * @Property maintainTime: The period during which the maintenance performs. The format is HH:mmZ-HH:mmZ.
     */
    maintainTime: string | undefined;
    /**
     * @Property masterUsername: The master user name for the database instance.
     */
    masterUsername: string | undefined;
    /**
     * @Property masterUserPassword: The master password for the database instance.
     */
    masterUserPassword: string | undefined;
    /**
     * @Property masterUserType: Privilege type of account.
     *  Normal: Common privilege.
     *  Super: High privilege.
     * Sysadmin: Super privileges (SA) (only supported by SQL Server)
     * The default value is Normal.
     */
    masterUserType: string | undefined;
    /**
     * @Property period: Prepaid time period. While choose by pay by month, it could be from 1 to 9. While choose pay by year, it could be from 1 to 3.
     */
    period: number | undefined;
    /**
     * @Property periodType: Charge period for created instances.
     */
    periodType: string | undefined;
    /**
     * @Property port: The port of the database service.
     */
    port: number | undefined;
    /**
     * @Property preferredBackupPeriod: The backup period. Separate multiple values with commas (,). The default value is the original value. Valid values:Monday Tuesday Wednesday Thursday Friday Saturday Sunday Note When the BackupPolicyMode parameter is set to DataBackupPolicy, this parameter is required.
     */
    preferredBackupPeriod: Array<any | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property preferredBackupTime: The time when the backup task is performed. Format: yyyy-MM-ddZ-HH:mm:ssZ.Note When the BackupPolicyMode parameter is set to DataBackupPolicy, this parameter is required.
     */
    preferredBackupTime: string | undefined;
    /**
     * @Property privateIpAddress: The private ip for created instance.
     */
    privateIpAddress: string | undefined;
    /**
     * @Property restoreTable: Specifies whether to restore specific databases and tables.
     * The value 1 specifies to restore specific databases and tables.
     * If you do not want to restore specific databases or tables, you can choose not to specify this parameter.
     */
    restoreTable: string | undefined;
    /**
     * @Property restoreTime: The point in time to which you want to restore the data of the original instance.
     * The point in time must fall within the specified log backup retention period.
     * The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format.
     * The time must be in UTC.
     */
    restoreTime: string | undefined;
    /**
     * @Property securityGroupId: The ID of the ECS security groups.
     * Each RDS instance can be associated with up to three ECS security groups.
     * You must separate them with commas (,).
     * To delete an ECS Security group, leave this parameter empty.
     *
     */
    securityGroupId: string | undefined;
    /**
     * @Property securityIpList: Security ip to access the database instance, combine with comma, 0.0.0.0/0 means no limitation.
     */
    securityIpList: string | undefined;
    /**
     * @Property sqlCollectorStatus: Specifies whether to enable or disable the SQL Explorer (SQL audit) feature.
     * Valid values:Enable | Disabled.
     */
    sqlCollectorStatus: string | undefined;
    /**
     * @Property sslSetting: Secure Sockets Layer (SSL) link setting of the instance. Valid values:
     * Disabled: Disable SSL
     * EnabledForPublicConnection: Public connection address will be protected by the SSL certificate. It requires AllocatePublicConnection is true.
     * EnabledForInnerConnection: Private connection address will be protected by the SSL certificate.
     * Default value is Disabled.
     */
    sslSetting: string | undefined;
    /**
     * @Property tableMeta: The information about the databases and tables that you want to restore.
     */
    tableMeta: Array<RosDBInstanceClone.TableMetaProperty | ros.IResolvable> | ros.IResolvable | undefined;
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
    readonly tags: ros.TagManager;
    /**
     * @Property timeoutInMinutes: The timeout period for creating the clone instance resource. Unit: Minute. Default: 120.
     */
    timeoutInMinutes: number | undefined;
    /**
     * @Property vpcId: The VPC id of created database instance. For VPC network, the property is required.
     */
    vpcId: string | undefined;
    /**
     * @Property vSwitchId: The vSwitch id of created instance. For VPC network, the property is required.
     */
    vSwitchId: string | undefined;
    /**
     * @Property zoneId: selected zone to create database instance. You cannot set the ZoneId parameter if the MultiAZ parameter is set to true.
     */
    zoneId: string | undefined;
    /**
     * Create a new `ALIYUN::RDS::DBInstanceClone`.
     *
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
export declare namespace RosDBInstanceClone {
    /**
     * @stability external
     */
    interface TableMetaProperty {
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
export declare namespace RosDBInstanceClone {
    /**
     * @stability external
     */
    interface TablesProperty {
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
 * A ROS template type:  `ALIYUN::RDS::DBInstanceParameterGroup`
 */
export declare class RosDBInstanceParameterGroup extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::RDS::DBInstanceParameterGroup";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property dbInstanceId: Database InstanceId to update properties.
     */
    dbInstanceId: string;
    /**
     * @Property parameters: Parameters to update for selected database instance.
     */
    parameters: Array<RosDBInstanceParameterGroup.ParametersProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property forcerestart: whether restart database instance.
     */
    forcerestart: string | undefined;
    /**
     * Create a new `ALIYUN::RDS::DBInstanceParameterGroup`.
     *
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
        readonly value: string;
        /**
         * @Property key: Key to update for instance property.
         */
        readonly key: string;
    }
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
 * A ROS template type:  `ALIYUN::RDS::DBInstanceSecurityIps`
 */
export declare class RosDBInstanceSecurityIps extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::RDS::DBInstanceSecurityIps";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute SecurityIps: The security ips of selected database instance.
     */
    readonly attrSecurityIps: any;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property dbInstanceId: Database instance id to update security ips.
     */
    dbInstanceId: string;
    /**
     * @Property dbInstanceIpArrayAttribute: Security ips to add or remove.
     */
    dbInstanceIpArrayAttribute: string;
    /**
     * @Property dbInstanceIpArrayName: Group name of the security ips, only support lower characters and '_'. Advice use a new group name avoid effect your database system. If the properties is not specified, it will set to default group, please be careful.
     */
    dbInstanceIpArrayName: string | undefined;
    /**
     * Create a new `ALIYUN::RDS::DBInstanceSecurityIps`.
     *
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
 * A ROS template type:  `ALIYUN::RDS::Database`
 */
export declare class RosDatabase extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::RDS::Database";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute DBInstanceId: The ID of the instance.
     */
    readonly attrDbInstanceId: any;
    /**
     * @Attribute DBName: The name of the database.
     */
    readonly attrDbName: any;
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
    characterSetName: string;
    /**
     * @Property dbInstanceId: The ID of the instance.
     */
    dbInstanceId: string;
    /**
     * @Property dbName: The name of the database you want to create.
     * Note
     * The name must be 2 to 64 characters in length.
     * The name must start with a lowercase letter and end with a lowercase letter or digit.
     * The name can contain lowercase letters, digits, underscores (_), and hyphens (-).
     * The name must be unique in the instance.
     * For more information about invalid characters, see Forbidden keywords table.
     */
    dbName: string;
    /**
     * @Property dbDescription: The description of the database. The description must be 2 to 256 characters in length.
     * The description must start with a letter and can contain letters, digits, underscores
     * (_), and hyphens (-).
     * Note The description cannot start with http:// or https://.
     */
    dbDescription: string | undefined;
    /**
     * Create a new `ALIYUN::RDS::Database`.
     *
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
 * A ROS template type:  `ALIYUN::RDS::PrepayDBInstance`
 */
export declare class RosPrepayDBInstance extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::RDS::PrepayDBInstance";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute DBInstanceId: The instance id of created database instance.
     */
    readonly attrDbInstanceId: any;
    /**
     * @Attribute InnerConnectionString: DB instance connection url by Intranet.
     */
    readonly attrInnerConnectionString: any;
    /**
     * @Attribute InnerIPAddress: IP Address for created DB instance of Intranet.
     */
    readonly attrInnerIpAddress: any;
    /**
     * @Attribute InnerPort: Intranet port of created DB instance.
     */
    readonly attrInnerPort: any;
    /**
     * @Attribute OrderId: The order id list of created instance.
     */
    readonly attrOrderId: any;
    /**
     * @Attribute PublicConnectionString: DB instance connection url by Internet.
     */
    readonly attrPublicConnectionString: any;
    /**
     * @Attribute PublicIPAddress: IP Address for created DB instance of Internet.
     */
    readonly attrPublicIpAddress: any;
    /**
     * @Attribute PublicPort: Internet port of created DB instance.
     */
    readonly attrPublicPort: any;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property commodityCode: The CommodityCode of the order.
     */
    commodityCode: string;
    /**
     * @Property dbInstanceClass: Database instance type. Refer the RDS database instance type reference, such as 'rds.mys2.large', 'rds.mss1.large', 'rds.pg.s1.small' etc
     */
    dbInstanceClass: string;
    /**
     * @Property dbInstanceStorage: Database instance storage size. mysql is [5,1000]. sql server 2008r2 is [10,1000], sql server 2012/2012_web/2016-web is [20,1000]. PostgreSQL and PPAS is [5,2000]. Increased every 5 GB, Unit in GB
     */
    dbInstanceStorage: number;
    /**
     * @Property engine: Database instance engine type. Support MySQL/SQLServer/PostgreSQL/PPAS/MariaDB now.
     */
    engine: string;
    /**
     * @Property engineVersion: Database instance version of the relative engine type.Support MySQL: 5.5/5.6/5.7/8.0;
     * SQLServer: 2008r2/2012/2012_ent_ha/2012_std_ha/2012_web/2016_ent_ha/2016_std_ha/2016_web/2017_std_ha/2017_ent;
     * PostgreSQL: 9.4/10.0/11.0/12.0;
     * PPAS: 9.3/10.0;
     * MariaDB: 10.3.
     */
    engineVersion: string;
    /**
     * @Property period: Prepaid time period. While choose by pay by month, it could be from 1 to 9. While choose pay by year, it could be from 1 to 3.
     */
    period: number;
    /**
     * @Property periodType: Charge period for created instances.
     */
    periodType: string;
    /**
     * @Property allocatePublicConnection: If true, allocate public connection automate.
     */
    allocatePublicConnection: boolean | ros.IResolvable | undefined;
    /**
     * @Property autoPay: Automatic Payment. Default is false.
     */
    autoPay: boolean | ros.IResolvable | undefined;
    /**
     * @Property autoRenew: Auto renew the prepay instance. If the period type is by year, it will renew by year, else it will renew by month.
     */
    autoRenew: boolean | ros.IResolvable | undefined;
    /**
     * @Property backupRetentionPeriod: The retention period of the data backup. Value range: 7 to 730. The default value is the original value. Note When the BackupPolicyMode parameter is set to LogBackupPolicy, this parameter is required.
     */
    backupRetentionPeriod: number | undefined;
    /**
     * @Property category: The edition of the instance. Valid values:
     * Basic: specifies to use the Basic Edition.
     * HighAvailability: specifies to use the High-availability Edition.
     * AlwaysOn: specifies to use the Cluster Edition.
     * Finance: specifies to use the Enterprise Edition.
     */
    category: string | undefined;
    /**
     * @Property connectionMode: Connection Mode for database instance,support 'Standard' and 'Safe' mode. Default is RDS system assigns.
     */
    connectionMode: string | undefined;
    /**
     * @Property connectionStringPrefix: The prefix of the endpoint.
     * Only the prefix of the CurrentConnectionString parameter value can be modified.
     * The prefix must be 8 to 64 characters in length and can contain letters, digits, and hyphens (-).
     */
    connectionStringPrefix: string | undefined;
    /**
     * @Property connectionStringType: The endpoint type of the instance, allow values: Inner, Public
     */
    connectionStringType: string | undefined;
    /**
     * @Property couponCode: The coupon code of the order.
     */
    couponCode: string | undefined;
    /**
     * @Property dbInstanceDescription: Description of created database instance.
     */
    dbInstanceDescription: string | undefined;
    /**
     * @Property dbInstanceNetType: Database instance net type, default is Intranet.Internet for public access, Intranet for private access.
     */
    dbInstanceNetType: string | undefined;
    /**
     * @Property dbInstanceStorageType: The storage type of the instance. Valid values:
     * local_ssd: specifies to use local SSDs. This is the recommended storage type.
     * cloud_ssd: specifies to use standard SSDs.
     * cloud_essd: specifies to use enhanced SSDs.
     */
    dbInstanceStorageType: string | undefined;
    /**
     * @Property dbIsIgnoreCase: Specifies whether table names are case-sensitive. Valid values:
     * 1: Table names are not case-sensitive. This is the default value.
     * 0: Table names are case-sensitive.
     */
    dbIsIgnoreCase: number | undefined;
    /**
     * @Property dbMappings: Database mappings to attach to db instance.
     */
    dbMappings: Array<RosPrepayDBInstance.DBMappingsProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property dbParamGroupId: The ID of the parameter template used by the instance.
     */
    dbParamGroupId: string | undefined;
    /**
     * @Property dbTimeZone: The UTC time zone of the instance. Valid values: -12:00 to +12:00. The time zone must be an integer value such as +08:00. Values such as +08:30 are not allowed.
     */
    dbTimeZone: string | undefined;
    /**
     * @Property dedicatedHostGroupId: The ID of the host group to which the instance belongs if you create an instance in a host group.
     */
    dedicatedHostGroupId: string | undefined;
    /**
     * @Property encryptionKey: The ID of the encryption key that is used to encrypt data on SSDs in the region. You can view the encryption key ID in the Key Management Service (KMS) console. You can also create an encryption key.
     */
    encryptionKey: string | undefined;
    /**
     * @Property maintainTime: The period during which the maintenance performs. The format is HH:mmZ-HH:mmZ.
     */
    maintainTime: string | undefined;
    /**
     * @Property masterUsername: The master user name for the database instance.
     */
    masterUsername: string | undefined;
    /**
     * @Property masterUserPassword: The master password for the database instance.
     */
    masterUserPassword: string | undefined;
    /**
     * @Property masterUserType: Privilege type of account.
     *  Normal: Common privilege.
     *  Super: High privilege.
     * Sysadmin: Super privileges (SA) (only supported by SQL Server)
     * The default value is Normal.
     */
    masterUserType: string | undefined;
    /**
     * @Property multiAz: Specifies if the database instance is a multiple Availability Zone deployment.
     */
    multiAz: boolean | ros.IResolvable | undefined;
    /**
     * @Property port: The port of the database service.
     */
    port: number | undefined;
    /**
     * @Property preferredBackupPeriod: The backup period. Separate multiple values with commas (,). The default value is the original value. Valid values:Monday Tuesday Wednesday Thursday Friday Saturday Sunday Note When the BackupPolicyMode parameter is set to DataBackupPolicy, this parameter is required.
     */
    preferredBackupPeriod: Array<any | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property preferredBackupTime: The time when the backup task is performed. Format: yyyy-MM-ddZ-HH:mm:ssZ.Note When the BackupPolicyMode parameter is set to DataBackupPolicy, this parameter is required.
     */
    preferredBackupTime: string | undefined;
    /**
     * @Property privateIpAddress: The private ip for created instance.
     */
    privateIpAddress: string | undefined;
    /**
     * @Property quantity: The number of instance to be created, default is 1, max number is 99
     */
    quantity: number | undefined;
    /**
     * @Property resourceGroupId: Resource group id.
     */
    resourceGroupId: string | undefined;
    /**
     * @Property roleArn: The Alibaba Cloud Resource Name (ARN) provided to the service account of the instance by your Alibaba Cloud account to connect to KMS. You can copy the ARN from the RAM console.
     */
    roleArn: string | undefined;
    /**
     * @Property securityGroupId: The ID of the ECS security groups.
     * Each RDS instance can be associated with up to three ECS security groups.
     * You must separate them with commas (,).
     * To delete an ECS Security group, leave this parameter empty.
     *
     */
    securityGroupId: string | undefined;
    /**
     * @Property slaveZoneIds: List of slave zone ids can specify slave zone ids when creating the high-availability or enterprise edition instance. Meanwhile, VSwitchId needs to pass in the corresponding vswitch id to the slave zone by order. For example, ZoneId = "zone-a" and SlaveZoneIds = ["zone-c", "zone-b"], then the VSwitchId must be "vsw-zone-a,vsw-zone-c,vsw-zone-b". Of course, you can also choose automatic allocation, for example, ZoneId = "zone-a" and SlaveZoneIds = ["Auto", "Auto"], then the VSwitchId must be "vsw-zone-a,Auto,Auto". The list contains up to 2 slave zone ids, separated by commas.
     */
    slaveZoneIds: string[] | undefined;
    /**
     * @Property sqlCollectorStatus: Specifies whether to enable or disable the SQL Explorer (SQL audit) feature.
     * Valid values:Enable | Disabled.
     */
    sqlCollectorStatus: string | undefined;
    /**
     * @Property sslSetting: Secure Sockets Layer (SSL) link setting of the instance. Valid values:
     * Disabled: Disable SSL
     * EnabledForPublicConnection: Public connection address will be protected by the SSL certificate. It requires AllocatePublicConnection is true.
     * EnabledForInnerConnection: Private connection address will be protected by the SSL certificate.
     * Default value is Disabled.
     */
    sslSetting: string | undefined;
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
    readonly tags: ros.TagManager;
    /**
     * @Property targetDedicatedHostIdForLog: The ID of the host to which the instance belongs if you create a log instance in a host group.
     */
    targetDedicatedHostIdForLog: string | undefined;
    /**
     * @Property targetDedicatedHostIdForMaster: The ID of the host to which the instance belongs if you create a primary instance in a host group.
     */
    targetDedicatedHostIdForMaster: string | undefined;
    /**
     * @Property targetDedicatedHostIdForSlave: The ID of the host to which the instance belongs if you create a secondary instance in a host group.
     */
    targetDedicatedHostIdForSlave: string | undefined;
    /**
     * @Property vpcId: The VPC id of created database instance. For VPC network, the property is required.
     */
    vpcId: string | undefined;
    /**
     * @Property vSwitchId: The vSwitch id of created instance. For VPC network, the property is required.
     */
    vSwitchId: string | undefined;
    /**
     * @Property zoneId: selected zone to create database instance. You cannot set the ZoneId parameter if the MultiAZ parameter is set to true.
     */
    zoneId: string | undefined;
    /**
     * Create a new `ALIYUN::RDS::PrepayDBInstance`.
     *
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
 * A ROS template type:  `ALIYUN::RDS::ReadOnlyDBInstance`
 */
export declare class RosReadOnlyDBInstance extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::RDS::ReadOnlyDBInstance";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute ConnectionString: DB instance connection url by Intranet.
     */
    readonly attrConnectionString: any;
    /**
     * @Attribute DBInstanceId: The instance id of created database instance.
     */
    readonly attrDbInstanceId: any;
    /**
     * @Attribute Port: Intranet port of created DB instance.
     */
    readonly attrPort: any;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property dbInstanceClass: The type of the instance. For more information, see Instance type list. The type of the read-only instance must be no less than that of the master instance. Otherwise, the read-only instance incurs high latency and high load.
     */
    dbInstanceClass: string;
    /**
     * @Property dbInstanceId: The ID of the master instance.
     */
    dbInstanceId: string;
    /**
     * @Property dbInstanceStorage: The storage space of the instance. Value range: 5 to 3000. The value must be a multiple of 5. Unit: GB.
     */
    dbInstanceStorage: number;
    /**
     * @Property engineVersion: The version of the database. The database and the master instance must have the same database version. Valid values:
     * - 5.6
     * - 5.7
     * - 8.0
     * - 2017_ent
     */
    engineVersion: string;
    /**
     * @Property zoneId: The ID of the zone. You can call the DescribeRegions API operation to view the latest zones.
     */
    zoneId: string;
    /**
     * @Property category: The edition of the instance. Valid values:
     * - Basic
     * - HighAvailability
     * - AlwaysOn
     */
    category: string | undefined;
    /**
     * @Property dbInstanceDescription: Description of created database instance.
     */
    dbInstanceDescription: string | undefined;
    /**
     * @Property dbInstanceStorageType: The storage type of the instance. Valid values:
     * - local_ssd/ephemeral_ssd: local SSDs.
     * - cloud_ssd: SSDs.
     * - cloud_essd: ESSDs.
     */
    dbInstanceStorageType: string | undefined;
    /**
     * @Property payType: The billing method. The system only supports Pay-As-You-Go. Valid value: Postpaid.
     */
    payType: string | undefined;
    /**
     * @Property privateIpAddress: The private IP address of the read-only instance. It must be within the IP address range provided by the switch. The system automatically assigns an IP address based on the VPCId and VSwitchId by default.
     */
    privateIpAddress: string | undefined;
    /**
     * @Property resourceGroupId: Resource group id.
     */
    resourceGroupId: string | undefined;
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
    readonly tags: ros.TagManager;
    /**
     * @Property vpcId: The ID of the VPC.
     */
    vpcId: string | undefined;
    /**
     * @Property vSwitchId: The ID of the VSwitch.
     */
    vSwitchId: string | undefined;
    /**
     * Create a new `ALIYUN::RDS::ReadOnlyDBInstance`.
     *
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
