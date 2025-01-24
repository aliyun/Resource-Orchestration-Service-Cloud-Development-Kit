import * as ros from '@alicloud/ros-cdk-core';
import { RosCustomDomain } from './fc.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosCustomDomain as CustomDomainProperty };

/**
 * Properties for defining a `CustomDomain`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-fc-customdomain
 */
export interface CustomDomainProps {

    /**
     * Property domainName: domain name
     */
    readonly domainName: string | ros.IResolvable;

    /**
     * Property protocol: HTTP or HTTP,HTTPS
     */
    readonly protocol: string | ros.IResolvable;

    /**
     * Property apiVersion: api version
     */
    readonly apiVersion?: string | ros.IResolvable;

    /**
     * Property certConfig: certificate info
     */
    readonly certConfig?: RosCustomDomain.CertConfigProperty | ros.IResolvable;

    /**
     * Property routeConfig: Routing table: path to function mappingwhen a function is called with a custom domain name
     */
    readonly routeConfig?: RosCustomDomain.RouteConfigProperty | ros.IResolvable;
}

/**
 * Represents a `CustomDomain`.
 */
export interface ICustomDomain extends ros.IResource {
    readonly props: CustomDomainProps;

    /**
     * Attribute Domain: The domain with protocol.
     */
    readonly attrDomain: ros.IResolvable | string;

    /**
     * Attribute DomainName: The domain name
     */
    readonly attrDomainName: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::FC::CustomDomain`, which is used to create a custom domain name.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosCustomDomain`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-fc-customdomain
 */
export class CustomDomain extends ros.Resource implements ICustomDomain {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: CustomDomainProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute Domain: The domain with protocol.
     */
    public readonly attrDomain: ros.IResolvable | string;

    /**
     * Attribute DomainName: The domain name
     */
    public readonly attrDomainName: ros.IResolvable | string;

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
            apiVersion: props.apiVersion,
            certConfig: props.certConfig,
            domainName: props.domainName,
            routeConfig: props.routeConfig,
            protocol: props.protocol,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosCustomDomain;
        this.attrDomain = rosCustomDomain.attrDomain;
        this.attrDomainName = rosCustomDomain.attrDomainName;
    }
}
