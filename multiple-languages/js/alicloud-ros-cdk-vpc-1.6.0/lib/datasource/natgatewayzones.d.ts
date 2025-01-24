import * as ros from '@alicloud/ros-cdk-core';
import { RosNatGatewayZones } from './vpc.generated';
export { RosNatGatewayZones as NatGatewayZonesProperty };
/**
 * Properties for defining a `NatGatewayZones`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-natgatewayzones
 */
export interface NatGatewayZonesProps {
    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * Represents a `NatGatewayZones`.
 */
export interface INatGatewayZones extends ros.IResource {
    readonly props: NatGatewayZonesProps;
    /**
     * Attribute ZoneIds: The list of The Zone Ids.
     */
    readonly attrZoneIds: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::VPC::NatGatewayZones`, which is used to query the zones of a NAT gateway.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosNatGatewayZones`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-natgatewayzones
 */
export declare class NatGatewayZones extends ros.Resource implements INatGatewayZones {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: NatGatewayZonesProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute ZoneIds: The list of The Zone Ids.
     */
    readonly attrZoneIds: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props?: NatGatewayZonesProps, enableResourcePropertyConstraint?: boolean);
}
