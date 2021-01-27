package com.aliyun.ros.cdk.ehpc;

/**
 * Properties for defining a `ALIYUN::EHPC::Cluster`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.17.1 (build 2bac5fd)", date = "2021-01-26T09:47:33.860Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ehpc.$Module.class, fqn = "@alicloud/ros-cdk-ehpc.RosClusterProps")
@software.amazon.jsii.Jsii.Proxy(RosClusterProps.Jsii$Proxy.class)
public interface RosClusterProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Number getEcsOrderComputeCount();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getEcsOrderComputeInstanceType();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Number getEcsOrderLoginCount();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getEcsOrderLoginInstanceType();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getEcsOrderManagerInstanceType();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getEhpcVersion();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getName();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getOsTag();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getVolumeId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getVolumeMountpoint();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getVSwitchId();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getAccountType() {
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
    default @org.jetbrains.annotations.Nullable java.lang.Number getAutoRenewPeriod() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getComputeSpotPriceLimit() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getComputeSpotStrategy() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getDeployMode() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getDescription() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getEcsChargeType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Number getEcsOrderManagerCount() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getHaEnable() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getImageId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getImageOwnerAlias() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getJobQueue() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getKeyPairName() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getPassword() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Number getPeriod() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getPeriodUnit() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPostInstallScript() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getRemoteDirectory() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getSccClusterId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getSchedulerType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getSecurityGroupId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getSecurityGroupName() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getVolumeProtocol() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getVolumeType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getZoneId() {
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
        private java.lang.Number ecsOrderComputeCount;
        private java.lang.String ecsOrderComputeInstanceType;
        private java.lang.Number ecsOrderLoginCount;
        private java.lang.String ecsOrderLoginInstanceType;
        private java.lang.String ecsOrderManagerInstanceType;
        private java.lang.String ehpcVersion;
        private java.lang.String name;
        private java.lang.String osTag;
        private java.lang.String volumeId;
        private java.lang.String volumeMountpoint;
        private java.lang.String vSwitchId;
        private java.lang.String accountType;
        private java.lang.Object application;
        private java.lang.Object autoRenew;
        private java.lang.Number autoRenewPeriod;
        private java.lang.String computeSpotPriceLimit;
        private java.lang.String computeSpotStrategy;
        private java.lang.String deployMode;
        private java.lang.String description;
        private java.lang.String ecsChargeType;
        private java.lang.Number ecsOrderManagerCount;
        private java.lang.Object haEnable;
        private java.lang.String imageId;
        private java.lang.String imageOwnerAlias;
        private java.lang.String jobQueue;
        private java.lang.String keyPairName;
        private java.lang.String password;
        private java.lang.Number period;
        private java.lang.String periodUnit;
        private java.lang.Object postInstallScript;
        private java.lang.String remoteDirectory;
        private java.lang.String sccClusterId;
        private java.lang.String schedulerType;
        private java.lang.String securityGroupId;
        private java.lang.String securityGroupName;
        private java.lang.String volumeProtocol;
        private java.lang.String volumeType;
        private java.lang.String zoneId;

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
         * Sets the value of {@link RosClusterProps#getEcsOrderComputeInstanceType}
         * @param ecsOrderComputeInstanceType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder ecsOrderComputeInstanceType(java.lang.String ecsOrderComputeInstanceType) {
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
         * Sets the value of {@link RosClusterProps#getEcsOrderLoginInstanceType}
         * @param ecsOrderLoginInstanceType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder ecsOrderLoginInstanceType(java.lang.String ecsOrderLoginInstanceType) {
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
         * Sets the value of {@link RosClusterProps#getEhpcVersion}
         * @param ehpcVersion the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder ehpcVersion(java.lang.String ehpcVersion) {
            this.ehpcVersion = ehpcVersion;
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
         * Sets the value of {@link RosClusterProps#getOsTag}
         * @param osTag the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder osTag(java.lang.String osTag) {
            this.osTag = osTag;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterProps#getVolumeId}
         * @param volumeId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder volumeId(java.lang.String volumeId) {
            this.volumeId = volumeId;
            return this;
        }

        /**
         * Sets the value of {@link RosClusterProps#getVolumeMountpoint}
         * @param volumeMountpoint the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder volumeMountpoint(java.lang.String volumeMountpoint) {
            this.volumeMountpoint = volumeMountpoint;
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
         * Sets the value of {@link RosClusterProps#getAccountType}
         * @param accountType the value to be set.
         * @return {@code this}
         */
        public Builder accountType(java.lang.String accountType) {
            this.accountType = accountType;
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
         * Sets the value of {@link RosClusterProps#getComputeSpotPriceLimit}
         * @param computeSpotPriceLimit the value to be set.
         * @return {@code this}
         */
        public Builder computeSpotPriceLimit(java.lang.String computeSpotPriceLimit) {
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
         * Sets the value of {@link RosClusterProps#getDeployMode}
         * @param deployMode the value to be set.
         * @return {@code this}
         */
        public Builder deployMode(java.lang.String deployMode) {
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
         * Sets the value of {@link RosClusterProps#getEcsChargeType}
         * @param ecsChargeType the value to be set.
         * @return {@code this}
         */
        public Builder ecsChargeType(java.lang.String ecsChargeType) {
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
         * Sets the value of {@link RosClusterProps#getImageOwnerAlias}
         * @param imageOwnerAlias the value to be set.
         * @return {@code this}
         */
        public Builder imageOwnerAlias(java.lang.String imageOwnerAlias) {
            this.imageOwnerAlias = imageOwnerAlias;
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
         * Sets the value of {@link RosClusterProps#getKeyPairName}
         * @param keyPairName the value to be set.
         * @return {@code this}
         */
        public Builder keyPairName(java.lang.String keyPairName) {
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
         * Sets the value of {@link RosClusterProps#getPeriod}
         * @param period the value to be set.
         * @return {@code this}
         */
        public Builder period(java.lang.Number period) {
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
         * Sets the value of {@link RosClusterProps#getRemoteDirectory}
         * @param remoteDirectory the value to be set.
         * @return {@code this}
         */
        public Builder remoteDirectory(java.lang.String remoteDirectory) {
            this.remoteDirectory = remoteDirectory;
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
         * Sets the value of {@link RosClusterProps#getSchedulerType}
         * @param schedulerType the value to be set.
         * @return {@code this}
         */
        public Builder schedulerType(java.lang.String schedulerType) {
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
         * Sets the value of {@link RosClusterProps#getSecurityGroupName}
         * @param securityGroupName the value to be set.
         * @return {@code this}
         */
        public Builder securityGroupName(java.lang.String securityGroupName) {
            this.securityGroupName = securityGroupName;
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
         * Sets the value of {@link RosClusterProps#getVolumeType}
         * @param volumeType the value to be set.
         * @return {@code this}
         */
        public Builder volumeType(java.lang.String volumeType) {
            this.volumeType = volumeType;
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
         * Builds the configured instance.
         * @return a new instance of {@link RosClusterProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosClusterProps build() {
            return new Jsii$Proxy(ecsOrderComputeCount, ecsOrderComputeInstanceType, ecsOrderLoginCount, ecsOrderLoginInstanceType, ecsOrderManagerInstanceType, ehpcVersion, name, osTag, volumeId, volumeMountpoint, vSwitchId, accountType, application, autoRenew, autoRenewPeriod, computeSpotPriceLimit, computeSpotStrategy, deployMode, description, ecsChargeType, ecsOrderManagerCount, haEnable, imageId, imageOwnerAlias, jobQueue, keyPairName, password, period, periodUnit, postInstallScript, remoteDirectory, sccClusterId, schedulerType, securityGroupId, securityGroupName, volumeProtocol, volumeType, zoneId);
        }
    }

    /**
     * An implementation for {@link RosClusterProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosClusterProps {
        private final java.lang.Number ecsOrderComputeCount;
        private final java.lang.String ecsOrderComputeInstanceType;
        private final java.lang.Number ecsOrderLoginCount;
        private final java.lang.String ecsOrderLoginInstanceType;
        private final java.lang.String ecsOrderManagerInstanceType;
        private final java.lang.String ehpcVersion;
        private final java.lang.String name;
        private final java.lang.String osTag;
        private final java.lang.String volumeId;
        private final java.lang.String volumeMountpoint;
        private final java.lang.String vSwitchId;
        private final java.lang.String accountType;
        private final java.lang.Object application;
        private final java.lang.Object autoRenew;
        private final java.lang.Number autoRenewPeriod;
        private final java.lang.String computeSpotPriceLimit;
        private final java.lang.String computeSpotStrategy;
        private final java.lang.String deployMode;
        private final java.lang.String description;
        private final java.lang.String ecsChargeType;
        private final java.lang.Number ecsOrderManagerCount;
        private final java.lang.Object haEnable;
        private final java.lang.String imageId;
        private final java.lang.String imageOwnerAlias;
        private final java.lang.String jobQueue;
        private final java.lang.String keyPairName;
        private final java.lang.String password;
        private final java.lang.Number period;
        private final java.lang.String periodUnit;
        private final java.lang.Object postInstallScript;
        private final java.lang.String remoteDirectory;
        private final java.lang.String sccClusterId;
        private final java.lang.String schedulerType;
        private final java.lang.String securityGroupId;
        private final java.lang.String securityGroupName;
        private final java.lang.String volumeProtocol;
        private final java.lang.String volumeType;
        private final java.lang.String zoneId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.ecsOrderComputeCount = software.amazon.jsii.Kernel.get(this, "ecsOrderComputeCount", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
            this.ecsOrderComputeInstanceType = software.amazon.jsii.Kernel.get(this, "ecsOrderComputeInstanceType", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.ecsOrderLoginCount = software.amazon.jsii.Kernel.get(this, "ecsOrderLoginCount", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
            this.ecsOrderLoginInstanceType = software.amazon.jsii.Kernel.get(this, "ecsOrderLoginInstanceType", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.ecsOrderManagerInstanceType = software.amazon.jsii.Kernel.get(this, "ecsOrderManagerInstanceType", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.ehpcVersion = software.amazon.jsii.Kernel.get(this, "ehpcVersion", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.name = software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.osTag = software.amazon.jsii.Kernel.get(this, "osTag", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.volumeId = software.amazon.jsii.Kernel.get(this, "volumeId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.volumeMountpoint = software.amazon.jsii.Kernel.get(this, "volumeMountpoint", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.vSwitchId = software.amazon.jsii.Kernel.get(this, "vSwitchId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.accountType = software.amazon.jsii.Kernel.get(this, "accountType", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.application = software.amazon.jsii.Kernel.get(this, "application", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.autoRenew = software.amazon.jsii.Kernel.get(this, "autoRenew", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.autoRenewPeriod = software.amazon.jsii.Kernel.get(this, "autoRenewPeriod", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
            this.computeSpotPriceLimit = software.amazon.jsii.Kernel.get(this, "computeSpotPriceLimit", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.computeSpotStrategy = software.amazon.jsii.Kernel.get(this, "computeSpotStrategy", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.deployMode = software.amazon.jsii.Kernel.get(this, "deployMode", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.ecsChargeType = software.amazon.jsii.Kernel.get(this, "ecsChargeType", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.ecsOrderManagerCount = software.amazon.jsii.Kernel.get(this, "ecsOrderManagerCount", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
            this.haEnable = software.amazon.jsii.Kernel.get(this, "haEnable", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.imageId = software.amazon.jsii.Kernel.get(this, "imageId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.imageOwnerAlias = software.amazon.jsii.Kernel.get(this, "imageOwnerAlias", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.jobQueue = software.amazon.jsii.Kernel.get(this, "jobQueue", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.keyPairName = software.amazon.jsii.Kernel.get(this, "keyPairName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.password = software.amazon.jsii.Kernel.get(this, "password", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.period = software.amazon.jsii.Kernel.get(this, "period", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
            this.periodUnit = software.amazon.jsii.Kernel.get(this, "periodUnit", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.postInstallScript = software.amazon.jsii.Kernel.get(this, "postInstallScript", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.remoteDirectory = software.amazon.jsii.Kernel.get(this, "remoteDirectory", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.sccClusterId = software.amazon.jsii.Kernel.get(this, "sccClusterId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.schedulerType = software.amazon.jsii.Kernel.get(this, "schedulerType", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.securityGroupId = software.amazon.jsii.Kernel.get(this, "securityGroupId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.securityGroupName = software.amazon.jsii.Kernel.get(this, "securityGroupName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.volumeProtocol = software.amazon.jsii.Kernel.get(this, "volumeProtocol", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.volumeType = software.amazon.jsii.Kernel.get(this, "volumeType", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.zoneId = software.amazon.jsii.Kernel.get(this, "zoneId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final java.lang.Number ecsOrderComputeCount, final java.lang.String ecsOrderComputeInstanceType, final java.lang.Number ecsOrderLoginCount, final java.lang.String ecsOrderLoginInstanceType, final java.lang.String ecsOrderManagerInstanceType, final java.lang.String ehpcVersion, final java.lang.String name, final java.lang.String osTag, final java.lang.String volumeId, final java.lang.String volumeMountpoint, final java.lang.String vSwitchId, final java.lang.String accountType, final java.lang.Object application, final java.lang.Object autoRenew, final java.lang.Number autoRenewPeriod, final java.lang.String computeSpotPriceLimit, final java.lang.String computeSpotStrategy, final java.lang.String deployMode, final java.lang.String description, final java.lang.String ecsChargeType, final java.lang.Number ecsOrderManagerCount, final java.lang.Object haEnable, final java.lang.String imageId, final java.lang.String imageOwnerAlias, final java.lang.String jobQueue, final java.lang.String keyPairName, final java.lang.String password, final java.lang.Number period, final java.lang.String periodUnit, final java.lang.Object postInstallScript, final java.lang.String remoteDirectory, final java.lang.String sccClusterId, final java.lang.String schedulerType, final java.lang.String securityGroupId, final java.lang.String securityGroupName, final java.lang.String volumeProtocol, final java.lang.String volumeType, final java.lang.String zoneId) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.ecsOrderComputeCount = java.util.Objects.requireNonNull(ecsOrderComputeCount, "ecsOrderComputeCount is required");
            this.ecsOrderComputeInstanceType = java.util.Objects.requireNonNull(ecsOrderComputeInstanceType, "ecsOrderComputeInstanceType is required");
            this.ecsOrderLoginCount = java.util.Objects.requireNonNull(ecsOrderLoginCount, "ecsOrderLoginCount is required");
            this.ecsOrderLoginInstanceType = java.util.Objects.requireNonNull(ecsOrderLoginInstanceType, "ecsOrderLoginInstanceType is required");
            this.ecsOrderManagerInstanceType = java.util.Objects.requireNonNull(ecsOrderManagerInstanceType, "ecsOrderManagerInstanceType is required");
            this.ehpcVersion = java.util.Objects.requireNonNull(ehpcVersion, "ehpcVersion is required");
            this.name = java.util.Objects.requireNonNull(name, "name is required");
            this.osTag = java.util.Objects.requireNonNull(osTag, "osTag is required");
            this.volumeId = java.util.Objects.requireNonNull(volumeId, "volumeId is required");
            this.volumeMountpoint = java.util.Objects.requireNonNull(volumeMountpoint, "volumeMountpoint is required");
            this.vSwitchId = java.util.Objects.requireNonNull(vSwitchId, "vSwitchId is required");
            this.accountType = accountType;
            this.application = application;
            this.autoRenew = autoRenew;
            this.autoRenewPeriod = autoRenewPeriod;
            this.computeSpotPriceLimit = computeSpotPriceLimit;
            this.computeSpotStrategy = computeSpotStrategy;
            this.deployMode = deployMode;
            this.description = description;
            this.ecsChargeType = ecsChargeType;
            this.ecsOrderManagerCount = ecsOrderManagerCount;
            this.haEnable = haEnable;
            this.imageId = imageId;
            this.imageOwnerAlias = imageOwnerAlias;
            this.jobQueue = jobQueue;
            this.keyPairName = keyPairName;
            this.password = password;
            this.period = period;
            this.periodUnit = periodUnit;
            this.postInstallScript = postInstallScript;
            this.remoteDirectory = remoteDirectory;
            this.sccClusterId = sccClusterId;
            this.schedulerType = schedulerType;
            this.securityGroupId = securityGroupId;
            this.securityGroupName = securityGroupName;
            this.volumeProtocol = volumeProtocol;
            this.volumeType = volumeType;
            this.zoneId = zoneId;
        }

        @Override
        public final java.lang.Number getEcsOrderComputeCount() {
            return this.ecsOrderComputeCount;
        }

        @Override
        public final java.lang.String getEcsOrderComputeInstanceType() {
            return this.ecsOrderComputeInstanceType;
        }

        @Override
        public final java.lang.Number getEcsOrderLoginCount() {
            return this.ecsOrderLoginCount;
        }

        @Override
        public final java.lang.String getEcsOrderLoginInstanceType() {
            return this.ecsOrderLoginInstanceType;
        }

        @Override
        public final java.lang.String getEcsOrderManagerInstanceType() {
            return this.ecsOrderManagerInstanceType;
        }

        @Override
        public final java.lang.String getEhpcVersion() {
            return this.ehpcVersion;
        }

        @Override
        public final java.lang.String getName() {
            return this.name;
        }

        @Override
        public final java.lang.String getOsTag() {
            return this.osTag;
        }

        @Override
        public final java.lang.String getVolumeId() {
            return this.volumeId;
        }

        @Override
        public final java.lang.String getVolumeMountpoint() {
            return this.volumeMountpoint;
        }

        @Override
        public final java.lang.String getVSwitchId() {
            return this.vSwitchId;
        }

        @Override
        public final java.lang.String getAccountType() {
            return this.accountType;
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
        public final java.lang.Number getAutoRenewPeriod() {
            return this.autoRenewPeriod;
        }

        @Override
        public final java.lang.String getComputeSpotPriceLimit() {
            return this.computeSpotPriceLimit;
        }

        @Override
        public final java.lang.String getComputeSpotStrategy() {
            return this.computeSpotStrategy;
        }

        @Override
        public final java.lang.String getDeployMode() {
            return this.deployMode;
        }

        @Override
        public final java.lang.String getDescription() {
            return this.description;
        }

        @Override
        public final java.lang.String getEcsChargeType() {
            return this.ecsChargeType;
        }

        @Override
        public final java.lang.Number getEcsOrderManagerCount() {
            return this.ecsOrderManagerCount;
        }

        @Override
        public final java.lang.Object getHaEnable() {
            return this.haEnable;
        }

        @Override
        public final java.lang.String getImageId() {
            return this.imageId;
        }

        @Override
        public final java.lang.String getImageOwnerAlias() {
            return this.imageOwnerAlias;
        }

        @Override
        public final java.lang.String getJobQueue() {
            return this.jobQueue;
        }

        @Override
        public final java.lang.String getKeyPairName() {
            return this.keyPairName;
        }

        @Override
        public final java.lang.String getPassword() {
            return this.password;
        }

        @Override
        public final java.lang.Number getPeriod() {
            return this.period;
        }

        @Override
        public final java.lang.String getPeriodUnit() {
            return this.periodUnit;
        }

        @Override
        public final java.lang.Object getPostInstallScript() {
            return this.postInstallScript;
        }

        @Override
        public final java.lang.String getRemoteDirectory() {
            return this.remoteDirectory;
        }

        @Override
        public final java.lang.String getSccClusterId() {
            return this.sccClusterId;
        }

        @Override
        public final java.lang.String getSchedulerType() {
            return this.schedulerType;
        }

        @Override
        public final java.lang.String getSecurityGroupId() {
            return this.securityGroupId;
        }

        @Override
        public final java.lang.String getSecurityGroupName() {
            return this.securityGroupName;
        }

        @Override
        public final java.lang.String getVolumeProtocol() {
            return this.volumeProtocol;
        }

        @Override
        public final java.lang.String getVolumeType() {
            return this.volumeType;
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

            data.set("ecsOrderComputeCount", om.valueToTree(this.getEcsOrderComputeCount()));
            data.set("ecsOrderComputeInstanceType", om.valueToTree(this.getEcsOrderComputeInstanceType()));
            data.set("ecsOrderLoginCount", om.valueToTree(this.getEcsOrderLoginCount()));
            data.set("ecsOrderLoginInstanceType", om.valueToTree(this.getEcsOrderLoginInstanceType()));
            data.set("ecsOrderManagerInstanceType", om.valueToTree(this.getEcsOrderManagerInstanceType()));
            data.set("ehpcVersion", om.valueToTree(this.getEhpcVersion()));
            data.set("name", om.valueToTree(this.getName()));
            data.set("osTag", om.valueToTree(this.getOsTag()));
            data.set("volumeId", om.valueToTree(this.getVolumeId()));
            data.set("volumeMountpoint", om.valueToTree(this.getVolumeMountpoint()));
            data.set("vSwitchId", om.valueToTree(this.getVSwitchId()));
            if (this.getAccountType() != null) {
                data.set("accountType", om.valueToTree(this.getAccountType()));
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
            if (this.getHaEnable() != null) {
                data.set("haEnable", om.valueToTree(this.getHaEnable()));
            }
            if (this.getImageId() != null) {
                data.set("imageId", om.valueToTree(this.getImageId()));
            }
            if (this.getImageOwnerAlias() != null) {
                data.set("imageOwnerAlias", om.valueToTree(this.getImageOwnerAlias()));
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
            if (this.getRemoteDirectory() != null) {
                data.set("remoteDirectory", om.valueToTree(this.getRemoteDirectory()));
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
            if (this.getVolumeProtocol() != null) {
                data.set("volumeProtocol", om.valueToTree(this.getVolumeProtocol()));
            }
            if (this.getVolumeType() != null) {
                data.set("volumeType", om.valueToTree(this.getVolumeType()));
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
            if (!ehpcVersion.equals(that.ehpcVersion)) return false;
            if (!name.equals(that.name)) return false;
            if (!osTag.equals(that.osTag)) return false;
            if (!volumeId.equals(that.volumeId)) return false;
            if (!volumeMountpoint.equals(that.volumeMountpoint)) return false;
            if (!vSwitchId.equals(that.vSwitchId)) return false;
            if (this.accountType != null ? !this.accountType.equals(that.accountType) : that.accountType != null) return false;
            if (this.application != null ? !this.application.equals(that.application) : that.application != null) return false;
            if (this.autoRenew != null ? !this.autoRenew.equals(that.autoRenew) : that.autoRenew != null) return false;
            if (this.autoRenewPeriod != null ? !this.autoRenewPeriod.equals(that.autoRenewPeriod) : that.autoRenewPeriod != null) return false;
            if (this.computeSpotPriceLimit != null ? !this.computeSpotPriceLimit.equals(that.computeSpotPriceLimit) : that.computeSpotPriceLimit != null) return false;
            if (this.computeSpotStrategy != null ? !this.computeSpotStrategy.equals(that.computeSpotStrategy) : that.computeSpotStrategy != null) return false;
            if (this.deployMode != null ? !this.deployMode.equals(that.deployMode) : that.deployMode != null) return false;
            if (this.description != null ? !this.description.equals(that.description) : that.description != null) return false;
            if (this.ecsChargeType != null ? !this.ecsChargeType.equals(that.ecsChargeType) : that.ecsChargeType != null) return false;
            if (this.ecsOrderManagerCount != null ? !this.ecsOrderManagerCount.equals(that.ecsOrderManagerCount) : that.ecsOrderManagerCount != null) return false;
            if (this.haEnable != null ? !this.haEnable.equals(that.haEnable) : that.haEnable != null) return false;
            if (this.imageId != null ? !this.imageId.equals(that.imageId) : that.imageId != null) return false;
            if (this.imageOwnerAlias != null ? !this.imageOwnerAlias.equals(that.imageOwnerAlias) : that.imageOwnerAlias != null) return false;
            if (this.jobQueue != null ? !this.jobQueue.equals(that.jobQueue) : that.jobQueue != null) return false;
            if (this.keyPairName != null ? !this.keyPairName.equals(that.keyPairName) : that.keyPairName != null) return false;
            if (this.password != null ? !this.password.equals(that.password) : that.password != null) return false;
            if (this.period != null ? !this.period.equals(that.period) : that.period != null) return false;
            if (this.periodUnit != null ? !this.periodUnit.equals(that.periodUnit) : that.periodUnit != null) return false;
            if (this.postInstallScript != null ? !this.postInstallScript.equals(that.postInstallScript) : that.postInstallScript != null) return false;
            if (this.remoteDirectory != null ? !this.remoteDirectory.equals(that.remoteDirectory) : that.remoteDirectory != null) return false;
            if (this.sccClusterId != null ? !this.sccClusterId.equals(that.sccClusterId) : that.sccClusterId != null) return false;
            if (this.schedulerType != null ? !this.schedulerType.equals(that.schedulerType) : that.schedulerType != null) return false;
            if (this.securityGroupId != null ? !this.securityGroupId.equals(that.securityGroupId) : that.securityGroupId != null) return false;
            if (this.securityGroupName != null ? !this.securityGroupName.equals(that.securityGroupName) : that.securityGroupName != null) return false;
            if (this.volumeProtocol != null ? !this.volumeProtocol.equals(that.volumeProtocol) : that.volumeProtocol != null) return false;
            if (this.volumeType != null ? !this.volumeType.equals(that.volumeType) : that.volumeType != null) return false;
            return this.zoneId != null ? this.zoneId.equals(that.zoneId) : that.zoneId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.ecsOrderComputeCount.hashCode();
            result = 31 * result + (this.ecsOrderComputeInstanceType.hashCode());
            result = 31 * result + (this.ecsOrderLoginCount.hashCode());
            result = 31 * result + (this.ecsOrderLoginInstanceType.hashCode());
            result = 31 * result + (this.ecsOrderManagerInstanceType.hashCode());
            result = 31 * result + (this.ehpcVersion.hashCode());
            result = 31 * result + (this.name.hashCode());
            result = 31 * result + (this.osTag.hashCode());
            result = 31 * result + (this.volumeId.hashCode());
            result = 31 * result + (this.volumeMountpoint.hashCode());
            result = 31 * result + (this.vSwitchId.hashCode());
            result = 31 * result + (this.accountType != null ? this.accountType.hashCode() : 0);
            result = 31 * result + (this.application != null ? this.application.hashCode() : 0);
            result = 31 * result + (this.autoRenew != null ? this.autoRenew.hashCode() : 0);
            result = 31 * result + (this.autoRenewPeriod != null ? this.autoRenewPeriod.hashCode() : 0);
            result = 31 * result + (this.computeSpotPriceLimit != null ? this.computeSpotPriceLimit.hashCode() : 0);
            result = 31 * result + (this.computeSpotStrategy != null ? this.computeSpotStrategy.hashCode() : 0);
            result = 31 * result + (this.deployMode != null ? this.deployMode.hashCode() : 0);
            result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
            result = 31 * result + (this.ecsChargeType != null ? this.ecsChargeType.hashCode() : 0);
            result = 31 * result + (this.ecsOrderManagerCount != null ? this.ecsOrderManagerCount.hashCode() : 0);
            result = 31 * result + (this.haEnable != null ? this.haEnable.hashCode() : 0);
            result = 31 * result + (this.imageId != null ? this.imageId.hashCode() : 0);
            result = 31 * result + (this.imageOwnerAlias != null ? this.imageOwnerAlias.hashCode() : 0);
            result = 31 * result + (this.jobQueue != null ? this.jobQueue.hashCode() : 0);
            result = 31 * result + (this.keyPairName != null ? this.keyPairName.hashCode() : 0);
            result = 31 * result + (this.password != null ? this.password.hashCode() : 0);
            result = 31 * result + (this.period != null ? this.period.hashCode() : 0);
            result = 31 * result + (this.periodUnit != null ? this.periodUnit.hashCode() : 0);
            result = 31 * result + (this.postInstallScript != null ? this.postInstallScript.hashCode() : 0);
            result = 31 * result + (this.remoteDirectory != null ? this.remoteDirectory.hashCode() : 0);
            result = 31 * result + (this.sccClusterId != null ? this.sccClusterId.hashCode() : 0);
            result = 31 * result + (this.schedulerType != null ? this.schedulerType.hashCode() : 0);
            result = 31 * result + (this.securityGroupId != null ? this.securityGroupId.hashCode() : 0);
            result = 31 * result + (this.securityGroupName != null ? this.securityGroupName.hashCode() : 0);
            result = 31 * result + (this.volumeProtocol != null ? this.volumeProtocol.hashCode() : 0);
            result = 31 * result + (this.volumeType != null ? this.volumeType.hashCode() : 0);
            result = 31 * result + (this.zoneId != null ? this.zoneId.hashCode() : 0);
            return result;
        }
    }
}
