import * as ros from '@alicloud/ros-cdk-core';
import { RosOriginCaCertificate } from './esa.generated';
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
export declare class OriginCaCertificate extends ros.Resource implements IOriginCaCertificate {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: OriginCaCertificateProps;
    protected enableResourcePropertyConstraint: boolean;
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
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: OriginCaCertificateProps, enableResourcePropertyConstraint?: boolean);
}
