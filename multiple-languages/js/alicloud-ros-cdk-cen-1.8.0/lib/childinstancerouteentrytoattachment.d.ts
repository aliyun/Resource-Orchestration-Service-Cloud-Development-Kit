import * as ros from '@alicloud/ros-cdk-core';
import { RosChildInstanceRouteEntryToAttachment } from './cen.generated';
export { RosChildInstanceRouteEntryToAttachment as ChildInstanceRouteEntryToAttachmentProperty };
/**
 * Properties for defining a `ChildInstanceRouteEntryToAttachment`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-childinstancerouteentrytoattachment
 */
export interface ChildInstanceRouteEntryToAttachmentProps {
    /**
     * Property cenId: The ID of the CEN instance.
     */
    readonly cenId: string | ros.IResolvable;
    /**
     * Property destinationCidrBlock: The destination CIDR block of the route.
     */
    readonly destinationCidrBlock: string | ros.IResolvable;
    /**
     * Property routeTableId: The ID of the route table configured on the network instance.
     */
    readonly routeTableId: string | ros.IResolvable;
    /**
     * Property transitRouterAttachmentId: The ID of the network instance connection.
     */
    readonly transitRouterAttachmentId: string | ros.IResolvable;
}
/**
 * Represents a `ChildInstanceRouteEntryToAttachment`.
 */
export interface IChildInstanceRouteEntryToAttachment extends ros.IResource {
    readonly props: ChildInstanceRouteEntryToAttachmentProps;
    /**
     * Attribute CenId: The ID of the CEN instance.
     */
    readonly attrCenId: ros.IResolvable | string;
    /**
     * Attribute DestinationCidrBlock: The destination CIDR block of the route.
     */
    readonly attrDestinationCidrBlock: ros.IResolvable | string;
    /**
     * Attribute RouteTableId: The ID of the route table configured on the network instance.
     */
    readonly attrRouteTableId: ros.IResolvable | string;
    /**
     * Attribute TransitRouterAttachmentId: The ID of the network instance connection.
     */
    readonly attrTransitRouterAttachmentId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::CEN::ChildInstanceRouteEntryToAttachment`, which is used to add a route to a network instance that is connected to an Enterprise Edition transit router.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosChildInstanceRouteEntryToAttachment`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-childinstancerouteentrytoattachment
 */
export declare class ChildInstanceRouteEntryToAttachment extends ros.Resource implements IChildInstanceRouteEntryToAttachment {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: ChildInstanceRouteEntryToAttachmentProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute CenId: The ID of the CEN instance.
     */
    readonly attrCenId: ros.IResolvable | string;
    /**
     * Attribute DestinationCidrBlock: The destination CIDR block of the route.
     */
    readonly attrDestinationCidrBlock: ros.IResolvable | string;
    /**
     * Attribute RouteTableId: The ID of the route table configured on the network instance.
     */
    readonly attrRouteTableId: ros.IResolvable | string;
    /**
     * Attribute TransitRouterAttachmentId: The ID of the network instance connection.
     */
    readonly attrTransitRouterAttachmentId: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ChildInstanceRouteEntryToAttachmentProps, enableResourcePropertyConstraint?: boolean);
}
