import * as ros from '@alicloud/ros-cdk-core';
import { RosNatIp } from './vpc.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosNatIp as NatIpProperty };

/**
 * Properties for defining a `ALIYUN::VPC::NatIp`
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
     * but cannot start with http:// or https://.
     */
    readonly natIpDescription: string | ros.IResolvable;

    /**
     * Property natIpName: The name of the NAT IP address.
     * The name must be 2 to 128 characters in length, and can contain letters, digits, periods
     * (.), underscores (_), and hyphens (-). It must start with a letter. It cannot start
     * with http:// or https://.
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
 * A ROS resource type:  `ALIYUN::VPC::NatIp`
 */
export class NatIp extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute NatIp: NAT IP address.
     */
    public readonly attrNatIp: ros.IResolvable;

    /**
     * Attribute NatIpId: The ID of the NAT IP address.
     */
    public readonly attrNatIpId: ros.IResolvable;

    /**
     * Create a new `ALIYUN::VPC::NatIp`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: NatIpProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosNatIp = new RosNatIp(this, id,  {
            natIp: props.natIp,
            natIpCidr: props.natIpCidr,
            natIpCidrId: props.natIpCidrId,
            natIpDescription: props.natIpDescription,
            natIpName: props.natIpName,
            natGatewayId: props.natGatewayId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosNatIp;
        this.attrNatIp = rosNatIp.attrNatIp;
        this.attrNatIpId = rosNatIp.attrNatIpId;
    }
}
