import * as ros from '@alicloud/ros-cdk-core';
import { RosRule } from './slb.generated';
export { RosRule as RuleProperty };
/**
 * Properties for defining a `Rule`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-slb-rule
 */
export interface RuleProps {
    /**
     * Property ruleId: The ID of the forwarding rule.
     */
    readonly ruleId: string | ros.IResolvable;
    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}
/**
 * Represents a `Rule`.
 */
export interface IRule extends ros.IResource {
    readonly props: RuleProps;
    /**
     * Attribute Cookie: The cookie to be configured on the backend server.
     */
    readonly attrCookie: ros.IResolvable | string;
    /**
     * Attribute CookieTimeout: The timeout period of a cookie.
     */
    readonly attrCookieTimeout: ros.IResolvable | string;
    /**
     * Attribute Domain: The domain name that is configured in the forwarding rule.
     */
    readonly attrDomain: ros.IResolvable | string;
    /**
     * Attribute HealthCheck: Specifies whether to enable health checks.
     */
    readonly attrHealthCheck: ros.IResolvable | string;
    /**
     * Attribute HealthCheckConnectPort: The port of the backend server that is used for health checks. Valid values: 1 to 65535.
     */
    readonly attrHealthCheckConnectPort: ros.IResolvable | string;
    /**
     * Attribute HealthCheckDomain: The domain name that is used for health checks. Valid values:  $_ip: The private IP address of the backend server. If the $_ip parameter is set or the HealthCheckDomain parameter is not set, SLB uses the private IP addresses of backend servers as the domain names for health checks. domain: The domain name must be 1 to 80 characters in length. It can contain only letters, digits, periods (.),and hyphens (-).
     */
    readonly attrHealthCheckDomain: ros.IResolvable | string;
    /**
     * Attribute HealthCheckHttpCode: The HTTP status code that indicates a successful health check. Separate multiple HTTP status codes with commas (,). Default value: http_2xx.
     */
    readonly attrHealthCheckHttpCode: ros.IResolvable | string;
    /**
     * Attribute HealthCheckInterval: The time interval between two consecutive health checks.
     */
    readonly attrHealthCheckInterval: ros.IResolvable | string;
    /**
     * Attribute HealthCheckTimeout: The timeout period of a health check response. If a backend ECS instance does not send an expected response within the specified period of time, the ECS instance is considered unhealthy.
     */
    readonly attrHealthCheckTimeout: ros.IResolvable | string;
    /**
     * Attribute HealthCheckUri: The URI that is used for health checks.
     */
    readonly attrHealthCheckUri: ros.IResolvable | string;
    /**
     * Attribute HealthyThreshold: The number of consecutive successful health checks that must occur before an unhealthy backend server is declared healthy. In this case, the health check state is changed from fail to success.
     */
    readonly attrHealthyThreshold: ros.IResolvable | string;
    /**
     * Attribute ListenerPort: The listener port that is used by the SLB instance.
     */
    readonly attrListenerPort: ros.IResolvable | string;
    /**
     * Attribute ListenerSync: Indicates whether the forwarding rule uses the scheduling algorithm, session persistence, and health check configurations of the listener.
     */
    readonly attrListenerSync: ros.IResolvable | string;
    /**
     * Attribute LoadBalancerId: The ID of the SLB instance.
     */
    readonly attrLoadBalancerId: ros.IResolvable | string;
    /**
     * Attribute RuleId: The ID of the forwarding rule.
     */
    readonly attrRuleId: ros.IResolvable | string;
    /**
     * Attribute RuleName: The name of the forwarding rule.
     */
    readonly attrRuleName: ros.IResolvable | string;
    /**
     * Attribute Scheduler: The scheduling algorithm.
     */
    readonly attrScheduler: ros.IResolvable | string;
    /**
     * Attribute StickySession: Indicates whether session persistence is enabled.  Valid values: on and off.
     */
    readonly attrStickySession: ros.IResolvable | string;
    /**
     * Attribute StickySessionType: The method that is used to handle a cookie.
     */
    readonly attrStickySessionType: ros.IResolvable | string;
    /**
     * Attribute UnhealthyThreshold: The number of consecutive failed health checks that must occur before a healthy backend server is declared unhealthy. In this case, the health check state is changed from success to fail.
     */
    readonly attrUnhealthyThreshold: ros.IResolvable | string;
    /**
     * Attribute Url: The URL that is configured in the forwarding rule.
     */
    readonly attrUrl: ros.IResolvable | string;
    /**
     * Attribute VserverGroupId: The ID of the vServer group that is associated with the forwarding rule.
     */
    readonly attrVserverGroupId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::SLB::Rule`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosRule`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-slb-rule
 */
export declare class Rule extends ros.Resource implements IRule {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: RuleProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute Cookie: The cookie to be configured on the backend server.
     */
    readonly attrCookie: ros.IResolvable | string;
    /**
     * Attribute CookieTimeout: The timeout period of a cookie.
     */
    readonly attrCookieTimeout: ros.IResolvable | string;
    /**
     * Attribute Domain: The domain name that is configured in the forwarding rule.
     */
    readonly attrDomain: ros.IResolvable | string;
    /**
     * Attribute HealthCheck: Specifies whether to enable health checks.
     */
    readonly attrHealthCheck: ros.IResolvable | string;
    /**
     * Attribute HealthCheckConnectPort: The port of the backend server that is used for health checks. Valid values: 1 to 65535.
     */
    readonly attrHealthCheckConnectPort: ros.IResolvable | string;
    /**
     * Attribute HealthCheckDomain: The domain name that is used for health checks. Valid values:  $_ip: The private IP address of the backend server. If the $_ip parameter is set or the HealthCheckDomain parameter is not set, SLB uses the private IP addresses of backend servers as the domain names for health checks. domain: The domain name must be 1 to 80 characters in length. It can contain only letters, digits, periods (.),and hyphens (-).
     */
    readonly attrHealthCheckDomain: ros.IResolvable | string;
    /**
     * Attribute HealthCheckHttpCode: The HTTP status code that indicates a successful health check. Separate multiple HTTP status codes with commas (,). Default value: http_2xx.
     */
    readonly attrHealthCheckHttpCode: ros.IResolvable | string;
    /**
     * Attribute HealthCheckInterval: The time interval between two consecutive health checks.
     */
    readonly attrHealthCheckInterval: ros.IResolvable | string;
    /**
     * Attribute HealthCheckTimeout: The timeout period of a health check response. If a backend ECS instance does not send an expected response within the specified period of time, the ECS instance is considered unhealthy.
     */
    readonly attrHealthCheckTimeout: ros.IResolvable | string;
    /**
     * Attribute HealthCheckUri: The URI that is used for health checks.
     */
    readonly attrHealthCheckUri: ros.IResolvable | string;
    /**
     * Attribute HealthyThreshold: The number of consecutive successful health checks that must occur before an unhealthy backend server is declared healthy. In this case, the health check state is changed from fail to success.
     */
    readonly attrHealthyThreshold: ros.IResolvable | string;
    /**
     * Attribute ListenerPort: The listener port that is used by the SLB instance.
     */
    readonly attrListenerPort: ros.IResolvable | string;
    /**
     * Attribute ListenerSync: Indicates whether the forwarding rule uses the scheduling algorithm, session persistence, and health check configurations of the listener.
     */
    readonly attrListenerSync: ros.IResolvable | string;
    /**
     * Attribute LoadBalancerId: The ID of the SLB instance.
     */
    readonly attrLoadBalancerId: ros.IResolvable | string;
    /**
     * Attribute RuleId: The ID of the forwarding rule.
     */
    readonly attrRuleId: ros.IResolvable | string;
    /**
     * Attribute RuleName: The name of the forwarding rule.
     */
    readonly attrRuleName: ros.IResolvable | string;
    /**
     * Attribute Scheduler: The scheduling algorithm.
     */
    readonly attrScheduler: ros.IResolvable | string;
    /**
     * Attribute StickySession: Indicates whether session persistence is enabled.  Valid values: on and off.
     */
    readonly attrStickySession: ros.IResolvable | string;
    /**
     * Attribute StickySessionType: The method that is used to handle a cookie.
     */
    readonly attrStickySessionType: ros.IResolvable | string;
    /**
     * Attribute UnhealthyThreshold: The number of consecutive failed health checks that must occur before a healthy backend server is declared unhealthy. In this case, the health check state is changed from success to fail.
     */
    readonly attrUnhealthyThreshold: ros.IResolvable | string;
    /**
     * Attribute Url: The URL that is configured in the forwarding rule.
     */
    readonly attrUrl: ros.IResolvable | string;
    /**
     * Attribute VserverGroupId: The ID of the vServer group that is associated with the forwarding rule.
     */
    readonly attrVserverGroupId: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RuleProps, enableResourcePropertyConstraint?: boolean);
}
