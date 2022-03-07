import * as ros from '@alicloud/ros-cdk-core';
import { RosDBInstanceClone } from './rds.generated';
export { RosDBInstanceClone as DBInstanceCloneProperty };
/**
 * Properties for defining a `ALIYUN::RDS::DBInstanceClone`
 */
export interface DBInstanceCloneProps {
    /**
     * Property dbInstanceId: Instance id
     */
    readonly dbInstanceId: string | ros.IResolvable;
    /**
     * Property payType: The charge type of created instance.
     */
    readonly payType: string | ros.IResolvable;
    /**
     * Property allocatePublicConnection: If true, allocate public connection automate.
     */
    readonly allocatePublicConnection?: boolean | ros.IResolvable;
    /**
     * Property backupId: The ID of the backup set that you want to use.
     * You can call the DescribeBackups operation to query the most recent backup set list.
     * Note You must specify at least one of the BackupId and RestoreTime parameters.
     */
    readonly backupId?: string | ros.IResolvable;
    /**
     * Property backupRetentionPeriod: The retention period of the data backup. Value range: 7 to 730. The default value is the original value. Note When the BackupPolicyMode parameter is set to LogBackupPolicy, this parameter is required.
     */
    readonly backupRetentionPeriod?: number | ros.IResolvable;
    /**
     * Property backupType: The type of backup used by the new instance. Valid values:
     *  - FullBackup: full backup
     *  - IncrementalBackup: incremental backup
     */
    readonly backupType?: string | ros.IResolvable;
    /**
     * Property category: The edition of the instance. Valid values:
     * Basic: specifies to use the Basic Edition.
     * HighAvailability: specifies to use the High-availability Edition.
     * AlwaysOn: specifies to use the Cluster Edition.
     * Finance: specifies to use the Enterprise Edition.
     */
    readonly category?: string | ros.IResolvable;
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
     * Property dbInstanceClass: Database instance type. Refer the RDS database instance type reference, such as 'rds.mys2.large', 'rds.mss1.large', 'rds.pg.s1.small' etc
     */
    readonly dbInstanceClass?: string | ros.IResolvable;
    /**
     * Property dbInstanceDescription: Description of created database instance.
     */
    readonly dbInstanceDescription?: string | ros.IResolvable;
    /**
     * Property dbInstanceStorage: Database instance storage size. mysql is [5,1000]. sql server 2008r2 is [10,1000], sql server 2012/2012_web/2016-web is [20,1000]. PostgreSQL and PPAS is [5,2000]. Increased every 5 GB, Unit in GB
     */
    readonly dbInstanceStorage?: number | ros.IResolvable;
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
     * Property dbMappings: Database mappings to attach to db instance.
     */
    readonly dbMappings?: Array<RosDBInstanceClone.DBMappingsProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * Property dbNames: The names of the databases that you want to create on the new instance.
     */
    readonly dbNames?: string | ros.IResolvable;
    /**
     * Property dedicatedHostGroupId: The ID of the host group to which the instance belongs if you create an instance in a host group.
     */
    readonly dedicatedHostGroupId?: string | ros.IResolvable;
    /**
     * Property instanceNetworkType: The network type of the new instance. Valid values:
     * - VPC
     * - Classic
     * The default value is the network type of the original instance.
     */
    readonly instanceNetworkType?: string | ros.IResolvable;
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
     * Property period: Prepaid time period. While choose by pay by month, it could be from 1 to 9. While choose pay by year, it could be from 1 to 3.
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
    readonly preferredBackupPeriod?: Array<any | ros.IResolvable> | ros.IResolvable;
    /**
     * Property preferredBackupTime: The time when the backup task is performed. Format: yyyy-MM-ddZ-HH:mm:ssZ.Note When the BackupPolicyMode parameter is set to DataBackupPolicy, this parameter is required.
     */
    readonly preferredBackupTime?: string | ros.IResolvable;
    /**
     * Property privateIpAddress: The private ip for created instance.
     */
    readonly privateIpAddress?: string | ros.IResolvable;
    /**
     * Property restoreTable: Specifies whether to restore specific databases and tables.
     * The value 1 specifies to restore specific databases and tables.
     * If you do not want to restore specific databases or tables, you can choose not to specify this parameter.
     */
    readonly restoreTable?: string | ros.IResolvable;
    /**
     * Property restoreTime: The point in time to which you want to restore the data of the original instance.
     * The point in time must fall within the specified log backup retention period.
     * The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format.
     * The time must be in UTC.
     */
    readonly restoreTime?: string | ros.IResolvable;
    /**
     * Property securityGroupId: The ID of the ECS security groups.
     * Each RDS instance can be associated with up to three ECS security groups.
     * You must separate them with commas (,).
     * To delete an ECS Security group, leave this parameter empty.
     *
     */
    readonly securityGroupId?: string | ros.IResolvable;
    /**
     * Property securityIpList: Security ip to access the database instance, combine with comma, 0.0.0.0/0 means no limitation.
     */
    readonly securityIpList?: string | ros.IResolvable;
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
     * Property tableMeta: The information about the databases and tables that you want to restore.
     */
    readonly tableMeta?: Array<RosDBInstanceClone.TableMetaProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * Property tags: The tags of an instance.
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
    readonly tags?: {
        [key: string]: (any);
    };
    /**
     * Property timeoutInMinutes: The timeout period for creating the clone instance resource. Unit: Minute. Default: 120.
     */
    readonly timeoutInMinutes?: number | ros.IResolvable;
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
 * A ROS resource type:  `ALIYUN::RDS::DBInstanceClone`
 */
export declare class DBInstanceClone extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute DBInstanceId: The instance id of created database instance.
     */
    readonly attrDbInstanceId: ros.IResolvable;
    /**
     * Attribute InnerConnectionString: DB instance connection url by Intranet.
     */
    readonly attrInnerConnectionString: ros.IResolvable;
    /**
     * Attribute InnerIPAddress: IP Address for created DB instance of Intranet.
     */
    readonly attrInnerIpAddress: ros.IResolvable;
    /**
     * Attribute InnerPort: Intranet port of created DB instance.
     */
    readonly attrInnerPort: ros.IResolvable;
    /**
     * Attribute PublicConnectionString: DB instance connection url by Internet.
     */
    readonly attrPublicConnectionString: ros.IResolvable;
    /**
     * Attribute PublicIPAddress: IP Address for created DB instance of Internet.
     */
    readonly attrPublicIpAddress: ros.IResolvable;
    /**
     * Attribute PublicPort: Internet port of created DB instance.
     */
    readonly attrPublicPort: ros.IResolvable;
    /**
     * Create a new `ALIYUN::RDS::DBInstanceClone`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: DBInstanceCloneProps, enableResourcePropertyConstraint?: boolean);
}
