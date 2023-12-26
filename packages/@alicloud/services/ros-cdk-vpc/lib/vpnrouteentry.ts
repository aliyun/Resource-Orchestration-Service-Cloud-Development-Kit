import * as ros from '@alicloud/ros-cdk-core';
import { RosVpnRouteEntry } from './vpc.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosVpnRouteEntry as VpnRouteEntryProperty };

/**
 * Properties for defining a `VpnRouteEntry`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-vpnrouteentry
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
 * This class encapsulates and extends the ROS resource type `ALIYUN::VPC::VpnRouteEntry`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosVpnRouteEntry`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-vpnrouteentry
 */
export class VpnRouteEntry extends ros.Resource {

    /**
     * Attribute NextHop: The next hop of the destination route entry.
     */
    public readonly attrNextHop: ros.IResolvable;

    /**
     * Attribute RouteDest: The destination CIDR block of the destination route.
     */
    public readonly attrRouteDest: ros.IResolvable;

    /**
     * Attribute VpnGatewayId: The ID of the VPN Gateway.
     */
    public readonly attrVpnGatewayId: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: VpnRouteEntryProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosVpnRouteEntry = new RosVpnRouteEntry(this, id,  {
            description: props.description,
            routeDest: props.routeDest,
            overlayMode: props.overlayMode,
            vpnGatewayId: props.vpnGatewayId,
            nextHop: props.nextHop,
            publishVpc: props.publishVpc,
            weight: props.weight,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosVpnRouteEntry;
        this.attrNextHop = rosVpnRouteEntry.attrNextHop;
        this.attrRouteDest = rosVpnRouteEntry.attrRouteDest;
        this.attrVpnGatewayId = rosVpnRouteEntry.attrVpnGatewayId;
    }
}
