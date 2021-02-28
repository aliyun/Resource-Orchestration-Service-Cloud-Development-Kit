import * as ros from '@alicloud/ros-cdk-core';
import { RosPrepayDBInstance } from './rds.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosPrepayDBInstance as PrepayDBInstanceProperty };

/**
 * Properties for defining a `ALIYUN::RDS::PrepayDBInstance`
 */
export interface PrepayDBInstanceProps {

    /**
     * Property commodityCode: The CommodityCode of the order.
     */
    readonly commodityCode: string;

    /**
     * Property dbInstanceClass: Database instance type. Refer the RDS database instance type reference, such as 'rds.mys2.large', 'rds.mss1.large', 'rds.pg.s1.small' etc
     */
    readonly dbInstanceClass: string;

    /**
     * Property dbInstanceStorage: Database instance storage size. mysql is [5,1000]. sql server 2008r2 is [10,1000], sql server 2012/2012_web/2016-web is [20,1000]. PostgreSQL and PPAS is [5,2000]. Increased every 5 GB, Unit in GB
     */
    readonly dbInstanceStorage: number;

    /**
     * Property engine: Database instance engine type. Support MySQL/SQLServer/PostgreSQL/PPAS/MariaDB now.
     */
    readonly engine: string;

    /**
     * Property engineVersion: Database instance version of the relative engine type.Support MySQL: 5.5/5.6/5.7/8.0;
     * SQLServer: 2008r2/2012/2012_ent_ha/2012_std_ha/2012_web/2016_ent_ha/2016_std_ha/2016_web/2017_std_ha/2017_ent;
     * PostgreSQL: 9.4/10.0/11.0/12.0;
     * PPAS: 9.3/10.0;
     * MariaDB: 10.3.
     */
    readonly engineVersion: string;

    /**
     * Property period: Prepaid time period. While choose by pay by month, it could be from 1 to 9. While choose pay by year, it could be from 1 to 3.
     */
    readonly period: number;

    /**
     * Property periodType: Charge period for created instances.
     */
    readonly periodType: string;

    /**
     * Property allocatePublicConnection: If true, allocate public connection automate.
     */
    readonly allocatePublicConnection?: boolean | ros.IResolvable;

    /**
     * Property autoPay: Automatic Payment. Default is false.
     */
    readonly autoPay?: boolean | ros.IResolvable;

    /**
     * Property autoRenew: Auto renew the prepay instance. If the period type is by year, it will renew by year, else it will renew by month.
     */
    readonly autoRenew?: boolean | ros.IResolvable;

    /**
     * Property backupRetentionPeriod: The retention period of the data backup. Value range: 7 to 730. The default value is the original value. Note When the BackupPolicyMode parameter is set to LogBackupPolicy, this parameter is required.
     */
    readonly backupRetentionPeriod?: number;

    /**
     * Property category: The edition of the instance. Valid values:
     * Basic: specifies to use the Basic Edition.
     * HighAvailability: specifies to use the High-availability Edition.
     * AlwaysOn: specifies to use the Cluster Edition.
     * Finance: specifies to use the Enterprise Edition.
     */
    readonly category?: string;

    /**
     * Property connectionMode: Connection Mode for database instance,support 'Standard' and 'Safe' mode. Default is RDS system assigns.
     */
    readonly connectionMode?: string;

    /**
     * Property connectionStringPrefix: The prefix of the endpoint. 
     * Only the prefix of the CurrentConnectionString parameter value can be modified.
     * The prefix must be 8 to 64 characters in length and can contain letters, digits, and hyphens (-).
     */
    readonly connectionStringPrefix?: string;

    /**
     * Property connectionStringType: The endpoint type of the instance, allow values: Inner, Public
     */
    readonly connectionStringType?: string;

    /**
     * Property couponCode: The coupon code of the order.
     */
    readonly couponCode?: string;

    /**
     * Property dbInstanceDescription: Description of created database instance.
     */
    readonly dbInstanceDescription?: string;

    /**
     * Property dbInstanceNetType: Database instance net type, default is Intranet.Internet for public access, Intranet for private access.
     */
    readonly dbInstanceNetType?: string;

    /**
     * Property dbInstanceStorageType: The storage type of the instance. Valid values:
     * local_ssd: specifies to use local SSDs. This is the recommended storage type.
     * cloud_ssd: specifies to use standard SSDs.
     * cloud_essd: specifies to use enhanced SSDs.
     */
    readonly dbInstanceStorageType?: string;

    /**
     * Property dbIsIgnoreCase: Specifies whether table names are case-sensitive. Valid values:
     * 1: Table names are not case-sensitive. This is the default value.
     * 0: Table names are case-sensitive.
     */
    readonly dbIsIgnoreCase?: number;

    /**
     * Property dbMappings: Database mappings to attach to db instance.
     */
    readonly dbMappings?: Array<RosPrepayDBInstance.DBMappingsProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * Property dbParamGroupId: The ID of the parameter template used by the instance.
     */
    readonly dbParamGroupId?: string;

    /**
     * Property dbTimeZone: The UTC time zone of the instance. Valid values: -12:00 to +12:00. The time zone must be an integer value such as +08:00. Values such as +08:30 are not allowed.
     */
    readonly dbTimeZone?: string;

    /**
     * Property dedicatedHostGroupId: The ID of the host group to which the instance belongs if you create an instance in a host group.
     */
    readonly dedicatedHostGroupId?: string;

    /**
     * Property encryptionKey: The ID of the encryption key that is used to encrypt data on SSDs in the region. You can view the encryption key ID in the Key Management Service (KMS) console. You can also create an encryption key.
     */
    readonly encryptionKey?: string;

    /**
     * Property maintainTime: The period during which the maintenance performs. The format is HH:mmZ-HH:mmZ.
     */
    readonly maintainTime?: string;

    /**
     * Property masterUsername: The master user name for the database instance.
     */
    readonly masterUsername?: string;

    /**
     * Property masterUserPassword: The master password for the database instance.
     */
    readonly masterUserPassword?: string;

    /**
     * Property masterUserType: Privilege type of account.
     *  Normal: Common privilege. 
     *  Super: High privilege. 
     * Sysadmin: Super privileges (SA) (only supported by SQL Server)
     * The default value is Normal.
     */
    readonly masterUserType?: string;

    /**
     * Property multiAz: Specifies if the database instance is a multiple Availability Zone deployment.
     */
    readonly multiAz?: boolean | ros.IResolvable;

    /**
     * Property port: The port of the database service.
     */
    readonly port?: number;

    /**
     * Property preferredBackupPeriod: The backup period. Separate multiple values with commas (,). The default value is the original value. Valid values:Monday Tuesday Wednesday Thursday Friday Saturday Sunday Note When the BackupPolicyMode parameter is set to DataBackupPolicy, this parameter is required.
     */
    readonly preferredBackupPeriod?: Array<any | ros.IResolvable> | ros.IResolvable;

    /**
     * Property preferredBackupTime: The time when the backup task is performed. Format: yyyy-MM-ddZ-HH:mm:ssZ.Note When the BackupPolicyMode parameter is set to DataBackupPolicy, this parameter is required.
     */
    readonly preferredBackupTime?: string;

    /**
     * Property privateIpAddress: The private ip for created instance.
     */
    readonly privateIpAddress?: string;

    /**
     * Property quantity: The number of instance to be created, default is 1, max number is 99
     */
    readonly quantity?: number;

    /**
     * Property resourceGroupId: Resource group id.
     */
    readonly resourceGroupId?: string;

    /**
     * Property roleArn: The Alibaba Cloud Resource Name (ARN) provided to the service account of the instance by your Alibaba Cloud account to connect to KMS. You can copy the ARN from the RAM console.
     */
    readonly roleArn?: string;

    /**
     * Property securityGroupId: The ID of the ECS security groups. 
     * Each RDS instance can be associated with up to three ECS security groups. 
     * You must separate them with commas (,). 
     * To delete an ECS Security group, leave this parameter empty. 
     *
     */
    readonly securityGroupId?: string;

    /**
     * Property slaveZoneIds: List of slave zone ids can specify slave zone ids when creating the high-availability or enterprise edition instance. Meanwhile, VSwitchId needs to pass in the corresponding vswitch id to the slave zone by order. For example, ZoneId = "zone-a" and SlaveZoneIds = ["zone-c", "zone-b"], then the VSwitchId must be "vsw-zone-a,vsw-zone-c,vsw-zone-b". Of course, you can also choose automatic allocation, for example, ZoneId = "zone-a" and SlaveZoneIds = ["Auto", "Auto"], then the VSwitchId must be "vsw-zone-a,Auto,Auto". The list contains up to 2 slave zone ids, separated by commas.
     */
    readonly slaveZoneIds?: string[];

    /**
     * Property sqlCollectorStatus: Specifies whether to enable or disable the SQL Explorer (SQL audit) feature. 
     * Valid values:Enable | Disabled.
     */
    readonly sqlCollectorStatus?: string;

    /**
     * Property sslSetting: Secure Sockets Layer (SSL) link setting of the instance. Valid values:
     * Disabled: Disable SSL
     * EnabledForPublicConnection: Public connection address will be protected by the SSL certificate. It requires AllocatePublicConnection is true.
     * EnabledForInnerConnection: Private connection address will be protected by the SSL certificate.
     * Default value is Disabled.
     */
    readonly sslSetting?: string;

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
    readonly tags?: { [key: string]: any }[];

    /**
     * Property targetDedicatedHostIdForLog: The ID of the host to which the instance belongs if you create a log instance in a host group.
     */
    readonly targetDedicatedHostIdForLog?: string;

    /**
     * Property targetDedicatedHostIdForMaster: The ID of the host to which the instance belongs if you create a primary instance in a host group.
     */
    readonly targetDedicatedHostIdForMaster?: string;

    /**
     * Property targetDedicatedHostIdForSlave: The ID of the host to which the instance belongs if you create a secondary instance in a host group.
     */
    readonly targetDedicatedHostIdForSlave?: string;

    /**
     * Property vpcId: The VPC id of created database instance. For VPC network, the property is required.
     */
    readonly vpcId?: string;

    /**
     * Property vSwitchId: The vSwitch id of created instance. For VPC network, the property is required.
     */
    readonly vSwitchId?: string;

    /**
     * Property zoneId: selected zone to create database instance. You cannot set the ZoneId parameter if the MultiAZ parameter is set to true.
     */
    readonly zoneId?: string;
}

/**
 * A ROS resource type:  `ALIYUN::RDS::PrepayDBInstance`
 */
export class PrepayDBInstance extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute DBInstanceId: The instance id of created database instance.
     */
    public readonly attrDbInstanceId: any;

    /**
     * Attribute InnerConnectionString: DB instance connection url by Intranet.
     */
    public readonly attrInnerConnectionString: any;

    /**
     * Attribute InnerIPAddress: IP Address for created DB instance of Intranet.
     */
    public readonly attrInnerIpAddress: any;

    /**
     * Attribute InnerPort: Intranet port of created DB instance.
     */
    public readonly attrInnerPort: any;

    /**
     * Attribute OrderId: The order id list of created instance.
     */
    public readonly attrOrderId: any;

    /**
     * Attribute PublicConnectionString: DB instance connection url by Internet.
     */
    public readonly attrPublicConnectionString: any;

    /**
     * Attribute PublicIPAddress: IP Address for created DB instance of Internet.
     */
    public readonly attrPublicIpAddress: any;

    /**
     * Attribute PublicPort: Internet port of created DB instance.
     */
    public readonly attrPublicPort: any;

    /**
     * Create a new `ALIYUN::RDS::PrepayDBInstance`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: PrepayDBInstanceProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosPrepayDBInstance = new RosPrepayDBInstance(this, id,  {
            periodType: props.periodType ? props.periodType : 'Month',
            category: props.category,
            privateIpAddress: props.privateIpAddress,
            resourceGroupId: props.resourceGroupId,
            targetDedicatedHostIdForSlave: props.targetDedicatedHostIdForSlave,
            dbInstanceNetType: props.dbInstanceNetType ? props.dbInstanceNetType : 'Intranet',
            dbTimeZone: props.dbTimeZone,
            dedicatedHostGroupId: props.dedicatedHostGroupId,
            autoRenew: props.autoRenew ? props.autoRenew : false,
            port: props.port,
            encryptionKey: props.encryptionKey,
            preferredBackupPeriod: props.preferredBackupPeriod,
            slaveZoneIds: props.slaveZoneIds,
            dbIsIgnoreCase: props.dbIsIgnoreCase,
            dbInstanceStorage: props.dbInstanceStorage,
            commodityCode: props.commodityCode ? props.commodityCode : 'rds',
            dbMappings: props.dbMappings,
            connectionStringPrefix: props.connectionStringPrefix,
            multiAz: props.multiAz ? props.multiAz : false,
            maintainTime: props.maintainTime,
            engine: props.engine,
            tags: ros.tagFactory(props.tags),
            dbParamGroupId: props.dbParamGroupId,
            dbInstanceDescription: props.dbInstanceDescription,
            targetDedicatedHostIdForMaster: props.targetDedicatedHostIdForMaster,
            engineVersion: props.engineVersion,
            zoneId: props.zoneId,
            targetDedicatedHostIdForLog: props.targetDedicatedHostIdForLog,
            dbInstanceClass: props.dbInstanceClass,
            allocatePublicConnection: props.allocatePublicConnection,
            securityGroupId: props.securityGroupId,
            preferredBackupTime: props.preferredBackupTime,
            vSwitchId: props.vSwitchId,
            quantity: props.quantity ? props.quantity : 1,
            period: props.period ? props.period : 1,
            autoPay: props.autoPay ? props.autoPay : false,
            dbInstanceStorageType: props.dbInstanceStorageType,
            roleArn: props.roleArn,
            connectionStringType: props.connectionStringType ? props.connectionStringType : 'Inner',
            masterUserPassword: props.masterUserPassword,
            couponCode: props.couponCode,
            masterUserType: props.masterUserType ? props.masterUserType : 'Normal',
            vpcId: props.vpcId,
            sslSetting: props.sslSetting ? props.sslSetting : 'Disabled',
            masterUsername: props.masterUsername,
            connectionMode: props.connectionMode,
            sqlCollectorStatus: props.sqlCollectorStatus,
            backupRetentionPeriod: props.backupRetentionPeriod ? props.backupRetentionPeriod : 7,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosPrepayDBInstance;
        this.attrDbInstanceId = rosPrepayDBInstance.attrDbInstanceId;
        this.attrInnerConnectionString = rosPrepayDBInstance.attrInnerConnectionString;
        this.attrInnerIpAddress = rosPrepayDBInstance.attrInnerIpAddress;
        this.attrInnerPort = rosPrepayDBInstance.attrInnerPort;
        this.attrOrderId = rosPrepayDBInstance.attrOrderId;
        this.attrPublicConnectionString = rosPrepayDBInstance.attrPublicConnectionString;
        this.attrPublicIpAddress = rosPrepayDBInstance.attrPublicIpAddress;
        this.attrPublicPort = rosPrepayDBInstance.attrPublicPort;
    }
}
