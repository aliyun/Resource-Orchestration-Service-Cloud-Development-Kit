import * as ros from '@alicloud/ros-cdk-core';
import { RosVpcCidrBlockAssociation } from './vpc.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosVpcCidrBlockAssociation as VpcCidrBlockAssociationProperty };

/**
 * Properties for defining a `VpcCidrBlockAssociation`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-vpccidrblockassociation
 */
export interface VpcCidrBlockAssociationProps {

    /**
     * Property vpcId: The ID of the VPC to which you want to add a secondary CIDR block.
     */
    readonly vpcId: string | ros.IResolvable;

    /**
     * Property ipamPoolId: The ID of the IP Address Manager (IPAM) pool that contains IPv4 addresses.
     */
    readonly ipamPoolId?: string | ros.IResolvable;

    /**
     * Property iPv6CidrBlock: The IPv6 CIDR block to be added.
     * Note You must and can specify only one of SecondaryCidrBlock and Ipv6CidrBlock.
     */
    readonly iPv6CidrBlock?: string | ros.IResolvable;

    /**
     * Property ipv6Isp: The type of the IPv6 CIDR block. Valid values:
     * BGP (default)
     * ChinaMobile
     * ChinaUnicom
     * ChinaTelecom
     * Note If your Alibaba Cloud account is allowed to activate single-ISP bandwidth, you can set this parameter to ChinaTelecom, ChinaUnicom, or ChinaMobile.
     */
    readonly ipv6Isp?: string | ros.IResolvable;

    /**
     * Property ipVersion: The version of the IP address. Valid values:
     * IPV4: the IPv4 address.
     * IPV6: the IPv6 address. If you set IpVersion to IPV6 and do not specify SecondaryCidrBlock, you can add a secondary IPv6 CIDR block to the VPC.
     */
    readonly ipVersion?: string | ros.IResolvable;

    /**
     * Property secondaryCidrBlock: The IPv4 CIDR block to be added. Take note of the following requirements:
     * You can specify one of the following standard IPv4 CIDR blocks or their subnets as the secondary IPv4 CIDR block of the VPC: 192.168.0.0\/16, 172.16.0.0\/12, and 10.0.0.0\/8.
     * You can also use a custom CIDR block other than 100.64.0.0\/10, 224.0.0.0\/4, 127.0.0.0\/8, 169.254.0.0\/16, or their subnets as the secondary IPv4 CIDR block of the VPC.
     * The CIDR block must meet the following requirements:
     * The CIDR block cannot start with 0. The subnet mask must be 8 to 28 bits in length.
     * The CIDR block cannot overlap with the primary CIDR block or an existing secondary CIDR block of the VPC.
     * Note You must and can specify only one of SecondaryCidrBlock and Ipv6CidrBlock.
     */
    readonly secondaryCidrBlock?: string | ros.IResolvable;

    /**
     * Property secondaryCidrMask: Add an additional network segment to the VPC from the iPam address pool by entering a mask.
     * Explain that the designated iPam address pool adds additional network segments to VPC, and the parameter SecondaryCidrblock or SecondaryCidrmask inputs at least one.
     */
    readonly secondaryCidrMask?: number | ros.IResolvable;
}

/**
 * Represents a `VpcCidrBlockAssociation`.
 */
export interface IVpcCidrBlockAssociation extends ros.IResource {
    readonly props: VpcCidrBlockAssociationProps;

    /**
     * Attribute VpcId: The ID of the VPC to which you want to add a secondary CIDR block.
     */
    readonly attrVpcId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::VPC::VpcCidrBlockAssociation`, which is used to add a secondary CIDR block to a virtual private cloud (VPC).
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosVpcCidrBlockAssociation`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-vpccidrblockassociation
 */
export class VpcCidrBlockAssociation extends ros.Resource implements IVpcCidrBlockAssociation {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: VpcCidrBlockAssociationProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute VpcId: The ID of the VPC to which you want to add a secondary CIDR block.
     */
    public readonly attrVpcId: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: VpcCidrBlockAssociationProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosVpcCidrBlockAssociation = new RosVpcCidrBlockAssociation(this, id,  {
            ipv6Isp: props.ipv6Isp,
            secondaryCidrMask: props.secondaryCidrMask,
            secondaryCidrBlock: props.secondaryCidrBlock,
            vpcId: props.vpcId,
            ipVersion: props.ipVersion,
            ipamPoolId: props.ipamPoolId,
            iPv6CidrBlock: props.iPv6CidrBlock,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosVpcCidrBlockAssociation;
        this.attrVpcId = rosVpcCidrBlockAssociation.attrVpcId;
    }
}
