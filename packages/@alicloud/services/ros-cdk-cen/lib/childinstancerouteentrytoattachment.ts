import * as ros from '@alicloud/ros-cdk-core';
import { RosChildInstanceRouteEntryToAttachment } from './cen.generated';
// Generated from the AliCloud ROS Resource Specification
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
export class ChildInstanceRouteEntryToAttachment extends ros.Resource {

    /**
     * Attribute CenId: The ID of the CEN instance.
     */
    public readonly attrCenId: ros.IResolvable;

    /**
     * Attribute DestinationCidrBlock: The destination CIDR block of the route.
     */
    public readonly attrDestinationCidrBlock: ros.IResolvable;

    /**
     * Attribute RouteTableId: The ID of the route table configured on the network instance.
     */
    public readonly attrRouteTableId: ros.IResolvable;

    /**
     * Attribute TransitRouterAttachmentId: The ID of the network instance connection.
     */
    public readonly attrTransitRouterAttachmentId: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ChildInstanceRouteEntryToAttachmentProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosChildInstanceRouteEntryToAttachment = new RosChildInstanceRouteEntryToAttachment(this, id,  {
            transitRouterAttachmentId: props.transitRouterAttachmentId,
            routeTableId: props.routeTableId,
            cenId: props.cenId,
            destinationCidrBlock: props.destinationCidrBlock,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosChildInstanceRouteEntryToAttachment;
        this.attrCenId = rosChildInstanceRouteEntryToAttachment.attrCenId;
        this.attrDestinationCidrBlock = rosChildInstanceRouteEntryToAttachment.attrDestinationCidrBlock;
        this.attrRouteTableId = rosChildInstanceRouteEntryToAttachment.attrRouteTableId;
        this.attrTransitRouterAttachmentId = rosChildInstanceRouteEntryToAttachment.attrTransitRouterAttachmentId;
    }
}
