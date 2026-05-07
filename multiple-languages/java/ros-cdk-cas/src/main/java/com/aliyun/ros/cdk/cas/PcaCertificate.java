package com.aliyun.ros.cdk.cas;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::CAS::PcaCertificate</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-05-07T04:16:46.094Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cas.$Module.class, fqn = "@alicloud/ros-cdk-cas.PcaCertificate")
public class PcaCertificate extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.cas.IPcaCertificate {

    protected PcaCertificate(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected PcaCertificate(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public PcaCertificate(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cas.PcaCertificateProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public PcaCertificate(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cas.PcaCertificateProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute Algorithm: The key algorithm type of the root CA certificate.
     * <p>
     * The key algorithm is expressed using the '<encryption algorithm >_&lt; key length&gt;' format.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrAlgorithm() {
        return software.amazon.jsii.Kernel.get(this, "attrAlgorithm", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute CertificateType: The type of CA.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrCertificateType() {
        return software.amazon.jsii.Kernel.get(this, "attrCertificateType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute CommonName: The common name or abbreviation of the organization.
     * <p>
     * Support the use of Chinese, English characters.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrCommonName() {
        return software.amazon.jsii.Kernel.get(this, "attrCommonName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute CountryCode: The code of the country or region in which the organization is located, using a two-digit capital abbreviation.
     * <p>
     * For example, <strong>CN</strong> represents China and <strong>US</strong> represents the United States.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrCountryCode() {
        return software.amazon.jsii.Kernel.get(this, "attrCountryCode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Identifier: Certificate Identifier.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrIdentifier() {
        return software.amazon.jsii.Kernel.get(this, "attrIdentifier", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute IssuerType: The institution issuing the CA.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrIssuerType() {
        return software.amazon.jsii.Kernel.get(this, "attrIssuerType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Locality: Name of the city where the organization is located.
     * <p>
     * Support the use of Chinese, English characters.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrLocality() {
        return software.amazon.jsii.Kernel.get(this, "attrLocality", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Organization: The name of the organization (corresponding to your enterprise or company) associated with the root CA certificate.
     * <p>
     * Support the use of Chinese, English characters.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrOrganization() {
        return software.amazon.jsii.Kernel.get(this, "attrOrganization", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute OrganizationUnit: The name of the department or branch under the organization.
     * <p>
     * Support the use of Chinese, English characters.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrOrganizationUnit() {
        return software.amazon.jsii.Kernel.get(this, "attrOrganizationUnit", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute State: &lt;props = "china"&gt; The name of the province, municipality, or autonomous region in which the organization is located.
     * <p>
     * Support the use of Chinese, English characters.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrState() {
        return software.amazon.jsii.Kernel.get(this, "attrState", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Years: The validity period of the root CA certificate, in years.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrYears() {
        return software.amazon.jsii.Kernel.get(this, "attrYears", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cas.PcaCertificateProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.cas.PcaCertificateProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.cas.PcaCertificate}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.cas.PcaCertificate> {
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
        private final com.aliyun.ros.cdk.cas.PcaCertificateProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.cas.PcaCertificateProps.Builder();
        }

        /**
         * Property commonName: The common name or abbreviation of the organization.
         * <p>
         * Support the use of Chinese, English characters.
         * <p>
         * @return {@code this}
         * @param commonName Property commonName: The common name or abbreviation of the organization. This parameter is required.
         */
        public Builder commonName(final java.lang.String commonName) {
            this.props.commonName(commonName);
            return this;
        }
        /**
         * Property commonName: The common name or abbreviation of the organization.
         * <p>
         * Support the use of Chinese, English characters.
         * <p>
         * @return {@code this}
         * @param commonName Property commonName: The common name or abbreviation of the organization. This parameter is required.
         */
        public Builder commonName(final com.aliyun.ros.cdk.core.IResolvable commonName) {
            this.props.commonName(commonName);
            return this;
        }

        /**
         * Property locality: Name of the city where the organization is located.
         * <p>
         * Support the use of Chinese, English characters.
         * <p>
         * @return {@code this}
         * @param locality Property locality: Name of the city where the organization is located. This parameter is required.
         */
        public Builder locality(final java.lang.String locality) {
            this.props.locality(locality);
            return this;
        }
        /**
         * Property locality: Name of the city where the organization is located.
         * <p>
         * Support the use of Chinese, English characters.
         * <p>
         * @return {@code this}
         * @param locality Property locality: Name of the city where the organization is located. This parameter is required.
         */
        public Builder locality(final com.aliyun.ros.cdk.core.IResolvable locality) {
            this.props.locality(locality);
            return this;
        }

        /**
         * Property organization: The name of the organization (corresponding to your enterprise or company) associated with the root CA certificate.
         * <p>
         * Support the use of Chinese, English characters.
         * <p>
         * @return {@code this}
         * @param organization Property organization: The name of the organization (corresponding to your enterprise or company) associated with the root CA certificate. This parameter is required.
         */
        public Builder organization(final java.lang.String organization) {
            this.props.organization(organization);
            return this;
        }
        /**
         * Property organization: The name of the organization (corresponding to your enterprise or company) associated with the root CA certificate.
         * <p>
         * Support the use of Chinese, English characters.
         * <p>
         * @return {@code this}
         * @param organization Property organization: The name of the organization (corresponding to your enterprise or company) associated with the root CA certificate. This parameter is required.
         */
        public Builder organization(final com.aliyun.ros.cdk.core.IResolvable organization) {
            this.props.organization(organization);
            return this;
        }

        /**
         * Property organizationUnit: The name of the department or branch under the organization.
         * <p>
         * Support the use of Chinese, English characters.
         * <p>
         * @return {@code this}
         * @param organizationUnit Property organizationUnit: The name of the department or branch under the organization. This parameter is required.
         */
        public Builder organizationUnit(final java.lang.String organizationUnit) {
            this.props.organizationUnit(organizationUnit);
            return this;
        }
        /**
         * Property organizationUnit: The name of the department or branch under the organization.
         * <p>
         * Support the use of Chinese, English characters.
         * <p>
         * @return {@code this}
         * @param organizationUnit Property organizationUnit: The name of the department or branch under the organization. This parameter is required.
         */
        public Builder organizationUnit(final com.aliyun.ros.cdk.core.IResolvable organizationUnit) {
            this.props.organizationUnit(organizationUnit);
            return this;
        }

        /**
         * Property state: &lt;props = "china"&gt; The name of the province, municipality, or autonomous region in which the organization is located.
         * <p>
         * Support the use of Chinese, English characters. </props>
         * &lt;props = "intl"&gt; Name of the province or state where the organization is located. Support the use of Chinese, English characters. </props>.
         * <p>
         * @return {@code this}
         * @param state Property state: &lt;props = "china"&gt; The name of the province, municipality, or autonomous region in which the organization is located. This parameter is required.
         */
        public Builder state(final java.lang.String state) {
            this.props.state(state);
            return this;
        }
        /**
         * Property state: &lt;props = "china"&gt; The name of the province, municipality, or autonomous region in which the organization is located.
         * <p>
         * Support the use of Chinese, English characters. </props>
         * &lt;props = "intl"&gt; Name of the province or state where the organization is located. Support the use of Chinese, English characters. </props>.
         * <p>
         * @return {@code this}
         * @param state Property state: &lt;props = "china"&gt; The name of the province, municipality, or autonomous region in which the organization is located. This parameter is required.
         */
        public Builder state(final com.aliyun.ros.cdk.core.IResolvable state) {
            this.props.state(state);
            return this;
        }

        /**
         * Property years: The validity period of the root CA certificate, in years.
         * <p>
         * <blockquote>
         * <p>
         * It is recommended to set to 5~10 years.
         * <p>
         * </blockquote>
         * <p>
         * @return {@code this}
         * @param years Property years: The validity period of the root CA certificate, in years. This parameter is required.
         */
        public Builder years(final java.lang.Number years) {
            this.props.years(years);
            return this;
        }
        /**
         * Property years: The validity period of the root CA certificate, in years.
         * <p>
         * <blockquote>
         * <p>
         * It is recommended to set to 5~10 years.
         * <p>
         * </blockquote>
         * <p>
         * @return {@code this}
         * @param years Property years: The validity period of the root CA certificate, in years. This parameter is required.
         */
        public Builder years(final com.aliyun.ros.cdk.core.IResolvable years) {
            this.props.years(years);
            return this;
        }

        /**
         * Property algorithm: The key algorithm type of the root CA certificate.
         * <p>
         * The key algorithm is expressed using the '<encryption algorithm >_&lt; key length&gt;' format. Value:
         * <p>
         * <ul>
         * <li><strong>RSA_1024</strong>: The corresponding signature algorithm is Sha256WithRSA.</li>
         * <li><strong>RSA_2048</strong>: The corresponding signature algorithm is Sha256WithRSA.</li>
         * <li><strong>RSA_4096</strong>: The corresponding signature algorithm is Sha256WithRSA.</li>
         * <li><strong>ECC_256</strong>: The signature algorithm is Sha256WithECDSA.</li>
         * <li><strong>ECC_384</strong>: The corresponding signature algorithm is Sha256WithECDSA.</li>
         * <li><strong>ECC_512</strong>: The signature algorithm is Sha256WithECDSA.</li>
         * <li><strong>SM2_256</strong>: The corresponding signature algorithm is SM3WithSM2.</li>
         * </ul>
         * <p>
         * The encryption algorithm of the root CA certificate must be the same as the <strong>certificate algorithm</strong> of the private Root CA you purchased. Example: If the <strong>certificate algorithm</strong> selected when you purchase a private Root CA is <strong>RSA</strong>, the key algorithm of the root CA certificate must be <strong>RSA_1024</strong>, <strong>RSA_2048</strong>, or <strong>RSA_4096</strong>.
         * <p>
         * @return {@code this}
         * @param algorithm Property algorithm: The key algorithm type of the root CA certificate. This parameter is required.
         */
        public Builder algorithm(final java.lang.String algorithm) {
            this.props.algorithm(algorithm);
            return this;
        }
        /**
         * Property algorithm: The key algorithm type of the root CA certificate.
         * <p>
         * The key algorithm is expressed using the '<encryption algorithm >_&lt; key length&gt;' format. Value:
         * <p>
         * <ul>
         * <li><strong>RSA_1024</strong>: The corresponding signature algorithm is Sha256WithRSA.</li>
         * <li><strong>RSA_2048</strong>: The corresponding signature algorithm is Sha256WithRSA.</li>
         * <li><strong>RSA_4096</strong>: The corresponding signature algorithm is Sha256WithRSA.</li>
         * <li><strong>ECC_256</strong>: The signature algorithm is Sha256WithECDSA.</li>
         * <li><strong>ECC_384</strong>: The corresponding signature algorithm is Sha256WithECDSA.</li>
         * <li><strong>ECC_512</strong>: The signature algorithm is Sha256WithECDSA.</li>
         * <li><strong>SM2_256</strong>: The corresponding signature algorithm is SM3WithSM2.</li>
         * </ul>
         * <p>
         * The encryption algorithm of the root CA certificate must be the same as the <strong>certificate algorithm</strong> of the private Root CA you purchased. Example: If the <strong>certificate algorithm</strong> selected when you purchase a private Root CA is <strong>RSA</strong>, the key algorithm of the root CA certificate must be <strong>RSA_1024</strong>, <strong>RSA_2048</strong>, or <strong>RSA_4096</strong>.
         * <p>
         * @return {@code this}
         * @param algorithm Property algorithm: The key algorithm type of the root CA certificate. This parameter is required.
         */
        public Builder algorithm(final com.aliyun.ros.cdk.core.IResolvable algorithm) {
            this.props.algorithm(algorithm);
            return this;
        }

        /**
         * Property caStatus: The current CA status.
         * <p>
         * Value:
         * <p>
         * <ul>
         * <li>Issue: Enabled.</li>
         * <li>Forbidden: Disabled.</li>
         * <li>Revoke: Revoked.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param caStatus Property caStatus: The current CA status. This parameter is required.
         */
        public Builder caStatus(final java.lang.String caStatus) {
            this.props.caStatus(caStatus);
            return this;
        }
        /**
         * Property caStatus: The current CA status.
         * <p>
         * Value:
         * <p>
         * <ul>
         * <li>Issue: Enabled.</li>
         * <li>Forbidden: Disabled.</li>
         * <li>Revoke: Revoked.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param caStatus Property caStatus: The current CA status. This parameter is required.
         */
        public Builder caStatus(final com.aliyun.ros.cdk.core.IResolvable caStatus) {
            this.props.caStatus(caStatus);
            return this;
        }

        /**
         * Property countryCode: The code of the country or region in which the organization is located, using a two-digit capital abbreviation.
         * <p>
         * For example, <strong>CN</strong> represents China and <strong>US</strong> represents the United States.
         * For more information about the codes of different countries, see <strong>International Code</strong> in [Management Company Information](~~ 198289 ~~).
         * <p>
         * @return {@code this}
         * @param countryCode Property countryCode: The code of the country or region in which the organization is located, using a two-digit capital abbreviation. This parameter is required.
         */
        public Builder countryCode(final java.lang.String countryCode) {
            this.props.countryCode(countryCode);
            return this;
        }
        /**
         * Property countryCode: The code of the country or region in which the organization is located, using a two-digit capital abbreviation.
         * <p>
         * For example, <strong>CN</strong> represents China and <strong>US</strong> represents the United States.
         * For more information about the codes of different countries, see <strong>International Code</strong> in [Management Company Information](~~ 198289 ~~).
         * <p>
         * @return {@code this}
         * @param countryCode Property countryCode: The code of the country or region in which the organization is located, using a two-digit capital abbreviation. This parameter is required.
         */
        public Builder countryCode(final com.aliyun.ros.cdk.core.IResolvable countryCode) {
            this.props.countryCode(countryCode);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.cas.PcaCertificate}.
         */
        @Override
        public com.aliyun.ros.cdk.cas.PcaCertificate build() {
            return new com.aliyun.ros.cdk.cas.PcaCertificate(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
