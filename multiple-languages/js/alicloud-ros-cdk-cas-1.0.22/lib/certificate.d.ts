import * as ros from '@alicloud/ros-cdk-core';
import { RosCertificate } from './cas.generated';
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
 * This class encapsulates and extends the ROS resource type `ALIYUN::CAS::Certificate`, which is used to add a certificate.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosCertificate`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cas-certificate
 */
export declare class Certificate extends ros.Resource {
    /**
     * Attribute CertId: Certificate ID.
     */
    readonly attrCertId: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: CertificateProps, enableResourcePropertyConstraint?: boolean);
}
