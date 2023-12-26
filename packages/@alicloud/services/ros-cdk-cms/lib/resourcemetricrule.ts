import * as ros from '@alicloud/ros-cdk-core';
import { RosResourceMetricRule } from './cms.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosResourceMetricRule as ResourceMetricRuleProperty };

/**
 * Properties for defining a `ResourceMetricRule`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms-resourcemetricrule
 */
export interface ResourceMetricRuleProps {

    /**
     * Property contactGroups: The alert contact group.
     * The alert notifications are sent to the contacts that belong to the alert contact group.
     * Note: An alert contact group can contain one or more alert contacts. For information about how to create alert contacts and alert contact groups, see PutContact and PutContactGroup.
     */
    readonly contactGroups: Array<string | ros.IResolvable> | ros.IResolvable;

    /**
     * Property escalations: You must select at least one of the Critical, Warn, and Info alert levels.
     */
    readonly escalations: RosResourceMetricRule.EscalationsProperty | ros.IResolvable;

    /**
     * Property metricName: The name of the metric.
     * For information about how to query the name of a metric, see Appendix 1: Metrics.
     * Note: If you create a Prometheus alert rule for Hybrid Cloud Monitoring, you must set this parameter to the name of the namespace. For information about how to obtain the name of a namespace, see DescribeHybridMonitorNamespaceList.
     */
    readonly metricName: string | ros.IResolvable;

    /**
     * Property namespace: The namespace of the cloud service.
     * For information about how to query the namespace of a cloud service, Appendix 1: Metrics.
     * Note: If you create a Prometheus alert rule for Hybrid Cloud Monitoring, you must set this parameter to acs_prometheus.
     */
    readonly namespace: string | ros.IResolvable;

    /**
     * Property resources: The information about the resource.
     * Examples: [{"instanceId":"i-uf6j91r34rnwawoo****"}] and [{"userId":"100931896542****"}].
     * For information about the supported dimensions that are used to query resources, see Appendix 1: Metrics.
     */
    readonly resources: Array<{ [key: string]: any }> | ros.IResolvable;

    /**
     * Property compositeExpression: The trigger conditions for multiple metrics.
     * Note: The trigger conditions for a single metric and multiple metrics are mutually exclusive. You cannot specify trigger conditions for a single metric and multiple metrics at the same time.
     */
    readonly compositeExpression?: RosResourceMetricRule.CompositeExpressionProperty | ros.IResolvable;

    /**
     * Property deletionForce: Whether to delete rule even if it is not created by ROS. Default is false
     */
    readonly deletionForce?: boolean | ros.IResolvable;

    /**
     * Property effectiveInterval: The time period during which the alert rule is effective.
     */
    readonly effectiveInterval?: string | ros.IResolvable;

    /**
     * Property emailSubject: The subject of the alert notification email.
     */
    readonly emailSubject?: string | ros.IResolvable;

    /**
     * Property interval: The interval at which the alert is triggered. Unit: seconds.
     * Note: For information about how to query the statistical period of a metric, see Appendix 1: Metrics.
     */
    readonly interval?: number | ros.IResolvable;

    /**
     * Property labels:
     */
    readonly labels?: Array<RosResourceMetricRule.LabelsProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * Property noDataPolicy: The processing method of alerts when no monitoring data is found. Valid values:
     * - KEEP_LAST_STATE (default value): No operation is performed.
     * - INSUFFICIENT_DATA: An alert whose content is "Insufficient data" is triggered.
     * - OK: The status is considered normal.
     */
    readonly noDataPolicy?: string | ros.IResolvable;

    /**
     * Property noEffectiveInterval: The time period during which the alert rule is ineffective.
     */
    readonly noEffectiveInterval?: string | ros.IResolvable;

    /**
     * Property period: The statistical period of the metric. Unit: seconds. The default value is the interval at which the monitoring data of the metric is collected.
     * Note: For information about how to query the statistical period of a metric, see Appendix 1: Metrics.
     */
    readonly period?: number | ros.IResolvable;

    /**
     * Property prometheus: The Prometheus alert rule.
     * Note: This parameter is required only when you create a Prometheus alert rule for Hybrid Cloud Monitoring.
     */
    readonly prometheus?: RosResourceMetricRule.PrometheusProperty | ros.IResolvable;

    /**
     * Property ruleId: The ID of the alert rule. If not specified, ROS will generate one.
     * You can specify a new ID or the ID of an existing alert rule. For information about how to query the ID of an alert rule, see DescribeMetricRuleList.
     * Note: If you specify a new ID, a threshold-triggered alert rule is created.
     */
    readonly ruleId?: string | ros.IResolvable;

    /**
     * Property ruleName: The name of the alert rule. If not specified and the rule is created by ROS, default to RuleId.
     * You can specify a new name or the name of an existing alert rule. For information about how to query the name of an alert rule, see DescribeMetricRuleList.
     * Note: If you specify a new name, a threshold-triggered alert rule is created.
     */
    readonly ruleName?: string | ros.IResolvable;

    /**
     * Property silenceTime: The mute period during which new alerts are not sent even if the trigger conditions are met. Unit: seconds. Default value: 86400.
     * Note: If an alert is not cleared within the mute period, a new alert notification is sent when the mute period ends.
     */
    readonly silenceTime?: number | ros.IResolvable;

    /**
     * Property webhook: The callback URL to which a POST request is sent when an alert is triggered based on the alert rule.
     */
    readonly webhook?: string | ros.IResolvable;
}

/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::CMS::ResourceMetricRule`, which is used to create an alert rule for a metric of a resource.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosResourceMetricRule`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms-resourcemetricrule
 */
export class ResourceMetricRule extends ros.Resource {

    /**
     * Attribute RuleId: The ID of the alert rule.
     */
    public readonly attrRuleId: ros.IResolvable;

    /**
     * Attribute RuleName: The name of the alert rule.
     */
    public readonly attrRuleName: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ResourceMetricRuleProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosResourceMetricRule = new RosResourceMetricRule(this, id,  {
            noEffectiveInterval: props.noEffectiveInterval,
            contactGroups: props.contactGroups,
            silenceTime: props.silenceTime,
            ruleId: props.ruleId,
            period: props.period,
            prometheus: props.prometheus,
            labels: props.labels,
            effectiveInterval: props.effectiveInterval,
            noDataPolicy: props.noDataPolicy,
            namespace: props.namespace,
            metricName: props.metricName,
            deletionForce: props.deletionForce === undefined || props.deletionForce === null ? false : props.deletionForce,
            escalations: props.escalations,
            emailSubject: props.emailSubject,
            compositeExpression: props.compositeExpression,
            webhook: props.webhook,
            resources: props.resources,
            ruleName: props.ruleName,
            interval: props.interval,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosResourceMetricRule;
        this.attrRuleId = rosResourceMetricRule.attrRuleId;
        this.attrRuleName = rosResourceMetricRule.attrRuleName;
    }
}
