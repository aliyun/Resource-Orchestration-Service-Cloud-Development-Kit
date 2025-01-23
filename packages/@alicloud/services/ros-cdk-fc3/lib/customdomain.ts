import * as ros from '@alicloud/ros-cdk-core';
import { RosCustomDomain } from './fc3.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosCustomDomain as CustomDomainProperty };

/**
 * Properties for defining a `CustomDomain`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-fc3-customdomain
 */
export interface CustomDomainProps {

    /**
     * Property authConfig: Permission authentication configuration.
     */
    readonly authConfig: RosCustomDomain.AuthConfigProperty | ros.IResolvable;

    /**
     * Property domainName: Domain name. Fill in the custom domain name that has been filed in Ali cloud or access to the record.
     */
    readonly domainName: string | ros.IResolvable;

    /**
     * Property protocol: Protocol types supported by the domain name. Valid values:
     * - HTTP: Only HTTP protocol is supported. 
     * - HTTPS: HTTPS only is supported. 
     * - HTTP,HTTPS: Supports HTTP and HTTPS protocols.
     */
    readonly protocol: string | ros.IResolvable;

    /**
     * Property certConfig: HTTPS certificate information.
     */
    readonly certConfig?: RosCustomDomain.CertConfigProperty | ros.IResolvable;

    /**
     * Property routeConfig: Routing table: path to function mappingwhen a function is called with a custom domain name
     */
    readonly routeConfig?: RosCustomDomain.RouteConfigProperty | ros.IResolvable;

    /**
     * Property tlsConfig: TLS config.
     */
    readonly tlsConfig?: RosCustomDomain.TlsConfigProperty | ros.IResolvable;

    /**
     * Property wafConfig: Web application firewall configuration information.
     */
    readonly wafConfig?: RosCustomDomain.WafConfigProperty | ros.IResolvable;
}

/**
 * Represents a `CustomDomain`.
 */
export interface ICustomDomain extends ros.IResource {
    readonly props: CustomDomainProps;

    /**
     * Attribute DomainName: The domain name
     */
    readonly attrDomainName: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::FC3::CustomDomain`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosCustomDomain`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-fc3-customdomain
 */
export class CustomDomain extends ros.Resource implements ICustomDomain {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: CustomDomainProps;
    protected enableResourcePropertyConstraint: boolean;

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
            certConfig: props.certConfig,
            domainName: props.domainName,
            tlsConfig: props.tlsConfig,
            routeConfig: props.routeConfig,
            authConfig: props.authConfig,
            protocol: props.protocol,
            wafConfig: props.wafConfig,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosCustomDomain;
        this.attrDomainName = rosCustomDomain.attrDomainName;
    }
}
