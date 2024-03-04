import * as ros from '@alicloud/ros-cdk-core';
import { RosZones } from './slb.generated';
export { RosZones as ZonesProperty };
/**
 * Properties for defining a `Zones`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-slb-zones
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
 * This class encapsulates and extends the ROS resource type `DATASOURCE::SLB::Zones`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosZones`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-slb-zones
 */
export declare class Zones extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: ZonesProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute ZoneIds: The list of The primary zone Ids.
     */
    readonly attrZoneIds: ros.IResolvable;
    /**
     * Attribute Zones: The list of The Zones.
     */
    readonly attrZones: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props?: ZonesProps, enableResourcePropertyConstraint?: boolean);
}
