import * as ros from '@alicloud/ros-cdk-core';
import { RosTransitRouterPeerAttachment } from './cen.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosTransitRouterPeerAttachment as TransitRouterPeerAttachmentProperty };

/**
 * Properties for defining a `ALIYUN::CEN::TransitRouterPeerAttachment`
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
     * Property resourceType: ResourceType
     */
    readonly resourceType?: string | ros.IResolvable;

    /**
     * Property routeTableAssociationEnabled:
     */
    readonly routeTableAssociationEnabled?: string | ros.IResolvable;

    /**
     * Property routeTablePropagationEnabled:
     */
    readonly routeTablePropagationEnabled?: string | ros.IResolvable;

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
 * A ROS resource type:  `ALIYUN::CEN::TransitRouterPeerAttachment`
 */
export class TransitRouterPeerAttachment extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

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
     * Create a new `ALIYUN::CEN::TransitRouterPeerAttachment`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: TransitRouterPeerAttachmentProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosTransitRouterPeerAttachment = new RosTransitRouterPeerAttachment(this, id,  {
            autoPublishRouteEnabled: props.autoPublishRouteEnabled,
            routeTableAssociationEnabled: props.routeTableAssociationEnabled,
            routeTablePropagationEnabled: props.routeTablePropagationEnabled,
            bandwidth: props.bandwidth,
            cenId: props.cenId,
            transitRouterAttachmentName: props.transitRouterAttachmentName,
            resourceType: props.resourceType,
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
