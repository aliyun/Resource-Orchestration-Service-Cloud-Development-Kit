import * as ros from '@alicloud/ros-cdk-core';
import { RosZoneShift } from './alb.generated';
export { RosZoneShift as ZoneShiftProperty };
/**
 * Properties for defining a `ZoneShift`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-alb-zoneshift
 */
export interface ZoneShiftProps {
    /**
     * Property loadBalancerId: The ID of the load balancer.
     */
    readonly loadBalancerId: string | ros.IResolvable;
    /**
     * Property zoneMappings: The list of zone mappings. Each element contains VSwitchId and ZoneId.
     */
    readonly zoneMappings: Array<RosZoneShift.ZoneMappingsProperty | ros.IResolvable> | ros.IResolvable;
}
/**
 * Represents a `ZoneShift`.
 */
export interface IZoneShift extends ros.IResource {
    readonly props: ZoneShiftProps;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ALB::ZoneShift`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosZoneShift`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-alb-zoneshift
 */
export declare class ZoneShift extends ros.Resource implements IZoneShift {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: ZoneShiftProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ZoneShiftProps, enableResourcePropertyConstraint?: boolean);
}
