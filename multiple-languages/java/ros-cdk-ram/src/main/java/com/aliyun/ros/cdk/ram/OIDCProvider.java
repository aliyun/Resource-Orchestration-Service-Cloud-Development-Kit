package com.aliyun.ros.cdk.ram;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::RAM::OIDCProvider</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-12-10T08:24:59.317Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ram.$Module.class, fqn = "@alicloud/ros-cdk-ram.OIDCProvider")
public class OIDCProvider extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.ram.IOIDCProvider {

    protected OIDCProvider(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected OIDCProvider(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public OIDCProvider(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ram.OIDCProviderProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public OIDCProvider(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ram.OIDCProviderProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute OIDCProviderName: The name of the OIDC IdP.
     * <p>
     * The name can contain letters, digits, and special characters and cannot start or end with the special characters. The special characters are periods, (.), hyphens (-), and underscores (_).``
     * The name can be up to 128 characters in length.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrOidcProviderName() {
        return software.amazon.jsii.Kernel.get(this, "attrOidcProviderName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ram.OIDCProviderProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ram.OIDCProviderProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.ram.OIDCProvider}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ram.OIDCProvider> {
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
        private final com.aliyun.ros.cdk.ram.OIDCProviderProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.ram.OIDCProviderProps.Builder();
        }

        /**
         * Property fingerprints: The list of the fingerprints, max length is 5.
         * <p>
         * @return {@code this}
         * @param fingerprints Property fingerprints: The list of the fingerprints, max length is 5. This parameter is required.
         */
        public Builder fingerprints(final com.aliyun.ros.cdk.core.IResolvable fingerprints) {
            this.props.fingerprints(fingerprints);
            return this;
        }
        /**
         * Property fingerprints: The list of the fingerprints, max length is 5.
         * <p>
         * @return {@code this}
         * @param fingerprints Property fingerprints: The list of the fingerprints, max length is 5. This parameter is required.
         */
        public Builder fingerprints(final java.util.List<? extends java.lang.Object> fingerprints) {
            this.props.fingerprints(fingerprints);
            return this;
        }

        /**
         * Property issuerUrl: The URL of the issuer, which is provided by the external IdP.
         * <p>
         * The URL of the issuer must be unique within an Alibaba Cloud account.
         * The URL of the issuer must start with https and be in the valid URL format. The URL cannot contain query parameters that follow a question mark (?) or logon information that is identified by at signs (&#64;). The URL cannot be a fragment URL that contains number signs (#).
         * The URL can be up to 255 characters in length.
         * <p>
         * @return {@code this}
         * @param issuerUrl Property issuerUrl: The URL of the issuer, which is provided by the external IdP. This parameter is required.
         */
        public Builder issuerUrl(final java.lang.String issuerUrl) {
            this.props.issuerUrl(issuerUrl);
            return this;
        }
        /**
         * Property issuerUrl: The URL of the issuer, which is provided by the external IdP.
         * <p>
         * The URL of the issuer must be unique within an Alibaba Cloud account.
         * The URL of the issuer must start with https and be in the valid URL format. The URL cannot contain query parameters that follow a question mark (?) or logon information that is identified by at signs (&#64;). The URL cannot be a fragment URL that contains number signs (#).
         * The URL can be up to 255 characters in length.
         * <p>
         * @return {@code this}
         * @param issuerUrl Property issuerUrl: The URL of the issuer, which is provided by the external IdP. This parameter is required.
         */
        public Builder issuerUrl(final com.aliyun.ros.cdk.core.IResolvable issuerUrl) {
            this.props.issuerUrl(issuerUrl);
            return this;
        }

        /**
         * Property oidcProviderName: The name of the OIDC IdP.
         * <p>
         * The name can contain letters, digits, and special characters and cannot start or end with the special characters. The special characters are periods, (.), hyphens (-), and underscores (_).``
         * The name can be up to 128 characters in length.
         * <p>
         * @return {@code this}
         * @param oidcProviderName Property oidcProviderName: The name of the OIDC IdP. This parameter is required.
         */
        public Builder oidcProviderName(final java.lang.String oidcProviderName) {
            this.props.oidcProviderName(oidcProviderName);
            return this;
        }
        /**
         * Property oidcProviderName: The name of the OIDC IdP.
         * <p>
         * The name can contain letters, digits, and special characters and cannot start or end with the special characters. The special characters are periods, (.), hyphens (-), and underscores (_).``
         * The name can be up to 128 characters in length.
         * <p>
         * @return {@code this}
         * @param oidcProviderName Property oidcProviderName: The name of the OIDC IdP. This parameter is required.
         */
        public Builder oidcProviderName(final com.aliyun.ros.cdk.core.IResolvable oidcProviderName) {
            this.props.oidcProviderName(oidcProviderName);
            return this;
        }

        /**
         * Property clientIds: The list of the client IDs, max length is 20.
         * <p>
         * @return {@code this}
         * @param clientIds Property clientIds: The list of the client IDs, max length is 20. This parameter is required.
         */
        public Builder clientIds(final com.aliyun.ros.cdk.core.IResolvable clientIds) {
            this.props.clientIds(clientIds);
            return this;
        }
        /**
         * Property clientIds: The list of the client IDs, max length is 20.
         * <p>
         * @return {@code this}
         * @param clientIds Property clientIds: The list of the client IDs, max length is 20. This parameter is required.
         */
        public Builder clientIds(final java.util.List<? extends java.lang.Object> clientIds) {
            this.props.clientIds(clientIds);
            return this;
        }

        /**
         * Property description: The description of the OIDC IdP.
         * <p>
         * The description can be up to 256 characters in length.
         * <p>
         * @return {@code this}
         * @param description Property description: The description of the OIDC IdP. This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props.description(description);
            return this;
        }
        /**
         * Property description: The description of the OIDC IdP.
         * <p>
         * The description can be up to 256 characters in length.
         * <p>
         * @return {@code this}
         * @param description Property description: The description of the OIDC IdP. This parameter is required.
         */
        public Builder description(final com.aliyun.ros.cdk.core.IResolvable description) {
            this.props.description(description);
            return this;
        }

        /**
         * Property issuanceLimitTime: The earliest time when an external IdP can issue an ID token.
         * <p>
         * If the value of the iat field in the ID token is later than the current time, the request is rejected. Unit: hours. Valid values: 1 to 168.
         * <p>
         * @return {@code this}
         * @param issuanceLimitTime Property issuanceLimitTime: The earliest time when an external IdP can issue an ID token. This parameter is required.
         */
        public Builder issuanceLimitTime(final java.lang.Number issuanceLimitTime) {
            this.props.issuanceLimitTime(issuanceLimitTime);
            return this;
        }
        /**
         * Property issuanceLimitTime: The earliest time when an external IdP can issue an ID token.
         * <p>
         * If the value of the iat field in the ID token is later than the current time, the request is rejected. Unit: hours. Valid values: 1 to 168.
         * <p>
         * @return {@code this}
         * @param issuanceLimitTime Property issuanceLimitTime: The earliest time when an external IdP can issue an ID token. This parameter is required.
         */
        public Builder issuanceLimitTime(final com.aliyun.ros.cdk.core.IResolvable issuanceLimitTime) {
            this.props.issuanceLimitTime(issuanceLimitTime);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.ram.OIDCProvider}.
         */
        @Override
        public com.aliyun.ros.cdk.ram.OIDCProvider build() {
            return new com.aliyun.ros.cdk.ram.OIDCProvider(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
