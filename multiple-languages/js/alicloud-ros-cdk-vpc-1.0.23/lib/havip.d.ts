import * as ros from '@alicloud/ros-cdk-core';
import { RosHaVip } from './vpc.generated';
export { RosHaVip as HaVipProperty };
/**
 * Properties for defining a `HaVip`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-havip
 */
export interface HaVipProps {
    /**
     * Property vSwitchId: The ID of the vSwitch to which the HAVIP belongs.
     */
    readonly vSwitchId: string | ros.IResolvable;
    /**
     * Property description: The description of the HAVIP.
     * The description must be 1 to 256 characters in length and cannot start with http:\/\/ or https:\/\/.
     */
    readonly description?: string | ros.IResolvable;
    /**
     * Property ipAddress: The IP address of the HAVIP. The specified IP address must be an idle IP address that falls within the CIDR block of the vSwitch. If this parameter is not set, an idle IP address from the CIDR block of the vSwitch is randomly assigned to the HAVIP.
     */
    readonly ipAddress?: string | ros.IResolvable;
    /**
     * Property name: The name of the HAVIP.
     * The name must be 1 to 128 characters in length, and cannot start with http:\/\/ or https:\/\/.
     */
    readonly name?: string | ros.IResolvable;
    /**
     * Property resourceGroupId: The ID of the resource group to which the HAVIP belongs.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosHaVip.TagsProperty[];
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::VPC::HaVip`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosHaVip`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-havip
 */
export declare class HaVip extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: HaVipProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute HaVipId: Assigned HaVip ID.
     */
    readonly attrHaVipId: ros.IResolvable;
    /**
     * Attribute IpAddress: The IP address of the HAVIP.
     */
    readonly attrIpAddress: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: HaVipProps, enableResourcePropertyConstraint?: boolean);
}
