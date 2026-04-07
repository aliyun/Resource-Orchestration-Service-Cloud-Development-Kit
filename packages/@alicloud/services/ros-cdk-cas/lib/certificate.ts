import * as ros from '@alicloud/ros-cdk-core';
import { RosCertificate } from './cas.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosCertificate as CertificateProperty };

/**
 * Properties for defining a `Certificate`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cas-certificate
 */
export interface CertificateProps {

    /**
     * Property cert: Specify the content of the certificate. To use the PEM encoding format.
     */
    readonly cert: string | ros.IResolvable;

    /**
     * Property key: Specify the certificate private key content. To use the PEM encoding format.
     */
    readonly key: string | ros.IResolvable;

    /**
     * Property name: Custom certificate name. The certificate name under a user cannot be duplicated.
     */
    readonly name: string | ros.IResolvable;

    /**
     * Property lang: Specifies the language type for requesting and receiving messages.
     */
    readonly lang?: string | ros.IResolvable;

    /**
     * Property sourceIp: Specifies the source IP address of the request.
     */
    readonly sourceIp?: string | ros.IResolvable;
}

/**
 * Represents a `Certificate`.
 */
export interface ICertificate extends ros.IResource {
    readonly props: CertificateProps;

    /**
     * Attribute CertId: Certificate ID.
     */
    readonly attrCertId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::CAS::Certificate`, which is used to add a certificate.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosCertificate`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cas-certificate
 */
export class Certificate extends ros.Resource implements ICertificate {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: CertificateProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute CertId: Certificate ID.
     */
    public readonly attrCertId: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: CertificateProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosCertificate = new RosCertificate(this, id,  {
            sourceIp: props.sourceIp,
            lang: props.lang,
            cert: props.cert,
            key: props.key,
            name: props.name,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosCertificate;
        this.attrCertId = rosCertificate.attrCertId;
    }
}
