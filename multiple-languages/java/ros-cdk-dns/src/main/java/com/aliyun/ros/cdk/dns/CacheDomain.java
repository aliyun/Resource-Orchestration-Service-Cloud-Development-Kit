package com.aliyun.ros.cdk.dns;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::DNS::CacheDomain</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-04-07T05:57:23.923Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.dns.$Module.class, fqn = "@alicloud/ros-cdk-dns.CacheDomain")
public class CacheDomain extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.dns.ICacheDomain {

    protected CacheDomain(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected CacheDomain(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public CacheDomain(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.dns.CacheDomainProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public CacheDomain(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.dns.CacheDomainProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute DomainName: The domain name of the DNS cache.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDomainName() {
        return software.amazon.jsii.Kernel.get(this, "attrDomainName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.dns.CacheDomainProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.dns.CacheDomainProps.class));
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

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.dns.CacheDomain}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.dns.CacheDomain> {
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
        private final com.aliyun.ros.cdk.dns.CacheDomainProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.dns.CacheDomainProps.Builder();
        }

        /**
         * Property cacheTtlMax: The maximum TTL value for cached records.
         * <p>
         * @return {@code this}
         * @param cacheTtlMax Property cacheTtlMax: The maximum TTL value for cached records. This parameter is required.
         */
        public Builder cacheTtlMax(final java.lang.Number cacheTtlMax) {
            this.props.cacheTtlMax(cacheTtlMax);
            return this;
        }
        /**
         * Property cacheTtlMax: The maximum TTL value for cached records.
         * <p>
         * @return {@code this}
         * @param cacheTtlMax Property cacheTtlMax: The maximum TTL value for cached records. This parameter is required.
         */
        public Builder cacheTtlMax(final com.aliyun.ros.cdk.core.IResolvable cacheTtlMax) {
            this.props.cacheTtlMax(cacheTtlMax);
            return this;
        }

        /**
         * Property cacheTtlMin: The minimum TTL value for cached records.
         * <p>
         * @return {@code this}
         * @param cacheTtlMin Property cacheTtlMin: The minimum TTL value for cached records. This parameter is required.
         */
        public Builder cacheTtlMin(final java.lang.Number cacheTtlMin) {
            this.props.cacheTtlMin(cacheTtlMin);
            return this;
        }
        /**
         * Property cacheTtlMin: The minimum TTL value for cached records.
         * <p>
         * @return {@code this}
         * @param cacheTtlMin Property cacheTtlMin: The minimum TTL value for cached records. This parameter is required.
         */
        public Builder cacheTtlMin(final com.aliyun.ros.cdk.core.IResolvable cacheTtlMin) {
            this.props.cacheTtlMin(cacheTtlMin);
            return this;
        }

        /**
         * Property domainName: The domain name of the DNS cache domain.
         * <p>
         * @return {@code this}
         * @param domainName Property domainName: The domain name of the DNS cache domain. This parameter is required.
         */
        public Builder domainName(final java.lang.String domainName) {
            this.props.domainName(domainName);
            return this;
        }
        /**
         * Property domainName: The domain name of the DNS cache domain.
         * <p>
         * @return {@code this}
         * @param domainName Property domainName: The domain name of the DNS cache domain. This parameter is required.
         */
        public Builder domainName(final com.aliyun.ros.cdk.core.IResolvable domainName) {
            this.props.domainName(domainName);
            return this;
        }

        /**
         * Property instanceId: The instance ID associated with the DNS cache domain.
         * <p>
         * @return {@code this}
         * @param instanceId Property instanceId: The instance ID associated with the DNS cache domain. This parameter is required.
         */
        public Builder instanceId(final java.lang.String instanceId) {
            this.props.instanceId(instanceId);
            return this;
        }
        /**
         * Property instanceId: The instance ID associated with the DNS cache domain.
         * <p>
         * @return {@code this}
         * @param instanceId Property instanceId: The instance ID associated with the DNS cache domain. This parameter is required.
         */
        public Builder instanceId(final com.aliyun.ros.cdk.core.IResolvable instanceId) {
            this.props.instanceId(instanceId);
            return this;
        }

        /**
         * Property sourceDnsServer: List of source DNS servers.
         * <p>
         * @return {@code this}
         * @param sourceDnsServer Property sourceDnsServer: List of source DNS servers. This parameter is required.
         */
        public Builder sourceDnsServer(final com.aliyun.ros.cdk.core.IResolvable sourceDnsServer) {
            this.props.sourceDnsServer(sourceDnsServer);
            return this;
        }
        /**
         * Property sourceDnsServer: List of source DNS servers.
         * <p>
         * @return {@code this}
         * @param sourceDnsServer Property sourceDnsServer: List of source DNS servers. This parameter is required.
         */
        public Builder sourceDnsServer(final java.util.List<? extends java.lang.Object> sourceDnsServer) {
            this.props.sourceDnsServer(sourceDnsServer);
            return this;
        }

        /**
         * Property sourceEdns: Whether EDNS is enabled for the source DNS server.
         * <p>
         * @return {@code this}
         * @param sourceEdns Property sourceEdns: Whether EDNS is enabled for the source DNS server. This parameter is required.
         */
        public Builder sourceEdns(final java.lang.String sourceEdns) {
            this.props.sourceEdns(sourceEdns);
            return this;
        }
        /**
         * Property sourceEdns: Whether EDNS is enabled for the source DNS server.
         * <p>
         * @return {@code this}
         * @param sourceEdns Property sourceEdns: Whether EDNS is enabled for the source DNS server. This parameter is required.
         */
        public Builder sourceEdns(final com.aliyun.ros.cdk.core.IResolvable sourceEdns) {
            this.props.sourceEdns(sourceEdns);
            return this;
        }

        /**
         * Property sourceProtocol: The protocol used by the source DNS server.
         * <p>
         * @return {@code this}
         * @param sourceProtocol Property sourceProtocol: The protocol used by the source DNS server. This parameter is required.
         */
        public Builder sourceProtocol(final java.lang.String sourceProtocol) {
            this.props.sourceProtocol(sourceProtocol);
            return this;
        }
        /**
         * Property sourceProtocol: The protocol used by the source DNS server.
         * <p>
         * @return {@code this}
         * @param sourceProtocol Property sourceProtocol: The protocol used by the source DNS server. This parameter is required.
         */
        public Builder sourceProtocol(final com.aliyun.ros.cdk.core.IResolvable sourceProtocol) {
            this.props.sourceProtocol(sourceProtocol);
            return this;
        }

        /**
         * Property remark: Remark for the DNS cache domain.
         * <p>
         * @return {@code this}
         * @param remark Property remark: Remark for the DNS cache domain. This parameter is required.
         */
        public Builder remark(final java.lang.String remark) {
            this.props.remark(remark);
            return this;
        }
        /**
         * Property remark: Remark for the DNS cache domain.
         * <p>
         * @return {@code this}
         * @param remark Property remark: Remark for the DNS cache domain. This parameter is required.
         */
        public Builder remark(final com.aliyun.ros.cdk.core.IResolvable remark) {
            this.props.remark(remark);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.dns.CacheDomain}.
         */
        @Override
        public com.aliyun.ros.cdk.dns.CacheDomain build() {
            return new com.aliyun.ros.cdk.dns.CacheDomain(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
