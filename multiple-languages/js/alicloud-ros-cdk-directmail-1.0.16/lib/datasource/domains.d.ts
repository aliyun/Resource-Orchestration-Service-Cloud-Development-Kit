import * as ros from '@alicloud/ros-cdk-core';
import { RosDomains } from './directmail.generated';
export { RosDomains as DomainsProperty };
/**
 * Properties for defining a `DATASOURCE::DirectMail::Domains`
 */
export interface DomainsProps {
}
/**
 * A ROS resource type:  `DATASOURCE::DirectMail::Domains`
 */
export declare class Domains extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute DomainIds: The list of domain IDs.
     */
    readonly attrDomainIds: ros.IResolvable;
    /**
     * Attribute Domains: The list of domains.
     */
    readonly attrDomains: ros.IResolvable;
    /**
     * Create a new `DATASOURCE::DirectMail::Domains`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props?: DomainsProps, enableResourcePropertyConstraint?: boolean);
}
