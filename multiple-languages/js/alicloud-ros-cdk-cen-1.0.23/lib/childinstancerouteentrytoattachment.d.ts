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
 * This class encapsulates and extends the ROS resource type `ALIYUN::CEN::ChildInstanceRouteEntryToAttachment`, which is used to add a route to a network instance that is connected to an Enterprise Edition transit router.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosChildInstanceRouteEntryToAttachment`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-childinstancerouteentrytoattachment
 */
export declare class ChildInstanceRouteEntryToAttachment extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: ChildInstanceRouteEntryToAttachmentProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute CenId: The ID of the CEN instance.
     */
    readonly attrCenId: ros.IResolvable;
    /**
     * Attribute DestinationCidrBlock: The destination CIDR block of the route.
     */
    readonly attrDestinationCidrBlock: ros.IResolvable;
    /**
     * Attribute RouteTableId: The ID of the route table configured on the network instance.
     */
    readonly attrRouteTableId: ros.IResolvable;
    /**
     * Attribute TransitRouterAttachmentId: The ID of the network instance connection.
     */
    readonly attrTransitRouterAttachmentId: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ChildInstanceRouteEntryToAttachmentProps, enableResourcePropertyConstraint?: boolean);
}
