// Generated from the AliCloud ROS Resource Specification

import * as ros from '@alicloud/ros-cdk-core';

/**
 * Properties for defining a `RosCertificate`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-certificate
 */
export interface RosCertificateProps {

    /**
     * @Property createdType: The certificate type.
     * - cas (Certificate Center Certificate)
     * - upload (custom upload certificate)
     * - free( Free certificate).
     */
    readonly createdType: string | ros.IResolvable;

    /**
     * @Property domains: A list of domain names. Multiple domain names are separated by commas.
     */
    readonly domains: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property siteId: The site ID, which can be obtained by calling the ListSites interface.
     */
    readonly siteId: number | ros.IResolvable;

    /**
     * @Property casId: Cloud certificate ID.
     */
    readonly casId?: string | ros.IResolvable;

    /**
     * @Property certId: The certificate Id.
     */
    readonly certId?: string | ros.IResolvable;

    /**
     * @Property certificate: Certificate content.
     */
    readonly certificate?: string | ros.IResolvable;

    /**
     * @Property certName: The certificate name.
     */
    readonly certName?: string | ros.IResolvable;

    /**
     * @Property privateKey: The certificate private key.
     */
    readonly privateKey?: string | ros.IResolvable;
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
    errors.collect(ros.propertyValidator('domains', ros.requiredValidator)(properties.domains));
    if(properties.domains && (Array.isArray(properties.domains) || (typeof properties.domains) === 'string')) {
        errors.collect(ros.propertyValidator('domains', ros.validateLength)({
            data: properties.domains.length,
            min: 1,
            max: 50,
          }));
    }
    errors.collect(ros.propertyValidator('domains', ros.listValidator(ros.validateString))(properties.domains));
    errors.collect(ros.propertyValidator('siteId', ros.requiredValidator)(properties.siteId));
    errors.collect(ros.propertyValidator('siteId', ros.validateNumber)(properties.siteId));
    errors.collect(ros.propertyValidator('privateKey', ros.validateString)(properties.privateKey));
    errors.collect(ros.propertyValidator('createdType', ros.requiredValidator)(properties.createdType));
    if(properties.createdType && (typeof properties.createdType) !== 'object') {
        errors.collect(ros.propertyValidator('createdType', ros.validateAllowedValues)({
          data: properties.createdType,
          allowedValues: ["cas","upload","free"],
        }));
    }
    errors.collect(ros.propertyValidator('createdType', ros.validateString)(properties.createdType));
    errors.collect(ros.propertyValidator('certId', ros.validateString)(properties.certId));
    errors.collect(ros.propertyValidator('certName', ros.validateString)(properties.certName));
    errors.collect(ros.propertyValidator('casId', ros.validateString)(properties.casId));
    errors.collect(ros.propertyValidator('certificate', ros.validateString)(properties.certificate));
    return errors.wrap('supplied properties not correct for "RosCertificateProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ESA::Certificate` resource
 *
 * @param properties - the TypeScript properties of a `RosCertificateProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ESA::Certificate` resource.
 */
// @ts-ignore TS6133
function rosCertificatePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosCertificatePropsValidator(properties).assertSuccess();
    }
    return {
      'CreatedType': ros.stringToRosTemplate(properties.createdType),
      'Domains': ros.listMapper(ros.stringToRosTemplate)(properties.domains),
      'SiteId': ros.numberToRosTemplate(properties.siteId),
      'CasId': ros.stringToRosTemplate(properties.casId),
      'CertId': ros.stringToRosTemplate(properties.certId),
      'Certificate': ros.stringToRosTemplate(properties.certificate),
      'CertName': ros.stringToRosTemplate(properties.certName),
      'PrivateKey': ros.stringToRosTemplate(properties.privateKey),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ESA::Certificate`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Certificate` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-certificate
 */
export class RosCertificate extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ESA::Certificate";

    /**
     * @Attribute ApplyCode: Certificate application error code.
     */
    public readonly attrApplyCode: ros.IResolvable;

    /**
     * @Attribute ApplyMessage: Certificate application error message.
     */
    public readonly attrApplyMessage: ros.IResolvable;

    /**
     * @Attribute CasId: Cloud certificate ID.
     */
    public readonly attrCasId: ros.IResolvable;

    /**
     * @Attribute CertId: The certificate Id.
     */
    public readonly attrCertId: ros.IResolvable;

    /**
     * @Attribute CertName: The certificate name.
     */
    public readonly attrCertName: ros.IResolvable;

    /**
     * @Attribute Certificate: Certificate content.
     */
    public readonly attrCertificate: ros.IResolvable;

    /**
     * @Attribute CommonName: Common Name (CN) field of the certificate.
     */
    public readonly attrCommonName: ros.IResolvable;

    /**
     * @Attribute CreateTime: Creation time.
     */
    public readonly attrCreateTime: ros.IResolvable;

    /**
     * @Attribute DCV: DCV information.
     */
    public readonly attrDcv: ros.IResolvable;

    /**
     * @Attribute Domains: A list of domain names. Multiple domain names are separated by commas.
     */
    public readonly attrDomains: ros.IResolvable;

    /**
     * @Attribute FingerprintSha256: SHA256 fingerprint of the certificate.
     */
    public readonly attrFingerprintSha256: ros.IResolvable;

    /**
     * @Attribute Issuer: Certificate issuer.
     */
    public readonly attrIssuer: ros.IResolvable;

    /**
     * @Attribute IssuerCN: Common name of the certificate issuer.
     */
    public readonly attrIssuerCn: ros.IResolvable;

    /**
     * @Attribute NotAfter: End time of the certificate validity period.
     */
    public readonly attrNotAfter: ros.IResolvable;

    /**
     * @Attribute NotBefore: Start time of the certificate validity period.
     */
    public readonly attrNotBefore: ros.IResolvable;

    /**
     * @Attribute PubAlg: Certificate public key algorithm.
     */
    public readonly attrPubAlg: ros.IResolvable;

    /**
     * @Attribute SerialNumber: Serial number of the certificate.
     */
    public readonly attrSerialNumber: ros.IResolvable;

    /**
     * @Attribute SigAlg: Certificate signature algorithm.
     */
    public readonly attrSigAlg: ros.IResolvable;

    /**
     * @Attribute SiteId: The site ID, which can be obtained by calling the ListSites interface.
     */
    public readonly attrSiteId: ros.IResolvable;

    /**
     * @Attribute SiteName: Site name.
     */
    public readonly attrSiteName: ros.IResolvable;

    /**
     * @Attribute UpdateTime: Update time.
     */
    public readonly attrUpdateTime: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property createdType: The certificate type.
     * - cas (Certificate Center Certificate)
     * - upload (custom upload certificate)
     * - free( Free certificate).
     */
    public createdType: string | ros.IResolvable;

    /**
     * @Property domains: A list of domain names. Multiple domain names are separated by commas.
     */
    public domains: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property siteId: The site ID, which can be obtained by calling the ListSites interface.
     */
    public siteId: number | ros.IResolvable;

    /**
     * @Property casId: Cloud certificate ID.
     */
    public casId: string | ros.IResolvable | undefined;

    /**
     * @Property certId: The certificate Id.
     */
    public certId: string | ros.IResolvable | undefined;

    /**
     * @Property certificate: Certificate content.
     */
    public certificate: string | ros.IResolvable | undefined;

    /**
     * @Property certName: The certificate name.
     */
    public certName: string | ros.IResolvable | undefined;

    /**
     * @Property privateKey: The certificate private key.
     */
    public privateKey: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosCertificateProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosCertificate.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrApplyCode = this.getAtt('ApplyCode');
        this.attrApplyMessage = this.getAtt('ApplyMessage');
        this.attrCasId = this.getAtt('CasId');
        this.attrCertId = this.getAtt('CertId');
        this.attrCertName = this.getAtt('CertName');
        this.attrCertificate = this.getAtt('Certificate');
        this.attrCommonName = this.getAtt('CommonName');
        this.attrCreateTime = this.getAtt('CreateTime');
        this.attrDcv = this.getAtt('DCV');
        this.attrDomains = this.getAtt('Domains');
        this.attrFingerprintSha256 = this.getAtt('FingerprintSha256');
        this.attrIssuer = this.getAtt('Issuer');
        this.attrIssuerCn = this.getAtt('IssuerCN');
        this.attrNotAfter = this.getAtt('NotAfter');
        this.attrNotBefore = this.getAtt('NotBefore');
        this.attrPubAlg = this.getAtt('PubAlg');
        this.attrSerialNumber = this.getAtt('SerialNumber');
        this.attrSigAlg = this.getAtt('SigAlg');
        this.attrSiteId = this.getAtt('SiteId');
        this.attrSiteName = this.getAtt('SiteName');
        this.attrUpdateTime = this.getAtt('UpdateTime');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.createdType = props.createdType;
        this.domains = props.domains;
        this.siteId = props.siteId;
        this.casId = props.casId;
        this.certId = props.certId;
        this.certificate = props.certificate;
        this.certName = props.certName;
        this.privateKey = props.privateKey;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            createdType: this.createdType,
            domains: this.domains,
            siteId: this.siteId,
            casId: this.casId,
            certId: this.certId,
            certificate: this.certificate,
            certName: this.certName,
            privateKey: this.privateKey,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosCertificatePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosClientCaCertificate`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-clientcacertificate
 */
export interface RosClientCaCertificateProps {

    /**
     * @Property certificate: Certificate content.
     */
    readonly certificate: string | ros.IResolvable;

    /**
     * @Property siteId: Site Id.
     */
    readonly siteId: number | ros.IResolvable;

    /**
     * @Property clientCaCertName: The certificate name.
     */
    readonly clientCaCertName?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosClientCaCertificateProps`
 *
 * @param properties - the TypeScript properties of a `RosClientCaCertificateProps`
 *
 * @returns the result of the validation.
 */
function RosClientCaCertificatePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('clientCaCertName', ros.validateString)(properties.clientCaCertName));
    errors.collect(ros.propertyValidator('siteId', ros.requiredValidator)(properties.siteId));
    errors.collect(ros.propertyValidator('siteId', ros.validateNumber)(properties.siteId));
    errors.collect(ros.propertyValidator('certificate', ros.requiredValidator)(properties.certificate));
    errors.collect(ros.propertyValidator('certificate', ros.validateString)(properties.certificate));
    return errors.wrap('supplied properties not correct for "RosClientCaCertificateProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ESA::ClientCaCertificate` resource
 *
 * @param properties - the TypeScript properties of a `RosClientCaCertificateProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ESA::ClientCaCertificate` resource.
 */
// @ts-ignore TS6133
function rosClientCaCertificatePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosClientCaCertificatePropsValidator(properties).assertSuccess();
    }
    return {
      'Certificate': ros.stringToRosTemplate(properties.certificate),
      'SiteId': ros.numberToRosTemplate(properties.siteId),
      'ClientCaCertName': ros.stringToRosTemplate(properties.clientCaCertName),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ESA::ClientCaCertificate`.
 * @Note This class does not contain additional functions, so it is recommended to use the `ClientCaCertificate` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-clientcacertificate
 */
export class RosClientCaCertificate extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ESA::ClientCaCertificate";

    /**
     * @Attribute Certificate: Certificate content.
     */
    public readonly attrCertificate: ros.IResolvable;

    /**
     * @Attribute ClientCaCertId: ClientCaCertificate Id.
     */
    public readonly attrClientCaCertId: ros.IResolvable;

    /**
     * @Attribute ClientCaCertName: The certificate name.
     */
    public readonly attrClientCaCertName: ros.IResolvable;

    /**
     * @Attribute CommonName: The certificate common name.
     */
    public readonly attrCommonName: ros.IResolvable;

    /**
     * @Attribute CreateTime: Creation time.
     */
    public readonly attrCreateTime: ros.IResolvable;

    /**
     * @Attribute Issuer: Certificate Authority.
     */
    public readonly attrIssuer: ros.IResolvable;

    /**
     * @Attribute NotAfter: The expiration date of the certificate validity period.
     */
    public readonly attrNotAfter: ros.IResolvable;

    /**
     * @Attribute NotBefore: The start time of the certificate validity period.
     */
    public readonly attrNotBefore: ros.IResolvable;

    /**
     * @Attribute PubkeyAlgorithm: Certificate public key algorithm.
     */
    public readonly attrPubkeyAlgorithm: ros.IResolvable;

    /**
     * @Attribute SAN: Alternate certificate subject name.
     */
    public readonly attrSan: ros.IResolvable;

    /**
     * @Attribute SignatureAlgorithm: Certificate signature algorithm.
     */
    public readonly attrSignatureAlgorithm: ros.IResolvable;

    /**
     * @Attribute SiteId: Site Id.
     */
    public readonly attrSiteId: ros.IResolvable;

    /**
     * @Attribute SiteName: The website name.
     */
    public readonly attrSiteName: ros.IResolvable;

    /**
     * @Attribute Type: The certificate type.
     */
    public readonly attrType: ros.IResolvable;

    /**
     * @Attribute UpdateTime: Update time.
     */
    public readonly attrUpdateTime: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property certificate: Certificate content.
     */
    public certificate: string | ros.IResolvable;

    /**
     * @Property siteId: Site Id.
     */
    public siteId: number | ros.IResolvable;

    /**
     * @Property clientCaCertName: The certificate name.
     */
    public clientCaCertName: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosClientCaCertificateProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosClientCaCertificate.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrCertificate = this.getAtt('Certificate');
        this.attrClientCaCertId = this.getAtt('ClientCaCertId');
        this.attrClientCaCertName = this.getAtt('ClientCaCertName');
        this.attrCommonName = this.getAtt('CommonName');
        this.attrCreateTime = this.getAtt('CreateTime');
        this.attrIssuer = this.getAtt('Issuer');
        this.attrNotAfter = this.getAtt('NotAfter');
        this.attrNotBefore = this.getAtt('NotBefore');
        this.attrPubkeyAlgorithm = this.getAtt('PubkeyAlgorithm');
        this.attrSan = this.getAtt('SAN');
        this.attrSignatureAlgorithm = this.getAtt('SignatureAlgorithm');
        this.attrSiteId = this.getAtt('SiteId');
        this.attrSiteName = this.getAtt('SiteName');
        this.attrType = this.getAtt('Type');
        this.attrUpdateTime = this.getAtt('UpdateTime');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.certificate = props.certificate;
        this.siteId = props.siteId;
        this.clientCaCertName = props.clientCaCertName;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            certificate: this.certificate,
            siteId: this.siteId,
            clientCaCertName: this.clientCaCertName,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosClientCaCertificatePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosClientCertificate`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-clientcertificate
 */
export interface RosClientCertificateProps {

    /**
     * @Property siteId: Site Id.
     */
    readonly siteId: number | ros.IResolvable;

    /**
     * @Property validityDays: Certificate validity period.
     */
    readonly validityDays: number | ros.IResolvable;

    /**
     * @Property csr: Certificate signing request content.
     */
    readonly csr?: string | ros.IResolvable;

    /**
     * @Property pkeyType: The private key algorithm type.
     */
    readonly pkeyType?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosClientCertificateProps`
 *
 * @param properties - the TypeScript properties of a `RosClientCertificateProps`
 *
 * @returns the result of the validation.
 */
function RosClientCertificatePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('siteId', ros.requiredValidator)(properties.siteId));
    errors.collect(ros.propertyValidator('siteId', ros.validateNumber)(properties.siteId));
    errors.collect(ros.propertyValidator('csr', ros.validateString)(properties.csr));
    errors.collect(ros.propertyValidator('pkeyType', ros.validateString)(properties.pkeyType));
    errors.collect(ros.propertyValidator('validityDays', ros.requiredValidator)(properties.validityDays));
    errors.collect(ros.propertyValidator('validityDays', ros.validateNumber)(properties.validityDays));
    return errors.wrap('supplied properties not correct for "RosClientCertificateProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ESA::ClientCertificate` resource
 *
 * @param properties - the TypeScript properties of a `RosClientCertificateProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ESA::ClientCertificate` resource.
 */
// @ts-ignore TS6133
function rosClientCertificatePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosClientCertificatePropsValidator(properties).assertSuccess();
    }
    return {
      'SiteId': ros.numberToRosTemplate(properties.siteId),
      'ValidityDays': ros.numberToRosTemplate(properties.validityDays),
      'CSR': ros.stringToRosTemplate(properties.csr),
      'PkeyType': ros.stringToRosTemplate(properties.pkeyType),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ESA::ClientCertificate`.
 * @Note This class does not contain additional functions, so it is recommended to use the `ClientCertificate` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-clientcertificate
 */
export class RosClientCertificate extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ESA::ClientCertificate";

    /**
     * @Attribute CACertificateId: The ID of the CA certificate.
     */
    public readonly attrCaCertificateId: ros.IResolvable;

    /**
     * @Attribute Certificate: Certificate content.
     */
    public readonly attrCertificate: ros.IResolvable;

    /**
     * @Attribute ClientCertId: ClientCertificate Id.
     */
    public readonly attrClientCertId: ros.IResolvable;

    /**
     * @Attribute ClientCertificateName: The certificate name.
     */
    public readonly attrClientCertificateName: ros.IResolvable;

    /**
     * @Attribute CommonName: The Common Name of the certificate.
     */
    public readonly attrCommonName: ros.IResolvable;

    /**
     * @Attribute CreateTime: The time when the certificate was created.
     */
    public readonly attrCreateTime: ros.IResolvable;

    /**
     * @Attribute Issuer: The certificate authority (CA) that issued the certificate.
     */
    public readonly attrIssuer: ros.IResolvable;

    /**
     * @Attribute NotAfter: The time when the certificate expires.
     */
    public readonly attrNotAfter: ros.IResolvable;

    /**
     * @Attribute NotBefore: The time when the certificate takes effect.
     */
    public readonly attrNotBefore: ros.IResolvable;

    /**
     * @Attribute PubkeyAlgorithm: The public-key algorithm of the certificate.
     */
    public readonly attrPubkeyAlgorithm: ros.IResolvable;

    /**
     * @Attribute SAN: The Subject Alternative Name (SAN) of the certificate.
     */
    public readonly attrSan: ros.IResolvable;

    /**
     * @Attribute SignatureAlgorithm: The signature algorithm of the certificate.
     */
    public readonly attrSignatureAlgorithm: ros.IResolvable;

    /**
     * @Attribute SiteId: Site Id.
     */
    public readonly attrSiteId: ros.IResolvable;

    /**
     * @Attribute SiteName: The website name.
     */
    public readonly attrSiteName: ros.IResolvable;

    /**
     * @Attribute Type: The certificate type.
     */
    public readonly attrType: ros.IResolvable;

    /**
     * @Attribute UpdateTime: The time when the certificate was updated.
     */
    public readonly attrUpdateTime: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property siteId: Site Id.
     */
    public siteId: number | ros.IResolvable;

    /**
     * @Property validityDays: Certificate validity period.
     */
    public validityDays: number | ros.IResolvable;

    /**
     * @Property csr: Certificate signing request content.
     */
    public csr: string | ros.IResolvable | undefined;

    /**
     * @Property pkeyType: The private key algorithm type.
     */
    public pkeyType: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosClientCertificateProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosClientCertificate.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrCaCertificateId = this.getAtt('CACertificateId');
        this.attrCertificate = this.getAtt('Certificate');
        this.attrClientCertId = this.getAtt('ClientCertId');
        this.attrClientCertificateName = this.getAtt('ClientCertificateName');
        this.attrCommonName = this.getAtt('CommonName');
        this.attrCreateTime = this.getAtt('CreateTime');
        this.attrIssuer = this.getAtt('Issuer');
        this.attrNotAfter = this.getAtt('NotAfter');
        this.attrNotBefore = this.getAtt('NotBefore');
        this.attrPubkeyAlgorithm = this.getAtt('PubkeyAlgorithm');
        this.attrSan = this.getAtt('SAN');
        this.attrSignatureAlgorithm = this.getAtt('SignatureAlgorithm');
        this.attrSiteId = this.getAtt('SiteId');
        this.attrSiteName = this.getAtt('SiteName');
        this.attrType = this.getAtt('Type');
        this.attrUpdateTime = this.getAtt('UpdateTime');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.siteId = props.siteId;
        this.validityDays = props.validityDays;
        this.csr = props.csr;
        this.pkeyType = props.pkeyType;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            siteId: this.siteId,
            validityDays: this.validityDays,
            csr: this.csr,
            pkeyType: this.pkeyType,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosClientCertificatePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosCompressionRule`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-compressionrule
 */
export interface RosCompressionRuleProps {

    /**
     * @Property siteId: The site ID, which can be obtained by calling the ListSites API.
     */
    readonly siteId: number | ros.IResolvable;

    /**
     * @Property brotli: Brotli compression. Value range:
     * on: Enable.
     * off: Disable.
     */
    readonly brotli?: string | ros.IResolvable;

    /**
     * @Property gzip: Gzip compression. Value range:
     * on: Enable.
     * off: Disable.
     */
    readonly gzip?: string | ros.IResolvable;

    /**
     * @Property paymentType: Payment Type.
     */
    readonly paymentType?: string | ros.IResolvable;

    /**
     * @Property rule: Rule content, using conditional expressions to match user requests. When adding global configuration, this parameter does not need to be set. There are two usage scenarios:
     * - Match all incoming requests: value set to true
     * - Match specified request: Set the value to a custom expression, for example: (http.host eq \"video.example.com\").
     */
    readonly rule?: string | ros.IResolvable;

    /**
     * @Property ruleEnable: Rule switch. When adding global configuration, this parameter does not need to be set. Value range:
     * on: Enable.
     * off: Disable.
     */
    readonly ruleEnable?: string | ros.IResolvable;

    /**
     * @Property ruleName: Rule name. When adding global configuration, this parameter does not need to be set.
     */
    readonly ruleName?: string | ros.IResolvable;

    /**
     * @Property sequence: Order of rule execution. The smaller the value, the higher the priority for execution.
     */
    readonly sequence?: number | ros.IResolvable;

    /**
     * @Property siteVersion: The version number of the site configuration. For sites that have enabled configuration version management, this parameter can be used to specify the effective version of the configuration site, which defaults to version 0.
     */
    readonly siteVersion?: number | ros.IResolvable;

    /**
     * @Property zstd: Zstd compression. Value range:
     * on: Enable.
     * off: Disable.
     */
    readonly zstd?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosCompressionRuleProps`
 *
 * @param properties - the TypeScript properties of a `RosCompressionRuleProps`
 *
 * @returns the result of the validation.
 */
function RosCompressionRulePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('siteId', ros.requiredValidator)(properties.siteId));
    errors.collect(ros.propertyValidator('siteId', ros.validateNumber)(properties.siteId));
    if(properties.zstd && (typeof properties.zstd) !== 'object') {
        errors.collect(ros.propertyValidator('zstd', ros.validateAllowedValues)({
          data: properties.zstd,
          allowedValues: ["on","off"],
        }));
    }
    errors.collect(ros.propertyValidator('zstd', ros.validateString)(properties.zstd));
    if(properties.ruleEnable && (typeof properties.ruleEnable) !== 'object') {
        errors.collect(ros.propertyValidator('ruleEnable', ros.validateAllowedValues)({
          data: properties.ruleEnable,
          allowedValues: ["on","off"],
        }));
    }
    errors.collect(ros.propertyValidator('ruleEnable', ros.validateString)(properties.ruleEnable));
    if(properties.brotli && (typeof properties.brotli) !== 'object') {
        errors.collect(ros.propertyValidator('brotli', ros.validateAllowedValues)({
          data: properties.brotli,
          allowedValues: ["on","off"],
        }));
    }
    errors.collect(ros.propertyValidator('brotli', ros.validateString)(properties.brotli));
    if(properties.gzip && (typeof properties.gzip) !== 'object') {
        errors.collect(ros.propertyValidator('gzip', ros.validateAllowedValues)({
          data: properties.gzip,
          allowedValues: ["on","off"],
        }));
    }
    errors.collect(ros.propertyValidator('gzip', ros.validateString)(properties.gzip));
    errors.collect(ros.propertyValidator('paymentType', ros.validateString)(properties.paymentType));
    errors.collect(ros.propertyValidator('sequence', ros.validateNumber)(properties.sequence));
    errors.collect(ros.propertyValidator('rule', ros.validateString)(properties.rule));
    errors.collect(ros.propertyValidator('siteVersion', ros.validateNumber)(properties.siteVersion));
    errors.collect(ros.propertyValidator('ruleName', ros.validateString)(properties.ruleName));
    return errors.wrap('supplied properties not correct for "RosCompressionRuleProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ESA::CompressionRule` resource
 *
 * @param properties - the TypeScript properties of a `RosCompressionRuleProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ESA::CompressionRule` resource.
 */
// @ts-ignore TS6133
function rosCompressionRulePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosCompressionRulePropsValidator(properties).assertSuccess();
    }
    return {
      'SiteId': ros.numberToRosTemplate(properties.siteId),
      'Brotli': ros.stringToRosTemplate(properties.brotli),
      'Gzip': ros.stringToRosTemplate(properties.gzip),
      'PaymentType': ros.stringToRosTemplate(properties.paymentType),
      'Rule': ros.stringToRosTemplate(properties.rule),
      'RuleEnable': ros.stringToRosTemplate(properties.ruleEnable),
      'RuleName': ros.stringToRosTemplate(properties.ruleName),
      'Sequence': ros.numberToRosTemplate(properties.sequence),
      'SiteVersion': ros.numberToRosTemplate(properties.siteVersion),
      'Zstd': ros.stringToRosTemplate(properties.zstd),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ESA::CompressionRule`.
 * @Note This class does not contain additional functions, so it is recommended to use the `CompressionRule` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-compressionrule
 */
export class RosCompressionRule extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ESA::CompressionRule";

    /**
     * @Attribute Brotli: Brotli compression.
     */
    public readonly attrBrotli: ros.IResolvable;

    /**
     * @Attribute ConfigId: Config Id.
     */
    public readonly attrConfigId: ros.IResolvable;

    /**
     * @Attribute ConfigType: The type of the configuration.
     */
    public readonly attrConfigType: ros.IResolvable;

    /**
     * @Attribute Gzip: Gzip compression.
     */
    public readonly attrGzip: ros.IResolvable;

    /**
     * @Attribute Rule: Rule content, using conditional expressions to match user requests. When adding global configuration, this parameter does not need to be set.
     */
    public readonly attrRule: ros.IResolvable;

    /**
     * @Attribute RuleEnable: Rule switch. When adding global configuration, this parameter does not need to be set.
     */
    public readonly attrRuleEnable: ros.IResolvable;

    /**
     * @Attribute RuleName: Rule name. When adding global configuration, this parameter does not need to be set.
     */
    public readonly attrRuleName: ros.IResolvable;

    /**
     * @Attribute Sequence: Order of rule execution. The smaller the value, the higher the priority for execution.
     */
    public readonly attrSequence: ros.IResolvable;

    /**
     * @Attribute SiteVersion: The version number of the site configuration. For sites that have enabled configuration version management, this parameter can be used to specify the effective version of the configuration site, which defaults to version 0.
     */
    public readonly attrSiteVersion: ros.IResolvable;

    /**
     * @Attribute Zstd: Zstd compression.
     */
    public readonly attrZstd: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property siteId: The site ID, which can be obtained by calling the ListSites API.
     */
    public siteId: number | ros.IResolvable;

    /**
     * @Property brotli: Brotli compression. Value range:
     * on: Enable.
     * off: Disable.
     */
    public brotli: string | ros.IResolvable | undefined;

    /**
     * @Property gzip: Gzip compression. Value range:
     * on: Enable.
     * off: Disable.
     */
    public gzip: string | ros.IResolvable | undefined;

    /**
     * @Property paymentType: Payment Type.
     */
    public paymentType: string | ros.IResolvable | undefined;

    /**
     * @Property rule: Rule content, using conditional expressions to match user requests. When adding global configuration, this parameter does not need to be set. There are two usage scenarios:
     * - Match all incoming requests: value set to true
     * - Match specified request: Set the value to a custom expression, for example: (http.host eq \"video.example.com\").
     */
    public rule: string | ros.IResolvable | undefined;

    /**
     * @Property ruleEnable: Rule switch. When adding global configuration, this parameter does not need to be set. Value range:
     * on: Enable.
     * off: Disable.
     */
    public ruleEnable: string | ros.IResolvable | undefined;

    /**
     * @Property ruleName: Rule name. When adding global configuration, this parameter does not need to be set.
     */
    public ruleName: string | ros.IResolvable | undefined;

    /**
     * @Property sequence: Order of rule execution. The smaller the value, the higher the priority for execution.
     */
    public sequence: number | ros.IResolvable | undefined;

    /**
     * @Property siteVersion: The version number of the site configuration. For sites that have enabled configuration version management, this parameter can be used to specify the effective version of the configuration site, which defaults to version 0.
     */
    public siteVersion: number | ros.IResolvable | undefined;

    /**
     * @Property zstd: Zstd compression. Value range:
     * on: Enable.
     * off: Disable.
     */
    public zstd: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosCompressionRuleProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosCompressionRule.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrBrotli = this.getAtt('Brotli');
        this.attrConfigId = this.getAtt('ConfigId');
        this.attrConfigType = this.getAtt('ConfigType');
        this.attrGzip = this.getAtt('Gzip');
        this.attrRule = this.getAtt('Rule');
        this.attrRuleEnable = this.getAtt('RuleEnable');
        this.attrRuleName = this.getAtt('RuleName');
        this.attrSequence = this.getAtt('Sequence');
        this.attrSiteVersion = this.getAtt('SiteVersion');
        this.attrZstd = this.getAtt('Zstd');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.siteId = props.siteId;
        this.brotli = props.brotli;
        this.gzip = props.gzip;
        this.paymentType = props.paymentType;
        this.rule = props.rule;
        this.ruleEnable = props.ruleEnable;
        this.ruleName = props.ruleName;
        this.sequence = props.sequence;
        this.siteVersion = props.siteVersion;
        this.zstd = props.zstd;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            siteId: this.siteId,
            brotli: this.brotli,
            gzip: this.gzip,
            paymentType: this.paymentType,
            rule: this.rule,
            ruleEnable: this.ruleEnable,
            ruleName: this.ruleName,
            sequence: this.sequence,
            siteVersion: this.siteVersion,
            zstd: this.zstd,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosCompressionRulePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosCustomList`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-customlist
 */
export interface RosCustomListProps {

    /**
     * @Property items: The items in the custom list, which are displayed as an array.
     */
    readonly items: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property kind: The type of the custom list.
     */
    readonly kind: string | ros.IResolvable;

    /**
     * @Property listName: The name of the custom list.
     */
    readonly listName: string | ros.IResolvable;

    /**
     * @Property description: The description of the custom list.
     */
    readonly description?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosCustomListProps`
 *
 * @param properties - the TypeScript properties of a `RosCustomListProps`
 *
 * @returns the result of the validation.
 */
function RosCustomListPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('listName', ros.requiredValidator)(properties.listName));
    errors.collect(ros.propertyValidator('listName', ros.validateString)(properties.listName));
    errors.collect(ros.propertyValidator('kind', ros.requiredValidator)(properties.kind));
    if(properties.kind && (typeof properties.kind) !== 'object') {
        errors.collect(ros.propertyValidator('kind', ros.validateAllowedValues)({
          data: properties.kind,
          allowedValues: ["host","ip","asn"],
        }));
    }
    errors.collect(ros.propertyValidator('kind', ros.validateString)(properties.kind));
    errors.collect(ros.propertyValidator('items', ros.requiredValidator)(properties.items));
    if(properties.items && (Array.isArray(properties.items) || (typeof properties.items) === 'string')) {
        errors.collect(ros.propertyValidator('items', ros.validateLength)({
            data: properties.items.length,
            min: 0,
            max: 500,
          }));
    }
    errors.collect(ros.propertyValidator('items', ros.listValidator(ros.validateString))(properties.items));
    return errors.wrap('supplied properties not correct for "RosCustomListProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ESA::CustomList` resource
 *
 * @param properties - the TypeScript properties of a `RosCustomListProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ESA::CustomList` resource.
 */
// @ts-ignore TS6133
function rosCustomListPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosCustomListPropsValidator(properties).assertSuccess();
    }
    return {
      'Items': ros.listMapper(ros.stringToRosTemplate)(properties.items),
      'Kind': ros.stringToRosTemplate(properties.kind),
      'ListName': ros.stringToRosTemplate(properties.listName),
      'Description': ros.stringToRosTemplate(properties.description),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ESA::CustomList`.
 * @Note This class does not contain additional functions, so it is recommended to use the `CustomList` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-customlist
 */
export class RosCustomList extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ESA::CustomList";

    /**
     * @Attribute Description: The description of the custom list.
     */
    public readonly attrDescription: ros.IResolvable;

    /**
     * @Attribute Items: The items in the custom list, which are displayed as an array.
     */
    public readonly attrItems: ros.IResolvable;

    /**
     * @Attribute Kind: The type of the custom list.
     */
    public readonly attrKind: ros.IResolvable;

    /**
     * @Attribute ListId: The id of the custom list .
     */
    public readonly attrListId: ros.IResolvable;

    /**
     * @Attribute ListName: The name of the custom list.
     */
    public readonly attrListName: ros.IResolvable;

    /**
     * @Attribute UpdateTime: The time when the custom list was last modified.
     */
    public readonly attrUpdateTime: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property items: The items in the custom list, which are displayed as an array.
     */
    public items: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property kind: The type of the custom list.
     */
    public kind: string | ros.IResolvable;

    /**
     * @Property listName: The name of the custom list.
     */
    public listName: string | ros.IResolvable;

    /**
     * @Property description: The description of the custom list.
     */
    public description: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosCustomListProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosCustomList.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrDescription = this.getAtt('Description');
        this.attrItems = this.getAtt('Items');
        this.attrKind = this.getAtt('Kind');
        this.attrListId = this.getAtt('ListId');
        this.attrListName = this.getAtt('ListName');
        this.attrUpdateTime = this.getAtt('UpdateTime');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.items = props.items;
        this.kind = props.kind;
        this.listName = props.listName;
        this.description = props.description;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            items: this.items,
            kind: this.kind,
            listName: this.listName,
            description: this.description,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosCustomListPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosCustomScenePolicy`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-customscenepolicy
 */
export interface RosCustomScenePolicyProps {

    /**
     * @Property createTime: The time when the policy takes effect.
     * The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
     */
    readonly createTime: string | ros.IResolvable;

    /**
     * @Property customScenePolicyName: The policy name.
     */
    readonly customScenePolicyName: string | ros.IResolvable;

    /**
     * @Property endTime: The time when the policy expires.
     * The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
     */
    readonly endTime: string | ros.IResolvable;

    /**
     * @Property objects: The IDs of the websites that you want to associate with the policy. Separate multiple IDs with commas (,).
     */
    readonly objects: string | ros.IResolvable;

    /**
     * @Property template: The name of the policy template. Valid value:
     * promotion: major events.
     */
    readonly template: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosCustomScenePolicyProps`
 *
 * @param properties - the TypeScript properties of a `RosCustomScenePolicyProps`
 *
 * @returns the result of the validation.
 */
function RosCustomScenePolicyPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('customScenePolicyName', ros.requiredValidator)(properties.customScenePolicyName));
    errors.collect(ros.propertyValidator('customScenePolicyName', ros.validateString)(properties.customScenePolicyName));
    errors.collect(ros.propertyValidator('endTime', ros.requiredValidator)(properties.endTime));
    errors.collect(ros.propertyValidator('endTime', ros.validateString)(properties.endTime));
    errors.collect(ros.propertyValidator('createTime', ros.requiredValidator)(properties.createTime));
    errors.collect(ros.propertyValidator('createTime', ros.validateString)(properties.createTime));
    errors.collect(ros.propertyValidator('objects', ros.requiredValidator)(properties.objects));
    errors.collect(ros.propertyValidator('objects', ros.validateString)(properties.objects));
    errors.collect(ros.propertyValidator('template', ros.requiredValidator)(properties.template));
    if(properties.template && (typeof properties.template) !== 'object') {
        errors.collect(ros.propertyValidator('template', ros.validateAllowedValues)({
          data: properties.template,
          allowedValues: ["promotion"],
        }));
    }
    errors.collect(ros.propertyValidator('template', ros.validateString)(properties.template));
    return errors.wrap('supplied properties not correct for "RosCustomScenePolicyProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ESA::CustomScenePolicy` resource
 *
 * @param properties - the TypeScript properties of a `RosCustomScenePolicyProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ESA::CustomScenePolicy` resource.
 */
// @ts-ignore TS6133
function rosCustomScenePolicyPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosCustomScenePolicyPropsValidator(properties).assertSuccess();
    }
    return {
      'CreateTime': ros.stringToRosTemplate(properties.createTime),
      'CustomScenePolicyName': ros.stringToRosTemplate(properties.customScenePolicyName),
      'EndTime': ros.stringToRosTemplate(properties.endTime),
      'Objects': ros.stringToRosTemplate(properties.objects),
      'Template': ros.stringToRosTemplate(properties.template),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ESA::CustomScenePolicy`.
 * @Note This class does not contain additional functions, so it is recommended to use the `CustomScenePolicy` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-customscenepolicy
 */
export class RosCustomScenePolicy extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ESA::CustomScenePolicy";

    /**
     * @Attribute CreateTime: The time when the policy takes effect.
     */
    public readonly attrCreateTime: ros.IResolvable;

    /**
     * @Attribute CustomScenePolicyName: The name of the policy.
     */
    public readonly attrCustomScenePolicyName: ros.IResolvable;

    /**
     * @Attribute EndTime: The time when the policy expires.
     */
    public readonly attrEndTime: ros.IResolvable;

    /**
     * @Attribute Objects: The IDs of websites associated.
     */
    public readonly attrObjects: ros.IResolvable;

    /**
     * @Attribute PolicyId: The Id of the Policy.
     */
    public readonly attrPolicyId: ros.IResolvable;

    /**
     * @Attribute Template: The name of the policy template.
     */
    public readonly attrTemplate: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property createTime: The time when the policy takes effect.
     * The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
     */
    public createTime: string | ros.IResolvable;

    /**
     * @Property customScenePolicyName: The policy name.
     */
    public customScenePolicyName: string | ros.IResolvable;

    /**
     * @Property endTime: The time when the policy expires.
     * The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
     */
    public endTime: string | ros.IResolvable;

    /**
     * @Property objects: The IDs of the websites that you want to associate with the policy. Separate multiple IDs with commas (,).
     */
    public objects: string | ros.IResolvable;

    /**
     * @Property template: The name of the policy template. Valid value:
     * promotion: major events.
     */
    public template: string | ros.IResolvable;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosCustomScenePolicyProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosCustomScenePolicy.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrCreateTime = this.getAtt('CreateTime');
        this.attrCustomScenePolicyName = this.getAtt('CustomScenePolicyName');
        this.attrEndTime = this.getAtt('EndTime');
        this.attrObjects = this.getAtt('Objects');
        this.attrPolicyId = this.getAtt('PolicyId');
        this.attrTemplate = this.getAtt('Template');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.createTime = props.createTime;
        this.customScenePolicyName = props.customScenePolicyName;
        this.endTime = props.endTime;
        this.objects = props.objects;
        this.template = props.template;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            createTime: this.createTime,
            customScenePolicyName: this.customScenePolicyName,
            endTime: this.endTime,
            objects: this.objects,
            template: this.template,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosCustomScenePolicyPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosEdgeContainerApp`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-edgecontainerapp
 */
export interface RosEdgeContainerAppProps {

    /**
     * @Property edgeContainerAppName: The name of the application. The name must start with a lowercase letter and can contain lowercase letters, digits, and hyphens (-). The name must be 6 to 128 characters in length.
     */
    readonly edgeContainerAppName: string | ros.IResolvable;

    /**
     * @Property servicePort: The server port. Valid values: 1 to 65535.
     */
    readonly servicePort: number | ros.IResolvable;

    /**
     * @Property targetPort: The backend port, which is also the service port of the application. Valid values: 1 to 65535.
     */
    readonly targetPort: number | ros.IResolvable;

    /**
     * @Property healthCheckFailTimes: The number of consecutive failed health checks required for an application to be considered as unhealthy. Valid values: 1 to 10. Default value: 5.
     */
    readonly healthCheckFailTimes?: number | ros.IResolvable;

    /**
     * @Property healthCheckHost: The domain name that is used for health checks. This parameter is empty by default.
     */
    readonly healthCheckHost?: string | ros.IResolvable;

    /**
     * @Property healthCheckHttpCode: The HTTP status code returned for a successful health check. Valid values:
     * http_2xx (default)http_3xx
     */
    readonly healthCheckHttpCode?: string | ros.IResolvable;

    /**
     * @Property healthCheckInterval: The interval between two consecutive health checks. Unit: seconds. Valid values: 1 to 50. Default value: 5.
     */
    readonly healthCheckInterval?: number | ros.IResolvable;

    /**
     * @Property healthCheckMethod: The HTTP request method for health checks. Valid values:
     * HEAD (default): requests the headers of the resource.
     * GET: requests the specified resource and returns both the headers and entity body.
     */
    readonly healthCheckMethod?: string | ros.IResolvable;

    /**
     * @Property healthCheckPort: The port used for health checks. Valid values: 1 to 65535. Default value: 80.
     */
    readonly healthCheckPort?: number | ros.IResolvable;

    /**
     * @Property healthCheckSuccTimes: The number of consecutive successful health checks required for an application to be considered as healthy. Valid values: 1 to 10. Default value: 2.
     */
    readonly healthCheckSuccTimes?: number | ros.IResolvable;

    /**
     * @Property healthCheckTimeout: The timeout period of a health check response. If a backend ECS instance does not respond within the specified timeout period, the ECS instance fails the health check. Unit: seconds. Valid values: 1 to 100. Default value: 3.
     */
    readonly healthCheckTimeout?: number | ros.IResolvable;

    /**
     * @Property healthCheckType: The health check type. By default, this parameter is left empty. Valid values:
     * l4: Layer 4 health check.
     * l7: Layer 7 health check.
     *
     */
    readonly healthCheckType?: string | ros.IResolvable;

    /**
     * @Property healthCheckUri: The URI used for health checks. The URI must be 1 to 80 characters in length. Default value: "\/".
     */
    readonly healthCheckUri?: string | ros.IResolvable;

    /**
     * @Property remarks: The remarks. This parameter is empty by default.
     */
    readonly remarks?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosEdgeContainerAppProps`
 *
 * @param properties - the TypeScript properties of a `RosEdgeContainerAppProps`
 *
 * @returns the result of the validation.
 */
function RosEdgeContainerAppPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.healthCheckFailTimes && (typeof properties.healthCheckFailTimes) !== 'object') {
        errors.collect(ros.propertyValidator('healthCheckFailTimes', ros.validateRange)({
            data: properties.healthCheckFailTimes,
            min: 1,
            max: 10,
          }));
    }
    errors.collect(ros.propertyValidator('healthCheckFailTimes', ros.validateNumber)(properties.healthCheckFailTimes));
    errors.collect(ros.propertyValidator('servicePort', ros.requiredValidator)(properties.servicePort));
    if(properties.servicePort && (typeof properties.servicePort) !== 'object') {
        errors.collect(ros.propertyValidator('servicePort', ros.validateRange)({
            data: properties.servicePort,
            min: 1,
            max: 65535,
          }));
    }
    errors.collect(ros.propertyValidator('servicePort', ros.validateNumber)(properties.servicePort));
    if(properties.healthCheckInterval && (typeof properties.healthCheckInterval) !== 'object') {
        errors.collect(ros.propertyValidator('healthCheckInterval', ros.validateRange)({
            data: properties.healthCheckInterval,
            min: 1,
            max: 50,
          }));
    }
    errors.collect(ros.propertyValidator('healthCheckInterval', ros.validateNumber)(properties.healthCheckInterval));
    errors.collect(ros.propertyValidator('targetPort', ros.requiredValidator)(properties.targetPort));
    if(properties.targetPort && (typeof properties.targetPort) !== 'object') {
        errors.collect(ros.propertyValidator('targetPort', ros.validateRange)({
            data: properties.targetPort,
            min: 1,
            max: 65535,
          }));
    }
    errors.collect(ros.propertyValidator('targetPort', ros.validateNumber)(properties.targetPort));
    errors.collect(ros.propertyValidator('healthCheckUri', ros.validateString)(properties.healthCheckUri));
    errors.collect(ros.propertyValidator('healthCheckHost', ros.validateString)(properties.healthCheckHost));
    if(properties.healthCheckTimeout && (typeof properties.healthCheckTimeout) !== 'object') {
        errors.collect(ros.propertyValidator('healthCheckTimeout', ros.validateRange)({
            data: properties.healthCheckTimeout,
            min: 1,
            max: 100,
          }));
    }
    errors.collect(ros.propertyValidator('healthCheckTimeout', ros.validateNumber)(properties.healthCheckTimeout));
    if(properties.healthCheckSuccTimes && (typeof properties.healthCheckSuccTimes) !== 'object') {
        errors.collect(ros.propertyValidator('healthCheckSuccTimes', ros.validateRange)({
            data: properties.healthCheckSuccTimes,
            min: 1,
            max: 10,
          }));
    }
    errors.collect(ros.propertyValidator('healthCheckSuccTimes', ros.validateNumber)(properties.healthCheckSuccTimes));
    errors.collect(ros.propertyValidator('remarks', ros.validateString)(properties.remarks));
    errors.collect(ros.propertyValidator('healthCheckMethod', ros.validateString)(properties.healthCheckMethod));
    if(properties.healthCheckPort && (typeof properties.healthCheckPort) !== 'object') {
        errors.collect(ros.propertyValidator('healthCheckPort', ros.validateRange)({
            data: properties.healthCheckPort,
            min: 1,
            max: 65535,
          }));
    }
    errors.collect(ros.propertyValidator('healthCheckPort', ros.validateNumber)(properties.healthCheckPort));
    errors.collect(ros.propertyValidator('edgeContainerAppName', ros.requiredValidator)(properties.edgeContainerAppName));
    errors.collect(ros.propertyValidator('edgeContainerAppName', ros.validateString)(properties.edgeContainerAppName));
    errors.collect(ros.propertyValidator('healthCheckHttpCode', ros.validateString)(properties.healthCheckHttpCode));
    if(properties.healthCheckType && (typeof properties.healthCheckType) !== 'object') {
        errors.collect(ros.propertyValidator('healthCheckType', ros.validateAllowedValues)({
          data: properties.healthCheckType,
          allowedValues: ["l4","l7"],
        }));
    }
    errors.collect(ros.propertyValidator('healthCheckType', ros.validateString)(properties.healthCheckType));
    return errors.wrap('supplied properties not correct for "RosEdgeContainerAppProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ESA::EdgeContainerApp` resource
 *
 * @param properties - the TypeScript properties of a `RosEdgeContainerAppProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ESA::EdgeContainerApp` resource.
 */
// @ts-ignore TS6133
function rosEdgeContainerAppPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosEdgeContainerAppPropsValidator(properties).assertSuccess();
    }
    return {
      'EdgeContainerAppName': ros.stringToRosTemplate(properties.edgeContainerAppName),
      'ServicePort': ros.numberToRosTemplate(properties.servicePort),
      'TargetPort': ros.numberToRosTemplate(properties.targetPort),
      'HealthCheckFailTimes': ros.numberToRosTemplate(properties.healthCheckFailTimes),
      'HealthCheckHost': ros.stringToRosTemplate(properties.healthCheckHost),
      'HealthCheckHttpCode': ros.stringToRosTemplate(properties.healthCheckHttpCode),
      'HealthCheckInterval': ros.numberToRosTemplate(properties.healthCheckInterval),
      'HealthCheckMethod': ros.stringToRosTemplate(properties.healthCheckMethod),
      'HealthCheckPort': ros.numberToRosTemplate(properties.healthCheckPort),
      'HealthCheckSuccTimes': ros.numberToRosTemplate(properties.healthCheckSuccTimes),
      'HealthCheckTimeout': ros.numberToRosTemplate(properties.healthCheckTimeout),
      'HealthCheckType': ros.stringToRosTemplate(properties.healthCheckType),
      'HealthCheckUri': ros.stringToRosTemplate(properties.healthCheckUri),
      'Remarks': ros.stringToRosTemplate(properties.remarks),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ESA::EdgeContainerApp`.
 * @Note This class does not contain additional functions, so it is recommended to use the `EdgeContainerApp` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-edgecontainerapp
 */
export class RosEdgeContainerApp extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ESA::EdgeContainerApp";

    /**
     * @Attribute AppStatus: The status of the application.
     */
    public readonly attrAppStatus: ros.IResolvable;

    /**
     * @Attribute CreateTime: The time when the application was created.
     */
    public readonly attrCreateTime: ros.IResolvable;

    /**
     * @Attribute DomainName: The domain name that is associated with the application. If no domain name is associated with the application, the value is an empty string.
     */
    public readonly attrDomainName: ros.IResolvable;

    /**
     * @Attribute EdgeContainerAppName: The name of the application.
     */
    public readonly attrEdgeContainerAppName: ros.IResolvable;

    /**
     * @Attribute GatewayType: The type of the gateway.
     */
    public readonly attrGatewayType: ros.IResolvable;

    /**
     * @Attribute HealthCheckFailTimes: TThe number of consecutive failed health checks required for an application to be considered as unhealthy.
     */
    public readonly attrHealthCheckFailTimes: ros.IResolvable;

    /**
     * @Attribute HealthCheckHost: The domain name that is used for health checks.
     */
    public readonly attrHealthCheckHost: ros.IResolvable;

    /**
     * @Attribute HealthCheckHttpCode: The HTTP status code returned for a successful health check.
     */
    public readonly attrHealthCheckHttpCode: ros.IResolvable;

    /**
     * @Attribute HealthCheckInterval: The interval between two consecutive health checks. Unit: seconds.
     */
    public readonly attrHealthCheckInterval: ros.IResolvable;

    /**
     * @Attribute HealthCheckMethod: The HTTP request method for health checks.
     */
    public readonly attrHealthCheckMethod: ros.IResolvable;

    /**
     * @Attribute HealthCheckPort: The port used for health checks. Valid values: 1 to 65535. Default value: 80.
     */
    public readonly attrHealthCheckPort: ros.IResolvable;

    /**
     * @Attribute HealthCheckSuccTimes: The number of consecutive successful health checks required for an application to be considered as healthy.
     */
    public readonly attrHealthCheckSuccTimes: ros.IResolvable;

    /**
     * @Attribute HealthCheckTimeout: The timeout period of a health check response.
     */
    public readonly attrHealthCheckTimeout: ros.IResolvable;

    /**
     * @Attribute HealthCheckType: The health check type.
     */
    public readonly attrHealthCheckType: ros.IResolvable;

    /**
     * @Attribute HealthCheckUri: The URI used for health checks.
     */
    public readonly attrHealthCheckUri: ros.IResolvable;

    /**
     * @Attribute QuicCid: Indicates whether QUIC is enabled.
     */
    public readonly attrQuicCid: ros.IResolvable;

    /**
     * @Attribute Remarks: The remarks. This parameter is empty by default.
     */
    public readonly attrRemarks: ros.IResolvable;

    /**
     * @Attribute ServicePort: The server port.
     */
    public readonly attrServicePort: ros.IResolvable;

    /**
     * @Attribute TargetPort: The backend port, which is also the service port of the application.
     */
    public readonly attrTargetPort: ros.IResolvable;

    /**
     * @Attribute UpdateTime: The time when the application was last modified. The time follows the ISO 8601 standard in the YYYY-MM-DDThh:mm:ss format. The time is displayed in UTC.
     */
    public readonly attrUpdateTime: ros.IResolvable;

    /**
     * @Attribute VersionCount: The number of versions of the application.
     */
    public readonly attrVersionCount: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property edgeContainerAppName: The name of the application. The name must start with a lowercase letter and can contain lowercase letters, digits, and hyphens (-). The name must be 6 to 128 characters in length.
     */
    public edgeContainerAppName: string | ros.IResolvable;

    /**
     * @Property servicePort: The server port. Valid values: 1 to 65535.
     */
    public servicePort: number | ros.IResolvable;

    /**
     * @Property targetPort: The backend port, which is also the service port of the application. Valid values: 1 to 65535.
     */
    public targetPort: number | ros.IResolvable;

    /**
     * @Property healthCheckFailTimes: The number of consecutive failed health checks required for an application to be considered as unhealthy. Valid values: 1 to 10. Default value: 5.
     */
    public healthCheckFailTimes: number | ros.IResolvable | undefined;

    /**
     * @Property healthCheckHost: The domain name that is used for health checks. This parameter is empty by default.
     */
    public healthCheckHost: string | ros.IResolvable | undefined;

    /**
     * @Property healthCheckHttpCode: The HTTP status code returned for a successful health check. Valid values:
     * http_2xx (default)http_3xx
     */
    public healthCheckHttpCode: string | ros.IResolvable | undefined;

    /**
     * @Property healthCheckInterval: The interval between two consecutive health checks. Unit: seconds. Valid values: 1 to 50. Default value: 5.
     */
    public healthCheckInterval: number | ros.IResolvable | undefined;

    /**
     * @Property healthCheckMethod: The HTTP request method for health checks. Valid values:
     * HEAD (default): requests the headers of the resource.
     * GET: requests the specified resource and returns both the headers and entity body.
     */
    public healthCheckMethod: string | ros.IResolvable | undefined;

    /**
     * @Property healthCheckPort: The port used for health checks. Valid values: 1 to 65535. Default value: 80.
     */
    public healthCheckPort: number | ros.IResolvable | undefined;

    /**
     * @Property healthCheckSuccTimes: The number of consecutive successful health checks required for an application to be considered as healthy. Valid values: 1 to 10. Default value: 2.
     */
    public healthCheckSuccTimes: number | ros.IResolvable | undefined;

    /**
     * @Property healthCheckTimeout: The timeout period of a health check response. If a backend ECS instance does not respond within the specified timeout period, the ECS instance fails the health check. Unit: seconds. Valid values: 1 to 100. Default value: 3.
     */
    public healthCheckTimeout: number | ros.IResolvable | undefined;

    /**
     * @Property healthCheckType: The health check type. By default, this parameter is left empty. Valid values:
     * l4: Layer 4 health check.
     * l7: Layer 7 health check.
     *
     */
    public healthCheckType: string | ros.IResolvable | undefined;

    /**
     * @Property healthCheckUri: The URI used for health checks. The URI must be 1 to 80 characters in length. Default value: "\/".
     */
    public healthCheckUri: string | ros.IResolvable | undefined;

    /**
     * @Property remarks: The remarks. This parameter is empty by default.
     */
    public remarks: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosEdgeContainerAppProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosEdgeContainerApp.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAppStatus = this.getAtt('AppStatus');
        this.attrCreateTime = this.getAtt('CreateTime');
        this.attrDomainName = this.getAtt('DomainName');
        this.attrEdgeContainerAppName = this.getAtt('EdgeContainerAppName');
        this.attrGatewayType = this.getAtt('GatewayType');
        this.attrHealthCheckFailTimes = this.getAtt('HealthCheckFailTimes');
        this.attrHealthCheckHost = this.getAtt('HealthCheckHost');
        this.attrHealthCheckHttpCode = this.getAtt('HealthCheckHttpCode');
        this.attrHealthCheckInterval = this.getAtt('HealthCheckInterval');
        this.attrHealthCheckMethod = this.getAtt('HealthCheckMethod');
        this.attrHealthCheckPort = this.getAtt('HealthCheckPort');
        this.attrHealthCheckSuccTimes = this.getAtt('HealthCheckSuccTimes');
        this.attrHealthCheckTimeout = this.getAtt('HealthCheckTimeout');
        this.attrHealthCheckType = this.getAtt('HealthCheckType');
        this.attrHealthCheckUri = this.getAtt('HealthCheckUri');
        this.attrQuicCid = this.getAtt('QuicCid');
        this.attrRemarks = this.getAtt('Remarks');
        this.attrServicePort = this.getAtt('ServicePort');
        this.attrTargetPort = this.getAtt('TargetPort');
        this.attrUpdateTime = this.getAtt('UpdateTime');
        this.attrVersionCount = this.getAtt('VersionCount');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.edgeContainerAppName = props.edgeContainerAppName;
        this.servicePort = props.servicePort;
        this.targetPort = props.targetPort;
        this.healthCheckFailTimes = props.healthCheckFailTimes;
        this.healthCheckHost = props.healthCheckHost;
        this.healthCheckHttpCode = props.healthCheckHttpCode;
        this.healthCheckInterval = props.healthCheckInterval;
        this.healthCheckMethod = props.healthCheckMethod;
        this.healthCheckPort = props.healthCheckPort;
        this.healthCheckSuccTimes = props.healthCheckSuccTimes;
        this.healthCheckTimeout = props.healthCheckTimeout;
        this.healthCheckType = props.healthCheckType;
        this.healthCheckUri = props.healthCheckUri;
        this.remarks = props.remarks;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            edgeContainerAppName: this.edgeContainerAppName,
            servicePort: this.servicePort,
            targetPort: this.targetPort,
            healthCheckFailTimes: this.healthCheckFailTimes,
            healthCheckHost: this.healthCheckHost,
            healthCheckHttpCode: this.healthCheckHttpCode,
            healthCheckInterval: this.healthCheckInterval,
            healthCheckMethod: this.healthCheckMethod,
            healthCheckPort: this.healthCheckPort,
            healthCheckSuccTimes: this.healthCheckSuccTimes,
            healthCheckTimeout: this.healthCheckTimeout,
            healthCheckType: this.healthCheckType,
            healthCheckUri: this.healthCheckUri,
            remarks: this.remarks,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosEdgeContainerAppPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosEdgeContainerAppRecord`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-edgecontainerapprecord
 */
export interface RosEdgeContainerAppRecordProps {

    /**
     * @Property appId: The application ID.
     */
    readonly appId: string | ros.IResolvable;

    /**
     * @Property recordName: The associated domain name.
     */
    readonly recordName: string | ros.IResolvable;

    /**
     * @Property siteId: The website ID.
     */
    readonly siteId: number | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosEdgeContainerAppRecordProps`
 *
 * @param properties - the TypeScript properties of a `RosEdgeContainerAppRecordProps`
 *
 * @returns the result of the validation.
 */
function RosEdgeContainerAppRecordPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('recordName', ros.requiredValidator)(properties.recordName));
    errors.collect(ros.propertyValidator('recordName', ros.validateString)(properties.recordName));
    errors.collect(ros.propertyValidator('siteId', ros.requiredValidator)(properties.siteId));
    errors.collect(ros.propertyValidator('siteId', ros.validateNumber)(properties.siteId));
    errors.collect(ros.propertyValidator('appId', ros.requiredValidator)(properties.appId));
    errors.collect(ros.propertyValidator('appId', ros.validateString)(properties.appId));
    return errors.wrap('supplied properties not correct for "RosEdgeContainerAppRecordProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ESA::EdgeContainerAppRecord` resource
 *
 * @param properties - the TypeScript properties of a `RosEdgeContainerAppRecordProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ESA::EdgeContainerAppRecord` resource.
 */
// @ts-ignore TS6133
function rosEdgeContainerAppRecordPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosEdgeContainerAppRecordPropsValidator(properties).assertSuccess();
    }
    return {
      'AppId': ros.stringToRosTemplate(properties.appId),
      'RecordName': ros.stringToRosTemplate(properties.recordName),
      'SiteId': ros.numberToRosTemplate(properties.siteId),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ESA::EdgeContainerAppRecord`.
 * @Note This class does not contain additional functions, so it is recommended to use the `EdgeContainerAppRecord` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-edgecontainerapprecord
 */
export class RosEdgeContainerAppRecord extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ESA::EdgeContainerAppRecord";

    /**
     * @Attribute AppId: The application ID.
     */
    public readonly attrAppId: ros.IResolvable;

    /**
     * @Attribute Cname: The CNAME of the associated domain name.
     */
    public readonly attrCname: ros.IResolvable;

    /**
     * @Attribute ConfigId: The configuration ID of the associated domain name.
     */
    public readonly attrConfigId: ros.IResolvable;

    /**
     * @Attribute CreateTime: The time when the domain name was added. The time follows the ISO 8601 standard in the YYYY-MM-DDThh:mm:ss format. The time is displayed in UTC.
     */
    public readonly attrCreateTime: ros.IResolvable;

    /**
     * @Attribute RecordId: The record ID of the associated domain name.
     */
    public readonly attrRecordId: ros.IResolvable;

    /**
     * @Attribute RecordName: The associated domain name.
     */
    public readonly attrRecordName: ros.IResolvable;

    /**
     * @Attribute SchemdId: The scheduling domain ID of the associated domain name.
     */
    public readonly attrSchemdId: ros.IResolvable;

    /**
     * @Attribute SiteId: The website ID.
     */
    public readonly attrSiteId: ros.IResolvable;

    /**
     * @Attribute UpdateTime: The time when the scheduling domain ID or CNAME was last modified. The time follows the ISO 8601 standard in the YYYY-MM-DDThh:mm:ss format. The time is displayed in UTC.
     */
    public readonly attrUpdateTime: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property appId: The application ID.
     */
    public appId: string | ros.IResolvable;

    /**
     * @Property recordName: The associated domain name.
     */
    public recordName: string | ros.IResolvable;

    /**
     * @Property siteId: The website ID.
     */
    public siteId: number | ros.IResolvable;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosEdgeContainerAppRecordProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosEdgeContainerAppRecord.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAppId = this.getAtt('AppId');
        this.attrCname = this.getAtt('Cname');
        this.attrConfigId = this.getAtt('ConfigId');
        this.attrCreateTime = this.getAtt('CreateTime');
        this.attrRecordId = this.getAtt('RecordId');
        this.attrRecordName = this.getAtt('RecordName');
        this.attrSchemdId = this.getAtt('SchemdId');
        this.attrSiteId = this.getAtt('SiteId');
        this.attrUpdateTime = this.getAtt('UpdateTime');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.appId = props.appId;
        this.recordName = props.recordName;
        this.siteId = props.siteId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            appId: this.appId,
            recordName: this.recordName,
            siteId: this.siteId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosEdgeContainerAppRecordPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosHttpRequestHeaderModificationRule`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-httprequestheadermodificationrule
 */
export interface RosHttpRequestHeaderModificationRuleProps {

    /**
     * @Property requestHeaderModification: The configurations of modifying request headers. You can add, delete, or modify a request header.
     */
    readonly requestHeaderModification: Array<RosHttpRequestHeaderModificationRule.RequestHeaderModificationProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property siteId: The site ID.
     */
    readonly siteId: number | ros.IResolvable;

    /**
     * @Property rule: Rule content, using conditional expressions to match user requests. When adding global configuration, this parameter does not need to be set. There are two usage scenarios:
     * - Match all incoming requests: value set to true
     * - Match specified request: Set the value to a custom expression, for example: (http.host eq \"video.example.com\").
     */
    readonly rule?: string | ros.IResolvable;

    /**
     * @Property ruleEnable: Rule switch. When adding global configuration, this parameter does not need to be set. Value range:
     * - on: open.
     * - off: close.
     */
    readonly ruleEnable?: string | ros.IResolvable;

    /**
     * @Property ruleName: Rule name. When adding global configuration, this parameter does not need to be set.
     */
    readonly ruleName?: string | ros.IResolvable;

    /**
     * @Property sequence: Order of rule execution. The smaller the value, the higher the priority for execution.
     */
    readonly sequence?: number | ros.IResolvable;

    /**
     * @Property siteVersion: The version number of the site configuration. For sites that have enabled configuration version management, this parameter can be used to specify the effective version of the configuration site, which defaults to version 0.
     */
    readonly siteVersion?: number | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosHttpRequestHeaderModificationRuleProps`
 *
 * @param properties - the TypeScript properties of a `RosHttpRequestHeaderModificationRuleProps`
 *
 * @returns the result of the validation.
 */
function RosHttpRequestHeaderModificationRulePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('siteId', ros.requiredValidator)(properties.siteId));
    errors.collect(ros.propertyValidator('siteId', ros.validateNumber)(properties.siteId));
    if(properties.ruleEnable && (typeof properties.ruleEnable) !== 'object') {
        errors.collect(ros.propertyValidator('ruleEnable', ros.validateAllowedValues)({
          data: properties.ruleEnable,
          allowedValues: ["on","off"],
        }));
    }
    errors.collect(ros.propertyValidator('ruleEnable', ros.validateString)(properties.ruleEnable));
    errors.collect(ros.propertyValidator('sequence', ros.validateNumber)(properties.sequence));
    errors.collect(ros.propertyValidator('rule', ros.validateString)(properties.rule));
    errors.collect(ros.propertyValidator('siteVersion', ros.validateNumber)(properties.siteVersion));
    errors.collect(ros.propertyValidator('requestHeaderModification', ros.requiredValidator)(properties.requestHeaderModification));
    errors.collect(ros.propertyValidator('requestHeaderModification', ros.listValidator(RosHttpRequestHeaderModificationRule_RequestHeaderModificationPropertyValidator))(properties.requestHeaderModification));
    errors.collect(ros.propertyValidator('ruleName', ros.validateString)(properties.ruleName));
    return errors.wrap('supplied properties not correct for "RosHttpRequestHeaderModificationRuleProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ESA::HttpRequestHeaderModificationRule` resource
 *
 * @param properties - the TypeScript properties of a `RosHttpRequestHeaderModificationRuleProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ESA::HttpRequestHeaderModificationRule` resource.
 */
// @ts-ignore TS6133
function rosHttpRequestHeaderModificationRulePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosHttpRequestHeaderModificationRulePropsValidator(properties).assertSuccess();
    }
    return {
      'RequestHeaderModification': ros.listMapper(rosHttpRequestHeaderModificationRuleRequestHeaderModificationPropertyToRosTemplate)(properties.requestHeaderModification),
      'SiteId': ros.numberToRosTemplate(properties.siteId),
      'Rule': ros.stringToRosTemplate(properties.rule),
      'RuleEnable': ros.stringToRosTemplate(properties.ruleEnable),
      'RuleName': ros.stringToRosTemplate(properties.ruleName),
      'Sequence': ros.numberToRosTemplate(properties.sequence),
      'SiteVersion': ros.numberToRosTemplate(properties.siteVersion),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ESA::HttpRequestHeaderModificationRule`.
 * @Note This class does not contain additional functions, so it is recommended to use the `HttpRequestHeaderModificationRule` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-httprequestheadermodificationrule
 */
export class RosHttpRequestHeaderModificationRule extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ESA::HttpRequestHeaderModificationRule";

    /**
     * @Attribute ConfigId: Config Id.
     */
    public readonly attrConfigId: ros.IResolvable;

    /**
     * @Attribute ConfigType: The configuration type. You can use this parameter to check the global configuration or rule configuration.
     */
    public readonly attrConfigType: ros.IResolvable;

    /**
     * @Attribute RequestHeaderModification: The configurations of modifying request headers. You can add, delete, or modify a request header.
     */
    public readonly attrRequestHeaderModification: ros.IResolvable;

    /**
     * @Attribute Rule: Rule content, using conditional expressions to match user requests. When adding global configuration, this parameter does not need to be set.
     */
    public readonly attrRule: ros.IResolvable;

    /**
     * @Attribute RuleEnable: Rule switch. When adding global configuration, this parameter does not need to be set.
     */
    public readonly attrRuleEnable: ros.IResolvable;

    /**
     * @Attribute RuleName: Rule name. When adding global configuration, this parameter does not need to be set.
     */
    public readonly attrRuleName: ros.IResolvable;

    /**
     * @Attribute Sequence: Order of rule execution. The smaller the value, the higher the priority for execution.
     */
    public readonly attrSequence: ros.IResolvable;

    /**
     * @Attribute SiteVersion: The version number of the site configuration. For sites that have enabled configuration version management, this parameter can be used to specify the effective version of the configuration site, which defaults to version 0.
     */
    public readonly attrSiteVersion: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property requestHeaderModification: The configurations of modifying request headers. You can add, delete, or modify a request header.
     */
    public requestHeaderModification: Array<RosHttpRequestHeaderModificationRule.RequestHeaderModificationProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property siteId: The site ID.
     */
    public siteId: number | ros.IResolvable;

    /**
     * @Property rule: Rule content, using conditional expressions to match user requests. When adding global configuration, this parameter does not need to be set. There are two usage scenarios:
     * - Match all incoming requests: value set to true
     * - Match specified request: Set the value to a custom expression, for example: (http.host eq \"video.example.com\").
     */
    public rule: string | ros.IResolvable | undefined;

    /**
     * @Property ruleEnable: Rule switch. When adding global configuration, this parameter does not need to be set. Value range:
     * - on: open.
     * - off: close.
     */
    public ruleEnable: string | ros.IResolvable | undefined;

    /**
     * @Property ruleName: Rule name. When adding global configuration, this parameter does not need to be set.
     */
    public ruleName: string | ros.IResolvable | undefined;

    /**
     * @Property sequence: Order of rule execution. The smaller the value, the higher the priority for execution.
     */
    public sequence: number | ros.IResolvable | undefined;

    /**
     * @Property siteVersion: The version number of the site configuration. For sites that have enabled configuration version management, this parameter can be used to specify the effective version of the configuration site, which defaults to version 0.
     */
    public siteVersion: number | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosHttpRequestHeaderModificationRuleProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosHttpRequestHeaderModificationRule.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrConfigId = this.getAtt('ConfigId');
        this.attrConfigType = this.getAtt('ConfigType');
        this.attrRequestHeaderModification = this.getAtt('RequestHeaderModification');
        this.attrRule = this.getAtt('Rule');
        this.attrRuleEnable = this.getAtt('RuleEnable');
        this.attrRuleName = this.getAtt('RuleName');
        this.attrSequence = this.getAtt('Sequence');
        this.attrSiteVersion = this.getAtt('SiteVersion');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.requestHeaderModification = props.requestHeaderModification;
        this.siteId = props.siteId;
        this.rule = props.rule;
        this.ruleEnable = props.ruleEnable;
        this.ruleName = props.ruleName;
        this.sequence = props.sequence;
        this.siteVersion = props.siteVersion;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            requestHeaderModification: this.requestHeaderModification,
            siteId: this.siteId,
            rule: this.rule,
            ruleEnable: this.ruleEnable,
            ruleName: this.ruleName,
            sequence: this.sequence,
            siteVersion: this.siteVersion,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosHttpRequestHeaderModificationRulePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosHttpRequestHeaderModificationRule {
    /**
     * @stability external
     */
    export interface RequestHeaderModificationProperty {
        /**
         * @Property type: Value type. Value range:
     * - `static`:static mode.
     * - `dynamic`:dynamic mode.
         */
        readonly type?: string | ros.IResolvable;
        /**
         * @Property value: Request header value.
         */
        readonly value?: string | ros.IResolvable;
        /**
         * @Property operation: Mode of operation. Value range:
     * - `add`: add.
     * - `del`: delete
     * - `modify`: change.
         */
        readonly operation: string | ros.IResolvable;
        /**
         * @Property name: Request Header Name.
         */
        readonly name: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `RequestHeaderModificationProperty`
 *
 * @param properties - the TypeScript properties of a `RequestHeaderModificationProperty`
 *
 * @returns the result of the validation.
 */
function RosHttpRequestHeaderModificationRule_RequestHeaderModificationPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.type && (typeof properties.type) !== 'object') {
        errors.collect(ros.propertyValidator('type', ros.validateAllowedValues)({
          data: properties.type,
          allowedValues: ["static","dynamic"],
        }));
    }
    errors.collect(ros.propertyValidator('type', ros.validateString)(properties.type));
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    errors.collect(ros.propertyValidator('operation', ros.requiredValidator)(properties.operation));
    if(properties.operation && (typeof properties.operation) !== 'object') {
        errors.collect(ros.propertyValidator('operation', ros.validateAllowedValues)({
          data: properties.operation,
          allowedValues: ["add","del","modify"],
        }));
    }
    errors.collect(ros.propertyValidator('operation', ros.validateString)(properties.operation));
    errors.collect(ros.propertyValidator('name', ros.requiredValidator)(properties.name));
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    return errors.wrap('supplied properties not correct for "RequestHeaderModificationProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ESA::HttpRequestHeaderModificationRule.RequestHeaderModification` resource
 *
 * @param properties - the TypeScript properties of a `RequestHeaderModificationProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ESA::HttpRequestHeaderModificationRule.RequestHeaderModification` resource.
 */
// @ts-ignore TS6133
function rosHttpRequestHeaderModificationRuleRequestHeaderModificationPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosHttpRequestHeaderModificationRule_RequestHeaderModificationPropertyValidator(properties).assertSuccess();
    return {
      'Type': ros.stringToRosTemplate(properties.type),
      'Value': ros.stringToRosTemplate(properties.value),
      'Operation': ros.stringToRosTemplate(properties.operation),
      'Name': ros.stringToRosTemplate(properties.name),
    };
}

/**
 * Properties for defining a `RosHttpResponseHeaderModificationRule`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-httpresponseheadermodificationrule
 */
export interface RosHttpResponseHeaderModificationRuleProps {

    /**
     * @Property responseHeaderModification: Modify response headers, supporting add, delete, and modify operations.
     */
    readonly responseHeaderModification: Array<RosHttpResponseHeaderModificationRule.ResponseHeaderModificationProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property siteId: The site ID.
     */
    readonly siteId: number | ros.IResolvable;

    /**
     * @Property rule: Rule content, using conditional expressions to match user requests. When adding global configuration, this parameter does not need to be set. There are two usage scenarios:
     * - Match all incoming requests: value set to true
     * - Match specified request: Set the value to a custom expression, for example: (http.host eq \"video.example.com\").
     */
    readonly rule?: string | ros.IResolvable;

    /**
     * @Property ruleEnable: Rule switch. When adding global configuration, this parameter does not need to be set. Value range:
     * - `on`: open.
     * - `off`: close.
     */
    readonly ruleEnable?: string | ros.IResolvable;

    /**
     * @Property ruleName: Rule name. When adding global configuration, this parameter does not need to be set.
     */
    readonly ruleName?: string | ros.IResolvable;

    /**
     * @Property sequence: Order of rule execution. The smaller the value, the higher the priority for execution.
     */
    readonly sequence?: number | ros.IResolvable;

    /**
     * @Property siteVersion: The version number of the site configuration. For sites that have enabled configuration version management, this parameter can be used to specify the effective version of the configuration site, which defaults to version 0.
     */
    readonly siteVersion?: number | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosHttpResponseHeaderModificationRuleProps`
 *
 * @param properties - the TypeScript properties of a `RosHttpResponseHeaderModificationRuleProps`
 *
 * @returns the result of the validation.
 */
function RosHttpResponseHeaderModificationRulePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('siteId', ros.requiredValidator)(properties.siteId));
    errors.collect(ros.propertyValidator('siteId', ros.validateNumber)(properties.siteId));
    if(properties.ruleEnable && (typeof properties.ruleEnable) !== 'object') {
        errors.collect(ros.propertyValidator('ruleEnable', ros.validateAllowedValues)({
          data: properties.ruleEnable,
          allowedValues: ["on","off"],
        }));
    }
    errors.collect(ros.propertyValidator('ruleEnable', ros.validateString)(properties.ruleEnable));
    errors.collect(ros.propertyValidator('responseHeaderModification', ros.requiredValidator)(properties.responseHeaderModification));
    errors.collect(ros.propertyValidator('responseHeaderModification', ros.listValidator(RosHttpResponseHeaderModificationRule_ResponseHeaderModificationPropertyValidator))(properties.responseHeaderModification));
    errors.collect(ros.propertyValidator('sequence', ros.validateNumber)(properties.sequence));
    errors.collect(ros.propertyValidator('rule', ros.validateString)(properties.rule));
    errors.collect(ros.propertyValidator('siteVersion', ros.validateNumber)(properties.siteVersion));
    errors.collect(ros.propertyValidator('ruleName', ros.validateString)(properties.ruleName));
    return errors.wrap('supplied properties not correct for "RosHttpResponseHeaderModificationRuleProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ESA::HttpResponseHeaderModificationRule` resource
 *
 * @param properties - the TypeScript properties of a `RosHttpResponseHeaderModificationRuleProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ESA::HttpResponseHeaderModificationRule` resource.
 */
// @ts-ignore TS6133
function rosHttpResponseHeaderModificationRulePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosHttpResponseHeaderModificationRulePropsValidator(properties).assertSuccess();
    }
    return {
      'ResponseHeaderModification': ros.listMapper(rosHttpResponseHeaderModificationRuleResponseHeaderModificationPropertyToRosTemplate)(properties.responseHeaderModification),
      'SiteId': ros.numberToRosTemplate(properties.siteId),
      'Rule': ros.stringToRosTemplate(properties.rule),
      'RuleEnable': ros.stringToRosTemplate(properties.ruleEnable),
      'RuleName': ros.stringToRosTemplate(properties.ruleName),
      'Sequence': ros.numberToRosTemplate(properties.sequence),
      'SiteVersion': ros.numberToRosTemplate(properties.siteVersion),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ESA::HttpResponseHeaderModificationRule`.
 * @Note This class does not contain additional functions, so it is recommended to use the `HttpResponseHeaderModificationRule` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-httpresponseheadermodificationrule
 */
export class RosHttpResponseHeaderModificationRule extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ESA::HttpResponseHeaderModificationRule";

    /**
     * @Attribute ConfigId: Config Id.
     */
    public readonly attrConfigId: ros.IResolvable;

    /**
     * @Attribute ConfigType: The configuration type.
     */
    public readonly attrConfigType: ros.IResolvable;

    /**
     * @Attribute ResponseHeaderModification: Modify response headers, supporting add, delete, and modify operations.
     */
    public readonly attrResponseHeaderModification: ros.IResolvable;

    /**
     * @Attribute Rule: Rule content, using conditional expressions to match user requests. When adding global configuration, this parameter does not need to be set.
     */
    public readonly attrRule: ros.IResolvable;

    /**
     * @Attribute RuleEnable: Rule switch. When adding global configuration, this parameter does not need to be set.
     */
    public readonly attrRuleEnable: ros.IResolvable;

    /**
     * @Attribute RuleName: Rule name. When adding global configuration, this parameter does not need to be set.
     */
    public readonly attrRuleName: ros.IResolvable;

    /**
     * @Attribute Sequence: Order of rule execution. The smaller the value, the higher the priority for execution.
     */
    public readonly attrSequence: ros.IResolvable;

    /**
     * @Attribute SiteVersion: The version number of the site configuration. For sites that have enabled configuration version management, this parameter can be used to specify the effective version of the configuration site, which defaults to version 0.
     */
    public readonly attrSiteVersion: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property responseHeaderModification: Modify response headers, supporting add, delete, and modify operations.
     */
    public responseHeaderModification: Array<RosHttpResponseHeaderModificationRule.ResponseHeaderModificationProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property siteId: The site ID.
     */
    public siteId: number | ros.IResolvable;

    /**
     * @Property rule: Rule content, using conditional expressions to match user requests. When adding global configuration, this parameter does not need to be set. There are two usage scenarios:
     * - Match all incoming requests: value set to true
     * - Match specified request: Set the value to a custom expression, for example: (http.host eq \"video.example.com\").
     */
    public rule: string | ros.IResolvable | undefined;

    /**
     * @Property ruleEnable: Rule switch. When adding global configuration, this parameter does not need to be set. Value range:
     * - `on`: open.
     * - `off`: close.
     */
    public ruleEnable: string | ros.IResolvable | undefined;

    /**
     * @Property ruleName: Rule name. When adding global configuration, this parameter does not need to be set.
     */
    public ruleName: string | ros.IResolvable | undefined;

    /**
     * @Property sequence: Order of rule execution. The smaller the value, the higher the priority for execution.
     */
    public sequence: number | ros.IResolvable | undefined;

    /**
     * @Property siteVersion: The version number of the site configuration. For sites that have enabled configuration version management, this parameter can be used to specify the effective version of the configuration site, which defaults to version 0.
     */
    public siteVersion: number | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosHttpResponseHeaderModificationRuleProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosHttpResponseHeaderModificationRule.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrConfigId = this.getAtt('ConfigId');
        this.attrConfigType = this.getAtt('ConfigType');
        this.attrResponseHeaderModification = this.getAtt('ResponseHeaderModification');
        this.attrRule = this.getAtt('Rule');
        this.attrRuleEnable = this.getAtt('RuleEnable');
        this.attrRuleName = this.getAtt('RuleName');
        this.attrSequence = this.getAtt('Sequence');
        this.attrSiteVersion = this.getAtt('SiteVersion');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.responseHeaderModification = props.responseHeaderModification;
        this.siteId = props.siteId;
        this.rule = props.rule;
        this.ruleEnable = props.ruleEnable;
        this.ruleName = props.ruleName;
        this.sequence = props.sequence;
        this.siteVersion = props.siteVersion;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            responseHeaderModification: this.responseHeaderModification,
            siteId: this.siteId,
            rule: this.rule,
            ruleEnable: this.ruleEnable,
            ruleName: this.ruleName,
            sequence: this.sequence,
            siteVersion: this.siteVersion,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosHttpResponseHeaderModificationRulePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosHttpResponseHeaderModificationRule {
    /**
     * @stability external
     */
    export interface ResponseHeaderModificationProperty {
        /**
         * @Property type: The value type. Value range:
     * - `static`: Static mode.
     * - `dynamic`: Dynamic mode.
         */
        readonly type?: string | ros.IResolvable;
        /**
         * @Property value: The response header value.
         */
        readonly value?: string | ros.IResolvable;
        /**
         * @Property operation: Operation method. Possible values:
     * - `add`: Add
     * - `del`: Delete
     * - `modify`: Modify.
         */
        readonly operation: string | ros.IResolvable;
        /**
         * @Property name: The response header name.
         */
        readonly name: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `ResponseHeaderModificationProperty`
 *
 * @param properties - the TypeScript properties of a `ResponseHeaderModificationProperty`
 *
 * @returns the result of the validation.
 */
function RosHttpResponseHeaderModificationRule_ResponseHeaderModificationPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.type && (typeof properties.type) !== 'object') {
        errors.collect(ros.propertyValidator('type', ros.validateAllowedValues)({
          data: properties.type,
          allowedValues: ["static","dynamic"],
        }));
    }
    errors.collect(ros.propertyValidator('type', ros.validateString)(properties.type));
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    errors.collect(ros.propertyValidator('operation', ros.requiredValidator)(properties.operation));
    if(properties.operation && (typeof properties.operation) !== 'object') {
        errors.collect(ros.propertyValidator('operation', ros.validateAllowedValues)({
          data: properties.operation,
          allowedValues: ["add","del","modify"],
        }));
    }
    errors.collect(ros.propertyValidator('operation', ros.validateString)(properties.operation));
    errors.collect(ros.propertyValidator('name', ros.requiredValidator)(properties.name));
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    return errors.wrap('supplied properties not correct for "ResponseHeaderModificationProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ESA::HttpResponseHeaderModificationRule.ResponseHeaderModification` resource
 *
 * @param properties - the TypeScript properties of a `ResponseHeaderModificationProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ESA::HttpResponseHeaderModificationRule.ResponseHeaderModification` resource.
 */
// @ts-ignore TS6133
function rosHttpResponseHeaderModificationRuleResponseHeaderModificationPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosHttpResponseHeaderModificationRule_ResponseHeaderModificationPropertyValidator(properties).assertSuccess();
    return {
      'Type': ros.stringToRosTemplate(properties.type),
      'Value': ros.stringToRosTemplate(properties.value),
      'Operation': ros.stringToRosTemplate(properties.operation),
      'Name': ros.stringToRosTemplate(properties.name),
    };
}

/**
 * Properties for defining a `RosHttpsApplicationConfiguration`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-httpsapplicationconfiguration
 */
export interface RosHttpsApplicationConfigurationProps {

    /**
     * @Property siteId: The site ID, which can be obtained by calling the ListSites API.
     */
    readonly siteId: number | ros.IResolvable;

    /**
     * @Property altSvc: Function switch, default off. Value range:
     * on: Enabled.
     * off: Disabled.
     */
    readonly altSvc?: string | ros.IResolvable;

    /**
     * @Property altSvcClear: Alt-Svc whether The header contains the clear parameter. This parameter is disabled by default. Value range:
     * on: Enabled.
     * off: Disabled.
     */
    readonly altSvcClear?: string | ros.IResolvable;

    /**
     * @Property altSvcMa: The effective time of the Alt-Svc, in seconds. The default value is 86400 seconds.
     */
    readonly altSvcMa?: string | ros.IResolvable;

    /**
     * @Property altSvcPersist: Alt-Svc whether The header contains the persist parameter. This parameter is disabled by default. Value range:
     * on: Enabled.
     * off: Disabled.
     */
    readonly altSvcPersist?: string | ros.IResolvable;

    /**
     * @Property hsts: Whether to enable HSTS. It is disabled by default. Value range:
     * on: Enabled.
     * off: Disabled.
     */
    readonly hsts?: string | ros.IResolvable;

    /**
     * @Property hstsIncludeSubdomains: Whether to include subdomains in HSTS is disabled by default. Value range:
     * on: Enabled.
     * off: Disabled.
     */
    readonly hstsIncludeSubdomains?: string | ros.IResolvable;

    /**
     * @Property hstsMaxAge: The expiration time of HSTS, in seconds.
     */
    readonly hstsMaxAge?: string | ros.IResolvable;

    /**
     * @Property hstsPreload: Whether to enable HSTS preloading. It is disabled by default. Value range:
     * on: Enabled.
     * off: Disabled.
     */
    readonly hstsPreload?: string | ros.IResolvable;

    /**
     * @Property httpsForce: Whether to enable forced HTTPS. It is disabled by default. Value range:
     * on: Enabled.
     * off: Disabled.
     */
    readonly httpsForce?: string | ros.IResolvable;

    /**
     * @Property httpsForceCode: Forced HTTPS jump status code, value range:
     * 301
     * 302
     * 307
     * 308
     */
    readonly httpsForceCode?: string | ros.IResolvable;

    /**
     * @Property httpsNoSniDeny: Whether to enable to reject TLS handshake requests without SNI. This parameter is disabled by default. Value range:
     * on: Enabled.
     * off: Disabled.
     */
    readonly httpsNoSniDeny?: string | ros.IResolvable;

    /**
     * @Property httpsSniVerify: Whether to enable SNI verification. It is disabled by default. Value range:
     * on: Enabled.
     * off: Disabled.
     */
    readonly httpsSniVerify?: string | ros.IResolvable;

    /**
     * @Property httpsSniWhitelist: Specifies the list of allowed SNI whitelists, separated by spaces.
     */
    readonly httpsSniWhitelist?: string | ros.IResolvable;

    /**
     * @Property paymentType: Payment Type.
     */
    readonly paymentType?: string | ros.IResolvable;

    /**
     * @Property rule: Rule content, using conditional expressions to match user requests. When adding global configuration, this parameter does not need to be set. There are two usage scenarios:
     * Match all incoming requests: value set to true
     * Match specified request: Set the value to a custom expression, for example: (http.host eq \"video.example.com\").
     */
    readonly rule?: string | ros.IResolvable;

    /**
     * @Property ruleEnable: Rule switch. When adding global configuration, this parameter does not need to be set. Value range:
     * on: Enabled.
     * off: Disabled.
     */
    readonly ruleEnable?: string | ros.IResolvable;

    /**
     * @Property ruleName: Rule name. When adding global configuration, this parameter does not need to be set.
     */
    readonly ruleName?: string | ros.IResolvable;

    /**
     * @Property sequence: Order of rule execution. The smaller the value, the higher the priority for execution.
     */
    readonly sequence?: number | ros.IResolvable;

    /**
     * @Property siteVersion: The version number of the site configuration. For sites that have enabled configuration version management, this parameter can be used to specify the effective version of the configuration site, which defaults to version 0.
     */
    readonly siteVersion?: number | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosHttpsApplicationConfigurationProps`
 *
 * @param properties - the TypeScript properties of a `RosHttpsApplicationConfigurationProps`
 *
 * @returns the result of the validation.
 */
function RosHttpsApplicationConfigurationPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('siteId', ros.requiredValidator)(properties.siteId));
    errors.collect(ros.propertyValidator('siteId', ros.validateNumber)(properties.siteId));
    if(properties.hstsIncludeSubdomains && (typeof properties.hstsIncludeSubdomains) !== 'object') {
        errors.collect(ros.propertyValidator('hstsIncludeSubdomains', ros.validateAllowedValues)({
          data: properties.hstsIncludeSubdomains,
          allowedValues: ["on","off"],
        }));
    }
    errors.collect(ros.propertyValidator('hstsIncludeSubdomains', ros.validateString)(properties.hstsIncludeSubdomains));
    errors.collect(ros.propertyValidator('altSvcMa', ros.validateString)(properties.altSvcMa));
    if(properties.ruleEnable && (typeof properties.ruleEnable) !== 'object') {
        errors.collect(ros.propertyValidator('ruleEnable', ros.validateAllowedValues)({
          data: properties.ruleEnable,
          allowedValues: ["on","off"],
        }));
    }
    errors.collect(ros.propertyValidator('ruleEnable', ros.validateString)(properties.ruleEnable));
    if(properties.altSvc && (typeof properties.altSvc) !== 'object') {
        errors.collect(ros.propertyValidator('altSvc', ros.validateAllowedValues)({
          data: properties.altSvc,
          allowedValues: ["on","off"],
        }));
    }
    errors.collect(ros.propertyValidator('altSvc', ros.validateString)(properties.altSvc));
    if(properties.httpsForceCode && (typeof properties.httpsForceCode) !== 'object') {
        errors.collect(ros.propertyValidator('httpsForceCode', ros.validateAllowedValues)({
          data: properties.httpsForceCode,
          allowedValues: ["301","302","307","308"],
        }));
    }
    errors.collect(ros.propertyValidator('httpsForceCode', ros.validateString)(properties.httpsForceCode));
    if(properties.httpsNoSniDeny && (typeof properties.httpsNoSniDeny) !== 'object') {
        errors.collect(ros.propertyValidator('httpsNoSniDeny', ros.validateAllowedValues)({
          data: properties.httpsNoSniDeny,
          allowedValues: ["on","off"],
        }));
    }
    errors.collect(ros.propertyValidator('httpsNoSniDeny', ros.validateString)(properties.httpsNoSniDeny));
    if(properties.hsts && (typeof properties.hsts) !== 'object') {
        errors.collect(ros.propertyValidator('hsts', ros.validateAllowedValues)({
          data: properties.hsts,
          allowedValues: ["on","off"],
        }));
    }
    errors.collect(ros.propertyValidator('hsts', ros.validateString)(properties.hsts));
    if(properties.hstsPreload && (typeof properties.hstsPreload) !== 'object') {
        errors.collect(ros.propertyValidator('hstsPreload', ros.validateAllowedValues)({
          data: properties.hstsPreload,
          allowedValues: ["on","off"],
        }));
    }
    errors.collect(ros.propertyValidator('hstsPreload', ros.validateString)(properties.hstsPreload));
    errors.collect(ros.propertyValidator('hstsMaxAge', ros.validateString)(properties.hstsMaxAge));
    errors.collect(ros.propertyValidator('sequence', ros.validateNumber)(properties.sequence));
    errors.collect(ros.propertyValidator('httpsSniWhitelist', ros.validateString)(properties.httpsSniWhitelist));
    if(properties.altSvcPersist && (typeof properties.altSvcPersist) !== 'object') {
        errors.collect(ros.propertyValidator('altSvcPersist', ros.validateAllowedValues)({
          data: properties.altSvcPersist,
          allowedValues: ["on","off"],
        }));
    }
    errors.collect(ros.propertyValidator('altSvcPersist', ros.validateString)(properties.altSvcPersist));
    if(properties.httpsSniVerify && (typeof properties.httpsSniVerify) !== 'object') {
        errors.collect(ros.propertyValidator('httpsSniVerify', ros.validateAllowedValues)({
          data: properties.httpsSniVerify,
          allowedValues: ["on","off"],
        }));
    }
    errors.collect(ros.propertyValidator('httpsSniVerify', ros.validateString)(properties.httpsSniVerify));
    if(properties.altSvcClear && (typeof properties.altSvcClear) !== 'object') {
        errors.collect(ros.propertyValidator('altSvcClear', ros.validateAllowedValues)({
          data: properties.altSvcClear,
          allowedValues: ["on","off"],
        }));
    }
    errors.collect(ros.propertyValidator('altSvcClear', ros.validateString)(properties.altSvcClear));
    if(properties.httpsForce && (typeof properties.httpsForce) !== 'object') {
        errors.collect(ros.propertyValidator('httpsForce', ros.validateAllowedValues)({
          data: properties.httpsForce,
          allowedValues: ["on","off"],
        }));
    }
    errors.collect(ros.propertyValidator('httpsForce', ros.validateString)(properties.httpsForce));
    errors.collect(ros.propertyValidator('paymentType', ros.validateString)(properties.paymentType));
    errors.collect(ros.propertyValidator('rule', ros.validateString)(properties.rule));
    errors.collect(ros.propertyValidator('siteVersion', ros.validateNumber)(properties.siteVersion));
    errors.collect(ros.propertyValidator('ruleName', ros.validateString)(properties.ruleName));
    return errors.wrap('supplied properties not correct for "RosHttpsApplicationConfigurationProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ESA::HttpsApplicationConfiguration` resource
 *
 * @param properties - the TypeScript properties of a `RosHttpsApplicationConfigurationProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ESA::HttpsApplicationConfiguration` resource.
 */
// @ts-ignore TS6133
function rosHttpsApplicationConfigurationPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosHttpsApplicationConfigurationPropsValidator(properties).assertSuccess();
    }
    return {
      'SiteId': ros.numberToRosTemplate(properties.siteId),
      'AltSvc': ros.stringToRosTemplate(properties.altSvc),
      'AltSvcClear': ros.stringToRosTemplate(properties.altSvcClear),
      'AltSvcMa': ros.stringToRosTemplate(properties.altSvcMa),
      'AltSvcPersist': ros.stringToRosTemplate(properties.altSvcPersist),
      'Hsts': ros.stringToRosTemplate(properties.hsts),
      'HstsIncludeSubdomains': ros.stringToRosTemplate(properties.hstsIncludeSubdomains),
      'HstsMaxAge': ros.stringToRosTemplate(properties.hstsMaxAge),
      'HstsPreload': ros.stringToRosTemplate(properties.hstsPreload),
      'HttpsForce': ros.stringToRosTemplate(properties.httpsForce),
      'HttpsForceCode': ros.stringToRosTemplate(properties.httpsForceCode),
      'HttpsNoSniDeny': ros.stringToRosTemplate(properties.httpsNoSniDeny),
      'HttpsSniVerify': ros.stringToRosTemplate(properties.httpsSniVerify),
      'HttpsSniWhitelist': ros.stringToRosTemplate(properties.httpsSniWhitelist),
      'PaymentType': ros.stringToRosTemplate(properties.paymentType),
      'Rule': ros.stringToRosTemplate(properties.rule),
      'RuleEnable': ros.stringToRosTemplate(properties.ruleEnable),
      'RuleName': ros.stringToRosTemplate(properties.ruleName),
      'Sequence': ros.numberToRosTemplate(properties.sequence),
      'SiteVersion': ros.numberToRosTemplate(properties.siteVersion),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ESA::HttpsApplicationConfiguration`.
 * @Note This class does not contain additional functions, so it is recommended to use the `HttpsApplicationConfiguration` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-httpsapplicationconfiguration
 */
export class RosHttpsApplicationConfiguration extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ESA::HttpsApplicationConfiguration";

    /**
     * @Attribute AltSvc: Function switch, default off.
     */
    public readonly attrAltSvc: ros.IResolvable;

    /**
     * @Attribute AltSvcClear: Alt-Svc whether The header contains the clear parameter. This parameter is disabled by default.
     */
    public readonly attrAltSvcClear: ros.IResolvable;

    /**
     * @Attribute AltSvcMa: The effective time of the Alt-Svc, in seconds. The default value is 86400 seconds.
     */
    public readonly attrAltSvcMa: ros.IResolvable;

    /**
     * @Attribute AltSvcPersist: Alt-Svc whether The header contains the persist parameter. This parameter is disabled by default.
     */
    public readonly attrAltSvcPersist: ros.IResolvable;

    /**
     * @Attribute ConfigId: Config Id.
     */
    public readonly attrConfigId: ros.IResolvable;

    /**
     * @Attribute ConfigType: The type of the configuration.
     */
    public readonly attrConfigType: ros.IResolvable;

    /**
     * @Attribute Hsts: Whether to enable HSTS. It is disabled by default.
     */
    public readonly attrHsts: ros.IResolvable;

    /**
     * @Attribute HstsIncludeSubdomains: Whether to include subdomains in HSTS is disabled by default.
     */
    public readonly attrHstsIncludeSubdomains: ros.IResolvable;

    /**
     * @Attribute HstsMaxAge: The expiration time of HSTS, in seconds.
     */
    public readonly attrHstsMaxAge: ros.IResolvable;

    /**
     * @Attribute HstsPreload: Whether to enable HSTS preloading. It is disabled by default.
     */
    public readonly attrHstsPreload: ros.IResolvable;

    /**
     * @Attribute HttpsForce: Whether to enable forced HTTPS. It is disabled by default.
     */
    public readonly attrHttpsForce: ros.IResolvable;

    /**
     * @Attribute HttpsForceCode: Forced HTTPS jump status code, value range:.
     */
    public readonly attrHttpsForceCode: ros.IResolvable;

    /**
     * @Attribute HttpsNoSniDeny: Whether to enable to reject TLS handshake requests without SNI. This parameter is disabled by default.
     */
    public readonly attrHttpsNoSniDeny: ros.IResolvable;

    /**
     * @Attribute HttpsSniVerify: Whether to enable SNI verification. It is disabled by default.
     */
    public readonly attrHttpsSniVerify: ros.IResolvable;

    /**
     * @Attribute HttpsSniWhitelist: Specifies the list of allowed SNI whitelists, separated by spaces.
     */
    public readonly attrHttpsSniWhitelist: ros.IResolvable;

    /**
     * @Attribute Rule: Rule content, using conditional expressions to match user requests. When adding global configuration, this parameter does not need to be set.
     */
    public readonly attrRule: ros.IResolvable;

    /**
     * @Attribute RuleEnable: Rule switch. When adding global configuration, this parameter does not need to be set.
     */
    public readonly attrRuleEnable: ros.IResolvable;

    /**
     * @Attribute RuleName: Rule name. When adding global configuration, this parameter does not need to be set.
     */
    public readonly attrRuleName: ros.IResolvable;

    /**
     * @Attribute Sequence: Order of rule execution. The smaller the value, the higher the priority for execution.
     */
    public readonly attrSequence: ros.IResolvable;

    /**
     * @Attribute SiteVersion: The version number of the site configuration. For sites that have enabled configuration version management, this parameter can be used to specify the effective version of the configuration site, which defaults to version 0.
     */
    public readonly attrSiteVersion: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property siteId: The site ID, which can be obtained by calling the ListSites API.
     */
    public siteId: number | ros.IResolvable;

    /**
     * @Property altSvc: Function switch, default off. Value range:
     * on: Enabled.
     * off: Disabled.
     */
    public altSvc: string | ros.IResolvable | undefined;

    /**
     * @Property altSvcClear: Alt-Svc whether The header contains the clear parameter. This parameter is disabled by default. Value range:
     * on: Enabled.
     * off: Disabled.
     */
    public altSvcClear: string | ros.IResolvable | undefined;

    /**
     * @Property altSvcMa: The effective time of the Alt-Svc, in seconds. The default value is 86400 seconds.
     */
    public altSvcMa: string | ros.IResolvable | undefined;

    /**
     * @Property altSvcPersist: Alt-Svc whether The header contains the persist parameter. This parameter is disabled by default. Value range:
     * on: Enabled.
     * off: Disabled.
     */
    public altSvcPersist: string | ros.IResolvable | undefined;

    /**
     * @Property hsts: Whether to enable HSTS. It is disabled by default. Value range:
     * on: Enabled.
     * off: Disabled.
     */
    public hsts: string | ros.IResolvable | undefined;

    /**
     * @Property hstsIncludeSubdomains: Whether to include subdomains in HSTS is disabled by default. Value range:
     * on: Enabled.
     * off: Disabled.
     */
    public hstsIncludeSubdomains: string | ros.IResolvable | undefined;

    /**
     * @Property hstsMaxAge: The expiration time of HSTS, in seconds.
     */
    public hstsMaxAge: string | ros.IResolvable | undefined;

    /**
     * @Property hstsPreload: Whether to enable HSTS preloading. It is disabled by default. Value range:
     * on: Enabled.
     * off: Disabled.
     */
    public hstsPreload: string | ros.IResolvable | undefined;

    /**
     * @Property httpsForce: Whether to enable forced HTTPS. It is disabled by default. Value range:
     * on: Enabled.
     * off: Disabled.
     */
    public httpsForce: string | ros.IResolvable | undefined;

    /**
     * @Property httpsForceCode: Forced HTTPS jump status code, value range:
     * 301
     * 302
     * 307
     * 308
     */
    public httpsForceCode: string | ros.IResolvable | undefined;

    /**
     * @Property httpsNoSniDeny: Whether to enable to reject TLS handshake requests without SNI. This parameter is disabled by default. Value range:
     * on: Enabled.
     * off: Disabled.
     */
    public httpsNoSniDeny: string | ros.IResolvable | undefined;

    /**
     * @Property httpsSniVerify: Whether to enable SNI verification. It is disabled by default. Value range:
     * on: Enabled.
     * off: Disabled.
     */
    public httpsSniVerify: string | ros.IResolvable | undefined;

    /**
     * @Property httpsSniWhitelist: Specifies the list of allowed SNI whitelists, separated by spaces.
     */
    public httpsSniWhitelist: string | ros.IResolvable | undefined;

    /**
     * @Property paymentType: Payment Type.
     */
    public paymentType: string | ros.IResolvable | undefined;

    /**
     * @Property rule: Rule content, using conditional expressions to match user requests. When adding global configuration, this parameter does not need to be set. There are two usage scenarios:
     * Match all incoming requests: value set to true
     * Match specified request: Set the value to a custom expression, for example: (http.host eq \"video.example.com\").
     */
    public rule: string | ros.IResolvable | undefined;

    /**
     * @Property ruleEnable: Rule switch. When adding global configuration, this parameter does not need to be set. Value range:
     * on: Enabled.
     * off: Disabled.
     */
    public ruleEnable: string | ros.IResolvable | undefined;

    /**
     * @Property ruleName: Rule name. When adding global configuration, this parameter does not need to be set.
     */
    public ruleName: string | ros.IResolvable | undefined;

    /**
     * @Property sequence: Order of rule execution. The smaller the value, the higher the priority for execution.
     */
    public sequence: number | ros.IResolvable | undefined;

    /**
     * @Property siteVersion: The version number of the site configuration. For sites that have enabled configuration version management, this parameter can be used to specify the effective version of the configuration site, which defaults to version 0.
     */
    public siteVersion: number | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosHttpsApplicationConfigurationProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosHttpsApplicationConfiguration.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAltSvc = this.getAtt('AltSvc');
        this.attrAltSvcClear = this.getAtt('AltSvcClear');
        this.attrAltSvcMa = this.getAtt('AltSvcMa');
        this.attrAltSvcPersist = this.getAtt('AltSvcPersist');
        this.attrConfigId = this.getAtt('ConfigId');
        this.attrConfigType = this.getAtt('ConfigType');
        this.attrHsts = this.getAtt('Hsts');
        this.attrHstsIncludeSubdomains = this.getAtt('HstsIncludeSubdomains');
        this.attrHstsMaxAge = this.getAtt('HstsMaxAge');
        this.attrHstsPreload = this.getAtt('HstsPreload');
        this.attrHttpsForce = this.getAtt('HttpsForce');
        this.attrHttpsForceCode = this.getAtt('HttpsForceCode');
        this.attrHttpsNoSniDeny = this.getAtt('HttpsNoSniDeny');
        this.attrHttpsSniVerify = this.getAtt('HttpsSniVerify');
        this.attrHttpsSniWhitelist = this.getAtt('HttpsSniWhitelist');
        this.attrRule = this.getAtt('Rule');
        this.attrRuleEnable = this.getAtt('RuleEnable');
        this.attrRuleName = this.getAtt('RuleName');
        this.attrSequence = this.getAtt('Sequence');
        this.attrSiteVersion = this.getAtt('SiteVersion');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.siteId = props.siteId;
        this.altSvc = props.altSvc;
        this.altSvcClear = props.altSvcClear;
        this.altSvcMa = props.altSvcMa;
        this.altSvcPersist = props.altSvcPersist;
        this.hsts = props.hsts;
        this.hstsIncludeSubdomains = props.hstsIncludeSubdomains;
        this.hstsMaxAge = props.hstsMaxAge;
        this.hstsPreload = props.hstsPreload;
        this.httpsForce = props.httpsForce;
        this.httpsForceCode = props.httpsForceCode;
        this.httpsNoSniDeny = props.httpsNoSniDeny;
        this.httpsSniVerify = props.httpsSniVerify;
        this.httpsSniWhitelist = props.httpsSniWhitelist;
        this.paymentType = props.paymentType;
        this.rule = props.rule;
        this.ruleEnable = props.ruleEnable;
        this.ruleName = props.ruleName;
        this.sequence = props.sequence;
        this.siteVersion = props.siteVersion;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            siteId: this.siteId,
            altSvc: this.altSvc,
            altSvcClear: this.altSvcClear,
            altSvcMa: this.altSvcMa,
            altSvcPersist: this.altSvcPersist,
            hsts: this.hsts,
            hstsIncludeSubdomains: this.hstsIncludeSubdomains,
            hstsMaxAge: this.hstsMaxAge,
            hstsPreload: this.hstsPreload,
            httpsForce: this.httpsForce,
            httpsForceCode: this.httpsForceCode,
            httpsNoSniDeny: this.httpsNoSniDeny,
            httpsSniVerify: this.httpsSniVerify,
            httpsSniWhitelist: this.httpsSniWhitelist,
            paymentType: this.paymentType,
            rule: this.rule,
            ruleEnable: this.ruleEnable,
            ruleName: this.ruleName,
            sequence: this.sequence,
            siteVersion: this.siteVersion,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosHttpsApplicationConfigurationPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosHttpsBasicConfiguration`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-httpsbasicconfiguration
 */
export interface RosHttpsBasicConfigurationProps {

    /**
     * @Property siteId: Site ID, which can be obtained by calling the [ListSites](~~ListSites~~) interface.
     */
    readonly siteId: number | ros.IResolvable;

    /**
     * @Property ciphersuite: Custom cipher suite, indicating the specific encryption algorithm selected when CiphersuiteGroup is set to custom.
     */
    readonly ciphersuite?: string | ros.IResolvable;

    /**
     * @Property ciphersuiteGroup: Cipher suite group. Default is all cipher suites. Possible values:
     * - all: All cipher suites.
     * - strict: Strong cipher suites.
     * - custom: Custom cipher suites.
     */
    readonly ciphersuiteGroup?: string | ros.IResolvable;

    /**
     * @Property http2: Indicates whether HTTP2 is enabled. Default is on. Possible values:
     * - on: Enabled.
     * - off: Disabled.
     */
    readonly http2?: string | ros.IResolvable;

    /**
     * @Property http3: Whether to enable HTTP3, which is enabled by default. The value can be:
     * - on: Enabled. 
     * - off: Disabled.
     */
    readonly http3?: string | ros.IResolvable;

    /**
     * @Property https: Whether to enable HTTPS. Default is enabled. Possible values:
     * - on: Enable.
     * - off: Disable.
     */
    readonly https?: string | ros.IResolvable;

    /**
     * @Property ocspStapling: Indicates whether OCSP is enabled. Default is off. Possible values:
     * - on: Enabled.
     * - off: Disabled.
     */
    readonly ocspStapling?: string | ros.IResolvable;

    /**
     * @Property rule: Rule content, using conditional expressions to match user requests. When adding global configuration, this parameter does not need to be set. There are two usage scenarios:
     * -  Match all incoming requests: value set to true
     * -  Match specified request: Set the value to a custom expression, for example: (http.host eq \"video.example.com\").
     */
    readonly rule?: string | ros.IResolvable;

    /**
     * @Property ruleEnable: Rule switch. When adding global configuration, this parameter does not need to be set. Value range:
     * - on: open.
     * - off: close.
     */
    readonly ruleEnable?: string | ros.IResolvable;

    /**
     * @Property ruleName: Rule name. When adding global configuration, this parameter does not need to be set.
     */
    readonly ruleName?: string | ros.IResolvable;

    /**
     * @Property sequence: Order of rule execution. The smaller the value, the higher the priority for execution.
     */
    readonly sequence?: number | ros.IResolvable;

    /**
     * @Property tls10: Whether to enable TLS1.0. Default is disabled. Possible values:
     * - on: Enable.
     * - off: Disable.
     */
    readonly tls10?: string | ros.IResolvable;

    /**
     * @Property tls11: Whether to enable TLS1.1. Default is enabled. Possible values:
     * - on: Enable.
     * - off: Disable.
     */
    readonly tls11?: string | ros.IResolvable;

    /**
     * @Property tls12: Whether to enable TLS1.2. Default is enabled. Possible values:
     * - on: Enable.
     * - off: Disable.
     */
    readonly tls12?: string | ros.IResolvable;

    /**
     * @Property tls13: Whether to enable TLS1.3. Default is enabled. Possible values:
     * - on: Enable.
     * - off: Disable.
     */
    readonly tls13?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosHttpsBasicConfigurationProps`
 *
 * @param properties - the TypeScript properties of a `RosHttpsBasicConfigurationProps`
 *
 * @returns the result of the validation.
 */
function RosHttpsBasicConfigurationPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('siteId', ros.requiredValidator)(properties.siteId));
    errors.collect(ros.propertyValidator('siteId', ros.validateNumber)(properties.siteId));
    errors.collect(ros.propertyValidator('ciphersuite', ros.validateString)(properties.ciphersuite));
    if(properties.ruleEnable && (typeof properties.ruleEnable) !== 'object') {
        errors.collect(ros.propertyValidator('ruleEnable', ros.validateAllowedValues)({
          data: properties.ruleEnable,
          allowedValues: ["on","off"],
        }));
    }
    errors.collect(ros.propertyValidator('ruleEnable', ros.validateString)(properties.ruleEnable));
    if(properties.https && (typeof properties.https) !== 'object') {
        errors.collect(ros.propertyValidator('https', ros.validateAllowedValues)({
          data: properties.https,
          allowedValues: ["on","off"],
        }));
    }
    errors.collect(ros.propertyValidator('https', ros.validateString)(properties.https));
    if(properties.http3 && (typeof properties.http3) !== 'object') {
        errors.collect(ros.propertyValidator('http3', ros.validateAllowedValues)({
          data: properties.http3,
          allowedValues: ["on","off"],
        }));
    }
    errors.collect(ros.propertyValidator('http3', ros.validateString)(properties.http3));
    if(properties.http2 && (typeof properties.http2) !== 'object') {
        errors.collect(ros.propertyValidator('http2', ros.validateAllowedValues)({
          data: properties.http2,
          allowedValues: ["on","off"],
        }));
    }
    errors.collect(ros.propertyValidator('http2', ros.validateString)(properties.http2));
    if(properties.tls10 && (typeof properties.tls10) !== 'object') {
        errors.collect(ros.propertyValidator('tls10', ros.validateAllowedValues)({
          data: properties.tls10,
          allowedValues: ["on","off"],
        }));
    }
    errors.collect(ros.propertyValidator('tls10', ros.validateString)(properties.tls10));
    if(properties.tls11 && (typeof properties.tls11) !== 'object') {
        errors.collect(ros.propertyValidator('tls11', ros.validateAllowedValues)({
          data: properties.tls11,
          allowedValues: ["on","off"],
        }));
    }
    errors.collect(ros.propertyValidator('tls11', ros.validateString)(properties.tls11));
    errors.collect(ros.propertyValidator('sequence', ros.validateNumber)(properties.sequence));
    if(properties.tls12 && (typeof properties.tls12) !== 'object') {
        errors.collect(ros.propertyValidator('tls12', ros.validateAllowedValues)({
          data: properties.tls12,
          allowedValues: ["on","off"],
        }));
    }
    errors.collect(ros.propertyValidator('tls12', ros.validateString)(properties.tls12));
    if(properties.tls13 && (typeof properties.tls13) !== 'object') {
        errors.collect(ros.propertyValidator('tls13', ros.validateAllowedValues)({
          data: properties.tls13,
          allowedValues: ["on","off"],
        }));
    }
    errors.collect(ros.propertyValidator('tls13', ros.validateString)(properties.tls13));
    if(properties.ciphersuiteGroup && (typeof properties.ciphersuiteGroup) !== 'object') {
        errors.collect(ros.propertyValidator('ciphersuiteGroup', ros.validateAllowedValues)({
          data: properties.ciphersuiteGroup,
          allowedValues: ["all","strict","custom"],
        }));
    }
    errors.collect(ros.propertyValidator('ciphersuiteGroup', ros.validateString)(properties.ciphersuiteGroup));
    errors.collect(ros.propertyValidator('rule', ros.validateString)(properties.rule));
    errors.collect(ros.propertyValidator('ruleName', ros.validateString)(properties.ruleName));
    if(properties.ocspStapling && (typeof properties.ocspStapling) !== 'object') {
        errors.collect(ros.propertyValidator('ocspStapling', ros.validateAllowedValues)({
          data: properties.ocspStapling,
          allowedValues: ["on","off"],
        }));
    }
    errors.collect(ros.propertyValidator('ocspStapling', ros.validateString)(properties.ocspStapling));
    return errors.wrap('supplied properties not correct for "RosHttpsBasicConfigurationProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ESA::HttpsBasicConfiguration` resource
 *
 * @param properties - the TypeScript properties of a `RosHttpsBasicConfigurationProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ESA::HttpsBasicConfiguration` resource.
 */
// @ts-ignore TS6133
function rosHttpsBasicConfigurationPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosHttpsBasicConfigurationPropsValidator(properties).assertSuccess();
    }
    return {
      'SiteId': ros.numberToRosTemplate(properties.siteId),
      'Ciphersuite': ros.stringToRosTemplate(properties.ciphersuite),
      'CiphersuiteGroup': ros.stringToRosTemplate(properties.ciphersuiteGroup),
      'Http2': ros.stringToRosTemplate(properties.http2),
      'Http3': ros.stringToRosTemplate(properties.http3),
      'Https': ros.stringToRosTemplate(properties.https),
      'OcspStapling': ros.stringToRosTemplate(properties.ocspStapling),
      'Rule': ros.stringToRosTemplate(properties.rule),
      'RuleEnable': ros.stringToRosTemplate(properties.ruleEnable),
      'RuleName': ros.stringToRosTemplate(properties.ruleName),
      'Sequence': ros.numberToRosTemplate(properties.sequence),
      'Tls10': ros.stringToRosTemplate(properties.tls10),
      'Tls11': ros.stringToRosTemplate(properties.tls11),
      'Tls12': ros.stringToRosTemplate(properties.tls12),
      'Tls13': ros.stringToRosTemplate(properties.tls13),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ESA::HttpsBasicConfiguration`.
 * @Note This class does not contain additional functions, so it is recommended to use the `HttpsBasicConfiguration` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-httpsbasicconfiguration
 */
export class RosHttpsBasicConfiguration extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ESA::HttpsBasicConfiguration";

    /**
     * @Attribute Ciphersuite: Custom cipher suite, indicating the specific encryption algorithm selected when CiphersuiteGroup is set to custom.
     */
    public readonly attrCiphersuite: ros.IResolvable;

    /**
     * @Attribute CiphersuiteGroup: Cipher suite group. Default is all cipher suites.
     */
    public readonly attrCiphersuiteGroup: ros.IResolvable;

    /**
     * @Attribute ConfigId: ConfigId of the configuration.
     */
    public readonly attrConfigId: ros.IResolvable;

    /**
     * @Attribute ConfigType: Configuration type, which can be used to query global or rule configurations.
     */
    public readonly attrConfigType: ros.IResolvable;

    /**
     * @Attribute Http2: Indicates whether HTTP2 is enabled. Default is on.
     */
    public readonly attrHttp2: ros.IResolvable;

    /**
     * @Attribute Http3: Whether to enable HTTP3, which is enabled by default.
     */
    public readonly attrHttp3: ros.IResolvable;

    /**
     * @Attribute Https: Whether to enable HTTPS. Default is enabled.
     */
    public readonly attrHttps: ros.IResolvable;

    /**
     * @Attribute OcspStapling: Indicates whether OCSP is enabled. Default is off.
     */
    public readonly attrOcspStapling: ros.IResolvable;

    /**
     * @Attribute Rule: Rule content, using conditional expressions to match user requests. When adding global configuration, this parameter does not need to be set.
     */
    public readonly attrRule: ros.IResolvable;

    /**
     * @Attribute RuleEnable: Rule switch. When adding global configuration, this parameter does not need to be set.
     */
    public readonly attrRuleEnable: ros.IResolvable;

    /**
     * @Attribute RuleName: Rule name. When adding global configuration, this parameter does not need to be set.
     */
    public readonly attrRuleName: ros.IResolvable;

    /**
     * @Attribute Sequence: Order of rule execution. The smaller the value, the higher the priority for execution.
     */
    public readonly attrSequence: ros.IResolvable;

    /**
     * @Attribute Tls10: Whether to enable TLS1.0. Default is disabled.
     */
    public readonly attrTls10: ros.IResolvable;

    /**
     * @Attribute Tls11: Whether to enable TLS1.1. Default is enabled.
     */
    public readonly attrTls11: ros.IResolvable;

    /**
     * @Attribute Tls12: Whether to enable TLS1.2. Default is enabled.
     */
    public readonly attrTls12: ros.IResolvable;

    /**
     * @Attribute Tls13: Whether to enable TLS1.3. Default is enabled.
     */
    public readonly attrTls13: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property siteId: Site ID, which can be obtained by calling the [ListSites](~~ListSites~~) interface.
     */
    public siteId: number | ros.IResolvable;

    /**
     * @Property ciphersuite: Custom cipher suite, indicating the specific encryption algorithm selected when CiphersuiteGroup is set to custom.
     */
    public ciphersuite: string | ros.IResolvable | undefined;

    /**
     * @Property ciphersuiteGroup: Cipher suite group. Default is all cipher suites. Possible values:
     * - all: All cipher suites.
     * - strict: Strong cipher suites.
     * - custom: Custom cipher suites.
     */
    public ciphersuiteGroup: string | ros.IResolvable | undefined;

    /**
     * @Property http2: Indicates whether HTTP2 is enabled. Default is on. Possible values:
     * - on: Enabled.
     * - off: Disabled.
     */
    public http2: string | ros.IResolvable | undefined;

    /**
     * @Property http3: Whether to enable HTTP3, which is enabled by default. The value can be:
     * - on: Enabled. 
     * - off: Disabled.
     */
    public http3: string | ros.IResolvable | undefined;

    /**
     * @Property https: Whether to enable HTTPS. Default is enabled. Possible values:
     * - on: Enable.
     * - off: Disable.
     */
    public https: string | ros.IResolvable | undefined;

    /**
     * @Property ocspStapling: Indicates whether OCSP is enabled. Default is off. Possible values:
     * - on: Enabled.
     * - off: Disabled.
     */
    public ocspStapling: string | ros.IResolvable | undefined;

    /**
     * @Property rule: Rule content, using conditional expressions to match user requests. When adding global configuration, this parameter does not need to be set. There are two usage scenarios:
     * -  Match all incoming requests: value set to true
     * -  Match specified request: Set the value to a custom expression, for example: (http.host eq \"video.example.com\").
     */
    public rule: string | ros.IResolvable | undefined;

    /**
     * @Property ruleEnable: Rule switch. When adding global configuration, this parameter does not need to be set. Value range:
     * - on: open.
     * - off: close.
     */
    public ruleEnable: string | ros.IResolvable | undefined;

    /**
     * @Property ruleName: Rule name. When adding global configuration, this parameter does not need to be set.
     */
    public ruleName: string | ros.IResolvable | undefined;

    /**
     * @Property sequence: Order of rule execution. The smaller the value, the higher the priority for execution.
     */
    public sequence: number | ros.IResolvable | undefined;

    /**
     * @Property tls10: Whether to enable TLS1.0. Default is disabled. Possible values:
     * - on: Enable.
     * - off: Disable.
     */
    public tls10: string | ros.IResolvable | undefined;

    /**
     * @Property tls11: Whether to enable TLS1.1. Default is enabled. Possible values:
     * - on: Enable.
     * - off: Disable.
     */
    public tls11: string | ros.IResolvable | undefined;

    /**
     * @Property tls12: Whether to enable TLS1.2. Default is enabled. Possible values:
     * - on: Enable.
     * - off: Disable.
     */
    public tls12: string | ros.IResolvable | undefined;

    /**
     * @Property tls13: Whether to enable TLS1.3. Default is enabled. Possible values:
     * - on: Enable.
     * - off: Disable.
     */
    public tls13: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosHttpsBasicConfigurationProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosHttpsBasicConfiguration.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrCiphersuite = this.getAtt('Ciphersuite');
        this.attrCiphersuiteGroup = this.getAtt('CiphersuiteGroup');
        this.attrConfigId = this.getAtt('ConfigId');
        this.attrConfigType = this.getAtt('ConfigType');
        this.attrHttp2 = this.getAtt('Http2');
        this.attrHttp3 = this.getAtt('Http3');
        this.attrHttps = this.getAtt('Https');
        this.attrOcspStapling = this.getAtt('OcspStapling');
        this.attrRule = this.getAtt('Rule');
        this.attrRuleEnable = this.getAtt('RuleEnable');
        this.attrRuleName = this.getAtt('RuleName');
        this.attrSequence = this.getAtt('Sequence');
        this.attrTls10 = this.getAtt('Tls10');
        this.attrTls11 = this.getAtt('Tls11');
        this.attrTls12 = this.getAtt('Tls12');
        this.attrTls13 = this.getAtt('Tls13');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.siteId = props.siteId;
        this.ciphersuite = props.ciphersuite;
        this.ciphersuiteGroup = props.ciphersuiteGroup;
        this.http2 = props.http2;
        this.http3 = props.http3;
        this.https = props.https;
        this.ocspStapling = props.ocspStapling;
        this.rule = props.rule;
        this.ruleEnable = props.ruleEnable;
        this.ruleName = props.ruleName;
        this.sequence = props.sequence;
        this.tls10 = props.tls10;
        this.tls11 = props.tls11;
        this.tls12 = props.tls12;
        this.tls13 = props.tls13;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            siteId: this.siteId,
            ciphersuite: this.ciphersuite,
            ciphersuiteGroup: this.ciphersuiteGroup,
            http2: this.http2,
            http3: this.http3,
            https: this.https,
            ocspStapling: this.ocspStapling,
            rule: this.rule,
            ruleEnable: this.ruleEnable,
            ruleName: this.ruleName,
            sequence: this.sequence,
            tls10: this.tls10,
            tls11: this.tls11,
            tls12: this.tls12,
            tls13: this.tls13,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosHttpsBasicConfigurationPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosImageTransform`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-imagetransform
 */
export interface RosImageTransformProps {

    /**
     * @Property siteId: The site ID, which can be obtained by calling the ListSites API.
     */
    readonly siteId: number | ros.IResolvable;

    /**
     * @Property enable: Indicates whether the image transformations feature is enabled. Valid values:
     * on: Enabled.
     * off: Disabled.
     */
    readonly enable?: string | ros.IResolvable;

    /**
     * @Property paymentType: Payment Type.
     */
    readonly paymentType?: string | ros.IResolvable;

    /**
     * @Property rule: Rule content, using conditional expressions to match user requests. When adding global configuration, this parameter does not need to be set. There are two usage scenarios:
     * Match all incoming requests: value set to true
     * Match specified request: Set the value to a custom expression, for example: (http.host eq \"video.example.com\").
     */
    readonly rule?: string | ros.IResolvable;

    /**
     * @Property ruleEnable: Rule switch. When adding global configuration, this parameter does not need to be set. Value range:
     * on: Enabled.
     * off: Disabled.
     */
    readonly ruleEnable?: string | ros.IResolvable;

    /**
     * @Property ruleName: Rule name. When adding global configuration, this parameter does not need to be set.
     */
    readonly ruleName?: string | ros.IResolvable;

    /**
     * @Property sequence: Order of rule execution. The smaller the value, the higher the priority for execution.
     */
    readonly sequence?: number | ros.IResolvable;

    /**
     * @Property siteVersion: The version number of the site configuration. For sites that have enabled configuration version management, this parameter can be used to specify the effective version of the configuration site, which defaults to version 0.
     */
    readonly siteVersion?: number | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosImageTransformProps`
 *
 * @param properties - the TypeScript properties of a `RosImageTransformProps`
 *
 * @returns the result of the validation.
 */
function RosImageTransformPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('siteId', ros.requiredValidator)(properties.siteId));
    errors.collect(ros.propertyValidator('siteId', ros.validateNumber)(properties.siteId));
    if(properties.ruleEnable && (typeof properties.ruleEnable) !== 'object') {
        errors.collect(ros.propertyValidator('ruleEnable', ros.validateAllowedValues)({
          data: properties.ruleEnable,
          allowedValues: ["on","off"],
        }));
    }
    errors.collect(ros.propertyValidator('ruleEnable', ros.validateString)(properties.ruleEnable));
    if(properties.enable && (typeof properties.enable) !== 'object') {
        errors.collect(ros.propertyValidator('enable', ros.validateAllowedValues)({
          data: properties.enable,
          allowedValues: ["on","off"],
        }));
    }
    errors.collect(ros.propertyValidator('enable', ros.validateString)(properties.enable));
    errors.collect(ros.propertyValidator('paymentType', ros.validateString)(properties.paymentType));
    errors.collect(ros.propertyValidator('sequence', ros.validateNumber)(properties.sequence));
    errors.collect(ros.propertyValidator('rule', ros.validateString)(properties.rule));
    errors.collect(ros.propertyValidator('siteVersion', ros.validateNumber)(properties.siteVersion));
    errors.collect(ros.propertyValidator('ruleName', ros.validateString)(properties.ruleName));
    return errors.wrap('supplied properties not correct for "RosImageTransformProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ESA::ImageTransform` resource
 *
 * @param properties - the TypeScript properties of a `RosImageTransformProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ESA::ImageTransform` resource.
 */
// @ts-ignore TS6133
function rosImageTransformPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosImageTransformPropsValidator(properties).assertSuccess();
    }
    return {
      'SiteId': ros.numberToRosTemplate(properties.siteId),
      'Enable': ros.stringToRosTemplate(properties.enable),
      'PaymentType': ros.stringToRosTemplate(properties.paymentType),
      'Rule': ros.stringToRosTemplate(properties.rule),
      'RuleEnable': ros.stringToRosTemplate(properties.ruleEnable),
      'RuleName': ros.stringToRosTemplate(properties.ruleName),
      'Sequence': ros.numberToRosTemplate(properties.sequence),
      'SiteVersion': ros.numberToRosTemplate(properties.siteVersion),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ESA::ImageTransform`.
 * @Note This class does not contain additional functions, so it is recommended to use the `ImageTransform` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-imagetransform
 */
export class RosImageTransform extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ESA::ImageTransform";

    /**
     * @Attribute ConfigId: Config Id.
     */
    public readonly attrConfigId: ros.IResolvable;

    /**
     * @Attribute ConfigType: The type of the configuration.
     */
    public readonly attrConfigType: ros.IResolvable;

    /**
     * @Attribute Enable: Indicates whether the image transformations feature is enabled.
     */
    public readonly attrEnable: ros.IResolvable;

    /**
     * @Attribute Rule: Rule content, using conditional expressions to match user requests. When adding global configuration, this parameter does not need to be set.
     */
    public readonly attrRule: ros.IResolvable;

    /**
     * @Attribute RuleEnable: Rule switch. When adding global configuration, this parameter does not need to be set.
     */
    public readonly attrRuleEnable: ros.IResolvable;

    /**
     * @Attribute RuleName: Rule name. When adding global configuration, this parameter does not need to be set.
     */
    public readonly attrRuleName: ros.IResolvable;

    /**
     * @Attribute Sequence: Order of rule execution. The smaller the value, the higher the priority for execution.
     */
    public readonly attrSequence: ros.IResolvable;

    /**
     * @Attribute SiteVersion: The version number of the site configuration. For sites that have enabled configuration version management, this parameter can be used to specify the effective version of the configuration site, which defaults to version 0.
     */
    public readonly attrSiteVersion: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property siteId: The site ID, which can be obtained by calling the ListSites API.
     */
    public siteId: number | ros.IResolvable;

    /**
     * @Property enable: Indicates whether the image transformations feature is enabled. Valid values:
     * on: Enabled.
     * off: Disabled.
     */
    public enable: string | ros.IResolvable | undefined;

    /**
     * @Property paymentType: Payment Type.
     */
    public paymentType: string | ros.IResolvable | undefined;

    /**
     * @Property rule: Rule content, using conditional expressions to match user requests. When adding global configuration, this parameter does not need to be set. There are two usage scenarios:
     * Match all incoming requests: value set to true
     * Match specified request: Set the value to a custom expression, for example: (http.host eq \"video.example.com\").
     */
    public rule: string | ros.IResolvable | undefined;

    /**
     * @Property ruleEnable: Rule switch. When adding global configuration, this parameter does not need to be set. Value range:
     * on: Enabled.
     * off: Disabled.
     */
    public ruleEnable: string | ros.IResolvable | undefined;

    /**
     * @Property ruleName: Rule name. When adding global configuration, this parameter does not need to be set.
     */
    public ruleName: string | ros.IResolvable | undefined;

    /**
     * @Property sequence: Order of rule execution. The smaller the value, the higher the priority for execution.
     */
    public sequence: number | ros.IResolvable | undefined;

    /**
     * @Property siteVersion: The version number of the site configuration. For sites that have enabled configuration version management, this parameter can be used to specify the effective version of the configuration site, which defaults to version 0.
     */
    public siteVersion: number | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosImageTransformProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosImageTransform.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrConfigId = this.getAtt('ConfigId');
        this.attrConfigType = this.getAtt('ConfigType');
        this.attrEnable = this.getAtt('Enable');
        this.attrRule = this.getAtt('Rule');
        this.attrRuleEnable = this.getAtt('RuleEnable');
        this.attrRuleName = this.getAtt('RuleName');
        this.attrSequence = this.getAtt('Sequence');
        this.attrSiteVersion = this.getAtt('SiteVersion');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.siteId = props.siteId;
        this.enable = props.enable;
        this.paymentType = props.paymentType;
        this.rule = props.rule;
        this.ruleEnable = props.ruleEnable;
        this.ruleName = props.ruleName;
        this.sequence = props.sequence;
        this.siteVersion = props.siteVersion;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            siteId: this.siteId,
            enable: this.enable,
            paymentType: this.paymentType,
            rule: this.rule,
            ruleEnable: this.ruleEnable,
            ruleName: this.ruleName,
            sequence: this.sequence,
            siteVersion: this.siteVersion,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosImageTransformPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosKv`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-kv
 */
export interface RosKvProps {

    /**
     * @Property key: The key name. The name can be up to 512 characters in length and cannot contain spaces or backslashes (\).
     */
    readonly key: string | ros.IResolvable;

    /**
     * @Property namespace: The name specified when calling [CreatevNamespace] https:\/\/help.aliyun.com\/document_detail\/2850317.html.
     */
    readonly namespace: string | ros.IResolvable;

    /**
     * @Property value: The content of the key. If the content has more than 256 characters in length, the system displays the first 100 and the last 100 characters, and omits the middle part.
     */
    readonly value: string | ros.IResolvable;

    /**
     * @Property expiration: The content of the key, which can be up to 2 MB (2 × 1000 × 1000). If the content is larger than 2 MB, call [PutKvWithHighCapacity] https:\/\/www.alibabacloud.com\/help\/en\/doc-detail\/2850486.html.
     */
    readonly expiration?: number | ros.IResolvable;

    /**
     * @Property expirationTtl: The time when the key-value pair expires, which cannot be earlier than the current time. The value is a timestamp in seconds. If you specify both Expiration and ExpirationTtl, only ExpirationTtl takes effect.
     */
    readonly expirationTtl?: number | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosKvProps`
 *
 * @param properties - the TypeScript properties of a `RosKvProps`
 *
 * @returns the result of the validation.
 */
function RosKvPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('expirationTtl', ros.validateNumber)(properties.expirationTtl));
    errors.collect(ros.propertyValidator('expiration', ros.validateNumber)(properties.expiration));
    errors.collect(ros.propertyValidator('value', ros.requiredValidator)(properties.value));
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    errors.collect(ros.propertyValidator('namespace', ros.requiredValidator)(properties.namespace));
    errors.collect(ros.propertyValidator('namespace', ros.validateString)(properties.namespace));
    errors.collect(ros.propertyValidator('key', ros.requiredValidator)(properties.key));
    errors.collect(ros.propertyValidator('key', ros.validateString)(properties.key));
    return errors.wrap('supplied properties not correct for "RosKvProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ESA::Kv` resource
 *
 * @param properties - the TypeScript properties of a `RosKvProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ESA::Kv` resource.
 */
// @ts-ignore TS6133
function rosKvPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosKvPropsValidator(properties).assertSuccess();
    }
    return {
      'Key': ros.stringToRosTemplate(properties.key),
      'Namespace': ros.stringToRosTemplate(properties.namespace),
      'Value': ros.stringToRosTemplate(properties.value),
      'Expiration': ros.numberToRosTemplate(properties.expiration),
      'ExpirationTtl': ros.numberToRosTemplate(properties.expirationTtl),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ESA::Kv`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Kv` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-kv
 */
export class RosKv extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ESA::Kv";

    /**
     * @Attribute Value: The content of the key. If the content has more than 256 characters in length, the system displays the first 100 and the last 100 characters, and omits the middle part.
     */
    public readonly attrValue: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property key: The key name. The name can be up to 512 characters in length and cannot contain spaces or backslashes (\).
     */
    public key: string | ros.IResolvable;

    /**
     * @Property namespace: The name specified when calling [CreatevNamespace] https:\/\/help.aliyun.com\/document_detail\/2850317.html.
     */
    public namespace: string | ros.IResolvable;

    /**
     * @Property value: The content of the key. If the content has more than 256 characters in length, the system displays the first 100 and the last 100 characters, and omits the middle part.
     */
    public value: string | ros.IResolvable;

    /**
     * @Property expiration: The content of the key, which can be up to 2 MB (2 × 1000 × 1000). If the content is larger than 2 MB, call [PutKvWithHighCapacity] https:\/\/www.alibabacloud.com\/help\/en\/doc-detail\/2850486.html.
     */
    public expiration: number | ros.IResolvable | undefined;

    /**
     * @Property expirationTtl: The time when the key-value pair expires, which cannot be earlier than the current time. The value is a timestamp in seconds. If you specify both Expiration and ExpirationTtl, only ExpirationTtl takes effect.
     */
    public expirationTtl: number | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosKvProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosKv.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrValue = this.getAtt('Value');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.key = props.key;
        this.namespace = props.namespace;
        this.value = props.value;
        this.expiration = props.expiration;
        this.expirationTtl = props.expirationTtl;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            key: this.key,
            namespace: this.namespace,
            value: this.value,
            expiration: this.expiration,
            expirationTtl: this.expirationTtl,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosKvPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosKvNamespace`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-kvnamespace
 */
export interface RosKvNamespaceProps {

    /**
     * @Property kvNamespace: The name of the namespace.
     */
    readonly kvNamespace: string | ros.IResolvable;

    /**
     * @Property description: The description of the namespace.
     */
    readonly description?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosKvNamespaceProps`
 *
 * @param properties - the TypeScript properties of a `RosKvNamespaceProps`
 *
 * @returns the result of the validation.
 */
function RosKvNamespacePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('kvNamespace', ros.requiredValidator)(properties.kvNamespace));
    errors.collect(ros.propertyValidator('kvNamespace', ros.validateString)(properties.kvNamespace));
    return errors.wrap('supplied properties not correct for "RosKvNamespaceProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ESA::KvNamespace` resource
 *
 * @param properties - the TypeScript properties of a `RosKvNamespaceProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ESA::KvNamespace` resource.
 */
// @ts-ignore TS6133
function rosKvNamespacePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosKvNamespacePropsValidator(properties).assertSuccess();
    }
    return {
      'KvNamespace': ros.stringToRosTemplate(properties.kvNamespace),
      'Description': ros.stringToRosTemplate(properties.description),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ESA::KvNamespace`.
 * @Note This class does not contain additional functions, so it is recommended to use the `KvNamespace` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-kvnamespace
 */
export class RosKvNamespace extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ESA::KvNamespace";

    /**
     * @Attribute Description: The description of the namespace.
     */
    public readonly attrDescription: ros.IResolvable;

    /**
     * @Attribute KvCapacity: The available capacity of the namespace. Unit: bytes.
     */
    public readonly attrKvCapacity: ros.IResolvable;

    /**
     * @Attribute KvCapacityString: The available capacity of the namespace.
     */
    public readonly attrKvCapacityString: ros.IResolvable;

    /**
     * @Attribute KvCapacityUsed: The used capacity of the namespace. Unit: bytes.
     */
    public readonly attrKvCapacityUsed: ros.IResolvable;

    /**
     * @Attribute KvCapacityUsedString: The used capacity of the namespace.
     */
    public readonly attrKvCapacityUsedString: ros.IResolvable;

    /**
     * @Attribute KvNamespace: The name of the namespace.
     */
    public readonly attrKvNamespace: ros.IResolvable;

    /**
     * @Attribute NamespaceId: The ID of the namespace.
     */
    public readonly attrNamespaceId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property kvNamespace: The name of the namespace.
     */
    public kvNamespace: string | ros.IResolvable;

    /**
     * @Property description: The description of the namespace.
     */
    public description: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosKvNamespaceProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosKvNamespace.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrDescription = this.getAtt('Description');
        this.attrKvCapacity = this.getAtt('KvCapacity');
        this.attrKvCapacityString = this.getAtt('KvCapacityString');
        this.attrKvCapacityUsed = this.getAtt('KvCapacityUsed');
        this.attrKvCapacityUsedString = this.getAtt('KvCapacityUsedString');
        this.attrKvNamespace = this.getAtt('KvNamespace');
        this.attrNamespaceId = this.getAtt('NamespaceId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.kvNamespace = props.kvNamespace;
        this.description = props.description;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            kvNamespace: this.kvNamespace,
            description: this.description,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosKvNamespacePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosNetworkOptimization`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-networkoptimization
 */
export interface RosNetworkOptimizationProps {

    /**
     * @Property siteId: Site ID.
     */
    readonly siteId: number | ros.IResolvable;

    /**
     * @Property grpc: Whether to enable GRPC, default is disabled. Value range:
     * - `on`: Enabled
     * - `off`: Disabled.
     */
    readonly grpc?: string | ros.IResolvable;

    /**
     * @Property http2Origin: Whether to enable HTTP2 origin, default is disabled. Value range:
     * - `on`: Enabled
     * - `off`: Disabled.
     */
    readonly http2Origin?: string | ros.IResolvable;

    /**
     * @Property rule: Rule content, using conditional expressions to match user requests. When adding global configuration, this parameter does not need to be set. There are two usage scenarios:
     * - Match all incoming requests: value set to true
     * - Match specified request: Set the value to a custom expression, for example: (http.host eq \"video.example.com\").
     */
    readonly rule?: string | ros.IResolvable;

    /**
     * @Property ruleEnable: Rule switch. When adding global configuration, this parameter does not need to be set. Value range:
     * - `on`: open.
     * - `off`: close.
     */
    readonly ruleEnable?: string | ros.IResolvable;

    /**
     * @Property ruleName: Rule name.
     */
    readonly ruleName?: string | ros.IResolvable;

    /**
     * @Property sequence: Order of rule execution. The smaller the value, the higher the priority for execution.
     */
    readonly sequence?: number | ros.IResolvable;

    /**
     * @Property siteVersion: The version number of the site configuration. For sites that have enabled configuration version management, this parameter can be used to specify the effective version of the configuration site, which defaults to version 0.
     */
    readonly siteVersion?: number | ros.IResolvable;

    /**
     * @Property smartRouting: Whether to enable smart routing service, default is disabled. Value range:
     * - `on`: Enabled
     * - `off`: Disabled.
     */
    readonly smartRouting?: string | ros.IResolvable;

    /**
     * @Property uploadMaxFilesize: Maximum upload file size, in MB, value range: 100～500.
     */
    readonly uploadMaxFilesize?: number | ros.IResolvable;

    /**
     * @Property websocket: Whether to enable Websocket, default is enabled. Value range:
     * - `on`: Enabled
     * - `off`: Disabled.
     */
    readonly websocket?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosNetworkOptimizationProps`
 *
 * @param properties - the TypeScript properties of a `RosNetworkOptimizationProps`
 *
 * @returns the result of the validation.
 */
function RosNetworkOptimizationPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('siteId', ros.requiredValidator)(properties.siteId));
    errors.collect(ros.propertyValidator('siteId', ros.validateNumber)(properties.siteId));
    if(properties.smartRouting && (typeof properties.smartRouting) !== 'object') {
        errors.collect(ros.propertyValidator('smartRouting', ros.validateAllowedValues)({
          data: properties.smartRouting,
          allowedValues: ["on","off"],
        }));
    }
    errors.collect(ros.propertyValidator('smartRouting', ros.validateString)(properties.smartRouting));
    if(properties.websocket && (typeof properties.websocket) !== 'object') {
        errors.collect(ros.propertyValidator('websocket', ros.validateAllowedValues)({
          data: properties.websocket,
          allowedValues: ["on","off"],
        }));
    }
    errors.collect(ros.propertyValidator('websocket', ros.validateString)(properties.websocket));
    if(properties.ruleEnable && (typeof properties.ruleEnable) !== 'object') {
        errors.collect(ros.propertyValidator('ruleEnable', ros.validateAllowedValues)({
          data: properties.ruleEnable,
          allowedValues: ["on","off"],
        }));
    }
    errors.collect(ros.propertyValidator('ruleEnable', ros.validateString)(properties.ruleEnable));
    errors.collect(ros.propertyValidator('sequence', ros.validateNumber)(properties.sequence));
    errors.collect(ros.propertyValidator('rule', ros.validateString)(properties.rule));
    if(properties.grpc && (typeof properties.grpc) !== 'object') {
        errors.collect(ros.propertyValidator('grpc', ros.validateAllowedValues)({
          data: properties.grpc,
          allowedValues: ["on","off"],
        }));
    }
    errors.collect(ros.propertyValidator('grpc', ros.validateString)(properties.grpc));
    if(properties.http2Origin && (typeof properties.http2Origin) !== 'object') {
        errors.collect(ros.propertyValidator('http2Origin', ros.validateAllowedValues)({
          data: properties.http2Origin,
          allowedValues: ["on","off"],
        }));
    }
    errors.collect(ros.propertyValidator('http2Origin', ros.validateString)(properties.http2Origin));
    errors.collect(ros.propertyValidator('siteVersion', ros.validateNumber)(properties.siteVersion));
    errors.collect(ros.propertyValidator('ruleName', ros.validateString)(properties.ruleName));
    if(properties.uploadMaxFilesize && (typeof properties.uploadMaxFilesize) !== 'object') {
        errors.collect(ros.propertyValidator('uploadMaxFilesize', ros.validateRange)({
            data: properties.uploadMaxFilesize,
            min: 100,
            max: 500,
          }));
    }
    errors.collect(ros.propertyValidator('uploadMaxFilesize', ros.validateNumber)(properties.uploadMaxFilesize));
    return errors.wrap('supplied properties not correct for "RosNetworkOptimizationProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ESA::NetworkOptimization` resource
 *
 * @param properties - the TypeScript properties of a `RosNetworkOptimizationProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ESA::NetworkOptimization` resource.
 */
// @ts-ignore TS6133
function rosNetworkOptimizationPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosNetworkOptimizationPropsValidator(properties).assertSuccess();
    }
    return {
      'SiteId': ros.numberToRosTemplate(properties.siteId),
      'Grpc': ros.stringToRosTemplate(properties.grpc),
      'Http2Origin': ros.stringToRosTemplate(properties.http2Origin),
      'Rule': ros.stringToRosTemplate(properties.rule),
      'RuleEnable': ros.stringToRosTemplate(properties.ruleEnable),
      'RuleName': ros.stringToRosTemplate(properties.ruleName),
      'Sequence': ros.numberToRosTemplate(properties.sequence),
      'SiteVersion': ros.numberToRosTemplate(properties.siteVersion),
      'SmartRouting': ros.stringToRosTemplate(properties.smartRouting),
      'UploadMaxFilesize': ros.numberToRosTemplate(properties.uploadMaxFilesize),
      'Websocket': ros.stringToRosTemplate(properties.websocket),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ESA::NetworkOptimization`.
 * @Note This class does not contain additional functions, so it is recommended to use the `NetworkOptimization` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-networkoptimization
 */
export class RosNetworkOptimization extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ESA::NetworkOptimization";

    /**
     * @Attribute ConfigId: ConfigId of the configuration, which can be obtained by calling the ListNetworkOptimizations.
     */
    public readonly attrConfigId: ros.IResolvable;

    /**
     * @Attribute ConfigType: Configuration type, which can be used to query global or rule configurations.
     */
    public readonly attrConfigType: ros.IResolvable;

    /**
     * @Attribute Grpc: Whether to enable GRPC, default is disabled.
     */
    public readonly attrGrpc: ros.IResolvable;

    /**
     * @Attribute Http2Origin: Whether to enable HTTP2 origin, default is disabled.
     */
    public readonly attrHttp2Origin: ros.IResolvable;

    /**
     * @Attribute Rule: Rule content, using conditional expressions to match user requests. When adding global configuration, this parameter does not need to be set.
     */
    public readonly attrRule: ros.IResolvable;

    /**
     * @Attribute RuleEnable: Rule switch. When adding global configuration, this parameter does not need to be set.
     */
    public readonly attrRuleEnable: ros.IResolvable;

    /**
     * @Attribute RuleName: Rule name.
     */
    public readonly attrRuleName: ros.IResolvable;

    /**
     * @Attribute Sequence: Order of rule execution. The smaller the value, the higher the priority for execution.
     */
    public readonly attrSequence: ros.IResolvable;

    /**
     * @Attribute SiteVersion: The version number of the site configuration. For sites that have enabled configuration version management, this parameter can be used to specify the effective version of the configuration site, which defaults to version 0.
     */
    public readonly attrSiteVersion: ros.IResolvable;

    /**
     * @Attribute SmartRouting: Whether to enable smart routing service, default is disabled.
     */
    public readonly attrSmartRouting: ros.IResolvable;

    /**
     * @Attribute UploadMaxFilesize: Maximum upload file size, in MB, value range: 100～500.
     */
    public readonly attrUploadMaxFilesize: ros.IResolvable;

    /**
     * @Attribute Websocket: Whether to enable Websocket, default is enabled.
     */
    public readonly attrWebsocket: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property siteId: Site ID.
     */
    public siteId: number | ros.IResolvable;

    /**
     * @Property grpc: Whether to enable GRPC, default is disabled. Value range:
     * - `on`: Enabled
     * - `off`: Disabled.
     */
    public grpc: string | ros.IResolvable | undefined;

    /**
     * @Property http2Origin: Whether to enable HTTP2 origin, default is disabled. Value range:
     * - `on`: Enabled
     * - `off`: Disabled.
     */
    public http2Origin: string | ros.IResolvable | undefined;

    /**
     * @Property rule: Rule content, using conditional expressions to match user requests. When adding global configuration, this parameter does not need to be set. There are two usage scenarios:
     * - Match all incoming requests: value set to true
     * - Match specified request: Set the value to a custom expression, for example: (http.host eq \"video.example.com\").
     */
    public rule: string | ros.IResolvable | undefined;

    /**
     * @Property ruleEnable: Rule switch. When adding global configuration, this parameter does not need to be set. Value range:
     * - `on`: open.
     * - `off`: close.
     */
    public ruleEnable: string | ros.IResolvable | undefined;

    /**
     * @Property ruleName: Rule name.
     */
    public ruleName: string | ros.IResolvable | undefined;

    /**
     * @Property sequence: Order of rule execution. The smaller the value, the higher the priority for execution.
     */
    public sequence: number | ros.IResolvable | undefined;

    /**
     * @Property siteVersion: The version number of the site configuration. For sites that have enabled configuration version management, this parameter can be used to specify the effective version of the configuration site, which defaults to version 0.
     */
    public siteVersion: number | ros.IResolvable | undefined;

    /**
     * @Property smartRouting: Whether to enable smart routing service, default is disabled. Value range:
     * - `on`: Enabled
     * - `off`: Disabled.
     */
    public smartRouting: string | ros.IResolvable | undefined;

    /**
     * @Property uploadMaxFilesize: Maximum upload file size, in MB, value range: 100～500.
     */
    public uploadMaxFilesize: number | ros.IResolvable | undefined;

    /**
     * @Property websocket: Whether to enable Websocket, default is enabled. Value range:
     * - `on`: Enabled
     * - `off`: Disabled.
     */
    public websocket: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosNetworkOptimizationProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosNetworkOptimization.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrConfigId = this.getAtt('ConfigId');
        this.attrConfigType = this.getAtt('ConfigType');
        this.attrGrpc = this.getAtt('Grpc');
        this.attrHttp2Origin = this.getAtt('Http2Origin');
        this.attrRule = this.getAtt('Rule');
        this.attrRuleEnable = this.getAtt('RuleEnable');
        this.attrRuleName = this.getAtt('RuleName');
        this.attrSequence = this.getAtt('Sequence');
        this.attrSiteVersion = this.getAtt('SiteVersion');
        this.attrSmartRouting = this.getAtt('SmartRouting');
        this.attrUploadMaxFilesize = this.getAtt('UploadMaxFilesize');
        this.attrWebsocket = this.getAtt('Websocket');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.siteId = props.siteId;
        this.grpc = props.grpc;
        this.http2Origin = props.http2Origin;
        this.rule = props.rule;
        this.ruleEnable = props.ruleEnable;
        this.ruleName = props.ruleName;
        this.sequence = props.sequence;
        this.siteVersion = props.siteVersion;
        this.smartRouting = props.smartRouting;
        this.uploadMaxFilesize = props.uploadMaxFilesize;
        this.websocket = props.websocket;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            siteId: this.siteId,
            grpc: this.grpc,
            http2Origin: this.http2Origin,
            rule: this.rule,
            ruleEnable: this.ruleEnable,
            ruleName: this.ruleName,
            sequence: this.sequence,
            siteVersion: this.siteVersion,
            smartRouting: this.smartRouting,
            uploadMaxFilesize: this.uploadMaxFilesize,
            websocket: this.websocket,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosNetworkOptimizationPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosOriginPool`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-originpool
 */
export interface RosOriginPoolProps {

    /**
     * @Property originPoolName: The source address pool name.
     */
    readonly originPoolName: string | ros.IResolvable;

    /**
     * @Property siteId: The site ID.
     */
    readonly siteId: number | ros.IResolvable;

    /**
     * @Property enabled: Whether the source address pool is enabled:
     * - `true`: Enabled;
     * - `false`: Not enabled.
     */
    readonly enabled?: boolean | ros.IResolvable;

    /**
     * @Property origins: The Source station information added to the source address pool. Multiple Source stations use arrays to transfer values.
     */
    readonly origins?: Array<RosOriginPool.OriginsProperty | ros.IResolvable> | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosOriginPoolProps`
 *
 * @param properties - the TypeScript properties of a `RosOriginPoolProps`
 *
 * @returns the result of the validation.
 */
function RosOriginPoolPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('origins', ros.listValidator(RosOriginPool_OriginsPropertyValidator))(properties.origins));
    errors.collect(ros.propertyValidator('siteId', ros.requiredValidator)(properties.siteId));
    errors.collect(ros.propertyValidator('siteId', ros.validateNumber)(properties.siteId));
    errors.collect(ros.propertyValidator('enabled', ros.validateBoolean)(properties.enabled));
    errors.collect(ros.propertyValidator('originPoolName', ros.requiredValidator)(properties.originPoolName));
    errors.collect(ros.propertyValidator('originPoolName', ros.validateString)(properties.originPoolName));
    return errors.wrap('supplied properties not correct for "RosOriginPoolProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ESA::OriginPool` resource
 *
 * @param properties - the TypeScript properties of a `RosOriginPoolProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ESA::OriginPool` resource.
 */
// @ts-ignore TS6133
function rosOriginPoolPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosOriginPoolPropsValidator(properties).assertSuccess();
    }
    return {
      'OriginPoolName': ros.stringToRosTemplate(properties.originPoolName),
      'SiteId': ros.numberToRosTemplate(properties.siteId),
      'Enabled': ros.booleanToRosTemplate(properties.enabled),
      'Origins': ros.listMapper(rosOriginPoolOriginsPropertyToRosTemplate)(properties.origins),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ESA::OriginPool`.
 * @Note This class does not contain additional functions, so it is recommended to use the `OriginPool` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-originpool
 */
export class RosOriginPool extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ESA::OriginPool";

    /**
     * @Attribute Enabled: Whether the source address pool is enabled:.
     */
    public readonly attrEnabled: ros.IResolvable;

    /**
     * @Attribute OriginPoolId: OriginPool Id.
     */
    public readonly attrOriginPoolId: ros.IResolvable;

    /**
     * @Attribute OriginPoolName: The source address pool name.
     */
    public readonly attrOriginPoolName: ros.IResolvable;

    /**
     * @Attribute Origins: The Source station information added to the source address pool. Multiple Source stations use arrays to transfer values.
     */
    public readonly attrOrigins: ros.IResolvable;

    /**
     * @Attribute RecordName: The domain name assigned to the source address pool can be used as the source address recorded under the site.
     */
    public readonly attrRecordName: ros.IResolvable;

    /**
     * @Attribute ReferenceLBCount: How many load balancers are referenced.
     */
    public readonly attrReferenceLbCount: ros.IResolvable;

    /**
     * @Attribute References: The source address pool is referred to when the source address pool is configured by the load balancer or recorded as the source station.
     */
    public readonly attrReferences: ros.IResolvable;

    /**
     * @Attribute SiteId: The site ID.
     */
    public readonly attrSiteId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property originPoolName: The source address pool name.
     */
    public originPoolName: string | ros.IResolvable;

    /**
     * @Property siteId: The site ID.
     */
    public siteId: number | ros.IResolvable;

    /**
     * @Property enabled: Whether the source address pool is enabled:
     * - `true`: Enabled;
     * - `false`: Not enabled.
     */
    public enabled: boolean | ros.IResolvable | undefined;

    /**
     * @Property origins: The Source station information added to the source address pool. Multiple Source stations use arrays to transfer values.
     */
    public origins: Array<RosOriginPool.OriginsProperty | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosOriginPoolProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosOriginPool.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrEnabled = this.getAtt('Enabled');
        this.attrOriginPoolId = this.getAtt('OriginPoolId');
        this.attrOriginPoolName = this.getAtt('OriginPoolName');
        this.attrOrigins = this.getAtt('Origins');
        this.attrRecordName = this.getAtt('RecordName');
        this.attrReferenceLbCount = this.getAtt('ReferenceLBCount');
        this.attrReferences = this.getAtt('References');
        this.attrSiteId = this.getAtt('SiteId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.originPoolName = props.originPoolName;
        this.siteId = props.siteId;
        this.enabled = props.enabled;
        this.origins = props.origins;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            originPoolName: this.originPoolName,
            siteId: this.siteId,
            enabled: this.enabled,
            origins: this.origins,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosOriginPoolPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosOriginPool {
    /**
     * @stability external
     */
    export interface AuthConfProperty {
        /**
         * @Property secretKey: The SecretKey to be passed when AuthType is set to private_cross_account or private.
         */
        readonly secretKey?: string | ros.IResolvable;
        /**
         * @Property version: The signature version to be transmitted when the source station is AWS S3.
         */
        readonly version?: string | ros.IResolvable;
        /**
         * @Property region: The Region of the source station to be transmitted when the source station is AWS S3.
         */
        readonly region?: string | ros.IResolvable;
        /**
         * @Property accessKey: The AccessKey to be passed when AuthType is set to private_cross_account or private.
         */
        readonly accessKey?: string | ros.IResolvable;
        /**
         * @Property authType: Authentication type.
     * - `public`: public read\/write, which is used when the source station is OSS or S3 and is public read\/write;
     * - `private_same_account`: Used when the same account is private, the source station is OSS, and the authentication type is private authentication of the same account;
     * - `private_cross_account`: private cross-account, used when the origin station is OSS and the authentication type is cross-account private authentication;
     * - `private`: Used when the source station is S3 and the authentication type is private.
         */
        readonly authType?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `AuthConfProperty`
 *
 * @param properties - the TypeScript properties of a `AuthConfProperty`
 *
 * @returns the result of the validation.
 */
function RosOriginPool_AuthConfPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('secretKey', ros.validateString)(properties.secretKey));
    errors.collect(ros.propertyValidator('version', ros.validateString)(properties.version));
    errors.collect(ros.propertyValidator('region', ros.validateString)(properties.region));
    errors.collect(ros.propertyValidator('accessKey', ros.validateString)(properties.accessKey));
    if(properties.authType && (typeof properties.authType) !== 'object') {
        errors.collect(ros.propertyValidator('authType', ros.validateAllowedValues)({
          data: properties.authType,
          allowedValues: ["public","private_same_account","private_cross_account","private"],
        }));
    }
    errors.collect(ros.propertyValidator('authType', ros.validateString)(properties.authType));
    return errors.wrap('supplied properties not correct for "AuthConfProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ESA::OriginPool.AuthConf` resource
 *
 * @param properties - the TypeScript properties of a `AuthConfProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ESA::OriginPool.AuthConf` resource.
 */
// @ts-ignore TS6133
function rosOriginPoolAuthConfPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosOriginPool_AuthConfPropertyValidator(properties).assertSuccess();
    return {
      'SecretKey': ros.stringToRosTemplate(properties.secretKey),
      'Version': ros.stringToRosTemplate(properties.version),
      'Region': ros.stringToRosTemplate(properties.region),
      'AccessKey': ros.stringToRosTemplate(properties.accessKey),
      'AuthType': ros.stringToRosTemplate(properties.authType),
    };
}

export namespace RosOriginPool {
    /**
     * @stability external
     */
    export interface OriginsProperty {
        /**
         * @Property type: Source station type:
     * ip_domain: ip or domain name type origin station;
     * - `OSS`:OSS address source station;
     * - `S3`:AWS S3 Source station.
         */
        readonly type?: string | ros.IResolvable;
        /**
         * @Property header: The request header that is sent when returning to the source. Only Host is supported.
         */
        readonly header?: string | ros.IResolvable;
        /**
         * @Property address: Origin Address.
         */
        readonly address?: string | ros.IResolvable;
        /**
         * @Property enabled: Whether the source station is enabled:
     * - `true`: Enabled;
     * - `false`: Not enabled.
         */
        readonly enabled?: boolean | ros.IResolvable;
        /**
         * @Property authConf: The authentication information. When the source Station is an OSS or S3 and other source stations need to be authenticated, the authentication-related configuration information needs to be transmitted.
         */
        readonly authConf?: RosOriginPool.AuthConfProperty | ros.IResolvable;
        /**
         * @Property originId: Origin ID.
         */
        readonly originId?: number | ros.IResolvable;
        /**
         * @Property weight: The weight, an integer between 0 and 100.
         */
        readonly weight?: number | ros.IResolvable;
        /**
         * @Property name: The name of the origin, which must be unique within an origin address.
         */
        readonly name?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `OriginsProperty`
 *
 * @param properties - the TypeScript properties of a `OriginsProperty`
 *
 * @returns the result of the validation.
 */
function RosOriginPool_OriginsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.type && (typeof properties.type) !== 'object') {
        errors.collect(ros.propertyValidator('type', ros.validateAllowedValues)({
          data: properties.type,
          allowedValues: ["ip_domain","OSS","S3"],
        }));
    }
    errors.collect(ros.propertyValidator('type', ros.validateString)(properties.type));
    errors.collect(ros.propertyValidator('header', ros.validateString)(properties.header));
    errors.collect(ros.propertyValidator('address', ros.validateString)(properties.address));
    errors.collect(ros.propertyValidator('enabled', ros.validateBoolean)(properties.enabled));
    errors.collect(ros.propertyValidator('authConf', RosOriginPool_AuthConfPropertyValidator)(properties.authConf));
    errors.collect(ros.propertyValidator('originId', ros.validateNumber)(properties.originId));
    if(properties.weight && (typeof properties.weight) !== 'object') {
        errors.collect(ros.propertyValidator('weight', ros.validateRange)({
            data: properties.weight,
            min: 0,
            max: 100,
          }));
    }
    errors.collect(ros.propertyValidator('weight', ros.validateNumber)(properties.weight));
    errors.collect(ros.propertyValidator('name', ros.validateString)(properties.name));
    return errors.wrap('supplied properties not correct for "OriginsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ESA::OriginPool.Origins` resource
 *
 * @param properties - the TypeScript properties of a `OriginsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ESA::OriginPool.Origins` resource.
 */
// @ts-ignore TS6133
function rosOriginPoolOriginsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosOriginPool_OriginsPropertyValidator(properties).assertSuccess();
    return {
      'Type': ros.stringToRosTemplate(properties.type),
      'Header': ros.stringToRosTemplate(properties.header),
      'Address': ros.stringToRosTemplate(properties.address),
      'Enabled': ros.booleanToRosTemplate(properties.enabled),
      'AuthConf': rosOriginPoolAuthConfPropertyToRosTemplate(properties.authConf),
      'OriginId': ros.numberToRosTemplate(properties.originId),
      'Weight': ros.numberToRosTemplate(properties.weight),
      'Name': ros.stringToRosTemplate(properties.name),
    };
}

/**
 * Properties for defining a `RosOriginRule`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-originrule
 */
export interface RosOriginRuleProps {

    /**
     * @Property siteId: The site ID.
     */
    readonly siteId: number | ros.IResolvable;

    /**
     * @Property dnsRecord: Overwrite the DNS resolution record of the origin request.
     */
    readonly dnsRecord?: string | ros.IResolvable;

    /**
     * @Property follow302Enable: Return Source 302 follow switch. Value range:
     * - `on`: ON.
     * - `off`: closed.
     */
    readonly follow302Enable?: string | ros.IResolvable;

    /**
     * @Property follow302MaxTries: 302 follows the upper limit of the number of times, with a value range of [1-5].
     */
    readonly follow302MaxTries?: number | ros.IResolvable;

    /**
     * @Property follow302RetainArgs: Retain the original request parameter switch. Value range:
     * - `on`: ON.
     * - `off`: closed.
     */
    readonly follow302RetainArgs?: string | ros.IResolvable;

    /**
     * @Property follow302RetainHeader: Retain the original request header switch. Value range:
     * - `on`: ON.
     * - `off`: closed.
     */
    readonly follow302RetainHeader?: string | ros.IResolvable;

    /**
     * @Property follow302TargetHost: Modify the source host after 302.
     */
    readonly follow302TargetHost?: string | ros.IResolvable;

    /**
     * @Property originHost: The HOST carried in the back-to-origin request.
     */
    readonly originHost?: string | ros.IResolvable;

    /**
     * @Property originHttpPort: The port of the origin station accessed when the HTTP protocol is used to return to the origin.
     */
    readonly originHttpPort?: number | ros.IResolvable;

    /**
     * @Property originHttpsPort: Port of the origin server when using the HTTPS protocol for origin requests.
     */
    readonly originHttpsPort?: number | ros.IResolvable;

    /**
     * @Property originMtls: The mtls switch. Value range:
     * - `on`: ON.
     * - `off`: closed.
     */
    readonly originMtls?: string | ros.IResolvable;

    /**
     * @Property originReadTimeout: Read timeout interval of the source station (s).
     */
    readonly originReadTimeout?: number | ros.IResolvable;

    /**
     * @Property originScheme: The protocol used by the back-to-origin request. Value range:
     * - `http`: uses the http protocol to return to the source.
     * - `https`: uses the https protocol to return to the source.
     * - `follow`: follows the Client Protocol back to the source.
     */
    readonly originScheme?: string | ros.IResolvable;

    /**
     * @Property originSni: SNI carried in the back-to-origin request.
     */
    readonly originSni?: string | ros.IResolvable;

    /**
     * @Property originVerify: Source station certificate verification switch. Value range:
     * - `on`: ON.
     * - `off`: closed.
     */
    readonly originVerify?: string | ros.IResolvable;

    /**
     * @Property range: Use the range sharding method to download the file from the source. Value range:
     * - `on`: Open.
     * - `off`: off.
     * - `force`: force.
     */
    readonly range?: string | ros.IResolvable;

    /**
     * @Property rangeChunkSize: range shard size.
     */
    readonly rangeChunkSize?: string | ros.IResolvable;

    /**
     * @Property rule: Rule content, using conditional expressions to match user requests. When adding global configuration, this parameter does not need to be set. There are two usage scenarios:
     * - Match all incoming requests: value set to true
     * - Match specified request: Set the value to a custom expression, for example: (http.host eq \"video.example.com\").
     */
    readonly rule?: string | ros.IResolvable;

    /**
     * @Property ruleEnable: Rule switch. When adding global configuration, this parameter does not need to be set. Value range:
     * - `on`: open.
     * - `off`: close.
     */
    readonly ruleEnable?: string | ros.IResolvable;

    /**
     * @Property ruleName: Rule name. When adding global configuration, this parameter does not need to be set.
     */
    readonly ruleName?: string | ros.IResolvable;

    /**
     * @Property sequence: Order of rule execution. The smaller the value, the higher the priority for execution.
     */
    readonly sequence?: number | ros.IResolvable;

    /**
     * @Property siteVersion: The version number of the site configuration. For sites that have enabled configuration version management, this parameter can be used to specify the effective version of the configuration site, which defaults to version 0.
     */
    readonly siteVersion?: number | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosOriginRuleProps`
 *
 * @param properties - the TypeScript properties of a `RosOriginRuleProps`
 *
 * @returns the result of the validation.
 */
function RosOriginRulePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('siteId', ros.requiredValidator)(properties.siteId));
    errors.collect(ros.propertyValidator('siteId', ros.validateNumber)(properties.siteId));
    if(properties.follow302MaxTries && (typeof properties.follow302MaxTries) !== 'object') {
        errors.collect(ros.propertyValidator('follow302MaxTries', ros.validateRange)({
            data: properties.follow302MaxTries,
            min: 1,
            max: 5,
          }));
    }
    errors.collect(ros.propertyValidator('follow302MaxTries', ros.validateNumber)(properties.follow302MaxTries));
    if(properties.ruleEnable && (typeof properties.ruleEnable) !== 'object') {
        errors.collect(ros.propertyValidator('ruleEnable', ros.validateAllowedValues)({
          data: properties.ruleEnable,
          allowedValues: ["on","off"],
        }));
    }
    errors.collect(ros.propertyValidator('ruleEnable', ros.validateString)(properties.ruleEnable));
    errors.collect(ros.propertyValidator('originHttpsPort', ros.validateNumber)(properties.originHttpsPort));
    if(properties.follow302RetainArgs && (typeof properties.follow302RetainArgs) !== 'object') {
        errors.collect(ros.propertyValidator('follow302RetainArgs', ros.validateAllowedValues)({
          data: properties.follow302RetainArgs,
          allowedValues: ["on","off"],
        }));
    }
    errors.collect(ros.propertyValidator('follow302RetainArgs', ros.validateString)(properties.follow302RetainArgs));
    if(properties.follow302RetainHeader && (typeof properties.follow302RetainHeader) !== 'object') {
        errors.collect(ros.propertyValidator('follow302RetainHeader', ros.validateAllowedValues)({
          data: properties.follow302RetainHeader,
          allowedValues: ["on","off"],
        }));
    }
    errors.collect(ros.propertyValidator('follow302RetainHeader', ros.validateString)(properties.follow302RetainHeader));
    if(properties.originScheme && (typeof properties.originScheme) !== 'object') {
        errors.collect(ros.propertyValidator('originScheme', ros.validateAllowedValues)({
          data: properties.originScheme,
          allowedValues: ["http","https","follow"],
        }));
    }
    errors.collect(ros.propertyValidator('originScheme', ros.validateString)(properties.originScheme));
    errors.collect(ros.propertyValidator('sequence', ros.validateNumber)(properties.sequence));
    if(properties.range && (typeof properties.range) !== 'object') {
        errors.collect(ros.propertyValidator('range', ros.validateAllowedValues)({
          data: properties.range,
          allowedValues: ["on","off","force"],
        }));
    }
    errors.collect(ros.propertyValidator('range', ros.validateString)(properties.range));
    if(properties.rangeChunkSize && (typeof properties.rangeChunkSize) !== 'object') {
        errors.collect(ros.propertyValidator('rangeChunkSize', ros.validateAllowedValues)({
          data: properties.rangeChunkSize,
          allowedValues: ["512KB","1MB","2MB","4MB"],
        }));
    }
    errors.collect(ros.propertyValidator('rangeChunkSize', ros.validateString)(properties.rangeChunkSize));
    errors.collect(ros.propertyValidator('originReadTimeout', ros.validateNumber)(properties.originReadTimeout));
    errors.collect(ros.propertyValidator('originHost', ros.validateString)(properties.originHost));
    errors.collect(ros.propertyValidator('originHttpPort', ros.validateNumber)(properties.originHttpPort));
    if(properties.originMtls && (typeof properties.originMtls) !== 'object') {
        errors.collect(ros.propertyValidator('originMtls', ros.validateAllowedValues)({
          data: properties.originMtls,
          allowedValues: ["on","off"],
        }));
    }
    errors.collect(ros.propertyValidator('originMtls', ros.validateString)(properties.originMtls));
    errors.collect(ros.propertyValidator('follow302TargetHost', ros.validateString)(properties.follow302TargetHost));
    errors.collect(ros.propertyValidator('originSni', ros.validateString)(properties.originSni));
    errors.collect(ros.propertyValidator('rule', ros.validateString)(properties.rule));
    if(properties.follow302Enable && (typeof properties.follow302Enable) !== 'object') {
        errors.collect(ros.propertyValidator('follow302Enable', ros.validateAllowedValues)({
          data: properties.follow302Enable,
          allowedValues: ["on","off"],
        }));
    }
    errors.collect(ros.propertyValidator('follow302Enable', ros.validateString)(properties.follow302Enable));
    errors.collect(ros.propertyValidator('dnsRecord', ros.validateString)(properties.dnsRecord));
    errors.collect(ros.propertyValidator('siteVersion', ros.validateNumber)(properties.siteVersion));
    errors.collect(ros.propertyValidator('ruleName', ros.validateString)(properties.ruleName));
    if(properties.originVerify && (typeof properties.originVerify) !== 'object') {
        errors.collect(ros.propertyValidator('originVerify', ros.validateAllowedValues)({
          data: properties.originVerify,
          allowedValues: ["on","off"],
        }));
    }
    errors.collect(ros.propertyValidator('originVerify', ros.validateString)(properties.originVerify));
    return errors.wrap('supplied properties not correct for "RosOriginRuleProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ESA::OriginRule` resource
 *
 * @param properties - the TypeScript properties of a `RosOriginRuleProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ESA::OriginRule` resource.
 */
// @ts-ignore TS6133
function rosOriginRulePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosOriginRulePropsValidator(properties).assertSuccess();
    }
    return {
      'SiteId': ros.numberToRosTemplate(properties.siteId),
      'DnsRecord': ros.stringToRosTemplate(properties.dnsRecord),
      'Follow302Enable': ros.stringToRosTemplate(properties.follow302Enable),
      'Follow302MaxTries': ros.numberToRosTemplate(properties.follow302MaxTries),
      'Follow302RetainArgs': ros.stringToRosTemplate(properties.follow302RetainArgs),
      'Follow302RetainHeader': ros.stringToRosTemplate(properties.follow302RetainHeader),
      'Follow302TargetHost': ros.stringToRosTemplate(properties.follow302TargetHost),
      'OriginHost': ros.stringToRosTemplate(properties.originHost),
      'OriginHttpPort': ros.numberToRosTemplate(properties.originHttpPort),
      'OriginHttpsPort': ros.numberToRosTemplate(properties.originHttpsPort),
      'OriginMtls': ros.stringToRosTemplate(properties.originMtls),
      'OriginReadTimeout': ros.numberToRosTemplate(properties.originReadTimeout),
      'OriginScheme': ros.stringToRosTemplate(properties.originScheme),
      'OriginSni': ros.stringToRosTemplate(properties.originSni),
      'OriginVerify': ros.stringToRosTemplate(properties.originVerify),
      'Range': ros.stringToRosTemplate(properties.range),
      'RangeChunkSize': ros.stringToRosTemplate(properties.rangeChunkSize),
      'Rule': ros.stringToRosTemplate(properties.rule),
      'RuleEnable': ros.stringToRosTemplate(properties.ruleEnable),
      'RuleName': ros.stringToRosTemplate(properties.ruleName),
      'Sequence': ros.numberToRosTemplate(properties.sequence),
      'SiteVersion': ros.numberToRosTemplate(properties.siteVersion),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ESA::OriginRule`.
 * @Note This class does not contain additional functions, so it is recommended to use the `OriginRule` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-originrule
 */
export class RosOriginRule extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ESA::OriginRule";

    /**
     * @Attribute ConfigId: Back-to-source rule configuration ID.
     */
    public readonly attrConfigId: ros.IResolvable;

    /**
     * @Attribute ConfigType: The configuration type. You can use this parameter to check the global configuration or rule configuration.
     */
    public readonly attrConfigType: ros.IResolvable;

    /**
     * @Attribute DnsRecord: Overwrite the DNS resolution record of the origin request.
     */
    public readonly attrDnsRecord: ros.IResolvable;

    /**
     * @Attribute Follow302Enable: Return Source 302 follow switch.
     */
    public readonly attrFollow302Enable: ros.IResolvable;

    /**
     * @Attribute Follow302MaxTries: 302 follows the upper limit of the number of times, with a value range of [1-5].
     */
    public readonly attrFollow302MaxTries: ros.IResolvable;

    /**
     * @Attribute Follow302RetainArgs: Retain the original request parameter switch.
     */
    public readonly attrFollow302RetainArgs: ros.IResolvable;

    /**
     * @Attribute Follow302RetainHeader: Retain the original request header switch.
     */
    public readonly attrFollow302RetainHeader: ros.IResolvable;

    /**
     * @Attribute Follow302TargetHost: Modify the source host after 302.
     */
    public readonly attrFollow302TargetHost: ros.IResolvable;

    /**
     * @Attribute OriginHost: The HOST carried in the back-to-origin request.
     */
    public readonly attrOriginHost: ros.IResolvable;

    /**
     * @Attribute OriginHttpPort: The port of the origin station accessed when the HTTP protocol is used to return to the origin.
     */
    public readonly attrOriginHttpPort: ros.IResolvable;

    /**
     * @Attribute OriginHttpsPort: The port of the origin station accessed when the HTTPS protocol is used to return to the origin.
     */
    public readonly attrOriginHttpsPort: ros.IResolvable;

    /**
     * @Attribute OriginMtls: The mtls switch.
     */
    public readonly attrOriginMtls: ros.IResolvable;

    /**
     * @Attribute OriginReadTimeout: Read timeout interval of the source station (s).
     */
    public readonly attrOriginReadTimeout: ros.IResolvable;

    /**
     * @Attribute OriginScheme: The protocol used by the back-to-origin request.
     */
    public readonly attrOriginScheme: ros.IResolvable;

    /**
     * @Attribute OriginSni: SNI carried in the back-to-origin request.
     */
    public readonly attrOriginSni: ros.IResolvable;

    /**
     * @Attribute OriginVerify: Source station certificate verification switch.
     */
    public readonly attrOriginVerify: ros.IResolvable;

    /**
     * @Attribute Range: Use the range sharding method to download the file from the source.
     */
    public readonly attrRange: ros.IResolvable;

    /**
     * @Attribute RangeChunkSize: range shard size.
     */
    public readonly attrRangeChunkSize: ros.IResolvable;

    /**
     * @Attribute Rule: Rule content, using conditional expressions to match user requests. When adding global configuration, this parameter does not need to be set.
     */
    public readonly attrRule: ros.IResolvable;

    /**
     * @Attribute RuleEnable: Rule switch. When adding global configuration, this parameter does not need to be set.
     */
    public readonly attrRuleEnable: ros.IResolvable;

    /**
     * @Attribute RuleName: Rule name. When adding global configuration, this parameter does not need to be set.
     */
    public readonly attrRuleName: ros.IResolvable;

    /**
     * @Attribute Sequence: Order of rule execution. The smaller the value, the higher the priority for execution.
     */
    public readonly attrSequence: ros.IResolvable;

    /**
     * @Attribute SiteVersion: The version number of the site configuration. For sites that have enabled configuration version management, this parameter can be used to specify the effective version of the configuration site, which defaults to version 0.
     */
    public readonly attrSiteVersion: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property siteId: The site ID.
     */
    public siteId: number | ros.IResolvable;

    /**
     * @Property dnsRecord: Overwrite the DNS resolution record of the origin request.
     */
    public dnsRecord: string | ros.IResolvable | undefined;

    /**
     * @Property follow302Enable: Return Source 302 follow switch. Value range:
     * - `on`: ON.
     * - `off`: closed.
     */
    public follow302Enable: string | ros.IResolvable | undefined;

    /**
     * @Property follow302MaxTries: 302 follows the upper limit of the number of times, with a value range of [1-5].
     */
    public follow302MaxTries: number | ros.IResolvable | undefined;

    /**
     * @Property follow302RetainArgs: Retain the original request parameter switch. Value range:
     * - `on`: ON.
     * - `off`: closed.
     */
    public follow302RetainArgs: string | ros.IResolvable | undefined;

    /**
     * @Property follow302RetainHeader: Retain the original request header switch. Value range:
     * - `on`: ON.
     * - `off`: closed.
     */
    public follow302RetainHeader: string | ros.IResolvable | undefined;

    /**
     * @Property follow302TargetHost: Modify the source host after 302.
     */
    public follow302TargetHost: string | ros.IResolvable | undefined;

    /**
     * @Property originHost: The HOST carried in the back-to-origin request.
     */
    public originHost: string | ros.IResolvable | undefined;

    /**
     * @Property originHttpPort: The port of the origin station accessed when the HTTP protocol is used to return to the origin.
     */
    public originHttpPort: number | ros.IResolvable | undefined;

    /**
     * @Property originHttpsPort: Port of the origin server when using the HTTPS protocol for origin requests.
     */
    public originHttpsPort: number | ros.IResolvable | undefined;

    /**
     * @Property originMtls: The mtls switch. Value range:
     * - `on`: ON.
     * - `off`: closed.
     */
    public originMtls: string | ros.IResolvable | undefined;

    /**
     * @Property originReadTimeout: Read timeout interval of the source station (s).
     */
    public originReadTimeout: number | ros.IResolvable | undefined;

    /**
     * @Property originScheme: The protocol used by the back-to-origin request. Value range:
     * - `http`: uses the http protocol to return to the source.
     * - `https`: uses the https protocol to return to the source.
     * - `follow`: follows the Client Protocol back to the source.
     */
    public originScheme: string | ros.IResolvable | undefined;

    /**
     * @Property originSni: SNI carried in the back-to-origin request.
     */
    public originSni: string | ros.IResolvable | undefined;

    /**
     * @Property originVerify: Source station certificate verification switch. Value range:
     * - `on`: ON.
     * - `off`: closed.
     */
    public originVerify: string | ros.IResolvable | undefined;

    /**
     * @Property range: Use the range sharding method to download the file from the source. Value range:
     * - `on`: Open.
     * - `off`: off.
     * - `force`: force.
     */
    public range: string | ros.IResolvable | undefined;

    /**
     * @Property rangeChunkSize: range shard size.
     */
    public rangeChunkSize: string | ros.IResolvable | undefined;

    /**
     * @Property rule: Rule content, using conditional expressions to match user requests. When adding global configuration, this parameter does not need to be set. There are two usage scenarios:
     * - Match all incoming requests: value set to true
     * - Match specified request: Set the value to a custom expression, for example: (http.host eq \"video.example.com\").
     */
    public rule: string | ros.IResolvable | undefined;

    /**
     * @Property ruleEnable: Rule switch. When adding global configuration, this parameter does not need to be set. Value range:
     * - `on`: open.
     * - `off`: close.
     */
    public ruleEnable: string | ros.IResolvable | undefined;

    /**
     * @Property ruleName: Rule name. When adding global configuration, this parameter does not need to be set.
     */
    public ruleName: string | ros.IResolvable | undefined;

    /**
     * @Property sequence: Order of rule execution. The smaller the value, the higher the priority for execution.
     */
    public sequence: number | ros.IResolvable | undefined;

    /**
     * @Property siteVersion: The version number of the site configuration. For sites that have enabled configuration version management, this parameter can be used to specify the effective version of the configuration site, which defaults to version 0.
     */
    public siteVersion: number | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosOriginRuleProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosOriginRule.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrConfigId = this.getAtt('ConfigId');
        this.attrConfigType = this.getAtt('ConfigType');
        this.attrDnsRecord = this.getAtt('DnsRecord');
        this.attrFollow302Enable = this.getAtt('Follow302Enable');
        this.attrFollow302MaxTries = this.getAtt('Follow302MaxTries');
        this.attrFollow302RetainArgs = this.getAtt('Follow302RetainArgs');
        this.attrFollow302RetainHeader = this.getAtt('Follow302RetainHeader');
        this.attrFollow302TargetHost = this.getAtt('Follow302TargetHost');
        this.attrOriginHost = this.getAtt('OriginHost');
        this.attrOriginHttpPort = this.getAtt('OriginHttpPort');
        this.attrOriginHttpsPort = this.getAtt('OriginHttpsPort');
        this.attrOriginMtls = this.getAtt('OriginMtls');
        this.attrOriginReadTimeout = this.getAtt('OriginReadTimeout');
        this.attrOriginScheme = this.getAtt('OriginScheme');
        this.attrOriginSni = this.getAtt('OriginSni');
        this.attrOriginVerify = this.getAtt('OriginVerify');
        this.attrRange = this.getAtt('Range');
        this.attrRangeChunkSize = this.getAtt('RangeChunkSize');
        this.attrRule = this.getAtt('Rule');
        this.attrRuleEnable = this.getAtt('RuleEnable');
        this.attrRuleName = this.getAtt('RuleName');
        this.attrSequence = this.getAtt('Sequence');
        this.attrSiteVersion = this.getAtt('SiteVersion');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.siteId = props.siteId;
        this.dnsRecord = props.dnsRecord;
        this.follow302Enable = props.follow302Enable;
        this.follow302MaxTries = props.follow302MaxTries;
        this.follow302RetainArgs = props.follow302RetainArgs;
        this.follow302RetainHeader = props.follow302RetainHeader;
        this.follow302TargetHost = props.follow302TargetHost;
        this.originHost = props.originHost;
        this.originHttpPort = props.originHttpPort;
        this.originHttpsPort = props.originHttpsPort;
        this.originMtls = props.originMtls;
        this.originReadTimeout = props.originReadTimeout;
        this.originScheme = props.originScheme;
        this.originSni = props.originSni;
        this.originVerify = props.originVerify;
        this.range = props.range;
        this.rangeChunkSize = props.rangeChunkSize;
        this.rule = props.rule;
        this.ruleEnable = props.ruleEnable;
        this.ruleName = props.ruleName;
        this.sequence = props.sequence;
        this.siteVersion = props.siteVersion;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            siteId: this.siteId,
            dnsRecord: this.dnsRecord,
            follow302Enable: this.follow302Enable,
            follow302MaxTries: this.follow302MaxTries,
            follow302RetainArgs: this.follow302RetainArgs,
            follow302RetainHeader: this.follow302RetainHeader,
            follow302TargetHost: this.follow302TargetHost,
            originHost: this.originHost,
            originHttpPort: this.originHttpPort,
            originHttpsPort: this.originHttpsPort,
            originMtls: this.originMtls,
            originReadTimeout: this.originReadTimeout,
            originScheme: this.originScheme,
            originSni: this.originSni,
            originVerify: this.originVerify,
            range: this.range,
            rangeChunkSize: this.rangeChunkSize,
            rule: this.rule,
            ruleEnable: this.ruleEnable,
            ruleName: this.ruleName,
            sequence: this.sequence,
            siteVersion: this.siteVersion,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosOriginRulePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosPage`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-page
 */
export interface RosPageProps {

    /**
     * @Property contentType: The Content-Type field in the HTTP header. Valid values:
     * text\/html
     * application\/json
     */
    readonly contentType: string | ros.IResolvable;

    /**
     * @Property pageName: The name of the custom response page.
     */
    readonly pageName: string | ros.IResolvable;

    /**
     * @Property content: The Base64-encoded page content. Example: "PGh0bWw+aGVsbG8gcGFnZTwvaHRtbD4=", which indicates "hello page".
     */
    readonly content?: string | ros.IResolvable;

    /**
     * @Property description: The description of the page.
     */
    readonly description?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosPageProps`
 *
 * @param properties - the TypeScript properties of a `RosPageProps`
 *
 * @returns the result of the validation.
 */
function RosPagePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('contentType', ros.requiredValidator)(properties.contentType));
    if(properties.contentType && (typeof properties.contentType) !== 'object') {
        errors.collect(ros.propertyValidator('contentType', ros.validateAllowedValues)({
          data: properties.contentType,
          allowedValues: ["text/html","application/json"],
        }));
    }
    errors.collect(ros.propertyValidator('contentType', ros.validateString)(properties.contentType));
    errors.collect(ros.propertyValidator('content', ros.validateString)(properties.content));
    errors.collect(ros.propertyValidator('pageName', ros.requiredValidator)(properties.pageName));
    errors.collect(ros.propertyValidator('pageName', ros.validateString)(properties.pageName));
    return errors.wrap('supplied properties not correct for "RosPageProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ESA::Page` resource
 *
 * @param properties - the TypeScript properties of a `RosPageProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ESA::Page` resource.
 */
// @ts-ignore TS6133
function rosPagePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosPagePropsValidator(properties).assertSuccess();
    }
    return {
      'ContentType': ros.stringToRosTemplate(properties.contentType),
      'PageName': ros.stringToRosTemplate(properties.pageName),
      'Content': ros.stringToRosTemplate(properties.content),
      'Description': ros.stringToRosTemplate(properties.description),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ESA::Page`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Page` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-page
 */
export class RosPage extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ESA::Page";

    /**
     * @Attribute Content: The Base64-encoded content of the error page. The content type is specified by the Content-Type field.
     */
    public readonly attrContent: ros.IResolvable;

    /**
     * @Attribute ContentType: The Content-Type field in the HTTP header.
     */
    public readonly attrContentType: ros.IResolvable;

    /**
     * @Attribute Description: The description of the custom error page.
     */
    public readonly attrDescription: ros.IResolvable;

    /**
     * @Attribute Kind: The type of the custom response page.
     */
    public readonly attrKind: ros.IResolvable;

    /**
     * @Attribute PageId: The ID of the custom error page.
     */
    public readonly attrPageId: ros.IResolvable;

    /**
     * @Attribute PageName: The name of the custom response page.
     */
    public readonly attrPageName: ros.IResolvable;

    /**
     * @Attribute UpdateTime: The time when the custom error page was last modified.
     */
    public readonly attrUpdateTime: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property contentType: The Content-Type field in the HTTP header. Valid values:
     * text\/html
     * application\/json
     */
    public contentType: string | ros.IResolvable;

    /**
     * @Property pageName: The name of the custom response page.
     */
    public pageName: string | ros.IResolvable;

    /**
     * @Property content: The Base64-encoded page content. Example: "PGh0bWw+aGVsbG8gcGFnZTwvaHRtbD4=", which indicates "hello page".
     */
    public content: string | ros.IResolvable | undefined;

    /**
     * @Property description: The description of the page.
     */
    public description: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosPageProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosPage.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrContent = this.getAtt('Content');
        this.attrContentType = this.getAtt('ContentType');
        this.attrDescription = this.getAtt('Description');
        this.attrKind = this.getAtt('Kind');
        this.attrPageId = this.getAtt('PageId');
        this.attrPageName = this.getAtt('PageName');
        this.attrUpdateTime = this.getAtt('UpdateTime');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.contentType = props.contentType;
        this.pageName = props.pageName;
        this.content = props.content;
        this.description = props.description;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            contentType: this.contentType,
            pageName: this.pageName,
            content: this.content,
            description: this.description,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosPagePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosRecord`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-record
 */
export interface RosRecordProps {

    /**
     * @Property data: The DNS record information. The format of this field varies based on the record type. For more information, see [References] https:\/\/www.alibabacloud.com\/help\/doc-detail\/2708761.html?spm=openapi-amp.newDocPublishment.0.0.6a0f281feoeVWr.
     */
    readonly data: RosRecord.DataProperty | ros.IResolvable;

    /**
     * @Property recordName: The record name. This parameter specifies a filter condition for the query.
     */
    readonly recordName: string | ros.IResolvable;

    /**
     * @Property recordType: The type of the DNS record, such as A\/AAAA, CNAME, and TXT.
     */
    readonly recordType: string | ros.IResolvable;

    /**
     * @Property siteId: The website ID.
     */
    readonly siteId: number | ros.IResolvable;

    /**
     * @Property authConf: The origin authentication information of the CNAME record.
     */
    readonly authConf?: RosRecord.AuthConfProperty | ros.IResolvable;

    /**
     * @Property bizName: The business scenario of the record for acceleration. Leave the parameter empty if your record is not proxied. Valid values:
     * image_video: video and image.
     * api: API.
     * web: web page.
     */
    readonly bizName?: string | ros.IResolvable;

    /**
     * @Property comment: The comment of the record. The maximum length is 100 characters.
     */
    readonly comment?: string | ros.IResolvable;

    /**
     * @Property hostPolicy: The origin host policy. This policy takes effect when the record type is CNAME. You can set the policy in two modes:
     * follow_hostname: Follow the host record.
     * follow_origin_domain: match the origin's domain name.
     */
    readonly hostPolicy?: string | ros.IResolvable;

    /**
     * @Property proxied: Specifies whether to proxy the record. Only CNAME and A\/AAAA records can be proxied. Valid values:
     * true
     * false.
     */
    readonly proxied?: boolean | ros.IResolvable;

    /**
     * @Property sourceType: The origin type for the CNAME record. This parameter is required when you add a CNAME record. Valid values:
     * OSS: OSS bucket.
     * S3: S3 bucket.
     * LB: load balancer.
     * OP: origin pool.
     * Domain: domain name.
     * If you do not pass this parameter or if you leave its value empty, Domain is used by default.
     */
    readonly sourceType?: string | ros.IResolvable;

    /**
     * @Property ttl: The TTL of the record. Unit: seconds. If the value is 1, the TTL of the record is determined by the system.
     */
    readonly ttl?: number | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosRecordProps`
 *
 * @param properties - the TypeScript properties of a `RosRecordProps`
 *
 * @returns the result of the validation.
 */
function RosRecordPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('recordName', ros.requiredValidator)(properties.recordName));
    errors.collect(ros.propertyValidator('recordName', ros.validateString)(properties.recordName));
    errors.collect(ros.propertyValidator('comment', ros.validateString)(properties.comment));
    errors.collect(ros.propertyValidator('proxied', ros.validateBoolean)(properties.proxied));
    errors.collect(ros.propertyValidator('siteId', ros.requiredValidator)(properties.siteId));
    errors.collect(ros.propertyValidator('siteId', ros.validateNumber)(properties.siteId));
    errors.collect(ros.propertyValidator('recordType', ros.requiredValidator)(properties.recordType));
    if(properties.recordType && (typeof properties.recordType) !== 'object') {
        errors.collect(ros.propertyValidator('recordType', ros.validateAllowedValues)({
          data: properties.recordType,
          allowedValues: ["A/AAAA","CNAME","NS","MX","TXT","CAA","SRV","URI","CAA","CERT","SMIMEA","SSHFP","TLSA"],
        }));
    }
    errors.collect(ros.propertyValidator('recordType', ros.validateString)(properties.recordType));
    if(properties.sourceType && (typeof properties.sourceType) !== 'object') {
        errors.collect(ros.propertyValidator('sourceType', ros.validateAllowedValues)({
          data: properties.sourceType,
          allowedValues: ["OSS","S3","LB","OP","Domain"],
        }));
    }
    errors.collect(ros.propertyValidator('sourceType', ros.validateString)(properties.sourceType));
    if(properties.bizName && (typeof properties.bizName) !== 'object') {
        errors.collect(ros.propertyValidator('bizName', ros.validateAllowedValues)({
          data: properties.bizName,
          allowedValues: ["image_video","api","web"],
        }));
    }
    errors.collect(ros.propertyValidator('bizName', ros.validateString)(properties.bizName));
    if(properties.hostPolicy && (typeof properties.hostPolicy) !== 'object') {
        errors.collect(ros.propertyValidator('hostPolicy', ros.validateAllowedValues)({
          data: properties.hostPolicy,
          allowedValues: ["follow_hostname","follow_origin_domain"],
        }));
    }
    errors.collect(ros.propertyValidator('hostPolicy', ros.validateString)(properties.hostPolicy));
    errors.collect(ros.propertyValidator('data', ros.requiredValidator)(properties.data));
    errors.collect(ros.propertyValidator('data', RosRecord_DataPropertyValidator)(properties.data));
    errors.collect(ros.propertyValidator('authConf', RosRecord_AuthConfPropertyValidator)(properties.authConf));
    errors.collect(ros.propertyValidator('ttl', ros.validateNumber)(properties.ttl));
    return errors.wrap('supplied properties not correct for "RosRecordProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ESA::Record` resource
 *
 * @param properties - the TypeScript properties of a `RosRecordProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ESA::Record` resource.
 */
// @ts-ignore TS6133
function rosRecordPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosRecordPropsValidator(properties).assertSuccess();
    }
    return {
      'Data': rosRecordDataPropertyToRosTemplate(properties.data),
      'RecordName': ros.stringToRosTemplate(properties.recordName),
      'RecordType': ros.stringToRosTemplate(properties.recordType),
      'SiteId': ros.numberToRosTemplate(properties.siteId),
      'AuthConf': rosRecordAuthConfPropertyToRosTemplate(properties.authConf),
      'BizName': ros.stringToRosTemplate(properties.bizName),
      'Comment': ros.stringToRosTemplate(properties.comment),
      'HostPolicy': ros.stringToRosTemplate(properties.hostPolicy),
      'Proxied': ros.booleanToRosTemplate(properties.proxied),
      'SourceType': ros.stringToRosTemplate(properties.sourceType),
      'Ttl': ros.numberToRosTemplate(properties.ttl),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ESA::Record`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Record` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-record
 */
export class RosRecord extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ESA::Record";

    /**
     * @Attribute AuthConf: The origin authentication information of the CNAME record.
     */
    public readonly attrAuthConf: ros.IResolvable;

    /**
     * @Attribute BizName: The business scenario of the record for acceleration. Leave the parameter empty if your record is not proxied.
     */
    public readonly attrBizName: ros.IResolvable;

    /**
     * @Attribute Comment: The comment of the record. The maximum length is 100 characters.
     */
    public readonly attrComment: ros.IResolvable;

    /**
     * @Attribute CreateTime: The time when the record was created. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
     */
    public readonly attrCreateTime: ros.IResolvable;

    /**
     * @Attribute Data: The DNS record information. The format of this field varies based on the record type. For more information, see [References]https://www.alibabacloud.com/help/doc-detail/2708761.html?spm=openapi-amp.newDocPublishment.0.0.6a0f281feoeVWr.
     */
    public readonly attrData: ros.IResolvable;

    /**
     * @Attribute HostPolicy: The origin host policy. This policy takes effect when the record type is CNAME.
     */
    public readonly attrHostPolicy: ros.IResolvable;

    /**
     * @Attribute ModifyTime: The time when the record was updated. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
     */
    public readonly attrModifyTime: ros.IResolvable;

    /**
     * @Attribute Proxied: Specifies whether to proxy the record. Only CNAME and A/AAAA records can be proxied.
     */
    public readonly attrProxied: ros.IResolvable;

    /**
     * @Attribute RecordCname: The CNAME. If you use CNAME setup when you add your website to ESA, the value is the CNAME that you configured then.
     */
    public readonly attrRecordCname: ros.IResolvable;

    /**
     * @Attribute RecordId: Record Id.
     */
    public readonly attrRecordId: ros.IResolvable;

    /**
     * @Attribute RecordName: The record name. This parameter specifies a filter condition for the query.
     */
    public readonly attrRecordName: ros.IResolvable;

    /**
     * @Attribute RecordType: The type of the DNS record, such as A/AAAA, CNAME, and TXT.
     */
    public readonly attrRecordType: ros.IResolvable;

    /**
     * @Attribute SiteId: The website ID.
     */
    public readonly attrSiteId: ros.IResolvable;

    /**
     * @Attribute SiteName: The website name.
     */
    public readonly attrSiteName: ros.IResolvable;

    /**
     * @Attribute SourceType: The origin type for the CNAME record. This parameter is required when you add a CNAME record.
     */
    public readonly attrSourceType: ros.IResolvable;

    /**
     * @Attribute Ttl: The TTL of the record. Unit: seconds. If the value is 1, the TTL of the record is determined by the system.
     */
    public readonly attrTtl: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property data: The DNS record information. The format of this field varies based on the record type. For more information, see [References] https:\/\/www.alibabacloud.com\/help\/doc-detail\/2708761.html?spm=openapi-amp.newDocPublishment.0.0.6a0f281feoeVWr.
     */
    public data: RosRecord.DataProperty | ros.IResolvable;

    /**
     * @Property recordName: The record name. This parameter specifies a filter condition for the query.
     */
    public recordName: string | ros.IResolvable;

    /**
     * @Property recordType: The type of the DNS record, such as A\/AAAA, CNAME, and TXT.
     */
    public recordType: string | ros.IResolvable;

    /**
     * @Property siteId: The website ID.
     */
    public siteId: number | ros.IResolvable;

    /**
     * @Property authConf: The origin authentication information of the CNAME record.
     */
    public authConf: RosRecord.AuthConfProperty | ros.IResolvable | undefined;

    /**
     * @Property bizName: The business scenario of the record for acceleration. Leave the parameter empty if your record is not proxied. Valid values:
     * image_video: video and image.
     * api: API.
     * web: web page.
     */
    public bizName: string | ros.IResolvable | undefined;

    /**
     * @Property comment: The comment of the record. The maximum length is 100 characters.
     */
    public comment: string | ros.IResolvable | undefined;

    /**
     * @Property hostPolicy: The origin host policy. This policy takes effect when the record type is CNAME. You can set the policy in two modes:
     * follow_hostname: Follow the host record.
     * follow_origin_domain: match the origin's domain name.
     */
    public hostPolicy: string | ros.IResolvable | undefined;

    /**
     * @Property proxied: Specifies whether to proxy the record. Only CNAME and A\/AAAA records can be proxied. Valid values:
     * true
     * false.
     */
    public proxied: boolean | ros.IResolvable | undefined;

    /**
     * @Property sourceType: The origin type for the CNAME record. This parameter is required when you add a CNAME record. Valid values:
     * OSS: OSS bucket.
     * S3: S3 bucket.
     * LB: load balancer.
     * OP: origin pool.
     * Domain: domain name.
     * If you do not pass this parameter or if you leave its value empty, Domain is used by default.
     */
    public sourceType: string | ros.IResolvable | undefined;

    /**
     * @Property ttl: The TTL of the record. Unit: seconds. If the value is 1, the TTL of the record is determined by the system.
     */
    public ttl: number | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosRecordProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosRecord.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAuthConf = this.getAtt('AuthConf');
        this.attrBizName = this.getAtt('BizName');
        this.attrComment = this.getAtt('Comment');
        this.attrCreateTime = this.getAtt('CreateTime');
        this.attrData = this.getAtt('Data');
        this.attrHostPolicy = this.getAtt('HostPolicy');
        this.attrModifyTime = this.getAtt('ModifyTime');
        this.attrProxied = this.getAtt('Proxied');
        this.attrRecordCname = this.getAtt('RecordCname');
        this.attrRecordId = this.getAtt('RecordId');
        this.attrRecordName = this.getAtt('RecordName');
        this.attrRecordType = this.getAtt('RecordType');
        this.attrSiteId = this.getAtt('SiteId');
        this.attrSiteName = this.getAtt('SiteName');
        this.attrSourceType = this.getAtt('SourceType');
        this.attrTtl = this.getAtt('Ttl');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.data = props.data;
        this.recordName = props.recordName;
        this.recordType = props.recordType;
        this.siteId = props.siteId;
        this.authConf = props.authConf;
        this.bizName = props.bizName;
        this.comment = props.comment;
        this.hostPolicy = props.hostPolicy;
        this.proxied = props.proxied;
        this.sourceType = props.sourceType;
        this.ttl = props.ttl;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            data: this.data,
            recordName: this.recordName,
            recordType: this.recordType,
            siteId: this.siteId,
            authConf: this.authConf,
            bizName: this.bizName,
            comment: this.comment,
            hostPolicy: this.hostPolicy,
            proxied: this.proxied,
            sourceType: this.sourceType,
            ttl: this.ttl,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosRecordPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosRecord {
    /**
     * @stability external
     */
    export interface AuthConfProperty {
        /**
         * @Property secretKey: The secret access key of the account to which the origin server belongs. This parameter is required when the SourceType is OSS, and AuthType is private_same_account, or when the SourceType is S3 and AuthType is private.
         */
        readonly secretKey?: string | ros.IResolvable;
        /**
         * @Property version: The version of the signature algorithm. This parameter is required when the origin type is S3 and AuthType is private. The following two types are supported:
     * v2
     * v4
     * - If you leave this parameter empty, the default value v4 is used.
         */
        readonly version?: string | ros.IResolvable;
        /**
         * @Property region: The region of the origin. If the origin type is S3, you must specify this value. You can get the region information from the official website of S3.
         */
        readonly region?: string | ros.IResolvable;
        /**
         * @Property accessKey: The access key of the account to which the origin server belongs. This parameter is required when the SourceType is OSS, and AuthType is private_cross_account, or when the SourceType is S3 and AuthType is private.
         */
        readonly accessKey?: string | ros.IResolvable;
        /**
         * @Property authType: The authentication type of the origin server. Different origins support different authentication types. The type of origin refers to the SourceType parameter in this operation. If the type of origin is OSS or S3, you must specify the authentication type of the origin. Valid values:
     * public: public read. Select this value when the origin type is OSS or S3 and the origin access is public read.
     * private: private read. Select this value when the origin type is S3 and the origin access is private read.
     * private_same_account: private read under the same account. Select this value when the origin type is OSS, the origins belong to the same Alibaba Cloud account, and the origins have private read access.
     * private_cross_account: private read cross accounts. Select this value when the origin type is OSS, the origins belong to different Alibaba Cloud accounts, and the origins have private read access.
         */
        readonly authType?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `AuthConfProperty`
 *
 * @param properties - the TypeScript properties of a `AuthConfProperty`
 *
 * @returns the result of the validation.
 */
function RosRecord_AuthConfPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('secretKey', ros.validateString)(properties.secretKey));
    if(properties.version && (typeof properties.version) !== 'object') {
        errors.collect(ros.propertyValidator('version', ros.validateAllowedValues)({
          data: properties.version,
          allowedValues: ["v2","v4"],
        }));
    }
    errors.collect(ros.propertyValidator('version', ros.validateString)(properties.version));
    errors.collect(ros.propertyValidator('region', ros.validateString)(properties.region));
    errors.collect(ros.propertyValidator('accessKey', ros.validateString)(properties.accessKey));
    if(properties.authType && (typeof properties.authType) !== 'object') {
        errors.collect(ros.propertyValidator('authType', ros.validateAllowedValues)({
          data: properties.authType,
          allowedValues: ["public","private","private_same_account","private_cross_account"],
        }));
    }
    errors.collect(ros.propertyValidator('authType', ros.validateString)(properties.authType));
    return errors.wrap('supplied properties not correct for "AuthConfProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ESA::Record.AuthConf` resource
 *
 * @param properties - the TypeScript properties of a `AuthConfProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ESA::Record.AuthConf` resource.
 */
// @ts-ignore TS6133
function rosRecordAuthConfPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosRecord_AuthConfPropertyValidator(properties).assertSuccess();
    return {
      'SecretKey': ros.stringToRosTemplate(properties.secretKey),
      'Version': ros.stringToRosTemplate(properties.version),
      'Region': ros.stringToRosTemplate(properties.region),
      'AccessKey': ros.stringToRosTemplate(properties.accessKey),
      'AuthType': ros.stringToRosTemplate(properties.authType),
    };
}

export namespace RosRecord {
    /**
     * @stability external
     */
    export interface DataProperty {
        /**
         * @Property fingerprint: The public key fingerprint of the record. This parameter is required when you add a SSHFP record.
         */
        readonly fingerprint?: string | ros.IResolvable;
        /**
         * @Property usage: The usage identifier of the record, specified within the range of 0 to 255. This parameter is required when you add SMIMEA or TLSA records.
         */
        readonly usage?: number | ros.IResolvable;
        /**
         * @Property priority: The priority of the record, specified within the range of 0 to 65,535. A smaller value indicates a higher priority. This parameter is required when you add MX, SRV, and URI records.
         */
        readonly priority?: number | ros.IResolvable;
        /**
         * @Property port: The port of the record, specified within the range of 0 to 65,535. This parameter is required when you add an SRV record.
         */
        readonly port?: number | ros.IResolvable;
        /**
         * @Property algorithm: The encryption algorithm used for the record, specified within the range from 0 to 255. This parameter is required when you add CERT or SSHFP records.
         */
        readonly algorithm?: number | ros.IResolvable;
        /**
         * @Property flag: The flag bit of the record. The Flag for a CAA record indicates its priority and how it is processed, specified within the range of 0 to 255. This parameter is required when you add a CAA record.
         */
        readonly flag?: number | ros.IResolvable;
        /**
         * @Property weight: The weight of the record, specified within the range of 0 to 65,535. This parameter is required when you add SRV or URI records.
         */
        readonly weight?: number | ros.IResolvable;
        /**
         * @Property matchingType: The algorithm policy used to match or validate the certificate, specified within the range 0 to 255. This parameter is required when you add SMIMEA or TLSA records.
         */
        readonly matchingType?: number | ros.IResolvable;
        /**
         * @Property type: The certificate type of the record (in CERT records), or the public key type (in SSHFP records). This parameter is required when you add CERT or SSHFP records.
         */
        readonly type?: number | ros.IResolvable;
        /**
         * @Property keyTag: The public key identification for the record, specified within the range of 0 to 65,535. This parameter is required when you add a CAA record.
         */
        readonly keyTag?: number | ros.IResolvable;
        /**
         * @Property value: Record value or part of the record content. This parameter is required when you add A\/AAAA, CNAME, NS, MX, TXT, CAA, SRV, and URI records. It has different meanings based on types of records:
     * A\/AAAA: the IP address(es). Separate IP addresses with commas (,). You must have at least one IPv4 address.
     * CNAME: the target domain name.
     * NS: the name servers for the domain name.
     * MX: a valid domain name of the target mail server.
     * TXT: a valid text string.
     * CAA: a valid domain name of the certificate authority.
     * SRV: a valid domain name of the target host.
     * URI: a valid URI string.
         */
        readonly value?: string | ros.IResolvable;
        /**
         * @Property tag: The label of the record. The Tag of a CAA record indicate its specific type and usage. This parameter is required when you add a CAA record. Valid values:
     * issue: indicates that a CA is authorized to issue a certificate for the domain name. This is usually followed by the domain name of the CA.
     * issuewild: indicates that a CA is authorized to issue a wildcard certificate (such as *.example.com) for the domain name.
     * iodef: specifies a URI to receive reports about CAA record violations.
         */
        readonly tag?: string | ros.IResolvable;
        /**
         * @Property certificate: The public key of the certificate. This parameter is required when you add CERT, SMIMEA, or TLSA records.
         */
        readonly certificate?: string | ros.IResolvable;
        /**
         * @Property selector: The type of certificate or public key, specified within the range of 0 to 255. This parameter is required when you add SMIMEA or TLSA records.
         */
        readonly selector?: number | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `DataProperty`
 *
 * @param properties - the TypeScript properties of a `DataProperty`
 *
 * @returns the result of the validation.
 */
function RosRecord_DataPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('fingerprint', ros.validateString)(properties.fingerprint));
    if(properties.usage && (typeof properties.usage) !== 'object') {
        errors.collect(ros.propertyValidator('usage', ros.validateRange)({
            data: properties.usage,
            min: 0,
            max: 255,
          }));
    }
    errors.collect(ros.propertyValidator('usage', ros.validateNumber)(properties.usage));
    if(properties.priority && (typeof properties.priority) !== 'object') {
        errors.collect(ros.propertyValidator('priority', ros.validateRange)({
            data: properties.priority,
            min: 0,
            max: 65535,
          }));
    }
    errors.collect(ros.propertyValidator('priority', ros.validateNumber)(properties.priority));
    if(properties.port && (typeof properties.port) !== 'object') {
        errors.collect(ros.propertyValidator('port', ros.validateRange)({
            data: properties.port,
            min: 0,
            max: 65535,
          }));
    }
    errors.collect(ros.propertyValidator('port', ros.validateNumber)(properties.port));
    if(properties.algorithm && (typeof properties.algorithm) !== 'object') {
        errors.collect(ros.propertyValidator('algorithm', ros.validateRange)({
            data: properties.algorithm,
            min: 0,
            max: 255,
          }));
    }
    errors.collect(ros.propertyValidator('algorithm', ros.validateNumber)(properties.algorithm));
    if(properties.flag && (typeof properties.flag) !== 'object') {
        errors.collect(ros.propertyValidator('flag', ros.validateRange)({
            data: properties.flag,
            min: 0,
            max: 255,
          }));
    }
    errors.collect(ros.propertyValidator('flag', ros.validateNumber)(properties.flag));
    if(properties.weight && (typeof properties.weight) !== 'object') {
        errors.collect(ros.propertyValidator('weight', ros.validateRange)({
            data: properties.weight,
            min: 0,
            max: 65535,
          }));
    }
    errors.collect(ros.propertyValidator('weight', ros.validateNumber)(properties.weight));
    if(properties.matchingType && (typeof properties.matchingType) !== 'object') {
        errors.collect(ros.propertyValidator('matchingType', ros.validateRange)({
            data: properties.matchingType,
            min: 0,
            max: 255,
          }));
    }
    errors.collect(ros.propertyValidator('matchingType', ros.validateNumber)(properties.matchingType));
    errors.collect(ros.propertyValidator('type', ros.validateNumber)(properties.type));
    if(properties.keyTag && (typeof properties.keyTag) !== 'object') {
        errors.collect(ros.propertyValidator('keyTag', ros.validateRange)({
            data: properties.keyTag,
            min: 0,
            max: 65535,
          }));
    }
    errors.collect(ros.propertyValidator('keyTag', ros.validateNumber)(properties.keyTag));
    if(properties.value && (typeof properties.value) !== 'object') {
        errors.collect(ros.propertyValidator('value', ros.validateAllowedValues)({
          data: properties.value,
          allowedValues: ["A/AAAA","CNAME","NS","MX","TXT","CAA","SRV","URI"],
        }));
    }
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    if(properties.tag && (typeof properties.tag) !== 'object') {
        errors.collect(ros.propertyValidator('tag', ros.validateAllowedValues)({
          data: properties.tag,
          allowedValues: ["issue","issuewild","iodef"],
        }));
    }
    errors.collect(ros.propertyValidator('tag', ros.validateString)(properties.tag));
    errors.collect(ros.propertyValidator('certificate', ros.validateString)(properties.certificate));
    if(properties.selector && (typeof properties.selector) !== 'object') {
        errors.collect(ros.propertyValidator('selector', ros.validateRange)({
            data: properties.selector,
            min: 0,
            max: 255,
          }));
    }
    errors.collect(ros.propertyValidator('selector', ros.validateNumber)(properties.selector));
    return errors.wrap('supplied properties not correct for "DataProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ESA::Record.Data` resource
 *
 * @param properties - the TypeScript properties of a `DataProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ESA::Record.Data` resource.
 */
// @ts-ignore TS6133
function rosRecordDataPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosRecord_DataPropertyValidator(properties).assertSuccess();
    return {
      'Fingerprint': ros.stringToRosTemplate(properties.fingerprint),
      'Usage': ros.numberToRosTemplate(properties.usage),
      'Priority': ros.numberToRosTemplate(properties.priority),
      'Port': ros.numberToRosTemplate(properties.port),
      'Algorithm': ros.numberToRosTemplate(properties.algorithm),
      'Flag': ros.numberToRosTemplate(properties.flag),
      'Weight': ros.numberToRosTemplate(properties.weight),
      'MatchingType': ros.numberToRosTemplate(properties.matchingType),
      'Type': ros.numberToRosTemplate(properties.type),
      'KeyTag': ros.numberToRosTemplate(properties.keyTag),
      'Value': ros.stringToRosTemplate(properties.value),
      'Tag': ros.stringToRosTemplate(properties.tag),
      'Certificate': ros.stringToRosTemplate(properties.certificate),
      'Selector': ros.numberToRosTemplate(properties.selector),
    };
}

/**
 * Properties for defining a `RosRedirectRule`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-redirectrule
 */
export interface RosRedirectRuleProps {

    /**
     * @Property reserveQueryString: Indicates whether the feature of retaining the query string is enabled. Valid values:
     * on
     * off.
     */
    readonly reserveQueryString: string | ros.IResolvable;

    /**
     * @Property siteId: The website ID.
     */
    readonly siteId: number | ros.IResolvable;

    /**
     * @Property statusCode: The response code that you want to use to indicate URL redirection. Valid values:
     * *   301
     * *   302
     * *   303
     * *   307
     * *   308.
     */
    readonly statusCode: number | ros.IResolvable;

    /**
     * @Property targetUrl: The destination URL to which requests are redirected.
     */
    readonly targetUrl: string | ros.IResolvable;

    /**
     * @Property type: The redirect type. Valid value:
     * *   static.
     */
    readonly type: string | ros.IResolvable;

    /**
     * @Property rule: Rule content, using conditional expressions to match user requests. When adding global configuration, this parameter does not need to be set. There are two usage scenarios:
     *  Match all incoming requests: value set to true
     *  Match specified request: Set the value to a custom expression, for example: (http.host eq \"video.example.com\").
     */
    readonly rule?: string | ros.IResolvable;

    /**
     * @Property ruleEnable: Rule switch. When adding global configuration, this parameter does not need to be set. Value range:
     * on
     * off.
     */
    readonly ruleEnable?: string | ros.IResolvable;

    /**
     * @Property ruleName: Rule name. When adding global configuration, this parameter does not need to be set.
     */
    readonly ruleName?: string | ros.IResolvable;

    /**
     * @Property siteVersion: The version number of the site configuration. For sites that have enabled configuration version management, this parameter can be used to specify the effective version of the configuration site, which defaults to version 0.
     */
    readonly siteVersion?: number | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosRedirectRuleProps`
 *
 * @param properties - the TypeScript properties of a `RosRedirectRuleProps`
 *
 * @returns the result of the validation.
 */
function RosRedirectRulePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('siteId', ros.requiredValidator)(properties.siteId));
    errors.collect(ros.propertyValidator('siteId', ros.validateNumber)(properties.siteId));
    errors.collect(ros.propertyValidator('type', ros.requiredValidator)(properties.type));
    if(properties.type && (typeof properties.type) !== 'object') {
        errors.collect(ros.propertyValidator('type', ros.validateAllowedValues)({
          data: properties.type,
          allowedValues: ["static"],
        }));
    }
    errors.collect(ros.propertyValidator('type', ros.validateString)(properties.type));
    if(properties.ruleEnable && (typeof properties.ruleEnable) !== 'object') {
        errors.collect(ros.propertyValidator('ruleEnable', ros.validateAllowedValues)({
          data: properties.ruleEnable,
          allowedValues: ["on","off"],
        }));
    }
    errors.collect(ros.propertyValidator('ruleEnable', ros.validateString)(properties.ruleEnable));
    errors.collect(ros.propertyValidator('reserveQueryString', ros.requiredValidator)(properties.reserveQueryString));
    if(properties.reserveQueryString && (typeof properties.reserveQueryString) !== 'object') {
        errors.collect(ros.propertyValidator('reserveQueryString', ros.validateAllowedValues)({
          data: properties.reserveQueryString,
          allowedValues: ["on","off"],
        }));
    }
    errors.collect(ros.propertyValidator('reserveQueryString', ros.validateString)(properties.reserveQueryString));
    errors.collect(ros.propertyValidator('rule', ros.validateString)(properties.rule));
    errors.collect(ros.propertyValidator('targetUrl', ros.requiredValidator)(properties.targetUrl));
    errors.collect(ros.propertyValidator('targetUrl', ros.validateString)(properties.targetUrl));
    errors.collect(ros.propertyValidator('siteVersion', ros.validateNumber)(properties.siteVersion));
    errors.collect(ros.propertyValidator('statusCode', ros.requiredValidator)(properties.statusCode));
    if(properties.statusCode && (typeof properties.statusCode) !== 'object') {
        errors.collect(ros.propertyValidator('statusCode', ros.validateAllowedValues)({
          data: properties.statusCode,
          allowedValues: [301,302,303,307,308],
        }));
    }
    errors.collect(ros.propertyValidator('statusCode', ros.validateNumber)(properties.statusCode));
    errors.collect(ros.propertyValidator('ruleName', ros.validateString)(properties.ruleName));
    return errors.wrap('supplied properties not correct for "RosRedirectRuleProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ESA::RedirectRule` resource
 *
 * @param properties - the TypeScript properties of a `RosRedirectRuleProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ESA::RedirectRule` resource.
 */
// @ts-ignore TS6133
function rosRedirectRulePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosRedirectRulePropsValidator(properties).assertSuccess();
    }
    return {
      'ReserveQueryString': ros.stringToRosTemplate(properties.reserveQueryString),
      'SiteId': ros.numberToRosTemplate(properties.siteId),
      'StatusCode': ros.numberToRosTemplate(properties.statusCode),
      'TargetUrl': ros.stringToRosTemplate(properties.targetUrl),
      'Type': ros.stringToRosTemplate(properties.type),
      'Rule': ros.stringToRosTemplate(properties.rule),
      'RuleEnable': ros.stringToRosTemplate(properties.ruleEnable),
      'RuleName': ros.stringToRosTemplate(properties.ruleName),
      'SiteVersion': ros.numberToRosTemplate(properties.siteVersion),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ESA::RedirectRule`.
 * @Note This class does not contain additional functions, so it is recommended to use the `RedirectRule` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-redirectrule
 */
export class RosRedirectRule extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ESA::RedirectRule";

    /**
     * @Attribute ConfigId: Config Id.
     */
    public readonly attrConfigId: ros.IResolvable;

    /**
     * @Attribute ConfigType: The type of the configuration.
     */
    public readonly attrConfigType: ros.IResolvable;

    /**
     * @Attribute ReserveQueryString: Indicates whether the feature of retaining the query string is enabled.
     */
    public readonly attrReserveQueryString: ros.IResolvable;

    /**
     * @Attribute Rule: Rule content, using conditional expressions to match user requests. When adding global configuration, this parameter does not need to be set.
     */
    public readonly attrRule: ros.IResolvable;

    /**
     * @Attribute RuleEnable: Rule switch. When adding global configuration, this parameter does not need to be set.
     */
    public readonly attrRuleEnable: ros.IResolvable;

    /**
     * @Attribute RuleName: Rule name. When adding global configuration, this parameter does not need to be set.
     */
    public readonly attrRuleName: ros.IResolvable;

    /**
     * @Attribute Sequence: Order of rule execution. The smaller the value, the higher the priority for execution.
     */
    public readonly attrSequence: ros.IResolvable;

    /**
     * @Attribute SiteVersion: The version number of the site configuration. For sites that have enabled configuration version management, this parameter can be used to specify the effective version of the configuration site, which defaults to version 0.
     */
    public readonly attrSiteVersion: ros.IResolvable;

    /**
     * @Attribute StatusCode: The response code that you want to use to indicate URL redirection.
     */
    public readonly attrStatusCode: ros.IResolvable;

    /**
     * @Attribute TargetUrl: The destination URL to which requests are redirected.
     */
    public readonly attrTargetUrl: ros.IResolvable;

    /**
     * @Attribute Type: The redirect type.
     */
    public readonly attrType: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property reserveQueryString: Indicates whether the feature of retaining the query string is enabled. Valid values:
     * on
     * off.
     */
    public reserveQueryString: string | ros.IResolvable;

    /**
     * @Property siteId: The website ID.
     */
    public siteId: number | ros.IResolvable;

    /**
     * @Property statusCode: The response code that you want to use to indicate URL redirection. Valid values:
     * *   301
     * *   302
     * *   303
     * *   307
     * *   308.
     */
    public statusCode: number | ros.IResolvable;

    /**
     * @Property targetUrl: The destination URL to which requests are redirected.
     */
    public targetUrl: string | ros.IResolvable;

    /**
     * @Property type: The redirect type. Valid value:
     * *   static.
     */
    public type: string | ros.IResolvable;

    /**
     * @Property rule: Rule content, using conditional expressions to match user requests. When adding global configuration, this parameter does not need to be set. There are two usage scenarios:
     *  Match all incoming requests: value set to true
     *  Match specified request: Set the value to a custom expression, for example: (http.host eq \"video.example.com\").
     */
    public rule: string | ros.IResolvable | undefined;

    /**
     * @Property ruleEnable: Rule switch. When adding global configuration, this parameter does not need to be set. Value range:
     * on
     * off.
     */
    public ruleEnable: string | ros.IResolvable | undefined;

    /**
     * @Property ruleName: Rule name. When adding global configuration, this parameter does not need to be set.
     */
    public ruleName: string | ros.IResolvable | undefined;

    /**
     * @Property siteVersion: The version number of the site configuration. For sites that have enabled configuration version management, this parameter can be used to specify the effective version of the configuration site, which defaults to version 0.
     */
    public siteVersion: number | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosRedirectRuleProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosRedirectRule.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrConfigId = this.getAtt('ConfigId');
        this.attrConfigType = this.getAtt('ConfigType');
        this.attrReserveQueryString = this.getAtt('ReserveQueryString');
        this.attrRule = this.getAtt('Rule');
        this.attrRuleEnable = this.getAtt('RuleEnable');
        this.attrRuleName = this.getAtt('RuleName');
        this.attrSequence = this.getAtt('Sequence');
        this.attrSiteVersion = this.getAtt('SiteVersion');
        this.attrStatusCode = this.getAtt('StatusCode');
        this.attrTargetUrl = this.getAtt('TargetUrl');
        this.attrType = this.getAtt('Type');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.reserveQueryString = props.reserveQueryString;
        this.siteId = props.siteId;
        this.statusCode = props.statusCode;
        this.targetUrl = props.targetUrl;
        this.type = props.type;
        this.rule = props.rule;
        this.ruleEnable = props.ruleEnable;
        this.ruleName = props.ruleName;
        this.siteVersion = props.siteVersion;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            reserveQueryString: this.reserveQueryString,
            siteId: this.siteId,
            statusCode: this.statusCode,
            targetUrl: this.targetUrl,
            type: this.type,
            rule: this.rule,
            ruleEnable: this.ruleEnable,
            ruleName: this.ruleName,
            siteVersion: this.siteVersion,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosRedirectRulePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosScheduledPreloadJob`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-scheduledpreloadjob
 */
export interface RosScheduledPreloadJobProps {

    /**
     * @Property insertWay: The method to submit the URLs to be prefetched.
     */
    readonly insertWay: string | ros.IResolvable;

    /**
     * @Property scheduledPreloadJobName: The name of the scheduled prefetch task.
     */
    readonly scheduledPreloadJobName: string | ros.IResolvable;

    /**
     * @Property siteId: The site ID.
     */
    readonly siteId: number | ros.IResolvable;

    /**
     * @Property ossUrl: Preheat OSS files regularly and fill in the OSS file address. Note: The OSS file contains the URL that you need to warm up.
     */
    readonly ossUrl?: string | ros.IResolvable;

    /**
     * @Property urlList: A list of URLs to be preheated, which is used when uploading a preheated file in the text box mode.
     */
    readonly urlList?: Array<string | ros.IResolvable> | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosScheduledPreloadJobProps`
 *
 * @param properties - the TypeScript properties of a `RosScheduledPreloadJobProps`
 *
 * @returns the result of the validation.
 */
function RosScheduledPreloadJobPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('insertWay', ros.requiredValidator)(properties.insertWay));
    if(properties.insertWay && (typeof properties.insertWay) !== 'object') {
        errors.collect(ros.propertyValidator('insertWay', ros.validateAllowedValues)({
          data: properties.insertWay,
          allowedValues: ["oss","textBox"],
        }));
    }
    errors.collect(ros.propertyValidator('insertWay', ros.validateString)(properties.insertWay));
    errors.collect(ros.propertyValidator('siteId', ros.requiredValidator)(properties.siteId));
    errors.collect(ros.propertyValidator('siteId', ros.validateNumber)(properties.siteId));
    errors.collect(ros.propertyValidator('ossUrl', ros.validateString)(properties.ossUrl));
    errors.collect(ros.propertyValidator('scheduledPreloadJobName', ros.requiredValidator)(properties.scheduledPreloadJobName));
    errors.collect(ros.propertyValidator('scheduledPreloadJobName', ros.validateString)(properties.scheduledPreloadJobName));
    if(properties.urlList && (Array.isArray(properties.urlList) || (typeof properties.urlList) === 'string')) {
        errors.collect(ros.propertyValidator('urlList', ros.validateLength)({
            data: properties.urlList.length,
            min: 1,
            max: 10000,
          }));
    }
    errors.collect(ros.propertyValidator('urlList', ros.listValidator(ros.validateString))(properties.urlList));
    return errors.wrap('supplied properties not correct for "RosScheduledPreloadJobProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ESA::ScheduledPreloadJob` resource
 *
 * @param properties - the TypeScript properties of a `RosScheduledPreloadJobProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ESA::ScheduledPreloadJob` resource.
 */
// @ts-ignore TS6133
function rosScheduledPreloadJobPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosScheduledPreloadJobPropsValidator(properties).assertSuccess();
    }
    return {
      'InsertWay': ros.stringToRosTemplate(properties.insertWay),
      'ScheduledPreloadJobName': ros.stringToRosTemplate(properties.scheduledPreloadJobName),
      'SiteId': ros.numberToRosTemplate(properties.siteId),
      'OssUrl': ros.stringToRosTemplate(properties.ossUrl),
      'UrlList': ros.listMapper(ros.stringToRosTemplate)(properties.urlList),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ESA::ScheduledPreloadJob`.
 * @Note This class does not contain additional functions, so it is recommended to use the `ScheduledPreloadJob` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-scheduledpreloadjob
 */
export class RosScheduledPreloadJob extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ESA::ScheduledPreloadJob";

    /**
     * @Attribute CreateTime: The time when the task was created.
     */
    public readonly attrCreateTime: ros.IResolvable;

    /**
     * @Attribute Domains: The domain names to be prefetched.
     */
    public readonly attrDomains: ros.IResolvable;

    /**
     * @Attribute ErrorInfo: The error message.
     */
    public readonly attrErrorInfo: ros.IResolvable;

    /**
     * @Attribute FailedFileOss: OSS address of failed file.
     */
    public readonly attrFailedFileOss: ros.IResolvable;

    /**
     * @Attribute FileId: The ID of the URL list file, which can be used during downloads.
     */
    public readonly attrFileId: ros.IResolvable;

    /**
     * @Attribute InsertWay: The method to submit the URLs to be prefetched.
     */
    public readonly attrInsertWay: ros.IResolvable;

    /**
     * @Attribute ScheduledPreloadJobId: The ID of the prefetch task.
     */
    public readonly attrScheduledPreloadJobId: ros.IResolvable;

    /**
     * @Attribute ScheduledPreloadJobName: The task name.
     */
    public readonly attrScheduledPreloadJobName: ros.IResolvable;

    /**
     * @Attribute SiteId: The site ID.
     */
    public readonly attrSiteId: ros.IResolvable;

    /**
     * @Attribute TaskSubmitted: The number of submitted prefetch tasks.
     */
    public readonly attrTaskSubmitted: ros.IResolvable;

    /**
     * @Attribute TaskType: The task type. Valid values: refresh and preload.
     */
    public readonly attrTaskType: ros.IResolvable;

    /**
     * @Attribute UrlCount: The total number of URLs.
     */
    public readonly attrUrlCount: ros.IResolvable;

    /**
     * @Attribute UrlSubmitted: The number of submitted URLs.
     */
    public readonly attrUrlSubmitted: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property insertWay: The method to submit the URLs to be prefetched.
     */
    public insertWay: string | ros.IResolvable;

    /**
     * @Property scheduledPreloadJobName: The name of the scheduled prefetch task.
     */
    public scheduledPreloadJobName: string | ros.IResolvable;

    /**
     * @Property siteId: The site ID.
     */
    public siteId: number | ros.IResolvable;

    /**
     * @Property ossUrl: Preheat OSS files regularly and fill in the OSS file address. Note: The OSS file contains the URL that you need to warm up.
     */
    public ossUrl: string | ros.IResolvable | undefined;

    /**
     * @Property urlList: A list of URLs to be preheated, which is used when uploading a preheated file in the text box mode.
     */
    public urlList: Array<string | ros.IResolvable> | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosScheduledPreloadJobProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosScheduledPreloadJob.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrCreateTime = this.getAtt('CreateTime');
        this.attrDomains = this.getAtt('Domains');
        this.attrErrorInfo = this.getAtt('ErrorInfo');
        this.attrFailedFileOss = this.getAtt('FailedFileOss');
        this.attrFileId = this.getAtt('FileId');
        this.attrInsertWay = this.getAtt('InsertWay');
        this.attrScheduledPreloadJobId = this.getAtt('ScheduledPreloadJobId');
        this.attrScheduledPreloadJobName = this.getAtt('ScheduledPreloadJobName');
        this.attrSiteId = this.getAtt('SiteId');
        this.attrTaskSubmitted = this.getAtt('TaskSubmitted');
        this.attrTaskType = this.getAtt('TaskType');
        this.attrUrlCount = this.getAtt('UrlCount');
        this.attrUrlSubmitted = this.getAtt('UrlSubmitted');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.insertWay = props.insertWay;
        this.scheduledPreloadJobName = props.scheduledPreloadJobName;
        this.siteId = props.siteId;
        this.ossUrl = props.ossUrl;
        this.urlList = props.urlList;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            insertWay: this.insertWay,
            scheduledPreloadJobName: this.scheduledPreloadJobName,
            siteId: this.siteId,
            ossUrl: this.ossUrl,
            urlList: this.urlList,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosScheduledPreloadJobPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

/**
 * Properties for defining a `RosSite`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-site
 */
export interface RosSiteProps {

    /**
     * @Property instanceId: The ID of the associated package instance.
     */
    readonly instanceId: string | ros.IResolvable;

    /**
     * @Property siteName: The name of the Site.
     */
    readonly siteName: string | ros.IResolvable;

    /**
     * @Property accessType: The Access Type of the Site.
     */
    readonly accessType?: string | ros.IResolvable;

    /**
     * @Property coverage: Acceleration area.
     */
    readonly coverage?: string | ros.IResolvable;

    /**
     * @Property paymentType: Payment type.
     */
    readonly paymentType?: string | ros.IResolvable;

    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * @Property tags: Tags of the site.
     */
    readonly tags?: RosSite.TagsProperty[];
}

/**
 * Determine whether the given properties match those of a `RosSiteProps`
 *
 * @param properties - the TypeScript properties of a `RosSiteProps`
 *
 * @returns the result of the validation.
 */
function RosSitePropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('siteName', ros.requiredValidator)(properties.siteName));
    errors.collect(ros.propertyValidator('siteName', ros.validateString)(properties.siteName));
    errors.collect(ros.propertyValidator('resourceGroupId', ros.validateString)(properties.resourceGroupId));
    errors.collect(ros.propertyValidator('instanceId', ros.requiredValidator)(properties.instanceId));
    errors.collect(ros.propertyValidator('instanceId', ros.validateString)(properties.instanceId));
    errors.collect(ros.propertyValidator('paymentType', ros.validateString)(properties.paymentType));
    errors.collect(ros.propertyValidator('coverage', ros.validateString)(properties.coverage));
    if(properties.tags && (Array.isArray(properties.tags) || (typeof properties.tags) === 'string')) {
        errors.collect(ros.propertyValidator('tags', ros.validateLength)({
            data: properties.tags.length,
            min: undefined,
            max: 20,
          }));
    }
    errors.collect(ros.propertyValidator('tags', ros.listValidator(RosSite_TagsPropertyValidator))(properties.tags));
    if(properties.accessType && (typeof properties.accessType) !== 'object') {
        errors.collect(ros.propertyValidator('accessType', ros.validateAllowedValues)({
          data: properties.accessType,
          allowedValues: ["CNAME","NS"],
        }));
    }
    errors.collect(ros.propertyValidator('accessType', ros.validateString)(properties.accessType));
    return errors.wrap('supplied properties not correct for "RosSiteProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ESA::Site` resource
 *
 * @param properties - the TypeScript properties of a `RosSiteProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ESA::Site` resource.
 */
// @ts-ignore TS6133
function rosSitePropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosSitePropsValidator(properties).assertSuccess();
    }
    return {
      'InstanceId': ros.stringToRosTemplate(properties.instanceId),
      'SiteName': ros.stringToRosTemplate(properties.siteName),
      'AccessType': ros.stringToRosTemplate(properties.accessType),
      'Coverage': ros.stringToRosTemplate(properties.coverage),
      'PaymentType': ros.stringToRosTemplate(properties.paymentType),
      'ResourceGroupId': ros.stringToRosTemplate(properties.resourceGroupId),
      'Tags': ros.listMapper(rosSiteTagsPropertyToRosTemplate)(properties.tags),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ESA::Site`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Site` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-site
 */
export class RosSite extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ESA::Site";

    /**
     * @Attribute AccessType: Site Access Type.
     */
    public readonly attrAccessType: ros.IResolvable;

    /**
     * @Attribute Coverage: Acceleration area.
     */
    public readonly attrCoverage: ros.IResolvable;

    /**
     * @Attribute CreateTime: Creation time.
     */
    public readonly attrCreateTime: ros.IResolvable;

    /**
     * @Attribute InstanceId: The ID of the associated package instance.
     */
    public readonly attrInstanceId: ros.IResolvable;

    /**
     * @Attribute ModifyTime: Modification time.
     */
    public readonly attrModifyTime: ros.IResolvable;

    /**
     * @Attribute NameServerList: Site Resolution Name Server List.
     */
    public readonly attrNameServerList: ros.IResolvable;

    /**
     * @Attribute ResourceGroupId: The ID of the resource group.
     */
    public readonly attrResourceGroupId: ros.IResolvable;

    /**
     * @Attribute SiteId: The ID of the Site.
     */
    public readonly attrSiteId: ros.IResolvable;

    /**
     * @Attribute SiteName: The name of the Site.
     */
    public readonly attrSiteName: ros.IResolvable;

    /**
     * @Attribute Tags: The tags of the Site.
     */
    public readonly attrTags: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property instanceId: The ID of the associated package instance.
     */
    public instanceId: string | ros.IResolvable;

    /**
     * @Property siteName: The name of the Site.
     */
    public siteName: string | ros.IResolvable;

    /**
     * @Property accessType: The Access Type of the Site.
     */
    public accessType: string | ros.IResolvable | undefined;

    /**
     * @Property coverage: Acceleration area.
     */
    public coverage: string | ros.IResolvable | undefined;

    /**
     * @Property paymentType: Payment type.
     */
    public paymentType: string | ros.IResolvable | undefined;

    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    public resourceGroupId: string | ros.IResolvable | undefined;

    /**
     * @Property tags: Tags of the site.
     */
    public tags: RosSite.TagsProperty[] | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosSiteProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosSite.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrAccessType = this.getAtt('AccessType');
        this.attrCoverage = this.getAtt('Coverage');
        this.attrCreateTime = this.getAtt('CreateTime');
        this.attrInstanceId = this.getAtt('InstanceId');
        this.attrModifyTime = this.getAtt('ModifyTime');
        this.attrNameServerList = this.getAtt('NameServerList');
        this.attrResourceGroupId = this.getAtt('ResourceGroupId');
        this.attrSiteId = this.getAtt('SiteId');
        this.attrSiteName = this.getAtt('SiteName');
        this.attrTags = this.getAtt('Tags');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.instanceId = props.instanceId;
        this.siteName = props.siteName;
        this.accessType = props.accessType;
        this.coverage = props.coverage;
        this.paymentType = props.paymentType;
        this.resourceGroupId = props.resourceGroupId;
        this.tags = props.tags;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            instanceId: this.instanceId,
            siteName: this.siteName,
            accessType: this.accessType,
            coverage: this.coverage,
            paymentType: this.paymentType,
            resourceGroupId: this.resourceGroupId,
            tags: this.tags,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosSitePropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosSite {
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
function RosSite_TagsPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('value', ros.validateString)(properties.value));
    errors.collect(ros.propertyValidator('key', ros.requiredValidator)(properties.key));
    errors.collect(ros.propertyValidator('key', ros.validateString)(properties.key));
    return errors.wrap('supplied properties not correct for "TagsProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ESA::Site.Tags` resource
 *
 * @param properties - the TypeScript properties of a `TagsProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ESA::Site.Tags` resource.
 */
// @ts-ignore TS6133
function rosSiteTagsPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosSite_TagsPropertyValidator(properties).assertSuccess();
    return {
      'Value': ros.stringToRosTemplate(properties.value),
      'Key': ros.stringToRosTemplate(properties.key),
    };
}

/**
 * Properties for defining a `RosSiteDeliveryTask`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-sitedeliverytask
 */
export interface RosSiteDeliveryTaskProps {

    /**
     * @Property businessType: Real-time log type. Valid values:
     * - `dcdn_log_access_l1 (default)`: access log.
     * - `dcdn_log_er`: Edge Routine logs.
     * - `dcdn_log_waf`: firewall logs.
     * - `dcdn_log_ipa`: TCP\/UDP proxy logs.
     */
    readonly businessType: string | ros.IResolvable;

    /**
     * @Property dataCenter: Data Center. Values:
     * - `cn`: Mainland China.
     * - `sg`: Global (excluding Mainland China).
     */
    readonly dataCenter: string | ros.IResolvable;

    /**
     * @Property deliveryType: Delivery Type:
     * - `sls`: Alibaba Cloud Simple Log Service (SLS).
     * - `http`: Http service.
     * - `aws3`: Amazon s3 service.
     * - `oss`: Alibaba Cloud Object Storage Service.
     * - `kafka`: Kafka service.
     * - `aws3cmpt`: Amazon s3 Compatible Service.
     */
    readonly deliveryType: string | ros.IResolvable;

    /**
     * @Property fieldName: The list of delivery fields to be modified, separated by commas.
     */
    readonly fieldName: string | ros.IResolvable;

    /**
     * @Property siteId: The site ID.
     */
    readonly siteId: number | ros.IResolvable;

    /**
     * @Property taskName: The name of the delivery task.
     */
    readonly taskName: string | ros.IResolvable;

    /**
     * @Property discardRate: If the discard rate is not filled, the default value is 0.
     */
    readonly discardRate?: number | ros.IResolvable;

    /**
     * @Property httpDelivery: HTTP delivery configuration parameters.
     */
    readonly httpDelivery?: RosSiteDeliveryTask.HttpDeliveryProperty | ros.IResolvable;

    /**
     * @Property kafkaDelivery: Kafka delivery configuration parameters.
     */
    readonly kafkaDelivery?: RosSiteDeliveryTask.KafkaDeliveryProperty | ros.IResolvable;

    /**
     * @Property ossDelivery: OSS delivery configuration.
     */
    readonly ossDelivery?: RosSiteDeliveryTask.OssDeliveryProperty | ros.IResolvable;

    /**
     * @Property s3Delivery: S3\/S3 compatible delivery configuration parameters.
     */
    readonly s3Delivery?: RosSiteDeliveryTask.S3DeliveryProperty | ros.IResolvable;

    /**
     * @Property slsDelivery: SLS delivery configuration.
     */
    readonly slsDelivery?: RosSiteDeliveryTask.SlsDeliveryProperty | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosSiteDeliveryTaskProps`
 *
 * @param properties - the TypeScript properties of a `RosSiteDeliveryTaskProps`
 *
 * @returns the result of the validation.
 */
function RosSiteDeliveryTaskPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('slsDelivery', RosSiteDeliveryTask_SlsDeliveryPropertyValidator)(properties.slsDelivery));
    errors.collect(ros.propertyValidator('httpDelivery', RosSiteDeliveryTask_HttpDeliveryPropertyValidator)(properties.httpDelivery));
    errors.collect(ros.propertyValidator('siteId', ros.requiredValidator)(properties.siteId));
    errors.collect(ros.propertyValidator('siteId', ros.validateNumber)(properties.siteId));
    errors.collect(ros.propertyValidator('dataCenter', ros.requiredValidator)(properties.dataCenter));
    if(properties.dataCenter && (typeof properties.dataCenter) !== 'object') {
        errors.collect(ros.propertyValidator('dataCenter', ros.validateAllowedValues)({
          data: properties.dataCenter,
          allowedValues: ["cn","sg"],
        }));
    }
    errors.collect(ros.propertyValidator('dataCenter', ros.validateString)(properties.dataCenter));
    errors.collect(ros.propertyValidator('discardRate', ros.validateNumber)(properties.discardRate));
    errors.collect(ros.propertyValidator('s3Delivery', RosSiteDeliveryTask_S3DeliveryPropertyValidator)(properties.s3Delivery));
    errors.collect(ros.propertyValidator('taskName', ros.requiredValidator)(properties.taskName));
    errors.collect(ros.propertyValidator('taskName', ros.validateString)(properties.taskName));
    errors.collect(ros.propertyValidator('businessType', ros.requiredValidator)(properties.businessType));
    if(properties.businessType && (typeof properties.businessType) !== 'object') {
        errors.collect(ros.propertyValidator('businessType', ros.validateAllowedValues)({
          data: properties.businessType,
          allowedValues: ["dcdn_log_access_l1","dcdn_log_er","dcdn_log_waf","dcdn_log_ipa"],
        }));
    }
    errors.collect(ros.propertyValidator('businessType', ros.validateString)(properties.businessType));
    errors.collect(ros.propertyValidator('kafkaDelivery', RosSiteDeliveryTask_KafkaDeliveryPropertyValidator)(properties.kafkaDelivery));
    errors.collect(ros.propertyValidator('fieldName', ros.requiredValidator)(properties.fieldName));
    errors.collect(ros.propertyValidator('fieldName', ros.validateString)(properties.fieldName));
    errors.collect(ros.propertyValidator('ossDelivery', RosSiteDeliveryTask_OssDeliveryPropertyValidator)(properties.ossDelivery));
    errors.collect(ros.propertyValidator('deliveryType', ros.requiredValidator)(properties.deliveryType));
    if(properties.deliveryType && (typeof properties.deliveryType) !== 'object') {
        errors.collect(ros.propertyValidator('deliveryType', ros.validateAllowedValues)({
          data: properties.deliveryType,
          allowedValues: ["sls","http","aws3","oss","kafka","aws3cmpt"],
        }));
    }
    errors.collect(ros.propertyValidator('deliveryType', ros.validateString)(properties.deliveryType));
    return errors.wrap('supplied properties not correct for "RosSiteDeliveryTaskProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ESA::SiteDeliveryTask` resource
 *
 * @param properties - the TypeScript properties of a `RosSiteDeliveryTaskProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ESA::SiteDeliveryTask` resource.
 */
// @ts-ignore TS6133
function rosSiteDeliveryTaskPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosSiteDeliveryTaskPropsValidator(properties).assertSuccess();
    }
    return {
      'BusinessType': ros.stringToRosTemplate(properties.businessType),
      'DataCenter': ros.stringToRosTemplate(properties.dataCenter),
      'DeliveryType': ros.stringToRosTemplate(properties.deliveryType),
      'FieldName': ros.stringToRosTemplate(properties.fieldName),
      'SiteId': ros.numberToRosTemplate(properties.siteId),
      'TaskName': ros.stringToRosTemplate(properties.taskName),
      'DiscardRate': ros.numberToRosTemplate(properties.discardRate),
      'HttpDelivery': rosSiteDeliveryTaskHttpDeliveryPropertyToRosTemplate(properties.httpDelivery),
      'KafkaDelivery': rosSiteDeliveryTaskKafkaDeliveryPropertyToRosTemplate(properties.kafkaDelivery),
      'OssDelivery': rosSiteDeliveryTaskOssDeliveryPropertyToRosTemplate(properties.ossDelivery),
      'S3Delivery': rosSiteDeliveryTaskS3DeliveryPropertyToRosTemplate(properties.s3Delivery),
      'SlsDelivery': rosSiteDeliveryTaskSlsDeliveryPropertyToRosTemplate(properties.slsDelivery),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ESA::SiteDeliveryTask`.
 * @Note This class does not contain additional functions, so it is recommended to use the `SiteDeliveryTask` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-sitedeliverytask
 */
export class RosSiteDeliveryTask extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ESA::SiteDeliveryTask";

    /**
     * @Attribute BusinessType: Real-time log type.
     */
    public readonly attrBusinessType: ros.IResolvable;

    /**
     * @Attribute DataCenter: Data Center.
     */
    public readonly attrDataCenter: ros.IResolvable;

    /**
     * @Attribute DeliveryType: Delivery Type:.
     */
    public readonly attrDeliveryType: ros.IResolvable;

    /**
     * @Attribute DiscardRate: If the discard rate is not filled, the default value is 0.
     */
    public readonly attrDiscardRate: ros.IResolvable;

    /**
     * @Attribute FieldName: The list of delivery fields to be modified, separated by commas.
     */
    public readonly attrFieldName: ros.IResolvable;

    /**
     * @Attribute FilterRules: The filtering rules.
     */
    public readonly attrFilterRules: ros.IResolvable;

    /**
     * @Attribute SinkConfig: The delivery configuration.
     */
    public readonly attrSinkConfig: ros.IResolvable;

    /**
     * @Attribute SiteId: The site ID.
     */
    public readonly attrSiteId: ros.IResolvable;

    /**
     * @Attribute SiteName: The website name.
     */
    public readonly attrSiteName: ros.IResolvable;

    /**
     * @Attribute TaskName: The task name.
     */
    public readonly attrTaskName: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property businessType: Real-time log type. Valid values:
     * - `dcdn_log_access_l1 (default)`: access log.
     * - `dcdn_log_er`: Edge Routine logs.
     * - `dcdn_log_waf`: firewall logs.
     * - `dcdn_log_ipa`: TCP\/UDP proxy logs.
     */
    public businessType: string | ros.IResolvable;

    /**
     * @Property dataCenter: Data Center. Values:
     * - `cn`: Mainland China.
     * - `sg`: Global (excluding Mainland China).
     */
    public dataCenter: string | ros.IResolvable;

    /**
     * @Property deliveryType: Delivery Type:
     * - `sls`: Alibaba Cloud Simple Log Service (SLS).
     * - `http`: Http service.
     * - `aws3`: Amazon s3 service.
     * - `oss`: Alibaba Cloud Object Storage Service.
     * - `kafka`: Kafka service.
     * - `aws3cmpt`: Amazon s3 Compatible Service.
     */
    public deliveryType: string | ros.IResolvable;

    /**
     * @Property fieldName: The list of delivery fields to be modified, separated by commas.
     */
    public fieldName: string | ros.IResolvable;

    /**
     * @Property siteId: The site ID.
     */
    public siteId: number | ros.IResolvable;

    /**
     * @Property taskName: The name of the delivery task.
     */
    public taskName: string | ros.IResolvable;

    /**
     * @Property discardRate: If the discard rate is not filled, the default value is 0.
     */
    public discardRate: number | ros.IResolvable | undefined;

    /**
     * @Property httpDelivery: HTTP delivery configuration parameters.
     */
    public httpDelivery: RosSiteDeliveryTask.HttpDeliveryProperty | ros.IResolvable | undefined;

    /**
     * @Property kafkaDelivery: Kafka delivery configuration parameters.
     */
    public kafkaDelivery: RosSiteDeliveryTask.KafkaDeliveryProperty | ros.IResolvable | undefined;

    /**
     * @Property ossDelivery: OSS delivery configuration.
     */
    public ossDelivery: RosSiteDeliveryTask.OssDeliveryProperty | ros.IResolvable | undefined;

    /**
     * @Property s3Delivery: S3\/S3 compatible delivery configuration parameters.
     */
    public s3Delivery: RosSiteDeliveryTask.S3DeliveryProperty | ros.IResolvable | undefined;

    /**
     * @Property slsDelivery: SLS delivery configuration.
     */
    public slsDelivery: RosSiteDeliveryTask.SlsDeliveryProperty | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosSiteDeliveryTaskProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosSiteDeliveryTask.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrBusinessType = this.getAtt('BusinessType');
        this.attrDataCenter = this.getAtt('DataCenter');
        this.attrDeliveryType = this.getAtt('DeliveryType');
        this.attrDiscardRate = this.getAtt('DiscardRate');
        this.attrFieldName = this.getAtt('FieldName');
        this.attrFilterRules = this.getAtt('FilterRules');
        this.attrSinkConfig = this.getAtt('SinkConfig');
        this.attrSiteId = this.getAtt('SiteId');
        this.attrSiteName = this.getAtt('SiteName');
        this.attrTaskName = this.getAtt('TaskName');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.businessType = props.businessType;
        this.dataCenter = props.dataCenter;
        this.deliveryType = props.deliveryType;
        this.fieldName = props.fieldName;
        this.siteId = props.siteId;
        this.taskName = props.taskName;
        this.discardRate = props.discardRate;
        this.httpDelivery = props.httpDelivery;
        this.kafkaDelivery = props.kafkaDelivery;
        this.ossDelivery = props.ossDelivery;
        this.s3Delivery = props.s3Delivery;
        this.slsDelivery = props.slsDelivery;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            businessType: this.businessType,
            dataCenter: this.dataCenter,
            deliveryType: this.deliveryType,
            fieldName: this.fieldName,
            siteId: this.siteId,
            taskName: this.taskName,
            discardRate: this.discardRate,
            httpDelivery: this.httpDelivery,
            kafkaDelivery: this.kafkaDelivery,
            ossDelivery: this.ossDelivery,
            s3Delivery: this.s3Delivery,
            slsDelivery: this.slsDelivery,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosSiteDeliveryTaskPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosSiteDeliveryTask {
    /**
     * @stability external
     */
    export interface HeaderParamProperty {
        /**
         * @Property staticValue: The static variable.
         */
        readonly staticValue?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `HeaderParamProperty`
 *
 * @param properties - the TypeScript properties of a `HeaderParamProperty`
 *
 * @returns the result of the validation.
 */
function RosSiteDeliveryTask_HeaderParamPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('staticValue', ros.validateString)(properties.staticValue));
    return errors.wrap('supplied properties not correct for "HeaderParamProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ESA::SiteDeliveryTask.HeaderParam` resource
 *
 * @param properties - the TypeScript properties of a `HeaderParamProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ESA::SiteDeliveryTask.HeaderParam` resource.
 */
// @ts-ignore TS6133
function rosSiteDeliveryTaskHeaderParamPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosSiteDeliveryTask_HeaderParamPropertyValidator(properties).assertSuccess();
    return {
      'StaticValue': ros.stringToRosTemplate(properties.staticValue),
    };
}

export namespace RosSiteDeliveryTask {
    /**
     * @stability external
     */
    export interface HttpDeliveryProperty {
        /**
         * @Property compress: The compression method. By default, data is not compressed.
         */
        readonly compress?: string | ros.IResolvable;
        /**
         * @Property logBodySuffix: The suffix of the log delivery package.
         */
        readonly logBodySuffix?: string | ros.IResolvable;
        /**
         * @Property headerParam: The custom headers.
         */
        readonly headerParam?: RosSiteDeliveryTask.HeaderParamProperty | ros.IResolvable;
        /**
         * @Property standardAuthParam: The authentication configurations.
         */
        readonly standardAuthParam?: RosSiteDeliveryTask.StandardAuthParamProperty | ros.IResolvable;
        /**
         * @Property standardAuthOn: Specifies whether to use server authentication.
         */
        readonly standardAuthOn?: boolean | ros.IResolvable;
        /**
         * @Property logBodyPrefix: The prefix of the log delivery package.
         */
        readonly logBodyPrefix?: string | ros.IResolvable;
        /**
         * @Property queryParam: The custom query parameters.
         */
        readonly queryParam?: RosSiteDeliveryTask.QueryParamProperty | ros.IResolvable;
        /**
         * @Property destUrl: The address of the HTTP server.
         */
        readonly destUrl: string | ros.IResolvable;
        /**
         * @Property maxBatchSize: The maximum number of entries for each delivery.Notice The field type is Long, and the precision may be lost during serialization\/deserialization. Please note that the value must not be greater than 9007199254740991.
         */
        readonly maxBatchSize?: number | ros.IResolvable;
        /**
         * @Property transformTimeout: The timeout period. Unit: seconds.Notice The field type is Long, and the precision may be lost during serialization\/deserialization. Please note that the value must not be greater than 9007199254740991.
         */
        readonly transformTimeout?: number | ros.IResolvable;
        /**
         * @Property maxRetry: The maximum number of retries.Notice The field type is Long, and the precision may be lost during serialization\/deserialization. Please note that the value must not be greater than 9007199254740991.
         */
        readonly maxRetry?: number | ros.IResolvable;
        /**
         * @Property maxBatchMb: The maximum size of data for each delivery. Unit: MB.Notice The field type is Long, and the precision may be lost during serialization\/deserialization. Please note that the value must not be greater than 9007199254740991.
         */
        readonly maxBatchMb?: number | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `HttpDeliveryProperty`
 *
 * @param properties - the TypeScript properties of a `HttpDeliveryProperty`
 *
 * @returns the result of the validation.
 */
function RosSiteDeliveryTask_HttpDeliveryPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    if(properties.compress && (typeof properties.compress) !== 'object') {
        errors.collect(ros.propertyValidator('compress', ros.validateAllowedValues)({
          data: properties.compress,
          allowedValues: ["gzip","zlib","no","snappy"],
        }));
    }
    errors.collect(ros.propertyValidator('compress', ros.validateString)(properties.compress));
    errors.collect(ros.propertyValidator('logBodySuffix', ros.validateString)(properties.logBodySuffix));
    errors.collect(ros.propertyValidator('headerParam', RosSiteDeliveryTask_HeaderParamPropertyValidator)(properties.headerParam));
    errors.collect(ros.propertyValidator('standardAuthParam', RosSiteDeliveryTask_StandardAuthParamPropertyValidator)(properties.standardAuthParam));
    errors.collect(ros.propertyValidator('standardAuthOn', ros.validateBoolean)(properties.standardAuthOn));
    errors.collect(ros.propertyValidator('logBodyPrefix', ros.validateString)(properties.logBodyPrefix));
    errors.collect(ros.propertyValidator('queryParam', RosSiteDeliveryTask_QueryParamPropertyValidator)(properties.queryParam));
    errors.collect(ros.propertyValidator('destUrl', ros.requiredValidator)(properties.destUrl));
    errors.collect(ros.propertyValidator('destUrl', ros.validateString)(properties.destUrl));
    errors.collect(ros.propertyValidator('maxBatchSize', ros.validateNumber)(properties.maxBatchSize));
    errors.collect(ros.propertyValidator('transformTimeout', ros.validateNumber)(properties.transformTimeout));
    errors.collect(ros.propertyValidator('maxRetry', ros.validateNumber)(properties.maxRetry));
    errors.collect(ros.propertyValidator('maxBatchMb', ros.validateNumber)(properties.maxBatchMb));
    return errors.wrap('supplied properties not correct for "HttpDeliveryProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ESA::SiteDeliveryTask.HttpDelivery` resource
 *
 * @param properties - the TypeScript properties of a `HttpDeliveryProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ESA::SiteDeliveryTask.HttpDelivery` resource.
 */
// @ts-ignore TS6133
function rosSiteDeliveryTaskHttpDeliveryPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosSiteDeliveryTask_HttpDeliveryPropertyValidator(properties).assertSuccess();
    return {
      'Compress': ros.stringToRosTemplate(properties.compress),
      'LogBodySuffix': ros.stringToRosTemplate(properties.logBodySuffix),
      'HeaderParam': rosSiteDeliveryTaskHeaderParamPropertyToRosTemplate(properties.headerParam),
      'StandardAuthParam': rosSiteDeliveryTaskStandardAuthParamPropertyToRosTemplate(properties.standardAuthParam),
      'StandardAuthOn': ros.booleanToRosTemplate(properties.standardAuthOn),
      'LogBodyPrefix': ros.stringToRosTemplate(properties.logBodyPrefix),
      'QueryParam': rosSiteDeliveryTaskQueryParamPropertyToRosTemplate(properties.queryParam),
      'DestUrl': ros.stringToRosTemplate(properties.destUrl),
      'MaxBatchSize': ros.numberToRosTemplate(properties.maxBatchSize),
      'TransformTimeout': ros.numberToRosTemplate(properties.transformTimeout),
      'MaxRetry': ros.numberToRosTemplate(properties.maxRetry),
      'MaxBatchMB': ros.numberToRosTemplate(properties.maxBatchMb),
    };
}

export namespace RosSiteDeliveryTask {
    /**
     * @stability external
     */
    export interface KafkaDeliveryProperty {
        /**
         * @Property compress: The compression method. By default, data is not compressed.
         */
        readonly compress?: string | ros.IResolvable;
        /**
         * @Property userName: The username.
         */
        readonly userName?: string | ros.IResolvable;
        /**
         * @Property machanismType: The encryption method.
         */
        readonly machanismType?: string | ros.IResolvable;
        /**
         * @Property brokers: The brokers.
         */
        readonly brokers?: Array<string | ros.IResolvable> | ros.IResolvable;
        /**
         * @Property balancer: The load balancing method.
         */
        readonly balancer?: string | ros.IResolvable;
        /**
         * @Property topic: The topic.
         */
        readonly topic?: string | ros.IResolvable;
        /**
         * @Property userAuth: Specifies whether to enable authentication.
         */
        readonly userAuth?: boolean | ros.IResolvable;
        /**
         * @Property password: The password.
         */
        readonly password?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `KafkaDeliveryProperty`
 *
 * @param properties - the TypeScript properties of a `KafkaDeliveryProperty`
 *
 * @returns the result of the validation.
 */
function RosSiteDeliveryTask_KafkaDeliveryPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('compress', ros.validateString)(properties.compress));
    errors.collect(ros.propertyValidator('userName', ros.validateString)(properties.userName));
    errors.collect(ros.propertyValidator('machanismType', ros.validateString)(properties.machanismType));
    errors.collect(ros.propertyValidator('brokers', ros.listValidator(ros.validateString))(properties.brokers));
    errors.collect(ros.propertyValidator('balancer', ros.validateString)(properties.balancer));
    errors.collect(ros.propertyValidator('topic', ros.validateString)(properties.topic));
    errors.collect(ros.propertyValidator('userAuth', ros.validateBoolean)(properties.userAuth));
    errors.collect(ros.propertyValidator('password', ros.validateString)(properties.password));
    return errors.wrap('supplied properties not correct for "KafkaDeliveryProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ESA::SiteDeliveryTask.KafkaDelivery` resource
 *
 * @param properties - the TypeScript properties of a `KafkaDeliveryProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ESA::SiteDeliveryTask.KafkaDelivery` resource.
 */
// @ts-ignore TS6133
function rosSiteDeliveryTaskKafkaDeliveryPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosSiteDeliveryTask_KafkaDeliveryPropertyValidator(properties).assertSuccess();
    return {
      'Compress': ros.stringToRosTemplate(properties.compress),
      'UserName': ros.stringToRosTemplate(properties.userName),
      'MachanismType': ros.stringToRosTemplate(properties.machanismType),
      'Brokers': ros.listMapper(ros.stringToRosTemplate)(properties.brokers),
      'Balancer': ros.stringToRosTemplate(properties.balancer),
      'Topic': ros.stringToRosTemplate(properties.topic),
      'UserAuth': ros.booleanToRosTemplate(properties.userAuth),
      'Password': ros.stringToRosTemplate(properties.password),
    };
}

export namespace RosSiteDeliveryTask {
    /**
     * @stability external
     */
    export interface OssDeliveryProperty {
        /**
         * @Property bucketName: The name of the OSS bucket.
         */
        readonly bucketName?: string | ros.IResolvable;
        /**
         * @Property region: The region in which the bucket is located.
         */
        readonly region?: string | ros.IResolvable;
        /**
         * @Property prefixPath: The prefix of the path in which you want to store logs.
         */
        readonly prefixPath?: string | ros.IResolvable;
        /**
         * @Property aliuid: The account ID.
         */
        readonly aliuid?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `OssDeliveryProperty`
 *
 * @param properties - the TypeScript properties of a `OssDeliveryProperty`
 *
 * @returns the result of the validation.
 */
function RosSiteDeliveryTask_OssDeliveryPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('bucketName', ros.validateString)(properties.bucketName));
    errors.collect(ros.propertyValidator('region', ros.validateString)(properties.region));
    errors.collect(ros.propertyValidator('prefixPath', ros.validateString)(properties.prefixPath));
    errors.collect(ros.propertyValidator('aliuid', ros.validateString)(properties.aliuid));
    return errors.wrap('supplied properties not correct for "OssDeliveryProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ESA::SiteDeliveryTask.OssDelivery` resource
 *
 * @param properties - the TypeScript properties of a `OssDeliveryProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ESA::SiteDeliveryTask.OssDelivery` resource.
 */
// @ts-ignore TS6133
function rosSiteDeliveryTaskOssDeliveryPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosSiteDeliveryTask_OssDeliveryPropertyValidator(properties).assertSuccess();
    return {
      'BucketName': ros.stringToRosTemplate(properties.bucketName),
      'Region': ros.stringToRosTemplate(properties.region),
      'PrefixPath': ros.stringToRosTemplate(properties.prefixPath),
      'Aliuid': ros.stringToRosTemplate(properties.aliuid),
    };
}

export namespace RosSiteDeliveryTask {
    /**
     * @stability external
     */
    export interface QueryParamProperty {
        /**
         * @Property staticValue: The static variable.
         */
        readonly staticValue?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `QueryParamProperty`
 *
 * @param properties - the TypeScript properties of a `QueryParamProperty`
 *
 * @returns the result of the validation.
 */
function RosSiteDeliveryTask_QueryParamPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('staticValue', ros.validateString)(properties.staticValue));
    return errors.wrap('supplied properties not correct for "QueryParamProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ESA::SiteDeliveryTask.QueryParam` resource
 *
 * @param properties - the TypeScript properties of a `QueryParamProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ESA::SiteDeliveryTask.QueryParam` resource.
 */
// @ts-ignore TS6133
function rosSiteDeliveryTaskQueryParamPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosSiteDeliveryTask_QueryParamPropertyValidator(properties).assertSuccess();
    return {
      'StaticValue': ros.stringToRosTemplate(properties.staticValue),
    };
}

export namespace RosSiteDeliveryTask {
    /**
     * @stability external
     */
    export interface S3DeliveryProperty {
        /**
         * @Property secretKey: The secret access key of your Amazon S3 account.
         */
        readonly secretKey?: string | ros.IResolvable;
        /**
         * @Property endpoint: The endpoint. This parameter is required when the S3Cmpt parameter is set to true.
         */
        readonly endpoint?: string | ros.IResolvable;
        /**
         * @Property vertifyType: Authentication Type.
         */
        readonly vertifyType?: string | ros.IResolvable;
        /**
         * @Property region: The region ID of the service.
         */
        readonly region?: string | ros.IResolvable;
        /**
         * @Property serverSideEncryption: Server-side encryption.
         */
        readonly serverSideEncryption?: boolean | ros.IResolvable;
        /**
         * @Property bucketPath: The directory in the bucket.
         */
        readonly bucketPath?: string | ros.IResolvable;
        /**
         * @Property prefixPath: The prefix of the path in which you want to store logs.
         */
        readonly prefixPath?: string | ros.IResolvable;
        /**
         * @Property accessKey: The access key ID of your Amazon S3 account.
         */
        readonly accessKey?: string | ros.IResolvable;
        /**
         * @Property s3Cmpt: Specifies whether the service is compatible with Amazon S3.
         */
        readonly s3Cmpt?: boolean | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `S3DeliveryProperty`
 *
 * @param properties - the TypeScript properties of a `S3DeliveryProperty`
 *
 * @returns the result of the validation.
 */
function RosSiteDeliveryTask_S3DeliveryPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('secretKey', ros.validateString)(properties.secretKey));
    errors.collect(ros.propertyValidator('endpoint', ros.validateString)(properties.endpoint));
    errors.collect(ros.propertyValidator('vertifyType', ros.validateString)(properties.vertifyType));
    errors.collect(ros.propertyValidator('region', ros.validateString)(properties.region));
    errors.collect(ros.propertyValidator('serverSideEncryption', ros.validateBoolean)(properties.serverSideEncryption));
    errors.collect(ros.propertyValidator('bucketPath', ros.validateString)(properties.bucketPath));
    errors.collect(ros.propertyValidator('prefixPath', ros.validateString)(properties.prefixPath));
    errors.collect(ros.propertyValidator('accessKey', ros.validateString)(properties.accessKey));
    errors.collect(ros.propertyValidator('s3Cmpt', ros.validateBoolean)(properties.s3Cmpt));
    return errors.wrap('supplied properties not correct for "S3DeliveryProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ESA::SiteDeliveryTask.S3Delivery` resource
 *
 * @param properties - the TypeScript properties of a `S3DeliveryProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ESA::SiteDeliveryTask.S3Delivery` resource.
 */
// @ts-ignore TS6133
function rosSiteDeliveryTaskS3DeliveryPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosSiteDeliveryTask_S3DeliveryPropertyValidator(properties).assertSuccess();
    return {
      'SecretKey': ros.stringToRosTemplate(properties.secretKey),
      'Endpoint': ros.stringToRosTemplate(properties.endpoint),
      'VertifyType': ros.stringToRosTemplate(properties.vertifyType),
      'Region': ros.stringToRosTemplate(properties.region),
      'ServerSideEncryption': ros.booleanToRosTemplate(properties.serverSideEncryption),
      'BucketPath': ros.stringToRosTemplate(properties.bucketPath),
      'PrefixPath': ros.stringToRosTemplate(properties.prefixPath),
      'AccessKey': ros.stringToRosTemplate(properties.accessKey),
      'S3Cmpt': ros.booleanToRosTemplate(properties.s3Cmpt),
    };
}

export namespace RosSiteDeliveryTask {
    /**
     * @stability external
     */
    export interface SlsDeliveryProperty {
        /**
         * @Property slsProject: The name of the SLS project.
         */
        readonly slsProject?: string | ros.IResolvable;
        /**
         * @Property slsRegion: The region in which the SLS project resides.
         */
        readonly slsRegion?: string | ros.IResolvable;
        /**
         * @Property slsLogStore: The name of the Logstore.
         */
        readonly slsLogStore?: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `SlsDeliveryProperty`
 *
 * @param properties - the TypeScript properties of a `SlsDeliveryProperty`
 *
 * @returns the result of the validation.
 */
function RosSiteDeliveryTask_SlsDeliveryPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('slsProject', ros.validateString)(properties.slsProject));
    errors.collect(ros.propertyValidator('slsRegion', ros.validateString)(properties.slsRegion));
    errors.collect(ros.propertyValidator('slsLogStore', ros.validateString)(properties.slsLogStore));
    return errors.wrap('supplied properties not correct for "SlsDeliveryProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ESA::SiteDeliveryTask.SlsDelivery` resource
 *
 * @param properties - the TypeScript properties of a `SlsDeliveryProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ESA::SiteDeliveryTask.SlsDelivery` resource.
 */
// @ts-ignore TS6133
function rosSiteDeliveryTaskSlsDeliveryPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosSiteDeliveryTask_SlsDeliveryPropertyValidator(properties).assertSuccess();
    return {
      'SLSProject': ros.stringToRosTemplate(properties.slsProject),
      'SLSRegion': ros.stringToRosTemplate(properties.slsRegion),
      'SLSLogStore': ros.stringToRosTemplate(properties.slsLogStore),
    };
}

export namespace RosSiteDeliveryTask {
    /**
     * @stability external
     */
    export interface StandardAuthParamProperty {
        /**
         * @Property privateKey: The private key.
         */
        readonly privateKey?: string | ros.IResolvable;
        /**
         * @Property urlPath: The URI path for server authentication.
         */
        readonly urlPath?: string | ros.IResolvable;
        /**
         * @Property expiredTime: The validity period of the signature.Note The value must be greater than 0. We recommend that you specify a value that is greater than 300.
         */
        readonly expiredTime?: number | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `StandardAuthParamProperty`
 *
 * @param properties - the TypeScript properties of a `StandardAuthParamProperty`
 *
 * @returns the result of the validation.
 */
function RosSiteDeliveryTask_StandardAuthParamPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('privateKey', ros.validateString)(properties.privateKey));
    errors.collect(ros.propertyValidator('urlPath', ros.validateString)(properties.urlPath));
    errors.collect(ros.propertyValidator('expiredTime', ros.validateNumber)(properties.expiredTime));
    return errors.wrap('supplied properties not correct for "StandardAuthParamProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ESA::SiteDeliveryTask.StandardAuthParam` resource
 *
 * @param properties - the TypeScript properties of a `StandardAuthParamProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ESA::SiteDeliveryTask.StandardAuthParam` resource.
 */
// @ts-ignore TS6133
function rosSiteDeliveryTaskStandardAuthParamPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosSiteDeliveryTask_StandardAuthParamPropertyValidator(properties).assertSuccess();
    return {
      'PrivateKey': ros.stringToRosTemplate(properties.privateKey),
      'UrlPath': ros.stringToRosTemplate(properties.urlPath),
      'ExpiredTime': ros.numberToRosTemplate(properties.expiredTime),
    };
}

/**
 * Properties for defining a `RosWaitingRoom`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-waitingroom
 */
export interface RosWaitingRoomProps {

    /**
     * @Property cookieName: The name of the custom cookie.
     */
    readonly cookieName: string | ros.IResolvable;

    /**
     * @Property hostNameAndPath: The hostname and path.
     */
    readonly hostNameAndPath: Array<RosWaitingRoom.HostNameAndPathProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property newUsersPerMinute: The maximum number of new users per minute.
     */
    readonly newUsersPerMinute: number | ros.IResolvable;

    /**
     * @Property queuingMethod: The queuing method. Value:
     * - `random`: Users gain access to the origin randomly, regardless of the arrival time.
     * - `fifo`: Users gain access to the origin in order of arrival.
     * - `Passthrough`: Users pass through the waiting room and go straight to the origin.
     * - `Reject-all`: Users are blocked from reaching the origin.
     */
    readonly queuingMethod: string | ros.IResolvable;

    /**
     * @Property queuingStatusCode: Waiting room status code. Value:
     * - `200`
     * - `202`
     * - `429`.
     */
    readonly queuingStatusCode: number | ros.IResolvable;

    /**
     * @Property sessionDuration: The maximum duration for which a session remains valid after a user leaves the origin. Unit: minutes.
     */
    readonly sessionDuration: number | ros.IResolvable;

    /**
     * @Property siteId: The site ID.
     */
    readonly siteId: number | ros.IResolvable;

    /**
     * @Property status: Waiting room enabled status. Value:
     * - 'on': Enable waiting room
     * - 'off': Disabled waiting room
     */
    readonly status: string | ros.IResolvable;

    /**
     * @Property totalActiveUsers: The maximum number of active users.
     */
    readonly totalActiveUsers: string | ros.IResolvable;

    /**
     * @Property waitingRoomName: The name of the waiting room.
     */
    readonly waitingRoomName: string | ros.IResolvable;

    /**
     * @Property waitingRoomType: The type of the waiting room, support:
     * - `default`: Indicates the default type.
     * - `custom`: indicates a custom type.
     */
    readonly waitingRoomType: string | ros.IResolvable;

    /**
     * @Property customPageHtml: User-defined waiting room page content, when the waiting room type is custom type, you need to enter. The incoming content needs to be base64 encoded.
     */
    readonly customPageHtml?: string | ros.IResolvable;

    /**
     * @Property description: Waiting room description.
     */
    readonly description?: string | ros.IResolvable;

    /**
     * @Property disableSessionRenewalEnable: Specifies whether to disable session renewal. Value:
     * - `on`: open.
     * - `off`: closed.
     */
    readonly disableSessionRenewalEnable?: string | ros.IResolvable;

    /**
     * @Property jsonResponseEnable: The JSON response. If the accept request header contains "application\/json", JSON data is returned. Value:
     * - `on`: open.
     * - `off`: closed.
     */
    readonly jsonResponseEnable?: string | ros.IResolvable;

    /**
     * @Property language: The language of the waiting room page. When the waiting room type is the default type, it needs to be passed in. The following types are supported:
     * - `enus`: English.
     * - `zhcn`: Simplified Chinese.
     * - `zhhk`: Traditional Chinese.
     */
    readonly language?: string | ros.IResolvable;

    /**
     * @Property queueAllEnable: Specifies whether to queue all requests. Value:
     * - `on`: open.
     * - `off`: closed.
     */
    readonly queueAllEnable?: string | ros.IResolvable;
}

/**
 * Determine whether the given properties match those of a `RosWaitingRoomProps`
 *
 * @param properties - the TypeScript properties of a `RosWaitingRoomProps`
 *
 * @returns the result of the validation.
 */
function RosWaitingRoomPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('status', ros.requiredValidator)(properties.status));
    if(properties.status && (typeof properties.status) !== 'object') {
        errors.collect(ros.propertyValidator('status', ros.validateAllowedValues)({
          data: properties.status,
          allowedValues: ["on","off"],
        }));
    }
    errors.collect(ros.propertyValidator('status', ros.validateString)(properties.status));
    errors.collect(ros.propertyValidator('hostNameAndPath', ros.requiredValidator)(properties.hostNameAndPath));
    errors.collect(ros.propertyValidator('hostNameAndPath', ros.listValidator(RosWaitingRoom_HostNameAndPathPropertyValidator))(properties.hostNameAndPath));
    if(properties.jsonResponseEnable && (typeof properties.jsonResponseEnable) !== 'object') {
        errors.collect(ros.propertyValidator('jsonResponseEnable', ros.validateAllowedValues)({
          data: properties.jsonResponseEnable,
          allowedValues: ["on","off"],
        }));
    }
    errors.collect(ros.propertyValidator('jsonResponseEnable', ros.validateString)(properties.jsonResponseEnable));
    errors.collect(ros.propertyValidator('siteId', ros.requiredValidator)(properties.siteId));
    errors.collect(ros.propertyValidator('siteId', ros.validateNumber)(properties.siteId));
    errors.collect(ros.propertyValidator('description', ros.validateString)(properties.description));
    errors.collect(ros.propertyValidator('waitingRoomType', ros.requiredValidator)(properties.waitingRoomType));
    if(properties.waitingRoomType && (typeof properties.waitingRoomType) !== 'object') {
        errors.collect(ros.propertyValidator('waitingRoomType', ros.validateAllowedValues)({
          data: properties.waitingRoomType,
          allowedValues: ["default","custom"],
        }));
    }
    errors.collect(ros.propertyValidator('waitingRoomType', ros.validateString)(properties.waitingRoomType));
    if(properties.disableSessionRenewalEnable && (typeof properties.disableSessionRenewalEnable) !== 'object') {
        errors.collect(ros.propertyValidator('disableSessionRenewalEnable', ros.validateAllowedValues)({
          data: properties.disableSessionRenewalEnable,
          allowedValues: ["on","off"],
        }));
    }
    errors.collect(ros.propertyValidator('disableSessionRenewalEnable', ros.validateString)(properties.disableSessionRenewalEnable));
    errors.collect(ros.propertyValidator('cookieName', ros.requiredValidator)(properties.cookieName));
    errors.collect(ros.propertyValidator('cookieName', ros.validateString)(properties.cookieName));
    errors.collect(ros.propertyValidator('customPageHtml', ros.validateString)(properties.customPageHtml));
    if(properties.queueAllEnable && (typeof properties.queueAllEnable) !== 'object') {
        errors.collect(ros.propertyValidator('queueAllEnable', ros.validateAllowedValues)({
          data: properties.queueAllEnable,
          allowedValues: ["on","off"],
        }));
    }
    errors.collect(ros.propertyValidator('queueAllEnable', ros.validateString)(properties.queueAllEnable));
    errors.collect(ros.propertyValidator('waitingRoomName', ros.requiredValidator)(properties.waitingRoomName));
    errors.collect(ros.propertyValidator('waitingRoomName', ros.validateString)(properties.waitingRoomName));
    errors.collect(ros.propertyValidator('queuingStatusCode', ros.requiredValidator)(properties.queuingStatusCode));
    if(properties.queuingStatusCode && (typeof properties.queuingStatusCode) !== 'object') {
        errors.collect(ros.propertyValidator('queuingStatusCode', ros.validateAllowedValues)({
          data: properties.queuingStatusCode,
          allowedValues: [200,202,429],
        }));
    }
    errors.collect(ros.propertyValidator('queuingStatusCode', ros.validateNumber)(properties.queuingStatusCode));
    errors.collect(ros.propertyValidator('newUsersPerMinute', ros.requiredValidator)(properties.newUsersPerMinute));
    if(properties.newUsersPerMinute && (typeof properties.newUsersPerMinute) !== 'object') {
        errors.collect(ros.propertyValidator('newUsersPerMinute', ros.validateRange)({
            data: properties.newUsersPerMinute,
            min: 200,
            max: undefined,
          }));
    }
    errors.collect(ros.propertyValidator('newUsersPerMinute', ros.validateNumber)(properties.newUsersPerMinute));
    errors.collect(ros.propertyValidator('sessionDuration', ros.requiredValidator)(properties.sessionDuration));
    if(properties.sessionDuration && (typeof properties.sessionDuration) !== 'object') {
        errors.collect(ros.propertyValidator('sessionDuration', ros.validateRange)({
            data: properties.sessionDuration,
            min: 1,
            max: undefined,
          }));
    }
    errors.collect(ros.propertyValidator('sessionDuration', ros.validateNumber)(properties.sessionDuration));
    if(properties.language && (typeof properties.language) !== 'object') {
        errors.collect(ros.propertyValidator('language', ros.validateAllowedValues)({
          data: properties.language,
          allowedValues: ["enus","zhcn","zhhk"],
        }));
    }
    errors.collect(ros.propertyValidator('language', ros.validateString)(properties.language));
    errors.collect(ros.propertyValidator('totalActiveUsers', ros.requiredValidator)(properties.totalActiveUsers));
    errors.collect(ros.propertyValidator('totalActiveUsers', ros.validateString)(properties.totalActiveUsers));
    errors.collect(ros.propertyValidator('queuingMethod', ros.requiredValidator)(properties.queuingMethod));
    if(properties.queuingMethod && (typeof properties.queuingMethod) !== 'object') {
        errors.collect(ros.propertyValidator('queuingMethod', ros.validateAllowedValues)({
          data: properties.queuingMethod,
          allowedValues: ["random","fifo","Passthrough","Reject-all"],
        }));
    }
    errors.collect(ros.propertyValidator('queuingMethod', ros.validateString)(properties.queuingMethod));
    return errors.wrap('supplied properties not correct for "RosWaitingRoomProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ESA::WaitingRoom` resource
 *
 * @param properties - the TypeScript properties of a `RosWaitingRoomProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ESA::WaitingRoom` resource.
 */
// @ts-ignore TS6133
function rosWaitingRoomPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosWaitingRoomPropsValidator(properties).assertSuccess();
    }
    return {
      'CookieName': ros.stringToRosTemplate(properties.cookieName),
      'HostNameAndPath': ros.listMapper(rosWaitingRoomHostNameAndPathPropertyToRosTemplate)(properties.hostNameAndPath),
      'NewUsersPerMinute': ros.numberToRosTemplate(properties.newUsersPerMinute),
      'QueuingMethod': ros.stringToRosTemplate(properties.queuingMethod),
      'QueuingStatusCode': ros.numberToRosTemplate(properties.queuingStatusCode),
      'SessionDuration': ros.numberToRosTemplate(properties.sessionDuration),
      'SiteId': ros.numberToRosTemplate(properties.siteId),
      'Status': ros.stringToRosTemplate(properties.status),
      'TotalActiveUsers': ros.stringToRosTemplate(properties.totalActiveUsers),
      'WaitingRoomName': ros.stringToRosTemplate(properties.waitingRoomName),
      'WaitingRoomType': ros.stringToRosTemplate(properties.waitingRoomType),
      'CustomPageHtml': ros.stringToRosTemplate(properties.customPageHtml),
      'Description': ros.stringToRosTemplate(properties.description),
      'DisableSessionRenewalEnable': ros.stringToRosTemplate(properties.disableSessionRenewalEnable),
      'JsonResponseEnable': ros.stringToRosTemplate(properties.jsonResponseEnable),
      'Language': ros.stringToRosTemplate(properties.language),
      'QueueAllEnable': ros.stringToRosTemplate(properties.queueAllEnable),
    };
}

/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ESA::WaitingRoom`.
 * @Note This class does not contain additional functions, so it is recommended to use the `WaitingRoom` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-waitingroom
 */
export class RosWaitingRoom extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ESA::WaitingRoom";

    /**
     * @Attribute CookieName: Custom Cookie name.
     */
    public readonly attrCookieName: ros.IResolvable;

    /**
     * @Attribute CustomPageHtml: User-defined waiting room page content, when the waiting room type is custom type, you need to enter. The incoming content needs to be base64 encoded.
     */
    public readonly attrCustomPageHtml: ros.IResolvable;

    /**
     * @Attribute Description: Waiting room description.
     */
    public readonly attrDescription: ros.IResolvable;

    /**
     * @Attribute DisableSessionRenewalEnable: Disable session renewal.
     */
    public readonly attrDisableSessionRenewalEnable: ros.IResolvable;

    /**
     * @Attribute HostNameAndPath: Host name and path.
     */
    public readonly attrHostNameAndPath: ros.IResolvable;

    /**
     * @Attribute JsonResponseEnable: The JSON response. If the accept request header contains "application/json", JSON data is returned.
     */
    public readonly attrJsonResponseEnable: ros.IResolvable;

    /**
     * @Attribute Language: The language of the waiting room page. When the waiting room type is the default type, it needs to be passed in.
     */
    public readonly attrLanguage: ros.IResolvable;

    /**
     * @Attribute NewUsersPerMinute: Number of new users per minute.
     */
    public readonly attrNewUsersPerMinute: ros.IResolvable;

    /**
     * @Attribute QueueAllEnable: All in line.
     */
    public readonly attrQueueAllEnable: ros.IResolvable;

    /**
     * @Attribute QueuingMethod: Way of queuing.
     */
    public readonly attrQueuingMethod: ros.IResolvable;

    /**
     * @Attribute QueuingStatusCode: Waiting room status code.
     */
    public readonly attrQueuingStatusCode: ros.IResolvable;

    /**
     * @Attribute SessionDuration: Session duration in minutes.
     */
    public readonly attrSessionDuration: ros.IResolvable;

    /**
     * @Attribute TotalActiveUsers: Total number of active users.
     */
    public readonly attrTotalActiveUsers: ros.IResolvable;

    /**
     * @Attribute WaitingRoomId: The waiting room ID.
     */
    public readonly attrWaitingRoomId: ros.IResolvable;

    /**
     * @Attribute WaitingRoomName: The name of the waiting room.
     */
    public readonly attrWaitingRoomName: ros.IResolvable;

    /**
     * @Attribute WaitingRoomType: Waiting room type, support:.
     */
    public readonly attrWaitingRoomType: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property cookieName: The name of the custom cookie.
     */
    public cookieName: string | ros.IResolvable;

    /**
     * @Property hostNameAndPath: The hostname and path.
     */
    public hostNameAndPath: Array<RosWaitingRoom.HostNameAndPathProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property newUsersPerMinute: The maximum number of new users per minute.
     */
    public newUsersPerMinute: number | ros.IResolvable;

    /**
     * @Property queuingMethod: The queuing method. Value:
     * - `random`: Users gain access to the origin randomly, regardless of the arrival time.
     * - `fifo`: Users gain access to the origin in order of arrival.
     * - `Passthrough`: Users pass through the waiting room and go straight to the origin.
     * - `Reject-all`: Users are blocked from reaching the origin.
     */
    public queuingMethod: string | ros.IResolvable;

    /**
     * @Property queuingStatusCode: Waiting room status code. Value:
     * - `200`
     * - `202`
     * - `429`.
     */
    public queuingStatusCode: number | ros.IResolvable;

    /**
     * @Property sessionDuration: The maximum duration for which a session remains valid after a user leaves the origin. Unit: minutes.
     */
    public sessionDuration: number | ros.IResolvable;

    /**
     * @Property siteId: The site ID.
     */
    public siteId: number | ros.IResolvable;

    /**
     * @Property status: Waiting room enabled status. Value:
     * - 'on': Enable waiting room
     * - 'off': Disabled waiting room
     */
    public status: string | ros.IResolvable;

    /**
     * @Property totalActiveUsers: The maximum number of active users.
     */
    public totalActiveUsers: string | ros.IResolvable;

    /**
     * @Property waitingRoomName: The name of the waiting room.
     */
    public waitingRoomName: string | ros.IResolvable;

    /**
     * @Property waitingRoomType: The type of the waiting room, support:
     * - `default`: Indicates the default type.
     * - `custom`: indicates a custom type.
     */
    public waitingRoomType: string | ros.IResolvable;

    /**
     * @Property customPageHtml: User-defined waiting room page content, when the waiting room type is custom type, you need to enter. The incoming content needs to be base64 encoded.
     */
    public customPageHtml: string | ros.IResolvable | undefined;

    /**
     * @Property description: Waiting room description.
     */
    public description: string | ros.IResolvable | undefined;

    /**
     * @Property disableSessionRenewalEnable: Specifies whether to disable session renewal. Value:
     * - `on`: open.
     * - `off`: closed.
     */
    public disableSessionRenewalEnable: string | ros.IResolvable | undefined;

    /**
     * @Property jsonResponseEnable: The JSON response. If the accept request header contains "application\/json", JSON data is returned. Value:
     * - `on`: open.
     * - `off`: closed.
     */
    public jsonResponseEnable: string | ros.IResolvable | undefined;

    /**
     * @Property language: The language of the waiting room page. When the waiting room type is the default type, it needs to be passed in. The following types are supported:
     * - `enus`: English.
     * - `zhcn`: Simplified Chinese.
     * - `zhhk`: Traditional Chinese.
     */
    public language: string | ros.IResolvable | undefined;

    /**
     * @Property queueAllEnable: Specifies whether to queue all requests. Value:
     * - `on`: open.
     * - `off`: closed.
     */
    public queueAllEnable: string | ros.IResolvable | undefined;

    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosWaitingRoomProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosWaitingRoom.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrCookieName = this.getAtt('CookieName');
        this.attrCustomPageHtml = this.getAtt('CustomPageHtml');
        this.attrDescription = this.getAtt('Description');
        this.attrDisableSessionRenewalEnable = this.getAtt('DisableSessionRenewalEnable');
        this.attrHostNameAndPath = this.getAtt('HostNameAndPath');
        this.attrJsonResponseEnable = this.getAtt('JsonResponseEnable');
        this.attrLanguage = this.getAtt('Language');
        this.attrNewUsersPerMinute = this.getAtt('NewUsersPerMinute');
        this.attrQueueAllEnable = this.getAtt('QueueAllEnable');
        this.attrQueuingMethod = this.getAtt('QueuingMethod');
        this.attrQueuingStatusCode = this.getAtt('QueuingStatusCode');
        this.attrSessionDuration = this.getAtt('SessionDuration');
        this.attrTotalActiveUsers = this.getAtt('TotalActiveUsers');
        this.attrWaitingRoomId = this.getAtt('WaitingRoomId');
        this.attrWaitingRoomName = this.getAtt('WaitingRoomName');
        this.attrWaitingRoomType = this.getAtt('WaitingRoomType');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.cookieName = props.cookieName;
        this.hostNameAndPath = props.hostNameAndPath;
        this.newUsersPerMinute = props.newUsersPerMinute;
        this.queuingMethod = props.queuingMethod;
        this.queuingStatusCode = props.queuingStatusCode;
        this.sessionDuration = props.sessionDuration;
        this.siteId = props.siteId;
        this.status = props.status;
        this.totalActiveUsers = props.totalActiveUsers;
        this.waitingRoomName = props.waitingRoomName;
        this.waitingRoomType = props.waitingRoomType;
        this.customPageHtml = props.customPageHtml;
        this.description = props.description;
        this.disableSessionRenewalEnable = props.disableSessionRenewalEnable;
        this.jsonResponseEnable = props.jsonResponseEnable;
        this.language = props.language;
        this.queueAllEnable = props.queueAllEnable;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            cookieName: this.cookieName,
            hostNameAndPath: this.hostNameAndPath,
            newUsersPerMinute: this.newUsersPerMinute,
            queuingMethod: this.queuingMethod,
            queuingStatusCode: this.queuingStatusCode,
            sessionDuration: this.sessionDuration,
            siteId: this.siteId,
            status: this.status,
            totalActiveUsers: this.totalActiveUsers,
            waitingRoomName: this.waitingRoomName,
            waitingRoomType: this.waitingRoomType,
            customPageHtml: this.customPageHtml,
            description: this.description,
            disableSessionRenewalEnable: this.disableSessionRenewalEnable,
            jsonResponseEnable: this.jsonResponseEnable,
            language: this.language,
            queueAllEnable: this.queueAllEnable,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosWaitingRoomPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}

export namespace RosWaitingRoom {
    /**
     * @stability external
     */
    export interface HostNameAndPathProperty {
        /**
         * @Property path: The path.
         */
        readonly path: string | ros.IResolvable;
        /**
         * @Property subdomain: The subdomain.
         */
        readonly subdomain: string | ros.IResolvable;
        /**
         * @Property domain: The domain name.
         */
        readonly domain: string | ros.IResolvable;
    }
}
/**
 * Determine whether the given properties match those of a `HostNameAndPathProperty`
 *
 * @param properties - the TypeScript properties of a `HostNameAndPathProperty`
 *
 * @returns the result of the validation.
 */
function RosWaitingRoom_HostNameAndPathPropertyValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('path', ros.requiredValidator)(properties.path));
    errors.collect(ros.propertyValidator('path', ros.validateString)(properties.path));
    errors.collect(ros.propertyValidator('subdomain', ros.requiredValidator)(properties.subdomain));
    errors.collect(ros.propertyValidator('subdomain', ros.validateString)(properties.subdomain));
    errors.collect(ros.propertyValidator('domain', ros.requiredValidator)(properties.domain));
    errors.collect(ros.propertyValidator('domain', ros.validateString)(properties.domain));
    return errors.wrap('supplied properties not correct for "HostNameAndPathProperty"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::ESA::WaitingRoom.HostNameAndPath` resource
 *
 * @param properties - the TypeScript properties of a `HostNameAndPathProperty`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::ESA::WaitingRoom.HostNameAndPath` resource.
 */
// @ts-ignore TS6133
function rosWaitingRoomHostNameAndPathPropertyToRosTemplate(properties: any): any {
    if (!ros.canInspect(properties)) { return properties; }
    RosWaitingRoom_HostNameAndPathPropertyValidator(properties).assertSuccess();
    return {
      'Path': ros.stringToRosTemplate(properties.path),
      'Subdomain': ros.stringToRosTemplate(properties.subdomain),
      'Domain': ros.stringToRosTemplate(properties.domain),
    };
}
