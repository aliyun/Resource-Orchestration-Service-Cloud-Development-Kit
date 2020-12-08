import * as ros from '@alicloud/ros-cdk-core';
import { RosCertificate } from './slb.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosCertificate as CertificateProperty };

/**
 * Properties for defining a `ALIYUN::SLB::Certificate`
 */
export interface CertificateProps {

    /**
     * @Property certificate: The content of the certificate public key.
     */
    readonly certificate: string;

    /**
     * @Property aliCloudCertificateId: The ID of the Alibaba Cloud certificate.
     */
    readonly aliCloudCertificateId?: string;

    /**
     * @Property aliCloudCertificateName: The name of the Alibaba Cloud certificate.
     */
    readonly aliCloudCertificateName?: string;

    /**
     * @Property certificateName: The name of the certificate.
     */
    readonly certificateName?: string;

    /**
     * @Property certificateType: The type of the certificate.
     */
    readonly certificateType?: string;

    /**
     * @Property privateKey: The private key.
     */
    readonly privateKey?: string;

    /**
     * @Property resourceGroupId: Resource group id.
     */
    readonly resourceGroupId?: string;
}

/**
 * A ROS resource type:  `ALIYUN::SLB::Certificate`
 */
export class Certificate extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * @Attribute CertificateId: The ID of the certificate.
     */
    public readonly attrCertificateId: any;

    /**
     * @Attribute Fingerprint: The fingerprint of the certificate.
     */
    public readonly attrFingerprint: any;

    /**
     * Create a new `ALIYUN::SLB::Certificate`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: CertificateProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosCertificate = new RosCertificate(this, id,  {
            certificateType: props.certificateType ? props.certificateType : 'Server',
            aliCloudCertificateName: props.aliCloudCertificateName,
            privateKey: props.privateKey,
            resourceGroupId: props.resourceGroupId,
            certificateName: props.certificateName,
            certificate: props.certificate,
            aliCloudCertificateId: props.aliCloudCertificateId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosCertificate;
        this.attrCertificateId = rosCertificate.attrCertificateId;
        this.attrFingerprint = rosCertificate.attrFingerprint;
    }
}
