package com.aliyun.ros.cdk.polardb;

/**
 * Properties for defining a <code>RosDBCluster</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardb-dbcluster
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-03-06T05:59:09.003Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.polardb.$Module.class, fqn = "@alicloud/ros-cdk-polardb.RosDBClusterProps")
@software.amazon.jsii.Jsii.Proxy(RosDBClusterProps.Jsii$Proxy.class)
public interface RosDBClusterProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDbNodeClass();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDbType();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDbVersion();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getPayType();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAllowShutDown() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getArchitecture() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAutoRenewPeriod() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getBackupRetentionPolicyOnClusterDeletion() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCloneDataPoint() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getClusterNetworkType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getColdStorageOption() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCreationCategory() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCreationOption() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDbClusterDescription() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDbClusterParameters() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDbMinorVersion() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDbNodeNum() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDefaultTimeZone() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDeletionProtection() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getGdnId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getHotStandbyCluster() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getLoosePolarLogBin() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getLooseXEngine() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getLooseXEngineUseMemoryPct() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getLowerCaseTableNames() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getMaintainTime() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getParameterGroupId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPeriod() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPeriodUnit() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getProvisionedIops() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getProxyClass() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getProxyType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRenewalStatus() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRestartMasterNode() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getScaleMax() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getScaleMin() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getScaleRoNumMax() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getScaleRoNumMin() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSecurityGroupIds() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSecurityIpList() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getServerlessType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSourceResourceId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSslEnabled() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getStandbyAz() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getStorageAutoScale() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getStoragePayType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getStorageSpace() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getStorageType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getStorageUpperBound() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getStrictConsistency() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.polardb.RosDBCluster.TagsProperty> getTags() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTdeStatus() {
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
     * @return a {@link Builder} of {@link RosDBClusterProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosDBClusterProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosDBClusterProps> {
        java.lang.Object dbNodeClass;
        java.lang.Object dbType;
        java.lang.Object dbVersion;
        java.lang.Object payType;
        java.lang.Object allowShutDown;
        java.lang.Object architecture;
        java.lang.Object autoRenewPeriod;
        java.lang.Object backupRetentionPolicyOnClusterDeletion;
        java.lang.Object cloneDataPoint;
        java.lang.Object clusterNetworkType;
        java.lang.Object coldStorageOption;
        java.lang.Object creationCategory;
        java.lang.Object creationOption;
        java.lang.Object dbClusterDescription;
        java.lang.Object dbClusterParameters;
        java.lang.Object dbMinorVersion;
        java.lang.Object dbNodeNum;
        java.lang.Object defaultTimeZone;
        java.lang.Object deletionProtection;
        java.lang.Object gdnId;
        java.lang.Object hotStandbyCluster;
        java.lang.Object loosePolarLogBin;
        java.lang.Object looseXEngine;
        java.lang.Object looseXEngineUseMemoryPct;
        java.lang.Object lowerCaseTableNames;
        java.lang.Object maintainTime;
        java.lang.Object parameterGroupId;
        java.lang.Object period;
        java.lang.Object periodUnit;
        java.lang.Object provisionedIops;
        java.lang.Object proxyClass;
        java.lang.Object proxyType;
        java.lang.Object renewalStatus;
        java.lang.Object resourceGroupId;
        java.lang.Object restartMasterNode;
        java.lang.Object scaleMax;
        java.lang.Object scaleMin;
        java.lang.Object scaleRoNumMax;
        java.lang.Object scaleRoNumMin;
        java.lang.Object securityGroupIds;
        java.lang.Object securityIpList;
        java.lang.Object serverlessType;
        java.lang.Object sourceResourceId;
        java.lang.Object sslEnabled;
        java.lang.Object standbyAz;
        java.lang.Object storageAutoScale;
        java.lang.Object storagePayType;
        java.lang.Object storageSpace;
        java.lang.Object storageType;
        java.lang.Object storageUpperBound;
        java.lang.Object strictConsistency;
        java.util.List<com.aliyun.ros.cdk.polardb.RosDBCluster.TagsProperty> tags;
        java.lang.Object tdeStatus;
        java.lang.Object vpcId;
        java.lang.Object vSwitchId;
        java.lang.Object zoneId;

        /**
         * Sets the value of {@link RosDBClusterProps#getDbNodeClass}
         * @param dbNodeClass the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder dbNodeClass(java.lang.String dbNodeClass) {
            this.dbNodeClass = dbNodeClass;
            return this;
        }

        /**
         * Sets the value of {@link RosDBClusterProps#getDbNodeClass}
         * @param dbNodeClass the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder dbNodeClass(com.aliyun.ros.cdk.core.IResolvable dbNodeClass) {
            this.dbNodeClass = dbNodeClass;
            return this;
        }

        /**
         * Sets the value of {@link RosDBClusterProps#getDbType}
         * @param dbType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder dbType(java.lang.String dbType) {
            this.dbType = dbType;
            return this;
        }

        /**
         * Sets the value of {@link RosDBClusterProps#getDbType}
         * @param dbType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder dbType(com.aliyun.ros.cdk.core.IResolvable dbType) {
            this.dbType = dbType;
            return this;
        }

        /**
         * Sets the value of {@link RosDBClusterProps#getDbVersion}
         * @param dbVersion the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder dbVersion(java.lang.String dbVersion) {
            this.dbVersion = dbVersion;
            return this;
        }

        /**
         * Sets the value of {@link RosDBClusterProps#getDbVersion}
         * @param dbVersion the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder dbVersion(com.aliyun.ros.cdk.core.IResolvable dbVersion) {
            this.dbVersion = dbVersion;
            return this;
        }

        /**
         * Sets the value of {@link RosDBClusterProps#getPayType}
         * @param payType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder payType(java.lang.String payType) {
            this.payType = payType;
            return this;
        }

        /**
         * Sets the value of {@link RosDBClusterProps#getPayType}
         * @param payType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder payType(com.aliyun.ros.cdk.core.IResolvable payType) {
            this.payType = payType;
            return this;
        }

        /**
         * Sets the value of {@link RosDBClusterProps#getAllowShutDown}
         * @param allowShutDown the value to be set.
         * @return {@code this}
         */
        public Builder allowShutDown(java.lang.Boolean allowShutDown) {
            this.allowShutDown = allowShutDown;
            return this;
        }

        /**
         * Sets the value of {@link RosDBClusterProps#getAllowShutDown}
         * @param allowShutDown the value to be set.
         * @return {@code this}
         */
        public Builder allowShutDown(com.aliyun.ros.cdk.core.IResolvable allowShutDown) {
            this.allowShutDown = allowShutDown;
            return this;
        }

        /**
         * Sets the value of {@link RosDBClusterProps#getArchitecture}
         * @param architecture the value to be set.
         * @return {@code this}
         */
        public Builder architecture(java.lang.String architecture) {
            this.architecture = architecture;
            return this;
        }

        /**
         * Sets the value of {@link RosDBClusterProps#getArchitecture}
         * @param architecture the value to be set.
         * @return {@code this}
         */
        public Builder architecture(com.aliyun.ros.cdk.core.IResolvable architecture) {
            this.architecture = architecture;
            return this;
        }

        /**
         * Sets the value of {@link RosDBClusterProps#getAutoRenewPeriod}
         * @param autoRenewPeriod the value to be set.
         * @return {@code this}
         */
        public Builder autoRenewPeriod(java.lang.Number autoRenewPeriod) {
            this.autoRenewPeriod = autoRenewPeriod;
            return this;
        }

        /**
         * Sets the value of {@link RosDBClusterProps#getAutoRenewPeriod}
         * @param autoRenewPeriod the value to be set.
         * @return {@code this}
         */
        public Builder autoRenewPeriod(com.aliyun.ros.cdk.core.IResolvable autoRenewPeriod) {
            this.autoRenewPeriod = autoRenewPeriod;
            return this;
        }

        /**
         * Sets the value of {@link RosDBClusterProps#getBackupRetentionPolicyOnClusterDeletion}
         * @param backupRetentionPolicyOnClusterDeletion the value to be set.
         * @return {@code this}
         */
        public Builder backupRetentionPolicyOnClusterDeletion(java.lang.String backupRetentionPolicyOnClusterDeletion) {
            this.backupRetentionPolicyOnClusterDeletion = backupRetentionPolicyOnClusterDeletion;
            return this;
        }

        /**
         * Sets the value of {@link RosDBClusterProps#getBackupRetentionPolicyOnClusterDeletion}
         * @param backupRetentionPolicyOnClusterDeletion the value to be set.
         * @return {@code this}
         */
        public Builder backupRetentionPolicyOnClusterDeletion(com.aliyun.ros.cdk.core.IResolvable backupRetentionPolicyOnClusterDeletion) {
            this.backupRetentionPolicyOnClusterDeletion = backupRetentionPolicyOnClusterDeletion;
            return this;
        }

        /**
         * Sets the value of {@link RosDBClusterProps#getCloneDataPoint}
         * @param cloneDataPoint the value to be set.
         * @return {@code this}
         */
        public Builder cloneDataPoint(java.lang.String cloneDataPoint) {
            this.cloneDataPoint = cloneDataPoint;
            return this;
        }

        /**
         * Sets the value of {@link RosDBClusterProps#getCloneDataPoint}
         * @param cloneDataPoint the value to be set.
         * @return {@code this}
         */
        public Builder cloneDataPoint(com.aliyun.ros.cdk.core.IResolvable cloneDataPoint) {
            this.cloneDataPoint = cloneDataPoint;
            return this;
        }

        /**
         * Sets the value of {@link RosDBClusterProps#getClusterNetworkType}
         * @param clusterNetworkType the value to be set.
         * @return {@code this}
         */
        public Builder clusterNetworkType(java.lang.String clusterNetworkType) {
            this.clusterNetworkType = clusterNetworkType;
            return this;
        }

        /**
         * Sets the value of {@link RosDBClusterProps#getClusterNetworkType}
         * @param clusterNetworkType the value to be set.
         * @return {@code this}
         */
        public Builder clusterNetworkType(com.aliyun.ros.cdk.core.IResolvable clusterNetworkType) {
            this.clusterNetworkType = clusterNetworkType;
            return this;
        }

        /**
         * Sets the value of {@link RosDBClusterProps#getColdStorageOption}
         * @param coldStorageOption the value to be set.
         * @return {@code this}
         */
        public Builder coldStorageOption(com.aliyun.ros.cdk.core.IResolvable coldStorageOption) {
            this.coldStorageOption = coldStorageOption;
            return this;
        }

        /**
         * Sets the value of {@link RosDBClusterProps#getColdStorageOption}
         * @param coldStorageOption the value to be set.
         * @return {@code this}
         */
        public Builder coldStorageOption(com.aliyun.ros.cdk.polardb.RosDBCluster.ColdStorageOptionProperty coldStorageOption) {
            this.coldStorageOption = coldStorageOption;
            return this;
        }

        /**
         * Sets the value of {@link RosDBClusterProps#getCreationCategory}
         * @param creationCategory the value to be set.
         * @return {@code this}
         */
        public Builder creationCategory(java.lang.String creationCategory) {
            this.creationCategory = creationCategory;
            return this;
        }

        /**
         * Sets the value of {@link RosDBClusterProps#getCreationCategory}
         * @param creationCategory the value to be set.
         * @return {@code this}
         */
        public Builder creationCategory(com.aliyun.ros.cdk.core.IResolvable creationCategory) {
            this.creationCategory = creationCategory;
            return this;
        }

        /**
         * Sets the value of {@link RosDBClusterProps#getCreationOption}
         * @param creationOption the value to be set.
         * @return {@code this}
         */
        public Builder creationOption(java.lang.String creationOption) {
            this.creationOption = creationOption;
            return this;
        }

        /**
         * Sets the value of {@link RosDBClusterProps#getCreationOption}
         * @param creationOption the value to be set.
         * @return {@code this}
         */
        public Builder creationOption(com.aliyun.ros.cdk.core.IResolvable creationOption) {
            this.creationOption = creationOption;
            return this;
        }

        /**
         * Sets the value of {@link RosDBClusterProps#getDbClusterDescription}
         * @param dbClusterDescription the value to be set.
         * @return {@code this}
         */
        public Builder dbClusterDescription(java.lang.String dbClusterDescription) {
            this.dbClusterDescription = dbClusterDescription;
            return this;
        }

        /**
         * Sets the value of {@link RosDBClusterProps#getDbClusterDescription}
         * @param dbClusterDescription the value to be set.
         * @return {@code this}
         */
        public Builder dbClusterDescription(com.aliyun.ros.cdk.core.IResolvable dbClusterDescription) {
            this.dbClusterDescription = dbClusterDescription;
            return this;
        }

        /**
         * Sets the value of {@link RosDBClusterProps#getDbClusterParameters}
         * @param dbClusterParameters the value to be set.
         * @return {@code this}
         */
        public Builder dbClusterParameters(com.aliyun.ros.cdk.core.IResolvable dbClusterParameters) {
            this.dbClusterParameters = dbClusterParameters;
            return this;
        }

        /**
         * Sets the value of {@link RosDBClusterProps#getDbClusterParameters}
         * @param dbClusterParameters the value to be set.
         * @return {@code this}
         */
        public Builder dbClusterParameters(com.aliyun.ros.cdk.polardb.RosDBCluster.DBClusterParametersProperty dbClusterParameters) {
            this.dbClusterParameters = dbClusterParameters;
            return this;
        }

        /**
         * Sets the value of {@link RosDBClusterProps#getDbMinorVersion}
         * @param dbMinorVersion the value to be set.
         * @return {@code this}
         */
        public Builder dbMinorVersion(java.lang.String dbMinorVersion) {
            this.dbMinorVersion = dbMinorVersion;
            return this;
        }

        /**
         * Sets the value of {@link RosDBClusterProps#getDbMinorVersion}
         * @param dbMinorVersion the value to be set.
         * @return {@code this}
         */
        public Builder dbMinorVersion(com.aliyun.ros.cdk.core.IResolvable dbMinorVersion) {
            this.dbMinorVersion = dbMinorVersion;
            return this;
        }

        /**
         * Sets the value of {@link RosDBClusterProps#getDbNodeNum}
         * @param dbNodeNum the value to be set.
         * @return {@code this}
         */
        public Builder dbNodeNum(java.lang.Number dbNodeNum) {
            this.dbNodeNum = dbNodeNum;
            return this;
        }

        /**
         * Sets the value of {@link RosDBClusterProps#getDbNodeNum}
         * @param dbNodeNum the value to be set.
         * @return {@code this}
         */
        public Builder dbNodeNum(com.aliyun.ros.cdk.core.IResolvable dbNodeNum) {
            this.dbNodeNum = dbNodeNum;
            return this;
        }

        /**
         * Sets the value of {@link RosDBClusterProps#getDefaultTimeZone}
         * @param defaultTimeZone the value to be set.
         * @return {@code this}
         */
        public Builder defaultTimeZone(java.lang.String defaultTimeZone) {
            this.defaultTimeZone = defaultTimeZone;
            return this;
        }

        /**
         * Sets the value of {@link RosDBClusterProps#getDefaultTimeZone}
         * @param defaultTimeZone the value to be set.
         * @return {@code this}
         */
        public Builder defaultTimeZone(com.aliyun.ros.cdk.core.IResolvable defaultTimeZone) {
            this.defaultTimeZone = defaultTimeZone;
            return this;
        }

        /**
         * Sets the value of {@link RosDBClusterProps#getDeletionProtection}
         * @param deletionProtection the value to be set.
         * @return {@code this}
         */
        public Builder deletionProtection(java.lang.Boolean deletionProtection) {
            this.deletionProtection = deletionProtection;
            return this;
        }

        /**
         * Sets the value of {@link RosDBClusterProps#getDeletionProtection}
         * @param deletionProtection the value to be set.
         * @return {@code this}
         */
        public Builder deletionProtection(com.aliyun.ros.cdk.core.IResolvable deletionProtection) {
            this.deletionProtection = deletionProtection;
            return this;
        }

        /**
         * Sets the value of {@link RosDBClusterProps#getGdnId}
         * @param gdnId the value to be set.
         * @return {@code this}
         */
        public Builder gdnId(java.lang.String gdnId) {
            this.gdnId = gdnId;
            return this;
        }

        /**
         * Sets the value of {@link RosDBClusterProps#getGdnId}
         * @param gdnId the value to be set.
         * @return {@code this}
         */
        public Builder gdnId(com.aliyun.ros.cdk.core.IResolvable gdnId) {
            this.gdnId = gdnId;
            return this;
        }

        /**
         * Sets the value of {@link RosDBClusterProps#getHotStandbyCluster}
         * @param hotStandbyCluster the value to be set.
         * @return {@code this}
         */
        public Builder hotStandbyCluster(java.lang.String hotStandbyCluster) {
            this.hotStandbyCluster = hotStandbyCluster;
            return this;
        }

        /**
         * Sets the value of {@link RosDBClusterProps#getHotStandbyCluster}
         * @param hotStandbyCluster the value to be set.
         * @return {@code this}
         */
        public Builder hotStandbyCluster(com.aliyun.ros.cdk.core.IResolvable hotStandbyCluster) {
            this.hotStandbyCluster = hotStandbyCluster;
            return this;
        }

        /**
         * Sets the value of {@link RosDBClusterProps#getLoosePolarLogBin}
         * @param loosePolarLogBin the value to be set.
         * @return {@code this}
         */
        public Builder loosePolarLogBin(java.lang.String loosePolarLogBin) {
            this.loosePolarLogBin = loosePolarLogBin;
            return this;
        }

        /**
         * Sets the value of {@link RosDBClusterProps#getLoosePolarLogBin}
         * @param loosePolarLogBin the value to be set.
         * @return {@code this}
         */
        public Builder loosePolarLogBin(com.aliyun.ros.cdk.core.IResolvable loosePolarLogBin) {
            this.loosePolarLogBin = loosePolarLogBin;
            return this;
        }

        /**
         * Sets the value of {@link RosDBClusterProps#getLooseXEngine}
         * @param looseXEngine the value to be set.
         * @return {@code this}
         */
        public Builder looseXEngine(java.lang.String looseXEngine) {
            this.looseXEngine = looseXEngine;
            return this;
        }

        /**
         * Sets the value of {@link RosDBClusterProps#getLooseXEngine}
         * @param looseXEngine the value to be set.
         * @return {@code this}
         */
        public Builder looseXEngine(com.aliyun.ros.cdk.core.IResolvable looseXEngine) {
            this.looseXEngine = looseXEngine;
            return this;
        }

        /**
         * Sets the value of {@link RosDBClusterProps#getLooseXEngineUseMemoryPct}
         * @param looseXEngineUseMemoryPct the value to be set.
         * @return {@code this}
         */
        public Builder looseXEngineUseMemoryPct(java.lang.Number looseXEngineUseMemoryPct) {
            this.looseXEngineUseMemoryPct = looseXEngineUseMemoryPct;
            return this;
        }

        /**
         * Sets the value of {@link RosDBClusterProps#getLooseXEngineUseMemoryPct}
         * @param looseXEngineUseMemoryPct the value to be set.
         * @return {@code this}
         */
        public Builder looseXEngineUseMemoryPct(com.aliyun.ros.cdk.core.IResolvable looseXEngineUseMemoryPct) {
            this.looseXEngineUseMemoryPct = looseXEngineUseMemoryPct;
            return this;
        }

        /**
         * Sets the value of {@link RosDBClusterProps#getLowerCaseTableNames}
         * @param lowerCaseTableNames the value to be set.
         * @return {@code this}
         */
        public Builder lowerCaseTableNames(java.lang.Number lowerCaseTableNames) {
            this.lowerCaseTableNames = lowerCaseTableNames;
            return this;
        }

        /**
         * Sets the value of {@link RosDBClusterProps#getLowerCaseTableNames}
         * @param lowerCaseTableNames the value to be set.
         * @return {@code this}
         */
        public Builder lowerCaseTableNames(com.aliyun.ros.cdk.core.IResolvable lowerCaseTableNames) {
            this.lowerCaseTableNames = lowerCaseTableNames;
            return this;
        }

        /**
         * Sets the value of {@link RosDBClusterProps#getMaintainTime}
         * @param maintainTime the value to be set.
         * @return {@code this}
         */
        public Builder maintainTime(java.lang.String maintainTime) {
            this.maintainTime = maintainTime;
            return this;
        }

        /**
         * Sets the value of {@link RosDBClusterProps#getMaintainTime}
         * @param maintainTime the value to be set.
         * @return {@code this}
         */
        public Builder maintainTime(com.aliyun.ros.cdk.core.IResolvable maintainTime) {
            this.maintainTime = maintainTime;
            return this;
        }

        /**
         * Sets the value of {@link RosDBClusterProps#getParameterGroupId}
         * @param parameterGroupId the value to be set.
         * @return {@code this}
         */
        public Builder parameterGroupId(java.lang.String parameterGroupId) {
            this.parameterGroupId = parameterGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosDBClusterProps#getParameterGroupId}
         * @param parameterGroupId the value to be set.
         * @return {@code this}
         */
        public Builder parameterGroupId(com.aliyun.ros.cdk.core.IResolvable parameterGroupId) {
            this.parameterGroupId = parameterGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosDBClusterProps#getPeriod}
         * @param period the value to be set.
         * @return {@code this}
         */
        public Builder period(java.lang.Number period) {
            this.period = period;
            return this;
        }

        /**
         * Sets the value of {@link RosDBClusterProps#getPeriod}
         * @param period the value to be set.
         * @return {@code this}
         */
        public Builder period(com.aliyun.ros.cdk.core.IResolvable period) {
            this.period = period;
            return this;
        }

        /**
         * Sets the value of {@link RosDBClusterProps#getPeriodUnit}
         * @param periodUnit the value to be set.
         * @return {@code this}
         */
        public Builder periodUnit(java.lang.String periodUnit) {
            this.periodUnit = periodUnit;
            return this;
        }

        /**
         * Sets the value of {@link RosDBClusterProps#getPeriodUnit}
         * @param periodUnit the value to be set.
         * @return {@code this}
         */
        public Builder periodUnit(com.aliyun.ros.cdk.core.IResolvable periodUnit) {
            this.periodUnit = periodUnit;
            return this;
        }

        /**
         * Sets the value of {@link RosDBClusterProps#getProvisionedIops}
         * @param provisionedIops the value to be set.
         * @return {@code this}
         */
        public Builder provisionedIops(java.lang.Number provisionedIops) {
            this.provisionedIops = provisionedIops;
            return this;
        }

        /**
         * Sets the value of {@link RosDBClusterProps#getProvisionedIops}
         * @param provisionedIops the value to be set.
         * @return {@code this}
         */
        public Builder provisionedIops(com.aliyun.ros.cdk.core.IResolvable provisionedIops) {
            this.provisionedIops = provisionedIops;
            return this;
        }

        /**
         * Sets the value of {@link RosDBClusterProps#getProxyClass}
         * @param proxyClass the value to be set.
         * @return {@code this}
         */
        public Builder proxyClass(java.lang.String proxyClass) {
            this.proxyClass = proxyClass;
            return this;
        }

        /**
         * Sets the value of {@link RosDBClusterProps#getProxyClass}
         * @param proxyClass the value to be set.
         * @return {@code this}
         */
        public Builder proxyClass(com.aliyun.ros.cdk.core.IResolvable proxyClass) {
            this.proxyClass = proxyClass;
            return this;
        }

        /**
         * Sets the value of {@link RosDBClusterProps#getProxyType}
         * @param proxyType the value to be set.
         * @return {@code this}
         */
        public Builder proxyType(java.lang.String proxyType) {
            this.proxyType = proxyType;
            return this;
        }

        /**
         * Sets the value of {@link RosDBClusterProps#getProxyType}
         * @param proxyType the value to be set.
         * @return {@code this}
         */
        public Builder proxyType(com.aliyun.ros.cdk.core.IResolvable proxyType) {
            this.proxyType = proxyType;
            return this;
        }

        /**
         * Sets the value of {@link RosDBClusterProps#getRenewalStatus}
         * @param renewalStatus the value to be set.
         * @return {@code this}
         */
        public Builder renewalStatus(java.lang.String renewalStatus) {
            this.renewalStatus = renewalStatus;
            return this;
        }

        /**
         * Sets the value of {@link RosDBClusterProps#getRenewalStatus}
         * @param renewalStatus the value to be set.
         * @return {@code this}
         */
        public Builder renewalStatus(com.aliyun.ros.cdk.core.IResolvable renewalStatus) {
            this.renewalStatus = renewalStatus;
            return this;
        }

        /**
         * Sets the value of {@link RosDBClusterProps#getResourceGroupId}
         * @param resourceGroupId the value to be set.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosDBClusterProps#getResourceGroupId}
         * @param resourceGroupId the value to be set.
         * @return {@code this}
         */
        public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosDBClusterProps#getRestartMasterNode}
         * @param restartMasterNode the value to be set.
         * @return {@code this}
         */
        public Builder restartMasterNode(java.lang.Boolean restartMasterNode) {
            this.restartMasterNode = restartMasterNode;
            return this;
        }

        /**
         * Sets the value of {@link RosDBClusterProps#getRestartMasterNode}
         * @param restartMasterNode the value to be set.
         * @return {@code this}
         */
        public Builder restartMasterNode(com.aliyun.ros.cdk.core.IResolvable restartMasterNode) {
            this.restartMasterNode = restartMasterNode;
            return this;
        }

        /**
         * Sets the value of {@link RosDBClusterProps#getScaleMax}
         * @param scaleMax the value to be set.
         * @return {@code this}
         */
        public Builder scaleMax(java.lang.Number scaleMax) {
            this.scaleMax = scaleMax;
            return this;
        }

        /**
         * Sets the value of {@link RosDBClusterProps#getScaleMax}
         * @param scaleMax the value to be set.
         * @return {@code this}
         */
        public Builder scaleMax(com.aliyun.ros.cdk.core.IResolvable scaleMax) {
            this.scaleMax = scaleMax;
            return this;
        }

        /**
         * Sets the value of {@link RosDBClusterProps#getScaleMin}
         * @param scaleMin the value to be set.
         * @return {@code this}
         */
        public Builder scaleMin(java.lang.Number scaleMin) {
            this.scaleMin = scaleMin;
            return this;
        }

        /**
         * Sets the value of {@link RosDBClusterProps#getScaleMin}
         * @param scaleMin the value to be set.
         * @return {@code this}
         */
        public Builder scaleMin(com.aliyun.ros.cdk.core.IResolvable scaleMin) {
            this.scaleMin = scaleMin;
            return this;
        }

        /**
         * Sets the value of {@link RosDBClusterProps#getScaleRoNumMax}
         * @param scaleRoNumMax the value to be set.
         * @return {@code this}
         */
        public Builder scaleRoNumMax(java.lang.Number scaleRoNumMax) {
            this.scaleRoNumMax = scaleRoNumMax;
            return this;
        }

        /**
         * Sets the value of {@link RosDBClusterProps#getScaleRoNumMax}
         * @param scaleRoNumMax the value to be set.
         * @return {@code this}
         */
        public Builder scaleRoNumMax(com.aliyun.ros.cdk.core.IResolvable scaleRoNumMax) {
            this.scaleRoNumMax = scaleRoNumMax;
            return this;
        }

        /**
         * Sets the value of {@link RosDBClusterProps#getScaleRoNumMin}
         * @param scaleRoNumMin the value to be set.
         * @return {@code this}
         */
        public Builder scaleRoNumMin(java.lang.Number scaleRoNumMin) {
            this.scaleRoNumMin = scaleRoNumMin;
            return this;
        }

        /**
         * Sets the value of {@link RosDBClusterProps#getScaleRoNumMin}
         * @param scaleRoNumMin the value to be set.
         * @return {@code this}
         */
        public Builder scaleRoNumMin(com.aliyun.ros.cdk.core.IResolvable scaleRoNumMin) {
            this.scaleRoNumMin = scaleRoNumMin;
            return this;
        }

        /**
         * Sets the value of {@link RosDBClusterProps#getSecurityGroupIds}
         * @param securityGroupIds the value to be set.
         * @return {@code this}
         */
        public Builder securityGroupIds(com.aliyun.ros.cdk.core.IResolvable securityGroupIds) {
            this.securityGroupIds = securityGroupIds;
            return this;
        }

        /**
         * Sets the value of {@link RosDBClusterProps#getSecurityGroupIds}
         * @param securityGroupIds the value to be set.
         * @return {@code this}
         */
        public Builder securityGroupIds(java.util.List<? extends java.lang.Object> securityGroupIds) {
            this.securityGroupIds = securityGroupIds;
            return this;
        }

        /**
         * Sets the value of {@link RosDBClusterProps#getSecurityIpList}
         * @param securityIpList the value to be set.
         * @return {@code this}
         */
        public Builder securityIpList(java.lang.String securityIpList) {
            this.securityIpList = securityIpList;
            return this;
        }

        /**
         * Sets the value of {@link RosDBClusterProps#getSecurityIpList}
         * @param securityIpList the value to be set.
         * @return {@code this}
         */
        public Builder securityIpList(com.aliyun.ros.cdk.core.IResolvable securityIpList) {
            this.securityIpList = securityIpList;
            return this;
        }

        /**
         * Sets the value of {@link RosDBClusterProps#getServerlessType}
         * @param serverlessType the value to be set.
         * @return {@code this}
         */
        public Builder serverlessType(java.lang.String serverlessType) {
            this.serverlessType = serverlessType;
            return this;
        }

        /**
         * Sets the value of {@link RosDBClusterProps#getServerlessType}
         * @param serverlessType the value to be set.
         * @return {@code this}
         */
        public Builder serverlessType(com.aliyun.ros.cdk.core.IResolvable serverlessType) {
            this.serverlessType = serverlessType;
            return this;
        }

        /**
         * Sets the value of {@link RosDBClusterProps#getSourceResourceId}
         * @param sourceResourceId the value to be set.
         * @return {@code this}
         */
        public Builder sourceResourceId(java.lang.String sourceResourceId) {
            this.sourceResourceId = sourceResourceId;
            return this;
        }

        /**
         * Sets the value of {@link RosDBClusterProps#getSourceResourceId}
         * @param sourceResourceId the value to be set.
         * @return {@code this}
         */
        public Builder sourceResourceId(com.aliyun.ros.cdk.core.IResolvable sourceResourceId) {
            this.sourceResourceId = sourceResourceId;
            return this;
        }

        /**
         * Sets the value of {@link RosDBClusterProps#getSslEnabled}
         * @param sslEnabled the value to be set.
         * @return {@code this}
         */
        public Builder sslEnabled(java.lang.String sslEnabled) {
            this.sslEnabled = sslEnabled;
            return this;
        }

        /**
         * Sets the value of {@link RosDBClusterProps#getSslEnabled}
         * @param sslEnabled the value to be set.
         * @return {@code this}
         */
        public Builder sslEnabled(com.aliyun.ros.cdk.core.IResolvable sslEnabled) {
            this.sslEnabled = sslEnabled;
            return this;
        }

        /**
         * Sets the value of {@link RosDBClusterProps#getStandbyAz}
         * @param standbyAz the value to be set.
         * @return {@code this}
         */
        public Builder standbyAz(java.lang.String standbyAz) {
            this.standbyAz = standbyAz;
            return this;
        }

        /**
         * Sets the value of {@link RosDBClusterProps#getStandbyAz}
         * @param standbyAz the value to be set.
         * @return {@code this}
         */
        public Builder standbyAz(com.aliyun.ros.cdk.core.IResolvable standbyAz) {
            this.standbyAz = standbyAz;
            return this;
        }

        /**
         * Sets the value of {@link RosDBClusterProps#getStorageAutoScale}
         * @param storageAutoScale the value to be set.
         * @return {@code this}
         */
        public Builder storageAutoScale(java.lang.String storageAutoScale) {
            this.storageAutoScale = storageAutoScale;
            return this;
        }

        /**
         * Sets the value of {@link RosDBClusterProps#getStorageAutoScale}
         * @param storageAutoScale the value to be set.
         * @return {@code this}
         */
        public Builder storageAutoScale(com.aliyun.ros.cdk.core.IResolvable storageAutoScale) {
            this.storageAutoScale = storageAutoScale;
            return this;
        }

        /**
         * Sets the value of {@link RosDBClusterProps#getStoragePayType}
         * @param storagePayType the value to be set.
         * @return {@code this}
         */
        public Builder storagePayType(java.lang.String storagePayType) {
            this.storagePayType = storagePayType;
            return this;
        }

        /**
         * Sets the value of {@link RosDBClusterProps#getStoragePayType}
         * @param storagePayType the value to be set.
         * @return {@code this}
         */
        public Builder storagePayType(com.aliyun.ros.cdk.core.IResolvable storagePayType) {
            this.storagePayType = storagePayType;
            return this;
        }

        /**
         * Sets the value of {@link RosDBClusterProps#getStorageSpace}
         * @param storageSpace the value to be set.
         * @return {@code this}
         */
        public Builder storageSpace(java.lang.Number storageSpace) {
            this.storageSpace = storageSpace;
            return this;
        }

        /**
         * Sets the value of {@link RosDBClusterProps#getStorageSpace}
         * @param storageSpace the value to be set.
         * @return {@code this}
         */
        public Builder storageSpace(com.aliyun.ros.cdk.core.IResolvable storageSpace) {
            this.storageSpace = storageSpace;
            return this;
        }

        /**
         * Sets the value of {@link RosDBClusterProps#getStorageType}
         * @param storageType the value to be set.
         * @return {@code this}
         */
        public Builder storageType(java.lang.String storageType) {
            this.storageType = storageType;
            return this;
        }

        /**
         * Sets the value of {@link RosDBClusterProps#getStorageType}
         * @param storageType the value to be set.
         * @return {@code this}
         */
        public Builder storageType(com.aliyun.ros.cdk.core.IResolvable storageType) {
            this.storageType = storageType;
            return this;
        }

        /**
         * Sets the value of {@link RosDBClusterProps#getStorageUpperBound}
         * @param storageUpperBound the value to be set.
         * @return {@code this}
         */
        public Builder storageUpperBound(java.lang.Number storageUpperBound) {
            this.storageUpperBound = storageUpperBound;
            return this;
        }

        /**
         * Sets the value of {@link RosDBClusterProps#getStorageUpperBound}
         * @param storageUpperBound the value to be set.
         * @return {@code this}
         */
        public Builder storageUpperBound(com.aliyun.ros.cdk.core.IResolvable storageUpperBound) {
            this.storageUpperBound = storageUpperBound;
            return this;
        }

        /**
         * Sets the value of {@link RosDBClusterProps#getStrictConsistency}
         * @param strictConsistency the value to be set.
         * @return {@code this}
         */
        public Builder strictConsistency(java.lang.String strictConsistency) {
            this.strictConsistency = strictConsistency;
            return this;
        }

        /**
         * Sets the value of {@link RosDBClusterProps#getStrictConsistency}
         * @param strictConsistency the value to be set.
         * @return {@code this}
         */
        public Builder strictConsistency(com.aliyun.ros.cdk.core.IResolvable strictConsistency) {
            this.strictConsistency = strictConsistency;
            return this;
        }

        /**
         * Sets the value of {@link RosDBClusterProps#getTags}
         * @param tags the value to be set.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder tags(java.util.List<? extends com.aliyun.ros.cdk.polardb.RosDBCluster.TagsProperty> tags) {
            this.tags = (java.util.List<com.aliyun.ros.cdk.polardb.RosDBCluster.TagsProperty>)tags;
            return this;
        }

        /**
         * Sets the value of {@link RosDBClusterProps#getTdeStatus}
         * @param tdeStatus the value to be set.
         * @return {@code this}
         */
        public Builder tdeStatus(java.lang.Boolean tdeStatus) {
            this.tdeStatus = tdeStatus;
            return this;
        }

        /**
         * Sets the value of {@link RosDBClusterProps#getTdeStatus}
         * @param tdeStatus the value to be set.
         * @return {@code this}
         */
        public Builder tdeStatus(com.aliyun.ros.cdk.core.IResolvable tdeStatus) {
            this.tdeStatus = tdeStatus;
            return this;
        }

        /**
         * Sets the value of {@link RosDBClusterProps#getVpcId}
         * @param vpcId the value to be set.
         * @return {@code this}
         */
        public Builder vpcId(java.lang.String vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link RosDBClusterProps#getVpcId}
         * @param vpcId the value to be set.
         * @return {@code this}
         */
        public Builder vpcId(com.aliyun.ros.cdk.core.IResolvable vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link RosDBClusterProps#getVSwitchId}
         * @param vSwitchId the value to be set.
         * @return {@code this}
         */
        public Builder vSwitchId(java.lang.String vSwitchId) {
            this.vSwitchId = vSwitchId;
            return this;
        }

        /**
         * Sets the value of {@link RosDBClusterProps#getVSwitchId}
         * @param vSwitchId the value to be set.
         * @return {@code this}
         */
        public Builder vSwitchId(com.aliyun.ros.cdk.core.IResolvable vSwitchId) {
            this.vSwitchId = vSwitchId;
            return this;
        }

        /**
         * Sets the value of {@link RosDBClusterProps#getZoneId}
         * @param zoneId the value to be set.
         * @return {@code this}
         */
        public Builder zoneId(java.lang.String zoneId) {
            this.zoneId = zoneId;
            return this;
        }

        /**
         * Sets the value of {@link RosDBClusterProps#getZoneId}
         * @param zoneId the value to be set.
         * @return {@code this}
         */
        public Builder zoneId(com.aliyun.ros.cdk.core.IResolvable zoneId) {
            this.zoneId = zoneId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosDBClusterProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosDBClusterProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosDBClusterProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosDBClusterProps {
        private final java.lang.Object dbNodeClass;
        private final java.lang.Object dbType;
        private final java.lang.Object dbVersion;
        private final java.lang.Object payType;
        private final java.lang.Object allowShutDown;
        private final java.lang.Object architecture;
        private final java.lang.Object autoRenewPeriod;
        private final java.lang.Object backupRetentionPolicyOnClusterDeletion;
        private final java.lang.Object cloneDataPoint;
        private final java.lang.Object clusterNetworkType;
        private final java.lang.Object coldStorageOption;
        private final java.lang.Object creationCategory;
        private final java.lang.Object creationOption;
        private final java.lang.Object dbClusterDescription;
        private final java.lang.Object dbClusterParameters;
        private final java.lang.Object dbMinorVersion;
        private final java.lang.Object dbNodeNum;
        private final java.lang.Object defaultTimeZone;
        private final java.lang.Object deletionProtection;
        private final java.lang.Object gdnId;
        private final java.lang.Object hotStandbyCluster;
        private final java.lang.Object loosePolarLogBin;
        private final java.lang.Object looseXEngine;
        private final java.lang.Object looseXEngineUseMemoryPct;
        private final java.lang.Object lowerCaseTableNames;
        private final java.lang.Object maintainTime;
        private final java.lang.Object parameterGroupId;
        private final java.lang.Object period;
        private final java.lang.Object periodUnit;
        private final java.lang.Object provisionedIops;
        private final java.lang.Object proxyClass;
        private final java.lang.Object proxyType;
        private final java.lang.Object renewalStatus;
        private final java.lang.Object resourceGroupId;
        private final java.lang.Object restartMasterNode;
        private final java.lang.Object scaleMax;
        private final java.lang.Object scaleMin;
        private final java.lang.Object scaleRoNumMax;
        private final java.lang.Object scaleRoNumMin;
        private final java.lang.Object securityGroupIds;
        private final java.lang.Object securityIpList;
        private final java.lang.Object serverlessType;
        private final java.lang.Object sourceResourceId;
        private final java.lang.Object sslEnabled;
        private final java.lang.Object standbyAz;
        private final java.lang.Object storageAutoScale;
        private final java.lang.Object storagePayType;
        private final java.lang.Object storageSpace;
        private final java.lang.Object storageType;
        private final java.lang.Object storageUpperBound;
        private final java.lang.Object strictConsistency;
        private final java.util.List<com.aliyun.ros.cdk.polardb.RosDBCluster.TagsProperty> tags;
        private final java.lang.Object tdeStatus;
        private final java.lang.Object vpcId;
        private final java.lang.Object vSwitchId;
        private final java.lang.Object zoneId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.dbNodeClass = software.amazon.jsii.Kernel.get(this, "dbNodeClass", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dbType = software.amazon.jsii.Kernel.get(this, "dbType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dbVersion = software.amazon.jsii.Kernel.get(this, "dbVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.payType = software.amazon.jsii.Kernel.get(this, "payType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.allowShutDown = software.amazon.jsii.Kernel.get(this, "allowShutDown", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.architecture = software.amazon.jsii.Kernel.get(this, "architecture", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.autoRenewPeriod = software.amazon.jsii.Kernel.get(this, "autoRenewPeriod", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.backupRetentionPolicyOnClusterDeletion = software.amazon.jsii.Kernel.get(this, "backupRetentionPolicyOnClusterDeletion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.cloneDataPoint = software.amazon.jsii.Kernel.get(this, "cloneDataPoint", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.clusterNetworkType = software.amazon.jsii.Kernel.get(this, "clusterNetworkType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.coldStorageOption = software.amazon.jsii.Kernel.get(this, "coldStorageOption", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.creationCategory = software.amazon.jsii.Kernel.get(this, "creationCategory", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.creationOption = software.amazon.jsii.Kernel.get(this, "creationOption", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dbClusterDescription = software.amazon.jsii.Kernel.get(this, "dbClusterDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dbClusterParameters = software.amazon.jsii.Kernel.get(this, "dbClusterParameters", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dbMinorVersion = software.amazon.jsii.Kernel.get(this, "dbMinorVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dbNodeNum = software.amazon.jsii.Kernel.get(this, "dbNodeNum", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.defaultTimeZone = software.amazon.jsii.Kernel.get(this, "defaultTimeZone", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.deletionProtection = software.amazon.jsii.Kernel.get(this, "deletionProtection", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.gdnId = software.amazon.jsii.Kernel.get(this, "gdnId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.hotStandbyCluster = software.amazon.jsii.Kernel.get(this, "hotStandbyCluster", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.loosePolarLogBin = software.amazon.jsii.Kernel.get(this, "loosePolarLogBin", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.looseXEngine = software.amazon.jsii.Kernel.get(this, "looseXEngine", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.looseXEngineUseMemoryPct = software.amazon.jsii.Kernel.get(this, "looseXEngineUseMemoryPct", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.lowerCaseTableNames = software.amazon.jsii.Kernel.get(this, "lowerCaseTableNames", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.maintainTime = software.amazon.jsii.Kernel.get(this, "maintainTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.parameterGroupId = software.amazon.jsii.Kernel.get(this, "parameterGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.period = software.amazon.jsii.Kernel.get(this, "period", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.periodUnit = software.amazon.jsii.Kernel.get(this, "periodUnit", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.provisionedIops = software.amazon.jsii.Kernel.get(this, "provisionedIops", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.proxyClass = software.amazon.jsii.Kernel.get(this, "proxyClass", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.proxyType = software.amazon.jsii.Kernel.get(this, "proxyType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.renewalStatus = software.amazon.jsii.Kernel.get(this, "renewalStatus", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.restartMasterNode = software.amazon.jsii.Kernel.get(this, "restartMasterNode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.scaleMax = software.amazon.jsii.Kernel.get(this, "scaleMax", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.scaleMin = software.amazon.jsii.Kernel.get(this, "scaleMin", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.scaleRoNumMax = software.amazon.jsii.Kernel.get(this, "scaleRoNumMax", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.scaleRoNumMin = software.amazon.jsii.Kernel.get(this, "scaleRoNumMin", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.securityGroupIds = software.amazon.jsii.Kernel.get(this, "securityGroupIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.securityIpList = software.amazon.jsii.Kernel.get(this, "securityIpList", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.serverlessType = software.amazon.jsii.Kernel.get(this, "serverlessType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.sourceResourceId = software.amazon.jsii.Kernel.get(this, "sourceResourceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.sslEnabled = software.amazon.jsii.Kernel.get(this, "sslEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.standbyAz = software.amazon.jsii.Kernel.get(this, "standbyAz", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.storageAutoScale = software.amazon.jsii.Kernel.get(this, "storageAutoScale", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.storagePayType = software.amazon.jsii.Kernel.get(this, "storagePayType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.storageSpace = software.amazon.jsii.Kernel.get(this, "storageSpace", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.storageType = software.amazon.jsii.Kernel.get(this, "storageType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.storageUpperBound = software.amazon.jsii.Kernel.get(this, "storageUpperBound", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.strictConsistency = software.amazon.jsii.Kernel.get(this, "strictConsistency", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tags = software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.polardb.RosDBCluster.TagsProperty.class)));
            this.tdeStatus = software.amazon.jsii.Kernel.get(this, "tdeStatus", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
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
            this.dbNodeClass = java.util.Objects.requireNonNull(builder.dbNodeClass, "dbNodeClass is required");
            this.dbType = java.util.Objects.requireNonNull(builder.dbType, "dbType is required");
            this.dbVersion = java.util.Objects.requireNonNull(builder.dbVersion, "dbVersion is required");
            this.payType = java.util.Objects.requireNonNull(builder.payType, "payType is required");
            this.allowShutDown = builder.allowShutDown;
            this.architecture = builder.architecture;
            this.autoRenewPeriod = builder.autoRenewPeriod;
            this.backupRetentionPolicyOnClusterDeletion = builder.backupRetentionPolicyOnClusterDeletion;
            this.cloneDataPoint = builder.cloneDataPoint;
            this.clusterNetworkType = builder.clusterNetworkType;
            this.coldStorageOption = builder.coldStorageOption;
            this.creationCategory = builder.creationCategory;
            this.creationOption = builder.creationOption;
            this.dbClusterDescription = builder.dbClusterDescription;
            this.dbClusterParameters = builder.dbClusterParameters;
            this.dbMinorVersion = builder.dbMinorVersion;
            this.dbNodeNum = builder.dbNodeNum;
            this.defaultTimeZone = builder.defaultTimeZone;
            this.deletionProtection = builder.deletionProtection;
            this.gdnId = builder.gdnId;
            this.hotStandbyCluster = builder.hotStandbyCluster;
            this.loosePolarLogBin = builder.loosePolarLogBin;
            this.looseXEngine = builder.looseXEngine;
            this.looseXEngineUseMemoryPct = builder.looseXEngineUseMemoryPct;
            this.lowerCaseTableNames = builder.lowerCaseTableNames;
            this.maintainTime = builder.maintainTime;
            this.parameterGroupId = builder.parameterGroupId;
            this.period = builder.period;
            this.periodUnit = builder.periodUnit;
            this.provisionedIops = builder.provisionedIops;
            this.proxyClass = builder.proxyClass;
            this.proxyType = builder.proxyType;
            this.renewalStatus = builder.renewalStatus;
            this.resourceGroupId = builder.resourceGroupId;
            this.restartMasterNode = builder.restartMasterNode;
            this.scaleMax = builder.scaleMax;
            this.scaleMin = builder.scaleMin;
            this.scaleRoNumMax = builder.scaleRoNumMax;
            this.scaleRoNumMin = builder.scaleRoNumMin;
            this.securityGroupIds = builder.securityGroupIds;
            this.securityIpList = builder.securityIpList;
            this.serverlessType = builder.serverlessType;
            this.sourceResourceId = builder.sourceResourceId;
            this.sslEnabled = builder.sslEnabled;
            this.standbyAz = builder.standbyAz;
            this.storageAutoScale = builder.storageAutoScale;
            this.storagePayType = builder.storagePayType;
            this.storageSpace = builder.storageSpace;
            this.storageType = builder.storageType;
            this.storageUpperBound = builder.storageUpperBound;
            this.strictConsistency = builder.strictConsistency;
            this.tags = (java.util.List<com.aliyun.ros.cdk.polardb.RosDBCluster.TagsProperty>)builder.tags;
            this.tdeStatus = builder.tdeStatus;
            this.vpcId = builder.vpcId;
            this.vSwitchId = builder.vSwitchId;
            this.zoneId = builder.zoneId;
        }

        @Override
        public final java.lang.Object getDbNodeClass() {
            return this.dbNodeClass;
        }

        @Override
        public final java.lang.Object getDbType() {
            return this.dbType;
        }

        @Override
        public final java.lang.Object getDbVersion() {
            return this.dbVersion;
        }

        @Override
        public final java.lang.Object getPayType() {
            return this.payType;
        }

        @Override
        public final java.lang.Object getAllowShutDown() {
            return this.allowShutDown;
        }

        @Override
        public final java.lang.Object getArchitecture() {
            return this.architecture;
        }

        @Override
        public final java.lang.Object getAutoRenewPeriod() {
            return this.autoRenewPeriod;
        }

        @Override
        public final java.lang.Object getBackupRetentionPolicyOnClusterDeletion() {
            return this.backupRetentionPolicyOnClusterDeletion;
        }

        @Override
        public final java.lang.Object getCloneDataPoint() {
            return this.cloneDataPoint;
        }

        @Override
        public final java.lang.Object getClusterNetworkType() {
            return this.clusterNetworkType;
        }

        @Override
        public final java.lang.Object getColdStorageOption() {
            return this.coldStorageOption;
        }

        @Override
        public final java.lang.Object getCreationCategory() {
            return this.creationCategory;
        }

        @Override
        public final java.lang.Object getCreationOption() {
            return this.creationOption;
        }

        @Override
        public final java.lang.Object getDbClusterDescription() {
            return this.dbClusterDescription;
        }

        @Override
        public final java.lang.Object getDbClusterParameters() {
            return this.dbClusterParameters;
        }

        @Override
        public final java.lang.Object getDbMinorVersion() {
            return this.dbMinorVersion;
        }

        @Override
        public final java.lang.Object getDbNodeNum() {
            return this.dbNodeNum;
        }

        @Override
        public final java.lang.Object getDefaultTimeZone() {
            return this.defaultTimeZone;
        }

        @Override
        public final java.lang.Object getDeletionProtection() {
            return this.deletionProtection;
        }

        @Override
        public final java.lang.Object getGdnId() {
            return this.gdnId;
        }

        @Override
        public final java.lang.Object getHotStandbyCluster() {
            return this.hotStandbyCluster;
        }

        @Override
        public final java.lang.Object getLoosePolarLogBin() {
            return this.loosePolarLogBin;
        }

        @Override
        public final java.lang.Object getLooseXEngine() {
            return this.looseXEngine;
        }

        @Override
        public final java.lang.Object getLooseXEngineUseMemoryPct() {
            return this.looseXEngineUseMemoryPct;
        }

        @Override
        public final java.lang.Object getLowerCaseTableNames() {
            return this.lowerCaseTableNames;
        }

        @Override
        public final java.lang.Object getMaintainTime() {
            return this.maintainTime;
        }

        @Override
        public final java.lang.Object getParameterGroupId() {
            return this.parameterGroupId;
        }

        @Override
        public final java.lang.Object getPeriod() {
            return this.period;
        }

        @Override
        public final java.lang.Object getPeriodUnit() {
            return this.periodUnit;
        }

        @Override
        public final java.lang.Object getProvisionedIops() {
            return this.provisionedIops;
        }

        @Override
        public final java.lang.Object getProxyClass() {
            return this.proxyClass;
        }

        @Override
        public final java.lang.Object getProxyType() {
            return this.proxyType;
        }

        @Override
        public final java.lang.Object getRenewalStatus() {
            return this.renewalStatus;
        }

        @Override
        public final java.lang.Object getResourceGroupId() {
            return this.resourceGroupId;
        }

        @Override
        public final java.lang.Object getRestartMasterNode() {
            return this.restartMasterNode;
        }

        @Override
        public final java.lang.Object getScaleMax() {
            return this.scaleMax;
        }

        @Override
        public final java.lang.Object getScaleMin() {
            return this.scaleMin;
        }

        @Override
        public final java.lang.Object getScaleRoNumMax() {
            return this.scaleRoNumMax;
        }

        @Override
        public final java.lang.Object getScaleRoNumMin() {
            return this.scaleRoNumMin;
        }

        @Override
        public final java.lang.Object getSecurityGroupIds() {
            return this.securityGroupIds;
        }

        @Override
        public final java.lang.Object getSecurityIpList() {
            return this.securityIpList;
        }

        @Override
        public final java.lang.Object getServerlessType() {
            return this.serverlessType;
        }

        @Override
        public final java.lang.Object getSourceResourceId() {
            return this.sourceResourceId;
        }

        @Override
        public final java.lang.Object getSslEnabled() {
            return this.sslEnabled;
        }

        @Override
        public final java.lang.Object getStandbyAz() {
            return this.standbyAz;
        }

        @Override
        public final java.lang.Object getStorageAutoScale() {
            return this.storageAutoScale;
        }

        @Override
        public final java.lang.Object getStoragePayType() {
            return this.storagePayType;
        }

        @Override
        public final java.lang.Object getStorageSpace() {
            return this.storageSpace;
        }

        @Override
        public final java.lang.Object getStorageType() {
            return this.storageType;
        }

        @Override
        public final java.lang.Object getStorageUpperBound() {
            return this.storageUpperBound;
        }

        @Override
        public final java.lang.Object getStrictConsistency() {
            return this.strictConsistency;
        }

        @Override
        public final java.util.List<com.aliyun.ros.cdk.polardb.RosDBCluster.TagsProperty> getTags() {
            return this.tags;
        }

        @Override
        public final java.lang.Object getTdeStatus() {
            return this.tdeStatus;
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

            data.set("dbNodeClass", om.valueToTree(this.getDbNodeClass()));
            data.set("dbType", om.valueToTree(this.getDbType()));
            data.set("dbVersion", om.valueToTree(this.getDbVersion()));
            data.set("payType", om.valueToTree(this.getPayType()));
            if (this.getAllowShutDown() != null) {
                data.set("allowShutDown", om.valueToTree(this.getAllowShutDown()));
            }
            if (this.getArchitecture() != null) {
                data.set("architecture", om.valueToTree(this.getArchitecture()));
            }
            if (this.getAutoRenewPeriod() != null) {
                data.set("autoRenewPeriod", om.valueToTree(this.getAutoRenewPeriod()));
            }
            if (this.getBackupRetentionPolicyOnClusterDeletion() != null) {
                data.set("backupRetentionPolicyOnClusterDeletion", om.valueToTree(this.getBackupRetentionPolicyOnClusterDeletion()));
            }
            if (this.getCloneDataPoint() != null) {
                data.set("cloneDataPoint", om.valueToTree(this.getCloneDataPoint()));
            }
            if (this.getClusterNetworkType() != null) {
                data.set("clusterNetworkType", om.valueToTree(this.getClusterNetworkType()));
            }
            if (this.getColdStorageOption() != null) {
                data.set("coldStorageOption", om.valueToTree(this.getColdStorageOption()));
            }
            if (this.getCreationCategory() != null) {
                data.set("creationCategory", om.valueToTree(this.getCreationCategory()));
            }
            if (this.getCreationOption() != null) {
                data.set("creationOption", om.valueToTree(this.getCreationOption()));
            }
            if (this.getDbClusterDescription() != null) {
                data.set("dbClusterDescription", om.valueToTree(this.getDbClusterDescription()));
            }
            if (this.getDbClusterParameters() != null) {
                data.set("dbClusterParameters", om.valueToTree(this.getDbClusterParameters()));
            }
            if (this.getDbMinorVersion() != null) {
                data.set("dbMinorVersion", om.valueToTree(this.getDbMinorVersion()));
            }
            if (this.getDbNodeNum() != null) {
                data.set("dbNodeNum", om.valueToTree(this.getDbNodeNum()));
            }
            if (this.getDefaultTimeZone() != null) {
                data.set("defaultTimeZone", om.valueToTree(this.getDefaultTimeZone()));
            }
            if (this.getDeletionProtection() != null) {
                data.set("deletionProtection", om.valueToTree(this.getDeletionProtection()));
            }
            if (this.getGdnId() != null) {
                data.set("gdnId", om.valueToTree(this.getGdnId()));
            }
            if (this.getHotStandbyCluster() != null) {
                data.set("hotStandbyCluster", om.valueToTree(this.getHotStandbyCluster()));
            }
            if (this.getLoosePolarLogBin() != null) {
                data.set("loosePolarLogBin", om.valueToTree(this.getLoosePolarLogBin()));
            }
            if (this.getLooseXEngine() != null) {
                data.set("looseXEngine", om.valueToTree(this.getLooseXEngine()));
            }
            if (this.getLooseXEngineUseMemoryPct() != null) {
                data.set("looseXEngineUseMemoryPct", om.valueToTree(this.getLooseXEngineUseMemoryPct()));
            }
            if (this.getLowerCaseTableNames() != null) {
                data.set("lowerCaseTableNames", om.valueToTree(this.getLowerCaseTableNames()));
            }
            if (this.getMaintainTime() != null) {
                data.set("maintainTime", om.valueToTree(this.getMaintainTime()));
            }
            if (this.getParameterGroupId() != null) {
                data.set("parameterGroupId", om.valueToTree(this.getParameterGroupId()));
            }
            if (this.getPeriod() != null) {
                data.set("period", om.valueToTree(this.getPeriod()));
            }
            if (this.getPeriodUnit() != null) {
                data.set("periodUnit", om.valueToTree(this.getPeriodUnit()));
            }
            if (this.getProvisionedIops() != null) {
                data.set("provisionedIops", om.valueToTree(this.getProvisionedIops()));
            }
            if (this.getProxyClass() != null) {
                data.set("proxyClass", om.valueToTree(this.getProxyClass()));
            }
            if (this.getProxyType() != null) {
                data.set("proxyType", om.valueToTree(this.getProxyType()));
            }
            if (this.getRenewalStatus() != null) {
                data.set("renewalStatus", om.valueToTree(this.getRenewalStatus()));
            }
            if (this.getResourceGroupId() != null) {
                data.set("resourceGroupId", om.valueToTree(this.getResourceGroupId()));
            }
            if (this.getRestartMasterNode() != null) {
                data.set("restartMasterNode", om.valueToTree(this.getRestartMasterNode()));
            }
            if (this.getScaleMax() != null) {
                data.set("scaleMax", om.valueToTree(this.getScaleMax()));
            }
            if (this.getScaleMin() != null) {
                data.set("scaleMin", om.valueToTree(this.getScaleMin()));
            }
            if (this.getScaleRoNumMax() != null) {
                data.set("scaleRoNumMax", om.valueToTree(this.getScaleRoNumMax()));
            }
            if (this.getScaleRoNumMin() != null) {
                data.set("scaleRoNumMin", om.valueToTree(this.getScaleRoNumMin()));
            }
            if (this.getSecurityGroupIds() != null) {
                data.set("securityGroupIds", om.valueToTree(this.getSecurityGroupIds()));
            }
            if (this.getSecurityIpList() != null) {
                data.set("securityIpList", om.valueToTree(this.getSecurityIpList()));
            }
            if (this.getServerlessType() != null) {
                data.set("serverlessType", om.valueToTree(this.getServerlessType()));
            }
            if (this.getSourceResourceId() != null) {
                data.set("sourceResourceId", om.valueToTree(this.getSourceResourceId()));
            }
            if (this.getSslEnabled() != null) {
                data.set("sslEnabled", om.valueToTree(this.getSslEnabled()));
            }
            if (this.getStandbyAz() != null) {
                data.set("standbyAz", om.valueToTree(this.getStandbyAz()));
            }
            if (this.getStorageAutoScale() != null) {
                data.set("storageAutoScale", om.valueToTree(this.getStorageAutoScale()));
            }
            if (this.getStoragePayType() != null) {
                data.set("storagePayType", om.valueToTree(this.getStoragePayType()));
            }
            if (this.getStorageSpace() != null) {
                data.set("storageSpace", om.valueToTree(this.getStorageSpace()));
            }
            if (this.getStorageType() != null) {
                data.set("storageType", om.valueToTree(this.getStorageType()));
            }
            if (this.getStorageUpperBound() != null) {
                data.set("storageUpperBound", om.valueToTree(this.getStorageUpperBound()));
            }
            if (this.getStrictConsistency() != null) {
                data.set("strictConsistency", om.valueToTree(this.getStrictConsistency()));
            }
            if (this.getTags() != null) {
                data.set("tags", om.valueToTree(this.getTags()));
            }
            if (this.getTdeStatus() != null) {
                data.set("tdeStatus", om.valueToTree(this.getTdeStatus()));
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
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-polardb.RosDBClusterProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosDBClusterProps.Jsii$Proxy that = (RosDBClusterProps.Jsii$Proxy) o;

            if (!dbNodeClass.equals(that.dbNodeClass)) return false;
            if (!dbType.equals(that.dbType)) return false;
            if (!dbVersion.equals(that.dbVersion)) return false;
            if (!payType.equals(that.payType)) return false;
            if (this.allowShutDown != null ? !this.allowShutDown.equals(that.allowShutDown) : that.allowShutDown != null) return false;
            if (this.architecture != null ? !this.architecture.equals(that.architecture) : that.architecture != null) return false;
            if (this.autoRenewPeriod != null ? !this.autoRenewPeriod.equals(that.autoRenewPeriod) : that.autoRenewPeriod != null) return false;
            if (this.backupRetentionPolicyOnClusterDeletion != null ? !this.backupRetentionPolicyOnClusterDeletion.equals(that.backupRetentionPolicyOnClusterDeletion) : that.backupRetentionPolicyOnClusterDeletion != null) return false;
            if (this.cloneDataPoint != null ? !this.cloneDataPoint.equals(that.cloneDataPoint) : that.cloneDataPoint != null) return false;
            if (this.clusterNetworkType != null ? !this.clusterNetworkType.equals(that.clusterNetworkType) : that.clusterNetworkType != null) return false;
            if (this.coldStorageOption != null ? !this.coldStorageOption.equals(that.coldStorageOption) : that.coldStorageOption != null) return false;
            if (this.creationCategory != null ? !this.creationCategory.equals(that.creationCategory) : that.creationCategory != null) return false;
            if (this.creationOption != null ? !this.creationOption.equals(that.creationOption) : that.creationOption != null) return false;
            if (this.dbClusterDescription != null ? !this.dbClusterDescription.equals(that.dbClusterDescription) : that.dbClusterDescription != null) return false;
            if (this.dbClusterParameters != null ? !this.dbClusterParameters.equals(that.dbClusterParameters) : that.dbClusterParameters != null) return false;
            if (this.dbMinorVersion != null ? !this.dbMinorVersion.equals(that.dbMinorVersion) : that.dbMinorVersion != null) return false;
            if (this.dbNodeNum != null ? !this.dbNodeNum.equals(that.dbNodeNum) : that.dbNodeNum != null) return false;
            if (this.defaultTimeZone != null ? !this.defaultTimeZone.equals(that.defaultTimeZone) : that.defaultTimeZone != null) return false;
            if (this.deletionProtection != null ? !this.deletionProtection.equals(that.deletionProtection) : that.deletionProtection != null) return false;
            if (this.gdnId != null ? !this.gdnId.equals(that.gdnId) : that.gdnId != null) return false;
            if (this.hotStandbyCluster != null ? !this.hotStandbyCluster.equals(that.hotStandbyCluster) : that.hotStandbyCluster != null) return false;
            if (this.loosePolarLogBin != null ? !this.loosePolarLogBin.equals(that.loosePolarLogBin) : that.loosePolarLogBin != null) return false;
            if (this.looseXEngine != null ? !this.looseXEngine.equals(that.looseXEngine) : that.looseXEngine != null) return false;
            if (this.looseXEngineUseMemoryPct != null ? !this.looseXEngineUseMemoryPct.equals(that.looseXEngineUseMemoryPct) : that.looseXEngineUseMemoryPct != null) return false;
            if (this.lowerCaseTableNames != null ? !this.lowerCaseTableNames.equals(that.lowerCaseTableNames) : that.lowerCaseTableNames != null) return false;
            if (this.maintainTime != null ? !this.maintainTime.equals(that.maintainTime) : that.maintainTime != null) return false;
            if (this.parameterGroupId != null ? !this.parameterGroupId.equals(that.parameterGroupId) : that.parameterGroupId != null) return false;
            if (this.period != null ? !this.period.equals(that.period) : that.period != null) return false;
            if (this.periodUnit != null ? !this.periodUnit.equals(that.periodUnit) : that.periodUnit != null) return false;
            if (this.provisionedIops != null ? !this.provisionedIops.equals(that.provisionedIops) : that.provisionedIops != null) return false;
            if (this.proxyClass != null ? !this.proxyClass.equals(that.proxyClass) : that.proxyClass != null) return false;
            if (this.proxyType != null ? !this.proxyType.equals(that.proxyType) : that.proxyType != null) return false;
            if (this.renewalStatus != null ? !this.renewalStatus.equals(that.renewalStatus) : that.renewalStatus != null) return false;
            if (this.resourceGroupId != null ? !this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId != null) return false;
            if (this.restartMasterNode != null ? !this.restartMasterNode.equals(that.restartMasterNode) : that.restartMasterNode != null) return false;
            if (this.scaleMax != null ? !this.scaleMax.equals(that.scaleMax) : that.scaleMax != null) return false;
            if (this.scaleMin != null ? !this.scaleMin.equals(that.scaleMin) : that.scaleMin != null) return false;
            if (this.scaleRoNumMax != null ? !this.scaleRoNumMax.equals(that.scaleRoNumMax) : that.scaleRoNumMax != null) return false;
            if (this.scaleRoNumMin != null ? !this.scaleRoNumMin.equals(that.scaleRoNumMin) : that.scaleRoNumMin != null) return false;
            if (this.securityGroupIds != null ? !this.securityGroupIds.equals(that.securityGroupIds) : that.securityGroupIds != null) return false;
            if (this.securityIpList != null ? !this.securityIpList.equals(that.securityIpList) : that.securityIpList != null) return false;
            if (this.serverlessType != null ? !this.serverlessType.equals(that.serverlessType) : that.serverlessType != null) return false;
            if (this.sourceResourceId != null ? !this.sourceResourceId.equals(that.sourceResourceId) : that.sourceResourceId != null) return false;
            if (this.sslEnabled != null ? !this.sslEnabled.equals(that.sslEnabled) : that.sslEnabled != null) return false;
            if (this.standbyAz != null ? !this.standbyAz.equals(that.standbyAz) : that.standbyAz != null) return false;
            if (this.storageAutoScale != null ? !this.storageAutoScale.equals(that.storageAutoScale) : that.storageAutoScale != null) return false;
            if (this.storagePayType != null ? !this.storagePayType.equals(that.storagePayType) : that.storagePayType != null) return false;
            if (this.storageSpace != null ? !this.storageSpace.equals(that.storageSpace) : that.storageSpace != null) return false;
            if (this.storageType != null ? !this.storageType.equals(that.storageType) : that.storageType != null) return false;
            if (this.storageUpperBound != null ? !this.storageUpperBound.equals(that.storageUpperBound) : that.storageUpperBound != null) return false;
            if (this.strictConsistency != null ? !this.strictConsistency.equals(that.strictConsistency) : that.strictConsistency != null) return false;
            if (this.tags != null ? !this.tags.equals(that.tags) : that.tags != null) return false;
            if (this.tdeStatus != null ? !this.tdeStatus.equals(that.tdeStatus) : that.tdeStatus != null) return false;
            if (this.vpcId != null ? !this.vpcId.equals(that.vpcId) : that.vpcId != null) return false;
            if (this.vSwitchId != null ? !this.vSwitchId.equals(that.vSwitchId) : that.vSwitchId != null) return false;
            return this.zoneId != null ? this.zoneId.equals(that.zoneId) : that.zoneId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.dbNodeClass.hashCode();
            result = 31 * result + (this.dbType.hashCode());
            result = 31 * result + (this.dbVersion.hashCode());
            result = 31 * result + (this.payType.hashCode());
            result = 31 * result + (this.allowShutDown != null ? this.allowShutDown.hashCode() : 0);
            result = 31 * result + (this.architecture != null ? this.architecture.hashCode() : 0);
            result = 31 * result + (this.autoRenewPeriod != null ? this.autoRenewPeriod.hashCode() : 0);
            result = 31 * result + (this.backupRetentionPolicyOnClusterDeletion != null ? this.backupRetentionPolicyOnClusterDeletion.hashCode() : 0);
            result = 31 * result + (this.cloneDataPoint != null ? this.cloneDataPoint.hashCode() : 0);
            result = 31 * result + (this.clusterNetworkType != null ? this.clusterNetworkType.hashCode() : 0);
            result = 31 * result + (this.coldStorageOption != null ? this.coldStorageOption.hashCode() : 0);
            result = 31 * result + (this.creationCategory != null ? this.creationCategory.hashCode() : 0);
            result = 31 * result + (this.creationOption != null ? this.creationOption.hashCode() : 0);
            result = 31 * result + (this.dbClusterDescription != null ? this.dbClusterDescription.hashCode() : 0);
            result = 31 * result + (this.dbClusterParameters != null ? this.dbClusterParameters.hashCode() : 0);
            result = 31 * result + (this.dbMinorVersion != null ? this.dbMinorVersion.hashCode() : 0);
            result = 31 * result + (this.dbNodeNum != null ? this.dbNodeNum.hashCode() : 0);
            result = 31 * result + (this.defaultTimeZone != null ? this.defaultTimeZone.hashCode() : 0);
            result = 31 * result + (this.deletionProtection != null ? this.deletionProtection.hashCode() : 0);
            result = 31 * result + (this.gdnId != null ? this.gdnId.hashCode() : 0);
            result = 31 * result + (this.hotStandbyCluster != null ? this.hotStandbyCluster.hashCode() : 0);
            result = 31 * result + (this.loosePolarLogBin != null ? this.loosePolarLogBin.hashCode() : 0);
            result = 31 * result + (this.looseXEngine != null ? this.looseXEngine.hashCode() : 0);
            result = 31 * result + (this.looseXEngineUseMemoryPct != null ? this.looseXEngineUseMemoryPct.hashCode() : 0);
            result = 31 * result + (this.lowerCaseTableNames != null ? this.lowerCaseTableNames.hashCode() : 0);
            result = 31 * result + (this.maintainTime != null ? this.maintainTime.hashCode() : 0);
            result = 31 * result + (this.parameterGroupId != null ? this.parameterGroupId.hashCode() : 0);
            result = 31 * result + (this.period != null ? this.period.hashCode() : 0);
            result = 31 * result + (this.periodUnit != null ? this.periodUnit.hashCode() : 0);
            result = 31 * result + (this.provisionedIops != null ? this.provisionedIops.hashCode() : 0);
            result = 31 * result + (this.proxyClass != null ? this.proxyClass.hashCode() : 0);
            result = 31 * result + (this.proxyType != null ? this.proxyType.hashCode() : 0);
            result = 31 * result + (this.renewalStatus != null ? this.renewalStatus.hashCode() : 0);
            result = 31 * result + (this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0);
            result = 31 * result + (this.restartMasterNode != null ? this.restartMasterNode.hashCode() : 0);
            result = 31 * result + (this.scaleMax != null ? this.scaleMax.hashCode() : 0);
            result = 31 * result + (this.scaleMin != null ? this.scaleMin.hashCode() : 0);
            result = 31 * result + (this.scaleRoNumMax != null ? this.scaleRoNumMax.hashCode() : 0);
            result = 31 * result + (this.scaleRoNumMin != null ? this.scaleRoNumMin.hashCode() : 0);
            result = 31 * result + (this.securityGroupIds != null ? this.securityGroupIds.hashCode() : 0);
            result = 31 * result + (this.securityIpList != null ? this.securityIpList.hashCode() : 0);
            result = 31 * result + (this.serverlessType != null ? this.serverlessType.hashCode() : 0);
            result = 31 * result + (this.sourceResourceId != null ? this.sourceResourceId.hashCode() : 0);
            result = 31 * result + (this.sslEnabled != null ? this.sslEnabled.hashCode() : 0);
            result = 31 * result + (this.standbyAz != null ? this.standbyAz.hashCode() : 0);
            result = 31 * result + (this.storageAutoScale != null ? this.storageAutoScale.hashCode() : 0);
            result = 31 * result + (this.storagePayType != null ? this.storagePayType.hashCode() : 0);
            result = 31 * result + (this.storageSpace != null ? this.storageSpace.hashCode() : 0);
            result = 31 * result + (this.storageType != null ? this.storageType.hashCode() : 0);
            result = 31 * result + (this.storageUpperBound != null ? this.storageUpperBound.hashCode() : 0);
            result = 31 * result + (this.strictConsistency != null ? this.strictConsistency.hashCode() : 0);
            result = 31 * result + (this.tags != null ? this.tags.hashCode() : 0);
            result = 31 * result + (this.tdeStatus != null ? this.tdeStatus.hashCode() : 0);
            result = 31 * result + (this.vpcId != null ? this.vpcId.hashCode() : 0);
            result = 31 * result + (this.vSwitchId != null ? this.vSwitchId.hashCode() : 0);
            result = 31 * result + (this.zoneId != null ? this.zoneId.hashCode() : 0);
            return result;
        }
    }
}
