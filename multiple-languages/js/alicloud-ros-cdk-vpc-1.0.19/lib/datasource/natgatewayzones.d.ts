import * as ros from '@alicloud/ros-cdk-core';
import { RosNatGatewayZones } from './vpc.generated';
export { RosNatGatewayZones as NatGatewayZonesProperty };
/**
 * Properties for defining a `DATASOURCE::VPC::NatGatewayZones`
 */
export interface NatGatewayZonesProps {
}
/**
 * A ROS resource type:  `DATASOURCE::VPC::NatGatewayZones`
 */
export declare class NatGatewayZones extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute ZoneIds: The list of The Zone Ids.
     */
    readonly attrZoneIds: ros.IResolvable;
    /**
     * Create a new `DATASOURCE::VPC::NatGatewayZones`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props?: NatGatewayZonesProps, enableResourcePropertyConstraint?: boolean);
}
