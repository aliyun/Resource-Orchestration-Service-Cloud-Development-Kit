import * as ros from '@alicloud/ros-cdk-core';
import { RosVPC } from './ecs.generated';
export { RosVPC as VPCProperty };
/**
 * Properties for defining a `VPC`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-vpc
 */
export interface VPCProps {
    /**
     * Property cidrBlock: The IP address range of the VPC in the CIDR block form. You can use the following IP address ranges and their subnets:
     * 10.0.0.0\/8
     * 172.16.0.0\/12 (Default)
     * 192.168.0.0\/16
     */
    readonly cidrBlock?: string | ros.IResolvable;
    /**
     * Property description: Description of the vpc, [2, 256] characters. Do not fill or empty, the default is empty.
     */
    readonly description?: string | ros.IResolvable;
    /**
     * Property enableIpv6: Whether to enable an IPv6 network cidr, the value is:False (default): not turned on.True: On.
     */
    readonly enableIpv6?: boolean | ros.IResolvable;
    /**
     * Property ipv6CidrBlock: IPv6 network cidr of the VPC.
     */
    readonly ipv6CidrBlock?: string | ros.IResolvable;
    /**
     * Property ipv6Isp: The Internet service provider (ISP) for IPv6 addresses of the VPC. Valid values:
     * BGP(default): Alibaba Cloud BGP IPv6
     * ChinaMobile: China Mobile (single line)
     * ChinaUnicom: China Unicom (single line)
     * ChinaTelecom: China Telecom (single line)
     * Note If your Alibaba Cloud account is allowed to activate single-ISP bandwidth, you can set the parameter to ChinaTelecom, ChinaUnicom, and ChinaMobile.
     */
    readonly ipv6Isp?: string | ros.IResolvable;
    /**
     * Property resourceGroupId: Resource group id.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * Property secondaryCidrBlocks: The secondary IPv4 CIDR blocks.
     *
     */
    readonly secondaryCidrBlocks?: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * Property tags: Tags to attach to vpc. Max support 20 tags to add during create vpc. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosVPC.TagsProperty[];
    /**
     * Property userCidr: The user CIDR block. Separate multiple CIDR blocks with commas (,). At most three CIDR blocks are supported.
     */
    readonly userCidr?: string | ros.IResolvable;
    /**
     * Property vpcName: Display name of the vpc instance, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'
     */
    readonly vpcName?: string | ros.IResolvable;
}
/**
 * Represents a `VPC`.
 */
export interface IVpc extends ros.IResource {
    readonly props: VPCProps;
    /**
     * Attribute RouteTableId: The router table id of created VPC.
     */
    readonly attrRouteTableId: ros.IResolvable | string;
    /**
     * Attribute VRouterId: Router id of created VPC.
     */
    readonly attrVRouterId: ros.IResolvable | string;
    /**
     * Attribute VpcId: Id of created VPC.
     */
    readonly attrVpcId: ros.IResolvable | string;
    /**
     * Attribute VpcName: The name of VPC
     */
    readonly attrVpcName: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ECS::VPC`, which is used to create a virtual private cloud (VPC).
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosVPC`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-vpc
 */
export declare class Vpc extends ros.Resource implements IVpc {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: VPCProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute RouteTableId: The router table id of created VPC.
     */
    readonly attrRouteTableId: ros.IResolvable | string;
    /**
     * Attribute VRouterId: Router id of created VPC.
     */
    readonly attrVRouterId: ros.IResolvable | string;
    /**
     * Attribute VpcId: Id of created VPC.
     */
    readonly attrVpcId: ros.IResolvable | string;
    /**
     * Attribute VpcName: The name of VPC
     */
    readonly attrVpcName: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props?: VPCProps, enableResourcePropertyConstraint?: boolean);
}
