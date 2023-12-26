import * as ros from '@alicloud/ros-cdk-core';
import { RosZones } from './rds.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosZones as ZonesProperty };

/**
 * Properties for defining a `Zones`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-rds-zones
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
 * This class encapsulates and extends the ROS resource type `DATASOURCE::RDS::Zones`, which is used to query the zones that are available to an ApsaraDB RDS instance.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosZones`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-rds-zones
 */
export class Zones extends ros.Resource {

    /**
     * Attribute ZoneIds: The list of zone IDs.
     */
    public readonly attrZoneIds: ros.IResolvable;

    /**
     * Attribute Zones: The list of The Zones.
     */
    public readonly attrZones: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ZonesProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosZones = new RosZones(this, id,  {
            dispenseMode: props.dispenseMode,
            category: props.category,
            engineVersion: props.engineVersion,
            zoneId: props.zoneId,
            commodityCode: props.commodityCode,
            engine: props.engine,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosZones;
        this.attrZoneIds = rosZones.attrZoneIds;
        this.attrZones = rosZones.attrZones;
    }
}
