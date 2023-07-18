import * as ros from '@alicloud/ros-cdk-core';
import { RosZones } from './slb.generated';
export { RosZones as ZonesProperty };
/**
 * Properties for defining a `DATASOURCE::SLB::Zones`
 */
export interface ZonesProps {
    /**
     * Property addressIpVersion: The type of IP address.
     * Valid values: ipv4 and ipv6.
     */
    readonly addressIpVersion?: string | ros.IResolvable;
    /**
     * Property addressType: The type of network.Valid values: vpc, classic_internet, and classic_intranet..
     * vpc: an internal SLB instance that is deployed in a virtual private cloud (VPC).
     * classic_internet: a public-facing SLB instance.
     * classic_intranet: an internal SLB instance that is deployed in a classic network.
     */
    readonly addressType?: string | ros.IResolvable;
}
/**
 * A ROS resource type:  `DATASOURCE::SLB::Zones`
 */
export declare class Zones extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute ZoneIds: The list of The primary zone Ids.
     */
    readonly attrZoneIds: ros.IResolvable;
    /**
     * Attribute Zones: The list of The Zones.
     */
    readonly attrZones: ros.IResolvable;
    /**
     * Create a new `DATASOURCE::SLB::Zones`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props?: ZonesProps, enableResourcePropertyConstraint?: boolean);
}
