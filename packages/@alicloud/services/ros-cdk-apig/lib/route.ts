import * as ros from '@alicloud/ros-cdk-core';
import { RosRoute } from './apig.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosRoute as RouteProperty };

/**
 * Properties for defining a `Route`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-route
 */
export interface RouteProps {

    /**
     * Property backend: Backend service configuration for routing.
     */
    readonly backend: RosRoute.BackendProperty | ros.IResolvable;

    /**
     * Property environmentInfo: The information if the environment.
     */
    readonly environmentInfo: RosRoute.EnvironmentInfoProperty | ros.IResolvable;

    /**
     * Property httpApiId: The ID of the API.
     */
    readonly httpApiId: string | ros.IResolvable;

    /**
     * Property match: The match rule of route resource.
     */
    readonly match: RosRoute.MatchProperty | ros.IResolvable;

    /**
     * Property routeName: The name of the route.
     */
    readonly routeName: string | ros.IResolvable;

    /**
     * Property description: The description of route.
     */
    readonly description?: string | ros.IResolvable;

    /**
     * Property domainIds: The list of domain name IDs.
     */
    readonly domainIds?: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * Property domainInfos: Domain items.
     */
    readonly domainInfos?: Array<RosRoute.DomainInfosProperty | ros.IResolvable> | ros.IResolvable;
}

/**
 * Represents a `Route`.
 */
export interface IRoute extends ros.IResource {
    readonly props: RouteProps;

    /**
     * Attribute Backend: Backend services.
     */
    readonly attrBackend: ros.IResolvable | string;

    /**
     * Attribute Description: The description of route resource.
     */
    readonly attrDescription: ros.IResolvable | string;

    /**
     * Attribute DomainInfos: Domain items.
     */
    readonly attrDomainInfos: ros.IResolvable | string;

    /**
     * Attribute EnvironmentInfo: Environment information.
     */
    readonly attrEnvironmentInfo: ros.IResolvable | string;

    /**
     * Attribute Match: The match rule of route resource.
     */
    readonly attrMatch: ros.IResolvable | string;

    /**
     * Attribute RouteId: The ID of route resource.
     */
    readonly attrRouteId: ros.IResolvable | string;

    /**
     * Attribute RouteName: The name of the route.
     */
    readonly attrRouteName: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::APIG::Route`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosRoute`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-route
 */
export class Route extends ros.Resource implements IRoute {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: RouteProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute Backend: Backend services.
     */
    public readonly attrBackend: ros.IResolvable | string;

    /**
     * Attribute Description: The description of route resource.
     */
    public readonly attrDescription: ros.IResolvable | string;

    /**
     * Attribute DomainInfos: Domain items.
     */
    public readonly attrDomainInfos: ros.IResolvable | string;

    /**
     * Attribute EnvironmentInfo: Environment information.
     */
    public readonly attrEnvironmentInfo: ros.IResolvable | string;

    /**
     * Attribute Match: The match rule of route resource.
     */
    public readonly attrMatch: ros.IResolvable | string;

    /**
     * Attribute RouteId: The ID of route resource.
     */
    public readonly attrRouteId: ros.IResolvable | string;

    /**
     * Attribute RouteName: The name of the route.
     */
    public readonly attrRouteName: ros.IResolvable | string;

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
            backend: props.backend,
            description: props.description,
            environmentInfo: props.environmentInfo,
            routeName: props.routeName,
            domainInfos: props.domainInfos,
            httpApiId: props.httpApiId,
            domainIds: props.domainIds,
            match: props.match,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosRoute;
        this.attrBackend = rosRoute.attrBackend;
        this.attrDescription = rosRoute.attrDescription;
        this.attrDomainInfos = rosRoute.attrDomainInfos;
        this.attrEnvironmentInfo = rosRoute.attrEnvironmentInfo;
        this.attrMatch = rosRoute.attrMatch;
        this.attrRouteId = rosRoute.attrRouteId;
        this.attrRouteName = rosRoute.attrRouteName;
    }
}
