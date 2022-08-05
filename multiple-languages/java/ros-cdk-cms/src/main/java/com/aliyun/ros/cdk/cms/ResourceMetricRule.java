package com.aliyun.ros.cdk.cms;

/**
 * A ROS resource type:  `ALIYUN::CMS::ResourceMetricRule`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.63.2 (build a8a8833)", date = "2022-08-05T07:29:03.143Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cms.$Module.class, fqn = "@alicloud/ros-cdk-cms.ResourceMetricRule")
public class ResourceMetricRule extends com.aliyun.ros.cdk.core.Resource {

    protected ResourceMetricRule(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected ResourceMetricRule(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new `ALIYUN::CMS::ResourceMetricRule`.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     * @param enableResourcePropertyConstraint
     */
    public ResourceMetricRule(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cms.ResourceMetricRuleProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new `ALIYUN::CMS::ResourceMetricRule`.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public ResourceMetricRule(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cms.ResourceMetricRuleProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute RuleId: The ID of the alert rule.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrRuleId() {
        return software.amazon.jsii.Kernel.get(this, "attrRuleId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute RuleName: The name of the alert rule.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrRuleName() {
        return software.amazon.jsii.Kernel.get(this, "attrRuleName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.cms.ResourceMetricRule}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.cms.ResourceMetricRule> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope This parameter is required.
         * @param id This parameter is required.
         * @param enableResourcePropertyConstraint
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }
        /**
         * @return a new instance of {@link Builder}.
         * @param scope This parameter is required.
         * @param id This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id) {
            return new Builder(scope, id, null);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final java.lang.Boolean enableResourcePropertyConstraint;
        private final com.aliyun.ros.cdk.cms.ResourceMetricRuleProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.cms.ResourceMetricRuleProps.Builder();
        }

        /**
         * Property contactGroups: The alert contact group.
         * <p>
         * The alert notifications are sent to the contacts that belong to the alert contact group.
         * Note: An alert contact group can contain one or more alert contacts. For information about how to create alert contacts and alert contact groups, see PutContact and PutContactGroup.
         * <p>
         * @return {@code this}
         * @param contactGroups Property contactGroups: The alert contact group. This parameter is required.
         */
        public Builder contactGroups(final com.aliyun.ros.cdk.core.IResolvable contactGroups) {
            this.props.contactGroups(contactGroups);
            return this;
        }
        /**
         * Property contactGroups: The alert contact group.
         * <p>
         * The alert notifications are sent to the contacts that belong to the alert contact group.
         * Note: An alert contact group can contain one or more alert contacts. For information about how to create alert contacts and alert contact groups, see PutContact and PutContactGroup.
         * <p>
         * @return {@code this}
         * @param contactGroups Property contactGroups: The alert contact group. This parameter is required.
         */
        public Builder contactGroups(final java.util.List<? extends java.lang.Object> contactGroups) {
            this.props.contactGroups(contactGroups);
            return this;
        }

        /**
         * Property escalations: You must select at least one of the Critical, Warn, and Info alert levels.
         * <p>
         * @return {@code this}
         * @param escalations Property escalations: You must select at least one of the Critical, Warn, and Info alert levels. This parameter is required.
         */
        public Builder escalations(final com.aliyun.ros.cdk.core.IResolvable escalations) {
            this.props.escalations(escalations);
            return this;
        }
        /**
         * Property escalations: You must select at least one of the Critical, Warn, and Info alert levels.
         * <p>
         * @return {@code this}
         * @param escalations Property escalations: You must select at least one of the Critical, Warn, and Info alert levels. This parameter is required.
         */
        public Builder escalations(final com.aliyun.ros.cdk.cms.RosResourceMetricRule.EscalationsProperty escalations) {
            this.props.escalations(escalations);
            return this;
        }

        /**
         * Property metricName: The name of the metric.
         * <p>
         * For information about how to query the name of a metric, see Appendix 1: Metrics.
         * Note: If you create a Prometheus alert rule for Hybrid Cloud Monitoring, you must set this parameter to the name of the namespace. For information about how to obtain the name of a namespace, see DescribeHybridMonitorNamespaceList.
         * <p>
         * @return {@code this}
         * @param metricName Property metricName: The name of the metric. This parameter is required.
         */
        public Builder metricName(final java.lang.String metricName) {
            this.props.metricName(metricName);
            return this;
        }
        /**
         * Property metricName: The name of the metric.
         * <p>
         * For information about how to query the name of a metric, see Appendix 1: Metrics.
         * Note: If you create a Prometheus alert rule for Hybrid Cloud Monitoring, you must set this parameter to the name of the namespace. For information about how to obtain the name of a namespace, see DescribeHybridMonitorNamespaceList.
         * <p>
         * @return {@code this}
         * @param metricName Property metricName: The name of the metric. This parameter is required.
         */
        public Builder metricName(final com.aliyun.ros.cdk.core.IResolvable metricName) {
            this.props.metricName(metricName);
            return this;
        }

        /**
         * Property namespace: The namespace of the cloud service.
         * <p>
         * For information about how to query the namespace of a cloud service, Appendix 1: Metrics.
         * Note: If you create a Prometheus alert rule for Hybrid Cloud Monitoring, you must set this parameter to acs_prometheus.
         * <p>
         * @return {@code this}
         * @param namespace Property namespace: The namespace of the cloud service. This parameter is required.
         */
        public Builder namespace(final java.lang.String namespace) {
            this.props.namespace(namespace);
            return this;
        }
        /**
         * Property namespace: The namespace of the cloud service.
         * <p>
         * For information about how to query the namespace of a cloud service, Appendix 1: Metrics.
         * Note: If you create a Prometheus alert rule for Hybrid Cloud Monitoring, you must set this parameter to acs_prometheus.
         * <p>
         * @return {@code this}
         * @param namespace Property namespace: The namespace of the cloud service. This parameter is required.
         */
        public Builder namespace(final com.aliyun.ros.cdk.core.IResolvable namespace) {
            this.props.namespace(namespace);
            return this;
        }

        /**
         * Property resources: The information about the resource.
         * <p>
         * Examples: [{"instanceId":"i-uf6j91r34rnwawoo****"}] and [{"userId":"100931896542****"}].
         * For information about the supported dimensions that are used to query resources, see Appendix 1: Metrics.
         * <p>
         * @return {@code this}
         * @param resources Property resources: The information about the resource. This parameter is required.
         */
        public Builder resources(final com.aliyun.ros.cdk.core.IResolvable resources) {
            this.props.resources(resources);
            return this;
        }
        /**
         * Property resources: The information about the resource.
         * <p>
         * Examples: [{"instanceId":"i-uf6j91r34rnwawoo****"}] and [{"userId":"100931896542****"}].
         * For information about the supported dimensions that are used to query resources, see Appendix 1: Metrics.
         * <p>
         * @return {@code this}
         * @param resources Property resources: The information about the resource. This parameter is required.
         */
        public Builder resources(final java.util.List<? extends java.util.Map<java.lang.String, ? extends java.lang.Object>> resources) {
            this.props.resources(resources);
            return this;
        }

        /**
         * Property compositeExpression: The trigger conditions for multiple metrics.
         * <p>
         * Note: The trigger conditions for a single metric and multiple metrics are mutually exclusive. You cannot specify trigger conditions for a single metric and multiple metrics at the same time.
         * <p>
         * @return {@code this}
         * @param compositeExpression Property compositeExpression: The trigger conditions for multiple metrics. This parameter is required.
         */
        public Builder compositeExpression(final com.aliyun.ros.cdk.core.IResolvable compositeExpression) {
            this.props.compositeExpression(compositeExpression);
            return this;
        }
        /**
         * Property compositeExpression: The trigger conditions for multiple metrics.
         * <p>
         * Note: The trigger conditions for a single metric and multiple metrics are mutually exclusive. You cannot specify trigger conditions for a single metric and multiple metrics at the same time.
         * <p>
         * @return {@code this}
         * @param compositeExpression Property compositeExpression: The trigger conditions for multiple metrics. This parameter is required.
         */
        public Builder compositeExpression(final com.aliyun.ros.cdk.cms.RosResourceMetricRule.CompositeExpressionProperty compositeExpression) {
            this.props.compositeExpression(compositeExpression);
            return this;
        }

        /**
         * Property deletionForce: Whether to delete rule even if it is not created by ROS.
         * <p>
         * Default is false
         * <p>
         * @return {@code this}
         * @param deletionForce Property deletionForce: Whether to delete rule even if it is not created by ROS. This parameter is required.
         */
        public Builder deletionForce(final java.lang.Boolean deletionForce) {
            this.props.deletionForce(deletionForce);
            return this;
        }
        /**
         * Property deletionForce: Whether to delete rule even if it is not created by ROS.
         * <p>
         * Default is false
         * <p>
         * @return {@code this}
         * @param deletionForce Property deletionForce: Whether to delete rule even if it is not created by ROS. This parameter is required.
         */
        public Builder deletionForce(final com.aliyun.ros.cdk.core.IResolvable deletionForce) {
            this.props.deletionForce(deletionForce);
            return this;
        }

        /**
         * Property effectiveInterval: The time period during which the alert rule is effective.
         * <p>
         * @return {@code this}
         * @param effectiveInterval Property effectiveInterval: The time period during which the alert rule is effective. This parameter is required.
         */
        public Builder effectiveInterval(final java.lang.String effectiveInterval) {
            this.props.effectiveInterval(effectiveInterval);
            return this;
        }
        /**
         * Property effectiveInterval: The time period during which the alert rule is effective.
         * <p>
         * @return {@code this}
         * @param effectiveInterval Property effectiveInterval: The time period during which the alert rule is effective. This parameter is required.
         */
        public Builder effectiveInterval(final com.aliyun.ros.cdk.core.IResolvable effectiveInterval) {
            this.props.effectiveInterval(effectiveInterval);
            return this;
        }

        /**
         * Property emailSubject: The subject of the alert notification email.
         * <p>
         * @return {@code this}
         * @param emailSubject Property emailSubject: The subject of the alert notification email. This parameter is required.
         */
        public Builder emailSubject(final java.lang.String emailSubject) {
            this.props.emailSubject(emailSubject);
            return this;
        }
        /**
         * Property emailSubject: The subject of the alert notification email.
         * <p>
         * @return {@code this}
         * @param emailSubject Property emailSubject: The subject of the alert notification email. This parameter is required.
         */
        public Builder emailSubject(final com.aliyun.ros.cdk.core.IResolvable emailSubject) {
            this.props.emailSubject(emailSubject);
            return this;
        }

        /**
         * Property interval: The interval at which the alert is triggered.
         * <p>
         * Unit: seconds.
         * Note: For information about how to query the statistical period of a metric, see Appendix 1: Metrics.
         * <p>
         * @return {@code this}
         * @param interval Property interval: The interval at which the alert is triggered. This parameter is required.
         */
        public Builder interval(final java.lang.Number interval) {
            this.props.interval(interval);
            return this;
        }
        /**
         * Property interval: The interval at which the alert is triggered.
         * <p>
         * Unit: seconds.
         * Note: For information about how to query the statistical period of a metric, see Appendix 1: Metrics.
         * <p>
         * @return {@code this}
         * @param interval Property interval: The interval at which the alert is triggered. This parameter is required.
         */
        public Builder interval(final com.aliyun.ros.cdk.core.IResolvable interval) {
            this.props.interval(interval);
            return this;
        }

        /**
         * Property labels:.
         * <p>
         * @return {@code this}
         * @param labels Property labels:. This parameter is required.
         */
        public Builder labels(final com.aliyun.ros.cdk.core.IResolvable labels) {
            this.props.labels(labels);
            return this;
        }
        /**
         * Property labels:.
         * <p>
         * @return {@code this}
         * @param labels Property labels:. This parameter is required.
         */
        public Builder labels(final java.util.List<? extends java.lang.Object> labels) {
            this.props.labels(labels);
            return this;
        }

        /**
         * Property noDataPolicy: The processing method of alerts when no monitoring data is found.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>KEEP_LAST_STATE (default value): No operation is performed.</li>
         * <li>INSUFFICIENT_DATA: An alert whose content is "Insufficient data" is triggered.</li>
         * <li>OK: The status is considered normal.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param noDataPolicy Property noDataPolicy: The processing method of alerts when no monitoring data is found. This parameter is required.
         */
        public Builder noDataPolicy(final java.lang.String noDataPolicy) {
            this.props.noDataPolicy(noDataPolicy);
            return this;
        }
        /**
         * Property noDataPolicy: The processing method of alerts when no monitoring data is found.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>KEEP_LAST_STATE (default value): No operation is performed.</li>
         * <li>INSUFFICIENT_DATA: An alert whose content is "Insufficient data" is triggered.</li>
         * <li>OK: The status is considered normal.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param noDataPolicy Property noDataPolicy: The processing method of alerts when no monitoring data is found. This parameter is required.
         */
        public Builder noDataPolicy(final com.aliyun.ros.cdk.core.IResolvable noDataPolicy) {
            this.props.noDataPolicy(noDataPolicy);
            return this;
        }

        /**
         * Property noEffectiveInterval: The time period during which the alert rule is ineffective.
         * <p>
         * @return {@code this}
         * @param noEffectiveInterval Property noEffectiveInterval: The time period during which the alert rule is ineffective. This parameter is required.
         */
        public Builder noEffectiveInterval(final java.lang.String noEffectiveInterval) {
            this.props.noEffectiveInterval(noEffectiveInterval);
            return this;
        }
        /**
         * Property noEffectiveInterval: The time period during which the alert rule is ineffective.
         * <p>
         * @return {@code this}
         * @param noEffectiveInterval Property noEffectiveInterval: The time period during which the alert rule is ineffective. This parameter is required.
         */
        public Builder noEffectiveInterval(final com.aliyun.ros.cdk.core.IResolvable noEffectiveInterval) {
            this.props.noEffectiveInterval(noEffectiveInterval);
            return this;
        }

        /**
         * Property period: The statistical period of the metric.
         * <p>
         * Unit: seconds. The default value is the interval at which the monitoring data of the metric is collected.
         * Note: For information about how to query the statistical period of a metric, see Appendix 1: Metrics.
         * <p>
         * @return {@code this}
         * @param period Property period: The statistical period of the metric. This parameter is required.
         */
        public Builder period(final java.lang.Number period) {
            this.props.period(period);
            return this;
        }
        /**
         * Property period: The statistical period of the metric.
         * <p>
         * Unit: seconds. The default value is the interval at which the monitoring data of the metric is collected.
         * Note: For information about how to query the statistical period of a metric, see Appendix 1: Metrics.
         * <p>
         * @return {@code this}
         * @param period Property period: The statistical period of the metric. This parameter is required.
         */
        public Builder period(final com.aliyun.ros.cdk.core.IResolvable period) {
            this.props.period(period);
            return this;
        }

        /**
         * Property prometheus: The Prometheus alert rule.
         * <p>
         * Note: This parameter is required only when you create a Prometheus alert rule for Hybrid Cloud Monitoring.
         * <p>
         * @return {@code this}
         * @param prometheus Property prometheus: The Prometheus alert rule. This parameter is required.
         */
        public Builder prometheus(final com.aliyun.ros.cdk.core.IResolvable prometheus) {
            this.props.prometheus(prometheus);
            return this;
        }
        /**
         * Property prometheus: The Prometheus alert rule.
         * <p>
         * Note: This parameter is required only when you create a Prometheus alert rule for Hybrid Cloud Monitoring.
         * <p>
         * @return {@code this}
         * @param prometheus Property prometheus: The Prometheus alert rule. This parameter is required.
         */
        public Builder prometheus(final com.aliyun.ros.cdk.cms.RosResourceMetricRule.PrometheusProperty prometheus) {
            this.props.prometheus(prometheus);
            return this;
        }

        /**
         * Property ruleId: The ID of the alert rule.
         * <p>
         * If not specified, ROS will generate one.
         * You can specify a new ID or the ID of an existing alert rule. For information about how to query the ID of an alert rule, see DescribeMetricRuleList.
         * Note: If you specify a new ID, a threshold-triggered alert rule is created.
         * <p>
         * @return {@code this}
         * @param ruleId Property ruleId: The ID of the alert rule. This parameter is required.
         */
        public Builder ruleId(final java.lang.String ruleId) {
            this.props.ruleId(ruleId);
            return this;
        }
        /**
         * Property ruleId: The ID of the alert rule.
         * <p>
         * If not specified, ROS will generate one.
         * You can specify a new ID or the ID of an existing alert rule. For information about how to query the ID of an alert rule, see DescribeMetricRuleList.
         * Note: If you specify a new ID, a threshold-triggered alert rule is created.
         * <p>
         * @return {@code this}
         * @param ruleId Property ruleId: The ID of the alert rule. This parameter is required.
         */
        public Builder ruleId(final com.aliyun.ros.cdk.core.IResolvable ruleId) {
            this.props.ruleId(ruleId);
            return this;
        }

        /**
         * Property ruleName: The name of the alert rule.
         * <p>
         * If not specified and the rule is created by ROS, default to RuleId.
         * You can specify a new name or the name of an existing alert rule. For information about how to query the name of an alert rule, see DescribeMetricRuleList.
         * Note: If you specify a new name, a threshold-triggered alert rule is created.
         * <p>
         * @return {@code this}
         * @param ruleName Property ruleName: The name of the alert rule. This parameter is required.
         */
        public Builder ruleName(final java.lang.String ruleName) {
            this.props.ruleName(ruleName);
            return this;
        }
        /**
         * Property ruleName: The name of the alert rule.
         * <p>
         * If not specified and the rule is created by ROS, default to RuleId.
         * You can specify a new name or the name of an existing alert rule. For information about how to query the name of an alert rule, see DescribeMetricRuleList.
         * Note: If you specify a new name, a threshold-triggered alert rule is created.
         * <p>
         * @return {@code this}
         * @param ruleName Property ruleName: The name of the alert rule. This parameter is required.
         */
        public Builder ruleName(final com.aliyun.ros.cdk.core.IResolvable ruleName) {
            this.props.ruleName(ruleName);
            return this;
        }

        /**
         * Property silenceTime: The mute period during which new alerts are not sent even if the trigger conditions are met.
         * <p>
         * Unit: seconds. Default value: 86400.
         * Note: If an alert is not cleared within the mute period, a new alert notification is sent when the mute period ends.
         * <p>
         * @return {@code this}
         * @param silenceTime Property silenceTime: The mute period during which new alerts are not sent even if the trigger conditions are met. This parameter is required.
         */
        public Builder silenceTime(final java.lang.Number silenceTime) {
            this.props.silenceTime(silenceTime);
            return this;
        }
        /**
         * Property silenceTime: The mute period during which new alerts are not sent even if the trigger conditions are met.
         * <p>
         * Unit: seconds. Default value: 86400.
         * Note: If an alert is not cleared within the mute period, a new alert notification is sent when the mute period ends.
         * <p>
         * @return {@code this}
         * @param silenceTime Property silenceTime: The mute period during which new alerts are not sent even if the trigger conditions are met. This parameter is required.
         */
        public Builder silenceTime(final com.aliyun.ros.cdk.core.IResolvable silenceTime) {
            this.props.silenceTime(silenceTime);
            return this;
        }

        /**
         * Property webhook: The callback URL to which a POST request is sent when an alert is triggered based on the alert rule.
         * <p>
         * @return {@code this}
         * @param webhook Property webhook: The callback URL to which a POST request is sent when an alert is triggered based on the alert rule. This parameter is required.
         */
        public Builder webhook(final java.lang.String webhook) {
            this.props.webhook(webhook);
            return this;
        }
        /**
         * Property webhook: The callback URL to which a POST request is sent when an alert is triggered based on the alert rule.
         * <p>
         * @return {@code this}
         * @param webhook Property webhook: The callback URL to which a POST request is sent when an alert is triggered based on the alert rule. This parameter is required.
         */
        public Builder webhook(final com.aliyun.ros.cdk.core.IResolvable webhook) {
            this.props.webhook(webhook);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.cms.ResourceMetricRule}.
         */
        @Override
        public com.aliyun.ros.cdk.cms.ResourceMetricRule build() {
            return new com.aliyun.ros.cdk.cms.ResourceMetricRule(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
