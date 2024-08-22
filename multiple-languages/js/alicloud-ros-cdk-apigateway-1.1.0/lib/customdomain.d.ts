import * as ros from '@alicloud/ros-cdk-core';
import { RosCustomDomain } from './apigateway.generated';
export { RosCustomDomain as CustomDomainProperty };
/**
 * Properties for defining a `CustomDomain`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apigateway-customdomain
 */
export interface CustomDomainProps {
    /**
     * Property domainName: Custom domain name.
     */
    readonly domainName: string | ros.IResolvable;
    /**
     * Property groupId: The id of the Group.
     */
    readonly groupId: string | ros.IResolvable;
    /**
     * Property certificateBody: SSL certificate body.
     */
    readonly certificateBody?: string | ros.IResolvable;
    /**
     * Property certificateName: SSL certificate name.
     */
    readonly certificateName?: string | ros.IResolvable;
    /**
     * Property certificatePrivateKey: SSL certificate key.
     */
    readonly certificatePrivateKey?: string | ros.IResolvable;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ApiGateway::CustomDomain`, which is used to bind a custom domain name and upload an SSL certificate to a specified API group.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosCustomDomain`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apigateway-customdomain
 */
export declare class CustomDomain extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: CustomDomainProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute CertificateId: The id of the certificate.
     */
    readonly attrCertificateId: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: CustomDomainProps, enableResourcePropertyConstraint?: boolean);
}
