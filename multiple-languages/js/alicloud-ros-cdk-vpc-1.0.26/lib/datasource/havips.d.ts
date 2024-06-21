import * as ros from '@alicloud/ros-cdk-core';
import { RosHaVips } from './vpc.generated';
export { RosHaVips as HaVipsProperty };
/**
 * Properties for defining a `HaVips`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-havips
 */
export interface HaVipsProps {
    /**
     * Property haVipId: The  ID of the resource
     */
    readonly haVipId?: string | ros.IResolvable;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::VPC::HaVips`, which is used to query the high-availability virtual IP addresses (HAVIPs) in a specified region.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosHaVips`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-havips
 */
export declare class HaVips extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: HaVipsProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute HaVipIds: The list of ha vip IDs.
     */
    readonly attrHaVipIds: ros.IResolvable;
    /**
     * Attribute HaVips: The list of ha vips.
     */
    readonly attrHaVips: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props?: HaVipsProps, enableResourcePropertyConstraint?: boolean);
}
