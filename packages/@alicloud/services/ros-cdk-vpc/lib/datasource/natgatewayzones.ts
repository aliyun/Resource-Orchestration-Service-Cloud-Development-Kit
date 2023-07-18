import * as ros from '@alicloud/ros-cdk-core';
import { RosNatGatewayZones } from './vpc.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosNatGatewayZones as NatGatewayZonesProperty };

/**
 * Properties for defining a `DATASOURCE::VPC::NatGatewayZones`
 */
export interface NatGatewayZonesProps {
}

/**
 * A ROS resource type:  `DATASOURCE::VPC::NatGatewayZones`
 */
export class NatGatewayZones extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute ZoneIds: The list of The Zone Ids.
     */
    public readonly attrZoneIds: ros.IResolvable;

    /**
     * Create a new `DATASOURCE::VPC::NatGatewayZones`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: NatGatewayZonesProps = {}, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosNatGatewayZones = new RosNatGatewayZones(this, id,  {
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        props;
        this.resource = rosNatGatewayZones;
        this.attrZoneIds = rosNatGatewayZones.attrZoneIds;
    }
}
