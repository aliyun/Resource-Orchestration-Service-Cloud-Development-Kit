import * as ros from '@alicloud/ros-cdk-core';
import { RosTransitRouterRouteTableAssociationReplacement } from './cen.generated';
export { RosTransitRouterRouteTableAssociationReplacement as TransitRouterRouteTableAssociationReplacementProperty };
/**
 * Properties for defining a `TransitRouterRouteTableAssociationReplacement`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-transitrouterroutetableassociationreplacement
 */
export interface TransitRouterRouteTableAssociationReplacementProps {
    /**
     * Property transitRouterAttachmentId: The ID of the network instance connection.
     */
    readonly transitRouterAttachmentId: string | ros.IResolvable;
    /**
     * Property transitRouterRouteTableId: The ID of the transit router route table to be associated.
     */
    readonly transitRouterRouteTableId: string | ros.IResolvable;
}
/**
 * Represents a `TransitRouterRouteTableAssociationReplacement`.
 */
export interface ITransitRouterRouteTableAssociationReplacement extends ros.IResource {
    readonly props: TransitRouterRouteTableAssociationReplacementProps;
    /**
     * Attribute OriginalTransitRouterRouteTableId: The original transit router route table ID before replacement.
     */
    readonly attrOriginalTransitRouterRouteTableId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::CEN::TransitRouterRouteTableAssociationReplacement`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosTransitRouterRouteTableAssociationReplacement`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-transitrouterroutetableassociationreplacement
 */
export declare class TransitRouterRouteTableAssociationReplacement extends ros.Resource implements ITransitRouterRouteTableAssociationReplacement {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: TransitRouterRouteTableAssociationReplacementProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute OriginalTransitRouterRouteTableId: The original transit router route table ID before replacement.
     */
    readonly attrOriginalTransitRouterRouteTableId: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: TransitRouterRouteTableAssociationReplacementProps, enableResourcePropertyConstraint?: boolean);
}
