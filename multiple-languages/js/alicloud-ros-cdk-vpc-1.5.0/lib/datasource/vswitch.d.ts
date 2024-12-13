import * as ros from '@alicloud/ros-cdk-core';
import { RosVSwitch } from './vpc.generated';
export { RosVSwitch as VSwitchProperty };
/**
 * Properties for defining a `VSwitch`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-vswitch
 */
export interface VSwitchProps {
    /**
     * Property vSwitchId: The ID of the VSwitch.
     */
    readonly vSwitchId: string | ros.IResolvable;
    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::VPC::VSwitch`, which is used to query the information about a vSwitch.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosVSwitch`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-vswitch
 */
export declare class VSwitch extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: VSwitchProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute AvailableIpAddressCount: The number of available IP addresses.
     */
    readonly attrAvailableIpAddressCount: ros.IResolvable;
    /**
     * Attribute CidrBlock: The IPv4 CIDR block of the VSwitch.
     */
    readonly attrCidrBlock: ros.IResolvable;
    /**
     * Attribute CreateTime: The creation time of the VSwitch.
     */
    readonly attrCreateTime: ros.IResolvable;
    /**
     * Attribute Description: The description of VSwitch.
     */
    readonly attrDescription: ros.IResolvable;
    /**
     * Attribute Ipv6CidrBlock: The IPv6 CIDR block of the VSwitch.
     */
    readonly attrIpv6CidrBlock: ros.IResolvable;
    /**
     * Attribute IsDefault: Indicates whether the VSwitch is a default VSwitch.
     */
    readonly attrIsDefault: ros.IResolvable;
    /**
     * Attribute ResourceGroupId: The resource group id of VSwitch.
     */
    readonly attrResourceGroupId: ros.IResolvable;
    /**
     * Attribute RouteTableId: The route table id.
     */
    readonly attrRouteTableId: ros.IResolvable;
    /**
     * Attribute Tags: The tags of VSwitch.
     */
    readonly attrTags: ros.IResolvable;
    /**
     * Attribute VSwitchId: The ID of the VSwitch.
     */
    readonly attrVSwitchId: ros.IResolvable;
    /**
     * Attribute VSwitchName: The name of the VSwitch.
     */
    readonly attrVSwitchName: ros.IResolvable;
    /**
     * Attribute VpcId: The VPC ID.
     */
    readonly attrVpcId: ros.IResolvable;
    /**
     * Attribute ZoneId: The zone ID  of the resource.
     */
    readonly attrZoneId: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: VSwitchProps, enableResourcePropertyConstraint?: boolean);
}
