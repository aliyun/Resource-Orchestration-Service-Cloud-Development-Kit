import * as ros from '@alicloud/ros-cdk-core';
import { RosStartZone } from './alb.generated';
export { RosStartZone as StartZoneProperty };
/**
 * Properties for defining a `StartZone`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-alb-startzone
 */
export interface StartZoneProps {
    /**
     * Property loadBalancerId: The ID of the ALB instance.
     */
    readonly loadBalancerId: string | ros.IResolvable;
    /**
     * Property zoneMappings: The list of zone mappings. Each element contains VSwitchId and ZoneId.
     */
    readonly zoneMappings: Array<RosStartZone.ZoneMappingsProperty | ros.IResolvable> | ros.IResolvable;
}
/**
 * Represents a `StartZone`.
 */
export interface IStartZone extends ros.IResource {
    readonly props: StartZoneProps;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ALB::StartZone`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosStartZone`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-alb-startzone
 */
export declare class StartZone extends ros.Resource implements IStartZone {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: StartZoneProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: StartZoneProps, enableResourcePropertyConstraint?: boolean);
}
