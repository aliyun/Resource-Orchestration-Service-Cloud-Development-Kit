import * as ros from '@alicloud/ros-cdk-core';
import { RosVpnPbrRouteEntry } from './vpc.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosVpnPbrRouteEntry as VpnPbrRouteEntryProperty };

/**
 * Properties for defining a `ALIYUN::VPC::VpnPbrRouteEntry`
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
 * A ROS resource type:  `ALIYUN::VPC::VpnPbrRouteEntry`
 */
export class VpnPbrRouteEntry extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute NextHop: The next hop of the destination route entry.
     */
    public readonly attrNextHop: ros.IResolvable;

    /**
     * Attribute RouteDest: The destination CIDR block of the destination route.
     */
    public readonly attrRouteDest: ros.IResolvable;

    /**
     * Attribute RouteSource: The destination CIDR block of the policy-based route.
     */
    public readonly attrRouteSource: ros.IResolvable;

    /**
     * Attribute VpnGatewayId: The ID of the VPN Gateway.
     */
    public readonly attrVpnGatewayId: ros.IResolvable;

    /**
     * Create a new `ALIYUN::VPC::VpnPbrRouteEntry`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: VpnPbrRouteEntryProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosVpnPbrRouteEntry = new RosVpnPbrRouteEntry(this, id,  {
            description: props.description,
            routeDest: props.routeDest,
            overlayMode: props.overlayMode,
            vpnGatewayId: props.vpnGatewayId,
            nextHop: props.nextHop,
            routeSource: props.routeSource,
            publishVpc: props.publishVpc,
            weight: props.weight,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosVpnPbrRouteEntry;
        this.attrNextHop = rosVpnPbrRouteEntry.attrNextHop;
        this.attrRouteDest = rosVpnPbrRouteEntry.attrRouteDest;
        this.attrRouteSource = rosVpnPbrRouteEntry.attrRouteSource;
        this.attrVpnGatewayId = rosVpnPbrRouteEntry.attrVpnGatewayId;
    }
}
