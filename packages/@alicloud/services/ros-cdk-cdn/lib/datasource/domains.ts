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
}

/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::CDN::Domains`, which is used to query information about Content Delivery Network (CDN) domain names.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosDomains`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cdn-domains
 */
export class Domains extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: DomainsProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute DomainNames: The list of domain names.
     */
    public readonly attrDomainNames: ros.IResolvable;

    /**
     * Attribute Domains: The list of domains.
     */
    public readonly attrDomains: ros.IResolvable;

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
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosDomains;
        this.attrDomainNames = rosDomains.attrDomainNames;
        this.attrDomains = rosDomains.attrDomains;
    }
}
