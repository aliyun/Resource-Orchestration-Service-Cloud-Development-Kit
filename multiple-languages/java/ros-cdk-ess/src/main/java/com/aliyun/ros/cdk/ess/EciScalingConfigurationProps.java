package com.aliyun.ros.cdk.ess;

/**
 * Properties for defining a <code>EciScalingConfiguration</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ess-eciscalingconfiguration
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-12-13T06:45:08.217Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ess.$Module.class, fqn = "@alicloud/ros-cdk-ess.EciScalingConfigurationProps")
@software.amazon.jsii.Jsii.Proxy(EciScalingConfigurationProps.Jsii$Proxy.class)
public interface EciScalingConfigurationProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property containerGroupName: The name of the elastic container instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getContainerGroupName();

    /**
     * Property scalingConfigurationName: The name of the scaling configuration.
     * <p>
     * The name must be 2 to 64 characters in length and can contain letters, digits, underscores (_), hyphens (-), and periods (.). The name must start with a letter or a digit.
     * The name of the scaling configuration must be unique in a region. If you do not specify this parameter, the scaling configuration ID is used.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getScalingConfigurationName();

    /**
     * Property scalingGroupId: The ID of the scaling group for which you want to create the scaling configuration.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getScalingGroupId();

    /**
     * Property securityGroupId: The ID of the security group with which you want to associate the elastic container instance.
     * <p>
     * Elastic container instances that are associated with the same security group can access each other.
     * If you do not specify a security group, the system uses the default security group in the region that you selected. Make sure that the inbound rules of the security group contain the protocols and the port numbers of the containers that you want to expose. If you do not have a default security group in the region, the system creates a default security group and adds the declared container protocols and port numbers to the inbound rules of the security group.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getSecurityGroupId();

    /**
     * Property acrRegistryInfos:.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAcrRegistryInfos() {
        return null;
    }

    /**
     * Property activeDeadlineSeconds: The validity period of the scaling configuration.
     * <p>
     * Unit: seconds.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getActiveDeadlineSeconds() {
        return null;
    }

    /**
     * Property autoCreateEip: Specifies whether to automatically create an elastic IP address (EIP) and bind the EIP to the elastic container instance.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAutoCreateEip() {
        return null;
    }

    /**
     * Property autoMatchImageCache: Specifies whether to automatically match the image cache.
     * <p>
     * Valid values:
     * true
     * false
     * Default value: false.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAutoMatchImageCache() {
        return null;
    }

    /**
     * Property containers:.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getContainers() {
        return null;
    }

    /**
     * Property costOptimization: Specifies whether to enable the Cost Optimization feature.
     * <p>
     * Valid values:
     * true
     * false
     * Default value: false.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCostOptimization() {
        return null;
    }

    /**
     * Property cpu: The number of vCPUs that you want to allocate to the elastic container instance.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCpu() {
        return null;
    }

    /**
     * Property cpuOptionsCore: The number of physical CPU cores.
     * <p>
     * You can specify this parameter for only specific instance types. For more information, see Specify custom CPU options.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCpuOptionsCore() {
        return null;
    }

    /**
     * Property cpuOptionsThreadsPerCore: The number of threads per core.
     * <p>
     * You can specify this parameter for only specific instance types. If you set this parameter to 1, Hyper-Threading is disabled. For more information, see Specify custom CPU options.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCpuOptionsThreadsPerCore() {
        return null;
    }

    /**
     * Property dataCacheBucket: The bucket that stores data caches.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDataCacheBucket() {
        return null;
    }

    /**
     * Property dataCacheBurstingEnabled: Specifies whether to enable the Performance Burst feature for the ESSD AutoPL disk used for data caching.
     * <p>
     * Valid values:
     * true
     * false
     * Default value: false.
     * Note
     * For more information about ESSD AutoPL disks, see ESSD AutoPL disks.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDataCacheBurstingEnabled() {
        return null;
    }

    /**
     * Property dataCachePl: The performance level (PL) of the disk used for data caching.
     * <p>
     * We recommend that you use ESSDs. Valid values if you use ESSDs:
     * PL0: An ESSD can provide up to 10,000 random read/write IOPS.
     * PL1: An ESSD can provide up to 50,000 random read/write IOPS.
     * PL2: An ESSD can provide up to 100,000 random read/write IOPS.
     * PL3: An ESSD can provide up to 1,000,000 random read/write IOPS.
     * Default value: PL1.
     * Note
     * For more information about ESSDs, see ESSDs.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDataCachePl() {
        return null;
    }

    /**
     * Property dataCacheProvisionedIops: The IOPS provisioned for the ESSD AutoPL disk used for data caching.
     * <p>
     * Valid values: 0 to min{50000, 1000 × Capacity - Baseline IOPS}, where Baseline IOPS = min{1800 + 50 × Capacity - 50000}.
     * Note
     * For more information about ESSD AutoPL disks, see ESSD AutoPL disks.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDataCacheProvisionedIops() {
        return null;
    }

    /**
     * Property dnsConfigNameServers: The IP addresses of the DNS servers.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDnsConfigNameServers() {
        return null;
    }

    /**
     * Property dnsConfigOptions:.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDnsConfigOptions() {
        return null;
    }

    /**
     * Property dnsConfigSearches: The search domains of the DNS server.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDnsConfigSearches() {
        return null;
    }

    /**
     * Property dnsPolicy: The Domain Name System (DNS) policy.
     * <p>
     * Valid values:
     * None: uses the DNS that is specified by DnsConfig.
     * Default: uses the DNS that is specified for the runtime environment.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDnsPolicy() {
        return null;
    }

    /**
     * Property egressBandwidth: The maximum outbound bandwidth.
     * <p>
     * Unit: bytes.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEgressBandwidth() {
        return null;
    }

    /**
     * Property eipBandwidth: The bandwidth of the EIP.
     * <p>
     * Default value: 5. Unit: Mbit/s.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEipBandwidth() {
        return null;
    }

    /**
     * Property ephemeralStorage: The size of the temporary storage space.
     * <p>
     * By default, an enhanced SSD (ESSD) of the PL1 level is used. Unit: GiB.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEphemeralStorage() {
        return null;
    }

    /**
     * Property hostAliases:.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getHostAliases() {
        return null;
    }

    /**
     * Property hostName: The hostname of the elastic container instance.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getHostName() {
        return null;
    }

    /**
     * Property imageRegistryCredentials:.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getImageRegistryCredentials() {
        return null;
    }

    /**
     * Property imageSnapshotId: The ID of the image cache snapshot.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getImageSnapshotId() {
        return null;
    }

    /**
     * Property ingressBandwidth: The maximum inbound bandwidth.
     * <p>
     * Unit: bytes.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getIngressBandwidth() {
        return null;
    }

    /**
     * Property initContainers:.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInitContainers() {
        return null;
    }

    /**
     * Property instanceFamilyLevel: The level of the instance family.
     * <p>
     * You can use this parameter to filter instance types that meet the specified criteria. This parameter takes effect only if you set CostOptimization to true. Valid values:
     * EntryLevel: entry level (shared instance types) Instance types of this level are the most cost-effective but may not provide stable computing performance. Instance types of this level are suitable for scenarios in which CPU utilization is low. For more information, see Shared instance families.
     * EnterpriseLevel: enterprise level. Instance types of this level provide stable performance and dedicated resources and are suitable for business scenarios that require high stability. For more information, see Overview of instance families.
     * CreditEntryLevel: credit entry level (burstable instance types). CPU credits are used to ensure computing performance. Instance types of this level are suitable for business scenarios in which CPU utilization is low but may fluctuate in specific scenarios. For more information, see Overview of burstable instances.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInstanceFamilyLevel() {
        return null;
    }

    /**
     * Property instanceTypes: The specified ECS instance types.
     * <p>
     * You can specify up to five ECS instance types. For more information, see Specify ECS instance types to create an elastic container instance.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInstanceTypes() {
        return null;
    }

    /**
     * Property ipv6AddressCount: The number of IPv6 addresses.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getIpv6AddressCount() {
        return null;
    }

    /**
     * Property loadBalancerWeight: The weight of the elastic container instance as a backend server.
     * <p>
     * Valid values: 1 to 100.
     * Default value: 50.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getLoadBalancerWeight() {
        return null;
    }

    /**
     * Property memory: The memory size that you want to allocate to the elastic container instance.
     * <p>
     * Unit: GiB.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getMemory() {
        return null;
    }

    /**
     * Property ntpServers: The Network Time Protocol (NTP) server.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getNtpServers() {
        return null;
    }

    /**
     * Property ramRoleName: The name of the Resource Access Management (RAM) role that you want to assign to the elastic container instance.
     * <p>
     * Elastic container instances and Elastic Compute Service (ECS) instances can share the same RAM role. For more information, see Use an instance RAM role by calling API operations.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRamRoleName() {
        return null;
    }

    /**
     * Property resourceGroupId: The ID of the resource group.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return null;
    }

    /**
     * Property restartPolicy: The restart policy of the elastic container instance.
     * <p>
     * Valid values:
     * Always: always restarts the elastic container instance.
     * Never: never restarts the elastic container instance.
     * OnFailure: restarts the elastic container instance upon failures.
     * Default value: Always.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRestartPolicy() {
        return null;
    }

    /**
     * Property securityContextSysctls:.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSecurityContextSysctls() {
        return null;
    }

    /**
     * Property spotPriceLimit: The maximum hourly price of the preemptible elastic container instance.
     * <p>
     * The value can be accurate to three decimal places.
     * If you set SpotStrategy to SpotWithPriceLimit, you must specify SpotPriceLimit.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSpotPriceLimit() {
        return null;
    }

    /**
     * Property spotStrategy: The bidding policy of the instance.
     * <p>
     * Valid values:
     * NoSpot: The instance is created as a pay-as-you-go instance.
     * SpotWithPriceLimit: The instance is created as a preemptible instance with a user-defined maximum hourly price.
     * SpotAsPriceGo: The instance is created as a preemptible instance for which the market price at the time of purchase is used as the bid price.
     * Default value: NoSpot.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSpotStrategy() {
        return null;
    }

    /**
     * Property tags:.
     */
    default @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.ess.RosEciScalingConfiguration.TagsProperty> getTags() {
        return null;
    }

    /**
     * Property terminationGracePeriodSeconds: The buffer period during which a program handles operations before the program is stopped.
     * <p>
     * Unit: seconds.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTerminationGracePeriodSeconds() {
        return null;
    }

    /**
     * Property volumes:.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getVolumes() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link EciScalingConfigurationProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link EciScalingConfigurationProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<EciScalingConfigurationProps> {
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
         * Sets the value of {@link EciScalingConfigurationProps#getContainerGroupName}
         * @param containerGroupName Property containerGroupName: The name of the elastic container instance. This parameter is required.
         * @return {@code this}
         */
        public Builder containerGroupName(java.lang.String containerGroupName) {
            this.containerGroupName = containerGroupName;
            return this;
        }

        /**
         * Sets the value of {@link EciScalingConfigurationProps#getContainerGroupName}
         * @param containerGroupName Property containerGroupName: The name of the elastic container instance. This parameter is required.
         * @return {@code this}
         */
        public Builder containerGroupName(com.aliyun.ros.cdk.core.IResolvable containerGroupName) {
            this.containerGroupName = containerGroupName;
            return this;
        }

        /**
         * Sets the value of {@link EciScalingConfigurationProps#getScalingConfigurationName}
         * @param scalingConfigurationName Property scalingConfigurationName: The name of the scaling configuration. This parameter is required.
         *                                 The name must be 2 to 64 characters in length and can contain letters, digits, underscores (_), hyphens (-), and periods (.). The name must start with a letter or a digit.
         *                                 The name of the scaling configuration must be unique in a region. If you do not specify this parameter, the scaling configuration ID is used.
         * @return {@code this}
         */
        public Builder scalingConfigurationName(java.lang.String scalingConfigurationName) {
            this.scalingConfigurationName = scalingConfigurationName;
            return this;
        }

        /**
         * Sets the value of {@link EciScalingConfigurationProps#getScalingConfigurationName}
         * @param scalingConfigurationName Property scalingConfigurationName: The name of the scaling configuration. This parameter is required.
         *                                 The name must be 2 to 64 characters in length and can contain letters, digits, underscores (_), hyphens (-), and periods (.). The name must start with a letter or a digit.
         *                                 The name of the scaling configuration must be unique in a region. If you do not specify this parameter, the scaling configuration ID is used.
         * @return {@code this}
         */
        public Builder scalingConfigurationName(com.aliyun.ros.cdk.core.IResolvable scalingConfigurationName) {
            this.scalingConfigurationName = scalingConfigurationName;
            return this;
        }

        /**
         * Sets the value of {@link EciScalingConfigurationProps#getScalingGroupId}
         * @param scalingGroupId Property scalingGroupId: The ID of the scaling group for which you want to create the scaling configuration. This parameter is required.
         * @return {@code this}
         */
        public Builder scalingGroupId(java.lang.String scalingGroupId) {
            this.scalingGroupId = scalingGroupId;
            return this;
        }

        /**
         * Sets the value of {@link EciScalingConfigurationProps#getScalingGroupId}
         * @param scalingGroupId Property scalingGroupId: The ID of the scaling group for which you want to create the scaling configuration. This parameter is required.
         * @return {@code this}
         */
        public Builder scalingGroupId(com.aliyun.ros.cdk.core.IResolvable scalingGroupId) {
            this.scalingGroupId = scalingGroupId;
            return this;
        }

        /**
         * Sets the value of {@link EciScalingConfigurationProps#getSecurityGroupId}
         * @param securityGroupId Property securityGroupId: The ID of the security group with which you want to associate the elastic container instance. This parameter is required.
         *                        Elastic container instances that are associated with the same security group can access each other.
         *                        If you do not specify a security group, the system uses the default security group in the region that you selected. Make sure that the inbound rules of the security group contain the protocols and the port numbers of the containers that you want to expose. If you do not have a default security group in the region, the system creates a default security group and adds the declared container protocols and port numbers to the inbound rules of the security group.
         * @return {@code this}
         */
        public Builder securityGroupId(java.lang.String securityGroupId) {
            this.securityGroupId = securityGroupId;
            return this;
        }

        /**
         * Sets the value of {@link EciScalingConfigurationProps#getSecurityGroupId}
         * @param securityGroupId Property securityGroupId: The ID of the security group with which you want to associate the elastic container instance. This parameter is required.
         *                        Elastic container instances that are associated with the same security group can access each other.
         *                        If you do not specify a security group, the system uses the default security group in the region that you selected. Make sure that the inbound rules of the security group contain the protocols and the port numbers of the containers that you want to expose. If you do not have a default security group in the region, the system creates a default security group and adds the declared container protocols and port numbers to the inbound rules of the security group.
         * @return {@code this}
         */
        public Builder securityGroupId(com.aliyun.ros.cdk.core.IResolvable securityGroupId) {
            this.securityGroupId = securityGroupId;
            return this;
        }

        /**
         * Sets the value of {@link EciScalingConfigurationProps#getAcrRegistryInfos}
         * @param acrRegistryInfos Property acrRegistryInfos:.
         * @return {@code this}
         */
        public Builder acrRegistryInfos(com.aliyun.ros.cdk.core.IResolvable acrRegistryInfos) {
            this.acrRegistryInfos = acrRegistryInfos;
            return this;
        }

        /**
         * Sets the value of {@link EciScalingConfigurationProps#getAcrRegistryInfos}
         * @param acrRegistryInfos Property acrRegistryInfos:.
         * @return {@code this}
         */
        public Builder acrRegistryInfos(java.util.List<? extends java.lang.Object> acrRegistryInfos) {
            this.acrRegistryInfos = acrRegistryInfos;
            return this;
        }

        /**
         * Sets the value of {@link EciScalingConfigurationProps#getActiveDeadlineSeconds}
         * @param activeDeadlineSeconds Property activeDeadlineSeconds: The validity period of the scaling configuration.
         *                              Unit: seconds.
         * @return {@code this}
         */
        public Builder activeDeadlineSeconds(java.lang.Number activeDeadlineSeconds) {
            this.activeDeadlineSeconds = activeDeadlineSeconds;
            return this;
        }

        /**
         * Sets the value of {@link EciScalingConfigurationProps#getActiveDeadlineSeconds}
         * @param activeDeadlineSeconds Property activeDeadlineSeconds: The validity period of the scaling configuration.
         *                              Unit: seconds.
         * @return {@code this}
         */
        public Builder activeDeadlineSeconds(com.aliyun.ros.cdk.core.IResolvable activeDeadlineSeconds) {
            this.activeDeadlineSeconds = activeDeadlineSeconds;
            return this;
        }

        /**
         * Sets the value of {@link EciScalingConfigurationProps#getAutoCreateEip}
         * @param autoCreateEip Property autoCreateEip: Specifies whether to automatically create an elastic IP address (EIP) and bind the EIP to the elastic container instance.
         * @return {@code this}
         */
        public Builder autoCreateEip(java.lang.Boolean autoCreateEip) {
            this.autoCreateEip = autoCreateEip;
            return this;
        }

        /**
         * Sets the value of {@link EciScalingConfigurationProps#getAutoCreateEip}
         * @param autoCreateEip Property autoCreateEip: Specifies whether to automatically create an elastic IP address (EIP) and bind the EIP to the elastic container instance.
         * @return {@code this}
         */
        public Builder autoCreateEip(com.aliyun.ros.cdk.core.IResolvable autoCreateEip) {
            this.autoCreateEip = autoCreateEip;
            return this;
        }

        /**
         * Sets the value of {@link EciScalingConfigurationProps#getAutoMatchImageCache}
         * @param autoMatchImageCache Property autoMatchImageCache: Specifies whether to automatically match the image cache.
         *                            Valid values:
         *                            true
         *                            false
         *                            Default value: false.
         * @return {@code this}
         */
        public Builder autoMatchImageCache(java.lang.Boolean autoMatchImageCache) {
            this.autoMatchImageCache = autoMatchImageCache;
            return this;
        }

        /**
         * Sets the value of {@link EciScalingConfigurationProps#getAutoMatchImageCache}
         * @param autoMatchImageCache Property autoMatchImageCache: Specifies whether to automatically match the image cache.
         *                            Valid values:
         *                            true
         *                            false
         *                            Default value: false.
         * @return {@code this}
         */
        public Builder autoMatchImageCache(com.aliyun.ros.cdk.core.IResolvable autoMatchImageCache) {
            this.autoMatchImageCache = autoMatchImageCache;
            return this;
        }

        /**
         * Sets the value of {@link EciScalingConfigurationProps#getContainers}
         * @param containers Property containers:.
         * @return {@code this}
         */
        public Builder containers(com.aliyun.ros.cdk.core.IResolvable containers) {
            this.containers = containers;
            return this;
        }

        /**
         * Sets the value of {@link EciScalingConfigurationProps#getContainers}
         * @param containers Property containers:.
         * @return {@code this}
         */
        public Builder containers(java.util.List<? extends java.lang.Object> containers) {
            this.containers = containers;
            return this;
        }

        /**
         * Sets the value of {@link EciScalingConfigurationProps#getCostOptimization}
         * @param costOptimization Property costOptimization: Specifies whether to enable the Cost Optimization feature.
         *                         Valid values:
         *                         true
         *                         false
         *                         Default value: false.
         * @return {@code this}
         */
        public Builder costOptimization(java.lang.Boolean costOptimization) {
            this.costOptimization = costOptimization;
            return this;
        }

        /**
         * Sets the value of {@link EciScalingConfigurationProps#getCostOptimization}
         * @param costOptimization Property costOptimization: Specifies whether to enable the Cost Optimization feature.
         *                         Valid values:
         *                         true
         *                         false
         *                         Default value: false.
         * @return {@code this}
         */
        public Builder costOptimization(com.aliyun.ros.cdk.core.IResolvable costOptimization) {
            this.costOptimization = costOptimization;
            return this;
        }

        /**
         * Sets the value of {@link EciScalingConfigurationProps#getCpu}
         * @param cpu Property cpu: The number of vCPUs that you want to allocate to the elastic container instance.
         * @return {@code this}
         */
        public Builder cpu(java.lang.Number cpu) {
            this.cpu = cpu;
            return this;
        }

        /**
         * Sets the value of {@link EciScalingConfigurationProps#getCpu}
         * @param cpu Property cpu: The number of vCPUs that you want to allocate to the elastic container instance.
         * @return {@code this}
         */
        public Builder cpu(com.aliyun.ros.cdk.core.IResolvable cpu) {
            this.cpu = cpu;
            return this;
        }

        /**
         * Sets the value of {@link EciScalingConfigurationProps#getCpuOptionsCore}
         * @param cpuOptionsCore Property cpuOptionsCore: The number of physical CPU cores.
         *                       You can specify this parameter for only specific instance types. For more information, see Specify custom CPU options.
         * @return {@code this}
         */
        public Builder cpuOptionsCore(java.lang.Number cpuOptionsCore) {
            this.cpuOptionsCore = cpuOptionsCore;
            return this;
        }

        /**
         * Sets the value of {@link EciScalingConfigurationProps#getCpuOptionsCore}
         * @param cpuOptionsCore Property cpuOptionsCore: The number of physical CPU cores.
         *                       You can specify this parameter for only specific instance types. For more information, see Specify custom CPU options.
         * @return {@code this}
         */
        public Builder cpuOptionsCore(com.aliyun.ros.cdk.core.IResolvable cpuOptionsCore) {
            this.cpuOptionsCore = cpuOptionsCore;
            return this;
        }

        /**
         * Sets the value of {@link EciScalingConfigurationProps#getCpuOptionsThreadsPerCore}
         * @param cpuOptionsThreadsPerCore Property cpuOptionsThreadsPerCore: The number of threads per core.
         *                                 You can specify this parameter for only specific instance types. If you set this parameter to 1, Hyper-Threading is disabled. For more information, see Specify custom CPU options.
         * @return {@code this}
         */
        public Builder cpuOptionsThreadsPerCore(java.lang.Number cpuOptionsThreadsPerCore) {
            this.cpuOptionsThreadsPerCore = cpuOptionsThreadsPerCore;
            return this;
        }

        /**
         * Sets the value of {@link EciScalingConfigurationProps#getCpuOptionsThreadsPerCore}
         * @param cpuOptionsThreadsPerCore Property cpuOptionsThreadsPerCore: The number of threads per core.
         *                                 You can specify this parameter for only specific instance types. If you set this parameter to 1, Hyper-Threading is disabled. For more information, see Specify custom CPU options.
         * @return {@code this}
         */
        public Builder cpuOptionsThreadsPerCore(com.aliyun.ros.cdk.core.IResolvable cpuOptionsThreadsPerCore) {
            this.cpuOptionsThreadsPerCore = cpuOptionsThreadsPerCore;
            return this;
        }

        /**
         * Sets the value of {@link EciScalingConfigurationProps#getDataCacheBucket}
         * @param dataCacheBucket Property dataCacheBucket: The bucket that stores data caches.
         * @return {@code this}
         */
        public Builder dataCacheBucket(java.lang.String dataCacheBucket) {
            this.dataCacheBucket = dataCacheBucket;
            return this;
        }

        /**
         * Sets the value of {@link EciScalingConfigurationProps#getDataCacheBucket}
         * @param dataCacheBucket Property dataCacheBucket: The bucket that stores data caches.
         * @return {@code this}
         */
        public Builder dataCacheBucket(com.aliyun.ros.cdk.core.IResolvable dataCacheBucket) {
            this.dataCacheBucket = dataCacheBucket;
            return this;
        }

        /**
         * Sets the value of {@link EciScalingConfigurationProps#getDataCacheBurstingEnabled}
         * @param dataCacheBurstingEnabled Property dataCacheBurstingEnabled: Specifies whether to enable the Performance Burst feature for the ESSD AutoPL disk used for data caching.
         *                                 Valid values:
         *                                 true
         *                                 false
         *                                 Default value: false.
         *                                 Note
         *                                 For more information about ESSD AutoPL disks, see ESSD AutoPL disks.
         * @return {@code this}
         */
        public Builder dataCacheBurstingEnabled(java.lang.Boolean dataCacheBurstingEnabled) {
            this.dataCacheBurstingEnabled = dataCacheBurstingEnabled;
            return this;
        }

        /**
         * Sets the value of {@link EciScalingConfigurationProps#getDataCacheBurstingEnabled}
         * @param dataCacheBurstingEnabled Property dataCacheBurstingEnabled: Specifies whether to enable the Performance Burst feature for the ESSD AutoPL disk used for data caching.
         *                                 Valid values:
         *                                 true
         *                                 false
         *                                 Default value: false.
         *                                 Note
         *                                 For more information about ESSD AutoPL disks, see ESSD AutoPL disks.
         * @return {@code this}
         */
        public Builder dataCacheBurstingEnabled(com.aliyun.ros.cdk.core.IResolvable dataCacheBurstingEnabled) {
            this.dataCacheBurstingEnabled = dataCacheBurstingEnabled;
            return this;
        }

        /**
         * Sets the value of {@link EciScalingConfigurationProps#getDataCachePl}
         * @param dataCachePl Property dataCachePl: The performance level (PL) of the disk used for data caching.
         *                    We recommend that you use ESSDs. Valid values if you use ESSDs:
         *                    PL0: An ESSD can provide up to 10,000 random read/write IOPS.
         *                    PL1: An ESSD can provide up to 50,000 random read/write IOPS.
         *                    PL2: An ESSD can provide up to 100,000 random read/write IOPS.
         *                    PL3: An ESSD can provide up to 1,000,000 random read/write IOPS.
         *                    Default value: PL1.
         *                    Note
         *                    For more information about ESSDs, see ESSDs.
         * @return {@code this}
         */
        public Builder dataCachePl(java.lang.String dataCachePl) {
            this.dataCachePl = dataCachePl;
            return this;
        }

        /**
         * Sets the value of {@link EciScalingConfigurationProps#getDataCachePl}
         * @param dataCachePl Property dataCachePl: The performance level (PL) of the disk used for data caching.
         *                    We recommend that you use ESSDs. Valid values if you use ESSDs:
         *                    PL0: An ESSD can provide up to 10,000 random read/write IOPS.
         *                    PL1: An ESSD can provide up to 50,000 random read/write IOPS.
         *                    PL2: An ESSD can provide up to 100,000 random read/write IOPS.
         *                    PL3: An ESSD can provide up to 1,000,000 random read/write IOPS.
         *                    Default value: PL1.
         *                    Note
         *                    For more information about ESSDs, see ESSDs.
         * @return {@code this}
         */
        public Builder dataCachePl(com.aliyun.ros.cdk.core.IResolvable dataCachePl) {
            this.dataCachePl = dataCachePl;
            return this;
        }

        /**
         * Sets the value of {@link EciScalingConfigurationProps#getDataCacheProvisionedIops}
         * @param dataCacheProvisionedIops Property dataCacheProvisionedIops: The IOPS provisioned for the ESSD AutoPL disk used for data caching.
         *                                 Valid values: 0 to min{50000, 1000 × Capacity - Baseline IOPS}, where Baseline IOPS = min{1800 + 50 × Capacity - 50000}.
         *                                 Note
         *                                 For more information about ESSD AutoPL disks, see ESSD AutoPL disks.
         * @return {@code this}
         */
        public Builder dataCacheProvisionedIops(java.lang.Number dataCacheProvisionedIops) {
            this.dataCacheProvisionedIops = dataCacheProvisionedIops;
            return this;
        }

        /**
         * Sets the value of {@link EciScalingConfigurationProps#getDataCacheProvisionedIops}
         * @param dataCacheProvisionedIops Property dataCacheProvisionedIops: The IOPS provisioned for the ESSD AutoPL disk used for data caching.
         *                                 Valid values: 0 to min{50000, 1000 × Capacity - Baseline IOPS}, where Baseline IOPS = min{1800 + 50 × Capacity - 50000}.
         *                                 Note
         *                                 For more information about ESSD AutoPL disks, see ESSD AutoPL disks.
         * @return {@code this}
         */
        public Builder dataCacheProvisionedIops(com.aliyun.ros.cdk.core.IResolvable dataCacheProvisionedIops) {
            this.dataCacheProvisionedIops = dataCacheProvisionedIops;
            return this;
        }

        /**
         * Sets the value of {@link EciScalingConfigurationProps#getDnsConfigNameServers}
         * @param dnsConfigNameServers Property dnsConfigNameServers: The IP addresses of the DNS servers.
         * @return {@code this}
         */
        public Builder dnsConfigNameServers(com.aliyun.ros.cdk.core.IResolvable dnsConfigNameServers) {
            this.dnsConfigNameServers = dnsConfigNameServers;
            return this;
        }

        /**
         * Sets the value of {@link EciScalingConfigurationProps#getDnsConfigNameServers}
         * @param dnsConfigNameServers Property dnsConfigNameServers: The IP addresses of the DNS servers.
         * @return {@code this}
         */
        public Builder dnsConfigNameServers(java.util.List<? extends java.lang.Object> dnsConfigNameServers) {
            this.dnsConfigNameServers = dnsConfigNameServers;
            return this;
        }

        /**
         * Sets the value of {@link EciScalingConfigurationProps#getDnsConfigOptions}
         * @param dnsConfigOptions Property dnsConfigOptions:.
         * @return {@code this}
         */
        public Builder dnsConfigOptions(com.aliyun.ros.cdk.core.IResolvable dnsConfigOptions) {
            this.dnsConfigOptions = dnsConfigOptions;
            return this;
        }

        /**
         * Sets the value of {@link EciScalingConfigurationProps#getDnsConfigOptions}
         * @param dnsConfigOptions Property dnsConfigOptions:.
         * @return {@code this}
         */
        public Builder dnsConfigOptions(java.util.List<? extends java.lang.Object> dnsConfigOptions) {
            this.dnsConfigOptions = dnsConfigOptions;
            return this;
        }

        /**
         * Sets the value of {@link EciScalingConfigurationProps#getDnsConfigSearches}
         * @param dnsConfigSearches Property dnsConfigSearches: The search domains of the DNS server.
         * @return {@code this}
         */
        public Builder dnsConfigSearches(com.aliyun.ros.cdk.core.IResolvable dnsConfigSearches) {
            this.dnsConfigSearches = dnsConfigSearches;
            return this;
        }

        /**
         * Sets the value of {@link EciScalingConfigurationProps#getDnsConfigSearches}
         * @param dnsConfigSearches Property dnsConfigSearches: The search domains of the DNS server.
         * @return {@code this}
         */
        public Builder dnsConfigSearches(java.util.List<? extends java.lang.Object> dnsConfigSearches) {
            this.dnsConfigSearches = dnsConfigSearches;
            return this;
        }

        /**
         * Sets the value of {@link EciScalingConfigurationProps#getDnsPolicy}
         * @param dnsPolicy Property dnsPolicy: The Domain Name System (DNS) policy.
         *                  Valid values:
         *                  None: uses the DNS that is specified by DnsConfig.
         *                  Default: uses the DNS that is specified for the runtime environment.
         * @return {@code this}
         */
        public Builder dnsPolicy(java.lang.String dnsPolicy) {
            this.dnsPolicy = dnsPolicy;
            return this;
        }

        /**
         * Sets the value of {@link EciScalingConfigurationProps#getDnsPolicy}
         * @param dnsPolicy Property dnsPolicy: The Domain Name System (DNS) policy.
         *                  Valid values:
         *                  None: uses the DNS that is specified by DnsConfig.
         *                  Default: uses the DNS that is specified for the runtime environment.
         * @return {@code this}
         */
        public Builder dnsPolicy(com.aliyun.ros.cdk.core.IResolvable dnsPolicy) {
            this.dnsPolicy = dnsPolicy;
            return this;
        }

        /**
         * Sets the value of {@link EciScalingConfigurationProps#getEgressBandwidth}
         * @param egressBandwidth Property egressBandwidth: The maximum outbound bandwidth.
         *                        Unit: bytes.
         * @return {@code this}
         */
        public Builder egressBandwidth(java.lang.Number egressBandwidth) {
            this.egressBandwidth = egressBandwidth;
            return this;
        }

        /**
         * Sets the value of {@link EciScalingConfigurationProps#getEgressBandwidth}
         * @param egressBandwidth Property egressBandwidth: The maximum outbound bandwidth.
         *                        Unit: bytes.
         * @return {@code this}
         */
        public Builder egressBandwidth(com.aliyun.ros.cdk.core.IResolvable egressBandwidth) {
            this.egressBandwidth = egressBandwidth;
            return this;
        }

        /**
         * Sets the value of {@link EciScalingConfigurationProps#getEipBandwidth}
         * @param eipBandwidth Property eipBandwidth: The bandwidth of the EIP.
         *                     Default value: 5. Unit: Mbit/s.
         * @return {@code this}
         */
        public Builder eipBandwidth(java.lang.Number eipBandwidth) {
            this.eipBandwidth = eipBandwidth;
            return this;
        }

        /**
         * Sets the value of {@link EciScalingConfigurationProps#getEipBandwidth}
         * @param eipBandwidth Property eipBandwidth: The bandwidth of the EIP.
         *                     Default value: 5. Unit: Mbit/s.
         * @return {@code this}
         */
        public Builder eipBandwidth(com.aliyun.ros.cdk.core.IResolvable eipBandwidth) {
            this.eipBandwidth = eipBandwidth;
            return this;
        }

        /**
         * Sets the value of {@link EciScalingConfigurationProps#getEphemeralStorage}
         * @param ephemeralStorage Property ephemeralStorage: The size of the temporary storage space.
         *                         By default, an enhanced SSD (ESSD) of the PL1 level is used. Unit: GiB.
         * @return {@code this}
         */
        public Builder ephemeralStorage(java.lang.Number ephemeralStorage) {
            this.ephemeralStorage = ephemeralStorage;
            return this;
        }

        /**
         * Sets the value of {@link EciScalingConfigurationProps#getEphemeralStorage}
         * @param ephemeralStorage Property ephemeralStorage: The size of the temporary storage space.
         *                         By default, an enhanced SSD (ESSD) of the PL1 level is used. Unit: GiB.
         * @return {@code this}
         */
        public Builder ephemeralStorage(com.aliyun.ros.cdk.core.IResolvable ephemeralStorage) {
            this.ephemeralStorage = ephemeralStorage;
            return this;
        }

        /**
         * Sets the value of {@link EciScalingConfigurationProps#getHostAliases}
         * @param hostAliases Property hostAliases:.
         * @return {@code this}
         */
        public Builder hostAliases(com.aliyun.ros.cdk.core.IResolvable hostAliases) {
            this.hostAliases = hostAliases;
            return this;
        }

        /**
         * Sets the value of {@link EciScalingConfigurationProps#getHostAliases}
         * @param hostAliases Property hostAliases:.
         * @return {@code this}
         */
        public Builder hostAliases(java.util.List<? extends java.lang.Object> hostAliases) {
            this.hostAliases = hostAliases;
            return this;
        }

        /**
         * Sets the value of {@link EciScalingConfigurationProps#getHostName}
         * @param hostName Property hostName: The hostname of the elastic container instance.
         * @return {@code this}
         */
        public Builder hostName(java.lang.String hostName) {
            this.hostName = hostName;
            return this;
        }

        /**
         * Sets the value of {@link EciScalingConfigurationProps#getHostName}
         * @param hostName Property hostName: The hostname of the elastic container instance.
         * @return {@code this}
         */
        public Builder hostName(com.aliyun.ros.cdk.core.IResolvable hostName) {
            this.hostName = hostName;
            return this;
        }

        /**
         * Sets the value of {@link EciScalingConfigurationProps#getImageRegistryCredentials}
         * @param imageRegistryCredentials Property imageRegistryCredentials:.
         * @return {@code this}
         */
        public Builder imageRegistryCredentials(com.aliyun.ros.cdk.core.IResolvable imageRegistryCredentials) {
            this.imageRegistryCredentials = imageRegistryCredentials;
            return this;
        }

        /**
         * Sets the value of {@link EciScalingConfigurationProps#getImageRegistryCredentials}
         * @param imageRegistryCredentials Property imageRegistryCredentials:.
         * @return {@code this}
         */
        public Builder imageRegistryCredentials(java.util.List<? extends java.lang.Object> imageRegistryCredentials) {
            this.imageRegistryCredentials = imageRegistryCredentials;
            return this;
        }

        /**
         * Sets the value of {@link EciScalingConfigurationProps#getImageSnapshotId}
         * @param imageSnapshotId Property imageSnapshotId: The ID of the image cache snapshot.
         * @return {@code this}
         */
        public Builder imageSnapshotId(java.lang.String imageSnapshotId) {
            this.imageSnapshotId = imageSnapshotId;
            return this;
        }

        /**
         * Sets the value of {@link EciScalingConfigurationProps#getImageSnapshotId}
         * @param imageSnapshotId Property imageSnapshotId: The ID of the image cache snapshot.
         * @return {@code this}
         */
        public Builder imageSnapshotId(com.aliyun.ros.cdk.core.IResolvable imageSnapshotId) {
            this.imageSnapshotId = imageSnapshotId;
            return this;
        }

        /**
         * Sets the value of {@link EciScalingConfigurationProps#getIngressBandwidth}
         * @param ingressBandwidth Property ingressBandwidth: The maximum inbound bandwidth.
         *                         Unit: bytes.
         * @return {@code this}
         */
        public Builder ingressBandwidth(java.lang.Number ingressBandwidth) {
            this.ingressBandwidth = ingressBandwidth;
            return this;
        }

        /**
         * Sets the value of {@link EciScalingConfigurationProps#getIngressBandwidth}
         * @param ingressBandwidth Property ingressBandwidth: The maximum inbound bandwidth.
         *                         Unit: bytes.
         * @return {@code this}
         */
        public Builder ingressBandwidth(com.aliyun.ros.cdk.core.IResolvable ingressBandwidth) {
            this.ingressBandwidth = ingressBandwidth;
            return this;
        }

        /**
         * Sets the value of {@link EciScalingConfigurationProps#getInitContainers}
         * @param initContainers Property initContainers:.
         * @return {@code this}
         */
        public Builder initContainers(com.aliyun.ros.cdk.core.IResolvable initContainers) {
            this.initContainers = initContainers;
            return this;
        }

        /**
         * Sets the value of {@link EciScalingConfigurationProps#getInitContainers}
         * @param initContainers Property initContainers:.
         * @return {@code this}
         */
        public Builder initContainers(java.util.List<? extends java.lang.Object> initContainers) {
            this.initContainers = initContainers;
            return this;
        }

        /**
         * Sets the value of {@link EciScalingConfigurationProps#getInstanceFamilyLevel}
         * @param instanceFamilyLevel Property instanceFamilyLevel: The level of the instance family.
         *                            You can use this parameter to filter instance types that meet the specified criteria. This parameter takes effect only if you set CostOptimization to true. Valid values:
         *                            EntryLevel: entry level (shared instance types) Instance types of this level are the most cost-effective but may not provide stable computing performance. Instance types of this level are suitable for scenarios in which CPU utilization is low. For more information, see Shared instance families.
         *                            EnterpriseLevel: enterprise level. Instance types of this level provide stable performance and dedicated resources and are suitable for business scenarios that require high stability. For more information, see Overview of instance families.
         *                            CreditEntryLevel: credit entry level (burstable instance types). CPU credits are used to ensure computing performance. Instance types of this level are suitable for business scenarios in which CPU utilization is low but may fluctuate in specific scenarios. For more information, see Overview of burstable instances.
         * @return {@code this}
         */
        public Builder instanceFamilyLevel(java.lang.String instanceFamilyLevel) {
            this.instanceFamilyLevel = instanceFamilyLevel;
            return this;
        }

        /**
         * Sets the value of {@link EciScalingConfigurationProps#getInstanceFamilyLevel}
         * @param instanceFamilyLevel Property instanceFamilyLevel: The level of the instance family.
         *                            You can use this parameter to filter instance types that meet the specified criteria. This parameter takes effect only if you set CostOptimization to true. Valid values:
         *                            EntryLevel: entry level (shared instance types) Instance types of this level are the most cost-effective but may not provide stable computing performance. Instance types of this level are suitable for scenarios in which CPU utilization is low. For more information, see Shared instance families.
         *                            EnterpriseLevel: enterprise level. Instance types of this level provide stable performance and dedicated resources and are suitable for business scenarios that require high stability. For more information, see Overview of instance families.
         *                            CreditEntryLevel: credit entry level (burstable instance types). CPU credits are used to ensure computing performance. Instance types of this level are suitable for business scenarios in which CPU utilization is low but may fluctuate in specific scenarios. For more information, see Overview of burstable instances.
         * @return {@code this}
         */
        public Builder instanceFamilyLevel(com.aliyun.ros.cdk.core.IResolvable instanceFamilyLevel) {
            this.instanceFamilyLevel = instanceFamilyLevel;
            return this;
        }

        /**
         * Sets the value of {@link EciScalingConfigurationProps#getInstanceTypes}
         * @param instanceTypes Property instanceTypes: The specified ECS instance types.
         *                      You can specify up to five ECS instance types. For more information, see Specify ECS instance types to create an elastic container instance.
         * @return {@code this}
         */
        public Builder instanceTypes(com.aliyun.ros.cdk.core.IResolvable instanceTypes) {
            this.instanceTypes = instanceTypes;
            return this;
        }

        /**
         * Sets the value of {@link EciScalingConfigurationProps#getInstanceTypes}
         * @param instanceTypes Property instanceTypes: The specified ECS instance types.
         *                      You can specify up to five ECS instance types. For more information, see Specify ECS instance types to create an elastic container instance.
         * @return {@code this}
         */
        public Builder instanceTypes(java.util.List<? extends java.lang.Object> instanceTypes) {
            this.instanceTypes = instanceTypes;
            return this;
        }

        /**
         * Sets the value of {@link EciScalingConfigurationProps#getIpv6AddressCount}
         * @param ipv6AddressCount Property ipv6AddressCount: The number of IPv6 addresses.
         * @return {@code this}
         */
        public Builder ipv6AddressCount(java.lang.Number ipv6AddressCount) {
            this.ipv6AddressCount = ipv6AddressCount;
            return this;
        }

        /**
         * Sets the value of {@link EciScalingConfigurationProps#getIpv6AddressCount}
         * @param ipv6AddressCount Property ipv6AddressCount: The number of IPv6 addresses.
         * @return {@code this}
         */
        public Builder ipv6AddressCount(com.aliyun.ros.cdk.core.IResolvable ipv6AddressCount) {
            this.ipv6AddressCount = ipv6AddressCount;
            return this;
        }

        /**
         * Sets the value of {@link EciScalingConfigurationProps#getLoadBalancerWeight}
         * @param loadBalancerWeight Property loadBalancerWeight: The weight of the elastic container instance as a backend server.
         *                           Valid values: 1 to 100.
         *                           Default value: 50.
         * @return {@code this}
         */
        public Builder loadBalancerWeight(java.lang.Number loadBalancerWeight) {
            this.loadBalancerWeight = loadBalancerWeight;
            return this;
        }

        /**
         * Sets the value of {@link EciScalingConfigurationProps#getLoadBalancerWeight}
         * @param loadBalancerWeight Property loadBalancerWeight: The weight of the elastic container instance as a backend server.
         *                           Valid values: 1 to 100.
         *                           Default value: 50.
         * @return {@code this}
         */
        public Builder loadBalancerWeight(com.aliyun.ros.cdk.core.IResolvable loadBalancerWeight) {
            this.loadBalancerWeight = loadBalancerWeight;
            return this;
        }

        /**
         * Sets the value of {@link EciScalingConfigurationProps#getMemory}
         * @param memory Property memory: The memory size that you want to allocate to the elastic container instance.
         *               Unit: GiB.
         * @return {@code this}
         */
        public Builder memory(java.lang.Number memory) {
            this.memory = memory;
            return this;
        }

        /**
         * Sets the value of {@link EciScalingConfigurationProps#getMemory}
         * @param memory Property memory: The memory size that you want to allocate to the elastic container instance.
         *               Unit: GiB.
         * @return {@code this}
         */
        public Builder memory(com.aliyun.ros.cdk.core.IResolvable memory) {
            this.memory = memory;
            return this;
        }

        /**
         * Sets the value of {@link EciScalingConfigurationProps#getNtpServers}
         * @param ntpServers Property ntpServers: The Network Time Protocol (NTP) server.
         * @return {@code this}
         */
        public Builder ntpServers(com.aliyun.ros.cdk.core.IResolvable ntpServers) {
            this.ntpServers = ntpServers;
            return this;
        }

        /**
         * Sets the value of {@link EciScalingConfigurationProps#getNtpServers}
         * @param ntpServers Property ntpServers: The Network Time Protocol (NTP) server.
         * @return {@code this}
         */
        public Builder ntpServers(java.util.List<? extends java.lang.Object> ntpServers) {
            this.ntpServers = ntpServers;
            return this;
        }

        /**
         * Sets the value of {@link EciScalingConfigurationProps#getRamRoleName}
         * @param ramRoleName Property ramRoleName: The name of the Resource Access Management (RAM) role that you want to assign to the elastic container instance.
         *                    Elastic container instances and Elastic Compute Service (ECS) instances can share the same RAM role. For more information, see Use an instance RAM role by calling API operations.
         * @return {@code this}
         */
        public Builder ramRoleName(java.lang.String ramRoleName) {
            this.ramRoleName = ramRoleName;
            return this;
        }

        /**
         * Sets the value of {@link EciScalingConfigurationProps#getRamRoleName}
         * @param ramRoleName Property ramRoleName: The name of the Resource Access Management (RAM) role that you want to assign to the elastic container instance.
         *                    Elastic container instances and Elastic Compute Service (ECS) instances can share the same RAM role. For more information, see Use an instance RAM role by calling API operations.
         * @return {@code this}
         */
        public Builder ramRoleName(com.aliyun.ros.cdk.core.IResolvable ramRoleName) {
            this.ramRoleName = ramRoleName;
            return this;
        }

        /**
         * Sets the value of {@link EciScalingConfigurationProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link EciScalingConfigurationProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group.
         * @return {@code this}
         */
        public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link EciScalingConfigurationProps#getRestartPolicy}
         * @param restartPolicy Property restartPolicy: The restart policy of the elastic container instance.
         *                      Valid values:
         *                      Always: always restarts the elastic container instance.
         *                      Never: never restarts the elastic container instance.
         *                      OnFailure: restarts the elastic container instance upon failures.
         *                      Default value: Always.
         * @return {@code this}
         */
        public Builder restartPolicy(java.lang.String restartPolicy) {
            this.restartPolicy = restartPolicy;
            return this;
        }

        /**
         * Sets the value of {@link EciScalingConfigurationProps#getRestartPolicy}
         * @param restartPolicy Property restartPolicy: The restart policy of the elastic container instance.
         *                      Valid values:
         *                      Always: always restarts the elastic container instance.
         *                      Never: never restarts the elastic container instance.
         *                      OnFailure: restarts the elastic container instance upon failures.
         *                      Default value: Always.
         * @return {@code this}
         */
        public Builder restartPolicy(com.aliyun.ros.cdk.core.IResolvable restartPolicy) {
            this.restartPolicy = restartPolicy;
            return this;
        }

        /**
         * Sets the value of {@link EciScalingConfigurationProps#getSecurityContextSysctls}
         * @param securityContextSysctls Property securityContextSysctls:.
         * @return {@code this}
         */
        public Builder securityContextSysctls(com.aliyun.ros.cdk.core.IResolvable securityContextSysctls) {
            this.securityContextSysctls = securityContextSysctls;
            return this;
        }

        /**
         * Sets the value of {@link EciScalingConfigurationProps#getSecurityContextSysctls}
         * @param securityContextSysctls Property securityContextSysctls:.
         * @return {@code this}
         */
        public Builder securityContextSysctls(java.util.List<? extends java.lang.Object> securityContextSysctls) {
            this.securityContextSysctls = securityContextSysctls;
            return this;
        }

        /**
         * Sets the value of {@link EciScalingConfigurationProps#getSpotPriceLimit}
         * @param spotPriceLimit Property spotPriceLimit: The maximum hourly price of the preemptible elastic container instance.
         *                       The value can be accurate to three decimal places.
         *                       If you set SpotStrategy to SpotWithPriceLimit, you must specify SpotPriceLimit.
         * @return {@code this}
         */
        public Builder spotPriceLimit(java.lang.Number spotPriceLimit) {
            this.spotPriceLimit = spotPriceLimit;
            return this;
        }

        /**
         * Sets the value of {@link EciScalingConfigurationProps#getSpotPriceLimit}
         * @param spotPriceLimit Property spotPriceLimit: The maximum hourly price of the preemptible elastic container instance.
         *                       The value can be accurate to three decimal places.
         *                       If you set SpotStrategy to SpotWithPriceLimit, you must specify SpotPriceLimit.
         * @return {@code this}
         */
        public Builder spotPriceLimit(com.aliyun.ros.cdk.core.IResolvable spotPriceLimit) {
            this.spotPriceLimit = spotPriceLimit;
            return this;
        }

        /**
         * Sets the value of {@link EciScalingConfigurationProps#getSpotStrategy}
         * @param spotStrategy Property spotStrategy: The bidding policy of the instance.
         *                     Valid values:
         *                     NoSpot: The instance is created as a pay-as-you-go instance.
         *                     SpotWithPriceLimit: The instance is created as a preemptible instance with a user-defined maximum hourly price.
         *                     SpotAsPriceGo: The instance is created as a preemptible instance for which the market price at the time of purchase is used as the bid price.
         *                     Default value: NoSpot.
         * @return {@code this}
         */
        public Builder spotStrategy(java.lang.String spotStrategy) {
            this.spotStrategy = spotStrategy;
            return this;
        }

        /**
         * Sets the value of {@link EciScalingConfigurationProps#getSpotStrategy}
         * @param spotStrategy Property spotStrategy: The bidding policy of the instance.
         *                     Valid values:
         *                     NoSpot: The instance is created as a pay-as-you-go instance.
         *                     SpotWithPriceLimit: The instance is created as a preemptible instance with a user-defined maximum hourly price.
         *                     SpotAsPriceGo: The instance is created as a preemptible instance for which the market price at the time of purchase is used as the bid price.
         *                     Default value: NoSpot.
         * @return {@code this}
         */
        public Builder spotStrategy(com.aliyun.ros.cdk.core.IResolvable spotStrategy) {
            this.spotStrategy = spotStrategy;
            return this;
        }

        /**
         * Sets the value of {@link EciScalingConfigurationProps#getTags}
         * @param tags Property tags:.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder tags(java.util.List<? extends com.aliyun.ros.cdk.ess.RosEciScalingConfiguration.TagsProperty> tags) {
            this.tags = (java.util.List<com.aliyun.ros.cdk.ess.RosEciScalingConfiguration.TagsProperty>)tags;
            return this;
        }

        /**
         * Sets the value of {@link EciScalingConfigurationProps#getTerminationGracePeriodSeconds}
         * @param terminationGracePeriodSeconds Property terminationGracePeriodSeconds: The buffer period during which a program handles operations before the program is stopped.
         *                                      Unit: seconds.
         * @return {@code this}
         */
        public Builder terminationGracePeriodSeconds(java.lang.Number terminationGracePeriodSeconds) {
            this.terminationGracePeriodSeconds = terminationGracePeriodSeconds;
            return this;
        }

        /**
         * Sets the value of {@link EciScalingConfigurationProps#getTerminationGracePeriodSeconds}
         * @param terminationGracePeriodSeconds Property terminationGracePeriodSeconds: The buffer period during which a program handles operations before the program is stopped.
         *                                      Unit: seconds.
         * @return {@code this}
         */
        public Builder terminationGracePeriodSeconds(com.aliyun.ros.cdk.core.IResolvable terminationGracePeriodSeconds) {
            this.terminationGracePeriodSeconds = terminationGracePeriodSeconds;
            return this;
        }

        /**
         * Sets the value of {@link EciScalingConfigurationProps#getVolumes}
         * @param volumes Property volumes:.
         * @return {@code this}
         */
        public Builder volumes(com.aliyun.ros.cdk.core.IResolvable volumes) {
            this.volumes = volumes;
            return this;
        }

        /**
         * Sets the value of {@link EciScalingConfigurationProps#getVolumes}
         * @param volumes Property volumes:.
         * @return {@code this}
         */
        public Builder volumes(java.util.List<? extends java.lang.Object> volumes) {
            this.volumes = volumes;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link EciScalingConfigurationProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public EciScalingConfigurationProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link EciScalingConfigurationProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements EciScalingConfigurationProps {
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
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ess.EciScalingConfigurationProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            EciScalingConfigurationProps.Jsii$Proxy that = (EciScalingConfigurationProps.Jsii$Proxy) o;

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
