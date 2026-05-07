import * as ros from '@alicloud/ros-cdk-core';
import { RosRoutineRoute } from './esa.generated';
export { RosRoutineRoute as RoutineRouteProperty };
/**
 * Properties for defining a `RoutineRoute`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-routineroute
 */
export interface RoutineRouteProps {
    /**
     * Property routineName: The edge function Routine name.
     */
    readonly routineName: string | ros.IResolvable;
    /**
     * Property siteId: The website ID.
     */
    readonly siteId: number | ros.IResolvable;
    /**
     * Property bypass: Bypass mode. Value range:
     * - on: Open
     * - off: off.
     */
    readonly bypass?: string | ros.IResolvable;
    /**
     * Property fallback: The exception origin fetch switch. After you turn on this switch, if a function exception occurs, such as CPU usage exceeding the upper limit, requests are sent back to the origin. Valid values:
     * on
     * off
     *
     */
    readonly fallback?: string | ros.IResolvable;
    /**
     * Property routeEnable: Routing switch. Value range:
     * - on: Open
     * - off: off.
     */
    readonly routeEnable?: string | ros.IResolvable;
    /**
     * Property routeName: The name of the route.
     */
    readonly routeName?: string | ros.IResolvable;
    /**
     * Property rule: The content of the rule.
     */
    readonly rule?: string | ros.IResolvable;
    /**
     * Property sequence: Rule execution order.
     */
    readonly sequence?: number | ros.IResolvable;
}
/**
 * Represents a `RoutineRoute`.
 */
export interface IRoutineRoute extends ros.IResource {
    readonly props: RoutineRouteProps;
    /**
     * Attribute Bypass: Bypass mode.
     */
    readonly attrBypass: ros.IResolvable | string;
    /**
     * Attribute ConfigId: The configuration ID.
     */
    readonly attrConfigId: ros.IResolvable | string;
    /**
     * Attribute ConfigType: The configuration type. You can use this parameter to check the global configuration or rule configuration.
     */
    readonly attrConfigType: ros.IResolvable | string;
    /**
     * Attribute Fallback: An exception to the origin server switch will be enabled. If an exception occurs in the function, such as CPU usage exceeding limits, a request will be made to return to the origin server.
     */
    readonly attrFallback: ros.IResolvable | string;
    /**
     * Attribute Mode: Configuration mode.
     */
    readonly attrMode: ros.IResolvable | string;
    /**
     * Attribute RouteEnable: Routing switch.
     */
    readonly attrRouteEnable: ros.IResolvable | string;
    /**
     * Attribute RouteName: The route name.
     */
    readonly attrRouteName: ros.IResolvable | string;
    /**
     * Attribute RoutineName: The edge function Routine name.
     */
    readonly attrRoutineName: ros.IResolvable | string;
    /**
     * Attribute Rule: The content of the rule.
     */
    readonly attrRule: ros.IResolvable | string;
    /**
     * Attribute Sequence: Rule execution order.
     */
    readonly attrSequence: ros.IResolvable | string;
    /**
     * Attribute SiteVersion: Version number of the site.
     */
    readonly attrSiteVersion: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ESA::RoutineRoute`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosRoutineRoute`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-routineroute
 */
export declare class RoutineRoute extends ros.Resource implements IRoutineRoute {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: RoutineRouteProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute Bypass: Bypass mode.
     */
    readonly attrBypass: ros.IResolvable | string;
    /**
     * Attribute ConfigId: The configuration ID.
     */
    readonly attrConfigId: ros.IResolvable | string;
    /**
     * Attribute ConfigType: The configuration type. You can use this parameter to check the global configuration or rule configuration.
     */
    readonly attrConfigType: ros.IResolvable | string;
    /**
     * Attribute Fallback: An exception to the origin server switch will be enabled. If an exception occurs in the function, such as CPU usage exceeding limits, a request will be made to return to the origin server.
     */
    readonly attrFallback: ros.IResolvable | string;
    /**
     * Attribute Mode: Configuration mode.
     */
    readonly attrMode: ros.IResolvable | string;
    /**
     * Attribute RouteEnable: Routing switch.
     */
    readonly attrRouteEnable: ros.IResolvable | string;
    /**
     * Attribute RouteName: The route name.
     */
    readonly attrRouteName: ros.IResolvable | string;
    /**
     * Attribute RoutineName: The edge function Routine name.
     */
    readonly attrRoutineName: ros.IResolvable | string;
    /**
     * Attribute Rule: The content of the rule.
     */
    readonly attrRule: ros.IResolvable | string;
    /**
     * Attribute Sequence: Rule execution order.
     */
    readonly attrSequence: ros.IResolvable | string;
    /**
     * Attribute SiteVersion: Version number of the site.
     */
    readonly attrSiteVersion: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RoutineRouteProps, enableResourcePropertyConstraint?: boolean);
}
