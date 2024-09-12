import * as ros from '@alicloud/ros-cdk-core';
import { RosVSwitchCidrReservation } from './vpc.generated';
export { RosVSwitchCidrReservation as VSwitchCidrReservationProperty };
/**
 * Properties for defining a `VSwitchCidrReservation`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-vswitchcidrreservation
 */
export interface VSwitchCidrReservationProps {
    /**
     * Property vSwitchId: The ID of the vSwitch to which the reserved CIDR block belongs.
     */
    readonly vSwitchId: string | ros.IResolvable;
    /**
     * Property ipVersion: The IP version of the reserved CIDR block. Valid values:
     * IPv4 (default)
     * IPv6
     */
    readonly ipVersion?: string | ros.IResolvable;
    /**
     * Property tags:
     */
    readonly tags?: RosVSwitchCidrReservation.TagsProperty[];
    /**
     * Property vSwitchCidrReservationCidr: The reserved CIDR block of the vSwitch.
     * When IpVersion is set to IPv4, the reserved CIDR block must be a proper subset of the IPv4 CIDR block of the vSwitch and the subnet mask length of the reserved CIDR block cannot be greater than 28.
     * When IpVersion is set to IPv6, the reserved CIDR block must be a proper subset of the IPv6 CIDR block of the vSwitch and the subnet mask length of the reserved CIDR block cannot be greater than 80.
     * Note You must specify one of VSwitchCidrReservationMask and VSwitchCidrReservationCidr.
     */
    readonly vSwitchCidrReservationCidr?: string | ros.IResolvable;
    /**
     * Property vSwitchCidrReservationDescription: The description of the reserved CIDR block. This parameter is empty by default.
     * The description must be 2 to 256 characters in length. It must start with a letter and cannot start with http:\/\/ or https:\/\/.
     */
    readonly vSwitchCidrReservationDescription?: string | ros.IResolvable;
    /**
     * Property vSwitchCidrReservationMask: The subnet mask of the reserved CIDR block.
     * When IpVersion is set to IPv4, the subnet mask length of the CIDR block must be greater than the IPv4 subnet mask length of the vSwitch and cannot be greater than 28.
     * When IpVersion is set to IPv6, the subnet mask length of the CIDR block must be greater than the IPv6 subnet mask length of the vSwitch and cannot be greater than 80.
     * Note You must specify one of VSwitchCidrReservationMask and VSwitchCidrReservationCidr.
     */
    readonly vSwitchCidrReservationMask?: string | ros.IResolvable;
    /**
     * Property vSwitchCidrReservationName: The name of the reserved CIDR block.
     * The name must be 2 to 128 characters in length and can contain digits, underscores (_), and hyphens (-). It must start with a letter.
     */
    readonly vSwitchCidrReservationName?: string | ros.IResolvable;
    /**
     * Property vSwitchCidrReservationType: The type of reserved CIDR block. Set the value to prefix.
     * Note When a user or a cloud service allocates a CIDR block to an elastic network interface (ENI), the CIDR block must be allocated from the reserved CIDR block. If the reserved CIDR block is exhausted, an error is returned.
     */
    readonly vSwitchCidrReservationType?: string | ros.IResolvable;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::VPC::VSwitchCidrReservation`, which is used to create a reserved CIDR block for a vSwitch.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosVSwitchCidrReservation`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-vswitchcidrreservation
 */
export declare class VSwitchCidrReservation extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: VSwitchCidrReservationProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute VSwitchCidrReservationId: The ID of the reserved CIDR block.
     */
    readonly attrVSwitchCidrReservationId: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: VSwitchCidrReservationProps, enableResourcePropertyConstraint?: boolean);
}
