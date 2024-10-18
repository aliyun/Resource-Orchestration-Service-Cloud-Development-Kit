import * as ros from '@alicloud/ros-cdk-core';
import { RosRule } from './slb.generated';
// Generated from the AliCloud ROS Resource Specification
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
 * This class encapsulates and extends the ROS resource type `DATASOURCE::SLB::Rule`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosRule`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-slb-rule
 */
export class Rule extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: RuleProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute Cookie: The cookie to be configured on the backend server.
     */
    public readonly attrCookie: ros.IResolvable;

    /**
     * Attribute CookieTimeout: The timeout period of a cookie.
     */
    public readonly attrCookieTimeout: ros.IResolvable;

    /**
     * Attribute Domain: The domain name that is configured in the forwarding rule.
     */
    public readonly attrDomain: ros.IResolvable;

    /**
     * Attribute HealthCheck: Specifies whether to enable health checks.
     */
    public readonly attrHealthCheck: ros.IResolvable;

    /**
     * Attribute HealthCheckConnectPort: The port of the backend server that is used for health checks. Valid values: 1 to 65535.
     */
    public readonly attrHealthCheckConnectPort: ros.IResolvable;

    /**
     * Attribute HealthCheckDomain: The domain name that is used for health checks. Valid values:  $_ip: The private IP address of the backend server. If the $_ip parameter is set or the HealthCheckDomain parameter is not set, SLB uses the private IP addresses of backend servers as the domain names for health checks. domain: The domain name must be 1 to 80 characters in length. It can contain only letters, digits, periods (.),and hyphens (-).
     */
    public readonly attrHealthCheckDomain: ros.IResolvable;

    /**
     * Attribute HealthCheckHttpCode: The HTTP status code that indicates a successful health check. Separate multiple HTTP status codes with commas (,). Default value: http_2xx.
     */
    public readonly attrHealthCheckHttpCode: ros.IResolvable;

    /**
     * Attribute HealthCheckInterval: The time interval between two consecutive health checks.
     */
    public readonly attrHealthCheckInterval: ros.IResolvable;

    /**
     * Attribute HealthCheckTimeout: The timeout period of a health check response. If a backend ECS instance does not send an expected response within the specified period of time, the ECS instance is considered unhealthy.
     */
    public readonly attrHealthCheckTimeout: ros.IResolvable;

    /**
     * Attribute HealthCheckUri: The URI that is used for health checks.
     */
    public readonly attrHealthCheckUri: ros.IResolvable;

    /**
     * Attribute HealthyThreshold: The number of consecutive successful health checks that must occur before an unhealthy backend server is declared healthy. In this case, the health check state is changed from fail to success.
     */
    public readonly attrHealthyThreshold: ros.IResolvable;

    /**
     * Attribute ListenerPort: The listener port that is used by the SLB instance.
     */
    public readonly attrListenerPort: ros.IResolvable;

    /**
     * Attribute ListenerSync: Indicates whether the forwarding rule uses the scheduling algorithm, session persistence, and health check configurations of the listener.
     */
    public readonly attrListenerSync: ros.IResolvable;

    /**
     * Attribute LoadBalancerId: The ID of the SLB instance.
     */
    public readonly attrLoadBalancerId: ros.IResolvable;

    /**
     * Attribute RuleId: The ID of the forwarding rule.
     */
    public readonly attrRuleId: ros.IResolvable;

    /**
     * Attribute RuleName: The name of the forwarding rule.
     */
    public readonly attrRuleName: ros.IResolvable;

    /**
     * Attribute Scheduler: The scheduling algorithm.
     */
    public readonly attrScheduler: ros.IResolvable;

    /**
     * Attribute StickySession: Indicates whether session persistence is enabled.  Valid values: on and off.
     */
    public readonly attrStickySession: ros.IResolvable;

    /**
     * Attribute StickySessionType: The method that is used to handle a cookie.
     */
    public readonly attrStickySessionType: ros.IResolvable;

    /**
     * Attribute UnhealthyThreshold: The number of consecutive failed health checks that must occur before a healthy backend server is declared unhealthy. In this case, the health check state is changed from success to fail.
     */
    public readonly attrUnhealthyThreshold: ros.IResolvable;

    /**
     * Attribute Url: The URL that is configured in the forwarding rule.
     */
    public readonly attrUrl: ros.IResolvable;

    /**
     * Attribute VserverGroupId: The ID of the vServer group that is associated with the forwarding rule.
     */
    public readonly attrVserverGroupId: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RuleProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosRule = new RosRule(this, id,  {
            ruleId: props.ruleId,
            refreshOptions: props.refreshOptions === undefined || props.refreshOptions === null ? 'Never' : props.refreshOptions,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosRule;
        this.attrCookie = rosRule.attrCookie;
        this.attrCookieTimeout = rosRule.attrCookieTimeout;
        this.attrDomain = rosRule.attrDomain;
        this.attrHealthCheck = rosRule.attrHealthCheck;
        this.attrHealthCheckConnectPort = rosRule.attrHealthCheckConnectPort;
        this.attrHealthCheckDomain = rosRule.attrHealthCheckDomain;
        this.attrHealthCheckHttpCode = rosRule.attrHealthCheckHttpCode;
        this.attrHealthCheckInterval = rosRule.attrHealthCheckInterval;
        this.attrHealthCheckTimeout = rosRule.attrHealthCheckTimeout;
        this.attrHealthCheckUri = rosRule.attrHealthCheckUri;
        this.attrHealthyThreshold = rosRule.attrHealthyThreshold;
        this.attrListenerPort = rosRule.attrListenerPort;
        this.attrListenerSync = rosRule.attrListenerSync;
        this.attrLoadBalancerId = rosRule.attrLoadBalancerId;
        this.attrRuleId = rosRule.attrRuleId;
        this.attrRuleName = rosRule.attrRuleName;
        this.attrScheduler = rosRule.attrScheduler;
        this.attrStickySession = rosRule.attrStickySession;
        this.attrStickySessionType = rosRule.attrStickySessionType;
        this.attrUnhealthyThreshold = rosRule.attrUnhealthyThreshold;
        this.attrUrl = rosRule.attrUrl;
        this.attrVserverGroupId = rosRule.attrVserverGroupId;
    }
}
