import * as ros from '@alicloud/ros-cdk-core';
import { RosNatIpCidrs } from './vpc.generated';
export { RosNatIpCidrs as NatIpCidrsProperty };
/**
 * Properties for defining a `DATASOURCE::VPC::NatIpCidrs`
 */
export interface NatIpCidrsProps {
    /**
     * Property natGatewayId: NAT IP ADDRESS range to the security group of the Kafka VPC NAT gateway instance ID.
     */
    readonly natGatewayId: string | ros.IResolvable;
    /**
     * Property natIpCidr: Create a NAT IP ADDRESS. The new address segment must meet the following conditions: belong to 10.0.0.0/8, 172.16.0.0/12 or 192.168.0.0/16 network segment and its subnet. Support the subnet mask of the number of bits in the range of 16 to 32-bit. If you want to use the IP address of a public network segment as the NAT IP ADDRESS, the Virtual Private Cloud (VPC NAT is already using the IP address of a public network of permissions. For more information, see create a virtual private cloud (VPC NAT gateway instance.
     */
    readonly natIpCidr?: string | ros.IResolvable;
}
/**
 * A ROS resource type:  `DATASOURCE::VPC::NatIpCidrs`
 */
export declare class NatIpCidrs extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute NatIpCidrIds: The list of nat ip cidr IDs.
     */
    readonly attrNatIpCidrIds: ros.IResolvable;
    /**
     * Attribute NatIpCidrs: The list of nat ip cidrs.
     */
    readonly attrNatIpCidrs: ros.IResolvable;
    /**
     * Create a new `DATASOURCE::VPC::NatIpCidrs`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: NatIpCidrsProps, enableResourcePropertyConstraint?: boolean);
}
