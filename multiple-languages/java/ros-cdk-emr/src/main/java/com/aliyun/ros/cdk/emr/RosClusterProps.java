package com.aliyun.ros.cdk.emr;

/**
 * Properties for defining a <code>ALIYUN::EMR::Cluster</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-09-25T05:23:25.308Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.emr.$Module.class, fqn = "@alicloud/ros-cdk-emr.RosClusterProps")
@software.amazon.jsii.Jsii.Proxy(RosClusterProps.Jsii$Proxy.class)
public interface RosClusterProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getChargeType();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getClusterType();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getEmrVer();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getHostGroup();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getName();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getNetType();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getUseLocalMetaDb();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getZoneId();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAuthorizeContent() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAutoRenew() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getBootstrapAction() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getClickHouseConf() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getConfig() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getConfigurations() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDepositType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEasEnable() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getHighAvailabilityEnable() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInitCustomHiveMetaDb() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInstanceGeneration() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getIoOptimized() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getIsOpenPublicIp() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getKeyPairName() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getLogPath() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getMachineType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getMasterPwd() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getMetaStoreConf() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getMetaStoreType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getOptionSoftWareList() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPeriod() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRelatedClusterId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSecurityGroupId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSecurityGroupName() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSshEnable() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.emr.RosCluster.TagsProperty> getTags() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getUseCustomHiveMetaDb() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getUserDefinedEmrEcsRole() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getUserInfo() {
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
    default @org.jetbrains.annotations.Nullable java.lang.Object getWhiteListType() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosClusterProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosClusterProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosClusterProps> {
        java.lang.Object chargeType;
        java.lang.Object clusterType;
        java.lang.Object emrVer;
        java.lang.Object hostGroup;
        java.lang.Object name;
        java.lang.Object netType;
        java.lang.Object useLocalMetaDb;
        java.lang.Object zoneId;
        java.lang.Object authorizeContent;
        java.lang.Object autoRenew;
        java.lang.Object bootstrapAction;
        java.lang.Object clickHouseConf;
        java.lang.Object config;
        java.lang.Object configurations;
        java.lang.Object depositType;
        java.lang.Object easEnable;
        java.lang.Object highAvailabilityEnable;
        java.lang.Object initCustomHiveMetaDb;
        java.lang.Object instanceGeneration;
        java.lang.Object ioOptimized;
        java.lang.Object isOpenPublicIp;
        java.lang.Object keyPairName;
        java.lang.Object logPath;
        java.lang.Object machineType;
        java.lang.Object masterPwd;
        java.lang.Object metaStoreConf;
        java.lang.Object metaStoreType;
        java.lang.Object optionSoftWareList;
        java.lang.Object period;
        java.lang.Object relatedClusterId;
        java.lang.Object resourceGroupId;
        java.lang.Object securityGroupId;
        java.lang.Object securityGroupName;
        java.lang.Object sshEnable;
        java.util.List<com.aliyun.ros.cdk.emr.RosCluster.TagsProperty> tags;
        java.lang.Object useCustomHiveMetaDb;
        java.lang.Object userDefinedEmrEcsRole;
        java.lang.Object userInfo;
        java.lang.Object vpcId;
        java.lang.Object vSwitchId;
        java.lang.Object whiteListType;

        /**
         * Sets the value of {@link RosClusterProps#getChargeType}
         * @param chargeType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder chargeType(java.lang.String chargeType) {
            this.chargeType = chargeType;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterProps#getChargeType}
         * @param chargeType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder chargeType(com.aliyun.ros.cdk.core.IResolvable chargeType) {
            this.chargeType = chargeType;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterProps#getClusterType}
         * @param clusterType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder clusterType(java.lang.String clusterType) {
            this.clusterType = clusterType;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterProps#getClusterType}
         * @param clusterType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder clusterType(com.aliyun.ros.cdk.core.IResolvable clusterType) {
            this.clusterType = clusterType;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterProps#getEmrVer}
         * @param emrVer the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder emrVer(java.lang.String emrVer) {
            this.emrVer = emrVer;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterProps#getEmrVer}
         * @param emrVer the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder emrVer(com.aliyun.ros.cdk.core.IResolvable emrVer) {
            this.emrVer = emrVer;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterProps#getHostGroup}
         * @param hostGroup the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder hostGroup(com.aliyun.ros.cdk.core.IResolvable hostGroup) {
            this.hostGroup = hostGroup;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterProps#getHostGroup}
         * @param hostGroup the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder hostGroup(java.util.List<? extends java.lang.Object> hostGroup) {
            this.hostGroup = hostGroup;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterProps#getName}
         * @param name the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder name(java.lang.String name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterProps#getName}
         * @param name the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder name(com.aliyun.ros.cdk.core.IResolvable name) {
            this.name = name;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterProps#getNetType}
         * @param netType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder netType(java.lang.String netType) {
            this.netType = netType;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterProps#getNetType}
         * @param netType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder netType(com.aliyun.ros.cdk.core.IResolvable netType) {
            this.netType = netType;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterProps#getUseLocalMetaDb}
         * @param useLocalMetaDb the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder useLocalMetaDb(java.lang.Boolean useLocalMetaDb) {
            this.useLocalMetaDb = useLocalMetaDb;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterProps#getUseLocalMetaDb}
         * @param useLocalMetaDb the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder useLocalMetaDb(com.aliyun.ros.cdk.core.IResolvable useLocalMetaDb) {
            this.useLocalMetaDb = useLocalMetaDb;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterProps#getZoneId}
         * @param zoneId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder zoneId(java.lang.String zoneId) {
            this.zoneId = zoneId;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterProps#getZoneId}
         * @param zoneId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder zoneId(com.aliyun.ros.cdk.core.IResolvable zoneId) {
            this.zoneId = zoneId;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterProps#getAuthorizeContent}
         * @param authorizeContent the value to be set.
         * @return {@code this}
         */
        public Builder authorizeContent(java.lang.String authorizeContent) {
            this.authorizeContent = authorizeContent;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterProps#getAuthorizeContent}
         * @param authorizeContent the value to be set.
         * @return {@code this}
         */
        public Builder authorizeContent(com.aliyun.ros.cdk.core.IResolvable authorizeContent) {
            this.authorizeContent = authorizeContent;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterProps#getAutoRenew}
         * @param autoRenew the value to be set.
         * @return {@code this}
         */
        public Builder autoRenew(java.lang.Boolean autoRenew) {
            this.autoRenew = autoRenew;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterProps#getAutoRenew}
         * @param autoRenew the value to be set.
         * @return {@code this}
         */
        public Builder autoRenew(com.aliyun.ros.cdk.core.IResolvable autoRenew) {
            this.autoRenew = autoRenew;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterProps#getBootstrapAction}
         * @param bootstrapAction the value to be set.
         * @return {@code this}
         */
        public Builder bootstrapAction(com.aliyun.ros.cdk.core.IResolvable bootstrapAction) {
            this.bootstrapAction = bootstrapAction;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterProps#getBootstrapAction}
         * @param bootstrapAction the value to be set.
         * @return {@code this}
         */
        public Builder bootstrapAction(java.util.List<? extends java.lang.Object> bootstrapAction) {
            this.bootstrapAction = bootstrapAction;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterProps#getClickHouseConf}
         * @param clickHouseConf the value to be set.
         * @return {@code this}
         */
        public Builder clickHouseConf(com.aliyun.ros.cdk.core.IResolvable clickHouseConf) {
            this.clickHouseConf = clickHouseConf;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterProps#getClickHouseConf}
         * @param clickHouseConf the value to be set.
         * @return {@code this}
         */
        public Builder clickHouseConf(java.util.Map<java.lang.String, ? extends java.lang.Object> clickHouseConf) {
            this.clickHouseConf = clickHouseConf;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterProps#getConfig}
         * @param config the value to be set.
         * @return {@code this}
         */
        public Builder config(com.aliyun.ros.cdk.core.IResolvable config) {
            this.config = config;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterProps#getConfig}
         * @param config the value to be set.
         * @return {@code this}
         */
        public Builder config(java.util.List<? extends java.lang.Object> config) {
            this.config = config;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterProps#getConfigurations}
         * @param configurations the value to be set.
         * @return {@code this}
         */
        public Builder configurations(java.lang.String configurations) {
            this.configurations = configurations;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterProps#getConfigurations}
         * @param configurations the value to be set.
         * @return {@code this}
         */
        public Builder configurations(com.aliyun.ros.cdk.core.IResolvable configurations) {
            this.configurations = configurations;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterProps#getDepositType}
         * @param depositType the value to be set.
         * @return {@code this}
         */
        public Builder depositType(java.lang.String depositType) {
            this.depositType = depositType;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterProps#getDepositType}
         * @param depositType the value to be set.
         * @return {@code this}
         */
        public Builder depositType(com.aliyun.ros.cdk.core.IResolvable depositType) {
            this.depositType = depositType;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterProps#getEasEnable}
         * @param easEnable the value to be set.
         * @return {@code this}
         */
        public Builder easEnable(java.lang.Boolean easEnable) {
            this.easEnable = easEnable;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterProps#getEasEnable}
         * @param easEnable the value to be set.
         * @return {@code this}
         */
        public Builder easEnable(com.aliyun.ros.cdk.core.IResolvable easEnable) {
            this.easEnable = easEnable;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterProps#getHighAvailabilityEnable}
         * @param highAvailabilityEnable the value to be set.
         * @return {@code this}
         */
        public Builder highAvailabilityEnable(java.lang.Boolean highAvailabilityEnable) {
            this.highAvailabilityEnable = highAvailabilityEnable;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterProps#getHighAvailabilityEnable}
         * @param highAvailabilityEnable the value to be set.
         * @return {@code this}
         */
        public Builder highAvailabilityEnable(com.aliyun.ros.cdk.core.IResolvable highAvailabilityEnable) {
            this.highAvailabilityEnable = highAvailabilityEnable;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterProps#getInitCustomHiveMetaDb}
         * @param initCustomHiveMetaDb the value to be set.
         * @return {@code this}
         */
        public Builder initCustomHiveMetaDb(java.lang.Boolean initCustomHiveMetaDb) {
            this.initCustomHiveMetaDb = initCustomHiveMetaDb;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterProps#getInitCustomHiveMetaDb}
         * @param initCustomHiveMetaDb the value to be set.
         * @return {@code this}
         */
        public Builder initCustomHiveMetaDb(com.aliyun.ros.cdk.core.IResolvable initCustomHiveMetaDb) {
            this.initCustomHiveMetaDb = initCustomHiveMetaDb;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterProps#getInstanceGeneration}
         * @param instanceGeneration the value to be set.
         * @return {@code this}
         */
        public Builder instanceGeneration(java.lang.String instanceGeneration) {
            this.instanceGeneration = instanceGeneration;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterProps#getInstanceGeneration}
         * @param instanceGeneration the value to be set.
         * @return {@code this}
         */
        public Builder instanceGeneration(com.aliyun.ros.cdk.core.IResolvable instanceGeneration) {
            this.instanceGeneration = instanceGeneration;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterProps#getIoOptimized}
         * @param ioOptimized the value to be set.
         * @return {@code this}
         */
        public Builder ioOptimized(java.lang.Boolean ioOptimized) {
            this.ioOptimized = ioOptimized;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterProps#getIoOptimized}
         * @param ioOptimized the value to be set.
         * @return {@code this}
         */
        public Builder ioOptimized(com.aliyun.ros.cdk.core.IResolvable ioOptimized) {
            this.ioOptimized = ioOptimized;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterProps#getIsOpenPublicIp}
         * @param isOpenPublicIp the value to be set.
         * @return {@code this}
         */
        public Builder isOpenPublicIp(java.lang.Boolean isOpenPublicIp) {
            this.isOpenPublicIp = isOpenPublicIp;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterProps#getIsOpenPublicIp}
         * @param isOpenPublicIp the value to be set.
         * @return {@code this}
         */
        public Builder isOpenPublicIp(com.aliyun.ros.cdk.core.IResolvable isOpenPublicIp) {
            this.isOpenPublicIp = isOpenPublicIp;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterProps#getKeyPairName}
         * @param keyPairName the value to be set.
         * @return {@code this}
         */
        public Builder keyPairName(java.lang.String keyPairName) {
            this.keyPairName = keyPairName;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterProps#getKeyPairName}
         * @param keyPairName the value to be set.
         * @return {@code this}
         */
        public Builder keyPairName(com.aliyun.ros.cdk.core.IResolvable keyPairName) {
            this.keyPairName = keyPairName;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterProps#getLogPath}
         * @param logPath the value to be set.
         * @return {@code this}
         */
        public Builder logPath(java.lang.String logPath) {
            this.logPath = logPath;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterProps#getLogPath}
         * @param logPath the value to be set.
         * @return {@code this}
         */
        public Builder logPath(com.aliyun.ros.cdk.core.IResolvable logPath) {
            this.logPath = logPath;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterProps#getMachineType}
         * @param machineType the value to be set.
         * @return {@code this}
         */
        public Builder machineType(java.lang.String machineType) {
            this.machineType = machineType;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterProps#getMachineType}
         * @param machineType the value to be set.
         * @return {@code this}
         */
        public Builder machineType(com.aliyun.ros.cdk.core.IResolvable machineType) {
            this.machineType = machineType;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterProps#getMasterPwd}
         * @param masterPwd the value to be set.
         * @return {@code this}
         */
        public Builder masterPwd(java.lang.String masterPwd) {
            this.masterPwd = masterPwd;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterProps#getMasterPwd}
         * @param masterPwd the value to be set.
         * @return {@code this}
         */
        public Builder masterPwd(com.aliyun.ros.cdk.core.IResolvable masterPwd) {
            this.masterPwd = masterPwd;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterProps#getMetaStoreConf}
         * @param metaStoreConf the value to be set.
         * @return {@code this}
         */
        public Builder metaStoreConf(java.lang.String metaStoreConf) {
            this.metaStoreConf = metaStoreConf;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterProps#getMetaStoreConf}
         * @param metaStoreConf the value to be set.
         * @return {@code this}
         */
        public Builder metaStoreConf(com.aliyun.ros.cdk.core.IResolvable metaStoreConf) {
            this.metaStoreConf = metaStoreConf;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterProps#getMetaStoreType}
         * @param metaStoreType the value to be set.
         * @return {@code this}
         */
        public Builder metaStoreType(java.lang.String metaStoreType) {
            this.metaStoreType = metaStoreType;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterProps#getMetaStoreType}
         * @param metaStoreType the value to be set.
         * @return {@code this}
         */
        public Builder metaStoreType(com.aliyun.ros.cdk.core.IResolvable metaStoreType) {
            this.metaStoreType = metaStoreType;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterProps#getOptionSoftWareList}
         * @param optionSoftWareList the value to be set.
         * @return {@code this}
         */
        public Builder optionSoftWareList(com.aliyun.ros.cdk.core.IResolvable optionSoftWareList) {
            this.optionSoftWareList = optionSoftWareList;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterProps#getOptionSoftWareList}
         * @param optionSoftWareList the value to be set.
         * @return {@code this}
         */
        public Builder optionSoftWareList(java.util.List<? extends java.lang.Object> optionSoftWareList) {
            this.optionSoftWareList = optionSoftWareList;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterProps#getPeriod}
         * @param period the value to be set.
         * @return {@code this}
         */
        public Builder period(java.lang.Number period) {
            this.period = period;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterProps#getPeriod}
         * @param period the value to be set.
         * @return {@code this}
         */
        public Builder period(com.aliyun.ros.cdk.core.IResolvable period) {
            this.period = period;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterProps#getRelatedClusterId}
         * @param relatedClusterId the value to be set.
         * @return {@code this}
         */
        public Builder relatedClusterId(java.lang.String relatedClusterId) {
            this.relatedClusterId = relatedClusterId;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterProps#getRelatedClusterId}
         * @param relatedClusterId the value to be set.
         * @return {@code this}
         */
        public Builder relatedClusterId(com.aliyun.ros.cdk.core.IResolvable relatedClusterId) {
            this.relatedClusterId = relatedClusterId;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterProps#getResourceGroupId}
         * @param resourceGroupId the value to be set.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterProps#getResourceGroupId}
         * @param resourceGroupId the value to be set.
         * @return {@code this}
         */
        public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterProps#getSecurityGroupId}
         * @param securityGroupId the value to be set.
         * @return {@code this}
         */
        public Builder securityGroupId(java.lang.String securityGroupId) {
            this.securityGroupId = securityGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterProps#getSecurityGroupId}
         * @param securityGroupId the value to be set.
         * @return {@code this}
         */
        public Builder securityGroupId(com.aliyun.ros.cdk.core.IResolvable securityGroupId) {
            this.securityGroupId = securityGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterProps#getSecurityGroupName}
         * @param securityGroupName the value to be set.
         * @return {@code this}
         */
        public Builder securityGroupName(java.lang.String securityGroupName) {
            this.securityGroupName = securityGroupName;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterProps#getSecurityGroupName}
         * @param securityGroupName the value to be set.
         * @return {@code this}
         */
        public Builder securityGroupName(com.aliyun.ros.cdk.core.IResolvable securityGroupName) {
            this.securityGroupName = securityGroupName;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterProps#getSshEnable}
         * @param sshEnable the value to be set.
         * @return {@code this}
         */
        public Builder sshEnable(java.lang.Boolean sshEnable) {
            this.sshEnable = sshEnable;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterProps#getSshEnable}
         * @param sshEnable the value to be set.
         * @return {@code this}
         */
        public Builder sshEnable(com.aliyun.ros.cdk.core.IResolvable sshEnable) {
            this.sshEnable = sshEnable;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterProps#getTags}
         * @param tags the value to be set.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder tags(java.util.List<? extends com.aliyun.ros.cdk.emr.RosCluster.TagsProperty> tags) {
            this.tags = (java.util.List<com.aliyun.ros.cdk.emr.RosCluster.TagsProperty>)tags;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterProps#getUseCustomHiveMetaDb}
         * @param useCustomHiveMetaDb the value to be set.
         * @return {@code this}
         */
        public Builder useCustomHiveMetaDb(java.lang.Boolean useCustomHiveMetaDb) {
            this.useCustomHiveMetaDb = useCustomHiveMetaDb;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterProps#getUseCustomHiveMetaDb}
         * @param useCustomHiveMetaDb the value to be set.
         * @return {@code this}
         */
        public Builder useCustomHiveMetaDb(com.aliyun.ros.cdk.core.IResolvable useCustomHiveMetaDb) {
            this.useCustomHiveMetaDb = useCustomHiveMetaDb;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterProps#getUserDefinedEmrEcsRole}
         * @param userDefinedEmrEcsRole the value to be set.
         * @return {@code this}
         */
        public Builder userDefinedEmrEcsRole(java.lang.String userDefinedEmrEcsRole) {
            this.userDefinedEmrEcsRole = userDefinedEmrEcsRole;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterProps#getUserDefinedEmrEcsRole}
         * @param userDefinedEmrEcsRole the value to be set.
         * @return {@code this}
         */
        public Builder userDefinedEmrEcsRole(com.aliyun.ros.cdk.core.IResolvable userDefinedEmrEcsRole) {
            this.userDefinedEmrEcsRole = userDefinedEmrEcsRole;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterProps#getUserInfo}
         * @param userInfo the value to be set.
         * @return {@code this}
         */
        public Builder userInfo(com.aliyun.ros.cdk.core.IResolvable userInfo) {
            this.userInfo = userInfo;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterProps#getUserInfo}
         * @param userInfo the value to be set.
         * @return {@code this}
         */
        public Builder userInfo(java.util.List<? extends java.lang.Object> userInfo) {
            this.userInfo = userInfo;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterProps#getVpcId}
         * @param vpcId the value to be set.
         * @return {@code this}
         */
        public Builder vpcId(java.lang.String vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterProps#getVpcId}
         * @param vpcId the value to be set.
         * @return {@code this}
         */
        public Builder vpcId(com.aliyun.ros.cdk.core.IResolvable vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterProps#getVSwitchId}
         * @param vSwitchId the value to be set.
         * @return {@code this}
         */
        public Builder vSwitchId(java.lang.String vSwitchId) {
            this.vSwitchId = vSwitchId;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterProps#getVSwitchId}
         * @param vSwitchId the value to be set.
         * @return {@code this}
         */
        public Builder vSwitchId(com.aliyun.ros.cdk.core.IResolvable vSwitchId) {
            this.vSwitchId = vSwitchId;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterProps#getWhiteListType}
         * @param whiteListType the value to be set.
         * @return {@code this}
         */
        public Builder whiteListType(java.lang.String whiteListType) {
            this.whiteListType = whiteListType;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterProps#getWhiteListType}
         * @param whiteListType the value to be set.
         * @return {@code this}
         */
        public Builder whiteListType(com.aliyun.ros.cdk.core.IResolvable whiteListType) {
            this.whiteListType = whiteListType;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosClusterProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosClusterProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosClusterProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosClusterProps {
        private final java.lang.Object chargeType;
        private final java.lang.Object clusterType;
        private final java.lang.Object emrVer;
        private final java.lang.Object hostGroup;
        private final java.lang.Object name;
        private final java.lang.Object netType;
        private final java.lang.Object useLocalMetaDb;
        private final java.lang.Object zoneId;
        private final java.lang.Object authorizeContent;
        private final java.lang.Object autoRenew;
        private final java.lang.Object bootstrapAction;
        private final java.lang.Object clickHouseConf;
        private final java.lang.Object config;
        private final java.lang.Object configurations;
        private final java.lang.Object depositType;
        private final java.lang.Object easEnable;
        private final java.lang.Object highAvailabilityEnable;
        private final java.lang.Object initCustomHiveMetaDb;
        private final java.lang.Object instanceGeneration;
        private final java.lang.Object ioOptimized;
        private final java.lang.Object isOpenPublicIp;
        private final java.lang.Object keyPairName;
        private final java.lang.Object logPath;
        private final java.lang.Object machineType;
        private final java.lang.Object masterPwd;
        private final java.lang.Object metaStoreConf;
        private final java.lang.Object metaStoreType;
        private final java.lang.Object optionSoftWareList;
        private final java.lang.Object period;
        private final java.lang.Object relatedClusterId;
        private final java.lang.Object resourceGroupId;
        private final java.lang.Object securityGroupId;
        private final java.lang.Object securityGroupName;
        private final java.lang.Object sshEnable;
        private final java.util.List<com.aliyun.ros.cdk.emr.RosCluster.TagsProperty> tags;
        private final java.lang.Object useCustomHiveMetaDb;
        private final java.lang.Object userDefinedEmrEcsRole;
        private final java.lang.Object userInfo;
        private final java.lang.Object vpcId;
        private final java.lang.Object vSwitchId;
        private final java.lang.Object whiteListType;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.chargeType = software.amazon.jsii.Kernel.get(this, "chargeType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.clusterType = software.amazon.jsii.Kernel.get(this, "clusterType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.emrVer = software.amazon.jsii.Kernel.get(this, "emrVer", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.hostGroup = software.amazon.jsii.Kernel.get(this, "hostGroup", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.name = software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.netType = software.amazon.jsii.Kernel.get(this, "netType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.useLocalMetaDb = software.amazon.jsii.Kernel.get(this, "useLocalMetaDb", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.zoneId = software.amazon.jsii.Kernel.get(this, "zoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.authorizeContent = software.amazon.jsii.Kernel.get(this, "authorizeContent", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.autoRenew = software.amazon.jsii.Kernel.get(this, "autoRenew", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.bootstrapAction = software.amazon.jsii.Kernel.get(this, "bootstrapAction", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.clickHouseConf = software.amazon.jsii.Kernel.get(this, "clickHouseConf", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.config = software.amazon.jsii.Kernel.get(this, "config", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.configurations = software.amazon.jsii.Kernel.get(this, "configurations", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.depositType = software.amazon.jsii.Kernel.get(this, "depositType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.easEnable = software.amazon.jsii.Kernel.get(this, "easEnable", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.highAvailabilityEnable = software.amazon.jsii.Kernel.get(this, "highAvailabilityEnable", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.initCustomHiveMetaDb = software.amazon.jsii.Kernel.get(this, "initCustomHiveMetaDb", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.instanceGeneration = software.amazon.jsii.Kernel.get(this, "instanceGeneration", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ioOptimized = software.amazon.jsii.Kernel.get(this, "ioOptimized", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.isOpenPublicIp = software.amazon.jsii.Kernel.get(this, "isOpenPublicIp", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.keyPairName = software.amazon.jsii.Kernel.get(this, "keyPairName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.logPath = software.amazon.jsii.Kernel.get(this, "logPath", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.machineType = software.amazon.jsii.Kernel.get(this, "machineType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.masterPwd = software.amazon.jsii.Kernel.get(this, "masterPwd", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.metaStoreConf = software.amazon.jsii.Kernel.get(this, "metaStoreConf", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.metaStoreType = software.amazon.jsii.Kernel.get(this, "metaStoreType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.optionSoftWareList = software.amazon.jsii.Kernel.get(this, "optionSoftWareList", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.period = software.amazon.jsii.Kernel.get(this, "period", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.relatedClusterId = software.amazon.jsii.Kernel.get(this, "relatedClusterId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.securityGroupId = software.amazon.jsii.Kernel.get(this, "securityGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.securityGroupName = software.amazon.jsii.Kernel.get(this, "securityGroupName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.sshEnable = software.amazon.jsii.Kernel.get(this, "sshEnable", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tags = software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.emr.RosCluster.TagsProperty.class)));
            this.useCustomHiveMetaDb = software.amazon.jsii.Kernel.get(this, "useCustomHiveMetaDb", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.userDefinedEmrEcsRole = software.amazon.jsii.Kernel.get(this, "userDefinedEmrEcsRole", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.userInfo = software.amazon.jsii.Kernel.get(this, "userInfo", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vpcId = software.amazon.jsii.Kernel.get(this, "vpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vSwitchId = software.amazon.jsii.Kernel.get(this, "vSwitchId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.whiteListType = software.amazon.jsii.Kernel.get(this, "whiteListType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        @SuppressWarnings("unchecked")
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.chargeType = java.util.Objects.requireNonNull(builder.chargeType, "chargeType is required");
            this.clusterType = java.util.Objects.requireNonNull(builder.clusterType, "clusterType is required");
            this.emrVer = java.util.Objects.requireNonNull(builder.emrVer, "emrVer is required");
            this.hostGroup = java.util.Objects.requireNonNull(builder.hostGroup, "hostGroup is required");
            this.name = java.util.Objects.requireNonNull(builder.name, "name is required");
            this.netType = java.util.Objects.requireNonNull(builder.netType, "netType is required");
            this.useLocalMetaDb = java.util.Objects.requireNonNull(builder.useLocalMetaDb, "useLocalMetaDb is required");
            this.zoneId = java.util.Objects.requireNonNull(builder.zoneId, "zoneId is required");
            this.authorizeContent = builder.authorizeContent;
            this.autoRenew = builder.autoRenew;
            this.bootstrapAction = builder.bootstrapAction;
            this.clickHouseConf = builder.clickHouseConf;
            this.config = builder.config;
            this.configurations = builder.configurations;
            this.depositType = builder.depositType;
            this.easEnable = builder.easEnable;
            this.highAvailabilityEnable = builder.highAvailabilityEnable;
            this.initCustomHiveMetaDb = builder.initCustomHiveMetaDb;
            this.instanceGeneration = builder.instanceGeneration;
            this.ioOptimized = builder.ioOptimized;
            this.isOpenPublicIp = builder.isOpenPublicIp;
            this.keyPairName = builder.keyPairName;
            this.logPath = builder.logPath;
            this.machineType = builder.machineType;
            this.masterPwd = builder.masterPwd;
            this.metaStoreConf = builder.metaStoreConf;
            this.metaStoreType = builder.metaStoreType;
            this.optionSoftWareList = builder.optionSoftWareList;
            this.period = builder.period;
            this.relatedClusterId = builder.relatedClusterId;
            this.resourceGroupId = builder.resourceGroupId;
            this.securityGroupId = builder.securityGroupId;
            this.securityGroupName = builder.securityGroupName;
            this.sshEnable = builder.sshEnable;
            this.tags = (java.util.List<com.aliyun.ros.cdk.emr.RosCluster.TagsProperty>)builder.tags;
            this.useCustomHiveMetaDb = builder.useCustomHiveMetaDb;
            this.userDefinedEmrEcsRole = builder.userDefinedEmrEcsRole;
            this.userInfo = builder.userInfo;
            this.vpcId = builder.vpcId;
            this.vSwitchId = builder.vSwitchId;
            this.whiteListType = builder.whiteListType;
        }

        @Override
        public final java.lang.Object getChargeType() {
            return this.chargeType;
        }

        @Override
        public final java.lang.Object getClusterType() {
            return this.clusterType;
        }

        @Override
        public final java.lang.Object getEmrVer() {
            return this.emrVer;
        }

        @Override
        public final java.lang.Object getHostGroup() {
            return this.hostGroup;
        }

        @Override
        public final java.lang.Object getName() {
            return this.name;
        }

        @Override
        public final java.lang.Object getNetType() {
            return this.netType;
        }

        @Override
        public final java.lang.Object getUseLocalMetaDb() {
            return this.useLocalMetaDb;
        }

        @Override
        public final java.lang.Object getZoneId() {
            return this.zoneId;
        }

        @Override
        public final java.lang.Object getAuthorizeContent() {
            return this.authorizeContent;
        }

        @Override
        public final java.lang.Object getAutoRenew() {
            return this.autoRenew;
        }

        @Override
        public final java.lang.Object getBootstrapAction() {
            return this.bootstrapAction;
        }

        @Override
        public final java.lang.Object getClickHouseConf() {
            return this.clickHouseConf;
        }

        @Override
        public final java.lang.Object getConfig() {
            return this.config;
        }

        @Override
        public final java.lang.Object getConfigurations() {
            return this.configurations;
        }

        @Override
        public final java.lang.Object getDepositType() {
            return this.depositType;
        }

        @Override
        public final java.lang.Object getEasEnable() {
            return this.easEnable;
        }

        @Override
        public final java.lang.Object getHighAvailabilityEnable() {
            return this.highAvailabilityEnable;
        }

        @Override
        public final java.lang.Object getInitCustomHiveMetaDb() {
            return this.initCustomHiveMetaDb;
        }

        @Override
        public final java.lang.Object getInstanceGeneration() {
            return this.instanceGeneration;
        }

        @Override
        public final java.lang.Object getIoOptimized() {
            return this.ioOptimized;
        }

        @Override
        public final java.lang.Object getIsOpenPublicIp() {
            return this.isOpenPublicIp;
        }

        @Override
        public final java.lang.Object getKeyPairName() {
            return this.keyPairName;
        }

        @Override
        public final java.lang.Object getLogPath() {
            return this.logPath;
        }

        @Override
        public final java.lang.Object getMachineType() {
            return this.machineType;
        }

        @Override
        public final java.lang.Object getMasterPwd() {
            return this.masterPwd;
        }

        @Override
        public final java.lang.Object getMetaStoreConf() {
            return this.metaStoreConf;
        }

        @Override
        public final java.lang.Object getMetaStoreType() {
            return this.metaStoreType;
        }

        @Override
        public final java.lang.Object getOptionSoftWareList() {
            return this.optionSoftWareList;
        }

        @Override
        public final java.lang.Object getPeriod() {
            return this.period;
        }

        @Override
        public final java.lang.Object getRelatedClusterId() {
            return this.relatedClusterId;
        }

        @Override
        public final java.lang.Object getResourceGroupId() {
            return this.resourceGroupId;
        }

        @Override
        public final java.lang.Object getSecurityGroupId() {
            return this.securityGroupId;
        }

        @Override
        public final java.lang.Object getSecurityGroupName() {
            return this.securityGroupName;
        }

        @Override
        public final java.lang.Object getSshEnable() {
            return this.sshEnable;
        }

        @Override
        public final java.util.List<com.aliyun.ros.cdk.emr.RosCluster.TagsProperty> getTags() {
            return this.tags;
        }

        @Override
        public final java.lang.Object getUseCustomHiveMetaDb() {
            return this.useCustomHiveMetaDb;
        }

        @Override
        public final java.lang.Object getUserDefinedEmrEcsRole() {
            return this.userDefinedEmrEcsRole;
        }

        @Override
        public final java.lang.Object getUserInfo() {
            return this.userInfo;
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
        public final java.lang.Object getWhiteListType() {
            return this.whiteListType;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("chargeType", om.valueToTree(this.getChargeType()));
            data.set("clusterType", om.valueToTree(this.getClusterType()));
            data.set("emrVer", om.valueToTree(this.getEmrVer()));
            data.set("hostGroup", om.valueToTree(this.getHostGroup()));
            data.set("name", om.valueToTree(this.getName()));
            data.set("netType", om.valueToTree(this.getNetType()));
            data.set("useLocalMetaDb", om.valueToTree(this.getUseLocalMetaDb()));
            data.set("zoneId", om.valueToTree(this.getZoneId()));
            if (this.getAuthorizeContent() != null) {
                data.set("authorizeContent", om.valueToTree(this.getAuthorizeContent()));
            }
            if (this.getAutoRenew() != null) {
                data.set("autoRenew", om.valueToTree(this.getAutoRenew()));
            }
            if (this.getBootstrapAction() != null) {
                data.set("bootstrapAction", om.valueToTree(this.getBootstrapAction()));
            }
            if (this.getClickHouseConf() != null) {
                data.set("clickHouseConf", om.valueToTree(this.getClickHouseConf()));
            }
            if (this.getConfig() != null) {
                data.set("config", om.valueToTree(this.getConfig()));
            }
            if (this.getConfigurations() != null) {
                data.set("configurations", om.valueToTree(this.getConfigurations()));
            }
            if (this.getDepositType() != null) {
                data.set("depositType", om.valueToTree(this.getDepositType()));
            }
            if (this.getEasEnable() != null) {
                data.set("easEnable", om.valueToTree(this.getEasEnable()));
            }
            if (this.getHighAvailabilityEnable() != null) {
                data.set("highAvailabilityEnable", om.valueToTree(this.getHighAvailabilityEnable()));
            }
            if (this.getInitCustomHiveMetaDb() != null) {
                data.set("initCustomHiveMetaDb", om.valueToTree(this.getInitCustomHiveMetaDb()));
            }
            if (this.getInstanceGeneration() != null) {
                data.set("instanceGeneration", om.valueToTree(this.getInstanceGeneration()));
            }
            if (this.getIoOptimized() != null) {
                data.set("ioOptimized", om.valueToTree(this.getIoOptimized()));
            }
            if (this.getIsOpenPublicIp() != null) {
                data.set("isOpenPublicIp", om.valueToTree(this.getIsOpenPublicIp()));
            }
            if (this.getKeyPairName() != null) {
                data.set("keyPairName", om.valueToTree(this.getKeyPairName()));
            }
            if (this.getLogPath() != null) {
                data.set("logPath", om.valueToTree(this.getLogPath()));
            }
            if (this.getMachineType() != null) {
                data.set("machineType", om.valueToTree(this.getMachineType()));
            }
            if (this.getMasterPwd() != null) {
                data.set("masterPwd", om.valueToTree(this.getMasterPwd()));
            }
            if (this.getMetaStoreConf() != null) {
                data.set("metaStoreConf", om.valueToTree(this.getMetaStoreConf()));
            }
            if (this.getMetaStoreType() != null) {
                data.set("metaStoreType", om.valueToTree(this.getMetaStoreType()));
            }
            if (this.getOptionSoftWareList() != null) {
                data.set("optionSoftWareList", om.valueToTree(this.getOptionSoftWareList()));
            }
            if (this.getPeriod() != null) {
                data.set("period", om.valueToTree(this.getPeriod()));
            }
            if (this.getRelatedClusterId() != null) {
                data.set("relatedClusterId", om.valueToTree(this.getRelatedClusterId()));
            }
            if (this.getResourceGroupId() != null) {
                data.set("resourceGroupId", om.valueToTree(this.getResourceGroupId()));
            }
            if (this.getSecurityGroupId() != null) {
                data.set("securityGroupId", om.valueToTree(this.getSecurityGroupId()));
            }
            if (this.getSecurityGroupName() != null) {
                data.set("securityGroupName", om.valueToTree(this.getSecurityGroupName()));
            }
            if (this.getSshEnable() != null) {
                data.set("sshEnable", om.valueToTree(this.getSshEnable()));
            }
            if (this.getTags() != null) {
                data.set("tags", om.valueToTree(this.getTags()));
            }
            if (this.getUseCustomHiveMetaDb() != null) {
                data.set("useCustomHiveMetaDb", om.valueToTree(this.getUseCustomHiveMetaDb()));
            }
            if (this.getUserDefinedEmrEcsRole() != null) {
                data.set("userDefinedEmrEcsRole", om.valueToTree(this.getUserDefinedEmrEcsRole()));
            }
            if (this.getUserInfo() != null) {
                data.set("userInfo", om.valueToTree(this.getUserInfo()));
            }
            if (this.getVpcId() != null) {
                data.set("vpcId", om.valueToTree(this.getVpcId()));
            }
            if (this.getVSwitchId() != null) {
                data.set("vSwitchId", om.valueToTree(this.getVSwitchId()));
            }
            if (this.getWhiteListType() != null) {
                data.set("whiteListType", om.valueToTree(this.getWhiteListType()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-emr.RosClusterProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosClusterProps.Jsii$Proxy that = (RosClusterProps.Jsii$Proxy) o;

            if (!chargeType.equals(that.chargeType)) return false;
            if (!clusterType.equals(that.clusterType)) return false;
            if (!emrVer.equals(that.emrVer)) return false;
            if (!hostGroup.equals(that.hostGroup)) return false;
            if (!name.equals(that.name)) return false;
            if (!netType.equals(that.netType)) return false;
            if (!useLocalMetaDb.equals(that.useLocalMetaDb)) return false;
            if (!zoneId.equals(that.zoneId)) return false;
            if (this.authorizeContent != null ? !this.authorizeContent.equals(that.authorizeContent) : that.authorizeContent != null) return false;
            if (this.autoRenew != null ? !this.autoRenew.equals(that.autoRenew) : that.autoRenew != null) return false;
            if (this.bootstrapAction != null ? !this.bootstrapAction.equals(that.bootstrapAction) : that.bootstrapAction != null) return false;
            if (this.clickHouseConf != null ? !this.clickHouseConf.equals(that.clickHouseConf) : that.clickHouseConf != null) return false;
            if (this.config != null ? !this.config.equals(that.config) : that.config != null) return false;
            if (this.configurations != null ? !this.configurations.equals(that.configurations) : that.configurations != null) return false;
            if (this.depositType != null ? !this.depositType.equals(that.depositType) : that.depositType != null) return false;
            if (this.easEnable != null ? !this.easEnable.equals(that.easEnable) : that.easEnable != null) return false;
            if (this.highAvailabilityEnable != null ? !this.highAvailabilityEnable.equals(that.highAvailabilityEnable) : that.highAvailabilityEnable != null) return false;
            if (this.initCustomHiveMetaDb != null ? !this.initCustomHiveMetaDb.equals(that.initCustomHiveMetaDb) : that.initCustomHiveMetaDb != null) return false;
            if (this.instanceGeneration != null ? !this.instanceGeneration.equals(that.instanceGeneration) : that.instanceGeneration != null) return false;
            if (this.ioOptimized != null ? !this.ioOptimized.equals(that.ioOptimized) : that.ioOptimized != null) return false;
            if (this.isOpenPublicIp != null ? !this.isOpenPublicIp.equals(that.isOpenPublicIp) : that.isOpenPublicIp != null) return false;
            if (this.keyPairName != null ? !this.keyPairName.equals(that.keyPairName) : that.keyPairName != null) return false;
            if (this.logPath != null ? !this.logPath.equals(that.logPath) : that.logPath != null) return false;
            if (this.machineType != null ? !this.machineType.equals(that.machineType) : that.machineType != null) return false;
            if (this.masterPwd != null ? !this.masterPwd.equals(that.masterPwd) : that.masterPwd != null) return false;
            if (this.metaStoreConf != null ? !this.metaStoreConf.equals(that.metaStoreConf) : that.metaStoreConf != null) return false;
            if (this.metaStoreType != null ? !this.metaStoreType.equals(that.metaStoreType) : that.metaStoreType != null) return false;
            if (this.optionSoftWareList != null ? !this.optionSoftWareList.equals(that.optionSoftWareList) : that.optionSoftWareList != null) return false;
            if (this.period != null ? !this.period.equals(that.period) : that.period != null) return false;
            if (this.relatedClusterId != null ? !this.relatedClusterId.equals(that.relatedClusterId) : that.relatedClusterId != null) return false;
            if (this.resourceGroupId != null ? !this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId != null) return false;
            if (this.securityGroupId != null ? !this.securityGroupId.equals(that.securityGroupId) : that.securityGroupId != null) return false;
            if (this.securityGroupName != null ? !this.securityGroupName.equals(that.securityGroupName) : that.securityGroupName != null) return false;
            if (this.sshEnable != null ? !this.sshEnable.equals(that.sshEnable) : that.sshEnable != null) return false;
            if (this.tags != null ? !this.tags.equals(that.tags) : that.tags != null) return false;
            if (this.useCustomHiveMetaDb != null ? !this.useCustomHiveMetaDb.equals(that.useCustomHiveMetaDb) : that.useCustomHiveMetaDb != null) return false;
            if (this.userDefinedEmrEcsRole != null ? !this.userDefinedEmrEcsRole.equals(that.userDefinedEmrEcsRole) : that.userDefinedEmrEcsRole != null) return false;
            if (this.userInfo != null ? !this.userInfo.equals(that.userInfo) : that.userInfo != null) return false;
            if (this.vpcId != null ? !this.vpcId.equals(that.vpcId) : that.vpcId != null) return false;
            if (this.vSwitchId != null ? !this.vSwitchId.equals(that.vSwitchId) : that.vSwitchId != null) return false;
            return this.whiteListType != null ? this.whiteListType.equals(that.whiteListType) : that.whiteListType == null;
        }

        @Override
        public final int hashCode() {
            int result = this.chargeType.hashCode();
            result = 31 * result + (this.clusterType.hashCode());
            result = 31 * result + (this.emrVer.hashCode());
            result = 31 * result + (this.hostGroup.hashCode());
            result = 31 * result + (this.name.hashCode());
            result = 31 * result + (this.netType.hashCode());
            result = 31 * result + (this.useLocalMetaDb.hashCode());
            result = 31 * result + (this.zoneId.hashCode());
            result = 31 * result + (this.authorizeContent != null ? this.authorizeContent.hashCode() : 0);
            result = 31 * result + (this.autoRenew != null ? this.autoRenew.hashCode() : 0);
            result = 31 * result + (this.bootstrapAction != null ? this.bootstrapAction.hashCode() : 0);
            result = 31 * result + (this.clickHouseConf != null ? this.clickHouseConf.hashCode() : 0);
            result = 31 * result + (this.config != null ? this.config.hashCode() : 0);
            result = 31 * result + (this.configurations != null ? this.configurations.hashCode() : 0);
            result = 31 * result + (this.depositType != null ? this.depositType.hashCode() : 0);
            result = 31 * result + (this.easEnable != null ? this.easEnable.hashCode() : 0);
            result = 31 * result + (this.highAvailabilityEnable != null ? this.highAvailabilityEnable.hashCode() : 0);
            result = 31 * result + (this.initCustomHiveMetaDb != null ? this.initCustomHiveMetaDb.hashCode() : 0);
            result = 31 * result + (this.instanceGeneration != null ? this.instanceGeneration.hashCode() : 0);
            result = 31 * result + (this.ioOptimized != null ? this.ioOptimized.hashCode() : 0);
            result = 31 * result + (this.isOpenPublicIp != null ? this.isOpenPublicIp.hashCode() : 0);
            result = 31 * result + (this.keyPairName != null ? this.keyPairName.hashCode() : 0);
            result = 31 * result + (this.logPath != null ? this.logPath.hashCode() : 0);
            result = 31 * result + (this.machineType != null ? this.machineType.hashCode() : 0);
            result = 31 * result + (this.masterPwd != null ? this.masterPwd.hashCode() : 0);
            result = 31 * result + (this.metaStoreConf != null ? this.metaStoreConf.hashCode() : 0);
            result = 31 * result + (this.metaStoreType != null ? this.metaStoreType.hashCode() : 0);
            result = 31 * result + (this.optionSoftWareList != null ? this.optionSoftWareList.hashCode() : 0);
            result = 31 * result + (this.period != null ? this.period.hashCode() : 0);
            result = 31 * result + (this.relatedClusterId != null ? this.relatedClusterId.hashCode() : 0);
            result = 31 * result + (this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0);
            result = 31 * result + (this.securityGroupId != null ? this.securityGroupId.hashCode() : 0);
            result = 31 * result + (this.securityGroupName != null ? this.securityGroupName.hashCode() : 0);
            result = 31 * result + (this.sshEnable != null ? this.sshEnable.hashCode() : 0);
            result = 31 * result + (this.tags != null ? this.tags.hashCode() : 0);
            result = 31 * result + (this.useCustomHiveMetaDb != null ? this.useCustomHiveMetaDb.hashCode() : 0);
            result = 31 * result + (this.userDefinedEmrEcsRole != null ? this.userDefinedEmrEcsRole.hashCode() : 0);
            result = 31 * result + (this.userInfo != null ? this.userInfo.hashCode() : 0);
            result = 31 * result + (this.vpcId != null ? this.vpcId.hashCode() : 0);
            result = 31 * result + (this.vSwitchId != null ? this.vSwitchId.hashCode() : 0);
            result = 31 * result + (this.whiteListType != null ? this.whiteListType.hashCode() : 0);
            return result;
        }
    }
}
