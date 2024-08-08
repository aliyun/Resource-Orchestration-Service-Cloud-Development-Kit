package com.aliyun.ros.cdk.ess;

/**
 * Properties for defining a <code>RosEciScalingConfiguration</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ess-eciscalingconfiguration
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-08-08T09:17:10.934Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ess.$Module.class, fqn = "@alicloud/ros-cdk-ess.RosEciScalingConfigurationProps")
@software.amazon.jsii.Jsii.Proxy(RosEciScalingConfigurationProps.Jsii$Proxy.class)
public interface RosEciScalingConfigurationProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getContainerGroupName();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getScalingConfigurationName();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getScalingGroupId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getSecurityGroupId();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAcrRegistryInfos() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getActiveDeadlineSeconds() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAutoCreateEip() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAutoMatchImageCache() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getContainers() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCostOptimization() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCpu() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCpuOptionsCore() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCpuOptionsThreadsPerCore() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDataCacheBucket() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDataCacheBurstingEnabled() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDataCachePl() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDataCacheProvisionedIops() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDnsConfigNameServers() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDnsConfigOptions() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDnsConfigSearches() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDnsPolicy() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEgressBandwidth() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEipBandwidth() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEphemeralStorage() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getHostAliases() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getHostName() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getImageRegistryCredentials() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getImageSnapshotId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getIngressBandwidth() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInitContainers() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInstanceFamilyLevel() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInstanceTypes() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getIpv6AddressCount() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getLoadBalancerWeight() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getMemory() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getNtpServers() {
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
    default @org.jetbrains.annotations.Nullable java.lang.Object getSecurityContextSysctls() {
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
    default @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.ess.RosEciScalingConfiguration.TagsProperty> getTags() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTerminationGracePeriodSeconds() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getVolumes() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosEciScalingConfigurationProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosEciScalingConfigurationProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosEciScalingConfigurationProps> {
        java.lang.Object containerGroupName;
        java.lang.Object scalingConfigurationName;
        java.lang.Object scalingGroupId;
        java.lang.Object securityGroupId;
        java.lang.Object acrRegistryInfos;
        java.lang.Object activeDeadlineSeconds;
        java.lang.Object autoCreateEip;
        java.lang.Object autoMatchImageCache;
        java.lang.Object containers;
        java.lang.Object costOptimization;
        java.lang.Object cpu;
        java.lang.Object cpuOptionsCore;
        java.lang.Object cpuOptionsThreadsPerCore;
        java.lang.Object dataCacheBucket;
        java.lang.Object dataCacheBurstingEnabled;
        java.lang.Object dataCachePl;
        java.lang.Object dataCacheProvisionedIops;
        java.lang.Object dnsConfigNameServers;
        java.lang.Object dnsConfigOptions;
        java.lang.Object dnsConfigSearches;
        java.lang.Object dnsPolicy;
        java.lang.Object egressBandwidth;
        java.lang.Object eipBandwidth;
        java.lang.Object ephemeralStorage;
        java.lang.Object hostAliases;
        java.lang.Object hostName;
        java.lang.Object imageRegistryCredentials;
        java.lang.Object imageSnapshotId;
        java.lang.Object ingressBandwidth;
        java.lang.Object initContainers;
        java.lang.Object instanceFamilyLevel;
        java.lang.Object instanceTypes;
        java.lang.Object ipv6AddressCount;
        java.lang.Object loadBalancerWeight;
        java.lang.Object memory;
        java.lang.Object ntpServers;
        java.lang.Object ramRoleName;
        java.lang.Object resourceGroupId;
        java.lang.Object restartPolicy;
        java.lang.Object securityContextSysctls;
        java.lang.Object spotPriceLimit;
        java.lang.Object spotStrategy;
        java.util.List<com.aliyun.ros.cdk.ess.RosEciScalingConfiguration.TagsProperty> tags;
        java.lang.Object terminationGracePeriodSeconds;
        java.lang.Object volumes;

        /**
         * Sets the value of {@link RosEciScalingConfigurationProps#getContainerGroupName}
         * @param containerGroupName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder containerGroupName(java.lang.String containerGroupName) {
            this.containerGroupName = containerGroupName;
            return this;
        }

        /**
         * Sets the value of {@link RosEciScalingConfigurationProps#getContainerGroupName}
         * @param containerGroupName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder containerGroupName(com.aliyun.ros.cdk.core.IResolvable containerGroupName) {
            this.containerGroupName = containerGroupName;
            return this;
        }

        /**
         * Sets the value of {@link RosEciScalingConfigurationProps#getScalingConfigurationName}
         * @param scalingConfigurationName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder scalingConfigurationName(java.lang.String scalingConfigurationName) {
            this.scalingConfigurationName = scalingConfigurationName;
            return this;
        }

        /**
         * Sets the value of {@link RosEciScalingConfigurationProps#getScalingConfigurationName}
         * @param scalingConfigurationName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder scalingConfigurationName(com.aliyun.ros.cdk.core.IResolvable scalingConfigurationName) {
            this.scalingConfigurationName = scalingConfigurationName;
            return this;
        }

        /**
         * Sets the value of {@link RosEciScalingConfigurationProps#getScalingGroupId}
         * @param scalingGroupId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder scalingGroupId(java.lang.String scalingGroupId) {
            this.scalingGroupId = scalingGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosEciScalingConfigurationProps#getScalingGroupId}
         * @param scalingGroupId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder scalingGroupId(com.aliyun.ros.cdk.core.IResolvable scalingGroupId) {
            this.scalingGroupId = scalingGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosEciScalingConfigurationProps#getSecurityGroupId}
         * @param securityGroupId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder securityGroupId(java.lang.String securityGroupId) {
            this.securityGroupId = securityGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosEciScalingConfigurationProps#getSecurityGroupId}
         * @param securityGroupId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder securityGroupId(com.aliyun.ros.cdk.core.IResolvable securityGroupId) {
            this.securityGroupId = securityGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosEciScalingConfigurationProps#getAcrRegistryInfos}
         * @param acrRegistryInfos the value to be set.
         * @return {@code this}
         */
        public Builder acrRegistryInfos(com.aliyun.ros.cdk.core.IResolvable acrRegistryInfos) {
            this.acrRegistryInfos = acrRegistryInfos;
            return this;
        }

        /**
         * Sets the value of {@link RosEciScalingConfigurationProps#getAcrRegistryInfos}
         * @param acrRegistryInfos the value to be set.
         * @return {@code this}
         */
        public Builder acrRegistryInfos(java.util.List<? extends java.lang.Object> acrRegistryInfos) {
            this.acrRegistryInfos = acrRegistryInfos;
            return this;
        }

        /**
         * Sets the value of {@link RosEciScalingConfigurationProps#getActiveDeadlineSeconds}
         * @param activeDeadlineSeconds the value to be set.
         * @return {@code this}
         */
        public Builder activeDeadlineSeconds(java.lang.Number activeDeadlineSeconds) {
            this.activeDeadlineSeconds = activeDeadlineSeconds;
            return this;
        }

        /**
         * Sets the value of {@link RosEciScalingConfigurationProps#getActiveDeadlineSeconds}
         * @param activeDeadlineSeconds the value to be set.
         * @return {@code this}
         */
        public Builder activeDeadlineSeconds(com.aliyun.ros.cdk.core.IResolvable activeDeadlineSeconds) {
            this.activeDeadlineSeconds = activeDeadlineSeconds;
            return this;
        }

        /**
         * Sets the value of {@link RosEciScalingConfigurationProps#getAutoCreateEip}
         * @param autoCreateEip the value to be set.
         * @return {@code this}
         */
        public Builder autoCreateEip(java.lang.Boolean autoCreateEip) {
            this.autoCreateEip = autoCreateEip;
            return this;
        }

        /**
         * Sets the value of {@link RosEciScalingConfigurationProps#getAutoCreateEip}
         * @param autoCreateEip the value to be set.
         * @return {@code this}
         */
        public Builder autoCreateEip(com.aliyun.ros.cdk.core.IResolvable autoCreateEip) {
            this.autoCreateEip = autoCreateEip;
            return this;
        }

        /**
         * Sets the value of {@link RosEciScalingConfigurationProps#getAutoMatchImageCache}
         * @param autoMatchImageCache the value to be set.
         * @return {@code this}
         */
        public Builder autoMatchImageCache(java.lang.Boolean autoMatchImageCache) {
            this.autoMatchImageCache = autoMatchImageCache;
            return this;
        }

        /**
         * Sets the value of {@link RosEciScalingConfigurationProps#getAutoMatchImageCache}
         * @param autoMatchImageCache the value to be set.
         * @return {@code this}
         */
        public Builder autoMatchImageCache(com.aliyun.ros.cdk.core.IResolvable autoMatchImageCache) {
            this.autoMatchImageCache = autoMatchImageCache;
            return this;
        }

        /**
         * Sets the value of {@link RosEciScalingConfigurationProps#getContainers}
         * @param containers the value to be set.
         * @return {@code this}
         */
        public Builder containers(com.aliyun.ros.cdk.core.IResolvable containers) {
            this.containers = containers;
            return this;
        }

        /**
         * Sets the value of {@link RosEciScalingConfigurationProps#getContainers}
         * @param containers the value to be set.
         * @return {@code this}
         */
        public Builder containers(java.util.List<? extends java.lang.Object> containers) {
            this.containers = containers;
            return this;
        }

        /**
         * Sets the value of {@link RosEciScalingConfigurationProps#getCostOptimization}
         * @param costOptimization the value to be set.
         * @return {@code this}
         */
        public Builder costOptimization(java.lang.Boolean costOptimization) {
            this.costOptimization = costOptimization;
            return this;
        }

        /**
         * Sets the value of {@link RosEciScalingConfigurationProps#getCostOptimization}
         * @param costOptimization the value to be set.
         * @return {@code this}
         */
        public Builder costOptimization(com.aliyun.ros.cdk.core.IResolvable costOptimization) {
            this.costOptimization = costOptimization;
            return this;
        }

        /**
         * Sets the value of {@link RosEciScalingConfigurationProps#getCpu}
         * @param cpu the value to be set.
         * @return {@code this}
         */
        public Builder cpu(java.lang.Number cpu) {
            this.cpu = cpu;
            return this;
        }

        /**
         * Sets the value of {@link RosEciScalingConfigurationProps#getCpu}
         * @param cpu the value to be set.
         * @return {@code this}
         */
        public Builder cpu(com.aliyun.ros.cdk.core.IResolvable cpu) {
            this.cpu = cpu;
            return this;
        }

        /**
         * Sets the value of {@link RosEciScalingConfigurationProps#getCpuOptionsCore}
         * @param cpuOptionsCore the value to be set.
         * @return {@code this}
         */
        public Builder cpuOptionsCore(java.lang.Number cpuOptionsCore) {
            this.cpuOptionsCore = cpuOptionsCore;
            return this;
        }

        /**
         * Sets the value of {@link RosEciScalingConfigurationProps#getCpuOptionsCore}
         * @param cpuOptionsCore the value to be set.
         * @return {@code this}
         */
        public Builder cpuOptionsCore(com.aliyun.ros.cdk.core.IResolvable cpuOptionsCore) {
            this.cpuOptionsCore = cpuOptionsCore;
            return this;
        }

        /**
         * Sets the value of {@link RosEciScalingConfigurationProps#getCpuOptionsThreadsPerCore}
         * @param cpuOptionsThreadsPerCore the value to be set.
         * @return {@code this}
         */
        public Builder cpuOptionsThreadsPerCore(java.lang.Number cpuOptionsThreadsPerCore) {
            this.cpuOptionsThreadsPerCore = cpuOptionsThreadsPerCore;
            return this;
        }

        /**
         * Sets the value of {@link RosEciScalingConfigurationProps#getCpuOptionsThreadsPerCore}
         * @param cpuOptionsThreadsPerCore the value to be set.
         * @return {@code this}
         */
        public Builder cpuOptionsThreadsPerCore(com.aliyun.ros.cdk.core.IResolvable cpuOptionsThreadsPerCore) {
            this.cpuOptionsThreadsPerCore = cpuOptionsThreadsPerCore;
            return this;
        }

        /**
         * Sets the value of {@link RosEciScalingConfigurationProps#getDataCacheBucket}
         * @param dataCacheBucket the value to be set.
         * @return {@code this}
         */
        public Builder dataCacheBucket(java.lang.String dataCacheBucket) {
            this.dataCacheBucket = dataCacheBucket;
            return this;
        }

        /**
         * Sets the value of {@link RosEciScalingConfigurationProps#getDataCacheBucket}
         * @param dataCacheBucket the value to be set.
         * @return {@code this}
         */
        public Builder dataCacheBucket(com.aliyun.ros.cdk.core.IResolvable dataCacheBucket) {
            this.dataCacheBucket = dataCacheBucket;
            return this;
        }

        /**
         * Sets the value of {@link RosEciScalingConfigurationProps#getDataCacheBurstingEnabled}
         * @param dataCacheBurstingEnabled the value to be set.
         * @return {@code this}
         */
        public Builder dataCacheBurstingEnabled(java.lang.Boolean dataCacheBurstingEnabled) {
            this.dataCacheBurstingEnabled = dataCacheBurstingEnabled;
            return this;
        }

        /**
         * Sets the value of {@link RosEciScalingConfigurationProps#getDataCacheBurstingEnabled}
         * @param dataCacheBurstingEnabled the value to be set.
         * @return {@code this}
         */
        public Builder dataCacheBurstingEnabled(com.aliyun.ros.cdk.core.IResolvable dataCacheBurstingEnabled) {
            this.dataCacheBurstingEnabled = dataCacheBurstingEnabled;
            return this;
        }

        /**
         * Sets the value of {@link RosEciScalingConfigurationProps#getDataCachePl}
         * @param dataCachePl the value to be set.
         * @return {@code this}
         */
        public Builder dataCachePl(java.lang.String dataCachePl) {
            this.dataCachePl = dataCachePl;
            return this;
        }

        /**
         * Sets the value of {@link RosEciScalingConfigurationProps#getDataCachePl}
         * @param dataCachePl the value to be set.
         * @return {@code this}
         */
        public Builder dataCachePl(com.aliyun.ros.cdk.core.IResolvable dataCachePl) {
            this.dataCachePl = dataCachePl;
            return this;
        }

        /**
         * Sets the value of {@link RosEciScalingConfigurationProps#getDataCacheProvisionedIops}
         * @param dataCacheProvisionedIops the value to be set.
         * @return {@code this}
         */
        public Builder dataCacheProvisionedIops(java.lang.Number dataCacheProvisionedIops) {
            this.dataCacheProvisionedIops = dataCacheProvisionedIops;
            return this;
        }

        /**
         * Sets the value of {@link RosEciScalingConfigurationProps#getDataCacheProvisionedIops}
         * @param dataCacheProvisionedIops the value to be set.
         * @return {@code this}
         */
        public Builder dataCacheProvisionedIops(com.aliyun.ros.cdk.core.IResolvable dataCacheProvisionedIops) {
            this.dataCacheProvisionedIops = dataCacheProvisionedIops;
            return this;
        }

        /**
         * Sets the value of {@link RosEciScalingConfigurationProps#getDnsConfigNameServers}
         * @param dnsConfigNameServers the value to be set.
         * @return {@code this}
         */
        public Builder dnsConfigNameServers(com.aliyun.ros.cdk.core.IResolvable dnsConfigNameServers) {
            this.dnsConfigNameServers = dnsConfigNameServers;
            return this;
        }

        /**
         * Sets the value of {@link RosEciScalingConfigurationProps#getDnsConfigNameServers}
         * @param dnsConfigNameServers the value to be set.
         * @return {@code this}
         */
        public Builder dnsConfigNameServers(java.util.List<? extends java.lang.Object> dnsConfigNameServers) {
            this.dnsConfigNameServers = dnsConfigNameServers;
            return this;
        }

        /**
         * Sets the value of {@link RosEciScalingConfigurationProps#getDnsConfigOptions}
         * @param dnsConfigOptions the value to be set.
         * @return {@code this}
         */
        public Builder dnsConfigOptions(com.aliyun.ros.cdk.core.IResolvable dnsConfigOptions) {
            this.dnsConfigOptions = dnsConfigOptions;
            return this;
        }

        /**
         * Sets the value of {@link RosEciScalingConfigurationProps#getDnsConfigOptions}
         * @param dnsConfigOptions the value to be set.
         * @return {@code this}
         */
        public Builder dnsConfigOptions(java.util.List<? extends java.lang.Object> dnsConfigOptions) {
            this.dnsConfigOptions = dnsConfigOptions;
            return this;
        }

        /**
         * Sets the value of {@link RosEciScalingConfigurationProps#getDnsConfigSearches}
         * @param dnsConfigSearches the value to be set.
         * @return {@code this}
         */
        public Builder dnsConfigSearches(com.aliyun.ros.cdk.core.IResolvable dnsConfigSearches) {
            this.dnsConfigSearches = dnsConfigSearches;
            return this;
        }

        /**
         * Sets the value of {@link RosEciScalingConfigurationProps#getDnsConfigSearches}
         * @param dnsConfigSearches the value to be set.
         * @return {@code this}
         */
        public Builder dnsConfigSearches(java.util.List<? extends java.lang.Object> dnsConfigSearches) {
            this.dnsConfigSearches = dnsConfigSearches;
            return this;
        }

        /**
         * Sets the value of {@link RosEciScalingConfigurationProps#getDnsPolicy}
         * @param dnsPolicy the value to be set.
         * @return {@code this}
         */
        public Builder dnsPolicy(java.lang.String dnsPolicy) {
            this.dnsPolicy = dnsPolicy;
            return this;
        }

        /**
         * Sets the value of {@link RosEciScalingConfigurationProps#getDnsPolicy}
         * @param dnsPolicy the value to be set.
         * @return {@code this}
         */
        public Builder dnsPolicy(com.aliyun.ros.cdk.core.IResolvable dnsPolicy) {
            this.dnsPolicy = dnsPolicy;
            return this;
        }

        /**
         * Sets the value of {@link RosEciScalingConfigurationProps#getEgressBandwidth}
         * @param egressBandwidth the value to be set.
         * @return {@code this}
         */
        public Builder egressBandwidth(java.lang.Number egressBandwidth) {
            this.egressBandwidth = egressBandwidth;
            return this;
        }

        /**
         * Sets the value of {@link RosEciScalingConfigurationProps#getEgressBandwidth}
         * @param egressBandwidth the value to be set.
         * @return {@code this}
         */
        public Builder egressBandwidth(com.aliyun.ros.cdk.core.IResolvable egressBandwidth) {
            this.egressBandwidth = egressBandwidth;
            return this;
        }

        /**
         * Sets the value of {@link RosEciScalingConfigurationProps#getEipBandwidth}
         * @param eipBandwidth the value to be set.
         * @return {@code this}
         */
        public Builder eipBandwidth(java.lang.Number eipBandwidth) {
            this.eipBandwidth = eipBandwidth;
            return this;
        }

        /**
         * Sets the value of {@link RosEciScalingConfigurationProps#getEipBandwidth}
         * @param eipBandwidth the value to be set.
         * @return {@code this}
         */
        public Builder eipBandwidth(com.aliyun.ros.cdk.core.IResolvable eipBandwidth) {
            this.eipBandwidth = eipBandwidth;
            return this;
        }

        /**
         * Sets the value of {@link RosEciScalingConfigurationProps#getEphemeralStorage}
         * @param ephemeralStorage the value to be set.
         * @return {@code this}
         */
        public Builder ephemeralStorage(java.lang.Number ephemeralStorage) {
            this.ephemeralStorage = ephemeralStorage;
            return this;
        }

        /**
         * Sets the value of {@link RosEciScalingConfigurationProps#getEphemeralStorage}
         * @param ephemeralStorage the value to be set.
         * @return {@code this}
         */
        public Builder ephemeralStorage(com.aliyun.ros.cdk.core.IResolvable ephemeralStorage) {
            this.ephemeralStorage = ephemeralStorage;
            return this;
        }

        /**
         * Sets the value of {@link RosEciScalingConfigurationProps#getHostAliases}
         * @param hostAliases the value to be set.
         * @return {@code this}
         */
        public Builder hostAliases(com.aliyun.ros.cdk.core.IResolvable hostAliases) {
            this.hostAliases = hostAliases;
            return this;
        }

        /**
         * Sets the value of {@link RosEciScalingConfigurationProps#getHostAliases}
         * @param hostAliases the value to be set.
         * @return {@code this}
         */
        public Builder hostAliases(java.util.List<? extends java.lang.Object> hostAliases) {
            this.hostAliases = hostAliases;
            return this;
        }

        /**
         * Sets the value of {@link RosEciScalingConfigurationProps#getHostName}
         * @param hostName the value to be set.
         * @return {@code this}
         */
        public Builder hostName(java.lang.String hostName) {
            this.hostName = hostName;
            return this;
        }

        /**
         * Sets the value of {@link RosEciScalingConfigurationProps#getHostName}
         * @param hostName the value to be set.
         * @return {@code this}
         */
        public Builder hostName(com.aliyun.ros.cdk.core.IResolvable hostName) {
            this.hostName = hostName;
            return this;
        }

        /**
         * Sets the value of {@link RosEciScalingConfigurationProps#getImageRegistryCredentials}
         * @param imageRegistryCredentials the value to be set.
         * @return {@code this}
         */
        public Builder imageRegistryCredentials(com.aliyun.ros.cdk.core.IResolvable imageRegistryCredentials) {
            this.imageRegistryCredentials = imageRegistryCredentials;
            return this;
        }

        /**
         * Sets the value of {@link RosEciScalingConfigurationProps#getImageRegistryCredentials}
         * @param imageRegistryCredentials the value to be set.
         * @return {@code this}
         */
        public Builder imageRegistryCredentials(java.util.List<? extends java.lang.Object> imageRegistryCredentials) {
            this.imageRegistryCredentials = imageRegistryCredentials;
            return this;
        }

        /**
         * Sets the value of {@link RosEciScalingConfigurationProps#getImageSnapshotId}
         * @param imageSnapshotId the value to be set.
         * @return {@code this}
         */
        public Builder imageSnapshotId(java.lang.String imageSnapshotId) {
            this.imageSnapshotId = imageSnapshotId;
            return this;
        }

        /**
         * Sets the value of {@link RosEciScalingConfigurationProps#getImageSnapshotId}
         * @param imageSnapshotId the value to be set.
         * @return {@code this}
         */
        public Builder imageSnapshotId(com.aliyun.ros.cdk.core.IResolvable imageSnapshotId) {
            this.imageSnapshotId = imageSnapshotId;
            return this;
        }

        /**
         * Sets the value of {@link RosEciScalingConfigurationProps#getIngressBandwidth}
         * @param ingressBandwidth the value to be set.
         * @return {@code this}
         */
        public Builder ingressBandwidth(java.lang.Number ingressBandwidth) {
            this.ingressBandwidth = ingressBandwidth;
            return this;
        }

        /**
         * Sets the value of {@link RosEciScalingConfigurationProps#getIngressBandwidth}
         * @param ingressBandwidth the value to be set.
         * @return {@code this}
         */
        public Builder ingressBandwidth(com.aliyun.ros.cdk.core.IResolvable ingressBandwidth) {
            this.ingressBandwidth = ingressBandwidth;
            return this;
        }

        /**
         * Sets the value of {@link RosEciScalingConfigurationProps#getInitContainers}
         * @param initContainers the value to be set.
         * @return {@code this}
         */
        public Builder initContainers(com.aliyun.ros.cdk.core.IResolvable initContainers) {
            this.initContainers = initContainers;
            return this;
        }

        /**
         * Sets the value of {@link RosEciScalingConfigurationProps#getInitContainers}
         * @param initContainers the value to be set.
         * @return {@code this}
         */
        public Builder initContainers(java.util.List<? extends java.lang.Object> initContainers) {
            this.initContainers = initContainers;
            return this;
        }

        /**
         * Sets the value of {@link RosEciScalingConfigurationProps#getInstanceFamilyLevel}
         * @param instanceFamilyLevel the value to be set.
         * @return {@code this}
         */
        public Builder instanceFamilyLevel(java.lang.String instanceFamilyLevel) {
            this.instanceFamilyLevel = instanceFamilyLevel;
            return this;
        }

        /**
         * Sets the value of {@link RosEciScalingConfigurationProps#getInstanceFamilyLevel}
         * @param instanceFamilyLevel the value to be set.
         * @return {@code this}
         */
        public Builder instanceFamilyLevel(com.aliyun.ros.cdk.core.IResolvable instanceFamilyLevel) {
            this.instanceFamilyLevel = instanceFamilyLevel;
            return this;
        }

        /**
         * Sets the value of {@link RosEciScalingConfigurationProps#getInstanceTypes}
         * @param instanceTypes the value to be set.
         * @return {@code this}
         */
        public Builder instanceTypes(com.aliyun.ros.cdk.core.IResolvable instanceTypes) {
            this.instanceTypes = instanceTypes;
            return this;
        }

        /**
         * Sets the value of {@link RosEciScalingConfigurationProps#getInstanceTypes}
         * @param instanceTypes the value to be set.
         * @return {@code this}
         */
        public Builder instanceTypes(java.util.List<? extends java.lang.Object> instanceTypes) {
            this.instanceTypes = instanceTypes;
            return this;
        }

        /**
         * Sets the value of {@link RosEciScalingConfigurationProps#getIpv6AddressCount}
         * @param ipv6AddressCount the value to be set.
         * @return {@code this}
         */
        public Builder ipv6AddressCount(java.lang.Number ipv6AddressCount) {
            this.ipv6AddressCount = ipv6AddressCount;
            return this;
        }

        /**
         * Sets the value of {@link RosEciScalingConfigurationProps#getIpv6AddressCount}
         * @param ipv6AddressCount the value to be set.
         * @return {@code this}
         */
        public Builder ipv6AddressCount(com.aliyun.ros.cdk.core.IResolvable ipv6AddressCount) {
            this.ipv6AddressCount = ipv6AddressCount;
            return this;
        }

        /**
         * Sets the value of {@link RosEciScalingConfigurationProps#getLoadBalancerWeight}
         * @param loadBalancerWeight the value to be set.
         * @return {@code this}
         */
        public Builder loadBalancerWeight(java.lang.Number loadBalancerWeight) {
            this.loadBalancerWeight = loadBalancerWeight;
            return this;
        }

        /**
         * Sets the value of {@link RosEciScalingConfigurationProps#getLoadBalancerWeight}
         * @param loadBalancerWeight the value to be set.
         * @return {@code this}
         */
        public Builder loadBalancerWeight(com.aliyun.ros.cdk.core.IResolvable loadBalancerWeight) {
            this.loadBalancerWeight = loadBalancerWeight;
            return this;
        }

        /**
         * Sets the value of {@link RosEciScalingConfigurationProps#getMemory}
         * @param memory the value to be set.
         * @return {@code this}
         */
        public Builder memory(java.lang.Number memory) {
            this.memory = memory;
            return this;
        }

        /**
         * Sets the value of {@link RosEciScalingConfigurationProps#getMemory}
         * @param memory the value to be set.
         * @return {@code this}
         */
        public Builder memory(com.aliyun.ros.cdk.core.IResolvable memory) {
            this.memory = memory;
            return this;
        }

        /**
         * Sets the value of {@link RosEciScalingConfigurationProps#getNtpServers}
         * @param ntpServers the value to be set.
         * @return {@code this}
         */
        public Builder ntpServers(com.aliyun.ros.cdk.core.IResolvable ntpServers) {
            this.ntpServers = ntpServers;
            return this;
        }

        /**
         * Sets the value of {@link RosEciScalingConfigurationProps#getNtpServers}
         * @param ntpServers the value to be set.
         * @return {@code this}
         */
        public Builder ntpServers(java.util.List<? extends java.lang.Object> ntpServers) {
            this.ntpServers = ntpServers;
            return this;
        }

        /**
         * Sets the value of {@link RosEciScalingConfigurationProps#getRamRoleName}
         * @param ramRoleName the value to be set.
         * @return {@code this}
         */
        public Builder ramRoleName(java.lang.String ramRoleName) {
            this.ramRoleName = ramRoleName;
            return this;
        }

        /**
         * Sets the value of {@link RosEciScalingConfigurationProps#getRamRoleName}
         * @param ramRoleName the value to be set.
         * @return {@code this}
         */
        public Builder ramRoleName(com.aliyun.ros.cdk.core.IResolvable ramRoleName) {
            this.ramRoleName = ramRoleName;
            return this;
        }

        /**
         * Sets the value of {@link RosEciScalingConfigurationProps#getResourceGroupId}
         * @param resourceGroupId the value to be set.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosEciScalingConfigurationProps#getResourceGroupId}
         * @param resourceGroupId the value to be set.
         * @return {@code this}
         */
        public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link RosEciScalingConfigurationProps#getRestartPolicy}
         * @param restartPolicy the value to be set.
         * @return {@code this}
         */
        public Builder restartPolicy(java.lang.String restartPolicy) {
            this.restartPolicy = restartPolicy;
            return this;
        }

        /**
         * Sets the value of {@link RosEciScalingConfigurationProps#getRestartPolicy}
         * @param restartPolicy the value to be set.
         * @return {@code this}
         */
        public Builder restartPolicy(com.aliyun.ros.cdk.core.IResolvable restartPolicy) {
            this.restartPolicy = restartPolicy;
            return this;
        }

        /**
         * Sets the value of {@link RosEciScalingConfigurationProps#getSecurityContextSysctls}
         * @param securityContextSysctls the value to be set.
         * @return {@code this}
         */
        public Builder securityContextSysctls(com.aliyun.ros.cdk.core.IResolvable securityContextSysctls) {
            this.securityContextSysctls = securityContextSysctls;
            return this;
        }

        /**
         * Sets the value of {@link RosEciScalingConfigurationProps#getSecurityContextSysctls}
         * @param securityContextSysctls the value to be set.
         * @return {@code this}
         */
        public Builder securityContextSysctls(java.util.List<? extends java.lang.Object> securityContextSysctls) {
            this.securityContextSysctls = securityContextSysctls;
            return this;
        }

        /**
         * Sets the value of {@link RosEciScalingConfigurationProps#getSpotPriceLimit}
         * @param spotPriceLimit the value to be set.
         * @return {@code this}
         */
        public Builder spotPriceLimit(java.lang.Number spotPriceLimit) {
            this.spotPriceLimit = spotPriceLimit;
            return this;
        }

        /**
         * Sets the value of {@link RosEciScalingConfigurationProps#getSpotPriceLimit}
         * @param spotPriceLimit the value to be set.
         * @return {@code this}
         */
        public Builder spotPriceLimit(com.aliyun.ros.cdk.core.IResolvable spotPriceLimit) {
            this.spotPriceLimit = spotPriceLimit;
            return this;
        }

        /**
         * Sets the value of {@link RosEciScalingConfigurationProps#getSpotStrategy}
         * @param spotStrategy the value to be set.
         * @return {@code this}
         */
        public Builder spotStrategy(java.lang.String spotStrategy) {
            this.spotStrategy = spotStrategy;
            return this;
        }

        /**
         * Sets the value of {@link RosEciScalingConfigurationProps#getSpotStrategy}
         * @param spotStrategy the value to be set.
         * @return {@code this}
         */
        public Builder spotStrategy(com.aliyun.ros.cdk.core.IResolvable spotStrategy) {
            this.spotStrategy = spotStrategy;
            return this;
        }

        /**
         * Sets the value of {@link RosEciScalingConfigurationProps#getTags}
         * @param tags the value to be set.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder tags(java.util.List<? extends com.aliyun.ros.cdk.ess.RosEciScalingConfiguration.TagsProperty> tags) {
            this.tags = (java.util.List<com.aliyun.ros.cdk.ess.RosEciScalingConfiguration.TagsProperty>)tags;
            return this;
        }

        /**
         * Sets the value of {@link RosEciScalingConfigurationProps#getTerminationGracePeriodSeconds}
         * @param terminationGracePeriodSeconds the value to be set.
         * @return {@code this}
         */
        public Builder terminationGracePeriodSeconds(java.lang.Number terminationGracePeriodSeconds) {
            this.terminationGracePeriodSeconds = terminationGracePeriodSeconds;
            return this;
        }

        /**
         * Sets the value of {@link RosEciScalingConfigurationProps#getTerminationGracePeriodSeconds}
         * @param terminationGracePeriodSeconds the value to be set.
         * @return {@code this}
         */
        public Builder terminationGracePeriodSeconds(com.aliyun.ros.cdk.core.IResolvable terminationGracePeriodSeconds) {
            this.terminationGracePeriodSeconds = terminationGracePeriodSeconds;
            return this;
        }

        /**
         * Sets the value of {@link RosEciScalingConfigurationProps#getVolumes}
         * @param volumes the value to be set.
         * @return {@code this}
         */
        public Builder volumes(com.aliyun.ros.cdk.core.IResolvable volumes) {
            this.volumes = volumes;
            return this;
        }

        /**
         * Sets the value of {@link RosEciScalingConfigurationProps#getVolumes}
         * @param volumes the value to be set.
         * @return {@code this}
         */
        public Builder volumes(java.util.List<? extends java.lang.Object> volumes) {
            this.volumes = volumes;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosEciScalingConfigurationProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosEciScalingConfigurationProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosEciScalingConfigurationProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosEciScalingConfigurationProps {
        private final java.lang.Object containerGroupName;
        private final java.lang.Object scalingConfigurationName;
        private final java.lang.Object scalingGroupId;
        private final java.lang.Object securityGroupId;
        private final java.lang.Object acrRegistryInfos;
        private final java.lang.Object activeDeadlineSeconds;
        private final java.lang.Object autoCreateEip;
        private final java.lang.Object autoMatchImageCache;
        private final java.lang.Object containers;
        private final java.lang.Object costOptimization;
        private final java.lang.Object cpu;
        private final java.lang.Object cpuOptionsCore;
        private final java.lang.Object cpuOptionsThreadsPerCore;
        private final java.lang.Object dataCacheBucket;
        private final java.lang.Object dataCacheBurstingEnabled;
        private final java.lang.Object dataCachePl;
        private final java.lang.Object dataCacheProvisionedIops;
        private final java.lang.Object dnsConfigNameServers;
        private final java.lang.Object dnsConfigOptions;
        private final java.lang.Object dnsConfigSearches;
        private final java.lang.Object dnsPolicy;
        private final java.lang.Object egressBandwidth;
        private final java.lang.Object eipBandwidth;
        private final java.lang.Object ephemeralStorage;
        private final java.lang.Object hostAliases;
        private final java.lang.Object hostName;
        private final java.lang.Object imageRegistryCredentials;
        private final java.lang.Object imageSnapshotId;
        private final java.lang.Object ingressBandwidth;
        private final java.lang.Object initContainers;
        private final java.lang.Object instanceFamilyLevel;
        private final java.lang.Object instanceTypes;
        private final java.lang.Object ipv6AddressCount;
        private final java.lang.Object loadBalancerWeight;
        private final java.lang.Object memory;
        private final java.lang.Object ntpServers;
        private final java.lang.Object ramRoleName;
        private final java.lang.Object resourceGroupId;
        private final java.lang.Object restartPolicy;
        private final java.lang.Object securityContextSysctls;
        private final java.lang.Object spotPriceLimit;
        private final java.lang.Object spotStrategy;
        private final java.util.List<com.aliyun.ros.cdk.ess.RosEciScalingConfiguration.TagsProperty> tags;
        private final java.lang.Object terminationGracePeriodSeconds;
        private final java.lang.Object volumes;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.containerGroupName = software.amazon.jsii.Kernel.get(this, "containerGroupName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.scalingConfigurationName = software.amazon.jsii.Kernel.get(this, "scalingConfigurationName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.scalingGroupId = software.amazon.jsii.Kernel.get(this, "scalingGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.securityGroupId = software.amazon.jsii.Kernel.get(this, "securityGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.acrRegistryInfos = software.amazon.jsii.Kernel.get(this, "acrRegistryInfos", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.activeDeadlineSeconds = software.amazon.jsii.Kernel.get(this, "activeDeadlineSeconds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.autoCreateEip = software.amazon.jsii.Kernel.get(this, "autoCreateEip", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.autoMatchImageCache = software.amazon.jsii.Kernel.get(this, "autoMatchImageCache", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.containers = software.amazon.jsii.Kernel.get(this, "containers", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.costOptimization = software.amazon.jsii.Kernel.get(this, "costOptimization", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.cpu = software.amazon.jsii.Kernel.get(this, "cpu", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.cpuOptionsCore = software.amazon.jsii.Kernel.get(this, "cpuOptionsCore", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.cpuOptionsThreadsPerCore = software.amazon.jsii.Kernel.get(this, "cpuOptionsThreadsPerCore", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dataCacheBucket = software.amazon.jsii.Kernel.get(this, "dataCacheBucket", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dataCacheBurstingEnabled = software.amazon.jsii.Kernel.get(this, "dataCacheBurstingEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dataCachePl = software.amazon.jsii.Kernel.get(this, "dataCachePl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dataCacheProvisionedIops = software.amazon.jsii.Kernel.get(this, "dataCacheProvisionedIops", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dnsConfigNameServers = software.amazon.jsii.Kernel.get(this, "dnsConfigNameServers", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dnsConfigOptions = software.amazon.jsii.Kernel.get(this, "dnsConfigOptions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dnsConfigSearches = software.amazon.jsii.Kernel.get(this, "dnsConfigSearches", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dnsPolicy = software.amazon.jsii.Kernel.get(this, "dnsPolicy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.egressBandwidth = software.amazon.jsii.Kernel.get(this, "egressBandwidth", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.eipBandwidth = software.amazon.jsii.Kernel.get(this, "eipBandwidth", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ephemeralStorage = software.amazon.jsii.Kernel.get(this, "ephemeralStorage", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.hostAliases = software.amazon.jsii.Kernel.get(this, "hostAliases", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.hostName = software.amazon.jsii.Kernel.get(this, "hostName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.imageRegistryCredentials = software.amazon.jsii.Kernel.get(this, "imageRegistryCredentials", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.imageSnapshotId = software.amazon.jsii.Kernel.get(this, "imageSnapshotId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ingressBandwidth = software.amazon.jsii.Kernel.get(this, "ingressBandwidth", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.initContainers = software.amazon.jsii.Kernel.get(this, "initContainers", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.instanceFamilyLevel = software.amazon.jsii.Kernel.get(this, "instanceFamilyLevel", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.instanceTypes = software.amazon.jsii.Kernel.get(this, "instanceTypes", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ipv6AddressCount = software.amazon.jsii.Kernel.get(this, "ipv6AddressCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.loadBalancerWeight = software.amazon.jsii.Kernel.get(this, "loadBalancerWeight", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.memory = software.amazon.jsii.Kernel.get(this, "memory", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ntpServers = software.amazon.jsii.Kernel.get(this, "ntpServers", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ramRoleName = software.amazon.jsii.Kernel.get(this, "ramRoleName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.restartPolicy = software.amazon.jsii.Kernel.get(this, "restartPolicy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.securityContextSysctls = software.amazon.jsii.Kernel.get(this, "securityContextSysctls", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.spotPriceLimit = software.amazon.jsii.Kernel.get(this, "spotPriceLimit", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.spotStrategy = software.amazon.jsii.Kernel.get(this, "spotStrategy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tags = software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ess.RosEciScalingConfiguration.TagsProperty.class)));
            this.terminationGracePeriodSeconds = software.amazon.jsii.Kernel.get(this, "terminationGracePeriodSeconds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.volumes = software.amazon.jsii.Kernel.get(this, "volumes", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        @SuppressWarnings("unchecked")
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.containerGroupName = java.util.Objects.requireNonNull(builder.containerGroupName, "containerGroupName is required");
            this.scalingConfigurationName = java.util.Objects.requireNonNull(builder.scalingConfigurationName, "scalingConfigurationName is required");
            this.scalingGroupId = java.util.Objects.requireNonNull(builder.scalingGroupId, "scalingGroupId is required");
            this.securityGroupId = java.util.Objects.requireNonNull(builder.securityGroupId, "securityGroupId is required");
            this.acrRegistryInfos = builder.acrRegistryInfos;
            this.activeDeadlineSeconds = builder.activeDeadlineSeconds;
            this.autoCreateEip = builder.autoCreateEip;
            this.autoMatchImageCache = builder.autoMatchImageCache;
            this.containers = builder.containers;
            this.costOptimization = builder.costOptimization;
            this.cpu = builder.cpu;
            this.cpuOptionsCore = builder.cpuOptionsCore;
            this.cpuOptionsThreadsPerCore = builder.cpuOptionsThreadsPerCore;
            this.dataCacheBucket = builder.dataCacheBucket;
            this.dataCacheBurstingEnabled = builder.dataCacheBurstingEnabled;
            this.dataCachePl = builder.dataCachePl;
            this.dataCacheProvisionedIops = builder.dataCacheProvisionedIops;
            this.dnsConfigNameServers = builder.dnsConfigNameServers;
            this.dnsConfigOptions = builder.dnsConfigOptions;
            this.dnsConfigSearches = builder.dnsConfigSearches;
            this.dnsPolicy = builder.dnsPolicy;
            this.egressBandwidth = builder.egressBandwidth;
            this.eipBandwidth = builder.eipBandwidth;
            this.ephemeralStorage = builder.ephemeralStorage;
            this.hostAliases = builder.hostAliases;
            this.hostName = builder.hostName;
            this.imageRegistryCredentials = builder.imageRegistryCredentials;
            this.imageSnapshotId = builder.imageSnapshotId;
            this.ingressBandwidth = builder.ingressBandwidth;
            this.initContainers = builder.initContainers;
            this.instanceFamilyLevel = builder.instanceFamilyLevel;
            this.instanceTypes = builder.instanceTypes;
            this.ipv6AddressCount = builder.ipv6AddressCount;
            this.loadBalancerWeight = builder.loadBalancerWeight;
            this.memory = builder.memory;
            this.ntpServers = builder.ntpServers;
            this.ramRoleName = builder.ramRoleName;
            this.resourceGroupId = builder.resourceGroupId;
            this.restartPolicy = builder.restartPolicy;
            this.securityContextSysctls = builder.securityContextSysctls;
            this.spotPriceLimit = builder.spotPriceLimit;
            this.spotStrategy = builder.spotStrategy;
            this.tags = (java.util.List<com.aliyun.ros.cdk.ess.RosEciScalingConfiguration.TagsProperty>)builder.tags;
            this.terminationGracePeriodSeconds = builder.terminationGracePeriodSeconds;
            this.volumes = builder.volumes;
        }

        @Override
        public final java.lang.Object getContainerGroupName() {
            return this.containerGroupName;
        }

        @Override
        public final java.lang.Object getScalingConfigurationName() {
            return this.scalingConfigurationName;
        }

        @Override
        public final java.lang.Object getScalingGroupId() {
            return this.scalingGroupId;
        }

        @Override
        public final java.lang.Object getSecurityGroupId() {
            return this.securityGroupId;
        }

        @Override
        public final java.lang.Object getAcrRegistryInfos() {
            return this.acrRegistryInfos;
        }

        @Override
        public final java.lang.Object getActiveDeadlineSeconds() {
            return this.activeDeadlineSeconds;
        }

        @Override
        public final java.lang.Object getAutoCreateEip() {
            return this.autoCreateEip;
        }

        @Override
        public final java.lang.Object getAutoMatchImageCache() {
            return this.autoMatchImageCache;
        }

        @Override
        public final java.lang.Object getContainers() {
            return this.containers;
        }

        @Override
        public final java.lang.Object getCostOptimization() {
            return this.costOptimization;
        }

        @Override
        public final java.lang.Object getCpu() {
            return this.cpu;
        }

        @Override
        public final java.lang.Object getCpuOptionsCore() {
            return this.cpuOptionsCore;
        }

        @Override
        public final java.lang.Object getCpuOptionsThreadsPerCore() {
            return this.cpuOptionsThreadsPerCore;
        }

        @Override
        public final java.lang.Object getDataCacheBucket() {
            return this.dataCacheBucket;
        }

        @Override
        public final java.lang.Object getDataCacheBurstingEnabled() {
            return this.dataCacheBurstingEnabled;
        }

        @Override
        public final java.lang.Object getDataCachePl() {
            return this.dataCachePl;
        }

        @Override
        public final java.lang.Object getDataCacheProvisionedIops() {
            return this.dataCacheProvisionedIops;
        }

        @Override
        public final java.lang.Object getDnsConfigNameServers() {
            return this.dnsConfigNameServers;
        }

        @Override
        public final java.lang.Object getDnsConfigOptions() {
            return this.dnsConfigOptions;
        }

        @Override
        public final java.lang.Object getDnsConfigSearches() {
            return this.dnsConfigSearches;
        }

        @Override
        public final java.lang.Object getDnsPolicy() {
            return this.dnsPolicy;
        }

        @Override
        public final java.lang.Object getEgressBandwidth() {
            return this.egressBandwidth;
        }

        @Override
        public final java.lang.Object getEipBandwidth() {
            return this.eipBandwidth;
        }

        @Override
        public final java.lang.Object getEphemeralStorage() {
            return this.ephemeralStorage;
        }

        @Override
        public final java.lang.Object getHostAliases() {
            return this.hostAliases;
        }

        @Override
        public final java.lang.Object getHostName() {
            return this.hostName;
        }

        @Override
        public final java.lang.Object getImageRegistryCredentials() {
            return this.imageRegistryCredentials;
        }

        @Override
        public final java.lang.Object getImageSnapshotId() {
            return this.imageSnapshotId;
        }

        @Override
        public final java.lang.Object getIngressBandwidth() {
            return this.ingressBandwidth;
        }

        @Override
        public final java.lang.Object getInitContainers() {
            return this.initContainers;
        }

        @Override
        public final java.lang.Object getInstanceFamilyLevel() {
            return this.instanceFamilyLevel;
        }

        @Override
        public final java.lang.Object getInstanceTypes() {
            return this.instanceTypes;
        }

        @Override
        public final java.lang.Object getIpv6AddressCount() {
            return this.ipv6AddressCount;
        }

        @Override
        public final java.lang.Object getLoadBalancerWeight() {
            return this.loadBalancerWeight;
        }

        @Override
        public final java.lang.Object getMemory() {
            return this.memory;
        }

        @Override
        public final java.lang.Object getNtpServers() {
            return this.ntpServers;
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
        public final java.lang.Object getSecurityContextSysctls() {
            return this.securityContextSysctls;
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
        public final java.util.List<com.aliyun.ros.cdk.ess.RosEciScalingConfiguration.TagsProperty> getTags() {
            return this.tags;
        }

        @Override
        public final java.lang.Object getTerminationGracePeriodSeconds() {
            return this.terminationGracePeriodSeconds;
        }

        @Override
        public final java.lang.Object getVolumes() {
            return this.volumes;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("containerGroupName", om.valueToTree(this.getContainerGroupName()));
            data.set("scalingConfigurationName", om.valueToTree(this.getScalingConfigurationName()));
            data.set("scalingGroupId", om.valueToTree(this.getScalingGroupId()));
            data.set("securityGroupId", om.valueToTree(this.getSecurityGroupId()));
            if (this.getAcrRegistryInfos() != null) {
                data.set("acrRegistryInfos", om.valueToTree(this.getAcrRegistryInfos()));
            }
            if (this.getActiveDeadlineSeconds() != null) {
                data.set("activeDeadlineSeconds", om.valueToTree(this.getActiveDeadlineSeconds()));
            }
            if (this.getAutoCreateEip() != null) {
                data.set("autoCreateEip", om.valueToTree(this.getAutoCreateEip()));
            }
            if (this.getAutoMatchImageCache() != null) {
                data.set("autoMatchImageCache", om.valueToTree(this.getAutoMatchImageCache()));
            }
            if (this.getContainers() != null) {
                data.set("containers", om.valueToTree(this.getContainers()));
            }
            if (this.getCostOptimization() != null) {
                data.set("costOptimization", om.valueToTree(this.getCostOptimization()));
            }
            if (this.getCpu() != null) {
                data.set("cpu", om.valueToTree(this.getCpu()));
            }
            if (this.getCpuOptionsCore() != null) {
                data.set("cpuOptionsCore", om.valueToTree(this.getCpuOptionsCore()));
            }
            if (this.getCpuOptionsThreadsPerCore() != null) {
                data.set("cpuOptionsThreadsPerCore", om.valueToTree(this.getCpuOptionsThreadsPerCore()));
            }
            if (this.getDataCacheBucket() != null) {
                data.set("dataCacheBucket", om.valueToTree(this.getDataCacheBucket()));
            }
            if (this.getDataCacheBurstingEnabled() != null) {
                data.set("dataCacheBurstingEnabled", om.valueToTree(this.getDataCacheBurstingEnabled()));
            }
            if (this.getDataCachePl() != null) {
                data.set("dataCachePl", om.valueToTree(this.getDataCachePl()));
            }
            if (this.getDataCacheProvisionedIops() != null) {
                data.set("dataCacheProvisionedIops", om.valueToTree(this.getDataCacheProvisionedIops()));
            }
            if (this.getDnsConfigNameServers() != null) {
                data.set("dnsConfigNameServers", om.valueToTree(this.getDnsConfigNameServers()));
            }
            if (this.getDnsConfigOptions() != null) {
                data.set("dnsConfigOptions", om.valueToTree(this.getDnsConfigOptions()));
            }
            if (this.getDnsConfigSearches() != null) {
                data.set("dnsConfigSearches", om.valueToTree(this.getDnsConfigSearches()));
            }
            if (this.getDnsPolicy() != null) {
                data.set("dnsPolicy", om.valueToTree(this.getDnsPolicy()));
            }
            if (this.getEgressBandwidth() != null) {
                data.set("egressBandwidth", om.valueToTree(this.getEgressBandwidth()));
            }
            if (this.getEipBandwidth() != null) {
                data.set("eipBandwidth", om.valueToTree(this.getEipBandwidth()));
            }
            if (this.getEphemeralStorage() != null) {
                data.set("ephemeralStorage", om.valueToTree(this.getEphemeralStorage()));
            }
            if (this.getHostAliases() != null) {
                data.set("hostAliases", om.valueToTree(this.getHostAliases()));
            }
            if (this.getHostName() != null) {
                data.set("hostName", om.valueToTree(this.getHostName()));
            }
            if (this.getImageRegistryCredentials() != null) {
                data.set("imageRegistryCredentials", om.valueToTree(this.getImageRegistryCredentials()));
            }
            if (this.getImageSnapshotId() != null) {
                data.set("imageSnapshotId", om.valueToTree(this.getImageSnapshotId()));
            }
            if (this.getIngressBandwidth() != null) {
                data.set("ingressBandwidth", om.valueToTree(this.getIngressBandwidth()));
            }
            if (this.getInitContainers() != null) {
                data.set("initContainers", om.valueToTree(this.getInitContainers()));
            }
            if (this.getInstanceFamilyLevel() != null) {
                data.set("instanceFamilyLevel", om.valueToTree(this.getInstanceFamilyLevel()));
            }
            if (this.getInstanceTypes() != null) {
                data.set("instanceTypes", om.valueToTree(this.getInstanceTypes()));
            }
            if (this.getIpv6AddressCount() != null) {
                data.set("ipv6AddressCount", om.valueToTree(this.getIpv6AddressCount()));
            }
            if (this.getLoadBalancerWeight() != null) {
                data.set("loadBalancerWeight", om.valueToTree(this.getLoadBalancerWeight()));
            }
            if (this.getMemory() != null) {
                data.set("memory", om.valueToTree(this.getMemory()));
            }
            if (this.getNtpServers() != null) {
                data.set("ntpServers", om.valueToTree(this.getNtpServers()));
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
            if (this.getSecurityContextSysctls() != null) {
                data.set("securityContextSysctls", om.valueToTree(this.getSecurityContextSysctls()));
            }
            if (this.getSpotPriceLimit() != null) {
                data.set("spotPriceLimit", om.valueToTree(this.getSpotPriceLimit()));
            }
            if (this.getSpotStrategy() != null) {
                data.set("spotStrategy", om.valueToTree(this.getSpotStrategy()));
            }
            if (this.getTags() != null) {
                data.set("tags", om.valueToTree(this.getTags()));
            }
            if (this.getTerminationGracePeriodSeconds() != null) {
                data.set("terminationGracePeriodSeconds", om.valueToTree(this.getTerminationGracePeriodSeconds()));
            }
            if (this.getVolumes() != null) {
                data.set("volumes", om.valueToTree(this.getVolumes()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ess.RosEciScalingConfigurationProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosEciScalingConfigurationProps.Jsii$Proxy that = (RosEciScalingConfigurationProps.Jsii$Proxy) o;

            if (!containerGroupName.equals(that.containerGroupName)) return false;
            if (!scalingConfigurationName.equals(that.scalingConfigurationName)) return false;
            if (!scalingGroupId.equals(that.scalingGroupId)) return false;
            if (!securityGroupId.equals(that.securityGroupId)) return false;
            if (this.acrRegistryInfos != null ? !this.acrRegistryInfos.equals(that.acrRegistryInfos) : that.acrRegistryInfos != null) return false;
            if (this.activeDeadlineSeconds != null ? !this.activeDeadlineSeconds.equals(that.activeDeadlineSeconds) : that.activeDeadlineSeconds != null) return false;
            if (this.autoCreateEip != null ? !this.autoCreateEip.equals(that.autoCreateEip) : that.autoCreateEip != null) return false;
            if (this.autoMatchImageCache != null ? !this.autoMatchImageCache.equals(that.autoMatchImageCache) : that.autoMatchImageCache != null) return false;
            if (this.containers != null ? !this.containers.equals(that.containers) : that.containers != null) return false;
            if (this.costOptimization != null ? !this.costOptimization.equals(that.costOptimization) : that.costOptimization != null) return false;
            if (this.cpu != null ? !this.cpu.equals(that.cpu) : that.cpu != null) return false;
            if (this.cpuOptionsCore != null ? !this.cpuOptionsCore.equals(that.cpuOptionsCore) : that.cpuOptionsCore != null) return false;
            if (this.cpuOptionsThreadsPerCore != null ? !this.cpuOptionsThreadsPerCore.equals(that.cpuOptionsThreadsPerCore) : that.cpuOptionsThreadsPerCore != null) return false;
            if (this.dataCacheBucket != null ? !this.dataCacheBucket.equals(that.dataCacheBucket) : that.dataCacheBucket != null) return false;
            if (this.dataCacheBurstingEnabled != null ? !this.dataCacheBurstingEnabled.equals(that.dataCacheBurstingEnabled) : that.dataCacheBurstingEnabled != null) return false;
            if (this.dataCachePl != null ? !this.dataCachePl.equals(that.dataCachePl) : that.dataCachePl != null) return false;
            if (this.dataCacheProvisionedIops != null ? !this.dataCacheProvisionedIops.equals(that.dataCacheProvisionedIops) : that.dataCacheProvisionedIops != null) return false;
            if (this.dnsConfigNameServers != null ? !this.dnsConfigNameServers.equals(that.dnsConfigNameServers) : that.dnsConfigNameServers != null) return false;
            if (this.dnsConfigOptions != null ? !this.dnsConfigOptions.equals(that.dnsConfigOptions) : that.dnsConfigOptions != null) return false;
            if (this.dnsConfigSearches != null ? !this.dnsConfigSearches.equals(that.dnsConfigSearches) : that.dnsConfigSearches != null) return false;
            if (this.dnsPolicy != null ? !this.dnsPolicy.equals(that.dnsPolicy) : that.dnsPolicy != null) return false;
            if (this.egressBandwidth != null ? !this.egressBandwidth.equals(that.egressBandwidth) : that.egressBandwidth != null) return false;
            if (this.eipBandwidth != null ? !this.eipBandwidth.equals(that.eipBandwidth) : that.eipBandwidth != null) return false;
            if (this.ephemeralStorage != null ? !this.ephemeralStorage.equals(that.ephemeralStorage) : that.ephemeralStorage != null) return false;
            if (this.hostAliases != null ? !this.hostAliases.equals(that.hostAliases) : that.hostAliases != null) return false;
            if (this.hostName != null ? !this.hostName.equals(that.hostName) : that.hostName != null) return false;
            if (this.imageRegistryCredentials != null ? !this.imageRegistryCredentials.equals(that.imageRegistryCredentials) : that.imageRegistryCredentials != null) return false;
            if (this.imageSnapshotId != null ? !this.imageSnapshotId.equals(that.imageSnapshotId) : that.imageSnapshotId != null) return false;
            if (this.ingressBandwidth != null ? !this.ingressBandwidth.equals(that.ingressBandwidth) : that.ingressBandwidth != null) return false;
            if (this.initContainers != null ? !this.initContainers.equals(that.initContainers) : that.initContainers != null) return false;
            if (this.instanceFamilyLevel != null ? !this.instanceFamilyLevel.equals(that.instanceFamilyLevel) : that.instanceFamilyLevel != null) return false;
            if (this.instanceTypes != null ? !this.instanceTypes.equals(that.instanceTypes) : that.instanceTypes != null) return false;
            if (this.ipv6AddressCount != null ? !this.ipv6AddressCount.equals(that.ipv6AddressCount) : that.ipv6AddressCount != null) return false;
            if (this.loadBalancerWeight != null ? !this.loadBalancerWeight.equals(that.loadBalancerWeight) : that.loadBalancerWeight != null) return false;
            if (this.memory != null ? !this.memory.equals(that.memory) : that.memory != null) return false;
            if (this.ntpServers != null ? !this.ntpServers.equals(that.ntpServers) : that.ntpServers != null) return false;
            if (this.ramRoleName != null ? !this.ramRoleName.equals(that.ramRoleName) : that.ramRoleName != null) return false;
            if (this.resourceGroupId != null ? !this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId != null) return false;
            if (this.restartPolicy != null ? !this.restartPolicy.equals(that.restartPolicy) : that.restartPolicy != null) return false;
            if (this.securityContextSysctls != null ? !this.securityContextSysctls.equals(that.securityContextSysctls) : that.securityContextSysctls != null) return false;
            if (this.spotPriceLimit != null ? !this.spotPriceLimit.equals(that.spotPriceLimit) : that.spotPriceLimit != null) return false;
            if (this.spotStrategy != null ? !this.spotStrategy.equals(that.spotStrategy) : that.spotStrategy != null) return false;
            if (this.tags != null ? !this.tags.equals(that.tags) : that.tags != null) return false;
            if (this.terminationGracePeriodSeconds != null ? !this.terminationGracePeriodSeconds.equals(that.terminationGracePeriodSeconds) : that.terminationGracePeriodSeconds != null) return false;
            return this.volumes != null ? this.volumes.equals(that.volumes) : that.volumes == null;
        }

        @Override
        public final int hashCode() {
            int result = this.containerGroupName.hashCode();
            result = 31 * result + (this.scalingConfigurationName.hashCode());
            result = 31 * result + (this.scalingGroupId.hashCode());
            result = 31 * result + (this.securityGroupId.hashCode());
            result = 31 * result + (this.acrRegistryInfos != null ? this.acrRegistryInfos.hashCode() : 0);
            result = 31 * result + (this.activeDeadlineSeconds != null ? this.activeDeadlineSeconds.hashCode() : 0);
            result = 31 * result + (this.autoCreateEip != null ? this.autoCreateEip.hashCode() : 0);
            result = 31 * result + (this.autoMatchImageCache != null ? this.autoMatchImageCache.hashCode() : 0);
            result = 31 * result + (this.containers != null ? this.containers.hashCode() : 0);
            result = 31 * result + (this.costOptimization != null ? this.costOptimization.hashCode() : 0);
            result = 31 * result + (this.cpu != null ? this.cpu.hashCode() : 0);
            result = 31 * result + (this.cpuOptionsCore != null ? this.cpuOptionsCore.hashCode() : 0);
            result = 31 * result + (this.cpuOptionsThreadsPerCore != null ? this.cpuOptionsThreadsPerCore.hashCode() : 0);
            result = 31 * result + (this.dataCacheBucket != null ? this.dataCacheBucket.hashCode() : 0);
            result = 31 * result + (this.dataCacheBurstingEnabled != null ? this.dataCacheBurstingEnabled.hashCode() : 0);
            result = 31 * result + (this.dataCachePl != null ? this.dataCachePl.hashCode() : 0);
            result = 31 * result + (this.dataCacheProvisionedIops != null ? this.dataCacheProvisionedIops.hashCode() : 0);
            result = 31 * result + (this.dnsConfigNameServers != null ? this.dnsConfigNameServers.hashCode() : 0);
            result = 31 * result + (this.dnsConfigOptions != null ? this.dnsConfigOptions.hashCode() : 0);
            result = 31 * result + (this.dnsConfigSearches != null ? this.dnsConfigSearches.hashCode() : 0);
            result = 31 * result + (this.dnsPolicy != null ? this.dnsPolicy.hashCode() : 0);
            result = 31 * result + (this.egressBandwidth != null ? this.egressBandwidth.hashCode() : 0);
            result = 31 * result + (this.eipBandwidth != null ? this.eipBandwidth.hashCode() : 0);
            result = 31 * result + (this.ephemeralStorage != null ? this.ephemeralStorage.hashCode() : 0);
            result = 31 * result + (this.hostAliases != null ? this.hostAliases.hashCode() : 0);
            result = 31 * result + (this.hostName != null ? this.hostName.hashCode() : 0);
            result = 31 * result + (this.imageRegistryCredentials != null ? this.imageRegistryCredentials.hashCode() : 0);
            result = 31 * result + (this.imageSnapshotId != null ? this.imageSnapshotId.hashCode() : 0);
            result = 31 * result + (this.ingressBandwidth != null ? this.ingressBandwidth.hashCode() : 0);
            result = 31 * result + (this.initContainers != null ? this.initContainers.hashCode() : 0);
            result = 31 * result + (this.instanceFamilyLevel != null ? this.instanceFamilyLevel.hashCode() : 0);
            result = 31 * result + (this.instanceTypes != null ? this.instanceTypes.hashCode() : 0);
            result = 31 * result + (this.ipv6AddressCount != null ? this.ipv6AddressCount.hashCode() : 0);
            result = 31 * result + (this.loadBalancerWeight != null ? this.loadBalancerWeight.hashCode() : 0);
            result = 31 * result + (this.memory != null ? this.memory.hashCode() : 0);
            result = 31 * result + (this.ntpServers != null ? this.ntpServers.hashCode() : 0);
            result = 31 * result + (this.ramRoleName != null ? this.ramRoleName.hashCode() : 0);
            result = 31 * result + (this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0);
            result = 31 * result + (this.restartPolicy != null ? this.restartPolicy.hashCode() : 0);
            result = 31 * result + (this.securityContextSysctls != null ? this.securityContextSysctls.hashCode() : 0);
            result = 31 * result + (this.spotPriceLimit != null ? this.spotPriceLimit.hashCode() : 0);
            result = 31 * result + (this.spotStrategy != null ? this.spotStrategy.hashCode() : 0);
            result = 31 * result + (this.tags != null ? this.tags.hashCode() : 0);
            result = 31 * result + (this.terminationGracePeriodSeconds != null ? this.terminationGracePeriodSeconds.hashCode() : 0);
            result = 31 * result + (this.volumes != null ? this.volumes.hashCode() : 0);
            return result;
        }
    }
}
