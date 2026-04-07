import * as ros from '@alicloud/ros-cdk-core';
import { RosBgpPeer } from './vpc.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosBgpPeer as BgpPeerProperty };

/**
 * Properties for defining a `BgpPeer`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-bgppeer
 */
export interface BgpPeerProps {

    /**
     * Property bgpGroupId: The ID of the BGP group.
     */
    readonly bgpGroupId: string | ros.IResolvable;

    /**
     * Property bfdMultiHop: The BFD hop count. Valid values: **1** to **255**.
     * When enabling BFD, this parameter must be configured.
     * It specifies the maximum number of hops that a packet can traverse from source to destination. You can set different hop counts based on actual physical link conditions.
     * When using BFD in a multi-cloud environment or direct fiber connection without intermediate bridging devices, change the default BFD hop count from **255** to **1**.
     */
    readonly bfdMultiHop?: number | ros.IResolvable;

    /**
     * Property enableBfd: Specifies whether to enable the Bidirectional Forwarding Detection (BFD) feature.
     * Valid values:
     * true: enables BFD.
     * false: disables BFD.
     */
    readonly enableBfd?: boolean | ros.IResolvable;

    /**
     * Property ipVersion: The IP version. Valid values:
     * - **IPv4** (default): IPv4 version.
     * - **IPv6**: IPv6 version. IPv6 is supported only when the VBR associated with the BGP group has IPv6 enabled.
     */
    readonly ipVersion?: string | ros.IResolvable;

    /**
     * Property peerIpAddress: The IP address of the BGP peer.
     */
    readonly peerIpAddress?: string | ros.IResolvable;
}

/**
 * Represents a `BgpPeer`.
 */
export interface IBgpPeer extends ros.IResource {
    readonly props: BgpPeerProps;

    /**
     * Attribute BgpPeerId: The ID of the BGP peer.
     */
    readonly attrBgpPeerId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::VPC::BgpPeer`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosBgpPeer`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-bgppeer
 */
export class BgpPeer extends ros.Resource implements IBgpPeer {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: BgpPeerProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute BgpPeerId: The ID of the BGP peer.
     */
    public readonly attrBgpPeerId: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: BgpPeerProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosBgpPeer = new RosBgpPeer(this, id,  {
            peerIpAddress: props.peerIpAddress,
            ipVersion: props.ipVersion === undefined || props.ipVersion === null ? 'IPv4' : props.ipVersion,
            enableBfd: props.enableBfd,
            bfdMultiHop: props.bfdMultiHop,
            bgpGroupId: props.bgpGroupId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosBgpPeer;
        this.attrBgpPeerId = rosBgpPeer.attrBgpPeerId;
    }
}
