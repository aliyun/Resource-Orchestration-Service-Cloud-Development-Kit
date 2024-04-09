package com.aliyun.ros.cdk.ess;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::ESS::EciScalingConfiguration</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-04-09T06:05:32.940Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ess.$Module.class, fqn = "@alicloud/ros-cdk-ess.EciScalingConfiguration")
public class EciScalingConfiguration extends com.aliyun.ros.cdk.core.Resource {

    protected EciScalingConfiguration(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected EciScalingConfiguration(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     * @param enableResourcePropertyConstraint
     */
    public EciScalingConfiguration(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ess.EciScalingConfigurationProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public EciScalingConfiguration(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ess.EciScalingConfigurationProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute ScalingConfigurationId: The ID of the elastic container instance.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrScalingConfigurationId() {
        return software.amazon.jsii.Kernel.get(this, "attrScalingConfigurationId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    protected @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    protected void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    protected @org.jetbrains.annotations.NotNull java.lang.String getId() {
        return software.amazon.jsii.Kernel.get(this, "id", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    protected void setId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "id", java.util.Objects.requireNonNull(value, "id is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ess.EciScalingConfigurationProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ess.EciScalingConfigurationProps.class));
    }

    protected void setProps(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ess.EciScalingConfigurationProps value) {
        software.amazon.jsii.Kernel.set(this, "props", java.util.Objects.requireNonNull(value, "props is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.ess.EciScalingConfiguration}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ess.EciScalingConfiguration> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope This parameter is required.
         * @param id This parameter is required.
         * @param enableResourcePropertyConstraint
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }
        /**
         * @return a new instance of {@link Builder}.
         * @param scope This parameter is required.
         * @param id This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id) {
            return new Builder(scope, id, null);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final java.lang.Boolean enableResourcePropertyConstraint;
        private final com.aliyun.ros.cdk.ess.EciScalingConfigurationProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.ess.EciScalingConfigurationProps.Builder();
        }

        /**
         * Property containerGroupName: The name of the elastic container instance.
         * <p>
         * @return {@code this}
         * @param containerGroupName Property containerGroupName: The name of the elastic container instance. This parameter is required.
         */
        public Builder containerGroupName(final java.lang.String containerGroupName) {
            this.props.containerGroupName(containerGroupName);
            return this;
        }
        /**
         * Property containerGroupName: The name of the elastic container instance.
         * <p>
         * @return {@code this}
         * @param containerGroupName Property containerGroupName: The name of the elastic container instance. This parameter is required.
         */
        public Builder containerGroupName(final com.aliyun.ros.cdk.core.IResolvable containerGroupName) {
            this.props.containerGroupName(containerGroupName);
            return this;
        }

        /**
         * Property scalingConfigurationName: The name of the scaling configuration.
         * <p>
         * The name must be 2 to 64 characters in length and can contain letters, digits, underscores (_), hyphens (-), and periods (.). The name must start with a letter or a digit.
         * The name of the scaling configuration must be unique in a region. If you do not specify this parameter, the scaling configuration ID is used.
         * <p>
         * @return {@code this}
         * @param scalingConfigurationName Property scalingConfigurationName: The name of the scaling configuration. This parameter is required.
         */
        public Builder scalingConfigurationName(final java.lang.String scalingConfigurationName) {
            this.props.scalingConfigurationName(scalingConfigurationName);
            return this;
        }
        /**
         * Property scalingConfigurationName: The name of the scaling configuration.
         * <p>
         * The name must be 2 to 64 characters in length and can contain letters, digits, underscores (_), hyphens (-), and periods (.). The name must start with a letter or a digit.
         * The name of the scaling configuration must be unique in a region. If you do not specify this parameter, the scaling configuration ID is used.
         * <p>
         * @return {@code this}
         * @param scalingConfigurationName Property scalingConfigurationName: The name of the scaling configuration. This parameter is required.
         */
        public Builder scalingConfigurationName(final com.aliyun.ros.cdk.core.IResolvable scalingConfigurationName) {
            this.props.scalingConfigurationName(scalingConfigurationName);
            return this;
        }

        /**
         * Property scalingGroupId: The ID of the scaling group for which you want to create the scaling configuration.
         * <p>
         * @return {@code this}
         * @param scalingGroupId Property scalingGroupId: The ID of the scaling group for which you want to create the scaling configuration. This parameter is required.
         */
        public Builder scalingGroupId(final java.lang.String scalingGroupId) {
            this.props.scalingGroupId(scalingGroupId);
            return this;
        }
        /**
         * Property scalingGroupId: The ID of the scaling group for which you want to create the scaling configuration.
         * <p>
         * @return {@code this}
         * @param scalingGroupId Property scalingGroupId: The ID of the scaling group for which you want to create the scaling configuration. This parameter is required.
         */
        public Builder scalingGroupId(final com.aliyun.ros.cdk.core.IResolvable scalingGroupId) {
            this.props.scalingGroupId(scalingGroupId);
            return this;
        }

        /**
         * Property securityGroupId: The ID of the security group with which you want to associate the elastic container instance.
         * <p>
         * Elastic container instances that are associated with the same security group can access each other.
         * If you do not specify a security group, the system uses the default security group in the region that you selected. Make sure that the inbound rules of the security group contain the protocols and the port numbers of the containers that you want to expose. If you do not have a default security group in the region, the system creates a default security group and adds the declared container protocols and port numbers to the inbound rules of the security group.
         * <p>
         * @return {@code this}
         * @param securityGroupId Property securityGroupId: The ID of the security group with which you want to associate the elastic container instance. This parameter is required.
         */
        public Builder securityGroupId(final java.lang.String securityGroupId) {
            this.props.securityGroupId(securityGroupId);
            return this;
        }
        /**
         * Property securityGroupId: The ID of the security group with which you want to associate the elastic container instance.
         * <p>
         * Elastic container instances that are associated with the same security group can access each other.
         * If you do not specify a security group, the system uses the default security group in the region that you selected. Make sure that the inbound rules of the security group contain the protocols and the port numbers of the containers that you want to expose. If you do not have a default security group in the region, the system creates a default security group and adds the declared container protocols and port numbers to the inbound rules of the security group.
         * <p>
         * @return {@code this}
         * @param securityGroupId Property securityGroupId: The ID of the security group with which you want to associate the elastic container instance. This parameter is required.
         */
        public Builder securityGroupId(final com.aliyun.ros.cdk.core.IResolvable securityGroupId) {
            this.props.securityGroupId(securityGroupId);
            return this;
        }

        /**
         * Property acrRegistryInfos:.
         * <p>
         * @return {@code this}
         * @param acrRegistryInfos Property acrRegistryInfos:. This parameter is required.
         */
        public Builder acrRegistryInfos(final com.aliyun.ros.cdk.core.IResolvable acrRegistryInfos) {
            this.props.acrRegistryInfos(acrRegistryInfos);
            return this;
        }
        /**
         * Property acrRegistryInfos:.
         * <p>
         * @return {@code this}
         * @param acrRegistryInfos Property acrRegistryInfos:. This parameter is required.
         */
        public Builder acrRegistryInfos(final java.util.List<? extends java.lang.Object> acrRegistryInfos) {
            this.props.acrRegistryInfos(acrRegistryInfos);
            return this;
        }

        /**
         * Property activeDeadlineSeconds: The validity period of the scaling configuration.
         * <p>
         * Unit: seconds.
         * <p>
         * @return {@code this}
         * @param activeDeadlineSeconds Property activeDeadlineSeconds: The validity period of the scaling configuration. This parameter is required.
         */
        public Builder activeDeadlineSeconds(final java.lang.Number activeDeadlineSeconds) {
            this.props.activeDeadlineSeconds(activeDeadlineSeconds);
            return this;
        }
        /**
         * Property activeDeadlineSeconds: The validity period of the scaling configuration.
         * <p>
         * Unit: seconds.
         * <p>
         * @return {@code this}
         * @param activeDeadlineSeconds Property activeDeadlineSeconds: The validity period of the scaling configuration. This parameter is required.
         */
        public Builder activeDeadlineSeconds(final com.aliyun.ros.cdk.core.IResolvable activeDeadlineSeconds) {
            this.props.activeDeadlineSeconds(activeDeadlineSeconds);
            return this;
        }

        /**
         * Property autoCreateEip: Specifies whether to automatically create an elastic IP address (EIP) and bind the EIP to the elastic container instance.
         * <p>
         * @return {@code this}
         * @param autoCreateEip Property autoCreateEip: Specifies whether to automatically create an elastic IP address (EIP) and bind the EIP to the elastic container instance. This parameter is required.
         */
        public Builder autoCreateEip(final java.lang.Boolean autoCreateEip) {
            this.props.autoCreateEip(autoCreateEip);
            return this;
        }
        /**
         * Property autoCreateEip: Specifies whether to automatically create an elastic IP address (EIP) and bind the EIP to the elastic container instance.
         * <p>
         * @return {@code this}
         * @param autoCreateEip Property autoCreateEip: Specifies whether to automatically create an elastic IP address (EIP) and bind the EIP to the elastic container instance. This parameter is required.
         */
        public Builder autoCreateEip(final com.aliyun.ros.cdk.core.IResolvable autoCreateEip) {
            this.props.autoCreateEip(autoCreateEip);
            return this;
        }

        /**
         * Property autoMatchImageCache: Specifies whether to automatically match the image cache.
         * <p>
         * Valid values:
         * true
         * false
         * Default value: false.
         * <p>
         * @return {@code this}
         * @param autoMatchImageCache Property autoMatchImageCache: Specifies whether to automatically match the image cache. This parameter is required.
         */
        public Builder autoMatchImageCache(final java.lang.Boolean autoMatchImageCache) {
            this.props.autoMatchImageCache(autoMatchImageCache);
            return this;
        }
        /**
         * Property autoMatchImageCache: Specifies whether to automatically match the image cache.
         * <p>
         * Valid values:
         * true
         * false
         * Default value: false.
         * <p>
         * @return {@code this}
         * @param autoMatchImageCache Property autoMatchImageCache: Specifies whether to automatically match the image cache. This parameter is required.
         */
        public Builder autoMatchImageCache(final com.aliyun.ros.cdk.core.IResolvable autoMatchImageCache) {
            this.props.autoMatchImageCache(autoMatchImageCache);
            return this;
        }

        /**
         * Property containers:.
         * <p>
         * @return {@code this}
         * @param containers Property containers:. This parameter is required.
         */
        public Builder containers(final com.aliyun.ros.cdk.core.IResolvable containers) {
            this.props.containers(containers);
            return this;
        }
        /**
         * Property containers:.
         * <p>
         * @return {@code this}
         * @param containers Property containers:. This parameter is required.
         */
        public Builder containers(final java.util.List<? extends java.lang.Object> containers) {
            this.props.containers(containers);
            return this;
        }

        /**
         * Property costOptimization: Specifies whether to enable the Cost Optimization feature.
         * <p>
         * Valid values:
         * true
         * false
         * Default value: false.
         * <p>
         * @return {@code this}
         * @param costOptimization Property costOptimization: Specifies whether to enable the Cost Optimization feature. This parameter is required.
         */
        public Builder costOptimization(final java.lang.Boolean costOptimization) {
            this.props.costOptimization(costOptimization);
            return this;
        }
        /**
         * Property costOptimization: Specifies whether to enable the Cost Optimization feature.
         * <p>
         * Valid values:
         * true
         * false
         * Default value: false.
         * <p>
         * @return {@code this}
         * @param costOptimization Property costOptimization: Specifies whether to enable the Cost Optimization feature. This parameter is required.
         */
        public Builder costOptimization(final com.aliyun.ros.cdk.core.IResolvable costOptimization) {
            this.props.costOptimization(costOptimization);
            return this;
        }

        /**
         * Property cpu: The number of vCPUs that you want to allocate to the elastic container instance.
         * <p>
         * @return {@code this}
         * @param cpu Property cpu: The number of vCPUs that you want to allocate to the elastic container instance. This parameter is required.
         */
        public Builder cpu(final java.lang.Number cpu) {
            this.props.cpu(cpu);
            return this;
        }
        /**
         * Property cpu: The number of vCPUs that you want to allocate to the elastic container instance.
         * <p>
         * @return {@code this}
         * @param cpu Property cpu: The number of vCPUs that you want to allocate to the elastic container instance. This parameter is required.
         */
        public Builder cpu(final com.aliyun.ros.cdk.core.IResolvable cpu) {
            this.props.cpu(cpu);
            return this;
        }

        /**
         * Property cpuOptionsCore: The number of physical CPU cores.
         * <p>
         * You can specify this parameter for only specific instance types. For more information, see Specify custom CPU options.
         * <p>
         * @return {@code this}
         * @param cpuOptionsCore Property cpuOptionsCore: The number of physical CPU cores. This parameter is required.
         */
        public Builder cpuOptionsCore(final java.lang.Number cpuOptionsCore) {
            this.props.cpuOptionsCore(cpuOptionsCore);
            return this;
        }
        /**
         * Property cpuOptionsCore: The number of physical CPU cores.
         * <p>
         * You can specify this parameter for only specific instance types. For more information, see Specify custom CPU options.
         * <p>
         * @return {@code this}
         * @param cpuOptionsCore Property cpuOptionsCore: The number of physical CPU cores. This parameter is required.
         */
        public Builder cpuOptionsCore(final com.aliyun.ros.cdk.core.IResolvable cpuOptionsCore) {
            this.props.cpuOptionsCore(cpuOptionsCore);
            return this;
        }

        /**
         * Property cpuOptionsThreadsPerCore: The number of threads per core.
         * <p>
         * You can specify this parameter for only specific instance types. If you set this parameter to 1, Hyper-Threading is disabled. For more information, see Specify custom CPU options.
         * <p>
         * @return {@code this}
         * @param cpuOptionsThreadsPerCore Property cpuOptionsThreadsPerCore: The number of threads per core. This parameter is required.
         */
        public Builder cpuOptionsThreadsPerCore(final java.lang.Number cpuOptionsThreadsPerCore) {
            this.props.cpuOptionsThreadsPerCore(cpuOptionsThreadsPerCore);
            return this;
        }
        /**
         * Property cpuOptionsThreadsPerCore: The number of threads per core.
         * <p>
         * You can specify this parameter for only specific instance types. If you set this parameter to 1, Hyper-Threading is disabled. For more information, see Specify custom CPU options.
         * <p>
         * @return {@code this}
         * @param cpuOptionsThreadsPerCore Property cpuOptionsThreadsPerCore: The number of threads per core. This parameter is required.
         */
        public Builder cpuOptionsThreadsPerCore(final com.aliyun.ros.cdk.core.IResolvable cpuOptionsThreadsPerCore) {
            this.props.cpuOptionsThreadsPerCore(cpuOptionsThreadsPerCore);
            return this;
        }

        /**
         * Property dataCacheBucket: The bucket that stores data caches.
         * <p>
         * @return {@code this}
         * @param dataCacheBucket Property dataCacheBucket: The bucket that stores data caches. This parameter is required.
         */
        public Builder dataCacheBucket(final java.lang.String dataCacheBucket) {
            this.props.dataCacheBucket(dataCacheBucket);
            return this;
        }
        /**
         * Property dataCacheBucket: The bucket that stores data caches.
         * <p>
         * @return {@code this}
         * @param dataCacheBucket Property dataCacheBucket: The bucket that stores data caches. This parameter is required.
         */
        public Builder dataCacheBucket(final com.aliyun.ros.cdk.core.IResolvable dataCacheBucket) {
            this.props.dataCacheBucket(dataCacheBucket);
            return this;
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
         * <p>
         * @return {@code this}
         * @param dataCacheBurstingEnabled Property dataCacheBurstingEnabled: Specifies whether to enable the Performance Burst feature for the ESSD AutoPL disk used for data caching. This parameter is required.
         */
        public Builder dataCacheBurstingEnabled(final java.lang.Boolean dataCacheBurstingEnabled) {
            this.props.dataCacheBurstingEnabled(dataCacheBurstingEnabled);
            return this;
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
         * <p>
         * @return {@code this}
         * @param dataCacheBurstingEnabled Property dataCacheBurstingEnabled: Specifies whether to enable the Performance Burst feature for the ESSD AutoPL disk used for data caching. This parameter is required.
         */
        public Builder dataCacheBurstingEnabled(final com.aliyun.ros.cdk.core.IResolvable dataCacheBurstingEnabled) {
            this.props.dataCacheBurstingEnabled(dataCacheBurstingEnabled);
            return this;
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
         * <p>
         * @return {@code this}
         * @param dataCachePl Property dataCachePl: The performance level (PL) of the disk used for data caching. This parameter is required.
         */
        public Builder dataCachePl(final java.lang.String dataCachePl) {
            this.props.dataCachePl(dataCachePl);
            return this;
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
         * <p>
         * @return {@code this}
         * @param dataCachePl Property dataCachePl: The performance level (PL) of the disk used for data caching. This parameter is required.
         */
        public Builder dataCachePl(final com.aliyun.ros.cdk.core.IResolvable dataCachePl) {
            this.props.dataCachePl(dataCachePl);
            return this;
        }

        /**
         * Property dataCacheProvisionedIops: The IOPS provisioned for the ESSD AutoPL disk used for data caching.
         * <p>
         * Valid values: 0 to min{50000, 1000 × Capacity - Baseline IOPS}, where Baseline IOPS = min{1800 + 50 × Capacity - 50000}.
         * Note
         * For more information about ESSD AutoPL disks, see ESSD AutoPL disks.
         * <p>
         * @return {@code this}
         * @param dataCacheProvisionedIops Property dataCacheProvisionedIops: The IOPS provisioned for the ESSD AutoPL disk used for data caching. This parameter is required.
         */
        public Builder dataCacheProvisionedIops(final java.lang.Number dataCacheProvisionedIops) {
            this.props.dataCacheProvisionedIops(dataCacheProvisionedIops);
            return this;
        }
        /**
         * Property dataCacheProvisionedIops: The IOPS provisioned for the ESSD AutoPL disk used for data caching.
         * <p>
         * Valid values: 0 to min{50000, 1000 × Capacity - Baseline IOPS}, where Baseline IOPS = min{1800 + 50 × Capacity - 50000}.
         * Note
         * For more information about ESSD AutoPL disks, see ESSD AutoPL disks.
         * <p>
         * @return {@code this}
         * @param dataCacheProvisionedIops Property dataCacheProvisionedIops: The IOPS provisioned for the ESSD AutoPL disk used for data caching. This parameter is required.
         */
        public Builder dataCacheProvisionedIops(final com.aliyun.ros.cdk.core.IResolvable dataCacheProvisionedIops) {
            this.props.dataCacheProvisionedIops(dataCacheProvisionedIops);
            return this;
        }

        /**
         * Property dnsConfigNameServers: The IP addresses of the DNS servers.
         * <p>
         * @return {@code this}
         * @param dnsConfigNameServers Property dnsConfigNameServers: The IP addresses of the DNS servers. This parameter is required.
         */
        public Builder dnsConfigNameServers(final com.aliyun.ros.cdk.core.IResolvable dnsConfigNameServers) {
            this.props.dnsConfigNameServers(dnsConfigNameServers);
            return this;
        }
        /**
         * Property dnsConfigNameServers: The IP addresses of the DNS servers.
         * <p>
         * @return {@code this}
         * @param dnsConfigNameServers Property dnsConfigNameServers: The IP addresses of the DNS servers. This parameter is required.
         */
        public Builder dnsConfigNameServers(final java.util.List<? extends java.lang.Object> dnsConfigNameServers) {
            this.props.dnsConfigNameServers(dnsConfigNameServers);
            return this;
        }

        /**
         * Property dnsConfigOptions:.
         * <p>
         * @return {@code this}
         * @param dnsConfigOptions Property dnsConfigOptions:. This parameter is required.
         */
        public Builder dnsConfigOptions(final com.aliyun.ros.cdk.core.IResolvable dnsConfigOptions) {
            this.props.dnsConfigOptions(dnsConfigOptions);
            return this;
        }
        /**
         * Property dnsConfigOptions:.
         * <p>
         * @return {@code this}
         * @param dnsConfigOptions Property dnsConfigOptions:. This parameter is required.
         */
        public Builder dnsConfigOptions(final java.util.List<? extends java.lang.Object> dnsConfigOptions) {
            this.props.dnsConfigOptions(dnsConfigOptions);
            return this;
        }

        /**
         * Property dnsConfigSearches: The search domains of the DNS server.
         * <p>
         * @return {@code this}
         * @param dnsConfigSearches Property dnsConfigSearches: The search domains of the DNS server. This parameter is required.
         */
        public Builder dnsConfigSearches(final com.aliyun.ros.cdk.core.IResolvable dnsConfigSearches) {
            this.props.dnsConfigSearches(dnsConfigSearches);
            return this;
        }
        /**
         * Property dnsConfigSearches: The search domains of the DNS server.
         * <p>
         * @return {@code this}
         * @param dnsConfigSearches Property dnsConfigSearches: The search domains of the DNS server. This parameter is required.
         */
        public Builder dnsConfigSearches(final java.util.List<? extends java.lang.Object> dnsConfigSearches) {
            this.props.dnsConfigSearches(dnsConfigSearches);
            return this;
        }

        /**
         * Property dnsPolicy: The Domain Name System (DNS) policy.
         * <p>
         * Valid values:
         * None: uses the DNS that is specified by DnsConfig.
         * Default: uses the DNS that is specified for the runtime environment.
         * <p>
         * @return {@code this}
         * @param dnsPolicy Property dnsPolicy: The Domain Name System (DNS) policy. This parameter is required.
         */
        public Builder dnsPolicy(final java.lang.String dnsPolicy) {
            this.props.dnsPolicy(dnsPolicy);
            return this;
        }
        /**
         * Property dnsPolicy: The Domain Name System (DNS) policy.
         * <p>
         * Valid values:
         * None: uses the DNS that is specified by DnsConfig.
         * Default: uses the DNS that is specified for the runtime environment.
         * <p>
         * @return {@code this}
         * @param dnsPolicy Property dnsPolicy: The Domain Name System (DNS) policy. This parameter is required.
         */
        public Builder dnsPolicy(final com.aliyun.ros.cdk.core.IResolvable dnsPolicy) {
            this.props.dnsPolicy(dnsPolicy);
            return this;
        }

        /**
         * Property egressBandwidth: The maximum outbound bandwidth.
         * <p>
         * Unit: bytes.
         * <p>
         * @return {@code this}
         * @param egressBandwidth Property egressBandwidth: The maximum outbound bandwidth. This parameter is required.
         */
        public Builder egressBandwidth(final java.lang.Number egressBandwidth) {
            this.props.egressBandwidth(egressBandwidth);
            return this;
        }
        /**
         * Property egressBandwidth: The maximum outbound bandwidth.
         * <p>
         * Unit: bytes.
         * <p>
         * @return {@code this}
         * @param egressBandwidth Property egressBandwidth: The maximum outbound bandwidth. This parameter is required.
         */
        public Builder egressBandwidth(final com.aliyun.ros.cdk.core.IResolvable egressBandwidth) {
            this.props.egressBandwidth(egressBandwidth);
            return this;
        }

        /**
         * Property eipBandwidth: The bandwidth of the EIP.
         * <p>
         * Default value: 5. Unit: Mbit/s.
         * <p>
         * @return {@code this}
         * @param eipBandwidth Property eipBandwidth: The bandwidth of the EIP. This parameter is required.
         */
        public Builder eipBandwidth(final java.lang.Number eipBandwidth) {
            this.props.eipBandwidth(eipBandwidth);
            return this;
        }
        /**
         * Property eipBandwidth: The bandwidth of the EIP.
         * <p>
         * Default value: 5. Unit: Mbit/s.
         * <p>
         * @return {@code this}
         * @param eipBandwidth Property eipBandwidth: The bandwidth of the EIP. This parameter is required.
         */
        public Builder eipBandwidth(final com.aliyun.ros.cdk.core.IResolvable eipBandwidth) {
            this.props.eipBandwidth(eipBandwidth);
            return this;
        }

        /**
         * Property ephemeralStorage: The size of the temporary storage space.
         * <p>
         * By default, an enhanced SSD (ESSD) of the PL1 level is used. Unit: GiB.
         * <p>
         * @return {@code this}
         * @param ephemeralStorage Property ephemeralStorage: The size of the temporary storage space. This parameter is required.
         */
        public Builder ephemeralStorage(final java.lang.Number ephemeralStorage) {
            this.props.ephemeralStorage(ephemeralStorage);
            return this;
        }
        /**
         * Property ephemeralStorage: The size of the temporary storage space.
         * <p>
         * By default, an enhanced SSD (ESSD) of the PL1 level is used. Unit: GiB.
         * <p>
         * @return {@code this}
         * @param ephemeralStorage Property ephemeralStorage: The size of the temporary storage space. This parameter is required.
         */
        public Builder ephemeralStorage(final com.aliyun.ros.cdk.core.IResolvable ephemeralStorage) {
            this.props.ephemeralStorage(ephemeralStorage);
            return this;
        }

        /**
         * Property hostAliases:.
         * <p>
         * @return {@code this}
         * @param hostAliases Property hostAliases:. This parameter is required.
         */
        public Builder hostAliases(final com.aliyun.ros.cdk.core.IResolvable hostAliases) {
            this.props.hostAliases(hostAliases);
            return this;
        }
        /**
         * Property hostAliases:.
         * <p>
         * @return {@code this}
         * @param hostAliases Property hostAliases:. This parameter is required.
         */
        public Builder hostAliases(final java.util.List<? extends java.lang.Object> hostAliases) {
            this.props.hostAliases(hostAliases);
            return this;
        }

        /**
         * Property hostName: The hostname of the elastic container instance.
         * <p>
         * @return {@code this}
         * @param hostName Property hostName: The hostname of the elastic container instance. This parameter is required.
         */
        public Builder hostName(final java.lang.String hostName) {
            this.props.hostName(hostName);
            return this;
        }
        /**
         * Property hostName: The hostname of the elastic container instance.
         * <p>
         * @return {@code this}
         * @param hostName Property hostName: The hostname of the elastic container instance. This parameter is required.
         */
        public Builder hostName(final com.aliyun.ros.cdk.core.IResolvable hostName) {
            this.props.hostName(hostName);
            return this;
        }

        /**
         * Property imageRegistryCredentials:.
         * <p>
         * @return {@code this}
         * @param imageRegistryCredentials Property imageRegistryCredentials:. This parameter is required.
         */
        public Builder imageRegistryCredentials(final com.aliyun.ros.cdk.core.IResolvable imageRegistryCredentials) {
            this.props.imageRegistryCredentials(imageRegistryCredentials);
            return this;
        }
        /**
         * Property imageRegistryCredentials:.
         * <p>
         * @return {@code this}
         * @param imageRegistryCredentials Property imageRegistryCredentials:. This parameter is required.
         */
        public Builder imageRegistryCredentials(final java.util.List<? extends java.lang.Object> imageRegistryCredentials) {
            this.props.imageRegistryCredentials(imageRegistryCredentials);
            return this;
        }

        /**
         * Property imageSnapshotId: The ID of the image cache snapshot.
         * <p>
         * @return {@code this}
         * @param imageSnapshotId Property imageSnapshotId: The ID of the image cache snapshot. This parameter is required.
         */
        public Builder imageSnapshotId(final java.lang.String imageSnapshotId) {
            this.props.imageSnapshotId(imageSnapshotId);
            return this;
        }
        /**
         * Property imageSnapshotId: The ID of the image cache snapshot.
         * <p>
         * @return {@code this}
         * @param imageSnapshotId Property imageSnapshotId: The ID of the image cache snapshot. This parameter is required.
         */
        public Builder imageSnapshotId(final com.aliyun.ros.cdk.core.IResolvable imageSnapshotId) {
            this.props.imageSnapshotId(imageSnapshotId);
            return this;
        }

        /**
         * Property ingressBandwidth: The maximum inbound bandwidth.
         * <p>
         * Unit: bytes.
         * <p>
         * @return {@code this}
         * @param ingressBandwidth Property ingressBandwidth: The maximum inbound bandwidth. This parameter is required.
         */
        public Builder ingressBandwidth(final java.lang.Number ingressBandwidth) {
            this.props.ingressBandwidth(ingressBandwidth);
            return this;
        }
        /**
         * Property ingressBandwidth: The maximum inbound bandwidth.
         * <p>
         * Unit: bytes.
         * <p>
         * @return {@code this}
         * @param ingressBandwidth Property ingressBandwidth: The maximum inbound bandwidth. This parameter is required.
         */
        public Builder ingressBandwidth(final com.aliyun.ros.cdk.core.IResolvable ingressBandwidth) {
            this.props.ingressBandwidth(ingressBandwidth);
            return this;
        }

        /**
         * Property initContainers:.
         * <p>
         * @return {@code this}
         * @param initContainers Property initContainers:. This parameter is required.
         */
        public Builder initContainers(final com.aliyun.ros.cdk.core.IResolvable initContainers) {
            this.props.initContainers(initContainers);
            return this;
        }
        /**
         * Property initContainers:.
         * <p>
         * @return {@code this}
         * @param initContainers Property initContainers:. This parameter is required.
         */
        public Builder initContainers(final java.util.List<? extends java.lang.Object> initContainers) {
            this.props.initContainers(initContainers);
            return this;
        }

        /**
         * Property instanceFamilyLevel: The level of the instance family.
         * <p>
         * You can use this parameter to filter instance types that meet the specified criteria. This parameter takes effect only if you set CostOptimization to true. Valid values:
         * EntryLevel: entry level (shared instance types) Instance types of this level are the most cost-effective but may not provide stable computing performance. Instance types of this level are suitable for scenarios in which CPU utilization is low. For more information, see Shared instance families.
         * EnterpriseLevel: enterprise level. Instance types of this level provide stable performance and dedicated resources and are suitable for business scenarios that require high stability. For more information, see Overview of instance families.
         * CreditEntryLevel: credit entry level (burstable instance types). CPU credits are used to ensure computing performance. Instance types of this level are suitable for business scenarios in which CPU utilization is low but may fluctuate in specific scenarios. For more information, see Overview of burstable instances.
         * <p>
         * @return {@code this}
         * @param instanceFamilyLevel Property instanceFamilyLevel: The level of the instance family. This parameter is required.
         */
        public Builder instanceFamilyLevel(final java.lang.String instanceFamilyLevel) {
            this.props.instanceFamilyLevel(instanceFamilyLevel);
            return this;
        }
        /**
         * Property instanceFamilyLevel: The level of the instance family.
         * <p>
         * You can use this parameter to filter instance types that meet the specified criteria. This parameter takes effect only if you set CostOptimization to true. Valid values:
         * EntryLevel: entry level (shared instance types) Instance types of this level are the most cost-effective but may not provide stable computing performance. Instance types of this level are suitable for scenarios in which CPU utilization is low. For more information, see Shared instance families.
         * EnterpriseLevel: enterprise level. Instance types of this level provide stable performance and dedicated resources and are suitable for business scenarios that require high stability. For more information, see Overview of instance families.
         * CreditEntryLevel: credit entry level (burstable instance types). CPU credits are used to ensure computing performance. Instance types of this level are suitable for business scenarios in which CPU utilization is low but may fluctuate in specific scenarios. For more information, see Overview of burstable instances.
         * <p>
         * @return {@code this}
         * @param instanceFamilyLevel Property instanceFamilyLevel: The level of the instance family. This parameter is required.
         */
        public Builder instanceFamilyLevel(final com.aliyun.ros.cdk.core.IResolvable instanceFamilyLevel) {
            this.props.instanceFamilyLevel(instanceFamilyLevel);
            return this;
        }

        /**
         * Property instanceTypes: The specified ECS instance types.
         * <p>
         * You can specify up to five ECS instance types. For more information, see Specify ECS instance types to create an elastic container instance.
         * <p>
         * @return {@code this}
         * @param instanceTypes Property instanceTypes: The specified ECS instance types. This parameter is required.
         */
        public Builder instanceTypes(final com.aliyun.ros.cdk.core.IResolvable instanceTypes) {
            this.props.instanceTypes(instanceTypes);
            return this;
        }
        /**
         * Property instanceTypes: The specified ECS instance types.
         * <p>
         * You can specify up to five ECS instance types. For more information, see Specify ECS instance types to create an elastic container instance.
         * <p>
         * @return {@code this}
         * @param instanceTypes Property instanceTypes: The specified ECS instance types. This parameter is required.
         */
        public Builder instanceTypes(final java.util.List<? extends java.lang.Object> instanceTypes) {
            this.props.instanceTypes(instanceTypes);
            return this;
        }

        /**
         * Property ipv6AddressCount: The number of IPv6 addresses.
         * <p>
         * @return {@code this}
         * @param ipv6AddressCount Property ipv6AddressCount: The number of IPv6 addresses. This parameter is required.
         */
        public Builder ipv6AddressCount(final java.lang.Number ipv6AddressCount) {
            this.props.ipv6AddressCount(ipv6AddressCount);
            return this;
        }
        /**
         * Property ipv6AddressCount: The number of IPv6 addresses.
         * <p>
         * @return {@code this}
         * @param ipv6AddressCount Property ipv6AddressCount: The number of IPv6 addresses. This parameter is required.
         */
        public Builder ipv6AddressCount(final com.aliyun.ros.cdk.core.IResolvable ipv6AddressCount) {
            this.props.ipv6AddressCount(ipv6AddressCount);
            return this;
        }

        /**
         * Property loadBalancerWeight: The weight of the elastic container instance as a backend server.
         * <p>
         * Valid values: 1 to 100.
         * Default value: 50.
         * <p>
         * @return {@code this}
         * @param loadBalancerWeight Property loadBalancerWeight: The weight of the elastic container instance as a backend server. This parameter is required.
         */
        public Builder loadBalancerWeight(final java.lang.Number loadBalancerWeight) {
            this.props.loadBalancerWeight(loadBalancerWeight);
            return this;
        }
        /**
         * Property loadBalancerWeight: The weight of the elastic container instance as a backend server.
         * <p>
         * Valid values: 1 to 100.
         * Default value: 50.
         * <p>
         * @return {@code this}
         * @param loadBalancerWeight Property loadBalancerWeight: The weight of the elastic container instance as a backend server. This parameter is required.
         */
        public Builder loadBalancerWeight(final com.aliyun.ros.cdk.core.IResolvable loadBalancerWeight) {
            this.props.loadBalancerWeight(loadBalancerWeight);
            return this;
        }

        /**
         * Property memory: The memory size that you want to allocate to the elastic container instance.
         * <p>
         * Unit: GiB.
         * <p>
         * @return {@code this}
         * @param memory Property memory: The memory size that you want to allocate to the elastic container instance. This parameter is required.
         */
        public Builder memory(final java.lang.Number memory) {
            this.props.memory(memory);
            return this;
        }
        /**
         * Property memory: The memory size that you want to allocate to the elastic container instance.
         * <p>
         * Unit: GiB.
         * <p>
         * @return {@code this}
         * @param memory Property memory: The memory size that you want to allocate to the elastic container instance. This parameter is required.
         */
        public Builder memory(final com.aliyun.ros.cdk.core.IResolvable memory) {
            this.props.memory(memory);
            return this;
        }

        /**
         * Property ntpServers: The Network Time Protocol (NTP) server.
         * <p>
         * @return {@code this}
         * @param ntpServers Property ntpServers: The Network Time Protocol (NTP) server. This parameter is required.
         */
        public Builder ntpServers(final com.aliyun.ros.cdk.core.IResolvable ntpServers) {
            this.props.ntpServers(ntpServers);
            return this;
        }
        /**
         * Property ntpServers: The Network Time Protocol (NTP) server.
         * <p>
         * @return {@code this}
         * @param ntpServers Property ntpServers: The Network Time Protocol (NTP) server. This parameter is required.
         */
        public Builder ntpServers(final java.util.List<? extends java.lang.Object> ntpServers) {
            this.props.ntpServers(ntpServers);
            return this;
        }

        /**
         * Property ramRoleName: The name of the Resource Access Management (RAM) role that you want to assign to the elastic container instance.
         * <p>
         * Elastic container instances and Elastic Compute Service (ECS) instances can share the same RAM role. For more information, see Use an instance RAM role by calling API operations.
         * <p>
         * @return {@code this}
         * @param ramRoleName Property ramRoleName: The name of the Resource Access Management (RAM) role that you want to assign to the elastic container instance. This parameter is required.
         */
        public Builder ramRoleName(final java.lang.String ramRoleName) {
            this.props.ramRoleName(ramRoleName);
            return this;
        }
        /**
         * Property ramRoleName: The name of the Resource Access Management (RAM) role that you want to assign to the elastic container instance.
         * <p>
         * Elastic container instances and Elastic Compute Service (ECS) instances can share the same RAM role. For more information, see Use an instance RAM role by calling API operations.
         * <p>
         * @return {@code this}
         * @param ramRoleName Property ramRoleName: The name of the Resource Access Management (RAM) role that you want to assign to the elastic container instance. This parameter is required.
         */
        public Builder ramRoleName(final com.aliyun.ros.cdk.core.IResolvable ramRoleName) {
            this.props.ramRoleName(ramRoleName);
            return this;
        }

        /**
         * Property resourceGroupId: The ID of the resource group.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group. This parameter is required.
         */
        public Builder resourceGroupId(final java.lang.String resourceGroupId) {
            this.props.resourceGroupId(resourceGroupId);
            return this;
        }
        /**
         * Property resourceGroupId: The ID of the resource group.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group. This parameter is required.
         */
        public Builder resourceGroupId(final com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.props.resourceGroupId(resourceGroupId);
            return this;
        }

        /**
         * Property restartPolicy: The restart policy of the elastic container instance.
         * <p>
         * Valid values:
         * Always: always restarts the elastic container instance.
         * Never: never restarts the elastic container instance.
         * OnFailure: restarts the elastic container instance upon failures.
         * Default value: Always.
         * <p>
         * @return {@code this}
         * @param restartPolicy Property restartPolicy: The restart policy of the elastic container instance. This parameter is required.
         */
        public Builder restartPolicy(final java.lang.String restartPolicy) {
            this.props.restartPolicy(restartPolicy);
            return this;
        }
        /**
         * Property restartPolicy: The restart policy of the elastic container instance.
         * <p>
         * Valid values:
         * Always: always restarts the elastic container instance.
         * Never: never restarts the elastic container instance.
         * OnFailure: restarts the elastic container instance upon failures.
         * Default value: Always.
         * <p>
         * @return {@code this}
         * @param restartPolicy Property restartPolicy: The restart policy of the elastic container instance. This parameter is required.
         */
        public Builder restartPolicy(final com.aliyun.ros.cdk.core.IResolvable restartPolicy) {
            this.props.restartPolicy(restartPolicy);
            return this;
        }

        /**
         * Property securityContextSysctls:.
         * <p>
         * @return {@code this}
         * @param securityContextSysctls Property securityContextSysctls:. This parameter is required.
         */
        public Builder securityContextSysctls(final com.aliyun.ros.cdk.core.IResolvable securityContextSysctls) {
            this.props.securityContextSysctls(securityContextSysctls);
            return this;
        }
        /**
         * Property securityContextSysctls:.
         * <p>
         * @return {@code this}
         * @param securityContextSysctls Property securityContextSysctls:. This parameter is required.
         */
        public Builder securityContextSysctls(final java.util.List<? extends java.lang.Object> securityContextSysctls) {
            this.props.securityContextSysctls(securityContextSysctls);
            return this;
        }

        /**
         * Property spotPriceLimit: The maximum hourly price of the preemptible elastic container instance.
         * <p>
         * The value can be accurate to three decimal places.
         * If you set SpotStrategy to SpotWithPriceLimit, you must specify SpotPriceLimit.
         * <p>
         * @return {@code this}
         * @param spotPriceLimit Property spotPriceLimit: The maximum hourly price of the preemptible elastic container instance. This parameter is required.
         */
        public Builder spotPriceLimit(final java.lang.Number spotPriceLimit) {
            this.props.spotPriceLimit(spotPriceLimit);
            return this;
        }
        /**
         * Property spotPriceLimit: The maximum hourly price of the preemptible elastic container instance.
         * <p>
         * The value can be accurate to three decimal places.
         * If you set SpotStrategy to SpotWithPriceLimit, you must specify SpotPriceLimit.
         * <p>
         * @return {@code this}
         * @param spotPriceLimit Property spotPriceLimit: The maximum hourly price of the preemptible elastic container instance. This parameter is required.
         */
        public Builder spotPriceLimit(final com.aliyun.ros.cdk.core.IResolvable spotPriceLimit) {
            this.props.spotPriceLimit(spotPriceLimit);
            return this;
        }

        /**
         * Property spotStrategy: The bidding policy of the instance.
         * <p>
         * Valid values:
         * NoSpot: The instance is created as a pay-as-you-go instance.
         * SpotWithPriceLimit: The instance is created as a preemptible instance with a user-defined maximum hourly price.
         * SpotAsPriceGo: The instance is created as a preemptible instance for which the market price at the time of purchase is used as the bid price.
         * Default value: NoSpot.
         * <p>
         * @return {@code this}
         * @param spotStrategy Property spotStrategy: The bidding policy of the instance. This parameter is required.
         */
        public Builder spotStrategy(final java.lang.String spotStrategy) {
            this.props.spotStrategy(spotStrategy);
            return this;
        }
        /**
         * Property spotStrategy: The bidding policy of the instance.
         * <p>
         * Valid values:
         * NoSpot: The instance is created as a pay-as-you-go instance.
         * SpotWithPriceLimit: The instance is created as a preemptible instance with a user-defined maximum hourly price.
         * SpotAsPriceGo: The instance is created as a preemptible instance for which the market price at the time of purchase is used as the bid price.
         * Default value: NoSpot.
         * <p>
         * @return {@code this}
         * @param spotStrategy Property spotStrategy: The bidding policy of the instance. This parameter is required.
         */
        public Builder spotStrategy(final com.aliyun.ros.cdk.core.IResolvable spotStrategy) {
            this.props.spotStrategy(spotStrategy);
            return this;
        }

        /**
         * Property tags:.
         * <p>
         * @return {@code this}
         * @param tags Property tags:. This parameter is required.
         */
        public Builder tags(final java.util.List<? extends com.aliyun.ros.cdk.ess.RosEciScalingConfiguration.TagsProperty> tags) {
            this.props.tags(tags);
            return this;
        }

        /**
         * Property terminationGracePeriodSeconds: The buffer period during which a program handles operations before the program is stopped.
         * <p>
         * Unit: seconds.
         * <p>
         * @return {@code this}
         * @param terminationGracePeriodSeconds Property terminationGracePeriodSeconds: The buffer period during which a program handles operations before the program is stopped. This parameter is required.
         */
        public Builder terminationGracePeriodSeconds(final java.lang.Number terminationGracePeriodSeconds) {
            this.props.terminationGracePeriodSeconds(terminationGracePeriodSeconds);
            return this;
        }
        /**
         * Property terminationGracePeriodSeconds: The buffer period during which a program handles operations before the program is stopped.
         * <p>
         * Unit: seconds.
         * <p>
         * @return {@code this}
         * @param terminationGracePeriodSeconds Property terminationGracePeriodSeconds: The buffer period during which a program handles operations before the program is stopped. This parameter is required.
         */
        public Builder terminationGracePeriodSeconds(final com.aliyun.ros.cdk.core.IResolvable terminationGracePeriodSeconds) {
            this.props.terminationGracePeriodSeconds(terminationGracePeriodSeconds);
            return this;
        }

        /**
         * Property volumes:.
         * <p>
         * @return {@code this}
         * @param volumes Property volumes:. This parameter is required.
         */
        public Builder volumes(final com.aliyun.ros.cdk.core.IResolvable volumes) {
            this.props.volumes(volumes);
            return this;
        }
        /**
         * Property volumes:.
         * <p>
         * @return {@code this}
         * @param volumes Property volumes:. This parameter is required.
         */
        public Builder volumes(final java.util.List<? extends java.lang.Object> volumes) {
            this.props.volumes(volumes);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.ess.EciScalingConfiguration}.
         */
        @Override
        public com.aliyun.ros.cdk.ess.EciScalingConfiguration build() {
            return new com.aliyun.ros.cdk.ess.EciScalingConfiguration(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
