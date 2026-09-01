using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cas
{
    /// <summary>Properties for defining a `RosSslCertificate`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cas-sslcertificate
    /// </remarks>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-cas.RosSslCertificateProps")]
    public class RosSslCertificateProps : AlibabaCloud.SDK.ROS.CDK.Cas.IRosSslCertificateProps
    {
        private object? _certBrand;

        /// <remarks>
        /// <strong>Property</strong>: certBrand: Certificate brand. Valid values: Rapid, Globalsign, vTrus, Wosign, Digicert, Digicert pro, Geotrust, CFCA.
        /// **Note:** This parameter must be specified along with or without the CertType and DomainTyp parameters.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "certBrand", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? CertBrand
        {
            get => _certBrand;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case string cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _certBrand = value;
            }
        }

        private object? _certType;

        /// <remarks>
        /// <strong>Property</strong>: certType: Certificate type. Valid values: DV, OV, EV.
        /// **Note:** This parameter must be specified along with or without the DomainType and CertBrand parameters.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "certType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? CertType
        {
            get => _certType;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case string cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _certType = value;
            }
        }

        private object? _companyName;

        /// <remarks>
        /// <strong>Property</strong>: companyName: The name of the certificate application company.
        /// **Note**: This parameter is only applicable when applying for OV certificates.
        /// When applying for OV certificate, if you set the company name here, it means that the corresponding company information in the information management module is used; If you do not set this parameter, it indicates that the latest company information added is selected from the information management module.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "companyName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? CompanyName
        {
            get => _companyName;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case string cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _companyName = value;
            }
        }

        private object? _csr;

        /// <remarks>
        /// <strong>Property</strong>: csr: The content of the certificate signing request (CSR) file that is manually
        /// generated by using OpenSSL or Keytool for the domain name. The key algorithm in
        /// the CSR file must be Rivest-Shamir-Adleman (RSA) or elliptic-curve cryptography
        /// (ECC), and the key length of the RSA algorithm must be greater than or equal to
        /// 2,048 characters. For more information about how to create a CSR file, see
        /// [Create a CSR file](). If you do not specify this parameter, Certificate
        /// Management Service automatically creates a CSR file.
        /// A CSR file contains the information about your server and company. When you apply
        /// for a certificate, you must submit the CSR file to the CA. The CA signs the CSR
        /// file by using the private key of the root certificate and generates a public key
        /// file to issue your certificate.
        /// > The \*\*CN\*\* field in CSR file specifies the domain name that is bound to the
        /// certificate. You must include the field in the parameter value.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "csr", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? Csr
        {
            get => _csr;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case string cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _csr = value;
            }
        }

        private object? _domains;

        /// <remarks>
        /// <strong>Property</strong>: domains: The domain to bind the certificate to. The specific requirements are as follows:
        /// - Supports single or wildcard domains (e.g., *.aliyundoc.com).
        /// - Multiple domains are supported. You can set up to 5 domains.
        /// - If you set more than one domain name, the multiple domains can only be single domain name or wildcard domain name, not both single domain name and wildcard domain name.
        /// **Note:** This is required when the certificate is bound to more than one hostname. This parameter is not allowed to be empty at the same time as the Csr parameter. If you set both this parameter and the Csr parameter, take the CN field value in the Csr as the domain name for the certificate to bind to.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "domains", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        public object? Domains
        {
            get => _domains;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case object[] cast_cd4240:
                            for (var __idx_f64a5c = 0 ; __idx_f64a5c < cast_cd4240.Length ; __idx_f64a5c++)
                            {
                                switch (cast_cd4240[__idx_f64a5c])
                                {
                                    case string cast_201718:
                                        break;
                                    case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_201718:
                                        break;
                                    case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_201718:
                                        // Not enough information to type-check...
                                        break;
                                    case null:
                                        throw new System.ArgumentException($"Expected {nameof(value)}[{__idx_f64a5c}] to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received null", nameof(value));
                                    default:
                                        throw new System.ArgumentException($"Expected {nameof(value)}[{__idx_f64a5c}] to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {cast_cd4240[__idx_f64a5c].GetType().FullName}", nameof(value));
                                }
                            }
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, object[]; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _domains = value;
            }
        }

        private object? _domainType;

        /// <remarks>
        /// <strong>Property</strong>: domainType: Domain type. Valid values: one, all, multiple.
        /// **Note:** This parameter must be specified along with or without the CertType and CertBrand parameters.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "domainType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? DomainType
        {
            get => _domainType;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case string cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _domainType = value;
            }
        }

        private object? _email;

        /// <remarks>
        /// <strong>Property</strong>: email: The email address of the applicant. After the CA receives your certificate
        /// application, the CA sends a verification email to the email address that you
        /// specify. You must log on to the mailbox, open the mail, and complete the
        /// verification of the domain name ownership based on the steps that are described
        /// in the email.
        /// If you do not specify this parameter, the information about the most recent
        /// contact that is added to the Information Management module is used. For more
        /// information about how to add a contact to the Information Management module, see
        /// [Manage contacts]().
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "email", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? Email
        {
            get => _email;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case string cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _email = value;
            }
        }

        private object? _phone;

        /// <remarks>
        /// <strong>Property</strong>: phone: The contact phone number of the applicant. CA staff can call the phone number to
        /// confirm the information in your certificate application.
        /// If you do not specify this parameter, the information about the most recent
        /// contact that is added to the Information Management module is used. For more
        /// information about how to add a contact to the Information Management module, see
        /// [Manage contacts]().
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "phone", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? Phone
        {
            get => _phone;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case string cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _phone = value;
            }
        }

        private object? _productCode;

        /// <remarks>
        /// <strong>Property</strong>: productCode: The specifications of the certificate that you want to apply for. Valid values:
        /// - digicert-free-1-free (default): DigiCert single-domain domain validated (DV)
        /// certificate, which is free and valid for 3 months.
        /// - symantec-free-1-free: DigiCert single-domain DV certificate, which is free and
        /// valid for 1 year.
        /// - symantec-dv-1-starter: DigiCert wildcard DV certificate.
        /// - symantec-ov-1-personal: DigiCert single-domain organization validated (OV)
        /// certificate.
        /// - symantec-ov-w-personal: DigiCert wildcard OV certificate.
        /// - geotrust-dv-1-starter: GeoTrust single-domain DV certificate.
        /// - geotrust-dv-w-starter: GeoTrust wildcard DV certificate.
        /// - geotrust-ov-1-personal: GeoTrust single-domain OV certificate.
        /// - geotrust-ov-w-personal: GeoTrust wildcard OV certificate.
        /// - globalsign-dv-1-personal: GlobalSign single-domain DV certificate.
        /// - globalsign-dv-w-advanced: GlobalSign wildcard DV certificate.
        /// - globalsign-ov-1-personal: GlobalSign single-domain OV certificate.
        /// - globalsign-ov-w-advanced: GlobalSign wildcard OV certificate.
        /// - cfca-ov-1-personal: China Financial Certification Authority (CFCA)
        /// single-domain OV certificate.
        /// - cfca-ev-w-advanced: CFCA wildcard OV certificate.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "productCode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? ProductCode
        {
            get => _productCode;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case string cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _productCode = value;
            }
        }

        private object? _username;

        /// <remarks>
        /// <strong>Property</strong>: username: The name of the applicant.
        /// If you do not specify this parameter, the information about the most recent
        /// contact that is added to the Information Management module is used. For more
        /// information about how to add a contact to the Information Management module, see
        /// [Manage contacts]().
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "username", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? Username
        {
            get => _username;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case string cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _username = value;
            }
        }

        private object? _validateType;

        /// <remarks>
        /// <strong>Property</strong>: validateType: How domain ownership is verified. Valid values:
        /// - DNS: DNS validation The ownership of the domain name is verified by adding a TXT type DNS record to the domain name's DNS management platform. You need administrative permission for domain resolution to complete validation.
        /// - FILE: File validation Ownership of a domain name is verified by creating a specified file on the domain name server. You need administrator access to your domain name server to complete validation.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "validateType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? ValidateType
        {
            get => _validateType;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case string cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _validateType = value;
            }
        }
    }
}
