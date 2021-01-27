package com.aliyun.ros.cdk.waf;

/**
 * A ROS resource type:  `ALIYUN::WAF::Domain`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.17.1 (build 2bac5fd)", date = "2021-01-26T09:47:34.720Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.waf.$Module.class, fqn = "@alicloud/ros-cdk-waf.Domain")
public class Domain extends com.aliyun.ros.cdk.core.Resource {

    protected Domain(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Domain(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new `ALIYUN::WAF::Domain`.
     * <p>
     * @param scope - scope in which this resource is defined. This parameter is required.
     * @param id - scoped id of the resource. This parameter is required.
     * @param props - resource properties. This parameter is required.
     * @param enableResourcePropertyConstraint
     */
    public Domain(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.waf.DomainProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new `ALIYUN::WAF::Domain`.
     * <p>
     * @param scope - scope in which this resource is defined. This parameter is required.
     * @param id - scoped id of the resource. This parameter is required.
     * @param props - resource properties. This parameter is required.
     */
    public Domain(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.waf.DomainProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrClusterType() {
        return software.amazon.jsii.Kernel.get(this, "attrClusterType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrCname() {
        return software.amazon.jsii.Kernel.get(this, "attrCname", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDomainName() {
        return software.amazon.jsii.Kernel.get(this, "attrDomainName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrHttp2Port() {
        return software.amazon.jsii.Kernel.get(this, "attrHttp2Port", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrHttpPort() {
        return software.amazon.jsii.Kernel.get(this, "attrHttpPort", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrHttpsPort() {
        return software.amazon.jsii.Kernel.get(this, "attrHttpsPort", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrHttpsRedirect() {
        return software.amazon.jsii.Kernel.get(this, "attrHttpsRedirect", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrHttpToUserIp() {
        return software.amazon.jsii.Kernel.get(this, "attrHttpToUserIp", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceId() {
        return software.amazon.jsii.Kernel.get(this, "attrInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrIsAccessProduct() {
        return software.amazon.jsii.Kernel.get(this, "attrIsAccessProduct", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrLoadBalancing() {
        return software.amazon.jsii.Kernel.get(this, "attrLoadBalancing", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrLogHeaders() {
        return software.amazon.jsii.Kernel.get(this, "attrLogHeaders", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceGroupId() {
        return software.amazon.jsii.Kernel.get(this, "attrResourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrSourceIps() {
        return software.amazon.jsii.Kernel.get(this, "attrSourceIps", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrVersion() {
        return software.amazon.jsii.Kernel.get(this, "attrVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.waf.Domain}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.waf.Domain> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope - scope in which this resource is defined. This parameter is required.
         * @param id - scoped id of the resource. This parameter is required.
         * @param enableResourcePropertyConstraint
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }
        /**
         * @return a new instance of {@link Builder}.
         * @param scope - scope in which this resource is defined. This parameter is required.
         * @param id - scoped id of the resource. This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id) {
            return new Builder(scope, id, null);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final java.lang.Boolean enableResourcePropertyConstraint;
        private final com.aliyun.ros.cdk.waf.DomainProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.waf.DomainProps.Builder();
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
         * @param instanceId This parameter is required.
         */
        public Builder instanceId(final java.lang.String instanceId) {
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
         * @param sourceIps This parameter is required.
         */
        public Builder sourceIps(final java.util.List<java.lang.String> sourceIps) {
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
         * @param connectionTime This parameter is required.
         */
        public Builder connectionTime(final java.lang.Number connectionTime) {
            this.props.connectionTime(connectionTime);
            return this;
        }

        /**
         * @return {@code this}
         * @param http2Port This parameter is required.
         */
        public Builder http2Port(final java.util.List<java.lang.String> http2Port) {
            this.props.http2Port(http2Port);
            return this;
        }

        /**
         * @return {@code this}
         * @param httpPort This parameter is required.
         */
        public Builder httpPort(final java.util.List<java.lang.String> httpPort) {
            this.props.httpPort(httpPort);
            return this;
        }

        /**
         * @return {@code this}
         * @param httpsPort This parameter is required.
         */
        public Builder httpsPort(final java.util.List<java.lang.String> httpsPort) {
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
         * @param httpToUserIp This parameter is required.
         */
        public Builder httpToUserIp(final java.lang.String httpToUserIp) {
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
         * @param resourceGroupId This parameter is required.
         */
        public Builder resourceGroupId(final java.lang.String resourceGroupId) {
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
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.waf.Domain}.
         */
        @Override
        public com.aliyun.ros.cdk.waf.Domain build() {
            return new com.aliyun.ros.cdk.waf.Domain(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
