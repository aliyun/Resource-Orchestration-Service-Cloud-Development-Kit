import * as ros from '@alicloud/ros-cdk-core';
import { RosCertificate } from './slb.generated';
export { RosCertificate as CertificateProperty };
/**
 * Properties for defining a `ALIYUN::SLB::Certificate`
 */
export interface CertificateProps {
    /**
     * Property certificate: The content of the certificate public key.
     */
    readonly certificate: string | ros.IResolvable;
    /**
     * Property aliCloudCertificateId: The ID of the Alibaba Cloud certificate.
     */
    readonly aliCloudCertificateId?: string | ros.IResolvable;
    /**
     * Property aliCloudCertificateName: The name of the Alibaba Cloud certificate.
     */
    readonly aliCloudCertificateName?: string | ros.IResolvable;
    /**
     * Property certificateName: The name of the certificate.
     */
    readonly certificateName?: string | ros.IResolvable;
    /**
     * Property certificateType: The type of the certificate.
     */
    readonly certificateType?: string | ros.IResolvable;
    /**
     * Property privateKey: The private key.
     */
    readonly privateKey?: string | ros.IResolvable;
    /**
     * Property resourceGroupId: Resource group id.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosCertificate.TagsProperty[];
}
/**
 * A ROS resource type:  `ALIYUN::SLB::Certificate`
 */
export declare class Certificate extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute CertificateId: The ID of the certificate.
     */
    readonly attrCertificateId: ros.IResolvable;
    /**
     * Attribute Fingerprint: The fingerprint of the certificate.
     */
    readonly attrFingerprint: ros.IResolvable;
    /**
     * Create a new `ALIYUN::SLB::Certificate`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: CertificateProps, enableResourcePropertyConstraint?: boolean);
}
