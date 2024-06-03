package com.aliyun.ros.cdk.cas;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::CAS::SslCertificate</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-03T08:19:49.846Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cas.$Module.class, fqn = "@alicloud/ros-cdk-cas.SslCertificate")
public class SslCertificate extends com.aliyun.ros.cdk.core.Resource {

    protected SslCertificate(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected SslCertificate(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public SslCertificate(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.cas.SslCertificateProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public SslCertificate(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.cas.SslCertificateProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), props });
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     */
    public SslCertificate(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required") });
    }

    /**
     * Attribute CertificateId: The ID of the certificate issued to you.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrCertificateId() {
        return software.amazon.jsii.Kernel.get(this, "attrCertificateId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute OrderId: The ID of the certificate order.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrOrderId() {
        return software.amazon.jsii.Kernel.get(this, "attrOrderId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cas.SslCertificateProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.cas.SslCertificateProps.class));
    }

    protected void setProps(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cas.SslCertificateProps value) {
        software.amazon.jsii.Kernel.set(this, "props", java.util.Objects.requireNonNull(value, "props is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.cas.SslCertificate}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.cas.SslCertificate> {
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
        private com.aliyun.ros.cdk.cas.SslCertificateProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        }

        /**
         * Property certBrand: Certificate brand.
         * <p>
         * Valid values: Rapid, Globalsign, vTrus, Wosign, Digicert, Digicert pro, Geotrust, CFCA.
         * <strong>Note:</strong> This parameter must be specified along with or without the CertType and DomainTyp parameters.
         * <p>
         * @return {@code this}
         * @param certBrand Property certBrand: Certificate brand. This parameter is required.
         */
        public Builder certBrand(final java.lang.String certBrand) {
            this.props().certBrand(certBrand);
            return this;
        }
        /**
         * Property certBrand: Certificate brand.
         * <p>
         * Valid values: Rapid, Globalsign, vTrus, Wosign, Digicert, Digicert pro, Geotrust, CFCA.
         * <strong>Note:</strong> This parameter must be specified along with or without the CertType and DomainTyp parameters.
         * <p>
         * @return {@code this}
         * @param certBrand Property certBrand: Certificate brand. This parameter is required.
         */
        public Builder certBrand(final com.aliyun.ros.cdk.core.IResolvable certBrand) {
            this.props().certBrand(certBrand);
            return this;
        }

        /**
         * Property certType: Certificate type.
         * <p>
         * Valid values: DV, OV, EV.
         * <strong>Note:</strong> This parameter must be specified along with or without the DomainType and CertBrand parameters.
         * <p>
         * @return {@code this}
         * @param certType Property certType: Certificate type. This parameter is required.
         */
        public Builder certType(final java.lang.String certType) {
            this.props().certType(certType);
            return this;
        }
        /**
         * Property certType: Certificate type.
         * <p>
         * Valid values: DV, OV, EV.
         * <strong>Note:</strong> This parameter must be specified along with or without the DomainType and CertBrand parameters.
         * <p>
         * @return {@code this}
         * @param certType Property certType: Certificate type. This parameter is required.
         */
        public Builder certType(final com.aliyun.ros.cdk.core.IResolvable certType) {
            this.props().certType(certType);
            return this;
        }

        /**
         * Property companyName: The name of the certificate application company.
         * <p>
         * <strong>Note</strong>: This parameter is only applicable when applying for OV certificates.
         * When applying for OV certificate, if you set the company name here, it means that the corresponding company information in the information management module is used; If you do not set this parameter, it indicates that the latest company information added is selected from the information management module.
         * <p>
         * @return {@code this}
         * @param companyName Property companyName: The name of the certificate application company. This parameter is required.
         */
        public Builder companyName(final java.lang.String companyName) {
            this.props().companyName(companyName);
            return this;
        }
        /**
         * Property companyName: The name of the certificate application company.
         * <p>
         * <strong>Note</strong>: This parameter is only applicable when applying for OV certificates.
         * When applying for OV certificate, if you set the company name here, it means that the corresponding company information in the information management module is used; If you do not set this parameter, it indicates that the latest company information added is selected from the information management module.
         * <p>
         * @return {@code this}
         * @param companyName Property companyName: The name of the certificate application company. This parameter is required.
         */
        public Builder companyName(final com.aliyun.ros.cdk.core.IResolvable companyName) {
            this.props().companyName(companyName);
            return this;
        }

        /**
         * Property csr: The contents of a manually generated CSR file for a domain name using the OpenSSL or Keytool tools.
         * <p>
         * The CSR key type must be RSA or ECC, and the RSA key length must be greater than or equal to 2048. If this parameter is not set, the CSR is automatically created for you by the SSL certificate service.
         * A CSR (Certificate Signing Request) is a certificate signing request file that contains information about your server and your company. When you apply for a certificate, you will need to submit the CSR file of your certificate to the CA certification authority for review. After the CA center signs the CSR file with the root certificate's private key, it will generate the certificate public key file (that is, the SSL certificate issued to you).
         * <p>
         * @return {@code this}
         * @param csr Property csr: The contents of a manually generated CSR file for a domain name using the OpenSSL or Keytool tools. This parameter is required.
         */
        public Builder csr(final java.lang.String csr) {
            this.props().csr(csr);
            return this;
        }
        /**
         * Property csr: The contents of a manually generated CSR file for a domain name using the OpenSSL or Keytool tools.
         * <p>
         * The CSR key type must be RSA or ECC, and the RSA key length must be greater than or equal to 2048. If this parameter is not set, the CSR is automatically created for you by the SSL certificate service.
         * A CSR (Certificate Signing Request) is a certificate signing request file that contains information about your server and your company. When you apply for a certificate, you will need to submit the CSR file of your certificate to the CA certification authority for review. After the CA center signs the CSR file with the root certificate's private key, it will generate the certificate public key file (that is, the SSL certificate issued to you).
         * <p>
         * @return {@code this}
         * @param csr Property csr: The contents of a manually generated CSR file for a domain name using the OpenSSL or Keytool tools. This parameter is required.
         */
        public Builder csr(final com.aliyun.ros.cdk.core.IResolvable csr) {
            this.props().csr(csr);
            return this;
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
         * <p>
         * @return {@code this}
         * @param domains Property domains: The domain to bind the certificate to. This parameter is required.
         */
        public Builder domains(final com.aliyun.ros.cdk.core.IResolvable domains) {
            this.props().domains(domains);
            return this;
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
         * <p>
         * @return {@code this}
         * @param domains Property domains: The domain to bind the certificate to. This parameter is required.
         */
        public Builder domains(final java.util.List<? extends java.lang.Object> domains) {
            this.props().domains(domains);
            return this;
        }

        /**
         * Property domainType: Domain type.
         * <p>
         * Valid values: one, all, multiple.
         * <strong>Note:</strong> This parameter must be specified along with or without the CertType and CertBrand parameters.
         * <p>
         * @return {@code this}
         * @param domainType Property domainType: Domain type. This parameter is required.
         */
        public Builder domainType(final java.lang.String domainType) {
            this.props().domainType(domainType);
            return this;
        }
        /**
         * Property domainType: Domain type.
         * <p>
         * Valid values: one, all, multiple.
         * <strong>Note:</strong> This parameter must be specified along with or without the CertType and CertBrand parameters.
         * <p>
         * @return {@code this}
         * @param domainType Property domainType: Domain type. This parameter is required.
         */
        public Builder domainType(final com.aliyun.ros.cdk.core.IResolvable domainType) {
            this.props().domainType(domainType);
            return this;
        }

        /**
         * Property email: The applicant's email.
         * <p>
         * @return {@code this}
         * @param email Property email: The applicant's email. This parameter is required.
         */
        public Builder email(final java.lang.String email) {
            this.props().email(email);
            return this;
        }
        /**
         * Property email: The applicant's email.
         * <p>
         * @return {@code this}
         * @param email Property email: The applicant's email. This parameter is required.
         */
        public Builder email(final com.aliyun.ros.cdk.core.IResolvable email) {
            this.props().email(email);
            return this;
        }

        /**
         * Property phone: The applicant's mobile phone number.
         * <p>
         * A CA official may contact you at this number to verify your certificate request.
         * <p>
         * @return {@code this}
         * @param phone Property phone: The applicant's mobile phone number. This parameter is required.
         */
        public Builder phone(final java.lang.String phone) {
            this.props().phone(phone);
            return this;
        }
        /**
         * Property phone: The applicant's mobile phone number.
         * <p>
         * A CA official may contact you at this number to verify your certificate request.
         * <p>
         * @return {@code this}
         * @param phone Property phone: The applicant's mobile phone number. This parameter is required.
         */
        public Builder phone(final com.aliyun.ros.cdk.core.IResolvable phone) {
            this.props().phone(phone);
            return this;
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
         * <p>
         * @return {@code this}
         * @param productCode Property productCode: Specification of the certificate to apply for. This parameter is required.
         */
        public Builder productCode(final java.lang.String productCode) {
            this.props().productCode(productCode);
            return this;
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
         * <p>
         * @return {@code this}
         * @param productCode Property productCode: Specification of the certificate to apply for. This parameter is required.
         */
        public Builder productCode(final com.aliyun.ros.cdk.core.IResolvable productCode) {
            this.props().productCode(productCode);
            return this;
        }

        /**
         * Property username: The applicant's name.
         * <p>
         * @return {@code this}
         * @param username Property username: The applicant's name. This parameter is required.
         */
        public Builder username(final java.lang.String username) {
            this.props().username(username);
            return this;
        }
        /**
         * Property username: The applicant's name.
         * <p>
         * @return {@code this}
         * @param username Property username: The applicant's name. This parameter is required.
         */
        public Builder username(final com.aliyun.ros.cdk.core.IResolvable username) {
            this.props().username(username);
            return this;
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
         * <p>
         * @return {@code this}
         * @param validateType Property validateType: How domain ownership is verified. This parameter is required.
         */
        public Builder validateType(final java.lang.String validateType) {
            this.props().validateType(validateType);
            return this;
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
         * <p>
         * @return {@code this}
         * @param validateType Property validateType: How domain ownership is verified. This parameter is required.
         */
        public Builder validateType(final com.aliyun.ros.cdk.core.IResolvable validateType) {
            this.props().validateType(validateType);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.cas.SslCertificate}.
         */
        @Override
        public com.aliyun.ros.cdk.cas.SslCertificate build() {
            return new com.aliyun.ros.cdk.cas.SslCertificate(
                this.scope,
                this.id,
                this.props != null ? this.props.build() : null,
                this.enableResourcePropertyConstraint
            );
        }

        private com.aliyun.ros.cdk.cas.SslCertificateProps.Builder props() {
            if (this.props == null) {
                this.props = new com.aliyun.ros.cdk.cas.SslCertificateProps.Builder();
            }
            return this.props;
        }
    }
}
