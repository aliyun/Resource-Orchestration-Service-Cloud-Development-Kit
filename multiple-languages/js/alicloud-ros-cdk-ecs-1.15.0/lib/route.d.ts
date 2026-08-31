import * as ros from '@alicloud/ros-cdk-core';
import { RosRoute } from './ecs.generated';
export { RosRoute as RouteProperty };
/**
 * Properties for defining a `Route`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-route
 */
export interface RouteProps {
    /**
     * Property destinationCidrBlock: The destination CIDR block of the custom route entry. IPv4 CIDR blocks, IPv6 CIDR
     * blocks, and prefix lists are supported. You must specify one of the following
     * parameters: `DestinationCidrBlock` and `DestinationPrefixListId`. The following
     * requirements apply:
     * - The destination CIDR block cannot be 100.64.0.0\/10 or a subset of
     * 100.64.0.0\/10.
     * - The destination CIDR block of a route entry cannot be the same as the
     * destination CIDR block of another route entry in the same route table.
     */
    readonly destinationCidrBlock: string | ros.IResolvable;
    /**
     * Property routeTableId: RouteTableId of created route entry.
     */
    readonly routeTableId: string | ros.IResolvable;
    /**
     * Property nextHopId: The ID of the next hop.
     * > ## If `NextHopType` is set to `Ecr`, you can obtain the `AssociationId` by
     * calling the DescribeExpressConnectRouterAssociation operation and use the ID
     * as the next hop ID.
     */
    readonly nextHopId?: string | ros.IResolvable;
    /**
     * Property nextHopList: The route entry's next hop list. If router is virtual border router, the value will be ignore. The list should contain 2-4 next hop. NextHopId of each next hop must be RouterInterface that VRouter forwards to VBR.
     */
    readonly nextHopList?: Array<RosRoute.NextHopListProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * Property nextHopType: The route entry next hop type. Valid values:
     * Instance (default): Elastic Compute Service (ECS) instance.
     * HaVip: High Availability Virtual IP (HAVIP).
     * RouterInterface: Router interface.
     * NetworkInterface: Elastic Network Interface (ENI).
     * VpnGateway: VPN gateway.
     * IPv6Gateway: IPv6 gateway.
     * NatGateway: NAT gateway.
     * Attachment: Transit router.
     * VpcPeer: VPC peering connection.
     * Ipv4Gateway: IPv4 gateway.
     * GatewayEndpoint: Gateway endpoint.
     * Ecr: Express Connect router.
     * GatewayLoadBalancerEndpoint: Gateway Load Balancer endpoint.
     * The default value is 'Instance'.
     * If NextHopList is specified, this field will be ignored.
     */
    readonly nextHopType?: string | ros.IResolvable;
}
/**
 * Represents a `Route`.
 */
export interface IRoute extends ros.IResource {
    readonly props: RouteProps;
    /**
     * Attribute RouteEntryId: The ID of the route entry.
     */
    readonly attrRouteEntryId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ECS::Route`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosRoute`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-route
 */
export declare class Route extends ros.Resource implements IRoute {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: RouteProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute RouteEntryId: The ID of the route entry.
     */
    readonly attrRouteEntryId: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RouteProps, enableResourcePropertyConstraint?: boolean);
}
