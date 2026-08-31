import * as ros from '@alicloud/ros-cdk-core';
import { RosTransitRouterPeerAttachments } from './cen.generated';
export { RosTransitRouterPeerAttachments as TransitRouterPeerAttachmentsProperty };
/**
 * Properties for defining a `TransitRouterPeerAttachments`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cen-transitrouterpeerattachments
 */
export interface TransitRouterPeerAttachmentsProps {
    /**
     * Property cenId: The ID of the CEN instance.
     */
    readonly cenId?: string | ros.IResolvable;
    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
    /**
     * Property regionId: The ID of the region where the transit router is deployed.
     */
    readonly regionId?: string | ros.IResolvable;
    /**
     * Property tag: Tags of cen transit router peer attachments..
     */
    readonly tag?: Array<ros.RosTag | ros.IResolvable> | ros.IResolvable;
    /**
     * Property transitRouterAttachmentId: The ID of the peer connection.
     */
    readonly transitRouterAttachmentId?: string | ros.IResolvable;
    /**
     * Property transitRouterId: The ID of the enterprise edition transit router.
     */
    readonly transitRouterId?: string | ros.IResolvable;
}
/**
 * Represents a `TransitRouterPeerAttachments`.
 */
export interface ITransitRouterPeerAttachments extends ros.IResource {
    readonly props: TransitRouterPeerAttachmentsProps;
    /**
     * Attribute TransitRouterPeerAttachmentIds: The list of The TransitRouterPeerAttachment IDs.
     */
    readonly attrTransitRouterPeerAttachmentIds: ros.IResolvable | string;
    /**
     * Attribute TransitRouterPeerAttachments: The information about TransitRouterPeerAttachments.
     */
    readonly attrTransitRouterPeerAttachments: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::CEN::TransitRouterPeerAttachments`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosTransitRouterPeerAttachments`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cen-transitrouterpeerattachments
 */
export declare class TransitRouterPeerAttachments extends ros.Resource implements ITransitRouterPeerAttachments {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: TransitRouterPeerAttachmentsProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute TransitRouterPeerAttachmentIds: The list of The TransitRouterPeerAttachment IDs.
     */
    readonly attrTransitRouterPeerAttachmentIds: ros.IResolvable | string;
    /**
     * Attribute TransitRouterPeerAttachments: The information about TransitRouterPeerAttachments.
     */
    readonly attrTransitRouterPeerAttachments: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props?: TransitRouterPeerAttachmentsProps, enableResourcePropertyConstraint?: boolean);
}
