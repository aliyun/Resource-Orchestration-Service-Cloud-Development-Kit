package com.aliyun.ros.cdk.eci;

/**
 * Properties for defining a <code>RosContainerGroup</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-eci-containergroup
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-04-09T06:05:31.916Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.eci.$Module.class, fqn = "@alicloud/ros-cdk-eci.RosContainerGroupProps")
@software.amazon.jsii.Jsii.Proxy(RosContainerGroupProps.Jsii$Proxy.class)
public interface RosContainerGroupProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getContainer();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getContainerGroupName();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAcrRegistryInfo() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getActiveDeadlineSeconds() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAutoMatchImageCache() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCpu() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDnsConfig() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEipInstanceId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getHostAliase() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getImageRegistryCredential() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getImageSnapshotId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInitContainer() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInstanceType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getIpv6AddressCount() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getMemory() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRamRoleName() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRestartPolicy() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSecurityContextSysctl() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSecurityGroupId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSlsEnable() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSpotPriceLimit() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSpotStrategy() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTag() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTerminationGracePeriodSeconds() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getVolume() {
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
     * @return a {@link Builder} of {@link RosContainerGroupProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosContainerGroupProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosContainerGroupProps> {
        java.lang.Object container;
        java.lang.Object containerGroupName;
        java.lang.Object acrRegistryInfo;
        java.lang.Object activeDeadlineSeconds;
        java.lang.Object autoMatchImageCache;
        java.lang.Object cpu;
        java.lang.Object dnsConfig;
        java.lang.Object eipInstanceId;
        java.lang.Object hostAliase;
        java.lang.Object imageRegistryCredential;
        java.lang.Object imageSnapshotId;
        java.lang.Object initContainer;
        java.lang.Object instanceType;
        java.lang.Object ipv6AddressCount;
        java.lang.Object memory;
        java.lang.Object ramRoleName;
        java.lang.Object resourceGroupId;
        java.lang.Object restartPolicy;
        java.lang.Object securityContextSysctl;
        java.lang.Object securityGroupId;
        java.lang.Object slsEnable;
        java.lang.Object spotPriceLimit;
        java.lang.Object spotStrategy;
        java.lang.Object tag;
        java.lang.Object terminationGracePeriodSeconds;
        java.lang.Object volume;
        java.lang.Object vSwitchId;
        java.lang.Object zoneId;

        /**
         * Sets the value of {@link RosContainerGroupProps#getContainer}
         * @param container the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder container(com.aliyun.ros.cdk.core.IResolvable container) {
            this.container = container;
            return this;
        }

        /**
         * Sets the value of {@link RosContainerGroupProps#getContainer}
         * @param container the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder container(java.util.List<? extends java.lang.Object> container) {
            this.container = container;
            return this;
        }

        /**
         * Sets the value of {@link RosContainerGroupProps#getContainerGroupName}
         * @param containerGroupName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder containerGroupName(java.lang.String containerGroupName) {
            this.containerGroupName = containerGroupName;
            return this;
        }

        /**
         * Sets the value of {@link RosContainerGroupProps#getContainerGroupName}
         * @param containerGroupName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder containerGroupName(com.aliyun.ros.cdk.core.IResolvable containerGroupName) {
            this.containerGroupName = containerGroupName;
            return this;
        }

        /**
         * Sets the value of {@link RosContainerGroupProps#getAcrRegistryInfo}
         * @param acrRegistryInfo the value to be set.
         * @return {@code this}
         */
        public Builder acrRegistryInfo(com.aliyun.ros.cdk.core.IResolvable acrRegistryInfo) {
            this.acrRegistryInfo = acrRegistryInfo;
            return this;
        }

        /**
         * Sets the value of {@link RosContainerGroupProps#getAcrRegistryInfo}
         * @param acrRegistryInfo the value to be set.
         * @return {@code this}
         */
        public Builder acrRegistryInfo(java.util.List<? extends java.lang.Object> acrRegistryInfo) {
            this.acrRegistryInfo = acrRegistryInfo;
            return this;
        }

        /**
         * Sets the value of {@link RosContainerGroupProps#getActiveDeadlineSeconds}
         * @param activeDeadlineSeconds the value to be set.
         * @return {@code this}
         */
        public Builder activeDeadlineSeconds(java.lang.Number activeDeadlineSeconds) {
            this.activeDeadlineSeconds = activeDeadlineSeconds;
            return this;
        }

        /**
         * Sets the value of {@link RosContainerGroupProps#getActiveDeadlineSeconds}
         * @param activeDeadlineSeconds the value to be set.
         * @return {@code this}
         */
        public Builder activeDeadlineSeconds(com.aliyun.ros.cdk.core.IResolvable activeDeadlineSeconds) {
            this.activeDeadlineSeconds = activeDeadlineSeconds;
            return this;
        }

        /**
         * Sets the value of {@link RosContainerGroupProps#getAutoMatchImageCache}
         * @param autoMatchImageCache the value to be set.
         * @return {@code this}
         */
        public Builder autoMatchImageCache(java.lang.Boolean autoMatchImageCache) {
            this.autoMatchImageCache = autoMatchImageCache;
            return this;
        }

        /**
         * Sets the value of {@link RosContainerGroupProps#getAutoMatchImageCache}
         * @param autoMatchImageCache the value to be set.
         * @return {@code this}
         */
        public Builder autoMatchImageCache(com.aliyun.ros.cdk.core.IResolvable autoMatchImageCache) {
            this.autoMatchImageCache = autoMatchImageCache;
            return this;
        }

        /**
         * Sets the value of {@link RosContainerGroupProps#getCpu}
         * @param cpu the value to be set.
         * @return {@code this}
         */
        public Builder cpu(java.lang.Number cpu) {
            this.cpu = cpu;
            return this;
        }

        /**
         * Sets the value of {@link RosContainerGroupProps#getCpu}
         * @param cpu the value to be set.
         * @return {@code this}
         */
        public Builder cpu(com.aliyun.ros.cdk.core.IResolvable cpu) {
            this.cpu = cpu;
            return this;
        }

        /**
         * Sets the value of {@link RosContainerGroupProps#getDnsConfig}
         * @param dnsConfig the value to be set.
         * @return {@code this}
         */
        public Builder dnsConfig(com.aliyun.ros.cdk.core.IResolvable dnsConfig) {
            this.dnsConfig = dnsConfig;
            return this;
        }

        /**
         * Sets the value of {@link RosContainerGroupProps#getDnsConfig}
         * @param dnsConfig the value to be set.
         * @return {@code this}
         */
        public Builder dnsConfig(com.aliyun.ros.cdk.eci.RosContainerGroup.DnsConfigProperty dnsConfig) {
            this.dnsConfig = dnsConfig;
            return this;
        }

        /**
         * Sets the value of {@link RosContainerGroupProps#getEipInstanceId}
         * @param eipInstanceId the value to be set.
         * @return {@code this}
         */
        public Builder eipInstanceId(java.lang.String eipInstanceId) {
            this.eipInstanceId = eipInstanceId;
            return this;
        }

        /**
         * Sets the value of {@link RosContainerGroupProps#getEipInstanceId}
         * @param eipInstanceId the value to be set.
         * @return {@code this}
         */
        public Builder eipInstanceId(com.aliyun.ros.cdk.core.IResolvable eipInstanceId) {
            this.eipInstanceId = eipInstanceId;
            return this;
        }

        /**
         * Sets the value of {@link RosContainerGroupProps#getHostAliase}
         * @param hostAliase the value to be set.
         * @return {@code this}
         */
        public Builder hostAliase(com.aliyun.ros.cdk.core.IResolvable hostAliase) {
            this.hostAliase = hostAliase;
            return this;
        }

        /**
         * Sets the value of {@link RosContainerGroupProps#getHostAliase}
         * @param hostAliase the value to be set.
         * @return {@code this}
         */
        public Builder hostAliase(java.util.List<? extends java.lang.Object> hostAliase) {
            this.hostAliase = hostAliase;
            return this;
        }

        /**
         * Sets the value of {@link RosContainerGroupProps#getImageRegistryCredential}
         * @param imageRegistryCredential the value to be set.
         * @return {@code this}
         */
        public Builder imageRegistryCredential(com.aliyun.ros.cdk.core.IResolvable imageRegistryCredential) {
            this.imageRegistryCredential = imageRegistryCredential;
            return this;
        }

        /**
         * Sets the value of {@link RosContainerGroupProps#getImageRegistryCredential}
         * @param imageRegistryCredential the value to be set.
         * @return {@code this}
         */
        public Builder imageRegistryCredential(java.util.List<? extends java.lang.Object> imageRegistryCredential) {
            this.imageRegistryCredential = imageRegistryCredential;
            return this;
        }

        /**
         * Sets the value of {@link RosContainerGroupProps#getImageSnapshotId}
         * @param imageSnapshotId the value to be set.
         * @return {@code this}
         */
        public Builder imageSnapshotId(java.lang.String imageSnapshotId) {
            this.imageSnapshotId = imageSnapshotId;
            return this;
        }

        /**
         * Sets the value of {@link RosContainerGroupProps#getImageSnapshotId}
         * @param imageSnapshotId the value to be set.
         * @return {@code this}
         */
        public Builder imageSnapshotId(com.aliyun.ros.cdk.core.IResolvable imageSnapshotId) {
            this.imageSnapshotId = imageSnapshotId;
            return this;
        }

        /**
         * Sets the value of {@link RosContainerGroupProps#getInitContainer}
         * @param initContainer the value to be set.
         * @return {@code this}
         */
        public Builder initContainer(com.aliyun.ros.cdk.core.IResolvable initContainer) {
            this.initContainer = initContainer;
            return this;
        }

        /**
         * Sets the value of {@link RosContainerGroupProps#getInitContainer}
         * @param initContainer the value to be set.
         * @return {@code this}
         */
        public Builder initContainer(java.util.List<? extends java.lang.Object> initContainer) {
            this.initContainer = initContainer;
            return this;
        }

        /**
         * Sets the value of {@link RosContainerGroupProps#getInstanceType}
         * @param instanceType the value to be set.
         * @return {@code this}
         */
        public Builder instanceType(java.lang.String instanceType) {
            this.instanceType = instanceType;
            return this;
        }

        /**
         * Sets the value of {@link RosContainerGroupProps#getInstanceType}
         * @param instanceType the value to be set.
         * @return {@code this}
         */
        public Builder instanceType(com.aliyun.ros.cdk.core.IResolvable instanceType) {
            this.instanceType = instanceType;
            return this;
        }

        /**
         * Sets the value of {@link RosContainerGroupProps#getIpv6AddressCount}
         * @param ipv6AddressCount the value to be set.
         * @return {@code this}
         */
        public Builder ipv6AddressCount(java.lang.Number ipv6AddressCount) {
            this.ipv6AddressCount = ipv6AddressCount;
            return this;
        }

        /**
         * Sets the value of {@link RosContainerGroupProps#getIpv6AddressCount}
         * @param ipv6AddressCount the value to be set.
         * @return {@code this}
         */
        public Builder ipv6AddressCount(com.aliyun.ros.cdk.core.IResolvable ipv6AddressCount) {
            this.ipv6AddressCount = ipv6AddressCount;
            return this;
        }

        /**
         * Sets the value of {@link RosContainerGroupProps#getMemory}
         * @param memory the value to be set.
         * @return {@code this}
         */
        public Builder memory(java.lang.Number memory) {
            this.memory = memory;
            return this;
        }

        /**
         * Sets the value of {@link RosContainerGroupProps#getMemory}
         * @param memory the value to be set.
         * @return {@code this}
         */
        public Builder memory(com.aliyun.ros.cdk.core.IResolvable memory) {
            this.memory = memory;
            return this;
        }

        /**
         * Sets the value of {@link RosContainerGroupProps#getRamRoleName}
         * @param ramRoleName the value to be set.
         * @return {@code this}
         */
        public Builder ramRoleName(java.lang.String ramRoleName) {
            this.ramRoleName = ramRoleName;
            return this;
        }

        /**
         * Sets the value of {@link RosContainerGroupProps#getRamRoleName}
         * @param ramRoleName the value to be set.
         * @return {@code this}
         */
        public Builder ramRoleName(com.aliyun.ros.cdk.core.IResolvable ramRoleName) {
            this.ramRoleName = ramRoleName;
            return this;
        }

        /**
         * Sets the value of {@link RosContainerGroupProps#getResourceGroupId}
         * @param resourceGroupId the value to be set.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosContainerGroupProps#getResourceGroupId}
         * @param resourceGroupId the value to be set.
         * @return {@code this}
         */
        public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosContainerGroupProps#getRestartPolicy}
         * @param restartPolicy the value to be set.
         * @return {@code this}
         */
        public Builder restartPolicy(java.lang.String restartPolicy) {
            this.restartPolicy = restartPolicy;
            return this;
        }

        /**
         * Sets the value of {@link RosContainerGroupProps#getRestartPolicy}
         * @param restartPolicy the value to be set.
         * @return {@code this}
         */
        public Builder restartPolicy(com.aliyun.ros.cdk.core.IResolvable restartPolicy) {
            this.restartPolicy = restartPolicy;
            return this;
        }

        /**
         * Sets the value of {@link RosContainerGroupProps#getSecurityContextSysctl}
         * @param securityContextSysctl the value to be set.
         * @return {@code this}
         */
        public Builder securityContextSysctl(com.aliyun.ros.cdk.core.IResolvable securityContextSysctl) {
            this.securityContextSysctl = securityContextSysctl;
            return this;
        }

        /**
         * Sets the value of {@link RosContainerGroupProps#getSecurityContextSysctl}
         * @param securityContextSysctl the value to be set.
         * @return {@code this}
         */
        public Builder securityContextSysctl(java.util.List<? extends java.lang.Object> securityContextSysctl) {
            this.securityContextSysctl = securityContextSysctl;
            return this;
        }

        /**
         * Sets the value of {@link RosContainerGroupProps#getSecurityGroupId}
         * @param securityGroupId the value to be set.
         * @return {@code this}
         */
        public Builder securityGroupId(java.lang.String securityGroupId) {
            this.securityGroupId = securityGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosContainerGroupProps#getSecurityGroupId}
         * @param securityGroupId the value to be set.
         * @return {@code this}
         */
        public Builder securityGroupId(com.aliyun.ros.cdk.core.IResolvable securityGroupId) {
            this.securityGroupId = securityGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosContainerGroupProps#getSlsEnable}
         * @param slsEnable the value to be set.
         * @return {@code this}
         */
        public Builder slsEnable(java.lang.Boolean slsEnable) {
            this.slsEnable = slsEnable;
            return this;
        }

        /**
         * Sets the value of {@link RosContainerGroupProps#getSlsEnable}
         * @param slsEnable the value to be set.
         * @return {@code this}
         */
        public Builder slsEnable(com.aliyun.ros.cdk.core.IResolvable slsEnable) {
            this.slsEnable = slsEnable;
            return this;
        }

        /**
         * Sets the value of {@link RosContainerGroupProps#getSpotPriceLimit}
         * @param spotPriceLimit the value to be set.
         * @return {@code this}
         */
        public Builder spotPriceLimit(java.lang.Number spotPriceLimit) {
            this.spotPriceLimit = spotPriceLimit;
            return this;
        }

        /**
         * Sets the value of {@link RosContainerGroupProps#getSpotPriceLimit}
         * @param spotPriceLimit the value to be set.
         * @return {@code this}
         */
        public Builder spotPriceLimit(com.aliyun.ros.cdk.core.IResolvable spotPriceLimit) {
            this.spotPriceLimit = spotPriceLimit;
            return this;
        }

        /**
         * Sets the value of {@link RosContainerGroupProps#getSpotStrategy}
         * @param spotStrategy the value to be set.
         * @return {@code this}
         */
        public Builder spotStrategy(java.lang.String spotStrategy) {
            this.spotStrategy = spotStrategy;
            return this;
        }

        /**
         * Sets the value of {@link RosContainerGroupProps#getSpotStrategy}
         * @param spotStrategy the value to be set.
         * @return {@code this}
         */
        public Builder spotStrategy(com.aliyun.ros.cdk.core.IResolvable spotStrategy) {
            this.spotStrategy = spotStrategy;
            return this;
        }

        /**
         * Sets the value of {@link RosContainerGroupProps#getTag}
         * @param tag the value to be set.
         * @return {@code this}
         */
        public Builder tag(com.aliyun.ros.cdk.core.IResolvable tag) {
            this.tag = tag;
            return this;
        }

        /**
         * Sets the value of {@link RosContainerGroupProps#getTag}
         * @param tag the value to be set.
         * @return {@code this}
         */
        public Builder tag(java.util.List<? extends java.lang.Object> tag) {
            this.tag = tag;
            return this;
        }

        /**
         * Sets the value of {@link RosContainerGroupProps#getTerminationGracePeriodSeconds}
         * @param terminationGracePeriodSeconds the value to be set.
         * @return {@code this}
         */
        public Builder terminationGracePeriodSeconds(java.lang.Number terminationGracePeriodSeconds) {
            this.terminationGracePeriodSeconds = terminationGracePeriodSeconds;
            return this;
        }

        /**
         * Sets the value of {@link RosContainerGroupProps#getTerminationGracePeriodSeconds}
         * @param terminationGracePeriodSeconds the value to be set.
         * @return {@code this}
         */
        public Builder terminationGracePeriodSeconds(com.aliyun.ros.cdk.core.IResolvable terminationGracePeriodSeconds) {
            this.terminationGracePeriodSeconds = terminationGracePeriodSeconds;
            return this;
        }

        /**
         * Sets the value of {@link RosContainerGroupProps#getVolume}
         * @param volume the value to be set.
         * @return {@code this}
         */
        public Builder volume(com.aliyun.ros.cdk.core.IResolvable volume) {
            this.volume = volume;
            return this;
        }

        /**
         * Sets the value of {@link RosContainerGroupProps#getVolume}
         * @param volume the value to be set.
         * @return {@code this}
         */
        public Builder volume(java.util.List<? extends java.lang.Object> volume) {
            this.volume = volume;
            return this;
        }

        /**
         * Sets the value of {@link RosContainerGroupProps#getVSwitchId}
         * @param vSwitchId the value to be set.
         * @return {@code this}
         */
        public Builder vSwitchId(java.lang.String vSwitchId) {
            this.vSwitchId = vSwitchId;
            return this;
        }

        /**
         * Sets the value of {@link RosContainerGroupProps#getVSwitchId}
         * @param vSwitchId the value to be set.
         * @return {@code this}
         */
        public Builder vSwitchId(com.aliyun.ros.cdk.core.IResolvable vSwitchId) {
            this.vSwitchId = vSwitchId;
            return this;
        }

        /**
         * Sets the value of {@link RosContainerGroupProps#getZoneId}
         * @param zoneId the value to be set.
         * @return {@code this}
         */
        public Builder zoneId(java.lang.String zoneId) {
            this.zoneId = zoneId;
            return this;
        }

        /**
         * Sets the value of {@link RosContainerGroupProps#getZoneId}
         * @param zoneId the value to be set.
         * @return {@code this}
         */
        public Builder zoneId(com.aliyun.ros.cdk.core.IResolvable zoneId) {
            this.zoneId = zoneId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosContainerGroupProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosContainerGroupProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosContainerGroupProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosContainerGroupProps {
        private final java.lang.Object container;
        private final java.lang.Object containerGroupName;
        private final java.lang.Object acrRegistryInfo;
        private final java.lang.Object activeDeadlineSeconds;
        private final java.lang.Object autoMatchImageCache;
        private final java.lang.Object cpu;
        private final java.lang.Object dnsConfig;
        private final java.lang.Object eipInstanceId;
        private final java.lang.Object hostAliase;
        private final java.lang.Object imageRegistryCredential;
        private final java.lang.Object imageSnapshotId;
        private final java.lang.Object initContainer;
        private final java.lang.Object instanceType;
        private final java.lang.Object ipv6AddressCount;
        private final java.lang.Object memory;
        private final java.lang.Object ramRoleName;
        private final java.lang.Object resourceGroupId;
        private final java.lang.Object restartPolicy;
        private final java.lang.Object securityContextSysctl;
        private final java.lang.Object securityGroupId;
        private final java.lang.Object slsEnable;
        private final java.lang.Object spotPriceLimit;
        private final java.lang.Object spotStrategy;
        private final java.lang.Object tag;
        private final java.lang.Object terminationGracePeriodSeconds;
        private final java.lang.Object volume;
        private final java.lang.Object vSwitchId;
        private final java.lang.Object zoneId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.container = software.amazon.jsii.Kernel.get(this, "container", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.containerGroupName = software.amazon.jsii.Kernel.get(this, "containerGroupName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.acrRegistryInfo = software.amazon.jsii.Kernel.get(this, "acrRegistryInfo", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.activeDeadlineSeconds = software.amazon.jsii.Kernel.get(this, "activeDeadlineSeconds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.autoMatchImageCache = software.amazon.jsii.Kernel.get(this, "autoMatchImageCache", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.cpu = software.amazon.jsii.Kernel.get(this, "cpu", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dnsConfig = software.amazon.jsii.Kernel.get(this, "dnsConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.eipInstanceId = software.amazon.jsii.Kernel.get(this, "eipInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.hostAliase = software.amazon.jsii.Kernel.get(this, "hostAliase", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.imageRegistryCredential = software.amazon.jsii.Kernel.get(this, "imageRegistryCredential", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.imageSnapshotId = software.amazon.jsii.Kernel.get(this, "imageSnapshotId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.initContainer = software.amazon.jsii.Kernel.get(this, "initContainer", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.instanceType = software.amazon.jsii.Kernel.get(this, "instanceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ipv6AddressCount = software.amazon.jsii.Kernel.get(this, "ipv6AddressCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.memory = software.amazon.jsii.Kernel.get(this, "memory", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ramRoleName = software.amazon.jsii.Kernel.get(this, "ramRoleName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.restartPolicy = software.amazon.jsii.Kernel.get(this, "restartPolicy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.securityContextSysctl = software.amazon.jsii.Kernel.get(this, "securityContextSysctl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.securityGroupId = software.amazon.jsii.Kernel.get(this, "securityGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.slsEnable = software.amazon.jsii.Kernel.get(this, "slsEnable", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.spotPriceLimit = software.amazon.jsii.Kernel.get(this, "spotPriceLimit", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.spotStrategy = software.amazon.jsii.Kernel.get(this, "spotStrategy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tag = software.amazon.jsii.Kernel.get(this, "tag", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.terminationGracePeriodSeconds = software.amazon.jsii.Kernel.get(this, "terminationGracePeriodSeconds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.volume = software.amazon.jsii.Kernel.get(this, "volume", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vSwitchId = software.amazon.jsii.Kernel.get(this, "vSwitchId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.zoneId = software.amazon.jsii.Kernel.get(this, "zoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.container = java.util.Objects.requireNonNull(builder.container, "container is required");
            this.containerGroupName = java.util.Objects.requireNonNull(builder.containerGroupName, "containerGroupName is required");
            this.acrRegistryInfo = builder.acrRegistryInfo;
            this.activeDeadlineSeconds = builder.activeDeadlineSeconds;
            this.autoMatchImageCache = builder.autoMatchImageCache;
            this.cpu = builder.cpu;
            this.dnsConfig = builder.dnsConfig;
            this.eipInstanceId = builder.eipInstanceId;
            this.hostAliase = builder.hostAliase;
            this.imageRegistryCredential = builder.imageRegistryCredential;
            this.imageSnapshotId = builder.imageSnapshotId;
            this.initContainer = builder.initContainer;
            this.instanceType = builder.instanceType;
            this.ipv6AddressCount = builder.ipv6AddressCount;
            this.memory = builder.memory;
            this.ramRoleName = builder.ramRoleName;
            this.resourceGroupId = builder.resourceGroupId;
            this.restartPolicy = builder.restartPolicy;
            this.securityContextSysctl = builder.securityContextSysctl;
            this.securityGroupId = builder.securityGroupId;
            this.slsEnable = builder.slsEnable;
            this.spotPriceLimit = builder.spotPriceLimit;
            this.spotStrategy = builder.spotStrategy;
            this.tag = builder.tag;
            this.terminationGracePeriodSeconds = builder.terminationGracePeriodSeconds;
            this.volume = builder.volume;
            this.vSwitchId = builder.vSwitchId;
            this.zoneId = builder.zoneId;
        }

        @Override
        public final java.lang.Object getContainer() {
            return this.container;
        }

        @Override
        public final java.lang.Object getContainerGroupName() {
            return this.containerGroupName;
        }

        @Override
        public final java.lang.Object getAcrRegistryInfo() {
            return this.acrRegistryInfo;
        }

        @Override
        public final java.lang.Object getActiveDeadlineSeconds() {
            return this.activeDeadlineSeconds;
        }

        @Override
        public final java.lang.Object getAutoMatchImageCache() {
            return this.autoMatchImageCache;
        }

        @Override
        public final java.lang.Object getCpu() {
            return this.cpu;
        }

        @Override
        public final java.lang.Object getDnsConfig() {
            return this.dnsConfig;
        }

        @Override
        public final java.lang.Object getEipInstanceId() {
            return this.eipInstanceId;
        }

        @Override
        public final java.lang.Object getHostAliase() {
            return this.hostAliase;
        }

        @Override
        public final java.lang.Object getImageRegistryCredential() {
            return this.imageRegistryCredential;
        }

        @Override
        public final java.lang.Object getImageSnapshotId() {
            return this.imageSnapshotId;
        }

        @Override
        public final java.lang.Object getInitContainer() {
            return this.initContainer;
        }

        @Override
        public final java.lang.Object getInstanceType() {
            return this.instanceType;
        }

        @Override
        public final java.lang.Object getIpv6AddressCount() {
            return this.ipv6AddressCount;
        }

        @Override
        public final java.lang.Object getMemory() {
            return this.memory;
        }

        @Override
        public final java.lang.Object getRamRoleName() {
            return this.ramRoleName;
        }

        @Override
        public final java.lang.Object getResourceGroupId() {
            return this.resourceGroupId;
        }

        @Override
        public final java.lang.Object getRestartPolicy() {
            return this.restartPolicy;
        }

        @Override
        public final java.lang.Object getSecurityContextSysctl() {
            return this.securityContextSysctl;
        }

        @Override
        public final java.lang.Object getSecurityGroupId() {
            return this.securityGroupId;
        }

        @Override
        public final java.lang.Object getSlsEnable() {
            return this.slsEnable;
        }

        @Override
        public final java.lang.Object getSpotPriceLimit() {
            return this.spotPriceLimit;
        }

        @Override
        public final java.lang.Object getSpotStrategy() {
            return this.spotStrategy;
        }

        @Override
        public final java.lang.Object getTag() {
            return this.tag;
        }

        @Override
        public final java.lang.Object getTerminationGracePeriodSeconds() {
            return this.terminationGracePeriodSeconds;
        }

        @Override
        public final java.lang.Object getVolume() {
            return this.volume;
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

            data.set("container", om.valueToTree(this.getContainer()));
            data.set("containerGroupName", om.valueToTree(this.getContainerGroupName()));
            if (this.getAcrRegistryInfo() != null) {
                data.set("acrRegistryInfo", om.valueToTree(this.getAcrRegistryInfo()));
            }
            if (this.getActiveDeadlineSeconds() != null) {
                data.set("activeDeadlineSeconds", om.valueToTree(this.getActiveDeadlineSeconds()));
            }
            if (this.getAutoMatchImageCache() != null) {
                data.set("autoMatchImageCache", om.valueToTree(this.getAutoMatchImageCache()));
            }
            if (this.getCpu() != null) {
                data.set("cpu", om.valueToTree(this.getCpu()));
            }
            if (this.getDnsConfig() != null) {
                data.set("dnsConfig", om.valueToTree(this.getDnsConfig()));
            }
            if (this.getEipInstanceId() != null) {
                data.set("eipInstanceId", om.valueToTree(this.getEipInstanceId()));
            }
            if (this.getHostAliase() != null) {
                data.set("hostAliase", om.valueToTree(this.getHostAliase()));
            }
            if (this.getImageRegistryCredential() != null) {
                data.set("imageRegistryCredential", om.valueToTree(this.getImageRegistryCredential()));
            }
            if (this.getImageSnapshotId() != null) {
                data.set("imageSnapshotId", om.valueToTree(this.getImageSnapshotId()));
            }
            if (this.getInitContainer() != null) {
                data.set("initContainer", om.valueToTree(this.getInitContainer()));
            }
            if (this.getInstanceType() != null) {
                data.set("instanceType", om.valueToTree(this.getInstanceType()));
            }
            if (this.getIpv6AddressCount() != null) {
                data.set("ipv6AddressCount", om.valueToTree(this.getIpv6AddressCount()));
            }
            if (this.getMemory() != null) {
                data.set("memory", om.valueToTree(this.getMemory()));
            }
            if (this.getRamRoleName() != null) {
                data.set("ramRoleName", om.valueToTree(this.getRamRoleName()));
            }
            if (this.getResourceGroupId() != null) {
                data.set("resourceGroupId", om.valueToTree(this.getResourceGroupId()));
            }
            if (this.getRestartPolicy() != null) {
                data.set("restartPolicy", om.valueToTree(this.getRestartPolicy()));
            }
            if (this.getSecurityContextSysctl() != null) {
                data.set("securityContextSysctl", om.valueToTree(this.getSecurityContextSysctl()));
            }
            if (this.getSecurityGroupId() != null) {
                data.set("securityGroupId", om.valueToTree(this.getSecurityGroupId()));
            }
            if (this.getSlsEnable() != null) {
                data.set("slsEnable", om.valueToTree(this.getSlsEnable()));
            }
            if (this.getSpotPriceLimit() != null) {
                data.set("spotPriceLimit", om.valueToTree(this.getSpotPriceLimit()));
            }
            if (this.getSpotStrategy() != null) {
                data.set("spotStrategy", om.valueToTree(this.getSpotStrategy()));
            }
            if (this.getTag() != null) {
                data.set("tag", om.valueToTree(this.getTag()));
            }
            if (this.getTerminationGracePeriodSeconds() != null) {
                data.set("terminationGracePeriodSeconds", om.valueToTree(this.getTerminationGracePeriodSeconds()));
            }
            if (this.getVolume() != null) {
                data.set("volume", om.valueToTree(this.getVolume()));
            }
            if (this.getVSwitchId() != null) {
                data.set("vSwitchId", om.valueToTree(this.getVSwitchId()));
            }
            if (this.getZoneId() != null) {
                data.set("zoneId", om.valueToTree(this.getZoneId()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-eci.RosContainerGroupProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosContainerGroupProps.Jsii$Proxy that = (RosContainerGroupProps.Jsii$Proxy) o;

            if (!container.equals(that.container)) return false;
            if (!containerGroupName.equals(that.containerGroupName)) return false;
            if (this.acrRegistryInfo != null ? !this.acrRegistryInfo.equals(that.acrRegistryInfo) : that.acrRegistryInfo != null) return false;
            if (this.activeDeadlineSeconds != null ? !this.activeDeadlineSeconds.equals(that.activeDeadlineSeconds) : that.activeDeadlineSeconds != null) return false;
            if (this.autoMatchImageCache != null ? !this.autoMatchImageCache.equals(that.autoMatchImageCache) : that.autoMatchImageCache != null) return false;
            if (this.cpu != null ? !this.cpu.equals(that.cpu) : that.cpu != null) return false;
            if (this.dnsConfig != null ? !this.dnsConfig.equals(that.dnsConfig) : that.dnsConfig != null) return false;
            if (this.eipInstanceId != null ? !this.eipInstanceId.equals(that.eipInstanceId) : that.eipInstanceId != null) return false;
            if (this.hostAliase != null ? !this.hostAliase.equals(that.hostAliase) : that.hostAliase != null) return false;
            if (this.imageRegistryCredential != null ? !this.imageRegistryCredential.equals(that.imageRegistryCredential) : that.imageRegistryCredential != null) return false;
            if (this.imageSnapshotId != null ? !this.imageSnapshotId.equals(that.imageSnapshotId) : that.imageSnapshotId != null) return false;
            if (this.initContainer != null ? !this.initContainer.equals(that.initContainer) : that.initContainer != null) return false;
            if (this.instanceType != null ? !this.instanceType.equals(that.instanceType) : that.instanceType != null) return false;
            if (this.ipv6AddressCount != null ? !this.ipv6AddressCount.equals(that.ipv6AddressCount) : that.ipv6AddressCount != null) return false;
            if (this.memory != null ? !this.memory.equals(that.memory) : that.memory != null) return false;
            if (this.ramRoleName != null ? !this.ramRoleName.equals(that.ramRoleName) : that.ramRoleName != null) return false;
            if (this.resourceGroupId != null ? !this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId != null) return false;
            if (this.restartPolicy != null ? !this.restartPolicy.equals(that.restartPolicy) : that.restartPolicy != null) return false;
            if (this.securityContextSysctl != null ? !this.securityContextSysctl.equals(that.securityContextSysctl) : that.securityContextSysctl != null) return false;
            if (this.securityGroupId != null ? !this.securityGroupId.equals(that.securityGroupId) : that.securityGroupId != null) return false;
            if (this.slsEnable != null ? !this.slsEnable.equals(that.slsEnable) : that.slsEnable != null) return false;
            if (this.spotPriceLimit != null ? !this.spotPriceLimit.equals(that.spotPriceLimit) : that.spotPriceLimit != null) return false;
            if (this.spotStrategy != null ? !this.spotStrategy.equals(that.spotStrategy) : that.spotStrategy != null) return false;
            if (this.tag != null ? !this.tag.equals(that.tag) : that.tag != null) return false;
            if (this.terminationGracePeriodSeconds != null ? !this.terminationGracePeriodSeconds.equals(that.terminationGracePeriodSeconds) : that.terminationGracePeriodSeconds != null) return false;
            if (this.volume != null ? !this.volume.equals(that.volume) : that.volume != null) return false;
            if (this.vSwitchId != null ? !this.vSwitchId.equals(that.vSwitchId) : that.vSwitchId != null) return false;
            return this.zoneId != null ? this.zoneId.equals(that.zoneId) : that.zoneId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.container.hashCode();
            result = 31 * result + (this.containerGroupName.hashCode());
            result = 31 * result + (this.acrRegistryInfo != null ? this.acrRegistryInfo.hashCode() : 0);
            result = 31 * result + (this.activeDeadlineSeconds != null ? this.activeDeadlineSeconds.hashCode() : 0);
            result = 31 * result + (this.autoMatchImageCache != null ? this.autoMatchImageCache.hashCode() : 0);
            result = 31 * result + (this.cpu != null ? this.cpu.hashCode() : 0);
            result = 31 * result + (this.dnsConfig != null ? this.dnsConfig.hashCode() : 0);
            result = 31 * result + (this.eipInstanceId != null ? this.eipInstanceId.hashCode() : 0);
            result = 31 * result + (this.hostAliase != null ? this.hostAliase.hashCode() : 0);
            result = 31 * result + (this.imageRegistryCredential != null ? this.imageRegistryCredential.hashCode() : 0);
            result = 31 * result + (this.imageSnapshotId != null ? this.imageSnapshotId.hashCode() : 0);
            result = 31 * result + (this.initContainer != null ? this.initContainer.hashCode() : 0);
            result = 31 * result + (this.instanceType != null ? this.instanceType.hashCode() : 0);
            result = 31 * result + (this.ipv6AddressCount != null ? this.ipv6AddressCount.hashCode() : 0);
            result = 31 * result + (this.memory != null ? this.memory.hashCode() : 0);
            result = 31 * result + (this.ramRoleName != null ? this.ramRoleName.hashCode() : 0);
            result = 31 * result + (this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0);
            result = 31 * result + (this.restartPolicy != null ? this.restartPolicy.hashCode() : 0);
            result = 31 * result + (this.securityContextSysctl != null ? this.securityContextSysctl.hashCode() : 0);
            result = 31 * result + (this.securityGroupId != null ? this.securityGroupId.hashCode() : 0);
            result = 31 * result + (this.slsEnable != null ? this.slsEnable.hashCode() : 0);
            result = 31 * result + (this.spotPriceLimit != null ? this.spotPriceLimit.hashCode() : 0);
            result = 31 * result + (this.spotStrategy != null ? this.spotStrategy.hashCode() : 0);
            result = 31 * result + (this.tag != null ? this.tag.hashCode() : 0);
            result = 31 * result + (this.terminationGracePeriodSeconds != null ? this.terminationGracePeriodSeconds.hashCode() : 0);
            result = 31 * result + (this.volume != null ? this.volume.hashCode() : 0);
            result = 31 * result + (this.vSwitchId != null ? this.vSwitchId.hashCode() : 0);
            result = 31 * result + (this.zoneId != null ? this.zoneId.hashCode() : 0);
            return result;
        }
    }
}
