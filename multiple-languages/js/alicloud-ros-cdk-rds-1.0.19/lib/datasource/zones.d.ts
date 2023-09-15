import * as ros from '@alicloud/ros-cdk-core';
import { RosZones } from './rds.generated';
export { RosZones as ZonesProperty };
/**
 * Properties for defining a `DATASOURCE::RDS::Zones`
 */
export interface ZonesProps {
    /**
     * Property engine: The database engine that is run by the instance.
     */
    readonly engine: string | ros.IResolvable;
    /**
     * Property category: The RDS edition of the instance. Valid values:
     * Basic: RDS Basic Edition
     * HighAvailability: RDS High-availability Edition
     * AlwaysOn: RDS Cluster Edition
     * Finance: RDS Enterprise Edition
     */
    readonly category?: string | ros.IResolvable;
    /**
     * Property commodityCode: The commodity code of the instance.
     */
    readonly commodityCode?: string | ros.IResolvable;
    /**
     * Property dispenseMode: Specifies whether to return the zones in which the single-zone deployment method is supported. Valid values:
     * 1: returns the zones.
     * 0: does not return the zones.
     * Default value: 0.
     */
    readonly dispenseMode?: string | ros.IResolvable;
    /**
     * Property engineVersion: The version of the database engine that is run by the instance.
     */
    readonly engineVersion?: string | ros.IResolvable;
    /**
     * Property zoneId: The ID of the zone in which the instance is located.
     * If the instance spans more than one zone, the value of this parameter contains an MAZ part,such as cn-hangzhou-MAZ6(b,f) and cn-hangzhou-MAZ5(b,e,f)
     */
    readonly zoneId?: string | ros.IResolvable;
}
/**
 * A ROS resource type:  `DATASOURCE::RDS::Zones`
 */
export declare class Zones extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute ZoneIds: The list of zone IDs.
     */
    readonly attrZoneIds: ros.IResolvable;
    /**
     * Attribute Zones: The list of The Zones.
     */
    readonly attrZones: ros.IResolvable;
    /**
     * Create a new `DATASOURCE::RDS::Zones`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ZonesProps, enableResourcePropertyConstraint?: boolean);
}
