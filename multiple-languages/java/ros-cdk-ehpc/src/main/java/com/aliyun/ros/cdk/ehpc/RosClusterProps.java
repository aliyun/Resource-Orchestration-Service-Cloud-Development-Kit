package com.aliyun.ros.cdk.ehpc;

/**
 * Properties for defining a <code>ALIYUN::EHPC::Cluster</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.88.0 (build eaabd08)", date = "2023-09-01T09:26:37.543Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ehpc.$Module.class, fqn = "@alicloud/ros-cdk-ehpc.RosClusterProps")
@software.amazon.jsii.Jsii.Proxy(RosClusterProps.Jsii$Proxy.class)
public interface RosClusterProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getEcsOrderComputeCount();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getEcsOrderComputeInstanceType();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getEcsOrderLoginCount();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getEcsOrderLoginInstanceType();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getEcsOrderManagerInstanceType();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getName();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getOsTag();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getVSwitchId();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAccountType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAdditionalVolumes() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getApplication() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAutoRenew() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAutoRenewPeriod() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getClientVersion() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getComputeEnableHt() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getComputeSpotPriceLimit() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getComputeSpotStrategy() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDeployMode() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEcsChargeType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEcsOrderManagerCount() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEhpcVersion() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getHaEnable() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getImageId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getImageOwnerAlias() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInputFileUrl() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getIsComputeEss() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getJobQueue() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getKeyPairName() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPassword() {
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
    default @org.jetbrains.annotations.Nullable java.lang.Object getPostInstallScript() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRamNodeTypes() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRamRoleName() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRemoteDirectory() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRemoteVisEnable() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSccClusterId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSchedulerType() {
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
    default @org.jetbrains.annotations.Nullable java.lang.Object getSystemDiskLevel() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSystemDiskSize() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSystemDiskType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getVolumeId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getVolumeMountpoint() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getVolumeProtocol() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getVolumeType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getVpcId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getWithoutElasticIp() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getZoneId() {
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
        java.lang.Object ecsOrderComputeCount;
        java.lang.Object ecsOrderComputeInstanceType;
        java.lang.Object ecsOrderLoginCount;
        java.lang.Object ecsOrderLoginInstanceType;
        java.lang.Object ecsOrderManagerInstanceType;
        java.lang.Object name;
        java.lang.Object osTag;
        java.lang.Object vSwitchId;
        java.lang.Object accountType;
        java.lang.Object additionalVolumes;
        java.lang.Object application;
        java.lang.Object autoRenew;
        java.lang.Object autoRenewPeriod;
        java.lang.Object clientVersion;
        java.lang.Object computeEnableHt;
        java.lang.Object computeSpotPriceLimit;
        java.lang.Object computeSpotStrategy;
        java.lang.Object deployMode;
        java.lang.Object description;
        java.lang.Object ecsChargeType;
        java.lang.Object ecsOrderManagerCount;
        java.lang.Object ehpcVersion;
        java.lang.Object haEnable;
        java.lang.Object imageId;
        java.lang.Object imageOwnerAlias;
        java.lang.Object inputFileUrl;
        java.lang.Object isComputeEss;
        java.lang.Object jobQueue;
        java.lang.Object keyPairName;
        java.lang.Object password;
        java.lang.Object period;
        java.lang.Object periodUnit;
        java.lang.Object postInstallScript;
        java.lang.Object ramNodeTypes;
        java.lang.Object ramRoleName;
        java.lang.Object remoteDirectory;
        java.lang.Object remoteVisEnable;
        java.lang.Object resourceGroupId;
        java.lang.Object sccClusterId;
        java.lang.Object schedulerType;
        java.lang.Object securityGroupId;
        java.lang.Object securityGroupName;
        java.lang.Object systemDiskLevel;
        java.lang.Object systemDiskSize;
        java.lang.Object systemDiskType;
        java.lang.Object volumeId;
        java.lang.Object volumeMountpoint;
        java.lang.Object volumeProtocol;
        java.lang.Object volumeType;
        java.lang.Object vpcId;
        java.lang.Object withoutElasticIp;
        java.lang.Object zoneId;

        /**
         * Sets the value of {@link RosClusterProps#getEcsOrderComputeCount}
         * @param ecsOrderComputeCount the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder ecsOrderComputeCount(java.lang.Number ecsOrderComputeCount) {
            this.ecsOrderComputeCount = ecsOrderComputeCount;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterProps#getEcsOrderComputeCount}
         * @param ecsOrderComputeCount the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder ecsOrderComputeCount(com.aliyun.ros.cdk.core.IResolvable ecsOrderComputeCount) {
            this.ecsOrderComputeCount = ecsOrderComputeCount;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterProps#getEcsOrderComputeInstanceType}
         * @param ecsOrderComputeInstanceType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder ecsOrderComputeInstanceType(java.lang.String ecsOrderComputeInstanceType) {
            this.ecsOrderComputeInstanceType = ecsOrderComputeInstanceType;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterProps#getEcsOrderComputeInstanceType}
         * @param ecsOrderComputeInstanceType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder ecsOrderComputeInstanceType(com.aliyun.ros.cdk.core.IResolvable ecsOrderComputeInstanceType) {
            this.ecsOrderComputeInstanceType = ecsOrderComputeInstanceType;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterProps#getEcsOrderLoginCount}
         * @param ecsOrderLoginCount the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder ecsOrderLoginCount(java.lang.Number ecsOrderLoginCount) {
            this.ecsOrderLoginCount = ecsOrderLoginCount;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterProps#getEcsOrderLoginCount}
         * @param ecsOrderLoginCount the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder ecsOrderLoginCount(com.aliyun.ros.cdk.core.IResolvable ecsOrderLoginCount) {
            this.ecsOrderLoginCount = ecsOrderLoginCount;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterProps#getEcsOrderLoginInstanceType}
         * @param ecsOrderLoginInstanceType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder ecsOrderLoginInstanceType(java.lang.String ecsOrderLoginInstanceType) {
            this.ecsOrderLoginInstanceType = ecsOrderLoginInstanceType;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterProps#getEcsOrderLoginInstanceType}
         * @param ecsOrderLoginInstanceType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder ecsOrderLoginInstanceType(com.aliyun.ros.cdk.core.IResolvable ecsOrderLoginInstanceType) {
            this.ecsOrderLoginInstanceType = ecsOrderLoginInstanceType;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterProps#getEcsOrderManagerInstanceType}
         * @param ecsOrderManagerInstanceType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder ecsOrderManagerInstanceType(java.lang.String ecsOrderManagerInstanceType) {
            this.ecsOrderManagerInstanceType = ecsOrderManagerInstanceType;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterProps#getEcsOrderManagerInstanceType}
         * @param ecsOrderManagerInstanceType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder ecsOrderManagerInstanceType(com.aliyun.ros.cdk.core.IResolvable ecsOrderManagerInstanceType) {
            this.ecsOrderManagerInstanceType = ecsOrderManagerInstanceType;
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
         * Sets the value of {@link RosClusterProps#getOsTag}
         * @param osTag the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder osTag(java.lang.String osTag) {
            this.osTag = osTag;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterProps#getOsTag}
         * @param osTag the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder osTag(com.aliyun.ros.cdk.core.IResolvable osTag) {
            this.osTag = osTag;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterProps#getVSwitchId}
         * @param vSwitchId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder vSwitchId(java.lang.String vSwitchId) {
            this.vSwitchId = vSwitchId;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterProps#getVSwitchId}
         * @param vSwitchId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder vSwitchId(com.aliyun.ros.cdk.core.IResolvable vSwitchId) {
            this.vSwitchId = vSwitchId;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterProps#getAccountType}
         * @param accountType the value to be set.
         * @return {@code this}
         */
        public Builder accountType(java.lang.String accountType) {
            this.accountType = accountType;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterProps#getAccountType}
         * @param accountType the value to be set.
         * @return {@code this}
         */
        public Builder accountType(com.aliyun.ros.cdk.core.IResolvable accountType) {
            this.accountType = accountType;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterProps#getAdditionalVolumes}
         * @param additionalVolumes the value to be set.
         * @return {@code this}
         */
        public Builder additionalVolumes(com.aliyun.ros.cdk.core.IResolvable additionalVolumes) {
            this.additionalVolumes = additionalVolumes;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterProps#getAdditionalVolumes}
         * @param additionalVolumes the value to be set.
         * @return {@code this}
         */
        public Builder additionalVolumes(java.util.List<? extends java.lang.Object> additionalVolumes) {
            this.additionalVolumes = additionalVolumes;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterProps#getApplication}
         * @param application the value to be set.
         * @return {@code this}
         */
        public Builder application(com.aliyun.ros.cdk.core.IResolvable application) {
            this.application = application;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterProps#getApplication}
         * @param application the value to be set.
         * @return {@code this}
         */
        public Builder application(java.util.List<? extends java.lang.Object> application) {
            this.application = application;
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
         * Sets the value of {@link RosClusterProps#getAutoRenewPeriod}
         * @param autoRenewPeriod the value to be set.
         * @return {@code this}
         */
        public Builder autoRenewPeriod(java.lang.Number autoRenewPeriod) {
            this.autoRenewPeriod = autoRenewPeriod;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterProps#getAutoRenewPeriod}
         * @param autoRenewPeriod the value to be set.
         * @return {@code this}
         */
        public Builder autoRenewPeriod(com.aliyun.ros.cdk.core.IResolvable autoRenewPeriod) {
            this.autoRenewPeriod = autoRenewPeriod;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterProps#getClientVersion}
         * @param clientVersion the value to be set.
         * @return {@code this}
         */
        public Builder clientVersion(java.lang.String clientVersion) {
            this.clientVersion = clientVersion;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterProps#getClientVersion}
         * @param clientVersion the value to be set.
         * @return {@code this}
         */
        public Builder clientVersion(com.aliyun.ros.cdk.core.IResolvable clientVersion) {
            this.clientVersion = clientVersion;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterProps#getComputeEnableHt}
         * @param computeEnableHt the value to be set.
         * @return {@code this}
         */
        public Builder computeEnableHt(java.lang.Boolean computeEnableHt) {
            this.computeEnableHt = computeEnableHt;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterProps#getComputeEnableHt}
         * @param computeEnableHt the value to be set.
         * @return {@code this}
         */
        public Builder computeEnableHt(com.aliyun.ros.cdk.core.IResolvable computeEnableHt) {
            this.computeEnableHt = computeEnableHt;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterProps#getComputeSpotPriceLimit}
         * @param computeSpotPriceLimit the value to be set.
         * @return {@code this}
         */
        public Builder computeSpotPriceLimit(java.lang.String computeSpotPriceLimit) {
            this.computeSpotPriceLimit = computeSpotPriceLimit;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterProps#getComputeSpotPriceLimit}
         * @param computeSpotPriceLimit the value to be set.
         * @return {@code this}
         */
        public Builder computeSpotPriceLimit(com.aliyun.ros.cdk.core.IResolvable computeSpotPriceLimit) {
            this.computeSpotPriceLimit = computeSpotPriceLimit;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterProps#getComputeSpotStrategy}
         * @param computeSpotStrategy the value to be set.
         * @return {@code this}
         */
        public Builder computeSpotStrategy(java.lang.String computeSpotStrategy) {
            this.computeSpotStrategy = computeSpotStrategy;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterProps#getComputeSpotStrategy}
         * @param computeSpotStrategy the value to be set.
         * @return {@code this}
         */
        public Builder computeSpotStrategy(com.aliyun.ros.cdk.core.IResolvable computeSpotStrategy) {
            this.computeSpotStrategy = computeSpotStrategy;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterProps#getDeployMode}
         * @param deployMode the value to be set.
         * @return {@code this}
         */
        public Builder deployMode(java.lang.String deployMode) {
            this.deployMode = deployMode;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterProps#getDeployMode}
         * @param deployMode the value to be set.
         * @return {@code this}
         */
        public Builder deployMode(com.aliyun.ros.cdk.core.IResolvable deployMode) {
            this.deployMode = deployMode;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterProps#getEcsChargeType}
         * @param ecsChargeType the value to be set.
         * @return {@code this}
         */
        public Builder ecsChargeType(java.lang.String ecsChargeType) {
            this.ecsChargeType = ecsChargeType;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterProps#getEcsChargeType}
         * @param ecsChargeType the value to be set.
         * @return {@code this}
         */
        public Builder ecsChargeType(com.aliyun.ros.cdk.core.IResolvable ecsChargeType) {
            this.ecsChargeType = ecsChargeType;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterProps#getEcsOrderManagerCount}
         * @param ecsOrderManagerCount the value to be set.
         * @return {@code this}
         */
        public Builder ecsOrderManagerCount(java.lang.Number ecsOrderManagerCount) {
            this.ecsOrderManagerCount = ecsOrderManagerCount;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterProps#getEcsOrderManagerCount}
         * @param ecsOrderManagerCount the value to be set.
         * @return {@code this}
         */
        public Builder ecsOrderManagerCount(com.aliyun.ros.cdk.core.IResolvable ecsOrderManagerCount) {
            this.ecsOrderManagerCount = ecsOrderManagerCount;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterProps#getEhpcVersion}
         * @param ehpcVersion the value to be set.
         * @return {@code this}
         */
        public Builder ehpcVersion(java.lang.String ehpcVersion) {
            this.ehpcVersion = ehpcVersion;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterProps#getEhpcVersion}
         * @param ehpcVersion the value to be set.
         * @return {@code this}
         */
        public Builder ehpcVersion(com.aliyun.ros.cdk.core.IResolvable ehpcVersion) {
            this.ehpcVersion = ehpcVersion;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterProps#getHaEnable}
         * @param haEnable the value to be set.
         * @return {@code this}
         */
        public Builder haEnable(java.lang.Boolean haEnable) {
            this.haEnable = haEnable;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterProps#getHaEnable}
         * @param haEnable the value to be set.
         * @return {@code this}
         */
        public Builder haEnable(com.aliyun.ros.cdk.core.IResolvable haEnable) {
            this.haEnable = haEnable;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterProps#getImageId}
         * @param imageId the value to be set.
         * @return {@code this}
         */
        public Builder imageId(java.lang.String imageId) {
            this.imageId = imageId;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterProps#getImageId}
         * @param imageId the value to be set.
         * @return {@code this}
         */
        public Builder imageId(com.aliyun.ros.cdk.core.IResolvable imageId) {
            this.imageId = imageId;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterProps#getImageOwnerAlias}
         * @param imageOwnerAlias the value to be set.
         * @return {@code this}
         */
        public Builder imageOwnerAlias(java.lang.String imageOwnerAlias) {
            this.imageOwnerAlias = imageOwnerAlias;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterProps#getImageOwnerAlias}
         * @param imageOwnerAlias the value to be set.
         * @return {@code this}
         */
        public Builder imageOwnerAlias(com.aliyun.ros.cdk.core.IResolvable imageOwnerAlias) {
            this.imageOwnerAlias = imageOwnerAlias;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterProps#getInputFileUrl}
         * @param inputFileUrl the value to be set.
         * @return {@code this}
         */
        public Builder inputFileUrl(java.lang.String inputFileUrl) {
            this.inputFileUrl = inputFileUrl;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterProps#getInputFileUrl}
         * @param inputFileUrl the value to be set.
         * @return {@code this}
         */
        public Builder inputFileUrl(com.aliyun.ros.cdk.core.IResolvable inputFileUrl) {
            this.inputFileUrl = inputFileUrl;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterProps#getIsComputeEss}
         * @param isComputeEss the value to be set.
         * @return {@code this}
         */
        public Builder isComputeEss(java.lang.Boolean isComputeEss) {
            this.isComputeEss = isComputeEss;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterProps#getIsComputeEss}
         * @param isComputeEss the value to be set.
         * @return {@code this}
         */
        public Builder isComputeEss(com.aliyun.ros.cdk.core.IResolvable isComputeEss) {
            this.isComputeEss = isComputeEss;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterProps#getJobQueue}
         * @param jobQueue the value to be set.
         * @return {@code this}
         */
        public Builder jobQueue(java.lang.String jobQueue) {
            this.jobQueue = jobQueue;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterProps#getJobQueue}
         * @param jobQueue the value to be set.
         * @return {@code this}
         */
        public Builder jobQueue(com.aliyun.ros.cdk.core.IResolvable jobQueue) {
            this.jobQueue = jobQueue;
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
         * Sets the value of {@link RosClusterProps#getPassword}
         * @param password the value to be set.
         * @return {@code this}
         */
        public Builder password(java.lang.String password) {
            this.password = password;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterProps#getPassword}
         * @param password the value to be set.
         * @return {@code this}
         */
        public Builder password(com.aliyun.ros.cdk.core.IResolvable password) {
            this.password = password;
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
         * Sets the value of {@link RosClusterProps#getPeriodUnit}
         * @param periodUnit the value to be set.
         * @return {@code this}
         */
        public Builder periodUnit(java.lang.String periodUnit) {
            this.periodUnit = periodUnit;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterProps#getPeriodUnit}
         * @param periodUnit the value to be set.
         * @return {@code this}
         */
        public Builder periodUnit(com.aliyun.ros.cdk.core.IResolvable periodUnit) {
            this.periodUnit = periodUnit;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterProps#getPostInstallScript}
         * @param postInstallScript the value to be set.
         * @return {@code this}
         */
        public Builder postInstallScript(com.aliyun.ros.cdk.core.IResolvable postInstallScript) {
            this.postInstallScript = postInstallScript;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterProps#getPostInstallScript}
         * @param postInstallScript the value to be set.
         * @return {@code this}
         */
        public Builder postInstallScript(java.util.List<? extends java.lang.Object> postInstallScript) {
            this.postInstallScript = postInstallScript;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterProps#getRamNodeTypes}
         * @param ramNodeTypes the value to be set.
         * @return {@code this}
         */
        public Builder ramNodeTypes(com.aliyun.ros.cdk.core.IResolvable ramNodeTypes) {
            this.ramNodeTypes = ramNodeTypes;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterProps#getRamNodeTypes}
         * @param ramNodeTypes the value to be set.
         * @return {@code this}
         */
        public Builder ramNodeTypes(java.util.List<? extends java.lang.Object> ramNodeTypes) {
            this.ramNodeTypes = ramNodeTypes;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterProps#getRamRoleName}
         * @param ramRoleName the value to be set.
         * @return {@code this}
         */
        public Builder ramRoleName(java.lang.String ramRoleName) {
            this.ramRoleName = ramRoleName;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterProps#getRamRoleName}
         * @param ramRoleName the value to be set.
         * @return {@code this}
         */
        public Builder ramRoleName(com.aliyun.ros.cdk.core.IResolvable ramRoleName) {
            this.ramRoleName = ramRoleName;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterProps#getRemoteDirectory}
         * @param remoteDirectory the value to be set.
         * @return {@code this}
         */
        public Builder remoteDirectory(java.lang.String remoteDirectory) {
            this.remoteDirectory = remoteDirectory;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterProps#getRemoteDirectory}
         * @param remoteDirectory the value to be set.
         * @return {@code this}
         */
        public Builder remoteDirectory(com.aliyun.ros.cdk.core.IResolvable remoteDirectory) {
            this.remoteDirectory = remoteDirectory;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterProps#getRemoteVisEnable}
         * @param remoteVisEnable the value to be set.
         * @return {@code this}
         */
        public Builder remoteVisEnable(java.lang.Boolean remoteVisEnable) {
            this.remoteVisEnable = remoteVisEnable;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterProps#getRemoteVisEnable}
         * @param remoteVisEnable the value to be set.
         * @return {@code this}
         */
        public Builder remoteVisEnable(com.aliyun.ros.cdk.core.IResolvable remoteVisEnable) {
            this.remoteVisEnable = remoteVisEnable;
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
         * Sets the value of {@link RosClusterProps#getSccClusterId}
         * @param sccClusterId the value to be set.
         * @return {@code this}
         */
        public Builder sccClusterId(java.lang.String sccClusterId) {
            this.sccClusterId = sccClusterId;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterProps#getSccClusterId}
         * @param sccClusterId the value to be set.
         * @return {@code this}
         */
        public Builder sccClusterId(com.aliyun.ros.cdk.core.IResolvable sccClusterId) {
            this.sccClusterId = sccClusterId;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterProps#getSchedulerType}
         * @param schedulerType the value to be set.
         * @return {@code this}
         */
        public Builder schedulerType(java.lang.String schedulerType) {
            this.schedulerType = schedulerType;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterProps#getSchedulerType}
         * @param schedulerType the value to be set.
         * @return {@code this}
         */
        public Builder schedulerType(com.aliyun.ros.cdk.core.IResolvable schedulerType) {
            this.schedulerType = schedulerType;
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
         * Sets the value of {@link RosClusterProps#getSystemDiskLevel}
         * @param systemDiskLevel the value to be set.
         * @return {@code this}
         */
        public Builder systemDiskLevel(java.lang.String systemDiskLevel) {
            this.systemDiskLevel = systemDiskLevel;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterProps#getSystemDiskLevel}
         * @param systemDiskLevel the value to be set.
         * @return {@code this}
         */
        public Builder systemDiskLevel(com.aliyun.ros.cdk.core.IResolvable systemDiskLevel) {
            this.systemDiskLevel = systemDiskLevel;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterProps#getSystemDiskSize}
         * @param systemDiskSize the value to be set.
         * @return {@code this}
         */
        public Builder systemDiskSize(java.lang.Number systemDiskSize) {
            this.systemDiskSize = systemDiskSize;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterProps#getSystemDiskSize}
         * @param systemDiskSize the value to be set.
         * @return {@code this}
         */
        public Builder systemDiskSize(com.aliyun.ros.cdk.core.IResolvable systemDiskSize) {
            this.systemDiskSize = systemDiskSize;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterProps#getSystemDiskType}
         * @param systemDiskType the value to be set.
         * @return {@code this}
         */
        public Builder systemDiskType(java.lang.String systemDiskType) {
            this.systemDiskType = systemDiskType;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterProps#getSystemDiskType}
         * @param systemDiskType the value to be set.
         * @return {@code this}
         */
        public Builder systemDiskType(com.aliyun.ros.cdk.core.IResolvable systemDiskType) {
            this.systemDiskType = systemDiskType;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterProps#getVolumeId}
         * @param volumeId the value to be set.
         * @return {@code this}
         */
        public Builder volumeId(java.lang.String volumeId) {
            this.volumeId = volumeId;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterProps#getVolumeId}
         * @param volumeId the value to be set.
         * @return {@code this}
         */
        public Builder volumeId(com.aliyun.ros.cdk.core.IResolvable volumeId) {
            this.volumeId = volumeId;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterProps#getVolumeMountpoint}
         * @param volumeMountpoint the value to be set.
         * @return {@code this}
         */
        public Builder volumeMountpoint(java.lang.String volumeMountpoint) {
            this.volumeMountpoint = volumeMountpoint;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterProps#getVolumeMountpoint}
         * @param volumeMountpoint the value to be set.
         * @return {@code this}
         */
        public Builder volumeMountpoint(com.aliyun.ros.cdk.core.IResolvable volumeMountpoint) {
            this.volumeMountpoint = volumeMountpoint;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterProps#getVolumeProtocol}
         * @param volumeProtocol the value to be set.
         * @return {@code this}
         */
        public Builder volumeProtocol(java.lang.String volumeProtocol) {
            this.volumeProtocol = volumeProtocol;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterProps#getVolumeProtocol}
         * @param volumeProtocol the value to be set.
         * @return {@code this}
         */
        public Builder volumeProtocol(com.aliyun.ros.cdk.core.IResolvable volumeProtocol) {
            this.volumeProtocol = volumeProtocol;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterProps#getVolumeType}
         * @param volumeType the value to be set.
         * @return {@code this}
         */
        public Builder volumeType(java.lang.String volumeType) {
            this.volumeType = volumeType;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterProps#getVolumeType}
         * @param volumeType the value to be set.
         * @return {@code this}
         */
        public Builder volumeType(com.aliyun.ros.cdk.core.IResolvable volumeType) {
            this.volumeType = volumeType;
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
         * Sets the value of {@link RosClusterProps#getWithoutElasticIp}
         * @param withoutElasticIp the value to be set.
         * @return {@code this}
         */
        public Builder withoutElasticIp(java.lang.Boolean withoutElasticIp) {
            this.withoutElasticIp = withoutElasticIp;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterProps#getWithoutElasticIp}
         * @param withoutElasticIp the value to be set.
         * @return {@code this}
         */
        public Builder withoutElasticIp(com.aliyun.ros.cdk.core.IResolvable withoutElasticIp) {
            this.withoutElasticIp = withoutElasticIp;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterProps#getZoneId}
         * @param zoneId the value to be set.
         * @return {@code this}
         */
        public Builder zoneId(java.lang.String zoneId) {
            this.zoneId = zoneId;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterProps#getZoneId}
         * @param zoneId the value to be set.
         * @return {@code this}
         */
        public Builder zoneId(com.aliyun.ros.cdk.core.IResolvable zoneId) {
            this.zoneId = zoneId;
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
        private final java.lang.Object ecsOrderComputeCount;
        private final java.lang.Object ecsOrderComputeInstanceType;
        private final java.lang.Object ecsOrderLoginCount;
        private final java.lang.Object ecsOrderLoginInstanceType;
        private final java.lang.Object ecsOrderManagerInstanceType;
        private final java.lang.Object name;
        private final java.lang.Object osTag;
        private final java.lang.Object vSwitchId;
        private final java.lang.Object accountType;
        private final java.lang.Object additionalVolumes;
        private final java.lang.Object application;
        private final java.lang.Object autoRenew;
        private final java.lang.Object autoRenewPeriod;
        private final java.lang.Object clientVersion;
        private final java.lang.Object computeEnableHt;
        private final java.lang.Object computeSpotPriceLimit;
        private final java.lang.Object computeSpotStrategy;
        private final java.lang.Object deployMode;
        private final java.lang.Object description;
        private final java.lang.Object ecsChargeType;
        private final java.lang.Object ecsOrderManagerCount;
        private final java.lang.Object ehpcVersion;
        private final java.lang.Object haEnable;
        private final java.lang.Object imageId;
        private final java.lang.Object imageOwnerAlias;
        private final java.lang.Object inputFileUrl;
        private final java.lang.Object isComputeEss;
        private final java.lang.Object jobQueue;
        private final java.lang.Object keyPairName;
        private final java.lang.Object password;
        private final java.lang.Object period;
        private final java.lang.Object periodUnit;
        private final java.lang.Object postInstallScript;
        private final java.lang.Object ramNodeTypes;
        private final java.lang.Object ramRoleName;
        private final java.lang.Object remoteDirectory;
        private final java.lang.Object remoteVisEnable;
        private final java.lang.Object resourceGroupId;
        private final java.lang.Object sccClusterId;
        private final java.lang.Object schedulerType;
        private final java.lang.Object securityGroupId;
        private final java.lang.Object securityGroupName;
        private final java.lang.Object systemDiskLevel;
        private final java.lang.Object systemDiskSize;
        private final java.lang.Object systemDiskType;
        private final java.lang.Object volumeId;
        private final java.lang.Object volumeMountpoint;
        private final java.lang.Object volumeProtocol;
        private final java.lang.Object volumeType;
        private final java.lang.Object vpcId;
        private final java.lang.Object withoutElasticIp;
        private final java.lang.Object zoneId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.ecsOrderComputeCount = software.amazon.jsii.Kernel.get(this, "ecsOrderComputeCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ecsOrderComputeInstanceType = software.amazon.jsii.Kernel.get(this, "ecsOrderComputeInstanceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ecsOrderLoginCount = software.amazon.jsii.Kernel.get(this, "ecsOrderLoginCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ecsOrderLoginInstanceType = software.amazon.jsii.Kernel.get(this, "ecsOrderLoginInstanceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ecsOrderManagerInstanceType = software.amazon.jsii.Kernel.get(this, "ecsOrderManagerInstanceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.name = software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.osTag = software.amazon.jsii.Kernel.get(this, "osTag", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vSwitchId = software.amazon.jsii.Kernel.get(this, "vSwitchId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.accountType = software.amazon.jsii.Kernel.get(this, "accountType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.additionalVolumes = software.amazon.jsii.Kernel.get(this, "additionalVolumes", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.application = software.amazon.jsii.Kernel.get(this, "application", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.autoRenew = software.amazon.jsii.Kernel.get(this, "autoRenew", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.autoRenewPeriod = software.amazon.jsii.Kernel.get(this, "autoRenewPeriod", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.clientVersion = software.amazon.jsii.Kernel.get(this, "clientVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.computeEnableHt = software.amazon.jsii.Kernel.get(this, "computeEnableHt", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.computeSpotPriceLimit = software.amazon.jsii.Kernel.get(this, "computeSpotPriceLimit", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.computeSpotStrategy = software.amazon.jsii.Kernel.get(this, "computeSpotStrategy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.deployMode = software.amazon.jsii.Kernel.get(this, "deployMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ecsChargeType = software.amazon.jsii.Kernel.get(this, "ecsChargeType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ecsOrderManagerCount = software.amazon.jsii.Kernel.get(this, "ecsOrderManagerCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ehpcVersion = software.amazon.jsii.Kernel.get(this, "ehpcVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.haEnable = software.amazon.jsii.Kernel.get(this, "haEnable", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.imageId = software.amazon.jsii.Kernel.get(this, "imageId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.imageOwnerAlias = software.amazon.jsii.Kernel.get(this, "imageOwnerAlias", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.inputFileUrl = software.amazon.jsii.Kernel.get(this, "inputFileUrl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.isComputeEss = software.amazon.jsii.Kernel.get(this, "isComputeEss", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.jobQueue = software.amazon.jsii.Kernel.get(this, "jobQueue", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.keyPairName = software.amazon.jsii.Kernel.get(this, "keyPairName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.password = software.amazon.jsii.Kernel.get(this, "password", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.period = software.amazon.jsii.Kernel.get(this, "period", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.periodUnit = software.amazon.jsii.Kernel.get(this, "periodUnit", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.postInstallScript = software.amazon.jsii.Kernel.get(this, "postInstallScript", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ramNodeTypes = software.amazon.jsii.Kernel.get(this, "ramNodeTypes", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ramRoleName = software.amazon.jsii.Kernel.get(this, "ramRoleName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.remoteDirectory = software.amazon.jsii.Kernel.get(this, "remoteDirectory", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.remoteVisEnable = software.amazon.jsii.Kernel.get(this, "remoteVisEnable", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.sccClusterId = software.amazon.jsii.Kernel.get(this, "sccClusterId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.schedulerType = software.amazon.jsii.Kernel.get(this, "schedulerType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.securityGroupId = software.amazon.jsii.Kernel.get(this, "securityGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.securityGroupName = software.amazon.jsii.Kernel.get(this, "securityGroupName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.systemDiskLevel = software.amazon.jsii.Kernel.get(this, "systemDiskLevel", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.systemDiskSize = software.amazon.jsii.Kernel.get(this, "systemDiskSize", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.systemDiskType = software.amazon.jsii.Kernel.get(this, "systemDiskType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.volumeId = software.amazon.jsii.Kernel.get(this, "volumeId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.volumeMountpoint = software.amazon.jsii.Kernel.get(this, "volumeMountpoint", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.volumeProtocol = software.amazon.jsii.Kernel.get(this, "volumeProtocol", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.volumeType = software.amazon.jsii.Kernel.get(this, "volumeType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vpcId = software.amazon.jsii.Kernel.get(this, "vpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.withoutElasticIp = software.amazon.jsii.Kernel.get(this, "withoutElasticIp", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.zoneId = software.amazon.jsii.Kernel.get(this, "zoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.ecsOrderComputeCount = java.util.Objects.requireNonNull(builder.ecsOrderComputeCount, "ecsOrderComputeCount is required");
            this.ecsOrderComputeInstanceType = java.util.Objects.requireNonNull(builder.ecsOrderComputeInstanceType, "ecsOrderComputeInstanceType is required");
            this.ecsOrderLoginCount = java.util.Objects.requireNonNull(builder.ecsOrderLoginCount, "ecsOrderLoginCount is required");
            this.ecsOrderLoginInstanceType = java.util.Objects.requireNonNull(builder.ecsOrderLoginInstanceType, "ecsOrderLoginInstanceType is required");
            this.ecsOrderManagerInstanceType = java.util.Objects.requireNonNull(builder.ecsOrderManagerInstanceType, "ecsOrderManagerInstanceType is required");
            this.name = java.util.Objects.requireNonNull(builder.name, "name is required");
            this.osTag = java.util.Objects.requireNonNull(builder.osTag, "osTag is required");
            this.vSwitchId = java.util.Objects.requireNonNull(builder.vSwitchId, "vSwitchId is required");
            this.accountType = builder.accountType;
            this.additionalVolumes = builder.additionalVolumes;
            this.application = builder.application;
            this.autoRenew = builder.autoRenew;
            this.autoRenewPeriod = builder.autoRenewPeriod;
            this.clientVersion = builder.clientVersion;
            this.computeEnableHt = builder.computeEnableHt;
            this.computeSpotPriceLimit = builder.computeSpotPriceLimit;
            this.computeSpotStrategy = builder.computeSpotStrategy;
            this.deployMode = builder.deployMode;
            this.description = builder.description;
            this.ecsChargeType = builder.ecsChargeType;
            this.ecsOrderManagerCount = builder.ecsOrderManagerCount;
            this.ehpcVersion = builder.ehpcVersion;
            this.haEnable = builder.haEnable;
            this.imageId = builder.imageId;
            this.imageOwnerAlias = builder.imageOwnerAlias;
            this.inputFileUrl = builder.inputFileUrl;
            this.isComputeEss = builder.isComputeEss;
            this.jobQueue = builder.jobQueue;
            this.keyPairName = builder.keyPairName;
            this.password = builder.password;
            this.period = builder.period;
            this.periodUnit = builder.periodUnit;
            this.postInstallScript = builder.postInstallScript;
            this.ramNodeTypes = builder.ramNodeTypes;
            this.ramRoleName = builder.ramRoleName;
            this.remoteDirectory = builder.remoteDirectory;
            this.remoteVisEnable = builder.remoteVisEnable;
            this.resourceGroupId = builder.resourceGroupId;
            this.sccClusterId = builder.sccClusterId;
            this.schedulerType = builder.schedulerType;
            this.securityGroupId = builder.securityGroupId;
            this.securityGroupName = builder.securityGroupName;
            this.systemDiskLevel = builder.systemDiskLevel;
            this.systemDiskSize = builder.systemDiskSize;
            this.systemDiskType = builder.systemDiskType;
            this.volumeId = builder.volumeId;
            this.volumeMountpoint = builder.volumeMountpoint;
            this.volumeProtocol = builder.volumeProtocol;
            this.volumeType = builder.volumeType;
            this.vpcId = builder.vpcId;
            this.withoutElasticIp = builder.withoutElasticIp;
            this.zoneId = builder.zoneId;
        }

        @Override
        public final java.lang.Object getEcsOrderComputeCount() {
            return this.ecsOrderComputeCount;
        }

        @Override
        public final java.lang.Object getEcsOrderComputeInstanceType() {
            return this.ecsOrderComputeInstanceType;
        }

        @Override
        public final java.lang.Object getEcsOrderLoginCount() {
            return this.ecsOrderLoginCount;
        }

        @Override
        public final java.lang.Object getEcsOrderLoginInstanceType() {
            return this.ecsOrderLoginInstanceType;
        }

        @Override
        public final java.lang.Object getEcsOrderManagerInstanceType() {
            return this.ecsOrderManagerInstanceType;
        }

        @Override
        public final java.lang.Object getName() {
            return this.name;
        }

        @Override
        public final java.lang.Object getOsTag() {
            return this.osTag;
        }

        @Override
        public final java.lang.Object getVSwitchId() {
            return this.vSwitchId;
        }

        @Override
        public final java.lang.Object getAccountType() {
            return this.accountType;
        }

        @Override
        public final java.lang.Object getAdditionalVolumes() {
            return this.additionalVolumes;
        }

        @Override
        public final java.lang.Object getApplication() {
            return this.application;
        }

        @Override
        public final java.lang.Object getAutoRenew() {
            return this.autoRenew;
        }

        @Override
        public final java.lang.Object getAutoRenewPeriod() {
            return this.autoRenewPeriod;
        }

        @Override
        public final java.lang.Object getClientVersion() {
            return this.clientVersion;
        }

        @Override
        public final java.lang.Object getComputeEnableHt() {
            return this.computeEnableHt;
        }

        @Override
        public final java.lang.Object getComputeSpotPriceLimit() {
            return this.computeSpotPriceLimit;
        }

        @Override
        public final java.lang.Object getComputeSpotStrategy() {
            return this.computeSpotStrategy;
        }

        @Override
        public final java.lang.Object getDeployMode() {
            return this.deployMode;
        }

        @Override
        public final java.lang.Object getDescription() {
            return this.description;
        }

        @Override
        public final java.lang.Object getEcsChargeType() {
            return this.ecsChargeType;
        }

        @Override
        public final java.lang.Object getEcsOrderManagerCount() {
            return this.ecsOrderManagerCount;
        }

        @Override
        public final java.lang.Object getEhpcVersion() {
            return this.ehpcVersion;
        }

        @Override
        public final java.lang.Object getHaEnable() {
            return this.haEnable;
        }

        @Override
        public final java.lang.Object getImageId() {
            return this.imageId;
        }

        @Override
        public final java.lang.Object getImageOwnerAlias() {
            return this.imageOwnerAlias;
        }

        @Override
        public final java.lang.Object getInputFileUrl() {
            return this.inputFileUrl;
        }

        @Override
        public final java.lang.Object getIsComputeEss() {
            return this.isComputeEss;
        }

        @Override
        public final java.lang.Object getJobQueue() {
            return this.jobQueue;
        }

        @Override
        public final java.lang.Object getKeyPairName() {
            return this.keyPairName;
        }

        @Override
        public final java.lang.Object getPassword() {
            return this.password;
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
        public final java.lang.Object getPostInstallScript() {
            return this.postInstallScript;
        }

        @Override
        public final java.lang.Object getRamNodeTypes() {
            return this.ramNodeTypes;
        }

        @Override
        public final java.lang.Object getRamRoleName() {
            return this.ramRoleName;
        }

        @Override
        public final java.lang.Object getRemoteDirectory() {
            return this.remoteDirectory;
        }

        @Override
        public final java.lang.Object getRemoteVisEnable() {
            return this.remoteVisEnable;
        }

        @Override
        public final java.lang.Object getResourceGroupId() {
            return this.resourceGroupId;
        }

        @Override
        public final java.lang.Object getSccClusterId() {
            return this.sccClusterId;
        }

        @Override
        public final java.lang.Object getSchedulerType() {
            return this.schedulerType;
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
        public final java.lang.Object getSystemDiskLevel() {
            return this.systemDiskLevel;
        }

        @Override
        public final java.lang.Object getSystemDiskSize() {
            return this.systemDiskSize;
        }

        @Override
        public final java.lang.Object getSystemDiskType() {
            return this.systemDiskType;
        }

        @Override
        public final java.lang.Object getVolumeId() {
            return this.volumeId;
        }

        @Override
        public final java.lang.Object getVolumeMountpoint() {
            return this.volumeMountpoint;
        }

        @Override
        public final java.lang.Object getVolumeProtocol() {
            return this.volumeProtocol;
        }

        @Override
        public final java.lang.Object getVolumeType() {
            return this.volumeType;
        }

        @Override
        public final java.lang.Object getVpcId() {
            return this.vpcId;
        }

        @Override
        public final java.lang.Object getWithoutElasticIp() {
            return this.withoutElasticIp;
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

            data.set("ecsOrderComputeCount", om.valueToTree(this.getEcsOrderComputeCount()));
            data.set("ecsOrderComputeInstanceType", om.valueToTree(this.getEcsOrderComputeInstanceType()));
            data.set("ecsOrderLoginCount", om.valueToTree(this.getEcsOrderLoginCount()));
            data.set("ecsOrderLoginInstanceType", om.valueToTree(this.getEcsOrderLoginInstanceType()));
            data.set("ecsOrderManagerInstanceType", om.valueToTree(this.getEcsOrderManagerInstanceType()));
            data.set("name", om.valueToTree(this.getName()));
            data.set("osTag", om.valueToTree(this.getOsTag()));
            data.set("vSwitchId", om.valueToTree(this.getVSwitchId()));
            if (this.getAccountType() != null) {
                data.set("accountType", om.valueToTree(this.getAccountType()));
            }
            if (this.getAdditionalVolumes() != null) {
                data.set("additionalVolumes", om.valueToTree(this.getAdditionalVolumes()));
            }
            if (this.getApplication() != null) {
                data.set("application", om.valueToTree(this.getApplication()));
            }
            if (this.getAutoRenew() != null) {
                data.set("autoRenew", om.valueToTree(this.getAutoRenew()));
            }
            if (this.getAutoRenewPeriod() != null) {
                data.set("autoRenewPeriod", om.valueToTree(this.getAutoRenewPeriod()));
            }
            if (this.getClientVersion() != null) {
                data.set("clientVersion", om.valueToTree(this.getClientVersion()));
            }
            if (this.getComputeEnableHt() != null) {
                data.set("computeEnableHt", om.valueToTree(this.getComputeEnableHt()));
            }
            if (this.getComputeSpotPriceLimit() != null) {
                data.set("computeSpotPriceLimit", om.valueToTree(this.getComputeSpotPriceLimit()));
            }
            if (this.getComputeSpotStrategy() != null) {
                data.set("computeSpotStrategy", om.valueToTree(this.getComputeSpotStrategy()));
            }
            if (this.getDeployMode() != null) {
                data.set("deployMode", om.valueToTree(this.getDeployMode()));
            }
            if (this.getDescription() != null) {
                data.set("description", om.valueToTree(this.getDescription()));
            }
            if (this.getEcsChargeType() != null) {
                data.set("ecsChargeType", om.valueToTree(this.getEcsChargeType()));
            }
            if (this.getEcsOrderManagerCount() != null) {
                data.set("ecsOrderManagerCount", om.valueToTree(this.getEcsOrderManagerCount()));
            }
            if (this.getEhpcVersion() != null) {
                data.set("ehpcVersion", om.valueToTree(this.getEhpcVersion()));
            }
            if (this.getHaEnable() != null) {
                data.set("haEnable", om.valueToTree(this.getHaEnable()));
            }
            if (this.getImageId() != null) {
                data.set("imageId", om.valueToTree(this.getImageId()));
            }
            if (this.getImageOwnerAlias() != null) {
                data.set("imageOwnerAlias", om.valueToTree(this.getImageOwnerAlias()));
            }
            if (this.getInputFileUrl() != null) {
                data.set("inputFileUrl", om.valueToTree(this.getInputFileUrl()));
            }
            if (this.getIsComputeEss() != null) {
                data.set("isComputeEss", om.valueToTree(this.getIsComputeEss()));
            }
            if (this.getJobQueue() != null) {
                data.set("jobQueue", om.valueToTree(this.getJobQueue()));
            }
            if (this.getKeyPairName() != null) {
                data.set("keyPairName", om.valueToTree(this.getKeyPairName()));
            }
            if (this.getPassword() != null) {
                data.set("password", om.valueToTree(this.getPassword()));
            }
            if (this.getPeriod() != null) {
                data.set("period", om.valueToTree(this.getPeriod()));
            }
            if (this.getPeriodUnit() != null) {
                data.set("periodUnit", om.valueToTree(this.getPeriodUnit()));
            }
            if (this.getPostInstallScript() != null) {
                data.set("postInstallScript", om.valueToTree(this.getPostInstallScript()));
            }
            if (this.getRamNodeTypes() != null) {
                data.set("ramNodeTypes", om.valueToTree(this.getRamNodeTypes()));
            }
            if (this.getRamRoleName() != null) {
                data.set("ramRoleName", om.valueToTree(this.getRamRoleName()));
            }
            if (this.getRemoteDirectory() != null) {
                data.set("remoteDirectory", om.valueToTree(this.getRemoteDirectory()));
            }
            if (this.getRemoteVisEnable() != null) {
                data.set("remoteVisEnable", om.valueToTree(this.getRemoteVisEnable()));
            }
            if (this.getResourceGroupId() != null) {
                data.set("resourceGroupId", om.valueToTree(this.getResourceGroupId()));
            }
            if (this.getSccClusterId() != null) {
                data.set("sccClusterId", om.valueToTree(this.getSccClusterId()));
            }
            if (this.getSchedulerType() != null) {
                data.set("schedulerType", om.valueToTree(this.getSchedulerType()));
            }
            if (this.getSecurityGroupId() != null) {
                data.set("securityGroupId", om.valueToTree(this.getSecurityGroupId()));
            }
            if (this.getSecurityGroupName() != null) {
                data.set("securityGroupName", om.valueToTree(this.getSecurityGroupName()));
            }
            if (this.getSystemDiskLevel() != null) {
                data.set("systemDiskLevel", om.valueToTree(this.getSystemDiskLevel()));
            }
            if (this.getSystemDiskSize() != null) {
                data.set("systemDiskSize", om.valueToTree(this.getSystemDiskSize()));
            }
            if (this.getSystemDiskType() != null) {
                data.set("systemDiskType", om.valueToTree(this.getSystemDiskType()));
            }
            if (this.getVolumeId() != null) {
                data.set("volumeId", om.valueToTree(this.getVolumeId()));
            }
            if (this.getVolumeMountpoint() != null) {
                data.set("volumeMountpoint", om.valueToTree(this.getVolumeMountpoint()));
            }
            if (this.getVolumeProtocol() != null) {
                data.set("volumeProtocol", om.valueToTree(this.getVolumeProtocol()));
            }
            if (this.getVolumeType() != null) {
                data.set("volumeType", om.valueToTree(this.getVolumeType()));
            }
            if (this.getVpcId() != null) {
                data.set("vpcId", om.valueToTree(this.getVpcId()));
            }
            if (this.getWithoutElasticIp() != null) {
                data.set("withoutElasticIp", om.valueToTree(this.getWithoutElasticIp()));
            }
            if (this.getZoneId() != null) {
                data.set("zoneId", om.valueToTree(this.getZoneId()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ehpc.RosClusterProps"));
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

            if (!ecsOrderComputeCount.equals(that.ecsOrderComputeCount)) return false;
            if (!ecsOrderComputeInstanceType.equals(that.ecsOrderComputeInstanceType)) return false;
            if (!ecsOrderLoginCount.equals(that.ecsOrderLoginCount)) return false;
            if (!ecsOrderLoginInstanceType.equals(that.ecsOrderLoginInstanceType)) return false;
            if (!ecsOrderManagerInstanceType.equals(that.ecsOrderManagerInstanceType)) return false;
            if (!name.equals(that.name)) return false;
            if (!osTag.equals(that.osTag)) return false;
            if (!vSwitchId.equals(that.vSwitchId)) return false;
            if (this.accountType != null ? !this.accountType.equals(that.accountType) : that.accountType != null) return false;
            if (this.additionalVolumes != null ? !this.additionalVolumes.equals(that.additionalVolumes) : that.additionalVolumes != null) return false;
            if (this.application != null ? !this.application.equals(that.application) : that.application != null) return false;
            if (this.autoRenew != null ? !this.autoRenew.equals(that.autoRenew) : that.autoRenew != null) return false;
            if (this.autoRenewPeriod != null ? !this.autoRenewPeriod.equals(that.autoRenewPeriod) : that.autoRenewPeriod != null) return false;
            if (this.clientVersion != null ? !this.clientVersion.equals(that.clientVersion) : that.clientVersion != null) return false;
            if (this.computeEnableHt != null ? !this.computeEnableHt.equals(that.computeEnableHt) : that.computeEnableHt != null) return false;
            if (this.computeSpotPriceLimit != null ? !this.computeSpotPriceLimit.equals(that.computeSpotPriceLimit) : that.computeSpotPriceLimit != null) return false;
            if (this.computeSpotStrategy != null ? !this.computeSpotStrategy.equals(that.computeSpotStrategy) : that.computeSpotStrategy != null) return false;
            if (this.deployMode != null ? !this.deployMode.equals(that.deployMode) : that.deployMode != null) return false;
            if (this.description != null ? !this.description.equals(that.description) : that.description != null) return false;
            if (this.ecsChargeType != null ? !this.ecsChargeType.equals(that.ecsChargeType) : that.ecsChargeType != null) return false;
            if (this.ecsOrderManagerCount != null ? !this.ecsOrderManagerCount.equals(that.ecsOrderManagerCount) : that.ecsOrderManagerCount != null) return false;
            if (this.ehpcVersion != null ? !this.ehpcVersion.equals(that.ehpcVersion) : that.ehpcVersion != null) return false;
            if (this.haEnable != null ? !this.haEnable.equals(that.haEnable) : that.haEnable != null) return false;
            if (this.imageId != null ? !this.imageId.equals(that.imageId) : that.imageId != null) return false;
            if (this.imageOwnerAlias != null ? !this.imageOwnerAlias.equals(that.imageOwnerAlias) : that.imageOwnerAlias != null) return false;
            if (this.inputFileUrl != null ? !this.inputFileUrl.equals(that.inputFileUrl) : that.inputFileUrl != null) return false;
            if (this.isComputeEss != null ? !this.isComputeEss.equals(that.isComputeEss) : that.isComputeEss != null) return false;
            if (this.jobQueue != null ? !this.jobQueue.equals(that.jobQueue) : that.jobQueue != null) return false;
            if (this.keyPairName != null ? !this.keyPairName.equals(that.keyPairName) : that.keyPairName != null) return false;
            if (this.password != null ? !this.password.equals(that.password) : that.password != null) return false;
            if (this.period != null ? !this.period.equals(that.period) : that.period != null) return false;
            if (this.periodUnit != null ? !this.periodUnit.equals(that.periodUnit) : that.periodUnit != null) return false;
            if (this.postInstallScript != null ? !this.postInstallScript.equals(that.postInstallScript) : that.postInstallScript != null) return false;
            if (this.ramNodeTypes != null ? !this.ramNodeTypes.equals(that.ramNodeTypes) : that.ramNodeTypes != null) return false;
            if (this.ramRoleName != null ? !this.ramRoleName.equals(that.ramRoleName) : that.ramRoleName != null) return false;
            if (this.remoteDirectory != null ? !this.remoteDirectory.equals(that.remoteDirectory) : that.remoteDirectory != null) return false;
            if (this.remoteVisEnable != null ? !this.remoteVisEnable.equals(that.remoteVisEnable) : that.remoteVisEnable != null) return false;
            if (this.resourceGroupId != null ? !this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId != null) return false;
            if (this.sccClusterId != null ? !this.sccClusterId.equals(that.sccClusterId) : that.sccClusterId != null) return false;
            if (this.schedulerType != null ? !this.schedulerType.equals(that.schedulerType) : that.schedulerType != null) return false;
            if (this.securityGroupId != null ? !this.securityGroupId.equals(that.securityGroupId) : that.securityGroupId != null) return false;
            if (this.securityGroupName != null ? !this.securityGroupName.equals(that.securityGroupName) : that.securityGroupName != null) return false;
            if (this.systemDiskLevel != null ? !this.systemDiskLevel.equals(that.systemDiskLevel) : that.systemDiskLevel != null) return false;
            if (this.systemDiskSize != null ? !this.systemDiskSize.equals(that.systemDiskSize) : that.systemDiskSize != null) return false;
            if (this.systemDiskType != null ? !this.systemDiskType.equals(that.systemDiskType) : that.systemDiskType != null) return false;
            if (this.volumeId != null ? !this.volumeId.equals(that.volumeId) : that.volumeId != null) return false;
            if (this.volumeMountpoint != null ? !this.volumeMountpoint.equals(that.volumeMountpoint) : that.volumeMountpoint != null) return false;
            if (this.volumeProtocol != null ? !this.volumeProtocol.equals(that.volumeProtocol) : that.volumeProtocol != null) return false;
            if (this.volumeType != null ? !this.volumeType.equals(that.volumeType) : that.volumeType != null) return false;
            if (this.vpcId != null ? !this.vpcId.equals(that.vpcId) : that.vpcId != null) return false;
            if (this.withoutElasticIp != null ? !this.withoutElasticIp.equals(that.withoutElasticIp) : that.withoutElasticIp != null) return false;
            return this.zoneId != null ? this.zoneId.equals(that.zoneId) : that.zoneId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.ecsOrderComputeCount.hashCode();
            result = 31 * result + (this.ecsOrderComputeInstanceType.hashCode());
            result = 31 * result + (this.ecsOrderLoginCount.hashCode());
            result = 31 * result + (this.ecsOrderLoginInstanceType.hashCode());
            result = 31 * result + (this.ecsOrderManagerInstanceType.hashCode());
            result = 31 * result + (this.name.hashCode());
            result = 31 * result + (this.osTag.hashCode());
            result = 31 * result + (this.vSwitchId.hashCode());
            result = 31 * result + (this.accountType != null ? this.accountType.hashCode() : 0);
            result = 31 * result + (this.additionalVolumes != null ? this.additionalVolumes.hashCode() : 0);
            result = 31 * result + (this.application != null ? this.application.hashCode() : 0);
            result = 31 * result + (this.autoRenew != null ? this.autoRenew.hashCode() : 0);
            result = 31 * result + (this.autoRenewPeriod != null ? this.autoRenewPeriod.hashCode() : 0);
            result = 31 * result + (this.clientVersion != null ? this.clientVersion.hashCode() : 0);
            result = 31 * result + (this.computeEnableHt != null ? this.computeEnableHt.hashCode() : 0);
            result = 31 * result + (this.computeSpotPriceLimit != null ? this.computeSpotPriceLimit.hashCode() : 0);
            result = 31 * result + (this.computeSpotStrategy != null ? this.computeSpotStrategy.hashCode() : 0);
            result = 31 * result + (this.deployMode != null ? this.deployMode.hashCode() : 0);
            result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
            result = 31 * result + (this.ecsChargeType != null ? this.ecsChargeType.hashCode() : 0);
            result = 31 * result + (this.ecsOrderManagerCount != null ? this.ecsOrderManagerCount.hashCode() : 0);
            result = 31 * result + (this.ehpcVersion != null ? this.ehpcVersion.hashCode() : 0);
            result = 31 * result + (this.haEnable != null ? this.haEnable.hashCode() : 0);
            result = 31 * result + (this.imageId != null ? this.imageId.hashCode() : 0);
            result = 31 * result + (this.imageOwnerAlias != null ? this.imageOwnerAlias.hashCode() : 0);
            result = 31 * result + (this.inputFileUrl != null ? this.inputFileUrl.hashCode() : 0);
            result = 31 * result + (this.isComputeEss != null ? this.isComputeEss.hashCode() : 0);
            result = 31 * result + (this.jobQueue != null ? this.jobQueue.hashCode() : 0);
            result = 31 * result + (this.keyPairName != null ? this.keyPairName.hashCode() : 0);
            result = 31 * result + (this.password != null ? this.password.hashCode() : 0);
            result = 31 * result + (this.period != null ? this.period.hashCode() : 0);
            result = 31 * result + (this.periodUnit != null ? this.periodUnit.hashCode() : 0);
            result = 31 * result + (this.postInstallScript != null ? this.postInstallScript.hashCode() : 0);
            result = 31 * result + (this.ramNodeTypes != null ? this.ramNodeTypes.hashCode() : 0);
            result = 31 * result + (this.ramRoleName != null ? this.ramRoleName.hashCode() : 0);
            result = 31 * result + (this.remoteDirectory != null ? this.remoteDirectory.hashCode() : 0);
            result = 31 * result + (this.remoteVisEnable != null ? this.remoteVisEnable.hashCode() : 0);
            result = 31 * result + (this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0);
            result = 31 * result + (this.sccClusterId != null ? this.sccClusterId.hashCode() : 0);
            result = 31 * result + (this.schedulerType != null ? this.schedulerType.hashCode() : 0);
            result = 31 * result + (this.securityGroupId != null ? this.securityGroupId.hashCode() : 0);
            result = 31 * result + (this.securityGroupName != null ? this.securityGroupName.hashCode() : 0);
            result = 31 * result + (this.systemDiskLevel != null ? this.systemDiskLevel.hashCode() : 0);
            result = 31 * result + (this.systemDiskSize != null ? this.systemDiskSize.hashCode() : 0);
            result = 31 * result + (this.systemDiskType != null ? this.systemDiskType.hashCode() : 0);
            result = 31 * result + (this.volumeId != null ? this.volumeId.hashCode() : 0);
            result = 31 * result + (this.volumeMountpoint != null ? this.volumeMountpoint.hashCode() : 0);
            result = 31 * result + (this.volumeProtocol != null ? this.volumeProtocol.hashCode() : 0);
            result = 31 * result + (this.volumeType != null ? this.volumeType.hashCode() : 0);
            result = 31 * result + (this.vpcId != null ? this.vpcId.hashCode() : 0);
            result = 31 * result + (this.withoutElasticIp != null ? this.withoutElasticIp.hashCode() : 0);
            result = 31 * result + (this.zoneId != null ? this.zoneId.hashCode() : 0);
            return result;
        }
    }
}
