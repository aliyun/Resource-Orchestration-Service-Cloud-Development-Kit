import * as ros from '@alicloud/ros-cdk-core';
import { RosDomainExtensions } from './slb.generated';
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
export declare class DomainExtensions extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute DomainExtensionIds: The list of domain extension IDs.
     */
    readonly attrDomainExtensionIds: ros.IResolvable;
    /**
     * Attribute DomainExtensions: The list of domain extensions.
     */
    readonly attrDomainExtensions: ros.IResolvable;
    /**
     * Create a new `DATASOURCE::SLB::DomainExtensions`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: DomainExtensionsProps, enableResourcePropertyConstraint?: boolean);
}
