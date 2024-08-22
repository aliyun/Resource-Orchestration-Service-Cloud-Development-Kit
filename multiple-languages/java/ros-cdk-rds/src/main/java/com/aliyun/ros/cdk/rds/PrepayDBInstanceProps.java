package com.aliyun.ros.cdk.rds;

/**
 * Properties for defining a <code>PrepayDBInstance</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-rds-prepaydbinstance
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-08-22T08:56:23.530Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.rds.$Module.class, fqn = "@alicloud/ros-cdk-rds.PrepayDBInstanceProps")
@software.amazon.jsii.Jsii.Proxy(PrepayDBInstanceProps.Jsii$Proxy.class)
public interface PrepayDBInstanceProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property commodityCode: The CommodityCode of the order.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getCommodityCode();

    /**
     * Property dbInstanceClass: Database instance type.
     * <p>
     * Refer the RDS database instance type reference, such as 'rds.mys2.large', 'rds.mss1.large', 'rds.pg.s1.small' etc
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDbInstanceClass();

    /**
     * Property dbInstanceStorage: The storage capacity of the instance.
     * <p>
     * Unit: GB. The storage capacity increases in increments of 5 GB.
     * You can call the DescribeAvailableResource operation to query the storage capacity range that is supported for a specified instance type in a region.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDbInstanceStorage();

    /**
     * Property engine: Database instance engine type.
     * <p>
     * Support MySQL/SQLServer/PostgreSQL/PPAS/MariaDB now.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getEngine();

    /**
     * Property engineVersion: Database instance version of the relative engine type.
     * <p>
     * Support:
     * Valid values when you set the Engine parameter to MySQL: 5.5, 5.6, 5.7, and 8.0
     * Valid values when you set the Engine parameter to SQL Server: 2008r2, 08r2_ent_ha, 2012, 2012_ent_ha, 2012_std_ha, 2012_web, 2014_std_ha, 2016_ent_ha, 2016_std_ha, 2016_web, 2017_std_ha, 2017_ent, 2019_std_ha, and 2019_ent
     * Valid values when you set the Engine parameter to PostgreSQL: 10.0, 11.0, 12.0, 13.0, and 14.0
     * Valid values when you set the Engine parameter to MariaDB: 10.3
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getEngineVersion();

    /**
     * Property period: Prepaid time period.
     * <p>
     * While choose by pay by month, it could be from 1 to 9. While choose pay by year, it could be from 1 to 3.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getPeriod();

    /**
     * Property periodType: Charge period for created instances.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getPeriodType();

    /**
     * Property allocatePublicConnection: If true, allocate public connection automate.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAllocatePublicConnection() {
        return null;
    }

    /**
     * Property archiveBackupKeepCount: The number of archived backups that can be retained.
     * <p>
     * Default value: 1. Valid values:
     * The value of this parameter ranges from 1 to 31 when the ArchiveBackupKeepPolicy
     * parameter is set to ByMonth.
     * The value of this parameter ranges from 1 to 7 when the ArchiveBackupKeepPolicy
     * parameter is set to ByWeek.
     * Note You do not need to specify this parameter when the ArchiveBackupKeepPolicy
     * parameter is set to KeepAll.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getArchiveBackupKeepCount() {
        return null;
    }

    /**
     * Property archiveBackupKeepPolicy: The period for which to retain archived backups.
     * <p>
     * The number of archived backups that can
     * be retained within the specified period is determined by the ArchiveBackupKeepCount parameter.
     * Default value: 0. Valid values:
     * ByMonth
     * ByWeek
     * KeepAll
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getArchiveBackupKeepPolicy() {
        return null;
    }

    /**
     * Property archiveBackupRetentionPeriod: The number of days for which to retain archived backups.
     * <p>
     * The default value 0 specifies not to enable the backup archiving function. Valid values: 30 to 1095.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getArchiveBackupRetentionPeriod() {
        return null;
    }

    /**
     * Property autoPay: Automatic Payment.
     * <p>
     * Default is true.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAutoPay() {
        return null;
    }

    /**
     * Property autoRenew: Auto renew the prepay instance.
     * <p>
     * If the period type is by year, it will renew by year, else it will renew by month.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAutoRenew() {
        return null;
    }

    /**
     * Property backUpCategory: Specifies whether to enable the second-level backup function.
     * <p>
     * This function allows a backup
     * to be completed within seconds. Valid values:
     * Flash: specifies to enable the second-level backup function.
     * Standard: specifies to disable the second-level backup function.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getBackUpCategory() {
        return null;
    }

    /**
     * Property backupPolicyMode: Backup type,  DataBackupPolicy: data backup  LogBackupPolicy: log backup.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getBackupPolicyMode() {
        return null;
    }

    /**
     * Property backupRetentionPeriod: The retention period of the data backup.
     * <p>
     * Value range: 7 to 730. The default value is the original value. Note When the BackupPolicyMode parameter is set to LogBackupPolicy, this parameter is required.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getBackupRetentionPeriod() {
        return null;
    }

    /**
     * Property burstingEnabled: Whether to enable bursting.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getBurstingEnabled() {
        return null;
    }

    /**
     * Property category: The edition of the instance.
     * <p>
     * Valid values:
     * Basic: RDS Basic Edition
     * HighAvailability: RDS High-availability Edition
     * cluster: RDS Cluster Edition
     * AlwaysOn: RDS Cluster Edition for SQL Server
     * Finance: RDS Enterprise Edition
     * serverless_basic: RDS Serverless Basic Edition
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCategory() {
        return null;
    }

    /**
     * Property coldDataEnabled: Whether to enable cold data storage.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getColdDataEnabled() {
        return null;
    }

    /**
     * Property compressType: The format used to compress backups.
     * <p>
     * Valid values:
     * 1: The zlib tool is used to compress backups into .tar.gz files.
     * 4: The QuickLZ tool is used to compress backups into .xb.gz files.
     * This compression format is supported only when the instance runs MySQL 5.6 or 5.7.
     * It can be used to restore individual databases and tables.
     * 8: The QuickLZ tool is used to compress backups into .xb.gz files.
     * This compression format is supported only when the instance runs MySQL 8.0.
     * It cannot be used to restore individual databases or tables.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCompressType() {
        return null;
    }

    /**
     * Property connectionMode: Connection Mode for database instance,support 'Standard' and 'Safe' mode.
     * <p>
     * Default is RDS system assigns.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getConnectionMode() {
        return null;
    }

    /**
     * Property connectionStringPrefix: The prefix of the endpoint.
     * <p>
     * Only the prefix of the CurrentConnectionString parameter value can be modified.
     * The prefix must be 8 to 64 characters in length and can contain letters, digits, and hyphens (-).
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getConnectionStringPrefix() {
        return null;
    }

    /**
     * Property connectionStringType: The endpoint type of the instance, allow values: Inner, Public.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getConnectionStringType() {
        return null;
    }

    /**
     * Property couponCode: The coupon code of the order.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCouponCode() {
        return null;
    }

    /**
     * Property dbInstanceDescription: Description of created database instance.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDbInstanceDescription() {
        return null;
    }

    /**
     * Property dbInstanceNetType: Database instance net type, default is Intranet.Internet for public access, Intranet for private access.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDbInstanceNetType() {
        return null;
    }

    /**
     * Property dbInstanceStorageType: The storage type of the instance.
     * <p>
     * Valid values:
     * local_ssd: specifies to use local SSDs. This is the recommended storage type.
     * cloud_ssd: specifies to use standard SSDs.
     * cloud_essd: enhanced SSD of performance level (PL)1.
     * cloud_essd2: enhanced SSD of PL2.
     * cloud_essd3: enhanced SSD of PL3.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDbInstanceStorageType() {
        return null;
    }

    /**
     * Property dbIsIgnoreCase: Specifies whether table names are case-sensitive.
     * <p>
     * Valid values:
     * 1: Table names are not case-sensitive. This is the default value.
     * 0: Table names are case-sensitive.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDbIsIgnoreCase() {
        return null;
    }

    /**
     * Property dbMappings: Database mappings to attach to db instance.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDbMappings() {
        return null;
    }

    /**
     * Property dbParamGroupId: The ID of the parameter template used by the instance.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDbParamGroupId() {
        return null;
    }

    /**
     * Property dbTimeZone: The UTC time zone of the instance.
     * <p>
     * Valid values: -12:00 to +12:00. The time zone must be an integer value such as +08:00. Values such as +08:30 are not allowed.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDbTimeZone() {
        return null;
    }

    /**
     * Property dedicatedHostGroupId: The ID of the host group to which the instance belongs if you create an instance in a host group.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDedicatedHostGroupId() {
        return null;
    }

    /**
     * Property enableBackupLog: Specifies whether to enable the log backup function.
     * <p>
     * Valid values:
     * True: specifies to enable the log backup function.
     * False: specifies to disable the log backup function.
     * Note You must specify this parameter when the BackupPolicyMode parameter is set to LogBackupPolicy.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEnableBackupLog() {
        return null;
    }

    /**
     * Property encryptionKey: The ID of the encryption key that is used to encrypt data on SSDs in the region.
     * <p>
     * You can view the encryption key ID in the Key Management Service (KMS) console. You can also create an encryption key.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEncryptionKey() {
        return null;
    }

    /**
     * Property highSpaceUsageProtection: Specifies whether to forcibly delete log backup files when the space usage of the    instance exceeds 80% or the remaining space is less than 5 GB.
     * <p>
     * Valid values:
     * Enable and Disable. You can retain the default value. Note You must specify
     * this parameter when the BackupPolicyMode parameter is set to LogBackupPolicy.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getHighSpaceUsageProtection() {
        return null;
    }

    /**
     * Property instanceNetworkType: Instance network type, VPC or Classic.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInstanceNetworkType() {
        return null;
    }

    /**
     * Property ioAccelerationEnabled: Whether to enable IO Acceleration, 1 for enable 0 for disable.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getIoAccelerationEnabled() {
        return null;
    }

    /**
     * Property localLogRetentionHours: The number of hours for which to retain log backup files on the instance.
     * <p>
     * Valid values: 0 to 168. The value 0 specifies not to retain log backup files on the instance.
     * You can retain the default value. Note You must specify this parameter when the BackupPolicyMode
     * parameter is set to LogBackupPolicy.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getLocalLogRetentionHours() {
        return null;
    }

    /**
     * Property localLogRetentionSpace: The maximum percentage of space that is allowed to store log backup files on the instance.
     * <p>
     * If the space usage for log backup files exceeds this percentage, the system deletes earlier
     * log backup files until the space usage falls below this percentage. Valid values:0 to 50.
     * You can retain the default value. Note You must specify this parameter when the
     * BackupPolicyMode parameter is set to LogBackupPolicy.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getLocalLogRetentionSpace() {
        return null;
    }

    /**
     * Property logBackupFrequency: The frequency at which to back up logs.
     * <p>
     * Valid values:
     * The value LogInterval specifies to back up logs every 30 minutes.
     * The default value of this parameter is the same as the data backup frequency.
     * Note The value LogInterval is supported only when the instance runs SQL Server.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getLogBackupFrequency() {
        return null;
    }

    /**
     * Property logBackupLocalRetentionNumber: The number of log backup files that can be retained on the instance.
     * <p>
     * Default value: 60. Valid values: 6 to 100.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getLogBackupLocalRetentionNumber() {
        return null;
    }

    /**
     * Property logBackupRetentionPeriod: The number of days for which to retain log backup files.
     * <p>
     * Valid values: 7 to 730. The log backup
     * retention period cannot be longer than the data backup retention period.Note If you enable the log
     * backup function, you can specify the log backup retention period. This applies only when the
     * instance runs MySQL, PostgreSQL, or PPAS.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getLogBackupRetentionPeriod() {
        return null;
    }

    /**
     * Property maintainTime: The period during which the maintenance performs.
     * <p>
     * The format is HH:mmZ-HH:mmZ.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getMaintainTime() {
        return null;
    }

    /**
     * Property masterUsername: The master user name for the database instance.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getMasterUsername() {
        return null;
    }

    /**
     * Property masterUserPassword: The master password for the database instance.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getMasterUserPassword() {
        return null;
    }

    /**
     * Property masterUserType: Privilege type of account.
     * <p>
     * Normal: Common privilege.
     * Super: High privilege.
     * Sysadmin: Super privileges (SA) (only supported by SQL Server)
     * The default value is Normal.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getMasterUserType() {
        return null;
    }

    /**
     * Property multiAz: Specifies if the database instance is a multiple Availability Zone deployment.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getMultiAz() {
        return null;
    }

    /**
     * Property port: The port of the database service.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPort() {
        return null;
    }

    /**
     * Property preferredBackupPeriod: The backup period.
     * <p>
     * Separate multiple values with commas (,). The default value is the original value. Valid values:Monday Tuesday Wednesday Thursday Friday Saturday Sunday Note When the BackupPolicyMode parameter is set to DataBackupPolicy, this parameter is required.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPreferredBackupPeriod() {
        return null;
    }

    /**
     * Property preferredBackupTime: The time when the backup task is performed.
     * <p>
     * Format: yyyy-MM-ddZ-HH:mm:ssZ.Note When the BackupPolicyMode parameter is set to DataBackupPolicy, this parameter is required.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPreferredBackupTime() {
        return null;
    }

    /**
     * Property privateIpAddress: The private ip for created instance.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPrivateIpAddress() {
        return null;
    }

    /**
     * Property quantity: The number of instance to be created, default is 1, max number is 99.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getQuantity() {
        return null;
    }

    /**
     * Property releasedKeepPolicy: The policy used to retain archived backups if the instance is released.
     * <p>
     * Default value: None.
     * Valid values:
     * Lastest: Only the last archived backup is retained.
     * All: All of the archived backups are retained.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getReleasedKeepPolicy() {
        return null;
    }

    /**
     * Property resourceGroupId: Resource group id.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return null;
    }

    /**
     * Property roleArn: The Alibaba Cloud Resource Name (ARN) provided to the service account of the instance by your Alibaba Cloud account to connect to KMS.
     * <p>
     * You can copy the ARN from the RAM console.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRoleArn() {
        return null;
    }

    /**
     * Property securityGroupId: The ID of the ECS security groups.
     * <p>
     * Each RDS instance can be associated with up to three ECS security groups.
     * You must separate them with commas (,).
     * To delete an ECS Security group, leave this parameter empty.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSecurityGroupId() {
        return null;
    }

    /**
     * Property serverlessConfig: The config of RDS serverless instance.
     * <p>
     * This is required when creating serverless instance.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getServerlessConfig() {
        return null;
    }

    /**
     * Property slaveZoneIds: List of slave zone ids can specify slave zone ids when creating the high-availability or enterprise edition instance.
     * <p>
     * Meanwhile, VSwitchId needs to pass in the corresponding vswitch id to the slave zone by order. For example, ZoneId = "zone-a" and SlaveZoneIds = ["zone-c", "zone-b"], then the VSwitchId must be "vsw-zone-a,vsw-zone-c,vsw-zone-b".
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSlaveZoneIds() {
        return null;
    }

    /**
     * Property sqlCollectorStatus: Specifies whether to enable or disable the SQL Explorer (SQL audit) feature.
     * <p>
     * Valid values:Enable | Disabled.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSqlCollectorStatus() {
        return null;
    }

    /**
     * Property sslSetting: Secure Sockets Layer (SSL) link setting of the instance.
     * <p>
     * Valid values:
     * Disabled: Disable SSL
     * EnabledForPublicConnection: Public connection address will be protected by the SSL certificate. It requires AllocatePublicConnection is true.
     * EnabledForInnerConnection: Private connection address will be protected by the SSL certificate.
     * Default value is Disabled.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSslSetting() {
        return null;
    }

    /**
     * Property storageAutoScale: Storage space automatic expansion switch, only supported by MySQL and PostgreSQL.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getStorageAutoScale() {
        return null;
    }

    /**
     * Property storageThreshold: Storage space automatic expansion trigger threshold (percentage).
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getStorageThreshold() {
        return null;
    }

    /**
     * Property storageUpperBound: The total storage space upper limit for automatic storage space expansion, that is, automatic expansion will not cause the total storage space of the instance to exceed this value.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getStorageUpperBound() {
        return null;
    }

    /**
     * Property tags: The tags of an instance.
     * <p>
     * You should input the information of the tag with the format of the Key-Value, such as {"key1":"value1","key2":"value2", ... "key5":"value5"}.
     * At most 20 tags can be specified.
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
    default @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.Object> getTags() {
        return null;
    }

    /**
     * Property targetDedicatedHostIdForLog: The ID of the host to which the instance belongs if you create a log instance in a host group.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTargetDedicatedHostIdForLog() {
        return null;
    }

    /**
     * Property targetDedicatedHostIdForMaster: The ID of the host to which the instance belongs if you create a primary instance in a host group.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTargetDedicatedHostIdForMaster() {
        return null;
    }

    /**
     * Property targetDedicatedHostIdForSlave: The ID of the host to which the instance belongs if you create a secondary instance in a host group.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTargetDedicatedHostIdForSlave() {
        return null;
    }

    /**
     * Property vpcId: The VPC id of created database instance.
     * <p>
     * For VPC network, the property is required.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getVpcId() {
        return null;
    }

    /**
     * Property vSwitchId: The vSwitch id of created instance.
     * <p>
     * For VPC network, the property is required.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getVSwitchId() {
        return null;
    }

    /**
     * Property zoneId: selected zone to create database instance.
     * <p>
     * You cannot set the ZoneId parameter if the MultiAZ parameter is set to true.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getZoneId() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link PrepayDBInstanceProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link PrepayDBInstanceProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<PrepayDBInstanceProps> {
        java.lang.Object commodityCode;
        java.lang.Object dbInstanceClass;
        java.lang.Object dbInstanceStorage;
        java.lang.Object engine;
        java.lang.Object engineVersion;
        java.lang.Object period;
        java.lang.Object periodType;
        java.lang.Object allocatePublicConnection;
        java.lang.Object archiveBackupKeepCount;
        java.lang.Object archiveBackupKeepPolicy;
        java.lang.Object archiveBackupRetentionPeriod;
        java.lang.Object autoPay;
        java.lang.Object autoRenew;
        java.lang.Object backUpCategory;
        java.lang.Object backupPolicyMode;
        java.lang.Object backupRetentionPeriod;
        java.lang.Object burstingEnabled;
        java.lang.Object category;
        java.lang.Object coldDataEnabled;
        java.lang.Object compressType;
        java.lang.Object connectionMode;
        java.lang.Object connectionStringPrefix;
        java.lang.Object connectionStringType;
        java.lang.Object couponCode;
        java.lang.Object dbInstanceDescription;
        java.lang.Object dbInstanceNetType;
        java.lang.Object dbInstanceStorageType;
        java.lang.Object dbIsIgnoreCase;
        java.lang.Object dbMappings;
        java.lang.Object dbParamGroupId;
        java.lang.Object dbTimeZone;
        java.lang.Object dedicatedHostGroupId;
        java.lang.Object enableBackupLog;
        java.lang.Object encryptionKey;
        java.lang.Object highSpaceUsageProtection;
        java.lang.Object instanceNetworkType;
        java.lang.Object ioAccelerationEnabled;
        java.lang.Object localLogRetentionHours;
        java.lang.Object localLogRetentionSpace;
        java.lang.Object logBackupFrequency;
        java.lang.Object logBackupLocalRetentionNumber;
        java.lang.Object logBackupRetentionPeriod;
        java.lang.Object maintainTime;
        java.lang.Object masterUsername;
        java.lang.Object masterUserPassword;
        java.lang.Object masterUserType;
        java.lang.Object multiAz;
        java.lang.Object port;
        java.lang.Object preferredBackupPeriod;
        java.lang.Object preferredBackupTime;
        java.lang.Object privateIpAddress;
        java.lang.Object quantity;
        java.lang.Object releasedKeepPolicy;
        java.lang.Object resourceGroupId;
        java.lang.Object roleArn;
        java.lang.Object securityGroupId;
        java.lang.Object serverlessConfig;
        java.lang.Object slaveZoneIds;
        java.lang.Object sqlCollectorStatus;
        java.lang.Object sslSetting;
        java.lang.Object storageAutoScale;
        java.lang.Object storageThreshold;
        java.lang.Object storageUpperBound;
        java.util.Map<java.lang.String, java.lang.Object> tags;
        java.lang.Object targetDedicatedHostIdForLog;
        java.lang.Object targetDedicatedHostIdForMaster;
        java.lang.Object targetDedicatedHostIdForSlave;
        java.lang.Object vpcId;
        java.lang.Object vSwitchId;
        java.lang.Object zoneId;

        /**
         * Sets the value of {@link PrepayDBInstanceProps#getCommodityCode}
         * @param commodityCode Property commodityCode: The CommodityCode of the order. This parameter is required.
         * @return {@code this}
         */
        public Builder commodityCode(java.lang.String commodityCode) {
            this.commodityCode = commodityCode;
            return this;
        }

        /**
         * Sets the value of {@link PrepayDBInstanceProps#getCommodityCode}
         * @param commodityCode Property commodityCode: The CommodityCode of the order. This parameter is required.
         * @return {@code this}
         */
        public Builder commodityCode(com.aliyun.ros.cdk.core.IResolvable commodityCode) {
            this.commodityCode = commodityCode;
            return this;
        }

        /**
         * Sets the value of {@link PrepayDBInstanceProps#getDbInstanceClass}
         * @param dbInstanceClass Property dbInstanceClass: Database instance type. This parameter is required.
         *                        Refer the RDS database instance type reference, such as 'rds.mys2.large', 'rds.mss1.large', 'rds.pg.s1.small' etc
         * @return {@code this}
         */
        public Builder dbInstanceClass(java.lang.String dbInstanceClass) {
            this.dbInstanceClass = dbInstanceClass;
            return this;
        }

        /**
         * Sets the value of {@link PrepayDBInstanceProps#getDbInstanceClass}
         * @param dbInstanceClass Property dbInstanceClass: Database instance type. This parameter is required.
         *                        Refer the RDS database instance type reference, such as 'rds.mys2.large', 'rds.mss1.large', 'rds.pg.s1.small' etc
         * @return {@code this}
         */
        public Builder dbInstanceClass(com.aliyun.ros.cdk.core.IResolvable dbInstanceClass) {
            this.dbInstanceClass = dbInstanceClass;
            return this;
        }

        /**
         * Sets the value of {@link PrepayDBInstanceProps#getDbInstanceStorage}
         * @param dbInstanceStorage Property dbInstanceStorage: The storage capacity of the instance. This parameter is required.
         *                          Unit: GB. The storage capacity increases in increments of 5 GB.
         *                          You can call the DescribeAvailableResource operation to query the storage capacity range that is supported for a specified instance type in a region.
         * @return {@code this}
         */
        public Builder dbInstanceStorage(java.lang.Number dbInstanceStorage) {
            this.dbInstanceStorage = dbInstanceStorage;
            return this;
        }

        /**
         * Sets the value of {@link PrepayDBInstanceProps#getDbInstanceStorage}
         * @param dbInstanceStorage Property dbInstanceStorage: The storage capacity of the instance. This parameter is required.
         *                          Unit: GB. The storage capacity increases in increments of 5 GB.
         *                          You can call the DescribeAvailableResource operation to query the storage capacity range that is supported for a specified instance type in a region.
         * @return {@code this}
         */
        public Builder dbInstanceStorage(com.aliyun.ros.cdk.core.IResolvable dbInstanceStorage) {
            this.dbInstanceStorage = dbInstanceStorage;
            return this;
        }

        /**
         * Sets the value of {@link PrepayDBInstanceProps#getEngine}
         * @param engine Property engine: Database instance engine type. This parameter is required.
         *               Support MySQL/SQLServer/PostgreSQL/PPAS/MariaDB now.
         * @return {@code this}
         */
        public Builder engine(java.lang.String engine) {
            this.engine = engine;
            return this;
        }

        /**
         * Sets the value of {@link PrepayDBInstanceProps#getEngine}
         * @param engine Property engine: Database instance engine type. This parameter is required.
         *               Support MySQL/SQLServer/PostgreSQL/PPAS/MariaDB now.
         * @return {@code this}
         */
        public Builder engine(com.aliyun.ros.cdk.core.IResolvable engine) {
            this.engine = engine;
            return this;
        }

        /**
         * Sets the value of {@link PrepayDBInstanceProps#getEngineVersion}
         * @param engineVersion Property engineVersion: Database instance version of the relative engine type. This parameter is required.
         *                      Support:
         *                      Valid values when you set the Engine parameter to MySQL: 5.5, 5.6, 5.7, and 8.0
         *                      Valid values when you set the Engine parameter to SQL Server: 2008r2, 08r2_ent_ha, 2012, 2012_ent_ha, 2012_std_ha, 2012_web, 2014_std_ha, 2016_ent_ha, 2016_std_ha, 2016_web, 2017_std_ha, 2017_ent, 2019_std_ha, and 2019_ent
         *                      Valid values when you set the Engine parameter to PostgreSQL: 10.0, 11.0, 12.0, 13.0, and 14.0
         *                      Valid values when you set the Engine parameter to MariaDB: 10.3
         * @return {@code this}
         */
        public Builder engineVersion(java.lang.String engineVersion) {
            this.engineVersion = engineVersion;
            return this;
        }

        /**
         * Sets the value of {@link PrepayDBInstanceProps#getEngineVersion}
         * @param engineVersion Property engineVersion: Database instance version of the relative engine type. This parameter is required.
         *                      Support:
         *                      Valid values when you set the Engine parameter to MySQL: 5.5, 5.6, 5.7, and 8.0
         *                      Valid values when you set the Engine parameter to SQL Server: 2008r2, 08r2_ent_ha, 2012, 2012_ent_ha, 2012_std_ha, 2012_web, 2014_std_ha, 2016_ent_ha, 2016_std_ha, 2016_web, 2017_std_ha, 2017_ent, 2019_std_ha, and 2019_ent
         *                      Valid values when you set the Engine parameter to PostgreSQL: 10.0, 11.0, 12.0, 13.0, and 14.0
         *                      Valid values when you set the Engine parameter to MariaDB: 10.3
         * @return {@code this}
         */
        public Builder engineVersion(com.aliyun.ros.cdk.core.IResolvable engineVersion) {
            this.engineVersion = engineVersion;
            return this;
        }

        /**
         * Sets the value of {@link PrepayDBInstanceProps#getPeriod}
         * @param period Property period: Prepaid time period. This parameter is required.
         *               While choose by pay by month, it could be from 1 to 9. While choose pay by year, it could be from 1 to 3.
         * @return {@code this}
         */
        public Builder period(java.lang.Number period) {
            this.period = period;
            return this;
        }

        /**
         * Sets the value of {@link PrepayDBInstanceProps#getPeriod}
         * @param period Property period: Prepaid time period. This parameter is required.
         *               While choose by pay by month, it could be from 1 to 9. While choose pay by year, it could be from 1 to 3.
         * @return {@code this}
         */
        public Builder period(com.aliyun.ros.cdk.core.IResolvable period) {
            this.period = period;
            return this;
        }

        /**
         * Sets the value of {@link PrepayDBInstanceProps#getPeriodType}
         * @param periodType Property periodType: Charge period for created instances. This parameter is required.
         * @return {@code this}
         */
        public Builder periodType(java.lang.String periodType) {
            this.periodType = periodType;
            return this;
        }

        /**
         * Sets the value of {@link PrepayDBInstanceProps#getPeriodType}
         * @param periodType Property periodType: Charge period for created instances. This parameter is required.
         * @return {@code this}
         */
        public Builder periodType(com.aliyun.ros.cdk.core.IResolvable periodType) {
            this.periodType = periodType;
            return this;
        }

        /**
         * Sets the value of {@link PrepayDBInstanceProps#getAllocatePublicConnection}
         * @param allocatePublicConnection Property allocatePublicConnection: If true, allocate public connection automate.
         * @return {@code this}
         */
        public Builder allocatePublicConnection(java.lang.Boolean allocatePublicConnection) {
            this.allocatePublicConnection = allocatePublicConnection;
            return this;
        }

        /**
         * Sets the value of {@link PrepayDBInstanceProps#getAllocatePublicConnection}
         * @param allocatePublicConnection Property allocatePublicConnection: If true, allocate public connection automate.
         * @return {@code this}
         */
        public Builder allocatePublicConnection(com.aliyun.ros.cdk.core.IResolvable allocatePublicConnection) {
            this.allocatePublicConnection = allocatePublicConnection;
            return this;
        }

        /**
         * Sets the value of {@link PrepayDBInstanceProps#getArchiveBackupKeepCount}
         * @param archiveBackupKeepCount Property archiveBackupKeepCount: The number of archived backups that can be retained.
         *                               Default value: 1. Valid values:
         *                               The value of this parameter ranges from 1 to 31 when the ArchiveBackupKeepPolicy
         *                               parameter is set to ByMonth.
         *                               The value of this parameter ranges from 1 to 7 when the ArchiveBackupKeepPolicy
         *                               parameter is set to ByWeek.
         *                               Note You do not need to specify this parameter when the ArchiveBackupKeepPolicy
         *                               parameter is set to KeepAll.
         * @return {@code this}
         */
        public Builder archiveBackupKeepCount(java.lang.Number archiveBackupKeepCount) {
            this.archiveBackupKeepCount = archiveBackupKeepCount;
            return this;
        }

        /**
         * Sets the value of {@link PrepayDBInstanceProps#getArchiveBackupKeepCount}
         * @param archiveBackupKeepCount Property archiveBackupKeepCount: The number of archived backups that can be retained.
         *                               Default value: 1. Valid values:
         *                               The value of this parameter ranges from 1 to 31 when the ArchiveBackupKeepPolicy
         *                               parameter is set to ByMonth.
         *                               The value of this parameter ranges from 1 to 7 when the ArchiveBackupKeepPolicy
         *                               parameter is set to ByWeek.
         *                               Note You do not need to specify this parameter when the ArchiveBackupKeepPolicy
         *                               parameter is set to KeepAll.
         * @return {@code this}
         */
        public Builder archiveBackupKeepCount(com.aliyun.ros.cdk.core.IResolvable archiveBackupKeepCount) {
            this.archiveBackupKeepCount = archiveBackupKeepCount;
            return this;
        }

        /**
         * Sets the value of {@link PrepayDBInstanceProps#getArchiveBackupKeepPolicy}
         * @param archiveBackupKeepPolicy Property archiveBackupKeepPolicy: The period for which to retain archived backups.
         *                                The number of archived backups that can
         *                                be retained within the specified period is determined by the ArchiveBackupKeepCount parameter.
         *                                Default value: 0. Valid values:
         *                                ByMonth
         *                                ByWeek
         *                                KeepAll
         * @return {@code this}
         */
        public Builder archiveBackupKeepPolicy(java.lang.String archiveBackupKeepPolicy) {
            this.archiveBackupKeepPolicy = archiveBackupKeepPolicy;
            return this;
        }

        /**
         * Sets the value of {@link PrepayDBInstanceProps#getArchiveBackupKeepPolicy}
         * @param archiveBackupKeepPolicy Property archiveBackupKeepPolicy: The period for which to retain archived backups.
         *                                The number of archived backups that can
         *                                be retained within the specified period is determined by the ArchiveBackupKeepCount parameter.
         *                                Default value: 0. Valid values:
         *                                ByMonth
         *                                ByWeek
         *                                KeepAll
         * @return {@code this}
         */
        public Builder archiveBackupKeepPolicy(com.aliyun.ros.cdk.core.IResolvable archiveBackupKeepPolicy) {
            this.archiveBackupKeepPolicy = archiveBackupKeepPolicy;
            return this;
        }

        /**
         * Sets the value of {@link PrepayDBInstanceProps#getArchiveBackupRetentionPeriod}
         * @param archiveBackupRetentionPeriod Property archiveBackupRetentionPeriod: The number of days for which to retain archived backups.
         *                                     The default value 0 specifies not to enable the backup archiving function. Valid values: 30 to 1095.
         * @return {@code this}
         */
        public Builder archiveBackupRetentionPeriod(java.lang.Number archiveBackupRetentionPeriod) {
            this.archiveBackupRetentionPeriod = archiveBackupRetentionPeriod;
            return this;
        }

        /**
         * Sets the value of {@link PrepayDBInstanceProps#getArchiveBackupRetentionPeriod}
         * @param archiveBackupRetentionPeriod Property archiveBackupRetentionPeriod: The number of days for which to retain archived backups.
         *                                     The default value 0 specifies not to enable the backup archiving function. Valid values: 30 to 1095.
         * @return {@code this}
         */
        public Builder archiveBackupRetentionPeriod(com.aliyun.ros.cdk.core.IResolvable archiveBackupRetentionPeriod) {
            this.archiveBackupRetentionPeriod = archiveBackupRetentionPeriod;
            return this;
        }

        /**
         * Sets the value of {@link PrepayDBInstanceProps#getAutoPay}
         * @param autoPay Property autoPay: Automatic Payment.
         *                Default is true.
         * @return {@code this}
         */
        public Builder autoPay(java.lang.Boolean autoPay) {
            this.autoPay = autoPay;
            return this;
        }

        /**
         * Sets the value of {@link PrepayDBInstanceProps#getAutoPay}
         * @param autoPay Property autoPay: Automatic Payment.
         *                Default is true.
         * @return {@code this}
         */
        public Builder autoPay(com.aliyun.ros.cdk.core.IResolvable autoPay) {
            this.autoPay = autoPay;
            return this;
        }

        /**
         * Sets the value of {@link PrepayDBInstanceProps#getAutoRenew}
         * @param autoRenew Property autoRenew: Auto renew the prepay instance.
         *                  If the period type is by year, it will renew by year, else it will renew by month.
         * @return {@code this}
         */
        public Builder autoRenew(java.lang.Boolean autoRenew) {
            this.autoRenew = autoRenew;
            return this;
        }

        /**
         * Sets the value of {@link PrepayDBInstanceProps#getAutoRenew}
         * @param autoRenew Property autoRenew: Auto renew the prepay instance.
         *                  If the period type is by year, it will renew by year, else it will renew by month.
         * @return {@code this}
         */
        public Builder autoRenew(com.aliyun.ros.cdk.core.IResolvable autoRenew) {
            this.autoRenew = autoRenew;
            return this;
        }

        /**
         * Sets the value of {@link PrepayDBInstanceProps#getBackUpCategory}
         * @param backUpCategory Property backUpCategory: Specifies whether to enable the second-level backup function.
         *                       This function allows a backup
         *                       to be completed within seconds. Valid values:
         *                       Flash: specifies to enable the second-level backup function.
         *                       Standard: specifies to disable the second-level backup function.
         * @return {@code this}
         */
        public Builder backUpCategory(java.lang.String backUpCategory) {
            this.backUpCategory = backUpCategory;
            return this;
        }

        /**
         * Sets the value of {@link PrepayDBInstanceProps#getBackUpCategory}
         * @param backUpCategory Property backUpCategory: Specifies whether to enable the second-level backup function.
         *                       This function allows a backup
         *                       to be completed within seconds. Valid values:
         *                       Flash: specifies to enable the second-level backup function.
         *                       Standard: specifies to disable the second-level backup function.
         * @return {@code this}
         */
        public Builder backUpCategory(com.aliyun.ros.cdk.core.IResolvable backUpCategory) {
            this.backUpCategory = backUpCategory;
            return this;
        }

        /**
         * Sets the value of {@link PrepayDBInstanceProps#getBackupPolicyMode}
         * @param backupPolicyMode Property backupPolicyMode: Backup type,  DataBackupPolicy: data backup  LogBackupPolicy: log backup.
         * @return {@code this}
         */
        public Builder backupPolicyMode(java.lang.String backupPolicyMode) {
            this.backupPolicyMode = backupPolicyMode;
            return this;
        }

        /**
         * Sets the value of {@link PrepayDBInstanceProps#getBackupPolicyMode}
         * @param backupPolicyMode Property backupPolicyMode: Backup type,  DataBackupPolicy: data backup  LogBackupPolicy: log backup.
         * @return {@code this}
         */
        public Builder backupPolicyMode(com.aliyun.ros.cdk.core.IResolvable backupPolicyMode) {
            this.backupPolicyMode = backupPolicyMode;
            return this;
        }

        /**
         * Sets the value of {@link PrepayDBInstanceProps#getBackupRetentionPeriod}
         * @param backupRetentionPeriod Property backupRetentionPeriod: The retention period of the data backup.
         *                              Value range: 7 to 730. The default value is the original value. Note When the BackupPolicyMode parameter is set to LogBackupPolicy, this parameter is required.
         * @return {@code this}
         */
        public Builder backupRetentionPeriod(java.lang.Number backupRetentionPeriod) {
            this.backupRetentionPeriod = backupRetentionPeriod;
            return this;
        }

        /**
         * Sets the value of {@link PrepayDBInstanceProps#getBackupRetentionPeriod}
         * @param backupRetentionPeriod Property backupRetentionPeriod: The retention period of the data backup.
         *                              Value range: 7 to 730. The default value is the original value. Note When the BackupPolicyMode parameter is set to LogBackupPolicy, this parameter is required.
         * @return {@code this}
         */
        public Builder backupRetentionPeriod(com.aliyun.ros.cdk.core.IResolvable backupRetentionPeriod) {
            this.backupRetentionPeriod = backupRetentionPeriod;
            return this;
        }

        /**
         * Sets the value of {@link PrepayDBInstanceProps#getBurstingEnabled}
         * @param burstingEnabled Property burstingEnabled: Whether to enable bursting.
         * @return {@code this}
         */
        public Builder burstingEnabled(java.lang.Boolean burstingEnabled) {
            this.burstingEnabled = burstingEnabled;
            return this;
        }

        /**
         * Sets the value of {@link PrepayDBInstanceProps#getBurstingEnabled}
         * @param burstingEnabled Property burstingEnabled: Whether to enable bursting.
         * @return {@code this}
         */
        public Builder burstingEnabled(com.aliyun.ros.cdk.core.IResolvable burstingEnabled) {
            this.burstingEnabled = burstingEnabled;
            return this;
        }

        /**
         * Sets the value of {@link PrepayDBInstanceProps#getCategory}
         * @param category Property category: The edition of the instance.
         *                 Valid values:
         *                 Basic: RDS Basic Edition
         *                 HighAvailability: RDS High-availability Edition
         *                 cluster: RDS Cluster Edition
         *                 AlwaysOn: RDS Cluster Edition for SQL Server
         *                 Finance: RDS Enterprise Edition
         *                 serverless_basic: RDS Serverless Basic Edition
         * @return {@code this}
         */
        public Builder category(java.lang.String category) {
            this.category = category;
            return this;
        }

        /**
         * Sets the value of {@link PrepayDBInstanceProps#getCategory}
         * @param category Property category: The edition of the instance.
         *                 Valid values:
         *                 Basic: RDS Basic Edition
         *                 HighAvailability: RDS High-availability Edition
         *                 cluster: RDS Cluster Edition
         *                 AlwaysOn: RDS Cluster Edition for SQL Server
         *                 Finance: RDS Enterprise Edition
         *                 serverless_basic: RDS Serverless Basic Edition
         * @return {@code this}
         */
        public Builder category(com.aliyun.ros.cdk.core.IResolvable category) {
            this.category = category;
            return this;
        }

        /**
         * Sets the value of {@link PrepayDBInstanceProps#getColdDataEnabled}
         * @param coldDataEnabled Property coldDataEnabled: Whether to enable cold data storage.
         * @return {@code this}
         */
        public Builder coldDataEnabled(java.lang.Boolean coldDataEnabled) {
            this.coldDataEnabled = coldDataEnabled;
            return this;
        }

        /**
         * Sets the value of {@link PrepayDBInstanceProps#getColdDataEnabled}
         * @param coldDataEnabled Property coldDataEnabled: Whether to enable cold data storage.
         * @return {@code this}
         */
        public Builder coldDataEnabled(com.aliyun.ros.cdk.core.IResolvable coldDataEnabled) {
            this.coldDataEnabled = coldDataEnabled;
            return this;
        }

        /**
         * Sets the value of {@link PrepayDBInstanceProps#getCompressType}
         * @param compressType Property compressType: The format used to compress backups.
         *                     Valid values:
         *                     1: The zlib tool is used to compress backups into .tar.gz files.
         *                     4: The QuickLZ tool is used to compress backups into .xb.gz files.
         *                     This compression format is supported only when the instance runs MySQL 5.6 or 5.7.
         *                     It can be used to restore individual databases and tables.
         *                     8: The QuickLZ tool is used to compress backups into .xb.gz files.
         *                     This compression format is supported only when the instance runs MySQL 8.0.
         *                     It cannot be used to restore individual databases or tables.
         * @return {@code this}
         */
        public Builder compressType(java.lang.Number compressType) {
            this.compressType = compressType;
            return this;
        }

        /**
         * Sets the value of {@link PrepayDBInstanceProps#getCompressType}
         * @param compressType Property compressType: The format used to compress backups.
         *                     Valid values:
         *                     1: The zlib tool is used to compress backups into .tar.gz files.
         *                     4: The QuickLZ tool is used to compress backups into .xb.gz files.
         *                     This compression format is supported only when the instance runs MySQL 5.6 or 5.7.
         *                     It can be used to restore individual databases and tables.
         *                     8: The QuickLZ tool is used to compress backups into .xb.gz files.
         *                     This compression format is supported only when the instance runs MySQL 8.0.
         *                     It cannot be used to restore individual databases or tables.
         * @return {@code this}
         */
        public Builder compressType(com.aliyun.ros.cdk.core.IResolvable compressType) {
            this.compressType = compressType;
            return this;
        }

        /**
         * Sets the value of {@link PrepayDBInstanceProps#getConnectionMode}
         * @param connectionMode Property connectionMode: Connection Mode for database instance,support 'Standard' and 'Safe' mode.
         *                       Default is RDS system assigns.
         * @return {@code this}
         */
        public Builder connectionMode(java.lang.String connectionMode) {
            this.connectionMode = connectionMode;
            return this;
        }

        /**
         * Sets the value of {@link PrepayDBInstanceProps#getConnectionMode}
         * @param connectionMode Property connectionMode: Connection Mode for database instance,support 'Standard' and 'Safe' mode.
         *                       Default is RDS system assigns.
         * @return {@code this}
         */
        public Builder connectionMode(com.aliyun.ros.cdk.core.IResolvable connectionMode) {
            this.connectionMode = connectionMode;
            return this;
        }

        /**
         * Sets the value of {@link PrepayDBInstanceProps#getConnectionStringPrefix}
         * @param connectionStringPrefix Property connectionStringPrefix: The prefix of the endpoint.
         *                               Only the prefix of the CurrentConnectionString parameter value can be modified.
         *                               The prefix must be 8 to 64 characters in length and can contain letters, digits, and hyphens (-).
         * @return {@code this}
         */
        public Builder connectionStringPrefix(java.lang.String connectionStringPrefix) {
            this.connectionStringPrefix = connectionStringPrefix;
            return this;
        }

        /**
         * Sets the value of {@link PrepayDBInstanceProps#getConnectionStringPrefix}
         * @param connectionStringPrefix Property connectionStringPrefix: The prefix of the endpoint.
         *                               Only the prefix of the CurrentConnectionString parameter value can be modified.
         *                               The prefix must be 8 to 64 characters in length and can contain letters, digits, and hyphens (-).
         * @return {@code this}
         */
        public Builder connectionStringPrefix(com.aliyun.ros.cdk.core.IResolvable connectionStringPrefix) {
            this.connectionStringPrefix = connectionStringPrefix;
            return this;
        }

        /**
         * Sets the value of {@link PrepayDBInstanceProps#getConnectionStringType}
         * @param connectionStringType Property connectionStringType: The endpoint type of the instance, allow values: Inner, Public.
         * @return {@code this}
         */
        public Builder connectionStringType(java.lang.String connectionStringType) {
            this.connectionStringType = connectionStringType;
            return this;
        }

        /**
         * Sets the value of {@link PrepayDBInstanceProps#getConnectionStringType}
         * @param connectionStringType Property connectionStringType: The endpoint type of the instance, allow values: Inner, Public.
         * @return {@code this}
         */
        public Builder connectionStringType(com.aliyun.ros.cdk.core.IResolvable connectionStringType) {
            this.connectionStringType = connectionStringType;
            return this;
        }

        /**
         * Sets the value of {@link PrepayDBInstanceProps#getCouponCode}
         * @param couponCode Property couponCode: The coupon code of the order.
         * @return {@code this}
         */
        public Builder couponCode(java.lang.String couponCode) {
            this.couponCode = couponCode;
            return this;
        }

        /**
         * Sets the value of {@link PrepayDBInstanceProps#getCouponCode}
         * @param couponCode Property couponCode: The coupon code of the order.
         * @return {@code this}
         */
        public Builder couponCode(com.aliyun.ros.cdk.core.IResolvable couponCode) {
            this.couponCode = couponCode;
            return this;
        }

        /**
         * Sets the value of {@link PrepayDBInstanceProps#getDbInstanceDescription}
         * @param dbInstanceDescription Property dbInstanceDescription: Description of created database instance.
         * @return {@code this}
         */
        public Builder dbInstanceDescription(java.lang.String dbInstanceDescription) {
            this.dbInstanceDescription = dbInstanceDescription;
            return this;
        }

        /**
         * Sets the value of {@link PrepayDBInstanceProps#getDbInstanceDescription}
         * @param dbInstanceDescription Property dbInstanceDescription: Description of created database instance.
         * @return {@code this}
         */
        public Builder dbInstanceDescription(com.aliyun.ros.cdk.core.IResolvable dbInstanceDescription) {
            this.dbInstanceDescription = dbInstanceDescription;
            return this;
        }

        /**
         * Sets the value of {@link PrepayDBInstanceProps#getDbInstanceNetType}
         * @param dbInstanceNetType Property dbInstanceNetType: Database instance net type, default is Intranet.Internet for public access, Intranet for private access.
         * @return {@code this}
         */
        public Builder dbInstanceNetType(java.lang.String dbInstanceNetType) {
            this.dbInstanceNetType = dbInstanceNetType;
            return this;
        }

        /**
         * Sets the value of {@link PrepayDBInstanceProps#getDbInstanceNetType}
         * @param dbInstanceNetType Property dbInstanceNetType: Database instance net type, default is Intranet.Internet for public access, Intranet for private access.
         * @return {@code this}
         */
        public Builder dbInstanceNetType(com.aliyun.ros.cdk.core.IResolvable dbInstanceNetType) {
            this.dbInstanceNetType = dbInstanceNetType;
            return this;
        }

        /**
         * Sets the value of {@link PrepayDBInstanceProps#getDbInstanceStorageType}
         * @param dbInstanceStorageType Property dbInstanceStorageType: The storage type of the instance.
         *                              Valid values:
         *                              local_ssd: specifies to use local SSDs. This is the recommended storage type.
         *                              cloud_ssd: specifies to use standard SSDs.
         *                              cloud_essd: enhanced SSD of performance level (PL)1.
         *                              cloud_essd2: enhanced SSD of PL2.
         *                              cloud_essd3: enhanced SSD of PL3.
         * @return {@code this}
         */
        public Builder dbInstanceStorageType(java.lang.String dbInstanceStorageType) {
            this.dbInstanceStorageType = dbInstanceStorageType;
            return this;
        }

        /**
         * Sets the value of {@link PrepayDBInstanceProps#getDbInstanceStorageType}
         * @param dbInstanceStorageType Property dbInstanceStorageType: The storage type of the instance.
         *                              Valid values:
         *                              local_ssd: specifies to use local SSDs. This is the recommended storage type.
         *                              cloud_ssd: specifies to use standard SSDs.
         *                              cloud_essd: enhanced SSD of performance level (PL)1.
         *                              cloud_essd2: enhanced SSD of PL2.
         *                              cloud_essd3: enhanced SSD of PL3.
         * @return {@code this}
         */
        public Builder dbInstanceStorageType(com.aliyun.ros.cdk.core.IResolvable dbInstanceStorageType) {
            this.dbInstanceStorageType = dbInstanceStorageType;
            return this;
        }

        /**
         * Sets the value of {@link PrepayDBInstanceProps#getDbIsIgnoreCase}
         * @param dbIsIgnoreCase Property dbIsIgnoreCase: Specifies whether table names are case-sensitive.
         *                       Valid values:
         *                       1: Table names are not case-sensitive. This is the default value.
         *                       0: Table names are case-sensitive.
         * @return {@code this}
         */
        public Builder dbIsIgnoreCase(java.lang.Number dbIsIgnoreCase) {
            this.dbIsIgnoreCase = dbIsIgnoreCase;
            return this;
        }

        /**
         * Sets the value of {@link PrepayDBInstanceProps#getDbIsIgnoreCase}
         * @param dbIsIgnoreCase Property dbIsIgnoreCase: Specifies whether table names are case-sensitive.
         *                       Valid values:
         *                       1: Table names are not case-sensitive. This is the default value.
         *                       0: Table names are case-sensitive.
         * @return {@code this}
         */
        public Builder dbIsIgnoreCase(com.aliyun.ros.cdk.core.IResolvable dbIsIgnoreCase) {
            this.dbIsIgnoreCase = dbIsIgnoreCase;
            return this;
        }

        /**
         * Sets the value of {@link PrepayDBInstanceProps#getDbMappings}
         * @param dbMappings Property dbMappings: Database mappings to attach to db instance.
         * @return {@code this}
         */
        public Builder dbMappings(com.aliyun.ros.cdk.core.IResolvable dbMappings) {
            this.dbMappings = dbMappings;
            return this;
        }

        /**
         * Sets the value of {@link PrepayDBInstanceProps#getDbMappings}
         * @param dbMappings Property dbMappings: Database mappings to attach to db instance.
         * @return {@code this}
         */
        public Builder dbMappings(java.util.List<? extends java.lang.Object> dbMappings) {
            this.dbMappings = dbMappings;
            return this;
        }

        /**
         * Sets the value of {@link PrepayDBInstanceProps#getDbParamGroupId}
         * @param dbParamGroupId Property dbParamGroupId: The ID of the parameter template used by the instance.
         * @return {@code this}
         */
        public Builder dbParamGroupId(java.lang.String dbParamGroupId) {
            this.dbParamGroupId = dbParamGroupId;
            return this;
        }

        /**
         * Sets the value of {@link PrepayDBInstanceProps#getDbParamGroupId}
         * @param dbParamGroupId Property dbParamGroupId: The ID of the parameter template used by the instance.
         * @return {@code this}
         */
        public Builder dbParamGroupId(com.aliyun.ros.cdk.core.IResolvable dbParamGroupId) {
            this.dbParamGroupId = dbParamGroupId;
            return this;
        }

        /**
         * Sets the value of {@link PrepayDBInstanceProps#getDbTimeZone}
         * @param dbTimeZone Property dbTimeZone: The UTC time zone of the instance.
         *                   Valid values: -12:00 to +12:00. The time zone must be an integer value such as +08:00. Values such as +08:30 are not allowed.
         * @return {@code this}
         */
        public Builder dbTimeZone(java.lang.String dbTimeZone) {
            this.dbTimeZone = dbTimeZone;
            return this;
        }

        /**
         * Sets the value of {@link PrepayDBInstanceProps#getDbTimeZone}
         * @param dbTimeZone Property dbTimeZone: The UTC time zone of the instance.
         *                   Valid values: -12:00 to +12:00. The time zone must be an integer value such as +08:00. Values such as +08:30 are not allowed.
         * @return {@code this}
         */
        public Builder dbTimeZone(com.aliyun.ros.cdk.core.IResolvable dbTimeZone) {
            this.dbTimeZone = dbTimeZone;
            return this;
        }

        /**
         * Sets the value of {@link PrepayDBInstanceProps#getDedicatedHostGroupId}
         * @param dedicatedHostGroupId Property dedicatedHostGroupId: The ID of the host group to which the instance belongs if you create an instance in a host group.
         * @return {@code this}
         */
        public Builder dedicatedHostGroupId(java.lang.String dedicatedHostGroupId) {
            this.dedicatedHostGroupId = dedicatedHostGroupId;
            return this;
        }

        /**
         * Sets the value of {@link PrepayDBInstanceProps#getDedicatedHostGroupId}
         * @param dedicatedHostGroupId Property dedicatedHostGroupId: The ID of the host group to which the instance belongs if you create an instance in a host group.
         * @return {@code this}
         */
        public Builder dedicatedHostGroupId(com.aliyun.ros.cdk.core.IResolvable dedicatedHostGroupId) {
            this.dedicatedHostGroupId = dedicatedHostGroupId;
            return this;
        }

        /**
         * Sets the value of {@link PrepayDBInstanceProps#getEnableBackupLog}
         * @param enableBackupLog Property enableBackupLog: Specifies whether to enable the log backup function.
         *                        Valid values:
         *                        True: specifies to enable the log backup function.
         *                        False: specifies to disable the log backup function.
         *                        Note You must specify this parameter when the BackupPolicyMode parameter is set to LogBackupPolicy.
         * @return {@code this}
         */
        public Builder enableBackupLog(java.lang.Boolean enableBackupLog) {
            this.enableBackupLog = enableBackupLog;
            return this;
        }

        /**
         * Sets the value of {@link PrepayDBInstanceProps#getEnableBackupLog}
         * @param enableBackupLog Property enableBackupLog: Specifies whether to enable the log backup function.
         *                        Valid values:
         *                        True: specifies to enable the log backup function.
         *                        False: specifies to disable the log backup function.
         *                        Note You must specify this parameter when the BackupPolicyMode parameter is set to LogBackupPolicy.
         * @return {@code this}
         */
        public Builder enableBackupLog(com.aliyun.ros.cdk.core.IResolvable enableBackupLog) {
            this.enableBackupLog = enableBackupLog;
            return this;
        }

        /**
         * Sets the value of {@link PrepayDBInstanceProps#getEncryptionKey}
         * @param encryptionKey Property encryptionKey: The ID of the encryption key that is used to encrypt data on SSDs in the region.
         *                      You can view the encryption key ID in the Key Management Service (KMS) console. You can also create an encryption key.
         * @return {@code this}
         */
        public Builder encryptionKey(java.lang.String encryptionKey) {
            this.encryptionKey = encryptionKey;
            return this;
        }

        /**
         * Sets the value of {@link PrepayDBInstanceProps#getEncryptionKey}
         * @param encryptionKey Property encryptionKey: The ID of the encryption key that is used to encrypt data on SSDs in the region.
         *                      You can view the encryption key ID in the Key Management Service (KMS) console. You can also create an encryption key.
         * @return {@code this}
         */
        public Builder encryptionKey(com.aliyun.ros.cdk.core.IResolvable encryptionKey) {
            this.encryptionKey = encryptionKey;
            return this;
        }

        /**
         * Sets the value of {@link PrepayDBInstanceProps#getHighSpaceUsageProtection}
         * @param highSpaceUsageProtection Property highSpaceUsageProtection: Specifies whether to forcibly delete log backup files when the space usage of the    instance exceeds 80% or the remaining space is less than 5 GB.
         *                                 Valid values:
         *                                 Enable and Disable. You can retain the default value. Note You must specify
         *                                 this parameter when the BackupPolicyMode parameter is set to LogBackupPolicy.
         * @return {@code this}
         */
        public Builder highSpaceUsageProtection(java.lang.String highSpaceUsageProtection) {
            this.highSpaceUsageProtection = highSpaceUsageProtection;
            return this;
        }

        /**
         * Sets the value of {@link PrepayDBInstanceProps#getHighSpaceUsageProtection}
         * @param highSpaceUsageProtection Property highSpaceUsageProtection: Specifies whether to forcibly delete log backup files when the space usage of the    instance exceeds 80% or the remaining space is less than 5 GB.
         *                                 Valid values:
         *                                 Enable and Disable. You can retain the default value. Note You must specify
         *                                 this parameter when the BackupPolicyMode parameter is set to LogBackupPolicy.
         * @return {@code this}
         */
        public Builder highSpaceUsageProtection(com.aliyun.ros.cdk.core.IResolvable highSpaceUsageProtection) {
            this.highSpaceUsageProtection = highSpaceUsageProtection;
            return this;
        }

        /**
         * Sets the value of {@link PrepayDBInstanceProps#getInstanceNetworkType}
         * @param instanceNetworkType Property instanceNetworkType: Instance network type, VPC or Classic.
         * @return {@code this}
         */
        public Builder instanceNetworkType(java.lang.String instanceNetworkType) {
            this.instanceNetworkType = instanceNetworkType;
            return this;
        }

        /**
         * Sets the value of {@link PrepayDBInstanceProps#getInstanceNetworkType}
         * @param instanceNetworkType Property instanceNetworkType: Instance network type, VPC or Classic.
         * @return {@code this}
         */
        public Builder instanceNetworkType(com.aliyun.ros.cdk.core.IResolvable instanceNetworkType) {
            this.instanceNetworkType = instanceNetworkType;
            return this;
        }

        /**
         * Sets the value of {@link PrepayDBInstanceProps#getIoAccelerationEnabled}
         * @param ioAccelerationEnabled Property ioAccelerationEnabled: Whether to enable IO Acceleration, 1 for enable 0 for disable.
         * @return {@code this}
         */
        public Builder ioAccelerationEnabled(java.lang.String ioAccelerationEnabled) {
            this.ioAccelerationEnabled = ioAccelerationEnabled;
            return this;
        }

        /**
         * Sets the value of {@link PrepayDBInstanceProps#getIoAccelerationEnabled}
         * @param ioAccelerationEnabled Property ioAccelerationEnabled: Whether to enable IO Acceleration, 1 for enable 0 for disable.
         * @return {@code this}
         */
        public Builder ioAccelerationEnabled(com.aliyun.ros.cdk.core.IResolvable ioAccelerationEnabled) {
            this.ioAccelerationEnabled = ioAccelerationEnabled;
            return this;
        }

        /**
         * Sets the value of {@link PrepayDBInstanceProps#getLocalLogRetentionHours}
         * @param localLogRetentionHours Property localLogRetentionHours: The number of hours for which to retain log backup files on the instance.
         *                               Valid values: 0 to 168. The value 0 specifies not to retain log backup files on the instance.
         *                               You can retain the default value. Note You must specify this parameter when the BackupPolicyMode
         *                               parameter is set to LogBackupPolicy.
         * @return {@code this}
         */
        public Builder localLogRetentionHours(java.lang.Number localLogRetentionHours) {
            this.localLogRetentionHours = localLogRetentionHours;
            return this;
        }

        /**
         * Sets the value of {@link PrepayDBInstanceProps#getLocalLogRetentionHours}
         * @param localLogRetentionHours Property localLogRetentionHours: The number of hours for which to retain log backup files on the instance.
         *                               Valid values: 0 to 168. The value 0 specifies not to retain log backup files on the instance.
         *                               You can retain the default value. Note You must specify this parameter when the BackupPolicyMode
         *                               parameter is set to LogBackupPolicy.
         * @return {@code this}
         */
        public Builder localLogRetentionHours(com.aliyun.ros.cdk.core.IResolvable localLogRetentionHours) {
            this.localLogRetentionHours = localLogRetentionHours;
            return this;
        }

        /**
         * Sets the value of {@link PrepayDBInstanceProps#getLocalLogRetentionSpace}
         * @param localLogRetentionSpace Property localLogRetentionSpace: The maximum percentage of space that is allowed to store log backup files on the instance.
         *                               If the space usage for log backup files exceeds this percentage, the system deletes earlier
         *                               log backup files until the space usage falls below this percentage. Valid values:0 to 50.
         *                               You can retain the default value. Note You must specify this parameter when the
         *                               BackupPolicyMode parameter is set to LogBackupPolicy.
         * @return {@code this}
         */
        public Builder localLogRetentionSpace(java.lang.Number localLogRetentionSpace) {
            this.localLogRetentionSpace = localLogRetentionSpace;
            return this;
        }

        /**
         * Sets the value of {@link PrepayDBInstanceProps#getLocalLogRetentionSpace}
         * @param localLogRetentionSpace Property localLogRetentionSpace: The maximum percentage of space that is allowed to store log backup files on the instance.
         *                               If the space usage for log backup files exceeds this percentage, the system deletes earlier
         *                               log backup files until the space usage falls below this percentage. Valid values:0 to 50.
         *                               You can retain the default value. Note You must specify this parameter when the
         *                               BackupPolicyMode parameter is set to LogBackupPolicy.
         * @return {@code this}
         */
        public Builder localLogRetentionSpace(com.aliyun.ros.cdk.core.IResolvable localLogRetentionSpace) {
            this.localLogRetentionSpace = localLogRetentionSpace;
            return this;
        }

        /**
         * Sets the value of {@link PrepayDBInstanceProps#getLogBackupFrequency}
         * @param logBackupFrequency Property logBackupFrequency: The frequency at which to back up logs.
         *                           Valid values:
         *                           The value LogInterval specifies to back up logs every 30 minutes.
         *                           The default value of this parameter is the same as the data backup frequency.
         *                           Note The value LogInterval is supported only when the instance runs SQL Server.
         * @return {@code this}
         */
        public Builder logBackupFrequency(java.lang.String logBackupFrequency) {
            this.logBackupFrequency = logBackupFrequency;
            return this;
        }

        /**
         * Sets the value of {@link PrepayDBInstanceProps#getLogBackupFrequency}
         * @param logBackupFrequency Property logBackupFrequency: The frequency at which to back up logs.
         *                           Valid values:
         *                           The value LogInterval specifies to back up logs every 30 minutes.
         *                           The default value of this parameter is the same as the data backup frequency.
         *                           Note The value LogInterval is supported only when the instance runs SQL Server.
         * @return {@code this}
         */
        public Builder logBackupFrequency(com.aliyun.ros.cdk.core.IResolvable logBackupFrequency) {
            this.logBackupFrequency = logBackupFrequency;
            return this;
        }

        /**
         * Sets the value of {@link PrepayDBInstanceProps#getLogBackupLocalRetentionNumber}
         * @param logBackupLocalRetentionNumber Property logBackupLocalRetentionNumber: The number of log backup files that can be retained on the instance.
         *                                      Default value: 60. Valid values: 6 to 100.
         * @return {@code this}
         */
        public Builder logBackupLocalRetentionNumber(java.lang.Number logBackupLocalRetentionNumber) {
            this.logBackupLocalRetentionNumber = logBackupLocalRetentionNumber;
            return this;
        }

        /**
         * Sets the value of {@link PrepayDBInstanceProps#getLogBackupLocalRetentionNumber}
         * @param logBackupLocalRetentionNumber Property logBackupLocalRetentionNumber: The number of log backup files that can be retained on the instance.
         *                                      Default value: 60. Valid values: 6 to 100.
         * @return {@code this}
         */
        public Builder logBackupLocalRetentionNumber(com.aliyun.ros.cdk.core.IResolvable logBackupLocalRetentionNumber) {
            this.logBackupLocalRetentionNumber = logBackupLocalRetentionNumber;
            return this;
        }

        /**
         * Sets the value of {@link PrepayDBInstanceProps#getLogBackupRetentionPeriod}
         * @param logBackupRetentionPeriod Property logBackupRetentionPeriod: The number of days for which to retain log backup files.
         *                                 Valid values: 7 to 730. The log backup
         *                                 retention period cannot be longer than the data backup retention period.Note If you enable the log
         *                                 backup function, you can specify the log backup retention period. This applies only when the
         *                                 instance runs MySQL, PostgreSQL, or PPAS.
         * @return {@code this}
         */
        public Builder logBackupRetentionPeriod(java.lang.Number logBackupRetentionPeriod) {
            this.logBackupRetentionPeriod = logBackupRetentionPeriod;
            return this;
        }

        /**
         * Sets the value of {@link PrepayDBInstanceProps#getLogBackupRetentionPeriod}
         * @param logBackupRetentionPeriod Property logBackupRetentionPeriod: The number of days for which to retain log backup files.
         *                                 Valid values: 7 to 730. The log backup
         *                                 retention period cannot be longer than the data backup retention period.Note If you enable the log
         *                                 backup function, you can specify the log backup retention period. This applies only when the
         *                                 instance runs MySQL, PostgreSQL, or PPAS.
         * @return {@code this}
         */
        public Builder logBackupRetentionPeriod(com.aliyun.ros.cdk.core.IResolvable logBackupRetentionPeriod) {
            this.logBackupRetentionPeriod = logBackupRetentionPeriod;
            return this;
        }

        /**
         * Sets the value of {@link PrepayDBInstanceProps#getMaintainTime}
         * @param maintainTime Property maintainTime: The period during which the maintenance performs.
         *                     The format is HH:mmZ-HH:mmZ.
         * @return {@code this}
         */
        public Builder maintainTime(java.lang.String maintainTime) {
            this.maintainTime = maintainTime;
            return this;
        }

        /**
         * Sets the value of {@link PrepayDBInstanceProps#getMaintainTime}
         * @param maintainTime Property maintainTime: The period during which the maintenance performs.
         *                     The format is HH:mmZ-HH:mmZ.
         * @return {@code this}
         */
        public Builder maintainTime(com.aliyun.ros.cdk.core.IResolvable maintainTime) {
            this.maintainTime = maintainTime;
            return this;
        }

        /**
         * Sets the value of {@link PrepayDBInstanceProps#getMasterUsername}
         * @param masterUsername Property masterUsername: The master user name for the database instance.
         * @return {@code this}
         */
        public Builder masterUsername(java.lang.String masterUsername) {
            this.masterUsername = masterUsername;
            return this;
        }

        /**
         * Sets the value of {@link PrepayDBInstanceProps#getMasterUsername}
         * @param masterUsername Property masterUsername: The master user name for the database instance.
         * @return {@code this}
         */
        public Builder masterUsername(com.aliyun.ros.cdk.core.IResolvable masterUsername) {
            this.masterUsername = masterUsername;
            return this;
        }

        /**
         * Sets the value of {@link PrepayDBInstanceProps#getMasterUserPassword}
         * @param masterUserPassword Property masterUserPassword: The master password for the database instance.
         * @return {@code this}
         */
        public Builder masterUserPassword(java.lang.String masterUserPassword) {
            this.masterUserPassword = masterUserPassword;
            return this;
        }

        /**
         * Sets the value of {@link PrepayDBInstanceProps#getMasterUserPassword}
         * @param masterUserPassword Property masterUserPassword: The master password for the database instance.
         * @return {@code this}
         */
        public Builder masterUserPassword(com.aliyun.ros.cdk.core.IResolvable masterUserPassword) {
            this.masterUserPassword = masterUserPassword;
            return this;
        }

        /**
         * Sets the value of {@link PrepayDBInstanceProps#getMasterUserType}
         * @param masterUserType Property masterUserType: Privilege type of account.
         *                       Normal: Common privilege.
         *                       Super: High privilege.
         *                       Sysadmin: Super privileges (SA) (only supported by SQL Server)
         *                       The default value is Normal.
         * @return {@code this}
         */
        public Builder masterUserType(java.lang.String masterUserType) {
            this.masterUserType = masterUserType;
            return this;
        }

        /**
         * Sets the value of {@link PrepayDBInstanceProps#getMasterUserType}
         * @param masterUserType Property masterUserType: Privilege type of account.
         *                       Normal: Common privilege.
         *                       Super: High privilege.
         *                       Sysadmin: Super privileges (SA) (only supported by SQL Server)
         *                       The default value is Normal.
         * @return {@code this}
         */
        public Builder masterUserType(com.aliyun.ros.cdk.core.IResolvable masterUserType) {
            this.masterUserType = masterUserType;
            return this;
        }

        /**
         * Sets the value of {@link PrepayDBInstanceProps#getMultiAz}
         * @param multiAz Property multiAz: Specifies if the database instance is a multiple Availability Zone deployment.
         * @return {@code this}
         */
        public Builder multiAz(java.lang.Boolean multiAz) {
            this.multiAz = multiAz;
            return this;
        }

        /**
         * Sets the value of {@link PrepayDBInstanceProps#getMultiAz}
         * @param multiAz Property multiAz: Specifies if the database instance is a multiple Availability Zone deployment.
         * @return {@code this}
         */
        public Builder multiAz(com.aliyun.ros.cdk.core.IResolvable multiAz) {
            this.multiAz = multiAz;
            return this;
        }

        /**
         * Sets the value of {@link PrepayDBInstanceProps#getPort}
         * @param port Property port: The port of the database service.
         * @return {@code this}
         */
        public Builder port(java.lang.Number port) {
            this.port = port;
            return this;
        }

        /**
         * Sets the value of {@link PrepayDBInstanceProps#getPort}
         * @param port Property port: The port of the database service.
         * @return {@code this}
         */
        public Builder port(com.aliyun.ros.cdk.core.IResolvable port) {
            this.port = port;
            return this;
        }

        /**
         * Sets the value of {@link PrepayDBInstanceProps#getPreferredBackupPeriod}
         * @param preferredBackupPeriod Property preferredBackupPeriod: The backup period.
         *                              Separate multiple values with commas (,). The default value is the original value. Valid values:Monday Tuesday Wednesday Thursday Friday Saturday Sunday Note When the BackupPolicyMode parameter is set to DataBackupPolicy, this parameter is required.
         * @return {@code this}
         */
        public Builder preferredBackupPeriod(com.aliyun.ros.cdk.core.IResolvable preferredBackupPeriod) {
            this.preferredBackupPeriod = preferredBackupPeriod;
            return this;
        }

        /**
         * Sets the value of {@link PrepayDBInstanceProps#getPreferredBackupPeriod}
         * @param preferredBackupPeriod Property preferredBackupPeriod: The backup period.
         *                              Separate multiple values with commas (,). The default value is the original value. Valid values:Monday Tuesday Wednesday Thursday Friday Saturday Sunday Note When the BackupPolicyMode parameter is set to DataBackupPolicy, this parameter is required.
         * @return {@code this}
         */
        public Builder preferredBackupPeriod(java.util.List<? extends java.lang.Object> preferredBackupPeriod) {
            this.preferredBackupPeriod = preferredBackupPeriod;
            return this;
        }

        /**
         * Sets the value of {@link PrepayDBInstanceProps#getPreferredBackupTime}
         * @param preferredBackupTime Property preferredBackupTime: The time when the backup task is performed.
         *                            Format: yyyy-MM-ddZ-HH:mm:ssZ.Note When the BackupPolicyMode parameter is set to DataBackupPolicy, this parameter is required.
         * @return {@code this}
         */
        public Builder preferredBackupTime(java.lang.String preferredBackupTime) {
            this.preferredBackupTime = preferredBackupTime;
            return this;
        }

        /**
         * Sets the value of {@link PrepayDBInstanceProps#getPreferredBackupTime}
         * @param preferredBackupTime Property preferredBackupTime: The time when the backup task is performed.
         *                            Format: yyyy-MM-ddZ-HH:mm:ssZ.Note When the BackupPolicyMode parameter is set to DataBackupPolicy, this parameter is required.
         * @return {@code this}
         */
        public Builder preferredBackupTime(com.aliyun.ros.cdk.core.IResolvable preferredBackupTime) {
            this.preferredBackupTime = preferredBackupTime;
            return this;
        }

        /**
         * Sets the value of {@link PrepayDBInstanceProps#getPrivateIpAddress}
         * @param privateIpAddress Property privateIpAddress: The private ip for created instance.
         * @return {@code this}
         */
        public Builder privateIpAddress(java.lang.String privateIpAddress) {
            this.privateIpAddress = privateIpAddress;
            return this;
        }

        /**
         * Sets the value of {@link PrepayDBInstanceProps#getPrivateIpAddress}
         * @param privateIpAddress Property privateIpAddress: The private ip for created instance.
         * @return {@code this}
         */
        public Builder privateIpAddress(com.aliyun.ros.cdk.core.IResolvable privateIpAddress) {
            this.privateIpAddress = privateIpAddress;
            return this;
        }

        /**
         * Sets the value of {@link PrepayDBInstanceProps#getQuantity}
         * @param quantity Property quantity: The number of instance to be created, default is 1, max number is 99.
         * @return {@code this}
         */
        public Builder quantity(java.lang.Number quantity) {
            this.quantity = quantity;
            return this;
        }

        /**
         * Sets the value of {@link PrepayDBInstanceProps#getQuantity}
         * @param quantity Property quantity: The number of instance to be created, default is 1, max number is 99.
         * @return {@code this}
         */
        public Builder quantity(com.aliyun.ros.cdk.core.IResolvable quantity) {
            this.quantity = quantity;
            return this;
        }

        /**
         * Sets the value of {@link PrepayDBInstanceProps#getReleasedKeepPolicy}
         * @param releasedKeepPolicy Property releasedKeepPolicy: The policy used to retain archived backups if the instance is released.
         *                           Default value: None.
         *                           Valid values:
         *                           Lastest: Only the last archived backup is retained.
         *                           All: All of the archived backups are retained.
         * @return {@code this}
         */
        public Builder releasedKeepPolicy(java.lang.String releasedKeepPolicy) {
            this.releasedKeepPolicy = releasedKeepPolicy;
            return this;
        }

        /**
         * Sets the value of {@link PrepayDBInstanceProps#getReleasedKeepPolicy}
         * @param releasedKeepPolicy Property releasedKeepPolicy: The policy used to retain archived backups if the instance is released.
         *                           Default value: None.
         *                           Valid values:
         *                           Lastest: Only the last archived backup is retained.
         *                           All: All of the archived backups are retained.
         * @return {@code this}
         */
        public Builder releasedKeepPolicy(com.aliyun.ros.cdk.core.IResolvable releasedKeepPolicy) {
            this.releasedKeepPolicy = releasedKeepPolicy;
            return this;
        }

        /**
         * Sets the value of {@link PrepayDBInstanceProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: Resource group id.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link PrepayDBInstanceProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: Resource group id.
         * @return {@code this}
         */
        public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link PrepayDBInstanceProps#getRoleArn}
         * @param roleArn Property roleArn: The Alibaba Cloud Resource Name (ARN) provided to the service account of the instance by your Alibaba Cloud account to connect to KMS.
         *                You can copy the ARN from the RAM console.
         * @return {@code this}
         */
        public Builder roleArn(java.lang.String roleArn) {
            this.roleArn = roleArn;
            return this;
        }

        /**
         * Sets the value of {@link PrepayDBInstanceProps#getRoleArn}
         * @param roleArn Property roleArn: The Alibaba Cloud Resource Name (ARN) provided to the service account of the instance by your Alibaba Cloud account to connect to KMS.
         *                You can copy the ARN from the RAM console.
         * @return {@code this}
         */
        public Builder roleArn(com.aliyun.ros.cdk.core.IResolvable roleArn) {
            this.roleArn = roleArn;
            return this;
        }

        /**
         * Sets the value of {@link PrepayDBInstanceProps#getSecurityGroupId}
         * @param securityGroupId Property securityGroupId: The ID of the ECS security groups.
         *                        Each RDS instance can be associated with up to three ECS security groups.
         *                        You must separate them with commas (,).
         *                        To delete an ECS Security group, leave this parameter empty.
         * @return {@code this}
         */
        public Builder securityGroupId(java.lang.String securityGroupId) {
            this.securityGroupId = securityGroupId;
            return this;
        }

        /**
         * Sets the value of {@link PrepayDBInstanceProps#getSecurityGroupId}
         * @param securityGroupId Property securityGroupId: The ID of the ECS security groups.
         *                        Each RDS instance can be associated with up to three ECS security groups.
         *                        You must separate them with commas (,).
         *                        To delete an ECS Security group, leave this parameter empty.
         * @return {@code this}
         */
        public Builder securityGroupId(com.aliyun.ros.cdk.core.IResolvable securityGroupId) {
            this.securityGroupId = securityGroupId;
            return this;
        }

        /**
         * Sets the value of {@link PrepayDBInstanceProps#getServerlessConfig}
         * @param serverlessConfig Property serverlessConfig: The config of RDS serverless instance.
         *                         This is required when creating serverless instance.
         * @return {@code this}
         */
        public Builder serverlessConfig(com.aliyun.ros.cdk.core.IResolvable serverlessConfig) {
            this.serverlessConfig = serverlessConfig;
            return this;
        }

        /**
         * Sets the value of {@link PrepayDBInstanceProps#getServerlessConfig}
         * @param serverlessConfig Property serverlessConfig: The config of RDS serverless instance.
         *                         This is required when creating serverless instance.
         * @return {@code this}
         */
        public Builder serverlessConfig(com.aliyun.ros.cdk.rds.RosPrepayDBInstance.ServerlessConfigProperty serverlessConfig) {
            this.serverlessConfig = serverlessConfig;
            return this;
        }

        /**
         * Sets the value of {@link PrepayDBInstanceProps#getSlaveZoneIds}
         * @param slaveZoneIds Property slaveZoneIds: List of slave zone ids can specify slave zone ids when creating the high-availability or enterprise edition instance.
         *                     Meanwhile, VSwitchId needs to pass in the corresponding vswitch id to the slave zone by order. For example, ZoneId = "zone-a" and SlaveZoneIds = ["zone-c", "zone-b"], then the VSwitchId must be "vsw-zone-a,vsw-zone-c,vsw-zone-b".
         * @return {@code this}
         */
        public Builder slaveZoneIds(com.aliyun.ros.cdk.core.IResolvable slaveZoneIds) {
            this.slaveZoneIds = slaveZoneIds;
            return this;
        }

        /**
         * Sets the value of {@link PrepayDBInstanceProps#getSlaveZoneIds}
         * @param slaveZoneIds Property slaveZoneIds: List of slave zone ids can specify slave zone ids when creating the high-availability or enterprise edition instance.
         *                     Meanwhile, VSwitchId needs to pass in the corresponding vswitch id to the slave zone by order. For example, ZoneId = "zone-a" and SlaveZoneIds = ["zone-c", "zone-b"], then the VSwitchId must be "vsw-zone-a,vsw-zone-c,vsw-zone-b".
         * @return {@code this}
         */
        public Builder slaveZoneIds(java.util.List<? extends java.lang.Object> slaveZoneIds) {
            this.slaveZoneIds = slaveZoneIds;
            return this;
        }

        /**
         * Sets the value of {@link PrepayDBInstanceProps#getSqlCollectorStatus}
         * @param sqlCollectorStatus Property sqlCollectorStatus: Specifies whether to enable or disable the SQL Explorer (SQL audit) feature.
         *                           Valid values:Enable | Disabled.
         * @return {@code this}
         */
        public Builder sqlCollectorStatus(java.lang.String sqlCollectorStatus) {
            this.sqlCollectorStatus = sqlCollectorStatus;
            return this;
        }

        /**
         * Sets the value of {@link PrepayDBInstanceProps#getSqlCollectorStatus}
         * @param sqlCollectorStatus Property sqlCollectorStatus: Specifies whether to enable or disable the SQL Explorer (SQL audit) feature.
         *                           Valid values:Enable | Disabled.
         * @return {@code this}
         */
        public Builder sqlCollectorStatus(com.aliyun.ros.cdk.core.IResolvable sqlCollectorStatus) {
            this.sqlCollectorStatus = sqlCollectorStatus;
            return this;
        }

        /**
         * Sets the value of {@link PrepayDBInstanceProps#getSslSetting}
         * @param sslSetting Property sslSetting: Secure Sockets Layer (SSL) link setting of the instance.
         *                   Valid values:
         *                   Disabled: Disable SSL
         *                   EnabledForPublicConnection: Public connection address will be protected by the SSL certificate. It requires AllocatePublicConnection is true.
         *                   EnabledForInnerConnection: Private connection address will be protected by the SSL certificate.
         *                   Default value is Disabled.
         * @return {@code this}
         */
        public Builder sslSetting(java.lang.String sslSetting) {
            this.sslSetting = sslSetting;
            return this;
        }

        /**
         * Sets the value of {@link PrepayDBInstanceProps#getSslSetting}
         * @param sslSetting Property sslSetting: Secure Sockets Layer (SSL) link setting of the instance.
         *                   Valid values:
         *                   Disabled: Disable SSL
         *                   EnabledForPublicConnection: Public connection address will be protected by the SSL certificate. It requires AllocatePublicConnection is true.
         *                   EnabledForInnerConnection: Private connection address will be protected by the SSL certificate.
         *                   Default value is Disabled.
         * @return {@code this}
         */
        public Builder sslSetting(com.aliyun.ros.cdk.core.IResolvable sslSetting) {
            this.sslSetting = sslSetting;
            return this;
        }

        /**
         * Sets the value of {@link PrepayDBInstanceProps#getStorageAutoScale}
         * @param storageAutoScale Property storageAutoScale: Storage space automatic expansion switch, only supported by MySQL and PostgreSQL.
         * @return {@code this}
         */
        public Builder storageAutoScale(java.lang.String storageAutoScale) {
            this.storageAutoScale = storageAutoScale;
            return this;
        }

        /**
         * Sets the value of {@link PrepayDBInstanceProps#getStorageAutoScale}
         * @param storageAutoScale Property storageAutoScale: Storage space automatic expansion switch, only supported by MySQL and PostgreSQL.
         * @return {@code this}
         */
        public Builder storageAutoScale(com.aliyun.ros.cdk.core.IResolvable storageAutoScale) {
            this.storageAutoScale = storageAutoScale;
            return this;
        }

        /**
         * Sets the value of {@link PrepayDBInstanceProps#getStorageThreshold}
         * @param storageThreshold Property storageThreshold: Storage space automatic expansion trigger threshold (percentage).
         * @return {@code this}
         */
        public Builder storageThreshold(java.lang.Number storageThreshold) {
            this.storageThreshold = storageThreshold;
            return this;
        }

        /**
         * Sets the value of {@link PrepayDBInstanceProps#getStorageThreshold}
         * @param storageThreshold Property storageThreshold: Storage space automatic expansion trigger threshold (percentage).
         * @return {@code this}
         */
        public Builder storageThreshold(com.aliyun.ros.cdk.core.IResolvable storageThreshold) {
            this.storageThreshold = storageThreshold;
            return this;
        }

        /**
         * Sets the value of {@link PrepayDBInstanceProps#getStorageUpperBound}
         * @param storageUpperBound Property storageUpperBound: The total storage space upper limit for automatic storage space expansion, that is, automatic expansion will not cause the total storage space of the instance to exceed this value.
         * @return {@code this}
         */
        public Builder storageUpperBound(java.lang.Number storageUpperBound) {
            this.storageUpperBound = storageUpperBound;
            return this;
        }

        /**
         * Sets the value of {@link PrepayDBInstanceProps#getStorageUpperBound}
         * @param storageUpperBound Property storageUpperBound: The total storage space upper limit for automatic storage space expansion, that is, automatic expansion will not cause the total storage space of the instance to exceed this value.
         * @return {@code this}
         */
        public Builder storageUpperBound(com.aliyun.ros.cdk.core.IResolvable storageUpperBound) {
            this.storageUpperBound = storageUpperBound;
            return this;
        }

        /**
         * Sets the value of {@link PrepayDBInstanceProps#getTags}
         * @param tags Property tags: The tags of an instance.
         *             You should input the information of the tag with the format of the Key-Value, such as {"key1":"value1","key2":"value2", ... "key5":"value5"}.
         *             At most 20 tags can be specified.
         *             Key
         *             It can be up to 64 characters in length.
         *             Cannot begin with aliyun.
         *             Cannot begin with http:// or https://.
         *             Cannot be a null string.
         *             Value
         *             It can be up to 128 characters in length.
         *             Cannot begin with aliyun.
         *             Cannot begin with http:// or https://.
         *             Can be a null string.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder tags(java.util.Map<java.lang.String, ? extends java.lang.Object> tags) {
            this.tags = (java.util.Map<java.lang.String, java.lang.Object>)tags;
            return this;
        }

        /**
         * Sets the value of {@link PrepayDBInstanceProps#getTargetDedicatedHostIdForLog}
         * @param targetDedicatedHostIdForLog Property targetDedicatedHostIdForLog: The ID of the host to which the instance belongs if you create a log instance in a host group.
         * @return {@code this}
         */
        public Builder targetDedicatedHostIdForLog(java.lang.String targetDedicatedHostIdForLog) {
            this.targetDedicatedHostIdForLog = targetDedicatedHostIdForLog;
            return this;
        }

        /**
         * Sets the value of {@link PrepayDBInstanceProps#getTargetDedicatedHostIdForLog}
         * @param targetDedicatedHostIdForLog Property targetDedicatedHostIdForLog: The ID of the host to which the instance belongs if you create a log instance in a host group.
         * @return {@code this}
         */
        public Builder targetDedicatedHostIdForLog(com.aliyun.ros.cdk.core.IResolvable targetDedicatedHostIdForLog) {
            this.targetDedicatedHostIdForLog = targetDedicatedHostIdForLog;
            return this;
        }

        /**
         * Sets the value of {@link PrepayDBInstanceProps#getTargetDedicatedHostIdForMaster}
         * @param targetDedicatedHostIdForMaster Property targetDedicatedHostIdForMaster: The ID of the host to which the instance belongs if you create a primary instance in a host group.
         * @return {@code this}
         */
        public Builder targetDedicatedHostIdForMaster(java.lang.String targetDedicatedHostIdForMaster) {
            this.targetDedicatedHostIdForMaster = targetDedicatedHostIdForMaster;
            return this;
        }

        /**
         * Sets the value of {@link PrepayDBInstanceProps#getTargetDedicatedHostIdForMaster}
         * @param targetDedicatedHostIdForMaster Property targetDedicatedHostIdForMaster: The ID of the host to which the instance belongs if you create a primary instance in a host group.
         * @return {@code this}
         */
        public Builder targetDedicatedHostIdForMaster(com.aliyun.ros.cdk.core.IResolvable targetDedicatedHostIdForMaster) {
            this.targetDedicatedHostIdForMaster = targetDedicatedHostIdForMaster;
            return this;
        }

        /**
         * Sets the value of {@link PrepayDBInstanceProps#getTargetDedicatedHostIdForSlave}
         * @param targetDedicatedHostIdForSlave Property targetDedicatedHostIdForSlave: The ID of the host to which the instance belongs if you create a secondary instance in a host group.
         * @return {@code this}
         */
        public Builder targetDedicatedHostIdForSlave(java.lang.String targetDedicatedHostIdForSlave) {
            this.targetDedicatedHostIdForSlave = targetDedicatedHostIdForSlave;
            return this;
        }

        /**
         * Sets the value of {@link PrepayDBInstanceProps#getTargetDedicatedHostIdForSlave}
         * @param targetDedicatedHostIdForSlave Property targetDedicatedHostIdForSlave: The ID of the host to which the instance belongs if you create a secondary instance in a host group.
         * @return {@code this}
         */
        public Builder targetDedicatedHostIdForSlave(com.aliyun.ros.cdk.core.IResolvable targetDedicatedHostIdForSlave) {
            this.targetDedicatedHostIdForSlave = targetDedicatedHostIdForSlave;
            return this;
        }

        /**
         * Sets the value of {@link PrepayDBInstanceProps#getVpcId}
         * @param vpcId Property vpcId: The VPC id of created database instance.
         *              For VPC network, the property is required.
         * @return {@code this}
         */
        public Builder vpcId(java.lang.String vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link PrepayDBInstanceProps#getVpcId}
         * @param vpcId Property vpcId: The VPC id of created database instance.
         *              For VPC network, the property is required.
         * @return {@code this}
         */
        public Builder vpcId(com.aliyun.ros.cdk.core.IResolvable vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link PrepayDBInstanceProps#getVSwitchId}
         * @param vSwitchId Property vSwitchId: The vSwitch id of created instance.
         *                  For VPC network, the property is required.
         * @return {@code this}
         */
        public Builder vSwitchId(java.lang.String vSwitchId) {
            this.vSwitchId = vSwitchId;
            return this;
        }

        /**
         * Sets the value of {@link PrepayDBInstanceProps#getVSwitchId}
         * @param vSwitchId Property vSwitchId: The vSwitch id of created instance.
         *                  For VPC network, the property is required.
         * @return {@code this}
         */
        public Builder vSwitchId(com.aliyun.ros.cdk.core.IResolvable vSwitchId) {
            this.vSwitchId = vSwitchId;
            return this;
        }

        /**
         * Sets the value of {@link PrepayDBInstanceProps#getZoneId}
         * @param zoneId Property zoneId: selected zone to create database instance.
         *               You cannot set the ZoneId parameter if the MultiAZ parameter is set to true.
         * @return {@code this}
         */
        public Builder zoneId(java.lang.String zoneId) {
            this.zoneId = zoneId;
            return this;
        }

        /**
         * Sets the value of {@link PrepayDBInstanceProps#getZoneId}
         * @param zoneId Property zoneId: selected zone to create database instance.
         *               You cannot set the ZoneId parameter if the MultiAZ parameter is set to true.
         * @return {@code this}
         */
        public Builder zoneId(com.aliyun.ros.cdk.core.IResolvable zoneId) {
            this.zoneId = zoneId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link PrepayDBInstanceProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public PrepayDBInstanceProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link PrepayDBInstanceProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements PrepayDBInstanceProps {
        private final java.lang.Object commodityCode;
        private final java.lang.Object dbInstanceClass;
        private final java.lang.Object dbInstanceStorage;
        private final java.lang.Object engine;
        private final java.lang.Object engineVersion;
        private final java.lang.Object period;
        private final java.lang.Object periodType;
        private final java.lang.Object allocatePublicConnection;
        private final java.lang.Object archiveBackupKeepCount;
        private final java.lang.Object archiveBackupKeepPolicy;
        private final java.lang.Object archiveBackupRetentionPeriod;
        private final java.lang.Object autoPay;
        private final java.lang.Object autoRenew;
        private final java.lang.Object backUpCategory;
        private final java.lang.Object backupPolicyMode;
        private final java.lang.Object backupRetentionPeriod;
        private final java.lang.Object burstingEnabled;
        private final java.lang.Object category;
        private final java.lang.Object coldDataEnabled;
        private final java.lang.Object compressType;
        private final java.lang.Object connectionMode;
        private final java.lang.Object connectionStringPrefix;
        private final java.lang.Object connectionStringType;
        private final java.lang.Object couponCode;
        private final java.lang.Object dbInstanceDescription;
        private final java.lang.Object dbInstanceNetType;
        private final java.lang.Object dbInstanceStorageType;
        private final java.lang.Object dbIsIgnoreCase;
        private final java.lang.Object dbMappings;
        private final java.lang.Object dbParamGroupId;
        private final java.lang.Object dbTimeZone;
        private final java.lang.Object dedicatedHostGroupId;
        private final java.lang.Object enableBackupLog;
        private final java.lang.Object encryptionKey;
        private final java.lang.Object highSpaceUsageProtection;
        private final java.lang.Object instanceNetworkType;
        private final java.lang.Object ioAccelerationEnabled;
        private final java.lang.Object localLogRetentionHours;
        private final java.lang.Object localLogRetentionSpace;
        private final java.lang.Object logBackupFrequency;
        private final java.lang.Object logBackupLocalRetentionNumber;
        private final java.lang.Object logBackupRetentionPeriod;
        private final java.lang.Object maintainTime;
        private final java.lang.Object masterUsername;
        private final java.lang.Object masterUserPassword;
        private final java.lang.Object masterUserType;
        private final java.lang.Object multiAz;
        private final java.lang.Object port;
        private final java.lang.Object preferredBackupPeriod;
        private final java.lang.Object preferredBackupTime;
        private final java.lang.Object privateIpAddress;
        private final java.lang.Object quantity;
        private final java.lang.Object releasedKeepPolicy;
        private final java.lang.Object resourceGroupId;
        private final java.lang.Object roleArn;
        private final java.lang.Object securityGroupId;
        private final java.lang.Object serverlessConfig;
        private final java.lang.Object slaveZoneIds;
        private final java.lang.Object sqlCollectorStatus;
        private final java.lang.Object sslSetting;
        private final java.lang.Object storageAutoScale;
        private final java.lang.Object storageThreshold;
        private final java.lang.Object storageUpperBound;
        private final java.util.Map<java.lang.String, java.lang.Object> tags;
        private final java.lang.Object targetDedicatedHostIdForLog;
        private final java.lang.Object targetDedicatedHostIdForMaster;
        private final java.lang.Object targetDedicatedHostIdForSlave;
        private final java.lang.Object vpcId;
        private final java.lang.Object vSwitchId;
        private final java.lang.Object zoneId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.commodityCode = software.amazon.jsii.Kernel.get(this, "commodityCode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dbInstanceClass = software.amazon.jsii.Kernel.get(this, "dbInstanceClass", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dbInstanceStorage = software.amazon.jsii.Kernel.get(this, "dbInstanceStorage", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.engine = software.amazon.jsii.Kernel.get(this, "engine", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.engineVersion = software.amazon.jsii.Kernel.get(this, "engineVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.period = software.amazon.jsii.Kernel.get(this, "period", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.periodType = software.amazon.jsii.Kernel.get(this, "periodType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.allocatePublicConnection = software.amazon.jsii.Kernel.get(this, "allocatePublicConnection", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.archiveBackupKeepCount = software.amazon.jsii.Kernel.get(this, "archiveBackupKeepCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.archiveBackupKeepPolicy = software.amazon.jsii.Kernel.get(this, "archiveBackupKeepPolicy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.archiveBackupRetentionPeriod = software.amazon.jsii.Kernel.get(this, "archiveBackupRetentionPeriod", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.autoPay = software.amazon.jsii.Kernel.get(this, "autoPay", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.autoRenew = software.amazon.jsii.Kernel.get(this, "autoRenew", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.backUpCategory = software.amazon.jsii.Kernel.get(this, "backUpCategory", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.backupPolicyMode = software.amazon.jsii.Kernel.get(this, "backupPolicyMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.backupRetentionPeriod = software.amazon.jsii.Kernel.get(this, "backupRetentionPeriod", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.burstingEnabled = software.amazon.jsii.Kernel.get(this, "burstingEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.category = software.amazon.jsii.Kernel.get(this, "category", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.coldDataEnabled = software.amazon.jsii.Kernel.get(this, "coldDataEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.compressType = software.amazon.jsii.Kernel.get(this, "compressType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.connectionMode = software.amazon.jsii.Kernel.get(this, "connectionMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.connectionStringPrefix = software.amazon.jsii.Kernel.get(this, "connectionStringPrefix", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.connectionStringType = software.amazon.jsii.Kernel.get(this, "connectionStringType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.couponCode = software.amazon.jsii.Kernel.get(this, "couponCode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dbInstanceDescription = software.amazon.jsii.Kernel.get(this, "dbInstanceDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dbInstanceNetType = software.amazon.jsii.Kernel.get(this, "dbInstanceNetType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dbInstanceStorageType = software.amazon.jsii.Kernel.get(this, "dbInstanceStorageType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dbIsIgnoreCase = software.amazon.jsii.Kernel.get(this, "dbIsIgnoreCase", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dbMappings = software.amazon.jsii.Kernel.get(this, "dbMappings", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dbParamGroupId = software.amazon.jsii.Kernel.get(this, "dbParamGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dbTimeZone = software.amazon.jsii.Kernel.get(this, "dbTimeZone", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dedicatedHostGroupId = software.amazon.jsii.Kernel.get(this, "dedicatedHostGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.enableBackupLog = software.amazon.jsii.Kernel.get(this, "enableBackupLog", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.encryptionKey = software.amazon.jsii.Kernel.get(this, "encryptionKey", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.highSpaceUsageProtection = software.amazon.jsii.Kernel.get(this, "highSpaceUsageProtection", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.instanceNetworkType = software.amazon.jsii.Kernel.get(this, "instanceNetworkType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ioAccelerationEnabled = software.amazon.jsii.Kernel.get(this, "ioAccelerationEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.localLogRetentionHours = software.amazon.jsii.Kernel.get(this, "localLogRetentionHours", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.localLogRetentionSpace = software.amazon.jsii.Kernel.get(this, "localLogRetentionSpace", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.logBackupFrequency = software.amazon.jsii.Kernel.get(this, "logBackupFrequency", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.logBackupLocalRetentionNumber = software.amazon.jsii.Kernel.get(this, "logBackupLocalRetentionNumber", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.logBackupRetentionPeriod = software.amazon.jsii.Kernel.get(this, "logBackupRetentionPeriod", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.maintainTime = software.amazon.jsii.Kernel.get(this, "maintainTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.masterUsername = software.amazon.jsii.Kernel.get(this, "masterUsername", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.masterUserPassword = software.amazon.jsii.Kernel.get(this, "masterUserPassword", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.masterUserType = software.amazon.jsii.Kernel.get(this, "masterUserType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.multiAz = software.amazon.jsii.Kernel.get(this, "multiAz", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.port = software.amazon.jsii.Kernel.get(this, "port", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.preferredBackupPeriod = software.amazon.jsii.Kernel.get(this, "preferredBackupPeriod", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.preferredBackupTime = software.amazon.jsii.Kernel.get(this, "preferredBackupTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.privateIpAddress = software.amazon.jsii.Kernel.get(this, "privateIpAddress", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.quantity = software.amazon.jsii.Kernel.get(this, "quantity", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.releasedKeepPolicy = software.amazon.jsii.Kernel.get(this, "releasedKeepPolicy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.roleArn = software.amazon.jsii.Kernel.get(this, "roleArn", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.securityGroupId = software.amazon.jsii.Kernel.get(this, "securityGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.serverlessConfig = software.amazon.jsii.Kernel.get(this, "serverlessConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.slaveZoneIds = software.amazon.jsii.Kernel.get(this, "slaveZoneIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.sqlCollectorStatus = software.amazon.jsii.Kernel.get(this, "sqlCollectorStatus", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.sslSetting = software.amazon.jsii.Kernel.get(this, "sslSetting", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.storageAutoScale = software.amazon.jsii.Kernel.get(this, "storageAutoScale", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.storageThreshold = software.amazon.jsii.Kernel.get(this, "storageThreshold", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.storageUpperBound = software.amazon.jsii.Kernel.get(this, "storageUpperBound", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tags = software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class)));
            this.targetDedicatedHostIdForLog = software.amazon.jsii.Kernel.get(this, "targetDedicatedHostIdForLog", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.targetDedicatedHostIdForMaster = software.amazon.jsii.Kernel.get(this, "targetDedicatedHostIdForMaster", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.targetDedicatedHostIdForSlave = software.amazon.jsii.Kernel.get(this, "targetDedicatedHostIdForSlave", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vpcId = software.amazon.jsii.Kernel.get(this, "vpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vSwitchId = software.amazon.jsii.Kernel.get(this, "vSwitchId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.zoneId = software.amazon.jsii.Kernel.get(this, "zoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        @SuppressWarnings("unchecked")
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.commodityCode = java.util.Objects.requireNonNull(builder.commodityCode, "commodityCode is required");
            this.dbInstanceClass = java.util.Objects.requireNonNull(builder.dbInstanceClass, "dbInstanceClass is required");
            this.dbInstanceStorage = java.util.Objects.requireNonNull(builder.dbInstanceStorage, "dbInstanceStorage is required");
            this.engine = java.util.Objects.requireNonNull(builder.engine, "engine is required");
            this.engineVersion = java.util.Objects.requireNonNull(builder.engineVersion, "engineVersion is required");
            this.period = java.util.Objects.requireNonNull(builder.period, "period is required");
            this.periodType = java.util.Objects.requireNonNull(builder.periodType, "periodType is required");
            this.allocatePublicConnection = builder.allocatePublicConnection;
            this.archiveBackupKeepCount = builder.archiveBackupKeepCount;
            this.archiveBackupKeepPolicy = builder.archiveBackupKeepPolicy;
            this.archiveBackupRetentionPeriod = builder.archiveBackupRetentionPeriod;
            this.autoPay = builder.autoPay;
            this.autoRenew = builder.autoRenew;
            this.backUpCategory = builder.backUpCategory;
            this.backupPolicyMode = builder.backupPolicyMode;
            this.backupRetentionPeriod = builder.backupRetentionPeriod;
            this.burstingEnabled = builder.burstingEnabled;
            this.category = builder.category;
            this.coldDataEnabled = builder.coldDataEnabled;
            this.compressType = builder.compressType;
            this.connectionMode = builder.connectionMode;
            this.connectionStringPrefix = builder.connectionStringPrefix;
            this.connectionStringType = builder.connectionStringType;
            this.couponCode = builder.couponCode;
            this.dbInstanceDescription = builder.dbInstanceDescription;
            this.dbInstanceNetType = builder.dbInstanceNetType;
            this.dbInstanceStorageType = builder.dbInstanceStorageType;
            this.dbIsIgnoreCase = builder.dbIsIgnoreCase;
            this.dbMappings = builder.dbMappings;
            this.dbParamGroupId = builder.dbParamGroupId;
            this.dbTimeZone = builder.dbTimeZone;
            this.dedicatedHostGroupId = builder.dedicatedHostGroupId;
            this.enableBackupLog = builder.enableBackupLog;
            this.encryptionKey = builder.encryptionKey;
            this.highSpaceUsageProtection = builder.highSpaceUsageProtection;
            this.instanceNetworkType = builder.instanceNetworkType;
            this.ioAccelerationEnabled = builder.ioAccelerationEnabled;
            this.localLogRetentionHours = builder.localLogRetentionHours;
            this.localLogRetentionSpace = builder.localLogRetentionSpace;
            this.logBackupFrequency = builder.logBackupFrequency;
            this.logBackupLocalRetentionNumber = builder.logBackupLocalRetentionNumber;
            this.logBackupRetentionPeriod = builder.logBackupRetentionPeriod;
            this.maintainTime = builder.maintainTime;
            this.masterUsername = builder.masterUsername;
            this.masterUserPassword = builder.masterUserPassword;
            this.masterUserType = builder.masterUserType;
            this.multiAz = builder.multiAz;
            this.port = builder.port;
            this.preferredBackupPeriod = builder.preferredBackupPeriod;
            this.preferredBackupTime = builder.preferredBackupTime;
            this.privateIpAddress = builder.privateIpAddress;
            this.quantity = builder.quantity;
            this.releasedKeepPolicy = builder.releasedKeepPolicy;
            this.resourceGroupId = builder.resourceGroupId;
            this.roleArn = builder.roleArn;
            this.securityGroupId = builder.securityGroupId;
            this.serverlessConfig = builder.serverlessConfig;
            this.slaveZoneIds = builder.slaveZoneIds;
            this.sqlCollectorStatus = builder.sqlCollectorStatus;
            this.sslSetting = builder.sslSetting;
            this.storageAutoScale = builder.storageAutoScale;
            this.storageThreshold = builder.storageThreshold;
            this.storageUpperBound = builder.storageUpperBound;
            this.tags = (java.util.Map<java.lang.String, java.lang.Object>)builder.tags;
            this.targetDedicatedHostIdForLog = builder.targetDedicatedHostIdForLog;
            this.targetDedicatedHostIdForMaster = builder.targetDedicatedHostIdForMaster;
            this.targetDedicatedHostIdForSlave = builder.targetDedicatedHostIdForSlave;
            this.vpcId = builder.vpcId;
            this.vSwitchId = builder.vSwitchId;
            this.zoneId = builder.zoneId;
        }

        @Override
        public final java.lang.Object getCommodityCode() {
            return this.commodityCode;
        }

        @Override
        public final java.lang.Object getDbInstanceClass() {
            return this.dbInstanceClass;
        }

        @Override
        public final java.lang.Object getDbInstanceStorage() {
            return this.dbInstanceStorage;
        }

        @Override
        public final java.lang.Object getEngine() {
            return this.engine;
        }

        @Override
        public final java.lang.Object getEngineVersion() {
            return this.engineVersion;
        }

        @Override
        public final java.lang.Object getPeriod() {
            return this.period;
        }

        @Override
        public final java.lang.Object getPeriodType() {
            return this.periodType;
        }

        @Override
        public final java.lang.Object getAllocatePublicConnection() {
            return this.allocatePublicConnection;
        }

        @Override
        public final java.lang.Object getArchiveBackupKeepCount() {
            return this.archiveBackupKeepCount;
        }

        @Override
        public final java.lang.Object getArchiveBackupKeepPolicy() {
            return this.archiveBackupKeepPolicy;
        }

        @Override
        public final java.lang.Object getArchiveBackupRetentionPeriod() {
            return this.archiveBackupRetentionPeriod;
        }

        @Override
        public final java.lang.Object getAutoPay() {
            return this.autoPay;
        }

        @Override
        public final java.lang.Object getAutoRenew() {
            return this.autoRenew;
        }

        @Override
        public final java.lang.Object getBackUpCategory() {
            return this.backUpCategory;
        }

        @Override
        public final java.lang.Object getBackupPolicyMode() {
            return this.backupPolicyMode;
        }

        @Override
        public final java.lang.Object getBackupRetentionPeriod() {
            return this.backupRetentionPeriod;
        }

        @Override
        public final java.lang.Object getBurstingEnabled() {
            return this.burstingEnabled;
        }

        @Override
        public final java.lang.Object getCategory() {
            return this.category;
        }

        @Override
        public final java.lang.Object getColdDataEnabled() {
            return this.coldDataEnabled;
        }

        @Override
        public final java.lang.Object getCompressType() {
            return this.compressType;
        }

        @Override
        public final java.lang.Object getConnectionMode() {
            return this.connectionMode;
        }

        @Override
        public final java.lang.Object getConnectionStringPrefix() {
            return this.connectionStringPrefix;
        }

        @Override
        public final java.lang.Object getConnectionStringType() {
            return this.connectionStringType;
        }

        @Override
        public final java.lang.Object getCouponCode() {
            return this.couponCode;
        }

        @Override
        public final java.lang.Object getDbInstanceDescription() {
            return this.dbInstanceDescription;
        }

        @Override
        public final java.lang.Object getDbInstanceNetType() {
            return this.dbInstanceNetType;
        }

        @Override
        public final java.lang.Object getDbInstanceStorageType() {
            return this.dbInstanceStorageType;
        }

        @Override
        public final java.lang.Object getDbIsIgnoreCase() {
            return this.dbIsIgnoreCase;
        }

        @Override
        public final java.lang.Object getDbMappings() {
            return this.dbMappings;
        }

        @Override
        public final java.lang.Object getDbParamGroupId() {
            return this.dbParamGroupId;
        }

        @Override
        public final java.lang.Object getDbTimeZone() {
            return this.dbTimeZone;
        }

        @Override
        public final java.lang.Object getDedicatedHostGroupId() {
            return this.dedicatedHostGroupId;
        }

        @Override
        public final java.lang.Object getEnableBackupLog() {
            return this.enableBackupLog;
        }

        @Override
        public final java.lang.Object getEncryptionKey() {
            return this.encryptionKey;
        }

        @Override
        public final java.lang.Object getHighSpaceUsageProtection() {
            return this.highSpaceUsageProtection;
        }

        @Override
        public final java.lang.Object getInstanceNetworkType() {
            return this.instanceNetworkType;
        }

        @Override
        public final java.lang.Object getIoAccelerationEnabled() {
            return this.ioAccelerationEnabled;
        }

        @Override
        public final java.lang.Object getLocalLogRetentionHours() {
            return this.localLogRetentionHours;
        }

        @Override
        public final java.lang.Object getLocalLogRetentionSpace() {
            return this.localLogRetentionSpace;
        }

        @Override
        public final java.lang.Object getLogBackupFrequency() {
            return this.logBackupFrequency;
        }

        @Override
        public final java.lang.Object getLogBackupLocalRetentionNumber() {
            return this.logBackupLocalRetentionNumber;
        }

        @Override
        public final java.lang.Object getLogBackupRetentionPeriod() {
            return this.logBackupRetentionPeriod;
        }

        @Override
        public final java.lang.Object getMaintainTime() {
            return this.maintainTime;
        }

        @Override
        public final java.lang.Object getMasterUsername() {
            return this.masterUsername;
        }

        @Override
        public final java.lang.Object getMasterUserPassword() {
            return this.masterUserPassword;
        }

        @Override
        public final java.lang.Object getMasterUserType() {
            return this.masterUserType;
        }

        @Override
        public final java.lang.Object getMultiAz() {
            return this.multiAz;
        }

        @Override
        public final java.lang.Object getPort() {
            return this.port;
        }

        @Override
        public final java.lang.Object getPreferredBackupPeriod() {
            return this.preferredBackupPeriod;
        }

        @Override
        public final java.lang.Object getPreferredBackupTime() {
            return this.preferredBackupTime;
        }

        @Override
        public final java.lang.Object getPrivateIpAddress() {
            return this.privateIpAddress;
        }

        @Override
        public final java.lang.Object getQuantity() {
            return this.quantity;
        }

        @Override
        public final java.lang.Object getReleasedKeepPolicy() {
            return this.releasedKeepPolicy;
        }

        @Override
        public final java.lang.Object getResourceGroupId() {
            return this.resourceGroupId;
        }

        @Override
        public final java.lang.Object getRoleArn() {
            return this.roleArn;
        }

        @Override
        public final java.lang.Object getSecurityGroupId() {
            return this.securityGroupId;
        }

        @Override
        public final java.lang.Object getServerlessConfig() {
            return this.serverlessConfig;
        }

        @Override
        public final java.lang.Object getSlaveZoneIds() {
            return this.slaveZoneIds;
        }

        @Override
        public final java.lang.Object getSqlCollectorStatus() {
            return this.sqlCollectorStatus;
        }

        @Override
        public final java.lang.Object getSslSetting() {
            return this.sslSetting;
        }

        @Override
        public final java.lang.Object getStorageAutoScale() {
            return this.storageAutoScale;
        }

        @Override
        public final java.lang.Object getStorageThreshold() {
            return this.storageThreshold;
        }

        @Override
        public final java.lang.Object getStorageUpperBound() {
            return this.storageUpperBound;
        }

        @Override
        public final java.util.Map<java.lang.String, java.lang.Object> getTags() {
            return this.tags;
        }

        @Override
        public final java.lang.Object getTargetDedicatedHostIdForLog() {
            return this.targetDedicatedHostIdForLog;
        }

        @Override
        public final java.lang.Object getTargetDedicatedHostIdForMaster() {
            return this.targetDedicatedHostIdForMaster;
        }

        @Override
        public final java.lang.Object getTargetDedicatedHostIdForSlave() {
            return this.targetDedicatedHostIdForSlave;
        }

        @Override
        public final java.lang.Object getVpcId() {
            return this.vpcId;
        }

        @Override
        public final java.lang.Object getVSwitchId() {
            return this.vSwitchId;
        }

        @Override
        public final java.lang.Object getZoneId() {
            return this.zoneId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("commodityCode", om.valueToTree(this.getCommodityCode()));
            data.set("dbInstanceClass", om.valueToTree(this.getDbInstanceClass()));
            data.set("dbInstanceStorage", om.valueToTree(this.getDbInstanceStorage()));
            data.set("engine", om.valueToTree(this.getEngine()));
            data.set("engineVersion", om.valueToTree(this.getEngineVersion()));
            data.set("period", om.valueToTree(this.getPeriod()));
            data.set("periodType", om.valueToTree(this.getPeriodType()));
            if (this.getAllocatePublicConnection() != null) {
                data.set("allocatePublicConnection", om.valueToTree(this.getAllocatePublicConnection()));
            }
            if (this.getArchiveBackupKeepCount() != null) {
                data.set("archiveBackupKeepCount", om.valueToTree(this.getArchiveBackupKeepCount()));
            }
            if (this.getArchiveBackupKeepPolicy() != null) {
                data.set("archiveBackupKeepPolicy", om.valueToTree(this.getArchiveBackupKeepPolicy()));
            }
            if (this.getArchiveBackupRetentionPeriod() != null) {
                data.set("archiveBackupRetentionPeriod", om.valueToTree(this.getArchiveBackupRetentionPeriod()));
            }
            if (this.getAutoPay() != null) {
                data.set("autoPay", om.valueToTree(this.getAutoPay()));
            }
            if (this.getAutoRenew() != null) {
                data.set("autoRenew", om.valueToTree(this.getAutoRenew()));
            }
            if (this.getBackUpCategory() != null) {
                data.set("backUpCategory", om.valueToTree(this.getBackUpCategory()));
            }
            if (this.getBackupPolicyMode() != null) {
                data.set("backupPolicyMode", om.valueToTree(this.getBackupPolicyMode()));
            }
            if (this.getBackupRetentionPeriod() != null) {
                data.set("backupRetentionPeriod", om.valueToTree(this.getBackupRetentionPeriod()));
            }
            if (this.getBurstingEnabled() != null) {
                data.set("burstingEnabled", om.valueToTree(this.getBurstingEnabled()));
            }
            if (this.getCategory() != null) {
                data.set("category", om.valueToTree(this.getCategory()));
            }
            if (this.getColdDataEnabled() != null) {
                data.set("coldDataEnabled", om.valueToTree(this.getColdDataEnabled()));
            }
            if (this.getCompressType() != null) {
                data.set("compressType", om.valueToTree(this.getCompressType()));
            }
            if (this.getConnectionMode() != null) {
                data.set("connectionMode", om.valueToTree(this.getConnectionMode()));
            }
            if (this.getConnectionStringPrefix() != null) {
                data.set("connectionStringPrefix", om.valueToTree(this.getConnectionStringPrefix()));
            }
            if (this.getConnectionStringType() != null) {
                data.set("connectionStringType", om.valueToTree(this.getConnectionStringType()));
            }
            if (this.getCouponCode() != null) {
                data.set("couponCode", om.valueToTree(this.getCouponCode()));
            }
            if (this.getDbInstanceDescription() != null) {
                data.set("dbInstanceDescription", om.valueToTree(this.getDbInstanceDescription()));
            }
            if (this.getDbInstanceNetType() != null) {
                data.set("dbInstanceNetType", om.valueToTree(this.getDbInstanceNetType()));
            }
            if (this.getDbInstanceStorageType() != null) {
                data.set("dbInstanceStorageType", om.valueToTree(this.getDbInstanceStorageType()));
            }
            if (this.getDbIsIgnoreCase() != null) {
                data.set("dbIsIgnoreCase", om.valueToTree(this.getDbIsIgnoreCase()));
            }
            if (this.getDbMappings() != null) {
                data.set("dbMappings", om.valueToTree(this.getDbMappings()));
            }
            if (this.getDbParamGroupId() != null) {
                data.set("dbParamGroupId", om.valueToTree(this.getDbParamGroupId()));
            }
            if (this.getDbTimeZone() != null) {
                data.set("dbTimeZone", om.valueToTree(this.getDbTimeZone()));
            }
            if (this.getDedicatedHostGroupId() != null) {
                data.set("dedicatedHostGroupId", om.valueToTree(this.getDedicatedHostGroupId()));
            }
            if (this.getEnableBackupLog() != null) {
                data.set("enableBackupLog", om.valueToTree(this.getEnableBackupLog()));
            }
            if (this.getEncryptionKey() != null) {
                data.set("encryptionKey", om.valueToTree(this.getEncryptionKey()));
            }
            if (this.getHighSpaceUsageProtection() != null) {
                data.set("highSpaceUsageProtection", om.valueToTree(this.getHighSpaceUsageProtection()));
            }
            if (this.getInstanceNetworkType() != null) {
                data.set("instanceNetworkType", om.valueToTree(this.getInstanceNetworkType()));
            }
            if (this.getIoAccelerationEnabled() != null) {
                data.set("ioAccelerationEnabled", om.valueToTree(this.getIoAccelerationEnabled()));
            }
            if (this.getLocalLogRetentionHours() != null) {
                data.set("localLogRetentionHours", om.valueToTree(this.getLocalLogRetentionHours()));
            }
            if (this.getLocalLogRetentionSpace() != null) {
                data.set("localLogRetentionSpace", om.valueToTree(this.getLocalLogRetentionSpace()));
            }
            if (this.getLogBackupFrequency() != null) {
                data.set("logBackupFrequency", om.valueToTree(this.getLogBackupFrequency()));
            }
            if (this.getLogBackupLocalRetentionNumber() != null) {
                data.set("logBackupLocalRetentionNumber", om.valueToTree(this.getLogBackupLocalRetentionNumber()));
            }
            if (this.getLogBackupRetentionPeriod() != null) {
                data.set("logBackupRetentionPeriod", om.valueToTree(this.getLogBackupRetentionPeriod()));
            }
            if (this.getMaintainTime() != null) {
                data.set("maintainTime", om.valueToTree(this.getMaintainTime()));
            }
            if (this.getMasterUsername() != null) {
                data.set("masterUsername", om.valueToTree(this.getMasterUsername()));
            }
            if (this.getMasterUserPassword() != null) {
                data.set("masterUserPassword", om.valueToTree(this.getMasterUserPassword()));
            }
            if (this.getMasterUserType() != null) {
                data.set("masterUserType", om.valueToTree(this.getMasterUserType()));
            }
            if (this.getMultiAz() != null) {
                data.set("multiAz", om.valueToTree(this.getMultiAz()));
            }
            if (this.getPort() != null) {
                data.set("port", om.valueToTree(this.getPort()));
            }
            if (this.getPreferredBackupPeriod() != null) {
                data.set("preferredBackupPeriod", om.valueToTree(this.getPreferredBackupPeriod()));
            }
            if (this.getPreferredBackupTime() != null) {
                data.set("preferredBackupTime", om.valueToTree(this.getPreferredBackupTime()));
            }
            if (this.getPrivateIpAddress() != null) {
                data.set("privateIpAddress", om.valueToTree(this.getPrivateIpAddress()));
            }
            if (this.getQuantity() != null) {
                data.set("quantity", om.valueToTree(this.getQuantity()));
            }
            if (this.getReleasedKeepPolicy() != null) {
                data.set("releasedKeepPolicy", om.valueToTree(this.getReleasedKeepPolicy()));
            }
            if (this.getResourceGroupId() != null) {
                data.set("resourceGroupId", om.valueToTree(this.getResourceGroupId()));
            }
            if (this.getRoleArn() != null) {
                data.set("roleArn", om.valueToTree(this.getRoleArn()));
            }
            if (this.getSecurityGroupId() != null) {
                data.set("securityGroupId", om.valueToTree(this.getSecurityGroupId()));
            }
            if (this.getServerlessConfig() != null) {
                data.set("serverlessConfig", om.valueToTree(this.getServerlessConfig()));
            }
            if (this.getSlaveZoneIds() != null) {
                data.set("slaveZoneIds", om.valueToTree(this.getSlaveZoneIds()));
            }
            if (this.getSqlCollectorStatus() != null) {
                data.set("sqlCollectorStatus", om.valueToTree(this.getSqlCollectorStatus()));
            }
            if (this.getSslSetting() != null) {
                data.set("sslSetting", om.valueToTree(this.getSslSetting()));
            }
            if (this.getStorageAutoScale() != null) {
                data.set("storageAutoScale", om.valueToTree(this.getStorageAutoScale()));
            }
            if (this.getStorageThreshold() != null) {
                data.set("storageThreshold", om.valueToTree(this.getStorageThreshold()));
            }
            if (this.getStorageUpperBound() != null) {
                data.set("storageUpperBound", om.valueToTree(this.getStorageUpperBound()));
            }
            if (this.getTags() != null) {
                data.set("tags", om.valueToTree(this.getTags()));
            }
            if (this.getTargetDedicatedHostIdForLog() != null) {
                data.set("targetDedicatedHostIdForLog", om.valueToTree(this.getTargetDedicatedHostIdForLog()));
            }
            if (this.getTargetDedicatedHostIdForMaster() != null) {
                data.set("targetDedicatedHostIdForMaster", om.valueToTree(this.getTargetDedicatedHostIdForMaster()));
            }
            if (this.getTargetDedicatedHostIdForSlave() != null) {
                data.set("targetDedicatedHostIdForSlave", om.valueToTree(this.getTargetDedicatedHostIdForSlave()));
            }
            if (this.getVpcId() != null) {
                data.set("vpcId", om.valueToTree(this.getVpcId()));
            }
            if (this.getVSwitchId() != null) {
                data.set("vSwitchId", om.valueToTree(this.getVSwitchId()));
            }
            if (this.getZoneId() != null) {
                data.set("zoneId", om.valueToTree(this.getZoneId()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-rds.PrepayDBInstanceProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            PrepayDBInstanceProps.Jsii$Proxy that = (PrepayDBInstanceProps.Jsii$Proxy) o;

            if (!commodityCode.equals(that.commodityCode)) return false;
            if (!dbInstanceClass.equals(that.dbInstanceClass)) return false;
            if (!dbInstanceStorage.equals(that.dbInstanceStorage)) return false;
            if (!engine.equals(that.engine)) return false;
            if (!engineVersion.equals(that.engineVersion)) return false;
            if (!period.equals(that.period)) return false;
            if (!periodType.equals(that.periodType)) return false;
            if (this.allocatePublicConnection != null ? !this.allocatePublicConnection.equals(that.allocatePublicConnection) : that.allocatePublicConnection != null) return false;
            if (this.archiveBackupKeepCount != null ? !this.archiveBackupKeepCount.equals(that.archiveBackupKeepCount) : that.archiveBackupKeepCount != null) return false;
            if (this.archiveBackupKeepPolicy != null ? !this.archiveBackupKeepPolicy.equals(that.archiveBackupKeepPolicy) : that.archiveBackupKeepPolicy != null) return false;
            if (this.archiveBackupRetentionPeriod != null ? !this.archiveBackupRetentionPeriod.equals(that.archiveBackupRetentionPeriod) : that.archiveBackupRetentionPeriod != null) return false;
            if (this.autoPay != null ? !this.autoPay.equals(that.autoPay) : that.autoPay != null) return false;
            if (this.autoRenew != null ? !this.autoRenew.equals(that.autoRenew) : that.autoRenew != null) return false;
            if (this.backUpCategory != null ? !this.backUpCategory.equals(that.backUpCategory) : that.backUpCategory != null) return false;
            if (this.backupPolicyMode != null ? !this.backupPolicyMode.equals(that.backupPolicyMode) : that.backupPolicyMode != null) return false;
            if (this.backupRetentionPeriod != null ? !this.backupRetentionPeriod.equals(that.backupRetentionPeriod) : that.backupRetentionPeriod != null) return false;
            if (this.burstingEnabled != null ? !this.burstingEnabled.equals(that.burstingEnabled) : that.burstingEnabled != null) return false;
            if (this.category != null ? !this.category.equals(that.category) : that.category != null) return false;
            if (this.coldDataEnabled != null ? !this.coldDataEnabled.equals(that.coldDataEnabled) : that.coldDataEnabled != null) return false;
            if (this.compressType != null ? !this.compressType.equals(that.compressType) : that.compressType != null) return false;
            if (this.connectionMode != null ? !this.connectionMode.equals(that.connectionMode) : that.connectionMode != null) return false;
            if (this.connectionStringPrefix != null ? !this.connectionStringPrefix.equals(that.connectionStringPrefix) : that.connectionStringPrefix != null) return false;
            if (this.connectionStringType != null ? !this.connectionStringType.equals(that.connectionStringType) : that.connectionStringType != null) return false;
            if (this.couponCode != null ? !this.couponCode.equals(that.couponCode) : that.couponCode != null) return false;
            if (this.dbInstanceDescription != null ? !this.dbInstanceDescription.equals(that.dbInstanceDescription) : that.dbInstanceDescription != null) return false;
            if (this.dbInstanceNetType != null ? !this.dbInstanceNetType.equals(that.dbInstanceNetType) : that.dbInstanceNetType != null) return false;
            if (this.dbInstanceStorageType != null ? !this.dbInstanceStorageType.equals(that.dbInstanceStorageType) : that.dbInstanceStorageType != null) return false;
            if (this.dbIsIgnoreCase != null ? !this.dbIsIgnoreCase.equals(that.dbIsIgnoreCase) : that.dbIsIgnoreCase != null) return false;
            if (this.dbMappings != null ? !this.dbMappings.equals(that.dbMappings) : that.dbMappings != null) return false;
            if (this.dbParamGroupId != null ? !this.dbParamGroupId.equals(that.dbParamGroupId) : that.dbParamGroupId != null) return false;
            if (this.dbTimeZone != null ? !this.dbTimeZone.equals(that.dbTimeZone) : that.dbTimeZone != null) return false;
            if (this.dedicatedHostGroupId != null ? !this.dedicatedHostGroupId.equals(that.dedicatedHostGroupId) : that.dedicatedHostGroupId != null) return false;
            if (this.enableBackupLog != null ? !this.enableBackupLog.equals(that.enableBackupLog) : that.enableBackupLog != null) return false;
            if (this.encryptionKey != null ? !this.encryptionKey.equals(that.encryptionKey) : that.encryptionKey != null) return false;
            if (this.highSpaceUsageProtection != null ? !this.highSpaceUsageProtection.equals(that.highSpaceUsageProtection) : that.highSpaceUsageProtection != null) return false;
            if (this.instanceNetworkType != null ? !this.instanceNetworkType.equals(that.instanceNetworkType) : that.instanceNetworkType != null) return false;
            if (this.ioAccelerationEnabled != null ? !this.ioAccelerationEnabled.equals(that.ioAccelerationEnabled) : that.ioAccelerationEnabled != null) return false;
            if (this.localLogRetentionHours != null ? !this.localLogRetentionHours.equals(that.localLogRetentionHours) : that.localLogRetentionHours != null) return false;
            if (this.localLogRetentionSpace != null ? !this.localLogRetentionSpace.equals(that.localLogRetentionSpace) : that.localLogRetentionSpace != null) return false;
            if (this.logBackupFrequency != null ? !this.logBackupFrequency.equals(that.logBackupFrequency) : that.logBackupFrequency != null) return false;
            if (this.logBackupLocalRetentionNumber != null ? !this.logBackupLocalRetentionNumber.equals(that.logBackupLocalRetentionNumber) : that.logBackupLocalRetentionNumber != null) return false;
            if (this.logBackupRetentionPeriod != null ? !this.logBackupRetentionPeriod.equals(that.logBackupRetentionPeriod) : that.logBackupRetentionPeriod != null) return false;
            if (this.maintainTime != null ? !this.maintainTime.equals(that.maintainTime) : that.maintainTime != null) return false;
            if (this.masterUsername != null ? !this.masterUsername.equals(that.masterUsername) : that.masterUsername != null) return false;
            if (this.masterUserPassword != null ? !this.masterUserPassword.equals(that.masterUserPassword) : that.masterUserPassword != null) return false;
            if (this.masterUserType != null ? !this.masterUserType.equals(that.masterUserType) : that.masterUserType != null) return false;
            if (this.multiAz != null ? !this.multiAz.equals(that.multiAz) : that.multiAz != null) return false;
            if (this.port != null ? !this.port.equals(that.port) : that.port != null) return false;
            if (this.preferredBackupPeriod != null ? !this.preferredBackupPeriod.equals(that.preferredBackupPeriod) : that.preferredBackupPeriod != null) return false;
            if (this.preferredBackupTime != null ? !this.preferredBackupTime.equals(that.preferredBackupTime) : that.preferredBackupTime != null) return false;
            if (this.privateIpAddress != null ? !this.privateIpAddress.equals(that.privateIpAddress) : that.privateIpAddress != null) return false;
            if (this.quantity != null ? !this.quantity.equals(that.quantity) : that.quantity != null) return false;
            if (this.releasedKeepPolicy != null ? !this.releasedKeepPolicy.equals(that.releasedKeepPolicy) : that.releasedKeepPolicy != null) return false;
            if (this.resourceGroupId != null ? !this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId != null) return false;
            if (this.roleArn != null ? !this.roleArn.equals(that.roleArn) : that.roleArn != null) return false;
            if (this.securityGroupId != null ? !this.securityGroupId.equals(that.securityGroupId) : that.securityGroupId != null) return false;
            if (this.serverlessConfig != null ? !this.serverlessConfig.equals(that.serverlessConfig) : that.serverlessConfig != null) return false;
            if (this.slaveZoneIds != null ? !this.slaveZoneIds.equals(that.slaveZoneIds) : that.slaveZoneIds != null) return false;
            if (this.sqlCollectorStatus != null ? !this.sqlCollectorStatus.equals(that.sqlCollectorStatus) : that.sqlCollectorStatus != null) return false;
            if (this.sslSetting != null ? !this.sslSetting.equals(that.sslSetting) : that.sslSetting != null) return false;
            if (this.storageAutoScale != null ? !this.storageAutoScale.equals(that.storageAutoScale) : that.storageAutoScale != null) return false;
            if (this.storageThreshold != null ? !this.storageThreshold.equals(that.storageThreshold) : that.storageThreshold != null) return false;
            if (this.storageUpperBound != null ? !this.storageUpperBound.equals(that.storageUpperBound) : that.storageUpperBound != null) return false;
            if (this.tags != null ? !this.tags.equals(that.tags) : that.tags != null) return false;
            if (this.targetDedicatedHostIdForLog != null ? !this.targetDedicatedHostIdForLog.equals(that.targetDedicatedHostIdForLog) : that.targetDedicatedHostIdForLog != null) return false;
            if (this.targetDedicatedHostIdForMaster != null ? !this.targetDedicatedHostIdForMaster.equals(that.targetDedicatedHostIdForMaster) : that.targetDedicatedHostIdForMaster != null) return false;
            if (this.targetDedicatedHostIdForSlave != null ? !this.targetDedicatedHostIdForSlave.equals(that.targetDedicatedHostIdForSlave) : that.targetDedicatedHostIdForSlave != null) return false;
            if (this.vpcId != null ? !this.vpcId.equals(that.vpcId) : that.vpcId != null) return false;
            if (this.vSwitchId != null ? !this.vSwitchId.equals(that.vSwitchId) : that.vSwitchId != null) return false;
            return this.zoneId != null ? this.zoneId.equals(that.zoneId) : that.zoneId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.commodityCode.hashCode();
            result = 31 * result + (this.dbInstanceClass.hashCode());
            result = 31 * result + (this.dbInstanceStorage.hashCode());
            result = 31 * result + (this.engine.hashCode());
            result = 31 * result + (this.engineVersion.hashCode());
            result = 31 * result + (this.period.hashCode());
            result = 31 * result + (this.periodType.hashCode());
            result = 31 * result + (this.allocatePublicConnection != null ? this.allocatePublicConnection.hashCode() : 0);
            result = 31 * result + (this.archiveBackupKeepCount != null ? this.archiveBackupKeepCount.hashCode() : 0);
            result = 31 * result + (this.archiveBackupKeepPolicy != null ? this.archiveBackupKeepPolicy.hashCode() : 0);
            result = 31 * result + (this.archiveBackupRetentionPeriod != null ? this.archiveBackupRetentionPeriod.hashCode() : 0);
            result = 31 * result + (this.autoPay != null ? this.autoPay.hashCode() : 0);
            result = 31 * result + (this.autoRenew != null ? this.autoRenew.hashCode() : 0);
            result = 31 * result + (this.backUpCategory != null ? this.backUpCategory.hashCode() : 0);
            result = 31 * result + (this.backupPolicyMode != null ? this.backupPolicyMode.hashCode() : 0);
            result = 31 * result + (this.backupRetentionPeriod != null ? this.backupRetentionPeriod.hashCode() : 0);
            result = 31 * result + (this.burstingEnabled != null ? this.burstingEnabled.hashCode() : 0);
            result = 31 * result + (this.category != null ? this.category.hashCode() : 0);
            result = 31 * result + (this.coldDataEnabled != null ? this.coldDataEnabled.hashCode() : 0);
            result = 31 * result + (this.compressType != null ? this.compressType.hashCode() : 0);
            result = 31 * result + (this.connectionMode != null ? this.connectionMode.hashCode() : 0);
            result = 31 * result + (this.connectionStringPrefix != null ? this.connectionStringPrefix.hashCode() : 0);
            result = 31 * result + (this.connectionStringType != null ? this.connectionStringType.hashCode() : 0);
            result = 31 * result + (this.couponCode != null ? this.couponCode.hashCode() : 0);
            result = 31 * result + (this.dbInstanceDescription != null ? this.dbInstanceDescription.hashCode() : 0);
            result = 31 * result + (this.dbInstanceNetType != null ? this.dbInstanceNetType.hashCode() : 0);
            result = 31 * result + (this.dbInstanceStorageType != null ? this.dbInstanceStorageType.hashCode() : 0);
            result = 31 * result + (this.dbIsIgnoreCase != null ? this.dbIsIgnoreCase.hashCode() : 0);
            result = 31 * result + (this.dbMappings != null ? this.dbMappings.hashCode() : 0);
            result = 31 * result + (this.dbParamGroupId != null ? this.dbParamGroupId.hashCode() : 0);
            result = 31 * result + (this.dbTimeZone != null ? this.dbTimeZone.hashCode() : 0);
            result = 31 * result + (this.dedicatedHostGroupId != null ? this.dedicatedHostGroupId.hashCode() : 0);
            result = 31 * result + (this.enableBackupLog != null ? this.enableBackupLog.hashCode() : 0);
            result = 31 * result + (this.encryptionKey != null ? this.encryptionKey.hashCode() : 0);
            result = 31 * result + (this.highSpaceUsageProtection != null ? this.highSpaceUsageProtection.hashCode() : 0);
            result = 31 * result + (this.instanceNetworkType != null ? this.instanceNetworkType.hashCode() : 0);
            result = 31 * result + (this.ioAccelerationEnabled != null ? this.ioAccelerationEnabled.hashCode() : 0);
            result = 31 * result + (this.localLogRetentionHours != null ? this.localLogRetentionHours.hashCode() : 0);
            result = 31 * result + (this.localLogRetentionSpace != null ? this.localLogRetentionSpace.hashCode() : 0);
            result = 31 * result + (this.logBackupFrequency != null ? this.logBackupFrequency.hashCode() : 0);
            result = 31 * result + (this.logBackupLocalRetentionNumber != null ? this.logBackupLocalRetentionNumber.hashCode() : 0);
            result = 31 * result + (this.logBackupRetentionPeriod != null ? this.logBackupRetentionPeriod.hashCode() : 0);
            result = 31 * result + (this.maintainTime != null ? this.maintainTime.hashCode() : 0);
            result = 31 * result + (this.masterUsername != null ? this.masterUsername.hashCode() : 0);
            result = 31 * result + (this.masterUserPassword != null ? this.masterUserPassword.hashCode() : 0);
            result = 31 * result + (this.masterUserType != null ? this.masterUserType.hashCode() : 0);
            result = 31 * result + (this.multiAz != null ? this.multiAz.hashCode() : 0);
            result = 31 * result + (this.port != null ? this.port.hashCode() : 0);
            result = 31 * result + (this.preferredBackupPeriod != null ? this.preferredBackupPeriod.hashCode() : 0);
            result = 31 * result + (this.preferredBackupTime != null ? this.preferredBackupTime.hashCode() : 0);
            result = 31 * result + (this.privateIpAddress != null ? this.privateIpAddress.hashCode() : 0);
            result = 31 * result + (this.quantity != null ? this.quantity.hashCode() : 0);
            result = 31 * result + (this.releasedKeepPolicy != null ? this.releasedKeepPolicy.hashCode() : 0);
            result = 31 * result + (this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0);
            result = 31 * result + (this.roleArn != null ? this.roleArn.hashCode() : 0);
            result = 31 * result + (this.securityGroupId != null ? this.securityGroupId.hashCode() : 0);
            result = 31 * result + (this.serverlessConfig != null ? this.serverlessConfig.hashCode() : 0);
            result = 31 * result + (this.slaveZoneIds != null ? this.slaveZoneIds.hashCode() : 0);
            result = 31 * result + (this.sqlCollectorStatus != null ? this.sqlCollectorStatus.hashCode() : 0);
            result = 31 * result + (this.sslSetting != null ? this.sslSetting.hashCode() : 0);
            result = 31 * result + (this.storageAutoScale != null ? this.storageAutoScale.hashCode() : 0);
            result = 31 * result + (this.storageThreshold != null ? this.storageThreshold.hashCode() : 0);
            result = 31 * result + (this.storageUpperBound != null ? this.storageUpperBound.hashCode() : 0);
            result = 31 * result + (this.tags != null ? this.tags.hashCode() : 0);
            result = 31 * result + (this.targetDedicatedHostIdForLog != null ? this.targetDedicatedHostIdForLog.hashCode() : 0);
            result = 31 * result + (this.targetDedicatedHostIdForMaster != null ? this.targetDedicatedHostIdForMaster.hashCode() : 0);
            result = 31 * result + (this.targetDedicatedHostIdForSlave != null ? this.targetDedicatedHostIdForSlave.hashCode() : 0);
            result = 31 * result + (this.vpcId != null ? this.vpcId.hashCode() : 0);
            result = 31 * result + (this.vSwitchId != null ? this.vSwitchId.hashCode() : 0);
            result = 31 * result + (this.zoneId != null ? this.zoneId.hashCode() : 0);
            return result;
        }
    }
}
