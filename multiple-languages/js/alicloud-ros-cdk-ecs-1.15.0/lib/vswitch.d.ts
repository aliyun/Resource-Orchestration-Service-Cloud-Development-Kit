import * as ros from '@alicloud/ros-cdk-core';
import { RosVSwitch } from './ecs.generated';
export { RosVSwitch as VSwitchProperty };
/**
 * Properties for defining a `VSwitch`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-vswitch
 */
export interface VSwitchProps {
    /**
     * Property cidrBlock: CIDR Block of created VSwitch, It must belong to itself VPC CIDR block.
     */
    readonly cidrBlock: string | ros.IResolvable;
    /**
     * Property vpcId: VPC id to create vswtich.
     */
    readonly vpcId: string | ros.IResolvable;
    /**
     * Property zoneId: The availability zone in which the VSwitch will be created.
     */
    readonly zoneId: string | ros.IResolvable;
    /**
     * Property description: Description of the VSwitch, [2, 256] characters. Do not fill or empty, the default is empty.
     */
    readonly description?: string | ros.IResolvable;
    /**
     * Property ipv6CidrBlock: The IPv6 network segment of the switch supports the last 8 bits of the VPC IPv6 network segment. Value: 0-255 (decimal).
     * The IPv6 segment mask of the switch defaults to 64 bits.
     */
    readonly ipv6CidrBlock?: number | ros.IResolvable;
    /**
     * Property tags: Tags to attach to vswitch. Max support 20 tags to add during create vswitch. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosVSwitch.TagsProperty[];
    /**
     * Property vpcIpv6CidrBlock: The IPv6 CIDR block of the VPC.
     */
    readonly vpcIpv6CidrBlock?: string | ros.IResolvable;
    /**
     * Property vSwitchName: The value contains 1 to 128 characters and cannot start with http:\/\/ or https:\/\/
     */
    readonly vSwitchName?: string | ros.IResolvable;
    /**
     * Property zoneType: The type of the zones to be queried.
     * Default value: AvailabilityZone. This value indicates Alibaba Cloud zones.
     *
     */
    readonly zoneType?: string | ros.IResolvable;
}
/**
 * Represents a `VSwitch`.
 */
export interface IVSwitch extends ros.IResource {
    readonly props: VSwitchProps;
    /**
     * Attribute CidrBlock: CIDR Block of created VSwitch
     */
    readonly attrCidrBlock: ros.IResolvable | string;
    /**
     * Attribute Ipv6CidrBlock: The IPv6 network segment of the VSwitch
     */
    readonly attrIpv6CidrBlock: ros.IResolvable | string;
    /**
     * Attribute VSwitchId: Id of created VSwitch.
     */
    readonly attrVSwitchId: ros.IResolvable | string;
    /**
     * Attribute VSwitchName: The name of the VSwitch
     */
    readonly attrVSwitchName: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ECS::VSwitch`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosVSwitch`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-vswitch
 */
export declare class VSwitch extends ros.Resource implements IVSwitch {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: VSwitchProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute CidrBlock: CIDR Block of created VSwitch
     */
    readonly attrCidrBlock: ros.IResolvable | string;
    /**
     * Attribute Ipv6CidrBlock: The IPv6 network segment of the VSwitch
     */
    readonly attrIpv6CidrBlock: ros.IResolvable | string;
    /**
     * Attribute VSwitchId: Id of created VSwitch.
     */
    readonly attrVSwitchId: ros.IResolvable | string;
    /**
     * Attribute VSwitchName: The name of the VSwitch
     */
    readonly attrVSwitchName: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: VSwitchProps, enableResourcePropertyConstraint?: boolean);
}
