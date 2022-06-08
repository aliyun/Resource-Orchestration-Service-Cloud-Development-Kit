import * as ros from '@alicloud/ros-cdk-core';
import { RosCertificate } from './cas.generated';
export { RosCertificate as CertificateProperty };
/**
 * Properties for defining a `ALIYUN::CAS::Certificate`
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
 * A ROS resource type:  `ALIYUN::CAS::Certificate`
 */
export declare class Certificate extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute CertId: Certificate ID.
     */
    readonly attrCertId: ros.IResolvable;
    /**
     * Create a new `ALIYUN::CAS::Certificate`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: CertificateProps, enableResourcePropertyConstraint?: boolean);
}
//# sourceMappingURL=certificate.d.ts.map