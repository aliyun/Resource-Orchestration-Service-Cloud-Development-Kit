import * as ros from '@alicloud/ros-cdk-core';
import { RosTransitRouterRouteTableAssociation } from './cen.generated';
export { RosTransitRouterRouteTableAssociation as TransitRouterRouteTableAssociationProperty };
/**
 * Properties for defining a `TransitRouterRouteTableAssociation`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-transitrouterroutetableassociation
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
 * This class encapsulates and extends the ROS resource type `ALIYUN::CEN::TransitRouterRouteTableAssociation`, which is used to create an associated forwarding correlation.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosTransitRouterRouteTableAssociation`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-transitrouterroutetableassociation
 */
export declare class TransitRouterRouteTableAssociation extends ros.Resource {
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
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: TransitRouterRouteTableAssociationProps, enableResourcePropertyConstraint?: boolean);
}
