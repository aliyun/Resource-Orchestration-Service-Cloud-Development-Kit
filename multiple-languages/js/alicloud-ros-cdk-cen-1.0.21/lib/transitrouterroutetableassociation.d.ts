import * as ros from '@alicloud/ros-cdk-core';
import { RosTransitRouterRouteTableAssociation } from './cen.generated';
export { RosTransitRouterRouteTableAssociation as TransitRouterRouteTableAssociationProperty };
/**
 * Properties for defining a `ALIYUN::CEN::TransitRouterRouteTableAssociation`
 */
export interface TransitRouterRouteTableAssociationProps {
    /**
     * Property transitRouterAttachmentId: TransitRouterAttachmentId
     */
    readonly transitRouterAttachmentId: string | ros.IResolvable;
    /**
     * Property transitRouterRouteTableId: TransitRouterRouteTableId
     */
    readonly transitRouterRouteTableId: string | ros.IResolvable;
}
/**
 * A ROS resource type:  `ALIYUN::CEN::TransitRouterRouteTableAssociation`
 */
export declare class TransitRouterRouteTableAssociation extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute ResourceId: ResourceId
     */
    readonly attrResourceId: ros.IResolvable;
    /**
     * Attribute ResourceType: ResourceType
     */
    readonly attrResourceType: ros.IResolvable;
    /**
     * Attribute TransitRouterAttachmentId: TransitRouterAttachmentId
     */
    readonly attrTransitRouterAttachmentId: ros.IResolvable;
    /**
     * Attribute TransitRouterRouteTableId: TransitRouterRouteTableId
     */
    readonly attrTransitRouterRouteTableId: ros.IResolvable;
    /**
     * Create a new `ALIYUN::CEN::TransitRouterRouteTableAssociation`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: TransitRouterRouteTableAssociationProps, enableResourcePropertyConstraint?: boolean);
}
