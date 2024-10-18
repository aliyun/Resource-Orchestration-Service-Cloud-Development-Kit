import * as ros from '@alicloud/ros-cdk-core';
import { RosBgpPeer } from './vpc.generated';
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
export declare class BgpPeer extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: BgpPeerProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute AdvertisedRouteCount: The number of advertised routes.
     */
    readonly attrAdvertisedRouteCount: ros.IResolvable;
    /**
     * Attribute AuthKey: The authentication key of the BGP group.
     */
    readonly attrAuthKey: ros.IResolvable;
    /**
     * Attribute BfdMultiHop: The Bidirectional Forwarding Detection (BFD) hop count.
     */
    readonly attrBfdMultiHop: ros.IResolvable;
    /**
     * Attribute BgpGroupId: The ID of the BGP group.
     */
    readonly attrBgpGroupId: ros.IResolvable;
    /**
     * Attribute BgpPeerId: The ID of the BGP peer.
     */
    readonly attrBgpPeerId: ros.IResolvable;
    /**
     * Attribute BgpStatus: The status of the BGP connection. Valid values:
* Idle: The BGP connection is not used.
* Connect: The BGP connection is used.
* Active: The BGP connection is available.
* Established: The BGP connection is established.
* Down: The BGP connection is unavailable.
     */
    readonly attrBgpStatus: ros.IResolvable;
    /**
     * Attribute Description: The description of the BGP group.
     */
    readonly attrDescription: ros.IResolvable;
    /**
     * Attribute EnableBfd: Indicates whether BFD is enabled. Valid values:
* false
* true
     */
    readonly attrEnableBfd: ros.IResolvable;
    /**
     * Attribute GmtModified: The time when the BGP peer is modified.
     */
    readonly attrGmtModified: ros.IResolvable;
    /**
     * Attribute Hold: The hold time.
     */
    readonly attrHold: ros.IResolvable;
    /**
     * Attribute IpVersion: The version of the IP address.
     */
    readonly attrIpVersion: ros.IResolvable;
    /**
     * Attribute IsFake: Indicates whether a fake autonomous system number (ASN) is used. Valid values:
* false
* true
     */
    readonly attrIsFake: ros.IResolvable;
    /**
     * Attribute Keepalive: The Keepalive interval.
     */
    readonly attrKeepalive: ros.IResolvable;
    /**
     * Attribute LocalAsn: The ASN of the device on the Alibaba Cloud side.
     */
    readonly attrLocalAsn: ros.IResolvable;
    /**
     * Attribute Name: The name of the BGP peer.
     */
    readonly attrName: ros.IResolvable;
    /**
     * Attribute PeerAsn: The autonomous system number (ASN)of the BGP peer.
     */
    readonly attrPeerAsn: ros.IResolvable;
    /**
     * Attribute PeerIpAddress: The IP address of the BGP peer.
     */
    readonly attrPeerIpAddress: ros.IResolvable;
    /**
     * Attribute ReceivedRouteCount: The number of received routes.
     */
    readonly attrReceivedRouteCount: ros.IResolvable;
    /**
     * Attribute RouteLimit: The maximum number of routes.
     */
    readonly attrRouteLimit: ros.IResolvable;
    /**
     * Attribute RouterId: The Router ID.
     */
    readonly attrRouterId: ros.IResolvable;
    /**
     * Attribute Status: The status of the BGP peer. Valid values:
* Pending
* Available
* Modifying
* Deleting
* Deleted
     */
    readonly attrStatus: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props?: BgpPeerProps, enableResourcePropertyConstraint?: boolean);
}
