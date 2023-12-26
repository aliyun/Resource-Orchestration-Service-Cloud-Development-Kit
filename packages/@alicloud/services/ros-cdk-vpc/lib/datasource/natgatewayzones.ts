import * as ros from '@alicloud/ros-cdk-core';
import { RosNatGatewayZones } from './vpc.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosNatGatewayZones as NatGatewayZonesProperty };

/**
 * Properties for defining a `NatGatewayZones`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-natgatewayzones
 */
export interface NatGatewayZonesProps {
}

/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::VPC::NatGatewayZones`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosNatGatewayZones`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-natgatewayzones
 */
export class NatGatewayZones extends ros.Resource {

    /**
     * Attribute ZoneIds: The list of The Zone Ids.
     */
    public readonly attrZoneIds: ros.IResolvable;

    /**
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
