package com.aliyun.ros.cdk.esa;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::ESA::Certificate</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-12-10T08:24:56.432Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.esa.$Module.class, fqn = "@alicloud/ros-cdk-esa.Certificate")
public class Certificate extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.esa.ICertificate {

    protected Certificate(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Certificate(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public Certificate(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.esa.CertificateProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public Certificate(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.esa.CertificateProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute ApplyCode: Certificate application error code.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrApplyCode() {
        return software.amazon.jsii.Kernel.get(this, "attrApplyCode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ApplyMessage: Certificate application error message.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrApplyMessage() {
        return software.amazon.jsii.Kernel.get(this, "attrApplyMessage", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute CasId: Cloud certificate ID.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrCasId() {
        return software.amazon.jsii.Kernel.get(this, "attrCasId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute CertId: The certificate Id.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrCertId() {
        return software.amazon.jsii.Kernel.get(this, "attrCertId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Certificate: Certificate content.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrCertificate() {
        return software.amazon.jsii.Kernel.get(this, "attrCertificate", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute CertName: The certificate name.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrCertName() {
        return software.amazon.jsii.Kernel.get(this, "attrCertName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute CommonName: Common Name (CN) field of the certificate.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrCommonName() {
        return software.amazon.jsii.Kernel.get(this, "attrCommonName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute CreateTime: Creation time.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
        return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute DCV: DCV information.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDcv() {
        return software.amazon.jsii.Kernel.get(this, "attrDcv", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Domains: A list of domain names.
     * <p>
     * Multiple domain names are separated by commas.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDomains() {
        return software.amazon.jsii.Kernel.get(this, "attrDomains", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute FingerprintSha256: SHA256 fingerprint of the certificate.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrFingerprintSha256() {
        return software.amazon.jsii.Kernel.get(this, "attrFingerprintSha256", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Issuer: Certificate issuer.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrIssuer() {
        return software.amazon.jsii.Kernel.get(this, "attrIssuer", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute IssuerCN: Common name of the certificate issuer.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrIssuerCn() {
        return software.amazon.jsii.Kernel.get(this, "attrIssuerCn", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute NotAfter: End time of the certificate validity period.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrNotAfter() {
        return software.amazon.jsii.Kernel.get(this, "attrNotAfter", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute NotBefore: Start time of the certificate validity period.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrNotBefore() {
        return software.amazon.jsii.Kernel.get(this, "attrNotBefore", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute PubAlg: Certificate public key algorithm.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrPubAlg() {
        return software.amazon.jsii.Kernel.get(this, "attrPubAlg", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute SerialNumber: Serial number of the certificate.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrSerialNumber() {
        return software.amazon.jsii.Kernel.get(this, "attrSerialNumber", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute SigAlg: Certificate signature algorithm.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrSigAlg() {
        return software.amazon.jsii.Kernel.get(this, "attrSigAlg", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute SiteId: The site ID, which can be obtained by calling the ListSites interface.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrSiteId() {
        return software.amazon.jsii.Kernel.get(this, "attrSiteId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute SiteName: Site name.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrSiteName() {
        return software.amazon.jsii.Kernel.get(this, "attrSiteName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute UpdateTime: Update time.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrUpdateTime() {
        return software.amazon.jsii.Kernel.get(this, "attrUpdateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.esa.CertificateProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.esa.CertificateProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.esa.Certificate}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.esa.Certificate> {
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
        private final com.aliyun.ros.cdk.esa.CertificateProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.esa.CertificateProps.Builder();
        }

        /**
         * Property createdType: The certificate type.
         * <p>
         * <ul>
         * <li>cas (Certificate Center Certificate)</li>
         * <li>upload (custom upload certificate)</li>
         * <li>free( Free certificate).</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param createdType Property createdType: The certificate type. This parameter is required.
         */
        public Builder createdType(final java.lang.String createdType) {
            this.props.createdType(createdType);
            return this;
        }
        /**
         * Property createdType: The certificate type.
         * <p>
         * <ul>
         * <li>cas (Certificate Center Certificate)</li>
         * <li>upload (custom upload certificate)</li>
         * <li>free( Free certificate).</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param createdType Property createdType: The certificate type. This parameter is required.
         */
        public Builder createdType(final com.aliyun.ros.cdk.core.IResolvable createdType) {
            this.props.createdType(createdType);
            return this;
        }

        /**
         * Property domains: A list of domain names.
         * <p>
         * Multiple domain names are separated by commas.
         * <p>
         * @return {@code this}
         * @param domains Property domains: A list of domain names. This parameter is required.
         */
        public Builder domains(final com.aliyun.ros.cdk.core.IResolvable domains) {
            this.props.domains(domains);
            return this;
        }
        /**
         * Property domains: A list of domain names.
         * <p>
         * Multiple domain names are separated by commas.
         * <p>
         * @return {@code this}
         * @param domains Property domains: A list of domain names. This parameter is required.
         */
        public Builder domains(final java.util.List<? extends java.lang.Object> domains) {
            this.props.domains(domains);
            return this;
        }

        /**
         * Property siteId: The site ID, which can be obtained by calling the ListSites interface.
         * <p>
         * @return {@code this}
         * @param siteId Property siteId: The site ID, which can be obtained by calling the ListSites interface. This parameter is required.
         */
        public Builder siteId(final java.lang.Number siteId) {
            this.props.siteId(siteId);
            return this;
        }
        /**
         * Property siteId: The site ID, which can be obtained by calling the ListSites interface.
         * <p>
         * @return {@code this}
         * @param siteId Property siteId: The site ID, which can be obtained by calling the ListSites interface. This parameter is required.
         */
        public Builder siteId(final com.aliyun.ros.cdk.core.IResolvable siteId) {
            this.props.siteId(siteId);
            return this;
        }

        /**
         * Property casId: Cloud certificate ID.
         * <p>
         * @return {@code this}
         * @param casId Property casId: Cloud certificate ID. This parameter is required.
         */
        public Builder casId(final java.lang.String casId) {
            this.props.casId(casId);
            return this;
        }
        /**
         * Property casId: Cloud certificate ID.
         * <p>
         * @return {@code this}
         * @param casId Property casId: Cloud certificate ID. This parameter is required.
         */
        public Builder casId(final com.aliyun.ros.cdk.core.IResolvable casId) {
            this.props.casId(casId);
            return this;
        }

        /**
         * Property certId: The certificate Id.
         * <p>
         * @return {@code this}
         * @param certId Property certId: The certificate Id. This parameter is required.
         */
        public Builder certId(final java.lang.String certId) {
            this.props.certId(certId);
            return this;
        }
        /**
         * Property certId: The certificate Id.
         * <p>
         * @return {@code this}
         * @param certId Property certId: The certificate Id. This parameter is required.
         */
        public Builder certId(final com.aliyun.ros.cdk.core.IResolvable certId) {
            this.props.certId(certId);
            return this;
        }

        /**
         * Property certificate: Certificate content.
         * <p>
         * @return {@code this}
         * @param certificate Property certificate: Certificate content. This parameter is required.
         */
        public Builder certificate(final java.lang.String certificate) {
            this.props.certificate(certificate);
            return this;
        }
        /**
         * Property certificate: Certificate content.
         * <p>
         * @return {@code this}
         * @param certificate Property certificate: Certificate content. This parameter is required.
         */
        public Builder certificate(final com.aliyun.ros.cdk.core.IResolvable certificate) {
            this.props.certificate(certificate);
            return this;
        }

        /**
         * Property certName: The certificate name.
         * <p>
         * @return {@code this}
         * @param certName Property certName: The certificate name. This parameter is required.
         */
        public Builder certName(final java.lang.String certName) {
            this.props.certName(certName);
            return this;
        }
        /**
         * Property certName: The certificate name.
         * <p>
         * @return {@code this}
         * @param certName Property certName: The certificate name. This parameter is required.
         */
        public Builder certName(final com.aliyun.ros.cdk.core.IResolvable certName) {
            this.props.certName(certName);
            return this;
        }

        /**
         * Property privateKey: The certificate private key.
         * <p>
         * @return {@code this}
         * @param privateKey Property privateKey: The certificate private key. This parameter is required.
         */
        public Builder privateKey(final java.lang.String privateKey) {
            this.props.privateKey(privateKey);
            return this;
        }
        /**
         * Property privateKey: The certificate private key.
         * <p>
         * @return {@code this}
         * @param privateKey Property privateKey: The certificate private key. This parameter is required.
         */
        public Builder privateKey(final com.aliyun.ros.cdk.core.IResolvable privateKey) {
            this.props.privateKey(privateKey);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.esa.Certificate}.
         */
        @Override
        public com.aliyun.ros.cdk.esa.Certificate build() {
            return new com.aliyun.ros.cdk.esa.Certificate(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
