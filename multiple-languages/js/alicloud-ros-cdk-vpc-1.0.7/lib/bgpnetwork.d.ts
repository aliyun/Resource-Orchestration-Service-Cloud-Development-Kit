import * as ros from '@alicloud/ros-cdk-core';
import { RosBgpNetwork } from './vpc.generated';
export { RosBgpNetwork as BgpNetworkProperty };
/**
 * Properties for defining a `ALIYUN::VPC::BgpNetwork`
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
 * A ROS resource type:  `ALIYUN::VPC::BgpNetwork`
 */
export declare class BgpNetwork extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
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
     * Create a new `ALIYUN::VPC::BgpNetwork`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: BgpNetworkProps, enableResourcePropertyConstraint?: boolean);
}
//# sourceMappingURL=bgpnetwork.d.ts.map