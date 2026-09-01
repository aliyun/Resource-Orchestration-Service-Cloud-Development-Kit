import * as ros from '@alicloud/ros-cdk-core';
import { RosDomains } from './cdn.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosDomains as DomainsProperty };

/**
 * Properties for defining a `Domains`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cdn-domains
 */
export interface DomainsProps {

    /**
     * Property domainName: The accelerated domain name. You can specify only one domain name.
     */
    readonly domainName: string | ros.IResolvable;

    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}

/**
 * Represents a `Domains`.
 */
export interface IDomains extends ros.IResource {
    readonly props: DomainsProps;

    /**
     * Attribute DomainNames: The list of domain names.
     */
    readonly attrDomainNames: ros.IResolvable | string;

    /**
     * Attribute Domains: The list of domains.
     */
    readonly attrDomains: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::CDN::Domains`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosDomains`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cdn-domains
 */
export class Domains extends ros.Resource implements IDomains {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: DomainsProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute DomainNames: The list of domain names.
     */
    public readonly attrDomainNames: ros.IResolvable | string;

    /**
     * Attribute Domains: The list of domains.
     */
    public readonly attrDomains: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: DomainsProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosDomains = new RosDomains(this, id,  {
            domainName: props.domainName,
            refreshOptions: props.refreshOptions === undefined || props.refreshOptions === null ? 'Never' : props.refreshOptions,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosDomains;
        this.attrDomainNames = rosDomains.attrDomainNames;
        this.attrDomains = rosDomains.attrDomains;
    }
}
