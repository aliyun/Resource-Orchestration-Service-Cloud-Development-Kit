package com.aliyun.ros.cdk.cas;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::CAS::UserCertificate</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-06-09T10:39:53.107Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cas.$Module.class, fqn = "@alicloud/ros-cdk-cas.UserCertificate")
public class UserCertificate extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.cas.IUserCertificate {

    protected UserCertificate(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected UserCertificate(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props
     * @param enableResourcePropertyConstraint
     */
    public UserCertificate(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.cas.UserCertificateProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), props, enableResourcePropertyConstraint });
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props
     */
    public UserCertificate(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.cas.UserCertificateProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), props });
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     */
    public UserCertificate(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required") });
    }

    /**
     * Attribute Cert: The certificate content in PEM format.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrCert() {
        return software.amazon.jsii.Kernel.get(this, "attrCert", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute CertId: Certificate ID.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrCertId() {
        return software.amazon.jsii.Kernel.get(this, "attrCertId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute CertificateName: Custom certificate name.
     * <p>
     * Maximum supported character length:128. All character types are supported, including letters, numbers and underscores.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrCertificateName() {
        return software.amazon.jsii.Kernel.get(this, "attrCertificateName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute EncryptCert: The content of the encryption certificate in PEM format.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrEncryptCert() {
        return software.amazon.jsii.Kernel.get(this, "attrEncryptCert", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute EncryptPrivateKey: The private key content of the encryption certificate in PEM format.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrEncryptPrivateKey() {
        return software.amazon.jsii.Kernel.get(this, "attrEncryptPrivateKey", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Key: The private key content of the certificate in PEM format.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrKey() {
        return software.amazon.jsii.Kernel.get(this, "attrKey", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ResourceGroupId: The ID of the resource group.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceGroupId() {
        return software.amazon.jsii.Kernel.get(this, "attrResourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute SignCert: The signature certificate content in PEM format.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrSignCert() {
        return software.amazon.jsii.Kernel.get(this, "attrSignCert", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute SignPrivateKey: The private key content of the signature certificate in PEM format.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrSignPrivateKey() {
        return software.amazon.jsii.Kernel.get(this, "attrSignPrivateKey", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Tags: The tag of the resource.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrTags() {
        return software.amazon.jsii.Kernel.get(this, "attrTags", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cas.UserCertificateProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.cas.UserCertificateProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.cas.UserCertificate}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.cas.UserCertificate> {
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
        private com.aliyun.ros.cdk.cas.UserCertificateProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        }

        /**
         * Property cert: The certificate content in PEM format.
         * <p>
         * @return {@code this}
         * @param cert Property cert: The certificate content in PEM format. This parameter is required.
         */
        public Builder cert(final java.lang.String cert) {
            this.props().cert(cert);
            return this;
        }
        /**
         * Property cert: The certificate content in PEM format.
         * <p>
         * @return {@code this}
         * @param cert Property cert: The certificate content in PEM format. This parameter is required.
         */
        public Builder cert(final com.aliyun.ros.cdk.core.IResolvable cert) {
            this.props().cert(cert);
            return this;
        }

        /**
         * Property certificateName: Custom certificate name.
         * <p>
         * Maximum supported character length:128. All character types are supported, including letters, numbers and underscores.
         * The certificate name under the same user cannot be duplicated.
         * <p>
         * @return {@code this}
         * @param certificateName Property certificateName: Custom certificate name. This parameter is required.
         */
        public Builder certificateName(final java.lang.String certificateName) {
            this.props().certificateName(certificateName);
            return this;
        }
        /**
         * Property certificateName: Custom certificate name.
         * <p>
         * Maximum supported character length:128. All character types are supported, including letters, numbers and underscores.
         * The certificate name under the same user cannot be duplicated.
         * <p>
         * @return {@code this}
         * @param certificateName Property certificateName: Custom certificate name. This parameter is required.
         */
        public Builder certificateName(final com.aliyun.ros.cdk.core.IResolvable certificateName) {
            this.props().certificateName(certificateName);
            return this;
        }

        /**
         * Property encryptCert: The content of the encryption certificate in PEM format.
         * <p>
         * @return {@code this}
         * @param encryptCert Property encryptCert: The content of the encryption certificate in PEM format. This parameter is required.
         */
        public Builder encryptCert(final java.lang.String encryptCert) {
            this.props().encryptCert(encryptCert);
            return this;
        }
        /**
         * Property encryptCert: The content of the encryption certificate in PEM format.
         * <p>
         * @return {@code this}
         * @param encryptCert Property encryptCert: The content of the encryption certificate in PEM format. This parameter is required.
         */
        public Builder encryptCert(final com.aliyun.ros.cdk.core.IResolvable encryptCert) {
            this.props().encryptCert(encryptCert);
            return this;
        }

        /**
         * Property encryptPrivateKey: The private key content of the encryption certificate in PEM format.
         * <p>
         * @return {@code this}
         * @param encryptPrivateKey Property encryptPrivateKey: The private key content of the encryption certificate in PEM format. This parameter is required.
         */
        public Builder encryptPrivateKey(final java.lang.String encryptPrivateKey) {
            this.props().encryptPrivateKey(encryptPrivateKey);
            return this;
        }
        /**
         * Property encryptPrivateKey: The private key content of the encryption certificate in PEM format.
         * <p>
         * @return {@code this}
         * @param encryptPrivateKey Property encryptPrivateKey: The private key content of the encryption certificate in PEM format. This parameter is required.
         */
        public Builder encryptPrivateKey(final com.aliyun.ros.cdk.core.IResolvable encryptPrivateKey) {
            this.props().encryptPrivateKey(encryptPrivateKey);
            return this;
        }

        /**
         * Property key: The private key content of the certificate in PEM format.
         * <p>
         * @return {@code this}
         * @param key Property key: The private key content of the certificate in PEM format. This parameter is required.
         */
        public Builder key(final java.lang.String key) {
            this.props().key(key);
            return this;
        }
        /**
         * Property key: The private key content of the certificate in PEM format.
         * <p>
         * @return {@code this}
         * @param key Property key: The private key content of the certificate in PEM format. This parameter is required.
         */
        public Builder key(final com.aliyun.ros.cdk.core.IResolvable key) {
            this.props().key(key);
            return this;
        }

        /**
         * Property resourceGroupId: The ID of the resource group.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group. This parameter is required.
         */
        public Builder resourceGroupId(final java.lang.String resourceGroupId) {
            this.props().resourceGroupId(resourceGroupId);
            return this;
        }
        /**
         * Property resourceGroupId: The ID of the resource group.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group. This parameter is required.
         */
        public Builder resourceGroupId(final com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.props().resourceGroupId(resourceGroupId);
            return this;
        }

        /**
         * Property resourceId: Resource ID.
         * <p>
         * @return {@code this}
         * @param resourceId Property resourceId: Resource ID. This parameter is required.
         */
        public Builder resourceId(final java.lang.String resourceId) {
            this.props().resourceId(resourceId);
            return this;
        }
        /**
         * Property resourceId: Resource ID.
         * <p>
         * @return {@code this}
         * @param resourceId Property resourceId: Resource ID. This parameter is required.
         */
        public Builder resourceId(final com.aliyun.ros.cdk.core.IResolvable resourceId) {
            this.props().resourceId(resourceId);
            return this;
        }

        /**
         * Property signCert: The signature certificate content in PEM format.
         * <p>
         * @return {@code this}
         * @param signCert Property signCert: The signature certificate content in PEM format. This parameter is required.
         */
        public Builder signCert(final java.lang.String signCert) {
            this.props().signCert(signCert);
            return this;
        }
        /**
         * Property signCert: The signature certificate content in PEM format.
         * <p>
         * @return {@code this}
         * @param signCert Property signCert: The signature certificate content in PEM format. This parameter is required.
         */
        public Builder signCert(final com.aliyun.ros.cdk.core.IResolvable signCert) {
            this.props().signCert(signCert);
            return this;
        }

        /**
         * Property signPrivateKey: The private key content of the signature certificate in PEM format.
         * <p>
         * @return {@code this}
         * @param signPrivateKey Property signPrivateKey: The private key content of the signature certificate in PEM format. This parameter is required.
         */
        public Builder signPrivateKey(final java.lang.String signPrivateKey) {
            this.props().signPrivateKey(signPrivateKey);
            return this;
        }
        /**
         * Property signPrivateKey: The private key content of the signature certificate in PEM format.
         * <p>
         * @return {@code this}
         * @param signPrivateKey Property signPrivateKey: The private key content of the signature certificate in PEM format. This parameter is required.
         */
        public Builder signPrivateKey(final com.aliyun.ros.cdk.core.IResolvable signPrivateKey) {
            this.props().signPrivateKey(signPrivateKey);
            return this;
        }

        /**
         * Property tags: Tags of certificate.
         * <p>
         * @return {@code this}
         * @param tags Property tags: Tags of certificate. This parameter is required.
         */
        public Builder tags(final java.util.List<? extends com.aliyun.ros.cdk.cas.RosUserCertificate.TagsProperty> tags) {
            this.props().tags(tags);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.cas.UserCertificate}.
         */
        @Override
        public com.aliyun.ros.cdk.cas.UserCertificate build() {
            return new com.aliyun.ros.cdk.cas.UserCertificate(
                this.scope,
                this.id,
                this.props != null ? this.props.build() : null,
                this.enableResourcePropertyConstraint
            );
        }

        private com.aliyun.ros.cdk.cas.UserCertificateProps.Builder props() {
            if (this.props == null) {
                this.props = new com.aliyun.ros.cdk.cas.UserCertificateProps.Builder();
            }
            return this.props;
        }
    }
}
