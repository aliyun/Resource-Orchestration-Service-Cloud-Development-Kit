import * as ros from '@alicloud/ros-cdk-core';
import { RosRouteEntries } from './vpc.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosRouteEntries as RouteEntriesProperty };

/**
 * Properties for defining a `RouteEntries`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-routeentries
 */
export interface RouteEntriesProps {

    /**
     * Property routeTableId: The ID of the route table.
     */
    readonly routeTableId: string | ros.IResolvable;

    /**
     * Property destinationCidrBlock: The destination CIDR block of the route. IPv4 and IPv6 CIDR blocks are supported.
     */
    readonly destinationCidrBlock?: string | ros.IResolvable;

    /**
     * Property ipVersion: The IP version. Valid values:
     * IPv4: IPv4
     * IPv6: IPv6
     */
    readonly ipVersion?: string | ros.IResolvable;

    /**
     * Property nextHopId: The ID of the next hop.
     */
    readonly nextHopId?: string | ros.IResolvable;

    /**
     * Property nextHopType: The type of the next hop. Valid values:
     * Instance (default): an Elastic Compute Service (ECS) instance
     * HaVip: a high-availability virtual IP address (HAVIP)
     * VpnGateway: a VPN gateway
     * NatGateway: a NAT gateway
     * NetworkInterface: a secondary elastic network interface (ENI)
     * RouterInterface: a router interface
     * IPv6Gateway: an IPv6 gateway
     * Attachment: a transit router
     */
    readonly nextHopType?: string | ros.IResolvable;

    /**
     * Property routeEntryId: The ID of the route.
     */
    readonly routeEntryId?: string | ros.IResolvable;

    /**
     * Property routeEntryName: The name of the route.
     */
    readonly routeEntryName?: string | ros.IResolvable;

    /**
     * Property routeEntryType: The type of the route. Valid values:
     * Custom: a custom route
     * System: a system route
     * BGP: a Border Gateway Protocol (BGP) route
     * CEN: a Cloud Enterprise Network (CEN) route
     */
    readonly routeEntryType?: string | ros.IResolvable;
}

/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::VPC::RouteEntries`, which is used to query routes.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosRouteEntries`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-routeentries
 */
export class RouteEntries extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: RouteEntriesProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute RouteEntries: The list of The route entries.
     */
    public readonly attrRouteEntries: ros.IResolvable;

    /**
     * Attribute RouteEntryIds: the list of the route entry ids.
     */
    public readonly attrRouteEntryIds: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RouteEntriesProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosRouteEntries = new RosRouteEntries(this, id,  {
            nextHopType: props.nextHopType,
            routeEntryId: props.routeEntryId,
            routeTableId: props.routeTableId,
            ipVersion: props.ipVersion,
            routeEntryName: props.routeEntryName,
            routeEntryType: props.routeEntryType,
            nextHopId: props.nextHopId,
            destinationCidrBlock: props.destinationCidrBlock,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosRouteEntries;
        this.attrRouteEntries = rosRouteEntries.attrRouteEntries;
        this.attrRouteEntryIds = rosRouteEntries.attrRouteEntryIds;
    }
}
