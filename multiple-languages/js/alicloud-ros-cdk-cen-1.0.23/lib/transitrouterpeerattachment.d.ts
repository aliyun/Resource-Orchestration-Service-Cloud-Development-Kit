import * as ros from '@alicloud/ros-cdk-core';
import { RosTransitRouterPeerAttachment } from './cen.generated';
export { RosTransitRouterPeerAttachment as TransitRouterPeerAttachmentProperty };
/**
 * Properties for defining a `TransitRouterPeerAttachment`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-transitrouterpeerattachment
 */
export interface TransitRouterPeerAttachmentProps {
    /**
     * Property peerTransitRouterId: PeerTransitRouterId
     */
    readonly peerTransitRouterId: string | ros.IResolvable;
    /**
     * Property autoPublishRouteEnabled: AutoPublishRouteEnabled
     */
    readonly autoPublishRouteEnabled?: boolean | ros.IResolvable;
    /**
     * Property bandwidth: Bandwidth
     */
    readonly bandwidth?: number | ros.IResolvable;
    /**
     * Property cenBandwidthPackageId: BandwidthPackageId
     */
    readonly cenBandwidthPackageId?: string | ros.IResolvable;
    /**
     * Property cenId: CenId
     */
    readonly cenId?: string | ros.IResolvable;
    /**
     * Property peerTransitRouterRegionId: PeerTransitRouterRegionId
     */
    readonly peerTransitRouterRegionId?: string | ros.IResolvable;
    /**
     * Property transitRouterAttachmentDescription: TransitRouterAttachmentDescription
     */
    readonly transitRouterAttachmentDescription?: string | ros.IResolvable;
    /**
     * Property transitRouterAttachmentName: TransitRouterAttachmentName
     */
    readonly transitRouterAttachmentName?: string | ros.IResolvable;
    /**
     * Property transitRouterId: TransitRouterId
     */
    readonly transitRouterId?: string | ros.IResolvable;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::CEN::TransitRouterPeerAttachment`, which is used to create a cross-region connection for an Enterprise Edition transit router.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosTransitRouterPeerAttachment`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-transitrouterpeerattachment
 */
export declare class TransitRouterPeerAttachment extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: TransitRouterPeerAttachmentProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute AutoPublishRouteEnabled: AutoPublishRouteEnabled
     */
    readonly attrAutoPublishRouteEnabled: ros.IResolvable;
    /**
     * Attribute Bandwidth: Bandwidth
     */
    readonly attrBandwidth: ros.IResolvable;
    /**
     * Attribute CenBandwidthPackageId: BandwidthPackageId
     */
    readonly attrCenBandwidthPackageId: ros.IResolvable;
    /**
     * Attribute CenId: CenId
     */
    readonly attrCenId: ros.IResolvable;
    /**
     * Attribute ClientToken: ClientToken
     */
    readonly attrClientToken: ros.IResolvable;
    /**
     * Attribute GeographicSpanId: GeographicSpanId
     */
    readonly attrGeographicSpanId: ros.IResolvable;
    /**
     * Attribute PeerTransitRouterId: PeerTransitRouterId
     */
    readonly attrPeerTransitRouterId: ros.IResolvable;
    /**
     * Attribute PeerTransitRouterOwnerId: PeerTransitRouterOwnerId
     */
    readonly attrPeerTransitRouterOwnerId: ros.IResolvable;
    /**
     * Attribute PeerTransitRouterRegionId: PeerTransitRouterRegionId
     */
    readonly attrPeerTransitRouterRegionId: ros.IResolvable;
    /**
     * Attribute ResourceType: ResourceType
     */
    readonly attrResourceType: ros.IResolvable;
    /**
     * Attribute TransitRouterAttachmentDescription: TransitRouterAttachmentDescription
     */
    readonly attrTransitRouterAttachmentDescription: ros.IResolvable;
    /**
     * Attribute TransitRouterAttachmentId: The first ID of the resource
     */
    readonly attrTransitRouterAttachmentId: ros.IResolvable;
    /**
     * Attribute TransitRouterAttachmentName: TransitRouterAttachmentName
     */
    readonly attrTransitRouterAttachmentName: ros.IResolvable;
    /**
     * Attribute TransitRouterId: TransitRouterId
     */
    readonly attrTransitRouterId: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: TransitRouterPeerAttachmentProps, enableResourcePropertyConstraint?: boolean);
}
