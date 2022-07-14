import * as ros from '@alicloud/ros-cdk-core';
import { RosVpnRouteEntry } from './vpc.generated';
export { RosVpnRouteEntry as VpnRouteEntryProperty };
/**
 * Properties for defining a `ALIYUN::VPC::VpnRouteEntry`
 */
export interface VpnRouteEntryProps {
    /**
     * Property nextHop: The next hop of the destination route entry.
     */
    readonly nextHop: string | ros.IResolvable;
    /**
     * Property publishVpc: Indicates whether to publish the destination route to the VPC. Valid values:
     * true: Publish the destination route to the VPC.
     * false: Do not publish the destination route to the VPC.
     */
    readonly publishVpc: boolean | ros.IResolvable;
    /**
     * Property routeDest: The destination CIDR block of the destination route.
     */
    readonly routeDest: string | ros.IResolvable;
    /**
     * Property vpnGatewayId: The ID of the VPN Gateway.
     */
    readonly vpnGatewayId: string | ros.IResolvable;
    /**
     * Property weight: The weight of the destination route. Valid values: 0|100.
     */
    readonly weight: number | ros.IResolvable;
    /**
     * Property description: The description of the VPN destination route.
     */
    readonly description?: string | ros.IResolvable;
    /**
     * Property overlayMode: The overlay mode.
     */
    readonly overlayMode?: string | ros.IResolvable;
}
/**
 * A ROS resource type:  `ALIYUN::VPC::VpnRouteEntry`
 */
export declare class VpnRouteEntry extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute NextHop: The next hop of the destination route entry.
     */
    readonly attrNextHop: ros.IResolvable;
    /**
     * Attribute RouteDest: The destination CIDR block of the destination route.
     */
    readonly attrRouteDest: ros.IResolvable;
    /**
     * Attribute VpnGatewayId: The ID of the VPN Gateway.
     */
    readonly attrVpnGatewayId: ros.IResolvable;
    /**
     * Create a new `ALIYUN::VPC::VpnRouteEntry`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: VpnRouteEntryProps, enableResourcePropertyConstraint?: boolean);
}
