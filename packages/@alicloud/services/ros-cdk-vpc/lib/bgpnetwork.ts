import * as ros from '@alicloud/ros-cdk-core';
import { RosBgpNetwork } from './vpc.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosBgpNetwork as BgpNetworkProperty };

/**
 * Properties for defining a `BgpNetwork`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-bgpnetwork
 */
export interface BgpNetworkProps {

    /**
     * Property dstCidrBlock: The CIDR block of the virtual private cloud (VPC) or vSwitch that you want to connect
     * to a data center.
     */
    readonly dstCidrBlock: string | ros.IResolvable;

    /**
     * Property routerId: The ID of the vRouter associated with the router interface.
     */
    readonly routerId: string | ros.IResolvable;
}

/**
 * Represents a `BgpNetwork`.
 */
export interface IBgpNetwork extends ros.IResource {
    readonly props: BgpNetworkProps;

    /**
     * Attribute DstCidrBlock: The CIDR block of the virtual private cloud (VPC) or vSwitch that you want to connect
to a data center.
     */
    readonly attrDstCidrBlock: ros.IResolvable | string;

    /**
     * Attribute RouterId: The ID of the vRouter associated with the router interface.
     */
    readonly attrRouterId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::VPC::BgpNetwork`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosBgpNetwork`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-bgpnetwork
 */
export class BgpNetwork extends ros.Resource implements IBgpNetwork {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: BgpNetworkProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute DstCidrBlock: The CIDR block of the virtual private cloud (VPC) or vSwitch that you want to connect
to a data center.
     */
    public readonly attrDstCidrBlock: ros.IResolvable | string;

    /**
     * Attribute RouterId: The ID of the vRouter associated with the router interface.
     */
    public readonly attrRouterId: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: BgpNetworkProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosBgpNetwork = new RosBgpNetwork(this, id,  {
            dstCidrBlock: props.dstCidrBlock,
            routerId: props.routerId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosBgpNetwork;
        this.attrDstCidrBlock = rosBgpNetwork.attrDstCidrBlock;
        this.attrRouterId = rosBgpNetwork.attrRouterId;
    }
}
