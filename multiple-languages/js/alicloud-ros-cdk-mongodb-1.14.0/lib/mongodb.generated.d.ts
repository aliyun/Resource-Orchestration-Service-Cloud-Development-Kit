import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `RosAuditPolicy`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mongodb-auditpolicy
 */
export interface RosAuditPolicyProps {
    /**
     * @Property auditStatus: Audit state, Valid values: `enable`, `disabled`.
     */
    readonly auditStatus: string | ros.IResolvable;
    /**
     * @Property dbInstanceId: Database Instance Id.
     */
    readonly dbInstanceId: string | ros.IResolvable;
    /**
     * @Property storagePeriod: Audit log retention duration. The value range is 1 to 365 days. The default value is 30 days.
     */
    readonly storagePeriod?: number | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::MONGODB::AuditPolicy`.
 * @Note This class does not contain additional functions, so it is recommended to use the `AuditPolicy` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mongodb-auditpolicy
 */
export declare class RosAuditPolicy extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::MONGODB::AuditPolicy";
    /**
     * @Attribute AuditStatus: Audit state, Valid values: `enable`, `disabled`.
     */
    readonly attrAuditStatus: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property auditStatus: Audit state, Valid values: `enable`, `disabled`.
     */
    auditStatus: string | ros.IResolvable;
    /**
     * @Property dbInstanceId: Database Instance Id.
     */
    dbInstanceId: string | ros.IResolvable;
    /**
     * @Property storagePeriod: Audit log retention duration. The value range is 1 to 365 days. The default value is 30 days.
     */
    storagePeriod: number | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosAuditPolicyProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosGlobalSecurityIPGroup`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mongodb-globalsecurityipgroup
 */
export interface RosGlobalSecurityIPGroupProps {
    /**
     * @Property globalIgName: The name of the IP whitelist template.
     */
    readonly globalIgName: string | ros.IResolvable;
    /**
     * @Property globalSecurityIpList: The IP address in the whitelist template.
     */
    readonly globalSecurityIpList: Array<any | ros.IResolvable> | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::MONGODB::GlobalSecurityIPGroup`.
 * @Note This class does not contain additional functions, so it is recommended to use the `GlobalSecurityIPGroup` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mongodb-globalsecurityipgroup
 */
export declare class RosGlobalSecurityIPGroup extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::MONGODB::GlobalSecurityIPGroup";
    /**
     * @Attribute GlobalIgName: The name of the IP whitelist template.
     */
    readonly attrGlobalIgName: ros.IResolvable;
    /**
     * @Attribute GlobalSecurityGroupId: The ID of the IP whitelist template.
     */
    readonly attrGlobalSecurityGroupId: ros.IResolvable;
    /**
     * @Attribute GlobalSecurityIpList: The IP address in the whitelist template.
     */
    readonly attrGlobalSecurityIpList: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property globalIgName: The name of the IP whitelist template.
     */
    globalIgName: string | ros.IResolvable;
    /**
     * @Property globalSecurityIpList: The IP address in the whitelist template.
     */
    globalSecurityIpList: Array<any | ros.IResolvable> | ros.IResolvable;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosGlobalSecurityIPGroupProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosInstance`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mongodb-instance
 */
export interface RosInstanceProps {
    /**
     * @Property dbInstanceClass: MongoDB instance supported instance type, make sure it should be correct.
     */
    readonly dbInstanceClass: string | ros.IResolvable;
    /**
     * @Property dbInstanceStorage: Database instance storage size. MongoDB is [5,3000], increased every 10 GB, Unit in GB
     */
    readonly dbInstanceStorage: number | ros.IResolvable;
    /**
     * @Property accountPassword: Root account password, can contain the letters, numbers or underscores the composition, length of 6~32 bit.
     */
    readonly accountPassword?: string | ros.IResolvable;
    /**
     * @Property auditPolicyOptions: Audit policy options.
     */
    readonly auditPolicyOptions?: RosInstance.AuditPolicyOptionsProperty | ros.IResolvable;
    /**
     * @Property autoRenew: Indicates whether automatic renewal is enabled for the instance. Valid values:true: Automatic renewal is enabled.false: Automatic renewal is not enabled. You must renew the instance manually.Default value: false.
     */
    readonly autoRenew?: boolean | ros.IResolvable;
    /**
     * @Property backupId: Specific backup set Id.
     */
    readonly backupId?: string | ros.IResolvable;
    /**
     * @Property backupPolicyOptions: Backup policy options.
     */
    readonly backupPolicyOptions?: RosInstance.BackupPolicyOptionsProperty | ros.IResolvable;
    /**
     * @Property businessInfo: The business information. It is an additional parameter.
     */
    readonly businessInfo?: string | ros.IResolvable;
    /**
     * @Property chargeType: The billing method of the instance.values:PostPaid: Pay-As-You-Go.PrePaid: Subscription.Default value: PostPaid
     */
    readonly chargeType?: string | ros.IResolvable;
    /**
     * @Property clusterId: The dedicated cluster ID.
     */
    readonly clusterId?: string | ros.IResolvable;
    /**
     * @Property couponNo: The coupon code. Default value:youhuiquan_promotion_option_id_for_blank.
     */
    readonly couponNo?: string | ros.IResolvable;
    /**
     * @Property databaseNames: The name of the database.
     */
    readonly databaseNames?: string | ros.IResolvable;
    /**
     * @Property dbInstanceDescription: Description of created database instance.
     */
    readonly dbInstanceDescription?: string | ros.IResolvable;
    /**
     * @Property dbInstanceReleaseProtection: Enables instance release protection. Values:
     * - true: Enabled.
     * - false: Not enabled.
     */
    readonly dbInstanceReleaseProtection?: boolean | ros.IResolvable;
    /**
     * @Property encrypted: Whether to enable cloud disk encryption.
     */
    readonly encrypted?: boolean | ros.IResolvable;
    /**
     * @Property encryptionKey: Custom key ID.
     */
    readonly encryptionKey?: string | ros.IResolvable;
    /**
     * @Property engineVersion: Database instance version.
     */
    readonly engineVersion?: string | ros.IResolvable;
    /**
     * @Property hiddenZoneId: Configure the zone where the hidden node resides to implement multi-availability zone deployment.
     * When the value of the EngineVersion is 4.4 and later, this parameter is available and required.
     * The value of this parameter cannot be the same as that of ZoneId and SecondaryZoneId.
     */
    readonly hiddenZoneId?: string | ros.IResolvable;
    /**
     * @Property period: The subscription period of the instance.Default Unit: Month.Valid values: [1~9], 12, 24, 36. Default to 1.
     */
    readonly period?: number | ros.IResolvable;
    /**
     * @Property privateConnections: Connection configs of private connection.
     */
    readonly privateConnections?: RosInstance.PrivateConnectionsProperty | ros.IResolvable;
    /**
     * @Property provisionedIops: Provisioned IOPS. The value range is 0 to 50000.
     */
    readonly provisionedIops?: number | ros.IResolvable;
    /**
     * @Property readonlyReplicas: Number of read-only nodes, in the range of 1-5.
     */
    readonly readonlyReplicas?: number | ros.IResolvable;
    /**
     * @Property replicationFactor: The number of nodes in the replica set. Allowed values: [3, 5, 7], default to 3.
     */
    readonly replicationFactor?: number | ros.IResolvable;
    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * @Property restoreTime: The time to restore the cloned instance to. The format is yyyy-MM-ddTHH:mm:ssZ.This parameter can only be specified when this operation is called to clone instances.You must also specify theSrcDBInstanceIdparameter and theBackupIdparameter.You can clone instances to any restore time in the past seven days.
     */
    readonly restoreTime?: string | ros.IResolvable;
    /**
     * @Property restoreType: Backup recovery instance.
     * - 0: Restore instance to specified backup set
     * - 1: Restore instance to specified point in time
     * - 2: Restore released instance to specified backup set
     * - 3: Restore instance to specified backup set
     */
    readonly restoreType?: number | ros.IResolvable;
    /**
     * @Property secondaryZoneId: Configure the zone where the secondary node resides to implement multi-availability zone deployment.
     * When the value of the EngineVersion is 4.4 and later, this parameter is available and required.The value of this parameter cannot be the same as that of ZoneId and HiddenZoneId.
     */
    readonly secondaryZoneId?: string | ros.IResolvable;
    /**
     * @Property securityGroupId: The ID of the ECS security group.
     * Each ApsaraDB for MongoDB instance can be added in up to 10 security group.
     * You can call the ECS DescribeSecurityGroup to describe the ID of the security group in the target region.
     */
    readonly securityGroupId?: string | ros.IResolvable;
    /**
     * @Property securityIpArray: Security ips to add or remove. Update to this property will cover the current security ips.
     */
    readonly securityIpArray?: string | ros.IResolvable;
    /**
     * @Property srcDbInstanceId: Create an instance of the backup set based on an instance.
     */
    readonly srcDbInstanceId?: string | ros.IResolvable;
    /**
     * @Property srcRegion: The source instance region.
     *
     * >- When the backup recovery type is 2 or 3, this parameter is required.
     */
    readonly srcRegion?: string | ros.IResolvable;
    /**
     * @Property sslOptions: SSL options.
     */
    readonly sslOptions?: RosInstance.SSLOptionsProperty | ros.IResolvable;
    /**
     * @Property storageEngine: Database storage engine.Support WiredTiger, RocksDB, TerarkDB
     */
    readonly storageEngine?: string | ros.IResolvable;
    /**
     * @Property storageType: The storage type of the instance.
     * Instances of MongoDB 4.4 and later only support cloud disks. cloud_essd1 is selected if you leave this parameter empty.
     * Instances of MongoDB 4.2 and earlier support only local disks. local_ssd is selected if you leave this parameter empty.
     */
    readonly storageType?: string | ros.IResolvable;
    /**
     * @Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosInstance.TagsProperty[];
    /**
     * @Property tdeStatus: Specifies whether to enable Transparent Data Encryption (TDE). Valid values:
     * true: enable TDE
     * false: disable TDE (default)
     * Note: You cannot disable TDE after it is enabled.
     */
    readonly tdeStatus?: boolean | ros.IResolvable;
    /**
     * @Property vpcId: The VPC id to create mongodb instance.
     */
    readonly vpcId?: string | ros.IResolvable;
    /**
     * @Property vpcPasswordFree: Specifies whether to enable password free for access within the VPC. If set to:
     * - true: enables password free.
     * - false: disables password free.
     */
    readonly vpcPasswordFree?: boolean | ros.IResolvable;
    /**
     * @Property vSwitchId: The vSwitch Id to create mongodb instance.
     */
    readonly vSwitchId?: string | ros.IResolvable;
    /**
     * @Property zoneId: On which zone to create the instance. If VpcId and VSwitchId is specified, ZoneId is required and VSwitch should be in same zone.
     */
    readonly zoneId?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::MONGODB::Instance`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Instance` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mongodb-instance
 */
export declare class RosInstance extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::MONGODB::Instance";
    /**
     * @Attribute Arn: The Alibaba Cloud Resource Name (ARN).
     */
    readonly attrArn: ros.IResolvable;
    /**
     * @Attribute ConnectionURI: Connection uri.
     */
    readonly attrConnectionUri: ros.IResolvable;
    /**
     * @Attribute DBInstanceId: The instance id of created mongodb instance.
     */
    readonly attrDbInstanceId: ros.IResolvable;
    /**
     * @Attribute DBInstanceStatus: Status of mongodb instance.
     */
    readonly attrDbInstanceStatus: ros.IResolvable;
    /**
     * @Attribute OrderId: Order Id of created instance.
     */
    readonly attrOrderId: ros.IResolvable;
    /**
     * @Attribute ReplicaSetName: Name of replica set
     */
    readonly attrReplicaSetName: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property dbInstanceClass: MongoDB instance supported instance type, make sure it should be correct.
     */
    dbInstanceClass: string | ros.IResolvable;
    /**
     * @Property dbInstanceStorage: Database instance storage size. MongoDB is [5,3000], increased every 10 GB, Unit in GB
     */
    dbInstanceStorage: number | ros.IResolvable;
    /**
     * @Property accountPassword: Root account password, can contain the letters, numbers or underscores the composition, length of 6~32 bit.
     */
    accountPassword: string | ros.IResolvable | undefined;
    /**
     * @Property auditPolicyOptions: Audit policy options.
     */
    auditPolicyOptions: RosInstance.AuditPolicyOptionsProperty | ros.IResolvable | undefined;
    /**
     * @Property autoRenew: Indicates whether automatic renewal is enabled for the instance. Valid values:true: Automatic renewal is enabled.false: Automatic renewal is not enabled. You must renew the instance manually.Default value: false.
     */
    autoRenew: boolean | ros.IResolvable | undefined;
    /**
     * @Property backupId: Specific backup set Id.
     */
    backupId: string | ros.IResolvable | undefined;
    /**
     * @Property backupPolicyOptions: Backup policy options.
     */
    backupPolicyOptions: RosInstance.BackupPolicyOptionsProperty | ros.IResolvable | undefined;
    /**
     * @Property businessInfo: The business information. It is an additional parameter.
     */
    businessInfo: string | ros.IResolvable | undefined;
    /**
     * @Property chargeType: The billing method of the instance.values:PostPaid: Pay-As-You-Go.PrePaid: Subscription.Default value: PostPaid
     */
    chargeType: string | ros.IResolvable | undefined;
    /**
     * @Property clusterId: The dedicated cluster ID.
     */
    clusterId: string | ros.IResolvable | undefined;
    /**
     * @Property couponNo: The coupon code. Default value:youhuiquan_promotion_option_id_for_blank.
     */
    couponNo: string | ros.IResolvable | undefined;
    /**
     * @Property databaseNames: The name of the database.
     */
    databaseNames: string | ros.IResolvable | undefined;
    /**
     * @Property dbInstanceDescription: Description of created database instance.
     */
    dbInstanceDescription: string | ros.IResolvable | undefined;
    /**
     * @Property dbInstanceReleaseProtection: Enables instance release protection. Values:
     * - true: Enabled.
     * - false: Not enabled.
     */
    dbInstanceReleaseProtection: boolean | ros.IResolvable | undefined;
    /**
     * @Property encrypted: Whether to enable cloud disk encryption.
     */
    encrypted: boolean | ros.IResolvable | undefined;
    /**
     * @Property encryptionKey: Custom key ID.
     */
    encryptionKey: string | ros.IResolvable | undefined;
    /**
     * @Property engineVersion: Database instance version.
     */
    engineVersion: string | ros.IResolvable | undefined;
    /**
     * @Property hiddenZoneId: Configure the zone where the hidden node resides to implement multi-availability zone deployment.
     * When the value of the EngineVersion is 4.4 and later, this parameter is available and required.
     * The value of this parameter cannot be the same as that of ZoneId and SecondaryZoneId.
     */
    hiddenZoneId: string | ros.IResolvable | undefined;
    /**
     * @Property period: The subscription period of the instance.Default Unit: Month.Valid values: [1~9], 12, 24, 36. Default to 1.
     */
    period: number | ros.IResolvable | undefined;
    /**
     * @Property privateConnections: Connection configs of private connection.
     */
    privateConnections: RosInstance.PrivateConnectionsProperty | ros.IResolvable | undefined;
    /**
     * @Property provisionedIops: Provisioned IOPS. The value range is 0 to 50000.
     */
    provisionedIops: number | ros.IResolvable | undefined;
    /**
     * @Property readonlyReplicas: Number of read-only nodes, in the range of 1-5.
     */
    readonlyReplicas: number | ros.IResolvable | undefined;
    /**
     * @Property replicationFactor: The number of nodes in the replica set. Allowed values: [3, 5, 7], default to 3.
     */
    replicationFactor: number | ros.IResolvable | undefined;
    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property restoreTime: The time to restore the cloned instance to. The format is yyyy-MM-ddTHH:mm:ssZ.This parameter can only be specified when this operation is called to clone instances.You must also specify theSrcDBInstanceIdparameter and theBackupIdparameter.You can clone instances to any restore time in the past seven days.
     */
    restoreTime: string | ros.IResolvable | undefined;
    /**
     * @Property restoreType: Backup recovery instance.
     * - 0: Restore instance to specified backup set
     * - 1: Restore instance to specified point in time
     * - 2: Restore released instance to specified backup set
     * - 3: Restore instance to specified backup set
     */
    restoreType: number | ros.IResolvable | undefined;
    /**
     * @Property secondaryZoneId: Configure the zone where the secondary node resides to implement multi-availability zone deployment.
     * When the value of the EngineVersion is 4.4 and later, this parameter is available and required.The value of this parameter cannot be the same as that of ZoneId and HiddenZoneId.
     */
    secondaryZoneId: string | ros.IResolvable | undefined;
    /**
     * @Property securityGroupId: The ID of the ECS security group.
     * Each ApsaraDB for MongoDB instance can be added in up to 10 security group.
     * You can call the ECS DescribeSecurityGroup to describe the ID of the security group in the target region.
     */
    securityGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property securityIpArray: Security ips to add or remove. Update to this property will cover the current security ips.
     */
    securityIpArray: string | ros.IResolvable | undefined;
    /**
     * @Property srcDbInstanceId: Create an instance of the backup set based on an instance.
     */
    srcDbInstanceId: string | ros.IResolvable | undefined;
    /**
     * @Property srcRegion: The source instance region.
     *
     * >- When the backup recovery type is 2 or 3, this parameter is required.
     */
    srcRegion: string | ros.IResolvable | undefined;
    /**
     * @Property sslOptions: SSL options.
     */
    sslOptions: RosInstance.SSLOptionsProperty | ros.IResolvable | undefined;
    /**
     * @Property storageEngine: Database storage engine.Support WiredTiger, RocksDB, TerarkDB
     */
    storageEngine: string | ros.IResolvable | undefined;
    /**
     * @Property storageType: The storage type of the instance.
     * Instances of MongoDB 4.4 and later only support cloud disks. cloud_essd1 is selected if you leave this parameter empty.
     * Instances of MongoDB 4.2 and earlier support only local disks. local_ssd is selected if you leave this parameter empty.
     */
    storageType: string | ros.IResolvable | undefined;
    /**
     * @Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    tags: RosInstance.TagsProperty[] | undefined;
    /**
     * @Property tdeStatus: Specifies whether to enable Transparent Data Encryption (TDE). Valid values:
     * true: enable TDE
     * false: disable TDE (default)
     * Note: You cannot disable TDE after it is enabled.
     */
    tdeStatus: boolean | ros.IResolvable | undefined;
    /**
     * @Property vpcId: The VPC id to create mongodb instance.
     */
    vpcId: string | ros.IResolvable | undefined;
    /**
     * @Property vpcPasswordFree: Specifies whether to enable password free for access within the VPC. If set to:
     * - true: enables password free.
     * - false: disables password free.
     */
    vpcPasswordFree: boolean | ros.IResolvable | undefined;
    /**
     * @Property vSwitchId: The vSwitch Id to create mongodb instance.
     */
    vSwitchId: string | ros.IResolvable | undefined;
    /**
     * @Property zoneId: On which zone to create the instance. If VpcId and VSwitchId is specified, ZoneId is required and VSwitch should be in same zone.
     */
    zoneId: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosInstanceProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosInstance {
    /**
     * @stability external
     */
    interface AuditPolicyOptionsProperty {
        /**
         * @Property storagePeriod: The retention period of audit logs. Unit: days. Valid values: 1 to 365. Default is 30 days.
         */
        readonly storagePeriod?: number | ros.IResolvable;
        /**
         * @Property auditStatus: Audit log status, values:
     * - enable: Audit logging is enabled.
     * - disabled: Audit logging is disabled.
         */
        readonly auditStatus: string | ros.IResolvable;
        /**
         * @Property serviceType: Audit log version type.
     * - Trial: Free trial version.
     * - Standard: Full version.
         */
        readonly serviceType?: string | ros.IResolvable;
        /**
         * @Property auditLogSwitchSource: The request source for the audit log is set to Console.
         */
        readonly auditLogSwitchSource?: string | ros.IResolvable;
    }
}
export declare namespace RosInstance {
    /**
     * @stability external
     */
    interface BackupPolicyOptionsProperty {
        /**
         * @Property highFrequencyBackupRetention: High-frequency backup retention period, unit: days.
         */
        readonly highFrequencyBackupRetention?: number | ros.IResolvable;
        /**
         * @Property preferredBackupTime: Preferred backup time.
         */
        readonly preferredBackupTime?: string | ros.IResolvable;
        /**
         * @Property backupRetentionPolicyOnClusterDeletion: Backup Retention Policy. Values:
     * - 0: Immediately delete all backup sets of the instance upon release.
     * - 1: Automatically back up the instance upon release, and retain the backup set long-term.
     * - 2: Automatically back up the instance upon release, and retain all backup sets of the cluster long-term.
         */
        readonly backupRetentionPolicyOnClusterDeletion?: number | ros.IResolvable;
        /**
         * @Property crossBackupPeriod: Off-site backup cycle, values: Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday.When passing multiple values, please use commas (,).
         */
        readonly crossBackupPeriod?: string | ros.IResolvable;
        /**
         * @Property preferredBackupPeriod: Backup cycle, values: Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday. When passing multiple values, please use commas (,).
         */
        readonly preferredBackupPeriod?: string | ros.IResolvable;
        /**
         * @Property crossLogRetentionType: Cross-region backup log retention type:
     * - delay: retain for a period of time
     * - never: does not expire
         */
        readonly crossLogRetentionType?: string | ros.IResolvable;
        /**
         * @Property logBackupRetentionPeriod: Retention period of log backup data. Unit: days.
         */
        readonly logBackupRetentionPeriod?: number | ros.IResolvable;
        /**
         * @Property crossRetentionValue: Off-site backup retention value.
         */
        readonly crossRetentionValue?: number | ros.IResolvable;
        /**
         * @Property crossBackupType: Off-site backup operation policy:
     * - update: Modify the off-site backup policy
     * - delete: Delete the off-site backup policy
         */
        readonly crossBackupType?: string | ros.IResolvable;
        /**
         * @Property srcRegion: Source region of off-site backup.
         */
        readonly srcRegion?: string | ros.IResolvable;
        /**
         * @Property crossRetentionType: Off-site backup retention type:
     * - delay: retain for a period of time
     * - never: does not expire
         */
        readonly crossRetentionType?: string | ros.IResolvable;
        /**
         * @Property crossLogRetentionValue: Cross-region backup log retention value.
         */
        readonly crossLogRetentionValue?: number | ros.IResolvable;
        /**
         * @Property enableCrossLogBackup: Enable cross-region backup log. Values:
     * - 1: Enabled (Requires 1 for sharded clusters; requires 1 for replica sets to support point-in-time recovery)
     * - 0: Disabled
         */
        readonly enableCrossLogBackup?: number | ros.IResolvable;
        /**
         * @Property preserveOneEachHour: Whether to preserve one backup per hour.
         */
        readonly preserveOneEachHour?: boolean | ros.IResolvable;
        /**
         * @Property snapshotBackupType: Snapshot backup type, values:
     * - Flash: Second-level backup.
     * - Standard: Regular backup (default).
         */
        readonly snapshotBackupType?: string | ros.IResolvable;
        /**
         * @Property enableBackupLog: Whether to enable log backup: 1: Enabled; 0: Not enabled.
         */
        readonly enableBackupLog?: number | ros.IResolvable;
        /**
         * @Property backupRetentionPeriod: Retention period of backup data. Unit: days.
         */
        readonly backupRetentionPeriod?: number | ros.IResolvable;
        /**
         * @Property instanceType: Instance type:
     * - replica: replica set
     * - sharding: sharded cluster
         */
        readonly instanceType?: string | ros.IResolvable;
        /**
         * @Property destRegion: Destination region of off-site backup.
         */
        readonly destRegion?: string | ros.IResolvable;
        /**
         * @Property backupInterval: High-frequency backup frequency, with the following values:
     * - -1: High-frequency backup not enabled.
     * - 30: Every 30 minutes.
     * - 60: Every 1 hour.
     * - 120: Every 2 hours.
     * - 180: Every 3 hours.
     * - 240: Every 4 hours.
     * - 360: Every 6 hours.
     * - 480: Every 8 hours.
     * - 720: Every 12 hours.
         */
        readonly backupInterval?: number | ros.IResolvable;
    }
}
export declare namespace RosInstance {
    /**
     * @stability external
     */
    interface PrivateConnectionsProperty {
        /**
         * @Property replicaConnections: Replica private connections
         */
        readonly replicaConnections: Array<RosInstance.ReplicaConnectionsProperty | ros.IResolvable> | ros.IResolvable;
    }
}
export declare namespace RosInstance {
    /**
     * @stability external
     */
    interface ReplicaConnectionsProperty {
        /**
         * @Property connectionPort: The service port number of the ApsaraDB for MongoDB instance. Valid values: 1000 to 65535.
         */
        readonly connectionPort?: number | ros.IResolvable;
        /**
         * @Property connectionString: The prefix of the connection string.
     * The prefix must be 8 to 64 characters in length,
     * and can contain lowercase letters and digits.
     * It must start with a lowercase letter.
         */
        readonly connectionString: string | ros.IResolvable;
    }
}
export declare namespace RosInstance {
    /**
     * @stability external
     */
    interface SSLOptionsProperty {
        /**
         * @Property forceEncryption: Whether to force SSL encryption on the connection: 1: Force SSL encryption; 0: Do not force SSL encryption.
         */
        readonly forceEncryption?: number | ros.IResolvable;
        /**
         * @Property switchMode: The timeframe for modifying the MongoDB instance's SSL configuration. Valid values:
     * - 0: Modify immediately.
     * - 1: Modify within the manageable timeframe.
         */
        readonly switchMode?: number | ros.IResolvable;
        /**
         * @Property sslAction: SSL action.
         */
        readonly sslAction: string | ros.IResolvable;
    }
}
export declare namespace RosInstance {
    /**
     * @stability external
     */
    interface TagsProperty {
        /**
         * @Property value: undefined
         */
        readonly value?: string | ros.IResolvable;
        /**
         * @Property key: undefined
         */
        readonly key: string | ros.IResolvable;
    }
}
/**
 * Properties for defining a `RosPrivateSrvNetworkAddress`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mongodb-privatesrvnetworkaddress
 */
export interface RosPrivateSrvNetworkAddressProps {
    /**
     * @Property dbInstanceId: The instance ID.
     */
    readonly dbInstanceId: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::MONGODB::PrivateSrvNetworkAddress`.
 * @Note This class does not contain additional functions, so it is recommended to use the `PrivateSrvNetworkAddress` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mongodb-privatesrvnetworkaddress
 */
export declare class RosPrivateSrvNetworkAddress extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::MONGODB::PrivateSrvNetworkAddress";
    /**
     * @Attribute PrivateSrvConnectionStringUri: Private network SRV highly available connection address.
     */
    readonly attrPrivateSrvConnectionStringUri: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property dbInstanceId: The instance ID.
     */
    dbInstanceId: string | ros.IResolvable;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosPrivateSrvNetworkAddressProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosShardingInstance`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mongodb-shardinginstance
 */
export interface RosShardingInstanceProps {
    /**
     * @Property configServer:
     */
    readonly configServer: Array<RosShardingInstance.ConfigServerProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property mongos:
     */
    readonly mongos: Array<RosShardingInstance.MongosProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property replicaSet:
     */
    readonly replicaSet: Array<RosShardingInstance.ReplicaSetProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property accountPassword: Root account password, can contain the letters, numbers or underscores the composition, length of 6~32 bit.
     */
    readonly accountPassword?: string | ros.IResolvable;
    /**
     * @Property autoRenew: Indicates whether automatic renewal is enabled for the instance. Valid values:true: Automatic renewal is enabled.false: Automatic renewal is not enabled. You must renew the instance manually.Default value: false.
     */
    readonly autoRenew?: boolean | ros.IResolvable;
    /**
     * @Property chargeType: The billing method of the instance.values:PostPaid: Pay-As-You-Go.PrePaid: Subscription.Default value: PostPaid
     */
    readonly chargeType?: string | ros.IResolvable;
    /**
     * @Property dbInstanceDescription: Description of created database instance.
     */
    readonly dbInstanceDescription?: string | ros.IResolvable;
    /**
     * @Property engineVersion: Database instance version.
     */
    readonly engineVersion?: string | ros.IResolvable;
    /**
     * @Property hiddenZoneId: Configure the zone where the hidden node resides to implement multi-availability zone deployment.
     * When the value of the EngineVersion is 4.4 and later, this parameter is available and required.
     * The value of this parameter cannot be the same as that of ZoneId and SecondaryZoneId.
     */
    readonly hiddenZoneId?: string | ros.IResolvable;
    /**
     * @Property period: The subscription period of the instance.Default Unit: Month.Valid values: [1~9], 12, 24, 36. Default to 1.
     */
    readonly period?: number | ros.IResolvable;
    /**
     * @Property protocolType: Protocol type. Valid value: mongodb or dynamodb.
     */
    readonly protocolType?: string | ros.IResolvable;
    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * @Property restoreTime: The time to restore the cloned instance to. The format is yyyy-MM-ddTHH:mm:ssZ.This parameter can only be specified when this operation is called to clone instances.You must also specify theSrcDBInstanceIdparameter and theBackupIdparameter.You can clone instances to any restore time in the past seven days.
     */
    readonly restoreTime?: string | ros.IResolvable;
    /**
     * @Property secondaryZoneId: Configure the zone where the secondary node resides to implement multi-availability zone deployment.
     * When the value of the EngineVersion is 4.4 and later, this parameter is available and required.The value of this parameter cannot be the same as that of ZoneId and HiddenZoneId.
     */
    readonly secondaryZoneId?: string | ros.IResolvable;
    /**
     * @Property securityIpArray: Security ips to add or remove. Update to this property will cover the current security ips.
     */
    readonly securityIpArray?: string | ros.IResolvable;
    /**
     * @Property srcDbInstanceId: Create an instance of the backup set based on an instance.
     */
    readonly srcDbInstanceId?: string | ros.IResolvable;
    /**
     * @Property storageEngine: Database storage engine.Support WiredTiger, RocksDB, TerarkDB
     */
    readonly storageEngine?: string | ros.IResolvable;
    /**
     * @Property storageType: The storage type of the instance.
     * Instances of MongoDB 4.4 and later only support cloud disks. cloud_essd1 is selected if you leave this parameter empty.
     * Instances of MongoDB 4.2 and earlier support only local disks. local_ssd is selected if you leave this parameter empty.
     */
    readonly storageType?: string | ros.IResolvable;
    /**
     * @Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosShardingInstance.TagsProperty[];
    /**
     * @Property tdeStatus: Specifies whether to enable Transparent Data Encryption (TDE). Valid values:
     * true: enable TDE
     * false: disable TDE (default)
     * Note: You cannot disable TDE after it is enabled.
     */
    readonly tdeStatus?: boolean | ros.IResolvable;
    /**
     * @Property vpcId: The VPC id to create mongodb instance.
     */
    readonly vpcId?: string | ros.IResolvable;
    /**
     * @Property vSwitchId: The vSwitch Id to create mongodb instance.
     */
    readonly vSwitchId?: string | ros.IResolvable;
    /**
     * @Property zoneId: On which zone to create the instance. If VpcId and VSwitchId is specified, ZoneId is required and VSwitch should be in same zone.
     */
    readonly zoneId?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::MONGODB::ShardingInstance`.
 * @Note This class does not contain additional functions, so it is recommended to use the `ShardingInstance` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mongodb-shardinginstance
 */
export declare class RosShardingInstance extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::MONGODB::ShardingInstance";
    /**
     * @Attribute Arn: The Alibaba Cloud Resource Name (ARN).
     */
    readonly attrArn: ros.IResolvable;
    /**
     * @Attribute DBInstanceId: The instance id of created mongodb instance.
     */
    readonly attrDbInstanceId: ros.IResolvable;
    /**
     * @Attribute DBInstanceStatus: Status of mongodb instance.
     */
    readonly attrDbInstanceStatus: ros.IResolvable;
    /**
     * @Attribute OrderId: Order Id of created instance.
     */
    readonly attrOrderId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property configServer:
     */
    configServer: Array<RosShardingInstance.ConfigServerProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property mongos:
     */
    mongos: Array<RosShardingInstance.MongosProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property replicaSet:
     */
    replicaSet: Array<RosShardingInstance.ReplicaSetProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property accountPassword: Root account password, can contain the letters, numbers or underscores the composition, length of 6~32 bit.
     */
    accountPassword: string | ros.IResolvable | undefined;
    /**
     * @Property autoRenew: Indicates whether automatic renewal is enabled for the instance. Valid values:true: Automatic renewal is enabled.false: Automatic renewal is not enabled. You must renew the instance manually.Default value: false.
     */
    autoRenew: boolean | ros.IResolvable | undefined;
    /**
     * @Property chargeType: The billing method of the instance.values:PostPaid: Pay-As-You-Go.PrePaid: Subscription.Default value: PostPaid
     */
    chargeType: string | ros.IResolvable | undefined;
    /**
     * @Property dbInstanceDescription: Description of created database instance.
     */
    dbInstanceDescription: string | ros.IResolvable | undefined;
    /**
     * @Property engineVersion: Database instance version.
     */
    engineVersion: string | ros.IResolvable | undefined;
    /**
     * @Property hiddenZoneId: Configure the zone where the hidden node resides to implement multi-availability zone deployment.
     * When the value of the EngineVersion is 4.4 and later, this parameter is available and required.
     * The value of this parameter cannot be the same as that of ZoneId and SecondaryZoneId.
     */
    hiddenZoneId: string | ros.IResolvable | undefined;
    /**
     * @Property period: The subscription period of the instance.Default Unit: Month.Valid values: [1~9], 12, 24, 36. Default to 1.
     */
    period: number | ros.IResolvable | undefined;
    /**
     * @Property protocolType: Protocol type. Valid value: mongodb or dynamodb.
     */
    protocolType: string | ros.IResolvable | undefined;
    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property restoreTime: The time to restore the cloned instance to. The format is yyyy-MM-ddTHH:mm:ssZ.This parameter can only be specified when this operation is called to clone instances.You must also specify theSrcDBInstanceIdparameter and theBackupIdparameter.You can clone instances to any restore time in the past seven days.
     */
    restoreTime: string | ros.IResolvable | undefined;
    /**
     * @Property secondaryZoneId: Configure the zone where the secondary node resides to implement multi-availability zone deployment.
     * When the value of the EngineVersion is 4.4 and later, this parameter is available and required.The value of this parameter cannot be the same as that of ZoneId and HiddenZoneId.
     */
    secondaryZoneId: string | ros.IResolvable | undefined;
    /**
     * @Property securityIpArray: Security ips to add or remove. Update to this property will cover the current security ips.
     */
    securityIpArray: string | ros.IResolvable | undefined;
    /**
     * @Property srcDbInstanceId: Create an instance of the backup set based on an instance.
     */
    srcDbInstanceId: string | ros.IResolvable | undefined;
    /**
     * @Property storageEngine: Database storage engine.Support WiredTiger, RocksDB, TerarkDB
     */
    storageEngine: string | ros.IResolvable | undefined;
    /**
     * @Property storageType: The storage type of the instance.
     * Instances of MongoDB 4.4 and later only support cloud disks. cloud_essd1 is selected if you leave this parameter empty.
     * Instances of MongoDB 4.2 and earlier support only local disks. local_ssd is selected if you leave this parameter empty.
     */
    storageType: string | ros.IResolvable | undefined;
    /**
     * @Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    tags: RosShardingInstance.TagsProperty[] | undefined;
    /**
     * @Property tdeStatus: Specifies whether to enable Transparent Data Encryption (TDE). Valid values:
     * true: enable TDE
     * false: disable TDE (default)
     * Note: You cannot disable TDE after it is enabled.
     */
    tdeStatus: boolean | ros.IResolvable | undefined;
    /**
     * @Property vpcId: The VPC id to create mongodb instance.
     */
    vpcId: string | ros.IResolvable | undefined;
    /**
     * @Property vSwitchId: The vSwitch Id to create mongodb instance.
     */
    vSwitchId: string | ros.IResolvable | undefined;
    /**
     * @Property zoneId: On which zone to create the instance. If VpcId and VSwitchId is specified, ZoneId is required and VSwitch should be in same zone.
     */
    zoneId: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosShardingInstanceProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosShardingInstance {
    /**
     * @stability external
     */
    interface ConfigServerProperty {
        /**
         * @Property storage: The storage space of config server. Valid value: 20. Unit: GB.
         */
        readonly storage: number | ros.IResolvable;
        /**
         * @Property class: The specification of config server.
         */
        readonly class: string | ros.IResolvable;
    }
}
export declare namespace RosShardingInstance {
    /**
     * @stability external
     */
    interface MongosProperty {
        /**
         * @Property class: The specification of mongo.
         */
        readonly class: string | ros.IResolvable;
    }
}
export declare namespace RosShardingInstance {
    /**
     * @stability external
     */
    interface ReplicaSetProperty {
        /**
         * @Property storage: The storage space of shard.
     * Valid values: 10 to 2000. Unit: GB.
     * You can only specify this value in 10 GB increments.
         */
        readonly storage: number | ros.IResolvable;
        /**
         * @Property readonlyReplicas: The number of read-only nodes in shard node.
         */
        readonly readonlyReplicas?: number | ros.IResolvable;
        /**
         * @Property class: The specification of shard.
         */
        readonly class: string | ros.IResolvable;
    }
}
export declare namespace RosShardingInstance {
    /**
     * @stability external
     */
    interface TagsProperty {
        /**
         * @Property value: undefined
         */
        readonly value?: string | ros.IResolvable;
        /**
         * @Property key: undefined
         */
        readonly key: string | ros.IResolvable;
    }
}
/**
 * Properties for defining a `RosShardingNetworkPrivateAddress`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mongodb-shardingnetworkprivateaddress
 */
export interface RosShardingNetworkPrivateAddressProps {
    /**
     * @Property dbInstanceId: The ID of the Shard cluster instance.
     */
    readonly dbInstanceId: string | ros.IResolvable;
    /**
     * @Property nodeId: The ID of the Mongos node, Shard node, or ConfigServer node in the sharded cluster instance.
     * > You can call the [DescribeDBInstanceAttribute] interface to query the Mongos, Shard, and ConfigServer node ID.
     */
    readonly nodeId: string | ros.IResolvable;
    /**
     * @Property accountName: Account name.
     * >- starts with a lowercase letter, has 4 to 16 digits in length, and consists of lowercase letters, numbers, or underscores.
     * - Only when you apply for the Shard\/ConfigServer address for the first time, you need to set the account name and password. That is, all Shard nodes and ConfigServer nodes will use the account and password set when applying for the address for the first time.
     * - The permissions of this account are fixed to read-only.
     */
    readonly accountName?: string | ros.IResolvable;
    /**
     * @Property accountPassword: Account password.
     * - The password consists of at least three of uppercase letters, lowercase letters, numbers, and special characters. The special character is '! #$%^& *()_+-='
     * - The password length is 8-32 bits.
     */
    readonly accountPassword?: string | ros.IResolvable;
    /**
     * @Property zoneId: The ID of the zone to which the instance belongs.
     * > You can call the [describeddinstanceattribute] operation to query the zone ID of an instance.
     */
    readonly zoneId?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::MONGODB::ShardingNetworkPrivateAddress`.
 * @Note This class does not contain additional functions, so it is recommended to use the `ShardingNetworkPrivateAddress` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mongodb-shardingnetworkprivateaddress
 */
export declare class RosShardingNetworkPrivateAddress extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::MONGODB::ShardingNetworkPrivateAddress";
    /**
     * @Attribute CompatibleConnections: The list of connection addresses of the DynamoDB protocol instance.
     */
    readonly attrCompatibleConnections: ros.IResolvable;
    /**
     * @Attribute NetworkAddresses: A list of connection addresses of an instance of the MongoDB protocol type.
     */
    readonly attrNetworkAddresses: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property dbInstanceId: The ID of the Shard cluster instance.
     */
    dbInstanceId: string | ros.IResolvable;
    /**
     * @Property nodeId: The ID of the Mongos node, Shard node, or ConfigServer node in the sharded cluster instance.
     * > You can call the [DescribeDBInstanceAttribute] interface to query the Mongos, Shard, and ConfigServer node ID.
     */
    nodeId: string | ros.IResolvable;
    /**
     * @Property accountName: Account name.
     * >- starts with a lowercase letter, has 4 to 16 digits in length, and consists of lowercase letters, numbers, or underscores.
     * - Only when you apply for the Shard\/ConfigServer address for the first time, you need to set the account name and password. That is, all Shard nodes and ConfigServer nodes will use the account and password set when applying for the address for the first time.
     * - The permissions of this account are fixed to read-only.
     */
    accountName: string | ros.IResolvable | undefined;
    /**
     * @Property accountPassword: Account password.
     * - The password consists of at least three of uppercase letters, lowercase letters, numbers, and special characters. The special character is '! #$%^& *()_+-='
     * - The password length is 8-32 bits.
     */
    accountPassword: string | ros.IResolvable | undefined;
    /**
     * @Property zoneId: The ID of the zone to which the instance belongs.
     * > You can call the [describeddinstanceattribute] operation to query the zone ID of an instance.
     */
    zoneId: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosShardingNetworkPrivateAddressProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosShardingNetworkPublicAddress`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mongodb-shardingnetworkpublicaddress
 */
export interface RosShardingNetworkPublicAddressProps {
    /**
     * @Property dbInstanceId: The ID of the instance.
     * > you must also configure the **NodeId** parameter when configuring a shard cluster instance ID.
     */
    readonly dbInstanceId: string | ros.IResolvable;
    /**
     * @Property nodeId: The Mongos node ID, Shard node ID, or ConfigServer node ID in the sharded cluster instance. You can call the [DescribeDBInstanceAttribute](~~ 62010 ~~) operation to query the node ID of the Mongos node, Shard node, or ConfigServer node.
     * > This parameter is required when **DBInstanceId** is configured as a sharded cluster instance ID.
     */
    readonly nodeId?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::MONGODB::ShardingNetworkPublicAddress`.
 * @Note This class does not contain additional functions, so it is recommended to use the `ShardingNetworkPublicAddress` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-mongodb-shardingnetworkpublicaddress
 */
export declare class RosShardingNetworkPublicAddress extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::MONGODB::ShardingNetworkPublicAddress";
    /**
     * @Attribute NetworkAddresses: A list of connection addresses of an instance of the MongoDB protocol type.
     */
    readonly attrNetworkAddresses: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property dbInstanceId: The ID of the instance.
     * > you must also configure the **NodeId** parameter when configuring a shard cluster instance ID.
     */
    dbInstanceId: string | ros.IResolvable;
    /**
     * @Property nodeId: The Mongos node ID, Shard node ID, or ConfigServer node ID in the sharded cluster instance. You can call the [DescribeDBInstanceAttribute](~~ 62010 ~~) operation to query the node ID of the Mongos node, Shard node, or ConfigServer node.
     * > This parameter is required when **DBInstanceId** is configured as a sharded cluster instance ID.
     */
    nodeId: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosShardingNetworkPublicAddressProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
