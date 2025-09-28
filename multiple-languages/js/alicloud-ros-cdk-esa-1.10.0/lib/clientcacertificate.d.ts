import * as ros from '@alicloud/ros-cdk-core';
import { RosClientCaCertificate } from './esa.generated';
export { RosClientCaCertificate as ClientCaCertificateProperty };
/**
 * Properties for defining a `ClientCaCertificate`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-clientcacertificate
 */
export interface ClientCaCertificateProps {
    /**
     * Property certificate: Certificate content.
     */
    readonly certificate: string | ros.IResolvable;
    /**
     * Property siteId: Site Id.
     */
    readonly siteId: number | ros.IResolvable;
    /**
     * Property clientCaCertName: The certificate name.
     */
    readonly clientCaCertName?: string | ros.IResolvable;
}
/**
 * Represents a `ClientCaCertificate`.
 */
export interface IClientCaCertificate extends ros.IResource {
    readonly props: ClientCaCertificateProps;
    /**
     * Attribute Certificate: Certificate content.
     */
    readonly attrCertificate: ros.IResolvable | string;
    /**
     * Attribute ClientCaCertId: ClientCaCertificate Id.
     */
    readonly attrClientCaCertId: ros.IResolvable | string;
    /**
     * Attribute ClientCaCertName: The certificate name.
     */
    readonly attrClientCaCertName: ros.IResolvable | string;
    /**
     * Attribute CommonName: The certificate common name.
     */
    readonly attrCommonName: ros.IResolvable | string;
    /**
     * Attribute CreateTime: Creation time.
     */
    readonly attrCreateTime: ros.IResolvable | string;
    /**
     * Attribute Issuer: Certificate Authority.
     */
    readonly attrIssuer: ros.IResolvable | string;
    /**
     * Attribute NotAfter: The expiration date of the certificate validity period.
     */
    readonly attrNotAfter: ros.IResolvable | string;
    /**
     * Attribute NotBefore: The start time of the certificate validity period.
     */
    readonly attrNotBefore: ros.IResolvable | string;
    /**
     * Attribute PubkeyAlgorithm: Certificate public key algorithm.
     */
    readonly attrPubkeyAlgorithm: ros.IResolvable | string;
    /**
     * Attribute SAN: Alternate certificate subject name.
     */
    readonly attrSan: ros.IResolvable | string;
    /**
     * Attribute SignatureAlgorithm: Certificate signature algorithm.
     */
    readonly attrSignatureAlgorithm: ros.IResolvable | string;
    /**
     * Attribute SiteId: Site Id.
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
     * Attribute UpdateTime: Update time.
     */
    readonly attrUpdateTime: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ESA::ClientCaCertificate`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosClientCaCertificate`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-clientcacertificate
 */
export declare class ClientCaCertificate extends ros.Resource implements IClientCaCertificate {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: ClientCaCertificateProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute Certificate: Certificate content.
     */
    readonly attrCertificate: ros.IResolvable | string;
    /**
     * Attribute ClientCaCertId: ClientCaCertificate Id.
     */
    readonly attrClientCaCertId: ros.IResolvable | string;
    /**
     * Attribute ClientCaCertName: The certificate name.
     */
    readonly attrClientCaCertName: ros.IResolvable | string;
    /**
     * Attribute CommonName: The certificate common name.
     */
    readonly attrCommonName: ros.IResolvable | string;
    /**
     * Attribute CreateTime: Creation time.
     */
    readonly attrCreateTime: ros.IResolvable | string;
    /**
     * Attribute Issuer: Certificate Authority.
     */
    readonly attrIssuer: ros.IResolvable | string;
    /**
     * Attribute NotAfter: The expiration date of the certificate validity period.
     */
    readonly attrNotAfter: ros.IResolvable | string;
    /**
     * Attribute NotBefore: The start time of the certificate validity period.
     */
    readonly attrNotBefore: ros.IResolvable | string;
    /**
     * Attribute PubkeyAlgorithm: Certificate public key algorithm.
     */
    readonly attrPubkeyAlgorithm: ros.IResolvable | string;
    /**
     * Attribute SAN: Alternate certificate subject name.
     */
    readonly attrSan: ros.IResolvable | string;
    /**
     * Attribute SignatureAlgorithm: Certificate signature algorithm.
     */
    readonly attrSignatureAlgorithm: ros.IResolvable | string;
    /**
     * Attribute SiteId: Site Id.
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
     * Attribute UpdateTime: Update time.
     */
    readonly attrUpdateTime: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ClientCaCertificateProps, enableResourcePropertyConstraint?: boolean);
}
