import * as ros from '@alicloud/ros-cdk-core';
import { RosCustomDomain } from './apigateway.generated';
// Generated from the AliCloud ROS Resource Specification
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
 * Represents a `CustomDomain`.
 */
export interface ICustomDomain extends ros.IResource {
    readonly props: CustomDomainProps;

    /**
     * Attribute CertificateId: The id of the certificate.
     */
    readonly attrCertificateId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ApiGateway::CustomDomain`, which is used to bind a custom domain name and upload a Secure Sockets Layer (SSL) certificate to a specific API group.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosCustomDomain`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apigateway-customdomain
 */
export class CustomDomain extends ros.Resource implements ICustomDomain {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: CustomDomainProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute CertificateId: The id of the certificate.
     */
    public readonly attrCertificateId: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: CustomDomainProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosCustomDomain = new RosCustomDomain(this, id,  {
            certificateBody: props.certificateBody,
            domainName: props.domainName,
            certificatePrivateKey: props.certificatePrivateKey,
            certificateName: props.certificateName,
            groupId: props.groupId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosCustomDomain;
        this.attrCertificateId = rosCustomDomain.attrCertificateId;
    }
}
