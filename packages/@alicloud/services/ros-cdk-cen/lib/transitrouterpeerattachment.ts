import * as ros from '@alicloud/ros-cdk-core';
import { RosTransitRouterPeerAttachment } from './cen.generated';
// Generated from the AliCloud ROS Resource Specification
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
export class TransitRouterPeerAttachment extends ros.Resource {

    /**
     * Attribute AutoPublishRouteEnabled: AutoPublishRouteEnabled
     */
    public readonly attrAutoPublishRouteEnabled: ros.IResolvable;

    /**
     * Attribute Bandwidth: Bandwidth
     */
    public readonly attrBandwidth: ros.IResolvable;

    /**
     * Attribute CenBandwidthPackageId: BandwidthPackageId
     */
    public readonly attrCenBandwidthPackageId: ros.IResolvable;

    /**
     * Attribute CenId: CenId
     */
    public readonly attrCenId: ros.IResolvable;

    /**
     * Attribute ClientToken: ClientToken
     */
    public readonly attrClientToken: ros.IResolvable;

    /**
     * Attribute GeographicSpanId: GeographicSpanId
     */
    public readonly attrGeographicSpanId: ros.IResolvable;

    /**
     * Attribute PeerTransitRouterId: PeerTransitRouterId
     */
    public readonly attrPeerTransitRouterId: ros.IResolvable;

    /**
     * Attribute PeerTransitRouterOwnerId: PeerTransitRouterOwnerId
     */
    public readonly attrPeerTransitRouterOwnerId: ros.IResolvable;

    /**
     * Attribute PeerTransitRouterRegionId: PeerTransitRouterRegionId
     */
    public readonly attrPeerTransitRouterRegionId: ros.IResolvable;

    /**
     * Attribute ResourceType: ResourceType
     */
    public readonly attrResourceType: ros.IResolvable;

    /**
     * Attribute TransitRouterAttachmentDescription: TransitRouterAttachmentDescription
     */
    public readonly attrTransitRouterAttachmentDescription: ros.IResolvable;

    /**
     * Attribute TransitRouterAttachmentId: The first ID of the resource
     */
    public readonly attrTransitRouterAttachmentId: ros.IResolvable;

    /**
     * Attribute TransitRouterAttachmentName: TransitRouterAttachmentName
     */
    public readonly attrTransitRouterAttachmentName: ros.IResolvable;

    /**
     * Attribute TransitRouterId: TransitRouterId
     */
    public readonly attrTransitRouterId: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: TransitRouterPeerAttachmentProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosTransitRouterPeerAttachment = new RosTransitRouterPeerAttachment(this, id,  {
            autoPublishRouteEnabled: props.autoPublishRouteEnabled,
            bandwidth: props.bandwidth,
            cenId: props.cenId,
            transitRouterAttachmentName: props.transitRouterAttachmentName,
            peerTransitRouterId: props.peerTransitRouterId,
            cenBandwidthPackageId: props.cenBandwidthPackageId,
            transitRouterAttachmentDescription: props.transitRouterAttachmentDescription,
            transitRouterId: props.transitRouterId,
            peerTransitRouterRegionId: props.peerTransitRouterRegionId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosTransitRouterPeerAttachment;
        this.attrAutoPublishRouteEnabled = rosTransitRouterPeerAttachment.attrAutoPublishRouteEnabled;
        this.attrBandwidth = rosTransitRouterPeerAttachment.attrBandwidth;
        this.attrCenBandwidthPackageId = rosTransitRouterPeerAttachment.attrCenBandwidthPackageId;
        this.attrCenId = rosTransitRouterPeerAttachment.attrCenId;
        this.attrClientToken = rosTransitRouterPeerAttachment.attrClientToken;
        this.attrGeographicSpanId = rosTransitRouterPeerAttachment.attrGeographicSpanId;
        this.attrPeerTransitRouterId = rosTransitRouterPeerAttachment.attrPeerTransitRouterId;
        this.attrPeerTransitRouterOwnerId = rosTransitRouterPeerAttachment.attrPeerTransitRouterOwnerId;
        this.attrPeerTransitRouterRegionId = rosTransitRouterPeerAttachment.attrPeerTransitRouterRegionId;
        this.attrResourceType = rosTransitRouterPeerAttachment.attrResourceType;
        this.attrTransitRouterAttachmentDescription = rosTransitRouterPeerAttachment.attrTransitRouterAttachmentDescription;
        this.attrTransitRouterAttachmentId = rosTransitRouterPeerAttachment.attrTransitRouterAttachmentId;
        this.attrTransitRouterAttachmentName = rosTransitRouterPeerAttachment.attrTransitRouterAttachmentName;
        this.attrTransitRouterId = rosTransitRouterPeerAttachment.attrTransitRouterId;
    }
}
