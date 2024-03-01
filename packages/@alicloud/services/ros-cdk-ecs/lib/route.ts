import * as ros from '@alicloud/ros-cdk-core';
import { RosRoute } from './ecs.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosRoute as RouteProperty };

/**
 * Properties for defining a `Route`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-route
 */
export interface RouteProps {

    /**
     * Property destinationCidrBlock: The RouteEntry's target network segment.
     */
    readonly destinationCidrBlock: string | ros.IResolvable;

    /**
     * Property routeTableId: RouteTableId of created route entry.
     */
    readonly routeTableId: string | ros.IResolvable;

    /**
     * Property nextHopId: The route entry's next hop. When the NextHopList is specified, the value will be ignored.
     */
    readonly nextHopId?: string | ros.IResolvable;

    /**
     * Property nextHopList: The route entry's next hop list. If router is virtual border router, the value will be ignore. The list should contain 2-4 next hop. NextHopId of each next hop must be RouterInterface that VRouter forwards to VBR.
     */
    readonly nextHopList?: Array<RosRoute.NextHopListProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * Property nextHopType: The next hop type. Now support 'Instance|HaVip|RouterInterface|NetworkInterface|VpnGateway|IPv6Gateway|NatGateway|Attachment'. The default value is Instance.When the NextHopList is specified, the value will be ignored.
     */
    readonly nextHopType?: string | ros.IResolvable;
}

/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ECS::Route`, which is used to create a custom route entry.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosRoute`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-route
 */
export class Route extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: RouteProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute RouteEntryId: The ID of the route entry.
     */
    public readonly attrRouteEntryId: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RouteProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosRoute = new RosRoute(this, id,  {
            nextHopType: props.nextHopType === undefined || props.nextHopType === null ? 'Instance' : props.nextHopType,
            routeTableId: props.routeTableId,
            nextHopId: props.nextHopId,
            nextHopList: props.nextHopList,
            destinationCidrBlock: props.destinationCidrBlock,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosRoute;
        this.attrRouteEntryId = rosRoute.attrRouteEntryId;
    }
}
