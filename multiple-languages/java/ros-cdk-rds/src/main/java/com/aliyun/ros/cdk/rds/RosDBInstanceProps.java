package com.aliyun.ros.cdk.rds;

/**
 * Properties for defining a <code>ALIYUN::RDS::DBInstance</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.88.0 (build eaabd08)", date = "2023-09-01T09:26:39.160Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.rds.$Module.class, fqn = "@alicloud/ros-cdk-rds.RosDBInstanceProps")
@software.amazon.jsii.Jsii.Proxy(RosDBInstanceProps.Jsii$Proxy.class)
public interface RosDBInstanceProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDbInstanceClass();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDbInstanceStorage();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getEngine();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getEngineVersion();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getSecurityIpList();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAllocatePublicConnection() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getArchiveBackupKeepCount() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getArchiveBackupKeepPolicy() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getArchiveBackupRetentionPeriod() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAutoRenew() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getBackUpCategory() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getBackupPolicyMode() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getBackupRetentionPeriod() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCategory() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCompressType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getConnectionMode() {
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
    default @org.jetbrains.annotations.Nullable java.lang.Object getDbInstanceDescription() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDbInstanceNetType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDbInstanceStorageType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDbIsIgnoreCase() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDbMappings() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDbParamGroupId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDbTimeZone() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDedicatedHostGroupId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEnableBackupLog() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEncryptionKey() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getHighSpaceUsageProtection() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInstanceNetworkType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getLocalLogRetentionHours() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getLocalLogRetentionSpace() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getLogBackupFrequency() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getLogBackupLocalRetentionNumber() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getLogBackupRetentionPeriod() {
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
    default @org.jetbrains.annotations.Nullable java.lang.Object getMultiAz() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPayType() {
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
    default @org.jetbrains.annotations.Nullable java.lang.Object getReleasedKeepPolicy() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRoleArn() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSecurityGroupId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getServerlessConfig() {
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
    default @org.jetbrains.annotations.Nullable java.util.Map<java.lang.String, java.lang.Object> getTags() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTargetDedicatedHostIdForLog() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTargetDedicatedHostIdForMaster() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTargetDedicatedHostIdForSlave() {
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
     * @return a {@link Builder} of {@link RosDBInstanceProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosDBInstanceProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosDBInstanceProps> {
        java.lang.Object dbInstanceClass;
        java.lang.Object dbInstanceStorage;
        java.lang.Object engine;
        java.lang.Object engineVersion;
        java.lang.Object securityIpList;
        java.lang.Object allocatePublicConnection;
        java.lang.Object archiveBackupKeepCount;
        java.lang.Object archiveBackupKeepPolicy;
        java.lang.Object archiveBackupRetentionPeriod;
        java.lang.Object autoRenew;
        java.lang.Object backUpCategory;
        java.lang.Object backupPolicyMode;
        java.lang.Object backupRetentionPeriod;
        java.lang.Object category;
        java.lang.Object compressType;
        java.lang.Object connectionMode;
        java.lang.Object connectionStringPrefix;
        java.lang.Object connectionStringType;
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
        java.lang.Object payType;
        java.lang.Object period;
        java.lang.Object periodType;
        java.lang.Object port;
        java.lang.Object preferredBackupPeriod;
        java.lang.Object preferredBackupTime;
        java.lang.Object privateIpAddress;
        java.lang.Object releasedKeepPolicy;
        java.lang.Object resourceGroupId;
        java.lang.Object roleArn;
        java.lang.Object securityGroupId;
        java.lang.Object serverlessConfig;
        java.lang.Object slaveZoneIds;
        java.lang.Object sqlCollectorStatus;
        java.lang.Object sslSetting;
        java.util.Map<java.lang.String, java.lang.Object> tags;
        java.lang.Object targetDedicatedHostIdForLog;
        java.lang.Object targetDedicatedHostIdForMaster;
        java.lang.Object targetDedicatedHostIdForSlave;
        java.lang.Object vpcId;
        java.lang.Object vSwitchId;
        java.lang.Object zoneId;

        /**
         * Sets the value of {@link RosDBInstanceProps#getDbInstanceClass}
         * @param dbInstanceClass the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder dbInstanceClass(java.lang.String dbInstanceClass) {
            this.dbInstanceClass = dbInstanceClass;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceProps#getDbInstanceClass}
         * @param dbInstanceClass the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder dbInstanceClass(com.aliyun.ros.cdk.core.IResolvable dbInstanceClass) {
            this.dbInstanceClass = dbInstanceClass;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceProps#getDbInstanceStorage}
         * @param dbInstanceStorage the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder dbInstanceStorage(java.lang.Number dbInstanceStorage) {
            this.dbInstanceStorage = dbInstanceStorage;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceProps#getDbInstanceStorage}
         * @param dbInstanceStorage the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder dbInstanceStorage(com.aliyun.ros.cdk.core.IResolvable dbInstanceStorage) {
            this.dbInstanceStorage = dbInstanceStorage;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceProps#getEngine}
         * @param engine the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder engine(java.lang.String engine) {
            this.engine = engine;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceProps#getEngine}
         * @param engine the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder engine(com.aliyun.ros.cdk.core.IResolvable engine) {
            this.engine = engine;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceProps#getEngineVersion}
         * @param engineVersion the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder engineVersion(java.lang.String engineVersion) {
            this.engineVersion = engineVersion;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceProps#getEngineVersion}
         * @param engineVersion the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder engineVersion(com.aliyun.ros.cdk.core.IResolvable engineVersion) {
            this.engineVersion = engineVersion;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceProps#getSecurityIpList}
         * @param securityIpList the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder securityIpList(java.lang.String securityIpList) {
            this.securityIpList = securityIpList;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceProps#getSecurityIpList}
         * @param securityIpList the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder securityIpList(com.aliyun.ros.cdk.core.IResolvable securityIpList) {
            this.securityIpList = securityIpList;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceProps#getAllocatePublicConnection}
         * @param allocatePublicConnection the value to be set.
         * @return {@code this}
         */
        public Builder allocatePublicConnection(java.lang.Boolean allocatePublicConnection) {
            this.allocatePublicConnection = allocatePublicConnection;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceProps#getAllocatePublicConnection}
         * @param allocatePublicConnection the value to be set.
         * @return {@code this}
         */
        public Builder allocatePublicConnection(com.aliyun.ros.cdk.core.IResolvable allocatePublicConnection) {
            this.allocatePublicConnection = allocatePublicConnection;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceProps#getArchiveBackupKeepCount}
         * @param archiveBackupKeepCount the value to be set.
         * @return {@code this}
         */
        public Builder archiveBackupKeepCount(java.lang.Number archiveBackupKeepCount) {
            this.archiveBackupKeepCount = archiveBackupKeepCount;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceProps#getArchiveBackupKeepCount}
         * @param archiveBackupKeepCount the value to be set.
         * @return {@code this}
         */
        public Builder archiveBackupKeepCount(com.aliyun.ros.cdk.core.IResolvable archiveBackupKeepCount) {
            this.archiveBackupKeepCount = archiveBackupKeepCount;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceProps#getArchiveBackupKeepPolicy}
         * @param archiveBackupKeepPolicy the value to be set.
         * @return {@code this}
         */
        public Builder archiveBackupKeepPolicy(java.lang.String archiveBackupKeepPolicy) {
            this.archiveBackupKeepPolicy = archiveBackupKeepPolicy;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceProps#getArchiveBackupKeepPolicy}
         * @param archiveBackupKeepPolicy the value to be set.
         * @return {@code this}
         */
        public Builder archiveBackupKeepPolicy(com.aliyun.ros.cdk.core.IResolvable archiveBackupKeepPolicy) {
            this.archiveBackupKeepPolicy = archiveBackupKeepPolicy;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceProps#getArchiveBackupRetentionPeriod}
         * @param archiveBackupRetentionPeriod the value to be set.
         * @return {@code this}
         */
        public Builder archiveBackupRetentionPeriod(java.lang.Number archiveBackupRetentionPeriod) {
            this.archiveBackupRetentionPeriod = archiveBackupRetentionPeriod;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceProps#getArchiveBackupRetentionPeriod}
         * @param archiveBackupRetentionPeriod the value to be set.
         * @return {@code this}
         */
        public Builder archiveBackupRetentionPeriod(com.aliyun.ros.cdk.core.IResolvable archiveBackupRetentionPeriod) {
            this.archiveBackupRetentionPeriod = archiveBackupRetentionPeriod;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceProps#getAutoRenew}
         * @param autoRenew the value to be set.
         * @return {@code this}
         */
        public Builder autoRenew(java.lang.Boolean autoRenew) {
            this.autoRenew = autoRenew;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceProps#getAutoRenew}
         * @param autoRenew the value to be set.
         * @return {@code this}
         */
        public Builder autoRenew(com.aliyun.ros.cdk.core.IResolvable autoRenew) {
            this.autoRenew = autoRenew;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceProps#getBackUpCategory}
         * @param backUpCategory the value to be set.
         * @return {@code this}
         */
        public Builder backUpCategory(java.lang.String backUpCategory) {
            this.backUpCategory = backUpCategory;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceProps#getBackUpCategory}
         * @param backUpCategory the value to be set.
         * @return {@code this}
         */
        public Builder backUpCategory(com.aliyun.ros.cdk.core.IResolvable backUpCategory) {
            this.backUpCategory = backUpCategory;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceProps#getBackupPolicyMode}
         * @param backupPolicyMode the value to be set.
         * @return {@code this}
         */
        public Builder backupPolicyMode(java.lang.String backupPolicyMode) {
            this.backupPolicyMode = backupPolicyMode;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceProps#getBackupPolicyMode}
         * @param backupPolicyMode the value to be set.
         * @return {@code this}
         */
        public Builder backupPolicyMode(com.aliyun.ros.cdk.core.IResolvable backupPolicyMode) {
            this.backupPolicyMode = backupPolicyMode;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceProps#getBackupRetentionPeriod}
         * @param backupRetentionPeriod the value to be set.
         * @return {@code this}
         */
        public Builder backupRetentionPeriod(java.lang.Number backupRetentionPeriod) {
            this.backupRetentionPeriod = backupRetentionPeriod;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceProps#getBackupRetentionPeriod}
         * @param backupRetentionPeriod the value to be set.
         * @return {@code this}
         */
        public Builder backupRetentionPeriod(com.aliyun.ros.cdk.core.IResolvable backupRetentionPeriod) {
            this.backupRetentionPeriod = backupRetentionPeriod;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceProps#getCategory}
         * @param category the value to be set.
         * @return {@code this}
         */
        public Builder category(java.lang.String category) {
            this.category = category;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceProps#getCategory}
         * @param category the value to be set.
         * @return {@code this}
         */
        public Builder category(com.aliyun.ros.cdk.core.IResolvable category) {
            this.category = category;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceProps#getCompressType}
         * @param compressType the value to be set.
         * @return {@code this}
         */
        public Builder compressType(java.lang.Number compressType) {
            this.compressType = compressType;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceProps#getCompressType}
         * @param compressType the value to be set.
         * @return {@code this}
         */
        public Builder compressType(com.aliyun.ros.cdk.core.IResolvable compressType) {
            this.compressType = compressType;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceProps#getConnectionMode}
         * @param connectionMode the value to be set.
         * @return {@code this}
         */
        public Builder connectionMode(java.lang.String connectionMode) {
            this.connectionMode = connectionMode;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceProps#getConnectionMode}
         * @param connectionMode the value to be set.
         * @return {@code this}
         */
        public Builder connectionMode(com.aliyun.ros.cdk.core.IResolvable connectionMode) {
            this.connectionMode = connectionMode;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceProps#getConnectionStringPrefix}
         * @param connectionStringPrefix the value to be set.
         * @return {@code this}
         */
        public Builder connectionStringPrefix(java.lang.String connectionStringPrefix) {
            this.connectionStringPrefix = connectionStringPrefix;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceProps#getConnectionStringPrefix}
         * @param connectionStringPrefix the value to be set.
         * @return {@code this}
         */
        public Builder connectionStringPrefix(com.aliyun.ros.cdk.core.IResolvable connectionStringPrefix) {
            this.connectionStringPrefix = connectionStringPrefix;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceProps#getConnectionStringType}
         * @param connectionStringType the value to be set.
         * @return {@code this}
         */
        public Builder connectionStringType(java.lang.String connectionStringType) {
            this.connectionStringType = connectionStringType;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceProps#getConnectionStringType}
         * @param connectionStringType the value to be set.
         * @return {@code this}
         */
        public Builder connectionStringType(com.aliyun.ros.cdk.core.IResolvable connectionStringType) {
            this.connectionStringType = connectionStringType;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceProps#getDbInstanceDescription}
         * @param dbInstanceDescription the value to be set.
         * @return {@code this}
         */
        public Builder dbInstanceDescription(java.lang.String dbInstanceDescription) {
            this.dbInstanceDescription = dbInstanceDescription;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceProps#getDbInstanceDescription}
         * @param dbInstanceDescription the value to be set.
         * @return {@code this}
         */
        public Builder dbInstanceDescription(com.aliyun.ros.cdk.core.IResolvable dbInstanceDescription) {
            this.dbInstanceDescription = dbInstanceDescription;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceProps#getDbInstanceNetType}
         * @param dbInstanceNetType the value to be set.
         * @return {@code this}
         */
        public Builder dbInstanceNetType(java.lang.String dbInstanceNetType) {
            this.dbInstanceNetType = dbInstanceNetType;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceProps#getDbInstanceNetType}
         * @param dbInstanceNetType the value to be set.
         * @return {@code this}
         */
        public Builder dbInstanceNetType(com.aliyun.ros.cdk.core.IResolvable dbInstanceNetType) {
            this.dbInstanceNetType = dbInstanceNetType;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceProps#getDbInstanceStorageType}
         * @param dbInstanceStorageType the value to be set.
         * @return {@code this}
         */
        public Builder dbInstanceStorageType(java.lang.String dbInstanceStorageType) {
            this.dbInstanceStorageType = dbInstanceStorageType;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceProps#getDbInstanceStorageType}
         * @param dbInstanceStorageType the value to be set.
         * @return {@code this}
         */
        public Builder dbInstanceStorageType(com.aliyun.ros.cdk.core.IResolvable dbInstanceStorageType) {
            this.dbInstanceStorageType = dbInstanceStorageType;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceProps#getDbIsIgnoreCase}
         * @param dbIsIgnoreCase the value to be set.
         * @return {@code this}
         */
        public Builder dbIsIgnoreCase(java.lang.Number dbIsIgnoreCase) {
            this.dbIsIgnoreCase = dbIsIgnoreCase;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceProps#getDbIsIgnoreCase}
         * @param dbIsIgnoreCase the value to be set.
         * @return {@code this}
         */
        public Builder dbIsIgnoreCase(com.aliyun.ros.cdk.core.IResolvable dbIsIgnoreCase) {
            this.dbIsIgnoreCase = dbIsIgnoreCase;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceProps#getDbMappings}
         * @param dbMappings the value to be set.
         * @return {@code this}
         */
        public Builder dbMappings(com.aliyun.ros.cdk.core.IResolvable dbMappings) {
            this.dbMappings = dbMappings;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceProps#getDbMappings}
         * @param dbMappings the value to be set.
         * @return {@code this}
         */
        public Builder dbMappings(java.util.List<? extends java.lang.Object> dbMappings) {
            this.dbMappings = dbMappings;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceProps#getDbParamGroupId}
         * @param dbParamGroupId the value to be set.
         * @return {@code this}
         */
        public Builder dbParamGroupId(java.lang.String dbParamGroupId) {
            this.dbParamGroupId = dbParamGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceProps#getDbParamGroupId}
         * @param dbParamGroupId the value to be set.
         * @return {@code this}
         */
        public Builder dbParamGroupId(com.aliyun.ros.cdk.core.IResolvable dbParamGroupId) {
            this.dbParamGroupId = dbParamGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceProps#getDbTimeZone}
         * @param dbTimeZone the value to be set.
         * @return {@code this}
         */
        public Builder dbTimeZone(java.lang.String dbTimeZone) {
            this.dbTimeZone = dbTimeZone;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceProps#getDbTimeZone}
         * @param dbTimeZone the value to be set.
         * @return {@code this}
         */
        public Builder dbTimeZone(com.aliyun.ros.cdk.core.IResolvable dbTimeZone) {
            this.dbTimeZone = dbTimeZone;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceProps#getDedicatedHostGroupId}
         * @param dedicatedHostGroupId the value to be set.
         * @return {@code this}
         */
        public Builder dedicatedHostGroupId(java.lang.String dedicatedHostGroupId) {
            this.dedicatedHostGroupId = dedicatedHostGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceProps#getDedicatedHostGroupId}
         * @param dedicatedHostGroupId the value to be set.
         * @return {@code this}
         */
        public Builder dedicatedHostGroupId(com.aliyun.ros.cdk.core.IResolvable dedicatedHostGroupId) {
            this.dedicatedHostGroupId = dedicatedHostGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceProps#getEnableBackupLog}
         * @param enableBackupLog the value to be set.
         * @return {@code this}
         */
        public Builder enableBackupLog(java.lang.Boolean enableBackupLog) {
            this.enableBackupLog = enableBackupLog;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceProps#getEnableBackupLog}
         * @param enableBackupLog the value to be set.
         * @return {@code this}
         */
        public Builder enableBackupLog(com.aliyun.ros.cdk.core.IResolvable enableBackupLog) {
            this.enableBackupLog = enableBackupLog;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceProps#getEncryptionKey}
         * @param encryptionKey the value to be set.
         * @return {@code this}
         */
        public Builder encryptionKey(java.lang.String encryptionKey) {
            this.encryptionKey = encryptionKey;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceProps#getEncryptionKey}
         * @param encryptionKey the value to be set.
         * @return {@code this}
         */
        public Builder encryptionKey(com.aliyun.ros.cdk.core.IResolvable encryptionKey) {
            this.encryptionKey = encryptionKey;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceProps#getHighSpaceUsageProtection}
         * @param highSpaceUsageProtection the value to be set.
         * @return {@code this}
         */
        public Builder highSpaceUsageProtection(java.lang.String highSpaceUsageProtection) {
            this.highSpaceUsageProtection = highSpaceUsageProtection;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceProps#getHighSpaceUsageProtection}
         * @param highSpaceUsageProtection the value to be set.
         * @return {@code this}
         */
        public Builder highSpaceUsageProtection(com.aliyun.ros.cdk.core.IResolvable highSpaceUsageProtection) {
            this.highSpaceUsageProtection = highSpaceUsageProtection;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceProps#getInstanceNetworkType}
         * @param instanceNetworkType the value to be set.
         * @return {@code this}
         */
        public Builder instanceNetworkType(java.lang.String instanceNetworkType) {
            this.instanceNetworkType = instanceNetworkType;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceProps#getInstanceNetworkType}
         * @param instanceNetworkType the value to be set.
         * @return {@code this}
         */
        public Builder instanceNetworkType(com.aliyun.ros.cdk.core.IResolvable instanceNetworkType) {
            this.instanceNetworkType = instanceNetworkType;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceProps#getLocalLogRetentionHours}
         * @param localLogRetentionHours the value to be set.
         * @return {@code this}
         */
        public Builder localLogRetentionHours(java.lang.Number localLogRetentionHours) {
            this.localLogRetentionHours = localLogRetentionHours;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceProps#getLocalLogRetentionHours}
         * @param localLogRetentionHours the value to be set.
         * @return {@code this}
         */
        public Builder localLogRetentionHours(com.aliyun.ros.cdk.core.IResolvable localLogRetentionHours) {
            this.localLogRetentionHours = localLogRetentionHours;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceProps#getLocalLogRetentionSpace}
         * @param localLogRetentionSpace the value to be set.
         * @return {@code this}
         */
        public Builder localLogRetentionSpace(java.lang.Number localLogRetentionSpace) {
            this.localLogRetentionSpace = localLogRetentionSpace;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceProps#getLocalLogRetentionSpace}
         * @param localLogRetentionSpace the value to be set.
         * @return {@code this}
         */
        public Builder localLogRetentionSpace(com.aliyun.ros.cdk.core.IResolvable localLogRetentionSpace) {
            this.localLogRetentionSpace = localLogRetentionSpace;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceProps#getLogBackupFrequency}
         * @param logBackupFrequency the value to be set.
         * @return {@code this}
         */
        public Builder logBackupFrequency(java.lang.String logBackupFrequency) {
            this.logBackupFrequency = logBackupFrequency;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceProps#getLogBackupFrequency}
         * @param logBackupFrequency the value to be set.
         * @return {@code this}
         */
        public Builder logBackupFrequency(com.aliyun.ros.cdk.core.IResolvable logBackupFrequency) {
            this.logBackupFrequency = logBackupFrequency;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceProps#getLogBackupLocalRetentionNumber}
         * @param logBackupLocalRetentionNumber the value to be set.
         * @return {@code this}
         */
        public Builder logBackupLocalRetentionNumber(java.lang.Number logBackupLocalRetentionNumber) {
            this.logBackupLocalRetentionNumber = logBackupLocalRetentionNumber;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceProps#getLogBackupLocalRetentionNumber}
         * @param logBackupLocalRetentionNumber the value to be set.
         * @return {@code this}
         */
        public Builder logBackupLocalRetentionNumber(com.aliyun.ros.cdk.core.IResolvable logBackupLocalRetentionNumber) {
            this.logBackupLocalRetentionNumber = logBackupLocalRetentionNumber;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceProps#getLogBackupRetentionPeriod}
         * @param logBackupRetentionPeriod the value to be set.
         * @return {@code this}
         */
        public Builder logBackupRetentionPeriod(java.lang.Number logBackupRetentionPeriod) {
            this.logBackupRetentionPeriod = logBackupRetentionPeriod;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceProps#getLogBackupRetentionPeriod}
         * @param logBackupRetentionPeriod the value to be set.
         * @return {@code this}
         */
        public Builder logBackupRetentionPeriod(com.aliyun.ros.cdk.core.IResolvable logBackupRetentionPeriod) {
            this.logBackupRetentionPeriod = logBackupRetentionPeriod;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceProps#getMaintainTime}
         * @param maintainTime the value to be set.
         * @return {@code this}
         */
        public Builder maintainTime(java.lang.String maintainTime) {
            this.maintainTime = maintainTime;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceProps#getMaintainTime}
         * @param maintainTime the value to be set.
         * @return {@code this}
         */
        public Builder maintainTime(com.aliyun.ros.cdk.core.IResolvable maintainTime) {
            this.maintainTime = maintainTime;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceProps#getMasterUsername}
         * @param masterUsername the value to be set.
         * @return {@code this}
         */
        public Builder masterUsername(java.lang.String masterUsername) {
            this.masterUsername = masterUsername;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceProps#getMasterUsername}
         * @param masterUsername the value to be set.
         * @return {@code this}
         */
        public Builder masterUsername(com.aliyun.ros.cdk.core.IResolvable masterUsername) {
            this.masterUsername = masterUsername;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceProps#getMasterUserPassword}
         * @param masterUserPassword the value to be set.
         * @return {@code this}
         */
        public Builder masterUserPassword(java.lang.String masterUserPassword) {
            this.masterUserPassword = masterUserPassword;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceProps#getMasterUserPassword}
         * @param masterUserPassword the value to be set.
         * @return {@code this}
         */
        public Builder masterUserPassword(com.aliyun.ros.cdk.core.IResolvable masterUserPassword) {
            this.masterUserPassword = masterUserPassword;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceProps#getMasterUserType}
         * @param masterUserType the value to be set.
         * @return {@code this}
         */
        public Builder masterUserType(java.lang.String masterUserType) {
            this.masterUserType = masterUserType;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceProps#getMasterUserType}
         * @param masterUserType the value to be set.
         * @return {@code this}
         */
        public Builder masterUserType(com.aliyun.ros.cdk.core.IResolvable masterUserType) {
            this.masterUserType = masterUserType;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceProps#getMultiAz}
         * @param multiAz the value to be set.
         * @return {@code this}
         */
        public Builder multiAz(java.lang.Boolean multiAz) {
            this.multiAz = multiAz;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceProps#getMultiAz}
         * @param multiAz the value to be set.
         * @return {@code this}
         */
        public Builder multiAz(com.aliyun.ros.cdk.core.IResolvable multiAz) {
            this.multiAz = multiAz;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceProps#getPayType}
         * @param payType the value to be set.
         * @return {@code this}
         */
        public Builder payType(java.lang.String payType) {
            this.payType = payType;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceProps#getPayType}
         * @param payType the value to be set.
         * @return {@code this}
         */
        public Builder payType(com.aliyun.ros.cdk.core.IResolvable payType) {
            this.payType = payType;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceProps#getPeriod}
         * @param period the value to be set.
         * @return {@code this}
         */
        public Builder period(java.lang.Number period) {
            this.period = period;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceProps#getPeriod}
         * @param period the value to be set.
         * @return {@code this}
         */
        public Builder period(com.aliyun.ros.cdk.core.IResolvable period) {
            this.period = period;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceProps#getPeriodType}
         * @param periodType the value to be set.
         * @return {@code this}
         */
        public Builder periodType(java.lang.String periodType) {
            this.periodType = periodType;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceProps#getPeriodType}
         * @param periodType the value to be set.
         * @return {@code this}
         */
        public Builder periodType(com.aliyun.ros.cdk.core.IResolvable periodType) {
            this.periodType = periodType;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceProps#getPort}
         * @param port the value to be set.
         * @return {@code this}
         */
        public Builder port(java.lang.Number port) {
            this.port = port;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceProps#getPort}
         * @param port the value to be set.
         * @return {@code this}
         */
        public Builder port(com.aliyun.ros.cdk.core.IResolvable port) {
            this.port = port;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceProps#getPreferredBackupPeriod}
         * @param preferredBackupPeriod the value to be set.
         * @return {@code this}
         */
        public Builder preferredBackupPeriod(java.util.List<? extends java.lang.Object> preferredBackupPeriod) {
            this.preferredBackupPeriod = preferredBackupPeriod;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceProps#getPreferredBackupPeriod}
         * @param preferredBackupPeriod the value to be set.
         * @return {@code this}
         */
        public Builder preferredBackupPeriod(com.aliyun.ros.cdk.core.IResolvable preferredBackupPeriod) {
            this.preferredBackupPeriod = preferredBackupPeriod;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceProps#getPreferredBackupTime}
         * @param preferredBackupTime the value to be set.
         * @return {@code this}
         */
        public Builder preferredBackupTime(java.lang.String preferredBackupTime) {
            this.preferredBackupTime = preferredBackupTime;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceProps#getPreferredBackupTime}
         * @param preferredBackupTime the value to be set.
         * @return {@code this}
         */
        public Builder preferredBackupTime(com.aliyun.ros.cdk.core.IResolvable preferredBackupTime) {
            this.preferredBackupTime = preferredBackupTime;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceProps#getPrivateIpAddress}
         * @param privateIpAddress the value to be set.
         * @return {@code this}
         */
        public Builder privateIpAddress(java.lang.String privateIpAddress) {
            this.privateIpAddress = privateIpAddress;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceProps#getPrivateIpAddress}
         * @param privateIpAddress the value to be set.
         * @return {@code this}
         */
        public Builder privateIpAddress(com.aliyun.ros.cdk.core.IResolvable privateIpAddress) {
            this.privateIpAddress = privateIpAddress;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceProps#getReleasedKeepPolicy}
         * @param releasedKeepPolicy the value to be set.
         * @return {@code this}
         */
        public Builder releasedKeepPolicy(java.lang.String releasedKeepPolicy) {
            this.releasedKeepPolicy = releasedKeepPolicy;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceProps#getReleasedKeepPolicy}
         * @param releasedKeepPolicy the value to be set.
         * @return {@code this}
         */
        public Builder releasedKeepPolicy(com.aliyun.ros.cdk.core.IResolvable releasedKeepPolicy) {
            this.releasedKeepPolicy = releasedKeepPolicy;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceProps#getResourceGroupId}
         * @param resourceGroupId the value to be set.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceProps#getResourceGroupId}
         * @param resourceGroupId the value to be set.
         * @return {@code this}
         */
        public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceProps#getRoleArn}
         * @param roleArn the value to be set.
         * @return {@code this}
         */
        public Builder roleArn(java.lang.String roleArn) {
            this.roleArn = roleArn;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceProps#getRoleArn}
         * @param roleArn the value to be set.
         * @return {@code this}
         */
        public Builder roleArn(com.aliyun.ros.cdk.core.IResolvable roleArn) {
            this.roleArn = roleArn;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceProps#getSecurityGroupId}
         * @param securityGroupId the value to be set.
         * @return {@code this}
         */
        public Builder securityGroupId(java.lang.String securityGroupId) {
            this.securityGroupId = securityGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceProps#getSecurityGroupId}
         * @param securityGroupId the value to be set.
         * @return {@code this}
         */
        public Builder securityGroupId(com.aliyun.ros.cdk.core.IResolvable securityGroupId) {
            this.securityGroupId = securityGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceProps#getServerlessConfig}
         * @param serverlessConfig the value to be set.
         * @return {@code this}
         */
        public Builder serverlessConfig(com.aliyun.ros.cdk.core.IResolvable serverlessConfig) {
            this.serverlessConfig = serverlessConfig;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceProps#getServerlessConfig}
         * @param serverlessConfig the value to be set.
         * @return {@code this}
         */
        public Builder serverlessConfig(com.aliyun.ros.cdk.rds.RosDBInstance.ServerlessConfigProperty serverlessConfig) {
            this.serverlessConfig = serverlessConfig;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceProps#getSlaveZoneIds}
         * @param slaveZoneIds the value to be set.
         * @return {@code this}
         */
        public Builder slaveZoneIds(com.aliyun.ros.cdk.core.IResolvable slaveZoneIds) {
            this.slaveZoneIds = slaveZoneIds;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceProps#getSlaveZoneIds}
         * @param slaveZoneIds the value to be set.
         * @return {@code this}
         */
        public Builder slaveZoneIds(java.util.List<? extends java.lang.Object> slaveZoneIds) {
            this.slaveZoneIds = slaveZoneIds;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceProps#getSqlCollectorStatus}
         * @param sqlCollectorStatus the value to be set.
         * @return {@code this}
         */
        public Builder sqlCollectorStatus(java.lang.String sqlCollectorStatus) {
            this.sqlCollectorStatus = sqlCollectorStatus;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceProps#getSqlCollectorStatus}
         * @param sqlCollectorStatus the value to be set.
         * @return {@code this}
         */
        public Builder sqlCollectorStatus(com.aliyun.ros.cdk.core.IResolvable sqlCollectorStatus) {
            this.sqlCollectorStatus = sqlCollectorStatus;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceProps#getSslSetting}
         * @param sslSetting the value to be set.
         * @return {@code this}
         */
        public Builder sslSetting(java.lang.String sslSetting) {
            this.sslSetting = sslSetting;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceProps#getSslSetting}
         * @param sslSetting the value to be set.
         * @return {@code this}
         */
        public Builder sslSetting(com.aliyun.ros.cdk.core.IResolvable sslSetting) {
            this.sslSetting = sslSetting;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceProps#getTags}
         * @param tags the value to be set.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder tags(java.util.Map<java.lang.String, ? extends java.lang.Object> tags) {
            this.tags = (java.util.Map<java.lang.String, java.lang.Object>)tags;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceProps#getTargetDedicatedHostIdForLog}
         * @param targetDedicatedHostIdForLog the value to be set.
         * @return {@code this}
         */
        public Builder targetDedicatedHostIdForLog(java.lang.String targetDedicatedHostIdForLog) {
            this.targetDedicatedHostIdForLog = targetDedicatedHostIdForLog;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceProps#getTargetDedicatedHostIdForLog}
         * @param targetDedicatedHostIdForLog the value to be set.
         * @return {@code this}
         */
        public Builder targetDedicatedHostIdForLog(com.aliyun.ros.cdk.core.IResolvable targetDedicatedHostIdForLog) {
            this.targetDedicatedHostIdForLog = targetDedicatedHostIdForLog;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceProps#getTargetDedicatedHostIdForMaster}
         * @param targetDedicatedHostIdForMaster the value to be set.
         * @return {@code this}
         */
        public Builder targetDedicatedHostIdForMaster(java.lang.String targetDedicatedHostIdForMaster) {
            this.targetDedicatedHostIdForMaster = targetDedicatedHostIdForMaster;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceProps#getTargetDedicatedHostIdForMaster}
         * @param targetDedicatedHostIdForMaster the value to be set.
         * @return {@code this}
         */
        public Builder targetDedicatedHostIdForMaster(com.aliyun.ros.cdk.core.IResolvable targetDedicatedHostIdForMaster) {
            this.targetDedicatedHostIdForMaster = targetDedicatedHostIdForMaster;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceProps#getTargetDedicatedHostIdForSlave}
         * @param targetDedicatedHostIdForSlave the value to be set.
         * @return {@code this}
         */
        public Builder targetDedicatedHostIdForSlave(java.lang.String targetDedicatedHostIdForSlave) {
            this.targetDedicatedHostIdForSlave = targetDedicatedHostIdForSlave;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceProps#getTargetDedicatedHostIdForSlave}
         * @param targetDedicatedHostIdForSlave the value to be set.
         * @return {@code this}
         */
        public Builder targetDedicatedHostIdForSlave(com.aliyun.ros.cdk.core.IResolvable targetDedicatedHostIdForSlave) {
            this.targetDedicatedHostIdForSlave = targetDedicatedHostIdForSlave;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceProps#getVpcId}
         * @param vpcId the value to be set.
         * @return {@code this}
         */
        public Builder vpcId(java.lang.String vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceProps#getVpcId}
         * @param vpcId the value to be set.
         * @return {@code this}
         */
        public Builder vpcId(com.aliyun.ros.cdk.core.IResolvable vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceProps#getVSwitchId}
         * @param vSwitchId the value to be set.
         * @return {@code this}
         */
        public Builder vSwitchId(java.lang.String vSwitchId) {
            this.vSwitchId = vSwitchId;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceProps#getVSwitchId}
         * @param vSwitchId the value to be set.
         * @return {@code this}
         */
        public Builder vSwitchId(com.aliyun.ros.cdk.core.IResolvable vSwitchId) {
            this.vSwitchId = vSwitchId;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceProps#getZoneId}
         * @param zoneId the value to be set.
         * @return {@code this}
         */
        public Builder zoneId(java.lang.String zoneId) {
            this.zoneId = zoneId;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceProps#getZoneId}
         * @param zoneId the value to be set.
         * @return {@code this}
         */
        public Builder zoneId(com.aliyun.ros.cdk.core.IResolvable zoneId) {
            this.zoneId = zoneId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosDBInstanceProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosDBInstanceProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosDBInstanceProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosDBInstanceProps {
        private final java.lang.Object dbInstanceClass;
        private final java.lang.Object dbInstanceStorage;
        private final java.lang.Object engine;
        private final java.lang.Object engineVersion;
        private final java.lang.Object securityIpList;
        private final java.lang.Object allocatePublicConnection;
        private final java.lang.Object archiveBackupKeepCount;
        private final java.lang.Object archiveBackupKeepPolicy;
        private final java.lang.Object archiveBackupRetentionPeriod;
        private final java.lang.Object autoRenew;
        private final java.lang.Object backUpCategory;
        private final java.lang.Object backupPolicyMode;
        private final java.lang.Object backupRetentionPeriod;
        private final java.lang.Object category;
        private final java.lang.Object compressType;
        private final java.lang.Object connectionMode;
        private final java.lang.Object connectionStringPrefix;
        private final java.lang.Object connectionStringType;
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
        private final java.lang.Object payType;
        private final java.lang.Object period;
        private final java.lang.Object periodType;
        private final java.lang.Object port;
        private final java.lang.Object preferredBackupPeriod;
        private final java.lang.Object preferredBackupTime;
        private final java.lang.Object privateIpAddress;
        private final java.lang.Object releasedKeepPolicy;
        private final java.lang.Object resourceGroupId;
        private final java.lang.Object roleArn;
        private final java.lang.Object securityGroupId;
        private final java.lang.Object serverlessConfig;
        private final java.lang.Object slaveZoneIds;
        private final java.lang.Object sqlCollectorStatus;
        private final java.lang.Object sslSetting;
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
            this.dbInstanceClass = software.amazon.jsii.Kernel.get(this, "dbInstanceClass", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dbInstanceStorage = software.amazon.jsii.Kernel.get(this, "dbInstanceStorage", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.engine = software.amazon.jsii.Kernel.get(this, "engine", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.engineVersion = software.amazon.jsii.Kernel.get(this, "engineVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.securityIpList = software.amazon.jsii.Kernel.get(this, "securityIpList", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.allocatePublicConnection = software.amazon.jsii.Kernel.get(this, "allocatePublicConnection", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.archiveBackupKeepCount = software.amazon.jsii.Kernel.get(this, "archiveBackupKeepCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.archiveBackupKeepPolicy = software.amazon.jsii.Kernel.get(this, "archiveBackupKeepPolicy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.archiveBackupRetentionPeriod = software.amazon.jsii.Kernel.get(this, "archiveBackupRetentionPeriod", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.autoRenew = software.amazon.jsii.Kernel.get(this, "autoRenew", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.backUpCategory = software.amazon.jsii.Kernel.get(this, "backUpCategory", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.backupPolicyMode = software.amazon.jsii.Kernel.get(this, "backupPolicyMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.backupRetentionPeriod = software.amazon.jsii.Kernel.get(this, "backupRetentionPeriod", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.category = software.amazon.jsii.Kernel.get(this, "category", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.compressType = software.amazon.jsii.Kernel.get(this, "compressType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.connectionMode = software.amazon.jsii.Kernel.get(this, "connectionMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.connectionStringPrefix = software.amazon.jsii.Kernel.get(this, "connectionStringPrefix", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.connectionStringType = software.amazon.jsii.Kernel.get(this, "connectionStringType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
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
            this.payType = software.amazon.jsii.Kernel.get(this, "payType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.period = software.amazon.jsii.Kernel.get(this, "period", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.periodType = software.amazon.jsii.Kernel.get(this, "periodType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.port = software.amazon.jsii.Kernel.get(this, "port", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.preferredBackupPeriod = software.amazon.jsii.Kernel.get(this, "preferredBackupPeriod", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.preferredBackupTime = software.amazon.jsii.Kernel.get(this, "preferredBackupTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.privateIpAddress = software.amazon.jsii.Kernel.get(this, "privateIpAddress", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.releasedKeepPolicy = software.amazon.jsii.Kernel.get(this, "releasedKeepPolicy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.roleArn = software.amazon.jsii.Kernel.get(this, "roleArn", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.securityGroupId = software.amazon.jsii.Kernel.get(this, "securityGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.serverlessConfig = software.amazon.jsii.Kernel.get(this, "serverlessConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.slaveZoneIds = software.amazon.jsii.Kernel.get(this, "slaveZoneIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.sqlCollectorStatus = software.amazon.jsii.Kernel.get(this, "sqlCollectorStatus", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.sslSetting = software.amazon.jsii.Kernel.get(this, "sslSetting", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
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
            this.dbInstanceClass = java.util.Objects.requireNonNull(builder.dbInstanceClass, "dbInstanceClass is required");
            this.dbInstanceStorage = java.util.Objects.requireNonNull(builder.dbInstanceStorage, "dbInstanceStorage is required");
            this.engine = java.util.Objects.requireNonNull(builder.engine, "engine is required");
            this.engineVersion = java.util.Objects.requireNonNull(builder.engineVersion, "engineVersion is required");
            this.securityIpList = java.util.Objects.requireNonNull(builder.securityIpList, "securityIpList is required");
            this.allocatePublicConnection = builder.allocatePublicConnection;
            this.archiveBackupKeepCount = builder.archiveBackupKeepCount;
            this.archiveBackupKeepPolicy = builder.archiveBackupKeepPolicy;
            this.archiveBackupRetentionPeriod = builder.archiveBackupRetentionPeriod;
            this.autoRenew = builder.autoRenew;
            this.backUpCategory = builder.backUpCategory;
            this.backupPolicyMode = builder.backupPolicyMode;
            this.backupRetentionPeriod = builder.backupRetentionPeriod;
            this.category = builder.category;
            this.compressType = builder.compressType;
            this.connectionMode = builder.connectionMode;
            this.connectionStringPrefix = builder.connectionStringPrefix;
            this.connectionStringType = builder.connectionStringType;
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
            this.payType = builder.payType;
            this.period = builder.period;
            this.periodType = builder.periodType;
            this.port = builder.port;
            this.preferredBackupPeriod = builder.preferredBackupPeriod;
            this.preferredBackupTime = builder.preferredBackupTime;
            this.privateIpAddress = builder.privateIpAddress;
            this.releasedKeepPolicy = builder.releasedKeepPolicy;
            this.resourceGroupId = builder.resourceGroupId;
            this.roleArn = builder.roleArn;
            this.securityGroupId = builder.securityGroupId;
            this.serverlessConfig = builder.serverlessConfig;
            this.slaveZoneIds = builder.slaveZoneIds;
            this.sqlCollectorStatus = builder.sqlCollectorStatus;
            this.sslSetting = builder.sslSetting;
            this.tags = (java.util.Map<java.lang.String, java.lang.Object>)builder.tags;
            this.targetDedicatedHostIdForLog = builder.targetDedicatedHostIdForLog;
            this.targetDedicatedHostIdForMaster = builder.targetDedicatedHostIdForMaster;
            this.targetDedicatedHostIdForSlave = builder.targetDedicatedHostIdForSlave;
            this.vpcId = builder.vpcId;
            this.vSwitchId = builder.vSwitchId;
            this.zoneId = builder.zoneId;
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
        public final java.lang.Object getSecurityIpList() {
            return this.securityIpList;
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
        public final java.lang.Object getCategory() {
            return this.category;
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
        public final java.lang.Object getPayType() {
            return this.payType;
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

            data.set("dbInstanceClass", om.valueToTree(this.getDbInstanceClass()));
            data.set("dbInstanceStorage", om.valueToTree(this.getDbInstanceStorage()));
            data.set("engine", om.valueToTree(this.getEngine()));
            data.set("engineVersion", om.valueToTree(this.getEngineVersion()));
            data.set("securityIpList", om.valueToTree(this.getSecurityIpList()));
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
            if (this.getCategory() != null) {
                data.set("category", om.valueToTree(this.getCategory()));
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
            if (this.getPayType() != null) {
                data.set("payType", om.valueToTree(this.getPayType()));
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
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-rds.RosDBInstanceProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosDBInstanceProps.Jsii$Proxy that = (RosDBInstanceProps.Jsii$Proxy) o;

            if (!dbInstanceClass.equals(that.dbInstanceClass)) return false;
            if (!dbInstanceStorage.equals(that.dbInstanceStorage)) return false;
            if (!engine.equals(that.engine)) return false;
            if (!engineVersion.equals(that.engineVersion)) return false;
            if (!securityIpList.equals(that.securityIpList)) return false;
            if (this.allocatePublicConnection != null ? !this.allocatePublicConnection.equals(that.allocatePublicConnection) : that.allocatePublicConnection != null) return false;
            if (this.archiveBackupKeepCount != null ? !this.archiveBackupKeepCount.equals(that.archiveBackupKeepCount) : that.archiveBackupKeepCount != null) return false;
            if (this.archiveBackupKeepPolicy != null ? !this.archiveBackupKeepPolicy.equals(that.archiveBackupKeepPolicy) : that.archiveBackupKeepPolicy != null) return false;
            if (this.archiveBackupRetentionPeriod != null ? !this.archiveBackupRetentionPeriod.equals(that.archiveBackupRetentionPeriod) : that.archiveBackupRetentionPeriod != null) return false;
            if (this.autoRenew != null ? !this.autoRenew.equals(that.autoRenew) : that.autoRenew != null) return false;
            if (this.backUpCategory != null ? !this.backUpCategory.equals(that.backUpCategory) : that.backUpCategory != null) return false;
            if (this.backupPolicyMode != null ? !this.backupPolicyMode.equals(that.backupPolicyMode) : that.backupPolicyMode != null) return false;
            if (this.backupRetentionPeriod != null ? !this.backupRetentionPeriod.equals(that.backupRetentionPeriod) : that.backupRetentionPeriod != null) return false;
            if (this.category != null ? !this.category.equals(that.category) : that.category != null) return false;
            if (this.compressType != null ? !this.compressType.equals(that.compressType) : that.compressType != null) return false;
            if (this.connectionMode != null ? !this.connectionMode.equals(that.connectionMode) : that.connectionMode != null) return false;
            if (this.connectionStringPrefix != null ? !this.connectionStringPrefix.equals(that.connectionStringPrefix) : that.connectionStringPrefix != null) return false;
            if (this.connectionStringType != null ? !this.connectionStringType.equals(that.connectionStringType) : that.connectionStringType != null) return false;
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
            if (this.payType != null ? !this.payType.equals(that.payType) : that.payType != null) return false;
            if (this.period != null ? !this.period.equals(that.period) : that.period != null) return false;
            if (this.periodType != null ? !this.periodType.equals(that.periodType) : that.periodType != null) return false;
            if (this.port != null ? !this.port.equals(that.port) : that.port != null) return false;
            if (this.preferredBackupPeriod != null ? !this.preferredBackupPeriod.equals(that.preferredBackupPeriod) : that.preferredBackupPeriod != null) return false;
            if (this.preferredBackupTime != null ? !this.preferredBackupTime.equals(that.preferredBackupTime) : that.preferredBackupTime != null) return false;
            if (this.privateIpAddress != null ? !this.privateIpAddress.equals(that.privateIpAddress) : that.privateIpAddress != null) return false;
            if (this.releasedKeepPolicy != null ? !this.releasedKeepPolicy.equals(that.releasedKeepPolicy) : that.releasedKeepPolicy != null) return false;
            if (this.resourceGroupId != null ? !this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId != null) return false;
            if (this.roleArn != null ? !this.roleArn.equals(that.roleArn) : that.roleArn != null) return false;
            if (this.securityGroupId != null ? !this.securityGroupId.equals(that.securityGroupId) : that.securityGroupId != null) return false;
            if (this.serverlessConfig != null ? !this.serverlessConfig.equals(that.serverlessConfig) : that.serverlessConfig != null) return false;
            if (this.slaveZoneIds != null ? !this.slaveZoneIds.equals(that.slaveZoneIds) : that.slaveZoneIds != null) return false;
            if (this.sqlCollectorStatus != null ? !this.sqlCollectorStatus.equals(that.sqlCollectorStatus) : that.sqlCollectorStatus != null) return false;
            if (this.sslSetting != null ? !this.sslSetting.equals(that.sslSetting) : that.sslSetting != null) return false;
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
            int result = this.dbInstanceClass.hashCode();
            result = 31 * result + (this.dbInstanceStorage.hashCode());
            result = 31 * result + (this.engine.hashCode());
            result = 31 * result + (this.engineVersion.hashCode());
            result = 31 * result + (this.securityIpList.hashCode());
            result = 31 * result + (this.allocatePublicConnection != null ? this.allocatePublicConnection.hashCode() : 0);
            result = 31 * result + (this.archiveBackupKeepCount != null ? this.archiveBackupKeepCount.hashCode() : 0);
            result = 31 * result + (this.archiveBackupKeepPolicy != null ? this.archiveBackupKeepPolicy.hashCode() : 0);
            result = 31 * result + (this.archiveBackupRetentionPeriod != null ? this.archiveBackupRetentionPeriod.hashCode() : 0);
            result = 31 * result + (this.autoRenew != null ? this.autoRenew.hashCode() : 0);
            result = 31 * result + (this.backUpCategory != null ? this.backUpCategory.hashCode() : 0);
            result = 31 * result + (this.backupPolicyMode != null ? this.backupPolicyMode.hashCode() : 0);
            result = 31 * result + (this.backupRetentionPeriod != null ? this.backupRetentionPeriod.hashCode() : 0);
            result = 31 * result + (this.category != null ? this.category.hashCode() : 0);
            result = 31 * result + (this.compressType != null ? this.compressType.hashCode() : 0);
            result = 31 * result + (this.connectionMode != null ? this.connectionMode.hashCode() : 0);
            result = 31 * result + (this.connectionStringPrefix != null ? this.connectionStringPrefix.hashCode() : 0);
            result = 31 * result + (this.connectionStringType != null ? this.connectionStringType.hashCode() : 0);
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
            result = 31 * result + (this.payType != null ? this.payType.hashCode() : 0);
            result = 31 * result + (this.period != null ? this.period.hashCode() : 0);
            result = 31 * result + (this.periodType != null ? this.periodType.hashCode() : 0);
            result = 31 * result + (this.port != null ? this.port.hashCode() : 0);
            result = 31 * result + (this.preferredBackupPeriod != null ? this.preferredBackupPeriod.hashCode() : 0);
            result = 31 * result + (this.preferredBackupTime != null ? this.preferredBackupTime.hashCode() : 0);
            result = 31 * result + (this.privateIpAddress != null ? this.privateIpAddress.hashCode() : 0);
            result = 31 * result + (this.releasedKeepPolicy != null ? this.releasedKeepPolicy.hashCode() : 0);
            result = 31 * result + (this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0);
            result = 31 * result + (this.roleArn != null ? this.roleArn.hashCode() : 0);
            result = 31 * result + (this.securityGroupId != null ? this.securityGroupId.hashCode() : 0);
            result = 31 * result + (this.serverlessConfig != null ? this.serverlessConfig.hashCode() : 0);
            result = 31 * result + (this.slaveZoneIds != null ? this.slaveZoneIds.hashCode() : 0);
            result = 31 * result + (this.sqlCollectorStatus != null ? this.sqlCollectorStatus.hashCode() : 0);
            result = 31 * result + (this.sslSetting != null ? this.sslSetting.hashCode() : 0);
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
