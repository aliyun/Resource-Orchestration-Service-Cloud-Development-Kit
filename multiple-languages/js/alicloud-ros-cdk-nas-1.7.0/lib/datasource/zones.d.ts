import * as ros from '@alicloud/ros-cdk-core';
import { RosZones } from './nas.generated';
export { RosZones as ZonesProperty };
/**
 * Properties for defining a `Zones`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-nas-zones
 */
export interface ZonesProps {
    /**
     * Property fileSystemType: The type of the file system. Default value: all. Valid values:
     * standard: General-purpose NAS file system
     * extreme: Extreme NAS file system
     * cpfs: CPFS file system
     */
    readonly fileSystemType?: string | ros.IResolvable;
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
     * Attribute ZoneIds: The list of zone IDs.
     */
    readonly attrZoneIds: ros.IResolvable | string;
    /**
     * Attribute Zones: The list of zones.
     */
    readonly attrZones: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::NAS::Zones`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosZones`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-nas-zones
 */
export declare class Zones extends ros.Resource implements IZones {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: ZonesProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute ZoneIds: The list of zone IDs.
     */
    readonly attrZoneIds: ros.IResolvable | string;
    /**
     * Attribute Zones: The list of zones.
     */
    readonly attrZones: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props?: ZonesProps, enableResourcePropertyConstraint?: boolean);
}
