import * as ros from '@alicloud/ros-cdk-core';
import { RosCertificate } from './cas.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosCertificate as CertificateProperty };

/**
 * Properties for defining a `ALIYUN::CAS::Certificate`
 */
export interface CertificateProps {

    /**
     * @Property cert: Specify the content of the certificate. To use the PEM encoding format.
     */
    readonly cert: string;

    /**
     * @Property key: Specify the certificate private key content. To use the PEM encoding format.
     */
    readonly key: string;

    /**
     * @Property name: Custom certificate name. The certificate name under a user cannot be duplicated.
     */
    readonly name: string;

    /**
     * @Property lang: Specifies the language type for requesting and receiving messages.
     */
    readonly lang?: string;

    /**
     * @Property sourceIp: Specifies the source IP address of the request.
     */
    readonly sourceIp?: string;
}

/**
 * A ROS resource type:  `ALIYUN::CAS::Certificate`
 */
export class Certificate extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * @Attribute CertId: Certificate ID.
     */
    public readonly attrCertId: any;

    /**
     * Create a new `ALIYUN::CAS::Certificate`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: CertificateProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

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
