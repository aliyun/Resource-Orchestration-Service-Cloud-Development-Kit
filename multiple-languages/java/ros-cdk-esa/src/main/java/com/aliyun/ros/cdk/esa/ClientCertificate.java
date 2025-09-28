package com.aliyun.ros.cdk.esa;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::ESA::ClientCertificate</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-09-28T10:11:25.383Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.esa.$Module.class, fqn = "@alicloud/ros-cdk-esa.ClientCertificate")
public class ClientCertificate extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.esa.IClientCertificate {

    protected ClientCertificate(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected ClientCertificate(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public ClientCertificate(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.esa.ClientCertificateProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public ClientCertificate(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.esa.ClientCertificateProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute CACertificateId: The ID of the CA certificate.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrCaCertificateId() {
        return software.amazon.jsii.Kernel.get(this, "attrCaCertificateId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Certificate: Certificate content.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrCertificate() {
        return software.amazon.jsii.Kernel.get(this, "attrCertificate", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ClientCertId: ClientCertificate Id.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrClientCertId() {
        return software.amazon.jsii.Kernel.get(this, "attrClientCertId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ClientCertificateName: The certificate name.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrClientCertificateName() {
        return software.amazon.jsii.Kernel.get(this, "attrClientCertificateName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute CommonName: The Common Name of the certificate.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrCommonName() {
        return software.amazon.jsii.Kernel.get(this, "attrCommonName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute CreateTime: The time when the certificate was created.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
        return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Issuer: The certificate authority (CA) that issued the certificate.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrIssuer() {
        return software.amazon.jsii.Kernel.get(this, "attrIssuer", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute NotAfter: The time when the certificate expires.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrNotAfter() {
        return software.amazon.jsii.Kernel.get(this, "attrNotAfter", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute NotBefore: The time when the certificate takes effect.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrNotBefore() {
        return software.amazon.jsii.Kernel.get(this, "attrNotBefore", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute PubkeyAlgorithm: The public-key algorithm of the certificate.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrPubkeyAlgorithm() {
        return software.amazon.jsii.Kernel.get(this, "attrPubkeyAlgorithm", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute SAN: The Subject Alternative Name (SAN) of the certificate.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrSan() {
        return software.amazon.jsii.Kernel.get(this, "attrSan", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute SignatureAlgorithm: The signature algorithm of the certificate.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrSignatureAlgorithm() {
        return software.amazon.jsii.Kernel.get(this, "attrSignatureAlgorithm", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute SiteId: Site Id.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrSiteId() {
        return software.amazon.jsii.Kernel.get(this, "attrSiteId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute SiteName: The website name.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrSiteName() {
        return software.amazon.jsii.Kernel.get(this, "attrSiteName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Type: The certificate type.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrType() {
        return software.amazon.jsii.Kernel.get(this, "attrType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute UpdateTime: The time when the certificate was updated.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrUpdateTime() {
        return software.amazon.jsii.Kernel.get(this, "attrUpdateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.esa.ClientCertificateProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.esa.ClientCertificateProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.esa.ClientCertificate}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.esa.ClientCertificate> {
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
        private final com.aliyun.ros.cdk.esa.ClientCertificateProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.esa.ClientCertificateProps.Builder();
        }

        /**
         * Property siteId: Site Id.
         * <p>
         * @return {@code this}
         * @param siteId Property siteId: Site Id. This parameter is required.
         */
        public Builder siteId(final java.lang.Number siteId) {
            this.props.siteId(siteId);
            return this;
        }
        /**
         * Property siteId: Site Id.
         * <p>
         * @return {@code this}
         * @param siteId Property siteId: Site Id. This parameter is required.
         */
        public Builder siteId(final com.aliyun.ros.cdk.core.IResolvable siteId) {
            this.props.siteId(siteId);
            return this;
        }

        /**
         * Property validityDays: Certificate validity period.
         * <p>
         * @return {@code this}
         * @param validityDays Property validityDays: Certificate validity period. This parameter is required.
         */
        public Builder validityDays(final java.lang.Number validityDays) {
            this.props.validityDays(validityDays);
            return this;
        }
        /**
         * Property validityDays: Certificate validity period.
         * <p>
         * @return {@code this}
         * @param validityDays Property validityDays: Certificate validity period. This parameter is required.
         */
        public Builder validityDays(final com.aliyun.ros.cdk.core.IResolvable validityDays) {
            this.props.validityDays(validityDays);
            return this;
        }

        /**
         * Property csr: Certificate signing request content.
         * <p>
         * @return {@code this}
         * @param csr Property csr: Certificate signing request content. This parameter is required.
         */
        public Builder csr(final java.lang.String csr) {
            this.props.csr(csr);
            return this;
        }
        /**
         * Property csr: Certificate signing request content.
         * <p>
         * @return {@code this}
         * @param csr Property csr: Certificate signing request content. This parameter is required.
         */
        public Builder csr(final com.aliyun.ros.cdk.core.IResolvable csr) {
            this.props.csr(csr);
            return this;
        }

        /**
         * Property pkeyType: The private key algorithm type.
         * <p>
         * @return {@code this}
         * @param pkeyType Property pkeyType: The private key algorithm type. This parameter is required.
         */
        public Builder pkeyType(final java.lang.String pkeyType) {
            this.props.pkeyType(pkeyType);
            return this;
        }
        /**
         * Property pkeyType: The private key algorithm type.
         * <p>
         * @return {@code this}
         * @param pkeyType Property pkeyType: The private key algorithm type. This parameter is required.
         */
        public Builder pkeyType(final com.aliyun.ros.cdk.core.IResolvable pkeyType) {
            this.props.pkeyType(pkeyType);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.esa.ClientCertificate}.
         */
        @Override
        public com.aliyun.ros.cdk.esa.ClientCertificate build() {
            return new com.aliyun.ros.cdk.esa.ClientCertificate(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
