import * as ros from '@alicloud/ros-cdk-core';
import { RosOriginCaCertificate } from './esa.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosOriginCaCertificate as OriginCaCertificateProperty };

/**
 * Properties for defining a `OriginCaCertificate`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-origincacertificate
 */
export interface OriginCaCertificateProps {

    /**
     * Property certificate: Certificate content.
     */
    readonly certificate: string | ros.IResolvable;

    /**
     * Property siteId: The website ID
     */
    readonly siteId: number | ros.IResolvable;

    /**
     * Property name: The certificate name.
     */
    readonly name?: string | ros.IResolvable;

    /**
     * Property validityDays: The validity period of the certificate. Unit: day.
     */
    readonly validityDays?: number | ros.IResolvable;
}

/**
 * Represents a `OriginCaCertificate`.
 */
export interface IOriginCaCertificate extends ros.IResource {
    readonly props: OriginCaCertificateProps;

    /**
     * Attribute Certificate: The certificate content.
     */
    readonly attrCertificate: ros.IResolvable | string;

    /**
     * Attribute CommonName: The certificate common name.
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
     * Attribute Name: The certificate name.
     */
    readonly attrName: ros.IResolvable | string;

    /**
     * Attribute NotAfter: The expiration date of the certificate validity period.
     */
    readonly attrNotAfter: ros.IResolvable | string;

    /**
     * Attribute NotBefore: The start time of the certificate validity period.
     */
    readonly attrNotBefore: ros.IResolvable | string;

    /**
     * Attribute OriginCaCertificateId: The certificate ID.
     */
    readonly attrOriginCaCertificateId: ros.IResolvable | string;

    /**
     * Attribute PubkeyAlgorithm: Certificate public key algorithm.
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
     * Attribute SiteId: The website ID
     */
    readonly attrSiteId: ros.IResolvable | string;

    /**
     * Attribute Type: The type of the certificate.
     */
    readonly attrType: ros.IResolvable | string;

    /**
     * Attribute UpdateTime: The time when the certificate was updated.
     */
    readonly attrUpdateTime: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ESA::OriginCaCertificate`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosOriginCaCertificate`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-origincacertificate
 */
export class OriginCaCertificate extends ros.Resource implements IOriginCaCertificate {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: OriginCaCertificateProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute Certificate: The certificate content.
     */
    public readonly attrCertificate: ros.IResolvable | string;

    /**
     * Attribute CommonName: The certificate common name.
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
     * Attribute Name: The certificate name.
     */
    public readonly attrName: ros.IResolvable | string;

    /**
     * Attribute NotAfter: The expiration date of the certificate validity period.
     */
    public readonly attrNotAfter: ros.IResolvable | string;

    /**
     * Attribute NotBefore: The start time of the certificate validity period.
     */
    public readonly attrNotBefore: ros.IResolvable | string;

    /**
     * Attribute OriginCaCertificateId: The certificate ID.
     */
    public readonly attrOriginCaCertificateId: ros.IResolvable | string;

    /**
     * Attribute PubkeyAlgorithm: Certificate public key algorithm.
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
     * Attribute SiteId: The website ID
     */
    public readonly attrSiteId: ros.IResolvable | string;

    /**
     * Attribute Type: The type of the certificate.
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
    constructor(scope: ros.Construct, id: string, props: OriginCaCertificateProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosOriginCaCertificate = new RosOriginCaCertificate(this, id,  {
            siteId: props.siteId,
            validityDays: props.validityDays,
            name: props.name,
            certificate: props.certificate,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosOriginCaCertificate;
        this.attrCertificate = rosOriginCaCertificate.attrCertificate;
        this.attrCommonName = rosOriginCaCertificate.attrCommonName;
        this.attrCreateTime = rosOriginCaCertificate.attrCreateTime;
        this.attrFingerprintSha256 = rosOriginCaCertificate.attrFingerprintSha256;
        this.attrIssuer = rosOriginCaCertificate.attrIssuer;
        this.attrName = rosOriginCaCertificate.attrName;
        this.attrNotAfter = rosOriginCaCertificate.attrNotAfter;
        this.attrNotBefore = rosOriginCaCertificate.attrNotBefore;
        this.attrOriginCaCertificateId = rosOriginCaCertificate.attrOriginCaCertificateId;
        this.attrPubkeyAlgorithm = rosOriginCaCertificate.attrPubkeyAlgorithm;
        this.attrSan = rosOriginCaCertificate.attrSan;
        this.attrSerialNumber = rosOriginCaCertificate.attrSerialNumber;
        this.attrSignatureAlgorithm = rosOriginCaCertificate.attrSignatureAlgorithm;
        this.attrSiteId = rosOriginCaCertificate.attrSiteId;
        this.attrType = rosOriginCaCertificate.attrType;
        this.attrUpdateTime = rosOriginCaCertificate.attrUpdateTime;
    }
}
