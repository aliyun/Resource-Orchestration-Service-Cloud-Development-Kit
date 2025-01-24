import * as ros from '@alicloud/ros-cdk-core';
import { RosNatIp } from './vpc.generated';
export { RosNatIp as NatIpProperty };
/**
 * Properties for defining a `NatIp`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-natip
 */
export interface NatIpProps {
    /**
     * Property natGatewayId: The ID of the Virtual Private Cloud (VPC) NAT gateway for which you want to create
     * the NAT IP address.
     */
    readonly natGatewayId: string | ros.IResolvable;
    /**
     * Property natIpCidr: The CIDR block to which the NAT IP address belongs.
     */
    readonly natIpCidr: string | ros.IResolvable;
    /**
     * Property natIpDescription: The description of the NAT IP address.
     * The description must be 2 to 256 characters in length. It must start with a letter
     * but cannot start with http:\/\/ or https:\/\/.
     */
    readonly natIpDescription: string | ros.IResolvable;
    /**
     * Property natIpName: The name of the NAT IP address.
     * The name must be 2 to 128 characters in length, and can contain letters, digits, periods
     * (.), underscores (_), and hyphens (-). It must start with a letter. It cannot start
     * with http:\/\/ or https:\/\/.
     */
    readonly natIpName: string | ros.IResolvable;
    /**
     * Property natIp: The NAT IP address that you want to create.
     * If you do not specify an IP address, the system selects a random IP address from the
     * specified CIDR block.
     */
    readonly natIp?: string | ros.IResolvable;
    /**
     * Property natIpCidrId: The ID of the CIDR block to which the NAT IP address belongs.
     */
    readonly natIpCidrId?: string | ros.IResolvable;
}
/**
 * Represents a `NatIp`.
 */
export interface INatIp extends ros.IResource {
    readonly props: NatIpProps;
    /**
     * Attribute NatIp: NAT IP address.
     */
    readonly attrNatIp: ros.IResolvable | string;
    /**
     * Attribute NatIpId: The ID of the NAT IP address.
     */
    readonly attrNatIpId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::VPC::NatIp`, which is used to create a NAT IP address.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosNatIp`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-natip
 */
export declare class NatIp extends ros.Resource implements INatIp {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: NatIpProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute NatIp: NAT IP address.
     */
    readonly attrNatIp: ros.IResolvable | string;
    /**
     * Attribute NatIpId: The ID of the NAT IP address.
     */
    readonly attrNatIpId: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: NatIpProps, enableResourcePropertyConstraint?: boolean);
}
