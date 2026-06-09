import * as ros from '@alicloud/ros-cdk-core';
import { RosOriginClientCertificate } from './esa.generated';
export { RosOriginClientCertificate as OriginClientCertificateProperty };
/**
 * Properties for defining a `OriginClientCertificate`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-originclientcertificate
 */
export interface OriginClientCertificateProps {
    /**
     * Property certificate: The certificate content.
     */
    readonly certificate: string | ros.IResolvable;
    /**
     * Property privateKey: The private key of the certificate.
     */
    readonly privateKey: string | ros.IResolvable;
    /**
     * Property siteId: The website ID.
     */
    readonly siteId: number | ros.IResolvable;
    /**
     * Property hostnames: The domain names to associate.
     */
    readonly hostnames?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * Property originClientCertificateName: The certificate name.
     */
    readonly originClientCertificateName?: string | ros.IResolvable;
    /**
     * Property validityDays: The validity period of the certificate. Unit: day.
     */
    readonly validityDays?: number | ros.IResolvable;
}
/**
 * Represents a `OriginClientCertificate`.
 */
export interface IOriginClientCertificate extends ros.IResource {
    readonly props: OriginClientCertificateProps;
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
     * Attribute Hostnames: The domain names to associate.
     */
    readonly attrHostnames: ros.IResolvable | string;
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
     * Attribute OriginClientCertificateId: The certificate ID.
     */
    readonly attrOriginClientCertificateId: ros.IResolvable | string;
    /**
     * Attribute OriginClientCertificateName: The certificate name.
     */
    readonly attrOriginClientCertificateName: ros.IResolvable | string;
    /**
     * Attribute PubkeyAlgorithm: The public-key algorithm of the certificate.
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
     * Attribute SiteName: The website name.
     */
    readonly attrSiteName: ros.IResolvable | string;
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
 * This class encapsulates and extends the ROS resource type `ALIYUN::ESA::OriginClientCertificate`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosOriginClientCertificate`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-originclientcertificate
 */
export declare class OriginClientCertificate extends ros.Resource implements IOriginClientCertificate {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: OriginClientCertificateProps;
    protected enableResourcePropertyConstraint: boolean;
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
     * Attribute Hostnames: The domain names to associate.
     */
    readonly attrHostnames: ros.IResolvable | string;
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
     * Attribute OriginClientCertificateId: The certificate ID.
     */
    readonly attrOriginClientCertificateId: ros.IResolvable | string;
    /**
     * Attribute OriginClientCertificateName: The certificate name.
     */
    readonly attrOriginClientCertificateName: ros.IResolvable | string;
    /**
     * Attribute PubkeyAlgorithm: The public-key algorithm of the certificate.
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
     * Attribute SiteName: The website name.
     */
    readonly attrSiteName: ros.IResolvable | string;
    /**
     * Attribute Type: The certificate type.
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
    constructor(scope: ros.Construct, id: string, props: OriginClientCertificateProps, enableResourcePropertyConstraint?: boolean);
}
