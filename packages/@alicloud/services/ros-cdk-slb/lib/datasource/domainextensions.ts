import * as ros from '@alicloud/ros-cdk-core';
import { RosDomainExtensions } from './slb.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosDomainExtensions as DomainExtensionsProperty };

/**
 * Properties for defining a `DATASOURCE::SLB::DomainExtensions`
 */
export interface DomainExtensionsProps {

    /**
     * Property listenerPort: The frontend port of the HTTPS listener that is configured for the Classic Load Balancer (CLB) instance.
     * Valid values: 1 to 65535.
     */
    readonly listenerPort: number | ros.IResolvable;

    /**
     * Property loadBalancerId: The ID of the CLB instance.
     */
    readonly loadBalancerId: string | ros.IResolvable;

    /**
     * Property domainExtensionId: The ID of the additional certificate.
     */
    readonly domainExtensionId?: string | ros.IResolvable;
}

/**
 * A ROS resource type:  `DATASOURCE::SLB::DomainExtensions`
 */
export class DomainExtensions extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute DomainExtensionIds: The list of domain extension IDs.
     */
    public readonly attrDomainExtensionIds: ros.IResolvable;

    /**
     * Attribute DomainExtensions: The list of domain extensions.
     */
    public readonly attrDomainExtensions: ros.IResolvable;

    /**
     * Create a new `DATASOURCE::SLB::DomainExtensions`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: DomainExtensionsProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosDomainExtensions = new RosDomainExtensions(this, id,  {
            listenerPort: props.listenerPort,
            domainExtensionId: props.domainExtensionId,
            loadBalancerId: props.loadBalancerId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosDomainExtensions;
        this.attrDomainExtensionIds = rosDomainExtensions.attrDomainExtensionIds;
        this.attrDomainExtensions = rosDomainExtensions.attrDomainExtensions;
    }
}
