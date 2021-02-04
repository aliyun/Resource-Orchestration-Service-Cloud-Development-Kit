package com.aliyun.ros.cdk.rds;

/**
 * Properties for defining a `ALIYUN::RDS::DBInstance`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.17.1 (build 2bac5fd)", date = "2021-02-04T07:29:36.271Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.rds.$Module.class, fqn = "@alicloud/ros-cdk-rds.RosDBInstanceProps")
@software.amazon.jsii.Jsii.Proxy(RosDBInstanceProps.Jsii$Proxy.class)
public interface RosDBInstanceProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getDbInstanceClass();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Number getDbInstanceStorage();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getEngine();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getEngineVersion();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getSecurityIpList();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAllocatePublicConnection() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Number getBackupRetentionPeriod() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getCategory() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getConnectionMode() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getConnectionStringPrefix() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getConnectionStringType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getDbInstanceDescription() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getDbInstanceNetType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getDbInstanceStorageType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Number getDbIsIgnoreCase() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDbMappings() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getDbParamGroupId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getDbTimeZone() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getDedicatedHostGroupId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getEncryptionKey() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getMaintainTime() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getMasterUsername() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getMasterUserPassword() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getMasterUserType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getMultiAz() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getPayType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Number getPeriod() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getPeriodType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Number getPort() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPreferredBackupPeriod() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getPreferredBackupTime() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getPrivateIpAddress() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getResourceGroupId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getRoleArn() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getSecurityGroupId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.util.List<java.lang.String> getSlaveZoneIds() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getSqlCollectorStatus() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getSslSetting() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.core.RosTag> getTags() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getTargetDedicatedHostIdForLog() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getTargetDedicatedHostIdForMaster() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getTargetDedicatedHostIdForSlave() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getVpcId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getVSwitchId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getZoneId() {
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
        private java.lang.String dbInstanceClass;
        private java.lang.Number dbInstanceStorage;
        private java.lang.String engine;
        private java.lang.String engineVersion;
        private java.lang.String securityIpList;
        private java.lang.Object allocatePublicConnection;
        private java.lang.Number backupRetentionPeriod;
        private java.lang.String category;
        private java.lang.String connectionMode;
        private java.lang.String connectionStringPrefix;
        private java.lang.String connectionStringType;
        private java.lang.String dbInstanceDescription;
        private java.lang.String dbInstanceNetType;
        private java.lang.String dbInstanceStorageType;
        private java.lang.Number dbIsIgnoreCase;
        private java.lang.Object dbMappings;
        private java.lang.String dbParamGroupId;
        private java.lang.String dbTimeZone;
        private java.lang.String dedicatedHostGroupId;
        private java.lang.String encryptionKey;
        private java.lang.String maintainTime;
        private java.lang.String masterUsername;
        private java.lang.String masterUserPassword;
        private java.lang.String masterUserType;
        private java.lang.Object multiAz;
        private java.lang.String payType;
        private java.lang.Number period;
        private java.lang.String periodType;
        private java.lang.Number port;
        private java.lang.Object preferredBackupPeriod;
        private java.lang.String preferredBackupTime;
        private java.lang.String privateIpAddress;
        private java.lang.String resourceGroupId;
        private java.lang.String roleArn;
        private java.lang.String securityGroupId;
        private java.util.List<java.lang.String> slaveZoneIds;
        private java.lang.String sqlCollectorStatus;
        private java.lang.String sslSetting;
        private java.util.List<com.aliyun.ros.cdk.core.RosTag> tags;
        private java.lang.String targetDedicatedHostIdForLog;
        private java.lang.String targetDedicatedHostIdForMaster;
        private java.lang.String targetDedicatedHostIdForSlave;
        private java.lang.String vpcId;
        private java.lang.String vSwitchId;
        private java.lang.String zoneId;

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
         * Sets the value of {@link RosDBInstanceProps#getDbInstanceStorage}
         * @param dbInstanceStorage the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder dbInstanceStorage(java.lang.Number dbInstanceStorage) {
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
         * Sets the value of {@link RosDBInstanceProps#getEngineVersion}
         * @param engineVersion the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder engineVersion(java.lang.String engineVersion) {
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
         * Sets the value of {@link RosDBInstanceProps#getBackupRetentionPeriod}
         * @param backupRetentionPeriod the value to be set.
         * @return {@code this}
         */
        public Builder backupRetentionPeriod(java.lang.Number backupRetentionPeriod) {
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
         * Sets the value of {@link RosDBInstanceProps#getConnectionMode}
         * @param connectionMode the value to be set.
         * @return {@code this}
         */
        public Builder connectionMode(java.lang.String connectionMode) {
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
         * Sets the value of {@link RosDBInstanceProps#getConnectionStringType}
         * @param connectionStringType the value to be set.
         * @return {@code this}
         */
        public Builder connectionStringType(java.lang.String connectionStringType) {
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
         * Sets the value of {@link RosDBInstanceProps#getDbInstanceNetType}
         * @param dbInstanceNetType the value to be set.
         * @return {@code this}
         */
        public Builder dbInstanceNetType(java.lang.String dbInstanceNetType) {
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
         * Sets the value of {@link RosDBInstanceProps#getDbIsIgnoreCase}
         * @param dbIsIgnoreCase the value to be set.
         * @return {@code this}
         */
        public Builder dbIsIgnoreCase(java.lang.Number dbIsIgnoreCase) {
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
         * Sets the value of {@link RosDBInstanceProps#getDbTimeZone}
         * @param dbTimeZone the value to be set.
         * @return {@code this}
         */
        public Builder dbTimeZone(java.lang.String dbTimeZone) {
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
         * Sets the value of {@link RosDBInstanceProps#getEncryptionKey}
         * @param encryptionKey the value to be set.
         * @return {@code this}
         */
        public Builder encryptionKey(java.lang.String encryptionKey) {
            this.encryptionKey = encryptionKey;
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
         * Sets the value of {@link RosDBInstanceProps#getMasterUsername}
         * @param masterUsername the value to be set.
         * @return {@code this}
         */
        public Builder masterUsername(java.lang.String masterUsername) {
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
         * Sets the value of {@link RosDBInstanceProps#getMasterUserType}
         * @param masterUserType the value to be set.
         * @return {@code this}
         */
        public Builder masterUserType(java.lang.String masterUserType) {
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
         * Sets the value of {@link RosDBInstanceProps#getPeriod}
         * @param period the value to be set.
         * @return {@code this}
         */
        public Builder period(java.lang.Number period) {
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
         * Sets the value of {@link RosDBInstanceProps#getPort}
         * @param port the value to be set.
         * @return {@code this}
         */
        public Builder port(java.lang.Number port) {
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
         * Sets the value of {@link RosDBInstanceProps#getPrivateIpAddress}
         * @param privateIpAddress the value to be set.
         * @return {@code this}
         */
        public Builder privateIpAddress(java.lang.String privateIpAddress) {
            this.privateIpAddress = privateIpAddress;
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
         * Sets the value of {@link RosDBInstanceProps#getRoleArn}
         * @param roleArn the value to be set.
         * @return {@code this}
         */
        public Builder roleArn(java.lang.String roleArn) {
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
         * Sets the value of {@link RosDBInstanceProps#getSlaveZoneIds}
         * @param slaveZoneIds the value to be set.
         * @return {@code this}
         */
        public Builder slaveZoneIds(java.util.List<java.lang.String> slaveZoneIds) {
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
         * Sets the value of {@link RosDBInstanceProps#getSslSetting}
         * @param sslSetting the value to be set.
         * @return {@code this}
         */
        public Builder sslSetting(java.lang.String sslSetting) {
            this.sslSetting = sslSetting;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceProps#getTags}
         * @param tags the value to be set.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder tags(java.util.List<? extends com.aliyun.ros.cdk.core.RosTag> tags) {
            this.tags = (java.util.List<com.aliyun.ros.cdk.core.RosTag>)tags;
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
         * Sets the value of {@link RosDBInstanceProps#getTargetDedicatedHostIdForMaster}
         * @param targetDedicatedHostIdForMaster the value to be set.
         * @return {@code this}
         */
        public Builder targetDedicatedHostIdForMaster(java.lang.String targetDedicatedHostIdForMaster) {
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
         * Sets the value of {@link RosDBInstanceProps#getVpcId}
         * @param vpcId the value to be set.
         * @return {@code this}
         */
        public Builder vpcId(java.lang.String vpcId) {
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
         * Sets the value of {@link RosDBInstanceProps#getZoneId}
         * @param zoneId the value to be set.
         * @return {@code this}
         */
        public Builder zoneId(java.lang.String zoneId) {
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
            return new Jsii$Proxy(dbInstanceClass, dbInstanceStorage, engine, engineVersion, securityIpList, allocatePublicConnection, backupRetentionPeriod, category, connectionMode, connectionStringPrefix, connectionStringType, dbInstanceDescription, dbInstanceNetType, dbInstanceStorageType, dbIsIgnoreCase, dbMappings, dbParamGroupId, dbTimeZone, dedicatedHostGroupId, encryptionKey, maintainTime, masterUsername, masterUserPassword, masterUserType, multiAz, payType, period, periodType, port, preferredBackupPeriod, preferredBackupTime, privateIpAddress, resourceGroupId, roleArn, securityGroupId, slaveZoneIds, sqlCollectorStatus, sslSetting, tags, targetDedicatedHostIdForLog, targetDedicatedHostIdForMaster, targetDedicatedHostIdForSlave, vpcId, vSwitchId, zoneId);
        }
    }

    /**
     * An implementation for {@link RosDBInstanceProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosDBInstanceProps {
        private final java.lang.String dbInstanceClass;
        private final java.lang.Number dbInstanceStorage;
        private final java.lang.String engine;
        private final java.lang.String engineVersion;
        private final java.lang.String securityIpList;
        private final java.lang.Object allocatePublicConnection;
        private final java.lang.Number backupRetentionPeriod;
        private final java.lang.String category;
        private final java.lang.String connectionMode;
        private final java.lang.String connectionStringPrefix;
        private final java.lang.String connectionStringType;
        private final java.lang.String dbInstanceDescription;
        private final java.lang.String dbInstanceNetType;
        private final java.lang.String dbInstanceStorageType;
        private final java.lang.Number dbIsIgnoreCase;
        private final java.lang.Object dbMappings;
        private final java.lang.String dbParamGroupId;
        private final java.lang.String dbTimeZone;
        private final java.lang.String dedicatedHostGroupId;
        private final java.lang.String encryptionKey;
        private final java.lang.String maintainTime;
        private final java.lang.String masterUsername;
        private final java.lang.String masterUserPassword;
        private final java.lang.String masterUserType;
        private final java.lang.Object multiAz;
        private final java.lang.String payType;
        private final java.lang.Number period;
        private final java.lang.String periodType;
        private final java.lang.Number port;
        private final java.lang.Object preferredBackupPeriod;
        private final java.lang.String preferredBackupTime;
        private final java.lang.String privateIpAddress;
        private final java.lang.String resourceGroupId;
        private final java.lang.String roleArn;
        private final java.lang.String securityGroupId;
        private final java.util.List<java.lang.String> slaveZoneIds;
        private final java.lang.String sqlCollectorStatus;
        private final java.lang.String sslSetting;
        private final java.util.List<com.aliyun.ros.cdk.core.RosTag> tags;
        private final java.lang.String targetDedicatedHostIdForLog;
        private final java.lang.String targetDedicatedHostIdForMaster;
        private final java.lang.String targetDedicatedHostIdForSlave;
        private final java.lang.String vpcId;
        private final java.lang.String vSwitchId;
        private final java.lang.String zoneId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.dbInstanceClass = software.amazon.jsii.Kernel.get(this, "dbInstanceClass", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.dbInstanceStorage = software.amazon.jsii.Kernel.get(this, "dbInstanceStorage", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
            this.engine = software.amazon.jsii.Kernel.get(this, "engine", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.engineVersion = software.amazon.jsii.Kernel.get(this, "engineVersion", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.securityIpList = software.amazon.jsii.Kernel.get(this, "securityIpList", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.allocatePublicConnection = software.amazon.jsii.Kernel.get(this, "allocatePublicConnection", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.backupRetentionPeriod = software.amazon.jsii.Kernel.get(this, "backupRetentionPeriod", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
            this.category = software.amazon.jsii.Kernel.get(this, "category", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.connectionMode = software.amazon.jsii.Kernel.get(this, "connectionMode", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.connectionStringPrefix = software.amazon.jsii.Kernel.get(this, "connectionStringPrefix", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.connectionStringType = software.amazon.jsii.Kernel.get(this, "connectionStringType", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.dbInstanceDescription = software.amazon.jsii.Kernel.get(this, "dbInstanceDescription", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.dbInstanceNetType = software.amazon.jsii.Kernel.get(this, "dbInstanceNetType", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.dbInstanceStorageType = software.amazon.jsii.Kernel.get(this, "dbInstanceStorageType", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.dbIsIgnoreCase = software.amazon.jsii.Kernel.get(this, "dbIsIgnoreCase", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
            this.dbMappings = software.amazon.jsii.Kernel.get(this, "dbMappings", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dbParamGroupId = software.amazon.jsii.Kernel.get(this, "dbParamGroupId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.dbTimeZone = software.amazon.jsii.Kernel.get(this, "dbTimeZone", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.dedicatedHostGroupId = software.amazon.jsii.Kernel.get(this, "dedicatedHostGroupId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.encryptionKey = software.amazon.jsii.Kernel.get(this, "encryptionKey", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.maintainTime = software.amazon.jsii.Kernel.get(this, "maintainTime", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.masterUsername = software.amazon.jsii.Kernel.get(this, "masterUsername", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.masterUserPassword = software.amazon.jsii.Kernel.get(this, "masterUserPassword", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.masterUserType = software.amazon.jsii.Kernel.get(this, "masterUserType", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.multiAz = software.amazon.jsii.Kernel.get(this, "multiAz", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.payType = software.amazon.jsii.Kernel.get(this, "payType", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.period = software.amazon.jsii.Kernel.get(this, "period", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
            this.periodType = software.amazon.jsii.Kernel.get(this, "periodType", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.port = software.amazon.jsii.Kernel.get(this, "port", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
            this.preferredBackupPeriod = software.amazon.jsii.Kernel.get(this, "preferredBackupPeriod", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.preferredBackupTime = software.amazon.jsii.Kernel.get(this, "preferredBackupTime", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.privateIpAddress = software.amazon.jsii.Kernel.get(this, "privateIpAddress", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.roleArn = software.amazon.jsii.Kernel.get(this, "roleArn", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.securityGroupId = software.amazon.jsii.Kernel.get(this, "securityGroupId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.slaveZoneIds = software.amazon.jsii.Kernel.get(this, "slaveZoneIds", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(java.lang.String.class)));
            this.sqlCollectorStatus = software.amazon.jsii.Kernel.get(this, "sqlCollectorStatus", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.sslSetting = software.amazon.jsii.Kernel.get(this, "sslSetting", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.tags = software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.RosTag.class)));
            this.targetDedicatedHostIdForLog = software.amazon.jsii.Kernel.get(this, "targetDedicatedHostIdForLog", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.targetDedicatedHostIdForMaster = software.amazon.jsii.Kernel.get(this, "targetDedicatedHostIdForMaster", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.targetDedicatedHostIdForSlave = software.amazon.jsii.Kernel.get(this, "targetDedicatedHostIdForSlave", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.vpcId = software.amazon.jsii.Kernel.get(this, "vpcId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.vSwitchId = software.amazon.jsii.Kernel.get(this, "vSwitchId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.zoneId = software.amazon.jsii.Kernel.get(this, "zoneId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        @SuppressWarnings("unchecked")
        protected Jsii$Proxy(final java.lang.String dbInstanceClass, final java.lang.Number dbInstanceStorage, final java.lang.String engine, final java.lang.String engineVersion, final java.lang.String securityIpList, final java.lang.Object allocatePublicConnection, final java.lang.Number backupRetentionPeriod, final java.lang.String category, final java.lang.String connectionMode, final java.lang.String connectionStringPrefix, final java.lang.String connectionStringType, final java.lang.String dbInstanceDescription, final java.lang.String dbInstanceNetType, final java.lang.String dbInstanceStorageType, final java.lang.Number dbIsIgnoreCase, final java.lang.Object dbMappings, final java.lang.String dbParamGroupId, final java.lang.String dbTimeZone, final java.lang.String dedicatedHostGroupId, final java.lang.String encryptionKey, final java.lang.String maintainTime, final java.lang.String masterUsername, final java.lang.String masterUserPassword, final java.lang.String masterUserType, final java.lang.Object multiAz, final java.lang.String payType, final java.lang.Number period, final java.lang.String periodType, final java.lang.Number port, final java.lang.Object preferredBackupPeriod, final java.lang.String preferredBackupTime, final java.lang.String privateIpAddress, final java.lang.String resourceGroupId, final java.lang.String roleArn, final java.lang.String securityGroupId, final java.util.List<java.lang.String> slaveZoneIds, final java.lang.String sqlCollectorStatus, final java.lang.String sslSetting, final java.util.List<? extends com.aliyun.ros.cdk.core.RosTag> tags, final java.lang.String targetDedicatedHostIdForLog, final java.lang.String targetDedicatedHostIdForMaster, final java.lang.String targetDedicatedHostIdForSlave, final java.lang.String vpcId, final java.lang.String vSwitchId, final java.lang.String zoneId) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.dbInstanceClass = java.util.Objects.requireNonNull(dbInstanceClass, "dbInstanceClass is required");
            this.dbInstanceStorage = java.util.Objects.requireNonNull(dbInstanceStorage, "dbInstanceStorage is required");
            this.engine = java.util.Objects.requireNonNull(engine, "engine is required");
            this.engineVersion = java.util.Objects.requireNonNull(engineVersion, "engineVersion is required");
            this.securityIpList = java.util.Objects.requireNonNull(securityIpList, "securityIpList is required");
            this.allocatePublicConnection = allocatePublicConnection;
            this.backupRetentionPeriod = backupRetentionPeriod;
            this.category = category;
            this.connectionMode = connectionMode;
            this.connectionStringPrefix = connectionStringPrefix;
            this.connectionStringType = connectionStringType;
            this.dbInstanceDescription = dbInstanceDescription;
            this.dbInstanceNetType = dbInstanceNetType;
            this.dbInstanceStorageType = dbInstanceStorageType;
            this.dbIsIgnoreCase = dbIsIgnoreCase;
            this.dbMappings = dbMappings;
            this.dbParamGroupId = dbParamGroupId;
            this.dbTimeZone = dbTimeZone;
            this.dedicatedHostGroupId = dedicatedHostGroupId;
            this.encryptionKey = encryptionKey;
            this.maintainTime = maintainTime;
            this.masterUsername = masterUsername;
            this.masterUserPassword = masterUserPassword;
            this.masterUserType = masterUserType;
            this.multiAz = multiAz;
            this.payType = payType;
            this.period = period;
            this.periodType = periodType;
            this.port = port;
            this.preferredBackupPeriod = preferredBackupPeriod;
            this.preferredBackupTime = preferredBackupTime;
            this.privateIpAddress = privateIpAddress;
            this.resourceGroupId = resourceGroupId;
            this.roleArn = roleArn;
            this.securityGroupId = securityGroupId;
            this.slaveZoneIds = slaveZoneIds;
            this.sqlCollectorStatus = sqlCollectorStatus;
            this.sslSetting = sslSetting;
            this.tags = (java.util.List<com.aliyun.ros.cdk.core.RosTag>)tags;
            this.targetDedicatedHostIdForLog = targetDedicatedHostIdForLog;
            this.targetDedicatedHostIdForMaster = targetDedicatedHostIdForMaster;
            this.targetDedicatedHostIdForSlave = targetDedicatedHostIdForSlave;
            this.vpcId = vpcId;
            this.vSwitchId = vSwitchId;
            this.zoneId = zoneId;
        }

        @Override
        public final java.lang.String getDbInstanceClass() {
            return this.dbInstanceClass;
        }

        @Override
        public final java.lang.Number getDbInstanceStorage() {
            return this.dbInstanceStorage;
        }

        @Override
        public final java.lang.String getEngine() {
            return this.engine;
        }

        @Override
        public final java.lang.String getEngineVersion() {
            return this.engineVersion;
        }

        @Override
        public final java.lang.String getSecurityIpList() {
            return this.securityIpList;
        }

        @Override
        public final java.lang.Object getAllocatePublicConnection() {
            return this.allocatePublicConnection;
        }

        @Override
        public final java.lang.Number getBackupRetentionPeriod() {
            return this.backupRetentionPeriod;
        }

        @Override
        public final java.lang.String getCategory() {
            return this.category;
        }

        @Override
        public final java.lang.String getConnectionMode() {
            return this.connectionMode;
        }

        @Override
        public final java.lang.String getConnectionStringPrefix() {
            return this.connectionStringPrefix;
        }

        @Override
        public final java.lang.String getConnectionStringType() {
            return this.connectionStringType;
        }

        @Override
        public final java.lang.String getDbInstanceDescription() {
            return this.dbInstanceDescription;
        }

        @Override
        public final java.lang.String getDbInstanceNetType() {
            return this.dbInstanceNetType;
        }

        @Override
        public final java.lang.String getDbInstanceStorageType() {
            return this.dbInstanceStorageType;
        }

        @Override
        public final java.lang.Number getDbIsIgnoreCase() {
            return this.dbIsIgnoreCase;
        }

        @Override
        public final java.lang.Object getDbMappings() {
            return this.dbMappings;
        }

        @Override
        public final java.lang.String getDbParamGroupId() {
            return this.dbParamGroupId;
        }

        @Override
        public final java.lang.String getDbTimeZone() {
            return this.dbTimeZone;
        }

        @Override
        public final java.lang.String getDedicatedHostGroupId() {
            return this.dedicatedHostGroupId;
        }

        @Override
        public final java.lang.String getEncryptionKey() {
            return this.encryptionKey;
        }

        @Override
        public final java.lang.String getMaintainTime() {
            return this.maintainTime;
        }

        @Override
        public final java.lang.String getMasterUsername() {
            return this.masterUsername;
        }

        @Override
        public final java.lang.String getMasterUserPassword() {
            return this.masterUserPassword;
        }

        @Override
        public final java.lang.String getMasterUserType() {
            return this.masterUserType;
        }

        @Override
        public final java.lang.Object getMultiAz() {
            return this.multiAz;
        }

        @Override
        public final java.lang.String getPayType() {
            return this.payType;
        }

        @Override
        public final java.lang.Number getPeriod() {
            return this.period;
        }

        @Override
        public final java.lang.String getPeriodType() {
            return this.periodType;
        }

        @Override
        public final java.lang.Number getPort() {
            return this.port;
        }

        @Override
        public final java.lang.Object getPreferredBackupPeriod() {
            return this.preferredBackupPeriod;
        }

        @Override
        public final java.lang.String getPreferredBackupTime() {
            return this.preferredBackupTime;
        }

        @Override
        public final java.lang.String getPrivateIpAddress() {
            return this.privateIpAddress;
        }

        @Override
        public final java.lang.String getResourceGroupId() {
            return this.resourceGroupId;
        }

        @Override
        public final java.lang.String getRoleArn() {
            return this.roleArn;
        }

        @Override
        public final java.lang.String getSecurityGroupId() {
            return this.securityGroupId;
        }

        @Override
        public final java.util.List<java.lang.String> getSlaveZoneIds() {
            return this.slaveZoneIds;
        }

        @Override
        public final java.lang.String getSqlCollectorStatus() {
            return this.sqlCollectorStatus;
        }

        @Override
        public final java.lang.String getSslSetting() {
            return this.sslSetting;
        }

        @Override
        public final java.util.List<com.aliyun.ros.cdk.core.RosTag> getTags() {
            return this.tags;
        }

        @Override
        public final java.lang.String getTargetDedicatedHostIdForLog() {
            return this.targetDedicatedHostIdForLog;
        }

        @Override
        public final java.lang.String getTargetDedicatedHostIdForMaster() {
            return this.targetDedicatedHostIdForMaster;
        }

        @Override
        public final java.lang.String getTargetDedicatedHostIdForSlave() {
            return this.targetDedicatedHostIdForSlave;
        }

        @Override
        public final java.lang.String getVpcId() {
            return this.vpcId;
        }

        @Override
        public final java.lang.String getVSwitchId() {
            return this.vSwitchId;
        }

        @Override
        public final java.lang.String getZoneId() {
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
            if (this.getBackupRetentionPeriod() != null) {
                data.set("backupRetentionPeriod", om.valueToTree(this.getBackupRetentionPeriod()));
            }
            if (this.getCategory() != null) {
                data.set("category", om.valueToTree(this.getCategory()));
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
            if (this.getEncryptionKey() != null) {
                data.set("encryptionKey", om.valueToTree(this.getEncryptionKey()));
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
            if (this.getResourceGroupId() != null) {
                data.set("resourceGroupId", om.valueToTree(this.getResourceGroupId()));
            }
            if (this.getRoleArn() != null) {
                data.set("roleArn", om.valueToTree(this.getRoleArn()));
            }
            if (this.getSecurityGroupId() != null) {
                data.set("securityGroupId", om.valueToTree(this.getSecurityGroupId()));
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
            if (this.backupRetentionPeriod != null ? !this.backupRetentionPeriod.equals(that.backupRetentionPeriod) : that.backupRetentionPeriod != null) return false;
            if (this.category != null ? !this.category.equals(that.category) : that.category != null) return false;
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
            if (this.encryptionKey != null ? !this.encryptionKey.equals(that.encryptionKey) : that.encryptionKey != null) return false;
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
            if (this.resourceGroupId != null ? !this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId != null) return false;
            if (this.roleArn != null ? !this.roleArn.equals(that.roleArn) : that.roleArn != null) return false;
            if (this.securityGroupId != null ? !this.securityGroupId.equals(that.securityGroupId) : that.securityGroupId != null) return false;
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
            result = 31 * result + (this.backupRetentionPeriod != null ? this.backupRetentionPeriod.hashCode() : 0);
            result = 31 * result + (this.category != null ? this.category.hashCode() : 0);
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
            result = 31 * result + (this.encryptionKey != null ? this.encryptionKey.hashCode() : 0);
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
            result = 31 * result + (this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0);
            result = 31 * result + (this.roleArn != null ? this.roleArn.hashCode() : 0);
            result = 31 * result + (this.securityGroupId != null ? this.securityGroupId.hashCode() : 0);
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
