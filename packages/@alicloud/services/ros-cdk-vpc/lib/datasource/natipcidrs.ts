import * as ros from '@alicloud/ros-cdk-core';
import { RosNatIpCidrs } from './vpc.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosNatIpCidrs as NatIpCidrsProperty };

/**
 * Properties for defining a `NatIpCidrs`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-natipcidrs
 */
export interface NatIpCidrsProps {

    /**
     * Property natGatewayId: NAT IP ADDRESS range to the security group of the Kafka VPC NAT gateway instance ID.
     */
    readonly natGatewayId: string | ros.IResolvable;

    /**
     * Property natIpCidr: Create a NAT IP ADDRESS. The new address segment must meet the following conditions: belong to 10.0.0.0\/8, 172.16.0.0\/12 or 192.168.0.0\/16 network segment and its subnet. Support the subnet mask of the number of bits in the range of 16 to 32-bit. If you want to use the IP address of a public network segment as the NAT IP ADDRESS, the Virtual Private Cloud (VPC NAT is already using the IP address of a public network of permissions. For more information, see create a virtual private cloud (VPC NAT gateway instance.
     */
    readonly natIpCidr?: string | ros.IResolvable;

    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}

/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::VPC::NatIpCidrs`, which is used to query the CIDR blocks of a NAT gateway.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosNatIpCidrs`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-natipcidrs
 */
export class NatIpCidrs extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: NatIpCidrsProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute NatIpCidrIds: The list of nat ip cidr IDs.
     */
    public readonly attrNatIpCidrIds: ros.IResolvable;

    /**
     * Attribute NatIpCidrs: The list of nat ip cidrs.
     */
    public readonly attrNatIpCidrs: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: NatIpCidrsProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosNatIpCidrs = new RosNatIpCidrs(this, id,  {
            natIpCidr: props.natIpCidr,
            natGatewayId: props.natGatewayId,
            refreshOptions: props.refreshOptions === undefined || props.refreshOptions === null ? 'Never' : props.refreshOptions,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosNatIpCidrs;
        this.attrNatIpCidrIds = rosNatIpCidrs.attrNatIpCidrIds;
        this.attrNatIpCidrs = rosNatIpCidrs.attrNatIpCidrs;
    }
}
