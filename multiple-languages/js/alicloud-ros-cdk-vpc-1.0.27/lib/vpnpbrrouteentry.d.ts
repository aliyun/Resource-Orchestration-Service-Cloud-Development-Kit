import * as ros from '@alicloud/ros-cdk-core';
import { RosVpnPbrRouteEntry } from './vpc.generated';
export { RosVpnPbrRouteEntry as VpnPbrRouteEntryProperty };
/**
 * Properties for defining a `VpnPbrRouteEntry`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-vpnpbrrouteentry
 */
export interface VpnPbrRouteEntryProps {
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
     * Property routeSource: The source CIDR block of the policy-based route.
     */
    readonly routeSource: string | ros.IResolvable;
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
 * This class encapsulates and extends the ROS resource type `ALIYUN::VPC::VpnPbrRouteEntry`, which is used to create a policy-based route for a VPN gateway.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosVpnPbrRouteEntry`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-vpnpbrrouteentry
 */
export declare class VpnPbrRouteEntry extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: VpnPbrRouteEntryProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute NextHop: The next hop of the destination route entry.
     */
    readonly attrNextHop: ros.IResolvable;
    /**
     * Attribute RouteDest: The destination CIDR block of the destination route.
     */
    readonly attrRouteDest: ros.IResolvable;
    /**
     * Attribute RouteSource: The destination CIDR block of the policy-based route.
     */
    readonly attrRouteSource: ros.IResolvable;
    /**
     * Attribute VpnGatewayId: The ID of the VPN Gateway.
     */
    readonly attrVpnGatewayId: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: VpnPbrRouteEntryProps, enableResourcePropertyConstraint?: boolean);
}
