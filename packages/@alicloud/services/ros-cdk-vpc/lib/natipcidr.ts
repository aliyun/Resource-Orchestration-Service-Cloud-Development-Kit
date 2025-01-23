import * as ros from '@alicloud/ros-cdk-core';
import { RosNatIpCidr } from './vpc.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosNatIpCidr as NatIpCidrProperty };

/**
 * Properties for defining a `NatIpCidr`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-natipcidr
 */
export interface NatIpCidrProps {

    /**
     * Property natGatewayId: The ID of the Virtual Private Cloud (VPC) NAT gateway with which you want to associate the CIDR block.
     */
    readonly natGatewayId: string | ros.IResolvable;

    /**
     * Property natIpCidr: The NAT CIDR block that you want to associate with the NAT gateway.
     * The new CIDR block must meet the following conditions:
     * The NAT CIDR block must fall within 10.0.0.0\/8, 172.16.0.0\/12, 192.168.0.0\/16, or their subnets.
     * The subnet mask must be 16 to 32 bits in length.
     * The NAT CIDR block cannot overlap with the private CIDR block of the VPC to which the NAT gateway belongs. If you want to use other IP addresses from the private CIDR block of the VPC to provide NAT services, create a vSwitch and attach the vSwitch to another VPC NAT gateway.
     * If you want to use public IP addresses to provide NAT services, make sure that the public IP addresses fall within a customer CIDR block of the VPC to which the VPC NAT gateway belongs. For more information, see What is customer CIDR block?.
     */
    readonly natIpCidr: string | ros.IResolvable;

    /**
     * Property natIpCidrDescription: The description of the NAT CIDR block.
     * The description must be 2 to 256 characters in length and start with a letter. The description cannot start with http:\/\/ or https:\/\/.
     */
    readonly natIpCidrDescription: string | ros.IResolvable;

    /**
     * Property natIpCidrName: The name of the CIDR block.
     * The name must be 2 to 128 characters in length, and can contain letters, digits, periods (.), underscores (_), and hyphens (-). It must start with a letter. The name must start with a letter and cannot start with http:\/\/ or https:\/\/.
     */
    readonly natIpCidrName: string | ros.IResolvable;
}

/**
 * Represents a `NatIpCidr`.
 */
export interface INatIpCidr extends ros.IResource {
    readonly props: NatIpCidrProps;

    /**
     * Attribute NatIpCidrId: The ID of the NAT CIDR block.
     */
    readonly attrNatIpCidrId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::VPC::NatIpCidr`, which is used to create a NAT CIDR block.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosNatIpCidr`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-natipcidr
 */
export class NatIpCidr extends ros.Resource implements INatIpCidr {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: NatIpCidrProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute NatIpCidrId: The ID of the NAT CIDR block.
     */
    public readonly attrNatIpCidrId: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: NatIpCidrProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosNatIpCidr = new RosNatIpCidr(this, id,  {
            natIpCidr: props.natIpCidr,
            natIpCidrDescription: props.natIpCidrDescription,
            natIpCidrName: props.natIpCidrName,
            natGatewayId: props.natGatewayId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosNatIpCidr;
        this.attrNatIpCidrId = rosNatIpCidr.attrNatIpCidrId;
    }
}
