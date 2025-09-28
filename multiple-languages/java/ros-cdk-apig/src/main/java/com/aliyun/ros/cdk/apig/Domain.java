package com.aliyun.ros.cdk.apig;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::APIG::Domain</code>, which is used to create a domain name.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-09-28T10:11:20.875Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.apig.$Module.class, fqn = "@alicloud/ros-cdk-apig.Domain")
public class Domain extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.apig.IDomain {

    protected Domain(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Domain(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public Domain(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.apig.DomainProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public Domain(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.apig.DomainProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute CertIdentifier: The tls Certificate identification.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrCertIdentifier() {
        return software.amazon.jsii.Kernel.get(this, "attrCertIdentifier", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute DomainId: The ID of the Domain.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDomainId() {
        return software.amazon.jsii.Kernel.get(this, "attrDomainId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute DomainName: The name of the Domain.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDomainName() {
        return software.amazon.jsii.Kernel.get(this, "attrDomainName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ForceHttps: Set the HTTPS protocol type and whether to enable forced HTTPS redirection.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrForceHttps() {
        return software.amazon.jsii.Kernel.get(this, "attrForceHttps", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Http2Option: Whether to enable http2 settings.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrHttp2Option() {
        return software.amazon.jsii.Kernel.get(this, "attrHttp2Option", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Protocol: The types of protocols.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrProtocol() {
        return software.amazon.jsii.Kernel.get(this, "attrProtocol", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ResourceGroupId: The ID of the resource group.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceGroupId() {
        return software.amazon.jsii.Kernel.get(this, "attrResourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute TlsCipherSuitesConfig: The configuration of the TLS encryption suite.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrTlsCipherSuitesConfig() {
        return software.amazon.jsii.Kernel.get(this, "attrTlsCipherSuitesConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute TlsMax: The maximum version of the TLS protocol.
     * <p>
     * The maximum version of the TLS protocol is 1.3.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrTlsMax() {
        return software.amazon.jsii.Kernel.get(this, "attrTlsMax", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute TlsMin: The minimum version of the TLS protocol.
     * <p>
     * The minimum version of the TLS protocol is 1.0.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrTlsMin() {
        return software.amazon.jsii.Kernel.get(this, "attrTlsMin", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.apig.DomainProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.apig.DomainProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.apig.Domain}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.apig.Domain> {
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
        private final com.aliyun.ros.cdk.apig.DomainProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.apig.DomainProps.Builder();
        }

        /**
         * Property domainName: The name of the Domain.
         * <p>
         * @return {@code this}
         * @param domainName Property domainName: The name of the Domain. This parameter is required.
         */
        public Builder domainName(final java.lang.String domainName) {
            this.props.domainName(domainName);
            return this;
        }
        /**
         * Property domainName: The name of the Domain.
         * <p>
         * @return {@code this}
         * @param domainName Property domainName: The name of the Domain. This parameter is required.
         */
        public Builder domainName(final com.aliyun.ros.cdk.core.IResolvable domainName) {
            this.props.domainName(domainName);
            return this;
        }

        /**
         * Property protocol: The types of protocols supported by the domain are as follows: * HTTP: Supports only the HTTP protocol.
         * <p>
         * <ul>
         * <li>HTTPS: Supports only the HTTPS protocol.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param protocol Property protocol: The types of protocols supported by the domain are as follows: * HTTP: Supports only the HTTP protocol. This parameter is required.
         */
        public Builder protocol(final java.lang.String protocol) {
            this.props.protocol(protocol);
            return this;
        }
        /**
         * Property protocol: The types of protocols supported by the domain are as follows: * HTTP: Supports only the HTTP protocol.
         * <p>
         * <ul>
         * <li>HTTPS: Supports only the HTTPS protocol.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param protocol Property protocol: The types of protocols supported by the domain are as follows: * HTTP: Supports only the HTTP protocol. This parameter is required.
         */
        public Builder protocol(final com.aliyun.ros.cdk.core.IResolvable protocol) {
            this.props.protocol(protocol);
            return this;
        }

        /**
         * Property certIdentifier: The tls Certificate identification.
         * <p>
         * @return {@code this}
         * @param certIdentifier Property certIdentifier: The tls Certificate identification. This parameter is required.
         */
        public Builder certIdentifier(final java.lang.String certIdentifier) {
            this.props.certIdentifier(certIdentifier);
            return this;
        }
        /**
         * Property certIdentifier: The tls Certificate identification.
         * <p>
         * @return {@code this}
         * @param certIdentifier Property certIdentifier: The tls Certificate identification. This parameter is required.
         */
        public Builder certIdentifier(final com.aliyun.ros.cdk.core.IResolvable certIdentifier) {
            this.props.certIdentifier(certIdentifier);
            return this;
        }

        /**
         * Property forceHttps: Set the HTTPS protocol type and whether to enable forced HTTPS redirection.
         * <p>
         * @return {@code this}
         * @param forceHttps Property forceHttps: Set the HTTPS protocol type and whether to enable forced HTTPS redirection. This parameter is required.
         */
        public Builder forceHttps(final java.lang.Boolean forceHttps) {
            this.props.forceHttps(forceHttps);
            return this;
        }
        /**
         * Property forceHttps: Set the HTTPS protocol type and whether to enable forced HTTPS redirection.
         * <p>
         * @return {@code this}
         * @param forceHttps Property forceHttps: Set the HTTPS protocol type and whether to enable forced HTTPS redirection. This parameter is required.
         */
        public Builder forceHttps(final com.aliyun.ros.cdk.core.IResolvable forceHttps) {
            this.props.forceHttps(forceHttps);
            return this;
        }

        /**
         * Property http2Option: Whether to enable http2 settings.
         * <p>
         * @return {@code this}
         * @param http2Option Property http2Option: Whether to enable http2 settings. This parameter is required.
         */
        public Builder http2Option(final java.lang.String http2Option) {
            this.props.http2Option(http2Option);
            return this;
        }
        /**
         * Property http2Option: Whether to enable http2 settings.
         * <p>
         * @return {@code this}
         * @param http2Option Property http2Option: Whether to enable http2 settings. This parameter is required.
         */
        public Builder http2Option(final com.aliyun.ros.cdk.core.IResolvable http2Option) {
            this.props.http2Option(http2Option);
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
         * Property tlsCipherSuitesConfig: The configuration of the TLS encryption suite.
         * <p>
         * @return {@code this}
         * @param tlsCipherSuitesConfig Property tlsCipherSuitesConfig: The configuration of the TLS encryption suite. This parameter is required.
         */
        public Builder tlsCipherSuitesConfig(final com.aliyun.ros.cdk.core.IResolvable tlsCipherSuitesConfig) {
            this.props.tlsCipherSuitesConfig(tlsCipherSuitesConfig);
            return this;
        }
        /**
         * Property tlsCipherSuitesConfig: The configuration of the TLS encryption suite.
         * <p>
         * @return {@code this}
         * @param tlsCipherSuitesConfig Property tlsCipherSuitesConfig: The configuration of the TLS encryption suite. This parameter is required.
         */
        public Builder tlsCipherSuitesConfig(final com.aliyun.ros.cdk.apig.RosDomain.TlsCipherSuitesConfigProperty tlsCipherSuitesConfig) {
            this.props.tlsCipherSuitesConfig(tlsCipherSuitesConfig);
            return this;
        }

        /**
         * Property tlsMax: The maximum version of the TLS protocol.
         * <p>
         * The maximum version of the TLS protocol is 1.3.
         * <p>
         * @return {@code this}
         * @param tlsMax Property tlsMax: The maximum version of the TLS protocol. This parameter is required.
         */
        public Builder tlsMax(final java.lang.String tlsMax) {
            this.props.tlsMax(tlsMax);
            return this;
        }
        /**
         * Property tlsMax: The maximum version of the TLS protocol.
         * <p>
         * The maximum version of the TLS protocol is 1.3.
         * <p>
         * @return {@code this}
         * @param tlsMax Property tlsMax: The maximum version of the TLS protocol. This parameter is required.
         */
        public Builder tlsMax(final com.aliyun.ros.cdk.core.IResolvable tlsMax) {
            this.props.tlsMax(tlsMax);
            return this;
        }

        /**
         * Property tlsMin: The minimum version of the TLS protocol.
         * <p>
         * The minimum version of the TLS protocol is 1.0.
         * <p>
         * @return {@code this}
         * @param tlsMin Property tlsMin: The minimum version of the TLS protocol. This parameter is required.
         */
        public Builder tlsMin(final java.lang.String tlsMin) {
            this.props.tlsMin(tlsMin);
            return this;
        }
        /**
         * Property tlsMin: The minimum version of the TLS protocol.
         * <p>
         * The minimum version of the TLS protocol is 1.0.
         * <p>
         * @return {@code this}
         * @param tlsMin Property tlsMin: The minimum version of the TLS protocol. This parameter is required.
         */
        public Builder tlsMin(final com.aliyun.ros.cdk.core.IResolvable tlsMin) {
            this.props.tlsMin(tlsMin);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.apig.Domain}.
         */
        @Override
        public com.aliyun.ros.cdk.apig.Domain build() {
            return new com.aliyun.ros.cdk.apig.Domain(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
