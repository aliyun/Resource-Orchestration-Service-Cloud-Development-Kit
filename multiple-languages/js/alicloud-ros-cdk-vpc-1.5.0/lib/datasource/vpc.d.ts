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
 * This class encapsulates and extends the ROS resource type `DATASOURCE::VPC::Vpc`, which is used to query the information about a virtual private cloud (VPC).
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosVpc`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-vpc
 */
export declare class Vpc extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: VpcProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute CidrBlock: The IPv4 CIDR block of the VPC.
     */
    readonly attrCidrBlock: ros.IResolvable;
    /**
     * Attribute ClassicLinkEnabled: status of vpc  ClassicLink..
     */
    readonly attrClassicLinkEnabled: ros.IResolvable;
    /**
     * Attribute CreateTime: The time at which the VPC was created.
     */
    readonly attrCreateTime: ros.IResolvable;
    /**
     * Attribute Description: The description of the VPC.
     */
    readonly attrDescription: ros.IResolvable;
    /**
     * Attribute DhcpOptionsSetId: The ID of the DHCP option set.
     */
    readonly attrDhcpOptionsSetId: ros.IResolvable;
    /**
     * Attribute Ipv6CidrBlock: The ipv6 cidr block of vpc.
     */
    readonly attrIpv6CidrBlock: ros.IResolvable;
    /**
     * Attribute Ipv6CidrBlocks: The IPv6 network segment of the VPC.
     */
    readonly attrIpv6CidrBlocks: ros.IResolvable;
    /**
     * Attribute IsDefault: Indicates whether to query the default VPC in the specified region. Valid values:
- true (default): All VPCs in the specified region are queried.
- false: The default VPC is not queried.
     */
    readonly attrIsDefault: ros.IResolvable;
    /**
     * Attribute ResourceGroupId: The ID of the resource group to which the VPC belongs.
     */
    readonly attrResourceGroupId: ros.IResolvable;
    /**
     * Attribute RouterId: The ID of the VRouter.
     */
    readonly attrRouterId: ros.IResolvable;
    /**
     * Attribute SecondaryCidrBlocks: Additional network segment information.
     */
    readonly attrSecondaryCidrBlocks: ros.IResolvable;
    /**
     * Attribute Tags: The tags of Vpc.
     */
    readonly attrTags: ros.IResolvable;
    /**
     * Attribute UserCidrs: A list of user CIDRs.
     */
    readonly attrUserCidrs: ros.IResolvable;
    /**
     * Attribute VSwitchIds: A list of VSwitches in the VPC.
     */
    readonly attrVSwitchIds: ros.IResolvable;
    /**
     * Attribute VpcId: The ID of the VPC.
     */
    readonly attrVpcId: ros.IResolvable;
    /**
     * Attribute VpcName: The name of the VPC.
     */
    readonly attrVpcName: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: VpcProps, enableResourcePropertyConstraint?: boolean);
}
