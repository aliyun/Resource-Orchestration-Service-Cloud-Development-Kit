import * as ros from '@alicloud/ros-cdk-core';
import { RosBgpPeer } from './vpc.generated';
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
     * Property enableBfd: Specifies whether to enable the Bidirectional Forwarding Detection (BFD) feature.
     * Valid values:
     * true: enables BFD.
     * false: disables BFD.
     */
    readonly enableBfd?: boolean | ros.IResolvable;
    /**
     * Property peerIpAddress: The IP address of the BGP peer.
     */
    readonly peerIpAddress?: string | ros.IResolvable;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::VPC::BgpPeer`, which is used to add a Border Gateway Protocol (BGP) peer to a specific BGP group.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosBgpPeer`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-bgppeer
 */
export declare class BgpPeer extends ros.Resource {
    /**
     * Attribute BgpPeerId: The ID of the BGP peer.
     */
    readonly attrBgpPeerId: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: BgpPeerProps, enableResourcePropertyConstraint?: boolean);
}
