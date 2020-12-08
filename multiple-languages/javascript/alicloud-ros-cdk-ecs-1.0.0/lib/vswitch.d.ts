import * as ros from '@alicloud/ros-cdk-core';
import { RosVSwitch } from './ecs.generated';
export { RosVSwitch as VSwitchProperty };
/**
 * Properties for defining a `ALIYUN::ECS::VSwitch`
 */
export interface VSwitchProps {
    /**
     * @Property cidrBlock: CIDR Block of created VSwitch, It must belong to itself VPC CIDR block.
     */
    readonly cidrBlock: string;
    /**
     * @Property vpcId: VPC id to create vswtich.
     */
    readonly vpcId: string;
    /**
     * @Property zoneId: The availability zone in which the VSwitch will be created.
     */
    readonly zoneId: string;
    /**
     * @Property description: Description of the VSwitch, [2, 256] characters. Do not fill or empty, the default is empty.
     */
    readonly description?: string;
    /**
     * @Property ipv6CidrBlock: The IPv6 network segment of the switch supports the last 8 bits of the VPC IPv6 network segment. Value: 0-255 (decimal).
     * The IPv6 segment mask of the switch defaults to 64 bits.
     */
    readonly ipv6CidrBlock?: number;
    /**
     * @Property tags: Tags to attach to vswitch. Max support 20 tags to add during create vswitch. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: {
        [key: string]: any;
    }[];
    /**
     * @Property vSwitchName: Display name of the vSwitch instance, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'
     */
    readonly vSwitchName?: string;
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
     * @Attribute CidrBlock: CIDR Block of created VSwitch
     */
    readonly attrCidrBlock: any;
    /**
     * @Attribute Ipv6CidrBlock: The IPv6 network segment of the VSwitch
     */
    readonly attrIpv6CidrBlock: any;
    /**
     * @Attribute VSwitchId: Id of created VSwitch.
     */
    readonly attrVSwitchId: any;
    /**
     * Create a new `ALIYUN::ECS::VSwitch`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: VSwitchProps, enableResourcePropertyConstraint?: boolean);
}
