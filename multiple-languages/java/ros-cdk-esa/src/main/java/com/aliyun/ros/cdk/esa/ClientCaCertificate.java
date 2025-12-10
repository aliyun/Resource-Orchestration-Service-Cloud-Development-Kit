package com.aliyun.ros.cdk.esa;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::ESA::ClientCaCertificate</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-12-10T08:24:56.435Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.esa.$Module.class, fqn = "@alicloud/ros-cdk-esa.ClientCaCertificate")
public class ClientCaCertificate extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.esa.IClientCaCertificate {

    protected ClientCaCertificate(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected ClientCaCertificate(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public ClientCaCertificate(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.esa.ClientCaCertificateProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public ClientCaCertificate(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.esa.ClientCaCertificateProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute Certificate: Certificate content.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrCertificate() {
        return software.amazon.jsii.Kernel.get(this, "attrCertificate", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ClientCaCertId: ClientCaCertificate Id.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrClientCaCertId() {
        return software.amazon.jsii.Kernel.get(this, "attrClientCaCertId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ClientCaCertName: The certificate name.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrClientCaCertName() {
        return software.amazon.jsii.Kernel.get(this, "attrClientCaCertName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute CommonName: The certificate common name.
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
     * Attribute Issuer: Certificate Authority.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrIssuer() {
        return software.amazon.jsii.Kernel.get(this, "attrIssuer", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute NotAfter: The expiration date of the certificate validity period.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrNotAfter() {
        return software.amazon.jsii.Kernel.get(this, "attrNotAfter", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute NotBefore: The start time of the certificate validity period.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrNotBefore() {
        return software.amazon.jsii.Kernel.get(this, "attrNotBefore", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute PubkeyAlgorithm: Certificate public key algorithm.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrPubkeyAlgorithm() {
        return software.amazon.jsii.Kernel.get(this, "attrPubkeyAlgorithm", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute SAN: Alternate certificate subject name.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrSan() {
        return software.amazon.jsii.Kernel.get(this, "attrSan", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute SignatureAlgorithm: Certificate signature algorithm.
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
     * Attribute UpdateTime: Update time.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrUpdateTime() {
        return software.amazon.jsii.Kernel.get(this, "attrUpdateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.esa.ClientCaCertificateProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.esa.ClientCaCertificateProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.esa.ClientCaCertificate}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.esa.ClientCaCertificate> {
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
        private final com.aliyun.ros.cdk.esa.ClientCaCertificateProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.esa.ClientCaCertificateProps.Builder();
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
         * Property clientCaCertName: The certificate name.
         * <p>
         * @return {@code this}
         * @param clientCaCertName Property clientCaCertName: The certificate name. This parameter is required.
         */
        public Builder clientCaCertName(final java.lang.String clientCaCertName) {
            this.props.clientCaCertName(clientCaCertName);
            return this;
        }
        /**
         * Property clientCaCertName: The certificate name.
         * <p>
         * @return {@code this}
         * @param clientCaCertName Property clientCaCertName: The certificate name. This parameter is required.
         */
        public Builder clientCaCertName(final com.aliyun.ros.cdk.core.IResolvable clientCaCertName) {
            this.props.clientCaCertName(clientCaCertName);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.esa.ClientCaCertificate}.
         */
        @Override
        public com.aliyun.ros.cdk.esa.ClientCaCertificate build() {
            return new com.aliyun.ros.cdk.esa.ClientCaCertificate(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
