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
     * Property peerTransitRouterId: Peer forwarding router instance ID.
     */
    readonly peerTransitRouterId: string | ros.IResolvable;

    /**
     * Property autoPublishRouteEnabled: Whether to make the enterprise version forwarding router automatically publish routes across regions to the peer region.
     * false (default): No.
     * true: Yes.
     */
    readonly autoPublishRouteEnabled?: boolean | ros.IResolvable;

    /**
     * Property bandwidth: The bandwidth value for cross-region connections.Unit: Mbps.
     * When the BandwidthType value is BandwidthPackage, this parameter represents the bandwidth value that can be used by cross-region connections.
     * When the BandwidthType value is DataTransfer, this parameter represents the speed limit bandwidth value for cross-region connections.
     */
    readonly bandwidth?: number | ros.IResolvable;

    /**
     * Property bandwidthType: The bandwidth allocation method for cross-regional connections.Value:
     * BandwidthPackage: Allocate bandwidth from bandwidth packets.
     * DataTransfer: Do not allocate bandwidth for cross-region connections, and is billed based on usage traffic.
     */
    readonly bandwidthType?: string | ros.IResolvable;

    /**
     * Property cenBandwidthPackageId: The bandwidth packet ID to bind to across regions.
     * Note When the value of BandwidthType is DataTransfer, this item is not required.
     */
    readonly cenBandwidthPackageId?: string | ros.IResolvable;

    /**
     * Property cenId: Cloud Enterprise Network Instance ID.
     */
    readonly cenId?: string | ros.IResolvable;

    /**
     * Property defaultLinkType: Default link type.
     * Optional values are Platinum, Gold, and default to Gold.
     * And it can only be configured as Platinum (Platinum) when the bandwidth allocation method is billed by traffic.
     */
    readonly defaultLinkType?: string | ros.IResolvable;

    /**
     * Property peerTransitRouterRegionId: The region ID to which the peer forwarding router instance belongs.
     */
    readonly peerTransitRouterRegionId?: string | ros.IResolvable;

    /**
     * Property tags: The list of tags in the form of key\/value pairs. You can define a maximum of 20 tags.
     */
    readonly tags?: RosTransitRouterPeerAttachment.TagsProperty[];

    /**
     * Property transitRouterAttachmentDescription: Description information for cross-region connections.
     * The description can be empty or has a length of 1 to 256 characters and cannot start with http:\/\/ or https:\/\/.
     */
    readonly transitRouterAttachmentDescription?: string | ros.IResolvable;

    /**
     * Property transitRouterAttachmentName: The name of the cross-region connection.
     * The name can be empty or has a length of 1 to 128 characters, and cannot start with http:\/\/ or https:\/\/.
     */
    readonly transitRouterAttachmentName?: string | ros.IResolvable;

    /**
     * Property transitRouterId: Local Enterprise Edition forwarding router instance ID.
     */
    readonly transitRouterId?: string | ros.IResolvable;
}

/**
 * Represents a `TransitRouterPeerAttachment`.
 */
export interface ITransitRouterPeerAttachment extends ros.IResource {
    readonly props: TransitRouterPeerAttachmentProps;

    /**
     * Attribute TransitRouterAttachmentId: Cross-region connection ID.
     */
    readonly attrTransitRouterAttachmentId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::CEN::TransitRouterPeerAttachment`, which is used to create a cross-region connection for an Enterprise Edition transit router.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosTransitRouterPeerAttachment`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-transitrouterpeerattachment
 */
export class TransitRouterPeerAttachment extends ros.Resource implements ITransitRouterPeerAttachment {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: TransitRouterPeerAttachmentProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute TransitRouterAttachmentId: Cross-region connection ID.
     */
    public readonly attrTransitRouterAttachmentId: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: TransitRouterPeerAttachmentProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosTransitRouterPeerAttachment = new RosTransitRouterPeerAttachment(this, id,  {
            autoPublishRouteEnabled: props.autoPublishRouteEnabled,
            bandwidthType: props.bandwidthType,
            bandwidth: props.bandwidth,
            cenId: props.cenId,
            transitRouterAttachmentName: props.transitRouterAttachmentName,
            peerTransitRouterId: props.peerTransitRouterId,
            defaultLinkType: props.defaultLinkType,
            cenBandwidthPackageId: props.cenBandwidthPackageId,
            tags: props.tags,
            transitRouterAttachmentDescription: props.transitRouterAttachmentDescription,
            transitRouterId: props.transitRouterId,
            peerTransitRouterRegionId: props.peerTransitRouterRegionId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosTransitRouterPeerAttachment;
        this.attrTransitRouterAttachmentId = rosTransitRouterPeerAttachment.attrTransitRouterAttachmentId;
    }
}
