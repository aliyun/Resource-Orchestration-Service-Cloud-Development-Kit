import * as ros from '@alicloud/ros-cdk-core';
import { RosVSwitch } from './vpc.generated';
// Generated from the AliCloud ROS Resource Specification
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
 * Represents a `VSwitch`.
 */
export interface IVSwitch extends ros.IResource {
    readonly props: VSwitchProps;

    /**
     * Attribute AvailableIpAddressCount: The number of available IP addresses.
     */
    readonly attrAvailableIpAddressCount: ros.IResolvable | string;

    /**
     * Attribute CidrBlock: The IPv4 CIDR block of the VSwitch.
     */
    readonly attrCidrBlock: ros.IResolvable | string;

    /**
     * Attribute CreateTime: The creation time of the VSwitch.
     */
    readonly attrCreateTime: ros.IResolvable | string;

    /**
     * Attribute Description: The description of VSwitch.
     */
    readonly attrDescription: ros.IResolvable | string;

    /**
     * Attribute Ipv6CidrBlock: The IPv6 CIDR block of the VSwitch.
     */
    readonly attrIpv6CidrBlock: ros.IResolvable | string;

    /**
     * Attribute IsDefault: Indicates whether the VSwitch is a default VSwitch.
     */
    readonly attrIsDefault: ros.IResolvable | string;

    /**
     * Attribute ResourceGroupId: The resource group id of VSwitch.
     */
    readonly attrResourceGroupId: ros.IResolvable | string;

    /**
     * Attribute RouteTableId: The route table id.
     */
    readonly attrRouteTableId: ros.IResolvable | string;

    /**
     * Attribute Tags: The tags of VSwitch.
     */
    readonly attrTags: ros.IResolvable | string;

    /**
     * Attribute VSwitchId: The ID of the VSwitch.
     */
    readonly attrVSwitchId: ros.IResolvable | string;

    /**
     * Attribute VSwitchName: The name of the VSwitch.
     */
    readonly attrVSwitchName: ros.IResolvable | string;

    /**
     * Attribute VpcId: The VPC ID.
     */
    readonly attrVpcId: ros.IResolvable | string;

    /**
     * Attribute ZoneId: The zone ID  of the resource.
     */
    readonly attrZoneId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::VPC::VSwitch`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosVSwitch`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-vswitch
 */
export class VSwitch extends ros.Resource implements IVSwitch {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: VSwitchProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute AvailableIpAddressCount: The number of available IP addresses.
     */
    public readonly attrAvailableIpAddressCount: ros.IResolvable | string;

    /**
     * Attribute CidrBlock: The IPv4 CIDR block of the VSwitch.
     */
    public readonly attrCidrBlock: ros.IResolvable | string;

    /**
     * Attribute CreateTime: The creation time of the VSwitch.
     */
    public readonly attrCreateTime: ros.IResolvable | string;

    /**
     * Attribute Description: The description of VSwitch.
     */
    public readonly attrDescription: ros.IResolvable | string;

    /**
     * Attribute Ipv6CidrBlock: The IPv6 CIDR block of the VSwitch.
     */
    public readonly attrIpv6CidrBlock: ros.IResolvable | string;

    /**
     * Attribute IsDefault: Indicates whether the VSwitch is a default VSwitch.
     */
    public readonly attrIsDefault: ros.IResolvable | string;

    /**
     * Attribute ResourceGroupId: The resource group id of VSwitch.
     */
    public readonly attrResourceGroupId: ros.IResolvable | string;

    /**
     * Attribute RouteTableId: The route table id.
     */
    public readonly attrRouteTableId: ros.IResolvable | string;

    /**
     * Attribute Tags: The tags of VSwitch.
     */
    public readonly attrTags: ros.IResolvable | string;

    /**
     * Attribute VSwitchId: The ID of the VSwitch.
     */
    public readonly attrVSwitchId: ros.IResolvable | string;

    /**
     * Attribute VSwitchName: The name of the VSwitch.
     */
    public readonly attrVSwitchName: ros.IResolvable | string;

    /**
     * Attribute VpcId: The VPC ID.
     */
    public readonly attrVpcId: ros.IResolvable | string;

    /**
     * Attribute ZoneId: The zone ID  of the resource.
     */
    public readonly attrZoneId: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: VSwitchProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosVSwitch = new RosVSwitch(this, id,  {
            vSwitchId: props.vSwitchId,
            refreshOptions: props.refreshOptions === undefined || props.refreshOptions === null ? 'Never' : props.refreshOptions,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosVSwitch;
        this.attrAvailableIpAddressCount = rosVSwitch.attrAvailableIpAddressCount;
        this.attrCidrBlock = rosVSwitch.attrCidrBlock;
        this.attrCreateTime = rosVSwitch.attrCreateTime;
        this.attrDescription = rosVSwitch.attrDescription;
        this.attrIpv6CidrBlock = rosVSwitch.attrIpv6CidrBlock;
        this.attrIsDefault = rosVSwitch.attrIsDefault;
        this.attrResourceGroupId = rosVSwitch.attrResourceGroupId;
        this.attrRouteTableId = rosVSwitch.attrRouteTableId;
        this.attrTags = rosVSwitch.attrTags;
        this.attrVSwitchId = rosVSwitch.attrVSwitchId;
        this.attrVSwitchName = rosVSwitch.attrVSwitchName;
        this.attrVpcId = rosVSwitch.attrVpcId;
        this.attrZoneId = rosVSwitch.attrZoneId;
    }
}
