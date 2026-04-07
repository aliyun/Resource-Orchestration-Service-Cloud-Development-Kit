import * as ros from '@alicloud/ros-cdk-core';
import { RosZoneShift } from './alb.generated';
// Generated from the AliCloud ROS Resource Specification
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
export class ZoneShift extends ros.Resource implements IZoneShift {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: ZoneShiftProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ZoneShiftProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosZoneShift = new RosZoneShift(this, id,  {
            loadBalancerId: props.loadBalancerId,
            zoneMappings: props.zoneMappings,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosZoneShift;
    }
}
