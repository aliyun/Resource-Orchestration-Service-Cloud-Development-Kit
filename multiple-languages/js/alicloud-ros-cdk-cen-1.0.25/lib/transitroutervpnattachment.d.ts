import * as ros from '@alicloud/ros-cdk-core';
import { RosTransitRouterVpnAttachment } from './cen.generated';
export { RosTransitRouterVpnAttachment as TransitRouterVpnAttachmentProperty };
/**
 * Properties for defining a `TransitRouterVpnAttachment`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-transitroutervpnattachment
 */
export interface TransitRouterVpnAttachmentProps {
    /**
     * Property vpnId: IPsec connection ID
     */
    readonly vpnId: string | ros.IResolvable;
    /**
     * Property zoneId: Availability zone ID in the current region.
     */
    readonly zoneId: string | ros.IResolvable;
    /**
     * Property autoPublishRouteEnabled: Whether to allow forwarding router instances to automatically publish route entries to IPsec connections. Default is true.
     */
    readonly autoPublishRouteEnabled?: boolean | ros.IResolvable;
    /**
     * Property cenId: The ID of the CEN instance.
     */
    readonly cenId?: string | ros.IResolvable;
    /**
     * Property deletionForce: Whether to forcefully delete the VPN connection.
     */
    readonly deletionForce?: boolean | ros.IResolvable;
    /**
     * Property routeTableAssociationEnabled: Whether to enable route association and forwarding relationship.
     */
    readonly routeTableAssociationEnabled?: boolean | ros.IResolvable;
    /**
     * Property routeTablePropagationEnabled: Whether to enable route learning relationships.
     */
    readonly routeTablePropagationEnabled?: boolean | ros.IResolvable;
    /**
     * Property tags: Tags to attach to TransitRouterVpnAttachment. Max support 20 tags to add during create TransitRouterVpnAttachment. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosTransitRouterVpnAttachment.TagsProperty[];
    /**
     * Property transitRouterAttachmentDescription: Description of the VPN connection.
     */
    readonly transitRouterAttachmentDescription?: string | ros.IResolvable;
    /**
     * Property transitRouterAttachmentName: The name of the VPN connection.
     */
    readonly transitRouterAttachmentName?: string | ros.IResolvable;
    /**
     * Property transitRouterId: Forwarding router instance ID
     */
    readonly transitRouterId?: string | ros.IResolvable;
    /**
     * Property vpnOwnerId: Alibaba Cloud account (main account) ID to which the IPsec connection belongs.
     */
    readonly vpnOwnerId?: string | ros.IResolvable;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::CEN::TransitRouterVpnAttachment`, which is used to create a VPN attachment.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosTransitRouterVpnAttachment`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-transitroutervpnattachment
 */
export declare class TransitRouterVpnAttachment extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: TransitRouterVpnAttachmentProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute TransitRouterAttachmentId: The ID of the VPN connection.
     */
    readonly attrTransitRouterAttachmentId: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: TransitRouterVpnAttachmentProps, enableResourcePropertyConstraint?: boolean);
}
