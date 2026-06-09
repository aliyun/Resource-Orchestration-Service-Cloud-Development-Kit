package com.aliyun.ros.cdk.cas;

/**
 * Properties for defining a <code>PcaCertificate</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cas-pcacertificate
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-06-09T10:39:53.070Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cas.$Module.class, fqn = "@alicloud/ros-cdk-cas.PcaCertificateProps")
@software.amazon.jsii.Jsii.Proxy(PcaCertificateProps.Jsii$Proxy.class)
public interface PcaCertificateProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property commonName: The common name or abbreviation of the organization.
     * <p>
     * Support the use of Chinese, English characters.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getCommonName();

    /**
     * Property locality: Name of the city where the organization is located.
     * <p>
     * Support the use of Chinese, English characters.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getLocality();

    /**
     * Property organization: The name of the organization (corresponding to your enterprise or company) associated with the root CA certificate.
     * <p>
     * Support the use of Chinese, English characters.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getOrganization();

    /**
     * Property organizationUnit: The name of the department or branch under the organization.
     * <p>
     * Support the use of Chinese, English characters.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getOrganizationUnit();

    /**
     * Property state: &lt;props = "china"&gt; The name of the province, municipality, or autonomous region in which the organization is located.
     * <p>
     * Support the use of Chinese, English characters. </props>
     * &lt;props = "intl"&gt; Name of the province or state where the organization is located. Support the use of Chinese, English characters. </props>.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getState();

    /**
     * Property years: The validity period of the root CA certificate, in years.
     * <p>
     * <blockquote>
     * <p>
     * It is recommended to set to 5~10 years.
     * <p>
     * </blockquote>
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getYears();

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
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAlgorithm() {
        return null;
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
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCaStatus() {
        return null;
    }

    /**
     * Property countryCode: The code of the country or region in which the organization is located, using a two-digit capital abbreviation.
     * <p>
     * For example, <strong>CN</strong> represents China and <strong>US</strong> represents the United States.
     * For more information about the codes of different countries, see <strong>International Code</strong> in [Management Company Information](~~ 198289 ~~).
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCountryCode() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link PcaCertificateProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link PcaCertificateProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<PcaCertificateProps> {
        java.lang.Object commonName;
        java.lang.Object locality;
        java.lang.Object organization;
        java.lang.Object organizationUnit;
        java.lang.Object state;
        java.lang.Object years;
        java.lang.Object algorithm;
        java.lang.Object caStatus;
        java.lang.Object countryCode;

        /**
         * Sets the value of {@link PcaCertificateProps#getCommonName}
         * @param commonName Property commonName: The common name or abbreviation of the organization. This parameter is required.
         *                   Support the use of Chinese, English characters.
         * @return {@code this}
         */
        public Builder commonName(java.lang.String commonName) {
            this.commonName = commonName;
            return this;
        }

        /**
         * Sets the value of {@link PcaCertificateProps#getCommonName}
         * @param commonName Property commonName: The common name or abbreviation of the organization. This parameter is required.
         *                   Support the use of Chinese, English characters.
         * @return {@code this}
         */
        public Builder commonName(com.aliyun.ros.cdk.core.IResolvable commonName) {
            this.commonName = commonName;
            return this;
        }

        /**
         * Sets the value of {@link PcaCertificateProps#getLocality}
         * @param locality Property locality: Name of the city where the organization is located. This parameter is required.
         *                 Support the use of Chinese, English characters.
         * @return {@code this}
         */
        public Builder locality(java.lang.String locality) {
            this.locality = locality;
            return this;
        }

        /**
         * Sets the value of {@link PcaCertificateProps#getLocality}
         * @param locality Property locality: Name of the city where the organization is located. This parameter is required.
         *                 Support the use of Chinese, English characters.
         * @return {@code this}
         */
        public Builder locality(com.aliyun.ros.cdk.core.IResolvable locality) {
            this.locality = locality;
            return this;
        }

        /**
         * Sets the value of {@link PcaCertificateProps#getOrganization}
         * @param organization Property organization: The name of the organization (corresponding to your enterprise or company) associated with the root CA certificate. This parameter is required.
         *                     Support the use of Chinese, English characters.
         * @return {@code this}
         */
        public Builder organization(java.lang.String organization) {
            this.organization = organization;
            return this;
        }

        /**
         * Sets the value of {@link PcaCertificateProps#getOrganization}
         * @param organization Property organization: The name of the organization (corresponding to your enterprise or company) associated with the root CA certificate. This parameter is required.
         *                     Support the use of Chinese, English characters.
         * @return {@code this}
         */
        public Builder organization(com.aliyun.ros.cdk.core.IResolvable organization) {
            this.organization = organization;
            return this;
        }

        /**
         * Sets the value of {@link PcaCertificateProps#getOrganizationUnit}
         * @param organizationUnit Property organizationUnit: The name of the department or branch under the organization. This parameter is required.
         *                         Support the use of Chinese, English characters.
         * @return {@code this}
         */
        public Builder organizationUnit(java.lang.String organizationUnit) {
            this.organizationUnit = organizationUnit;
            return this;
        }

        /**
         * Sets the value of {@link PcaCertificateProps#getOrganizationUnit}
         * @param organizationUnit Property organizationUnit: The name of the department or branch under the organization. This parameter is required.
         *                         Support the use of Chinese, English characters.
         * @return {@code this}
         */
        public Builder organizationUnit(com.aliyun.ros.cdk.core.IResolvable organizationUnit) {
            this.organizationUnit = organizationUnit;
            return this;
        }

        /**
         * Sets the value of {@link PcaCertificateProps#getState}
         * @param state Property state: &lt;props = "china"&gt; The name of the province, municipality, or autonomous region in which the organization is located. This parameter is required.
         *              Support the use of Chinese, English characters. </props>
         *              &lt;props = "intl"&gt; Name of the province or state where the organization is located. Support the use of Chinese, English characters. </props>.
         * @return {@code this}
         */
        public Builder state(java.lang.String state) {
            this.state = state;
            return this;
        }

        /**
         * Sets the value of {@link PcaCertificateProps#getState}
         * @param state Property state: &lt;props = "china"&gt; The name of the province, municipality, or autonomous region in which the organization is located. This parameter is required.
         *              Support the use of Chinese, English characters. </props>
         *              &lt;props = "intl"&gt; Name of the province or state where the organization is located. Support the use of Chinese, English characters. </props>.
         * @return {@code this}
         */
        public Builder state(com.aliyun.ros.cdk.core.IResolvable state) {
            this.state = state;
            return this;
        }

        /**
         * Sets the value of {@link PcaCertificateProps#getYears}
         * @param years Property years: The validity period of the root CA certificate, in years. This parameter is required.
         *              <blockquote>
         *              <p>
         *              It is recommended to set to 5~10 years.
         *              <p>
         *              </blockquote>
         * @return {@code this}
         */
        public Builder years(java.lang.Number years) {
            this.years = years;
            return this;
        }

        /**
         * Sets the value of {@link PcaCertificateProps#getYears}
         * @param years Property years: The validity period of the root CA certificate, in years. This parameter is required.
         *              <blockquote>
         *              <p>
         *              It is recommended to set to 5~10 years.
         *              <p>
         *              </blockquote>
         * @return {@code this}
         */
        public Builder years(com.aliyun.ros.cdk.core.IResolvable years) {
            this.years = years;
            return this;
        }

        /**
         * Sets the value of {@link PcaCertificateProps#getAlgorithm}
         * @param algorithm Property algorithm: The key algorithm type of the root CA certificate.
         *                  The key algorithm is expressed using the '<encryption algorithm >_&lt; key length&gt;' format. Value:
         *                  <p>
         *                  <ul>
         *                  <li><strong>RSA_1024</strong>: The corresponding signature algorithm is Sha256WithRSA.</li>
         *                  <li><strong>RSA_2048</strong>: The corresponding signature algorithm is Sha256WithRSA.</li>
         *                  <li><strong>RSA_4096</strong>: The corresponding signature algorithm is Sha256WithRSA.</li>
         *                  <li><strong>ECC_256</strong>: The signature algorithm is Sha256WithECDSA.</li>
         *                  <li><strong>ECC_384</strong>: The corresponding signature algorithm is Sha256WithECDSA.</li>
         *                  <li><strong>ECC_512</strong>: The signature algorithm is Sha256WithECDSA.</li>
         *                  <li><strong>SM2_256</strong>: The corresponding signature algorithm is SM3WithSM2.</li>
         *                  </ul>
         *                  <p>
         *                  The encryption algorithm of the root CA certificate must be the same as the <strong>certificate algorithm</strong> of the private Root CA you purchased. Example: If the <strong>certificate algorithm</strong> selected when you purchase a private Root CA is <strong>RSA</strong>, the key algorithm of the root CA certificate must be <strong>RSA_1024</strong>, <strong>RSA_2048</strong>, or <strong>RSA_4096</strong>.
         * @return {@code this}
         */
        public Builder algorithm(java.lang.String algorithm) {
            this.algorithm = algorithm;
            return this;
        }

        /**
         * Sets the value of {@link PcaCertificateProps#getAlgorithm}
         * @param algorithm Property algorithm: The key algorithm type of the root CA certificate.
         *                  The key algorithm is expressed using the '<encryption algorithm >_&lt; key length&gt;' format. Value:
         *                  <p>
         *                  <ul>
         *                  <li><strong>RSA_1024</strong>: The corresponding signature algorithm is Sha256WithRSA.</li>
         *                  <li><strong>RSA_2048</strong>: The corresponding signature algorithm is Sha256WithRSA.</li>
         *                  <li><strong>RSA_4096</strong>: The corresponding signature algorithm is Sha256WithRSA.</li>
         *                  <li><strong>ECC_256</strong>: The signature algorithm is Sha256WithECDSA.</li>
         *                  <li><strong>ECC_384</strong>: The corresponding signature algorithm is Sha256WithECDSA.</li>
         *                  <li><strong>ECC_512</strong>: The signature algorithm is Sha256WithECDSA.</li>
         *                  <li><strong>SM2_256</strong>: The corresponding signature algorithm is SM3WithSM2.</li>
         *                  </ul>
         *                  <p>
         *                  The encryption algorithm of the root CA certificate must be the same as the <strong>certificate algorithm</strong> of the private Root CA you purchased. Example: If the <strong>certificate algorithm</strong> selected when you purchase a private Root CA is <strong>RSA</strong>, the key algorithm of the root CA certificate must be <strong>RSA_1024</strong>, <strong>RSA_2048</strong>, or <strong>RSA_4096</strong>.
         * @return {@code this}
         */
        public Builder algorithm(com.aliyun.ros.cdk.core.IResolvable algorithm) {
            this.algorithm = algorithm;
            return this;
        }

        /**
         * Sets the value of {@link PcaCertificateProps#getCaStatus}
         * @param caStatus Property caStatus: The current CA status.
         *                 Value:
         *                 <p>
         *                 <ul>
         *                 <li>Issue: Enabled.</li>
         *                 <li>Forbidden: Disabled.</li>
         *                 <li>Revoke: Revoked.</li>
         *                 </ul>
         * @return {@code this}
         */
        public Builder caStatus(java.lang.String caStatus) {
            this.caStatus = caStatus;
            return this;
        }

        /**
         * Sets the value of {@link PcaCertificateProps#getCaStatus}
         * @param caStatus Property caStatus: The current CA status.
         *                 Value:
         *                 <p>
         *                 <ul>
         *                 <li>Issue: Enabled.</li>
         *                 <li>Forbidden: Disabled.</li>
         *                 <li>Revoke: Revoked.</li>
         *                 </ul>
         * @return {@code this}
         */
        public Builder caStatus(com.aliyun.ros.cdk.core.IResolvable caStatus) {
            this.caStatus = caStatus;
            return this;
        }

        /**
         * Sets the value of {@link PcaCertificateProps#getCountryCode}
         * @param countryCode Property countryCode: The code of the country or region in which the organization is located, using a two-digit capital abbreviation.
         *                    For example, <strong>CN</strong> represents China and <strong>US</strong> represents the United States.
         *                    For more information about the codes of different countries, see <strong>International Code</strong> in [Management Company Information](~~ 198289 ~~).
         * @return {@code this}
         */
        public Builder countryCode(java.lang.String countryCode) {
            this.countryCode = countryCode;
            return this;
        }

        /**
         * Sets the value of {@link PcaCertificateProps#getCountryCode}
         * @param countryCode Property countryCode: The code of the country or region in which the organization is located, using a two-digit capital abbreviation.
         *                    For example, <strong>CN</strong> represents China and <strong>US</strong> represents the United States.
         *                    For more information about the codes of different countries, see <strong>International Code</strong> in [Management Company Information](~~ 198289 ~~).
         * @return {@code this}
         */
        public Builder countryCode(com.aliyun.ros.cdk.core.IResolvable countryCode) {
            this.countryCode = countryCode;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link PcaCertificateProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public PcaCertificateProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link PcaCertificateProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements PcaCertificateProps {
        private final java.lang.Object commonName;
        private final java.lang.Object locality;
        private final java.lang.Object organization;
        private final java.lang.Object organizationUnit;
        private final java.lang.Object state;
        private final java.lang.Object years;
        private final java.lang.Object algorithm;
        private final java.lang.Object caStatus;
        private final java.lang.Object countryCode;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.commonName = software.amazon.jsii.Kernel.get(this, "commonName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.locality = software.amazon.jsii.Kernel.get(this, "locality", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.organization = software.amazon.jsii.Kernel.get(this, "organization", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.organizationUnit = software.amazon.jsii.Kernel.get(this, "organizationUnit", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.state = software.amazon.jsii.Kernel.get(this, "state", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.years = software.amazon.jsii.Kernel.get(this, "years", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.algorithm = software.amazon.jsii.Kernel.get(this, "algorithm", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.caStatus = software.amazon.jsii.Kernel.get(this, "caStatus", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.countryCode = software.amazon.jsii.Kernel.get(this, "countryCode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.commonName = java.util.Objects.requireNonNull(builder.commonName, "commonName is required");
            this.locality = java.util.Objects.requireNonNull(builder.locality, "locality is required");
            this.organization = java.util.Objects.requireNonNull(builder.organization, "organization is required");
            this.organizationUnit = java.util.Objects.requireNonNull(builder.organizationUnit, "organizationUnit is required");
            this.state = java.util.Objects.requireNonNull(builder.state, "state is required");
            this.years = java.util.Objects.requireNonNull(builder.years, "years is required");
            this.algorithm = builder.algorithm;
            this.caStatus = builder.caStatus;
            this.countryCode = builder.countryCode;
        }

        @Override
        public final java.lang.Object getCommonName() {
            return this.commonName;
        }

        @Override
        public final java.lang.Object getLocality() {
            return this.locality;
        }

        @Override
        public final java.lang.Object getOrganization() {
            return this.organization;
        }

        @Override
        public final java.lang.Object getOrganizationUnit() {
            return this.organizationUnit;
        }

        @Override
        public final java.lang.Object getState() {
            return this.state;
        }

        @Override
        public final java.lang.Object getYears() {
            return this.years;
        }

        @Override
        public final java.lang.Object getAlgorithm() {
            return this.algorithm;
        }

        @Override
        public final java.lang.Object getCaStatus() {
            return this.caStatus;
        }

        @Override
        public final java.lang.Object getCountryCode() {
            return this.countryCode;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("commonName", om.valueToTree(this.getCommonName()));
            data.set("locality", om.valueToTree(this.getLocality()));
            data.set("organization", om.valueToTree(this.getOrganization()));
            data.set("organizationUnit", om.valueToTree(this.getOrganizationUnit()));
            data.set("state", om.valueToTree(this.getState()));
            data.set("years", om.valueToTree(this.getYears()));
            if (this.getAlgorithm() != null) {
                data.set("algorithm", om.valueToTree(this.getAlgorithm()));
            }
            if (this.getCaStatus() != null) {
                data.set("caStatus", om.valueToTree(this.getCaStatus()));
            }
            if (this.getCountryCode() != null) {
                data.set("countryCode", om.valueToTree(this.getCountryCode()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cas.PcaCertificateProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            PcaCertificateProps.Jsii$Proxy that = (PcaCertificateProps.Jsii$Proxy) o;

            if (!commonName.equals(that.commonName)) return false;
            if (!locality.equals(that.locality)) return false;
            if (!organization.equals(that.organization)) return false;
            if (!organizationUnit.equals(that.organizationUnit)) return false;
            if (!state.equals(that.state)) return false;
            if (!years.equals(that.years)) return false;
            if (this.algorithm != null ? !this.algorithm.equals(that.algorithm) : that.algorithm != null) return false;
            if (this.caStatus != null ? !this.caStatus.equals(that.caStatus) : that.caStatus != null) return false;
            return this.countryCode != null ? this.countryCode.equals(that.countryCode) : that.countryCode == null;
        }

        @Override
        public final int hashCode() {
            int result = this.commonName.hashCode();
            result = 31 * result + (this.locality.hashCode());
            result = 31 * result + (this.organization.hashCode());
            result = 31 * result + (this.organizationUnit.hashCode());
            result = 31 * result + (this.state.hashCode());
            result = 31 * result + (this.years.hashCode());
            result = 31 * result + (this.algorithm != null ? this.algorithm.hashCode() : 0);
            result = 31 * result + (this.caStatus != null ? this.caStatus.hashCode() : 0);
            result = 31 * result + (this.countryCode != null ? this.countryCode.hashCode() : 0);
            return result;
        }
    }
}
