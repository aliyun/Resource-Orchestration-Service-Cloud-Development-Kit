package com.aliyun.ros.cdk.cas;

/**
 * Properties for defining a <code>SslCertificate</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cas-sslcertificate
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-08-08T09:17:07.832Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cas.$Module.class, fqn = "@alicloud/ros-cdk-cas.SslCertificateProps")
@software.amazon.jsii.Jsii.Proxy(SslCertificateProps.Jsii$Proxy.class)
public interface SslCertificateProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property certBrand: Certificate brand.
     * <p>
     * Valid values: Rapid, Globalsign, vTrus, Wosign, Digicert, Digicert pro, Geotrust, CFCA.
     * <strong>Note:</strong> This parameter must be specified along with or without the CertType and DomainTyp parameters.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCertBrand() {
        return null;
    }

    /**
     * Property certType: Certificate type.
     * <p>
     * Valid values: DV, OV, EV.
     * <strong>Note:</strong> This parameter must be specified along with or without the DomainType and CertBrand parameters.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCertType() {
        return null;
    }

    /**
     * Property companyName: The name of the certificate application company.
     * <p>
     * <strong>Note</strong>: This parameter is only applicable when applying for OV certificates.
     * When applying for OV certificate, if you set the company name here, it means that the corresponding company information in the information management module is used; If you do not set this parameter, it indicates that the latest company information added is selected from the information management module.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCompanyName() {
        return null;
    }

    /**
     * Property csr: The contents of a manually generated CSR file for a domain name using the OpenSSL or Keytool tools.
     * <p>
     * The CSR key type must be RSA or ECC, and the RSA key length must be greater than or equal to 2048. If this parameter is not set, the CSR is automatically created for you by the SSL certificate service.
     * A CSR (Certificate Signing Request) is a certificate signing request file that contains information about your server and your company. When you apply for a certificate, you will need to submit the CSR file of your certificate to the CA certification authority for review. After the CA center signs the CSR file with the root certificate's private key, it will generate the certificate public key file (that is, the SSL certificate issued to you).
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCsr() {
        return null;
    }

    /**
     * Property domains: The domain to bind the certificate to.
     * <p>
     * The specific requirements are as follows:
     * <p>
     * <ul>
     * <li>Supports single or wildcard domains (e.g., *.aliyundoc.com).</li>
     * <li>Multiple domains are supported. You can set up to 5 domains.</li>
     * <li>If you set more than one domain name, the multiple domains can only be single domain name or wildcard domain name, not both single domain name and wildcard domain name.
     * <strong>Note:</strong> This is required when the certificate is bound to more than one hostname. This parameter is not allowed to be empty at the same time as the Csr parameter. If you set both this parameter and the Csr parameter, take the CN field value in the Csr as the domain name for the certificate to bind to.</li>
     * </ul>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDomains() {
        return null;
    }

    /**
     * Property domainType: Domain type.
     * <p>
     * Valid values: one, all, multiple.
     * <strong>Note:</strong> This parameter must be specified along with or without the CertType and CertBrand parameters.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDomainType() {
        return null;
    }

    /**
     * Property email: The applicant's email.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEmail() {
        return null;
    }

    /**
     * Property phone: The applicant's mobile phone number.
     * <p>
     * A CA official may contact you at this number to verify your certificate request.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPhone() {
        return null;
    }

    /**
     * Property productCode: Specification of the certificate to apply for.
     * <p>
     * Value:
     * <p>
     * <ul>
     * <li>digicert-free-1-free (default) : This indicates DigiCert DV single-domain certificates (free 3-month certificates).</li>
     * <li>symantec-free 1-free: Stands for DigiCert DV free single-domain certificate (1-year free certificate).</li>
     * <li>symantec-dv-1-starter: This represents the DigiCert DV wildcard domain name certificate.</li>
     * <li>symantec-ov-1-personal: This stands for DigiCert OV single-domain certificate</li>
     * <li>symantec-ov-w-personal: This stands for DigiCert OV wildcard domain name certificate.</li>
     * <li>geotrust-dv-1-starter: This represents the GeoTrust DV single-domain certificate.</li>
     * <li>geotrust-dv-w-starter: This represents the GeoTrust DV wildcard domain name certificate.</li>
     * <li>geotrust-ov-1-personal: This stands for GeoTrust OV single-domain certificate.</li>
     * <li>geotrust-ov-w-personal: This represents the GeoTrust OV wildcard domain name certificate.</li>
     * <li>globalsign-dv-1-personal: This stands for GlobalSign DV single-domain certificate.</li>
     * <li>globalsign-dv-w-advanced: This stands for GlobalSign DV wildcard domain name certificate.</li>
     * <li>globalsign-ov-1-personal: This stands for GlobalSign OV single-domain certificate.</li>
     * <li>globalsign-ov-w-advanced: This represents the GlobalSign OV wildcard domain name certificate.</li>
     * <li>cfca-ov-1-personal: This stands for CFCA OV single domain certificate</li>
     * <li>cfca-ev-w-advanced: This stands for CFCA OV wildcard domain name certificate.
     * <strong>Note:</strong> If you specify this parameter, you do not need to specify the DomainType, CertType, and CertBrand parameters; otherwise, this parameter will prevail.</li>
     * </ul>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getProductCode() {
        return null;
    }

    /**
     * Property username: The applicant's name.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getUsername() {
        return null;
    }

    /**
     * Property validateType: How domain ownership is verified.
     * <p>
     * Valid values:
     * <p>
     * <ul>
     * <li>DNS: DNS validation The ownership of the domain name is verified by adding a TXT type DNS record to the domain name's DNS management platform. You need administrative permission for domain resolution to complete validation.</li>
     * <li>FILE: File validation Ownership of a domain name is verified by creating a specified file on the domain name server. You need administrator access to your domain name server to complete validation.</li>
     * </ul>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getValidateType() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link SslCertificateProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link SslCertificateProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<SslCertificateProps> {
        java.lang.Object certBrand;
        java.lang.Object certType;
        java.lang.Object companyName;
        java.lang.Object csr;
        java.lang.Object domains;
        java.lang.Object domainType;
        java.lang.Object email;
        java.lang.Object phone;
        java.lang.Object productCode;
        java.lang.Object username;
        java.lang.Object validateType;

        /**
         * Sets the value of {@link SslCertificateProps#getCertBrand}
         * @param certBrand Property certBrand: Certificate brand.
         *                  Valid values: Rapid, Globalsign, vTrus, Wosign, Digicert, Digicert pro, Geotrust, CFCA.
         *                  <strong>Note:</strong> This parameter must be specified along with or without the CertType and DomainTyp parameters.
         * @return {@code this}
         */
        public Builder certBrand(java.lang.String certBrand) {
            this.certBrand = certBrand;
            return this;
        }

        /**
         * Sets the value of {@link SslCertificateProps#getCertBrand}
         * @param certBrand Property certBrand: Certificate brand.
         *                  Valid values: Rapid, Globalsign, vTrus, Wosign, Digicert, Digicert pro, Geotrust, CFCA.
         *                  <strong>Note:</strong> This parameter must be specified along with or without the CertType and DomainTyp parameters.
         * @return {@code this}
         */
        public Builder certBrand(com.aliyun.ros.cdk.core.IResolvable certBrand) {
            this.certBrand = certBrand;
            return this;
        }

        /**
         * Sets the value of {@link SslCertificateProps#getCertType}
         * @param certType Property certType: Certificate type.
         *                 Valid values: DV, OV, EV.
         *                 <strong>Note:</strong> This parameter must be specified along with or without the DomainType and CertBrand parameters.
         * @return {@code this}
         */
        public Builder certType(java.lang.String certType) {
            this.certType = certType;
            return this;
        }

        /**
         * Sets the value of {@link SslCertificateProps#getCertType}
         * @param certType Property certType: Certificate type.
         *                 Valid values: DV, OV, EV.
         *                 <strong>Note:</strong> This parameter must be specified along with or without the DomainType and CertBrand parameters.
         * @return {@code this}
         */
        public Builder certType(com.aliyun.ros.cdk.core.IResolvable certType) {
            this.certType = certType;
            return this;
        }

        /**
         * Sets the value of {@link SslCertificateProps#getCompanyName}
         * @param companyName Property companyName: The name of the certificate application company.
         *                    <strong>Note</strong>: This parameter is only applicable when applying for OV certificates.
         *                    When applying for OV certificate, if you set the company name here, it means that the corresponding company information in the information management module is used; If you do not set this parameter, it indicates that the latest company information added is selected from the information management module.
         * @return {@code this}
         */
        public Builder companyName(java.lang.String companyName) {
            this.companyName = companyName;
            return this;
        }

        /**
         * Sets the value of {@link SslCertificateProps#getCompanyName}
         * @param companyName Property companyName: The name of the certificate application company.
         *                    <strong>Note</strong>: This parameter is only applicable when applying for OV certificates.
         *                    When applying for OV certificate, if you set the company name here, it means that the corresponding company information in the information management module is used; If you do not set this parameter, it indicates that the latest company information added is selected from the information management module.
         * @return {@code this}
         */
        public Builder companyName(com.aliyun.ros.cdk.core.IResolvable companyName) {
            this.companyName = companyName;
            return this;
        }

        /**
         * Sets the value of {@link SslCertificateProps#getCsr}
         * @param csr Property csr: The contents of a manually generated CSR file for a domain name using the OpenSSL or Keytool tools.
         *            The CSR key type must be RSA or ECC, and the RSA key length must be greater than or equal to 2048. If this parameter is not set, the CSR is automatically created for you by the SSL certificate service.
         *            A CSR (Certificate Signing Request) is a certificate signing request file that contains information about your server and your company. When you apply for a certificate, you will need to submit the CSR file of your certificate to the CA certification authority for review. After the CA center signs the CSR file with the root certificate's private key, it will generate the certificate public key file (that is, the SSL certificate issued to you).
         * @return {@code this}
         */
        public Builder csr(java.lang.String csr) {
            this.csr = csr;
            return this;
        }

        /**
         * Sets the value of {@link SslCertificateProps#getCsr}
         * @param csr Property csr: The contents of a manually generated CSR file for a domain name using the OpenSSL or Keytool tools.
         *            The CSR key type must be RSA or ECC, and the RSA key length must be greater than or equal to 2048. If this parameter is not set, the CSR is automatically created for you by the SSL certificate service.
         *            A CSR (Certificate Signing Request) is a certificate signing request file that contains information about your server and your company. When you apply for a certificate, you will need to submit the CSR file of your certificate to the CA certification authority for review. After the CA center signs the CSR file with the root certificate's private key, it will generate the certificate public key file (that is, the SSL certificate issued to you).
         * @return {@code this}
         */
        public Builder csr(com.aliyun.ros.cdk.core.IResolvable csr) {
            this.csr = csr;
            return this;
        }

        /**
         * Sets the value of {@link SslCertificateProps#getDomains}
         * @param domains Property domains: The domain to bind the certificate to.
         *                The specific requirements are as follows:
         *                <p>
         *                <ul>
         *                <li>Supports single or wildcard domains (e.g., *.aliyundoc.com).</li>
         *                <li>Multiple domains are supported. You can set up to 5 domains.</li>
         *                <li>If you set more than one domain name, the multiple domains can only be single domain name or wildcard domain name, not both single domain name and wildcard domain name.
         *                <strong>Note:</strong> This is required when the certificate is bound to more than one hostname. This parameter is not allowed to be empty at the same time as the Csr parameter. If you set both this parameter and the Csr parameter, take the CN field value in the Csr as the domain name for the certificate to bind to.</li>
         *                </ul>
         * @return {@code this}
         */
        public Builder domains(com.aliyun.ros.cdk.core.IResolvable domains) {
            this.domains = domains;
            return this;
        }

        /**
         * Sets the value of {@link SslCertificateProps#getDomains}
         * @param domains Property domains: The domain to bind the certificate to.
         *                The specific requirements are as follows:
         *                <p>
         *                <ul>
         *                <li>Supports single or wildcard domains (e.g., *.aliyundoc.com).</li>
         *                <li>Multiple domains are supported. You can set up to 5 domains.</li>
         *                <li>If you set more than one domain name, the multiple domains can only be single domain name or wildcard domain name, not both single domain name and wildcard domain name.
         *                <strong>Note:</strong> This is required when the certificate is bound to more than one hostname. This parameter is not allowed to be empty at the same time as the Csr parameter. If you set both this parameter and the Csr parameter, take the CN field value in the Csr as the domain name for the certificate to bind to.</li>
         *                </ul>
         * @return {@code this}
         */
        public Builder domains(java.util.List<? extends java.lang.Object> domains) {
            this.domains = domains;
            return this;
        }

        /**
         * Sets the value of {@link SslCertificateProps#getDomainType}
         * @param domainType Property domainType: Domain type.
         *                   Valid values: one, all, multiple.
         *                   <strong>Note:</strong> This parameter must be specified along with or without the CertType and CertBrand parameters.
         * @return {@code this}
         */
        public Builder domainType(java.lang.String domainType) {
            this.domainType = domainType;
            return this;
        }

        /**
         * Sets the value of {@link SslCertificateProps#getDomainType}
         * @param domainType Property domainType: Domain type.
         *                   Valid values: one, all, multiple.
         *                   <strong>Note:</strong> This parameter must be specified along with or without the CertType and CertBrand parameters.
         * @return {@code this}
         */
        public Builder domainType(com.aliyun.ros.cdk.core.IResolvable domainType) {
            this.domainType = domainType;
            return this;
        }

        /**
         * Sets the value of {@link SslCertificateProps#getEmail}
         * @param email Property email: The applicant's email.
         * @return {@code this}
         */
        public Builder email(java.lang.String email) {
            this.email = email;
            return this;
        }

        /**
         * Sets the value of {@link SslCertificateProps#getEmail}
         * @param email Property email: The applicant's email.
         * @return {@code this}
         */
        public Builder email(com.aliyun.ros.cdk.core.IResolvable email) {
            this.email = email;
            return this;
        }

        /**
         * Sets the value of {@link SslCertificateProps#getPhone}
         * @param phone Property phone: The applicant's mobile phone number.
         *              A CA official may contact you at this number to verify your certificate request.
         * @return {@code this}
         */
        public Builder phone(java.lang.String phone) {
            this.phone = phone;
            return this;
        }

        /**
         * Sets the value of {@link SslCertificateProps#getPhone}
         * @param phone Property phone: The applicant's mobile phone number.
         *              A CA official may contact you at this number to verify your certificate request.
         * @return {@code this}
         */
        public Builder phone(com.aliyun.ros.cdk.core.IResolvable phone) {
            this.phone = phone;
            return this;
        }

        /**
         * Sets the value of {@link SslCertificateProps#getProductCode}
         * @param productCode Property productCode: Specification of the certificate to apply for.
         *                    Value:
         *                    <p>
         *                    <ul>
         *                    <li>digicert-free-1-free (default) : This indicates DigiCert DV single-domain certificates (free 3-month certificates).</li>
         *                    <li>symantec-free 1-free: Stands for DigiCert DV free single-domain certificate (1-year free certificate).</li>
         *                    <li>symantec-dv-1-starter: This represents the DigiCert DV wildcard domain name certificate.</li>
         *                    <li>symantec-ov-1-personal: This stands for DigiCert OV single-domain certificate</li>
         *                    <li>symantec-ov-w-personal: This stands for DigiCert OV wildcard domain name certificate.</li>
         *                    <li>geotrust-dv-1-starter: This represents the GeoTrust DV single-domain certificate.</li>
         *                    <li>geotrust-dv-w-starter: This represents the GeoTrust DV wildcard domain name certificate.</li>
         *                    <li>geotrust-ov-1-personal: This stands for GeoTrust OV single-domain certificate.</li>
         *                    <li>geotrust-ov-w-personal: This represents the GeoTrust OV wildcard domain name certificate.</li>
         *                    <li>globalsign-dv-1-personal: This stands for GlobalSign DV single-domain certificate.</li>
         *                    <li>globalsign-dv-w-advanced: This stands for GlobalSign DV wildcard domain name certificate.</li>
         *                    <li>globalsign-ov-1-personal: This stands for GlobalSign OV single-domain certificate.</li>
         *                    <li>globalsign-ov-w-advanced: This represents the GlobalSign OV wildcard domain name certificate.</li>
         *                    <li>cfca-ov-1-personal: This stands for CFCA OV single domain certificate</li>
         *                    <li>cfca-ev-w-advanced: This stands for CFCA OV wildcard domain name certificate.
         *                    <strong>Note:</strong> If you specify this parameter, you do not need to specify the DomainType, CertType, and CertBrand parameters; otherwise, this parameter will prevail.</li>
         *                    </ul>
         * @return {@code this}
         */
        public Builder productCode(java.lang.String productCode) {
            this.productCode = productCode;
            return this;
        }

        /**
         * Sets the value of {@link SslCertificateProps#getProductCode}
         * @param productCode Property productCode: Specification of the certificate to apply for.
         *                    Value:
         *                    <p>
         *                    <ul>
         *                    <li>digicert-free-1-free (default) : This indicates DigiCert DV single-domain certificates (free 3-month certificates).</li>
         *                    <li>symantec-free 1-free: Stands for DigiCert DV free single-domain certificate (1-year free certificate).</li>
         *                    <li>symantec-dv-1-starter: This represents the DigiCert DV wildcard domain name certificate.</li>
         *                    <li>symantec-ov-1-personal: This stands for DigiCert OV single-domain certificate</li>
         *                    <li>symantec-ov-w-personal: This stands for DigiCert OV wildcard domain name certificate.</li>
         *                    <li>geotrust-dv-1-starter: This represents the GeoTrust DV single-domain certificate.</li>
         *                    <li>geotrust-dv-w-starter: This represents the GeoTrust DV wildcard domain name certificate.</li>
         *                    <li>geotrust-ov-1-personal: This stands for GeoTrust OV single-domain certificate.</li>
         *                    <li>geotrust-ov-w-personal: This represents the GeoTrust OV wildcard domain name certificate.</li>
         *                    <li>globalsign-dv-1-personal: This stands for GlobalSign DV single-domain certificate.</li>
         *                    <li>globalsign-dv-w-advanced: This stands for GlobalSign DV wildcard domain name certificate.</li>
         *                    <li>globalsign-ov-1-personal: This stands for GlobalSign OV single-domain certificate.</li>
         *                    <li>globalsign-ov-w-advanced: This represents the GlobalSign OV wildcard domain name certificate.</li>
         *                    <li>cfca-ov-1-personal: This stands for CFCA OV single domain certificate</li>
         *                    <li>cfca-ev-w-advanced: This stands for CFCA OV wildcard domain name certificate.
         *                    <strong>Note:</strong> If you specify this parameter, you do not need to specify the DomainType, CertType, and CertBrand parameters; otherwise, this parameter will prevail.</li>
         *                    </ul>
         * @return {@code this}
         */
        public Builder productCode(com.aliyun.ros.cdk.core.IResolvable productCode) {
            this.productCode = productCode;
            return this;
        }

        /**
         * Sets the value of {@link SslCertificateProps#getUsername}
         * @param username Property username: The applicant's name.
         * @return {@code this}
         */
        public Builder username(java.lang.String username) {
            this.username = username;
            return this;
        }

        /**
         * Sets the value of {@link SslCertificateProps#getUsername}
         * @param username Property username: The applicant's name.
         * @return {@code this}
         */
        public Builder username(com.aliyun.ros.cdk.core.IResolvable username) {
            this.username = username;
            return this;
        }

        /**
         * Sets the value of {@link SslCertificateProps#getValidateType}
         * @param validateType Property validateType: How domain ownership is verified.
         *                     Valid values:
         *                     <p>
         *                     <ul>
         *                     <li>DNS: DNS validation The ownership of the domain name is verified by adding a TXT type DNS record to the domain name's DNS management platform. You need administrative permission for domain resolution to complete validation.</li>
         *                     <li>FILE: File validation Ownership of a domain name is verified by creating a specified file on the domain name server. You need administrator access to your domain name server to complete validation.</li>
         *                     </ul>
         * @return {@code this}
         */
        public Builder validateType(java.lang.String validateType) {
            this.validateType = validateType;
            return this;
        }

        /**
         * Sets the value of {@link SslCertificateProps#getValidateType}
         * @param validateType Property validateType: How domain ownership is verified.
         *                     Valid values:
         *                     <p>
         *                     <ul>
         *                     <li>DNS: DNS validation The ownership of the domain name is verified by adding a TXT type DNS record to the domain name's DNS management platform. You need administrative permission for domain resolution to complete validation.</li>
         *                     <li>FILE: File validation Ownership of a domain name is verified by creating a specified file on the domain name server. You need administrator access to your domain name server to complete validation.</li>
         *                     </ul>
         * @return {@code this}
         */
        public Builder validateType(com.aliyun.ros.cdk.core.IResolvable validateType) {
            this.validateType = validateType;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link SslCertificateProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public SslCertificateProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link SslCertificateProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements SslCertificateProps {
        private final java.lang.Object certBrand;
        private final java.lang.Object certType;
        private final java.lang.Object companyName;
        private final java.lang.Object csr;
        private final java.lang.Object domains;
        private final java.lang.Object domainType;
        private final java.lang.Object email;
        private final java.lang.Object phone;
        private final java.lang.Object productCode;
        private final java.lang.Object username;
        private final java.lang.Object validateType;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.certBrand = software.amazon.jsii.Kernel.get(this, "certBrand", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.certType = software.amazon.jsii.Kernel.get(this, "certType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.companyName = software.amazon.jsii.Kernel.get(this, "companyName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.csr = software.amazon.jsii.Kernel.get(this, "csr", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.domains = software.amazon.jsii.Kernel.get(this, "domains", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.domainType = software.amazon.jsii.Kernel.get(this, "domainType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.email = software.amazon.jsii.Kernel.get(this, "email", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.phone = software.amazon.jsii.Kernel.get(this, "phone", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.productCode = software.amazon.jsii.Kernel.get(this, "productCode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.username = software.amazon.jsii.Kernel.get(this, "username", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.validateType = software.amazon.jsii.Kernel.get(this, "validateType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.certBrand = builder.certBrand;
            this.certType = builder.certType;
            this.companyName = builder.companyName;
            this.csr = builder.csr;
            this.domains = builder.domains;
            this.domainType = builder.domainType;
            this.email = builder.email;
            this.phone = builder.phone;
            this.productCode = builder.productCode;
            this.username = builder.username;
            this.validateType = builder.validateType;
        }

        @Override
        public final java.lang.Object getCertBrand() {
            return this.certBrand;
        }

        @Override
        public final java.lang.Object getCertType() {
            return this.certType;
        }

        @Override
        public final java.lang.Object getCompanyName() {
            return this.companyName;
        }

        @Override
        public final java.lang.Object getCsr() {
            return this.csr;
        }

        @Override
        public final java.lang.Object getDomains() {
            return this.domains;
        }

        @Override
        public final java.lang.Object getDomainType() {
            return this.domainType;
        }

        @Override
        public final java.lang.Object getEmail() {
            return this.email;
        }

        @Override
        public final java.lang.Object getPhone() {
            return this.phone;
        }

        @Override
        public final java.lang.Object getProductCode() {
            return this.productCode;
        }

        @Override
        public final java.lang.Object getUsername() {
            return this.username;
        }

        @Override
        public final java.lang.Object getValidateType() {
            return this.validateType;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            if (this.getCertBrand() != null) {
                data.set("certBrand", om.valueToTree(this.getCertBrand()));
            }
            if (this.getCertType() != null) {
                data.set("certType", om.valueToTree(this.getCertType()));
            }
            if (this.getCompanyName() != null) {
                data.set("companyName", om.valueToTree(this.getCompanyName()));
            }
            if (this.getCsr() != null) {
                data.set("csr", om.valueToTree(this.getCsr()));
            }
            if (this.getDomains() != null) {
                data.set("domains", om.valueToTree(this.getDomains()));
            }
            if (this.getDomainType() != null) {
                data.set("domainType", om.valueToTree(this.getDomainType()));
            }
            if (this.getEmail() != null) {
                data.set("email", om.valueToTree(this.getEmail()));
            }
            if (this.getPhone() != null) {
                data.set("phone", om.valueToTree(this.getPhone()));
            }
            if (this.getProductCode() != null) {
                data.set("productCode", om.valueToTree(this.getProductCode()));
            }
            if (this.getUsername() != null) {
                data.set("username", om.valueToTree(this.getUsername()));
            }
            if (this.getValidateType() != null) {
                data.set("validateType", om.valueToTree(this.getValidateType()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cas.SslCertificateProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            SslCertificateProps.Jsii$Proxy that = (SslCertificateProps.Jsii$Proxy) o;

            if (this.certBrand != null ? !this.certBrand.equals(that.certBrand) : that.certBrand != null) return false;
            if (this.certType != null ? !this.certType.equals(that.certType) : that.certType != null) return false;
            if (this.companyName != null ? !this.companyName.equals(that.companyName) : that.companyName != null) return false;
            if (this.csr != null ? !this.csr.equals(that.csr) : that.csr != null) return false;
            if (this.domains != null ? !this.domains.equals(that.domains) : that.domains != null) return false;
            if (this.domainType != null ? !this.domainType.equals(that.domainType) : that.domainType != null) return false;
            if (this.email != null ? !this.email.equals(that.email) : that.email != null) return false;
            if (this.phone != null ? !this.phone.equals(that.phone) : that.phone != null) return false;
            if (this.productCode != null ? !this.productCode.equals(that.productCode) : that.productCode != null) return false;
            if (this.username != null ? !this.username.equals(that.username) : that.username != null) return false;
            return this.validateType != null ? this.validateType.equals(that.validateType) : that.validateType == null;
        }

        @Override
        public final int hashCode() {
            int result = this.certBrand != null ? this.certBrand.hashCode() : 0;
            result = 31 * result + (this.certType != null ? this.certType.hashCode() : 0);
            result = 31 * result + (this.companyName != null ? this.companyName.hashCode() : 0);
            result = 31 * result + (this.csr != null ? this.csr.hashCode() : 0);
            result = 31 * result + (this.domains != null ? this.domains.hashCode() : 0);
            result = 31 * result + (this.domainType != null ? this.domainType.hashCode() : 0);
            result = 31 * result + (this.email != null ? this.email.hashCode() : 0);
            result = 31 * result + (this.phone != null ? this.phone.hashCode() : 0);
            result = 31 * result + (this.productCode != null ? this.productCode.hashCode() : 0);
            result = 31 * result + (this.username != null ? this.username.hashCode() : 0);
            result = 31 * result + (this.validateType != null ? this.validateType.hashCode() : 0);
            return result;
        }
    }
}
