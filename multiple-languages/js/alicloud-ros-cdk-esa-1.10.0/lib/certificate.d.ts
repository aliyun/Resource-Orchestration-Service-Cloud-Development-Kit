import * as ros from '@alicloud/ros-cdk-core';
import { RosCertificate } from './esa.generated';
export { RosCertificate as CertificateProperty };
/**
 * Properties for defining a `Certificate`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-certificate
 */
export interface CertificateProps {
    /**
     * Property createdType: The certificate type.
     * - cas (Certificate Center Certificate)
     * - upload (custom upload certificate)
     * - free( Free certificate).
     */
    readonly createdType: string | ros.IResolvable;
    /**
     * Property domains: A list of domain names. Multiple domain names are separated by commas.
     */
    readonly domains: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * Property siteId: The site ID, which can be obtained by calling the ListSites interface.
     */
    readonly siteId: number | ros.IResolvable;
    /**
     * Property casId: Cloud certificate ID.
     */
    readonly casId?: string | ros.IResolvable;
    /**
     * Property certId: The certificate Id.
     */
    readonly certId?: string | ros.IResolvable;
    /**
     * Property certificate: Certificate content.
     */
    readonly certificate?: string | ros.IResolvable;
    /**
     * Property certName: The certificate name.
     */
    readonly certName?: string | ros.IResolvable;
    /**
     * Property privateKey: The certificate private key.
     */
    readonly privateKey?: string | ros.IResolvable;
}
/**
 * Represents a `Certificate`.
 */
export interface ICertificate extends ros.IResource {
    readonly props: CertificateProps;
    /**
     * Attribute ApplyCode: Certificate application error code.
     */
    readonly attrApplyCode: ros.IResolvable | string;
    /**
     * Attribute ApplyMessage: Certificate application error message.
     */
    readonly attrApplyMessage: ros.IResolvable | string;
    /**
     * Attribute CasId: Cloud certificate ID.
     */
    readonly attrCasId: ros.IResolvable | string;
    /**
     * Attribute CertId: The certificate Id.
     */
    readonly attrCertId: ros.IResolvable | string;
    /**
     * Attribute CertName: The certificate name.
     */
    readonly attrCertName: ros.IResolvable | string;
    /**
     * Attribute Certificate: Certificate content.
     */
    readonly attrCertificate: ros.IResolvable | string;
    /**
     * Attribute CommonName: Common Name (CN) field of the certificate.
     */
    readonly attrCommonName: ros.IResolvable | string;
    /**
     * Attribute CreateTime: Creation time.
     */
    readonly attrCreateTime: ros.IResolvable | string;
    /**
     * Attribute DCV: DCV information.
     */
    readonly attrDcv: ros.IResolvable | string;
    /**
     * Attribute Domains: A list of domain names. Multiple domain names are separated by commas.
     */
    readonly attrDomains: ros.IResolvable | string;
    /**
     * Attribute FingerprintSha256: SHA256 fingerprint of the certificate.
     */
    readonly attrFingerprintSha256: ros.IResolvable | string;
    /**
     * Attribute Issuer: Certificate issuer.
     */
    readonly attrIssuer: ros.IResolvable | string;
    /**
     * Attribute IssuerCN: Common name of the certificate issuer.
     */
    readonly attrIssuerCn: ros.IResolvable | string;
    /**
     * Attribute NotAfter: End time of the certificate validity period.
     */
    readonly attrNotAfter: ros.IResolvable | string;
    /**
     * Attribute NotBefore: Start time of the certificate validity period.
     */
    readonly attrNotBefore: ros.IResolvable | string;
    /**
     * Attribute PubAlg: Certificate public key algorithm.
     */
    readonly attrPubAlg: ros.IResolvable | string;
    /**
     * Attribute SerialNumber: Serial number of the certificate.
     */
    readonly attrSerialNumber: ros.IResolvable | string;
    /**
     * Attribute SigAlg: Certificate signature algorithm.
     */
    readonly attrSigAlg: ros.IResolvable | string;
    /**
     * Attribute SiteId: The site ID, which can be obtained by calling the ListSites interface.
     */
    readonly attrSiteId: ros.IResolvable | string;
    /**
     * Attribute SiteName: Site name.
     */
    readonly attrSiteName: ros.IResolvable | string;
    /**
     * Attribute UpdateTime: Update time.
     */
    readonly attrUpdateTime: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ESA::Certificate`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosCertificate`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-certificate
 */
export declare class Certificate extends ros.Resource implements ICertificate {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: CertificateProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute ApplyCode: Certificate application error code.
     */
    readonly attrApplyCode: ros.IResolvable | string;
    /**
     * Attribute ApplyMessage: Certificate application error message.
     */
    readonly attrApplyMessage: ros.IResolvable | string;
    /**
     * Attribute CasId: Cloud certificate ID.
     */
    readonly attrCasId: ros.IResolvable | string;
    /**
     * Attribute CertId: The certificate Id.
     */
    readonly attrCertId: ros.IResolvable | string;
    /**
     * Attribute CertName: The certificate name.
     */
    readonly attrCertName: ros.IResolvable | string;
    /**
     * Attribute Certificate: Certificate content.
     */
    readonly attrCertificate: ros.IResolvable | string;
    /**
     * Attribute CommonName: Common Name (CN) field of the certificate.
     */
    readonly attrCommonName: ros.IResolvable | string;
    /**
     * Attribute CreateTime: Creation time.
     */
    readonly attrCreateTime: ros.IResolvable | string;
    /**
     * Attribute DCV: DCV information.
     */
    readonly attrDcv: ros.IResolvable | string;
    /**
     * Attribute Domains: A list of domain names. Multiple domain names are separated by commas.
     */
    readonly attrDomains: ros.IResolvable | string;
    /**
     * Attribute FingerprintSha256: SHA256 fingerprint of the certificate.
     */
    readonly attrFingerprintSha256: ros.IResolvable | string;
    /**
     * Attribute Issuer: Certificate issuer.
     */
    readonly attrIssuer: ros.IResolvable | string;
    /**
     * Attribute IssuerCN: Common name of the certificate issuer.
     */
    readonly attrIssuerCn: ros.IResolvable | string;
    /**
     * Attribute NotAfter: End time of the certificate validity period.
     */
    readonly attrNotAfter: ros.IResolvable | string;
    /**
     * Attribute NotBefore: Start time of the certificate validity period.
     */
    readonly attrNotBefore: ros.IResolvable | string;
    /**
     * Attribute PubAlg: Certificate public key algorithm.
     */
    readonly attrPubAlg: ros.IResolvable | string;
    /**
     * Attribute SerialNumber: Serial number of the certificate.
     */
    readonly attrSerialNumber: ros.IResolvable | string;
    /**
     * Attribute SigAlg: Certificate signature algorithm.
     */
    readonly attrSigAlg: ros.IResolvable | string;
    /**
     * Attribute SiteId: The site ID, which can be obtained by calling the ListSites interface.
     */
    readonly attrSiteId: ros.IResolvable | string;
    /**
     * Attribute SiteName: Site name.
     */
    readonly attrSiteName: ros.IResolvable | string;
    /**
     * Attribute UpdateTime: Update time.
     */
    readonly attrUpdateTime: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: CertificateProps, enableResourcePropertyConstraint?: boolean);
}
