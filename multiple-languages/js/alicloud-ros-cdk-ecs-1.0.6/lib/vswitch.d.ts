import * as ros from '@alicloud/ros-cdk-core';
import { RosVSwitch } from './ecs.generated';
export { RosVSwitch as VSwitchProperty };
/**
 * Properties for defining a `ALIYUN::ECS::VSwitch`
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
     * Property vSwitchName: Display name of the vSwitch instance, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'
     */
    readonly vSwitchName?: string | ros.IResolvable;
}
/**
 * A ROS resource type:  `ALIYUN::ECS::VSwitch`
 */
export declare class VSwitch extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute CidrBlock: CIDR Block of created VSwitch
     */
    readonly attrCidrBlock: ros.IResolvable;
    /**
     * Attribute Ipv6CidrBlock: The IPv6 network segment of the VSwitch
     */
    readonly attrIpv6CidrBlock: ros.IResolvable;
    /**
     * Attribute VSwitchId: Id of created VSwitch.
     */
    readonly attrVSwitchId: ros.IResolvable;
    /**
     * Create a new `ALIYUN::ECS::VSwitch`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: VSwitchProps, enableResourcePropertyConstraint?: boolean);
}
//# sourceMappingURL=vswitch.d.ts.map