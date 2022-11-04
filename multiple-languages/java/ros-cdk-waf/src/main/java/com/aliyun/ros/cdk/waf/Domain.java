package com.aliyun.ros.cdk.waf;

/**
 * A ROS resource type:  `ALIYUN::WAF::Domain`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.70.0 (build 03c2f6f)", date = "2022-11-04T06:18:44.265Z")
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
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     * @param enableResourcePropertyConstraint
     */
    public Domain(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.waf.DomainProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new `ALIYUN::WAF::Domain`.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public Domain(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.waf.DomainProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute ClusterType: Cluster type.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrClusterType() {
        return software.amazon.jsii.Kernel.get(this, "attrClusterType", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute Cname: CNAME assigned by WAF instance.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrCname() {
        return software.amazon.jsii.Kernel.get(this, "attrCname", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute DomainName: Domain name.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDomainName() {
        return software.amazon.jsii.Kernel.get(this, "attrDomainName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute Http2Port: Http2 port configuration.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrHttp2Port() {
        return software.amazon.jsii.Kernel.get(this, "attrHttp2Port", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute HttpPort: Http port configuration.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrHttpPort() {
        return software.amazon.jsii.Kernel.get(this, "attrHttpPort", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute HttpsPort: Https port configuration.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrHttpsPort() {
        return software.amazon.jsii.Kernel.get(this, "attrHttpsPort", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute HttpsRedirect: Https forced redirect configuration.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrHttpsRedirect() {
        return software.amazon.jsii.Kernel.get(this, "attrHttpsRedirect", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute HttpToUserIp: Http back to source.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrHttpToUserIp() {
        return software.amazon.jsii.Kernel.get(this, "attrHttpToUserIp", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute InstanceId: Instance id.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrInstanceId() {
        return software.amazon.jsii.Kernel.get(this, "attrInstanceId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute IsAccessProduct: Is there a seven-layer agency before WAF.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrIsAccessProduct() {
        return software.amazon.jsii.Kernel.get(this, "attrIsAccessProduct", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute LoadBalancing: Load balancing configuration.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrLoadBalancing() {
        return software.amazon.jsii.Kernel.get(this, "attrLoadBalancing", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute LogHeaders: Domain traffic tagging.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrLogHeaders() {
        return software.amazon.jsii.Kernel.get(this, "attrLogHeaders", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute ResourceGroupId: Resource group Id.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrResourceGroupId() {
        return software.amazon.jsii.Kernel.get(this, "attrResourceGroupId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute SourceIps: Back to source IP configuration.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrSourceIps() {
        return software.amazon.jsii.Kernel.get(this, "attrSourceIps", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute Version: Optimistic lock version.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrVersion() {
        return software.amazon.jsii.Kernel.get(this, "attrVersion", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.waf.Domain}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.waf.Domain> {
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
        private final com.aliyun.ros.cdk.waf.DomainProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.waf.DomainProps.Builder();
        }

        /**
         * Property domainName: Domain name.
         * <p>
         * @return {@code this}
         * @param domainName Property domainName: Domain name. This parameter is required.
         */
        public Builder domainName(final java.lang.String domainName) {
            this.props.domainName(domainName);
            return this;
        }
        /**
         * Property domainName: Domain name.
         * <p>
         * @return {@code this}
         * @param domainName Property domainName: Domain name. This parameter is required.
         */
        public Builder domainName(final com.aliyun.ros.cdk.core.IResolvable domainName) {
            this.props.domainName(domainName);
            return this;
        }

        /**
         * Property instanceId: Instance id.
         * <p>
         * @return {@code this}
         * @param instanceId Property instanceId: Instance id. This parameter is required.
         */
        public Builder instanceId(final java.lang.String instanceId) {
            this.props.instanceId(instanceId);
            return this;
        }
        /**
         * Property instanceId: Instance id.
         * <p>
         * @return {@code this}
         * @param instanceId Property instanceId: Instance id. This parameter is required.
         */
        public Builder instanceId(final com.aliyun.ros.cdk.core.IResolvable instanceId) {
            this.props.instanceId(instanceId);
            return this;
        }

        /**
         * Property isAccessProduct: Is there a seven-layer agency before WAF.
         * <p>
         * @return {@code this}
         * @param isAccessProduct Property isAccessProduct: Is there a seven-layer agency before WAF. This parameter is required.
         */
        public Builder isAccessProduct(final java.lang.String isAccessProduct) {
            this.props.isAccessProduct(isAccessProduct);
            return this;
        }
        /**
         * Property isAccessProduct: Is there a seven-layer agency before WAF.
         * <p>
         * @return {@code this}
         * @param isAccessProduct Property isAccessProduct: Is there a seven-layer agency before WAF. This parameter is required.
         */
        public Builder isAccessProduct(final com.aliyun.ros.cdk.core.IResolvable isAccessProduct) {
            this.props.isAccessProduct(isAccessProduct);
            return this;
        }

        /**
         * Property sourceIps: Back to source IP configuration.
         * <p>
         * @return {@code this}
         * @param sourceIps Property sourceIps: Back to source IP configuration. This parameter is required.
         */
        public Builder sourceIps(final com.aliyun.ros.cdk.core.IResolvable sourceIps) {
            this.props.sourceIps(sourceIps);
            return this;
        }
        /**
         * Property sourceIps: Back to source IP configuration.
         * <p>
         * @return {@code this}
         * @param sourceIps Property sourceIps: Back to source IP configuration. This parameter is required.
         */
        public Builder sourceIps(final java.util.List<? extends java.lang.Object> sourceIps) {
            this.props.sourceIps(sourceIps);
            return this;
        }

        /**
         * Property clusterType: Cluster type.
         * <p>
         * @return {@code this}
         * @param clusterType Property clusterType: Cluster type. This parameter is required.
         */
        public Builder clusterType(final java.lang.String clusterType) {
            this.props.clusterType(clusterType);
            return this;
        }
        /**
         * Property clusterType: Cluster type.
         * <p>
         * @return {@code this}
         * @param clusterType Property clusterType: Cluster type. This parameter is required.
         */
        public Builder clusterType(final com.aliyun.ros.cdk.core.IResolvable clusterType) {
            this.props.clusterType(clusterType);
            return this;
        }

        /**
         * Property connectionTime: Connection timeout.
         * <p>
         * @return {@code this}
         * @param connectionTime Property connectionTime: Connection timeout. This parameter is required.
         */
        public Builder connectionTime(final java.lang.Number connectionTime) {
            this.props.connectionTime(connectionTime);
            return this;
        }
        /**
         * Property connectionTime: Connection timeout.
         * <p>
         * @return {@code this}
         * @param connectionTime Property connectionTime: Connection timeout. This parameter is required.
         */
        public Builder connectionTime(final com.aliyun.ros.cdk.core.IResolvable connectionTime) {
            this.props.connectionTime(connectionTime);
            return this;
        }

        /**
         * Property http2Port: Http2 port configuration.
         * <p>
         * @return {@code this}
         * @param http2Port Property http2Port: Http2 port configuration. This parameter is required.
         */
        public Builder http2Port(final com.aliyun.ros.cdk.core.IResolvable http2Port) {
            this.props.http2Port(http2Port);
            return this;
        }
        /**
         * Property http2Port: Http2 port configuration.
         * <p>
         * @return {@code this}
         * @param http2Port Property http2Port: Http2 port configuration. This parameter is required.
         */
        public Builder http2Port(final java.util.List<? extends java.lang.Object> http2Port) {
            this.props.http2Port(http2Port);
            return this;
        }

        /**
         * Property httpPort: Http port configuration.
         * <p>
         * @return {@code this}
         * @param httpPort Property httpPort: Http port configuration. This parameter is required.
         */
        public Builder httpPort(final com.aliyun.ros.cdk.core.IResolvable httpPort) {
            this.props.httpPort(httpPort);
            return this;
        }
        /**
         * Property httpPort: Http port configuration.
         * <p>
         * @return {@code this}
         * @param httpPort Property httpPort: Http port configuration. This parameter is required.
         */
        public Builder httpPort(final java.util.List<? extends java.lang.Object> httpPort) {
            this.props.httpPort(httpPort);
            return this;
        }

        /**
         * Property httpsPort: Https port configuration.
         * <p>
         * @return {@code this}
         * @param httpsPort Property httpsPort: Https port configuration. This parameter is required.
         */
        public Builder httpsPort(final com.aliyun.ros.cdk.core.IResolvable httpsPort) {
            this.props.httpsPort(httpsPort);
            return this;
        }
        /**
         * Property httpsPort: Https port configuration.
         * <p>
         * @return {@code this}
         * @param httpsPort Property httpsPort: Https port configuration. This parameter is required.
         */
        public Builder httpsPort(final java.util.List<? extends java.lang.Object> httpsPort) {
            this.props.httpsPort(httpsPort);
            return this;
        }

        /**
         * Property httpsRedirect: Https forced redirect configuration.
         * <p>
         * @return {@code this}
         * @param httpsRedirect Property httpsRedirect: Https forced redirect configuration. This parameter is required.
         */
        public Builder httpsRedirect(final java.lang.String httpsRedirect) {
            this.props.httpsRedirect(httpsRedirect);
            return this;
        }
        /**
         * Property httpsRedirect: Https forced redirect configuration.
         * <p>
         * @return {@code this}
         * @param httpsRedirect Property httpsRedirect: Https forced redirect configuration. This parameter is required.
         */
        public Builder httpsRedirect(final com.aliyun.ros.cdk.core.IResolvable httpsRedirect) {
            this.props.httpsRedirect(httpsRedirect);
            return this;
        }

        /**
         * Property httpToUserIp: Http back to source.
         * <p>
         * @return {@code this}
         * @param httpToUserIp Property httpToUserIp: Http back to source. This parameter is required.
         */
        public Builder httpToUserIp(final java.lang.String httpToUserIp) {
            this.props.httpToUserIp(httpToUserIp);
            return this;
        }
        /**
         * Property httpToUserIp: Http back to source.
         * <p>
         * @return {@code this}
         * @param httpToUserIp Property httpToUserIp: Http back to source. This parameter is required.
         */
        public Builder httpToUserIp(final com.aliyun.ros.cdk.core.IResolvable httpToUserIp) {
            this.props.httpToUserIp(httpToUserIp);
            return this;
        }

        /**
         * Property loadBalancing: Load balancing configuration.
         * <p>
         * @return {@code this}
         * @param loadBalancing Property loadBalancing: Load balancing configuration. This parameter is required.
         */
        public Builder loadBalancing(final java.lang.String loadBalancing) {
            this.props.loadBalancing(loadBalancing);
            return this;
        }
        /**
         * Property loadBalancing: Load balancing configuration.
         * <p>
         * @return {@code this}
         * @param loadBalancing Property loadBalancing: Load balancing configuration. This parameter is required.
         */
        public Builder loadBalancing(final com.aliyun.ros.cdk.core.IResolvable loadBalancing) {
            this.props.loadBalancing(loadBalancing);
            return this;
        }

        /**
         * Property logHeaders: Domain traffic tagging.
         * <p>
         * @return {@code this}
         * @param logHeaders Property logHeaders: Domain traffic tagging. This parameter is required.
         */
        public Builder logHeaders(final com.aliyun.ros.cdk.core.IResolvable logHeaders) {
            this.props.logHeaders(logHeaders);
            return this;
        }
        /**
         * Property logHeaders: Domain traffic tagging.
         * <p>
         * @return {@code this}
         * @param logHeaders Property logHeaders: Domain traffic tagging. This parameter is required.
         */
        public Builder logHeaders(final java.util.List<? extends java.lang.Object> logHeaders) {
            this.props.logHeaders(logHeaders);
            return this;
        }

        /**
         * Property readTime: Read connection timeout period.
         * <p>
         * @return {@code this}
         * @param readTime Property readTime: Read connection timeout period. This parameter is required.
         */
        public Builder readTime(final java.lang.Number readTime) {
            this.props.readTime(readTime);
            return this;
        }
        /**
         * Property readTime: Read connection timeout period.
         * <p>
         * @return {@code this}
         * @param readTime Property readTime: Read connection timeout period. This parameter is required.
         */
        public Builder readTime(final com.aliyun.ros.cdk.core.IResolvable readTime) {
            this.props.readTime(readTime);
            return this;
        }

        /**
         * Property resourceGroupId: Resource group Id.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: Resource group Id. This parameter is required.
         */
        public Builder resourceGroupId(final java.lang.String resourceGroupId) {
            this.props.resourceGroupId(resourceGroupId);
            return this;
        }
        /**
         * Property resourceGroupId: Resource group Id.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: Resource group Id. This parameter is required.
         */
        public Builder resourceGroupId(final com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.props.resourceGroupId(resourceGroupId);
            return this;
        }

        /**
         * Property writeTime: Write connection timeout period.
         * <p>
         * @return {@code this}
         * @param writeTime Property writeTime: Write connection timeout period. This parameter is required.
         */
        public Builder writeTime(final java.lang.Number writeTime) {
            this.props.writeTime(writeTime);
            return this;
        }
        /**
         * Property writeTime: Write connection timeout period.
         * <p>
         * @return {@code this}
         * @param writeTime Property writeTime: Write connection timeout period. This parameter is required.
         */
        public Builder writeTime(final com.aliyun.ros.cdk.core.IResolvable writeTime) {
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
