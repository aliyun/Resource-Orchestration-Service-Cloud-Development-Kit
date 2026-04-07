import * as ros from '@alicloud/ros-cdk-core';
import { RosSiteOriginClientCertificate } from './esa.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosSiteOriginClientCertificate as SiteOriginClientCertificateProperty };

/**
 * Properties for defining a `SiteOriginClientCertificate`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-siteoriginclientcertificate
 */
export interface SiteOriginClientCertificateProps {

    /**
     * Property certificate: The certificate content.
     */
    readonly certificate: string | ros.IResolvable;

    /**
     * Property privateKey: The private key of the certificate.
     */
    readonly privateKey: string | ros.IResolvable;

    /**
     * Property siteId: Site ID.
     */
    readonly siteId: number | ros.IResolvable;

    /**
     * Property siteOriginClientCertificateName: The certificate name.
     */
    readonly siteOriginClientCertificateName?: string | ros.IResolvable;

    /**
     * Property validityDays: The validity period of the certificate. Unit: day.
     */
    readonly validityDays?: number | ros.IResolvable;
}

/**
 * Represents a `SiteOriginClientCertificate`.
 */
export interface ISiteOriginClientCertificate extends ros.IResource {
    readonly props: SiteOriginClientCertificateProps;

    /**
     * Attribute Certificate: The certificate content.
     */
    readonly attrCertificate: ros.IResolvable | string;

    /**
     * Attribute CommonName: The Common Name of the certificate.
     */
    readonly attrCommonName: ros.IResolvable | string;

    /**
     * Attribute CreateTime: The time when the certificate was created.
     */
    readonly attrCreateTime: ros.IResolvable | string;

    /**
     * Attribute FingerprintSha256: The SHA-256 fingerprint of the certificate.
     */
    readonly attrFingerprintSha256: ros.IResolvable | string;

    /**
     * Attribute Issuer: The certificate authority (CA) that issued the certificate.
     */
    readonly attrIssuer: ros.IResolvable | string;

    /**
     * Attribute NotAfter: The time when the certificate expires.
     */
    readonly attrNotAfter: ros.IResolvable | string;

    /**
     * Attribute NotBefore: The time when the certificate takes effect.
     */
    readonly attrNotBefore: ros.IResolvable | string;

    /**
     * Attribute PubkeyAlgorithm: The public key algorithm of the certificate.
     */
    readonly attrPubkeyAlgorithm: ros.IResolvable | string;

    /**
     * Attribute SAN: The Subject Alternative Name (SAN) of the certificate.
     */
    readonly attrSan: ros.IResolvable | string;

    /**
     * Attribute SerialNumber: The serial number of the certificate.
     */
    readonly attrSerialNumber: ros.IResolvable | string;

    /**
     * Attribute SignatureAlgorithm: The signature algorithm of the certificate.
     */
    readonly attrSignatureAlgorithm: ros.IResolvable | string;

    /**
     * Attribute SiteId: Site ID.
     */
    readonly attrSiteId: ros.IResolvable | string;

    /**
     * Attribute SiteName: The website name.
     */
    readonly attrSiteName: ros.IResolvable | string;

    /**
     * Attribute SiteOriginClientCertificateId: The certificate ID on ESA.
     */
    readonly attrSiteOriginClientCertificateId: ros.IResolvable | string;

    /**
     * Attribute SiteOriginClientCertificateName: The certificate name.
     */
    readonly attrSiteOriginClientCertificateName: ros.IResolvable | string;

    /**
     * Attribute Type: The certificate type.
     */
    readonly attrType: ros.IResolvable | string;

    /**
     * Attribute UpdateTime: The time when the certificate was updated.
     */
    readonly attrUpdateTime: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ESA::SiteOriginClientCertificate`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosSiteOriginClientCertificate`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-siteoriginclientcertificate
 */
export class SiteOriginClientCertificate extends ros.Resource implements ISiteOriginClientCertificate {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: SiteOriginClientCertificateProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute Certificate: The certificate content.
     */
    public readonly attrCertificate: ros.IResolvable | string;

    /**
     * Attribute CommonName: The Common Name of the certificate.
     */
    public readonly attrCommonName: ros.IResolvable | string;

    /**
     * Attribute CreateTime: The time when the certificate was created.
     */
    public readonly attrCreateTime: ros.IResolvable | string;

    /**
     * Attribute FingerprintSha256: The SHA-256 fingerprint of the certificate.
     */
    public readonly attrFingerprintSha256: ros.IResolvable | string;

    /**
     * Attribute Issuer: The certificate authority (CA) that issued the certificate.
     */
    public readonly attrIssuer: ros.IResolvable | string;

    /**
     * Attribute NotAfter: The time when the certificate expires.
     */
    public readonly attrNotAfter: ros.IResolvable | string;

    /**
     * Attribute NotBefore: The time when the certificate takes effect.
     */
    public readonly attrNotBefore: ros.IResolvable | string;

    /**
     * Attribute PubkeyAlgorithm: The public key algorithm of the certificate.
     */
    public readonly attrPubkeyAlgorithm: ros.IResolvable | string;

    /**
     * Attribute SAN: The Subject Alternative Name (SAN) of the certificate.
     */
    public readonly attrSan: ros.IResolvable | string;

    /**
     * Attribute SerialNumber: The serial number of the certificate.
     */
    public readonly attrSerialNumber: ros.IResolvable | string;

    /**
     * Attribute SignatureAlgorithm: The signature algorithm of the certificate.
     */
    public readonly attrSignatureAlgorithm: ros.IResolvable | string;

    /**
     * Attribute SiteId: Site ID.
     */
    public readonly attrSiteId: ros.IResolvable | string;

    /**
     * Attribute SiteName: The website name.
     */
    public readonly attrSiteName: ros.IResolvable | string;

    /**
     * Attribute SiteOriginClientCertificateId: The certificate ID on ESA.
     */
    public readonly attrSiteOriginClientCertificateId: ros.IResolvable | string;

    /**
     * Attribute SiteOriginClientCertificateName: The certificate name.
     */
    public readonly attrSiteOriginClientCertificateName: ros.IResolvable | string;

    /**
     * Attribute Type: The certificate type.
     */
    public readonly attrType: ros.IResolvable | string;

    /**
     * Attribute UpdateTime: The time when the certificate was updated.
     */
    public readonly attrUpdateTime: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: SiteOriginClientCertificateProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosSiteOriginClientCertificate = new RosSiteOriginClientCertificate(this, id,  {
            siteId: props.siteId,
            privateKey: props.privateKey,
            siteOriginClientCertificateName: props.siteOriginClientCertificateName,
            validityDays: props.validityDays,
            certificate: props.certificate,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosSiteOriginClientCertificate;
        this.attrCertificate = rosSiteOriginClientCertificate.attrCertificate;
        this.attrCommonName = rosSiteOriginClientCertificate.attrCommonName;
        this.attrCreateTime = rosSiteOriginClientCertificate.attrCreateTime;
        this.attrFingerprintSha256 = rosSiteOriginClientCertificate.attrFingerprintSha256;
        this.attrIssuer = rosSiteOriginClientCertificate.attrIssuer;
        this.attrNotAfter = rosSiteOriginClientCertificate.attrNotAfter;
        this.attrNotBefore = rosSiteOriginClientCertificate.attrNotBefore;
        this.attrPubkeyAlgorithm = rosSiteOriginClientCertificate.attrPubkeyAlgorithm;
        this.attrSan = rosSiteOriginClientCertificate.attrSan;
        this.attrSerialNumber = rosSiteOriginClientCertificate.attrSerialNumber;
        this.attrSignatureAlgorithm = rosSiteOriginClientCertificate.attrSignatureAlgorithm;
        this.attrSiteId = rosSiteOriginClientCertificate.attrSiteId;
        this.attrSiteName = rosSiteOriginClientCertificate.attrSiteName;
        this.attrSiteOriginClientCertificateId = rosSiteOriginClientCertificate.attrSiteOriginClientCertificateId;
        this.attrSiteOriginClientCertificateName = rosSiteOriginClientCertificate.attrSiteOriginClientCertificateName;
        this.attrType = rosSiteOriginClientCertificate.attrType;
        this.attrUpdateTime = rosSiteOriginClientCertificate.attrUpdateTime;
    }
}
