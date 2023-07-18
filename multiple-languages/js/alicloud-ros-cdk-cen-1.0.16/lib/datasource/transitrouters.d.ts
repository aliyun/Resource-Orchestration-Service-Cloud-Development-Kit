import * as ros from '@alicloud/ros-cdk-core';
import { RosTransitRouters } from './cen.generated';
export { RosTransitRouters as TransitRoutersProperty };
/**
 * Properties for defining a `DATASOURCE::CEN::TransitRouters`
 */
export interface TransitRoutersProps {
    /**
     * Property cenId: The ID of the CEN instance.
     */
    readonly cenId: string | ros.IResolvable;
    /**
     * Property regionId: The ID of the region where the transit router is deployed.
     * You can call the DescribeRegions operation to query region IDs.
     */
    readonly regionId?: string | ros.IResolvable;
    /**
     * Property transitRouterId: The ID of the transit router.
     */
    readonly transitRouterId?: string | ros.IResolvable;
}
/**
 * A ROS resource type:  `DATASOURCE::CEN::TransitRouters`
 */
export declare class TransitRouters extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute TransitRouterIds: The list of TransitRouter IDs.
     */
    readonly attrTransitRouterIds: ros.IResolvable;
    /**
     * Attribute TransitRouters: The list of TransitRouters.
     */
    readonly attrTransitRouters: ros.IResolvable;
    /**
     * Create a new `DATASOURCE::CEN::TransitRouters`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: TransitRoutersProps, enableResourcePropertyConstraint?: boolean);
}
