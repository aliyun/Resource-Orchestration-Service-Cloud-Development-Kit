import * as ros from '@alicloud/ros-cdk-core';
import { RosZones } from './alb.generated';
export { RosZones as ZonesProperty };
/**
 * Properties for defining a `Zones`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-alb-zones
 */
export interface ZonesProps {
    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * Represents a `Zones`.
 */
export interface IZones extends ros.IResource {
    readonly props: ZonesProps;
    /**
     * Attribute ZoneIds: The list of The zone Ids.
     */
    readonly attrZoneIds: ros.IResolvable | string;
    /**
     * Attribute Zones: The list of The Zones.
     */
    readonly attrZones: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::ALB::Zones`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosZones`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-alb-zones
 */
export declare class Zones extends ros.Resource implements IZones {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: ZonesProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute ZoneIds: The list of The zone Ids.
     */
    readonly attrZoneIds: ros.IResolvable | string;
    /**
     * Attribute Zones: The list of The Zones.
     */
    readonly attrZones: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props?: ZonesProps, enableResourcePropertyConstraint?: boolean);
}
