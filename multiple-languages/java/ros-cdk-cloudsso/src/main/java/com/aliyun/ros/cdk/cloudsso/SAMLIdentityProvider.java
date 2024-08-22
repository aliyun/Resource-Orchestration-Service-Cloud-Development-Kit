package com.aliyun.ros.cdk.cloudsso;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::CloudSSO::SAMLIdentityProvider</code>, which is used to configure the information about a Security Assertion Markup Language (SAML) identity provider (IdP).
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-08-22T08:56:18.541Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cloudsso.$Module.class, fqn = "@alicloud/ros-cdk-cloudsso.SAMLIdentityProvider")
public class SAMLIdentityProvider extends com.aliyun.ros.cdk.core.Resource {

    protected SAMLIdentityProvider(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected SAMLIdentityProvider(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public SAMLIdentityProvider(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cloudsso.SAMLIdentityProviderProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public SAMLIdentityProvider(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cloudsso.SAMLIdentityProviderProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
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

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cloudsso.SAMLIdentityProviderProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.cloudsso.SAMLIdentityProviderProps.class));
    }

    protected void setProps(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cloudsso.SAMLIdentityProviderProps value) {
        software.amazon.jsii.Kernel.set(this, "props", java.util.Objects.requireNonNull(value, "props is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.cloudsso.SAMLIdentityProvider}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.cloudsso.SAMLIdentityProvider> {
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
        private final com.aliyun.ros.cdk.cloudsso.SAMLIdentityProviderProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.cloudsso.SAMLIdentityProviderProps.Builder();
        }

        /**
         * Property directoryId: The ID of the directory.
         * <p>
         * @return {@code this}
         * @param directoryId Property directoryId: The ID of the directory. This parameter is required.
         */
        public Builder directoryId(final java.lang.String directoryId) {
            this.props.directoryId(directoryId);
            return this;
        }
        /**
         * Property directoryId: The ID of the directory.
         * <p>
         * @return {@code this}
         * @param directoryId Property directoryId: The ID of the directory. This parameter is required.
         */
        public Builder directoryId(final com.aliyun.ros.cdk.core.IResolvable directoryId) {
            this.props.directoryId(directoryId);
            return this;
        }

        /**
         * Property encodedMetadataDocument: The metadata file of the IdP.
         * <p>
         * The value of this parameter is Base64-encoded.
         * The file is provided by the IdP that supports SAML 2.0.
         * <p>
         * @return {@code this}
         * @param encodedMetadataDocument Property encodedMetadataDocument: The metadata file of the IdP. This parameter is required.
         */
        public Builder encodedMetadataDocument(final java.lang.String encodedMetadataDocument) {
            this.props.encodedMetadataDocument(encodedMetadataDocument);
            return this;
        }
        /**
         * Property encodedMetadataDocument: The metadata file of the IdP.
         * <p>
         * The value of this parameter is Base64-encoded.
         * The file is provided by the IdP that supports SAML 2.0.
         * <p>
         * @return {@code this}
         * @param encodedMetadataDocument Property encodedMetadataDocument: The metadata file of the IdP. This parameter is required.
         */
        public Builder encodedMetadataDocument(final com.aliyun.ros.cdk.core.IResolvable encodedMetadataDocument) {
            this.props.encodedMetadataDocument(encodedMetadataDocument);
            return this;
        }

        /**
         * Property entityId: The entity ID of the IdP.
         * <p>
         * @return {@code this}
         * @param entityId Property entityId: The entity ID of the IdP. This parameter is required.
         */
        public Builder entityId(final java.lang.String entityId) {
            this.props.entityId(entityId);
            return this;
        }
        /**
         * Property entityId: The entity ID of the IdP.
         * <p>
         * @return {@code this}
         * @param entityId Property entityId: The entity ID of the IdP. This parameter is required.
         */
        public Builder entityId(final com.aliyun.ros.cdk.core.IResolvable entityId) {
            this.props.entityId(entityId);
            return this;
        }

        /**
         * Property loginUrl: The logon URL of the IdP.
         * <p>
         * @return {@code this}
         * @param loginUrl Property loginUrl: The logon URL of the IdP. This parameter is required.
         */
        public Builder loginUrl(final java.lang.String loginUrl) {
            this.props.loginUrl(loginUrl);
            return this;
        }
        /**
         * Property loginUrl: The logon URL of the IdP.
         * <p>
         * @return {@code this}
         * @param loginUrl Property loginUrl: The logon URL of the IdP. This parameter is required.
         */
        public Builder loginUrl(final com.aliyun.ros.cdk.core.IResolvable loginUrl) {
            this.props.loginUrl(loginUrl);
            return this;
        }

        /**
         * Property ssoStatus: The status of SSO logon.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>Enabled</li>
         * <li>Disabled (default)</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param ssoStatus Property ssoStatus: The status of SSO logon. This parameter is required.
         */
        public Builder ssoStatus(final java.lang.String ssoStatus) {
            this.props.ssoStatus(ssoStatus);
            return this;
        }
        /**
         * Property ssoStatus: The status of SSO logon.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>Enabled</li>
         * <li>Disabled (default)</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param ssoStatus Property ssoStatus: The status of SSO logon. This parameter is required.
         */
        public Builder ssoStatus(final com.aliyun.ros.cdk.core.IResolvable ssoStatus) {
            this.props.ssoStatus(ssoStatus);
            return this;
        }

        /**
         * Property wantRequestSigned: Specifies whether CloudSSO needs to sign SAML requests.
         * <p>
         * The requests are sent when users log on to the CloudSSO user portal to initiate SAML-based SSO. Valid values:
         * <p>
         * <ul>
         * <li>true: yes</li>
         * <li>false: no (default)</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param wantRequestSigned Property wantRequestSigned: Specifies whether CloudSSO needs to sign SAML requests. This parameter is required.
         */
        public Builder wantRequestSigned(final java.lang.Boolean wantRequestSigned) {
            this.props.wantRequestSigned(wantRequestSigned);
            return this;
        }
        /**
         * Property wantRequestSigned: Specifies whether CloudSSO needs to sign SAML requests.
         * <p>
         * The requests are sent when users log on to the CloudSSO user portal to initiate SAML-based SSO. Valid values:
         * <p>
         * <ul>
         * <li>true: yes</li>
         * <li>false: no (default)</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param wantRequestSigned Property wantRequestSigned: Specifies whether CloudSSO needs to sign SAML requests. This parameter is required.
         */
        public Builder wantRequestSigned(final com.aliyun.ros.cdk.core.IResolvable wantRequestSigned) {
            this.props.wantRequestSigned(wantRequestSigned);
            return this;
        }

        /**
         * Property x509Certificate: The X.509 certificate n the PEM format. If you specify this parameter, all existing certificates are replaced.
         * <p>
         * @return {@code this}
         * @param x509Certificate Property x509Certificate: The X.509 certificate n the PEM format. If you specify this parameter, all existing certificates are replaced. This parameter is required.
         */
        public Builder x509Certificate(final java.lang.String x509Certificate) {
            this.props.x509Certificate(x509Certificate);
            return this;
        }
        /**
         * Property x509Certificate: The X.509 certificate n the PEM format. If you specify this parameter, all existing certificates are replaced.
         * <p>
         * @return {@code this}
         * @param x509Certificate Property x509Certificate: The X.509 certificate n the PEM format. If you specify this parameter, all existing certificates are replaced. This parameter is required.
         */
        public Builder x509Certificate(final com.aliyun.ros.cdk.core.IResolvable x509Certificate) {
            this.props.x509Certificate(x509Certificate);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.cloudsso.SAMLIdentityProvider}.
         */
        @Override
        public com.aliyun.ros.cdk.cloudsso.SAMLIdentityProvider build() {
            return new com.aliyun.ros.cdk.cloudsso.SAMLIdentityProvider(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
