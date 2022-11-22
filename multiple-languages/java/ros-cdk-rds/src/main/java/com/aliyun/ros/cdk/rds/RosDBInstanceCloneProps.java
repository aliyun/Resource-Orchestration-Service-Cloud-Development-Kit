package com.aliyun.ros.cdk.rds;

/**
 * Properties for defining a `ALIYUN::RDS::DBInstanceClone`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.71.0 (build f1f58ae)", date = "2022-11-22T06:16:30.075Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.rds.$Module.class, fqn = "@alicloud/ros-cdk-rds.RosDBInstanceCloneProps")
@software.amazon.jsii.Jsii.Proxy(RosDBInstanceCloneProps.Jsii$Proxy.class)
public interface RosDBInstanceCloneProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDbInstanceId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getPayType();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAllocatePublicConnection() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getBackupId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getBackupRetentionPeriod() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getBackupType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCategory() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getConnectionStringPrefix() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getConnectionStringType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDbInstanceClass() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDbInstanceDescription() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDbInstanceStorage() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDbInstanceStorageType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDbMappings() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDbNames() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDedicatedHostGroupId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInstanceNetworkType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getMaintainTime() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getMasterUsername() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getMasterUserPassword() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getMasterUserType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPeriod() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPeriodType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPort() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPreferredBackupPeriod() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPreferredBackupTime() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPrivateIpAddress() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRestoreTable() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRestoreTime() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSecurityGroupId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSecurityIpList() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSlaveZoneIds() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSqlCollectorStatus() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSslSetting() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTableMeta() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.Object> getTags() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTimeoutInMinutes() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getVpcId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getVSwitchId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getZoneId() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosDBInstanceCloneProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosDBInstanceCloneProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosDBInstanceCloneProps> {
        java.lang.Object dbInstanceId;
        java.lang.Object payType;
        java.lang.Object allocatePublicConnection;
        java.lang.Object backupId;
        java.lang.Object backupRetentionPeriod;
        java.lang.Object backupType;
        java.lang.Object category;
        java.lang.Object connectionStringPrefix;
        java.lang.Object connectionStringType;
        java.lang.Object dbInstanceClass;
        java.lang.Object dbInstanceDescription;
        java.lang.Object dbInstanceStorage;
        java.lang.Object dbInstanceStorageType;
        java.lang.Object dbMappings;
        java.lang.Object dbNames;
        java.lang.Object dedicatedHostGroupId;
        java.lang.Object instanceNetworkType;
        java.lang.Object maintainTime;
        java.lang.Object masterUsername;
        java.lang.Object masterUserPassword;
        java.lang.Object masterUserType;
        java.lang.Object period;
        java.lang.Object periodType;
        java.lang.Object port;
        java.lang.Object preferredBackupPeriod;
        java.lang.Object preferredBackupTime;
        java.lang.Object privateIpAddress;
        java.lang.Object restoreTable;
        java.lang.Object restoreTime;
        java.lang.Object securityGroupId;
        java.lang.Object securityIpList;
        java.lang.Object slaveZoneIds;
        java.lang.Object sqlCollectorStatus;
        java.lang.Object sslSetting;
        java.lang.Object tableMeta;
        java.util.Map<java.lang.String, java.lang.Object> tags;
        java.lang.Object timeoutInMinutes;
        java.lang.Object vpcId;
        java.lang.Object vSwitchId;
        java.lang.Object zoneId;

        /**
         * Sets the value of {@link RosDBInstanceCloneProps#getDbInstanceId}
         * @param dbInstanceId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder dbInstanceId(java.lang.String dbInstanceId) {
            this.dbInstanceId = dbInstanceId;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceCloneProps#getDbInstanceId}
         * @param dbInstanceId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder dbInstanceId(com.aliyun.ros.cdk.core.IResolvable dbInstanceId) {
            this.dbInstanceId = dbInstanceId;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceCloneProps#getPayType}
         * @param payType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder payType(java.lang.String payType) {
            this.payType = payType;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceCloneProps#getPayType}
         * @param payType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder payType(com.aliyun.ros.cdk.core.IResolvable payType) {
            this.payType = payType;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceCloneProps#getAllocatePublicConnection}
         * @param allocatePublicConnection the value to be set.
         * @return {@code this}
         */
        public Builder allocatePublicConnection(java.lang.Boolean allocatePublicConnection) {
            this.allocatePublicConnection = allocatePublicConnection;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceCloneProps#getAllocatePublicConnection}
         * @param allocatePublicConnection the value to be set.
         * @return {@code this}
         */
        public Builder allocatePublicConnection(com.aliyun.ros.cdk.core.IResolvable allocatePublicConnection) {
            this.allocatePublicConnection = allocatePublicConnection;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceCloneProps#getBackupId}
         * @param backupId the value to be set.
         * @return {@code this}
         */
        public Builder backupId(java.lang.String backupId) {
            this.backupId = backupId;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceCloneProps#getBackupId}
         * @param backupId the value to be set.
         * @return {@code this}
         */
        public Builder backupId(com.aliyun.ros.cdk.core.IResolvable backupId) {
            this.backupId = backupId;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceCloneProps#getBackupRetentionPeriod}
         * @param backupRetentionPeriod the value to be set.
         * @return {@code this}
         */
        public Builder backupRetentionPeriod(java.lang.Number backupRetentionPeriod) {
            this.backupRetentionPeriod = backupRetentionPeriod;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceCloneProps#getBackupRetentionPeriod}
         * @param backupRetentionPeriod the value to be set.
         * @return {@code this}
         */
        public Builder backupRetentionPeriod(com.aliyun.ros.cdk.core.IResolvable backupRetentionPeriod) {
            this.backupRetentionPeriod = backupRetentionPeriod;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceCloneProps#getBackupType}
         * @param backupType the value to be set.
         * @return {@code this}
         */
        public Builder backupType(java.lang.String backupType) {
            this.backupType = backupType;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceCloneProps#getBackupType}
         * @param backupType the value to be set.
         * @return {@code this}
         */
        public Builder backupType(com.aliyun.ros.cdk.core.IResolvable backupType) {
            this.backupType = backupType;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceCloneProps#getCategory}
         * @param category the value to be set.
         * @return {@code this}
         */
        public Builder category(java.lang.String category) {
            this.category = category;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceCloneProps#getCategory}
         * @param category the value to be set.
         * @return {@code this}
         */
        public Builder category(com.aliyun.ros.cdk.core.IResolvable category) {
            this.category = category;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceCloneProps#getConnectionStringPrefix}
         * @param connectionStringPrefix the value to be set.
         * @return {@code this}
         */
        public Builder connectionStringPrefix(java.lang.String connectionStringPrefix) {
            this.connectionStringPrefix = connectionStringPrefix;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceCloneProps#getConnectionStringPrefix}
         * @param connectionStringPrefix the value to be set.
         * @return {@code this}
         */
        public Builder connectionStringPrefix(com.aliyun.ros.cdk.core.IResolvable connectionStringPrefix) {
            this.connectionStringPrefix = connectionStringPrefix;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceCloneProps#getConnectionStringType}
         * @param connectionStringType the value to be set.
         * @return {@code this}
         */
        public Builder connectionStringType(java.lang.String connectionStringType) {
            this.connectionStringType = connectionStringType;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceCloneProps#getConnectionStringType}
         * @param connectionStringType the value to be set.
         * @return {@code this}
         */
        public Builder connectionStringType(com.aliyun.ros.cdk.core.IResolvable connectionStringType) {
            this.connectionStringType = connectionStringType;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceCloneProps#getDbInstanceClass}
         * @param dbInstanceClass the value to be set.
         * @return {@code this}
         */
        public Builder dbInstanceClass(java.lang.String dbInstanceClass) {
            this.dbInstanceClass = dbInstanceClass;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceCloneProps#getDbInstanceClass}
         * @param dbInstanceClass the value to be set.
         * @return {@code this}
         */
        public Builder dbInstanceClass(com.aliyun.ros.cdk.core.IResolvable dbInstanceClass) {
            this.dbInstanceClass = dbInstanceClass;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceCloneProps#getDbInstanceDescription}
         * @param dbInstanceDescription the value to be set.
         * @return {@code this}
         */
        public Builder dbInstanceDescription(java.lang.String dbInstanceDescription) {
            this.dbInstanceDescription = dbInstanceDescription;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceCloneProps#getDbInstanceDescription}
         * @param dbInstanceDescription the value to be set.
         * @return {@code this}
         */
        public Builder dbInstanceDescription(com.aliyun.ros.cdk.core.IResolvable dbInstanceDescription) {
            this.dbInstanceDescription = dbInstanceDescription;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceCloneProps#getDbInstanceStorage}
         * @param dbInstanceStorage the value to be set.
         * @return {@code this}
         */
        public Builder dbInstanceStorage(java.lang.Number dbInstanceStorage) {
            this.dbInstanceStorage = dbInstanceStorage;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceCloneProps#getDbInstanceStorage}
         * @param dbInstanceStorage the value to be set.
         * @return {@code this}
         */
        public Builder dbInstanceStorage(com.aliyun.ros.cdk.core.IResolvable dbInstanceStorage) {
            this.dbInstanceStorage = dbInstanceStorage;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceCloneProps#getDbInstanceStorageType}
         * @param dbInstanceStorageType the value to be set.
         * @return {@code this}
         */
        public Builder dbInstanceStorageType(java.lang.String dbInstanceStorageType) {
            this.dbInstanceStorageType = dbInstanceStorageType;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceCloneProps#getDbInstanceStorageType}
         * @param dbInstanceStorageType the value to be set.
         * @return {@code this}
         */
        public Builder dbInstanceStorageType(com.aliyun.ros.cdk.core.IResolvable dbInstanceStorageType) {
            this.dbInstanceStorageType = dbInstanceStorageType;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceCloneProps#getDbMappings}
         * @param dbMappings the value to be set.
         * @return {@code this}
         */
        public Builder dbMappings(com.aliyun.ros.cdk.core.IResolvable dbMappings) {
            this.dbMappings = dbMappings;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceCloneProps#getDbMappings}
         * @param dbMappings the value to be set.
         * @return {@code this}
         */
        public Builder dbMappings(java.util.List<? extends java.lang.Object> dbMappings) {
            this.dbMappings = dbMappings;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceCloneProps#getDbNames}
         * @param dbNames the value to be set.
         * @return {@code this}
         */
        public Builder dbNames(java.lang.String dbNames) {
            this.dbNames = dbNames;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceCloneProps#getDbNames}
         * @param dbNames the value to be set.
         * @return {@code this}
         */
        public Builder dbNames(com.aliyun.ros.cdk.core.IResolvable dbNames) {
            this.dbNames = dbNames;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceCloneProps#getDedicatedHostGroupId}
         * @param dedicatedHostGroupId the value to be set.
         * @return {@code this}
         */
        public Builder dedicatedHostGroupId(java.lang.String dedicatedHostGroupId) {
            this.dedicatedHostGroupId = dedicatedHostGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceCloneProps#getDedicatedHostGroupId}
         * @param dedicatedHostGroupId the value to be set.
         * @return {@code this}
         */
        public Builder dedicatedHostGroupId(com.aliyun.ros.cdk.core.IResolvable dedicatedHostGroupId) {
            this.dedicatedHostGroupId = dedicatedHostGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceCloneProps#getInstanceNetworkType}
         * @param instanceNetworkType the value to be set.
         * @return {@code this}
         */
        public Builder instanceNetworkType(java.lang.String instanceNetworkType) {
            this.instanceNetworkType = instanceNetworkType;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceCloneProps#getInstanceNetworkType}
         * @param instanceNetworkType the value to be set.
         * @return {@code this}
         */
        public Builder instanceNetworkType(com.aliyun.ros.cdk.core.IResolvable instanceNetworkType) {
            this.instanceNetworkType = instanceNetworkType;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceCloneProps#getMaintainTime}
         * @param maintainTime the value to be set.
         * @return {@code this}
         */
        public Builder maintainTime(java.lang.String maintainTime) {
            this.maintainTime = maintainTime;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceCloneProps#getMaintainTime}
         * @param maintainTime the value to be set.
         * @return {@code this}
         */
        public Builder maintainTime(com.aliyun.ros.cdk.core.IResolvable maintainTime) {
            this.maintainTime = maintainTime;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceCloneProps#getMasterUsername}
         * @param masterUsername the value to be set.
         * @return {@code this}
         */
        public Builder masterUsername(java.lang.String masterUsername) {
            this.masterUsername = masterUsername;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceCloneProps#getMasterUsername}
         * @param masterUsername the value to be set.
         * @return {@code this}
         */
        public Builder masterUsername(com.aliyun.ros.cdk.core.IResolvable masterUsername) {
            this.masterUsername = masterUsername;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceCloneProps#getMasterUserPassword}
         * @param masterUserPassword the value to be set.
         * @return {@code this}
         */
        public Builder masterUserPassword(java.lang.String masterUserPassword) {
            this.masterUserPassword = masterUserPassword;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceCloneProps#getMasterUserPassword}
         * @param masterUserPassword the value to be set.
         * @return {@code this}
         */
        public Builder masterUserPassword(com.aliyun.ros.cdk.core.IResolvable masterUserPassword) {
            this.masterUserPassword = masterUserPassword;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceCloneProps#getMasterUserType}
         * @param masterUserType the value to be set.
         * @return {@code this}
         */
        public Builder masterUserType(java.lang.String masterUserType) {
            this.masterUserType = masterUserType;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceCloneProps#getMasterUserType}
         * @param masterUserType the value to be set.
         * @return {@code this}
         */
        public Builder masterUserType(com.aliyun.ros.cdk.core.IResolvable masterUserType) {
            this.masterUserType = masterUserType;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceCloneProps#getPeriod}
         * @param period the value to be set.
         * @return {@code this}
         */
        public Builder period(java.lang.Number period) {
            this.period = period;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceCloneProps#getPeriod}
         * @param period the value to be set.
         * @return {@code this}
         */
        public Builder period(com.aliyun.ros.cdk.core.IResolvable period) {
            this.period = period;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceCloneProps#getPeriodType}
         * @param periodType the value to be set.
         * @return {@code this}
         */
        public Builder periodType(java.lang.String periodType) {
            this.periodType = periodType;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceCloneProps#getPeriodType}
         * @param periodType the value to be set.
         * @return {@code this}
         */
        public Builder periodType(com.aliyun.ros.cdk.core.IResolvable periodType) {
            this.periodType = periodType;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceCloneProps#getPort}
         * @param port the value to be set.
         * @return {@code this}
         */
        public Builder port(java.lang.Number port) {
            this.port = port;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceCloneProps#getPort}
         * @param port the value to be set.
         * @return {@code this}
         */
        public Builder port(com.aliyun.ros.cdk.core.IResolvable port) {
            this.port = port;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceCloneProps#getPreferredBackupPeriod}
         * @param preferredBackupPeriod the value to be set.
         * @return {@code this}
         */
        public Builder preferredBackupPeriod(java.util.List<? extends java.lang.Object> preferredBackupPeriod) {
            this.preferredBackupPeriod = preferredBackupPeriod;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceCloneProps#getPreferredBackupPeriod}
         * @param preferredBackupPeriod the value to be set.
         * @return {@code this}
         */
        public Builder preferredBackupPeriod(com.aliyun.ros.cdk.core.IResolvable preferredBackupPeriod) {
            this.preferredBackupPeriod = preferredBackupPeriod;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceCloneProps#getPreferredBackupTime}
         * @param preferredBackupTime the value to be set.
         * @return {@code this}
         */
        public Builder preferredBackupTime(java.lang.String preferredBackupTime) {
            this.preferredBackupTime = preferredBackupTime;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceCloneProps#getPreferredBackupTime}
         * @param preferredBackupTime the value to be set.
         * @return {@code this}
         */
        public Builder preferredBackupTime(com.aliyun.ros.cdk.core.IResolvable preferredBackupTime) {
            this.preferredBackupTime = preferredBackupTime;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceCloneProps#getPrivateIpAddress}
         * @param privateIpAddress the value to be set.
         * @return {@code this}
         */
        public Builder privateIpAddress(java.lang.String privateIpAddress) {
            this.privateIpAddress = privateIpAddress;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceCloneProps#getPrivateIpAddress}
         * @param privateIpAddress the value to be set.
         * @return {@code this}
         */
        public Builder privateIpAddress(com.aliyun.ros.cdk.core.IResolvable privateIpAddress) {
            this.privateIpAddress = privateIpAddress;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceCloneProps#getRestoreTable}
         * @param restoreTable the value to be set.
         * @return {@code this}
         */
        public Builder restoreTable(java.lang.String restoreTable) {
            this.restoreTable = restoreTable;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceCloneProps#getRestoreTable}
         * @param restoreTable the value to be set.
         * @return {@code this}
         */
        public Builder restoreTable(com.aliyun.ros.cdk.core.IResolvable restoreTable) {
            this.restoreTable = restoreTable;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceCloneProps#getRestoreTime}
         * @param restoreTime the value to be set.
         * @return {@code this}
         */
        public Builder restoreTime(java.lang.String restoreTime) {
            this.restoreTime = restoreTime;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceCloneProps#getRestoreTime}
         * @param restoreTime the value to be set.
         * @return {@code this}
         */
        public Builder restoreTime(com.aliyun.ros.cdk.core.IResolvable restoreTime) {
            this.restoreTime = restoreTime;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceCloneProps#getSecurityGroupId}
         * @param securityGroupId the value to be set.
         * @return {@code this}
         */
        public Builder securityGroupId(java.lang.String securityGroupId) {
            this.securityGroupId = securityGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceCloneProps#getSecurityGroupId}
         * @param securityGroupId the value to be set.
         * @return {@code this}
         */
        public Builder securityGroupId(com.aliyun.ros.cdk.core.IResolvable securityGroupId) {
            this.securityGroupId = securityGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceCloneProps#getSecurityIpList}
         * @param securityIpList the value to be set.
         * @return {@code this}
         */
        public Builder securityIpList(java.lang.String securityIpList) {
            this.securityIpList = securityIpList;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceCloneProps#getSecurityIpList}
         * @param securityIpList the value to be set.
         * @return {@code this}
         */
        public Builder securityIpList(com.aliyun.ros.cdk.core.IResolvable securityIpList) {
            this.securityIpList = securityIpList;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceCloneProps#getSlaveZoneIds}
         * @param slaveZoneIds the value to be set.
         * @return {@code this}
         */
        public Builder slaveZoneIds(com.aliyun.ros.cdk.core.IResolvable slaveZoneIds) {
            this.slaveZoneIds = slaveZoneIds;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceCloneProps#getSlaveZoneIds}
         * @param slaveZoneIds the value to be set.
         * @return {@code this}
         */
        public Builder slaveZoneIds(java.util.List<? extends java.lang.Object> slaveZoneIds) {
            this.slaveZoneIds = slaveZoneIds;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceCloneProps#getSqlCollectorStatus}
         * @param sqlCollectorStatus the value to be set.
         * @return {@code this}
         */
        public Builder sqlCollectorStatus(java.lang.String sqlCollectorStatus) {
            this.sqlCollectorStatus = sqlCollectorStatus;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceCloneProps#getSqlCollectorStatus}
         * @param sqlCollectorStatus the value to be set.
         * @return {@code this}
         */
        public Builder sqlCollectorStatus(com.aliyun.ros.cdk.core.IResolvable sqlCollectorStatus) {
            this.sqlCollectorStatus = sqlCollectorStatus;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceCloneProps#getSslSetting}
         * @param sslSetting the value to be set.
         * @return {@code this}
         */
        public Builder sslSetting(java.lang.String sslSetting) {
            this.sslSetting = sslSetting;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceCloneProps#getSslSetting}
         * @param sslSetting the value to be set.
         * @return {@code this}
         */
        public Builder sslSetting(com.aliyun.ros.cdk.core.IResolvable sslSetting) {
            this.sslSetting = sslSetting;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceCloneProps#getTableMeta}
         * @param tableMeta the value to be set.
         * @return {@code this}
         */
        public Builder tableMeta(com.aliyun.ros.cdk.core.IResolvable tableMeta) {
            this.tableMeta = tableMeta;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceCloneProps#getTableMeta}
         * @param tableMeta the value to be set.
         * @return {@code this}
         */
        public Builder tableMeta(java.util.List<? extends java.lang.Object> tableMeta) {
            this.tableMeta = tableMeta;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceCloneProps#getTags}
         * @param tags the value to be set.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder tags(java.util.Map<java.lang.String, ? extends java.lang.Object> tags) {
            this.tags = (java.util.Map<java.lang.String, java.lang.Object>)tags;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceCloneProps#getTimeoutInMinutes}
         * @param timeoutInMinutes the value to be set.
         * @return {@code this}
         */
        public Builder timeoutInMinutes(java.lang.Number timeoutInMinutes) {
            this.timeoutInMinutes = timeoutInMinutes;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceCloneProps#getTimeoutInMinutes}
         * @param timeoutInMinutes the value to be set.
         * @return {@code this}
         */
        public Builder timeoutInMinutes(com.aliyun.ros.cdk.core.IResolvable timeoutInMinutes) {
            this.timeoutInMinutes = timeoutInMinutes;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceCloneProps#getVpcId}
         * @param vpcId the value to be set.
         * @return {@code this}
         */
        public Builder vpcId(java.lang.String vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceCloneProps#getVpcId}
         * @param vpcId the value to be set.
         * @return {@code this}
         */
        public Builder vpcId(com.aliyun.ros.cdk.core.IResolvable vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceCloneProps#getVSwitchId}
         * @param vSwitchId the value to be set.
         * @return {@code this}
         */
        public Builder vSwitchId(java.lang.String vSwitchId) {
            this.vSwitchId = vSwitchId;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceCloneProps#getVSwitchId}
         * @param vSwitchId the value to be set.
         * @return {@code this}
         */
        public Builder vSwitchId(com.aliyun.ros.cdk.core.IResolvable vSwitchId) {
            this.vSwitchId = vSwitchId;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceCloneProps#getZoneId}
         * @param zoneId the value to be set.
         * @return {@code this}
         */
        public Builder zoneId(java.lang.String zoneId) {
            this.zoneId = zoneId;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceCloneProps#getZoneId}
         * @param zoneId the value to be set.
         * @return {@code this}
         */
        public Builder zoneId(com.aliyun.ros.cdk.core.IResolvable zoneId) {
            this.zoneId = zoneId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosDBInstanceCloneProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosDBInstanceCloneProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosDBInstanceCloneProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosDBInstanceCloneProps {
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
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.dbInstanceId = java.util.Objects.requireNonNull(builder.dbInstanceId, "dbInstanceId is required");
            this.payType = java.util.Objects.requireNonNull(builder.payType, "payType is required");
            this.allocatePublicConnection = builder.allocatePublicConnection;
            this.backupId = builder.backupId;
            this.backupRetentionPeriod = builder.backupRetentionPeriod;
            this.backupType = builder.backupType;
            this.category = builder.category;
            this.connectionStringPrefix = builder.connectionStringPrefix;
            this.connectionStringType = builder.connectionStringType;
            this.dbInstanceClass = builder.dbInstanceClass;
            this.dbInstanceDescription = builder.dbInstanceDescription;
            this.dbInstanceStorage = builder.dbInstanceStorage;
            this.dbInstanceStorageType = builder.dbInstanceStorageType;
            this.dbMappings = builder.dbMappings;
            this.dbNames = builder.dbNames;
            this.dedicatedHostGroupId = builder.dedicatedHostGroupId;
            this.instanceNetworkType = builder.instanceNetworkType;
            this.maintainTime = builder.maintainTime;
            this.masterUsername = builder.masterUsername;
            this.masterUserPassword = builder.masterUserPassword;
            this.masterUserType = builder.masterUserType;
            this.period = builder.period;
            this.periodType = builder.periodType;
            this.port = builder.port;
            this.preferredBackupPeriod = builder.preferredBackupPeriod;
            this.preferredBackupTime = builder.preferredBackupTime;
            this.privateIpAddress = builder.privateIpAddress;
            this.restoreTable = builder.restoreTable;
            this.restoreTime = builder.restoreTime;
            this.securityGroupId = builder.securityGroupId;
            this.securityIpList = builder.securityIpList;
            this.slaveZoneIds = builder.slaveZoneIds;
            this.sqlCollectorStatus = builder.sqlCollectorStatus;
            this.sslSetting = builder.sslSetting;
            this.tableMeta = builder.tableMeta;
            this.tags = (java.util.Map<java.lang.String, java.lang.Object>)builder.tags;
            this.timeoutInMinutes = builder.timeoutInMinutes;
            this.vpcId = builder.vpcId;
            this.vSwitchId = builder.vSwitchId;
            this.zoneId = builder.zoneId;
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
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-rds.RosDBInstanceCloneProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosDBInstanceCloneProps.Jsii$Proxy that = (RosDBInstanceCloneProps.Jsii$Proxy) o;

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
