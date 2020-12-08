import * as ros from '@alicloud/ros-cdk-core';
import { RosDBInstanceClone } from './rds.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosDBInstanceClone as DBInstanceCloneProperty };

/**
 * Properties for defining a `ALIYUN::RDS::DBInstanceClone`
 */
export interface DBInstanceCloneProps {

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
    readonly tags?: { [key: string]: any }[];

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
 * A ROS resource type:  `ALIYUN::RDS::DBInstanceClone`
 */
export class DBInstanceClone extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
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

    /**
     * Create a new `ALIYUN::RDS::DBInstanceClone`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: DBInstanceCloneProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosDBInstanceClone = new RosDBInstanceClone(this, id,  {
            periodType: props.periodType ? props.periodType : 'Month',
            category: props.category,
            privateIpAddress: props.privateIpAddress,
            dedicatedHostGroupId: props.dedicatedHostGroupId,
            port: props.port,
            backupId: props.backupId,
            instanceNetworkType: props.instanceNetworkType,
            restoreTime: props.restoreTime,
            dbNames: props.dbNames,
            preferredBackupPeriod: props.preferredBackupPeriod,
            dbInstanceId: props.dbInstanceId,
            securityIpList: props.securityIpList,
            dbInstanceStorage: props.dbInstanceStorage,
            backupType: props.backupType,
            dbMappings: props.dbMappings,
            connectionStringPrefix: props.connectionStringPrefix,
            maintainTime: props.maintainTime,
            tags: ros.tagFactory(props.tags),
            dbInstanceDescription: props.dbInstanceDescription,
            zoneId: props.zoneId,
            dbInstanceClass: props.dbInstanceClass,
            allocatePublicConnection: props.allocatePublicConnection,
            preferredBackupTime: props.preferredBackupTime,
            vSwitchId: props.vSwitchId,
            securityGroupId: props.securityGroupId,
            period: props.period ? props.period : 1,
            payType: props.payType ? props.payType : 'Postpaid',
            dbInstanceStorageType: props.dbInstanceStorageType,
            connectionStringType: props.connectionStringType ? props.connectionStringType : 'Inner',
            restoreTable: props.restoreTable,
            masterUserPassword: props.masterUserPassword,
            masterUserType: props.masterUserType ? props.masterUserType : 'Normal',
            vpcId: props.vpcId,
            sslSetting: props.sslSetting ? props.sslSetting : 'Disabled',
            masterUsername: props.masterUsername,
            sqlCollectorStatus: props.sqlCollectorStatus,
            backupRetentionPeriod: props.backupRetentionPeriod ? props.backupRetentionPeriod : 7,
            tableMeta: props.tableMeta,
            timeoutInMinutes: props.timeoutInMinutes ? props.timeoutInMinutes : 120,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosDBInstanceClone;
        this.attrDbInstanceId = rosDBInstanceClone.attrDbInstanceId;
        this.attrInnerConnectionString = rosDBInstanceClone.attrInnerConnectionString;
        this.attrInnerIpAddress = rosDBInstanceClone.attrInnerIpAddress;
        this.attrInnerPort = rosDBInstanceClone.attrInnerPort;
        this.attrPublicConnectionString = rosDBInstanceClone.attrPublicConnectionString;
        this.attrPublicIpAddress = rosDBInstanceClone.attrPublicIpAddress;
        this.attrPublicPort = rosDBInstanceClone.attrPublicPort;
    }
}
