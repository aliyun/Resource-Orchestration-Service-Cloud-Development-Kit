import * as ros from '@alicloud/ros-cdk-core';
import { RosCustomDomain } from './apigateway.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosCustomDomain as CustomDomainProperty };

/**
 * Properties for defining a `ALIYUN::ApiGateway::CustomDomain`
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
 * A ROS resource type:  `ALIYUN::ApiGateway::CustomDomain`
 */
export class CustomDomain extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute CertificateId: The id of the certificate.
     */
    public readonly attrCertificateId: ros.IResolvable;

    /**
     * Create a new `ALIYUN::ApiGateway::CustomDomain`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: CustomDomainProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

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
