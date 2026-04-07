import * as ros from '@alicloud/ros-cdk-core';
import { RosRoute } from './dataworks.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosRoute as RouteProperty };

/**
 * Properties for defining a `Route`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dataworks-route
 */
export interface RouteProps {

    /**
     * Property destinationCidr: The CIDR blocks of the destination-based route.
     */
    readonly destinationCidr: string | ros.IResolvable;

    /**
     * Property networkId: The ID of the network resource to which the route belongs.
     */
    readonly networkId: number | ros.IResolvable;

    /**
     * Property dwResourceGroupId: ID of the resource group to which the route belongs.
     */
    readonly dwResourceGroupId?: string | ros.IResolvable;
}

/**
 * Represents a `Route`.
 */
export interface IRoute extends ros.IResource {
    readonly props: RouteProps;

    /**
     * Attribute CreateTime: Time when route information was created.
     */
    readonly attrCreateTime: ros.IResolvable | string;

    /**
     * Attribute DestinationCidr: The CIDR blocks of the destination-based route.
     */
    readonly attrDestinationCidr: ros.IResolvable | string;

    /**
     * Attribute DwResourceGroupId: ID of the resource group to which the route belongs.
     */
    readonly attrDwResourceGroupId: ros.IResolvable | string;

    /**
     * Attribute NetworkId: The ID of the network resource to which the route belongs.
     */
    readonly attrNetworkId: ros.IResolvable | string;

    /**
     * Attribute ResourceId: Identifier of the network resource to which the route belongs.
     */
    readonly attrResourceId: ros.IResolvable | string;

    /**
     * Attribute RouteId: The route ID.
     */
    readonly attrRouteId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::DataWorks::Route`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosRoute`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dataworks-route
 */
export class Route extends ros.Resource implements IRoute {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: RouteProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute CreateTime: Time when route information was created.
     */
    public readonly attrCreateTime: ros.IResolvable | string;

    /**
     * Attribute DestinationCidr: The CIDR blocks of the destination-based route.
     */
    public readonly attrDestinationCidr: ros.IResolvable | string;

    /**
     * Attribute DwResourceGroupId: ID of the resource group to which the route belongs.
     */
    public readonly attrDwResourceGroupId: ros.IResolvable | string;

    /**
     * Attribute NetworkId: The ID of the network resource to which the route belongs.
     */
    public readonly attrNetworkId: ros.IResolvable | string;

    /**
     * Attribute ResourceId: Identifier of the network resource to which the route belongs.
     */
    public readonly attrResourceId: ros.IResolvable | string;

    /**
     * Attribute RouteId: The route ID.
     */
    public readonly attrRouteId: ros.IResolvable | string;

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
            networkId: props.networkId,
            dwResourceGroupId: props.dwResourceGroupId,
            destinationCidr: props.destinationCidr,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosRoute;
        this.attrCreateTime = rosRoute.attrCreateTime;
        this.attrDestinationCidr = rosRoute.attrDestinationCidr;
        this.attrDwResourceGroupId = rosRoute.attrDwResourceGroupId;
        this.attrNetworkId = rosRoute.attrNetworkId;
        this.attrResourceId = rosRoute.attrResourceId;
        this.attrRouteId = rosRoute.attrRouteId;
    }
}
