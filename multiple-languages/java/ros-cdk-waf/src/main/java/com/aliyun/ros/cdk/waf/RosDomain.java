package com.aliyun.ros.cdk.waf;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::WAF::Domain</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-03-01T09:16:55.243Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.waf.$Module.class, fqn = "@alicloud/ros-cdk-waf.RosDomain")
public class RosDomain extends com.aliyun.ros.cdk.core.RosResource {

    protected RosDomain(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosDomain(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.waf.RosDomain.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosDomain(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.waf.RosDomainProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrClusterType() {
        return software.amazon.jsii.Kernel.get(this, "attrClusterType", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrCname() {
        return software.amazon.jsii.Kernel.get(this, "attrCname", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDomainName() {
        return software.amazon.jsii.Kernel.get(this, "attrDomainName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrHttp2Port() {
        return software.amazon.jsii.Kernel.get(this, "attrHttp2Port", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrHttpPort() {
        return software.amazon.jsii.Kernel.get(this, "attrHttpPort", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrHttpsPort() {
        return software.amazon.jsii.Kernel.get(this, "attrHttpsPort", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrHttpsRedirect() {
        return software.amazon.jsii.Kernel.get(this, "attrHttpsRedirect", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrHttpToUserIp() {
        return software.amazon.jsii.Kernel.get(this, "attrHttpToUserIp", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrInstanceId() {
        return software.amazon.jsii.Kernel.get(this, "attrInstanceId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrIsAccessProduct() {
        return software.amazon.jsii.Kernel.get(this, "attrIsAccessProduct", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrLoadBalancing() {
        return software.amazon.jsii.Kernel.get(this, "attrLoadBalancing", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrLogHeaders() {
        return software.amazon.jsii.Kernel.get(this, "attrLogHeaders", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrResourceGroupId() {
        return software.amazon.jsii.Kernel.get(this, "attrResourceGroupId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrSourceIps() {
        return software.amazon.jsii.Kernel.get(this, "attrSourceIps", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrVersion() {
        return software.amazon.jsii.Kernel.get(this, "attrVersion", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getDomainName() {
        return software.amazon.jsii.Kernel.get(this, "domainName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDomainName(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "domainName", java.util.Objects.requireNonNull(value, "domainName is required"));
    }

    /**
     */
    public void setDomainName(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "domainName", java.util.Objects.requireNonNull(value, "domainName is required"));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getInstanceId() {
        return software.amazon.jsii.Kernel.get(this, "instanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setInstanceId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "instanceId", java.util.Objects.requireNonNull(value, "instanceId is required"));
    }

    /**
     */
    public void setInstanceId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "instanceId", java.util.Objects.requireNonNull(value, "instanceId is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getIsAccessProduct() {
        return software.amazon.jsii.Kernel.get(this, "isAccessProduct", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setIsAccessProduct(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "isAccessProduct", java.util.Objects.requireNonNull(value, "isAccessProduct is required"));
    }

    /**
     */
    public void setIsAccessProduct(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "isAccessProduct", java.util.Objects.requireNonNull(value, "isAccessProduct is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getSourceIps() {
        return software.amazon.jsii.Kernel.get(this, "sourceIps", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSourceIps(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "sourceIps", java.util.Objects.requireNonNull(value, "sourceIps is required"));
    }

    /**
     */
    public void setSourceIps(final @org.jetbrains.annotations.NotNull java.util.List<java.lang.Object> value) {
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
        software.amazon.jsii.Kernel.set(this, "sourceIps", java.util.Objects.requireNonNull(value, "sourceIps is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getClusterType() {
        return software.amazon.jsii.Kernel.get(this, "clusterType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setClusterType(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "clusterType", value);
    }

    /**
     */
    public void setClusterType(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "clusterType", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getConnectionTime() {
        return software.amazon.jsii.Kernel.get(this, "connectionTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setConnectionTime(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "connectionTime", value);
    }

    /**
     */
    public void setConnectionTime(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "connectionTime", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getHttp2Port() {
        return software.amazon.jsii.Kernel.get(this, "http2Port", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setHttp2Port(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "http2Port", value);
    }

    /**
     */
    public void setHttp2Port(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
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
        software.amazon.jsii.Kernel.set(this, "http2Port", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getHttpPort() {
        return software.amazon.jsii.Kernel.get(this, "httpPort", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setHttpPort(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "httpPort", value);
    }

    /**
     */
    public void setHttpPort(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
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
        software.amazon.jsii.Kernel.set(this, "httpPort", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getHttpsPort() {
        return software.amazon.jsii.Kernel.get(this, "httpsPort", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setHttpsPort(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "httpsPort", value);
    }

    /**
     */
    public void setHttpsPort(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
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
        software.amazon.jsii.Kernel.set(this, "httpsPort", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getHttpsRedirect() {
        return software.amazon.jsii.Kernel.get(this, "httpsRedirect", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setHttpsRedirect(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "httpsRedirect", value);
    }

    /**
     */
    public void setHttpsRedirect(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "httpsRedirect", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getHttpToUserIp() {
        return software.amazon.jsii.Kernel.get(this, "httpToUserIp", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setHttpToUserIp(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "httpToUserIp", value);
    }

    /**
     */
    public void setHttpToUserIp(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "httpToUserIp", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getLoadBalancing() {
        return software.amazon.jsii.Kernel.get(this, "loadBalancing", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setLoadBalancing(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "loadBalancing", value);
    }

    /**
     */
    public void setLoadBalancing(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "loadBalancing", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getLogHeaders() {
        return software.amazon.jsii.Kernel.get(this, "logHeaders", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setLogHeaders(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "logHeaders", value);
    }

    /**
     */
    public void setLogHeaders(final @org.jetbrains.annotations.Nullable java.util.List<java.lang.Object> value) {
        if (software.amazon.jsii.Configuration.getRuntimeTypeChecking()) {
            for (int __idx_ac66f0 = 0; __idx_ac66f0 < value.size(); __idx_ac66f0++) {
                final java.lang.Object __val_ac66f0 = value.get(__idx_ac66f0);
                if (
                     !(__val_ac66f0 instanceof com.aliyun.ros.cdk.core.IResolvable)
                    && !(__val_ac66f0 instanceof com.aliyun.ros.cdk.waf.RosDomain.LogHeadersProperty)
                    && !(__val_ac66f0.getClass().equals(software.amazon.jsii.JsiiObject.class))
                ) {
                    throw new IllegalArgumentException(
                        new java.lang.StringBuilder("Expected ")
                            .append("value").append(".get(").append(__idx_ac66f0).append(")")
                            .append(" to be one of: com.aliyun.ros.cdk.core.IResolvable, com.aliyun.ros.cdk.waf.RosDomain.LogHeadersProperty; received ")
                            .append(__val_ac66f0.getClass()).toString());
                }
            }
        }
        software.amazon.jsii.Kernel.set(this, "logHeaders", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getReadTime() {
        return software.amazon.jsii.Kernel.get(this, "readTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setReadTime(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "readTime", value);
    }

    /**
     */
    public void setReadTime(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "readTime", value);
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
    public @org.jetbrains.annotations.Nullable java.lang.Object getWriteTime() {
        return software.amazon.jsii.Kernel.get(this, "writeTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setWriteTime(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "writeTime", value);
    }

    /**
     */
    public void setWriteTime(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "writeTime", value);
    }
    /**
     */
    @software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.waf.$Module.class, fqn = "@alicloud/ros-cdk-waf.RosDomain.LogHeadersProperty")
    @software.amazon.jsii.Jsii.Proxy(LogHeadersProperty.Jsii$Proxy.class)
    @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
    public static interface LogHeadersProperty extends software.amazon.jsii.JsiiSerializable {

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getK() {
            return null;
        }

        /**
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        default @org.jetbrains.annotations.Nullable java.lang.Object getV() {
            return null;
        }

        /**
         * @return a {@link Builder} of {@link LogHeadersProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        static Builder builder() {
            return new Builder();
        }
        /**
         * A builder for {@link LogHeadersProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        public static final class Builder implements software.amazon.jsii.Builder<LogHeadersProperty> {
            java.lang.Object k;
            java.lang.Object v;

            /**
             * Sets the value of {@link LogHeadersProperty#getK}
             * @param k the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder k(java.lang.String k) {
                this.k = k;
                return this;
            }

            /**
             * Sets the value of {@link LogHeadersProperty#getK}
             * @param k the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder k(com.aliyun.ros.cdk.core.IResolvable k) {
                this.k = k;
                return this;
            }

            /**
             * Sets the value of {@link LogHeadersProperty#getV}
             * @param v the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder v(java.lang.String v) {
                this.v = v;
                return this;
            }

            /**
             * Sets the value of {@link LogHeadersProperty#getV}
             * @param v the value to be set.
             * @return {@code this}
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            public Builder v(com.aliyun.ros.cdk.core.IResolvable v) {
                this.v = v;
                return this;
            }

            /**
             * Builds the configured instance.
             * @return a new instance of {@link LogHeadersProperty}
             * @throws NullPointerException if any required attribute was not provided
             */
            @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
            @Override
            public LogHeadersProperty build() {
                return new Jsii$Proxy(this);
            }
        }

        /**
         * An implementation for {@link LogHeadersProperty}
         */
        @software.amazon.jsii.Stability(software.amazon.jsii.Stability.Level.Stable)
        @software.amazon.jsii.Internal
        final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements LogHeadersProperty {
            private final java.lang.Object k;
            private final java.lang.Object v;

            /**
             * Constructor that initializes the object based on values retrieved from the JsiiObject.
             * @param objRef Reference to the JSII managed object.
             */
            protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
                super(objRef);
                this.k = software.amazon.jsii.Kernel.get(this, "k", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
                this.v = software.amazon.jsii.Kernel.get(this, "v", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            }

            /**
             * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
             */
            protected Jsii$Proxy(final Builder builder) {
                super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
                this.k = builder.k;
                this.v = builder.v;
            }

            @Override
            public final java.lang.Object getK() {
                return this.k;
            }

            @Override
            public final java.lang.Object getV() {
                return this.v;
            }

            @Override
            @software.amazon.jsii.Internal
            public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
                final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
                final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

                if (this.getK() != null) {
                    data.set("k", om.valueToTree(this.getK()));
                }
                if (this.getV() != null) {
                    data.set("v", om.valueToTree(this.getV()));
                }

                final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-waf.RosDomain.LogHeadersProperty"));
                struct.set("data", data);

                final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
                obj.set("$jsii.struct", struct);

                return obj;
            }

            @Override
            public final boolean equals(final Object o) {
                if (this == o) return true;
                if (o == null || getClass() != o.getClass()) return false;

                LogHeadersProperty.Jsii$Proxy that = (LogHeadersProperty.Jsii$Proxy) o;

                if (this.k != null ? !this.k.equals(that.k) : that.k != null) return false;
                return this.v != null ? this.v.equals(that.v) : that.v == null;
            }

            @Override
            public final int hashCode() {
                int result = this.k != null ? this.k.hashCode() : 0;
                result = 31 * result + (this.v != null ? this.v.hashCode() : 0);
                return result;
            }
        }
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.waf.RosDomain}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.waf.RosDomain> {
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
        private final com.aliyun.ros.cdk.waf.RosDomainProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.waf.RosDomainProps.Builder();
        }

        /**
         * @return {@code this}
         * @param domainName This parameter is required.
         */
        public Builder domainName(final java.lang.String domainName) {
            this.props.domainName(domainName);
            return this;
        }
        /**
         * @return {@code this}
         * @param domainName This parameter is required.
         */
        public Builder domainName(final com.aliyun.ros.cdk.core.IResolvable domainName) {
            this.props.domainName(domainName);
            return this;
        }

        /**
         * @return {@code this}
         * @param instanceId This parameter is required.
         */
        public Builder instanceId(final java.lang.String instanceId) {
            this.props.instanceId(instanceId);
            return this;
        }
        /**
         * @return {@code this}
         * @param instanceId This parameter is required.
         */
        public Builder instanceId(final com.aliyun.ros.cdk.core.IResolvable instanceId) {
            this.props.instanceId(instanceId);
            return this;
        }

        /**
         * @return {@code this}
         * @param isAccessProduct This parameter is required.
         */
        public Builder isAccessProduct(final java.lang.String isAccessProduct) {
            this.props.isAccessProduct(isAccessProduct);
            return this;
        }
        /**
         * @return {@code this}
         * @param isAccessProduct This parameter is required.
         */
        public Builder isAccessProduct(final com.aliyun.ros.cdk.core.IResolvable isAccessProduct) {
            this.props.isAccessProduct(isAccessProduct);
            return this;
        }

        /**
         * @return {@code this}
         * @param sourceIps This parameter is required.
         */
        public Builder sourceIps(final com.aliyun.ros.cdk.core.IResolvable sourceIps) {
            this.props.sourceIps(sourceIps);
            return this;
        }
        /**
         * @return {@code this}
         * @param sourceIps This parameter is required.
         */
        public Builder sourceIps(final java.util.List<? extends java.lang.Object> sourceIps) {
            this.props.sourceIps(sourceIps);
            return this;
        }

        /**
         * @return {@code this}
         * @param clusterType This parameter is required.
         */
        public Builder clusterType(final java.lang.String clusterType) {
            this.props.clusterType(clusterType);
            return this;
        }
        /**
         * @return {@code this}
         * @param clusterType This parameter is required.
         */
        public Builder clusterType(final com.aliyun.ros.cdk.core.IResolvable clusterType) {
            this.props.clusterType(clusterType);
            return this;
        }

        /**
         * @return {@code this}
         * @param connectionTime This parameter is required.
         */
        public Builder connectionTime(final java.lang.Number connectionTime) {
            this.props.connectionTime(connectionTime);
            return this;
        }
        /**
         * @return {@code this}
         * @param connectionTime This parameter is required.
         */
        public Builder connectionTime(final com.aliyun.ros.cdk.core.IResolvable connectionTime) {
            this.props.connectionTime(connectionTime);
            return this;
        }

        /**
         * @return {@code this}
         * @param http2Port This parameter is required.
         */
        public Builder http2Port(final com.aliyun.ros.cdk.core.IResolvable http2Port) {
            this.props.http2Port(http2Port);
            return this;
        }
        /**
         * @return {@code this}
         * @param http2Port This parameter is required.
         */
        public Builder http2Port(final java.util.List<? extends java.lang.Object> http2Port) {
            this.props.http2Port(http2Port);
            return this;
        }

        /**
         * @return {@code this}
         * @param httpPort This parameter is required.
         */
        public Builder httpPort(final com.aliyun.ros.cdk.core.IResolvable httpPort) {
            this.props.httpPort(httpPort);
            return this;
        }
        /**
         * @return {@code this}
         * @param httpPort This parameter is required.
         */
        public Builder httpPort(final java.util.List<? extends java.lang.Object> httpPort) {
            this.props.httpPort(httpPort);
            return this;
        }

        /**
         * @return {@code this}
         * @param httpsPort This parameter is required.
         */
        public Builder httpsPort(final com.aliyun.ros.cdk.core.IResolvable httpsPort) {
            this.props.httpsPort(httpsPort);
            return this;
        }
        /**
         * @return {@code this}
         * @param httpsPort This parameter is required.
         */
        public Builder httpsPort(final java.util.List<? extends java.lang.Object> httpsPort) {
            this.props.httpsPort(httpsPort);
            return this;
        }

        /**
         * @return {@code this}
         * @param httpsRedirect This parameter is required.
         */
        public Builder httpsRedirect(final java.lang.String httpsRedirect) {
            this.props.httpsRedirect(httpsRedirect);
            return this;
        }
        /**
         * @return {@code this}
         * @param httpsRedirect This parameter is required.
         */
        public Builder httpsRedirect(final com.aliyun.ros.cdk.core.IResolvable httpsRedirect) {
            this.props.httpsRedirect(httpsRedirect);
            return this;
        }

        /**
         * @return {@code this}
         * @param httpToUserIp This parameter is required.
         */
        public Builder httpToUserIp(final java.lang.String httpToUserIp) {
            this.props.httpToUserIp(httpToUserIp);
            return this;
        }
        /**
         * @return {@code this}
         * @param httpToUserIp This parameter is required.
         */
        public Builder httpToUserIp(final com.aliyun.ros.cdk.core.IResolvable httpToUserIp) {
            this.props.httpToUserIp(httpToUserIp);
            return this;
        }

        /**
         * @return {@code this}
         * @param loadBalancing This parameter is required.
         */
        public Builder loadBalancing(final java.lang.String loadBalancing) {
            this.props.loadBalancing(loadBalancing);
            return this;
        }
        /**
         * @return {@code this}
         * @param loadBalancing This parameter is required.
         */
        public Builder loadBalancing(final com.aliyun.ros.cdk.core.IResolvable loadBalancing) {
            this.props.loadBalancing(loadBalancing);
            return this;
        }

        /**
         * @return {@code this}
         * @param logHeaders This parameter is required.
         */
        public Builder logHeaders(final com.aliyun.ros.cdk.core.IResolvable logHeaders) {
            this.props.logHeaders(logHeaders);
            return this;
        }
        /**
         * @return {@code this}
         * @param logHeaders This parameter is required.
         */
        public Builder logHeaders(final java.util.List<? extends java.lang.Object> logHeaders) {
            this.props.logHeaders(logHeaders);
            return this;
        }

        /**
         * @return {@code this}
         * @param readTime This parameter is required.
         */
        public Builder readTime(final java.lang.Number readTime) {
            this.props.readTime(readTime);
            return this;
        }
        /**
         * @return {@code this}
         * @param readTime This parameter is required.
         */
        public Builder readTime(final com.aliyun.ros.cdk.core.IResolvable readTime) {
            this.props.readTime(readTime);
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
         * @param writeTime This parameter is required.
         */
        public Builder writeTime(final java.lang.Number writeTime) {
            this.props.writeTime(writeTime);
            return this;
        }
        /**
         * @return {@code this}
         * @param writeTime This parameter is required.
         */
        public Builder writeTime(final com.aliyun.ros.cdk.core.IResolvable writeTime) {
            this.props.writeTime(writeTime);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.waf.RosDomain}.
         */
        @Override
        public com.aliyun.ros.cdk.waf.RosDomain build() {
            return new com.aliyun.ros.cdk.waf.RosDomain(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
