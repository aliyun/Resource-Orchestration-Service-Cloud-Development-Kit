package com.aliyun.ros.cdk.waf;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::WAF::DomainConfig</code>ALIYUN::CDN::DomainConfig is used to add domain name settings.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-24T05:57:09.989Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.waf.$Module.class, fqn = "@alicloud/ros-cdk-waf.RosDomainConfig")
public class RosDomainConfig extends com.aliyun.ros.cdk.core.RosResource {

    protected RosDomainConfig(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosDomainConfig(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.waf.RosDomainConfig.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosDomainConfig(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.waf.RosDomainConfigProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrCname() {
        return software.amazon.jsii.Kernel.get(this, "attrCname", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrProtocolType() {
        return software.amazon.jsii.Kernel.get(this, "attrProtocolType", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getDomain() {
        return software.amazon.jsii.Kernel.get(this, "domain", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDomain(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "domain", java.util.Objects.requireNonNull(value, "domain is required"));
    }

    /**
     */
    public void setDomain(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "domain", java.util.Objects.requireNonNull(value, "domain is required"));
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
    public void setIsAccessProduct(final @org.jetbrains.annotations.NotNull java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "isAccessProduct", java.util.Objects.requireNonNull(value, "isAccessProduct is required"));
    }

    /**
     */
    public void setIsAccessProduct(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "isAccessProduct", java.util.Objects.requireNonNull(value, "isAccessProduct is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getProtocols() {
        return software.amazon.jsii.Kernel.get(this, "protocols", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setProtocols(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "protocols", java.util.Objects.requireNonNull(value, "protocols is required"));
    }

    /**
     */
    public void setProtocols(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "protocols", java.util.Objects.requireNonNull(value, "protocols is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getHttpPort() {
        return software.amazon.jsii.Kernel.get(this, "httpPort", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setHttpPort(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "httpPort", value);
    }

    /**
     */
    public void setHttpPort(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "httpPort", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getHttpsPort() {
        return software.amazon.jsii.Kernel.get(this, "httpsPort", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setHttpsPort(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "httpsPort", value);
    }

    /**
     */
    public void setHttpsPort(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "httpsPort", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getHttpsRedirect() {
        return software.amazon.jsii.Kernel.get(this, "httpsRedirect", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setHttpsRedirect(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
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
    public void setHttpToUserIp(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
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
    public void setLoadBalancing(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "loadBalancing", value);
    }

    /**
     */
    public void setLoadBalancing(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "loadBalancing", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getRegion() {
        return software.amazon.jsii.Kernel.get(this, "region", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setRegion(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "region", value);
    }

    /**
     */
    public void setRegion(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "region", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getRsType() {
        return software.amazon.jsii.Kernel.get(this, "rsType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setRsType(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "rsType", value);
    }

    /**
     */
    public void setRsType(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "rsType", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getSourceIps() {
        return software.amazon.jsii.Kernel.get(this, "sourceIps", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSourceIps(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "sourceIps", value);
    }

    /**
     */
    public void setSourceIps(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "sourceIps", value);
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.waf.RosDomainConfig}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.waf.RosDomainConfig> {
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
        private final com.aliyun.ros.cdk.waf.RosDomainConfigProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.waf.RosDomainConfigProps.Builder();
        }

        /**
         * @return {@code this}
         * @param domain This parameter is required.
         */
        public Builder domain(final java.lang.String domain) {
            this.props.domain(domain);
            return this;
        }
        /**
         * @return {@code this}
         * @param domain This parameter is required.
         */
        public Builder domain(final com.aliyun.ros.cdk.core.IResolvable domain) {
            this.props.domain(domain);
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
        public Builder isAccessProduct(final java.lang.Number isAccessProduct) {
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
         * @param protocols This parameter is required.
         */
        public Builder protocols(final java.lang.String protocols) {
            this.props.protocols(protocols);
            return this;
        }
        /**
         * @return {@code this}
         * @param protocols This parameter is required.
         */
        public Builder protocols(final com.aliyun.ros.cdk.core.IResolvable protocols) {
            this.props.protocols(protocols);
            return this;
        }

        /**
         * @return {@code this}
         * @param httpPort This parameter is required.
         */
        public Builder httpPort(final java.lang.String httpPort) {
            this.props.httpPort(httpPort);
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
         * @param httpsPort This parameter is required.
         */
        public Builder httpsPort(final java.lang.String httpsPort) {
            this.props.httpsPort(httpsPort);
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
         * @param httpsRedirect This parameter is required.
         */
        public Builder httpsRedirect(final java.lang.Number httpsRedirect) {
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
        public Builder httpToUserIp(final java.lang.Number httpToUserIp) {
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
        public Builder loadBalancing(final java.lang.Number loadBalancing) {
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
         * @param region This parameter is required.
         */
        public Builder region(final java.lang.String region) {
            this.props.region(region);
            return this;
        }
        /**
         * @return {@code this}
         * @param region This parameter is required.
         */
        public Builder region(final com.aliyun.ros.cdk.core.IResolvable region) {
            this.props.region(region);
            return this;
        }

        /**
         * @return {@code this}
         * @param rsType This parameter is required.
         */
        public Builder rsType(final java.lang.Number rsType) {
            this.props.rsType(rsType);
            return this;
        }
        /**
         * @return {@code this}
         * @param rsType This parameter is required.
         */
        public Builder rsType(final com.aliyun.ros.cdk.core.IResolvable rsType) {
            this.props.rsType(rsType);
            return this;
        }

        /**
         * @return {@code this}
         * @param sourceIps This parameter is required.
         */
        public Builder sourceIps(final java.lang.String sourceIps) {
            this.props.sourceIps(sourceIps);
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
         * @return a newly built instance of {@link com.aliyun.ros.cdk.waf.RosDomainConfig}.
         */
        @Override
        public com.aliyun.ros.cdk.waf.RosDomainConfig build() {
            return new com.aliyun.ros.cdk.waf.RosDomainConfig(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
