import * as ros from '@alicloud/ros-cdk-core';
import { RosBgpPeers } from './vpc.generated';
// Generated from the AliCloud ROS Resource Specification
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
 * This class encapsulates and extends the ROS resource type `DATASOURCE::VPC::BgpPeers`, which is used to query Border Gateway Protocol (BGP) peers in a region.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosBgpPeers`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-bgppeers
 */
export class BgpPeers extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: BgpPeersProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute BgpPeerIds: The list of The BGP peer ids.
     */
    public readonly attrBgpPeerIds: ros.IResolvable;

    /**
     * Attribute BgpPeers: The list of The BGP peers.
     */
    public readonly attrBgpPeers: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: BgpPeersProps = {}, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosBgpPeers = new RosBgpPeers(this, id,  {
            bgpPeerId: props.bgpPeerId,
            routerId: props.routerId,
            bgpGroupId: props.bgpGroupId,
            refreshOptions: props.refreshOptions === undefined || props.refreshOptions === null ? 'Never' : props.refreshOptions,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosBgpPeers;
        this.attrBgpPeerIds = rosBgpPeers.attrBgpPeerIds;
        this.attrBgpPeers = rosBgpPeers.attrBgpPeers;
    }
}
