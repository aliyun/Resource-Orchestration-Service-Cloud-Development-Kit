import * as ros from '@alicloud/ros-cdk-core';
import { RosBgpPeers } from './vpc.generated';
export { RosBgpPeers as BgpPeersProperty };
/**
 * Properties for defining a `BgpPeers`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-bgppeers
 */
export interface BgpPeersProps {
    /**
     * Property bgpGroupId: The ID of the BGP group to which the BGP peer that you want to query belongs.
     */
    readonly bgpGroupId?: string | ros.IResolvable;
    /**
     * Property bgpPeerId: The ID of the BGP peer that you want to query.
     */
    readonly bgpPeerId?: string | ros.IResolvable;
    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
    /**
     * Property routerId: The ID of the virtual border router (VBR) that is associated with the BGP peer that you want to query.
     */
    readonly routerId?: string | ros.IResolvable;
}
/**
 * Represents a `BgpPeers`.
 */
export interface IBgpPeers extends ros.IResource {
    readonly props: BgpPeersProps;
    /**
     * Attribute BgpPeerIds: The list of The BGP peer ids.
     */
    readonly attrBgpPeerIds: ros.IResolvable | string;
    /**
     * Attribute BgpPeers: The list of The BGP peers.
     */
    readonly attrBgpPeers: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::VPC::BgpPeers`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosBgpPeers`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-bgppeers
 */
export declare class BgpPeers extends ros.Resource implements IBgpPeers {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: BgpPeersProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute BgpPeerIds: The list of The BGP peer ids.
     */
    readonly attrBgpPeerIds: ros.IResolvable | string;
    /**
     * Attribute BgpPeers: The list of The BGP peers.
     */
    readonly attrBgpPeers: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props?: BgpPeersProps, enableResourcePropertyConstraint?: boolean);
}
