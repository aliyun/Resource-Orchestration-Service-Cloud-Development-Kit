import * as ros from '@alicloud/ros-cdk-core';
import { RosVpc } from './vpc.generated';
// Generated from the AliCloud ROS Resource Specification
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
 * This class encapsulates and extends the ROS resource type `DATASOURCE::VPC::Vpc`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosVpc`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-vpc
 */
export class Vpc extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: VpcProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute CidrBlock: The IPv4 CIDR block of the VPC.
     */
    public readonly attrCidrBlock: ros.IResolvable;

    /**
     * Attribute ClassicLinkEnabled: status of vpc  ClassicLink..
     */
    public readonly attrClassicLinkEnabled: ros.IResolvable;

    /**
     * Attribute CreateTime: The time at which the VPC was created.
     */
    public readonly attrCreateTime: ros.IResolvable;

    /**
     * Attribute Description: The description of the VPC.
     */
    public readonly attrDescription: ros.IResolvable;

    /**
     * Attribute DhcpOptionsSetId: The ID of the DHCP option set.
     */
    public readonly attrDhcpOptionsSetId: ros.IResolvable;

    /**
     * Attribute Ipv6CidrBlock: The ipv6 cidr block of vpc.
     */
    public readonly attrIpv6CidrBlock: ros.IResolvable;

    /**
     * Attribute Ipv6CidrBlocks: The IPv6 network segment of the VPC.
     */
    public readonly attrIpv6CidrBlocks: ros.IResolvable;

    /**
     * Attribute IsDefault: Indicates whether to query the default VPC in the specified region. Valid values: 
- true (default): All VPCs in the specified region are queried.
- false: The default VPC is not queried.
     */
    public readonly attrIsDefault: ros.IResolvable;

    /**
     * Attribute ResourceGroupId: The ID of the resource group to which the VPC belongs.
     */
    public readonly attrResourceGroupId: ros.IResolvable;

    /**
     * Attribute RouterId: The ID of the VRouter.
     */
    public readonly attrRouterId: ros.IResolvable;

    /**
     * Attribute SecondaryCidrBlocks: Additional network segment information.
     */
    public readonly attrSecondaryCidrBlocks: ros.IResolvable;

    /**
     * Attribute Tags: The tags of Vpc.
     */
    public readonly attrTags: ros.IResolvable;

    /**
     * Attribute UserCidrs: A list of user CIDRs.
     */
    public readonly attrUserCidrs: ros.IResolvable;

    /**
     * Attribute VSwitchIds: A list of VSwitches in the VPC.
     */
    public readonly attrVSwitchIds: ros.IResolvable;

    /**
     * Attribute VpcId: The ID of the VPC.
     */
    public readonly attrVpcId: ros.IResolvable;

    /**
     * Attribute VpcName: The name of the VPC.
     */
    public readonly attrVpcName: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: VpcProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosVpc = new RosVpc(this, id,  {
            vpcId: props.vpcId,
            refreshOptions: props.refreshOptions === undefined || props.refreshOptions === null ? 'Never' : props.refreshOptions,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosVpc;
        this.attrCidrBlock = rosVpc.attrCidrBlock;
        this.attrClassicLinkEnabled = rosVpc.attrClassicLinkEnabled;
        this.attrCreateTime = rosVpc.attrCreateTime;
        this.attrDescription = rosVpc.attrDescription;
        this.attrDhcpOptionsSetId = rosVpc.attrDhcpOptionsSetId;
        this.attrIpv6CidrBlock = rosVpc.attrIpv6CidrBlock;
        this.attrIpv6CidrBlocks = rosVpc.attrIpv6CidrBlocks;
        this.attrIsDefault = rosVpc.attrIsDefault;
        this.attrResourceGroupId = rosVpc.attrResourceGroupId;
        this.attrRouterId = rosVpc.attrRouterId;
        this.attrSecondaryCidrBlocks = rosVpc.attrSecondaryCidrBlocks;
        this.attrTags = rosVpc.attrTags;
        this.attrUserCidrs = rosVpc.attrUserCidrs;
        this.attrVSwitchIds = rosVpc.attrVSwitchIds;
        this.attrVpcId = rosVpc.attrVpcId;
        this.attrVpcName = rosVpc.attrVpcName;
    }
}
