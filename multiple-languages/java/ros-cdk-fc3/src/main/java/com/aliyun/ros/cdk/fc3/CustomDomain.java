package com.aliyun.ros.cdk.fc3;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::FC3::CustomDomain</code>, which is used to create a custom domain name in Function Compute 3.0.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-08-12T08:28:47.655Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.fc3.$Module.class, fqn = "@alicloud/ros-cdk-fc3.CustomDomain")
public class CustomDomain extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.fc3.ICustomDomain {

    protected CustomDomain(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected CustomDomain(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public CustomDomain(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.fc3.CustomDomainProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public CustomDomain(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.fc3.CustomDomainProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute DomainName: The domain name.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDomainName() {
        return software.amazon.jsii.Kernel.get(this, "attrDomainName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.fc3.CustomDomainProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.fc3.CustomDomainProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.fc3.CustomDomain}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.fc3.CustomDomain> {
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
        private final com.aliyun.ros.cdk.fc3.CustomDomainProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.fc3.CustomDomainProps.Builder();
        }

        /**
         * Property authConfig: Permission authentication configuration.
         * <p>
         * @return {@code this}
         * @param authConfig Property authConfig: Permission authentication configuration. This parameter is required.
         */
        public Builder authConfig(final com.aliyun.ros.cdk.core.IResolvable authConfig) {
            this.props.authConfig(authConfig);
            return this;
        }
        /**
         * Property authConfig: Permission authentication configuration.
         * <p>
         * @return {@code this}
         * @param authConfig Property authConfig: Permission authentication configuration. This parameter is required.
         */
        public Builder authConfig(final com.aliyun.ros.cdk.fc3.RosCustomDomain.AuthConfigProperty authConfig) {
            this.props.authConfig(authConfig);
            return this;
        }

        /**
         * Property domainName: Domain name.
         * <p>
         * Fill in the custom domain name that has been filed in Ali cloud or access to the record.
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
         * Fill in the custom domain name that has been filed in Ali cloud or access to the record.
         * <p>
         * @return {@code this}
         * @param domainName Property domainName: Domain name. This parameter is required.
         */
        public Builder domainName(final com.aliyun.ros.cdk.core.IResolvable domainName) {
            this.props.domainName(domainName);
            return this;
        }

        /**
         * Property protocol: Protocol types supported by the domain name.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>HTTP: Only HTTP protocol is supported.</li>
         * <li>HTTPS: HTTPS only is supported.</li>
         * <li>HTTP,HTTPS: Supports HTTP and HTTPS protocols.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param protocol Property protocol: Protocol types supported by the domain name. This parameter is required.
         */
        public Builder protocol(final java.lang.String protocol) {
            this.props.protocol(protocol);
            return this;
        }
        /**
         * Property protocol: Protocol types supported by the domain name.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>HTTP: Only HTTP protocol is supported.</li>
         * <li>HTTPS: HTTPS only is supported.</li>
         * <li>HTTP,HTTPS: Supports HTTP and HTTPS protocols.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param protocol Property protocol: Protocol types supported by the domain name. This parameter is required.
         */
        public Builder protocol(final com.aliyun.ros.cdk.core.IResolvable protocol) {
            this.props.protocol(protocol);
            return this;
        }

        /**
         * Property certConfig: HTTPS certificate information.
         * <p>
         * @return {@code this}
         * @param certConfig Property certConfig: HTTPS certificate information. This parameter is required.
         */
        public Builder certConfig(final com.aliyun.ros.cdk.core.IResolvable certConfig) {
            this.props.certConfig(certConfig);
            return this;
        }
        /**
         * Property certConfig: HTTPS certificate information.
         * <p>
         * @return {@code this}
         * @param certConfig Property certConfig: HTTPS certificate information. This parameter is required.
         */
        public Builder certConfig(final com.aliyun.ros.cdk.fc3.RosCustomDomain.CertConfigProperty certConfig) {
            this.props.certConfig(certConfig);
            return this;
        }

        /**
         * Property routeConfig: Routing table: path to function mappingwhen a function is called with a custom domain name.
         * <p>
         * @return {@code this}
         * @param routeConfig Property routeConfig: Routing table: path to function mappingwhen a function is called with a custom domain name. This parameter is required.
         */
        public Builder routeConfig(final com.aliyun.ros.cdk.core.IResolvable routeConfig) {
            this.props.routeConfig(routeConfig);
            return this;
        }
        /**
         * Property routeConfig: Routing table: path to function mappingwhen a function is called with a custom domain name.
         * <p>
         * @return {@code this}
         * @param routeConfig Property routeConfig: Routing table: path to function mappingwhen a function is called with a custom domain name. This parameter is required.
         */
        public Builder routeConfig(final com.aliyun.ros.cdk.fc3.RosCustomDomain.RouteConfigProperty routeConfig) {
            this.props.routeConfig(routeConfig);
            return this;
        }

        /**
         * Property tlsConfig: TLS config.
         * <p>
         * @return {@code this}
         * @param tlsConfig Property tlsConfig: TLS config. This parameter is required.
         */
        public Builder tlsConfig(final com.aliyun.ros.cdk.core.IResolvable tlsConfig) {
            this.props.tlsConfig(tlsConfig);
            return this;
        }
        /**
         * Property tlsConfig: TLS config.
         * <p>
         * @return {@code this}
         * @param tlsConfig Property tlsConfig: TLS config. This parameter is required.
         */
        public Builder tlsConfig(final com.aliyun.ros.cdk.fc3.RosCustomDomain.TlsConfigProperty tlsConfig) {
            this.props.tlsConfig(tlsConfig);
            return this;
        }

        /**
         * Property wafConfig: Web application firewall configuration information.
         * <p>
         * @return {@code this}
         * @param wafConfig Property wafConfig: Web application firewall configuration information. This parameter is required.
         */
        public Builder wafConfig(final com.aliyun.ros.cdk.core.IResolvable wafConfig) {
            this.props.wafConfig(wafConfig);
            return this;
        }
        /**
         * Property wafConfig: Web application firewall configuration information.
         * <p>
         * @return {@code this}
         * @param wafConfig Property wafConfig: Web application firewall configuration information. This parameter is required.
         */
        public Builder wafConfig(final com.aliyun.ros.cdk.fc3.RosCustomDomain.WafConfigProperty wafConfig) {
            this.props.wafConfig(wafConfig);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.fc3.CustomDomain}.
         */
        @Override
        public com.aliyun.ros.cdk.fc3.CustomDomain build() {
            return new com.aliyun.ros.cdk.fc3.CustomDomain(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
