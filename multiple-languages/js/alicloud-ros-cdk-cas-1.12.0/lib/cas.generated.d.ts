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
