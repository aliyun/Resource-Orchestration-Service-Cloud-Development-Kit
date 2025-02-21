import * as ros from '@alicloud/ros-cdk-core';
import { RosVpc } from './vpc.generated';
export { RosVpc as VpcProperty };
/**
 * Properties for defining a `Vpc`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-vpc
 */
export interface VpcProps {
    /**
     * Property vpcId: The ID of the VPC.
     */
    readonly vpcId: string | ros.IResolvable;
    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * Represents a `Vpc`.
 */
export interface IVpc extends ros.IResource {
    readonly props: VpcProps;
    /**
     * Attribute CidrBlock: The IPv4 CIDR block of the VPC.
     */
    readonly attrCidrBlock: ros.IResolvable | string;
    /**
     * Attribute ClassicLinkEnabled: status of vpc  ClassicLink..
     */
    readonly attrClassicLinkEnabled: ros.IResolvable | string;
    /**
     * Attribute CreateTime: The time at which the VPC was created.
     */
    readonly attrCreateTime: ros.IResolvable | string;
    /**
     * Attribute Description: The description of the VPC.
     */
    readonly attrDescription: ros.IResolvable | string;
    /**
     * Attribute DhcpOptionsSetId: The ID of the DHCP option set.
     */
    readonly attrDhcpOptionsSetId: ros.IResolvable | string;
    /**
     * Attribute Ipv6CidrBlock: The ipv6 cidr block of vpc.
     */
    readonly attrIpv6CidrBlock: ros.IResolvable | string;
    /**
     * Attribute Ipv6CidrBlocks: The IPv6 network segment of the VPC.
     */
    readonly attrIpv6CidrBlocks: ros.IResolvable | string;
    /**
     * Attribute IsDefault: Indicates whether to query the default VPC in the specified region. Valid values:
- true (default): All VPCs in the specified region are queried.
- false: The default VPC is not queried.
     */
    readonly attrIsDefault: ros.IResolvable | string;
    /**
     * Attribute ResourceGroupId: The ID of the resource group to which the VPC belongs.
     */
    readonly attrResourceGroupId: ros.IResolvable | string;
    /**
     * Attribute RouterId: The ID of the VRouter.
     */
    readonly attrRouterId: ros.IResolvable | string;
    /**
     * Attribute SecondaryCidrBlocks: Additional network segment information.
     */
    readonly attrSecondaryCidrBlocks: ros.IResolvable | string;
    /**
     * Attribute Tags: The tags of Vpc.
     */
    readonly attrTags: ros.IResolvable | string;
    /**
     * Attribute UserCidrs: A list of user CIDRs.
     */
    readonly attrUserCidrs: ros.IResolvable | string;
    /**
     * Attribute VSwitchIds: A list of VSwitches in the VPC.
     */
    readonly attrVSwitchIds: ros.IResolvable | string;
    /**
     * Attribute VpcId: The ID of the VPC.
     */
    readonly attrVpcId: ros.IResolvable | string;
    /**
     * Attribute VpcName: The name of the VPC.
     */
    readonly attrVpcName: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::VPC::Vpc`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosVpc`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-vpc
 */
export declare class Vpc extends ros.Resource implements IVpc {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: VpcProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute CidrBlock: The IPv4 CIDR block of the VPC.
     */
    readonly attrCidrBlock: ros.IResolvable | string;
    /**
     * Attribute ClassicLinkEnabled: status of vpc  ClassicLink..
     */
    readonly attrClassicLinkEnabled: ros.IResolvable | string;
    /**
     * Attribute CreateTime: The time at which the VPC was created.
     */
    readonly attrCreateTime: ros.IResolvable | string;
    /**
     * Attribute Description: The description of the VPC.
     */
    readonly attrDescription: ros.IResolvable | string;
    /**
     * Attribute DhcpOptionsSetId: The ID of the DHCP option set.
     */
    readonly attrDhcpOptionsSetId: ros.IResolvable | string;
    /**
     * Attribute Ipv6CidrBlock: The ipv6 cidr block of vpc.
     */
    readonly attrIpv6CidrBlock: ros.IResolvable | string;
    /**
     * Attribute Ipv6CidrBlocks: The IPv6 network segment of the VPC.
     */
    readonly attrIpv6CidrBlocks: ros.IResolvable | string;
    /**
     * Attribute IsDefault: Indicates whether to query the default VPC in the specified region. Valid values:
- true (default): All VPCs in the specified region are queried.
- false: The default VPC is not queried.
     */
    readonly attrIsDefault: ros.IResolvable | string;
    /**
     * Attribute ResourceGroupId: The ID of the resource group to which the VPC belongs.
     */
    readonly attrResourceGroupId: ros.IResolvable | string;
    /**
     * Attribute RouterId: The ID of the VRouter.
     */
    readonly attrRouterId: ros.IResolvable | string;
    /**
     * Attribute SecondaryCidrBlocks: Additional network segment information.
     */
    readonly attrSecondaryCidrBlocks: ros.IResolvable | string;
    /**
     * Attribute Tags: The tags of Vpc.
     */
    readonly attrTags: ros.IResolvable | string;
    /**
     * Attribute UserCidrs: A list of user CIDRs.
     */
    readonly attrUserCidrs: ros.IResolvable | string;
    /**
     * Attribute VSwitchIds: A list of VSwitches in the VPC.
     */
    readonly attrVSwitchIds: ros.IResolvable | string;
    /**
     * Attribute VpcId: The ID of the VPC.
     */
    readonly attrVpcId: ros.IResolvable | string;
    /**
     * Attribute VpcName: The name of the VPC.
     */
    readonly attrVpcName: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: VpcProps, enableResourcePropertyConstraint?: boolean);
}
