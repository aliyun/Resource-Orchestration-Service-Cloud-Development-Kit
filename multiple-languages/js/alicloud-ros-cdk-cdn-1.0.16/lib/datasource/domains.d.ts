import * as ros from '@alicloud/ros-cdk-core';
import { RosDomains } from './cdn.generated';
export { RosDomains as DomainsProperty };
/**
 * Properties for defining a `DATASOURCE::CDN::Domains`
 */
export interface DomainsProps {
    /**
     * Property domainName: The accelerated domain name. You can specify only one domain name.
     */
    readonly domainName: string | ros.IResolvable;
}
/**
 * A ROS resource type:  `DATASOURCE::CDN::Domains`
 */
export declare class Domains extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute DomainNames: The list of domain names.
     */
    readonly attrDomainNames: ros.IResolvable;
    /**
     * Attribute Domains: The list of domains.
     */
    readonly attrDomains: ros.IResolvable;
    /**
     * Create a new `DATASOURCE::CDN::Domains`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: DomainsProps, enableResourcePropertyConstraint?: boolean);
}
