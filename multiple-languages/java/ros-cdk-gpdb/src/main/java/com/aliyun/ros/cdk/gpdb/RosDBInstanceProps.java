package com.aliyun.ros.cdk.gpdb;

/**
 * Properties for defining a <code>RosDBInstance</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-gpdb-dbinstance
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-09-28T10:11:26.245Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.gpdb.$Module.class, fqn = "@alicloud/ros-cdk-gpdb.RosDBInstanceProps")
@software.amazon.jsii.Jsii.Proxy(RosDBInstanceProps.Jsii$Proxy.class)
public interface RosDBInstanceProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getEngineVersion();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getVSwitchId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getZoneId();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAiNodeSpecInfos() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCreateSampleData() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDbInstanceCategory() {
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
    default @org.jetbrains.annotations.Nullable java.lang.Object getDbInstanceGroupCount() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDbInstanceMode() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDeployMode() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEncryptionKey() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEncryptionType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getIdleTime() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInstanceSpec() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getMasterCu() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getMasterNodeNum() {
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
    default @org.jetbrains.annotations.Nullable java.lang.Object getPeriodUnit() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPrivateIpAddress() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getProdType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSecurityIpList() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSegDiskPerformanceLevel() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSegNodeNum() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSegStorageType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getServerlessMode() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getServerlessResource() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getStandbyVSwitchId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getStandbyZoneId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getStorageSize() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.gpdb.RosDBInstance.TagsProperty> getTags() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getVectorConfigurationStatus() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getVpcId() {
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
        java.lang.Object engineVersion;
        java.lang.Object vSwitchId;
        java.lang.Object zoneId;
        java.lang.Object aiNodeSpecInfos;
        java.lang.Object createSampleData;
        java.lang.Object dbInstanceCategory;
        java.lang.Object dbInstanceClass;
        java.lang.Object dbInstanceDescription;
        java.lang.Object dbInstanceGroupCount;
        java.lang.Object dbInstanceMode;
        java.lang.Object deployMode;
        java.lang.Object encryptionKey;
        java.lang.Object encryptionType;
        java.lang.Object idleTime;
        java.lang.Object instanceSpec;
        java.lang.Object masterCu;
        java.lang.Object masterNodeNum;
        java.lang.Object payType;
        java.lang.Object period;
        java.lang.Object periodUnit;
        java.lang.Object privateIpAddress;
        java.lang.Object prodType;
        java.lang.Object resourceGroupId;
        java.lang.Object securityIpList;
        java.lang.Object segDiskPerformanceLevel;
        java.lang.Object segNodeNum;
        java.lang.Object segStorageType;
        java.lang.Object serverlessMode;
        java.lang.Object serverlessResource;
        java.lang.Object standbyVSwitchId;
        java.lang.Object standbyZoneId;
        java.lang.Object storageSize;
        java.util.List<com.aliyun.ros.cdk.gpdb.RosDBInstance.TagsProperty> tags;
        java.lang.Object vectorConfigurationStatus;
        java.lang.Object vpcId;

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
         * Sets the value of {@link RosDBInstanceProps#getVSwitchId}
         * @param vSwitchId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder vSwitchId(java.lang.String vSwitchId) {
            this.vSwitchId = vSwitchId;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceProps#getVSwitchId}
         * @param vSwitchId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder vSwitchId(com.aliyun.ros.cdk.core.IResolvable vSwitchId) {
            this.vSwitchId = vSwitchId;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceProps#getZoneId}
         * @param zoneId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder zoneId(java.lang.String zoneId) {
            this.zoneId = zoneId;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceProps#getZoneId}
         * @param zoneId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder zoneId(com.aliyun.ros.cdk.core.IResolvable zoneId) {
            this.zoneId = zoneId;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceProps#getAiNodeSpecInfos}
         * @param aiNodeSpecInfos the value to be set.
         * @return {@code this}
         */
        public Builder aiNodeSpecInfos(com.aliyun.ros.cdk.core.IResolvable aiNodeSpecInfos) {
            this.aiNodeSpecInfos = aiNodeSpecInfos;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceProps#getAiNodeSpecInfos}
         * @param aiNodeSpecInfos the value to be set.
         * @return {@code this}
         */
        public Builder aiNodeSpecInfos(java.util.List<? extends java.lang.Object> aiNodeSpecInfos) {
            this.aiNodeSpecInfos = aiNodeSpecInfos;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceProps#getCreateSampleData}
         * @param createSampleData the value to be set.
         * @return {@code this}
         */
        public Builder createSampleData(java.lang.Boolean createSampleData) {
            this.createSampleData = createSampleData;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceProps#getCreateSampleData}
         * @param createSampleData the value to be set.
         * @return {@code this}
         */
        public Builder createSampleData(com.aliyun.ros.cdk.core.IResolvable createSampleData) {
            this.createSampleData = createSampleData;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceProps#getDbInstanceCategory}
         * @param dbInstanceCategory the value to be set.
         * @return {@code this}
         */
        public Builder dbInstanceCategory(java.lang.String dbInstanceCategory) {
            this.dbInstanceCategory = dbInstanceCategory;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceProps#getDbInstanceCategory}
         * @param dbInstanceCategory the value to be set.
         * @return {@code this}
         */
        public Builder dbInstanceCategory(com.aliyun.ros.cdk.core.IResolvable dbInstanceCategory) {
            this.dbInstanceCategory = dbInstanceCategory;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceProps#getDbInstanceClass}
         * @param dbInstanceClass the value to be set.
         * @return {@code this}
         */
        public Builder dbInstanceClass(java.lang.String dbInstanceClass) {
            this.dbInstanceClass = dbInstanceClass;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceProps#getDbInstanceClass}
         * @param dbInstanceClass the value to be set.
         * @return {@code this}
         */
        public Builder dbInstanceClass(com.aliyun.ros.cdk.core.IResolvable dbInstanceClass) {
            this.dbInstanceClass = dbInstanceClass;
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
         * Sets the value of {@link RosDBInstanceProps#getDbInstanceGroupCount}
         * @param dbInstanceGroupCount the value to be set.
         * @return {@code this}
         */
        public Builder dbInstanceGroupCount(java.lang.Number dbInstanceGroupCount) {
            this.dbInstanceGroupCount = dbInstanceGroupCount;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceProps#getDbInstanceGroupCount}
         * @param dbInstanceGroupCount the value to be set.
         * @return {@code this}
         */
        public Builder dbInstanceGroupCount(com.aliyun.ros.cdk.core.IResolvable dbInstanceGroupCount) {
            this.dbInstanceGroupCount = dbInstanceGroupCount;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceProps#getDbInstanceMode}
         * @param dbInstanceMode the value to be set.
         * @return {@code this}
         */
        public Builder dbInstanceMode(java.lang.String dbInstanceMode) {
            this.dbInstanceMode = dbInstanceMode;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceProps#getDbInstanceMode}
         * @param dbInstanceMode the value to be set.
         * @return {@code this}
         */
        public Builder dbInstanceMode(com.aliyun.ros.cdk.core.IResolvable dbInstanceMode) {
            this.dbInstanceMode = dbInstanceMode;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceProps#getDeployMode}
         * @param deployMode the value to be set.
         * @return {@code this}
         */
        public Builder deployMode(java.lang.String deployMode) {
            this.deployMode = deployMode;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceProps#getDeployMode}
         * @param deployMode the value to be set.
         * @return {@code this}
         */
        public Builder deployMode(com.aliyun.ros.cdk.core.IResolvable deployMode) {
            this.deployMode = deployMode;
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
         * Sets the value of {@link RosDBInstanceProps#getEncryptionType}
         * @param encryptionType the value to be set.
         * @return {@code this}
         */
        public Builder encryptionType(java.lang.String encryptionType) {
            this.encryptionType = encryptionType;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceProps#getEncryptionType}
         * @param encryptionType the value to be set.
         * @return {@code this}
         */
        public Builder encryptionType(com.aliyun.ros.cdk.core.IResolvable encryptionType) {
            this.encryptionType = encryptionType;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceProps#getIdleTime}
         * @param idleTime the value to be set.
         * @return {@code this}
         */
        public Builder idleTime(java.lang.Number idleTime) {
            this.idleTime = idleTime;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceProps#getIdleTime}
         * @param idleTime the value to be set.
         * @return {@code this}
         */
        public Builder idleTime(com.aliyun.ros.cdk.core.IResolvable idleTime) {
            this.idleTime = idleTime;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceProps#getInstanceSpec}
         * @param instanceSpec the value to be set.
         * @return {@code this}
         */
        public Builder instanceSpec(java.lang.String instanceSpec) {
            this.instanceSpec = instanceSpec;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceProps#getInstanceSpec}
         * @param instanceSpec the value to be set.
         * @return {@code this}
         */
        public Builder instanceSpec(com.aliyun.ros.cdk.core.IResolvable instanceSpec) {
            this.instanceSpec = instanceSpec;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceProps#getMasterCu}
         * @param masterCu the value to be set.
         * @return {@code this}
         */
        public Builder masterCu(java.lang.Number masterCu) {
            this.masterCu = masterCu;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceProps#getMasterCu}
         * @param masterCu the value to be set.
         * @return {@code this}
         */
        public Builder masterCu(com.aliyun.ros.cdk.core.IResolvable masterCu) {
            this.masterCu = masterCu;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceProps#getMasterNodeNum}
         * @param masterNodeNum the value to be set.
         * @return {@code this}
         */
        public Builder masterNodeNum(java.lang.Number masterNodeNum) {
            this.masterNodeNum = masterNodeNum;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceProps#getMasterNodeNum}
         * @param masterNodeNum the value to be set.
         * @return {@code this}
         */
        public Builder masterNodeNum(com.aliyun.ros.cdk.core.IResolvable masterNodeNum) {
            this.masterNodeNum = masterNodeNum;
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
         * Sets the value of {@link RosDBInstanceProps#getPeriodUnit}
         * @param periodUnit the value to be set.
         * @return {@code this}
         */
        public Builder periodUnit(java.lang.String periodUnit) {
            this.periodUnit = periodUnit;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceProps#getPeriodUnit}
         * @param periodUnit the value to be set.
         * @return {@code this}
         */
        public Builder periodUnit(com.aliyun.ros.cdk.core.IResolvable periodUnit) {
            this.periodUnit = periodUnit;
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
         * Sets the value of {@link RosDBInstanceProps#getProdType}
         * @param prodType the value to be set.
         * @return {@code this}
         */
        public Builder prodType(java.lang.String prodType) {
            this.prodType = prodType;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceProps#getProdType}
         * @param prodType the value to be set.
         * @return {@code this}
         */
        public Builder prodType(com.aliyun.ros.cdk.core.IResolvable prodType) {
            this.prodType = prodType;
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
         * Sets the value of {@link RosDBInstanceProps#getSecurityIpList}
         * @param securityIpList the value to be set.
         * @return {@code this}
         */
        public Builder securityIpList(java.lang.String securityIpList) {
            this.securityIpList = securityIpList;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceProps#getSecurityIpList}
         * @param securityIpList the value to be set.
         * @return {@code this}
         */
        public Builder securityIpList(com.aliyun.ros.cdk.core.IResolvable securityIpList) {
            this.securityIpList = securityIpList;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceProps#getSegDiskPerformanceLevel}
         * @param segDiskPerformanceLevel the value to be set.
         * @return {@code this}
         */
        public Builder segDiskPerformanceLevel(java.lang.String segDiskPerformanceLevel) {
            this.segDiskPerformanceLevel = segDiskPerformanceLevel;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceProps#getSegDiskPerformanceLevel}
         * @param segDiskPerformanceLevel the value to be set.
         * @return {@code this}
         */
        public Builder segDiskPerformanceLevel(com.aliyun.ros.cdk.core.IResolvable segDiskPerformanceLevel) {
            this.segDiskPerformanceLevel = segDiskPerformanceLevel;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceProps#getSegNodeNum}
         * @param segNodeNum the value to be set.
         * @return {@code this}
         */
        public Builder segNodeNum(java.lang.Number segNodeNum) {
            this.segNodeNum = segNodeNum;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceProps#getSegNodeNum}
         * @param segNodeNum the value to be set.
         * @return {@code this}
         */
        public Builder segNodeNum(com.aliyun.ros.cdk.core.IResolvable segNodeNum) {
            this.segNodeNum = segNodeNum;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceProps#getSegStorageType}
         * @param segStorageType the value to be set.
         * @return {@code this}
         */
        public Builder segStorageType(java.lang.String segStorageType) {
            this.segStorageType = segStorageType;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceProps#getSegStorageType}
         * @param segStorageType the value to be set.
         * @return {@code this}
         */
        public Builder segStorageType(com.aliyun.ros.cdk.core.IResolvable segStorageType) {
            this.segStorageType = segStorageType;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceProps#getServerlessMode}
         * @param serverlessMode the value to be set.
         * @return {@code this}
         */
        public Builder serverlessMode(java.lang.String serverlessMode) {
            this.serverlessMode = serverlessMode;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceProps#getServerlessMode}
         * @param serverlessMode the value to be set.
         * @return {@code this}
         */
        public Builder serverlessMode(com.aliyun.ros.cdk.core.IResolvable serverlessMode) {
            this.serverlessMode = serverlessMode;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceProps#getServerlessResource}
         * @param serverlessResource the value to be set.
         * @return {@code this}
         */
        public Builder serverlessResource(java.lang.Number serverlessResource) {
            this.serverlessResource = serverlessResource;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceProps#getServerlessResource}
         * @param serverlessResource the value to be set.
         * @return {@code this}
         */
        public Builder serverlessResource(com.aliyun.ros.cdk.core.IResolvable serverlessResource) {
            this.serverlessResource = serverlessResource;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceProps#getStandbyVSwitchId}
         * @param standbyVSwitchId the value to be set.
         * @return {@code this}
         */
        public Builder standbyVSwitchId(java.lang.String standbyVSwitchId) {
            this.standbyVSwitchId = standbyVSwitchId;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceProps#getStandbyVSwitchId}
         * @param standbyVSwitchId the value to be set.
         * @return {@code this}
         */
        public Builder standbyVSwitchId(com.aliyun.ros.cdk.core.IResolvable standbyVSwitchId) {
            this.standbyVSwitchId = standbyVSwitchId;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceProps#getStandbyZoneId}
         * @param standbyZoneId the value to be set.
         * @return {@code this}
         */
        public Builder standbyZoneId(java.lang.String standbyZoneId) {
            this.standbyZoneId = standbyZoneId;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceProps#getStandbyZoneId}
         * @param standbyZoneId the value to be set.
         * @return {@code this}
         */
        public Builder standbyZoneId(com.aliyun.ros.cdk.core.IResolvable standbyZoneId) {
            this.standbyZoneId = standbyZoneId;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceProps#getStorageSize}
         * @param storageSize the value to be set.
         * @return {@code this}
         */
        public Builder storageSize(java.lang.Number storageSize) {
            this.storageSize = storageSize;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceProps#getStorageSize}
         * @param storageSize the value to be set.
         * @return {@code this}
         */
        public Builder storageSize(com.aliyun.ros.cdk.core.IResolvable storageSize) {
            this.storageSize = storageSize;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceProps#getTags}
         * @param tags the value to be set.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder tags(java.util.List<? extends com.aliyun.ros.cdk.gpdb.RosDBInstance.TagsProperty> tags) {
            this.tags = (java.util.List<com.aliyun.ros.cdk.gpdb.RosDBInstance.TagsProperty>)tags;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceProps#getVectorConfigurationStatus}
         * @param vectorConfigurationStatus the value to be set.
         * @return {@code this}
         */
        public Builder vectorConfigurationStatus(java.lang.String vectorConfigurationStatus) {
            this.vectorConfigurationStatus = vectorConfigurationStatus;
            return this;
        }

        /**
         * Sets the value of {@link RosDBInstanceProps#getVectorConfigurationStatus}
         * @param vectorConfigurationStatus the value to be set.
         * @return {@code this}
         */
        public Builder vectorConfigurationStatus(com.aliyun.ros.cdk.core.IResolvable vectorConfigurationStatus) {
            this.vectorConfigurationStatus = vectorConfigurationStatus;
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
        private final java.lang.Object engineVersion;
        private final java.lang.Object vSwitchId;
        private final java.lang.Object zoneId;
        private final java.lang.Object aiNodeSpecInfos;
        private final java.lang.Object createSampleData;
        private final java.lang.Object dbInstanceCategory;
        private final java.lang.Object dbInstanceClass;
        private final java.lang.Object dbInstanceDescription;
        private final java.lang.Object dbInstanceGroupCount;
        private final java.lang.Object dbInstanceMode;
        private final java.lang.Object deployMode;
        private final java.lang.Object encryptionKey;
        private final java.lang.Object encryptionType;
        private final java.lang.Object idleTime;
        private final java.lang.Object instanceSpec;
        private final java.lang.Object masterCu;
        private final java.lang.Object masterNodeNum;
        private final java.lang.Object payType;
        private final java.lang.Object period;
        private final java.lang.Object periodUnit;
        private final java.lang.Object privateIpAddress;
        private final java.lang.Object prodType;
        private final java.lang.Object resourceGroupId;
        private final java.lang.Object securityIpList;
        private final java.lang.Object segDiskPerformanceLevel;
        private final java.lang.Object segNodeNum;
        private final java.lang.Object segStorageType;
        private final java.lang.Object serverlessMode;
        private final java.lang.Object serverlessResource;
        private final java.lang.Object standbyVSwitchId;
        private final java.lang.Object standbyZoneId;
        private final java.lang.Object storageSize;
        private final java.util.List<com.aliyun.ros.cdk.gpdb.RosDBInstance.TagsProperty> tags;
        private final java.lang.Object vectorConfigurationStatus;
        private final java.lang.Object vpcId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.engineVersion = software.amazon.jsii.Kernel.get(this, "engineVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vSwitchId = software.amazon.jsii.Kernel.get(this, "vSwitchId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.zoneId = software.amazon.jsii.Kernel.get(this, "zoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.aiNodeSpecInfos = software.amazon.jsii.Kernel.get(this, "aiNodeSpecInfos", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.createSampleData = software.amazon.jsii.Kernel.get(this, "createSampleData", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dbInstanceCategory = software.amazon.jsii.Kernel.get(this, "dbInstanceCategory", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dbInstanceClass = software.amazon.jsii.Kernel.get(this, "dbInstanceClass", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dbInstanceDescription = software.amazon.jsii.Kernel.get(this, "dbInstanceDescription", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dbInstanceGroupCount = software.amazon.jsii.Kernel.get(this, "dbInstanceGroupCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dbInstanceMode = software.amazon.jsii.Kernel.get(this, "dbInstanceMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.deployMode = software.amazon.jsii.Kernel.get(this, "deployMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.encryptionKey = software.amazon.jsii.Kernel.get(this, "encryptionKey", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.encryptionType = software.amazon.jsii.Kernel.get(this, "encryptionType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.idleTime = software.amazon.jsii.Kernel.get(this, "idleTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.instanceSpec = software.amazon.jsii.Kernel.get(this, "instanceSpec", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.masterCu = software.amazon.jsii.Kernel.get(this, "masterCu", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.masterNodeNum = software.amazon.jsii.Kernel.get(this, "masterNodeNum", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.payType = software.amazon.jsii.Kernel.get(this, "payType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.period = software.amazon.jsii.Kernel.get(this, "period", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.periodUnit = software.amazon.jsii.Kernel.get(this, "periodUnit", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.privateIpAddress = software.amazon.jsii.Kernel.get(this, "privateIpAddress", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.prodType = software.amazon.jsii.Kernel.get(this, "prodType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.securityIpList = software.amazon.jsii.Kernel.get(this, "securityIpList", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.segDiskPerformanceLevel = software.amazon.jsii.Kernel.get(this, "segDiskPerformanceLevel", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.segNodeNum = software.amazon.jsii.Kernel.get(this, "segNodeNum", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.segStorageType = software.amazon.jsii.Kernel.get(this, "segStorageType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.serverlessMode = software.amazon.jsii.Kernel.get(this, "serverlessMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.serverlessResource = software.amazon.jsii.Kernel.get(this, "serverlessResource", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.standbyVSwitchId = software.amazon.jsii.Kernel.get(this, "standbyVSwitchId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.standbyZoneId = software.amazon.jsii.Kernel.get(this, "standbyZoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.storageSize = software.amazon.jsii.Kernel.get(this, "storageSize", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tags = software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.gpdb.RosDBInstance.TagsProperty.class)));
            this.vectorConfigurationStatus = software.amazon.jsii.Kernel.get(this, "vectorConfigurationStatus", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vpcId = software.amazon.jsii.Kernel.get(this, "vpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        @SuppressWarnings("unchecked")
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.engineVersion = java.util.Objects.requireNonNull(builder.engineVersion, "engineVersion is required");
            this.vSwitchId = java.util.Objects.requireNonNull(builder.vSwitchId, "vSwitchId is required");
            this.zoneId = java.util.Objects.requireNonNull(builder.zoneId, "zoneId is required");
            this.aiNodeSpecInfos = builder.aiNodeSpecInfos;
            this.createSampleData = builder.createSampleData;
            this.dbInstanceCategory = builder.dbInstanceCategory;
            this.dbInstanceClass = builder.dbInstanceClass;
            this.dbInstanceDescription = builder.dbInstanceDescription;
            this.dbInstanceGroupCount = builder.dbInstanceGroupCount;
            this.dbInstanceMode = builder.dbInstanceMode;
            this.deployMode = builder.deployMode;
            this.encryptionKey = builder.encryptionKey;
            this.encryptionType = builder.encryptionType;
            this.idleTime = builder.idleTime;
            this.instanceSpec = builder.instanceSpec;
            this.masterCu = builder.masterCu;
            this.masterNodeNum = builder.masterNodeNum;
            this.payType = builder.payType;
            this.period = builder.period;
            this.periodUnit = builder.periodUnit;
            this.privateIpAddress = builder.privateIpAddress;
            this.prodType = builder.prodType;
            this.resourceGroupId = builder.resourceGroupId;
            this.securityIpList = builder.securityIpList;
            this.segDiskPerformanceLevel = builder.segDiskPerformanceLevel;
            this.segNodeNum = builder.segNodeNum;
            this.segStorageType = builder.segStorageType;
            this.serverlessMode = builder.serverlessMode;
            this.serverlessResource = builder.serverlessResource;
            this.standbyVSwitchId = builder.standbyVSwitchId;
            this.standbyZoneId = builder.standbyZoneId;
            this.storageSize = builder.storageSize;
            this.tags = (java.util.List<com.aliyun.ros.cdk.gpdb.RosDBInstance.TagsProperty>)builder.tags;
            this.vectorConfigurationStatus = builder.vectorConfigurationStatus;
            this.vpcId = builder.vpcId;
        }

        @Override
        public final java.lang.Object getEngineVersion() {
            return this.engineVersion;
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
        public final java.lang.Object getAiNodeSpecInfos() {
            return this.aiNodeSpecInfos;
        }

        @Override
        public final java.lang.Object getCreateSampleData() {
            return this.createSampleData;
        }

        @Override
        public final java.lang.Object getDbInstanceCategory() {
            return this.dbInstanceCategory;
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
        public final java.lang.Object getDbInstanceGroupCount() {
            return this.dbInstanceGroupCount;
        }

        @Override
        public final java.lang.Object getDbInstanceMode() {
            return this.dbInstanceMode;
        }

        @Override
        public final java.lang.Object getDeployMode() {
            return this.deployMode;
        }

        @Override
        public final java.lang.Object getEncryptionKey() {
            return this.encryptionKey;
        }

        @Override
        public final java.lang.Object getEncryptionType() {
            return this.encryptionType;
        }

        @Override
        public final java.lang.Object getIdleTime() {
            return this.idleTime;
        }

        @Override
        public final java.lang.Object getInstanceSpec() {
            return this.instanceSpec;
        }

        @Override
        public final java.lang.Object getMasterCu() {
            return this.masterCu;
        }

        @Override
        public final java.lang.Object getMasterNodeNum() {
            return this.masterNodeNum;
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
        public final java.lang.Object getPeriodUnit() {
            return this.periodUnit;
        }

        @Override
        public final java.lang.Object getPrivateIpAddress() {
            return this.privateIpAddress;
        }

        @Override
        public final java.lang.Object getProdType() {
            return this.prodType;
        }

        @Override
        public final java.lang.Object getResourceGroupId() {
            return this.resourceGroupId;
        }

        @Override
        public final java.lang.Object getSecurityIpList() {
            return this.securityIpList;
        }

        @Override
        public final java.lang.Object getSegDiskPerformanceLevel() {
            return this.segDiskPerformanceLevel;
        }

        @Override
        public final java.lang.Object getSegNodeNum() {
            return this.segNodeNum;
        }

        @Override
        public final java.lang.Object getSegStorageType() {
            return this.segStorageType;
        }

        @Override
        public final java.lang.Object getServerlessMode() {
            return this.serverlessMode;
        }

        @Override
        public final java.lang.Object getServerlessResource() {
            return this.serverlessResource;
        }

        @Override
        public final java.lang.Object getStandbyVSwitchId() {
            return this.standbyVSwitchId;
        }

        @Override
        public final java.lang.Object getStandbyZoneId() {
            return this.standbyZoneId;
        }

        @Override
        public final java.lang.Object getStorageSize() {
            return this.storageSize;
        }

        @Override
        public final java.util.List<com.aliyun.ros.cdk.gpdb.RosDBInstance.TagsProperty> getTags() {
            return this.tags;
        }

        @Override
        public final java.lang.Object getVectorConfigurationStatus() {
            return this.vectorConfigurationStatus;
        }

        @Override
        public final java.lang.Object getVpcId() {
            return this.vpcId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("engineVersion", om.valueToTree(this.getEngineVersion()));
            data.set("vSwitchId", om.valueToTree(this.getVSwitchId()));
            data.set("zoneId", om.valueToTree(this.getZoneId()));
            if (this.getAiNodeSpecInfos() != null) {
                data.set("aiNodeSpecInfos", om.valueToTree(this.getAiNodeSpecInfos()));
            }
            if (this.getCreateSampleData() != null) {
                data.set("createSampleData", om.valueToTree(this.getCreateSampleData()));
            }
            if (this.getDbInstanceCategory() != null) {
                data.set("dbInstanceCategory", om.valueToTree(this.getDbInstanceCategory()));
            }
            if (this.getDbInstanceClass() != null) {
                data.set("dbInstanceClass", om.valueToTree(this.getDbInstanceClass()));
            }
            if (this.getDbInstanceDescription() != null) {
                data.set("dbInstanceDescription", om.valueToTree(this.getDbInstanceDescription()));
            }
            if (this.getDbInstanceGroupCount() != null) {
                data.set("dbInstanceGroupCount", om.valueToTree(this.getDbInstanceGroupCount()));
            }
            if (this.getDbInstanceMode() != null) {
                data.set("dbInstanceMode", om.valueToTree(this.getDbInstanceMode()));
            }
            if (this.getDeployMode() != null) {
                data.set("deployMode", om.valueToTree(this.getDeployMode()));
            }
            if (this.getEncryptionKey() != null) {
                data.set("encryptionKey", om.valueToTree(this.getEncryptionKey()));
            }
            if (this.getEncryptionType() != null) {
                data.set("encryptionType", om.valueToTree(this.getEncryptionType()));
            }
            if (this.getIdleTime() != null) {
                data.set("idleTime", om.valueToTree(this.getIdleTime()));
            }
            if (this.getInstanceSpec() != null) {
                data.set("instanceSpec", om.valueToTree(this.getInstanceSpec()));
            }
            if (this.getMasterCu() != null) {
                data.set("masterCu", om.valueToTree(this.getMasterCu()));
            }
            if (this.getMasterNodeNum() != null) {
                data.set("masterNodeNum", om.valueToTree(this.getMasterNodeNum()));
            }
            if (this.getPayType() != null) {
                data.set("payType", om.valueToTree(this.getPayType()));
            }
            if (this.getPeriod() != null) {
                data.set("period", om.valueToTree(this.getPeriod()));
            }
            if (this.getPeriodUnit() != null) {
                data.set("periodUnit", om.valueToTree(this.getPeriodUnit()));
            }
            if (this.getPrivateIpAddress() != null) {
                data.set("privateIpAddress", om.valueToTree(this.getPrivateIpAddress()));
            }
            if (this.getProdType() != null) {
                data.set("prodType", om.valueToTree(this.getProdType()));
            }
            if (this.getResourceGroupId() != null) {
                data.set("resourceGroupId", om.valueToTree(this.getResourceGroupId()));
            }
            if (this.getSecurityIpList() != null) {
                data.set("securityIpList", om.valueToTree(this.getSecurityIpList()));
            }
            if (this.getSegDiskPerformanceLevel() != null) {
                data.set("segDiskPerformanceLevel", om.valueToTree(this.getSegDiskPerformanceLevel()));
            }
            if (this.getSegNodeNum() != null) {
                data.set("segNodeNum", om.valueToTree(this.getSegNodeNum()));
            }
            if (this.getSegStorageType() != null) {
                data.set("segStorageType", om.valueToTree(this.getSegStorageType()));
            }
            if (this.getServerlessMode() != null) {
                data.set("serverlessMode", om.valueToTree(this.getServerlessMode()));
            }
            if (this.getServerlessResource() != null) {
                data.set("serverlessResource", om.valueToTree(this.getServerlessResource()));
            }
            if (this.getStandbyVSwitchId() != null) {
                data.set("standbyVSwitchId", om.valueToTree(this.getStandbyVSwitchId()));
            }
            if (this.getStandbyZoneId() != null) {
                data.set("standbyZoneId", om.valueToTree(this.getStandbyZoneId()));
            }
            if (this.getStorageSize() != null) {
                data.set("storageSize", om.valueToTree(this.getStorageSize()));
            }
            if (this.getTags() != null) {
                data.set("tags", om.valueToTree(this.getTags()));
            }
            if (this.getVectorConfigurationStatus() != null) {
                data.set("vectorConfigurationStatus", om.valueToTree(this.getVectorConfigurationStatus()));
            }
            if (this.getVpcId() != null) {
                data.set("vpcId", om.valueToTree(this.getVpcId()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-gpdb.RosDBInstanceProps"));
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

            if (!engineVersion.equals(that.engineVersion)) return false;
            if (!vSwitchId.equals(that.vSwitchId)) return false;
            if (!zoneId.equals(that.zoneId)) return false;
            if (this.aiNodeSpecInfos != null ? !this.aiNodeSpecInfos.equals(that.aiNodeSpecInfos) : that.aiNodeSpecInfos != null) return false;
            if (this.createSampleData != null ? !this.createSampleData.equals(that.createSampleData) : that.createSampleData != null) return false;
            if (this.dbInstanceCategory != null ? !this.dbInstanceCategory.equals(that.dbInstanceCategory) : that.dbInstanceCategory != null) return false;
            if (this.dbInstanceClass != null ? !this.dbInstanceClass.equals(that.dbInstanceClass) : that.dbInstanceClass != null) return false;
            if (this.dbInstanceDescription != null ? !this.dbInstanceDescription.equals(that.dbInstanceDescription) : that.dbInstanceDescription != null) return false;
            if (this.dbInstanceGroupCount != null ? !this.dbInstanceGroupCount.equals(that.dbInstanceGroupCount) : that.dbInstanceGroupCount != null) return false;
            if (this.dbInstanceMode != null ? !this.dbInstanceMode.equals(that.dbInstanceMode) : that.dbInstanceMode != null) return false;
            if (this.deployMode != null ? !this.deployMode.equals(that.deployMode) : that.deployMode != null) return false;
            if (this.encryptionKey != null ? !this.encryptionKey.equals(that.encryptionKey) : that.encryptionKey != null) return false;
            if (this.encryptionType != null ? !this.encryptionType.equals(that.encryptionType) : that.encryptionType != null) return false;
            if (this.idleTime != null ? !this.idleTime.equals(that.idleTime) : that.idleTime != null) return false;
            if (this.instanceSpec != null ? !this.instanceSpec.equals(that.instanceSpec) : that.instanceSpec != null) return false;
            if (this.masterCu != null ? !this.masterCu.equals(that.masterCu) : that.masterCu != null) return false;
            if (this.masterNodeNum != null ? !this.masterNodeNum.equals(that.masterNodeNum) : that.masterNodeNum != null) return false;
            if (this.payType != null ? !this.payType.equals(that.payType) : that.payType != null) return false;
            if (this.period != null ? !this.period.equals(that.period) : that.period != null) return false;
            if (this.periodUnit != null ? !this.periodUnit.equals(that.periodUnit) : that.periodUnit != null) return false;
            if (this.privateIpAddress != null ? !this.privateIpAddress.equals(that.privateIpAddress) : that.privateIpAddress != null) return false;
            if (this.prodType != null ? !this.prodType.equals(that.prodType) : that.prodType != null) return false;
            if (this.resourceGroupId != null ? !this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId != null) return false;
            if (this.securityIpList != null ? !this.securityIpList.equals(that.securityIpList) : that.securityIpList != null) return false;
            if (this.segDiskPerformanceLevel != null ? !this.segDiskPerformanceLevel.equals(that.segDiskPerformanceLevel) : that.segDiskPerformanceLevel != null) return false;
            if (this.segNodeNum != null ? !this.segNodeNum.equals(that.segNodeNum) : that.segNodeNum != null) return false;
            if (this.segStorageType != null ? !this.segStorageType.equals(that.segStorageType) : that.segStorageType != null) return false;
            if (this.serverlessMode != null ? !this.serverlessMode.equals(that.serverlessMode) : that.serverlessMode != null) return false;
            if (this.serverlessResource != null ? !this.serverlessResource.equals(that.serverlessResource) : that.serverlessResource != null) return false;
            if (this.standbyVSwitchId != null ? !this.standbyVSwitchId.equals(that.standbyVSwitchId) : that.standbyVSwitchId != null) return false;
            if (this.standbyZoneId != null ? !this.standbyZoneId.equals(that.standbyZoneId) : that.standbyZoneId != null) return false;
            if (this.storageSize != null ? !this.storageSize.equals(that.storageSize) : that.storageSize != null) return false;
            if (this.tags != null ? !this.tags.equals(that.tags) : that.tags != null) return false;
            if (this.vectorConfigurationStatus != null ? !this.vectorConfigurationStatus.equals(that.vectorConfigurationStatus) : that.vectorConfigurationStatus != null) return false;
            return this.vpcId != null ? this.vpcId.equals(that.vpcId) : that.vpcId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.engineVersion.hashCode();
            result = 31 * result + (this.vSwitchId.hashCode());
            result = 31 * result + (this.zoneId.hashCode());
            result = 31 * result + (this.aiNodeSpecInfos != null ? this.aiNodeSpecInfos.hashCode() : 0);
            result = 31 * result + (this.createSampleData != null ? this.createSampleData.hashCode() : 0);
            result = 31 * result + (this.dbInstanceCategory != null ? this.dbInstanceCategory.hashCode() : 0);
            result = 31 * result + (this.dbInstanceClass != null ? this.dbInstanceClass.hashCode() : 0);
            result = 31 * result + (this.dbInstanceDescription != null ? this.dbInstanceDescription.hashCode() : 0);
            result = 31 * result + (this.dbInstanceGroupCount != null ? this.dbInstanceGroupCount.hashCode() : 0);
            result = 31 * result + (this.dbInstanceMode != null ? this.dbInstanceMode.hashCode() : 0);
            result = 31 * result + (this.deployMode != null ? this.deployMode.hashCode() : 0);
            result = 31 * result + (this.encryptionKey != null ? this.encryptionKey.hashCode() : 0);
            result = 31 * result + (this.encryptionType != null ? this.encryptionType.hashCode() : 0);
            result = 31 * result + (this.idleTime != null ? this.idleTime.hashCode() : 0);
            result = 31 * result + (this.instanceSpec != null ? this.instanceSpec.hashCode() : 0);
            result = 31 * result + (this.masterCu != null ? this.masterCu.hashCode() : 0);
            result = 31 * result + (this.masterNodeNum != null ? this.masterNodeNum.hashCode() : 0);
            result = 31 * result + (this.payType != null ? this.payType.hashCode() : 0);
            result = 31 * result + (this.period != null ? this.period.hashCode() : 0);
            result = 31 * result + (this.periodUnit != null ? this.periodUnit.hashCode() : 0);
            result = 31 * result + (this.privateIpAddress != null ? this.privateIpAddress.hashCode() : 0);
            result = 31 * result + (this.prodType != null ? this.prodType.hashCode() : 0);
            result = 31 * result + (this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0);
            result = 31 * result + (this.securityIpList != null ? this.securityIpList.hashCode() : 0);
            result = 31 * result + (this.segDiskPerformanceLevel != null ? this.segDiskPerformanceLevel.hashCode() : 0);
            result = 31 * result + (this.segNodeNum != null ? this.segNodeNum.hashCode() : 0);
            result = 31 * result + (this.segStorageType != null ? this.segStorageType.hashCode() : 0);
            result = 31 * result + (this.serverlessMode != null ? this.serverlessMode.hashCode() : 0);
            result = 31 * result + (this.serverlessResource != null ? this.serverlessResource.hashCode() : 0);
            result = 31 * result + (this.standbyVSwitchId != null ? this.standbyVSwitchId.hashCode() : 0);
            result = 31 * result + (this.standbyZoneId != null ? this.standbyZoneId.hashCode() : 0);
            result = 31 * result + (this.storageSize != null ? this.storageSize.hashCode() : 0);
            result = 31 * result + (this.tags != null ? this.tags.hashCode() : 0);
            result = 31 * result + (this.vectorConfigurationStatus != null ? this.vectorConfigurationStatus.hashCode() : 0);
            result = 31 * result + (this.vpcId != null ? this.vpcId.hashCode() : 0);
            return result;
        }
    }
}
