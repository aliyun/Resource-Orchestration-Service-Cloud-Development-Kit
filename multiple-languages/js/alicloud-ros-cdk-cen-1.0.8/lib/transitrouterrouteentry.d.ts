import * as ros from '@alicloud/ros-cdk-core';
import { RosTransitRouterRouteEntry } from './cen.generated';
export { RosTransitRouterRouteEntry as TransitRouterRouteEntryProperty };
/**
 * Properties for defining a `ALIYUN::CEN::TransitRouterRouteEntry`
 */
export interface TransitRouterRouteEntryProps {
    /**
     * Property transitRouterRouteEntryDestinationCidrBlock: TransitRouterRouteEntryDestinationCidrBlock
     */
    readonly transitRouterRouteEntryDestinationCidrBlock: string | ros.IResolvable;
    /**
     * Property transitRouterRouteEntryNextHopType: TransitRouterRouteEntryNextHopType
     */
    readonly transitRouterRouteEntryNextHopType: string | ros.IResolvable;
    /**
     * Property transitRouterRouteTableId: TransitRouterRouteTableId
     */
    readonly transitRouterRouteTableId: string | ros.IResolvable;
    /**
     * Property transitRouterRouteEntryDescription: TransitRouterRouteEntryDescription
     */
    readonly transitRouterRouteEntryDescription?: string | ros.IResolvable;
    /**
     * Property transitRouterRouteEntryName: TransitRouterRouteEntryName
     */
    readonly transitRouterRouteEntryName?: string | ros.IResolvable;
    /**
     * Property transitRouterRouteEntryNextHopId: TransitRouterRouteEntryNextHopId
     */
    readonly transitRouterRouteEntryNextHopId?: string | ros.IResolvable;
}
/**
 * A ROS resource type:  `ALIYUN::CEN::TransitRouterRouteEntry`
 */
export declare class TransitRouterRouteEntry extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute TransitRouterRouteEntryDescription: TransitRouterRouteEntryDescription
     */
    readonly attrTransitRouterRouteEntryDescription: ros.IResolvable;
    /**
     * Attribute TransitRouterRouteEntryDestinationCidrBlock: TransitRouterRouteEntryDestinationCidrBlock
     */
    readonly attrTransitRouterRouteEntryDestinationCidrBlock: ros.IResolvable;
    /**
     * Attribute TransitRouterRouteEntryId: The first ID of the resource
     */
    readonly attrTransitRouterRouteEntryId: ros.IResolvable;
    /**
     * Attribute TransitRouterRouteEntryName: TransitRouterRouteEntryName
     */
    readonly attrTransitRouterRouteEntryName: ros.IResolvable;
    /**
     * Attribute TransitRouterRouteEntryNextHopId: TransitRouterRouteEntryNextHopId
     */
    readonly attrTransitRouterRouteEntryNextHopId: ros.IResolvable;
    /**
     * Attribute TransitRouterRouteEntryNextHopType: TransitRouterRouteEntryNextHopType
     */
    readonly attrTransitRouterRouteEntryNextHopType: ros.IResolvable;
    /**
     * Attribute TransitRouterRouteEntryType: TransitRouterRouteEntryType
     */
    readonly attrTransitRouterRouteEntryType: ros.IResolvable;
    /**
     * Attribute TransitRouterRouteTableId: TransitRouterRouteTableId
     */
    readonly attrTransitRouterRouteTableId: ros.IResolvable;
    /**
     * Create a new `ALIYUN::CEN::TransitRouterRouteEntry`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: TransitRouterRouteEntryProps, enableResourcePropertyConstraint?: boolean);
}
