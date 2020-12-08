import * as ros from '@alicloud/ros-cdk-core';
import { RosCustomDomain } from './apigateway.generated';
export { RosCustomDomain as CustomDomainProperty };
/**
 * Properties for defining a `ALIYUN::ApiGateway::CustomDomain`
 */
export interface CustomDomainProps {
    /**
     * @Property domainName: Custom domain name.
     */
    readonly domainName: string;
    /**
     * @Property groupId: The id of the Group.
     */
    readonly groupId: string;
    /**
     * @Property certificateBody: SSL certificate body.
     */
    readonly certificateBody?: string;
    /**
     * @Property certificateName: SSL certificate name.Need [4, 50] Chinese\English\Number characters or "_",and should start with Chinese/English character.
     */
    readonly certificateName?: string;
    /**
     * @Property certificatePrivateKey: SSL certificate key.
     */
    readonly certificatePrivateKey?: string;
}
/**
 * A ROS resource type:  `ALIYUN::ApiGateway::CustomDomain`
 */
export declare class CustomDomain extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * @Attribute CertificateId: The id of the certificate.
     */
    readonly attrCertificateId: any;
    /**
     * Create a new `ALIYUN::ApiGateway::CustomDomain`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: CustomDomainProps, enableResourcePropertyConstraint?: boolean);
}
