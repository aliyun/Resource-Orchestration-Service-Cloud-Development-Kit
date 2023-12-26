import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `RosCertificate`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cas-certificate
 */
export interface RosCertificateProps {
    /**
     * @Property cert: Specify the content of the certificate. To use the PEM encoding format.
     */
    readonly cert: string | ros.IResolvable;
    /**
     * @Property key: Specify the certificate private key content. To use the PEM encoding format.
     */
    readonly key: string | ros.IResolvable;
    /**
     * @Property name: Custom certificate name. The certificate name under a user cannot be duplicated.
     */
    readonly name: string | ros.IResolvable;
    /**
     * @Property lang: Specifies the language type for requesting and receiving messages.
     */
    readonly lang?: string | ros.IResolvable;
    /**
     * @Property sourceIp: Specifies the source IP address of the request.
     */
    readonly sourceIp?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::CAS::Certificate`, which is used to add a certificate.
 * @Note This class does not contain additional functions, so it is recommended to use the `Certificate` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cas-certificate
 */
export declare class RosCertificate extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::CAS::Certificate";
    /**
     * @Attribute CertId: Certificate ID.
     */
    readonly attrCertId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property cert: Specify the content of the certificate. To use the PEM encoding format.
     */
    cert: string | ros.IResolvable;
    /**
     * @Property key: Specify the certificate private key content. To use the PEM encoding format.
     */
    key: string | ros.IResolvable;
    /**
     * @Property name: Custom certificate name. The certificate name under a user cannot be duplicated.
     */
    name: string | ros.IResolvable;
    /**
     * @Property lang: Specifies the language type for requesting and receiving messages.
     */
    lang: string | ros.IResolvable | undefined;
    /**
     * @Property sourceIp: Specifies the source IP address of the request.
     */
    sourceIp: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosCertificateProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
