import * as ros from '@alicloud/ros-cdk-core';
import { RosBgpPeer } from './vpc.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosBgpPeer as BgpPeerProperty };

/**
 * Properties for defining a `BgpPeer`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-bgppeer
 */
export interface BgpPeerProps {

    /**
     * Property bgpPeerId: The ID of the BGP peer.
     */
    readonly bgpPeerId?: string | ros.IResolvable;

    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}

/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::VPC::BgpPeer`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosBgpPeer`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-bgppeer
 */
export class BgpPeer extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: BgpPeerProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute AdvertisedRouteCount: The number of advertised routes.
     */
    public readonly attrAdvertisedRouteCount: ros.IResolvable;

    /**
     * Attribute AuthKey: The authentication key of the BGP group.
     */
    public readonly attrAuthKey: ros.IResolvable;

    /**
     * Attribute BfdMultiHop: The Bidirectional Forwarding Detection (BFD) hop count.
     */
    public readonly attrBfdMultiHop: ros.IResolvable;

    /**
     * Attribute BgpGroupId: The ID of the BGP group.
     */
    public readonly attrBgpGroupId: ros.IResolvable;

    /**
     * Attribute BgpPeerId: The ID of the BGP peer.
     */
    public readonly attrBgpPeerId: ros.IResolvable;

    /**
     * Attribute BgpStatus: The status of the BGP connection. Valid values:
* Idle: The BGP connection is not used.
* Connect: The BGP connection is used.
* Active: The BGP connection is available.
* Established: The BGP connection is established.
* Down: The BGP connection is unavailable.
     */
    public readonly attrBgpStatus: ros.IResolvable;

    /**
     * Attribute Description: The description of the BGP group.
     */
    public readonly attrDescription: ros.IResolvable;

    /**
     * Attribute EnableBfd: Indicates whether BFD is enabled. Valid values:
* false
* true
     */
    public readonly attrEnableBfd: ros.IResolvable;

    /**
     * Attribute GmtModified: The time when the BGP peer is modified.
     */
    public readonly attrGmtModified: ros.IResolvable;

    /**
     * Attribute Hold: The hold time.
     */
    public readonly attrHold: ros.IResolvable;

    /**
     * Attribute IpVersion: The version of the IP address.
     */
    public readonly attrIpVersion: ros.IResolvable;

    /**
     * Attribute IsFake: Indicates whether a fake autonomous system number (ASN) is used. Valid values:
* false
* true
     */
    public readonly attrIsFake: ros.IResolvable;

    /**
     * Attribute Keepalive: The Keepalive interval.
     */
    public readonly attrKeepalive: ros.IResolvable;

    /**
     * Attribute LocalAsn: The ASN of the device on the Alibaba Cloud side.
     */
    public readonly attrLocalAsn: ros.IResolvable;

    /**
     * Attribute Name: The name of the BGP peer.
     */
    public readonly attrName: ros.IResolvable;

    /**
     * Attribute PeerAsn: The autonomous system number (ASN)of the BGP peer.
     */
    public readonly attrPeerAsn: ros.IResolvable;

    /**
     * Attribute PeerIpAddress: The IP address of the BGP peer.
     */
    public readonly attrPeerIpAddress: ros.IResolvable;

    /**
     * Attribute ReceivedRouteCount: The number of received routes.
     */
    public readonly attrReceivedRouteCount: ros.IResolvable;

    /**
     * Attribute RouteLimit: The maximum number of routes.
     */
    public readonly attrRouteLimit: ros.IResolvable;

    /**
     * Attribute RouterId: The Router ID.
     */
    public readonly attrRouterId: ros.IResolvable;

    /**
     * Attribute Status: The status of the BGP peer. Valid values:
* Pending
* Available
* Modifying
* Deleting
* Deleted
     */
    public readonly attrStatus: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: BgpPeerProps = {}, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosBgpPeer = new RosBgpPeer(this, id,  {
            bgpPeerId: props.bgpPeerId,
            refreshOptions: props.refreshOptions === undefined || props.refreshOptions === null ? 'Never' : props.refreshOptions,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosBgpPeer;
        this.attrAdvertisedRouteCount = rosBgpPeer.attrAdvertisedRouteCount;
        this.attrAuthKey = rosBgpPeer.attrAuthKey;
        this.attrBfdMultiHop = rosBgpPeer.attrBfdMultiHop;
        this.attrBgpGroupId = rosBgpPeer.attrBgpGroupId;
        this.attrBgpPeerId = rosBgpPeer.attrBgpPeerId;
        this.attrBgpStatus = rosBgpPeer.attrBgpStatus;
        this.attrDescription = rosBgpPeer.attrDescription;
        this.attrEnableBfd = rosBgpPeer.attrEnableBfd;
        this.attrGmtModified = rosBgpPeer.attrGmtModified;
        this.attrHold = rosBgpPeer.attrHold;
        this.attrIpVersion = rosBgpPeer.attrIpVersion;
        this.attrIsFake = rosBgpPeer.attrIsFake;
        this.attrKeepalive = rosBgpPeer.attrKeepalive;
        this.attrLocalAsn = rosBgpPeer.attrLocalAsn;
        this.attrName = rosBgpPeer.attrName;
        this.attrPeerAsn = rosBgpPeer.attrPeerAsn;
        this.attrPeerIpAddress = rosBgpPeer.attrPeerIpAddress;
        this.attrReceivedRouteCount = rosBgpPeer.attrReceivedRouteCount;
        this.attrRouteLimit = rosBgpPeer.attrRouteLimit;
        this.attrRouterId = rosBgpPeer.attrRouterId;
        this.attrStatus = rosBgpPeer.attrStatus;
    }
}
