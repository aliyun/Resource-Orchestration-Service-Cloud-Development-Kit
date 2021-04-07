package com.aliyun.ros.cdk.rds;

/**
 * Properties for defining a `ALIYUN::RDS::DBInstanceClone`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.27.0 (build 07d848a)", date = "2021-04-07T04:01:42.904Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.rds.$Module.class, fqn = "@alicloud/ros-cdk-rds.DBInstanceCloneProps")
@software.amazon.jsii.Jsii.Proxy(DBInstanceCloneProps.Jsii$Proxy.class)
public interface DBInstanceCloneProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property dbInstanceId: Instance id.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDbInstanceId();

    /**
     * Property payType: The charge type of created instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getPayType();

    /**
     * Property allocatePublicConnection: If true, allocate public connection automate.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAllocatePublicConnection() {
        return null;
    }

    /**
     * Property backupId: The ID of the backup set that you want to use.
     * <p>
     * You can call the DescribeBackups operation to query the most recent backup set list.
     * Note You must specify at least one of the BackupId and RestoreTime parameters.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getBackupId() {
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
     * Property backupType: The type of backup used by the new instance.
     * <p>
     * Valid values:
     * <p>
     * <ul>
     * <li>FullBackup: full backup</li>
     * <li>IncrementalBackup: incremental backup</li>
     * </ul>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getBackupType() {
        return null;
    }

    /**
     * Property category: The edition of the instance.
     * <p>
     * Valid values:
     * Basic: specifies to use the Basic Edition.
     * HighAvailability: specifies to use the High-availability Edition.
     * AlwaysOn: specifies to use the Cluster Edition.
     * Finance: specifies to use the Enterprise Edition.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCategory() {
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
     * Property dbInstanceClass: Database instance type.
     * <p>
     * Refer the RDS database instance type reference, such as 'rds.mys2.large', 'rds.mss1.large', 'rds.pg.s1.small' etc
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDbInstanceClass() {
        return null;
    }

    /**
     * Property dbInstanceDescription: Description of created database instance.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDbInstanceDescription() {
        return null;
    }

    /**
     * Property dbInstanceStorage: Database instance storage size.
     * <p>
     * mysql is [5,1000]. sql server 2008r2 is [10,1000], sql server 2012/2012_web/2016-web is [20,1000]. PostgreSQL and PPAS is [5,2000]. Increased every 5 GB, Unit in GB
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDbInstanceStorage() {
        return null;
    }

    /**
     * Property dbInstanceStorageType: The storage type of the instance.
     * <p>
     * Valid values:
     * local_ssd: specifies to use local SSDs. This is the recommended storage type.
     * cloud_ssd: specifies to use standard SSDs.
     * cloud_essd: specifies to use enhanced SSDs.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDbInstanceStorageType() {
        return null;
    }

    /**
     * Property dbMappings: Database mappings to attach to db instance.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDbMappings() {
        return null;
    }

    /**
     * Property dbNames: The names of the databases that you want to create on the new instance.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDbNames() {
        return null;
    }

    /**
     * Property dedicatedHostGroupId: The ID of the host group to which the instance belongs if you create an instance in a host group.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDedicatedHostGroupId() {
        return null;
    }

    /**
     * Property instanceNetworkType: The network type of the new instance.
     * <p>
     * Valid values:
     * <p>
     * <ul>
     * <li>VPC</li>
     * <li>Classic
     * The default value is the network type of the original instance.</li>
     * </ul>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInstanceNetworkType() {
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
     * Property period: Prepaid time period.
     * <p>
     * While choose by pay by month, it could be from 1 to 9. While choose pay by year, it could be from 1 to 3.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPeriod() {
        return null;
    }

    /**
     * Property periodType: Charge period for created instances.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPeriodType() {
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
     * Property restoreTable: Specifies whether to restore specific databases and tables.
     * <p>
     * The value 1 specifies to restore specific databases and tables.
     * If you do not want to restore specific databases or tables, you can choose not to specify this parameter.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRestoreTable() {
        return null;
    }

    /**
     * Property restoreTime: The point in time to which you want to restore the data of the original instance.
     * <p>
     * The point in time must fall within the specified log backup retention period.
     * The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format.
     * The time must be in UTC.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRestoreTime() {
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
     * Property securityIpList: Security ip to access the database instance, combine with comma, 0.0.0.0/0 means no limitation.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSecurityIpList() {
        return null;
    }

    /**
     * Property slaveZoneIds: List of slave zone ids can specify slave zone ids when creating the high-availability or enterprise edition instance.
     * <p>
     * Meanwhile, VSwitchId needs to pass in the corresponding vswitch id to the slave zone by order. For example, ZoneId = "zone-a" and SlaveZoneIds = ["zone-c", "zone-b"], then the VSwitchId must be "vsw-zone-a,vsw-zone-c,vsw-zone-b". Of course, you can also choose automatic allocation, for example, ZoneId = "zone-a" and SlaveZoneIds = ["Auto", "Auto"], then the VSwitchId must be "vsw-zone-a,Auto,Auto". The list contains up to 2 slave zone ids, separated by commas.
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
     * Property tableMeta: The information about the databases and tables that you want to restore.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTableMeta() {
        return null;
    }

    /**
     * Property tags: The tags of an instance.
     * <p>
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
    default @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.Object> getTags() {
        return null;
    }

    /**
     * Property timeoutInMinutes: The timeout period for creating the clone instance resource.
     * <p>
     * Unit: Minute. Default: 120.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTimeoutInMinutes() {
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
     * @return a {@link Builder} of {@link DBInstanceCloneProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link DBInstanceCloneProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<DBInstanceCloneProps> {
        private java.lang.Object dbInstanceId;
        private java.lang.Object payType;
        private java.lang.Object allocatePublicConnection;
        private java.lang.Object backupId;
        private java.lang.Object backupRetentionPeriod;
        private java.lang.Object backupType;
        private java.lang.Object category;
        private java.lang.Object connectionStringPrefix;
        private java.lang.Object connectionStringType;
        private java.lang.Object dbInstanceClass;
        private java.lang.Object dbInstanceDescription;
        private java.lang.Object dbInstanceStorage;
        private java.lang.Object dbInstanceStorageType;
        private java.lang.Object dbMappings;
        private java.lang.Object dbNames;
        private java.lang.Object dedicatedHostGroupId;
        private java.lang.Object instanceNetworkType;
        private java.lang.Object maintainTime;
        private java.lang.Object masterUsername;
        private java.lang.Object masterUserPassword;
        private java.lang.Object masterUserType;
        private java.lang.Object period;
        private java.lang.Object periodType;
        private java.lang.Object port;
        private java.lang.Object preferredBackupPeriod;
        private java.lang.Object preferredBackupTime;
        private java.lang.Object privateIpAddress;
        private java.lang.Object restoreTable;
        private java.lang.Object restoreTime;
        private java.lang.Object securityGroupId;
        private java.lang.Object securityIpList;
        private java.lang.Object slaveZoneIds;
        private java.lang.Object sqlCollectorStatus;
        private java.lang.Object sslSetting;
        private java.lang.Object tableMeta;
        private java.util.Map<java.lang.String, java.lang.Object> tags;
        private java.lang.Object timeoutInMinutes;
        private java.lang.Object vpcId;
        private java.lang.Object vSwitchId;
        private java.lang.Object zoneId;

        /**
         * Sets the value of {@link DBInstanceCloneProps#getDbInstanceId}
         * @param dbInstanceId Property dbInstanceId: Instance id. This parameter is required.
         * @return {@code this}
         */
        public Builder dbInstanceId(java.lang.String dbInstanceId) {
            this.dbInstanceId = dbInstanceId;
            return this;
        }

        /**
         * Sets the value of {@link DBInstanceCloneProps#getDbInstanceId}
         * @param dbInstanceId Property dbInstanceId: Instance id. This parameter is required.
         * @return {@code this}
         */
        public Builder dbInstanceId(com.aliyun.ros.cdk.core.IResolvable dbInstanceId) {
            this.dbInstanceId = dbInstanceId;
            return this;
        }

        /**
         * Sets the value of {@link DBInstanceCloneProps#getPayType}
         * @param payType Property payType: The charge type of created instance. This parameter is required.
         * @return {@code this}
         */
        public Builder payType(java.lang.String payType) {
            this.payType = payType;
            return this;
        }

        /**
         * Sets the value of {@link DBInstanceCloneProps#getPayType}
         * @param payType Property payType: The charge type of created instance. This parameter is required.
         * @return {@code this}
         */
        public Builder payType(com.aliyun.ros.cdk.core.IResolvable payType) {
            this.payType = payType;
            return this;
        }

        /**
         * Sets the value of {@link DBInstanceCloneProps#getAllocatePublicConnection}
         * @param allocatePublicConnection Property allocatePublicConnection: If true, allocate public connection automate.
         * @return {@code this}
         */
        public Builder allocatePublicConnection(java.lang.Boolean allocatePublicConnection) {
            this.allocatePublicConnection = allocatePublicConnection;
            return this;
        }

        /**
         * Sets the value of {@link DBInstanceCloneProps#getAllocatePublicConnection}
         * @param allocatePublicConnection Property allocatePublicConnection: If true, allocate public connection automate.
         * @return {@code this}
         */
        public Builder allocatePublicConnection(com.aliyun.ros.cdk.core.IResolvable allocatePublicConnection) {
            this.allocatePublicConnection = allocatePublicConnection;
            return this;
        }

        /**
         * Sets the value of {@link DBInstanceCloneProps#getBackupId}
         * @param backupId Property backupId: The ID of the backup set that you want to use.
         *                 You can call the DescribeBackups operation to query the most recent backup set list.
         *                 Note You must specify at least one of the BackupId and RestoreTime parameters.
         * @return {@code this}
         */
        public Builder backupId(java.lang.String backupId) {
            this.backupId = backupId;
            return this;
        }

        /**
         * Sets the value of {@link DBInstanceCloneProps#getBackupId}
         * @param backupId Property backupId: The ID of the backup set that you want to use.
         *                 You can call the DescribeBackups operation to query the most recent backup set list.
         *                 Note You must specify at least one of the BackupId and RestoreTime parameters.
         * @return {@code this}
         */
        public Builder backupId(com.aliyun.ros.cdk.core.IResolvable backupId) {
            this.backupId = backupId;
            return this;
        }

        /**
         * Sets the value of {@link DBInstanceCloneProps#getBackupRetentionPeriod}
         * @param backupRetentionPeriod Property backupRetentionPeriod: The retention period of the data backup.
         *                              Value range: 7 to 730. The default value is the original value. Note When the BackupPolicyMode parameter is set to LogBackupPolicy, this parameter is required.
         * @return {@code this}
         */
        public Builder backupRetentionPeriod(java.lang.Number backupRetentionPeriod) {
            this.backupRetentionPeriod = backupRetentionPeriod;
            return this;
        }

        /**
         * Sets the value of {@link DBInstanceCloneProps#getBackupRetentionPeriod}
         * @param backupRetentionPeriod Property backupRetentionPeriod: The retention period of the data backup.
         *                              Value range: 7 to 730. The default value is the original value. Note When the BackupPolicyMode parameter is set to LogBackupPolicy, this parameter is required.
         * @return {@code this}
         */
        public Builder backupRetentionPeriod(com.aliyun.ros.cdk.core.IResolvable backupRetentionPeriod) {
            this.backupRetentionPeriod = backupRetentionPeriod;
            return this;
        }

        /**
         * Sets the value of {@link DBInstanceCloneProps#getBackupType}
         * @param backupType Property backupType: The type of backup used by the new instance.
         *                   Valid values:
         *                   <p>
         *                   <ul>
         *                   <li>FullBackup: full backup</li>
         *                   <li>IncrementalBackup: incremental backup</li>
         *                   </ul>
         * @return {@code this}
         */
        public Builder backupType(java.lang.String backupType) {
            this.backupType = backupType;
            return this;
        }

        /**
         * Sets the value of {@link DBInstanceCloneProps#getBackupType}
         * @param backupType Property backupType: The type of backup used by the new instance.
         *                   Valid values:
         *                   <p>
         *                   <ul>
         *                   <li>FullBackup: full backup</li>
         *                   <li>IncrementalBackup: incremental backup</li>
         *                   </ul>
         * @return {@code this}
         */
        public Builder backupType(com.aliyun.ros.cdk.core.IResolvable backupType) {
            this.backupType = backupType;
            return this;
        }

        /**
         * Sets the value of {@link DBInstanceCloneProps#getCategory}
         * @param category Property category: The edition of the instance.
         *                 Valid values:
         *                 Basic: specifies to use the Basic Edition.
         *                 HighAvailability: specifies to use the High-availability Edition.
         *                 AlwaysOn: specifies to use the Cluster Edition.
         *                 Finance: specifies to use the Enterprise Edition.
         * @return {@code this}
         */
        public Builder category(java.lang.String category) {
            this.category = category;
            return this;
        }

        /**
         * Sets the value of {@link DBInstanceCloneProps#getCategory}
         * @param category Property category: The edition of the instance.
         *                 Valid values:
         *                 Basic: specifies to use the Basic Edition.
         *                 HighAvailability: specifies to use the High-availability Edition.
         *                 AlwaysOn: specifies to use the Cluster Edition.
         *                 Finance: specifies to use the Enterprise Edition.
         * @return {@code this}
         */
        public Builder category(com.aliyun.ros.cdk.core.IResolvable category) {
            this.category = category;
            return this;
        }

        /**
         * Sets the value of {@link DBInstanceCloneProps#getConnectionStringPrefix}
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
         * Sets the value of {@link DBInstanceCloneProps#getConnectionStringPrefix}
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
         * Sets the value of {@link DBInstanceCloneProps#getConnectionStringType}
         * @param connectionStringType Property connectionStringType: The endpoint type of the instance, allow values: Inner, Public.
         * @return {@code this}
         */
        public Builder connectionStringType(java.lang.String connectionStringType) {
            this.connectionStringType = connectionStringType;
            return this;
        }

        /**
         * Sets the value of {@link DBInstanceCloneProps#getConnectionStringType}
         * @param connectionStringType Property connectionStringType: The endpoint type of the instance, allow values: Inner, Public.
         * @return {@code this}
         */
        public Builder connectionStringType(com.aliyun.ros.cdk.core.IResolvable connectionStringType) {
            this.connectionStringType = connectionStringType;
            return this;
        }

        /**
         * Sets the value of {@link DBInstanceCloneProps#getDbInstanceClass}
         * @param dbInstanceClass Property dbInstanceClass: Database instance type.
         *                        Refer the RDS database instance type reference, such as 'rds.mys2.large', 'rds.mss1.large', 'rds.pg.s1.small' etc
         * @return {@code this}
         */
        public Builder dbInstanceClass(java.lang.String dbInstanceClass) {
            this.dbInstanceClass = dbInstanceClass;
            return this;
        }

        /**
         * Sets the value of {@link DBInstanceCloneProps#getDbInstanceClass}
         * @param dbInstanceClass Property dbInstanceClass: Database instance type.
         *                        Refer the RDS database instance type reference, such as 'rds.mys2.large', 'rds.mss1.large', 'rds.pg.s1.small' etc
         * @return {@code this}
         */
        public Builder dbInstanceClass(com.aliyun.ros.cdk.core.IResolvable dbInstanceClass) {
            this.dbInstanceClass = dbInstanceClass;
            return this;
        }

        /**
         * Sets the value of {@link DBInstanceCloneProps#getDbInstanceDescription}
         * @param dbInstanceDescription Property dbInstanceDescription: Description of created database instance.
         * @return {@code this}
         */
        public Builder dbInstanceDescription(java.lang.String dbInstanceDescription) {
            this.dbInstanceDescription = dbInstanceDescription;
            return this;
        }

        /**
         * Sets the value of {@link DBInstanceCloneProps#getDbInstanceDescription}
         * @param dbInstanceDescription Property dbInstanceDescription: Description of created database instance.
         * @return {@code this}
         */
        public Builder dbInstanceDescription(com.aliyun.ros.cdk.core.IResolvable dbInstanceDescription) {
            this.dbInstanceDescription = dbInstanceDescription;
            return this;
        }

        /**
         * Sets the value of {@link DBInstanceCloneProps#getDbInstanceStorage}
         * @param dbInstanceStorage Property dbInstanceStorage: Database instance storage size.
         *                          mysql is [5,1000]. sql server 2008r2 is [10,1000], sql server 2012/2012_web/2016-web is [20,1000]. PostgreSQL and PPAS is [5,2000]. Increased every 5 GB, Unit in GB
         * @return {@code this}
         */
        public Builder dbInstanceStorage(java.lang.Number dbInstanceStorage) {
            this.dbInstanceStorage = dbInstanceStorage;
            return this;
        }

        /**
         * Sets the value of {@link DBInstanceCloneProps#getDbInstanceStorage}
         * @param dbInstanceStorage Property dbInstanceStorage: Database instance storage size.
         *                          mysql is [5,1000]. sql server 2008r2 is [10,1000], sql server 2012/2012_web/2016-web is [20,1000]. PostgreSQL and PPAS is [5,2000]. Increased every 5 GB, Unit in GB
         * @return {@code this}
         */
        public Builder dbInstanceStorage(com.aliyun.ros.cdk.core.IResolvable dbInstanceStorage) {
            this.dbInstanceStorage = dbInstanceStorage;
            return this;
        }

        /**
         * Sets the value of {@link DBInstanceCloneProps#getDbInstanceStorageType}
         * @param dbInstanceStorageType Property dbInstanceStorageType: The storage type of the instance.
         *                              Valid values:
         *                              local_ssd: specifies to use local SSDs. This is the recommended storage type.
         *                              cloud_ssd: specifies to use standard SSDs.
         *                              cloud_essd: specifies to use enhanced SSDs.
         * @return {@code this}
         */
        public Builder dbInstanceStorageType(java.lang.String dbInstanceStorageType) {
            this.dbInstanceStorageType = dbInstanceStorageType;
            return this;
        }

        /**
         * Sets the value of {@link DBInstanceCloneProps#getDbInstanceStorageType}
         * @param dbInstanceStorageType Property dbInstanceStorageType: The storage type of the instance.
         *                              Valid values:
         *                              local_ssd: specifies to use local SSDs. This is the recommended storage type.
         *                              cloud_ssd: specifies to use standard SSDs.
         *                              cloud_essd: specifies to use enhanced SSDs.
         * @return {@code this}
         */
        public Builder dbInstanceStorageType(com.aliyun.ros.cdk.core.IResolvable dbInstanceStorageType) {
            this.dbInstanceStorageType = dbInstanceStorageType;
            return this;
        }

        /**
         * Sets the value of {@link DBInstanceCloneProps#getDbMappings}
         * @param dbMappings Property dbMappings: Database mappings to attach to db instance.
         * @return {@code this}
         */
        public Builder dbMappings(com.aliyun.ros.cdk.core.IResolvable dbMappings) {
            this.dbMappings = dbMappings;
            return this;
        }

        /**
         * Sets the value of {@link DBInstanceCloneProps#getDbMappings}
         * @param dbMappings Property dbMappings: Database mappings to attach to db instance.
         * @return {@code this}
         */
        public Builder dbMappings(java.util.List<? extends java.lang.Object> dbMappings) {
            this.dbMappings = dbMappings;
            return this;
        }

        /**
         * Sets the value of {@link DBInstanceCloneProps#getDbNames}
         * @param dbNames Property dbNames: The names of the databases that you want to create on the new instance.
         * @return {@code this}
         */
        public Builder dbNames(java.lang.String dbNames) {
            this.dbNames = dbNames;
            return this;
        }

        /**
         * Sets the value of {@link DBInstanceCloneProps#getDbNames}
         * @param dbNames Property dbNames: The names of the databases that you want to create on the new instance.
         * @return {@code this}
         */
        public Builder dbNames(com.aliyun.ros.cdk.core.IResolvable dbNames) {
            this.dbNames = dbNames;
            return this;
        }

        /**
         * Sets the value of {@link DBInstanceCloneProps#getDedicatedHostGroupId}
         * @param dedicatedHostGroupId Property dedicatedHostGroupId: The ID of the host group to which the instance belongs if you create an instance in a host group.
         * @return {@code this}
         */
        public Builder dedicatedHostGroupId(java.lang.String dedicatedHostGroupId) {
            this.dedicatedHostGroupId = dedicatedHostGroupId;
            return this;
        }

        /**
         * Sets the value of {@link DBInstanceCloneProps#getDedicatedHostGroupId}
         * @param dedicatedHostGroupId Property dedicatedHostGroupId: The ID of the host group to which the instance belongs if you create an instance in a host group.
         * @return {@code this}
         */
        public Builder dedicatedHostGroupId(com.aliyun.ros.cdk.core.IResolvable dedicatedHostGroupId) {
            this.dedicatedHostGroupId = dedicatedHostGroupId;
            return this;
        }

        /**
         * Sets the value of {@link DBInstanceCloneProps#getInstanceNetworkType}
         * @param instanceNetworkType Property instanceNetworkType: The network type of the new instance.
         *                            Valid values:
         *                            <p>
         *                            <ul>
         *                            <li>VPC</li>
         *                            <li>Classic
         *                            The default value is the network type of the original instance.</li>
         *                            </ul>
         * @return {@code this}
         */
        public Builder instanceNetworkType(java.lang.String instanceNetworkType) {
            this.instanceNetworkType = instanceNetworkType;
            return this;
        }

        /**
         * Sets the value of {@link DBInstanceCloneProps#getInstanceNetworkType}
         * @param instanceNetworkType Property instanceNetworkType: The network type of the new instance.
         *                            Valid values:
         *                            <p>
         *                            <ul>
         *                            <li>VPC</li>
         *                            <li>Classic
         *                            The default value is the network type of the original instance.</li>
         *                            </ul>
         * @return {@code this}
         */
        public Builder instanceNetworkType(com.aliyun.ros.cdk.core.IResolvable instanceNetworkType) {
            this.instanceNetworkType = instanceNetworkType;
            return this;
        }

        /**
         * Sets the value of {@link DBInstanceCloneProps#getMaintainTime}
         * @param maintainTime Property maintainTime: The period during which the maintenance performs.
         *                     The format is HH:mmZ-HH:mmZ.
         * @return {@code this}
         */
        public Builder maintainTime(java.lang.String maintainTime) {
            this.maintainTime = maintainTime;
            return this;
        }

        /**
         * Sets the value of {@link DBInstanceCloneProps#getMaintainTime}
         * @param maintainTime Property maintainTime: The period during which the maintenance performs.
         *                     The format is HH:mmZ-HH:mmZ.
         * @return {@code this}
         */
        public Builder maintainTime(com.aliyun.ros.cdk.core.IResolvable maintainTime) {
            this.maintainTime = maintainTime;
            return this;
        }

        /**
         * Sets the value of {@link DBInstanceCloneProps#getMasterUsername}
         * @param masterUsername Property masterUsername: The master user name for the database instance.
         * @return {@code this}
         */
        public Builder masterUsername(java.lang.String masterUsername) {
            this.masterUsername = masterUsername;
            return this;
        }

        /**
         * Sets the value of {@link DBInstanceCloneProps#getMasterUsername}
         * @param masterUsername Property masterUsername: The master user name for the database instance.
         * @return {@code this}
         */
        public Builder masterUsername(com.aliyun.ros.cdk.core.IResolvable masterUsername) {
            this.masterUsername = masterUsername;
            return this;
        }

        /**
         * Sets the value of {@link DBInstanceCloneProps#getMasterUserPassword}
         * @param masterUserPassword Property masterUserPassword: The master password for the database instance.
         * @return {@code this}
         */
        public Builder masterUserPassword(java.lang.String masterUserPassword) {
            this.masterUserPassword = masterUserPassword;
            return this;
        }

        /**
         * Sets the value of {@link DBInstanceCloneProps#getMasterUserPassword}
         * @param masterUserPassword Property masterUserPassword: The master password for the database instance.
         * @return {@code this}
         */
        public Builder masterUserPassword(com.aliyun.ros.cdk.core.IResolvable masterUserPassword) {
            this.masterUserPassword = masterUserPassword;
            return this;
        }

        /**
         * Sets the value of {@link DBInstanceCloneProps#getMasterUserType}
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
         * Sets the value of {@link DBInstanceCloneProps#getMasterUserType}
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
         * Sets the value of {@link DBInstanceCloneProps#getPeriod}
         * @param period Property period: Prepaid time period.
         *               While choose by pay by month, it could be from 1 to 9. While choose pay by year, it could be from 1 to 3.
         * @return {@code this}
         */
        public Builder period(java.lang.Number period) {
            this.period = period;
            return this;
        }

        /**
         * Sets the value of {@link DBInstanceCloneProps#getPeriod}
         * @param period Property period: Prepaid time period.
         *               While choose by pay by month, it could be from 1 to 9. While choose pay by year, it could be from 1 to 3.
         * @return {@code this}
         */
        public Builder period(com.aliyun.ros.cdk.core.IResolvable period) {
            this.period = period;
            return this;
        }

        /**
         * Sets the value of {@link DBInstanceCloneProps#getPeriodType}
         * @param periodType Property periodType: Charge period for created instances.
         * @return {@code this}
         */
        public Builder periodType(java.lang.String periodType) {
            this.periodType = periodType;
            return this;
        }

        /**
         * Sets the value of {@link DBInstanceCloneProps#getPeriodType}
         * @param periodType Property periodType: Charge period for created instances.
         * @return {@code this}
         */
        public Builder periodType(com.aliyun.ros.cdk.core.IResolvable periodType) {
            this.periodType = periodType;
            return this;
        }

        /**
         * Sets the value of {@link DBInstanceCloneProps#getPort}
         * @param port Property port: The port of the database service.
         * @return {@code this}
         */
        public Builder port(java.lang.Number port) {
            this.port = port;
            return this;
        }

        /**
         * Sets the value of {@link DBInstanceCloneProps#getPort}
         * @param port Property port: The port of the database service.
         * @return {@code this}
         */
        public Builder port(com.aliyun.ros.cdk.core.IResolvable port) {
            this.port = port;
            return this;
        }

        /**
         * Sets the value of {@link DBInstanceCloneProps#getPreferredBackupPeriod}
         * @param preferredBackupPeriod Property preferredBackupPeriod: The backup period.
         *                              Separate multiple values with commas (,). The default value is the original value. Valid values:Monday Tuesday Wednesday Thursday Friday Saturday Sunday Note When the BackupPolicyMode parameter is set to DataBackupPolicy, this parameter is required.
         * @return {@code this}
         */
        public Builder preferredBackupPeriod(java.util.List<? extends java.lang.Object> preferredBackupPeriod) {
            this.preferredBackupPeriod = preferredBackupPeriod;
            return this;
        }

        /**
         * Sets the value of {@link DBInstanceCloneProps#getPreferredBackupPeriod}
         * @param preferredBackupPeriod Property preferredBackupPeriod: The backup period.
         *                              Separate multiple values with commas (,). The default value is the original value. Valid values:Monday Tuesday Wednesday Thursday Friday Saturday Sunday Note When the BackupPolicyMode parameter is set to DataBackupPolicy, this parameter is required.
         * @return {@code this}
         */
        public Builder preferredBackupPeriod(com.aliyun.ros.cdk.core.IResolvable preferredBackupPeriod) {
            this.preferredBackupPeriod = preferredBackupPeriod;
            return this;
        }

        /**
         * Sets the value of {@link DBInstanceCloneProps#getPreferredBackupTime}
         * @param preferredBackupTime Property preferredBackupTime: The time when the backup task is performed.
         *                            Format: yyyy-MM-ddZ-HH:mm:ssZ.Note When the BackupPolicyMode parameter is set to DataBackupPolicy, this parameter is required.
         * @return {@code this}
         */
        public Builder preferredBackupTime(java.lang.String preferredBackupTime) {
            this.preferredBackupTime = preferredBackupTime;
            return this;
        }

        /**
         * Sets the value of {@link DBInstanceCloneProps#getPreferredBackupTime}
         * @param preferredBackupTime Property preferredBackupTime: The time when the backup task is performed.
         *                            Format: yyyy-MM-ddZ-HH:mm:ssZ.Note When the BackupPolicyMode parameter is set to DataBackupPolicy, this parameter is required.
         * @return {@code this}
         */
        public Builder preferredBackupTime(com.aliyun.ros.cdk.core.IResolvable preferredBackupTime) {
            this.preferredBackupTime = preferredBackupTime;
            return this;
        }

        /**
         * Sets the value of {@link DBInstanceCloneProps#getPrivateIpAddress}
         * @param privateIpAddress Property privateIpAddress: The private ip for created instance.
         * @return {@code this}
         */
        public Builder privateIpAddress(java.lang.String privateIpAddress) {
            this.privateIpAddress = privateIpAddress;
            return this;
        }

        /**
         * Sets the value of {@link DBInstanceCloneProps#getPrivateIpAddress}
         * @param privateIpAddress Property privateIpAddress: The private ip for created instance.
         * @return {@code this}
         */
        public Builder privateIpAddress(com.aliyun.ros.cdk.core.IResolvable privateIpAddress) {
            this.privateIpAddress = privateIpAddress;
            return this;
        }

        /**
         * Sets the value of {@link DBInstanceCloneProps#getRestoreTable}
         * @param restoreTable Property restoreTable: Specifies whether to restore specific databases and tables.
         *                     The value 1 specifies to restore specific databases and tables.
         *                     If you do not want to restore specific databases or tables, you can choose not to specify this parameter.
         * @return {@code this}
         */
        public Builder restoreTable(java.lang.String restoreTable) {
            this.restoreTable = restoreTable;
            return this;
        }

        /**
         * Sets the value of {@link DBInstanceCloneProps#getRestoreTable}
         * @param restoreTable Property restoreTable: Specifies whether to restore specific databases and tables.
         *                     The value 1 specifies to restore specific databases and tables.
         *                     If you do not want to restore specific databases or tables, you can choose not to specify this parameter.
         * @return {@code this}
         */
        public Builder restoreTable(com.aliyun.ros.cdk.core.IResolvable restoreTable) {
            this.restoreTable = restoreTable;
            return this;
        }

        /**
         * Sets the value of {@link DBInstanceCloneProps#getRestoreTime}
         * @param restoreTime Property restoreTime: The point in time to which you want to restore the data of the original instance.
         *                    The point in time must fall within the specified log backup retention period.
         *                    The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format.
         *                    The time must be in UTC.
         * @return {@code this}
         */
        public Builder restoreTime(java.lang.String restoreTime) {
            this.restoreTime = restoreTime;
            return this;
        }

        /**
         * Sets the value of {@link DBInstanceCloneProps#getRestoreTime}
         * @param restoreTime Property restoreTime: The point in time to which you want to restore the data of the original instance.
         *                    The point in time must fall within the specified log backup retention period.
         *                    The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format.
         *                    The time must be in UTC.
         * @return {@code this}
         */
        public Builder restoreTime(com.aliyun.ros.cdk.core.IResolvable restoreTime) {
            this.restoreTime = restoreTime;
            return this;
        }

        /**
         * Sets the value of {@link DBInstanceCloneProps#getSecurityGroupId}
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
         * Sets the value of {@link DBInstanceCloneProps#getSecurityGroupId}
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
         * Sets the value of {@link DBInstanceCloneProps#getSecurityIpList}
         * @param securityIpList Property securityIpList: Security ip to access the database instance, combine with comma, 0.0.0.0/0 means no limitation.
         * @return {@code this}
         */
        public Builder securityIpList(java.lang.String securityIpList) {
            this.securityIpList = securityIpList;
            return this;
        }

        /**
         * Sets the value of {@link DBInstanceCloneProps#getSecurityIpList}
         * @param securityIpList Property securityIpList: Security ip to access the database instance, combine with comma, 0.0.0.0/0 means no limitation.
         * @return {@code this}
         */
        public Builder securityIpList(com.aliyun.ros.cdk.core.IResolvable securityIpList) {
            this.securityIpList = securityIpList;
            return this;
        }

        /**
         * Sets the value of {@link DBInstanceCloneProps#getSlaveZoneIds}
         * @param slaveZoneIds Property slaveZoneIds: List of slave zone ids can specify slave zone ids when creating the high-availability or enterprise edition instance.
         *                     Meanwhile, VSwitchId needs to pass in the corresponding vswitch id to the slave zone by order. For example, ZoneId = "zone-a" and SlaveZoneIds = ["zone-c", "zone-b"], then the VSwitchId must be "vsw-zone-a,vsw-zone-c,vsw-zone-b". Of course, you can also choose automatic allocation, for example, ZoneId = "zone-a" and SlaveZoneIds = ["Auto", "Auto"], then the VSwitchId must be "vsw-zone-a,Auto,Auto". The list contains up to 2 slave zone ids, separated by commas.
         * @return {@code this}
         */
        public Builder slaveZoneIds(com.aliyun.ros.cdk.core.IResolvable slaveZoneIds) {
            this.slaveZoneIds = slaveZoneIds;
            return this;
        }

        /**
         * Sets the value of {@link DBInstanceCloneProps#getSlaveZoneIds}
         * @param slaveZoneIds Property slaveZoneIds: List of slave zone ids can specify slave zone ids when creating the high-availability or enterprise edition instance.
         *                     Meanwhile, VSwitchId needs to pass in the corresponding vswitch id to the slave zone by order. For example, ZoneId = "zone-a" and SlaveZoneIds = ["zone-c", "zone-b"], then the VSwitchId must be "vsw-zone-a,vsw-zone-c,vsw-zone-b". Of course, you can also choose automatic allocation, for example, ZoneId = "zone-a" and SlaveZoneIds = ["Auto", "Auto"], then the VSwitchId must be "vsw-zone-a,Auto,Auto". The list contains up to 2 slave zone ids, separated by commas.
         * @return {@code this}
         */
        public Builder slaveZoneIds(java.util.List<? extends java.lang.Object> slaveZoneIds) {
            this.slaveZoneIds = slaveZoneIds;
            return this;
        }

        /**
         * Sets the value of {@link DBInstanceCloneProps#getSqlCollectorStatus}
         * @param sqlCollectorStatus Property sqlCollectorStatus: Specifies whether to enable or disable the SQL Explorer (SQL audit) feature.
         *                           Valid values:Enable | Disabled.
         * @return {@code this}
         */
        public Builder sqlCollectorStatus(java.lang.String sqlCollectorStatus) {
            this.sqlCollectorStatus = sqlCollectorStatus;
            return this;
        }

        /**
         * Sets the value of {@link DBInstanceCloneProps#getSqlCollectorStatus}
         * @param sqlCollectorStatus Property sqlCollectorStatus: Specifies whether to enable or disable the SQL Explorer (SQL audit) feature.
         *                           Valid values:Enable | Disabled.
         * @return {@code this}
         */
        public Builder sqlCollectorStatus(com.aliyun.ros.cdk.core.IResolvable sqlCollectorStatus) {
            this.sqlCollectorStatus = sqlCollectorStatus;
            return this;
        }

        /**
         * Sets the value of {@link DBInstanceCloneProps#getSslSetting}
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
         * Sets the value of {@link DBInstanceCloneProps#getSslSetting}
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
         * Sets the value of {@link DBInstanceCloneProps#getTableMeta}
         * @param tableMeta Property tableMeta: The information about the databases and tables that you want to restore.
         * @return {@code this}
         */
        public Builder tableMeta(com.aliyun.ros.cdk.core.IResolvable tableMeta) {
            this.tableMeta = tableMeta;
            return this;
        }

        /**
         * Sets the value of {@link DBInstanceCloneProps#getTableMeta}
         * @param tableMeta Property tableMeta: The information about the databases and tables that you want to restore.
         * @return {@code this}
         */
        public Builder tableMeta(java.util.List<? extends java.lang.Object> tableMeta) {
            this.tableMeta = tableMeta;
            return this;
        }

        /**
         * Sets the value of {@link DBInstanceCloneProps#getTags}
         * @param tags Property tags: The tags of an instance.
         *             You should input the information of the tag with the format of the Key-Value, such as {"key1":"value1","key2":"value2", ... "key5":"value5"}.
         *             At most 5 tags can be specified.
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
         * Sets the value of {@link DBInstanceCloneProps#getTimeoutInMinutes}
         * @param timeoutInMinutes Property timeoutInMinutes: The timeout period for creating the clone instance resource.
         *                         Unit: Minute. Default: 120.
         * @return {@code this}
         */
        public Builder timeoutInMinutes(java.lang.Number timeoutInMinutes) {
            this.timeoutInMinutes = timeoutInMinutes;
            return this;
        }

        /**
         * Sets the value of {@link DBInstanceCloneProps#getTimeoutInMinutes}
         * @param timeoutInMinutes Property timeoutInMinutes: The timeout period for creating the clone instance resource.
         *                         Unit: Minute. Default: 120.
         * @return {@code this}
         */
        public Builder timeoutInMinutes(com.aliyun.ros.cdk.core.IResolvable timeoutInMinutes) {
            this.timeoutInMinutes = timeoutInMinutes;
            return this;
        }

        /**
         * Sets the value of {@link DBInstanceCloneProps#getVpcId}
         * @param vpcId Property vpcId: The VPC id of created database instance.
         *              For VPC network, the property is required.
         * @return {@code this}
         */
        public Builder vpcId(java.lang.String vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link DBInstanceCloneProps#getVpcId}
         * @param vpcId Property vpcId: The VPC id of created database instance.
         *              For VPC network, the property is required.
         * @return {@code this}
         */
        public Builder vpcId(com.aliyun.ros.cdk.core.IResolvable vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link DBInstanceCloneProps#getVSwitchId}
         * @param vSwitchId Property vSwitchId: The vSwitch id of created instance.
         *                  For VPC network, the property is required.
         * @return {@code this}
         */
        public Builder vSwitchId(java.lang.String vSwitchId) {
            this.vSwitchId = vSwitchId;
            return this;
        }

        /**
         * Sets the value of {@link DBInstanceCloneProps#getVSwitchId}
         * @param vSwitchId Property vSwitchId: The vSwitch id of created instance.
         *                  For VPC network, the property is required.
         * @return {@code this}
         */
        public Builder vSwitchId(com.aliyun.ros.cdk.core.IResolvable vSwitchId) {
            this.vSwitchId = vSwitchId;
            return this;
        }

        /**
         * Sets the value of {@link DBInstanceCloneProps#getZoneId}
         * @param zoneId Property zoneId: selected zone to create database instance.
         *               You cannot set the ZoneId parameter if the MultiAZ parameter is set to true.
         * @return {@code this}
         */
        public Builder zoneId(java.lang.String zoneId) {
            this.zoneId = zoneId;
            return this;
        }

        /**
         * Sets the value of {@link DBInstanceCloneProps#getZoneId}
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
         * @return a new instance of {@link DBInstanceCloneProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public DBInstanceCloneProps build() {
            return new Jsii$Proxy(dbInstanceId, payType, allocatePublicConnection, backupId, backupRetentionPeriod, backupType, category, connectionStringPrefix, connectionStringType, dbInstanceClass, dbInstanceDescription, dbInstanceStorage, dbInstanceStorageType, dbMappings, dbNames, dedicatedHostGroupId, instanceNetworkType, maintainTime, masterUsername, masterUserPassword, masterUserType, period, periodType, port, preferredBackupPeriod, preferredBackupTime, privateIpAddress, restoreTable, restoreTime, securityGroupId, securityIpList, slaveZoneIds, sqlCollectorStatus, sslSetting, tableMeta, tags, timeoutInMinutes, vpcId, vSwitchId, zoneId);
        }
    }

    /**
     * An implementation for {@link DBInstanceCloneProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements DBInstanceCloneProps {
        private final java.lang.Object dbInstanceId;
        private final java.lang.Object payType;
        private final java.lang.Object allocatePublicConnection;
        private final java.lang.Object backupId;
        private final java.lang.Object backupRetentionPeriod;
        private final java.lang.Object backupType;
        private final java.lang.Object category;
        private final java.lang.Object connectionStringPrefix;
        private final java.lang.Object connectionStringType;
        private final java.lang.Object dbInstanceClass;
        private final java.lang.Object dbInstanceDescription;
        private final java.lang.Object dbInstanceStorage;
        private final java.lang.Object dbInstanceStorageType;
        private final java.lang.Object dbMappings;
        private final java.lang.Object dbNames;
        private final java.lang.Object dedicatedHostGroupId;
        private final java.lang.Object instanceNetworkType;
        private final java.lang.Object maintainTime;
        private final java.lang.Object masterUsername;
        private final java.lang.Object masterUserPassword;
        private final java.lang.Object masterUserType;
        private final java.lang.Object period;
        private final java.lang.Object periodType;
        private final java.lang.Object port;
        private final java.lang.Object preferredBackupPeriod;
        private final java.lang.Object preferredBackupTime;
        private final java.lang.Object privateIpAddress;
        private final java.lang.Object restoreTable;
        private final java.lang.Object restoreTime;
        private final java.lang.Object securityGroupId;
        private final java.lang.Object securityIpList;
        private final java.lang.Object slaveZoneIds;
        private final java.lang.Object sqlCollectorStatus;
        private final java.lang.Object sslSetting;
        private final java.lang.Object tableMeta;
        private final java.util.Map<java.lang.String, java.lang.Object> tags;
        private final java.lang.Object timeoutInMinutes;
        private final java.lang.Object vpcId;
        private final java.lang.Object vSwitchId;
        private final java.lang.Object zoneId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.dbInstanceId = software.amazon.jsii.Kernel.get(this, "dbInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.payType = software.amazon.jsii.Kernel.get(this, "payType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.allocatePublicConnection = software.amazon.jsii.Kernel.get(this, "allocatePublicConnection", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.backupId = software.amazon.jsii.Kernel.get(this, "backupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.backupRetentionPeriod = software.amazon.jsii.Kernel.get(this, "backupRetentionPeriod", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.backupType = software.amazon.jsii.Kernel.get(this, "backupType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.category = software.amazon.jsii.Kernel.get(this, "category", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.connectionStringPrefix = software.amazon.jsii.Kernel.get(this, "connectionStringPrefix", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.connectionStringType = software.amazon.jsii.Kernel.get(this, "connectionStringType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dbInstanceClass = software.amazon.jsii.Kernel.get(this, "dbInstanceClass", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dbInstanceDescription = software.amazon.jsii.Kernel.get(this, "dbInstanceDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dbInstanceStorage = software.amazon.jsii.Kernel.get(this, "dbInstanceStorage", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dbInstanceStorageType = software.amazon.jsii.Kernel.get(this, "dbInstanceStorageType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dbMappings = software.amazon.jsii.Kernel.get(this, "dbMappings", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dbNames = software.amazon.jsii.Kernel.get(this, "dbNames", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dedicatedHostGroupId = software.amazon.jsii.Kernel.get(this, "dedicatedHostGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.instanceNetworkType = software.amazon.jsii.Kernel.get(this, "instanceNetworkType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.maintainTime = software.amazon.jsii.Kernel.get(this, "maintainTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.masterUsername = software.amazon.jsii.Kernel.get(this, "masterUsername", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.masterUserPassword = software.amazon.jsii.Kernel.get(this, "masterUserPassword", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.masterUserType = software.amazon.jsii.Kernel.get(this, "masterUserType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.period = software.amazon.jsii.Kernel.get(this, "period", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.periodType = software.amazon.jsii.Kernel.get(this, "periodType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.port = software.amazon.jsii.Kernel.get(this, "port", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.preferredBackupPeriod = software.amazon.jsii.Kernel.get(this, "preferredBackupPeriod", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.preferredBackupTime = software.amazon.jsii.Kernel.get(this, "preferredBackupTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.privateIpAddress = software.amazon.jsii.Kernel.get(this, "privateIpAddress", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.restoreTable = software.amazon.jsii.Kernel.get(this, "restoreTable", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.restoreTime = software.amazon.jsii.Kernel.get(this, "restoreTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.securityGroupId = software.amazon.jsii.Kernel.get(this, "securityGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.securityIpList = software.amazon.jsii.Kernel.get(this, "securityIpList", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.slaveZoneIds = software.amazon.jsii.Kernel.get(this, "slaveZoneIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.sqlCollectorStatus = software.amazon.jsii.Kernel.get(this, "sqlCollectorStatus", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.sslSetting = software.amazon.jsii.Kernel.get(this, "sslSetting", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tableMeta = software.amazon.jsii.Kernel.get(this, "tableMeta", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tags = software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class)));
            this.timeoutInMinutes = software.amazon.jsii.Kernel.get(this, "timeoutInMinutes", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vpcId = software.amazon.jsii.Kernel.get(this, "vpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vSwitchId = software.amazon.jsii.Kernel.get(this, "vSwitchId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.zoneId = software.amazon.jsii.Kernel.get(this, "zoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        @SuppressWarnings("unchecked")
        protected Jsii$Proxy(final java.lang.Object dbInstanceId, final java.lang.Object payType, final java.lang.Object allocatePublicConnection, final java.lang.Object backupId, final java.lang.Object backupRetentionPeriod, final java.lang.Object backupType, final java.lang.Object category, final java.lang.Object connectionStringPrefix, final java.lang.Object connectionStringType, final java.lang.Object dbInstanceClass, final java.lang.Object dbInstanceDescription, final java.lang.Object dbInstanceStorage, final java.lang.Object dbInstanceStorageType, final java.lang.Object dbMappings, final java.lang.Object dbNames, final java.lang.Object dedicatedHostGroupId, final java.lang.Object instanceNetworkType, final java.lang.Object maintainTime, final java.lang.Object masterUsername, final java.lang.Object masterUserPassword, final java.lang.Object masterUserType, final java.lang.Object period, final java.lang.Object periodType, final java.lang.Object port, final java.lang.Object preferredBackupPeriod, final java.lang.Object preferredBackupTime, final java.lang.Object privateIpAddress, final java.lang.Object restoreTable, final java.lang.Object restoreTime, final java.lang.Object securityGroupId, final java.lang.Object securityIpList, final java.lang.Object slaveZoneIds, final java.lang.Object sqlCollectorStatus, final java.lang.Object sslSetting, final java.lang.Object tableMeta, final java.util.Map<java.lang.String, ? extends java.lang.Object> tags, final java.lang.Object timeoutInMinutes, final java.lang.Object vpcId, final java.lang.Object vSwitchId, final java.lang.Object zoneId) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.dbInstanceId = java.util.Objects.requireNonNull(dbInstanceId, "dbInstanceId is required");
            this.payType = java.util.Objects.requireNonNull(payType, "payType is required");
            this.allocatePublicConnection = allocatePublicConnection;
            this.backupId = backupId;
            this.backupRetentionPeriod = backupRetentionPeriod;
            this.backupType = backupType;
            this.category = category;
            this.connectionStringPrefix = connectionStringPrefix;
            this.connectionStringType = connectionStringType;
            this.dbInstanceClass = dbInstanceClass;
            this.dbInstanceDescription = dbInstanceDescription;
            this.dbInstanceStorage = dbInstanceStorage;
            this.dbInstanceStorageType = dbInstanceStorageType;
            this.dbMappings = dbMappings;
            this.dbNames = dbNames;
            this.dedicatedHostGroupId = dedicatedHostGroupId;
            this.instanceNetworkType = instanceNetworkType;
            this.maintainTime = maintainTime;
            this.masterUsername = masterUsername;
            this.masterUserPassword = masterUserPassword;
            this.masterUserType = masterUserType;
            this.period = period;
            this.periodType = periodType;
            this.port = port;
            this.preferredBackupPeriod = preferredBackupPeriod;
            this.preferredBackupTime = preferredBackupTime;
            this.privateIpAddress = privateIpAddress;
            this.restoreTable = restoreTable;
            this.restoreTime = restoreTime;
            this.securityGroupId = securityGroupId;
            this.securityIpList = securityIpList;
            this.slaveZoneIds = slaveZoneIds;
            this.sqlCollectorStatus = sqlCollectorStatus;
            this.sslSetting = sslSetting;
            this.tableMeta = tableMeta;
            this.tags = (java.util.Map<java.lang.String, java.lang.Object>)tags;
            this.timeoutInMinutes = timeoutInMinutes;
            this.vpcId = vpcId;
            this.vSwitchId = vSwitchId;
            this.zoneId = zoneId;
        }

        @Override
        public final java.lang.Object getDbInstanceId() {
            return this.dbInstanceId;
        }

        @Override
        public final java.lang.Object getPayType() {
            return this.payType;
        }

        @Override
        public final java.lang.Object getAllocatePublicConnection() {
            return this.allocatePublicConnection;
        }

        @Override
        public final java.lang.Object getBackupId() {
            return this.backupId;
        }

        @Override
        public final java.lang.Object getBackupRetentionPeriod() {
            return this.backupRetentionPeriod;
        }

        @Override
        public final java.lang.Object getBackupType() {
            return this.backupType;
        }

        @Override
        public final java.lang.Object getCategory() {
            return this.category;
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
        public final java.lang.Object getDbInstanceClass() {
            return this.dbInstanceClass;
        }

        @Override
        public final java.lang.Object getDbInstanceDescription() {
            return this.dbInstanceDescription;
        }

        @Override
        public final java.lang.Object getDbInstanceStorage() {
            return this.dbInstanceStorage;
        }

        @Override
        public final java.lang.Object getDbInstanceStorageType() {
            return this.dbInstanceStorageType;
        }

        @Override
        public final java.lang.Object getDbMappings() {
            return this.dbMappings;
        }

        @Override
        public final java.lang.Object getDbNames() {
            return this.dbNames;
        }

        @Override
        public final java.lang.Object getDedicatedHostGroupId() {
            return this.dedicatedHostGroupId;
        }

        @Override
        public final java.lang.Object getInstanceNetworkType() {
            return this.instanceNetworkType;
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
        public final java.lang.Object getPeriod() {
            return this.period;
        }

        @Override
        public final java.lang.Object getPeriodType() {
            return this.periodType;
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
        public final java.lang.Object getRestoreTable() {
            return this.restoreTable;
        }

        @Override
        public final java.lang.Object getRestoreTime() {
            return this.restoreTime;
        }

        @Override
        public final java.lang.Object getSecurityGroupId() {
            return this.securityGroupId;
        }

        @Override
        public final java.lang.Object getSecurityIpList() {
            return this.securityIpList;
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
        public final java.lang.Object getTableMeta() {
            return this.tableMeta;
        }

        @Override
        public final java.util.Map<java.lang.String, java.lang.Object> getTags() {
            return this.tags;
        }

        @Override
        public final java.lang.Object getTimeoutInMinutes() {
            return this.timeoutInMinutes;
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

            data.set("dbInstanceId", om.valueToTree(this.getDbInstanceId()));
            data.set("payType", om.valueToTree(this.getPayType()));
            if (this.getAllocatePublicConnection() != null) {
                data.set("allocatePublicConnection", om.valueToTree(this.getAllocatePublicConnection()));
            }
            if (this.getBackupId() != null) {
                data.set("backupId", om.valueToTree(this.getBackupId()));
            }
            if (this.getBackupRetentionPeriod() != null) {
                data.set("backupRetentionPeriod", om.valueToTree(this.getBackupRetentionPeriod()));
            }
            if (this.getBackupType() != null) {
                data.set("backupType", om.valueToTree(this.getBackupType()));
            }
            if (this.getCategory() != null) {
                data.set("category", om.valueToTree(this.getCategory()));
            }
            if (this.getConnectionStringPrefix() != null) {
                data.set("connectionStringPrefix", om.valueToTree(this.getConnectionStringPrefix()));
            }
            if (this.getConnectionStringType() != null) {
                data.set("connectionStringType", om.valueToTree(this.getConnectionStringType()));
            }
            if (this.getDbInstanceClass() != null) {
                data.set("dbInstanceClass", om.valueToTree(this.getDbInstanceClass()));
            }
            if (this.getDbInstanceDescription() != null) {
                data.set("dbInstanceDescription", om.valueToTree(this.getDbInstanceDescription()));
            }
            if (this.getDbInstanceStorage() != null) {
                data.set("dbInstanceStorage", om.valueToTree(this.getDbInstanceStorage()));
            }
            if (this.getDbInstanceStorageType() != null) {
                data.set("dbInstanceStorageType", om.valueToTree(this.getDbInstanceStorageType()));
            }
            if (this.getDbMappings() != null) {
                data.set("dbMappings", om.valueToTree(this.getDbMappings()));
            }
            if (this.getDbNames() != null) {
                data.set("dbNames", om.valueToTree(this.getDbNames()));
            }
            if (this.getDedicatedHostGroupId() != null) {
                data.set("dedicatedHostGroupId", om.valueToTree(this.getDedicatedHostGroupId()));
            }
            if (this.getInstanceNetworkType() != null) {
                data.set("instanceNetworkType", om.valueToTree(this.getInstanceNetworkType()));
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
            if (this.getPeriod() != null) {
                data.set("period", om.valueToTree(this.getPeriod()));
            }
            if (this.getPeriodType() != null) {
                data.set("periodType", om.valueToTree(this.getPeriodType()));
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
            if (this.getRestoreTable() != null) {
                data.set("restoreTable", om.valueToTree(this.getRestoreTable()));
            }
            if (this.getRestoreTime() != null) {
                data.set("restoreTime", om.valueToTree(this.getRestoreTime()));
            }
            if (this.getSecurityGroupId() != null) {
                data.set("securityGroupId", om.valueToTree(this.getSecurityGroupId()));
            }
            if (this.getSecurityIpList() != null) {
                data.set("securityIpList", om.valueToTree(this.getSecurityIpList()));
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
            if (this.getTableMeta() != null) {
                data.set("tableMeta", om.valueToTree(this.getTableMeta()));
            }
            if (this.getTags() != null) {
                data.set("tags", om.valueToTree(this.getTags()));
            }
            if (this.getTimeoutInMinutes() != null) {
                data.set("timeoutInMinutes", om.valueToTree(this.getTimeoutInMinutes()));
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
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-rds.DBInstanceCloneProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            DBInstanceCloneProps.Jsii$Proxy that = (DBInstanceCloneProps.Jsii$Proxy) o;

            if (!dbInstanceId.equals(that.dbInstanceId)) return false;
            if (!payType.equals(that.payType)) return false;
            if (this.allocatePublicConnection != null ? !this.allocatePublicConnection.equals(that.allocatePublicConnection) : that.allocatePublicConnection != null) return false;
            if (this.backupId != null ? !this.backupId.equals(that.backupId) : that.backupId != null) return false;
            if (this.backupRetentionPeriod != null ? !this.backupRetentionPeriod.equals(that.backupRetentionPeriod) : that.backupRetentionPeriod != null) return false;
            if (this.backupType != null ? !this.backupType.equals(that.backupType) : that.backupType != null) return false;
            if (this.category != null ? !this.category.equals(that.category) : that.category != null) return false;
            if (this.connectionStringPrefix != null ? !this.connectionStringPrefix.equals(that.connectionStringPrefix) : that.connectionStringPrefix != null) return false;
            if (this.connectionStringType != null ? !this.connectionStringType.equals(that.connectionStringType) : that.connectionStringType != null) return false;
            if (this.dbInstanceClass != null ? !this.dbInstanceClass.equals(that.dbInstanceClass) : that.dbInstanceClass != null) return false;
            if (this.dbInstanceDescription != null ? !this.dbInstanceDescription.equals(that.dbInstanceDescription) : that.dbInstanceDescription != null) return false;
            if (this.dbInstanceStorage != null ? !this.dbInstanceStorage.equals(that.dbInstanceStorage) : that.dbInstanceStorage != null) return false;
            if (this.dbInstanceStorageType != null ? !this.dbInstanceStorageType.equals(that.dbInstanceStorageType) : that.dbInstanceStorageType != null) return false;
            if (this.dbMappings != null ? !this.dbMappings.equals(that.dbMappings) : that.dbMappings != null) return false;
            if (this.dbNames != null ? !this.dbNames.equals(that.dbNames) : that.dbNames != null) return false;
            if (this.dedicatedHostGroupId != null ? !this.dedicatedHostGroupId.equals(that.dedicatedHostGroupId) : that.dedicatedHostGroupId != null) return false;
            if (this.instanceNetworkType != null ? !this.instanceNetworkType.equals(that.instanceNetworkType) : that.instanceNetworkType != null) return false;
            if (this.maintainTime != null ? !this.maintainTime.equals(that.maintainTime) : that.maintainTime != null) return false;
            if (this.masterUsername != null ? !this.masterUsername.equals(that.masterUsername) : that.masterUsername != null) return false;
            if (this.masterUserPassword != null ? !this.masterUserPassword.equals(that.masterUserPassword) : that.masterUserPassword != null) return false;
            if (this.masterUserType != null ? !this.masterUserType.equals(that.masterUserType) : that.masterUserType != null) return false;
            if (this.period != null ? !this.period.equals(that.period) : that.period != null) return false;
            if (this.periodType != null ? !this.periodType.equals(that.periodType) : that.periodType != null) return false;
            if (this.port != null ? !this.port.equals(that.port) : that.port != null) return false;
            if (this.preferredBackupPeriod != null ? !this.preferredBackupPeriod.equals(that.preferredBackupPeriod) : that.preferredBackupPeriod != null) return false;
            if (this.preferredBackupTime != null ? !this.preferredBackupTime.equals(that.preferredBackupTime) : that.preferredBackupTime != null) return false;
            if (this.privateIpAddress != null ? !this.privateIpAddress.equals(that.privateIpAddress) : that.privateIpAddress != null) return false;
            if (this.restoreTable != null ? !this.restoreTable.equals(that.restoreTable) : that.restoreTable != null) return false;
            if (this.restoreTime != null ? !this.restoreTime.equals(that.restoreTime) : that.restoreTime != null) return false;
            if (this.securityGroupId != null ? !this.securityGroupId.equals(that.securityGroupId) : that.securityGroupId != null) return false;
            if (this.securityIpList != null ? !this.securityIpList.equals(that.securityIpList) : that.securityIpList != null) return false;
            if (this.slaveZoneIds != null ? !this.slaveZoneIds.equals(that.slaveZoneIds) : that.slaveZoneIds != null) return false;
            if (this.sqlCollectorStatus != null ? !this.sqlCollectorStatus.equals(that.sqlCollectorStatus) : that.sqlCollectorStatus != null) return false;
            if (this.sslSetting != null ? !this.sslSetting.equals(that.sslSetting) : that.sslSetting != null) return false;
            if (this.tableMeta != null ? !this.tableMeta.equals(that.tableMeta) : that.tableMeta != null) return false;
            if (this.tags != null ? !this.tags.equals(that.tags) : that.tags != null) return false;
            if (this.timeoutInMinutes != null ? !this.timeoutInMinutes.equals(that.timeoutInMinutes) : that.timeoutInMinutes != null) return false;
            if (this.vpcId != null ? !this.vpcId.equals(that.vpcId) : that.vpcId != null) return false;
            if (this.vSwitchId != null ? !this.vSwitchId.equals(that.vSwitchId) : that.vSwitchId != null) return false;
            return this.zoneId != null ? this.zoneId.equals(that.zoneId) : that.zoneId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.dbInstanceId.hashCode();
            result = 31 * result + (this.payType.hashCode());
            result = 31 * result + (this.allocatePublicConnection != null ? this.allocatePublicConnection.hashCode() : 0);
            result = 31 * result + (this.backupId != null ? this.backupId.hashCode() : 0);
            result = 31 * result + (this.backupRetentionPeriod != null ? this.backupRetentionPeriod.hashCode() : 0);
            result = 31 * result + (this.backupType != null ? this.backupType.hashCode() : 0);
            result = 31 * result + (this.category != null ? this.category.hashCode() : 0);
            result = 31 * result + (this.connectionStringPrefix != null ? this.connectionStringPrefix.hashCode() : 0);
            result = 31 * result + (this.connectionStringType != null ? this.connectionStringType.hashCode() : 0);
            result = 31 * result + (this.dbInstanceClass != null ? this.dbInstanceClass.hashCode() : 0);
            result = 31 * result + (this.dbInstanceDescription != null ? this.dbInstanceDescription.hashCode() : 0);
            result = 31 * result + (this.dbInstanceStorage != null ? this.dbInstanceStorage.hashCode() : 0);
            result = 31 * result + (this.dbInstanceStorageType != null ? this.dbInstanceStorageType.hashCode() : 0);
            result = 31 * result + (this.dbMappings != null ? this.dbMappings.hashCode() : 0);
            result = 31 * result + (this.dbNames != null ? this.dbNames.hashCode() : 0);
            result = 31 * result + (this.dedicatedHostGroupId != null ? this.dedicatedHostGroupId.hashCode() : 0);
            result = 31 * result + (this.instanceNetworkType != null ? this.instanceNetworkType.hashCode() : 0);
            result = 31 * result + (this.maintainTime != null ? this.maintainTime.hashCode() : 0);
            result = 31 * result + (this.masterUsername != null ? this.masterUsername.hashCode() : 0);
            result = 31 * result + (this.masterUserPassword != null ? this.masterUserPassword.hashCode() : 0);
            result = 31 * result + (this.masterUserType != null ? this.masterUserType.hashCode() : 0);
            result = 31 * result + (this.period != null ? this.period.hashCode() : 0);
            result = 31 * result + (this.periodType != null ? this.periodType.hashCode() : 0);
            result = 31 * result + (this.port != null ? this.port.hashCode() : 0);
            result = 31 * result + (this.preferredBackupPeriod != null ? this.preferredBackupPeriod.hashCode() : 0);
            result = 31 * result + (this.preferredBackupTime != null ? this.preferredBackupTime.hashCode() : 0);
            result = 31 * result + (this.privateIpAddress != null ? this.privateIpAddress.hashCode() : 0);
            result = 31 * result + (this.restoreTable != null ? this.restoreTable.hashCode() : 0);
            result = 31 * result + (this.restoreTime != null ? this.restoreTime.hashCode() : 0);
            result = 31 * result + (this.securityGroupId != null ? this.securityGroupId.hashCode() : 0);
            result = 31 * result + (this.securityIpList != null ? this.securityIpList.hashCode() : 0);
            result = 31 * result + (this.slaveZoneIds != null ? this.slaveZoneIds.hashCode() : 0);
            result = 31 * result + (this.sqlCollectorStatus != null ? this.sqlCollectorStatus.hashCode() : 0);
            result = 31 * result + (this.sslSetting != null ? this.sslSetting.hashCode() : 0);
            result = 31 * result + (this.tableMeta != null ? this.tableMeta.hashCode() : 0);
            result = 31 * result + (this.tags != null ? this.tags.hashCode() : 0);
            result = 31 * result + (this.timeoutInMinutes != null ? this.timeoutInMinutes.hashCode() : 0);
            result = 31 * result + (this.vpcId != null ? this.vpcId.hashCode() : 0);
            result = 31 * result + (this.vSwitchId != null ? this.vSwitchId.hashCode() : 0);
            result = 31 * result + (this.zoneId != null ? this.zoneId.hashCode() : 0);
            return result;
        }
    }
}
