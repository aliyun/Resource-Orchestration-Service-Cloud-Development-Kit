package com.aliyun.ros.cdk.esa;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::ESA::OriginClientCertificate</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-04-07T05:57:26.106Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.esa.$Module.class, fqn = "@alicloud/ros-cdk-esa.OriginClientCertificate")
public class OriginClientCertificate extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.esa.IOriginClientCertificate {

    protected OriginClientCertificate(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected OriginClientCertificate(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public OriginClientCertificate(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.esa.OriginClientCertificateProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public OriginClientCertificate(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.esa.OriginClientCertificateProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute Certificate: The certificate content.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrCertificate() {
        return software.amazon.jsii.Kernel.get(this, "attrCertificate", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
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
     * Attribute FingerprintSha256: The SHA-256 fingerprint of the certificate.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrFingerprintSha256() {
        return software.amazon.jsii.Kernel.get(this, "attrFingerprintSha256", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Hostnames: The domain names to associate.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrHostnames() {
        return software.amazon.jsii.Kernel.get(this, "attrHostnames", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
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
     * Attribute OriginClientCertificateId: The certificate ID.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrOriginClientCertificateId() {
        return software.amazon.jsii.Kernel.get(this, "attrOriginClientCertificateId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute OriginClientCertificateName: The certificate name.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrOriginClientCertificateName() {
        return software.amazon.jsii.Kernel.get(this, "attrOriginClientCertificateName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
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
     * Attribute SerialNumber: The serial number of the certificate.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrSerialNumber() {
        return software.amazon.jsii.Kernel.get(this, "attrSerialNumber", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute SignatureAlgorithm: The signature algorithm of the certificate.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrSignatureAlgorithm() {
        return software.amazon.jsii.Kernel.get(this, "attrSignatureAlgorithm", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute SiteId: The website ID.
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.esa.OriginClientCertificateProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.esa.OriginClientCertificateProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.esa.OriginClientCertificate}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.esa.OriginClientCertificate> {
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
        private final com.aliyun.ros.cdk.esa.OriginClientCertificateProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.esa.OriginClientCertificateProps.Builder();
        }

        /**
         * Property certificate: The certificate content.
         * <p>
         * @return {@code this}
         * @param certificate Property certificate: The certificate content. This parameter is required.
         */
        public Builder certificate(final java.lang.String certificate) {
            this.props.certificate(certificate);
            return this;
        }
        /**
         * Property certificate: The certificate content.
         * <p>
         * @return {@code this}
         * @param certificate Property certificate: The certificate content. This parameter is required.
         */
        public Builder certificate(final com.aliyun.ros.cdk.core.IResolvable certificate) {
            this.props.certificate(certificate);
            return this;
        }

        /**
         * Property privateKey: The private key of the certificate.
         * <p>
         * @return {@code this}
         * @param privateKey Property privateKey: The private key of the certificate. This parameter is required.
         */
        public Builder privateKey(final java.lang.String privateKey) {
            this.props.privateKey(privateKey);
            return this;
        }
        /**
         * Property privateKey: The private key of the certificate.
         * <p>
         * @return {@code this}
         * @param privateKey Property privateKey: The private key of the certificate. This parameter is required.
         */
        public Builder privateKey(final com.aliyun.ros.cdk.core.IResolvable privateKey) {
            this.props.privateKey(privateKey);
            return this;
        }

        /**
         * Property siteId: The website ID.
         * <p>
         * @return {@code this}
         * @param siteId Property siteId: The website ID. This parameter is required.
         */
        public Builder siteId(final java.lang.Number siteId) {
            this.props.siteId(siteId);
            return this;
        }
        /**
         * Property siteId: The website ID.
         * <p>
         * @return {@code this}
         * @param siteId Property siteId: The website ID. This parameter is required.
         */
        public Builder siteId(final com.aliyun.ros.cdk.core.IResolvable siteId) {
            this.props.siteId(siteId);
            return this;
        }

        /**
         * Property hostnames: The domain names to associate.
         * <p>
         * @return {@code this}
         * @param hostnames Property hostnames: The domain names to associate. This parameter is required.
         */
        public Builder hostnames(final com.aliyun.ros.cdk.core.IResolvable hostnames) {
            this.props.hostnames(hostnames);
            return this;
        }
        /**
         * Property hostnames: The domain names to associate.
         * <p>
         * @return {@code this}
         * @param hostnames Property hostnames: The domain names to associate. This parameter is required.
         */
        public Builder hostnames(final java.util.List<? extends java.lang.Object> hostnames) {
            this.props.hostnames(hostnames);
            return this;
        }

        /**
         * Property originClientCertificateName: The certificate name.
         * <p>
         * @return {@code this}
         * @param originClientCertificateName Property originClientCertificateName: The certificate name. This parameter is required.
         */
        public Builder originClientCertificateName(final java.lang.String originClientCertificateName) {
            this.props.originClientCertificateName(originClientCertificateName);
            return this;
        }
        /**
         * Property originClientCertificateName: The certificate name.
         * <p>
         * @return {@code this}
         * @param originClientCertificateName Property originClientCertificateName: The certificate name. This parameter is required.
         */
        public Builder originClientCertificateName(final com.aliyun.ros.cdk.core.IResolvable originClientCertificateName) {
            this.props.originClientCertificateName(originClientCertificateName);
            return this;
        }

        /**
         * Property validityDays: The validity period of the certificate.
         * <p>
         * Unit: day.
         * <p>
         * @return {@code this}
         * @param validityDays Property validityDays: The validity period of the certificate. This parameter is required.
         */
        public Builder validityDays(final java.lang.Number validityDays) {
            this.props.validityDays(validityDays);
            return this;
        }
        /**
         * Property validityDays: The validity period of the certificate.
         * <p>
         * Unit: day.
         * <p>
         * @return {@code this}
         * @param validityDays Property validityDays: The validity period of the certificate. This parameter is required.
         */
        public Builder validityDays(final com.aliyun.ros.cdk.core.IResolvable validityDays) {
            this.props.validityDays(validityDays);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.esa.OriginClientCertificate}.
         */
        @Override
        public com.aliyun.ros.cdk.esa.OriginClientCertificate build() {
            return new com.aliyun.ros.cdk.esa.OriginClientCertificate(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
