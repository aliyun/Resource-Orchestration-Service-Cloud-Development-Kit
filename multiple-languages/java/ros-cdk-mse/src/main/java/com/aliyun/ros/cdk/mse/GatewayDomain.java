package com.aliyun.ros.cdk.mse;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::MSE::GatewayDomain</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-12-10T08:24:58.201Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.mse.$Module.class, fqn = "@alicloud/ros-cdk-mse.GatewayDomain")
public class GatewayDomain extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.mse.IGatewayDomain {

    protected GatewayDomain(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected GatewayDomain(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public GatewayDomain(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.mse.GatewayDomainProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public GatewayDomain(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.mse.GatewayDomainProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute DomainId: The ID of the domain.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDomainId() {
        return software.amazon.jsii.Kernel.get(this, "attrDomainId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.mse.GatewayDomainProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.mse.GatewayDomainProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.mse.GatewayDomain}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.mse.GatewayDomain> {
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
        private final com.aliyun.ros.cdk.mse.GatewayDomainProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.mse.GatewayDomainProps.Builder();
        }

        /**
         * Property gatewayUniqueId: The unique identifier of the gateway.
         * <p>
         * @return {@code this}
         * @param gatewayUniqueId Property gatewayUniqueId: The unique identifier of the gateway. This parameter is required.
         */
        public Builder gatewayUniqueId(final java.lang.String gatewayUniqueId) {
            this.props.gatewayUniqueId(gatewayUniqueId);
            return this;
        }
        /**
         * Property gatewayUniqueId: The unique identifier of the gateway.
         * <p>
         * @return {@code this}
         * @param gatewayUniqueId Property gatewayUniqueId: The unique identifier of the gateway. This parameter is required.
         */
        public Builder gatewayUniqueId(final com.aliyun.ros.cdk.core.IResolvable gatewayUniqueId) {
            this.props.gatewayUniqueId(gatewayUniqueId);
            return this;
        }

        /**
         * Property name: The domain name.
         * <p>
         * @return {@code this}
         * @param name Property name: The domain name. This parameter is required.
         */
        public Builder name(final java.lang.String name) {
            this.props.name(name);
            return this;
        }
        /**
         * Property name: The domain name.
         * <p>
         * @return {@code this}
         * @param name Property name: The domain name. This parameter is required.
         */
        public Builder name(final com.aliyun.ros.cdk.core.IResolvable name) {
            this.props.name(name);
            return this;
        }

        /**
         * Property protocol: The protocol type: HTTP, HTTPS.
         * <p>
         * @return {@code this}
         * @param protocol Property protocol: The protocol type: HTTP, HTTPS. This parameter is required.
         */
        public Builder protocol(final java.lang.String protocol) {
            this.props.protocol(protocol);
            return this;
        }
        /**
         * Property protocol: The protocol type: HTTP, HTTPS.
         * <p>
         * @return {@code this}
         * @param protocol Property protocol: The protocol type: HTTP, HTTPS. This parameter is required.
         */
        public Builder protocol(final com.aliyun.ros.cdk.core.IResolvable protocol) {
            this.props.protocol(protocol);
            return this;
        }

        /**
         * Property certIdentifier: Certificate ID.
         * <p>
         * @return {@code this}
         * @param certIdentifier Property certIdentifier: Certificate ID. This parameter is required.
         */
        public Builder certIdentifier(final java.lang.String certIdentifier) {
            this.props.certIdentifier(certIdentifier);
            return this;
        }
        /**
         * Property certIdentifier: Certificate ID.
         * <p>
         * @return {@code this}
         * @param certIdentifier Property certIdentifier: Certificate ID. This parameter is required.
         */
        public Builder certIdentifier(final com.aliyun.ros.cdk.core.IResolvable certIdentifier) {
            this.props.certIdentifier(certIdentifier);
            return this;
        }

        /**
         * Property http2: Whether to enable Http2: open, close, globalConfig.
         * <p>
         * @return {@code this}
         * @param http2 Property http2: Whether to enable Http2: open, close, globalConfig. This parameter is required.
         */
        public Builder http2(final java.lang.String http2) {
            this.props.http2(http2);
            return this;
        }
        /**
         * Property http2: Whether to enable Http2: open, close, globalConfig.
         * <p>
         * @return {@code this}
         * @param http2 Property http2: Whether to enable Http2: open, close, globalConfig. This parameter is required.
         */
        public Builder http2(final com.aliyun.ros.cdk.core.IResolvable http2) {
            this.props.http2(http2);
            return this;
        }

        /**
         * Property mustHttps: Whether to enable HTTPS.
         * <p>
         * @return {@code this}
         * @param mustHttps Property mustHttps: Whether to enable HTTPS. This parameter is required.
         */
        public Builder mustHttps(final java.lang.Boolean mustHttps) {
            this.props.mustHttps(mustHttps);
            return this;
        }
        /**
         * Property mustHttps: Whether to enable HTTPS.
         * <p>
         * @return {@code this}
         * @param mustHttps Property mustHttps: Whether to enable HTTPS. This parameter is required.
         */
        public Builder mustHttps(final com.aliyun.ros.cdk.core.IResolvable mustHttps) {
            this.props.mustHttps(mustHttps);
            return this;
        }

        /**
         * Property tlsCipherSuitesConfigJson: TLS encryption suite configuration.
         * <p>
         * @return {@code this}
         * @param tlsCipherSuitesConfigJson Property tlsCipherSuitesConfigJson: TLS encryption suite configuration. This parameter is required.
         */
        public Builder tlsCipherSuitesConfigJson(final com.aliyun.ros.cdk.core.IResolvable tlsCipherSuitesConfigJson) {
            this.props.tlsCipherSuitesConfigJson(tlsCipherSuitesConfigJson);
            return this;
        }
        /**
         * Property tlsCipherSuitesConfigJson: TLS encryption suite configuration.
         * <p>
         * @return {@code this}
         * @param tlsCipherSuitesConfigJson Property tlsCipherSuitesConfigJson: TLS encryption suite configuration. This parameter is required.
         */
        public Builder tlsCipherSuitesConfigJson(final com.aliyun.ros.cdk.mse.RosGatewayDomain.TlsCipherSuitesConfigJSONProperty tlsCipherSuitesConfigJson) {
            this.props.tlsCipherSuitesConfigJson(tlsCipherSuitesConfigJson);
            return this;
        }

        /**
         * Property tlsMax: The maximum TLS version.
         * <p>
         * @return {@code this}
         * @param tlsMax Property tlsMax: The maximum TLS version. This parameter is required.
         */
        public Builder tlsMax(final java.lang.String tlsMax) {
            this.props.tlsMax(tlsMax);
            return this;
        }
        /**
         * Property tlsMax: The maximum TLS version.
         * <p>
         * @return {@code this}
         * @param tlsMax Property tlsMax: The maximum TLS version. This parameter is required.
         */
        public Builder tlsMax(final com.aliyun.ros.cdk.core.IResolvable tlsMax) {
            this.props.tlsMax(tlsMax);
            return this;
        }

        /**
         * Property tlsMin: The minimum TLS version.
         * <p>
         * @return {@code this}
         * @param tlsMin Property tlsMin: The minimum TLS version. This parameter is required.
         */
        public Builder tlsMin(final java.lang.String tlsMin) {
            this.props.tlsMin(tlsMin);
            return this;
        }
        /**
         * Property tlsMin: The minimum TLS version.
         * <p>
         * @return {@code this}
         * @param tlsMin Property tlsMin: The minimum TLS version. This parameter is required.
         */
        public Builder tlsMin(final com.aliyun.ros.cdk.core.IResolvable tlsMin) {
            this.props.tlsMin(tlsMin);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.mse.GatewayDomain}.
         */
        @Override
        public com.aliyun.ros.cdk.mse.GatewayDomain build() {
            return new com.aliyun.ros.cdk.mse.GatewayDomain(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
