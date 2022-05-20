import * as ros from '@alicloud/ros-cdk-core';
import { RosBgpPeer } from './vpc.generated';
export { RosBgpPeer as BgpPeerProperty };
/**
 * Properties for defining a `ALIYUN::VPC::BgpPeer`
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
 * A ROS resource type:  `ALIYUN::VPC::BgpPeer`
 */
export declare class BgpPeer extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute BgpPeerId: The ID of the BGP peer.
     */
    readonly attrBgpPeerId: ros.IResolvable;
    /**
     * Create a new `ALIYUN::VPC::BgpPeer`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: BgpPeerProps, enableResourcePropertyConstraint?: boolean);
}
//# sourceMappingURL=bgppeer.d.ts.map