using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cas
{
    /// <summary>Properties for defining a `SslCertificate`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cas-sslcertificate
    /// </remarks>
    [JsiiInterface(nativeType: typeof(ISslCertificateProps), fullyQualifiedName: "@alicloud/ros-cdk-cas.SslCertificateProps")]
    public interface ISslCertificateProps
    {
        /// <summary>Property certBrand: Certificate brand.</summary>
        /// <remarks>
        /// Valid values: Rapid, Globalsign, vTrus, Wosign, Digicert, Digicert pro, Geotrust, CFCA.
        /// <strong>Note:</strong> This parameter must be specified along with or without the CertType and DomainTyp parameters.
        /// </remarks>
        [JsiiProperty(name: "certBrand", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? CertBrand
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property certType: Certificate type.</summary>
        /// <remarks>
        /// Valid values: DV, OV, EV.
        /// <strong>Note:</strong> This parameter must be specified along with or without the DomainType and CertBrand parameters.
        /// </remarks>
        [JsiiProperty(name: "certType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? CertType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property companyName: The name of the certificate application company.</summary>
        /// <remarks>
        /// <strong>Note</strong>: This parameter is only applicable when applying for OV certificates.
        /// When applying for OV certificate, if you set the company name here, it means that the corresponding company information in the information management module is used; If you do not set this parameter, it indicates that the latest company information added is selected from the information management module.
        /// </remarks>
        [JsiiProperty(name: "companyName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? CompanyName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property csr: The contents of a manually generated CSR file for a domain name using the OpenSSL or Keytool tools.</summary>
        /// <remarks>
        /// The CSR key type must be RSA or ECC, and the RSA key length must be greater than or equal to 2048. If this parameter is not set, the CSR is automatically created for you by the SSL certificate service.
        /// A CSR (Certificate Signing Request) is a certificate signing request file that contains information about your server and your company. When you apply for a certificate, you will need to submit the CSR file of your certificate to the CA certification authority for review. After the CA center signs the CSR file with the root certificate's private key, it will generate the certificate public key file (that is, the SSL certificate issued to you).
        /// </remarks>
        [JsiiProperty(name: "csr", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Csr
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property domains: The domain to bind the certificate to.</summary>
        /// <remarks>
        /// The specific requirements are as follows:
        ///
        /// <list type="bullet">
        /// <description>Supports single or wildcard domains (e.g., *.aliyundoc.com).</description>
        /// <description>Multiple domains are supported. You can set up to 5 domains.</description>
        /// <description>If you set more than one domain name, the multiple domains can only be single domain name or wildcard domain name, not both single domain name and wildcard domain name.
        /// <strong>Note:</strong> This is required when the certificate is bound to more than one hostname. This parameter is not allowed to be empty at the same time as the Csr parameter. If you set both this parameter and the Csr parameter, take the CN field value in the Csr as the domain name for the certificate to bind to.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "domains", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Domains
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property domainType: Domain type.</summary>
        /// <remarks>
        /// Valid values: one, all, multiple.
        /// <strong>Note:</strong> This parameter must be specified along with or without the CertType and CertBrand parameters.
        /// </remarks>
        [JsiiProperty(name: "domainType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DomainType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property email: The applicant's email.</summary>
        [JsiiProperty(name: "email", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Email
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property phone: The applicant's mobile phone number.</summary>
        /// <remarks>
        /// A CA official may contact you at this number to verify your certificate request.
        /// </remarks>
        [JsiiProperty(name: "phone", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Phone
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property productCode: Specification of the certificate to apply for.</summary>
        /// <remarks>
        /// Value:
        ///
        /// <list type="bullet">
        /// <description>digicert-free-1-free (default) : This indicates DigiCert DV single-domain certificates (free 3-month certificates).</description>
        /// <description>symantec-free 1-free: Stands for DigiCert DV free single-domain certificate (1-year free certificate).</description>
        /// <description>symantec-dv-1-starter: This represents the DigiCert DV wildcard domain name certificate.</description>
        /// <description>symantec-ov-1-personal: This stands for DigiCert OV single-domain certificate</description>
        /// <description>symantec-ov-w-personal: This stands for DigiCert OV wildcard domain name certificate.</description>
        /// <description>geotrust-dv-1-starter: This represents the GeoTrust DV single-domain certificate.</description>
        /// <description>geotrust-dv-w-starter: This represents the GeoTrust DV wildcard domain name certificate.</description>
        /// <description>geotrust-ov-1-personal: This stands for GeoTrust OV single-domain certificate.</description>
        /// <description>geotrust-ov-w-personal: This represents the GeoTrust OV wildcard domain name certificate.</description>
        /// <description>globalsign-dv-1-personal: This stands for GlobalSign DV single-domain certificate.</description>
        /// <description>globalsign-dv-w-advanced: This stands for GlobalSign DV wildcard domain name certificate.</description>
        /// <description>globalsign-ov-1-personal: This stands for GlobalSign OV single-domain certificate.</description>
        /// <description>globalsign-ov-w-advanced: This represents the GlobalSign OV wildcard domain name certificate.</description>
        /// <description>cfca-ov-1-personal: This stands for CFCA OV single domain certificate</description>
        /// <description>cfca-ev-w-advanced: This stands for CFCA OV wildcard domain name certificate.
        /// <strong>Note:</strong> If you specify this parameter, you do not need to specify the DomainType, CertType, and CertBrand parameters; otherwise, this parameter will prevail.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "productCode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ProductCode
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property username: The applicant's name.</summary>
        [JsiiProperty(name: "username", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Username
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property validateType: How domain ownership is verified.</summary>
        /// <remarks>
        /// Valid values:
        ///
        /// <list type="bullet">
        /// <description>DNS: DNS validation The ownership of the domain name is verified by adding a TXT type DNS record to the domain name's DNS management platform. You need administrative permission for domain resolution to complete validation.</description>
        /// <description>FILE: File validation Ownership of a domain name is verified by creating a specified file on the domain name server. You need administrator access to your domain name server to complete validation.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "validateType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ValidateType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `SslCertificate`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cas-sslcertificate
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(ISslCertificateProps), fullyQualifiedName: "@alicloud/ros-cdk-cas.SslCertificateProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cas.ISslCertificateProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property certBrand: Certificate brand.</summary>
            /// <remarks>
            /// Valid values: Rapid, Globalsign, vTrus, Wosign, Digicert, Digicert pro, Geotrust, CFCA.
            /// <strong>Note:</strong> This parameter must be specified along with or without the CertType and DomainTyp parameters.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "certBrand", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? CertBrand
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property certType: Certificate type.</summary>
            /// <remarks>
            /// Valid values: DV, OV, EV.
            /// <strong>Note:</strong> This parameter must be specified along with or without the DomainType and CertBrand parameters.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "certType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? CertType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property companyName: The name of the certificate application company.</summary>
            /// <remarks>
            /// <strong>Note</strong>: This parameter is only applicable when applying for OV certificates.
            /// When applying for OV certificate, if you set the company name here, it means that the corresponding company information in the information management module is used; If you do not set this parameter, it indicates that the latest company information added is selected from the information management module.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "companyName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? CompanyName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property csr: The contents of a manually generated CSR file for a domain name using the OpenSSL or Keytool tools.</summary>
            /// <remarks>
            /// The CSR key type must be RSA or ECC, and the RSA key length must be greater than or equal to 2048. If this parameter is not set, the CSR is automatically created for you by the SSL certificate service.
            /// A CSR (Certificate Signing Request) is a certificate signing request file that contains information about your server and your company. When you apply for a certificate, you will need to submit the CSR file of your certificate to the CA certification authority for review. After the CA center signs the CSR file with the root certificate's private key, it will generate the certificate public key file (that is, the SSL certificate issued to you).
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "csr", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Csr
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property domains: The domain to bind the certificate to.</summary>
            /// <remarks>
            /// The specific requirements are as follows:
            ///
            /// <list type="bullet">
            /// <description>Supports single or wildcard domains (e.g., *.aliyundoc.com).</description>
            /// <description>Multiple domains are supported. You can set up to 5 domains.</description>
            /// <description>If you set more than one domain name, the multiple domains can only be single domain name or wildcard domain name, not both single domain name and wildcard domain name.
            /// <strong>Note:</strong> This is required when the certificate is bound to more than one hostname. This parameter is not allowed to be empty at the same time as the Csr parameter. If you set both this parameter and the Csr parameter, take the CN field value in the Csr as the domain name for the certificate to bind to.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "domains", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? Domains
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property domainType: Domain type.</summary>
            /// <remarks>
            /// Valid values: one, all, multiple.
            /// <strong>Note:</strong> This parameter must be specified along with or without the CertType and CertBrand parameters.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "domainType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DomainType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property email: The applicant's email.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "email", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Email
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property phone: The applicant's mobile phone number.</summary>
            /// <remarks>
            /// A CA official may contact you at this number to verify your certificate request.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "phone", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Phone
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property productCode: Specification of the certificate to apply for.</summary>
            /// <remarks>
            /// Value:
            ///
            /// <list type="bullet">
            /// <description>digicert-free-1-free (default) : This indicates DigiCert DV single-domain certificates (free 3-month certificates).</description>
            /// <description>symantec-free 1-free: Stands for DigiCert DV free single-domain certificate (1-year free certificate).</description>
            /// <description>symantec-dv-1-starter: This represents the DigiCert DV wildcard domain name certificate.</description>
            /// <description>symantec-ov-1-personal: This stands for DigiCert OV single-domain certificate</description>
            /// <description>symantec-ov-w-personal: This stands for DigiCert OV wildcard domain name certificate.</description>
            /// <description>geotrust-dv-1-starter: This represents the GeoTrust DV single-domain certificate.</description>
            /// <description>geotrust-dv-w-starter: This represents the GeoTrust DV wildcard domain name certificate.</description>
            /// <description>geotrust-ov-1-personal: This stands for GeoTrust OV single-domain certificate.</description>
            /// <description>geotrust-ov-w-personal: This represents the GeoTrust OV wildcard domain name certificate.</description>
            /// <description>globalsign-dv-1-personal: This stands for GlobalSign DV single-domain certificate.</description>
            /// <description>globalsign-dv-w-advanced: This stands for GlobalSign DV wildcard domain name certificate.</description>
            /// <description>globalsign-ov-1-personal: This stands for GlobalSign OV single-domain certificate.</description>
            /// <description>globalsign-ov-w-advanced: This represents the GlobalSign OV wildcard domain name certificate.</description>
            /// <description>cfca-ov-1-personal: This stands for CFCA OV single domain certificate</description>
            /// <description>cfca-ev-w-advanced: This stands for CFCA OV wildcard domain name certificate.
            /// <strong>Note:</strong> If you specify this parameter, you do not need to specify the DomainType, CertType, and CertBrand parameters; otherwise, this parameter will prevail.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "productCode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ProductCode
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property username: The applicant's name.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "username", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Username
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property validateType: How domain ownership is verified.</summary>
            /// <remarks>
            /// Valid values:
            ///
            /// <list type="bullet">
            /// <description>DNS: DNS validation The ownership of the domain name is verified by adding a TXT type DNS record to the domain name's DNS management platform. You need administrative permission for domain resolution to complete validation.</description>
            /// <description>FILE: File validation Ownership of a domain name is verified by creating a specified file on the domain name server. You need administrator access to your domain name server to complete validation.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "validateType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ValidateType
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
