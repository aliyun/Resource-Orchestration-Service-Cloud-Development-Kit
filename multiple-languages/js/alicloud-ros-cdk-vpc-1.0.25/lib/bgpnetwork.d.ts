import * as ros from '@alicloud/ros-cdk-core';
import { RosBgpNetwork } from './vpc.generated';
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
 * This class encapsulates and extends the ROS resource type `ALIYUN::VPC::BgpNetwork`, which is used to advertise a Border Gateway Protocol (BGP) network.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosBgpNetwork`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-bgpnetwork
 */
export declare class BgpNetwork extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: BgpNetworkProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute DstCidrBlock: The CIDR block of the virtual private cloud (VPC) or vSwitch that you want to connect
to a data center.
     */
    readonly attrDstCidrBlock: ros.IResolvable;
    /**
     * Attribute RouterId: The ID of the vRouter associated with the router interface.
     */
    readonly attrRouterId: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: BgpNetworkProps, enableResourcePropertyConstraint?: boolean);
}
