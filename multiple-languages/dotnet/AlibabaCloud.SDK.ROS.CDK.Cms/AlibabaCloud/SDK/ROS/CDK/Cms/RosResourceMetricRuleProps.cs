using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cms
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::CMS::ResourceMetricRule`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-cms.RosResourceMetricRuleProps")]
    public class RosResourceMetricRuleProps : AlibabaCloud.SDK.ROS.CDK.Cms.IRosResourceMetricRuleProps
    {
        /// <remarks>
        /// <strong>Property</strong>: contactGroups: The alert contact group.
        /// The alert notifications are sent to the contacts that belong to the alert contact group.
        /// Note: An alert contact group can contain one or more alert contacts. For information about how to create alert contacts and alert contact groups, see PutContact and PutContactGroup.
        /// </remarks>
        [JsiiProperty(name: "contactGroups", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
        public object ContactGroups
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: escalations: You must select at least one of the Critical, Warn, and Info alert levels.
        /// </remarks>
        [JsiiProperty(name: "escalations", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cms.RosResourceMetricRule.EscalationsProperty\"}]}}")]
        public object Escalations
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: metricName: The name of the metric.
        /// For information about how to query the name of a metric, see Appendix 1: Metrics.
        /// Note: If you create a Prometheus alert rule for Hybrid Cloud Monitoring, you must set this parameter to the name of the namespace. For information about how to obtain the name of a namespace, see DescribeHybridMonitorNamespaceList.
        /// </remarks>
        [JsiiProperty(name: "metricName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object MetricName
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: namespace: The namespace of the cloud service.
        /// For information about how to query the namespace of a cloud service, Appendix 1: Metrics.
        /// Note: If you create a Prometheus alert rule for Hybrid Cloud Monitoring, you must set this parameter to acs_prometheus.
        /// </remarks>
        [JsiiProperty(name: "namespace", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object Namespace
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: resources: The information about the resource.
        /// Examples: [{"instanceId":"i-uf6j91r34rnwawoo****"}] and [{"userId":"100931896542****"}].
        /// For information about the supported dimensions that are used to query resources, see Appendix 1: Metrics.
        /// </remarks>
        [JsiiProperty(name: "resources", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}},\"kind\":\"array\"}}]}}")]
        public object Resources
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: compositeExpression: The trigger conditions for multiple metrics.
        /// Note: The trigger conditions for a single metric and multiple metrics are mutually exclusive. You cannot specify trigger conditions for a single metric and multiple metrics at the same time.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "compositeExpression", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cms.RosResourceMetricRule.CompositeExpressionProperty\"}]}}", isOptional: true)]
        public object? CompositeExpression
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: deletionForce: Whether to delete rule even if it is not created by ROS. Default is false
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "deletionForce", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? DeletionForce
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: effectiveInterval: The time period during which the alert rule is effective.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "effectiveInterval", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? EffectiveInterval
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: emailSubject: The subject of the alert notification email.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "emailSubject", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? EmailSubject
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: interval: The interval at which the alert is triggered. Unit: seconds.
        /// Note: For information about how to query the statistical period of a metric, see Appendix 1: Metrics.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "interval", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? Interval
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: labels:
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "labels", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cms.RosResourceMetricRule.LabelsProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        public object? Labels
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: noDataPolicy: The processing method of alerts when no monitoring data is found. Valid values:
        /// - KEEP_LAST_STATE (default value): No operation is performed.
        /// - INSUFFICIENT_DATA: An alert whose content is "Insufficient data" is triggered.
        /// - OK: The status is considered normal.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "noDataPolicy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? NoDataPolicy
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: noEffectiveInterval: The time period during which the alert rule is ineffective.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "noEffectiveInterval", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? NoEffectiveInterval
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: period: The statistical period of the metric. Unit: seconds. The default value is the interval at which the monitoring data of the metric is collected.
        /// Note: For information about how to query the statistical period of a metric, see Appendix 1: Metrics.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "period", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? Period
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: prometheus: The Prometheus alert rule.
        /// Note: This parameter is required only when you create a Prometheus alert rule for Hybrid Cloud Monitoring.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "prometheus", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cms.RosResourceMetricRule.PrometheusProperty\"}]}}", isOptional: true)]
        public object? Prometheus
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: ruleId: The ID of the alert rule. If not specified, ROS will generate one.
        /// You can specify a new ID or the ID of an existing alert rule. For information about how to query the ID of an alert rule, see DescribeMetricRuleList.
        /// Note: If you specify a new ID, a threshold-triggered alert rule is created.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "ruleId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? RuleId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: ruleName: The name of the alert rule. If not specified and the rule is created by ROS, default to RuleId.
        /// You can specify a new name or the name of an existing alert rule. For information about how to query the name of an alert rule, see DescribeMetricRuleList.
        /// Note: If you specify a new name, a threshold-triggered alert rule is created.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "ruleName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? RuleName
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: silenceTime: The mute period during which new alerts are not sent even if the trigger conditions are met. Unit: seconds. Default value: 86400.
        /// Note: If an alert is not cleared within the mute period, a new alert notification is sent when the mute period ends.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "silenceTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? SilenceTime
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: webhook: The callback URL to which a POST request is sent when an alert is triggered based on the alert rule.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "webhook", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? Webhook
        {
            get;
            set;
        }
    }
}
