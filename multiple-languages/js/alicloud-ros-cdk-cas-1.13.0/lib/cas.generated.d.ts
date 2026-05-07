import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `RosCertificate`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cas-certificate
 */
export interface RosCertificateProps {
    /**
     * @Property cert: Specify the content of the certificate. To use the PEM encoding format.
     */
    readonly cert: string | ros.IResolvable;
    /**
     * @Property key: Specify the certificate private key content. To use the PEM encoding format.
     */
    readonly key: string | ros.IResolvable;
    /**
     * @Property name: Custom certificate name. The certificate name under a user cannot be duplicated.
     */
    readonly name: string | ros.IResolvable;
    /**
     * @Property lang: Specifies the language type for requesting and receiving messages.
     */
    readonly lang?: string | ros.IResolvable;
    /**
     * @Property sourceIp: Specifies the source IP address of the request.
     */
    readonly sourceIp?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::CAS::Certificate`, which is used to add a certificate.
 * @Note This class does not contain additional functions, so it is recommended to use the `Certificate` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cas-certificate
 */
export declare class RosCertificate extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CAS::Certificate";
    /**
     * @Attribute CertId: Certificate ID.
     */
    readonly attrCertId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property cert: Specify the content of the certificate. To use the PEM encoding format.
     */
    cert: string | ros.IResolvable;
    /**
     * @Property key: Specify the certificate private key content. To use the PEM encoding format.
     */
    key: string | ros.IResolvable;
    /**
     * @Property name: Custom certificate name. The certificate name under a user cannot be duplicated.
     */
    name: string | ros.IResolvable;
    /**
     * @Property lang: Specifies the language type for requesting and receiving messages.
     */
    lang: string | ros.IResolvable | undefined;
    /**
     * @Property sourceIp: Specifies the source IP address of the request.
     */
    sourceIp: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosCertificateProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
/**
 * Properties for defining a `RosOrder`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cas-order
 */
export interface RosOrderProps {
    /**
     * @Property certBrand: Certificate brand. Valid values: Rapid, Globalsign, vTrus, Wosign, Digicert, Digicert pro, Geotrust, CFCA.
     */
    readonly certBrand: string | ros.IResolvable;
    /**
     * @Property certType: Certificate type. Valid values: DV, OV, EV.
     */
    readonly certType: string | ros.IResolvable;
    /**
     * @Property domainCnt: Number of domains to be included in the certificate. Valid values: 1-500.
     */
    readonly domainCnt?: number | ros.IResolvable;
    /**
     * @Property domainType: Domain type. Valid values: one, all, multiple.
     */
    readonly domainType?: string | ros.IResolvable;
    /**
     * @Property period: Service time of the certificate, in year. Valid values: 1, 2, 3.
     * Note: Starting September 1, 2020, certificates issued by cas around the world will be valid for a maximum of 1 year.
     */
    readonly period?: number | ros.IResolvable;
    /**
     * @Property service: Whether enable other service. Valid values:
     * - NoNeed: Do not apply for any services.
     * - ExpeditedProduct: Request assistance services.
     * - DeployProduct: Deploy services.
     * - SM2DeployProduct: Deploy services with SM2 encryption.
     * - VipProduct: Request assistance and deployment services.
     * **Note:** This parameter is not supported by international stations.
     */
    readonly service?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::CAS::Order`, which is used to create a certificate order.
 * @Note This class does not contain additional functions, so it is recommended to use the `Order` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cas-order
 */
export declare class RosOrder extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CAS::Order";
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property certBrand: Certificate brand. Valid values: Rapid, Globalsign, vTrus, Wosign, Digicert, Digicert pro, Geotrust, CFCA.
     */
    certBrand: string | ros.IResolvable;
    /**
     * @Property certType: Certificate type. Valid values: DV, OV, EV.
     */
    certType: string | ros.IResolvable;
    /**
     * @Property domainCnt: Number of domains to be included in the certificate. Valid values: 1-500.
     */
    domainCnt: number | ros.IResolvable | undefined;
    /**
     * @Property domainType: Domain type. Valid values: one, all, multiple.
     */
    domainType: string | ros.IResolvable | undefined;
    /**
     * @Property period: Service time of the certificate, in year. Valid values: 1, 2, 3.
     * Note: Starting September 1, 2020, certificates issued by cas around the world will be valid for a maximum of 1 year.
     */
    period: number | ros.IResolvable | undefined;
    /**
     * @Property service: Whether enable other service. Valid values:
     * - NoNeed: Do not apply for any services.
     * - ExpeditedProduct: Request assistance services.
     * - DeployProduct: Deploy services.
     * - SM2DeployProduct: Deploy services with SM2 encryption.
     * - VipProduct: Request assistance and deployment services.
     * **Note:** This parameter is not supported by international stations.
     */
    service: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosOrderProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
/**
 * Properties for defining a `RosPcaCertificate`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cas-pcacertificate
 */
export interface RosPcaCertificateProps {
    /**
     * @Property commonName: The common name or abbreviation of the organization. Support the use of Chinese, English characters.
     */
    readonly commonName: string | ros.IResolvable;
    /**
     * @Property locality: Name of the city where the organization is located. Support the use of Chinese, English characters.
     */
    readonly locality: string | ros.IResolvable;
    /**
     * @Property organization: The name of the organization (corresponding to your enterprise or company) associated with the root CA certificate. Support the use of Chinese, English characters.
     */
    readonly organization: string | ros.IResolvable;
    /**
     * @Property organizationUnit: The name of the department or branch under the organization. Support the use of Chinese, English characters.
     */
    readonly organizationUnit: string | ros.IResolvable;
    /**
     * @Property state: <props = "china"> The name of the province, municipality, or autonomous region in which the organization is located. Support the use of Chinese, English characters. <\/props>
     * <props = "intl"> Name of the province or state where the organization is located. Support the use of Chinese, English characters. <\/props>.
     */
    readonly state: string | ros.IResolvable;
    /**
     * @Property years: The validity period of the root CA certificate, in years.
     * > It is recommended to set to 5~10 years.
     */
    readonly years: number | ros.IResolvable;
    /**
     * @Property algorithm: The key algorithm type of the root CA certificate. The key algorithm is expressed using the '<encryption algorithm >_< key length>' format. Value:
     * - **RSA_1024**: The corresponding signature algorithm is Sha256WithRSA.
     * - **RSA_2048**: The corresponding signature algorithm is Sha256WithRSA.
     * - **RSA_4096**: The corresponding signature algorithm is Sha256WithRSA.
     * - **ECC_256**: The signature algorithm is Sha256WithECDSA.
     * - **ECC_384**: The corresponding signature algorithm is Sha256WithECDSA.
     * - **ECC_512**: The signature algorithm is Sha256WithECDSA.
     * - **SM2_256**: The corresponding signature algorithm is SM3WithSM2.
     *
     * The encryption algorithm of the root CA certificate must be the same as the **certificate algorithm** of the private Root CA you purchased. Example: If the **certificate algorithm** selected when you purchase a private Root CA is **RSA**, the key algorithm of the root CA certificate must be **RSA\_1024**, **RSA\_2048**, or **RSA\_4096**.
     */
    readonly algorithm?: string | ros.IResolvable;
    /**
     * @Property caStatus: The current CA status. Value:
     * - Issue: Enabled.
     * - Forbidden: Disabled.
     * - Revoke: Revoked.
     */
    readonly caStatus?: string | ros.IResolvable;
    /**
     * @Property countryCode: The code of the country or region in which the organization is located, using a two-digit capital abbreviation. For example, **CN** represents China and **US** represents the United States.
     * For more information about the codes of different countries, see **International Code** in [Management Company Information](~~ 198289 ~~).
     */
    readonly countryCode?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::CAS::PcaCertificate`.
 * @Note This class does not contain additional functions, so it is recommended to use the `PcaCertificate` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cas-pcacertificate
 */
export declare class RosPcaCertificate extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CAS::PcaCertificate";
    /**
     * @Attribute Algorithm: The key algorithm type of the root CA certificate. The key algorithm is expressed using the '<encryption algorithm >_< key length>' format.
     */
    readonly attrAlgorithm: ros.IResolvable;
    /**
     * @Attribute CertificateType: The type of CA.
     */
    readonly attrCertificateType: ros.IResolvable;
    /**
     * @Attribute CommonName: The common name or abbreviation of the organization. Support the use of Chinese, English characters.
     */
    readonly attrCommonName: ros.IResolvable;
    /**
     * @Attribute CountryCode: The code of the country or region in which the organization is located, using a two-digit capital abbreviation. For example, **CN** represents China and **US** represents the United States.
     */
    readonly attrCountryCode: ros.IResolvable;
    /**
     * @Attribute Identifier: Certificate Identifier.
     */
    readonly attrIdentifier: ros.IResolvable;
    /**
     * @Attribute IssuerType: The institution issuing the CA.
     */
    readonly attrIssuerType: ros.IResolvable;
    /**
     * @Attribute Locality: Name of the city where the organization is located. Support the use of Chinese, English characters.
     */
    readonly attrLocality: ros.IResolvable;
    /**
     * @Attribute Organization: The name of the organization (corresponding to your enterprise or company) associated with the root CA certificate. Support the use of Chinese, English characters.
     */
    readonly attrOrganization: ros.IResolvable;
    /**
     * @Attribute OrganizationUnit: The name of the department or branch under the organization. Support the use of Chinese, English characters.
     */
    readonly attrOrganizationUnit: ros.IResolvable;
    /**
     * @Attribute State: <props = "china"> The name of the province, municipality, or autonomous region in which the organization is located. Support the use of Chinese, English characters.
     */
    readonly attrState: ros.IResolvable;
    /**
     * @Attribute Years: The validity period of the root CA certificate, in years.
     */
    readonly attrYears: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property commonName: The common name or abbreviation of the organization. Support the use of Chinese, English characters.
     */
    commonName: string | ros.IResolvable;
    /**
     * @Property locality: Name of the city where the organization is located. Support the use of Chinese, English characters.
     */
    locality: string | ros.IResolvable;
    /**
     * @Property organization: The name of the organization (corresponding to your enterprise or company) associated with the root CA certificate. Support the use of Chinese, English characters.
     */
    organization: string | ros.IResolvable;
    /**
     * @Property organizationUnit: The name of the department or branch under the organization. Support the use of Chinese, English characters.
     */
    organizationUnit: string | ros.IResolvable;
    /**
     * @Property state: <props = "china"> The name of the province, municipality, or autonomous region in which the organization is located. Support the use of Chinese, English characters. <\/props>
     * <props = "intl"> Name of the province or state where the organization is located. Support the use of Chinese, English characters. <\/props>.
     */
    state: string | ros.IResolvable;
    /**
     * @Property years: The validity period of the root CA certificate, in years.
     * > It is recommended to set to 5~10 years.
     */
    years: number | ros.IResolvable;
    /**
     * @Property algorithm: The key algorithm type of the root CA certificate. The key algorithm is expressed using the '<encryption algorithm >_< key length>' format. Value:
     * - **RSA_1024**: The corresponding signature algorithm is Sha256WithRSA.
     * - **RSA_2048**: The corresponding signature algorithm is Sha256WithRSA.
     * - **RSA_4096**: The corresponding signature algorithm is Sha256WithRSA.
     * - **ECC_256**: The signature algorithm is Sha256WithECDSA.
     * - **ECC_384**: The corresponding signature algorithm is Sha256WithECDSA.
     * - **ECC_512**: The signature algorithm is Sha256WithECDSA.
     * - **SM2_256**: The corresponding signature algorithm is SM3WithSM2.
     *
     * The encryption algorithm of the root CA certificate must be the same as the **certificate algorithm** of the private Root CA you purchased. Example: If the **certificate algorithm** selected when you purchase a private Root CA is **RSA**, the key algorithm of the root CA certificate must be **RSA\_1024**, **RSA\_2048**, or **RSA\_4096**.
     */
    algorithm: string | ros.IResolvable | undefined;
    /**
     * @Property caStatus: The current CA status. Value:
     * - Issue: Enabled.
     * - Forbidden: Disabled.
     * - Revoke: Revoked.
     */
    caStatus: string | ros.IResolvable | undefined;
    /**
     * @Property countryCode: The code of the country or region in which the organization is located, using a two-digit capital abbreviation. For example, **CN** represents China and **US** represents the United States.
     * For more information about the codes of different countries, see **International Code** in [Management Company Information](~~ 198289 ~~).
     */
    countryCode: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosPcaCertificateProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
/**
 * Properties for defining a `RosSslCertificate`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cas-sslcertificate
 */
export interface RosSslCertificateProps {
    /**
     * @Property certBrand: Certificate brand. Valid values: Rapid, Globalsign, vTrus, Wosign, Digicert, Digicert pro, Geotrust, CFCA.
     * **Note:** This parameter must be specified along with or without the CertType and DomainTyp parameters.
     */
    readonly certBrand?: string | ros.IResolvable;
    /**
     * @Property certType: Certificate type. Valid values: DV, OV, EV.
     * **Note:** This parameter must be specified along with or without the DomainType and CertBrand parameters.
     */
    readonly certType?: string | ros.IResolvable;
    /**
     * @Property companyName: The name of the certificate application company.
     * **Note**: This parameter is only applicable when applying for OV certificates.
     * When applying for OV certificate, if you set the company name here, it means that the corresponding company information in the information management module is used; If you do not set this parameter, it indicates that the latest company information added is selected from the information management module.
     */
    readonly companyName?: string | ros.IResolvable;
    /**
     * @Property csr: The contents of a manually generated CSR file for a domain name using the OpenSSL or Keytool tools. The CSR key type must be RSA or ECC, and the RSA key length must be greater than or equal to 2048. If this parameter is not set, the CSR is automatically created for you by the SSL certificate service.
     * A CSR (Certificate Signing Request) is a certificate signing request file that contains information about your server and your company. When you apply for a certificate, you will need to submit the CSR file of your certificate to the CA certification authority for review. After the CA center signs the CSR file with the root certificate's private key, it will generate the certificate public key file (that is, the SSL certificate issued to you).
     */
    readonly csr?: string | ros.IResolvable;
    /**
     * @Property domains: The domain to bind the certificate to. The specific requirements are as follows:
     * - Supports single or wildcard domains (e.g., *.aliyundoc.com).
     * - Multiple domains are supported. You can set up to 5 domains.
     * - If you set more than one domain name, the multiple domains can only be single domain name or wildcard domain name, not both single domain name and wildcard domain name.
     * **Note:** This is required when the certificate is bound to more than one hostname. This parameter is not allowed to be empty at the same time as the Csr parameter. If you set both this parameter and the Csr parameter, take the CN field value in the Csr as the domain name for the certificate to bind to.
     */
    readonly domains?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property domainType: Domain type. Valid values: one, all, multiple.
     * **Note:** This parameter must be specified along with or without the CertType and CertBrand parameters.
     */
    readonly domainType?: string | ros.IResolvable;
    /**
     * @Property email: The applicant's email.
     */
    readonly email?: string | ros.IResolvable;
    /**
     * @Property phone: The applicant's mobile phone number. A CA official may contact you at this number to verify your certificate request.
     */
    readonly phone?: string | ros.IResolvable;
    /**
     * @Property productCode: Specification of the certificate to apply for. Value:
     * - digicert-free-1-free (default) : This indicates DigiCert DV single-domain certificates (free 3-month certificates).
     * - symantec-free 1-free: Stands for DigiCert DV free single-domain certificate (1-year free certificate).
     * - symantec-dv-1-starter: This represents the DigiCert DV wildcard domain name certificate.
     * - symantec-ov-1-personal: This stands for DigiCert OV single-domain certificate
     * - symantec-ov-w-personal: This stands for DigiCert OV wildcard domain name certificate.
     * - geotrust-dv-1-starter: This represents the GeoTrust DV single-domain certificate.
     * - geotrust-dv-w-starter: This represents the GeoTrust DV wildcard domain name certificate.
     * - geotrust-ov-1-personal: This stands for GeoTrust OV single-domain certificate.
     * - geotrust-ov-w-personal: This represents the GeoTrust OV wildcard domain name certificate.
     * - globalsign-dv-1-personal: This stands for GlobalSign DV single-domain certificate.
     * - globalsign-dv-w-advanced: This stands for GlobalSign DV wildcard domain name certificate.
     * - globalsign-ov-1-personal: This stands for GlobalSign OV single-domain certificate.
     * - globalsign-ov-w-advanced: This represents the GlobalSign OV wildcard domain name certificate.
     * - cfca-ov-1-personal: This stands for CFCA OV single domain certificate
     * - cfca-ev-w-advanced: This stands for CFCA OV wildcard domain name certificate.
     * **Note:** If you specify this parameter, you do not need to specify the DomainType, CertType, and CertBrand parameters; otherwise, this parameter will prevail.
     */
    readonly productCode?: string | ros.IResolvable;
    /**
     * @Property username: The applicant's name.
     */
    readonly username?: string | ros.IResolvable;
    /**
     * @Property validateType: How domain ownership is verified. Valid values:
     * - DNS: DNS validation The ownership of the domain name is verified by adding a TXT type DNS record to the domain name's DNS management platform. You need administrative permission for domain resolution to complete validation.
     * - FILE: File validation Ownership of a domain name is verified by creating a specified file on the domain name server. You need administrator access to your domain name server to complete validation.
     */
    readonly validateType?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::CAS::SslCertificate`, which is used to create an SSL certificate.
 * @Note This class does not contain additional functions, so it is recommended to use the `SslCertificate` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cas-sslcertificate
 */
export declare class RosSslCertificate extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CAS::SslCertificate";
    /**
     * @Attribute CertificateId: The ID of the certificate issued to you.
     */
    readonly attrCertificateId: ros.IResolvable;
    /**
     * @Attribute OrderId: The ID of the certificate order.
     */
    readonly attrOrderId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property certBrand: Certificate brand. Valid values: Rapid, Globalsign, vTrus, Wosign, Digicert, Digicert pro, Geotrust, CFCA.
     * **Note:** This parameter must be specified along with or without the CertType and DomainTyp parameters.
     */
    certBrand: string | ros.IResolvable | undefined;
    /**
     * @Property certType: Certificate type. Valid values: DV, OV, EV.
     * **Note:** This parameter must be specified along with or without the DomainType and CertBrand parameters.
     */
    certType: string | ros.IResolvable | undefined;
    /**
     * @Property companyName: The name of the certificate application company.
     * **Note**: This parameter is only applicable when applying for OV certificates.
     * When applying for OV certificate, if you set the company name here, it means that the corresponding company information in the information management module is used; If you do not set this parameter, it indicates that the latest company information added is selected from the information management module.
     */
    companyName: string | ros.IResolvable | undefined;
    /**
     * @Property csr: The contents of a manually generated CSR file for a domain name using the OpenSSL or Keytool tools. The CSR key type must be RSA or ECC, and the RSA key length must be greater than or equal to 2048. If this parameter is not set, the CSR is automatically created for you by the SSL certificate service.
     * A CSR (Certificate Signing Request) is a certificate signing request file that contains information about your server and your company. When you apply for a certificate, you will need to submit the CSR file of your certificate to the CA certification authority for review. After the CA center signs the CSR file with the root certificate's private key, it will generate the certificate public key file (that is, the SSL certificate issued to you).
     */
    csr: string | ros.IResolvable | undefined;
    /**
     * @Property domains: The domain to bind the certificate to. The specific requirements are as follows:
     * - Supports single or wildcard domains (e.g., *.aliyundoc.com).
     * - Multiple domains are supported. You can set up to 5 domains.
     * - If you set more than one domain name, the multiple domains can only be single domain name or wildcard domain name, not both single domain name and wildcard domain name.
     * **Note:** This is required when the certificate is bound to more than one hostname. This parameter is not allowed to be empty at the same time as the Csr parameter. If you set both this parameter and the Csr parameter, take the CN field value in the Csr as the domain name for the certificate to bind to.
     */
    domains: Array<string | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @Property domainType: Domain type. Valid values: one, all, multiple.
     * **Note:** This parameter must be specified along with or without the CertType and CertBrand parameters.
     */
    domainType: string | ros.IResolvable | undefined;
    /**
     * @Property email: The applicant's email.
     */
    email: string | ros.IResolvable | undefined;
    /**
     * @Property phone: The applicant's mobile phone number. A CA official may contact you at this number to verify your certificate request.
     */
    phone: string | ros.IResolvable | undefined;
    /**
     * @Property productCode: Specification of the certificate to apply for. Value:
     * - digicert-free-1-free (default) : This indicates DigiCert DV single-domain certificates (free 3-month certificates).
     * - symantec-free 1-free: Stands for DigiCert DV free single-domain certificate (1-year free certificate).
     * - symantec-dv-1-starter: This represents the DigiCert DV wildcard domain name certificate.
     * - symantec-ov-1-personal: This stands for DigiCert OV single-domain certificate
     * - symantec-ov-w-personal: This stands for DigiCert OV wildcard domain name certificate.
     * - geotrust-dv-1-starter: This represents the GeoTrust DV single-domain certificate.
     * - geotrust-dv-w-starter: This represents the GeoTrust DV wildcard domain name certificate.
     * - geotrust-ov-1-personal: This stands for GeoTrust OV single-domain certificate.
     * - geotrust-ov-w-personal: This represents the GeoTrust OV wildcard domain name certificate.
     * - globalsign-dv-1-personal: This stands for GlobalSign DV single-domain certificate.
     * - globalsign-dv-w-advanced: This stands for GlobalSign DV wildcard domain name certificate.
     * - globalsign-ov-1-personal: This stands for GlobalSign OV single-domain certificate.
     * - globalsign-ov-w-advanced: This represents the GlobalSign OV wildcard domain name certificate.
     * - cfca-ov-1-personal: This stands for CFCA OV single domain certificate
     * - cfca-ev-w-advanced: This stands for CFCA OV wildcard domain name certificate.
     * **Note:** If you specify this parameter, you do not need to specify the DomainType, CertType, and CertBrand parameters; otherwise, this parameter will prevail.
     */
    productCode: string | ros.IResolvable | undefined;
    /**
     * @Property username: The applicant's name.
     */
    username: string | ros.IResolvable | undefined;
    /**
     * @Property validateType: How domain ownership is verified. Valid values:
     * - DNS: DNS validation The ownership of the domain name is verified by adding a TXT type DNS record to the domain name's DNS management platform. You need administrative permission for domain resolution to complete validation.
     * - FILE: File validation Ownership of a domain name is verified by creating a specified file on the domain name server. You need administrator access to your domain name server to complete validation.
     */
    validateType: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosSslCertificateProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
/**
 * Properties for defining a `RosUserCertificate`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cas-usercertificate
 */
export interface RosUserCertificateProps {
    /**
     * @Property cert: The certificate content in PEM format.
     */
    readonly cert?: string | ros.IResolvable;
    /**
     * @Property certificateName: Custom certificate name. Maximum supported character length:128. All character types are supported, including letters, numbers and underscores.
     *  The certificate name under the same user cannot be duplicated.
     */
    readonly certificateName?: string | ros.IResolvable;
    /**
     * @Property encryptCert: The content of the encryption certificate in PEM format.
     */
    readonly encryptCert?: string | ros.IResolvable;
    /**
     * @Property encryptPrivateKey: The private key content of the encryption certificate in PEM format.
     */
    readonly encryptPrivateKey?: string | ros.IResolvable;
    /**
     * @Property key: The private key content of the certificate in PEM format.
     */
    readonly key?: string | ros.IResolvable;
    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * @Property resourceId: Resource ID.
     */
    readonly resourceId?: string | ros.IResolvable;
    /**
     * @Property signCert: The signature certificate content in PEM format.
     */
    readonly signCert?: string | ros.IResolvable;
    /**
     * @Property signPrivateKey: The private key content of the signature certificate in PEM format.
     */
    readonly signPrivateKey?: string | ros.IResolvable;
    /**
     * @Property tags: Tags of certificate.
     */
    readonly tags?: RosUserCertificate.TagsProperty[];
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::CAS::UserCertificate`.
 * @Note This class does not contain additional functions, so it is recommended to use the `UserCertificate` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cas-usercertificate
 */
export declare class RosUserCertificate extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CAS::UserCertificate";
    /**
     * @Attribute Cert: The certificate content in PEM format.
     */
    readonly attrCert: ros.IResolvable;
    /**
     * @Attribute CertId: Certificate ID.
     */
    readonly attrCertId: ros.IResolvable;
    /**
     * @Attribute CertificateName: Custom certificate name. Maximum supported character length:128. All character types are supported, including letters, numbers and underscores.
     */
    readonly attrCertificateName: ros.IResolvable;
    /**
     * @Attribute EncryptCert: The content of the encryption certificate in PEM format.
     */
    readonly attrEncryptCert: ros.IResolvable;
    /**
     * @Attribute EncryptPrivateKey: The private key content of the encryption certificate in PEM format.
     */
    readonly attrEncryptPrivateKey: ros.IResolvable;
    /**
     * @Attribute Key: The private key content of the certificate in PEM format.
     */
    readonly attrKey: ros.IResolvable;
    /**
     * @Attribute ResourceGroupId: The ID of the resource group.
     */
    readonly attrResourceGroupId: ros.IResolvable;
    /**
     * @Attribute SignCert: The signature certificate content in PEM format.
     */
    readonly attrSignCert: ros.IResolvable;
    /**
     * @Attribute SignPrivateKey: The private key content of the signature certificate in PEM format.
     */
    readonly attrSignPrivateKey: ros.IResolvable;
    /**
     * @Attribute Tags: The tag of the resource.
     */
    readonly attrTags: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property cert: The certificate content in PEM format.
     */
    cert: string | ros.IResolvable | undefined;
    /**
     * @Property certificateName: Custom certificate name. Maximum supported character length:128. All character types are supported, including letters, numbers and underscores.
     *  The certificate name under the same user cannot be duplicated.
     */
    certificateName: string | ros.IResolvable | undefined;
    /**
     * @Property encryptCert: The content of the encryption certificate in PEM format.
     */
    encryptCert: string | ros.IResolvable | undefined;
    /**
     * @Property encryptPrivateKey: The private key content of the encryption certificate in PEM format.
     */
    encryptPrivateKey: string | ros.IResolvable | undefined;
    /**
     * @Property key: The private key content of the certificate in PEM format.
     */
    key: string | ros.IResolvable | undefined;
    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property resourceId: Resource ID.
     */
    resourceId: string | ros.IResolvable | undefined;
    /**
     * @Property signCert: The signature certificate content in PEM format.
     */
    signCert: string | ros.IResolvable | undefined;
    /**
     * @Property signPrivateKey: The private key content of the signature certificate in PEM format.
     */
    signPrivateKey: string | ros.IResolvable | undefined;
    /**
     * @Property tags: Tags of certificate.
     */
    tags: RosUserCertificate.TagsProperty[] | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosUserCertificateProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosUserCertificate {
    /**
     * @stability external
     */
    interface TagsProperty {
        /**
         * @Property value: undefined
         */
        readonly value?: string | ros.IResolvable;
        /**
         * @Property key: undefined
         */
        readonly key: string | ros.IResolvable;
    }
}
