import * as ros from '@alicloud/ros-cdk-core';
import { RosClientCertificate } from './esa.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosClientCertificate as ClientCertificateProperty };

/**
 * Properties for defining a `ClientCertificate`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-clientcertificate
 */
export interface ClientCertificateProps {

    /**
     * Property siteId: Site Id.
     */
    readonly siteId: number | ros.IResolvable;

    /**
     * Property validityDays: Certificate validity period.
     */
    readonly validityDays: number | ros.IResolvable;

    /**
     * Property csr: Certificate signing request content.
     */
    readonly csr?: string | ros.IResolvable;

    /**
     * Property pkeyType: The private key algorithm type.
     */
    readonly pkeyType?: string | ros.IResolvable;
}

/**
 * Represents a `ClientCertificate`.
 */
export interface IClientCertificate extends ros.IResource {
    readonly props: ClientCertificateProps;

    /**
     * Attribute CACertificateId: The ID of the CA certificate.
     */
    readonly attrCaCertificateId: ros.IResolvable | string;

    /**
     * Attribute Certificate: Certificate content.
     */
    readonly attrCertificate: ros.IResolvable | string;

    /**
     * Attribute ClientCertId: ClientCertificate Id.
     */
    readonly attrClientCertId: ros.IResolvable | string;

    /**
     * Attribute ClientCertificateName: The certificate name.
     */
    readonly attrClientCertificateName: ros.IResolvable | string;

    /**
     * Attribute CommonName: The Common Name of the certificate.
     */
    readonly attrCommonName: ros.IResolvable | string;

    /**
     * Attribute CreateTime: The time when the certificate was created.
     */
    readonly attrCreateTime: ros.IResolvable | string;

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
     * Attribute PubkeyAlgorithm: The public-key algorithm of the certificate.
     */
    readonly attrPubkeyAlgorithm: ros.IResolvable | string;

    /**
     * Attribute SAN: The Subject Alternative Name (SAN) of the certificate.
     */
    readonly attrSan: ros.IResolvable | string;

    /**
     * Attribute SignatureAlgorithm: The signature algorithm of the certificate.
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
     * Attribute UpdateTime: The time when the certificate was updated.
     */
    readonly attrUpdateTime: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ESA::ClientCertificate`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosClientCertificate`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-clientcertificate
 */
export class ClientCertificate extends ros.Resource implements IClientCertificate {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: ClientCertificateProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute CACertificateId: The ID of the CA certificate.
     */
    public readonly attrCaCertificateId: ros.IResolvable | string;

    /**
     * Attribute Certificate: Certificate content.
     */
    public readonly attrCertificate: ros.IResolvable | string;

    /**
     * Attribute ClientCertId: ClientCertificate Id.
     */
    public readonly attrClientCertId: ros.IResolvable | string;

    /**
     * Attribute ClientCertificateName: The certificate name.
     */
    public readonly attrClientCertificateName: ros.IResolvable | string;

    /**
     * Attribute CommonName: The Common Name of the certificate.
     */
    public readonly attrCommonName: ros.IResolvable | string;

    /**
     * Attribute CreateTime: The time when the certificate was created.
     */
    public readonly attrCreateTime: ros.IResolvable | string;

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
     * Attribute PubkeyAlgorithm: The public-key algorithm of the certificate.
     */
    public readonly attrPubkeyAlgorithm: ros.IResolvable | string;

    /**
     * Attribute SAN: The Subject Alternative Name (SAN) of the certificate.
     */
    public readonly attrSan: ros.IResolvable | string;

    /**
     * Attribute SignatureAlgorithm: The signature algorithm of the certificate.
     */
    public readonly attrSignatureAlgorithm: ros.IResolvable | string;

    /**
     * Attribute SiteId: Site Id.
     */
    public readonly attrSiteId: ros.IResolvable | string;

    /**
     * Attribute SiteName: The website name.
     */
    public readonly attrSiteName: ros.IResolvable | string;

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
    constructor(scope: ros.Construct, id: string, props: ClientCertificateProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosClientCertificate = new RosClientCertificate(this, id,  {
            siteId: props.siteId,
            csr: props.csr,
            pkeyType: props.pkeyType,
            validityDays: props.validityDays,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosClientCertificate;
        this.attrCaCertificateId = rosClientCertificate.attrCaCertificateId;
        this.attrCertificate = rosClientCertificate.attrCertificate;
        this.attrClientCertId = rosClientCertificate.attrClientCertId;
        this.attrClientCertificateName = rosClientCertificate.attrClientCertificateName;
        this.attrCommonName = rosClientCertificate.attrCommonName;
        this.attrCreateTime = rosClientCertificate.attrCreateTime;
        this.attrIssuer = rosClientCertificate.attrIssuer;
        this.attrNotAfter = rosClientCertificate.attrNotAfter;
        this.attrNotBefore = rosClientCertificate.attrNotBefore;
        this.attrPubkeyAlgorithm = rosClientCertificate.attrPubkeyAlgorithm;
        this.attrSan = rosClientCertificate.attrSan;
        this.attrSignatureAlgorithm = rosClientCertificate.attrSignatureAlgorithm;
        this.attrSiteId = rosClientCertificate.attrSiteId;
        this.attrSiteName = rosClientCertificate.attrSiteName;
        this.attrType = rosClientCertificate.attrType;
        this.attrUpdateTime = rosClientCertificate.attrUpdateTime;
    }
}
