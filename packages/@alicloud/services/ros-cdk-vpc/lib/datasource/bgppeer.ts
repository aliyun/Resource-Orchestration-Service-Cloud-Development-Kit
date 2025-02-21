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
 * Represents a `BgpPeer`.
 */
export interface IBgpPeer extends ros.IResource {
    readonly props: BgpPeerProps;

    /**
     * Attribute AdvertisedRouteCount: The number of advertised routes.
     */
    readonly attrAdvertisedRouteCount: ros.IResolvable | string;

    /**
     * Attribute AuthKey: The authentication key of the BGP group.
     */
    readonly attrAuthKey: ros.IResolvable | string;

    /**
     * Attribute BfdMultiHop: The Bidirectional Forwarding Detection (BFD) hop count.
     */
    readonly attrBfdMultiHop: ros.IResolvable | string;

    /**
     * Attribute BgpGroupId: The ID of the BGP group.
     */
    readonly attrBgpGroupId: ros.IResolvable | string;

    /**
     * Attribute BgpPeerId: The ID of the BGP peer.
     */
    readonly attrBgpPeerId: ros.IResolvable | string;

    /**
     * Attribute BgpStatus: The status of the BGP connection. Valid values:
* Idle: The BGP connection is not used.
* Connect: The BGP connection is used.
* Active: The BGP connection is available.
* Established: The BGP connection is established.
* Down: The BGP connection is unavailable.
     */
    readonly attrBgpStatus: ros.IResolvable | string;

    /**
     * Attribute Description: The description of the BGP group.
     */
    readonly attrDescription: ros.IResolvable | string;

    /**
     * Attribute EnableBfd: Indicates whether BFD is enabled. Valid values:
* false
* true
     */
    readonly attrEnableBfd: ros.IResolvable | string;

    /**
     * Attribute GmtModified: The time when the BGP peer is modified.
     */
    readonly attrGmtModified: ros.IResolvable | string;

    /**
     * Attribute Hold: The hold time.
     */
    readonly attrHold: ros.IResolvable | string;

    /**
     * Attribute IpVersion: The version of the IP address.
     */
    readonly attrIpVersion: ros.IResolvable | string;

    /**
     * Attribute IsFake: Indicates whether a fake autonomous system number (ASN) is used. Valid values:
* false
* true
     */
    readonly attrIsFake: ros.IResolvable | string;

    /**
     * Attribute Keepalive: The Keepalive interval.
     */
    readonly attrKeepalive: ros.IResolvable | string;

    /**
     * Attribute LocalAsn: The ASN of the device on the Alibaba Cloud side.
     */
    readonly attrLocalAsn: ros.IResolvable | string;

    /**
     * Attribute Name: The name of the BGP peer.
     */
    readonly attrName: ros.IResolvable | string;

    /**
     * Attribute PeerAsn: The autonomous system number (ASN)of the BGP peer.
     */
    readonly attrPeerAsn: ros.IResolvable | string;

    /**
     * Attribute PeerIpAddress: The IP address of the BGP peer.
     */
    readonly attrPeerIpAddress: ros.IResolvable | string;

    /**
     * Attribute ReceivedRouteCount: The number of received routes.
     */
    readonly attrReceivedRouteCount: ros.IResolvable | string;

    /**
     * Attribute RouteLimit: The maximum number of routes.
     */
    readonly attrRouteLimit: ros.IResolvable | string;

    /**
     * Attribute RouterId: The Router ID.
     */
    readonly attrRouterId: ros.IResolvable | string;

    /**
     * Attribute Status: The status of the BGP peer. Valid values:
* Pending
* Available
* Modifying
* Deleting
* Deleted
     */
    readonly attrStatus: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::VPC::BgpPeer`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosBgpPeer`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-bgppeer
 */
export class BgpPeer extends ros.Resource implements IBgpPeer {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: BgpPeerProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute AdvertisedRouteCount: The number of advertised routes.
     */
    public readonly attrAdvertisedRouteCount: ros.IResolvable | string;

    /**
     * Attribute AuthKey: The authentication key of the BGP group.
     */
    public readonly attrAuthKey: ros.IResolvable | string;

    /**
     * Attribute BfdMultiHop: The Bidirectional Forwarding Detection (BFD) hop count.
     */
    public readonly attrBfdMultiHop: ros.IResolvable | string;

    /**
     * Attribute BgpGroupId: The ID of the BGP group.
     */
    public readonly attrBgpGroupId: ros.IResolvable | string;

    /**
     * Attribute BgpPeerId: The ID of the BGP peer.
     */
    public readonly attrBgpPeerId: ros.IResolvable | string;

    /**
     * Attribute BgpStatus: The status of the BGP connection. Valid values:
* Idle: The BGP connection is not used.
* Connect: The BGP connection is used.
* Active: The BGP connection is available.
* Established: The BGP connection is established.
* Down: The BGP connection is unavailable.
     */
    public readonly attrBgpStatus: ros.IResolvable | string;

    /**
     * Attribute Description: The description of the BGP group.
     */
    public readonly attrDescription: ros.IResolvable | string;

    /**
     * Attribute EnableBfd: Indicates whether BFD is enabled. Valid values:
* false
* true
     */
    public readonly attrEnableBfd: ros.IResolvable | string;

    /**
     * Attribute GmtModified: The time when the BGP peer is modified.
     */
    public readonly attrGmtModified: ros.IResolvable | string;

    /**
     * Attribute Hold: The hold time.
     */
    public readonly attrHold: ros.IResolvable | string;

    /**
     * Attribute IpVersion: The version of the IP address.
     */
    public readonly attrIpVersion: ros.IResolvable | string;

    /**
     * Attribute IsFake: Indicates whether a fake autonomous system number (ASN) is used. Valid values:
* false
* true
     */
    public readonly attrIsFake: ros.IResolvable | string;

    /**
     * Attribute Keepalive: The Keepalive interval.
     */
    public readonly attrKeepalive: ros.IResolvable | string;

    /**
     * Attribute LocalAsn: The ASN of the device on the Alibaba Cloud side.
     */
    public readonly attrLocalAsn: ros.IResolvable | string;

    /**
     * Attribute Name: The name of the BGP peer.
     */
    public readonly attrName: ros.IResolvable | string;

    /**
     * Attribute PeerAsn: The autonomous system number (ASN)of the BGP peer.
     */
    public readonly attrPeerAsn: ros.IResolvable | string;

    /**
     * Attribute PeerIpAddress: The IP address of the BGP peer.
     */
    public readonly attrPeerIpAddress: ros.IResolvable | string;

    /**
     * Attribute ReceivedRouteCount: The number of received routes.
     */
    public readonly attrReceivedRouteCount: ros.IResolvable | string;

    /**
     * Attribute RouteLimit: The maximum number of routes.
     */
    public readonly attrRouteLimit: ros.IResolvable | string;

    /**
     * Attribute RouterId: The Router ID.
     */
    public readonly attrRouterId: ros.IResolvable | string;

    /**
     * Attribute Status: The status of the BGP peer. Valid values:
* Pending
* Available
* Modifying
* Deleting
* Deleted
     */
    public readonly attrStatus: ros.IResolvable | string;

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
