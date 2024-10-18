package com.aliyun.ros.cdk.slb;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::SLB::Listener</code>, which is used to create a Server Load Balancer (SLB) listener.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-10-18T08:56:33.518Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.slb.$Module.class, fqn = "@alicloud/ros-cdk-slb.RosListener")
public class RosListener extends com.aliyun.ros.cdk.core.RosResource {

    protected RosListener(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosListener(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.slb.RosListener.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosListener(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.slb.RosListenerProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrListenerPortsAndProtocol() {
        return software.amazon.jsii.Kernel.get(this, "attrListenerPortsAndProtocol", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrLoadBalancerId() {
        return software.amazon.jsii.Kernel.get(this, "attrLoadBalancerId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getBandwidth() {
        return software.amazon.jsii.Kernel.get(this, "bandwidth", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setBandwidth(final @org.jetbrains.annotations.NotNull java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "bandwidth", java.util.Objects.requireNonNull(value, "bandwidth is required"));
    }

    /**
     */
    public void setBandwidth(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "bandwidth", java.util.Objects.requireNonNull(value, "bandwidth is required"));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getListenerPort() {
        return software.amazon.jsii.Kernel.get(this, "listenerPort", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setListenerPort(final @org.jetbrains.annotations.NotNull java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "listenerPort", java.util.Objects.requireNonNull(value, "listenerPort is required"));
    }

    /**
     */
    public void setListenerPort(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "listenerPort", java.util.Objects.requireNonNull(value, "listenerPort is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getLoadBalancerId() {
        return software.amazon.jsii.Kernel.get(this, "loadBalancerId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setLoadBalancerId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "loadBalancerId", java.util.Objects.requireNonNull(value, "loadBalancerId is required"));
    }

    /**
     */
    public void setLoadBalancerId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "loadBalancerId", java.util.Objects.requireNonNull(value, "loadBalancerId is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getProtocol() {
        return software.amazon.jsii.Kernel.get(this, "protocol", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setProtocol(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "protocol", java.util.Objects.requireNonNull(value, "protocol is required"));
    }

    /**
     */
    public void setProtocol(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "protocol", java.util.Objects.requireNonNull(value, "protocol is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getAclId() {
        return software.amazon.jsii.Kernel.get(this, "aclId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAclId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "aclId", value);
    }

    /**
     */
    public void setAclId(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "aclId", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getAclIds() {
        return software.amazon.jsii.Kernel.get(this, "aclIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAclIds(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "aclIds", value);
    }

    /**
     */
    public void setAclIds(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
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
        software.amazon.jsii.Kernel.set(this, "aclIds", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getAclStatus() {
        return software.amazon.jsii.Kernel.get(this, "aclStatus", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAclStatus(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "aclStatus", value);
    }

    /**
     */
    public void setAclStatus(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "aclStatus", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getAclType() {
        return software.amazon.jsii.Kernel.get(this, "aclType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setAclType(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "aclType", value);
    }

    /**
     */
    public void setAclType(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "aclType", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getBackendServerPort() {
        return software.amazon.jsii.Kernel.get(this, "backendServerPort", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setBackendServerPort(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "backendServerPort", value);
    }

    /**
     */
    public void setBackendServerPort(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "backendServerPort", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getCaCertificateId() {
        return software.amazon.jsii.Kernel.get(this, "caCertificateId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setCaCertificateId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "caCertificateId", value);
    }

    /**
     */
    public void setCaCertificateId(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "caCertificateId", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getConnectionDrain() {
        return software.amazon.jsii.Kernel.get(this, "connectionDrain", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setConnectionDrain(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "connectionDrain", value);
    }

    /**
     */
    public void setConnectionDrain(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "connectionDrain", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getConnectionDrainTimeout() {
        return software.amazon.jsii.Kernel.get(this, "connectionDrainTimeout", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setConnectionDrainTimeout(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "connectionDrainTimeout", value);
    }

    /**
     */
    public void setConnectionDrainTimeout(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "connectionDrainTimeout", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDescription(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "description", value);
    }

    /**
     */
    public void setDescription(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "description", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getEnableHttp2() {
        return software.amazon.jsii.Kernel.get(this, "enableHttp2", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setEnableHttp2(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "enableHttp2", value);
    }

    /**
     */
    public void setEnableHttp2(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "enableHttp2", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getGzip() {
        return software.amazon.jsii.Kernel.get(this, "gzip", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setGzip(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "gzip", value);
    }

    /**
     */
    public void setGzip(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "gzip", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getHealthCheck() {
        return software.amazon.jsii.Kernel.get(this, "healthCheck", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setHealthCheck(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "healthCheck", value);
    }

    /**
     */
    public void setHealthCheck(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.slb.RosListener.HealthCheckProperty value) {
        software.amazon.jsii.Kernel.set(this, "healthCheck", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getHttpConfig() {
        return software.amazon.jsii.Kernel.get(this, "httpConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setHttpConfig(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "httpConfig", value);
    }

    /**
     */
    public void setHttpConfig(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.slb.RosListener.HttpConfigProperty value) {
        software.amazon.jsii.Kernel.set(this, "httpConfig", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getIdleTimeout() {
        return software.amazon.jsii.Kernel.get(this, "idleTimeout", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setIdleTimeout(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "idleTimeout", value);
    }

    /**
     */
    public void setIdleTimeout(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "idleTimeout", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getMasterSlaveServerGroupId() {
        return software.amazon.jsii.Kernel.get(this, "masterSlaveServerGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setMasterSlaveServerGroupId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "masterSlaveServerGroupId", value);
    }

    /**
     */
    public void setMasterSlaveServerGroupId(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "masterSlaveServerGroupId", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getPersistence() {
        return software.amazon.jsii.Kernel.get(this, "persistence", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPersistence(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "persistence", value);
    }

    /**
     */
    public void setPersistence(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.slb.RosListener.PersistenceProperty value) {
        software.amazon.jsii.Kernel.set(this, "persistence", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getPortRange() {
        return software.amazon.jsii.Kernel.get(this, "portRange", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPortRange(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "portRange", value);
    }

    /**
     */
    public void setPortRange(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
                if (
                     !(__val_ac66f0 instanceof com.aliyun.ros.cdk.core.IResolvable)
                    && !(__val_ac66f0 instanceof com.aliyun.ros.cdk.slb.RosListener.PortRangeProperty)
                    && !(__val_ac66f0.getClass().equals(software.amazon.jsii.JsiiObject.class))
                ) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("value").append(".get(").append(__idx_ac66f0).append(")")
                            .append(" to be one of: com.aliyun.ros.cdk.core.IResolvable, com.aliyun.ros.cdk.slb.RosListener.PortRangeProperty; received ")
                            .append(__val_ac66f0.getClass()).toString());
                }
            }
        }
        software.amazon.jsii.Kernel.set(this, "portRange", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getProxyProtocolV2Enabled() {
        return software.amazon.jsii.Kernel.get(this, "proxyProtocolV2Enabled", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setProxyProtocolV2Enabled(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "proxyProtocolV2Enabled", value);
    }

    /**
     */
    public void setProxyProtocolV2Enabled(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "proxyProtocolV2Enabled", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getRequestTimeout() {
        return software.amazon.jsii.Kernel.get(this, "requestTimeout", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setRequestTimeout(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "requestTimeout", value);
    }

    /**
     */
    public void setRequestTimeout(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "requestTimeout", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getScheduler() {
        return software.amazon.jsii.Kernel.get(this, "scheduler", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setScheduler(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "scheduler", value);
    }

    /**
     */
    public void setScheduler(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "scheduler", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getServerCertificateId() {
        return software.amazon.jsii.Kernel.get(this, "serverCertificateId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setServerCertificateId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "serverCertificateId", value);
    }

    /**
     */
    public void setServerCertificateId(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "serverCertificateId", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getStartListener() {
        return software.amazon.jsii.Kernel.get(this, "startListener", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setStartListener(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "startListener", value);
    }

    /**
     */
    public void setStartListener(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "startListener", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.slb.RosListener.TagsProperty> getTags() {
        return java.util.Optional.ofNullable((java.util.List<com.aliyun.ros.cdk.slb.RosListener.TagsProperty>)(software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.slb.RosListener.TagsProperty.class))))).map(java.util.Collections::unmodifiableList).orElse(null);
    }

    /**
     */
    public void setTags(final @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.slb.RosListener.TagsProperty> value) {
        software.amazon.jsii.Kernel.set(this, "tags", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getTlsCipherPolicy() {
        return software.amazon.jsii.Kernel.get(this, "tlsCipherPolicy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setTlsCipherPolicy(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "tlsCipherPolicy", value);
    }

    /**
     */
    public void setTlsCipherPolicy(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "tlsCipherPolicy", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getVServerGroupId() {
        return software.amazon.jsii.Kernel.get(this, "vServerGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setVServerGroupId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "vServerGroupId", value);
    }

    /**
     */
    public void setVServerGroupId(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "vServerGroupId", value);
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.slb.$Module.class, fqn = "@alicloud/ros-cdk-slb.RosListener.HealthCheckProperty")
    @software.amazon.jsii.Jsii.Proxy(HealthCheckProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface HealthCheckProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getDomain() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getExp() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getHealthCheckMethod() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getHealthCheckType() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getHealthyThreshold() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getHttpCode() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getInterval() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getPort() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getReq() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getSwitchValue() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getTimeout() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getUnhealthyThreshold() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getUri() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link HealthCheckProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link HealthCheckProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<HealthCheckProperty> {
            java.lang.Object domain;
            java.lang.Object exp;
            java.lang.Object healthCheckMethod;
            java.lang.Object healthCheckType;
            java.lang.Object healthyThreshold;
            java.lang.Object httpCode;
            java.lang.Object interval;
            java.lang.Object port;
            java.lang.Object req;
            java.lang.Object switchValue;
            java.lang.Object timeout;
            java.lang.Object unhealthyThreshold;
            java.lang.Object uri;

            /**
             * Sets the value of {@link HealthCheckProperty#getDomain}
             * @param domain the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder domain(java.lang.String domain) {
                this.domain = domain;
                return this;
            }

            /**
             * Sets the value of {@link HealthCheckProperty#getDomain}
             * @param domain the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder domain(com.aliyun.ros.cdk.core.IResolvable domain) {
                this.domain = domain;
                return this;
            }

            /**
             * Sets the value of {@link HealthCheckProperty#getExp}
             * @param exp the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder exp(java.lang.String exp) {
                this.exp = exp;
                return this;
            }

            /**
             * Sets the value of {@link HealthCheckProperty#getExp}
             * @param exp the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder exp(com.aliyun.ros.cdk.core.IResolvable exp) {
                this.exp = exp;
                return this;
            }

            /**
             * Sets the value of {@link HealthCheckProperty#getHealthCheckMethod}
             * @param healthCheckMethod the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder healthCheckMethod(java.lang.String healthCheckMethod) {
                this.healthCheckMethod = healthCheckMethod;
                return this;
            }

            /**
             * Sets the value of {@link HealthCheckProperty#getHealthCheckMethod}
             * @param healthCheckMethod the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder healthCheckMethod(com.aliyun.ros.cdk.core.IResolvable healthCheckMethod) {
                this.healthCheckMethod = healthCheckMethod;
                return this;
            }

            /**
             * Sets the value of {@link HealthCheckProperty#getHealthCheckType}
             * @param healthCheckType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder healthCheckType(java.lang.String healthCheckType) {
                this.healthCheckType = healthCheckType;
                return this;
            }

            /**
             * Sets the value of {@link HealthCheckProperty#getHealthCheckType}
             * @param healthCheckType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder healthCheckType(com.aliyun.ros.cdk.core.IResolvable healthCheckType) {
                this.healthCheckType = healthCheckType;
                return this;
            }

            /**
             * Sets the value of {@link HealthCheckProperty#getHealthyThreshold}
             * @param healthyThreshold the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder healthyThreshold(java.lang.Number healthyThreshold) {
                this.healthyThreshold = healthyThreshold;
                return this;
            }

            /**
             * Sets the value of {@link HealthCheckProperty#getHealthyThreshold}
             * @param healthyThreshold the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder healthyThreshold(com.aliyun.ros.cdk.core.IResolvable healthyThreshold) {
                this.healthyThreshold = healthyThreshold;
                return this;
            }

            /**
             * Sets the value of {@link HealthCheckProperty#getHttpCode}
             * @param httpCode the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder httpCode(java.lang.String httpCode) {
                this.httpCode = httpCode;
                return this;
            }

            /**
             * Sets the value of {@link HealthCheckProperty#getHttpCode}
             * @param httpCode the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder httpCode(com.aliyun.ros.cdk.core.IResolvable httpCode) {
                this.httpCode = httpCode;
                return this;
            }

            /**
             * Sets the value of {@link HealthCheckProperty#getInterval}
             * @param interval the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder interval(java.lang.Number interval) {
                this.interval = interval;
                return this;
            }

            /**
             * Sets the value of {@link HealthCheckProperty#getInterval}
             * @param interval the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder interval(com.aliyun.ros.cdk.core.IResolvable interval) {
                this.interval = interval;
                return this;
            }

            /**
             * Sets the value of {@link HealthCheckProperty#getPort}
             * @param port the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder port(java.lang.Number port) {
                this.port = port;
                return this;
            }

            /**
             * Sets the value of {@link HealthCheckProperty#getPort}
             * @param port the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder port(com.aliyun.ros.cdk.core.IResolvable port) {
                this.port = port;
                return this;
            }

            /**
             * Sets the value of {@link HealthCheckProperty#getReq}
             * @param req the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder req(java.lang.String req) {
                this.req = req;
                return this;
            }

            /**
             * Sets the value of {@link HealthCheckProperty#getReq}
             * @param req the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder req(com.aliyun.ros.cdk.core.IResolvable req) {
                this.req = req;
                return this;
            }

            /**
             * Sets the value of {@link HealthCheckProperty#getSwitchValue}
             * @param switchValue the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder switchValue(java.lang.String switchValue) {
                this.switchValue = switchValue;
                return this;
            }

            /**
             * Sets the value of {@link HealthCheckProperty#getSwitchValue}
             * @param switchValue the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder switchValue(com.aliyun.ros.cdk.core.IResolvable switchValue) {
                this.switchValue = switchValue;
                return this;
            }

            /**
             * Sets the value of {@link HealthCheckProperty#getTimeout}
             * @param timeout the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder timeout(java.lang.Number timeout) {
                this.timeout = timeout;
                return this;
            }

            /**
             * Sets the value of {@link HealthCheckProperty#getTimeout}
             * @param timeout the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder timeout(com.aliyun.ros.cdk.core.IResolvable timeout) {
                this.timeout = timeout;
                return this;
            }

            /**
             * Sets the value of {@link HealthCheckProperty#getUnhealthyThreshold}
             * @param unhealthyThreshold the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder unhealthyThreshold(java.lang.Number unhealthyThreshold) {
                this.unhealthyThreshold = unhealthyThreshold;
                return this;
            }

            /**
             * Sets the value of {@link HealthCheckProperty#getUnhealthyThreshold}
             * @param unhealthyThreshold the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder unhealthyThreshold(com.aliyun.ros.cdk.core.IResolvable unhealthyThreshold) {
                this.unhealthyThreshold = unhealthyThreshold;
                return this;
            }

            /**
             * Sets the value of {@link HealthCheckProperty#getUri}
             * @param uri the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder uri(java.lang.String uri) {
                this.uri = uri;
                return this;
            }

            /**
             * Sets the value of {@link HealthCheckProperty#getUri}
             * @param uri the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder uri(com.aliyun.ros.cdk.core.IResolvable uri) {
                this.uri = uri;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link HealthCheckProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public HealthCheckProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link HealthCheckProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements HealthCheckProperty {
            private final java.lang.Object domain;
            private final java.lang.Object exp;
            private final java.lang.Object healthCheckMethod;
            private final java.lang.Object healthCheckType;
            private final java.lang.Object healthyThreshold;
            private final java.lang.Object httpCode;
            private final java.lang.Object interval;
            private final java.lang.Object port;
            private final java.lang.Object req;
            private final java.lang.Object switchValue;
            private final java.lang.Object timeout;
            private final java.lang.Object unhealthyThreshold;
            private final java.lang.Object uri;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.domain = software.amazon.jsii.Kernel.get(this, "domain", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.exp = software.amazon.jsii.Kernel.get(this, "exp", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.healthCheckMethod = software.amazon.jsii.Kernel.get(this, "healthCheckMethod", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.healthCheckType = software.amazon.jsii.Kernel.get(this, "healthCheckType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.healthyThreshold = software.amazon.jsii.Kernel.get(this, "healthyThreshold", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.httpCode = software.amazon.jsii.Kernel.get(this, "httpCode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.interval = software.amazon.jsii.Kernel.get(this, "interval", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.port = software.amazon.jsii.Kernel.get(this, "port", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.req = software.amazon.jsii.Kernel.get(this, "req", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.switchValue = software.amazon.jsii.Kernel.get(this, "switch", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.timeout = software.amazon.jsii.Kernel.get(this, "timeout", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.unhealthyThreshold = software.amazon.jsii.Kernel.get(this, "unhealthyThreshold", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.uri = software.amazon.jsii.Kernel.get(this, "uri", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.domain = builder.domain;
                this.exp = builder.exp;
                this.healthCheckMethod = builder.healthCheckMethod;
                this.healthCheckType = builder.healthCheckType;
                this.healthyThreshold = builder.healthyThreshold;
                this.httpCode = builder.httpCode;
                this.interval = builder.interval;
                this.port = builder.port;
                this.req = builder.req;
                this.switchValue = builder.switchValue;
                this.timeout = builder.timeout;
                this.unhealthyThreshold = builder.unhealthyThreshold;
                this.uri = builder.uri;
            }

            @Override
            public final java.lang.Object getDomain() {
                return this.domain;
            }

            @Override
            public final java.lang.Object getExp() {
                return this.exp;
            }

            @Override
            public final java.lang.Object getHealthCheckMethod() {
                return this.healthCheckMethod;
            }

            @Override
            public final java.lang.Object getHealthCheckType() {
                return this.healthCheckType;
            }

            @Override
            public final java.lang.Object getHealthyThreshold() {
                return this.healthyThreshold;
            }

            @Override
            public final java.lang.Object getHttpCode() {
                return this.httpCode;
            }

            @Override
            public final java.lang.Object getInterval() {
                return this.interval;
            }

            @Override
            public final java.lang.Object getPort() {
                return this.port;
            }

            @Override
            public final java.lang.Object getReq() {
                return this.req;
            }

            @Override
            public final java.lang.Object getSwitchValue() {
                return this.switchValue;
            }

            @Override
            public final java.lang.Object getTimeout() {
                return this.timeout;
            }

            @Override
            public final java.lang.Object getUnhealthyThreshold() {
                return this.unhealthyThreshold;
            }

            @Override
            public final java.lang.Object getUri() {
                return this.uri;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getDomain() != null) {
                    data.set("domain", om.valueToTree(this.getDomain()));
                }
                if (this.getExp() != null) {
                    data.set("exp", om.valueToTree(this.getExp()));
                }
                if (this.getHealthCheckMethod() != null) {
                    data.set("healthCheckMethod", om.valueToTree(this.getHealthCheckMethod()));
                }
                if (this.getHealthCheckType() != null) {
                    data.set("healthCheckType", om.valueToTree(this.getHealthCheckType()));
                }
                if (this.getHealthyThreshold() != null) {
                    data.set("healthyThreshold", om.valueToTree(this.getHealthyThreshold()));
                }
                if (this.getHttpCode() != null) {
                    data.set("httpCode", om.valueToTree(this.getHttpCode()));
                }
                if (this.getInterval() != null) {
                    data.set("interval", om.valueToTree(this.getInterval()));
                }
                if (this.getPort() != null) {
                    data.set("port", om.valueToTree(this.getPort()));
                }
                if (this.getReq() != null) {
                    data.set("req", om.valueToTree(this.getReq()));
                }
                if (this.getSwitchValue() != null) {
                    data.set("switch", om.valueToTree(this.getSwitchValue()));
                }
                if (this.getTimeout() != null) {
                    data.set("timeout", om.valueToTree(this.getTimeout()));
                }
                if (this.getUnhealthyThreshold() != null) {
                    data.set("unhealthyThreshold", om.valueToTree(this.getUnhealthyThreshold()));
                }
                if (this.getUri() != null) {
                    data.set("uri", om.valueToTree(this.getUri()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-slb.RosListener.HealthCheckProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                HealthCheckProperty.Jsii$Proxy that = (HealthCheckProperty.Jsii$Proxy) o;

                if (this.domain != null ? !this.domain.equals(that.domain) : that.domain != null) return false;
                if (this.exp != null ? !this.exp.equals(that.exp) : that.exp != null) return false;
                if (this.healthCheckMethod != null ? !this.healthCheckMethod.equals(that.healthCheckMethod) : that.healthCheckMethod != null) return false;
                if (this.healthCheckType != null ? !this.healthCheckType.equals(that.healthCheckType) : that.healthCheckType != null) return false;
                if (this.healthyThreshold != null ? !this.healthyThreshold.equals(that.healthyThreshold) : that.healthyThreshold != null) return false;
                if (this.httpCode != null ? !this.httpCode.equals(that.httpCode) : that.httpCode != null) return false;
                if (this.interval != null ? !this.interval.equals(that.interval) : that.interval != null) return false;
                if (this.port != null ? !this.port.equals(that.port) : that.port != null) return false;
                if (this.req != null ? !this.req.equals(that.req) : that.req != null) return false;
                if (this.switchValue != null ? !this.switchValue.equals(that.switchValue) : that.switchValue != null) return false;
                if (this.timeout != null ? !this.timeout.equals(that.timeout) : that.timeout != null) return false;
                if (this.unhealthyThreshold != null ? !this.unhealthyThreshold.equals(that.unhealthyThreshold) : that.unhealthyThreshold != null) return false;
                return this.uri != null ? this.uri.equals(that.uri) : that.uri == null;
            }

            @Override
            public final int hashCode() {
                int result = this.domain != null ? this.domain.hashCode() : 0;
                result = 31 * result + (this.exp != null ? this.exp.hashCode() : 0);
                result = 31 * result + (this.healthCheckMethod != null ? this.healthCheckMethod.hashCode() : 0);
                result = 31 * result + (this.healthCheckType != null ? this.healthCheckType.hashCode() : 0);
                result = 31 * result + (this.healthyThreshold != null ? this.healthyThreshold.hashCode() : 0);
                result = 31 * result + (this.httpCode != null ? this.httpCode.hashCode() : 0);
                result = 31 * result + (this.interval != null ? this.interval.hashCode() : 0);
                result = 31 * result + (this.port != null ? this.port.hashCode() : 0);
                result = 31 * result + (this.req != null ? this.req.hashCode() : 0);
                result = 31 * result + (this.switchValue != null ? this.switchValue.hashCode() : 0);
                result = 31 * result + (this.timeout != null ? this.timeout.hashCode() : 0);
                result = 31 * result + (this.unhealthyThreshold != null ? this.unhealthyThreshold.hashCode() : 0);
                result = 31 * result + (this.uri != null ? this.uri.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.slb.$Module.class, fqn = "@alicloud/ros-cdk-slb.RosListener.HttpConfigProperty")
    @software.amazon.jsii.Jsii.Proxy(HttpConfigProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface HttpConfigProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getForwardPort() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getListenerForward() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link HttpConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link HttpConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<HttpConfigProperty> {
            java.lang.Object forwardPort;
            java.lang.Object listenerForward;

            /**
             * Sets the value of {@link HttpConfigProperty#getForwardPort}
             * @param forwardPort the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder forwardPort(java.lang.Number forwardPort) {
                this.forwardPort = forwardPort;
                return this;
            }

            /**
             * Sets the value of {@link HttpConfigProperty#getForwardPort}
             * @param forwardPort the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder forwardPort(com.aliyun.ros.cdk.core.IResolvable forwardPort) {
                this.forwardPort = forwardPort;
                return this;
            }

            /**
             * Sets the value of {@link HttpConfigProperty#getListenerForward}
             * @param listenerForward the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder listenerForward(java.lang.String listenerForward) {
                this.listenerForward = listenerForward;
                return this;
            }

            /**
             * Sets the value of {@link HttpConfigProperty#getListenerForward}
             * @param listenerForward the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder listenerForward(com.aliyun.ros.cdk.core.IResolvable listenerForward) {
                this.listenerForward = listenerForward;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link HttpConfigProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public HttpConfigProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link HttpConfigProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements HttpConfigProperty {
            private final java.lang.Object forwardPort;
            private final java.lang.Object listenerForward;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.forwardPort = software.amazon.jsii.Kernel.get(this, "forwardPort", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.listenerForward = software.amazon.jsii.Kernel.get(this, "listenerForward", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.forwardPort = builder.forwardPort;
                this.listenerForward = builder.listenerForward;
            }

            @Override
            public final java.lang.Object getForwardPort() {
                return this.forwardPort;
            }

            @Override
            public final java.lang.Object getListenerForward() {
                return this.listenerForward;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getForwardPort() != null) {
                    data.set("forwardPort", om.valueToTree(this.getForwardPort()));
                }
                if (this.getListenerForward() != null) {
                    data.set("listenerForward", om.valueToTree(this.getListenerForward()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-slb.RosListener.HttpConfigProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                HttpConfigProperty.Jsii$Proxy that = (HttpConfigProperty.Jsii$Proxy) o;

                if (this.forwardPort != null ? !this.forwardPort.equals(that.forwardPort) : that.forwardPort != null) return false;
                return this.listenerForward != null ? this.listenerForward.equals(that.listenerForward) : that.listenerForward == null;
            }

            @Override
            public final int hashCode() {
                int result = this.forwardPort != null ? this.forwardPort.hashCode() : 0;
                result = 31 * result + (this.listenerForward != null ? this.listenerForward.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.slb.$Module.class, fqn = "@alicloud/ros-cdk-slb.RosListener.PersistenceProperty")
    @software.amazon.jsii.Jsii.Proxy(PersistenceProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface PersistenceProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getCookie() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getCookieTimeout() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getPersistenceTimeout() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getStickySession() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getStickySessionType() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getXForwardedFor() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getXForwardedForClientSrcPort() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getXForwardedForProto() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getXForwardedForSlbid() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getXForwardedForSlbip() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getXForwardedForSlbport() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link PersistenceProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link PersistenceProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<PersistenceProperty> {
            java.lang.Object cookie;
            java.lang.Object cookieTimeout;
            java.lang.Object persistenceTimeout;
            java.lang.Object stickySession;
            java.lang.Object stickySessionType;
            java.lang.Object xForwardedFor;
            java.lang.Object xForwardedForClientSrcPort;
            java.lang.Object xForwardedForProto;
            java.lang.Object xForwardedForSlbid;
            java.lang.Object xForwardedForSlbip;
            java.lang.Object xForwardedForSlbport;

            /**
             * Sets the value of {@link PersistenceProperty#getCookie}
             * @param cookie the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder cookie(java.lang.String cookie) {
                this.cookie = cookie;
                return this;
            }

            /**
             * Sets the value of {@link PersistenceProperty#getCookie}
             * @param cookie the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder cookie(com.aliyun.ros.cdk.core.IResolvable cookie) {
                this.cookie = cookie;
                return this;
            }

            /**
             * Sets the value of {@link PersistenceProperty#getCookieTimeout}
             * @param cookieTimeout the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder cookieTimeout(java.lang.Number cookieTimeout) {
                this.cookieTimeout = cookieTimeout;
                return this;
            }

            /**
             * Sets the value of {@link PersistenceProperty#getCookieTimeout}
             * @param cookieTimeout the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder cookieTimeout(com.aliyun.ros.cdk.core.IResolvable cookieTimeout) {
                this.cookieTimeout = cookieTimeout;
                return this;
            }

            /**
             * Sets the value of {@link PersistenceProperty#getPersistenceTimeout}
             * @param persistenceTimeout the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder persistenceTimeout(java.lang.Number persistenceTimeout) {
                this.persistenceTimeout = persistenceTimeout;
                return this;
            }

            /**
             * Sets the value of {@link PersistenceProperty#getPersistenceTimeout}
             * @param persistenceTimeout the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder persistenceTimeout(com.aliyun.ros.cdk.core.IResolvable persistenceTimeout) {
                this.persistenceTimeout = persistenceTimeout;
                return this;
            }

            /**
             * Sets the value of {@link PersistenceProperty#getStickySession}
             * @param stickySession the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder stickySession(java.lang.String stickySession) {
                this.stickySession = stickySession;
                return this;
            }

            /**
             * Sets the value of {@link PersistenceProperty#getStickySession}
             * @param stickySession the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder stickySession(com.aliyun.ros.cdk.core.IResolvable stickySession) {
                this.stickySession = stickySession;
                return this;
            }

            /**
             * Sets the value of {@link PersistenceProperty#getStickySessionType}
             * @param stickySessionType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder stickySessionType(java.lang.String stickySessionType) {
                this.stickySessionType = stickySessionType;
                return this;
            }

            /**
             * Sets the value of {@link PersistenceProperty#getStickySessionType}
             * @param stickySessionType the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder stickySessionType(com.aliyun.ros.cdk.core.IResolvable stickySessionType) {
                this.stickySessionType = stickySessionType;
                return this;
            }

            /**
             * Sets the value of {@link PersistenceProperty#getXForwardedFor}
             * @param xForwardedFor the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder xForwardedFor(java.lang.String xForwardedFor) {
                this.xForwardedFor = xForwardedFor;
                return this;
            }

            /**
             * Sets the value of {@link PersistenceProperty#getXForwardedFor}
             * @param xForwardedFor the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder xForwardedFor(com.aliyun.ros.cdk.core.IResolvable xForwardedFor) {
                this.xForwardedFor = xForwardedFor;
                return this;
            }

            /**
             * Sets the value of {@link PersistenceProperty#getXForwardedForClientSrcPort}
             * @param xForwardedForClientSrcPort the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder xForwardedForClientSrcPort(java.lang.String xForwardedForClientSrcPort) {
                this.xForwardedForClientSrcPort = xForwardedForClientSrcPort;
                return this;
            }

            /**
             * Sets the value of {@link PersistenceProperty#getXForwardedForClientSrcPort}
             * @param xForwardedForClientSrcPort the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder xForwardedForClientSrcPort(com.aliyun.ros.cdk.core.IResolvable xForwardedForClientSrcPort) {
                this.xForwardedForClientSrcPort = xForwardedForClientSrcPort;
                return this;
            }

            /**
             * Sets the value of {@link PersistenceProperty#getXForwardedForProto}
             * @param xForwardedForProto the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder xForwardedForProto(java.lang.String xForwardedForProto) {
                this.xForwardedForProto = xForwardedForProto;
                return this;
            }

            /**
             * Sets the value of {@link PersistenceProperty#getXForwardedForProto}
             * @param xForwardedForProto the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder xForwardedForProto(com.aliyun.ros.cdk.core.IResolvable xForwardedForProto) {
                this.xForwardedForProto = xForwardedForProto;
                return this;
            }

            /**
             * Sets the value of {@link PersistenceProperty#getXForwardedForSlbid}
             * @param xForwardedForSlbid the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder xForwardedForSlbid(java.lang.String xForwardedForSlbid) {
                this.xForwardedForSlbid = xForwardedForSlbid;
                return this;
            }

            /**
             * Sets the value of {@link PersistenceProperty#getXForwardedForSlbid}
             * @param xForwardedForSlbid the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder xForwardedForSlbid(com.aliyun.ros.cdk.core.IResolvable xForwardedForSlbid) {
                this.xForwardedForSlbid = xForwardedForSlbid;
                return this;
            }

            /**
             * Sets the value of {@link PersistenceProperty#getXForwardedForSlbip}
             * @param xForwardedForSlbip the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder xForwardedForSlbip(java.lang.String xForwardedForSlbip) {
                this.xForwardedForSlbip = xForwardedForSlbip;
                return this;
            }

            /**
             * Sets the value of {@link PersistenceProperty#getXForwardedForSlbip}
             * @param xForwardedForSlbip the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder xForwardedForSlbip(com.aliyun.ros.cdk.core.IResolvable xForwardedForSlbip) {
                this.xForwardedForSlbip = xForwardedForSlbip;
                return this;
            }

            /**
             * Sets the value of {@link PersistenceProperty#getXForwardedForSlbport}
             * @param xForwardedForSlbport the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder xForwardedForSlbport(java.lang.String xForwardedForSlbport) {
                this.xForwardedForSlbport = xForwardedForSlbport;
                return this;
            }

            /**
             * Sets the value of {@link PersistenceProperty#getXForwardedForSlbport}
             * @param xForwardedForSlbport the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder xForwardedForSlbport(com.aliyun.ros.cdk.core.IResolvable xForwardedForSlbport) {
                this.xForwardedForSlbport = xForwardedForSlbport;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link PersistenceProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public PersistenceProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link PersistenceProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements PersistenceProperty {
            private final java.lang.Object cookie;
            private final java.lang.Object cookieTimeout;
            private final java.lang.Object persistenceTimeout;
            private final java.lang.Object stickySession;
            private final java.lang.Object stickySessionType;
            private final java.lang.Object xForwardedFor;
            private final java.lang.Object xForwardedForClientSrcPort;
            private final java.lang.Object xForwardedForProto;
            private final java.lang.Object xForwardedForSlbid;
            private final java.lang.Object xForwardedForSlbip;
            private final java.lang.Object xForwardedForSlbport;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.cookie = software.amazon.jsii.Kernel.get(this, "cookie", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.cookieTimeout = software.amazon.jsii.Kernel.get(this, "cookieTimeout", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.persistenceTimeout = software.amazon.jsii.Kernel.get(this, "persistenceTimeout", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.stickySession = software.amazon.jsii.Kernel.get(this, "stickySession", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.stickySessionType = software.amazon.jsii.Kernel.get(this, "stickySessionType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.xForwardedFor = software.amazon.jsii.Kernel.get(this, "xForwardedFor", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.xForwardedForClientSrcPort = software.amazon.jsii.Kernel.get(this, "xForwardedForClientSrcPort", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.xForwardedForProto = software.amazon.jsii.Kernel.get(this, "xForwardedForProto", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.xForwardedForSlbid = software.amazon.jsii.Kernel.get(this, "xForwardedForSlbid", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.xForwardedForSlbip = software.amazon.jsii.Kernel.get(this, "xForwardedForSlbip", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.xForwardedForSlbport = software.amazon.jsii.Kernel.get(this, "xForwardedForSlbport", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.cookie = builder.cookie;
                this.cookieTimeout = builder.cookieTimeout;
                this.persistenceTimeout = builder.persistenceTimeout;
                this.stickySession = builder.stickySession;
                this.stickySessionType = builder.stickySessionType;
                this.xForwardedFor = builder.xForwardedFor;
                this.xForwardedForClientSrcPort = builder.xForwardedForClientSrcPort;
                this.xForwardedForProto = builder.xForwardedForProto;
                this.xForwardedForSlbid = builder.xForwardedForSlbid;
                this.xForwardedForSlbip = builder.xForwardedForSlbip;
                this.xForwardedForSlbport = builder.xForwardedForSlbport;
            }

            @Override
            public final java.lang.Object getCookie() {
                return this.cookie;
            }

            @Override
            public final java.lang.Object getCookieTimeout() {
                return this.cookieTimeout;
            }

            @Override
            public final java.lang.Object getPersistenceTimeout() {
                return this.persistenceTimeout;
            }

            @Override
            public final java.lang.Object getStickySession() {
                return this.stickySession;
            }

            @Override
            public final java.lang.Object getStickySessionType() {
                return this.stickySessionType;
            }

            @Override
            public final java.lang.Object getXForwardedFor() {
                return this.xForwardedFor;
            }

            @Override
            public final java.lang.Object getXForwardedForClientSrcPort() {
                return this.xForwardedForClientSrcPort;
            }

            @Override
            public final java.lang.Object getXForwardedForProto() {
                return this.xForwardedForProto;
            }

            @Override
            public final java.lang.Object getXForwardedForSlbid() {
                return this.xForwardedForSlbid;
            }

            @Override
            public final java.lang.Object getXForwardedForSlbip() {
                return this.xForwardedForSlbip;
            }

            @Override
            public final java.lang.Object getXForwardedForSlbport() {
                return this.xForwardedForSlbport;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getCookie() != null) {
                    data.set("cookie", om.valueToTree(this.getCookie()));
                }
                if (this.getCookieTimeout() != null) {
                    data.set("cookieTimeout", om.valueToTree(this.getCookieTimeout()));
                }
                if (this.getPersistenceTimeout() != null) {
                    data.set("persistenceTimeout", om.valueToTree(this.getPersistenceTimeout()));
                }
                if (this.getStickySession() != null) {
                    data.set("stickySession", om.valueToTree(this.getStickySession()));
                }
                if (this.getStickySessionType() != null) {
                    data.set("stickySessionType", om.valueToTree(this.getStickySessionType()));
                }
                if (this.getXForwardedFor() != null) {
                    data.set("xForwardedFor", om.valueToTree(this.getXForwardedFor()));
                }
                if (this.getXForwardedForClientSrcPort() != null) {
                    data.set("xForwardedForClientSrcPort", om.valueToTree(this.getXForwardedForClientSrcPort()));
                }
                if (this.getXForwardedForProto() != null) {
                    data.set("xForwardedForProto", om.valueToTree(this.getXForwardedForProto()));
                }
                if (this.getXForwardedForSlbid() != null) {
                    data.set("xForwardedForSlbid", om.valueToTree(this.getXForwardedForSlbid()));
                }
                if (this.getXForwardedForSlbip() != null) {
                    data.set("xForwardedForSlbip", om.valueToTree(this.getXForwardedForSlbip()));
                }
                if (this.getXForwardedForSlbport() != null) {
                    data.set("xForwardedForSlbport", om.valueToTree(this.getXForwardedForSlbport()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-slb.RosListener.PersistenceProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                PersistenceProperty.Jsii$Proxy that = (PersistenceProperty.Jsii$Proxy) o;

                if (this.cookie != null ? !this.cookie.equals(that.cookie) : that.cookie != null) return false;
                if (this.cookieTimeout != null ? !this.cookieTimeout.equals(that.cookieTimeout) : that.cookieTimeout != null) return false;
                if (this.persistenceTimeout != null ? !this.persistenceTimeout.equals(that.persistenceTimeout) : that.persistenceTimeout != null) return false;
                if (this.stickySession != null ? !this.stickySession.equals(that.stickySession) : that.stickySession != null) return false;
                if (this.stickySessionType != null ? !this.stickySessionType.equals(that.stickySessionType) : that.stickySessionType != null) return false;
                if (this.xForwardedFor != null ? !this.xForwardedFor.equals(that.xForwardedFor) : that.xForwardedFor != null) return false;
                if (this.xForwardedForClientSrcPort != null ? !this.xForwardedForClientSrcPort.equals(that.xForwardedForClientSrcPort) : that.xForwardedForClientSrcPort != null) return false;
                if (this.xForwardedForProto != null ? !this.xForwardedForProto.equals(that.xForwardedForProto) : that.xForwardedForProto != null) return false;
                if (this.xForwardedForSlbid != null ? !this.xForwardedForSlbid.equals(that.xForwardedForSlbid) : that.xForwardedForSlbid != null) return false;
                if (this.xForwardedForSlbip != null ? !this.xForwardedForSlbip.equals(that.xForwardedForSlbip) : that.xForwardedForSlbip != null) return false;
                return this.xForwardedForSlbport != null ? this.xForwardedForSlbport.equals(that.xForwardedForSlbport) : that.xForwardedForSlbport == null;
            }

            @Override
            public final int hashCode() {
                int result = this.cookie != null ? this.cookie.hashCode() : 0;
                result = 31 * result + (this.cookieTimeout != null ? this.cookieTimeout.hashCode() : 0);
                result = 31 * result + (this.persistenceTimeout != null ? this.persistenceTimeout.hashCode() : 0);
                result = 31 * result + (this.stickySession != null ? this.stickySession.hashCode() : 0);
                result = 31 * result + (this.stickySessionType != null ? this.stickySessionType.hashCode() : 0);
                result = 31 * result + (this.xForwardedFor != null ? this.xForwardedFor.hashCode() : 0);
                result = 31 * result + (this.xForwardedForClientSrcPort != null ? this.xForwardedForClientSrcPort.hashCode() : 0);
                result = 31 * result + (this.xForwardedForProto != null ? this.xForwardedForProto.hashCode() : 0);
                result = 31 * result + (this.xForwardedForSlbid != null ? this.xForwardedForSlbid.hashCode() : 0);
                result = 31 * result + (this.xForwardedForSlbip != null ? this.xForwardedForSlbip.hashCode() : 0);
                result = 31 * result + (this.xForwardedForSlbport != null ? this.xForwardedForSlbport.hashCode() : 0);
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.slb.$Module.class, fqn = "@alicloud/ros-cdk-slb.RosListener.PortRangeProperty")
    @software.amazon.jsii.Jsii.Proxy(PortRangeProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface PortRangeProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getEndPort();

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @org.jetbrains.annotations.NotNull java.lang.Object getStartPort();

        /**
         * @return a {@link Builder} of {@link PortRangeProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link PortRangeProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<PortRangeProperty> {
            java.lang.Object endPort;
            java.lang.Object startPort;

            /**
             * Sets the value of {@link PortRangeProperty#getEndPort}
             * @param endPort the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder endPort(java.lang.Number endPort) {
                this.endPort = endPort;
                return this;
            }

            /**
             * Sets the value of {@link PortRangeProperty#getEndPort}
             * @param endPort the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder endPort(com.aliyun.ros.cdk.core.IResolvable endPort) {
                this.endPort = endPort;
                return this;
            }

            /**
             * Sets the value of {@link PortRangeProperty#getStartPort}
             * @param startPort the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder startPort(java.lang.Number startPort) {
                this.startPort = startPort;
                return this;
            }

            /**
             * Sets the value of {@link PortRangeProperty#getStartPort}
             * @param startPort the value to be set. This parameter is required.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder startPort(com.aliyun.ros.cdk.core.IResolvable startPort) {
                this.startPort = startPort;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link PortRangeProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public PortRangeProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link PortRangeProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements PortRangeProperty {
            private final java.lang.Object endPort;
            private final java.lang.Object startPort;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.endPort = software.amazon.jsii.Kernel.get(this, "endPort", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.startPort = software.amazon.jsii.Kernel.get(this, "startPort", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.endPort = java.util.Objects.requireNonNull(builder.endPort, "endPort is required");
                this.startPort = java.util.Objects.requireNonNull(builder.startPort, "startPort is required");
            }

            @Override
            public final java.lang.Object getEndPort() {
                return this.endPort;
            }

            @Override
            public final java.lang.Object getStartPort() {
                return this.startPort;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                data.set("endPort", om.valueToTree(this.getEndPort()));
                data.set("startPort", om.valueToTree(this.getStartPort()));

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-slb.RosListener.PortRangeProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                PortRangeProperty.Jsii$Proxy that = (PortRangeProperty.Jsii$Proxy) o;

                if (!endPort.equals(that.endPort)) return false;
                return this.startPort.equals(that.startPort);
            }

            @Override
            public final int hashCode() {
                int result = this.endPort.hashCode();
                result = 31 * result + (this.startPort.hashCode());
                return result;
            }
        }
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.slb.$Module.class, fqn = "@alicloud/ros-cdk-slb.RosListener.TagsProperty")
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
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-slb.RosListener.TagsProperty"));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.slb.RosListener}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.slb.RosListener> {
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
        private final com.aliyun.ros.cdk.slb.RosListenerProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.slb.RosListenerProps.Builder();
        }

        /**
         * @return {@code this}
         * @param bandwidth This parameter is required.
         */
        public Builder bandwidth(final java.lang.Number bandwidth) {
            this.props.bandwidth(bandwidth);
            return this;
        }
        /**
         * @return {@code this}
         * @param bandwidth This parameter is required.
         */
        public Builder bandwidth(final com.aliyun.ros.cdk.core.IResolvable bandwidth) {
            this.props.bandwidth(bandwidth);
            return this;
        }

        /**
         * @return {@code this}
         * @param listenerPort This parameter is required.
         */
        public Builder listenerPort(final java.lang.Number listenerPort) {
            this.props.listenerPort(listenerPort);
            return this;
        }
        /**
         * @return {@code this}
         * @param listenerPort This parameter is required.
         */
        public Builder listenerPort(final com.aliyun.ros.cdk.core.IResolvable listenerPort) {
            this.props.listenerPort(listenerPort);
            return this;
        }

        /**
         * @return {@code this}
         * @param loadBalancerId This parameter is required.
         */
        public Builder loadBalancerId(final java.lang.String loadBalancerId) {
            this.props.loadBalancerId(loadBalancerId);
            return this;
        }
        /**
         * @return {@code this}
         * @param loadBalancerId This parameter is required.
         */
        public Builder loadBalancerId(final com.aliyun.ros.cdk.core.IResolvable loadBalancerId) {
            this.props.loadBalancerId(loadBalancerId);
            return this;
        }

        /**
         * @return {@code this}
         * @param protocol This parameter is required.
         */
        public Builder protocol(final java.lang.String protocol) {
            this.props.protocol(protocol);
            return this;
        }
        /**
         * @return {@code this}
         * @param protocol This parameter is required.
         */
        public Builder protocol(final com.aliyun.ros.cdk.core.IResolvable protocol) {
            this.props.protocol(protocol);
            return this;
        }

        /**
         * @return {@code this}
         * @param aclId This parameter is required.
         */
        public Builder aclId(final java.lang.String aclId) {
            this.props.aclId(aclId);
            return this;
        }
        /**
         * @return {@code this}
         * @param aclId This parameter is required.
         */
        public Builder aclId(final com.aliyun.ros.cdk.core.IResolvable aclId) {
            this.props.aclId(aclId);
            return this;
        }

        /**
         * @return {@code this}
         * @param aclIds This parameter is required.
         */
        public Builder aclIds(final com.aliyun.ros.cdk.core.IResolvable aclIds) {
            this.props.aclIds(aclIds);
            return this;
        }
        /**
         * @return {@code this}
         * @param aclIds This parameter is required.
         */
        public Builder aclIds(final java.util.List<? extends java.lang.Object> aclIds) {
            this.props.aclIds(aclIds);
            return this;
        }

        /**
         * @return {@code this}
         * @param aclStatus This parameter is required.
         */
        public Builder aclStatus(final java.lang.String aclStatus) {
            this.props.aclStatus(aclStatus);
            return this;
        }
        /**
         * @return {@code this}
         * @param aclStatus This parameter is required.
         */
        public Builder aclStatus(final com.aliyun.ros.cdk.core.IResolvable aclStatus) {
            this.props.aclStatus(aclStatus);
            return this;
        }

        /**
         * @return {@code this}
         * @param aclType This parameter is required.
         */
        public Builder aclType(final java.lang.String aclType) {
            this.props.aclType(aclType);
            return this;
        }
        /**
         * @return {@code this}
         * @param aclType This parameter is required.
         */
        public Builder aclType(final com.aliyun.ros.cdk.core.IResolvable aclType) {
            this.props.aclType(aclType);
            return this;
        }

        /**
         * @return {@code this}
         * @param backendServerPort This parameter is required.
         */
        public Builder backendServerPort(final java.lang.Number backendServerPort) {
            this.props.backendServerPort(backendServerPort);
            return this;
        }
        /**
         * @return {@code this}
         * @param backendServerPort This parameter is required.
         */
        public Builder backendServerPort(final com.aliyun.ros.cdk.core.IResolvable backendServerPort) {
            this.props.backendServerPort(backendServerPort);
            return this;
        }

        /**
         * @return {@code this}
         * @param caCertificateId This parameter is required.
         */
        public Builder caCertificateId(final java.lang.String caCertificateId) {
            this.props.caCertificateId(caCertificateId);
            return this;
        }
        /**
         * @return {@code this}
         * @param caCertificateId This parameter is required.
         */
        public Builder caCertificateId(final com.aliyun.ros.cdk.core.IResolvable caCertificateId) {
            this.props.caCertificateId(caCertificateId);
            return this;
        }

        /**
         * @return {@code this}
         * @param connectionDrain This parameter is required.
         */
        public Builder connectionDrain(final java.lang.String connectionDrain) {
            this.props.connectionDrain(connectionDrain);
            return this;
        }
        /**
         * @return {@code this}
         * @param connectionDrain This parameter is required.
         */
        public Builder connectionDrain(final com.aliyun.ros.cdk.core.IResolvable connectionDrain) {
            this.props.connectionDrain(connectionDrain);
            return this;
        }

        /**
         * @return {@code this}
         * @param connectionDrainTimeout This parameter is required.
         */
        public Builder connectionDrainTimeout(final java.lang.Number connectionDrainTimeout) {
            this.props.connectionDrainTimeout(connectionDrainTimeout);
            return this;
        }
        /**
         * @return {@code this}
         * @param connectionDrainTimeout This parameter is required.
         */
        public Builder connectionDrainTimeout(final com.aliyun.ros.cdk.core.IResolvable connectionDrainTimeout) {
            this.props.connectionDrainTimeout(connectionDrainTimeout);
            return this;
        }

        /**
         * @return {@code this}
         * @param description This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props.description(description);
            return this;
        }
        /**
         * @return {@code this}
         * @param description This parameter is required.
         */
        public Builder description(final com.aliyun.ros.cdk.core.IResolvable description) {
            this.props.description(description);
            return this;
        }

        /**
         * @return {@code this}
         * @param enableHttp2 This parameter is required.
         */
        public Builder enableHttp2(final java.lang.String enableHttp2) {
            this.props.enableHttp2(enableHttp2);
            return this;
        }
        /**
         * @return {@code this}
         * @param enableHttp2 This parameter is required.
         */
        public Builder enableHttp2(final com.aliyun.ros.cdk.core.IResolvable enableHttp2) {
            this.props.enableHttp2(enableHttp2);
            return this;
        }

        /**
         * @return {@code this}
         * @param gzip This parameter is required.
         */
        public Builder gzip(final java.lang.String gzip) {
            this.props.gzip(gzip);
            return this;
        }
        /**
         * @return {@code this}
         * @param gzip This parameter is required.
         */
        public Builder gzip(final com.aliyun.ros.cdk.core.IResolvable gzip) {
            this.props.gzip(gzip);
            return this;
        }

        /**
         * @return {@code this}
         * @param healthCheck This parameter is required.
         */
        public Builder healthCheck(final com.aliyun.ros.cdk.core.IResolvable healthCheck) {
            this.props.healthCheck(healthCheck);
            return this;
        }
        /**
         * @return {@code this}
         * @param healthCheck This parameter is required.
         */
        public Builder healthCheck(final com.aliyun.ros.cdk.slb.RosListener.HealthCheckProperty healthCheck) {
            this.props.healthCheck(healthCheck);
            return this;
        }

        /**
         * @return {@code this}
         * @param httpConfig This parameter is required.
         */
        public Builder httpConfig(final com.aliyun.ros.cdk.core.IResolvable httpConfig) {
            this.props.httpConfig(httpConfig);
            return this;
        }
        /**
         * @return {@code this}
         * @param httpConfig This parameter is required.
         */
        public Builder httpConfig(final com.aliyun.ros.cdk.slb.RosListener.HttpConfigProperty httpConfig) {
            this.props.httpConfig(httpConfig);
            return this;
        }

        /**
         * @return {@code this}
         * @param idleTimeout This parameter is required.
         */
        public Builder idleTimeout(final java.lang.Number idleTimeout) {
            this.props.idleTimeout(idleTimeout);
            return this;
        }
        /**
         * @return {@code this}
         * @param idleTimeout This parameter is required.
         */
        public Builder idleTimeout(final com.aliyun.ros.cdk.core.IResolvable idleTimeout) {
            this.props.idleTimeout(idleTimeout);
            return this;
        }

        /**
         * @return {@code this}
         * @param masterSlaveServerGroupId This parameter is required.
         */
        public Builder masterSlaveServerGroupId(final java.lang.String masterSlaveServerGroupId) {
            this.props.masterSlaveServerGroupId(masterSlaveServerGroupId);
            return this;
        }
        /**
         * @return {@code this}
         * @param masterSlaveServerGroupId This parameter is required.
         */
        public Builder masterSlaveServerGroupId(final com.aliyun.ros.cdk.core.IResolvable masterSlaveServerGroupId) {
            this.props.masterSlaveServerGroupId(masterSlaveServerGroupId);
            return this;
        }

        /**
         * @return {@code this}
         * @param persistence This parameter is required.
         */
        public Builder persistence(final com.aliyun.ros.cdk.core.IResolvable persistence) {
            this.props.persistence(persistence);
            return this;
        }
        /**
         * @return {@code this}
         * @param persistence This parameter is required.
         */
        public Builder persistence(final com.aliyun.ros.cdk.slb.RosListener.PersistenceProperty persistence) {
            this.props.persistence(persistence);
            return this;
        }

        /**
         * @return {@code this}
         * @param portRange This parameter is required.
         */
        public Builder portRange(final com.aliyun.ros.cdk.core.IResolvable portRange) {
            this.props.portRange(portRange);
            return this;
        }
        /**
         * @return {@code this}
         * @param portRange This parameter is required.
         */
        public Builder portRange(final java.util.List<? extends java.lang.Object> portRange) {
            this.props.portRange(portRange);
            return this;
        }

        /**
         * @return {@code this}
         * @param proxyProtocolV2Enabled This parameter is required.
         */
        public Builder proxyProtocolV2Enabled(final java.lang.Boolean proxyProtocolV2Enabled) {
            this.props.proxyProtocolV2Enabled(proxyProtocolV2Enabled);
            return this;
        }
        /**
         * @return {@code this}
         * @param proxyProtocolV2Enabled This parameter is required.
         */
        public Builder proxyProtocolV2Enabled(final com.aliyun.ros.cdk.core.IResolvable proxyProtocolV2Enabled) {
            this.props.proxyProtocolV2Enabled(proxyProtocolV2Enabled);
            return this;
        }

        /**
         * @return {@code this}
         * @param requestTimeout This parameter is required.
         */
        public Builder requestTimeout(final java.lang.Number requestTimeout) {
            this.props.requestTimeout(requestTimeout);
            return this;
        }
        /**
         * @return {@code this}
         * @param requestTimeout This parameter is required.
         */
        public Builder requestTimeout(final com.aliyun.ros.cdk.core.IResolvable requestTimeout) {
            this.props.requestTimeout(requestTimeout);
            return this;
        }

        /**
         * @return {@code this}
         * @param scheduler This parameter is required.
         */
        public Builder scheduler(final java.lang.String scheduler) {
            this.props.scheduler(scheduler);
            return this;
        }
        /**
         * @return {@code this}
         * @param scheduler This parameter is required.
         */
        public Builder scheduler(final com.aliyun.ros.cdk.core.IResolvable scheduler) {
            this.props.scheduler(scheduler);
            return this;
        }

        /**
         * @return {@code this}
         * @param serverCertificateId This parameter is required.
         */
        public Builder serverCertificateId(final java.lang.String serverCertificateId) {
            this.props.serverCertificateId(serverCertificateId);
            return this;
        }
        /**
         * @return {@code this}
         * @param serverCertificateId This parameter is required.
         */
        public Builder serverCertificateId(final com.aliyun.ros.cdk.core.IResolvable serverCertificateId) {
            this.props.serverCertificateId(serverCertificateId);
            return this;
        }

        /**
         * @return {@code this}
         * @param startListener This parameter is required.
         */
        public Builder startListener(final java.lang.Boolean startListener) {
            this.props.startListener(startListener);
            return this;
        }
        /**
         * @return {@code this}
         * @param startListener This parameter is required.
         */
        public Builder startListener(final com.aliyun.ros.cdk.core.IResolvable startListener) {
            this.props.startListener(startListener);
            return this;
        }

        /**
         * @return {@code this}
         * @param tags This parameter is required.
         */
        public Builder tags(final java.util.List<? extends com.aliyun.ros.cdk.slb.RosListener.TagsProperty> tags) {
            this.props.tags(tags);
            return this;
        }

        /**
         * @return {@code this}
         * @param tlsCipherPolicy This parameter is required.
         */
        public Builder tlsCipherPolicy(final java.lang.String tlsCipherPolicy) {
            this.props.tlsCipherPolicy(tlsCipherPolicy);
            return this;
        }
        /**
         * @return {@code this}
         * @param tlsCipherPolicy This parameter is required.
         */
        public Builder tlsCipherPolicy(final com.aliyun.ros.cdk.core.IResolvable tlsCipherPolicy) {
            this.props.tlsCipherPolicy(tlsCipherPolicy);
            return this;
        }

        /**
         * @return {@code this}
         * @param vServerGroupId This parameter is required.
         */
        public Builder vServerGroupId(final java.lang.String vServerGroupId) {
            this.props.vServerGroupId(vServerGroupId);
            return this;
        }
        /**
         * @return {@code this}
         * @param vServerGroupId This parameter is required.
         */
        public Builder vServerGroupId(final com.aliyun.ros.cdk.core.IResolvable vServerGroupId) {
            this.props.vServerGroupId(vServerGroupId);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.slb.RosListener}.
         */
        @Override
        public com.aliyun.ros.cdk.slb.RosListener build() {
            return new com.aliyun.ros.cdk.slb.RosListener(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
