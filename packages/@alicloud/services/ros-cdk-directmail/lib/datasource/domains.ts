import * as ros from '@alicloud/ros-cdk-core';
import { RosDomains } from './directmail.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosDomains as DomainsProperty };

/**
 * Properties for defining a `DATASOURCE::DirectMail::Domains`
 */
export interface DomainsProps {
}

/**
 * A ROS resource type:  `DATASOURCE::DirectMail::Domains`
 */
export class Domains extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute DomainIds: The list of domain IDs.
     */
    public readonly attrDomainIds: ros.IResolvable;

    /**
     * Attribute Domains: The list of domains.
     */
    public readonly attrDomains: ros.IResolvable;

    /**
     * Create a new `DATASOURCE::DirectMail::Domains`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: DomainsProps = {}, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosDomains = new RosDomains(this, id,  {
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        props;
        this.resource = rosDomains;
        this.attrDomainIds = rosDomains.attrDomainIds;
        this.attrDomains = rosDomains.attrDomains;
    }
}
