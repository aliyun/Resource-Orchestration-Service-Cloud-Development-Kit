package com.aliyun.ros.cdk.ess;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::ESS::EciScalingConfiguration</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-04-09T06:05:32.972Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ess.$Module.class, fqn = "@alicloud/ros-cdk-ess.RosEciScalingConfiguration")
public class RosEciScalingConfiguration extends com.aliyun.ros.cdk.core.RosResource {

    protected RosEciScalingConfiguration(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosEciScalingConfiguration(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.ess.RosEciScalingConfiguration.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosEciScalingConfiguration(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ess.RosEciScalingConfigurationProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), java.util.Objects.requireNonNull(enableResourcePropertyConstraint, "enableResourcePropertyConstraint is required") });
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> renderProperties(final @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> props) {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.call(this, "renderProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class)), new Object[] { java.util.Objects.requireNonNull(props, "props is required") }));
    }

    /**
     * The resource type name for this resource class.
     */
    public final static java.lang.String ROS_RESOURCE_TYPE_NAME;

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrScalingConfigurationId() {
        return software.amazon.jsii.Kernel.get(this, "attrScalingConfigurationId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getContainerGroupName() {
        return software.amazon.jsii.Kernel.get(this, "containerGroupName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setContainerGroupName(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "containerGroupName", java.util.Objects.requireNonNull(value, "containerGroupName is required"));
    }

    /**
     */
    public void setContainerGroupName(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "containerGroupName", java.util.Objects.requireNonNull(value, "containerGroupName is required"));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getScalingConfigurationName() {
        return software.amazon.jsii.Kernel.get(this, "scalingConfigurationName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setScalingConfigurationName(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "scalingConfigurationName", java.util.Objects.requireNonNull(value, "scalingConfigurationName is required"));
    }

    /**
     */
    public void setScalingConfigurationName(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "scalingConfigurationName", java.util.Objects.requireNonNull(value, "scalingConfigurationName is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getScalingGroupId() {
        return software.amazon.jsii.Kernel.get(this, "scalingGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setScalingGroupId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "scalingGroupId", java.util.Objects.requireNonNull(value, "scalingGroupId is required"));
    }

    /**
     */
    public void setScalingGroupId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "scalingGroupId", java.util.Objects.requireNonNull(value, "scalingGroupId is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getSecurityGroupId() {
        return software.amazon.jsii.Kernel.get(this, "securityGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSecurityGroupId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "securityGroupId", java.util.Objects.requireNonNull(value, "securityGroupId is required"));
    }

    /**
     */
    public void setSecurityGroupId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "securityGroupId", java.util.Objects.requireNonNull(value, "securityGroupId is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getAcrRegistryInfos() {
        return software.amazon.jsii.Kernel.get(this, "acrRegistryInfos", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAcrRegistryInfos(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "acrRegistryInfos", value);
    }

    /**
     */
    public void setAcrRegistryInfos(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
                if (
                     !(__val_ac66f0 instanceof com.aliyun.ros.cdk.core.IResolvable)
                    && !(__val_ac66f0 instanceof com.aliyun.ros.cdk.ess.RosEciScalingConfiguration.AcrRegistryInfosProperty)
                    && !(__val_ac66f0.getClass().equals(software.amazon.jsii.JsiiObject.class))
                ) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("value").append(".get(").append(__idx_ac66f0).append(")")
                            .append(" to be one of: com.aliyun.ros.cdk.core.IResolvable, com.aliyun.ros.cdk.ess.RosEciScalingConfiguration.AcrRegistryInfosProperty; received ")
                            .append(__val_ac66f0.getClass()).toString());
                }
            }
        }
        software.amazon.jsii.Kernel.set(this, "acrRegistryInfos", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getActiveDeadlineSeconds() {
        return software.amazon.jsii.Kernel.get(this, "activeDeadlineSeconds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setActiveDeadlineSeconds(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "activeDeadlineSeconds", value);
    }

    /**
     */
    public void setActiveDeadlineSeconds(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "activeDeadlineSeconds", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getAutoCreateEip() {
        return software.amazon.jsii.Kernel.get(this, "autoCreateEip", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAutoCreateEip(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "autoCreateEip", value);
    }

    /**
     */
    public void setAutoCreateEip(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "autoCreateEip", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getAutoMatchImageCache() {
        return software.amazon.jsii.Kernel.get(this, "autoMatchImageCache", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAutoMatchImageCache(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "autoMatchImageCache", value);
    }

    /**
     */
    public void setAutoMatchImageCache(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "autoMatchImageCache", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getContainers() {
        return software.amazon.jsii.Kernel.get(this, "containers", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setContainers(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "containers", value);
    }

    /**
     */
    public void setContainers(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
                if (
                     !(__val_ac66f0 instanceof com.aliyun.ros.cdk.core.IResolvable)
                    && !(__val_ac66f0 instanceof com.aliyun.ros.cdk.ess.RosEciScalingConfiguration.ContainersProperty)
                    && !(__val_ac66f0.getClass().equals(software.amazon.jsii.JsiiObject.class))
                ) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("value").append(".get(").append(__idx_ac66f0).append(")")
                            .append(" to be one of: com.aliyun.ros.cdk.core.IResolvable, com.aliyun.ros.cdk.ess.RosEciScalingConfiguration.ContainersProperty; received ")
                            .append(__val_ac66f0.getClass()).toString());
                }
            }
        }
        software.amazon.jsii.Kernel.set(this, "containers", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getCostOptimization() {
        return software.amazon.jsii.Kernel.get(this, "costOptimization", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setCostOptimization(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "costOptimization", value);
    }

    /**
     */
    public void setCostOptimization(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "costOptimization", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getCpu() {
        return software.amazon.jsii.Kernel.get(this, "cpu", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setCpu(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "cpu", value);
    }

    /**
     */
    public void setCpu(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "cpu", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getCpuOptionsCore() {
        return software.amazon.jsii.Kernel.get(this, "cpuOptionsCore", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setCpuOptionsCore(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "cpuOptionsCore", value);
    }

    /**
     */
    public void setCpuOptionsCore(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "cpuOptionsCore", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getCpuOptionsThreadsPerCore() {
        return software.amazon.jsii.Kernel.get(this, "cpuOptionsThreadsPerCore", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setCpuOptionsThreadsPerCore(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "cpuOptionsThreadsPerCore", value);
    }

    /**
     */
    public void setCpuOptionsThreadsPerCore(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "cpuOptionsThreadsPerCore", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDataCacheBucket() {
        return software.amazon.jsii.Kernel.get(this, "dataCacheBucket", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDataCacheBucket(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "dataCacheBucket", value);
    }

    /**
     */
    public void setDataCacheBucket(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "dataCacheBucket", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDataCacheBurstingEnabled() {
        return software.amazon.jsii.Kernel.get(this, "dataCacheBurstingEnabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDataCacheBurstingEnabled(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "dataCacheBurstingEnabled", value);
    }

    /**
     */
    public void setDataCacheBurstingEnabled(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "dataCacheBurstingEnabled", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDataCachePl() {
        return software.amazon.jsii.Kernel.get(this, "dataCachePl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDataCachePl(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "dataCachePl", value);
    }

    /**
     */
    public void setDataCachePl(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "dataCachePl", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDataCacheProvisionedIops() {
        return software.amazon.jsii.Kernel.get(this, "dataCacheProvisionedIops", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDataCacheProvisionedIops(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "dataCacheProvisionedIops", value);
    }

    /**
     */
    public void setDataCacheProvisionedIops(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "dataCacheProvisionedIops", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDnsConfigNameServers() {
        return software.amazon.jsii.Kernel.get(this, "dnsConfigNameServers", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDnsConfigNameServers(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "dnsConfigNameServers", value);
    }

    /**
     */
    public void setDnsConfigNameServers(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
                if (
                     !(__val_ac66f0 instanceof java.lang.String)
                    && !(__val_ac66f0 instanceof com.aliyun.ros.cdk.core.IResolvable)
                    && !(__val_ac66f0.getClass().equals(software.amazon.jsii.JsiiObject.class))
                ) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("value").append(".get(").append(__idx_ac66f0).append(")")
                            .append(" to be one of: java.lang.String, com.aliyun.ros.cdk.core.IResolvable; received ")
                            .append(__val_ac66f0.getClass()).toString());
                }
            }
        }
        software.amazon.jsii.Kernel.set(this, "dnsConfigNameServers", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDnsConfigOptions() {
        return software.amazon.jsii.Kernel.get(this, "dnsConfigOptions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDnsConfigOptions(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "dnsConfigOptions", value);
    }

    /**
     */
    public void setDnsConfigOptions(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
                if (
                     !(__val_ac66f0 instanceof com.aliyun.ros.cdk.core.IResolvable)
                    && !(__val_ac66f0 instanceof com.aliyun.ros.cdk.ess.RosEciScalingConfiguration.DnsConfigOptionsProperty)
                    && !(__val_ac66f0.getClass().equals(software.amazon.jsii.JsiiObject.class))
                ) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("value").append(".get(").append(__idx_ac66f0).append(")")
                            .append(" to be one of: com.aliyun.ros.cdk.core.IResolvable, com.aliyun.ros.cdk.ess.RosEciScalingConfiguration.DnsConfigOptionsProperty; received ")
                            .append(__val_ac66f0.getClass()).toString());
                }
            }
        }
        software.amazon.jsii.Kernel.set(this, "dnsConfigOptions", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDnsConfigSearches() {
        return software.amazon.jsii.Kernel.get(this, "dnsConfigSearches", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDnsConfigSearches(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "dnsConfigSearches", value);
    }

    /**
     */
    public void setDnsConfigSearches(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
                if (
                     !(__val_ac66f0 instanceof java.lang.String)
                    && !(__val_ac66f0 instanceof com.aliyun.ros.cdk.core.IResolvable)
                    && !(__val_ac66f0.getClass().equals(software.amazon.jsii.JsiiObject.class))
                ) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("value").append(".get(").append(__idx_ac66f0).append(")")
                            .append(" to be one of: java.lang.String, com.aliyun.ros.cdk.core.IResolvable; received ")
                            .append(__val_ac66f0.getClass()).toString());
                }
            }
        }
        software.amazon.jsii.Kernel.set(this, "dnsConfigSearches", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDnsPolicy() {
        return software.amazon.jsii.Kernel.get(this, "dnsPolicy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDnsPolicy(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "dnsPolicy", value);
    }

    /**
     */
    public void setDnsPolicy(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "dnsPolicy", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getEgressBandwidth() {
        return software.amazon.jsii.Kernel.get(this, "egressBandwidth", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setEgressBandwidth(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "egressBandwidth", value);
    }

    /**
     */
    public void setEgressBandwidth(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "egressBandwidth", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getEipBandwidth() {
        return software.amazon.jsii.Kernel.get(this, "eipBandwidth", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setEipBandwidth(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "eipBandwidth", value);
    }

    /**
     */
    public void setEipBandwidth(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "eipBandwidth", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getEphemeralStorage() {
        return software.amazon.jsii.Kernel.get(this, "ephemeralStorage", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setEphemeralStorage(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "ephemeralStorage", value);
    }

    /**
     */
    public void setEphemeralStorage(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "ephemeralStorage", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getHostAliases() {
        return software.amazon.jsii.Kernel.get(this, "hostAliases", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setHostAliases(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "hostAliases", value);
    }

    /**
     */
    public void setHostAliases(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
                if (
                     !(__val_ac66f0 instanceof com.aliyun.ros.cdk.core.IResolvable)
                    && !(__val_ac66f0 instanceof com.aliyun.ros.cdk.ess.RosEciScalingConfiguration.HostAliasesProperty)
                    && !(__val_ac66f0.getClass().equals(software.amazon.jsii.JsiiObject.class))
                ) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("value").append(".get(").append(__idx_ac66f0).append(")")
                            .append(" to be one of: com.aliyun.ros.cdk.core.IResolvable, com.aliyun.ros.cdk.ess.RosEciScalingConfiguration.HostAliasesProperty; received ")
                            .append(__val_ac66f0.getClass()).toString());
                }
            }
        }
        software.amazon.jsii.Kernel.set(this, "hostAliases", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getHostName() {
        return software.amazon.jsii.Kernel.get(this, "hostName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setHostName(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "hostName", value);
    }

    /**
     */
    public void setHostName(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "hostName", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getImageRegistryCredentials() {
        return software.amazon.jsii.Kernel.get(this, "imageRegistryCredentials", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setImageRegistryCredentials(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "imageRegistryCredentials", value);
    }

    /**
     */
    public void setImageRegistryCredentials(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
                if (
                     !(__val_ac66f0 instanceof com.aliyun.ros.cdk.core.IResolvable)
                    && !(__val_ac66f0 instanceof com.aliyun.ros.cdk.ess.RosEciScalingConfiguration.ImageRegistryCredentialsProperty)
                    && !(__val_ac66f0.getClass().equals(software.amazon.jsii.JsiiObject.class))
                ) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("value").append(".get(").append(__idx_ac66f0).append(")")
                            .append(" to be one of: com.aliyun.ros.cdk.core.IResolvable, com.aliyun.ros.cdk.ess.RosEciScalingConfiguration.ImageRegistryCredentialsProperty; received ")
                            .append(__val_ac66f0.getClass()).toString());
                }
            }
        }
        software.amazon.jsii.Kernel.set(this, "imageRegistryCredentials", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getImageSnapshotId() {
        return software.amazon.jsii.Kernel.get(this, "imageSnapshotId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setImageSnapshotId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "imageSnapshotId", value);
    }

    /**
     */
    public void setImageSnapshotId(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "imageSnapshotId", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getIngressBandwidth() {
        return software.amazon.jsii.Kernel.get(this, "ingressBandwidth", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setIngressBandwidth(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "ingressBandwidth", value);
    }

    /**
     */
    public void setIngressBandwidth(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "ingressBandwidth", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getInitContainers() {
        return software.amazon.jsii.Kernel.get(this, "initContainers", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setInitContainers(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "initContainers", value);
    }

    /**
     */
    public void setInitContainers(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
                if (
                     !(__val_ac66f0 instanceof com.aliyun.ros.cdk.core.IResolvable)
                    && !(__val_ac66f0 instanceof com.aliyun.ros.cdk.ess.RosEciScalingConfiguration.InitContainersProperty)
                    && !(__val_ac66f0.getClass().equals(software.amazon.jsii.JsiiObject.class))
                ) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("value").append(".get(").append(__idx_ac66f0).append(")")
                            .append(" to be one of: com.aliyun.ros.cdk.core.IResolvable, com.aliyun.ros.cdk.ess.RosEciScalingConfiguration.InitContainersProperty; received ")
                            .append(__val_ac66f0.getClass()).toString());
                }
            }
        }
        software.amazon.jsii.Kernel.set(this, "initContainers", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getInstanceFamilyLevel() {
        return software.amazon.jsii.Kernel.get(this, "instanceFamilyLevel", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setInstanceFamilyLevel(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "instanceFamilyLevel", value);
    }

    /**
     */
    public void setInstanceFamilyLevel(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "instanceFamilyLevel", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getInstanceTypes() {
        return software.amazon.jsii.Kernel.get(this, "instanceTypes", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setInstanceTypes(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "instanceTypes", value);
    }

    /**
     */
    public void setInstanceTypes(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
                if (
                     !(__val_ac66f0 instanceof java.lang.String)
                    && !(__val_ac66f0 instanceof com.aliyun.ros.cdk.core.IResolvable)
                    && !(__val_ac66f0.getClass().equals(software.amazon.jsii.JsiiObject.class))
                ) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("value").append(".get(").append(__idx_ac66f0).append(")")
                            .append(" to be one of: java.lang.String, com.aliyun.ros.cdk.core.IResolvable; received ")
                            .append(__val_ac66f0.getClass()).toString());
                }
            }
        }
        software.amazon.jsii.Kernel.set(this, "instanceTypes", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getIpv6AddressCount() {
        return software.amazon.jsii.Kernel.get(this, "ipv6AddressCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setIpv6AddressCount(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "ipv6AddressCount", value);
    }

    /**
     */
    public void setIpv6AddressCount(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "ipv6AddressCount", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getLoadBalancerWeight() {
        return software.amazon.jsii.Kernel.get(this, "loadBalancerWeight", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setLoadBalancerWeight(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "loadBalancerWeight", value);
    }

    /**
     */
    public void setLoadBalancerWeight(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "loadBalancerWeight", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getMemory() {
        return software.amazon.jsii.Kernel.get(this, "memory", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setMemory(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "memory", value);
    }

    /**
     */
    public void setMemory(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "memory", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getNtpServers() {
        return software.amazon.jsii.Kernel.get(this, "ntpServers", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setNtpServers(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "ntpServers", value);
    }

    /**
     */
    public void setNtpServers(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
                if (
                     !(__val_ac66f0 instanceof java.lang.String)
                    && !(__val_ac66f0 instanceof com.aliyun.ros.cdk.core.IResolvable)
                    && !(__val_ac66f0.getClass().equals(software.amazon.jsii.JsiiObject.class))
                ) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("value").append(".get(").append(__idx_ac66f0).append(")")
                            .append(" to be one of: java.lang.String, com.aliyun.ros.cdk.core.IResolvable; received ")
                            .append(__val_ac66f0.getClass()).toString());
                }
            }
        }
        software.amazon.jsii.Kernel.set(this, "ntpServers", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getRamRoleName() {
        return software.amazon.jsii.Kernel.get(this, "ramRoleName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setRamRoleName(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "ramRoleName", value);
    }

    /**
     */
    public void setRamRoleName(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "ramRoleName", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setResourceGroupId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "resourceGroupId", value);
    }

    /**
     */
    public void setResourceGroupId(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "resourceGroupId", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getRestartPolicy() {
        return software.amazon.jsii.Kernel.get(this, "restartPolicy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setRestartPolicy(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "restartPolicy", value);
    }

    /**
     */
    public void setRestartPolicy(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "restartPolicy", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getSecurityContextSysctls() {
        return software.amazon.jsii.Kernel.get(this, "securityContextSysctls", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSecurityContextSysctls(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "securityContextSysctls", value);
    }

    /**
     */
    public void setSecurityContextSysctls(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
                if (
                     !(__val_ac66f0 instanceof com.aliyun.ros.cdk.core.IResolvable)
                    && !(__val_ac66f0 instanceof com.aliyun.ros.cdk.ess.RosEciScalingConfiguration.SecurityContextSysctlsProperty)
                    && !(__val_ac66f0.getClass().equals(software.amazon.jsii.JsiiObject.class))
                ) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("value").append(".get(").append(__idx_ac66f0).append(")")
                            .append(" to be one of: com.aliyun.ros.cdk.core.IResolvable, com.aliyun.ros.cdk.ess.RosEciScalingConfiguration.SecurityContextSysctlsProperty; received ")
                            .append(__val_ac66f0.getClass()).toString());
                }
            }
        }
        software.amazon.jsii.Kernel.set(this, "securityContextSysctls", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getSpotPriceLimit() {
        return software.amazon.jsii.Kernel.get(this, "spotPriceLimit", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSpotPriceLimit(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "spotPriceLimit", value);
    }

    /**
     */
    public void setSpotPriceLimit(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "spotPriceLimit", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getSpotStrategy() {
        return software.amazon.jsii.Kernel.get(this, "spotStrategy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSpotStrategy(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "spotStrategy", value);
    }

    /**
     */
    public void setSpotStrategy(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "spotStrategy", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.ess.RosEciScalingConfiguration.TagsProperty> getTags() {
        return java.util.Optional.ofNullable((java.util.List<com.aliyun.ros.cdk.ess.RosEciScalingConfiguration.TagsProperty>)(software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ess.RosEciScalingConfiguration.TagsProperty.class))))).map(java.util.Collections::unmodifiableList).orElse(null);
    }

    /**
     */
    public void setTags(final @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.ess.RosEciScalingConfiguration.TagsProperty> value) {
        software.amazon.jsii.Kernel.set(this, "tags", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getTerminationGracePeriodSeconds() {
        return software.amazon.jsii.Kernel.get(this, "terminationGracePeriodSeconds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setTerminationGracePeriodSeconds(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "terminationGracePeriodSeconds", value);
    }

    /**
     */
    public void setTerminationGracePeriodSeconds(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "terminationGracePeriodSeconds", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getVolumes() {
        return software.amazon.jsii.Kernel.get(this, "volumes", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setVolumes(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "volumes", value);
    }

    /**
     */
    public void setVolumes(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
                if (
                     !(__val_ac66f0 instanceof com.aliyun.ros.cdk.core.IResolvable)
                    && !(__val_ac66f0 instanceof com.aliyun.ros.cdk.ess.RosEciScalingConfiguration.VolumesProperty)
                    && !(__val_ac66f0.getClass().equals(software.amazon.jsii.JsiiObject.class))
                ) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("value").append(".get(").append(__idx_ac66f0).append(")")
                            .append(" to be one of: com.aliyun.ros.cdk.core.IResolvable, com.aliyun.ros.cdk.ess.RosEciScalingConfiguration.VolumesProperty; received ")
                            .append(__val_ac66f0.getClass()).toString());
                }
            }
        }
        software.amazon.jsii.Kernel.set(this, "volumes", value);
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ess.$Module.class, fqn = "@alicloud/ros-cdk-ess.RosEciScalingConfiguration.AcrRegistryInfosProperty")
    @software.amazon.jsii.Jsii.Proxy(AcrRegistryInfosProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface AcrRegistryInfosProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getInstanceId();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getDomains() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getInstanceName() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getRegionId() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link AcrRegistryInfosProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link AcrRegistryInfosProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<AcrRegistryInfosProperty> {
            java.lang.Object instanceId;
            java.lang.Object domains;
            java.lang.Object instanceName;
            java.lang.Object regionId;

            /**
             * Sets the value of {@link AcrRegistryInfosProperty#getInstanceId}
             * @param instanceId the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder instanceId(java.lang.String instanceId) {
                this.instanceId = instanceId;
                return this;
            }

            /**
             * Sets the value of {@link AcrRegistryInfosProperty#getInstanceId}
             * @param instanceId the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder instanceId(com.aliyun.ros.cdk.core.IResolvable instanceId) {
                this.instanceId = instanceId;
                return this;
            }

            /**
             * Sets the value of {@link AcrRegistryInfosProperty#getDomains}
             * @param domains the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder domains(com.aliyun.ros.cdk.core.IResolvable domains) {
                this.domains = domains;
                return this;
            }

            /**
             * Sets the value of {@link AcrRegistryInfosProperty#getDomains}
             * @param domains the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder domains(java.util.List<? extends java.lang.Object> domains) {
                this.domains = domains;
                return this;
            }

            /**
             * Sets the value of {@link AcrRegistryInfosProperty#getInstanceName}
             * @param instanceName the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder instanceName(java.lang.String instanceName) {
                this.instanceName = instanceName;
                return this;
            }

            /**
             * Sets the value of {@link AcrRegistryInfosProperty#getInstanceName}
             * @param instanceName the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder instanceName(com.aliyun.ros.cdk.core.IResolvable instanceName) {
                this.instanceName = instanceName;
                return this;
            }

            /**
             * Sets the value of {@link AcrRegistryInfosProperty#getRegionId}
             * @param regionId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder regionId(java.lang.String regionId) {
                this.regionId = regionId;
                return this;
            }

            /**
             * Sets the value of {@link AcrRegistryInfosProperty#getRegionId}
             * @param regionId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder regionId(com.aliyun.ros.cdk.core.IResolvable regionId) {
                this.regionId = regionId;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link AcrRegistryInfosProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public AcrRegistryInfosProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link AcrRegistryInfosProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements AcrRegistryInfosProperty {
            private final java.lang.Object instanceId;
            private final java.lang.Object domains;
            private final java.lang.Object instanceName;
            private final java.lang.Object regionId;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.instanceId = software.amazon.jsii.Kernel.get(this, "instanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.domains = software.amazon.jsii.Kernel.get(this, "domains", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.instanceName = software.amazon.jsii.Kernel.get(this, "instanceName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.regionId = software.amazon.jsii.Kernel.get(this, "regionId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.instanceId = java.util.Objects.requireNonNull(builder.instanceId, "instanceId is required");
                this.domains = builder.domains;
                this.instanceName = builder.instanceName;
                this.regionId = builder.regionId;
            }

            @Override
            public final java.lang.Object getInstanceId() {
                return this.instanceId;
            }

            @Override
            public final java.lang.Object getDomains() {
                return this.domains;
            }

            @Override
            public final java.lang.Object getInstanceName() {
                return this.instanceName;
            }

            @Override
            public final java.lang.Object getRegionId() {
                return this.regionId;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("instanceId", om.valueToTree(this.getInstanceId()));
                if (this.getDomains() != null) {
                    data.set("domains", om.valueToTree(this.getDomains()));
                }
                if (this.getInstanceName() != null) {
                    data.set("instanceName", om.valueToTree(this.getInstanceName()));
                }
                if (this.getRegionId() != null) {
                    data.set("regionId", om.valueToTree(this.getRegionId()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ess.RosEciScalingConfiguration.AcrRegistryInfosProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                AcrRegistryInfosProperty.Jsii$Proxy that = (AcrRegistryInfosProperty.Jsii$Proxy) o;

                if (!instanceId.equals(that.instanceId)) return false;
                if (this.domains != null ? !this.domains.equals(that.domains) : that.domains != null) return false;
                if (this.instanceName != null ? !this.instanceName.equals(that.instanceName) : that.instanceName != null) return false;
                return this.regionId != null ? this.regionId.equals(that.regionId) : that.regionId == null;
            }

            @Override
            public final int hashCode() {
                int result = this.instanceId.hashCode();
                result = 31 * result + (this.domains != null ? this.domains.hashCode() : 0);
                result = 31 * result + (this.instanceName != null ? this.instanceName.hashCode() : 0);
                result = 31 * result + (this.regionId != null ? this.regionId.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ess.$Module.class, fqn = "@alicloud/ros-cdk-ess.RosEciScalingConfiguration.ConfigFileVolumeConfigFileToPathsProperty")
    @software.amazon.jsii.Jsii.Proxy(ConfigFileVolumeConfigFileToPathsProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface ConfigFileVolumeConfigFileToPathsProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getPath();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getContent() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getMode() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link ConfigFileVolumeConfigFileToPathsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link ConfigFileVolumeConfigFileToPathsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<ConfigFileVolumeConfigFileToPathsProperty> {
            java.lang.Object path;
            java.lang.Object content;
            java.lang.Object mode;

            /**
             * Sets the value of {@link ConfigFileVolumeConfigFileToPathsProperty#getPath}
             * @param path the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder path(java.lang.String path) {
                this.path = path;
                return this;
            }

            /**
             * Sets the value of {@link ConfigFileVolumeConfigFileToPathsProperty#getPath}
             * @param path the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder path(com.aliyun.ros.cdk.core.IResolvable path) {
                this.path = path;
                return this;
            }

            /**
             * Sets the value of {@link ConfigFileVolumeConfigFileToPathsProperty#getContent}
             * @param content the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder content(java.lang.String content) {
                this.content = content;
                return this;
            }

            /**
             * Sets the value of {@link ConfigFileVolumeConfigFileToPathsProperty#getContent}
             * @param content the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder content(com.aliyun.ros.cdk.core.IResolvable content) {
                this.content = content;
                return this;
            }

            /**
             * Sets the value of {@link ConfigFileVolumeConfigFileToPathsProperty#getMode}
             * @param mode the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder mode(java.lang.Number mode) {
                this.mode = mode;
                return this;
            }

            /**
             * Sets the value of {@link ConfigFileVolumeConfigFileToPathsProperty#getMode}
             * @param mode the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder mode(com.aliyun.ros.cdk.core.IResolvable mode) {
                this.mode = mode;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link ConfigFileVolumeConfigFileToPathsProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public ConfigFileVolumeConfigFileToPathsProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link ConfigFileVolumeConfigFileToPathsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ConfigFileVolumeConfigFileToPathsProperty {
            private final java.lang.Object path;
            private final java.lang.Object content;
            private final java.lang.Object mode;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.path = software.amazon.jsii.Kernel.get(this, "path", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.content = software.amazon.jsii.Kernel.get(this, "content", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.mode = software.amazon.jsii.Kernel.get(this, "mode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.path = java.util.Objects.requireNonNull(builder.path, "path is required");
                this.content = builder.content;
                this.mode = builder.mode;
            }

            @Override
            public final java.lang.Object getPath() {
                return this.path;
            }

            @Override
            public final java.lang.Object getContent() {
                return this.content;
            }

            @Override
            public final java.lang.Object getMode() {
                return this.mode;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("path", om.valueToTree(this.getPath()));
                if (this.getContent() != null) {
                    data.set("content", om.valueToTree(this.getContent()));
                }
                if (this.getMode() != null) {
                    data.set("mode", om.valueToTree(this.getMode()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ess.RosEciScalingConfiguration.ConfigFileVolumeConfigFileToPathsProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                ConfigFileVolumeConfigFileToPathsProperty.Jsii$Proxy that = (ConfigFileVolumeConfigFileToPathsProperty.Jsii$Proxy) o;

                if (!path.equals(that.path)) return false;
                if (this.content != null ? !this.content.equals(that.content) : that.content != null) return false;
                return this.mode != null ? this.mode.equals(that.mode) : that.mode == null;
            }

            @Override
            public final int hashCode() {
                int result = this.path.hashCode();
                result = 31 * result + (this.content != null ? this.content.hashCode() : 0);
                result = 31 * result + (this.mode != null ? this.mode.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ess.$Module.class, fqn = "@alicloud/ros-cdk-ess.RosEciScalingConfiguration.ContainersProperty")
    @software.amazon.jsii.Jsii.Proxy(ContainersProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface ContainersProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getImage();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getName();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getArgs() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getCommands() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getCpu() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getEnvironmentVars() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getGpu() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getImagePullPolicy() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getLivenessProbeExecCommands() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getLivenessProbeFailureThreshold() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getLivenessProbeHttpGetPath() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getLivenessProbeHttpGetPort() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getLivenessProbeHttpGetScheme() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getLivenessProbeInitialDelaySeconds() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getLivenessProbePeriodSeconds() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getLivenessProbeSuccessThreshold() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getLivenessProbeTcpSocketPort() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getLivenessProbeTimeoutSeconds() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getMemory() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getPorts() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getReadinessProbeExecCommands() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getReadinessProbeFailureThreshold() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getReadinessProbeHttpGetPath() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getReadinessProbeHttpGetPort() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getReadinessProbeHttpGetScheme() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getReadinessProbeInitialDelaySeconds() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getReadinessProbePeriodSeconds() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getReadinessProbeSuccessThreshold() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getReadinessProbeTcpSocketPort() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getReadinessProbeTimeoutSeconds() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getSecurityContextCapabilitiesAdd() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getSecurityContextRunAsUser() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getStdin() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getStdinOnce() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getTty() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getVolumeMounts() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getWorkingDir() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link ContainersProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link ContainersProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<ContainersProperty> {
            java.lang.Object image;
            java.lang.Object name;
            java.lang.Object args;
            java.lang.Object commands;
            java.lang.Object cpu;
            java.lang.Object environmentVars;
            java.lang.Object gpu;
            java.lang.Object imagePullPolicy;
            java.lang.Object livenessProbeExecCommands;
            java.lang.Object livenessProbeFailureThreshold;
            java.lang.Object livenessProbeHttpGetPath;
            java.lang.Object livenessProbeHttpGetPort;
            java.lang.Object livenessProbeHttpGetScheme;
            java.lang.Object livenessProbeInitialDelaySeconds;
            java.lang.Object livenessProbePeriodSeconds;
            java.lang.Object livenessProbeSuccessThreshold;
            java.lang.Object livenessProbeTcpSocketPort;
            java.lang.Object livenessProbeTimeoutSeconds;
            java.lang.Object memory;
            java.lang.Object ports;
            java.lang.Object readinessProbeExecCommands;
            java.lang.Object readinessProbeFailureThreshold;
            java.lang.Object readinessProbeHttpGetPath;
            java.lang.Object readinessProbeHttpGetPort;
            java.lang.Object readinessProbeHttpGetScheme;
            java.lang.Object readinessProbeInitialDelaySeconds;
            java.lang.Object readinessProbePeriodSeconds;
            java.lang.Object readinessProbeSuccessThreshold;
            java.lang.Object readinessProbeTcpSocketPort;
            java.lang.Object readinessProbeTimeoutSeconds;
            java.lang.Object securityContextCapabilitiesAdd;
            java.lang.Object securityContextRunAsUser;
            java.lang.Object stdin;
            java.lang.Object stdinOnce;
            java.lang.Object tty;
            java.lang.Object volumeMounts;
            java.lang.Object workingDir;

            /**
             * Sets the value of {@link ContainersProperty#getImage}
             * @param image the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder image(java.lang.String image) {
                this.image = image;
                return this;
            }

            /**
             * Sets the value of {@link ContainersProperty#getImage}
             * @param image the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder image(com.aliyun.ros.cdk.core.IResolvable image) {
                this.image = image;
                return this;
            }

            /**
             * Sets the value of {@link ContainersProperty#getName}
             * @param name the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder name(java.lang.String name) {
                this.name = name;
                return this;
            }

            /**
             * Sets the value of {@link ContainersProperty#getName}
             * @param name the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder name(com.aliyun.ros.cdk.core.IResolvable name) {
                this.name = name;
                return this;
            }

            /**
             * Sets the value of {@link ContainersProperty#getArgs}
             * @param args the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder args(com.aliyun.ros.cdk.core.IResolvable args) {
                this.args = args;
                return this;
            }

            /**
             * Sets the value of {@link ContainersProperty#getArgs}
             * @param args the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder args(java.util.List<? extends java.lang.Object> args) {
                this.args = args;
                return this;
            }

            /**
             * Sets the value of {@link ContainersProperty#getCommands}
             * @param commands the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder commands(com.aliyun.ros.cdk.core.IResolvable commands) {
                this.commands = commands;
                return this;
            }

            /**
             * Sets the value of {@link ContainersProperty#getCommands}
             * @param commands the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder commands(java.util.List<? extends java.lang.Object> commands) {
                this.commands = commands;
                return this;
            }

            /**
             * Sets the value of {@link ContainersProperty#getCpu}
             * @param cpu the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder cpu(java.lang.Number cpu) {
                this.cpu = cpu;
                return this;
            }

            /**
             * Sets the value of {@link ContainersProperty#getCpu}
             * @param cpu the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder cpu(com.aliyun.ros.cdk.core.IResolvable cpu) {
                this.cpu = cpu;
                return this;
            }

            /**
             * Sets the value of {@link ContainersProperty#getEnvironmentVars}
             * @param environmentVars the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder environmentVars(com.aliyun.ros.cdk.core.IResolvable environmentVars) {
                this.environmentVars = environmentVars;
                return this;
            }

            /**
             * Sets the value of {@link ContainersProperty#getEnvironmentVars}
             * @param environmentVars the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder environmentVars(java.util.List<? extends java.lang.Object> environmentVars) {
                this.environmentVars = environmentVars;
                return this;
            }

            /**
             * Sets the value of {@link ContainersProperty#getGpu}
             * @param gpu the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder gpu(java.lang.Number gpu) {
                this.gpu = gpu;
                return this;
            }

            /**
             * Sets the value of {@link ContainersProperty#getGpu}
             * @param gpu the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder gpu(com.aliyun.ros.cdk.core.IResolvable gpu) {
                this.gpu = gpu;
                return this;
            }

            /**
             * Sets the value of {@link ContainersProperty#getImagePullPolicy}
             * @param imagePullPolicy the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder imagePullPolicy(java.lang.String imagePullPolicy) {
                this.imagePullPolicy = imagePullPolicy;
                return this;
            }

            /**
             * Sets the value of {@link ContainersProperty#getImagePullPolicy}
             * @param imagePullPolicy the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder imagePullPolicy(com.aliyun.ros.cdk.core.IResolvable imagePullPolicy) {
                this.imagePullPolicy = imagePullPolicy;
                return this;
            }

            /**
             * Sets the value of {@link ContainersProperty#getLivenessProbeExecCommands}
             * @param livenessProbeExecCommands the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder livenessProbeExecCommands(com.aliyun.ros.cdk.core.IResolvable livenessProbeExecCommands) {
                this.livenessProbeExecCommands = livenessProbeExecCommands;
                return this;
            }

            /**
             * Sets the value of {@link ContainersProperty#getLivenessProbeExecCommands}
             * @param livenessProbeExecCommands the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder livenessProbeExecCommands(java.util.List<? extends java.lang.Object> livenessProbeExecCommands) {
                this.livenessProbeExecCommands = livenessProbeExecCommands;
                return this;
            }

            /**
             * Sets the value of {@link ContainersProperty#getLivenessProbeFailureThreshold}
             * @param livenessProbeFailureThreshold the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder livenessProbeFailureThreshold(java.lang.Number livenessProbeFailureThreshold) {
                this.livenessProbeFailureThreshold = livenessProbeFailureThreshold;
                return this;
            }

            /**
             * Sets the value of {@link ContainersProperty#getLivenessProbeFailureThreshold}
             * @param livenessProbeFailureThreshold the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder livenessProbeFailureThreshold(com.aliyun.ros.cdk.core.IResolvable livenessProbeFailureThreshold) {
                this.livenessProbeFailureThreshold = livenessProbeFailureThreshold;
                return this;
            }

            /**
             * Sets the value of {@link ContainersProperty#getLivenessProbeHttpGetPath}
             * @param livenessProbeHttpGetPath the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder livenessProbeHttpGetPath(java.lang.String livenessProbeHttpGetPath) {
                this.livenessProbeHttpGetPath = livenessProbeHttpGetPath;
                return this;
            }

            /**
             * Sets the value of {@link ContainersProperty#getLivenessProbeHttpGetPath}
             * @param livenessProbeHttpGetPath the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder livenessProbeHttpGetPath(com.aliyun.ros.cdk.core.IResolvable livenessProbeHttpGetPath) {
                this.livenessProbeHttpGetPath = livenessProbeHttpGetPath;
                return this;
            }

            /**
             * Sets the value of {@link ContainersProperty#getLivenessProbeHttpGetPort}
             * @param livenessProbeHttpGetPort the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder livenessProbeHttpGetPort(java.lang.Number livenessProbeHttpGetPort) {
                this.livenessProbeHttpGetPort = livenessProbeHttpGetPort;
                return this;
            }

            /**
             * Sets the value of {@link ContainersProperty#getLivenessProbeHttpGetPort}
             * @param livenessProbeHttpGetPort the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder livenessProbeHttpGetPort(com.aliyun.ros.cdk.core.IResolvable livenessProbeHttpGetPort) {
                this.livenessProbeHttpGetPort = livenessProbeHttpGetPort;
                return this;
            }

            /**
             * Sets the value of {@link ContainersProperty#getLivenessProbeHttpGetScheme}
             * @param livenessProbeHttpGetScheme the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder livenessProbeHttpGetScheme(java.lang.String livenessProbeHttpGetScheme) {
                this.livenessProbeHttpGetScheme = livenessProbeHttpGetScheme;
                return this;
            }

            /**
             * Sets the value of {@link ContainersProperty#getLivenessProbeHttpGetScheme}
             * @param livenessProbeHttpGetScheme the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder livenessProbeHttpGetScheme(com.aliyun.ros.cdk.core.IResolvable livenessProbeHttpGetScheme) {
                this.livenessProbeHttpGetScheme = livenessProbeHttpGetScheme;
                return this;
            }

            /**
             * Sets the value of {@link ContainersProperty#getLivenessProbeInitialDelaySeconds}
             * @param livenessProbeInitialDelaySeconds the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder livenessProbeInitialDelaySeconds(java.lang.Number livenessProbeInitialDelaySeconds) {
                this.livenessProbeInitialDelaySeconds = livenessProbeInitialDelaySeconds;
                return this;
            }

            /**
             * Sets the value of {@link ContainersProperty#getLivenessProbeInitialDelaySeconds}
             * @param livenessProbeInitialDelaySeconds the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder livenessProbeInitialDelaySeconds(com.aliyun.ros.cdk.core.IResolvable livenessProbeInitialDelaySeconds) {
                this.livenessProbeInitialDelaySeconds = livenessProbeInitialDelaySeconds;
                return this;
            }

            /**
             * Sets the value of {@link ContainersProperty#getLivenessProbePeriodSeconds}
             * @param livenessProbePeriodSeconds the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder livenessProbePeriodSeconds(java.lang.Number livenessProbePeriodSeconds) {
                this.livenessProbePeriodSeconds = livenessProbePeriodSeconds;
                return this;
            }

            /**
             * Sets the value of {@link ContainersProperty#getLivenessProbePeriodSeconds}
             * @param livenessProbePeriodSeconds the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder livenessProbePeriodSeconds(com.aliyun.ros.cdk.core.IResolvable livenessProbePeriodSeconds) {
                this.livenessProbePeriodSeconds = livenessProbePeriodSeconds;
                return this;
            }

            /**
             * Sets the value of {@link ContainersProperty#getLivenessProbeSuccessThreshold}
             * @param livenessProbeSuccessThreshold the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder livenessProbeSuccessThreshold(java.lang.Number livenessProbeSuccessThreshold) {
                this.livenessProbeSuccessThreshold = livenessProbeSuccessThreshold;
                return this;
            }

            /**
             * Sets the value of {@link ContainersProperty#getLivenessProbeSuccessThreshold}
             * @param livenessProbeSuccessThreshold the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder livenessProbeSuccessThreshold(com.aliyun.ros.cdk.core.IResolvable livenessProbeSuccessThreshold) {
                this.livenessProbeSuccessThreshold = livenessProbeSuccessThreshold;
                return this;
            }

            /**
             * Sets the value of {@link ContainersProperty#getLivenessProbeTcpSocketPort}
             * @param livenessProbeTcpSocketPort the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder livenessProbeTcpSocketPort(java.lang.Number livenessProbeTcpSocketPort) {
                this.livenessProbeTcpSocketPort = livenessProbeTcpSocketPort;
                return this;
            }

            /**
             * Sets the value of {@link ContainersProperty#getLivenessProbeTcpSocketPort}
             * @param livenessProbeTcpSocketPort the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder livenessProbeTcpSocketPort(com.aliyun.ros.cdk.core.IResolvable livenessProbeTcpSocketPort) {
                this.livenessProbeTcpSocketPort = livenessProbeTcpSocketPort;
                return this;
            }

            /**
             * Sets the value of {@link ContainersProperty#getLivenessProbeTimeoutSeconds}
             * @param livenessProbeTimeoutSeconds the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder livenessProbeTimeoutSeconds(java.lang.Number livenessProbeTimeoutSeconds) {
                this.livenessProbeTimeoutSeconds = livenessProbeTimeoutSeconds;
                return this;
            }

            /**
             * Sets the value of {@link ContainersProperty#getLivenessProbeTimeoutSeconds}
             * @param livenessProbeTimeoutSeconds the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder livenessProbeTimeoutSeconds(com.aliyun.ros.cdk.core.IResolvable livenessProbeTimeoutSeconds) {
                this.livenessProbeTimeoutSeconds = livenessProbeTimeoutSeconds;
                return this;
            }

            /**
             * Sets the value of {@link ContainersProperty#getMemory}
             * @param memory the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder memory(java.lang.Number memory) {
                this.memory = memory;
                return this;
            }

            /**
             * Sets the value of {@link ContainersProperty#getMemory}
             * @param memory the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder memory(com.aliyun.ros.cdk.core.IResolvable memory) {
                this.memory = memory;
                return this;
            }

            /**
             * Sets the value of {@link ContainersProperty#getPorts}
             * @param ports the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ports(com.aliyun.ros.cdk.core.IResolvable ports) {
                this.ports = ports;
                return this;
            }

            /**
             * Sets the value of {@link ContainersProperty#getPorts}
             * @param ports the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ports(java.util.List<? extends java.lang.Object> ports) {
                this.ports = ports;
                return this;
            }

            /**
             * Sets the value of {@link ContainersProperty#getReadinessProbeExecCommands}
             * @param readinessProbeExecCommands the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder readinessProbeExecCommands(com.aliyun.ros.cdk.core.IResolvable readinessProbeExecCommands) {
                this.readinessProbeExecCommands = readinessProbeExecCommands;
                return this;
            }

            /**
             * Sets the value of {@link ContainersProperty#getReadinessProbeExecCommands}
             * @param readinessProbeExecCommands the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder readinessProbeExecCommands(java.util.List<? extends java.lang.Object> readinessProbeExecCommands) {
                this.readinessProbeExecCommands = readinessProbeExecCommands;
                return this;
            }

            /**
             * Sets the value of {@link ContainersProperty#getReadinessProbeFailureThreshold}
             * @param readinessProbeFailureThreshold the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder readinessProbeFailureThreshold(java.lang.Number readinessProbeFailureThreshold) {
                this.readinessProbeFailureThreshold = readinessProbeFailureThreshold;
                return this;
            }

            /**
             * Sets the value of {@link ContainersProperty#getReadinessProbeFailureThreshold}
             * @param readinessProbeFailureThreshold the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder readinessProbeFailureThreshold(com.aliyun.ros.cdk.core.IResolvable readinessProbeFailureThreshold) {
                this.readinessProbeFailureThreshold = readinessProbeFailureThreshold;
                return this;
            }

            /**
             * Sets the value of {@link ContainersProperty#getReadinessProbeHttpGetPath}
             * @param readinessProbeHttpGetPath the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder readinessProbeHttpGetPath(java.lang.String readinessProbeHttpGetPath) {
                this.readinessProbeHttpGetPath = readinessProbeHttpGetPath;
                return this;
            }

            /**
             * Sets the value of {@link ContainersProperty#getReadinessProbeHttpGetPath}
             * @param readinessProbeHttpGetPath the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder readinessProbeHttpGetPath(com.aliyun.ros.cdk.core.IResolvable readinessProbeHttpGetPath) {
                this.readinessProbeHttpGetPath = readinessProbeHttpGetPath;
                return this;
            }

            /**
             * Sets the value of {@link ContainersProperty#getReadinessProbeHttpGetPort}
             * @param readinessProbeHttpGetPort the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder readinessProbeHttpGetPort(java.lang.Number readinessProbeHttpGetPort) {
                this.readinessProbeHttpGetPort = readinessProbeHttpGetPort;
                return this;
            }

            /**
             * Sets the value of {@link ContainersProperty#getReadinessProbeHttpGetPort}
             * @param readinessProbeHttpGetPort the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder readinessProbeHttpGetPort(com.aliyun.ros.cdk.core.IResolvable readinessProbeHttpGetPort) {
                this.readinessProbeHttpGetPort = readinessProbeHttpGetPort;
                return this;
            }

            /**
             * Sets the value of {@link ContainersProperty#getReadinessProbeHttpGetScheme}
             * @param readinessProbeHttpGetScheme the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder readinessProbeHttpGetScheme(java.lang.String readinessProbeHttpGetScheme) {
                this.readinessProbeHttpGetScheme = readinessProbeHttpGetScheme;
                return this;
            }

            /**
             * Sets the value of {@link ContainersProperty#getReadinessProbeHttpGetScheme}
             * @param readinessProbeHttpGetScheme the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder readinessProbeHttpGetScheme(com.aliyun.ros.cdk.core.IResolvable readinessProbeHttpGetScheme) {
                this.readinessProbeHttpGetScheme = readinessProbeHttpGetScheme;
                return this;
            }

            /**
             * Sets the value of {@link ContainersProperty#getReadinessProbeInitialDelaySeconds}
             * @param readinessProbeInitialDelaySeconds the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder readinessProbeInitialDelaySeconds(java.lang.Number readinessProbeInitialDelaySeconds) {
                this.readinessProbeInitialDelaySeconds = readinessProbeInitialDelaySeconds;
                return this;
            }

            /**
             * Sets the value of {@link ContainersProperty#getReadinessProbeInitialDelaySeconds}
             * @param readinessProbeInitialDelaySeconds the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder readinessProbeInitialDelaySeconds(com.aliyun.ros.cdk.core.IResolvable readinessProbeInitialDelaySeconds) {
                this.readinessProbeInitialDelaySeconds = readinessProbeInitialDelaySeconds;
                return this;
            }

            /**
             * Sets the value of {@link ContainersProperty#getReadinessProbePeriodSeconds}
             * @param readinessProbePeriodSeconds the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder readinessProbePeriodSeconds(java.lang.Number readinessProbePeriodSeconds) {
                this.readinessProbePeriodSeconds = readinessProbePeriodSeconds;
                return this;
            }

            /**
             * Sets the value of {@link ContainersProperty#getReadinessProbePeriodSeconds}
             * @param readinessProbePeriodSeconds the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder readinessProbePeriodSeconds(com.aliyun.ros.cdk.core.IResolvable readinessProbePeriodSeconds) {
                this.readinessProbePeriodSeconds = readinessProbePeriodSeconds;
                return this;
            }

            /**
             * Sets the value of {@link ContainersProperty#getReadinessProbeSuccessThreshold}
             * @param readinessProbeSuccessThreshold the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder readinessProbeSuccessThreshold(java.lang.Number readinessProbeSuccessThreshold) {
                this.readinessProbeSuccessThreshold = readinessProbeSuccessThreshold;
                return this;
            }

            /**
             * Sets the value of {@link ContainersProperty#getReadinessProbeSuccessThreshold}
             * @param readinessProbeSuccessThreshold the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder readinessProbeSuccessThreshold(com.aliyun.ros.cdk.core.IResolvable readinessProbeSuccessThreshold) {
                this.readinessProbeSuccessThreshold = readinessProbeSuccessThreshold;
                return this;
            }

            /**
             * Sets the value of {@link ContainersProperty#getReadinessProbeTcpSocketPort}
             * @param readinessProbeTcpSocketPort the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder readinessProbeTcpSocketPort(java.lang.Number readinessProbeTcpSocketPort) {
                this.readinessProbeTcpSocketPort = readinessProbeTcpSocketPort;
                return this;
            }

            /**
             * Sets the value of {@link ContainersProperty#getReadinessProbeTcpSocketPort}
             * @param readinessProbeTcpSocketPort the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder readinessProbeTcpSocketPort(com.aliyun.ros.cdk.core.IResolvable readinessProbeTcpSocketPort) {
                this.readinessProbeTcpSocketPort = readinessProbeTcpSocketPort;
                return this;
            }

            /**
             * Sets the value of {@link ContainersProperty#getReadinessProbeTimeoutSeconds}
             * @param readinessProbeTimeoutSeconds the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder readinessProbeTimeoutSeconds(java.lang.Number readinessProbeTimeoutSeconds) {
                this.readinessProbeTimeoutSeconds = readinessProbeTimeoutSeconds;
                return this;
            }

            /**
             * Sets the value of {@link ContainersProperty#getReadinessProbeTimeoutSeconds}
             * @param readinessProbeTimeoutSeconds the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder readinessProbeTimeoutSeconds(com.aliyun.ros.cdk.core.IResolvable readinessProbeTimeoutSeconds) {
                this.readinessProbeTimeoutSeconds = readinessProbeTimeoutSeconds;
                return this;
            }

            /**
             * Sets the value of {@link ContainersProperty#getSecurityContextCapabilitiesAdd}
             * @param securityContextCapabilitiesAdd the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder securityContextCapabilitiesAdd(com.aliyun.ros.cdk.core.IResolvable securityContextCapabilitiesAdd) {
                this.securityContextCapabilitiesAdd = securityContextCapabilitiesAdd;
                return this;
            }

            /**
             * Sets the value of {@link ContainersProperty#getSecurityContextCapabilitiesAdd}
             * @param securityContextCapabilitiesAdd the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder securityContextCapabilitiesAdd(java.util.List<? extends java.lang.Object> securityContextCapabilitiesAdd) {
                this.securityContextCapabilitiesAdd = securityContextCapabilitiesAdd;
                return this;
            }

            /**
             * Sets the value of {@link ContainersProperty#getSecurityContextRunAsUser}
             * @param securityContextRunAsUser the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder securityContextRunAsUser(java.lang.Number securityContextRunAsUser) {
                this.securityContextRunAsUser = securityContextRunAsUser;
                return this;
            }

            /**
             * Sets the value of {@link ContainersProperty#getSecurityContextRunAsUser}
             * @param securityContextRunAsUser the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder securityContextRunAsUser(com.aliyun.ros.cdk.core.IResolvable securityContextRunAsUser) {
                this.securityContextRunAsUser = securityContextRunAsUser;
                return this;
            }

            /**
             * Sets the value of {@link ContainersProperty#getStdin}
             * @param stdin the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder stdin(java.lang.Boolean stdin) {
                this.stdin = stdin;
                return this;
            }

            /**
             * Sets the value of {@link ContainersProperty#getStdin}
             * @param stdin the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder stdin(com.aliyun.ros.cdk.core.IResolvable stdin) {
                this.stdin = stdin;
                return this;
            }

            /**
             * Sets the value of {@link ContainersProperty#getStdinOnce}
             * @param stdinOnce the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder stdinOnce(java.lang.Boolean stdinOnce) {
                this.stdinOnce = stdinOnce;
                return this;
            }

            /**
             * Sets the value of {@link ContainersProperty#getStdinOnce}
             * @param stdinOnce the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder stdinOnce(com.aliyun.ros.cdk.core.IResolvable stdinOnce) {
                this.stdinOnce = stdinOnce;
                return this;
            }

            /**
             * Sets the value of {@link ContainersProperty#getTty}
             * @param tty the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder tty(java.lang.Boolean tty) {
                this.tty = tty;
                return this;
            }

            /**
             * Sets the value of {@link ContainersProperty#getTty}
             * @param tty the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder tty(com.aliyun.ros.cdk.core.IResolvable tty) {
                this.tty = tty;
                return this;
            }

            /**
             * Sets the value of {@link ContainersProperty#getVolumeMounts}
             * @param volumeMounts the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder volumeMounts(com.aliyun.ros.cdk.core.IResolvable volumeMounts) {
                this.volumeMounts = volumeMounts;
                return this;
            }

            /**
             * Sets the value of {@link ContainersProperty#getVolumeMounts}
             * @param volumeMounts the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder volumeMounts(java.util.List<? extends java.lang.Object> volumeMounts) {
                this.volumeMounts = volumeMounts;
                return this;
            }

            /**
             * Sets the value of {@link ContainersProperty#getWorkingDir}
             * @param workingDir the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder workingDir(java.lang.String workingDir) {
                this.workingDir = workingDir;
                return this;
            }

            /**
             * Sets the value of {@link ContainersProperty#getWorkingDir}
             * @param workingDir the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder workingDir(com.aliyun.ros.cdk.core.IResolvable workingDir) {
                this.workingDir = workingDir;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link ContainersProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public ContainersProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link ContainersProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ContainersProperty {
            private final java.lang.Object image;
            private final java.lang.Object name;
            private final java.lang.Object args;
            private final java.lang.Object commands;
            private final java.lang.Object cpu;
            private final java.lang.Object environmentVars;
            private final java.lang.Object gpu;
            private final java.lang.Object imagePullPolicy;
            private final java.lang.Object livenessProbeExecCommands;
            private final java.lang.Object livenessProbeFailureThreshold;
            private final java.lang.Object livenessProbeHttpGetPath;
            private final java.lang.Object livenessProbeHttpGetPort;
            private final java.lang.Object livenessProbeHttpGetScheme;
            private final java.lang.Object livenessProbeInitialDelaySeconds;
            private final java.lang.Object livenessProbePeriodSeconds;
            private final java.lang.Object livenessProbeSuccessThreshold;
            private final java.lang.Object livenessProbeTcpSocketPort;
            private final java.lang.Object livenessProbeTimeoutSeconds;
            private final java.lang.Object memory;
            private final java.lang.Object ports;
            private final java.lang.Object readinessProbeExecCommands;
            private final java.lang.Object readinessProbeFailureThreshold;
            private final java.lang.Object readinessProbeHttpGetPath;
            private final java.lang.Object readinessProbeHttpGetPort;
            private final java.lang.Object readinessProbeHttpGetScheme;
            private final java.lang.Object readinessProbeInitialDelaySeconds;
            private final java.lang.Object readinessProbePeriodSeconds;
            private final java.lang.Object readinessProbeSuccessThreshold;
            private final java.lang.Object readinessProbeTcpSocketPort;
            private final java.lang.Object readinessProbeTimeoutSeconds;
            private final java.lang.Object securityContextCapabilitiesAdd;
            private final java.lang.Object securityContextRunAsUser;
            private final java.lang.Object stdin;
            private final java.lang.Object stdinOnce;
            private final java.lang.Object tty;
            private final java.lang.Object volumeMounts;
            private final java.lang.Object workingDir;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.image = software.amazon.jsii.Kernel.get(this, "image", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.name = software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.args = software.amazon.jsii.Kernel.get(this, "args", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.commands = software.amazon.jsii.Kernel.get(this, "commands", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.cpu = software.amazon.jsii.Kernel.get(this, "cpu", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.environmentVars = software.amazon.jsii.Kernel.get(this, "environmentVars", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.gpu = software.amazon.jsii.Kernel.get(this, "gpu", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.imagePullPolicy = software.amazon.jsii.Kernel.get(this, "imagePullPolicy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.livenessProbeExecCommands = software.amazon.jsii.Kernel.get(this, "livenessProbeExecCommands", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.livenessProbeFailureThreshold = software.amazon.jsii.Kernel.get(this, "livenessProbeFailureThreshold", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.livenessProbeHttpGetPath = software.amazon.jsii.Kernel.get(this, "livenessProbeHttpGetPath", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.livenessProbeHttpGetPort = software.amazon.jsii.Kernel.get(this, "livenessProbeHttpGetPort", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.livenessProbeHttpGetScheme = software.amazon.jsii.Kernel.get(this, "livenessProbeHttpGetScheme", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.livenessProbeInitialDelaySeconds = software.amazon.jsii.Kernel.get(this, "livenessProbeInitialDelaySeconds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.livenessProbePeriodSeconds = software.amazon.jsii.Kernel.get(this, "livenessProbePeriodSeconds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.livenessProbeSuccessThreshold = software.amazon.jsii.Kernel.get(this, "livenessProbeSuccessThreshold", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.livenessProbeTcpSocketPort = software.amazon.jsii.Kernel.get(this, "livenessProbeTcpSocketPort", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.livenessProbeTimeoutSeconds = software.amazon.jsii.Kernel.get(this, "livenessProbeTimeoutSeconds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.memory = software.amazon.jsii.Kernel.get(this, "memory", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.ports = software.amazon.jsii.Kernel.get(this, "ports", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.readinessProbeExecCommands = software.amazon.jsii.Kernel.get(this, "readinessProbeExecCommands", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.readinessProbeFailureThreshold = software.amazon.jsii.Kernel.get(this, "readinessProbeFailureThreshold", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.readinessProbeHttpGetPath = software.amazon.jsii.Kernel.get(this, "readinessProbeHttpGetPath", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.readinessProbeHttpGetPort = software.amazon.jsii.Kernel.get(this, "readinessProbeHttpGetPort", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.readinessProbeHttpGetScheme = software.amazon.jsii.Kernel.get(this, "readinessProbeHttpGetScheme", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.readinessProbeInitialDelaySeconds = software.amazon.jsii.Kernel.get(this, "readinessProbeInitialDelaySeconds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.readinessProbePeriodSeconds = software.amazon.jsii.Kernel.get(this, "readinessProbePeriodSeconds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.readinessProbeSuccessThreshold = software.amazon.jsii.Kernel.get(this, "readinessProbeSuccessThreshold", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.readinessProbeTcpSocketPort = software.amazon.jsii.Kernel.get(this, "readinessProbeTcpSocketPort", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.readinessProbeTimeoutSeconds = software.amazon.jsii.Kernel.get(this, "readinessProbeTimeoutSeconds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.securityContextCapabilitiesAdd = software.amazon.jsii.Kernel.get(this, "securityContextCapabilitiesAdd", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.securityContextRunAsUser = software.amazon.jsii.Kernel.get(this, "securityContextRunAsUser", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.stdin = software.amazon.jsii.Kernel.get(this, "stdin", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.stdinOnce = software.amazon.jsii.Kernel.get(this, "stdinOnce", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.tty = software.amazon.jsii.Kernel.get(this, "tty", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.volumeMounts = software.amazon.jsii.Kernel.get(this, "volumeMounts", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.workingDir = software.amazon.jsii.Kernel.get(this, "workingDir", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.image = java.util.Objects.requireNonNull(builder.image, "image is required");
                this.name = java.util.Objects.requireNonNull(builder.name, "name is required");
                this.args = builder.args;
                this.commands = builder.commands;
                this.cpu = builder.cpu;
                this.environmentVars = builder.environmentVars;
                this.gpu = builder.gpu;
                this.imagePullPolicy = builder.imagePullPolicy;
                this.livenessProbeExecCommands = builder.livenessProbeExecCommands;
                this.livenessProbeFailureThreshold = builder.livenessProbeFailureThreshold;
                this.livenessProbeHttpGetPath = builder.livenessProbeHttpGetPath;
                this.livenessProbeHttpGetPort = builder.livenessProbeHttpGetPort;
                this.livenessProbeHttpGetScheme = builder.livenessProbeHttpGetScheme;
                this.livenessProbeInitialDelaySeconds = builder.livenessProbeInitialDelaySeconds;
                this.livenessProbePeriodSeconds = builder.livenessProbePeriodSeconds;
                this.livenessProbeSuccessThreshold = builder.livenessProbeSuccessThreshold;
                this.livenessProbeTcpSocketPort = builder.livenessProbeTcpSocketPort;
                this.livenessProbeTimeoutSeconds = builder.livenessProbeTimeoutSeconds;
                this.memory = builder.memory;
                this.ports = builder.ports;
                this.readinessProbeExecCommands = builder.readinessProbeExecCommands;
                this.readinessProbeFailureThreshold = builder.readinessProbeFailureThreshold;
                this.readinessProbeHttpGetPath = builder.readinessProbeHttpGetPath;
                this.readinessProbeHttpGetPort = builder.readinessProbeHttpGetPort;
                this.readinessProbeHttpGetScheme = builder.readinessProbeHttpGetScheme;
                this.readinessProbeInitialDelaySeconds = builder.readinessProbeInitialDelaySeconds;
                this.readinessProbePeriodSeconds = builder.readinessProbePeriodSeconds;
                this.readinessProbeSuccessThreshold = builder.readinessProbeSuccessThreshold;
                this.readinessProbeTcpSocketPort = builder.readinessProbeTcpSocketPort;
                this.readinessProbeTimeoutSeconds = builder.readinessProbeTimeoutSeconds;
                this.securityContextCapabilitiesAdd = builder.securityContextCapabilitiesAdd;
                this.securityContextRunAsUser = builder.securityContextRunAsUser;
                this.stdin = builder.stdin;
                this.stdinOnce = builder.stdinOnce;
                this.tty = builder.tty;
                this.volumeMounts = builder.volumeMounts;
                this.workingDir = builder.workingDir;
            }

            @Override
            public final java.lang.Object getImage() {
                return this.image;
            }

            @Override
            public final java.lang.Object getName() {
                return this.name;
            }

            @Override
            public final java.lang.Object getArgs() {
                return this.args;
            }

            @Override
            public final java.lang.Object getCommands() {
                return this.commands;
            }

            @Override
            public final java.lang.Object getCpu() {
                return this.cpu;
            }

            @Override
            public final java.lang.Object getEnvironmentVars() {
                return this.environmentVars;
            }

            @Override
            public final java.lang.Object getGpu() {
                return this.gpu;
            }

            @Override
            public final java.lang.Object getImagePullPolicy() {
                return this.imagePullPolicy;
            }

            @Override
            public final java.lang.Object getLivenessProbeExecCommands() {
                return this.livenessProbeExecCommands;
            }

            @Override
            public final java.lang.Object getLivenessProbeFailureThreshold() {
                return this.livenessProbeFailureThreshold;
            }

            @Override
            public final java.lang.Object getLivenessProbeHttpGetPath() {
                return this.livenessProbeHttpGetPath;
            }

            @Override
            public final java.lang.Object getLivenessProbeHttpGetPort() {
                return this.livenessProbeHttpGetPort;
            }

            @Override
            public final java.lang.Object getLivenessProbeHttpGetScheme() {
                return this.livenessProbeHttpGetScheme;
            }

            @Override
            public final java.lang.Object getLivenessProbeInitialDelaySeconds() {
                return this.livenessProbeInitialDelaySeconds;
            }

            @Override
            public final java.lang.Object getLivenessProbePeriodSeconds() {
                return this.livenessProbePeriodSeconds;
            }

            @Override
            public final java.lang.Object getLivenessProbeSuccessThreshold() {
                return this.livenessProbeSuccessThreshold;
            }

            @Override
            public final java.lang.Object getLivenessProbeTcpSocketPort() {
                return this.livenessProbeTcpSocketPort;
            }

            @Override
            public final java.lang.Object getLivenessProbeTimeoutSeconds() {
                return this.livenessProbeTimeoutSeconds;
            }

            @Override
            public final java.lang.Object getMemory() {
                return this.memory;
            }

            @Override
            public final java.lang.Object getPorts() {
                return this.ports;
            }

            @Override
            public final java.lang.Object getReadinessProbeExecCommands() {
                return this.readinessProbeExecCommands;
            }

            @Override
            public final java.lang.Object getReadinessProbeFailureThreshold() {
                return this.readinessProbeFailureThreshold;
            }

            @Override
            public final java.lang.Object getReadinessProbeHttpGetPath() {
                return this.readinessProbeHttpGetPath;
            }

            @Override
            public final java.lang.Object getReadinessProbeHttpGetPort() {
                return this.readinessProbeHttpGetPort;
            }

            @Override
            public final java.lang.Object getReadinessProbeHttpGetScheme() {
                return this.readinessProbeHttpGetScheme;
            }

            @Override
            public final java.lang.Object getReadinessProbeInitialDelaySeconds() {
                return this.readinessProbeInitialDelaySeconds;
            }

            @Override
            public final java.lang.Object getReadinessProbePeriodSeconds() {
                return this.readinessProbePeriodSeconds;
            }

            @Override
            public final java.lang.Object getReadinessProbeSuccessThreshold() {
                return this.readinessProbeSuccessThreshold;
            }

            @Override
            public final java.lang.Object getReadinessProbeTcpSocketPort() {
                return this.readinessProbeTcpSocketPort;
            }

            @Override
            public final java.lang.Object getReadinessProbeTimeoutSeconds() {
                return this.readinessProbeTimeoutSeconds;
            }

            @Override
            public final java.lang.Object getSecurityContextCapabilitiesAdd() {
                return this.securityContextCapabilitiesAdd;
            }

            @Override
            public final java.lang.Object getSecurityContextRunAsUser() {
                return this.securityContextRunAsUser;
            }

            @Override
            public final java.lang.Object getStdin() {
                return this.stdin;
            }

            @Override
            public final java.lang.Object getStdinOnce() {
                return this.stdinOnce;
            }

            @Override
            public final java.lang.Object getTty() {
                return this.tty;
            }

            @Override
            public final java.lang.Object getVolumeMounts() {
                return this.volumeMounts;
            }

            @Override
            public final java.lang.Object getWorkingDir() {
                return this.workingDir;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("image", om.valueToTree(this.getImage()));
                data.set("name", om.valueToTree(this.getName()));
                if (this.getArgs() != null) {
                    data.set("args", om.valueToTree(this.getArgs()));
                }
                if (this.getCommands() != null) {
                    data.set("commands", om.valueToTree(this.getCommands()));
                }
                if (this.getCpu() != null) {
                    data.set("cpu", om.valueToTree(this.getCpu()));
                }
                if (this.getEnvironmentVars() != null) {
                    data.set("environmentVars", om.valueToTree(this.getEnvironmentVars()));
                }
                if (this.getGpu() != null) {
                    data.set("gpu", om.valueToTree(this.getGpu()));
                }
                if (this.getImagePullPolicy() != null) {
                    data.set("imagePullPolicy", om.valueToTree(this.getImagePullPolicy()));
                }
                if (this.getLivenessProbeExecCommands() != null) {
                    data.set("livenessProbeExecCommands", om.valueToTree(this.getLivenessProbeExecCommands()));
                }
                if (this.getLivenessProbeFailureThreshold() != null) {
                    data.set("livenessProbeFailureThreshold", om.valueToTree(this.getLivenessProbeFailureThreshold()));
                }
                if (this.getLivenessProbeHttpGetPath() != null) {
                    data.set("livenessProbeHttpGetPath", om.valueToTree(this.getLivenessProbeHttpGetPath()));
                }
                if (this.getLivenessProbeHttpGetPort() != null) {
                    data.set("livenessProbeHttpGetPort", om.valueToTree(this.getLivenessProbeHttpGetPort()));
                }
                if (this.getLivenessProbeHttpGetScheme() != null) {
                    data.set("livenessProbeHttpGetScheme", om.valueToTree(this.getLivenessProbeHttpGetScheme()));
                }
                if (this.getLivenessProbeInitialDelaySeconds() != null) {
                    data.set("livenessProbeInitialDelaySeconds", om.valueToTree(this.getLivenessProbeInitialDelaySeconds()));
                }
                if (this.getLivenessProbePeriodSeconds() != null) {
                    data.set("livenessProbePeriodSeconds", om.valueToTree(this.getLivenessProbePeriodSeconds()));
                }
                if (this.getLivenessProbeSuccessThreshold() != null) {
                    data.set("livenessProbeSuccessThreshold", om.valueToTree(this.getLivenessProbeSuccessThreshold()));
                }
                if (this.getLivenessProbeTcpSocketPort() != null) {
                    data.set("livenessProbeTcpSocketPort", om.valueToTree(this.getLivenessProbeTcpSocketPort()));
                }
                if (this.getLivenessProbeTimeoutSeconds() != null) {
                    data.set("livenessProbeTimeoutSeconds", om.valueToTree(this.getLivenessProbeTimeoutSeconds()));
                }
                if (this.getMemory() != null) {
                    data.set("memory", om.valueToTree(this.getMemory()));
                }
                if (this.getPorts() != null) {
                    data.set("ports", om.valueToTree(this.getPorts()));
                }
                if (this.getReadinessProbeExecCommands() != null) {
                    data.set("readinessProbeExecCommands", om.valueToTree(this.getReadinessProbeExecCommands()));
                }
                if (this.getReadinessProbeFailureThreshold() != null) {
                    data.set("readinessProbeFailureThreshold", om.valueToTree(this.getReadinessProbeFailureThreshold()));
                }
                if (this.getReadinessProbeHttpGetPath() != null) {
                    data.set("readinessProbeHttpGetPath", om.valueToTree(this.getReadinessProbeHttpGetPath()));
                }
                if (this.getReadinessProbeHttpGetPort() != null) {
                    data.set("readinessProbeHttpGetPort", om.valueToTree(this.getReadinessProbeHttpGetPort()));
                }
                if (this.getReadinessProbeHttpGetScheme() != null) {
                    data.set("readinessProbeHttpGetScheme", om.valueToTree(this.getReadinessProbeHttpGetScheme()));
                }
                if (this.getReadinessProbeInitialDelaySeconds() != null) {
                    data.set("readinessProbeInitialDelaySeconds", om.valueToTree(this.getReadinessProbeInitialDelaySeconds()));
                }
                if (this.getReadinessProbePeriodSeconds() != null) {
                    data.set("readinessProbePeriodSeconds", om.valueToTree(this.getReadinessProbePeriodSeconds()));
                }
                if (this.getReadinessProbeSuccessThreshold() != null) {
                    data.set("readinessProbeSuccessThreshold", om.valueToTree(this.getReadinessProbeSuccessThreshold()));
                }
                if (this.getReadinessProbeTcpSocketPort() != null) {
                    data.set("readinessProbeTcpSocketPort", om.valueToTree(this.getReadinessProbeTcpSocketPort()));
                }
                if (this.getReadinessProbeTimeoutSeconds() != null) {
                    data.set("readinessProbeTimeoutSeconds", om.valueToTree(this.getReadinessProbeTimeoutSeconds()));
                }
                if (this.getSecurityContextCapabilitiesAdd() != null) {
                    data.set("securityContextCapabilitiesAdd", om.valueToTree(this.getSecurityContextCapabilitiesAdd()));
                }
                if (this.getSecurityContextRunAsUser() != null) {
                    data.set("securityContextRunAsUser", om.valueToTree(this.getSecurityContextRunAsUser()));
                }
                if (this.getStdin() != null) {
                    data.set("stdin", om.valueToTree(this.getStdin()));
                }
                if (this.getStdinOnce() != null) {
                    data.set("stdinOnce", om.valueToTree(this.getStdinOnce()));
                }
                if (this.getTty() != null) {
                    data.set("tty", om.valueToTree(this.getTty()));
                }
                if (this.getVolumeMounts() != null) {
                    data.set("volumeMounts", om.valueToTree(this.getVolumeMounts()));
                }
                if (this.getWorkingDir() != null) {
                    data.set("workingDir", om.valueToTree(this.getWorkingDir()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ess.RosEciScalingConfiguration.ContainersProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                ContainersProperty.Jsii$Proxy that = (ContainersProperty.Jsii$Proxy) o;

                if (!image.equals(that.image)) return false;
                if (!name.equals(that.name)) return false;
                if (this.args != null ? !this.args.equals(that.args) : that.args != null) return false;
                if (this.commands != null ? !this.commands.equals(that.commands) : that.commands != null) return false;
                if (this.cpu != null ? !this.cpu.equals(that.cpu) : that.cpu != null) return false;
                if (this.environmentVars != null ? !this.environmentVars.equals(that.environmentVars) : that.environmentVars != null) return false;
                if (this.gpu != null ? !this.gpu.equals(that.gpu) : that.gpu != null) return false;
                if (this.imagePullPolicy != null ? !this.imagePullPolicy.equals(that.imagePullPolicy) : that.imagePullPolicy != null) return false;
                if (this.livenessProbeExecCommands != null ? !this.livenessProbeExecCommands.equals(that.livenessProbeExecCommands) : that.livenessProbeExecCommands != null) return false;
                if (this.livenessProbeFailureThreshold != null ? !this.livenessProbeFailureThreshold.equals(that.livenessProbeFailureThreshold) : that.livenessProbeFailureThreshold != null) return false;
                if (this.livenessProbeHttpGetPath != null ? !this.livenessProbeHttpGetPath.equals(that.livenessProbeHttpGetPath) : that.livenessProbeHttpGetPath != null) return false;
                if (this.livenessProbeHttpGetPort != null ? !this.livenessProbeHttpGetPort.equals(that.livenessProbeHttpGetPort) : that.livenessProbeHttpGetPort != null) return false;
                if (this.livenessProbeHttpGetScheme != null ? !this.livenessProbeHttpGetScheme.equals(that.livenessProbeHttpGetScheme) : that.livenessProbeHttpGetScheme != null) return false;
                if (this.livenessProbeInitialDelaySeconds != null ? !this.livenessProbeInitialDelaySeconds.equals(that.livenessProbeInitialDelaySeconds) : that.livenessProbeInitialDelaySeconds != null) return false;
                if (this.livenessProbePeriodSeconds != null ? !this.livenessProbePeriodSeconds.equals(that.livenessProbePeriodSeconds) : that.livenessProbePeriodSeconds != null) return false;
                if (this.livenessProbeSuccessThreshold != null ? !this.livenessProbeSuccessThreshold.equals(that.livenessProbeSuccessThreshold) : that.livenessProbeSuccessThreshold != null) return false;
                if (this.livenessProbeTcpSocketPort != null ? !this.livenessProbeTcpSocketPort.equals(that.livenessProbeTcpSocketPort) : that.livenessProbeTcpSocketPort != null) return false;
                if (this.livenessProbeTimeoutSeconds != null ? !this.livenessProbeTimeoutSeconds.equals(that.livenessProbeTimeoutSeconds) : that.livenessProbeTimeoutSeconds != null) return false;
                if (this.memory != null ? !this.memory.equals(that.memory) : that.memory != null) return false;
                if (this.ports != null ? !this.ports.equals(that.ports) : that.ports != null) return false;
                if (this.readinessProbeExecCommands != null ? !this.readinessProbeExecCommands.equals(that.readinessProbeExecCommands) : that.readinessProbeExecCommands != null) return false;
                if (this.readinessProbeFailureThreshold != null ? !this.readinessProbeFailureThreshold.equals(that.readinessProbeFailureThreshold) : that.readinessProbeFailureThreshold != null) return false;
                if (this.readinessProbeHttpGetPath != null ? !this.readinessProbeHttpGetPath.equals(that.readinessProbeHttpGetPath) : that.readinessProbeHttpGetPath != null) return false;
                if (this.readinessProbeHttpGetPort != null ? !this.readinessProbeHttpGetPort.equals(that.readinessProbeHttpGetPort) : that.readinessProbeHttpGetPort != null) return false;
                if (this.readinessProbeHttpGetScheme != null ? !this.readinessProbeHttpGetScheme.equals(that.readinessProbeHttpGetScheme) : that.readinessProbeHttpGetScheme != null) return false;
                if (this.readinessProbeInitialDelaySeconds != null ? !this.readinessProbeInitialDelaySeconds.equals(that.readinessProbeInitialDelaySeconds) : that.readinessProbeInitialDelaySeconds != null) return false;
                if (this.readinessProbePeriodSeconds != null ? !this.readinessProbePeriodSeconds.equals(that.readinessProbePeriodSeconds) : that.readinessProbePeriodSeconds != null) return false;
                if (this.readinessProbeSuccessThreshold != null ? !this.readinessProbeSuccessThreshold.equals(that.readinessProbeSuccessThreshold) : that.readinessProbeSuccessThreshold != null) return false;
                if (this.readinessProbeTcpSocketPort != null ? !this.readinessProbeTcpSocketPort.equals(that.readinessProbeTcpSocketPort) : that.readinessProbeTcpSocketPort != null) return false;
                if (this.readinessProbeTimeoutSeconds != null ? !this.readinessProbeTimeoutSeconds.equals(that.readinessProbeTimeoutSeconds) : that.readinessProbeTimeoutSeconds != null) return false;
                if (this.securityContextCapabilitiesAdd != null ? !this.securityContextCapabilitiesAdd.equals(that.securityContextCapabilitiesAdd) : that.securityContextCapabilitiesAdd != null) return false;
                if (this.securityContextRunAsUser != null ? !this.securityContextRunAsUser.equals(that.securityContextRunAsUser) : that.securityContextRunAsUser != null) return false;
                if (this.stdin != null ? !this.stdin.equals(that.stdin) : that.stdin != null) return false;
                if (this.stdinOnce != null ? !this.stdinOnce.equals(that.stdinOnce) : that.stdinOnce != null) return false;
                if (this.tty != null ? !this.tty.equals(that.tty) : that.tty != null) return false;
                if (this.volumeMounts != null ? !this.volumeMounts.equals(that.volumeMounts) : that.volumeMounts != null) return false;
                return this.workingDir != null ? this.workingDir.equals(that.workingDir) : that.workingDir == null;
            }

            @Override
            public final int hashCode() {
                int result = this.image.hashCode();
                result = 31 * result + (this.name.hashCode());
                result = 31 * result + (this.args != null ? this.args.hashCode() : 0);
                result = 31 * result + (this.commands != null ? this.commands.hashCode() : 0);
                result = 31 * result + (this.cpu != null ? this.cpu.hashCode() : 0);
                result = 31 * result + (this.environmentVars != null ? this.environmentVars.hashCode() : 0);
                result = 31 * result + (this.gpu != null ? this.gpu.hashCode() : 0);
                result = 31 * result + (this.imagePullPolicy != null ? this.imagePullPolicy.hashCode() : 0);
                result = 31 * result + (this.livenessProbeExecCommands != null ? this.livenessProbeExecCommands.hashCode() : 0);
                result = 31 * result + (this.livenessProbeFailureThreshold != null ? this.livenessProbeFailureThreshold.hashCode() : 0);
                result = 31 * result + (this.livenessProbeHttpGetPath != null ? this.livenessProbeHttpGetPath.hashCode() : 0);
                result = 31 * result + (this.livenessProbeHttpGetPort != null ? this.livenessProbeHttpGetPort.hashCode() : 0);
                result = 31 * result + (this.livenessProbeHttpGetScheme != null ? this.livenessProbeHttpGetScheme.hashCode() : 0);
                result = 31 * result + (this.livenessProbeInitialDelaySeconds != null ? this.livenessProbeInitialDelaySeconds.hashCode() : 0);
                result = 31 * result + (this.livenessProbePeriodSeconds != null ? this.livenessProbePeriodSeconds.hashCode() : 0);
                result = 31 * result + (this.livenessProbeSuccessThreshold != null ? this.livenessProbeSuccessThreshold.hashCode() : 0);
                result = 31 * result + (this.livenessProbeTcpSocketPort != null ? this.livenessProbeTcpSocketPort.hashCode() : 0);
                result = 31 * result + (this.livenessProbeTimeoutSeconds != null ? this.livenessProbeTimeoutSeconds.hashCode() : 0);
                result = 31 * result + (this.memory != null ? this.memory.hashCode() : 0);
                result = 31 * result + (this.ports != null ? this.ports.hashCode() : 0);
                result = 31 * result + (this.readinessProbeExecCommands != null ? this.readinessProbeExecCommands.hashCode() : 0);
                result = 31 * result + (this.readinessProbeFailureThreshold != null ? this.readinessProbeFailureThreshold.hashCode() : 0);
                result = 31 * result + (this.readinessProbeHttpGetPath != null ? this.readinessProbeHttpGetPath.hashCode() : 0);
                result = 31 * result + (this.readinessProbeHttpGetPort != null ? this.readinessProbeHttpGetPort.hashCode() : 0);
                result = 31 * result + (this.readinessProbeHttpGetScheme != null ? this.readinessProbeHttpGetScheme.hashCode() : 0);
                result = 31 * result + (this.readinessProbeInitialDelaySeconds != null ? this.readinessProbeInitialDelaySeconds.hashCode() : 0);
                result = 31 * result + (this.readinessProbePeriodSeconds != null ? this.readinessProbePeriodSeconds.hashCode() : 0);
                result = 31 * result + (this.readinessProbeSuccessThreshold != null ? this.readinessProbeSuccessThreshold.hashCode() : 0);
                result = 31 * result + (this.readinessProbeTcpSocketPort != null ? this.readinessProbeTcpSocketPort.hashCode() : 0);
                result = 31 * result + (this.readinessProbeTimeoutSeconds != null ? this.readinessProbeTimeoutSeconds.hashCode() : 0);
                result = 31 * result + (this.securityContextCapabilitiesAdd != null ? this.securityContextCapabilitiesAdd.hashCode() : 0);
                result = 31 * result + (this.securityContextRunAsUser != null ? this.securityContextRunAsUser.hashCode() : 0);
                result = 31 * result + (this.stdin != null ? this.stdin.hashCode() : 0);
                result = 31 * result + (this.stdinOnce != null ? this.stdinOnce.hashCode() : 0);
                result = 31 * result + (this.tty != null ? this.tty.hashCode() : 0);
                result = 31 * result + (this.volumeMounts != null ? this.volumeMounts.hashCode() : 0);
                result = 31 * result + (this.workingDir != null ? this.workingDir.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ess.$Module.class, fqn = "@alicloud/ros-cdk-ess.RosEciScalingConfiguration.DnsConfigOptionsProperty")
    @software.amazon.jsii.Jsii.Proxy(DnsConfigOptionsProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface DnsConfigOptionsProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getName();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getValue();

        /**
         * @return a {@link Builder} of {@link DnsConfigOptionsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link DnsConfigOptionsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<DnsConfigOptionsProperty> {
            java.lang.Object name;
            java.lang.Object value;

            /**
             * Sets the value of {@link DnsConfigOptionsProperty#getName}
             * @param name the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder name(java.lang.String name) {
                this.name = name;
                return this;
            }

            /**
             * Sets the value of {@link DnsConfigOptionsProperty#getName}
             * @param name the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder name(com.aliyun.ros.cdk.core.IResolvable name) {
                this.name = name;
                return this;
            }

            /**
             * Sets the value of {@link DnsConfigOptionsProperty#getValue}
             * @param value the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder value(java.lang.String value) {
                this.value = value;
                return this;
            }

            /**
             * Sets the value of {@link DnsConfigOptionsProperty#getValue}
             * @param value the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder value(com.aliyun.ros.cdk.core.IResolvable value) {
                this.value = value;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link DnsConfigOptionsProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public DnsConfigOptionsProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link DnsConfigOptionsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements DnsConfigOptionsProperty {
            private final java.lang.Object name;
            private final java.lang.Object value;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.name = software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.value = software.amazon.jsii.Kernel.get(this, "value", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.name = java.util.Objects.requireNonNull(builder.name, "name is required");
                this.value = java.util.Objects.requireNonNull(builder.value, "value is required");
            }

            @Override
            public final java.lang.Object getName() {
                return this.name;
            }

            @Override
            public final java.lang.Object getValue() {
                return this.value;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("name", om.valueToTree(this.getName()));
                data.set("value", om.valueToTree(this.getValue()));

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ess.RosEciScalingConfiguration.DnsConfigOptionsProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                DnsConfigOptionsProperty.Jsii$Proxy that = (DnsConfigOptionsProperty.Jsii$Proxy) o;

                if (!name.equals(that.name)) return false;
                return this.value.equals(that.value);
            }

            @Override
            public final int hashCode() {
                int result = this.name.hashCode();
                result = 31 * result + (this.value.hashCode());
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ess.$Module.class, fqn = "@alicloud/ros-cdk-ess.RosEciScalingConfiguration.EnvironmentVarsProperty")
    @software.amazon.jsii.Jsii.Proxy(EnvironmentVarsProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface EnvironmentVarsProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getKey() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getValue() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link EnvironmentVarsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link EnvironmentVarsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<EnvironmentVarsProperty> {
            java.lang.Object key;
            java.lang.Object value;

            /**
             * Sets the value of {@link EnvironmentVarsProperty#getKey}
             * @param key the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder key(java.lang.String key) {
                this.key = key;
                return this;
            }

            /**
             * Sets the value of {@link EnvironmentVarsProperty#getKey}
             * @param key the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder key(com.aliyun.ros.cdk.core.IResolvable key) {
                this.key = key;
                return this;
            }

            /**
             * Sets the value of {@link EnvironmentVarsProperty#getValue}
             * @param value the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder value(java.lang.String value) {
                this.value = value;
                return this;
            }

            /**
             * Sets the value of {@link EnvironmentVarsProperty#getValue}
             * @param value the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder value(com.aliyun.ros.cdk.core.IResolvable value) {
                this.value = value;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link EnvironmentVarsProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public EnvironmentVarsProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link EnvironmentVarsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements EnvironmentVarsProperty {
            private final java.lang.Object key;
            private final java.lang.Object value;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.key = software.amazon.jsii.Kernel.get(this, "key", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.value = software.amazon.jsii.Kernel.get(this, "value", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.key = builder.key;
                this.value = builder.value;
            }

            @Override
            public final java.lang.Object getKey() {
                return this.key;
            }

            @Override
            public final java.lang.Object getValue() {
                return this.value;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getKey() != null) {
                    data.set("key", om.valueToTree(this.getKey()));
                }
                if (this.getValue() != null) {
                    data.set("value", om.valueToTree(this.getValue()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ess.RosEciScalingConfiguration.EnvironmentVarsProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                EnvironmentVarsProperty.Jsii$Proxy that = (EnvironmentVarsProperty.Jsii$Proxy) o;

                if (this.key != null ? !this.key.equals(that.key) : that.key != null) return false;
                return this.value != null ? this.value.equals(that.value) : that.value == null;
            }

            @Override
            public final int hashCode() {
                int result = this.key != null ? this.key.hashCode() : 0;
                result = 31 * result + (this.value != null ? this.value.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ess.$Module.class, fqn = "@alicloud/ros-cdk-ess.RosEciScalingConfiguration.HostAliasesProperty")
    @software.amazon.jsii.Jsii.Proxy(HostAliasesProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface HostAliasesProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getIp();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getHostnames() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link HostAliasesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link HostAliasesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<HostAliasesProperty> {
            java.lang.Object ip;
            java.lang.Object hostnames;

            /**
             * Sets the value of {@link HostAliasesProperty#getIp}
             * @param ip the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ip(java.lang.String ip) {
                this.ip = ip;
                return this;
            }

            /**
             * Sets the value of {@link HostAliasesProperty#getIp}
             * @param ip the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder ip(com.aliyun.ros.cdk.core.IResolvable ip) {
                this.ip = ip;
                return this;
            }

            /**
             * Sets the value of {@link HostAliasesProperty#getHostnames}
             * @param hostnames the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder hostnames(com.aliyun.ros.cdk.core.IResolvable hostnames) {
                this.hostnames = hostnames;
                return this;
            }

            /**
             * Sets the value of {@link HostAliasesProperty#getHostnames}
             * @param hostnames the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder hostnames(java.util.List<? extends java.lang.Object> hostnames) {
                this.hostnames = hostnames;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link HostAliasesProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public HostAliasesProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link HostAliasesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements HostAliasesProperty {
            private final java.lang.Object ip;
            private final java.lang.Object hostnames;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.ip = software.amazon.jsii.Kernel.get(this, "ip", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.hostnames = software.amazon.jsii.Kernel.get(this, "hostnames", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.ip = java.util.Objects.requireNonNull(builder.ip, "ip is required");
                this.hostnames = builder.hostnames;
            }

            @Override
            public final java.lang.Object getIp() {
                return this.ip;
            }

            @Override
            public final java.lang.Object getHostnames() {
                return this.hostnames;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("ip", om.valueToTree(this.getIp()));
                if (this.getHostnames() != null) {
                    data.set("hostnames", om.valueToTree(this.getHostnames()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ess.RosEciScalingConfiguration.HostAliasesProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                HostAliasesProperty.Jsii$Proxy that = (HostAliasesProperty.Jsii$Proxy) o;

                if (!ip.equals(that.ip)) return false;
                return this.hostnames != null ? this.hostnames.equals(that.hostnames) : that.hostnames == null;
            }

            @Override
            public final int hashCode() {
                int result = this.ip.hashCode();
                result = 31 * result + (this.hostnames != null ? this.hostnames.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ess.$Module.class, fqn = "@alicloud/ros-cdk-ess.RosEciScalingConfiguration.ImageRegistryCredentialsProperty")
    @software.amazon.jsii.Jsii.Proxy(ImageRegistryCredentialsProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface ImageRegistryCredentialsProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getPassword();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getServer();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getUserName();

        /**
         * @return a {@link Builder} of {@link ImageRegistryCredentialsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link ImageRegistryCredentialsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<ImageRegistryCredentialsProperty> {
            java.lang.Object password;
            java.lang.Object server;
            java.lang.Object userName;

            /**
             * Sets the value of {@link ImageRegistryCredentialsProperty#getPassword}
             * @param password the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder password(java.lang.String password) {
                this.password = password;
                return this;
            }

            /**
             * Sets the value of {@link ImageRegistryCredentialsProperty#getPassword}
             * @param password the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder password(com.aliyun.ros.cdk.core.IResolvable password) {
                this.password = password;
                return this;
            }

            /**
             * Sets the value of {@link ImageRegistryCredentialsProperty#getServer}
             * @param server the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder server(java.lang.String server) {
                this.server = server;
                return this;
            }

            /**
             * Sets the value of {@link ImageRegistryCredentialsProperty#getServer}
             * @param server the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder server(com.aliyun.ros.cdk.core.IResolvable server) {
                this.server = server;
                return this;
            }

            /**
             * Sets the value of {@link ImageRegistryCredentialsProperty#getUserName}
             * @param userName the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder userName(java.lang.String userName) {
                this.userName = userName;
                return this;
            }

            /**
             * Sets the value of {@link ImageRegistryCredentialsProperty#getUserName}
             * @param userName the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder userName(com.aliyun.ros.cdk.core.IResolvable userName) {
                this.userName = userName;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link ImageRegistryCredentialsProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public ImageRegistryCredentialsProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link ImageRegistryCredentialsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ImageRegistryCredentialsProperty {
            private final java.lang.Object password;
            private final java.lang.Object server;
            private final java.lang.Object userName;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.password = software.amazon.jsii.Kernel.get(this, "password", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.server = software.amazon.jsii.Kernel.get(this, "server", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.userName = software.amazon.jsii.Kernel.get(this, "userName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.password = java.util.Objects.requireNonNull(builder.password, "password is required");
                this.server = java.util.Objects.requireNonNull(builder.server, "server is required");
                this.userName = java.util.Objects.requireNonNull(builder.userName, "userName is required");
            }

            @Override
            public final java.lang.Object getPassword() {
                return this.password;
            }

            @Override
            public final java.lang.Object getServer() {
                return this.server;
            }

            @Override
            public final java.lang.Object getUserName() {
                return this.userName;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("password", om.valueToTree(this.getPassword()));
                data.set("server", om.valueToTree(this.getServer()));
                data.set("userName", om.valueToTree(this.getUserName()));

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ess.RosEciScalingConfiguration.ImageRegistryCredentialsProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                ImageRegistryCredentialsProperty.Jsii$Proxy that = (ImageRegistryCredentialsProperty.Jsii$Proxy) o;

                if (!password.equals(that.password)) return false;
                if (!server.equals(that.server)) return false;
                return this.userName.equals(that.userName);
            }

            @Override
            public final int hashCode() {
                int result = this.password.hashCode();
                result = 31 * result + (this.server.hashCode());
                result = 31 * result + (this.userName.hashCode());
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ess.$Module.class, fqn = "@alicloud/ros-cdk-ess.RosEciScalingConfiguration.InitContainerEnvironmentVarsProperty")
    @software.amazon.jsii.Jsii.Proxy(InitContainerEnvironmentVarsProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface InitContainerEnvironmentVarsProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getKey() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getValue() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link InitContainerEnvironmentVarsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link InitContainerEnvironmentVarsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<InitContainerEnvironmentVarsProperty> {
            java.lang.Object key;
            java.lang.Object value;

            /**
             * Sets the value of {@link InitContainerEnvironmentVarsProperty#getKey}
             * @param key the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder key(java.lang.String key) {
                this.key = key;
                return this;
            }

            /**
             * Sets the value of {@link InitContainerEnvironmentVarsProperty#getKey}
             * @param key the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder key(com.aliyun.ros.cdk.core.IResolvable key) {
                this.key = key;
                return this;
            }

            /**
             * Sets the value of {@link InitContainerEnvironmentVarsProperty#getValue}
             * @param value the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder value(java.lang.String value) {
                this.value = value;
                return this;
            }

            /**
             * Sets the value of {@link InitContainerEnvironmentVarsProperty#getValue}
             * @param value the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder value(com.aliyun.ros.cdk.core.IResolvable value) {
                this.value = value;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link InitContainerEnvironmentVarsProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public InitContainerEnvironmentVarsProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link InitContainerEnvironmentVarsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements InitContainerEnvironmentVarsProperty {
            private final java.lang.Object key;
            private final java.lang.Object value;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.key = software.amazon.jsii.Kernel.get(this, "key", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.value = software.amazon.jsii.Kernel.get(this, "value", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.key = builder.key;
                this.value = builder.value;
            }

            @Override
            public final java.lang.Object getKey() {
                return this.key;
            }

            @Override
            public final java.lang.Object getValue() {
                return this.value;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getKey() != null) {
                    data.set("key", om.valueToTree(this.getKey()));
                }
                if (this.getValue() != null) {
                    data.set("value", om.valueToTree(this.getValue()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ess.RosEciScalingConfiguration.InitContainerEnvironmentVarsProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                InitContainerEnvironmentVarsProperty.Jsii$Proxy that = (InitContainerEnvironmentVarsProperty.Jsii$Proxy) o;

                if (this.key != null ? !this.key.equals(that.key) : that.key != null) return false;
                return this.value != null ? this.value.equals(that.value) : that.value == null;
            }

            @Override
            public final int hashCode() {
                int result = this.key != null ? this.key.hashCode() : 0;
                result = 31 * result + (this.value != null ? this.value.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ess.$Module.class, fqn = "@alicloud/ros-cdk-ess.RosEciScalingConfiguration.InitContainerVolumeMountsProperty")
    @software.amazon.jsii.Jsii.Proxy(InitContainerVolumeMountsProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface InitContainerVolumeMountsProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getName();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getMountPath() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getMountPropagation() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getReadOnly() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getSubPath() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link InitContainerVolumeMountsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link InitContainerVolumeMountsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<InitContainerVolumeMountsProperty> {
            java.lang.Object name;
            java.lang.Object mountPath;
            java.lang.Object mountPropagation;
            java.lang.Object readOnly;
            java.lang.Object subPath;

            /**
             * Sets the value of {@link InitContainerVolumeMountsProperty#getName}
             * @param name the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder name(java.lang.String name) {
                this.name = name;
                return this;
            }

            /**
             * Sets the value of {@link InitContainerVolumeMountsProperty#getName}
             * @param name the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder name(com.aliyun.ros.cdk.core.IResolvable name) {
                this.name = name;
                return this;
            }

            /**
             * Sets the value of {@link InitContainerVolumeMountsProperty#getMountPath}
             * @param mountPath the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder mountPath(java.lang.String mountPath) {
                this.mountPath = mountPath;
                return this;
            }

            /**
             * Sets the value of {@link InitContainerVolumeMountsProperty#getMountPath}
             * @param mountPath the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder mountPath(com.aliyun.ros.cdk.core.IResolvable mountPath) {
                this.mountPath = mountPath;
                return this;
            }

            /**
             * Sets the value of {@link InitContainerVolumeMountsProperty#getMountPropagation}
             * @param mountPropagation the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder mountPropagation(java.lang.String mountPropagation) {
                this.mountPropagation = mountPropagation;
                return this;
            }

            /**
             * Sets the value of {@link InitContainerVolumeMountsProperty#getMountPropagation}
             * @param mountPropagation the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder mountPropagation(com.aliyun.ros.cdk.core.IResolvable mountPropagation) {
                this.mountPropagation = mountPropagation;
                return this;
            }

            /**
             * Sets the value of {@link InitContainerVolumeMountsProperty#getReadOnly}
             * @param readOnly the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder readOnly(java.lang.Boolean readOnly) {
                this.readOnly = readOnly;
                return this;
            }

            /**
             * Sets the value of {@link InitContainerVolumeMountsProperty#getReadOnly}
             * @param readOnly the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder readOnly(com.aliyun.ros.cdk.core.IResolvable readOnly) {
                this.readOnly = readOnly;
                return this;
            }

            /**
             * Sets the value of {@link InitContainerVolumeMountsProperty#getSubPath}
             * @param subPath the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder subPath(java.lang.String subPath) {
                this.subPath = subPath;
                return this;
            }

            /**
             * Sets the value of {@link InitContainerVolumeMountsProperty#getSubPath}
             * @param subPath the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder subPath(com.aliyun.ros.cdk.core.IResolvable subPath) {
                this.subPath = subPath;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link InitContainerVolumeMountsProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public InitContainerVolumeMountsProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link InitContainerVolumeMountsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements InitContainerVolumeMountsProperty {
            private final java.lang.Object name;
            private final java.lang.Object mountPath;
            private final java.lang.Object mountPropagation;
            private final java.lang.Object readOnly;
            private final java.lang.Object subPath;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.name = software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.mountPath = software.amazon.jsii.Kernel.get(this, "mountPath", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.mountPropagation = software.amazon.jsii.Kernel.get(this, "mountPropagation", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.readOnly = software.amazon.jsii.Kernel.get(this, "readOnly", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.subPath = software.amazon.jsii.Kernel.get(this, "subPath", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.name = java.util.Objects.requireNonNull(builder.name, "name is required");
                this.mountPath = builder.mountPath;
                this.mountPropagation = builder.mountPropagation;
                this.readOnly = builder.readOnly;
                this.subPath = builder.subPath;
            }

            @Override
            public final java.lang.Object getName() {
                return this.name;
            }

            @Override
            public final java.lang.Object getMountPath() {
                return this.mountPath;
            }

            @Override
            public final java.lang.Object getMountPropagation() {
                return this.mountPropagation;
            }

            @Override
            public final java.lang.Object getReadOnly() {
                return this.readOnly;
            }

            @Override
            public final java.lang.Object getSubPath() {
                return this.subPath;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("name", om.valueToTree(this.getName()));
                if (this.getMountPath() != null) {
                    data.set("mountPath", om.valueToTree(this.getMountPath()));
                }
                if (this.getMountPropagation() != null) {
                    data.set("mountPropagation", om.valueToTree(this.getMountPropagation()));
                }
                if (this.getReadOnly() != null) {
                    data.set("readOnly", om.valueToTree(this.getReadOnly()));
                }
                if (this.getSubPath() != null) {
                    data.set("subPath", om.valueToTree(this.getSubPath()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ess.RosEciScalingConfiguration.InitContainerVolumeMountsProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                InitContainerVolumeMountsProperty.Jsii$Proxy that = (InitContainerVolumeMountsProperty.Jsii$Proxy) o;

                if (!name.equals(that.name)) return false;
                if (this.mountPath != null ? !this.mountPath.equals(that.mountPath) : that.mountPath != null) return false;
                if (this.mountPropagation != null ? !this.mountPropagation.equals(that.mountPropagation) : that.mountPropagation != null) return false;
                if (this.readOnly != null ? !this.readOnly.equals(that.readOnly) : that.readOnly != null) return false;
                return this.subPath != null ? this.subPath.equals(that.subPath) : that.subPath == null;
            }

            @Override
            public final int hashCode() {
                int result = this.name.hashCode();
                result = 31 * result + (this.mountPath != null ? this.mountPath.hashCode() : 0);
                result = 31 * result + (this.mountPropagation != null ? this.mountPropagation.hashCode() : 0);
                result = 31 * result + (this.readOnly != null ? this.readOnly.hashCode() : 0);
                result = 31 * result + (this.subPath != null ? this.subPath.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ess.$Module.class, fqn = "@alicloud/ros-cdk-ess.RosEciScalingConfiguration.InitContainersProperty")
    @software.amazon.jsii.Jsii.Proxy(InitContainersProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface InitContainersProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getImage();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getName();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getArgs() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getCommands() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getCpu() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getGpu() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getImagePullPolicy() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getInitContainerEnvironmentVars() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getInitContainerVolumeMounts() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getMemory() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getSecurityContextCapabilitiesAdd() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getSecurityContextRunAsUser() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getWorkingDir() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link InitContainersProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link InitContainersProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<InitContainersProperty> {
            java.lang.Object image;
            java.lang.Object name;
            java.lang.Object args;
            java.lang.Object commands;
            java.lang.Object cpu;
            java.lang.Object gpu;
            java.lang.Object imagePullPolicy;
            java.lang.Object initContainerEnvironmentVars;
            java.lang.Object initContainerVolumeMounts;
            java.lang.Object memory;
            java.lang.Object securityContextCapabilitiesAdd;
            java.lang.Object securityContextRunAsUser;
            java.lang.Object workingDir;

            /**
             * Sets the value of {@link InitContainersProperty#getImage}
             * @param image the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder image(java.lang.String image) {
                this.image = image;
                return this;
            }

            /**
             * Sets the value of {@link InitContainersProperty#getImage}
             * @param image the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder image(com.aliyun.ros.cdk.core.IResolvable image) {
                this.image = image;
                return this;
            }

            /**
             * Sets the value of {@link InitContainersProperty#getName}
             * @param name the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder name(java.lang.String name) {
                this.name = name;
                return this;
            }

            /**
             * Sets the value of {@link InitContainersProperty#getName}
             * @param name the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder name(com.aliyun.ros.cdk.core.IResolvable name) {
                this.name = name;
                return this;
            }

            /**
             * Sets the value of {@link InitContainersProperty#getArgs}
             * @param args the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder args(com.aliyun.ros.cdk.core.IResolvable args) {
                this.args = args;
                return this;
            }

            /**
             * Sets the value of {@link InitContainersProperty#getArgs}
             * @param args the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder args(java.util.List<? extends java.lang.Object> args) {
                this.args = args;
                return this;
            }

            /**
             * Sets the value of {@link InitContainersProperty#getCommands}
             * @param commands the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder commands(com.aliyun.ros.cdk.core.IResolvable commands) {
                this.commands = commands;
                return this;
            }

            /**
             * Sets the value of {@link InitContainersProperty#getCommands}
             * @param commands the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder commands(java.util.List<? extends java.lang.Object> commands) {
                this.commands = commands;
                return this;
            }

            /**
             * Sets the value of {@link InitContainersProperty#getCpu}
             * @param cpu the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder cpu(java.lang.Number cpu) {
                this.cpu = cpu;
                return this;
            }

            /**
             * Sets the value of {@link InitContainersProperty#getCpu}
             * @param cpu the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder cpu(com.aliyun.ros.cdk.core.IResolvable cpu) {
                this.cpu = cpu;
                return this;
            }

            /**
             * Sets the value of {@link InitContainersProperty#getGpu}
             * @param gpu the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder gpu(java.lang.Number gpu) {
                this.gpu = gpu;
                return this;
            }

            /**
             * Sets the value of {@link InitContainersProperty#getGpu}
             * @param gpu the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder gpu(com.aliyun.ros.cdk.core.IResolvable gpu) {
                this.gpu = gpu;
                return this;
            }

            /**
             * Sets the value of {@link InitContainersProperty#getImagePullPolicy}
             * @param imagePullPolicy the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder imagePullPolicy(java.lang.String imagePullPolicy) {
                this.imagePullPolicy = imagePullPolicy;
                return this;
            }

            /**
             * Sets the value of {@link InitContainersProperty#getImagePullPolicy}
             * @param imagePullPolicy the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder imagePullPolicy(com.aliyun.ros.cdk.core.IResolvable imagePullPolicy) {
                this.imagePullPolicy = imagePullPolicy;
                return this;
            }

            /**
             * Sets the value of {@link InitContainersProperty#getInitContainerEnvironmentVars}
             * @param initContainerEnvironmentVars the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder initContainerEnvironmentVars(com.aliyun.ros.cdk.core.IResolvable initContainerEnvironmentVars) {
                this.initContainerEnvironmentVars = initContainerEnvironmentVars;
                return this;
            }

            /**
             * Sets the value of {@link InitContainersProperty#getInitContainerEnvironmentVars}
             * @param initContainerEnvironmentVars the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder initContainerEnvironmentVars(java.util.List<? extends java.lang.Object> initContainerEnvironmentVars) {
                this.initContainerEnvironmentVars = initContainerEnvironmentVars;
                return this;
            }

            /**
             * Sets the value of {@link InitContainersProperty#getInitContainerVolumeMounts}
             * @param initContainerVolumeMounts the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder initContainerVolumeMounts(com.aliyun.ros.cdk.core.IResolvable initContainerVolumeMounts) {
                this.initContainerVolumeMounts = initContainerVolumeMounts;
                return this;
            }

            /**
             * Sets the value of {@link InitContainersProperty#getInitContainerVolumeMounts}
             * @param initContainerVolumeMounts the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder initContainerVolumeMounts(java.util.List<? extends java.lang.Object> initContainerVolumeMounts) {
                this.initContainerVolumeMounts = initContainerVolumeMounts;
                return this;
            }

            /**
             * Sets the value of {@link InitContainersProperty#getMemory}
             * @param memory the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder memory(java.lang.Number memory) {
                this.memory = memory;
                return this;
            }

            /**
             * Sets the value of {@link InitContainersProperty#getMemory}
             * @param memory the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder memory(com.aliyun.ros.cdk.core.IResolvable memory) {
                this.memory = memory;
                return this;
            }

            /**
             * Sets the value of {@link InitContainersProperty#getSecurityContextCapabilitiesAdd}
             * @param securityContextCapabilitiesAdd the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder securityContextCapabilitiesAdd(com.aliyun.ros.cdk.core.IResolvable securityContextCapabilitiesAdd) {
                this.securityContextCapabilitiesAdd = securityContextCapabilitiesAdd;
                return this;
            }

            /**
             * Sets the value of {@link InitContainersProperty#getSecurityContextCapabilitiesAdd}
             * @param securityContextCapabilitiesAdd the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder securityContextCapabilitiesAdd(java.util.List<? extends java.lang.Object> securityContextCapabilitiesAdd) {
                this.securityContextCapabilitiesAdd = securityContextCapabilitiesAdd;
                return this;
            }

            /**
             * Sets the value of {@link InitContainersProperty#getSecurityContextRunAsUser}
             * @param securityContextRunAsUser the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder securityContextRunAsUser(java.lang.Number securityContextRunAsUser) {
                this.securityContextRunAsUser = securityContextRunAsUser;
                return this;
            }

            /**
             * Sets the value of {@link InitContainersProperty#getSecurityContextRunAsUser}
             * @param securityContextRunAsUser the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder securityContextRunAsUser(com.aliyun.ros.cdk.core.IResolvable securityContextRunAsUser) {
                this.securityContextRunAsUser = securityContextRunAsUser;
                return this;
            }

            /**
             * Sets the value of {@link InitContainersProperty#getWorkingDir}
             * @param workingDir the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder workingDir(java.lang.String workingDir) {
                this.workingDir = workingDir;
                return this;
            }

            /**
             * Sets the value of {@link InitContainersProperty#getWorkingDir}
             * @param workingDir the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder workingDir(com.aliyun.ros.cdk.core.IResolvable workingDir) {
                this.workingDir = workingDir;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link InitContainersProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public InitContainersProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link InitContainersProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements InitContainersProperty {
            private final java.lang.Object image;
            private final java.lang.Object name;
            private final java.lang.Object args;
            private final java.lang.Object commands;
            private final java.lang.Object cpu;
            private final java.lang.Object gpu;
            private final java.lang.Object imagePullPolicy;
            private final java.lang.Object initContainerEnvironmentVars;
            private final java.lang.Object initContainerVolumeMounts;
            private final java.lang.Object memory;
            private final java.lang.Object securityContextCapabilitiesAdd;
            private final java.lang.Object securityContextRunAsUser;
            private final java.lang.Object workingDir;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.image = software.amazon.jsii.Kernel.get(this, "image", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.name = software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.args = software.amazon.jsii.Kernel.get(this, "args", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.commands = software.amazon.jsii.Kernel.get(this, "commands", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.cpu = software.amazon.jsii.Kernel.get(this, "cpu", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.gpu = software.amazon.jsii.Kernel.get(this, "gpu", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.imagePullPolicy = software.amazon.jsii.Kernel.get(this, "imagePullPolicy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.initContainerEnvironmentVars = software.amazon.jsii.Kernel.get(this, "initContainerEnvironmentVars", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.initContainerVolumeMounts = software.amazon.jsii.Kernel.get(this, "initContainerVolumeMounts", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.memory = software.amazon.jsii.Kernel.get(this, "memory", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.securityContextCapabilitiesAdd = software.amazon.jsii.Kernel.get(this, "securityContextCapabilitiesAdd", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.securityContextRunAsUser = software.amazon.jsii.Kernel.get(this, "securityContextRunAsUser", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.workingDir = software.amazon.jsii.Kernel.get(this, "workingDir", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.image = java.util.Objects.requireNonNull(builder.image, "image is required");
                this.name = java.util.Objects.requireNonNull(builder.name, "name is required");
                this.args = builder.args;
                this.commands = builder.commands;
                this.cpu = builder.cpu;
                this.gpu = builder.gpu;
                this.imagePullPolicy = builder.imagePullPolicy;
                this.initContainerEnvironmentVars = builder.initContainerEnvironmentVars;
                this.initContainerVolumeMounts = builder.initContainerVolumeMounts;
                this.memory = builder.memory;
                this.securityContextCapabilitiesAdd = builder.securityContextCapabilitiesAdd;
                this.securityContextRunAsUser = builder.securityContextRunAsUser;
                this.workingDir = builder.workingDir;
            }

            @Override
            public final java.lang.Object getImage() {
                return this.image;
            }

            @Override
            public final java.lang.Object getName() {
                return this.name;
            }

            @Override
            public final java.lang.Object getArgs() {
                return this.args;
            }

            @Override
            public final java.lang.Object getCommands() {
                return this.commands;
            }

            @Override
            public final java.lang.Object getCpu() {
                return this.cpu;
            }

            @Override
            public final java.lang.Object getGpu() {
                return this.gpu;
            }

            @Override
            public final java.lang.Object getImagePullPolicy() {
                return this.imagePullPolicy;
            }

            @Override
            public final java.lang.Object getInitContainerEnvironmentVars() {
                return this.initContainerEnvironmentVars;
            }

            @Override
            public final java.lang.Object getInitContainerVolumeMounts() {
                return this.initContainerVolumeMounts;
            }

            @Override
            public final java.lang.Object getMemory() {
                return this.memory;
            }

            @Override
            public final java.lang.Object getSecurityContextCapabilitiesAdd() {
                return this.securityContextCapabilitiesAdd;
            }

            @Override
            public final java.lang.Object getSecurityContextRunAsUser() {
                return this.securityContextRunAsUser;
            }

            @Override
            public final java.lang.Object getWorkingDir() {
                return this.workingDir;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("image", om.valueToTree(this.getImage()));
                data.set("name", om.valueToTree(this.getName()));
                if (this.getArgs() != null) {
                    data.set("args", om.valueToTree(this.getArgs()));
                }
                if (this.getCommands() != null) {
                    data.set("commands", om.valueToTree(this.getCommands()));
                }
                if (this.getCpu() != null) {
                    data.set("cpu", om.valueToTree(this.getCpu()));
                }
                if (this.getGpu() != null) {
                    data.set("gpu", om.valueToTree(this.getGpu()));
                }
                if (this.getImagePullPolicy() != null) {
                    data.set("imagePullPolicy", om.valueToTree(this.getImagePullPolicy()));
                }
                if (this.getInitContainerEnvironmentVars() != null) {
                    data.set("initContainerEnvironmentVars", om.valueToTree(this.getInitContainerEnvironmentVars()));
                }
                if (this.getInitContainerVolumeMounts() != null) {
                    data.set("initContainerVolumeMounts", om.valueToTree(this.getInitContainerVolumeMounts()));
                }
                if (this.getMemory() != null) {
                    data.set("memory", om.valueToTree(this.getMemory()));
                }
                if (this.getSecurityContextCapabilitiesAdd() != null) {
                    data.set("securityContextCapabilitiesAdd", om.valueToTree(this.getSecurityContextCapabilitiesAdd()));
                }
                if (this.getSecurityContextRunAsUser() != null) {
                    data.set("securityContextRunAsUser", om.valueToTree(this.getSecurityContextRunAsUser()));
                }
                if (this.getWorkingDir() != null) {
                    data.set("workingDir", om.valueToTree(this.getWorkingDir()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ess.RosEciScalingConfiguration.InitContainersProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                InitContainersProperty.Jsii$Proxy that = (InitContainersProperty.Jsii$Proxy) o;

                if (!image.equals(that.image)) return false;
                if (!name.equals(that.name)) return false;
                if (this.args != null ? !this.args.equals(that.args) : that.args != null) return false;
                if (this.commands != null ? !this.commands.equals(that.commands) : that.commands != null) return false;
                if (this.cpu != null ? !this.cpu.equals(that.cpu) : that.cpu != null) return false;
                if (this.gpu != null ? !this.gpu.equals(that.gpu) : that.gpu != null) return false;
                if (this.imagePullPolicy != null ? !this.imagePullPolicy.equals(that.imagePullPolicy) : that.imagePullPolicy != null) return false;
                if (this.initContainerEnvironmentVars != null ? !this.initContainerEnvironmentVars.equals(that.initContainerEnvironmentVars) : that.initContainerEnvironmentVars != null) return false;
                if (this.initContainerVolumeMounts != null ? !this.initContainerVolumeMounts.equals(that.initContainerVolumeMounts) : that.initContainerVolumeMounts != null) return false;
                if (this.memory != null ? !this.memory.equals(that.memory) : that.memory != null) return false;
                if (this.securityContextCapabilitiesAdd != null ? !this.securityContextCapabilitiesAdd.equals(that.securityContextCapabilitiesAdd) : that.securityContextCapabilitiesAdd != null) return false;
                if (this.securityContextRunAsUser != null ? !this.securityContextRunAsUser.equals(that.securityContextRunAsUser) : that.securityContextRunAsUser != null) return false;
                return this.workingDir != null ? this.workingDir.equals(that.workingDir) : that.workingDir == null;
            }

            @Override
            public final int hashCode() {
                int result = this.image.hashCode();
                result = 31 * result + (this.name.hashCode());
                result = 31 * result + (this.args != null ? this.args.hashCode() : 0);
                result = 31 * result + (this.commands != null ? this.commands.hashCode() : 0);
                result = 31 * result + (this.cpu != null ? this.cpu.hashCode() : 0);
                result = 31 * result + (this.gpu != null ? this.gpu.hashCode() : 0);
                result = 31 * result + (this.imagePullPolicy != null ? this.imagePullPolicy.hashCode() : 0);
                result = 31 * result + (this.initContainerEnvironmentVars != null ? this.initContainerEnvironmentVars.hashCode() : 0);
                result = 31 * result + (this.initContainerVolumeMounts != null ? this.initContainerVolumeMounts.hashCode() : 0);
                result = 31 * result + (this.memory != null ? this.memory.hashCode() : 0);
                result = 31 * result + (this.securityContextCapabilitiesAdd != null ? this.securityContextCapabilitiesAdd.hashCode() : 0);
                result = 31 * result + (this.securityContextRunAsUser != null ? this.securityContextRunAsUser.hashCode() : 0);
                result = 31 * result + (this.workingDir != null ? this.workingDir.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ess.$Module.class, fqn = "@alicloud/ros-cdk-ess.RosEciScalingConfiguration.PortsProperty")
    @software.amazon.jsii.Jsii.Proxy(PortsProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface PortsProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getPort();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getProtocol();

        /**
         * @return a {@link Builder} of {@link PortsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link PortsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<PortsProperty> {
            java.lang.Object port;
            java.lang.Object protocol;

            /**
             * Sets the value of {@link PortsProperty#getPort}
             * @param port the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder port(java.lang.Number port) {
                this.port = port;
                return this;
            }

            /**
             * Sets the value of {@link PortsProperty#getPort}
             * @param port the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder port(com.aliyun.ros.cdk.core.IResolvable port) {
                this.port = port;
                return this;
            }

            /**
             * Sets the value of {@link PortsProperty#getProtocol}
             * @param protocol the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder protocol(java.lang.String protocol) {
                this.protocol = protocol;
                return this;
            }

            /**
             * Sets the value of {@link PortsProperty#getProtocol}
             * @param protocol the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder protocol(com.aliyun.ros.cdk.core.IResolvable protocol) {
                this.protocol = protocol;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link PortsProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public PortsProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link PortsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements PortsProperty {
            private final java.lang.Object port;
            private final java.lang.Object protocol;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.port = software.amazon.jsii.Kernel.get(this, "port", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.protocol = software.amazon.jsii.Kernel.get(this, "protocol", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.port = java.util.Objects.requireNonNull(builder.port, "port is required");
                this.protocol = java.util.Objects.requireNonNull(builder.protocol, "protocol is required");
            }

            @Override
            public final java.lang.Object getPort() {
                return this.port;
            }

            @Override
            public final java.lang.Object getProtocol() {
                return this.protocol;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("port", om.valueToTree(this.getPort()));
                data.set("protocol", om.valueToTree(this.getProtocol()));

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ess.RosEciScalingConfiguration.PortsProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                PortsProperty.Jsii$Proxy that = (PortsProperty.Jsii$Proxy) o;

                if (!port.equals(that.port)) return false;
                return this.protocol.equals(that.protocol);
            }

            @Override
            public final int hashCode() {
                int result = this.port.hashCode();
                result = 31 * result + (this.protocol.hashCode());
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ess.$Module.class, fqn = "@alicloud/ros-cdk-ess.RosEciScalingConfiguration.SecurityContextSysctlsProperty")
    @software.amazon.jsii.Jsii.Proxy(SecurityContextSysctlsProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface SecurityContextSysctlsProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getName();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getValue() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link SecurityContextSysctlsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link SecurityContextSysctlsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<SecurityContextSysctlsProperty> {
            java.lang.Object name;
            java.lang.Object value;

            /**
             * Sets the value of {@link SecurityContextSysctlsProperty#getName}
             * @param name the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder name(java.lang.String name) {
                this.name = name;
                return this;
            }

            /**
             * Sets the value of {@link SecurityContextSysctlsProperty#getName}
             * @param name the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder name(com.aliyun.ros.cdk.core.IResolvable name) {
                this.name = name;
                return this;
            }

            /**
             * Sets the value of {@link SecurityContextSysctlsProperty#getValue}
             * @param value the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder value(java.lang.String value) {
                this.value = value;
                return this;
            }

            /**
             * Sets the value of {@link SecurityContextSysctlsProperty#getValue}
             * @param value the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder value(com.aliyun.ros.cdk.core.IResolvable value) {
                this.value = value;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link SecurityContextSysctlsProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public SecurityContextSysctlsProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link SecurityContextSysctlsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements SecurityContextSysctlsProperty {
            private final java.lang.Object name;
            private final java.lang.Object value;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.name = software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.value = software.amazon.jsii.Kernel.get(this, "value", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.name = java.util.Objects.requireNonNull(builder.name, "name is required");
                this.value = builder.value;
            }

            @Override
            public final java.lang.Object getName() {
                return this.name;
            }

            @Override
            public final java.lang.Object getValue() {
                return this.value;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("name", om.valueToTree(this.getName()));
                if (this.getValue() != null) {
                    data.set("value", om.valueToTree(this.getValue()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ess.RosEciScalingConfiguration.SecurityContextSysctlsProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                SecurityContextSysctlsProperty.Jsii$Proxy that = (SecurityContextSysctlsProperty.Jsii$Proxy) o;

                if (!name.equals(that.name)) return false;
                return this.value != null ? this.value.equals(that.value) : that.value == null;
            }

            @Override
            public final int hashCode() {
                int result = this.name.hashCode();
                result = 31 * result + (this.value != null ? this.value.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ess.$Module.class, fqn = "@alicloud/ros-cdk-ess.RosEciScalingConfiguration.TagsProperty")
    @software.amazon.jsii.Jsii.Proxy(TagsProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface TagsProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getKey();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getValue() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link TagsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link TagsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<TagsProperty> {
            java.lang.Object key;
            java.lang.Object value;

            /**
             * Sets the value of {@link TagsProperty#getKey}
             * @param key the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder key(java.lang.String key) {
                this.key = key;
                return this;
            }

            /**
             * Sets the value of {@link TagsProperty#getKey}
             * @param key the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder key(com.aliyun.ros.cdk.core.IResolvable key) {
                this.key = key;
                return this;
            }

            /**
             * Sets the value of {@link TagsProperty#getValue}
             * @param value the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder value(java.lang.String value) {
                this.value = value;
                return this;
            }

            /**
             * Sets the value of {@link TagsProperty#getValue}
             * @param value the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder value(com.aliyun.ros.cdk.core.IResolvable value) {
                this.value = value;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link TagsProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public TagsProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link TagsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements TagsProperty {
            private final java.lang.Object key;
            private final java.lang.Object value;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.key = software.amazon.jsii.Kernel.get(this, "key", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.value = software.amazon.jsii.Kernel.get(this, "value", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.key = java.util.Objects.requireNonNull(builder.key, "key is required");
                this.value = builder.value;
            }

            @Override
            public final java.lang.Object getKey() {
                return this.key;
            }

            @Override
            public final java.lang.Object getValue() {
                return this.value;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("key", om.valueToTree(this.getKey()));
                if (this.getValue() != null) {
                    data.set("value", om.valueToTree(this.getValue()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ess.RosEciScalingConfiguration.TagsProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                TagsProperty.Jsii$Proxy that = (TagsProperty.Jsii$Proxy) o;

                if (!key.equals(that.key)) return false;
                return this.value != null ? this.value.equals(that.value) : that.value == null;
            }

            @Override
            public final int hashCode() {
                int result = this.key.hashCode();
                result = 31 * result + (this.value != null ? this.value.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ess.$Module.class, fqn = "@alicloud/ros-cdk-ess.RosEciScalingConfiguration.VolumeMountsProperty")
    @software.amazon.jsii.Jsii.Proxy(VolumeMountsProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface VolumeMountsProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getMountPath() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getMountPropagation() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getName() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getReadOnly() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getSubPath() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link VolumeMountsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link VolumeMountsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<VolumeMountsProperty> {
            java.lang.Object mountPath;
            java.lang.Object mountPropagation;
            java.lang.Object name;
            java.lang.Object readOnly;
            java.lang.Object subPath;

            /**
             * Sets the value of {@link VolumeMountsProperty#getMountPath}
             * @param mountPath the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder mountPath(java.lang.String mountPath) {
                this.mountPath = mountPath;
                return this;
            }

            /**
             * Sets the value of {@link VolumeMountsProperty#getMountPath}
             * @param mountPath the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder mountPath(com.aliyun.ros.cdk.core.IResolvable mountPath) {
                this.mountPath = mountPath;
                return this;
            }

            /**
             * Sets the value of {@link VolumeMountsProperty#getMountPropagation}
             * @param mountPropagation the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder mountPropagation(java.lang.String mountPropagation) {
                this.mountPropagation = mountPropagation;
                return this;
            }

            /**
             * Sets the value of {@link VolumeMountsProperty#getMountPropagation}
             * @param mountPropagation the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder mountPropagation(com.aliyun.ros.cdk.core.IResolvable mountPropagation) {
                this.mountPropagation = mountPropagation;
                return this;
            }

            /**
             * Sets the value of {@link VolumeMountsProperty#getName}
             * @param name the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder name(java.lang.String name) {
                this.name = name;
                return this;
            }

            /**
             * Sets the value of {@link VolumeMountsProperty#getName}
             * @param name the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder name(com.aliyun.ros.cdk.core.IResolvable name) {
                this.name = name;
                return this;
            }

            /**
             * Sets the value of {@link VolumeMountsProperty#getReadOnly}
             * @param readOnly the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder readOnly(java.lang.Boolean readOnly) {
                this.readOnly = readOnly;
                return this;
            }

            /**
             * Sets the value of {@link VolumeMountsProperty#getReadOnly}
             * @param readOnly the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder readOnly(com.aliyun.ros.cdk.core.IResolvable readOnly) {
                this.readOnly = readOnly;
                return this;
            }

            /**
             * Sets the value of {@link VolumeMountsProperty#getSubPath}
             * @param subPath the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder subPath(java.lang.String subPath) {
                this.subPath = subPath;
                return this;
            }

            /**
             * Sets the value of {@link VolumeMountsProperty#getSubPath}
             * @param subPath the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder subPath(com.aliyun.ros.cdk.core.IResolvable subPath) {
                this.subPath = subPath;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link VolumeMountsProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public VolumeMountsProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link VolumeMountsProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements VolumeMountsProperty {
            private final java.lang.Object mountPath;
            private final java.lang.Object mountPropagation;
            private final java.lang.Object name;
            private final java.lang.Object readOnly;
            private final java.lang.Object subPath;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.mountPath = software.amazon.jsii.Kernel.get(this, "mountPath", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.mountPropagation = software.amazon.jsii.Kernel.get(this, "mountPropagation", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.name = software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.readOnly = software.amazon.jsii.Kernel.get(this, "readOnly", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.subPath = software.amazon.jsii.Kernel.get(this, "subPath", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.mountPath = builder.mountPath;
                this.mountPropagation = builder.mountPropagation;
                this.name = builder.name;
                this.readOnly = builder.readOnly;
                this.subPath = builder.subPath;
            }

            @Override
            public final java.lang.Object getMountPath() {
                return this.mountPath;
            }

            @Override
            public final java.lang.Object getMountPropagation() {
                return this.mountPropagation;
            }

            @Override
            public final java.lang.Object getName() {
                return this.name;
            }

            @Override
            public final java.lang.Object getReadOnly() {
                return this.readOnly;
            }

            @Override
            public final java.lang.Object getSubPath() {
                return this.subPath;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getMountPath() != null) {
                    data.set("mountPath", om.valueToTree(this.getMountPath()));
                }
                if (this.getMountPropagation() != null) {
                    data.set("mountPropagation", om.valueToTree(this.getMountPropagation()));
                }
                if (this.getName() != null) {
                    data.set("name", om.valueToTree(this.getName()));
                }
                if (this.getReadOnly() != null) {
                    data.set("readOnly", om.valueToTree(this.getReadOnly()));
                }
                if (this.getSubPath() != null) {
                    data.set("subPath", om.valueToTree(this.getSubPath()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ess.RosEciScalingConfiguration.VolumeMountsProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                VolumeMountsProperty.Jsii$Proxy that = (VolumeMountsProperty.Jsii$Proxy) o;

                if (this.mountPath != null ? !this.mountPath.equals(that.mountPath) : that.mountPath != null) return false;
                if (this.mountPropagation != null ? !this.mountPropagation.equals(that.mountPropagation) : that.mountPropagation != null) return false;
                if (this.name != null ? !this.name.equals(that.name) : that.name != null) return false;
                if (this.readOnly != null ? !this.readOnly.equals(that.readOnly) : that.readOnly != null) return false;
                return this.subPath != null ? this.subPath.equals(that.subPath) : that.subPath == null;
            }

            @Override
            public final int hashCode() {
                int result = this.mountPath != null ? this.mountPath.hashCode() : 0;
                result = 31 * result + (this.mountPropagation != null ? this.mountPropagation.hashCode() : 0);
                result = 31 * result + (this.name != null ? this.name.hashCode() : 0);
                result = 31 * result + (this.readOnly != null ? this.readOnly.hashCode() : 0);
                result = 31 * result + (this.subPath != null ? this.subPath.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ess.$Module.class, fqn = "@alicloud/ros-cdk-ess.RosEciScalingConfiguration.VolumesProperty")
    @software.amazon.jsii.Jsii.Proxy(VolumesProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface VolumesProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getName();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getType();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getConfigFileVolumeConfigFileToPaths() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getConfigFileVolumeDefaultMode() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getDiskVolumeDiskId() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getDiskVolumeDiskSize() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getEmptyDirVolumeMedium() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getEmptyDirVolumeSizeLimit() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getFlexVolumeDriver() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getFlexVolumeFsType() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getFlexVolumeOptions() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getHostPathVolumePath() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getHostPathVolumeType() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getNfsVolumePath() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getNfsVolumeReadOnly() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getNfsVolumeServer() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link VolumesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link VolumesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<VolumesProperty> {
            java.lang.Object name;
            java.lang.Object type;
            java.lang.Object configFileVolumeConfigFileToPaths;
            java.lang.Object configFileVolumeDefaultMode;
            java.lang.Object diskVolumeDiskId;
            java.lang.Object diskVolumeDiskSize;
            java.lang.Object emptyDirVolumeMedium;
            java.lang.Object emptyDirVolumeSizeLimit;
            java.lang.Object flexVolumeDriver;
            java.lang.Object flexVolumeFsType;
            java.lang.Object flexVolumeOptions;
            java.lang.Object hostPathVolumePath;
            java.lang.Object hostPathVolumeType;
            java.lang.Object nfsVolumePath;
            java.lang.Object nfsVolumeReadOnly;
            java.lang.Object nfsVolumeServer;

            /**
             * Sets the value of {@link VolumesProperty#getName}
             * @param name the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder name(java.lang.String name) {
                this.name = name;
                return this;
            }

            /**
             * Sets the value of {@link VolumesProperty#getName}
             * @param name the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder name(com.aliyun.ros.cdk.core.IResolvable name) {
                this.name = name;
                return this;
            }

            /**
             * Sets the value of {@link VolumesProperty#getType}
             * @param type the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder type(java.lang.String type) {
                this.type = type;
                return this;
            }

            /**
             * Sets the value of {@link VolumesProperty#getType}
             * @param type the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder type(com.aliyun.ros.cdk.core.IResolvable type) {
                this.type = type;
                return this;
            }

            /**
             * Sets the value of {@link VolumesProperty#getConfigFileVolumeConfigFileToPaths}
             * @param configFileVolumeConfigFileToPaths the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder configFileVolumeConfigFileToPaths(com.aliyun.ros.cdk.core.IResolvable configFileVolumeConfigFileToPaths) {
                this.configFileVolumeConfigFileToPaths = configFileVolumeConfigFileToPaths;
                return this;
            }

            /**
             * Sets the value of {@link VolumesProperty#getConfigFileVolumeConfigFileToPaths}
             * @param configFileVolumeConfigFileToPaths the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder configFileVolumeConfigFileToPaths(java.util.List<? extends java.lang.Object> configFileVolumeConfigFileToPaths) {
                this.configFileVolumeConfigFileToPaths = configFileVolumeConfigFileToPaths;
                return this;
            }

            /**
             * Sets the value of {@link VolumesProperty#getConfigFileVolumeDefaultMode}
             * @param configFileVolumeDefaultMode the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder configFileVolumeDefaultMode(java.lang.Number configFileVolumeDefaultMode) {
                this.configFileVolumeDefaultMode = configFileVolumeDefaultMode;
                return this;
            }

            /**
             * Sets the value of {@link VolumesProperty#getConfigFileVolumeDefaultMode}
             * @param configFileVolumeDefaultMode the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder configFileVolumeDefaultMode(com.aliyun.ros.cdk.core.IResolvable configFileVolumeDefaultMode) {
                this.configFileVolumeDefaultMode = configFileVolumeDefaultMode;
                return this;
            }

            /**
             * Sets the value of {@link VolumesProperty#getDiskVolumeDiskId}
             * @param diskVolumeDiskId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder diskVolumeDiskId(java.lang.String diskVolumeDiskId) {
                this.diskVolumeDiskId = diskVolumeDiskId;
                return this;
            }

            /**
             * Sets the value of {@link VolumesProperty#getDiskVolumeDiskId}
             * @param diskVolumeDiskId the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder diskVolumeDiskId(com.aliyun.ros.cdk.core.IResolvable diskVolumeDiskId) {
                this.diskVolumeDiskId = diskVolumeDiskId;
                return this;
            }

            /**
             * Sets the value of {@link VolumesProperty#getDiskVolumeDiskSize}
             * @param diskVolumeDiskSize the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder diskVolumeDiskSize(java.lang.Number diskVolumeDiskSize) {
                this.diskVolumeDiskSize = diskVolumeDiskSize;
                return this;
            }

            /**
             * Sets the value of {@link VolumesProperty#getDiskVolumeDiskSize}
             * @param diskVolumeDiskSize the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder diskVolumeDiskSize(com.aliyun.ros.cdk.core.IResolvable diskVolumeDiskSize) {
                this.diskVolumeDiskSize = diskVolumeDiskSize;
                return this;
            }

            /**
             * Sets the value of {@link VolumesProperty#getEmptyDirVolumeMedium}
             * @param emptyDirVolumeMedium the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder emptyDirVolumeMedium(java.lang.String emptyDirVolumeMedium) {
                this.emptyDirVolumeMedium = emptyDirVolumeMedium;
                return this;
            }

            /**
             * Sets the value of {@link VolumesProperty#getEmptyDirVolumeMedium}
             * @param emptyDirVolumeMedium the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder emptyDirVolumeMedium(com.aliyun.ros.cdk.core.IResolvable emptyDirVolumeMedium) {
                this.emptyDirVolumeMedium = emptyDirVolumeMedium;
                return this;
            }

            /**
             * Sets the value of {@link VolumesProperty#getEmptyDirVolumeSizeLimit}
             * @param emptyDirVolumeSizeLimit the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder emptyDirVolumeSizeLimit(java.lang.String emptyDirVolumeSizeLimit) {
                this.emptyDirVolumeSizeLimit = emptyDirVolumeSizeLimit;
                return this;
            }

            /**
             * Sets the value of {@link VolumesProperty#getEmptyDirVolumeSizeLimit}
             * @param emptyDirVolumeSizeLimit the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder emptyDirVolumeSizeLimit(com.aliyun.ros.cdk.core.IResolvable emptyDirVolumeSizeLimit) {
                this.emptyDirVolumeSizeLimit = emptyDirVolumeSizeLimit;
                return this;
            }

            /**
             * Sets the value of {@link VolumesProperty#getFlexVolumeDriver}
             * @param flexVolumeDriver the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder flexVolumeDriver(java.lang.String flexVolumeDriver) {
                this.flexVolumeDriver = flexVolumeDriver;
                return this;
            }

            /**
             * Sets the value of {@link VolumesProperty#getFlexVolumeDriver}
             * @param flexVolumeDriver the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder flexVolumeDriver(com.aliyun.ros.cdk.core.IResolvable flexVolumeDriver) {
                this.flexVolumeDriver = flexVolumeDriver;
                return this;
            }

            /**
             * Sets the value of {@link VolumesProperty#getFlexVolumeFsType}
             * @param flexVolumeFsType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder flexVolumeFsType(java.lang.String flexVolumeFsType) {
                this.flexVolumeFsType = flexVolumeFsType;
                return this;
            }

            /**
             * Sets the value of {@link VolumesProperty#getFlexVolumeFsType}
             * @param flexVolumeFsType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder flexVolumeFsType(com.aliyun.ros.cdk.core.IResolvable flexVolumeFsType) {
                this.flexVolumeFsType = flexVolumeFsType;
                return this;
            }

            /**
             * Sets the value of {@link VolumesProperty#getFlexVolumeOptions}
             * @param flexVolumeOptions the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder flexVolumeOptions(java.lang.String flexVolumeOptions) {
                this.flexVolumeOptions = flexVolumeOptions;
                return this;
            }

            /**
             * Sets the value of {@link VolumesProperty#getFlexVolumeOptions}
             * @param flexVolumeOptions the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder flexVolumeOptions(com.aliyun.ros.cdk.core.IResolvable flexVolumeOptions) {
                this.flexVolumeOptions = flexVolumeOptions;
                return this;
            }

            /**
             * Sets the value of {@link VolumesProperty#getHostPathVolumePath}
             * @param hostPathVolumePath the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder hostPathVolumePath(java.lang.String hostPathVolumePath) {
                this.hostPathVolumePath = hostPathVolumePath;
                return this;
            }

            /**
             * Sets the value of {@link VolumesProperty#getHostPathVolumePath}
             * @param hostPathVolumePath the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder hostPathVolumePath(com.aliyun.ros.cdk.core.IResolvable hostPathVolumePath) {
                this.hostPathVolumePath = hostPathVolumePath;
                return this;
            }

            /**
             * Sets the value of {@link VolumesProperty#getHostPathVolumeType}
             * @param hostPathVolumeType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder hostPathVolumeType(java.lang.String hostPathVolumeType) {
                this.hostPathVolumeType = hostPathVolumeType;
                return this;
            }

            /**
             * Sets the value of {@link VolumesProperty#getHostPathVolumeType}
             * @param hostPathVolumeType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder hostPathVolumeType(com.aliyun.ros.cdk.core.IResolvable hostPathVolumeType) {
                this.hostPathVolumeType = hostPathVolumeType;
                return this;
            }

            /**
             * Sets the value of {@link VolumesProperty#getNfsVolumePath}
             * @param nfsVolumePath the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder nfsVolumePath(java.lang.String nfsVolumePath) {
                this.nfsVolumePath = nfsVolumePath;
                return this;
            }

            /**
             * Sets the value of {@link VolumesProperty#getNfsVolumePath}
             * @param nfsVolumePath the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder nfsVolumePath(com.aliyun.ros.cdk.core.IResolvable nfsVolumePath) {
                this.nfsVolumePath = nfsVolumePath;
                return this;
            }

            /**
             * Sets the value of {@link VolumesProperty#getNfsVolumeReadOnly}
             * @param nfsVolumeReadOnly the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder nfsVolumeReadOnly(java.lang.Boolean nfsVolumeReadOnly) {
                this.nfsVolumeReadOnly = nfsVolumeReadOnly;
                return this;
            }

            /**
             * Sets the value of {@link VolumesProperty#getNfsVolumeReadOnly}
             * @param nfsVolumeReadOnly the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder nfsVolumeReadOnly(com.aliyun.ros.cdk.core.IResolvable nfsVolumeReadOnly) {
                this.nfsVolumeReadOnly = nfsVolumeReadOnly;
                return this;
            }

            /**
             * Sets the value of {@link VolumesProperty#getNfsVolumeServer}
             * @param nfsVolumeServer the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder nfsVolumeServer(java.lang.String nfsVolumeServer) {
                this.nfsVolumeServer = nfsVolumeServer;
                return this;
            }

            /**
             * Sets the value of {@link VolumesProperty#getNfsVolumeServer}
             * @param nfsVolumeServer the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder nfsVolumeServer(com.aliyun.ros.cdk.core.IResolvable nfsVolumeServer) {
                this.nfsVolumeServer = nfsVolumeServer;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link VolumesProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public VolumesProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link VolumesProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements VolumesProperty {
            private final java.lang.Object name;
            private final java.lang.Object type;
            private final java.lang.Object configFileVolumeConfigFileToPaths;
            private final java.lang.Object configFileVolumeDefaultMode;
            private final java.lang.Object diskVolumeDiskId;
            private final java.lang.Object diskVolumeDiskSize;
            private final java.lang.Object emptyDirVolumeMedium;
            private final java.lang.Object emptyDirVolumeSizeLimit;
            private final java.lang.Object flexVolumeDriver;
            private final java.lang.Object flexVolumeFsType;
            private final java.lang.Object flexVolumeOptions;
            private final java.lang.Object hostPathVolumePath;
            private final java.lang.Object hostPathVolumeType;
            private final java.lang.Object nfsVolumePath;
            private final java.lang.Object nfsVolumeReadOnly;
            private final java.lang.Object nfsVolumeServer;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.name = software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.type = software.amazon.jsii.Kernel.get(this, "type", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.configFileVolumeConfigFileToPaths = software.amazon.jsii.Kernel.get(this, "configFileVolumeConfigFileToPaths", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.configFileVolumeDefaultMode = software.amazon.jsii.Kernel.get(this, "configFileVolumeDefaultMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.diskVolumeDiskId = software.amazon.jsii.Kernel.get(this, "diskVolumeDiskId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.diskVolumeDiskSize = software.amazon.jsii.Kernel.get(this, "diskVolumeDiskSize", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.emptyDirVolumeMedium = software.amazon.jsii.Kernel.get(this, "emptyDirVolumeMedium", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.emptyDirVolumeSizeLimit = software.amazon.jsii.Kernel.get(this, "emptyDirVolumeSizeLimit", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.flexVolumeDriver = software.amazon.jsii.Kernel.get(this, "flexVolumeDriver", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.flexVolumeFsType = software.amazon.jsii.Kernel.get(this, "flexVolumeFsType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.flexVolumeOptions = software.amazon.jsii.Kernel.get(this, "flexVolumeOptions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.hostPathVolumePath = software.amazon.jsii.Kernel.get(this, "hostPathVolumePath", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.hostPathVolumeType = software.amazon.jsii.Kernel.get(this, "hostPathVolumeType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.nfsVolumePath = software.amazon.jsii.Kernel.get(this, "nfsVolumePath", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.nfsVolumeReadOnly = software.amazon.jsii.Kernel.get(this, "nfsVolumeReadOnly", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.nfsVolumeServer = software.amazon.jsii.Kernel.get(this, "nfsVolumeServer", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.name = java.util.Objects.requireNonNull(builder.name, "name is required");
                this.type = java.util.Objects.requireNonNull(builder.type, "type is required");
                this.configFileVolumeConfigFileToPaths = builder.configFileVolumeConfigFileToPaths;
                this.configFileVolumeDefaultMode = builder.configFileVolumeDefaultMode;
                this.diskVolumeDiskId = builder.diskVolumeDiskId;
                this.diskVolumeDiskSize = builder.diskVolumeDiskSize;
                this.emptyDirVolumeMedium = builder.emptyDirVolumeMedium;
                this.emptyDirVolumeSizeLimit = builder.emptyDirVolumeSizeLimit;
                this.flexVolumeDriver = builder.flexVolumeDriver;
                this.flexVolumeFsType = builder.flexVolumeFsType;
                this.flexVolumeOptions = builder.flexVolumeOptions;
                this.hostPathVolumePath = builder.hostPathVolumePath;
                this.hostPathVolumeType = builder.hostPathVolumeType;
                this.nfsVolumePath = builder.nfsVolumePath;
                this.nfsVolumeReadOnly = builder.nfsVolumeReadOnly;
                this.nfsVolumeServer = builder.nfsVolumeServer;
            }

            @Override
            public final java.lang.Object getName() {
                return this.name;
            }

            @Override
            public final java.lang.Object getType() {
                return this.type;
            }

            @Override
            public final java.lang.Object getConfigFileVolumeConfigFileToPaths() {
                return this.configFileVolumeConfigFileToPaths;
            }

            @Override
            public final java.lang.Object getConfigFileVolumeDefaultMode() {
                return this.configFileVolumeDefaultMode;
            }

            @Override
            public final java.lang.Object getDiskVolumeDiskId() {
                return this.diskVolumeDiskId;
            }

            @Override
            public final java.lang.Object getDiskVolumeDiskSize() {
                return this.diskVolumeDiskSize;
            }

            @Override
            public final java.lang.Object getEmptyDirVolumeMedium() {
                return this.emptyDirVolumeMedium;
            }

            @Override
            public final java.lang.Object getEmptyDirVolumeSizeLimit() {
                return this.emptyDirVolumeSizeLimit;
            }

            @Override
            public final java.lang.Object getFlexVolumeDriver() {
                return this.flexVolumeDriver;
            }

            @Override
            public final java.lang.Object getFlexVolumeFsType() {
                return this.flexVolumeFsType;
            }

            @Override
            public final java.lang.Object getFlexVolumeOptions() {
                return this.flexVolumeOptions;
            }

            @Override
            public final java.lang.Object getHostPathVolumePath() {
                return this.hostPathVolumePath;
            }

            @Override
            public final java.lang.Object getHostPathVolumeType() {
                return this.hostPathVolumeType;
            }

            @Override
            public final java.lang.Object getNfsVolumePath() {
                return this.nfsVolumePath;
            }

            @Override
            public final java.lang.Object getNfsVolumeReadOnly() {
                return this.nfsVolumeReadOnly;
            }

            @Override
            public final java.lang.Object getNfsVolumeServer() {
                return this.nfsVolumeServer;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("name", om.valueToTree(this.getName()));
                data.set("type", om.valueToTree(this.getType()));
                if (this.getConfigFileVolumeConfigFileToPaths() != null) {
                    data.set("configFileVolumeConfigFileToPaths", om.valueToTree(this.getConfigFileVolumeConfigFileToPaths()));
                }
                if (this.getConfigFileVolumeDefaultMode() != null) {
                    data.set("configFileVolumeDefaultMode", om.valueToTree(this.getConfigFileVolumeDefaultMode()));
                }
                if (this.getDiskVolumeDiskId() != null) {
                    data.set("diskVolumeDiskId", om.valueToTree(this.getDiskVolumeDiskId()));
                }
                if (this.getDiskVolumeDiskSize() != null) {
                    data.set("diskVolumeDiskSize", om.valueToTree(this.getDiskVolumeDiskSize()));
                }
                if (this.getEmptyDirVolumeMedium() != null) {
                    data.set("emptyDirVolumeMedium", om.valueToTree(this.getEmptyDirVolumeMedium()));
                }
                if (this.getEmptyDirVolumeSizeLimit() != null) {
                    data.set("emptyDirVolumeSizeLimit", om.valueToTree(this.getEmptyDirVolumeSizeLimit()));
                }
                if (this.getFlexVolumeDriver() != null) {
                    data.set("flexVolumeDriver", om.valueToTree(this.getFlexVolumeDriver()));
                }
                if (this.getFlexVolumeFsType() != null) {
                    data.set("flexVolumeFsType", om.valueToTree(this.getFlexVolumeFsType()));
                }
                if (this.getFlexVolumeOptions() != null) {
                    data.set("flexVolumeOptions", om.valueToTree(this.getFlexVolumeOptions()));
                }
                if (this.getHostPathVolumePath() != null) {
                    data.set("hostPathVolumePath", om.valueToTree(this.getHostPathVolumePath()));
                }
                if (this.getHostPathVolumeType() != null) {
                    data.set("hostPathVolumeType", om.valueToTree(this.getHostPathVolumeType()));
                }
                if (this.getNfsVolumePath() != null) {
                    data.set("nfsVolumePath", om.valueToTree(this.getNfsVolumePath()));
                }
                if (this.getNfsVolumeReadOnly() != null) {
                    data.set("nfsVolumeReadOnly", om.valueToTree(this.getNfsVolumeReadOnly()));
                }
                if (this.getNfsVolumeServer() != null) {
                    data.set("nfsVolumeServer", om.valueToTree(this.getNfsVolumeServer()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ess.RosEciScalingConfiguration.VolumesProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                VolumesProperty.Jsii$Proxy that = (VolumesProperty.Jsii$Proxy) o;

                if (!name.equals(that.name)) return false;
                if (!type.equals(that.type)) return false;
                if (this.configFileVolumeConfigFileToPaths != null ? !this.configFileVolumeConfigFileToPaths.equals(that.configFileVolumeConfigFileToPaths) : that.configFileVolumeConfigFileToPaths != null) return false;
                if (this.configFileVolumeDefaultMode != null ? !this.configFileVolumeDefaultMode.equals(that.configFileVolumeDefaultMode) : that.configFileVolumeDefaultMode != null) return false;
                if (this.diskVolumeDiskId != null ? !this.diskVolumeDiskId.equals(that.diskVolumeDiskId) : that.diskVolumeDiskId != null) return false;
                if (this.diskVolumeDiskSize != null ? !this.diskVolumeDiskSize.equals(that.diskVolumeDiskSize) : that.diskVolumeDiskSize != null) return false;
                if (this.emptyDirVolumeMedium != null ? !this.emptyDirVolumeMedium.equals(that.emptyDirVolumeMedium) : that.emptyDirVolumeMedium != null) return false;
                if (this.emptyDirVolumeSizeLimit != null ? !this.emptyDirVolumeSizeLimit.equals(that.emptyDirVolumeSizeLimit) : that.emptyDirVolumeSizeLimit != null) return false;
                if (this.flexVolumeDriver != null ? !this.flexVolumeDriver.equals(that.flexVolumeDriver) : that.flexVolumeDriver != null) return false;
                if (this.flexVolumeFsType != null ? !this.flexVolumeFsType.equals(that.flexVolumeFsType) : that.flexVolumeFsType != null) return false;
                if (this.flexVolumeOptions != null ? !this.flexVolumeOptions.equals(that.flexVolumeOptions) : that.flexVolumeOptions != null) return false;
                if (this.hostPathVolumePath != null ? !this.hostPathVolumePath.equals(that.hostPathVolumePath) : that.hostPathVolumePath != null) return false;
                if (this.hostPathVolumeType != null ? !this.hostPathVolumeType.equals(that.hostPathVolumeType) : that.hostPathVolumeType != null) return false;
                if (this.nfsVolumePath != null ? !this.nfsVolumePath.equals(that.nfsVolumePath) : that.nfsVolumePath != null) return false;
                if (this.nfsVolumeReadOnly != null ? !this.nfsVolumeReadOnly.equals(that.nfsVolumeReadOnly) : that.nfsVolumeReadOnly != null) return false;
                return this.nfsVolumeServer != null ? this.nfsVolumeServer.equals(that.nfsVolumeServer) : that.nfsVolumeServer == null;
            }

            @Override
            public final int hashCode() {
                int result = this.name.hashCode();
                result = 31 * result + (this.type.hashCode());
                result = 31 * result + (this.configFileVolumeConfigFileToPaths != null ? this.configFileVolumeConfigFileToPaths.hashCode() : 0);
                result = 31 * result + (this.configFileVolumeDefaultMode != null ? this.configFileVolumeDefaultMode.hashCode() : 0);
                result = 31 * result + (this.diskVolumeDiskId != null ? this.diskVolumeDiskId.hashCode() : 0);
                result = 31 * result + (this.diskVolumeDiskSize != null ? this.diskVolumeDiskSize.hashCode() : 0);
                result = 31 * result + (this.emptyDirVolumeMedium != null ? this.emptyDirVolumeMedium.hashCode() : 0);
                result = 31 * result + (this.emptyDirVolumeSizeLimit != null ? this.emptyDirVolumeSizeLimit.hashCode() : 0);
                result = 31 * result + (this.flexVolumeDriver != null ? this.flexVolumeDriver.hashCode() : 0);
                result = 31 * result + (this.flexVolumeFsType != null ? this.flexVolumeFsType.hashCode() : 0);
                result = 31 * result + (this.flexVolumeOptions != null ? this.flexVolumeOptions.hashCode() : 0);
                result = 31 * result + (this.hostPathVolumePath != null ? this.hostPathVolumePath.hashCode() : 0);
                result = 31 * result + (this.hostPathVolumeType != null ? this.hostPathVolumeType.hashCode() : 0);
                result = 31 * result + (this.nfsVolumePath != null ? this.nfsVolumePath.hashCode() : 0);
                result = 31 * result + (this.nfsVolumeReadOnly != null ? this.nfsVolumeReadOnly.hashCode() : 0);
                result = 31 * result + (this.nfsVolumeServer != null ? this.nfsVolumeServer.hashCode() : 0);
                return result;
            }
        }
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.ess.RosEciScalingConfiguration}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ess.RosEciScalingConfiguration> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
         * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
         * @param enableResourcePropertyConstraint This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final java.lang.Boolean enableResourcePropertyConstraint;
        private final com.aliyun.ros.cdk.ess.RosEciScalingConfigurationProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.ess.RosEciScalingConfigurationProps.Builder();
        }

        /**
         * @return {@code this}
         * @param containerGroupName This parameter is required.
         */
        public Builder containerGroupName(final java.lang.String containerGroupName) {
            this.props.containerGroupName(containerGroupName);
            return this;
        }
        /**
         * @return {@code this}
         * @param containerGroupName This parameter is required.
         */
        public Builder containerGroupName(final com.aliyun.ros.cdk.core.IResolvable containerGroupName) {
            this.props.containerGroupName(containerGroupName);
            return this;
        }

        /**
         * @return {@code this}
         * @param scalingConfigurationName This parameter is required.
         */
        public Builder scalingConfigurationName(final java.lang.String scalingConfigurationName) {
            this.props.scalingConfigurationName(scalingConfigurationName);
            return this;
        }
        /**
         * @return {@code this}
         * @param scalingConfigurationName This parameter is required.
         */
        public Builder scalingConfigurationName(final com.aliyun.ros.cdk.core.IResolvable scalingConfigurationName) {
            this.props.scalingConfigurationName(scalingConfigurationName);
            return this;
        }

        /**
         * @return {@code this}
         * @param scalingGroupId This parameter is required.
         */
        public Builder scalingGroupId(final java.lang.String scalingGroupId) {
            this.props.scalingGroupId(scalingGroupId);
            return this;
        }
        /**
         * @return {@code this}
         * @param scalingGroupId This parameter is required.
         */
        public Builder scalingGroupId(final com.aliyun.ros.cdk.core.IResolvable scalingGroupId) {
            this.props.scalingGroupId(scalingGroupId);
            return this;
        }

        /**
         * @return {@code this}
         * @param securityGroupId This parameter is required.
         */
        public Builder securityGroupId(final java.lang.String securityGroupId) {
            this.props.securityGroupId(securityGroupId);
            return this;
        }
        /**
         * @return {@code this}
         * @param securityGroupId This parameter is required.
         */
        public Builder securityGroupId(final com.aliyun.ros.cdk.core.IResolvable securityGroupId) {
            this.props.securityGroupId(securityGroupId);
            return this;
        }

        /**
         * @return {@code this}
         * @param acrRegistryInfos This parameter is required.
         */
        public Builder acrRegistryInfos(final com.aliyun.ros.cdk.core.IResolvable acrRegistryInfos) {
            this.props.acrRegistryInfos(acrRegistryInfos);
            return this;
        }
        /**
         * @return {@code this}
         * @param acrRegistryInfos This parameter is required.
         */
        public Builder acrRegistryInfos(final java.util.List<? extends java.lang.Object> acrRegistryInfos) {
            this.props.acrRegistryInfos(acrRegistryInfos);
            return this;
        }

        /**
         * @return {@code this}
         * @param activeDeadlineSeconds This parameter is required.
         */
        public Builder activeDeadlineSeconds(final java.lang.Number activeDeadlineSeconds) {
            this.props.activeDeadlineSeconds(activeDeadlineSeconds);
            return this;
        }
        /**
         * @return {@code this}
         * @param activeDeadlineSeconds This parameter is required.
         */
        public Builder activeDeadlineSeconds(final com.aliyun.ros.cdk.core.IResolvable activeDeadlineSeconds) {
            this.props.activeDeadlineSeconds(activeDeadlineSeconds);
            return this;
        }

        /**
         * @return {@code this}
         * @param autoCreateEip This parameter is required.
         */
        public Builder autoCreateEip(final java.lang.Boolean autoCreateEip) {
            this.props.autoCreateEip(autoCreateEip);
            return this;
        }
        /**
         * @return {@code this}
         * @param autoCreateEip This parameter is required.
         */
        public Builder autoCreateEip(final com.aliyun.ros.cdk.core.IResolvable autoCreateEip) {
            this.props.autoCreateEip(autoCreateEip);
            return this;
        }

        /**
         * @return {@code this}
         * @param autoMatchImageCache This parameter is required.
         */
        public Builder autoMatchImageCache(final java.lang.Boolean autoMatchImageCache) {
            this.props.autoMatchImageCache(autoMatchImageCache);
            return this;
        }
        /**
         * @return {@code this}
         * @param autoMatchImageCache This parameter is required.
         */
        public Builder autoMatchImageCache(final com.aliyun.ros.cdk.core.IResolvable autoMatchImageCache) {
            this.props.autoMatchImageCache(autoMatchImageCache);
            return this;
        }

        /**
         * @return {@code this}
         * @param containers This parameter is required.
         */
        public Builder containers(final com.aliyun.ros.cdk.core.IResolvable containers) {
            this.props.containers(containers);
            return this;
        }
        /**
         * @return {@code this}
         * @param containers This parameter is required.
         */
        public Builder containers(final java.util.List<? extends java.lang.Object> containers) {
            this.props.containers(containers);
            return this;
        }

        /**
         * @return {@code this}
         * @param costOptimization This parameter is required.
         */
        public Builder costOptimization(final java.lang.Boolean costOptimization) {
            this.props.costOptimization(costOptimization);
            return this;
        }
        /**
         * @return {@code this}
         * @param costOptimization This parameter is required.
         */
        public Builder costOptimization(final com.aliyun.ros.cdk.core.IResolvable costOptimization) {
            this.props.costOptimization(costOptimization);
            return this;
        }

        /**
         * @return {@code this}
         * @param cpu This parameter is required.
         */
        public Builder cpu(final java.lang.Number cpu) {
            this.props.cpu(cpu);
            return this;
        }
        /**
         * @return {@code this}
         * @param cpu This parameter is required.
         */
        public Builder cpu(final com.aliyun.ros.cdk.core.IResolvable cpu) {
            this.props.cpu(cpu);
            return this;
        }

        /**
         * @return {@code this}
         * @param cpuOptionsCore This parameter is required.
         */
        public Builder cpuOptionsCore(final java.lang.Number cpuOptionsCore) {
            this.props.cpuOptionsCore(cpuOptionsCore);
            return this;
        }
        /**
         * @return {@code this}
         * @param cpuOptionsCore This parameter is required.
         */
        public Builder cpuOptionsCore(final com.aliyun.ros.cdk.core.IResolvable cpuOptionsCore) {
            this.props.cpuOptionsCore(cpuOptionsCore);
            return this;
        }

        /**
         * @return {@code this}
         * @param cpuOptionsThreadsPerCore This parameter is required.
         */
        public Builder cpuOptionsThreadsPerCore(final java.lang.Number cpuOptionsThreadsPerCore) {
            this.props.cpuOptionsThreadsPerCore(cpuOptionsThreadsPerCore);
            return this;
        }
        /**
         * @return {@code this}
         * @param cpuOptionsThreadsPerCore This parameter is required.
         */
        public Builder cpuOptionsThreadsPerCore(final com.aliyun.ros.cdk.core.IResolvable cpuOptionsThreadsPerCore) {
            this.props.cpuOptionsThreadsPerCore(cpuOptionsThreadsPerCore);
            return this;
        }

        /**
         * @return {@code this}
         * @param dataCacheBucket This parameter is required.
         */
        public Builder dataCacheBucket(final java.lang.String dataCacheBucket) {
            this.props.dataCacheBucket(dataCacheBucket);
            return this;
        }
        /**
         * @return {@code this}
         * @param dataCacheBucket This parameter is required.
         */
        public Builder dataCacheBucket(final com.aliyun.ros.cdk.core.IResolvable dataCacheBucket) {
            this.props.dataCacheBucket(dataCacheBucket);
            return this;
        }

        /**
         * @return {@code this}
         * @param dataCacheBurstingEnabled This parameter is required.
         */
        public Builder dataCacheBurstingEnabled(final java.lang.Boolean dataCacheBurstingEnabled) {
            this.props.dataCacheBurstingEnabled(dataCacheBurstingEnabled);
            return this;
        }
        /**
         * @return {@code this}
         * @param dataCacheBurstingEnabled This parameter is required.
         */
        public Builder dataCacheBurstingEnabled(final com.aliyun.ros.cdk.core.IResolvable dataCacheBurstingEnabled) {
            this.props.dataCacheBurstingEnabled(dataCacheBurstingEnabled);
            return this;
        }

        /**
         * @return {@code this}
         * @param dataCachePl This parameter is required.
         */
        public Builder dataCachePl(final java.lang.String dataCachePl) {
            this.props.dataCachePl(dataCachePl);
            return this;
        }
        /**
         * @return {@code this}
         * @param dataCachePl This parameter is required.
         */
        public Builder dataCachePl(final com.aliyun.ros.cdk.core.IResolvable dataCachePl) {
            this.props.dataCachePl(dataCachePl);
            return this;
        }

        /**
         * @return {@code this}
         * @param dataCacheProvisionedIops This parameter is required.
         */
        public Builder dataCacheProvisionedIops(final java.lang.Number dataCacheProvisionedIops) {
            this.props.dataCacheProvisionedIops(dataCacheProvisionedIops);
            return this;
        }
        /**
         * @return {@code this}
         * @param dataCacheProvisionedIops This parameter is required.
         */
        public Builder dataCacheProvisionedIops(final com.aliyun.ros.cdk.core.IResolvable dataCacheProvisionedIops) {
            this.props.dataCacheProvisionedIops(dataCacheProvisionedIops);
            return this;
        }

        /**
         * @return {@code this}
         * @param dnsConfigNameServers This parameter is required.
         */
        public Builder dnsConfigNameServers(final com.aliyun.ros.cdk.core.IResolvable dnsConfigNameServers) {
            this.props.dnsConfigNameServers(dnsConfigNameServers);
            return this;
        }
        /**
         * @return {@code this}
         * @param dnsConfigNameServers This parameter is required.
         */
        public Builder dnsConfigNameServers(final java.util.List<? extends java.lang.Object> dnsConfigNameServers) {
            this.props.dnsConfigNameServers(dnsConfigNameServers);
            return this;
        }

        /**
         * @return {@code this}
         * @param dnsConfigOptions This parameter is required.
         */
        public Builder dnsConfigOptions(final com.aliyun.ros.cdk.core.IResolvable dnsConfigOptions) {
            this.props.dnsConfigOptions(dnsConfigOptions);
            return this;
        }
        /**
         * @return {@code this}
         * @param dnsConfigOptions This parameter is required.
         */
        public Builder dnsConfigOptions(final java.util.List<? extends java.lang.Object> dnsConfigOptions) {
            this.props.dnsConfigOptions(dnsConfigOptions);
            return this;
        }

        /**
         * @return {@code this}
         * @param dnsConfigSearches This parameter is required.
         */
        public Builder dnsConfigSearches(final com.aliyun.ros.cdk.core.IResolvable dnsConfigSearches) {
            this.props.dnsConfigSearches(dnsConfigSearches);
            return this;
        }
        /**
         * @return {@code this}
         * @param dnsConfigSearches This parameter is required.
         */
        public Builder dnsConfigSearches(final java.util.List<? extends java.lang.Object> dnsConfigSearches) {
            this.props.dnsConfigSearches(dnsConfigSearches);
            return this;
        }

        /**
         * @return {@code this}
         * @param dnsPolicy This parameter is required.
         */
        public Builder dnsPolicy(final java.lang.String dnsPolicy) {
            this.props.dnsPolicy(dnsPolicy);
            return this;
        }
        /**
         * @return {@code this}
         * @param dnsPolicy This parameter is required.
         */
        public Builder dnsPolicy(final com.aliyun.ros.cdk.core.IResolvable dnsPolicy) {
            this.props.dnsPolicy(dnsPolicy);
            return this;
        }

        /**
         * @return {@code this}
         * @param egressBandwidth This parameter is required.
         */
        public Builder egressBandwidth(final java.lang.Number egressBandwidth) {
            this.props.egressBandwidth(egressBandwidth);
            return this;
        }
        /**
         * @return {@code this}
         * @param egressBandwidth This parameter is required.
         */
        public Builder egressBandwidth(final com.aliyun.ros.cdk.core.IResolvable egressBandwidth) {
            this.props.egressBandwidth(egressBandwidth);
            return this;
        }

        /**
         * @return {@code this}
         * @param eipBandwidth This parameter is required.
         */
        public Builder eipBandwidth(final java.lang.Number eipBandwidth) {
            this.props.eipBandwidth(eipBandwidth);
            return this;
        }
        /**
         * @return {@code this}
         * @param eipBandwidth This parameter is required.
         */
        public Builder eipBandwidth(final com.aliyun.ros.cdk.core.IResolvable eipBandwidth) {
            this.props.eipBandwidth(eipBandwidth);
            return this;
        }

        /**
         * @return {@code this}
         * @param ephemeralStorage This parameter is required.
         */
        public Builder ephemeralStorage(final java.lang.Number ephemeralStorage) {
            this.props.ephemeralStorage(ephemeralStorage);
            return this;
        }
        /**
         * @return {@code this}
         * @param ephemeralStorage This parameter is required.
         */
        public Builder ephemeralStorage(final com.aliyun.ros.cdk.core.IResolvable ephemeralStorage) {
            this.props.ephemeralStorage(ephemeralStorage);
            return this;
        }

        /**
         * @return {@code this}
         * @param hostAliases This parameter is required.
         */
        public Builder hostAliases(final com.aliyun.ros.cdk.core.IResolvable hostAliases) {
            this.props.hostAliases(hostAliases);
            return this;
        }
        /**
         * @return {@code this}
         * @param hostAliases This parameter is required.
         */
        public Builder hostAliases(final java.util.List<? extends java.lang.Object> hostAliases) {
            this.props.hostAliases(hostAliases);
            return this;
        }

        /**
         * @return {@code this}
         * @param hostName This parameter is required.
         */
        public Builder hostName(final java.lang.String hostName) {
            this.props.hostName(hostName);
            return this;
        }
        /**
         * @return {@code this}
         * @param hostName This parameter is required.
         */
        public Builder hostName(final com.aliyun.ros.cdk.core.IResolvable hostName) {
            this.props.hostName(hostName);
            return this;
        }

        /**
         * @return {@code this}
         * @param imageRegistryCredentials This parameter is required.
         */
        public Builder imageRegistryCredentials(final com.aliyun.ros.cdk.core.IResolvable imageRegistryCredentials) {
            this.props.imageRegistryCredentials(imageRegistryCredentials);
            return this;
        }
        /**
         * @return {@code this}
         * @param imageRegistryCredentials This parameter is required.
         */
        public Builder imageRegistryCredentials(final java.util.List<? extends java.lang.Object> imageRegistryCredentials) {
            this.props.imageRegistryCredentials(imageRegistryCredentials);
            return this;
        }

        /**
         * @return {@code this}
         * @param imageSnapshotId This parameter is required.
         */
        public Builder imageSnapshotId(final java.lang.String imageSnapshotId) {
            this.props.imageSnapshotId(imageSnapshotId);
            return this;
        }
        /**
         * @return {@code this}
         * @param imageSnapshotId This parameter is required.
         */
        public Builder imageSnapshotId(final com.aliyun.ros.cdk.core.IResolvable imageSnapshotId) {
            this.props.imageSnapshotId(imageSnapshotId);
            return this;
        }

        /**
         * @return {@code this}
         * @param ingressBandwidth This parameter is required.
         */
        public Builder ingressBandwidth(final java.lang.Number ingressBandwidth) {
            this.props.ingressBandwidth(ingressBandwidth);
            return this;
        }
        /**
         * @return {@code this}
         * @param ingressBandwidth This parameter is required.
         */
        public Builder ingressBandwidth(final com.aliyun.ros.cdk.core.IResolvable ingressBandwidth) {
            this.props.ingressBandwidth(ingressBandwidth);
            return this;
        }

        /**
         * @return {@code this}
         * @param initContainers This parameter is required.
         */
        public Builder initContainers(final com.aliyun.ros.cdk.core.IResolvable initContainers) {
            this.props.initContainers(initContainers);
            return this;
        }
        /**
         * @return {@code this}
         * @param initContainers This parameter is required.
         */
        public Builder initContainers(final java.util.List<? extends java.lang.Object> initContainers) {
            this.props.initContainers(initContainers);
            return this;
        }

        /**
         * @return {@code this}
         * @param instanceFamilyLevel This parameter is required.
         */
        public Builder instanceFamilyLevel(final java.lang.String instanceFamilyLevel) {
            this.props.instanceFamilyLevel(instanceFamilyLevel);
            return this;
        }
        /**
         * @return {@code this}
         * @param instanceFamilyLevel This parameter is required.
         */
        public Builder instanceFamilyLevel(final com.aliyun.ros.cdk.core.IResolvable instanceFamilyLevel) {
            this.props.instanceFamilyLevel(instanceFamilyLevel);
            return this;
        }

        /**
         * @return {@code this}
         * @param instanceTypes This parameter is required.
         */
        public Builder instanceTypes(final com.aliyun.ros.cdk.core.IResolvable instanceTypes) {
            this.props.instanceTypes(instanceTypes);
            return this;
        }
        /**
         * @return {@code this}
         * @param instanceTypes This parameter is required.
         */
        public Builder instanceTypes(final java.util.List<? extends java.lang.Object> instanceTypes) {
            this.props.instanceTypes(instanceTypes);
            return this;
        }

        /**
         * @return {@code this}
         * @param ipv6AddressCount This parameter is required.
         */
        public Builder ipv6AddressCount(final java.lang.Number ipv6AddressCount) {
            this.props.ipv6AddressCount(ipv6AddressCount);
            return this;
        }
        /**
         * @return {@code this}
         * @param ipv6AddressCount This parameter is required.
         */
        public Builder ipv6AddressCount(final com.aliyun.ros.cdk.core.IResolvable ipv6AddressCount) {
            this.props.ipv6AddressCount(ipv6AddressCount);
            return this;
        }

        /**
         * @return {@code this}
         * @param loadBalancerWeight This parameter is required.
         */
        public Builder loadBalancerWeight(final java.lang.Number loadBalancerWeight) {
            this.props.loadBalancerWeight(loadBalancerWeight);
            return this;
        }
        /**
         * @return {@code this}
         * @param loadBalancerWeight This parameter is required.
         */
        public Builder loadBalancerWeight(final com.aliyun.ros.cdk.core.IResolvable loadBalancerWeight) {
            this.props.loadBalancerWeight(loadBalancerWeight);
            return this;
        }

        /**
         * @return {@code this}
         * @param memory This parameter is required.
         */
        public Builder memory(final java.lang.Number memory) {
            this.props.memory(memory);
            return this;
        }
        /**
         * @return {@code this}
         * @param memory This parameter is required.
         */
        public Builder memory(final com.aliyun.ros.cdk.core.IResolvable memory) {
            this.props.memory(memory);
            return this;
        }

        /**
         * @return {@code this}
         * @param ntpServers This parameter is required.
         */
        public Builder ntpServers(final com.aliyun.ros.cdk.core.IResolvable ntpServers) {
            this.props.ntpServers(ntpServers);
            return this;
        }
        /**
         * @return {@code this}
         * @param ntpServers This parameter is required.
         */
        public Builder ntpServers(final java.util.List<? extends java.lang.Object> ntpServers) {
            this.props.ntpServers(ntpServers);
            return this;
        }

        /**
         * @return {@code this}
         * @param ramRoleName This parameter is required.
         */
        public Builder ramRoleName(final java.lang.String ramRoleName) {
            this.props.ramRoleName(ramRoleName);
            return this;
        }
        /**
         * @return {@code this}
         * @param ramRoleName This parameter is required.
         */
        public Builder ramRoleName(final com.aliyun.ros.cdk.core.IResolvable ramRoleName) {
            this.props.ramRoleName(ramRoleName);
            return this;
        }

        /**
         * @return {@code this}
         * @param resourceGroupId This parameter is required.
         */
        public Builder resourceGroupId(final java.lang.String resourceGroupId) {
            this.props.resourceGroupId(resourceGroupId);
            return this;
        }
        /**
         * @return {@code this}
         * @param resourceGroupId This parameter is required.
         */
        public Builder resourceGroupId(final com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.props.resourceGroupId(resourceGroupId);
            return this;
        }

        /**
         * @return {@code this}
         * @param restartPolicy This parameter is required.
         */
        public Builder restartPolicy(final java.lang.String restartPolicy) {
            this.props.restartPolicy(restartPolicy);
            return this;
        }
        /**
         * @return {@code this}
         * @param restartPolicy This parameter is required.
         */
        public Builder restartPolicy(final com.aliyun.ros.cdk.core.IResolvable restartPolicy) {
            this.props.restartPolicy(restartPolicy);
            return this;
        }

        /**
         * @return {@code this}
         * @param securityContextSysctls This parameter is required.
         */
        public Builder securityContextSysctls(final com.aliyun.ros.cdk.core.IResolvable securityContextSysctls) {
            this.props.securityContextSysctls(securityContextSysctls);
            return this;
        }
        /**
         * @return {@code this}
         * @param securityContextSysctls This parameter is required.
         */
        public Builder securityContextSysctls(final java.util.List<? extends java.lang.Object> securityContextSysctls) {
            this.props.securityContextSysctls(securityContextSysctls);
            return this;
        }

        /**
         * @return {@code this}
         * @param spotPriceLimit This parameter is required.
         */
        public Builder spotPriceLimit(final java.lang.Number spotPriceLimit) {
            this.props.spotPriceLimit(spotPriceLimit);
            return this;
        }
        /**
         * @return {@code this}
         * @param spotPriceLimit This parameter is required.
         */
        public Builder spotPriceLimit(final com.aliyun.ros.cdk.core.IResolvable spotPriceLimit) {
            this.props.spotPriceLimit(spotPriceLimit);
            return this;
        }

        /**
         * @return {@code this}
         * @param spotStrategy This parameter is required.
         */
        public Builder spotStrategy(final java.lang.String spotStrategy) {
            this.props.spotStrategy(spotStrategy);
            return this;
        }
        /**
         * @return {@code this}
         * @param spotStrategy This parameter is required.
         */
        public Builder spotStrategy(final com.aliyun.ros.cdk.core.IResolvable spotStrategy) {
            this.props.spotStrategy(spotStrategy);
            return this;
        }

        /**
         * @return {@code this}
         * @param tags This parameter is required.
         */
        public Builder tags(final java.util.List<? extends com.aliyun.ros.cdk.ess.RosEciScalingConfiguration.TagsProperty> tags) {
            this.props.tags(tags);
            return this;
        }

        /**
         * @return {@code this}
         * @param terminationGracePeriodSeconds This parameter is required.
         */
        public Builder terminationGracePeriodSeconds(final java.lang.Number terminationGracePeriodSeconds) {
            this.props.terminationGracePeriodSeconds(terminationGracePeriodSeconds);
            return this;
        }
        /**
         * @return {@code this}
         * @param terminationGracePeriodSeconds This parameter is required.
         */
        public Builder terminationGracePeriodSeconds(final com.aliyun.ros.cdk.core.IResolvable terminationGracePeriodSeconds) {
            this.props.terminationGracePeriodSeconds(terminationGracePeriodSeconds);
            return this;
        }

        /**
         * @return {@code this}
         * @param volumes This parameter is required.
         */
        public Builder volumes(final com.aliyun.ros.cdk.core.IResolvable volumes) {
            this.props.volumes(volumes);
            return this;
        }
        /**
         * @return {@code this}
         * @param volumes This parameter is required.
         */
        public Builder volumes(final java.util.List<? extends java.lang.Object> volumes) {
            this.props.volumes(volumes);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.ess.RosEciScalingConfiguration}.
         */
        @Override
        public com.aliyun.ros.cdk.ess.RosEciScalingConfiguration build() {
            return new com.aliyun.ros.cdk.ess.RosEciScalingConfiguration(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
