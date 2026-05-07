// Generated from the AliCloud ROS Resource Specification

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
 * Determine whether the given properties match those of a `RosCertificateProps`
 *
 * @param properties - the TypeScript properties of a `RosCertificateProps`
 *
 * @returns the result of the validation.
 */
function RosCertificatePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('sourceIp', ros.validateString)(properties.sourceIp));
    errors.collect(ros.propertyValidator('lang', ros.validateString)(properties.lang));
    errors.collect(ros.propertyValidator('cert', ros.requiredValidator)(properties.cert));
    errors.collect(ros.propertyValidator('cert', ros.validateString)(properties.cert));
    errors.collect(ros.propertyValidator('key', ros.requiredValidator)(properties.key));
    errors.collect(ros.propertyValidator('key', ros.validateString)(properties.key));
    errors.collect(ros.propertyValidator('name', ros.requiredValidator)(properties.name));
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    return errors.wrap('supplied properties not correct for "RosCertificateProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CAS::Certificate` resource
 *
 * @param properties - the TypeScript properties of a `RosCertificateProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CAS::Certificate` resource.
 */
// @ts-ignore TS6133
function rosCertificatePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosCertificatePropsValidator(properties).assertSuccess();
    }
    return {
      'Cert': ros.stringToRosTemplate(properties.cert),
      'Key': ros.stringToRosTemplate(properties.key),
      'Name': ros.stringToRosTemplate(properties.name),
      'Lang': ros.stringToRosTemplate(properties.lang),
      'SourceIp': ros.stringToRosTemplate(properties.sourceIp),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::CAS::Certificate`, which is used to add a certificate.
 * @Note This class does not contain additional functions, so it is recommended to use the `Certificate` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cas-certificate
 */
export class RosCertificate extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CAS::Certificate";

    /**
     * @Attribute CertId: Certificate ID.
     */
    public readonly attrCertId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property cert: Specify the content of the certificate. To use the PEM encoding format.
     */
    public cert: string | ros.IResolvable;

    /**
     * @Property key: Specify the certificate private key content. To use the PEM encoding format.
     */
    public key: string | ros.IResolvable;

    /**
     * @Property name: Custom certificate name. The certificate name under a user cannot be duplicated.
     */
    public name: string | ros.IResolvable;

    /**
     * @Property lang: Specifies the language type for requesting and receiving messages.
     */
    public lang: string | ros.IResolvable | undefined;

    /**
     * @Property sourceIp: Specifies the source IP address of the request.
     */
    public sourceIp: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosCertificateProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosCertificate.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrCertId = this.getAtt('CertId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.cert = props.cert;
        this.key = props.key;
        this.name = props.name;
        this.lang = props.lang;
        this.sourceIp = props.sourceIp;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            cert: this.cert,
            key: this.key,
            name: this.name,
            lang: this.lang,
            sourceIp: this.sourceIp,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosCertificatePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
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
 * Determine whether the given properties match those of a `RosOrderProps`
 *
 * @param properties - the TypeScript properties of a `RosOrderProps`
 *
 * @returns the result of the validation.
 */
function RosOrderPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.domainCnt && (typeof properties.domainCnt) !== 'object') {
        errors.collect(ros.propertyValidator('domainCnt', ros.validateRange)({
            data: properties.domainCnt,
            min: 1,
            max: 500,
          }));
    }
    errors.collect(ros.propertyValidator('domainCnt', ros.validateNumber)(properties.domainCnt));
    if(properties.domainType && (typeof properties.domainType) !== 'object') {
        errors.collect(ros.propertyValidator('domainType', ros.validateAllowedValues)({
          data: properties.domainType,
          allowedValues: ["all","one","multiple"],
        }));
    }
    errors.collect(ros.propertyValidator('domainType', ros.validateString)(properties.domainType));
    if(properties.period && (typeof properties.period) !== 'object') {
        errors.collect(ros.propertyValidator('period', ros.validateRange)({
            data: properties.period,
            min: 1,
            max: 3,
          }));
    }
    errors.collect(ros.propertyValidator('period', ros.validateNumber)(properties.period));
    errors.collect(ros.propertyValidator('certType', ros.requiredValidator)(properties.certType));
    if(properties.certType && (typeof properties.certType) !== 'object') {
        errors.collect(ros.propertyValidator('certType', ros.validateAllowedValues)({
          data: properties.certType,
          allowedValues: ["DV","OV","EV"],
        }));
    }
    errors.collect(ros.propertyValidator('certType', ros.validateString)(properties.certType));
    if(properties.service && (typeof properties.service) !== 'object') {
        errors.collect(ros.propertyValidator('service', ros.validateAllowedValues)({
          data: properties.service,
          allowedValues: ["VipProduct","NoNeed","ExpeditedProduct","DeployProduct","SM2DeployProduct"],
        }));
    }
    errors.collect(ros.propertyValidator('service', ros.validateString)(properties.service));
    errors.collect(ros.propertyValidator('certBrand', ros.requiredValidator)(properties.certBrand));
    if(properties.certBrand && (typeof properties.certBrand) !== 'object') {
        errors.collect(ros.propertyValidator('certBrand', ros.validateAllowedValues)({
          data: properties.certBrand,
          allowedValues: ["Rapid","Globalsign","vTrus","Wosign","Digicert","Digicert pro","Geotrust","CFCA"],
        }));
    }
    errors.collect(ros.propertyValidator('certBrand', ros.validateString)(properties.certBrand));
    return errors.wrap('supplied properties not correct for "RosOrderProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CAS::Order` resource
 *
 * @param properties - the TypeScript properties of a `RosOrderProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CAS::Order` resource.
 */
// @ts-ignore TS6133
function rosOrderPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosOrderPropsValidator(properties).assertSuccess();
    }
    return {
      'CertBrand': ros.stringToRosTemplate(properties.certBrand),
      'CertType': ros.stringToRosTemplate(properties.certType),
      'DomainCnt': ros.numberToRosTemplate(properties.domainCnt),
      'DomainType': ros.stringToRosTemplate(properties.domainType),
      'Period': ros.numberToRosTemplate(properties.period),
      'Service': ros.stringToRosTemplate(properties.service),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::CAS::Order`, which is used to create a certificate order.
 * @Note This class does not contain additional functions, so it is recommended to use the `Order` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cas-order
 */
export class RosOrder extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CAS::Order";

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property certBrand: Certificate brand. Valid values: Rapid, Globalsign, vTrus, Wosign, Digicert, Digicert pro, Geotrust, CFCA.
     */
    public certBrand: string | ros.IResolvable;

    /**
     * @Property certType: Certificate type. Valid values: DV, OV, EV.
     */
    public certType: string | ros.IResolvable;

    /**
     * @Property domainCnt: Number of domains to be included in the certificate. Valid values: 1-500.
     */
    public domainCnt: number | ros.IResolvable | undefined;

    /**
     * @Property domainType: Domain type. Valid values: one, all, multiple.
     */
    public domainType: string | ros.IResolvable | undefined;

    /**
     * @Property period: Service time of the certificate, in year. Valid values: 1, 2, 3.
     * Note: Starting September 1, 2020, certificates issued by cas around the world will be valid for a maximum of 1 year.
     */
    public period: number | ros.IResolvable | undefined;

    /**
     * @Property service: Whether enable other service. Valid values:
     * - NoNeed: Do not apply for any services.
     * - ExpeditedProduct: Request assistance services.
     * - DeployProduct: Deploy services.
     * - SM2DeployProduct: Deploy services with SM2 encryption.
     * - VipProduct: Request assistance and deployment services.
     * **Note:** This parameter is not supported by international stations.
     */
    public service: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosOrderProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosOrder.ROS_RESOURCE_TYPE_NAME, properties: props });

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.certBrand = props.certBrand;
        this.certType = props.certType;
        this.domainCnt = props.domainCnt;
        this.domainType = props.domainType;
        this.period = props.period;
        this.service = props.service;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            certBrand: this.certBrand,
            certType: this.certType,
            domainCnt: this.domainCnt,
            domainType: this.domainType,
            period: this.period,
            service: this.service,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosOrderPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
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
 * Determine whether the given properties match those of a `RosPcaCertificateProps`
 *
 * @param properties - the TypeScript properties of a `RosPcaCertificateProps`
 *
 * @returns the result of the validation.
 */
function RosPcaCertificatePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('organization', ros.requiredValidator)(properties.organization));
    errors.collect(ros.propertyValidator('organization', ros.validateString)(properties.organization));
    errors.collect(ros.propertyValidator('years', ros.requiredValidator)(properties.years));
    if(properties.years && (typeof properties.years) !== 'object') {
        errors.collect(ros.propertyValidator('years', ros.validateRange)({
            data: properties.years,
            min: 1,
            max: 10,
          }));
    }
    errors.collect(ros.propertyValidator('years', ros.validateNumber)(properties.years));
    errors.collect(ros.propertyValidator('locality', ros.requiredValidator)(properties.locality));
    errors.collect(ros.propertyValidator('locality', ros.validateString)(properties.locality));
    errors.collect(ros.propertyValidator('state', ros.requiredValidator)(properties.state));
    errors.collect(ros.propertyValidator('state', ros.validateString)(properties.state));
    errors.collect(ros.propertyValidator('organizationUnit', ros.requiredValidator)(properties.organizationUnit));
    errors.collect(ros.propertyValidator('organizationUnit', ros.validateString)(properties.organizationUnit));
    errors.collect(ros.propertyValidator('countryCode', ros.validateString)(properties.countryCode));
    if(properties.algorithm && (typeof properties.algorithm) !== 'object') {
        errors.collect(ros.propertyValidator('algorithm', ros.validateAllowedValues)({
          data: properties.algorithm,
          allowedValues: ["RSA_1024","RSA_2048","RSA_4096","ECC_256","ECC_384","ECC_512","SM2_256"],
        }));
    }
    errors.collect(ros.propertyValidator('algorithm', ros.validateString)(properties.algorithm));
    if(properties.caStatus && (typeof properties.caStatus) !== 'object') {
        errors.collect(ros.propertyValidator('caStatus', ros.validateAllowedValues)({
          data: properties.caStatus,
          allowedValues: ["Issue","Forbidden","Revoke"],
        }));
    }
    errors.collect(ros.propertyValidator('caStatus', ros.validateString)(properties.caStatus));
    errors.collect(ros.propertyValidator('commonName', ros.requiredValidator)(properties.commonName));
    errors.collect(ros.propertyValidator('commonName', ros.validateString)(properties.commonName));
    return errors.wrap('supplied properties not correct for "RosPcaCertificateProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CAS::PcaCertificate` resource
 *
 * @param properties - the TypeScript properties of a `RosPcaCertificateProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CAS::PcaCertificate` resource.
 */
// @ts-ignore TS6133
function rosPcaCertificatePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosPcaCertificatePropsValidator(properties).assertSuccess();
    }
    return {
      'CommonName': ros.stringToRosTemplate(properties.commonName),
      'Locality': ros.stringToRosTemplate(properties.locality),
      'Organization': ros.stringToRosTemplate(properties.organization),
      'OrganizationUnit': ros.stringToRosTemplate(properties.organizationUnit),
      'State': ros.stringToRosTemplate(properties.state),
      'Years': ros.numberToRosTemplate(properties.years),
      'Algorithm': ros.stringToRosTemplate(properties.algorithm),
      'CaStatus': ros.stringToRosTemplate(properties.caStatus),
      'CountryCode': ros.stringToRosTemplate(properties.countryCode),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::CAS::PcaCertificate`.
 * @Note This class does not contain additional functions, so it is recommended to use the `PcaCertificate` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cas-pcacertificate
 */
export class RosPcaCertificate extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CAS::PcaCertificate";

    /**
     * @Attribute Algorithm: The key algorithm type of the root CA certificate. The key algorithm is expressed using the '<encryption algorithm >_< key length>' format.
     */
    public readonly attrAlgorithm: ros.IResolvable;

    /**
     * @Attribute CertificateType: The type of CA.
     */
    public readonly attrCertificateType: ros.IResolvable;

    /**
     * @Attribute CommonName: The common name or abbreviation of the organization. Support the use of Chinese, English characters.
     */
    public readonly attrCommonName: ros.IResolvable;

    /**
     * @Attribute CountryCode: The code of the country or region in which the organization is located, using a two-digit capital abbreviation. For example, **CN** represents China and **US** represents the United States.
     */
    public readonly attrCountryCode: ros.IResolvable;

    /**
     * @Attribute Identifier: Certificate Identifier.
     */
    public readonly attrIdentifier: ros.IResolvable;

    /**
     * @Attribute IssuerType: The institution issuing the CA.
     */
    public readonly attrIssuerType: ros.IResolvable;

    /**
     * @Attribute Locality: Name of the city where the organization is located. Support the use of Chinese, English characters.
     */
    public readonly attrLocality: ros.IResolvable;

    /**
     * @Attribute Organization: The name of the organization (corresponding to your enterprise or company) associated with the root CA certificate. Support the use of Chinese, English characters.
     */
    public readonly attrOrganization: ros.IResolvable;

    /**
     * @Attribute OrganizationUnit: The name of the department or branch under the organization. Support the use of Chinese, English characters.
     */
    public readonly attrOrganizationUnit: ros.IResolvable;

    /**
     * @Attribute State: <props = "china"> The name of the province, municipality, or autonomous region in which the organization is located. Support the use of Chinese, English characters.
     */
    public readonly attrState: ros.IResolvable;

    /**
     * @Attribute Years: The validity period of the root CA certificate, in years.
     */
    public readonly attrYears: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property commonName: The common name or abbreviation of the organization. Support the use of Chinese, English characters.
     */
    public commonName: string | ros.IResolvable;

    /**
     * @Property locality: Name of the city where the organization is located. Support the use of Chinese, English characters.
     */
    public locality: string | ros.IResolvable;

    /**
     * @Property organization: The name of the organization (corresponding to your enterprise or company) associated with the root CA certificate. Support the use of Chinese, English characters.
     */
    public organization: string | ros.IResolvable;

    /**
     * @Property organizationUnit: The name of the department or branch under the organization. Support the use of Chinese, English characters.
     */
    public organizationUnit: string | ros.IResolvable;

    /**
     * @Property state: <props = "china"> The name of the province, municipality, or autonomous region in which the organization is located. Support the use of Chinese, English characters. <\/props>
     * <props = "intl"> Name of the province or state where the organization is located. Support the use of Chinese, English characters. <\/props>.
     */
    public state: string | ros.IResolvable;

    /**
     * @Property years: The validity period of the root CA certificate, in years.
     * > It is recommended to set to 5~10 years.
     */
    public years: number | ros.IResolvable;

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
    public algorithm: string | ros.IResolvable | undefined;

    /**
     * @Property caStatus: The current CA status. Value:
     * - Issue: Enabled.
     * - Forbidden: Disabled.
     * - Revoke: Revoked.
     */
    public caStatus: string | ros.IResolvable | undefined;

    /**
     * @Property countryCode: The code of the country or region in which the organization is located, using a two-digit capital abbreviation. For example, **CN** represents China and **US** represents the United States.
     * For more information about the codes of different countries, see **International Code** in [Management Company Information](~~ 198289 ~~).
     */
    public countryCode: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosPcaCertificateProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosPcaCertificate.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAlgorithm = this.getAtt('Algorithm');
        this.attrCertificateType = this.getAtt('CertificateType');
        this.attrCommonName = this.getAtt('CommonName');
        this.attrCountryCode = this.getAtt('CountryCode');
        this.attrIdentifier = this.getAtt('Identifier');
        this.attrIssuerType = this.getAtt('IssuerType');
        this.attrLocality = this.getAtt('Locality');
        this.attrOrganization = this.getAtt('Organization');
        this.attrOrganizationUnit = this.getAtt('OrganizationUnit');
        this.attrState = this.getAtt('State');
        this.attrYears = this.getAtt('Years');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.commonName = props.commonName;
        this.locality = props.locality;
        this.organization = props.organization;
        this.organizationUnit = props.organizationUnit;
        this.state = props.state;
        this.years = props.years;
        this.algorithm = props.algorithm;
        this.caStatus = props.caStatus;
        this.countryCode = props.countryCode;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            commonName: this.commonName,
            locality: this.locality,
            organization: this.organization,
            organizationUnit: this.organizationUnit,
            state: this.state,
            years: this.years,
            algorithm: this.algorithm,
            caStatus: this.caStatus,
            countryCode: this.countryCode,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosPcaCertificatePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
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
 * Determine whether the given properties match those of a `RosSslCertificateProps`
 *
 * @param properties - the TypeScript properties of a `RosSslCertificateProps`
 *
 * @returns the result of the validation.
 */
function RosSslCertificatePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.domains && (Array.isArray(properties.domains) || (typeof properties.domains) === 'string')) {
        errors.collect(ros.propertyValidator('domains', ros.validateLength)({
            data: properties.domains.length,
            min: 1,
            max: 5,
          }));
    }
    errors.collect(ros.propertyValidator('domains', ros.listValidator(ros.validateString))(properties.domains));
    errors.collect(ros.propertyValidator('companyName', ros.validateString)(properties.companyName));
    errors.collect(ros.propertyValidator('csr', ros.validateString)(properties.csr));
    if(properties.domainType && (typeof properties.domainType) !== 'object') {
        errors.collect(ros.propertyValidator('domainType', ros.validateAllowedValues)({
          data: properties.domainType,
          allowedValues: ["all","one","multiple"],
        }));
    }
    errors.collect(ros.propertyValidator('domainType', ros.validateString)(properties.domainType));
    errors.collect(ros.propertyValidator('email', ros.validateString)(properties.email));
    errors.collect(ros.propertyValidator('productCode', ros.validateString)(properties.productCode));
    errors.collect(ros.propertyValidator('username', ros.validateString)(properties.username));
    errors.collect(ros.propertyValidator('phone', ros.validateString)(properties.phone));
    if(properties.certType && (typeof properties.certType) !== 'object') {
        errors.collect(ros.propertyValidator('certType', ros.validateAllowedValues)({
          data: properties.certType,
          allowedValues: ["DV","OV","EV"],
        }));
    }
    errors.collect(ros.propertyValidator('certType', ros.validateString)(properties.certType));
    if(properties.certBrand && (typeof properties.certBrand) !== 'object') {
        errors.collect(ros.propertyValidator('certBrand', ros.validateAllowedValues)({
          data: properties.certBrand,
          allowedValues: ["Rapid","Globalsign","vTrus","Wosign","Digicert","Digicert pro","Geotrust","CFCA"],
        }));
    }
    errors.collect(ros.propertyValidator('certBrand', ros.validateString)(properties.certBrand));
    if(properties.validateType && (typeof properties.validateType) !== 'object') {
        errors.collect(ros.propertyValidator('validateType', ros.validateAllowedValues)({
          data: properties.validateType,
          allowedValues: ["DNS","FILE"],
        }));
    }
    errors.collect(ros.propertyValidator('validateType', ros.validateString)(properties.validateType));
    return errors.wrap('supplied properties not correct for "RosSslCertificateProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CAS::SslCertificate` resource
 *
 * @param properties - the TypeScript properties of a `RosSslCertificateProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CAS::SslCertificate` resource.
 */
// @ts-ignore TS6133
function rosSslCertificatePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosSslCertificatePropsValidator(properties).assertSuccess();
    }
    return {
      'CertBrand': ros.stringToRosTemplate(properties.certBrand),
      'CertType': ros.stringToRosTemplate(properties.certType),
      'CompanyName': ros.stringToRosTemplate(properties.companyName),
      'Csr': ros.stringToRosTemplate(properties.csr),
      'Domains': ros.listMapper(ros.stringToRosTemplate)(properties.domains),
      'DomainType': ros.stringToRosTemplate(properties.domainType),
      'Email': ros.stringToRosTemplate(properties.email),
      'Phone': ros.stringToRosTemplate(properties.phone),
      'ProductCode': ros.stringToRosTemplate(properties.productCode),
      'Username': ros.stringToRosTemplate(properties.username),
      'ValidateType': ros.stringToRosTemplate(properties.validateType),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::CAS::SslCertificate`, which is used to create an SSL certificate.
 * @Note This class does not contain additional functions, so it is recommended to use the `SslCertificate` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cas-sslcertificate
 */
export class RosSslCertificate extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CAS::SslCertificate";

    /**
     * @Attribute CertificateId: The ID of the certificate issued to you.
     */
    public readonly attrCertificateId: ros.IResolvable;

    /**
     * @Attribute OrderId: The ID of the certificate order.
     */
    public readonly attrOrderId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property certBrand: Certificate brand. Valid values: Rapid, Globalsign, vTrus, Wosign, Digicert, Digicert pro, Geotrust, CFCA.
     * **Note:** This parameter must be specified along with or without the CertType and DomainTyp parameters.
     */
    public certBrand: string | ros.IResolvable | undefined;

    /**
     * @Property certType: Certificate type. Valid values: DV, OV, EV.
     * **Note:** This parameter must be specified along with or without the DomainType and CertBrand parameters.
     */
    public certType: string | ros.IResolvable | undefined;

    /**
     * @Property companyName: The name of the certificate application company.
     * **Note**: This parameter is only applicable when applying for OV certificates.
     * When applying for OV certificate, if you set the company name here, it means that the corresponding company information in the information management module is used; If you do not set this parameter, it indicates that the latest company information added is selected from the information management module.
     */
    public companyName: string | ros.IResolvable | undefined;

    /**
     * @Property csr: The contents of a manually generated CSR file for a domain name using the OpenSSL or Keytool tools. The CSR key type must be RSA or ECC, and the RSA key length must be greater than or equal to 2048. If this parameter is not set, the CSR is automatically created for you by the SSL certificate service.
     * A CSR (Certificate Signing Request) is a certificate signing request file that contains information about your server and your company. When you apply for a certificate, you will need to submit the CSR file of your certificate to the CA certification authority for review. After the CA center signs the CSR file with the root certificate's private key, it will generate the certificate public key file (that is, the SSL certificate issued to you).
     */
    public csr: string | ros.IResolvable | undefined;

    /**
     * @Property domains: The domain to bind the certificate to. The specific requirements are as follows:
     * - Supports single or wildcard domains (e.g., *.aliyundoc.com).
     * - Multiple domains are supported. You can set up to 5 domains.
     * - If you set more than one domain name, the multiple domains can only be single domain name or wildcard domain name, not both single domain name and wildcard domain name.
     * **Note:** This is required when the certificate is bound to more than one hostname. This parameter is not allowed to be empty at the same time as the Csr parameter. If you set both this parameter and the Csr parameter, take the CN field value in the Csr as the domain name for the certificate to bind to.
     */
    public domains: Array<string | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @Property domainType: Domain type. Valid values: one, all, multiple.
     * **Note:** This parameter must be specified along with or without the CertType and CertBrand parameters.
     */
    public domainType: string | ros.IResolvable | undefined;

    /**
     * @Property email: The applicant's email.
     */
    public email: string | ros.IResolvable | undefined;

    /**
     * @Property phone: The applicant's mobile phone number. A CA official may contact you at this number to verify your certificate request.
     */
    public phone: string | ros.IResolvable | undefined;

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
    public productCode: string | ros.IResolvable | undefined;

    /**
     * @Property username: The applicant's name.
     */
    public username: string | ros.IResolvable | undefined;

    /**
     * @Property validateType: How domain ownership is verified. Valid values:
     * - DNS: DNS validation The ownership of the domain name is verified by adding a TXT type DNS record to the domain name's DNS management platform. You need administrative permission for domain resolution to complete validation.
     * - FILE: File validation Ownership of a domain name is verified by creating a specified file on the domain name server. You need administrator access to your domain name server to complete validation.
     */
    public validateType: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosSslCertificateProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosSslCertificate.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrCertificateId = this.getAtt('CertificateId');
        this.attrOrderId = this.getAtt('OrderId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.certBrand = props.certBrand;
        this.certType = props.certType;
        this.companyName = props.companyName;
        this.csr = props.csr;
        this.domains = props.domains;
        this.domainType = props.domainType;
        this.email = props.email;
        this.phone = props.phone;
        this.productCode = props.productCode;
        this.username = props.username;
        this.validateType = props.validateType;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            certBrand: this.certBrand,
            certType: this.certType,
            companyName: this.companyName,
            csr: this.csr,
            domains: this.domains,
            domainType: this.domainType,
            email: this.email,
            phone: this.phone,
            productCode: this.productCode,
            username: this.username,
            validateType: this.validateType,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosSslCertificatePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
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
 * Determine whether the given properties match those of a `RosUserCertificateProps`
 *
 * @param properties - the TypeScript properties of a `RosUserCertificateProps`
 *
 * @returns the result of the validation.
 */
function RosUserCertificatePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('signCert', ros.validateString)(properties.signCert));
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    errors.collect(ros.propertyValidator('resourceId', ros.validateString)(properties.resourceId));
    errors.collect(ros.propertyValidator('encryptCert', ros.validateString)(properties.encryptCert));
    errors.collect(ros.propertyValidator('signPrivateKey', ros.validateString)(properties.signPrivateKey));
    errors.collect(ros.propertyValidator('cert', ros.validateString)(properties.cert));
    errors.collect(ros.propertyValidator('encryptPrivateKey', ros.validateString)(properties.encryptPrivateKey));
    errors.collect(ros.propertyValidator('certificateName', ros.validateString)(properties.certificateName));
    if(properties.tags && (Array.isArray(properties.tags) || (typeof properties.tags) === 'string')) {
        errors.collect(ros.propertyValidator('tags', ros.validateLength)({
            data: properties.tags.length,
            min: undefined,
            max: 20,
          }));
    }
    errors.collect(ros.propertyValidator('tags', ros.listValidator(RosUserCertificate_TagsPropertyValidator))(properties.tags));
    errors.collect(ros.propertyValidator('key', ros.validateString)(properties.key));
    return errors.wrap('supplied properties not correct for "RosUserCertificateProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CAS::UserCertificate` resource
 *
 * @param properties - the TypeScript properties of a `RosUserCertificateProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CAS::UserCertificate` resource.
 */
// @ts-ignore TS6133
function rosUserCertificatePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosUserCertificatePropsValidator(properties).assertSuccess();
    }
    return {
      'Cert': ros.stringToRosTemplate(properties.cert),
      'CertificateName': ros.stringToRosTemplate(properties.certificateName),
      'EncryptCert': ros.stringToRosTemplate(properties.encryptCert),
      'EncryptPrivateKey': ros.stringToRosTemplate(properties.encryptPrivateKey),
      'Key': ros.stringToRosTemplate(properties.key),
      'ResourceGroupId': ros.stringToRosTemplate(properties.resourceGroupId),
      'ResourceId': ros.stringToRosTemplate(properties.resourceId),
      'SignCert': ros.stringToRosTemplate(properties.signCert),
      'SignPrivateKey': ros.stringToRosTemplate(properties.signPrivateKey),
      'Tags': ros.listMapper(rosUserCertificateTagsPropertyToRosTemplate)(properties.tags),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::CAS::UserCertificate`.
 * @Note This class does not contain additional functions, so it is recommended to use the `UserCertificate` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cas-usercertificate
 */
export class RosUserCertificate extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CAS::UserCertificate";

    /**
     * @Attribute Cert: The certificate content in PEM format.
     */
    public readonly attrCert: ros.IResolvable;

    /**
     * @Attribute CertId: Certificate ID.
     */
    public readonly attrCertId: ros.IResolvable;

    /**
     * @Attribute CertificateName: Custom certificate name. Maximum supported character length:128. All character types are supported, including letters, numbers and underscores.
     */
    public readonly attrCertificateName: ros.IResolvable;

    /**
     * @Attribute EncryptCert: The content of the encryption certificate in PEM format.
     */
    public readonly attrEncryptCert: ros.IResolvable;

    /**
     * @Attribute EncryptPrivateKey: The private key content of the encryption certificate in PEM format.
     */
    public readonly attrEncryptPrivateKey: ros.IResolvable;

    /**
     * @Attribute Key: The private key content of the certificate in PEM format.
     */
    public readonly attrKey: ros.IResolvable;

    /**
     * @Attribute ResourceGroupId: The ID of the resource group.
     */
    public readonly attrResourceGroupId: ros.IResolvable;

    /**
     * @Attribute SignCert: The signature certificate content in PEM format.
     */
    public readonly attrSignCert: ros.IResolvable;

    /**
     * @Attribute SignPrivateKey: The private key content of the signature certificate in PEM format.
     */
    public readonly attrSignPrivateKey: ros.IResolvable;

    /**
     * @Attribute Tags: The tag of the resource.
     */
    public readonly attrTags: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property cert: The certificate content in PEM format.
     */
    public cert: string | ros.IResolvable | undefined;

    /**
     * @Property certificateName: Custom certificate name. Maximum supported character length:128. All character types are supported, including letters, numbers and underscores.
     *  The certificate name under the same user cannot be duplicated.
     */
    public certificateName: string | ros.IResolvable | undefined;

    /**
     * @Property encryptCert: The content of the encryption certificate in PEM format.
     */
    public encryptCert: string | ros.IResolvable | undefined;

    /**
     * @Property encryptPrivateKey: The private key content of the encryption certificate in PEM format.
     */
    public encryptPrivateKey: string | ros.IResolvable | undefined;

    /**
     * @Property key: The private key content of the certificate in PEM format.
     */
    public key: string | ros.IResolvable | undefined;

    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    public resourceGroupId: string | ros.IResolvable | undefined;

    /**
     * @Property resourceId: Resource ID.
     */
    public resourceId: string | ros.IResolvable | undefined;

    /**
     * @Property signCert: The signature certificate content in PEM format.
     */
    public signCert: string | ros.IResolvable | undefined;

    /**
     * @Property signPrivateKey: The private key content of the signature certificate in PEM format.
     */
    public signPrivateKey: string | ros.IResolvable | undefined;

    /**
     * @Property tags: Tags of certificate.
     */
    public tags: RosUserCertificate.TagsProperty[] | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosUserCertificateProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosUserCertificate.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrCert = this.getAtt('Cert');
        this.attrCertId = this.getAtt('CertId');
        this.attrCertificateName = this.getAtt('CertificateName');
        this.attrEncryptCert = this.getAtt('EncryptCert');
        this.attrEncryptPrivateKey = this.getAtt('EncryptPrivateKey');
        this.attrKey = this.getAtt('Key');
        this.attrResourceGroupId = this.getAtt('ResourceGroupId');
        this.attrSignCert = this.getAtt('SignCert');
        this.attrSignPrivateKey = this.getAtt('SignPrivateKey');
        this.attrTags = this.getAtt('Tags');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.cert = props.cert;
        this.certificateName = props.certificateName;
        this.encryptCert = props.encryptCert;
        this.encryptPrivateKey = props.encryptPrivateKey;
        this.key = props.key;
        this.resourceGroupId = props.resourceGroupId;
        this.resourceId = props.resourceId;
        this.signCert = props.signCert;
        this.signPrivateKey = props.signPrivateKey;
        this.tags = props.tags;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            cert: this.cert,
            certificateName: this.certificateName,
            encryptCert: this.encryptCert,
            encryptPrivateKey: this.encryptPrivateKey,
            key: this.key,
            resourceGroupId: this.resourceGroupId,
            resourceId: this.resourceId,
            signCert: this.signCert,
            signPrivateKey: this.signPrivateKey,
            tags: this.tags,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosUserCertificatePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosUserCertificate {
    /**
     * @stability external
     */
    export interface TagsProperty {
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
/**
 * Determine whether the given properties match those of a `TagsProperty`
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the result of the validation.
 */
function RosUserCertificate_TagsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    errors.collect(ros.propertyValidator('key', ros.requiredValidator)(properties.key));
    errors.collect(ros.propertyValidator('key', ros.validateString)(properties.key));
    return errors.wrap('supplied properties not correct for "TagsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::CAS::UserCertificate.Tags` resource
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::CAS::UserCertificate.Tags` resource.
 */
// @ts-ignore TS6133
function rosUserCertificateTagsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosUserCertificate_TagsPropertyValidator(properties).assertSuccess();
    return {
      'Value': ros.stringToRosTemplate(properties.value),
      'Key': ros.stringToRosTemplate(properties.key),
    };
}
