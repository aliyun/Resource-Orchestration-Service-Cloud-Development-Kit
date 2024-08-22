package com.aliyun.ros.cdk.cms;

/**
 * Properties for defining a <code>ResourceMetricRule</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms-resourcemetricrule
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-08-22T08:56:18.622Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cms.$Module.class, fqn = "@alicloud/ros-cdk-cms.ResourceMetricRuleProps")
@software.amazon.jsii.Jsii.Proxy(ResourceMetricRuleProps.Jsii$Proxy.class)
public interface ResourceMetricRuleProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property contactGroups: The alert contact group.
     * <p>
     * The alert notifications are sent to the contacts that belong to the alert contact group.
     * Note: An alert contact group can contain one or more alert contacts. For information about how to create alert contacts and alert contact groups, see PutContact and PutContactGroup.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getContactGroups();

    /**
     * Property escalations: You must select at least one of the Critical, Warn, and Info alert levels.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getEscalations();

    /**
     * Property metricName: The name of the metric.
     * <p>
     * For information about how to query the name of a metric, see Appendix 1: Metrics.
     * Note: If you create a Prometheus alert rule for Hybrid Cloud Monitoring, you must set this parameter to the name of the namespace. For information about how to obtain the name of a namespace, see DescribeHybridMonitorNamespaceList.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getMetricName();

    /**
     * Property namespace: The namespace of the cloud service.
     * <p>
     * For information about how to query the namespace of a cloud service, Appendix 1: Metrics.
     * Note: If you create a Prometheus alert rule for Hybrid Cloud Monitoring, you must set this parameter to acs_prometheus.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getNamespace();

    /**
     * Property resources: The information about the resource.
     * <p>
     * Examples: [{"instanceId":"i-uf6j91r34rnwawoo****"}] and [{"userId":"100931896542****"}].
     * For information about the supported dimensions that are used to query resources, see Appendix 1: Metrics.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getResources();

    /**
     * Property compositeExpression: The trigger conditions for multiple metrics.
     * <p>
     * Note: The trigger conditions for a single metric and multiple metrics are mutually exclusive. You cannot specify trigger conditions for a single metric and multiple metrics at the same time.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCompositeExpression() {
        return null;
    }

    /**
     * Property deletionForce: Whether to delete rule even if it is not created by ROS.
     * <p>
     * Default is false
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDeletionForce() {
        return null;
    }

    /**
     * Property effectiveInterval: The time period during which the alert rule is effective.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEffectiveInterval() {
        return null;
    }

    /**
     * Property emailSubject: The subject of the alert notification email.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEmailSubject() {
        return null;
    }

    /**
     * Property interval: The interval at which the alert is triggered.
     * <p>
     * Unit: seconds.
     * Note: For information about how to query the statistical period of a metric, see Appendix 1: Metrics.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInterval() {
        return null;
    }

    /**
     * Property labels:.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getLabels() {
        return null;
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
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getNoDataPolicy() {
        return null;
    }

    /**
     * Property noEffectiveInterval: The time period during which the alert rule is ineffective.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getNoEffectiveInterval() {
        return null;
    }

    /**
     * Property period: The statistical period of the metric.
     * <p>
     * Unit: seconds. The default value is the interval at which the monitoring data of the metric is collected.
     * Note: For information about how to query the statistical period of a metric, see Appendix 1: Metrics.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPeriod() {
        return null;
    }

    /**
     * Property prometheus: The Prometheus alert rule.
     * <p>
     * Note: This parameter is required only when you create a Prometheus alert rule for Hybrid Cloud Monitoring.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPrometheus() {
        return null;
    }

    /**
     * Property ruleId: The ID of the alert rule.
     * <p>
     * If not specified, ROS will generate one.
     * You can specify a new ID or the ID of an existing alert rule. For information about how to query the ID of an alert rule, see DescribeMetricRuleList.
     * Note: If you specify a new ID, a threshold-triggered alert rule is created.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRuleId() {
        return null;
    }

    /**
     * Property ruleName: The name of the alert rule.
     * <p>
     * If not specified and the rule is created by ROS, default to RuleId.
     * You can specify a new name or the name of an existing alert rule. For information about how to query the name of an alert rule, see DescribeMetricRuleList.
     * Note: If you specify a new name, a threshold-triggered alert rule is created.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRuleName() {
        return null;
    }

    /**
     * Property silenceTime: The mute period during which new alerts are not sent even if the trigger conditions are met.
     * <p>
     * Unit: seconds. Default value: 86400.
     * Note: If an alert is not cleared within the mute period, a new alert notification is sent when the mute period ends.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSilenceTime() {
        return null;
    }

    /**
     * Property webhook: The callback URL to which a POST request is sent when an alert is triggered based on the alert rule.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getWebhook() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link ResourceMetricRuleProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link ResourceMetricRuleProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<ResourceMetricRuleProps> {
        java.lang.Object contactGroups;
        java.lang.Object escalations;
        java.lang.Object metricName;
        java.lang.Object namespace;
        java.lang.Object resources;
        java.lang.Object compositeExpression;
        java.lang.Object deletionForce;
        java.lang.Object effectiveInterval;
        java.lang.Object emailSubject;
        java.lang.Object interval;
        java.lang.Object labels;
        java.lang.Object noDataPolicy;
        java.lang.Object noEffectiveInterval;
        java.lang.Object period;
        java.lang.Object prometheus;
        java.lang.Object ruleId;
        java.lang.Object ruleName;
        java.lang.Object silenceTime;
        java.lang.Object webhook;

        /**
         * Sets the value of {@link ResourceMetricRuleProps#getContactGroups}
         * @param contactGroups Property contactGroups: The alert contact group. This parameter is required.
         *                      The alert notifications are sent to the contacts that belong to the alert contact group.
         *                      Note: An alert contact group can contain one or more alert contacts. For information about how to create alert contacts and alert contact groups, see PutContact and PutContactGroup.
         * @return {@code this}
         */
        public Builder contactGroups(com.aliyun.ros.cdk.core.IResolvable contactGroups) {
            this.contactGroups = contactGroups;
            return this;
        }

        /**
         * Sets the value of {@link ResourceMetricRuleProps#getContactGroups}
         * @param contactGroups Property contactGroups: The alert contact group. This parameter is required.
         *                      The alert notifications are sent to the contacts that belong to the alert contact group.
         *                      Note: An alert contact group can contain one or more alert contacts. For information about how to create alert contacts and alert contact groups, see PutContact and PutContactGroup.
         * @return {@code this}
         */
        public Builder contactGroups(java.util.List<? extends java.lang.Object> contactGroups) {
            this.contactGroups = contactGroups;
            return this;
        }

        /**
         * Sets the value of {@link ResourceMetricRuleProps#getEscalations}
         * @param escalations Property escalations: You must select at least one of the Critical, Warn, and Info alert levels. This parameter is required.
         * @return {@code this}
         */
        public Builder escalations(com.aliyun.ros.cdk.core.IResolvable escalations) {
            this.escalations = escalations;
            return this;
        }

        /**
         * Sets the value of {@link ResourceMetricRuleProps#getEscalations}
         * @param escalations Property escalations: You must select at least one of the Critical, Warn, and Info alert levels. This parameter is required.
         * @return {@code this}
         */
        public Builder escalations(com.aliyun.ros.cdk.cms.RosResourceMetricRule.EscalationsProperty escalations) {
            this.escalations = escalations;
            return this;
        }

        /**
         * Sets the value of {@link ResourceMetricRuleProps#getMetricName}
         * @param metricName Property metricName: The name of the metric. This parameter is required.
         *                   For information about how to query the name of a metric, see Appendix 1: Metrics.
         *                   Note: If you create a Prometheus alert rule for Hybrid Cloud Monitoring, you must set this parameter to the name of the namespace. For information about how to obtain the name of a namespace, see DescribeHybridMonitorNamespaceList.
         * @return {@code this}
         */
        public Builder metricName(java.lang.String metricName) {
            this.metricName = metricName;
            return this;
        }

        /**
         * Sets the value of {@link ResourceMetricRuleProps#getMetricName}
         * @param metricName Property metricName: The name of the metric. This parameter is required.
         *                   For information about how to query the name of a metric, see Appendix 1: Metrics.
         *                   Note: If you create a Prometheus alert rule for Hybrid Cloud Monitoring, you must set this parameter to the name of the namespace. For information about how to obtain the name of a namespace, see DescribeHybridMonitorNamespaceList.
         * @return {@code this}
         */
        public Builder metricName(com.aliyun.ros.cdk.core.IResolvable metricName) {
            this.metricName = metricName;
            return this;
        }

        /**
         * Sets the value of {@link ResourceMetricRuleProps#getNamespace}
         * @param namespace Property namespace: The namespace of the cloud service. This parameter is required.
         *                  For information about how to query the namespace of a cloud service, Appendix 1: Metrics.
         *                  Note: If you create a Prometheus alert rule for Hybrid Cloud Monitoring, you must set this parameter to acs_prometheus.
         * @return {@code this}
         */
        public Builder namespace(java.lang.String namespace) {
            this.namespace = namespace;
            return this;
        }

        /**
         * Sets the value of {@link ResourceMetricRuleProps#getNamespace}
         * @param namespace Property namespace: The namespace of the cloud service. This parameter is required.
         *                  For information about how to query the namespace of a cloud service, Appendix 1: Metrics.
         *                  Note: If you create a Prometheus alert rule for Hybrid Cloud Monitoring, you must set this parameter to acs_prometheus.
         * @return {@code this}
         */
        public Builder namespace(com.aliyun.ros.cdk.core.IResolvable namespace) {
            this.namespace = namespace;
            return this;
        }

        /**
         * Sets the value of {@link ResourceMetricRuleProps#getResources}
         * @param resources Property resources: The information about the resource. This parameter is required.
         *                  Examples: [{"instanceId":"i-uf6j91r34rnwawoo****"}] and [{"userId":"100931896542****"}].
         *                  For information about the supported dimensions that are used to query resources, see Appendix 1: Metrics.
         * @return {@code this}
         */
        public Builder resources(com.aliyun.ros.cdk.core.IResolvable resources) {
            this.resources = resources;
            return this;
        }

        /**
         * Sets the value of {@link ResourceMetricRuleProps#getResources}
         * @param resources Property resources: The information about the resource. This parameter is required.
         *                  Examples: [{"instanceId":"i-uf6j91r34rnwawoo****"}] and [{"userId":"100931896542****"}].
         *                  For information about the supported dimensions that are used to query resources, see Appendix 1: Metrics.
         * @return {@code this}
         */
        public Builder resources(java.util.List<? extends java.util.Map<java.lang.String, ? extends java.lang.Object>> resources) {
            this.resources = resources;
            return this;
        }

        /**
         * Sets the value of {@link ResourceMetricRuleProps#getCompositeExpression}
         * @param compositeExpression Property compositeExpression: The trigger conditions for multiple metrics.
         *                            Note: The trigger conditions for a single metric and multiple metrics are mutually exclusive. You cannot specify trigger conditions for a single metric and multiple metrics at the same time.
         * @return {@code this}
         */
        public Builder compositeExpression(com.aliyun.ros.cdk.core.IResolvable compositeExpression) {
            this.compositeExpression = compositeExpression;
            return this;
        }

        /**
         * Sets the value of {@link ResourceMetricRuleProps#getCompositeExpression}
         * @param compositeExpression Property compositeExpression: The trigger conditions for multiple metrics.
         *                            Note: The trigger conditions for a single metric and multiple metrics are mutually exclusive. You cannot specify trigger conditions for a single metric and multiple metrics at the same time.
         * @return {@code this}
         */
        public Builder compositeExpression(com.aliyun.ros.cdk.cms.RosResourceMetricRule.CompositeExpressionProperty compositeExpression) {
            this.compositeExpression = compositeExpression;
            return this;
        }

        /**
         * Sets the value of {@link ResourceMetricRuleProps#getDeletionForce}
         * @param deletionForce Property deletionForce: Whether to delete rule even if it is not created by ROS.
         *                      Default is false
         * @return {@code this}
         */
        public Builder deletionForce(java.lang.Boolean deletionForce) {
            this.deletionForce = deletionForce;
            return this;
        }

        /**
         * Sets the value of {@link ResourceMetricRuleProps#getDeletionForce}
         * @param deletionForce Property deletionForce: Whether to delete rule even if it is not created by ROS.
         *                      Default is false
         * @return {@code this}
         */
        public Builder deletionForce(com.aliyun.ros.cdk.core.IResolvable deletionForce) {
            this.deletionForce = deletionForce;
            return this;
        }

        /**
         * Sets the value of {@link ResourceMetricRuleProps#getEffectiveInterval}
         * @param effectiveInterval Property effectiveInterval: The time period during which the alert rule is effective.
         * @return {@code this}
         */
        public Builder effectiveInterval(java.lang.String effectiveInterval) {
            this.effectiveInterval = effectiveInterval;
            return this;
        }

        /**
         * Sets the value of {@link ResourceMetricRuleProps#getEffectiveInterval}
         * @param effectiveInterval Property effectiveInterval: The time period during which the alert rule is effective.
         * @return {@code this}
         */
        public Builder effectiveInterval(com.aliyun.ros.cdk.core.IResolvable effectiveInterval) {
            this.effectiveInterval = effectiveInterval;
            return this;
        }

        /**
         * Sets the value of {@link ResourceMetricRuleProps#getEmailSubject}
         * @param emailSubject Property emailSubject: The subject of the alert notification email.
         * @return {@code this}
         */
        public Builder emailSubject(java.lang.String emailSubject) {
            this.emailSubject = emailSubject;
            return this;
        }

        /**
         * Sets the value of {@link ResourceMetricRuleProps#getEmailSubject}
         * @param emailSubject Property emailSubject: The subject of the alert notification email.
         * @return {@code this}
         */
        public Builder emailSubject(com.aliyun.ros.cdk.core.IResolvable emailSubject) {
            this.emailSubject = emailSubject;
            return this;
        }

        /**
         * Sets the value of {@link ResourceMetricRuleProps#getInterval}
         * @param interval Property interval: The interval at which the alert is triggered.
         *                 Unit: seconds.
         *                 Note: For information about how to query the statistical period of a metric, see Appendix 1: Metrics.
         * @return {@code this}
         */
        public Builder interval(java.lang.Number interval) {
            this.interval = interval;
            return this;
        }

        /**
         * Sets the value of {@link ResourceMetricRuleProps#getInterval}
         * @param interval Property interval: The interval at which the alert is triggered.
         *                 Unit: seconds.
         *                 Note: For information about how to query the statistical period of a metric, see Appendix 1: Metrics.
         * @return {@code this}
         */
        public Builder interval(com.aliyun.ros.cdk.core.IResolvable interval) {
            this.interval = interval;
            return this;
        }

        /**
         * Sets the value of {@link ResourceMetricRuleProps#getLabels}
         * @param labels Property labels:.
         * @return {@code this}
         */
        public Builder labels(com.aliyun.ros.cdk.core.IResolvable labels) {
            this.labels = labels;
            return this;
        }

        /**
         * Sets the value of {@link ResourceMetricRuleProps#getLabels}
         * @param labels Property labels:.
         * @return {@code this}
         */
        public Builder labels(java.util.List<? extends java.lang.Object> labels) {
            this.labels = labels;
            return this;
        }

        /**
         * Sets the value of {@link ResourceMetricRuleProps#getNoDataPolicy}
         * @param noDataPolicy Property noDataPolicy: The processing method of alerts when no monitoring data is found.
         *                     Valid values:
         *                     <p>
         *                     <ul>
         *                     <li>KEEP_LAST_STATE (default value): No operation is performed.</li>
         *                     <li>INSUFFICIENT_DATA: An alert whose content is "Insufficient data" is triggered.</li>
         *                     <li>OK: The status is considered normal.</li>
         *                     </ul>
         * @return {@code this}
         */
        public Builder noDataPolicy(java.lang.String noDataPolicy) {
            this.noDataPolicy = noDataPolicy;
            return this;
        }

        /**
         * Sets the value of {@link ResourceMetricRuleProps#getNoDataPolicy}
         * @param noDataPolicy Property noDataPolicy: The processing method of alerts when no monitoring data is found.
         *                     Valid values:
         *                     <p>
         *                     <ul>
         *                     <li>KEEP_LAST_STATE (default value): No operation is performed.</li>
         *                     <li>INSUFFICIENT_DATA: An alert whose content is "Insufficient data" is triggered.</li>
         *                     <li>OK: The status is considered normal.</li>
         *                     </ul>
         * @return {@code this}
         */
        public Builder noDataPolicy(com.aliyun.ros.cdk.core.IResolvable noDataPolicy) {
            this.noDataPolicy = noDataPolicy;
            return this;
        }

        /**
         * Sets the value of {@link ResourceMetricRuleProps#getNoEffectiveInterval}
         * @param noEffectiveInterval Property noEffectiveInterval: The time period during which the alert rule is ineffective.
         * @return {@code this}
         */
        public Builder noEffectiveInterval(java.lang.String noEffectiveInterval) {
            this.noEffectiveInterval = noEffectiveInterval;
            return this;
        }

        /**
         * Sets the value of {@link ResourceMetricRuleProps#getNoEffectiveInterval}
         * @param noEffectiveInterval Property noEffectiveInterval: The time period during which the alert rule is ineffective.
         * @return {@code this}
         */
        public Builder noEffectiveInterval(com.aliyun.ros.cdk.core.IResolvable noEffectiveInterval) {
            this.noEffectiveInterval = noEffectiveInterval;
            return this;
        }

        /**
         * Sets the value of {@link ResourceMetricRuleProps#getPeriod}
         * @param period Property period: The statistical period of the metric.
         *               Unit: seconds. The default value is the interval at which the monitoring data of the metric is collected.
         *               Note: For information about how to query the statistical period of a metric, see Appendix 1: Metrics.
         * @return {@code this}
         */
        public Builder period(java.lang.Number period) {
            this.period = period;
            return this;
        }

        /**
         * Sets the value of {@link ResourceMetricRuleProps#getPeriod}
         * @param period Property period: The statistical period of the metric.
         *               Unit: seconds. The default value is the interval at which the monitoring data of the metric is collected.
         *               Note: For information about how to query the statistical period of a metric, see Appendix 1: Metrics.
         * @return {@code this}
         */
        public Builder period(com.aliyun.ros.cdk.core.IResolvable period) {
            this.period = period;
            return this;
        }

        /**
         * Sets the value of {@link ResourceMetricRuleProps#getPrometheus}
         * @param prometheus Property prometheus: The Prometheus alert rule.
         *                   Note: This parameter is required only when you create a Prometheus alert rule for Hybrid Cloud Monitoring.
         * @return {@code this}
         */
        public Builder prometheus(com.aliyun.ros.cdk.core.IResolvable prometheus) {
            this.prometheus = prometheus;
            return this;
        }

        /**
         * Sets the value of {@link ResourceMetricRuleProps#getPrometheus}
         * @param prometheus Property prometheus: The Prometheus alert rule.
         *                   Note: This parameter is required only when you create a Prometheus alert rule for Hybrid Cloud Monitoring.
         * @return {@code this}
         */
        public Builder prometheus(com.aliyun.ros.cdk.cms.RosResourceMetricRule.PrometheusProperty prometheus) {
            this.prometheus = prometheus;
            return this;
        }

        /**
         * Sets the value of {@link ResourceMetricRuleProps#getRuleId}
         * @param ruleId Property ruleId: The ID of the alert rule.
         *               If not specified, ROS will generate one.
         *               You can specify a new ID or the ID of an existing alert rule. For information about how to query the ID of an alert rule, see DescribeMetricRuleList.
         *               Note: If you specify a new ID, a threshold-triggered alert rule is created.
         * @return {@code this}
         */
        public Builder ruleId(java.lang.String ruleId) {
            this.ruleId = ruleId;
            return this;
        }

        /**
         * Sets the value of {@link ResourceMetricRuleProps#getRuleId}
         * @param ruleId Property ruleId: The ID of the alert rule.
         *               If not specified, ROS will generate one.
         *               You can specify a new ID or the ID of an existing alert rule. For information about how to query the ID of an alert rule, see DescribeMetricRuleList.
         *               Note: If you specify a new ID, a threshold-triggered alert rule is created.
         * @return {@code this}
         */
        public Builder ruleId(com.aliyun.ros.cdk.core.IResolvable ruleId) {
            this.ruleId = ruleId;
            return this;
        }

        /**
         * Sets the value of {@link ResourceMetricRuleProps#getRuleName}
         * @param ruleName Property ruleName: The name of the alert rule.
         *                 If not specified and the rule is created by ROS, default to RuleId.
         *                 You can specify a new name or the name of an existing alert rule. For information about how to query the name of an alert rule, see DescribeMetricRuleList.
         *                 Note: If you specify a new name, a threshold-triggered alert rule is created.
         * @return {@code this}
         */
        public Builder ruleName(java.lang.String ruleName) {
            this.ruleName = ruleName;
            return this;
        }

        /**
         * Sets the value of {@link ResourceMetricRuleProps#getRuleName}
         * @param ruleName Property ruleName: The name of the alert rule.
         *                 If not specified and the rule is created by ROS, default to RuleId.
         *                 You can specify a new name or the name of an existing alert rule. For information about how to query the name of an alert rule, see DescribeMetricRuleList.
         *                 Note: If you specify a new name, a threshold-triggered alert rule is created.
         * @return {@code this}
         */
        public Builder ruleName(com.aliyun.ros.cdk.core.IResolvable ruleName) {
            this.ruleName = ruleName;
            return this;
        }

        /**
         * Sets the value of {@link ResourceMetricRuleProps#getSilenceTime}
         * @param silenceTime Property silenceTime: The mute period during which new alerts are not sent even if the trigger conditions are met.
         *                    Unit: seconds. Default value: 86400.
         *                    Note: If an alert is not cleared within the mute period, a new alert notification is sent when the mute period ends.
         * @return {@code this}
         */
        public Builder silenceTime(java.lang.Number silenceTime) {
            this.silenceTime = silenceTime;
            return this;
        }

        /**
         * Sets the value of {@link ResourceMetricRuleProps#getSilenceTime}
         * @param silenceTime Property silenceTime: The mute period during which new alerts are not sent even if the trigger conditions are met.
         *                    Unit: seconds. Default value: 86400.
         *                    Note: If an alert is not cleared within the mute period, a new alert notification is sent when the mute period ends.
         * @return {@code this}
         */
        public Builder silenceTime(com.aliyun.ros.cdk.core.IResolvable silenceTime) {
            this.silenceTime = silenceTime;
            return this;
        }

        /**
         * Sets the value of {@link ResourceMetricRuleProps#getWebhook}
         * @param webhook Property webhook: The callback URL to which a POST request is sent when an alert is triggered based on the alert rule.
         * @return {@code this}
         */
        public Builder webhook(java.lang.String webhook) {
            this.webhook = webhook;
            return this;
        }

        /**
         * Sets the value of {@link ResourceMetricRuleProps#getWebhook}
         * @param webhook Property webhook: The callback URL to which a POST request is sent when an alert is triggered based on the alert rule.
         * @return {@code this}
         */
        public Builder webhook(com.aliyun.ros.cdk.core.IResolvable webhook) {
            this.webhook = webhook;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link ResourceMetricRuleProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public ResourceMetricRuleProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link ResourceMetricRuleProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ResourceMetricRuleProps {
        private final java.lang.Object contactGroups;
        private final java.lang.Object escalations;
        private final java.lang.Object metricName;
        private final java.lang.Object namespace;
        private final java.lang.Object resources;
        private final java.lang.Object compositeExpression;
        private final java.lang.Object deletionForce;
        private final java.lang.Object effectiveInterval;
        private final java.lang.Object emailSubject;
        private final java.lang.Object interval;
        private final java.lang.Object labels;
        private final java.lang.Object noDataPolicy;
        private final java.lang.Object noEffectiveInterval;
        private final java.lang.Object period;
        private final java.lang.Object prometheus;
        private final java.lang.Object ruleId;
        private final java.lang.Object ruleName;
        private final java.lang.Object silenceTime;
        private final java.lang.Object webhook;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.contactGroups = software.amazon.jsii.Kernel.get(this, "contactGroups", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.escalations = software.amazon.jsii.Kernel.get(this, "escalations", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.metricName = software.amazon.jsii.Kernel.get(this, "metricName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.namespace = software.amazon.jsii.Kernel.get(this, "namespace", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resources = software.amazon.jsii.Kernel.get(this, "resources", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.compositeExpression = software.amazon.jsii.Kernel.get(this, "compositeExpression", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.deletionForce = software.amazon.jsii.Kernel.get(this, "deletionForce", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.effectiveInterval = software.amazon.jsii.Kernel.get(this, "effectiveInterval", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.emailSubject = software.amazon.jsii.Kernel.get(this, "emailSubject", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.interval = software.amazon.jsii.Kernel.get(this, "interval", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.labels = software.amazon.jsii.Kernel.get(this, "labels", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.noDataPolicy = software.amazon.jsii.Kernel.get(this, "noDataPolicy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.noEffectiveInterval = software.amazon.jsii.Kernel.get(this, "noEffectiveInterval", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.period = software.amazon.jsii.Kernel.get(this, "period", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.prometheus = software.amazon.jsii.Kernel.get(this, "prometheus", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ruleId = software.amazon.jsii.Kernel.get(this, "ruleId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ruleName = software.amazon.jsii.Kernel.get(this, "ruleName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.silenceTime = software.amazon.jsii.Kernel.get(this, "silenceTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.webhook = software.amazon.jsii.Kernel.get(this, "webhook", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.contactGroups = java.util.Objects.requireNonNull(builder.contactGroups, "contactGroups is required");
            this.escalations = java.util.Objects.requireNonNull(builder.escalations, "escalations is required");
            this.metricName = java.util.Objects.requireNonNull(builder.metricName, "metricName is required");
            this.namespace = java.util.Objects.requireNonNull(builder.namespace, "namespace is required");
            this.resources = java.util.Objects.requireNonNull(builder.resources, "resources is required");
            this.compositeExpression = builder.compositeExpression;
            this.deletionForce = builder.deletionForce;
            this.effectiveInterval = builder.effectiveInterval;
            this.emailSubject = builder.emailSubject;
            this.interval = builder.interval;
            this.labels = builder.labels;
            this.noDataPolicy = builder.noDataPolicy;
            this.noEffectiveInterval = builder.noEffectiveInterval;
            this.period = builder.period;
            this.prometheus = builder.prometheus;
            this.ruleId = builder.ruleId;
            this.ruleName = builder.ruleName;
            this.silenceTime = builder.silenceTime;
            this.webhook = builder.webhook;
        }

        @Override
        public final java.lang.Object getContactGroups() {
            return this.contactGroups;
        }

        @Override
        public final java.lang.Object getEscalations() {
            return this.escalations;
        }

        @Override
        public final java.lang.Object getMetricName() {
            return this.metricName;
        }

        @Override
        public final java.lang.Object getNamespace() {
            return this.namespace;
        }

        @Override
        public final java.lang.Object getResources() {
            return this.resources;
        }

        @Override
        public final java.lang.Object getCompositeExpression() {
            return this.compositeExpression;
        }

        @Override
        public final java.lang.Object getDeletionForce() {
            return this.deletionForce;
        }

        @Override
        public final java.lang.Object getEffectiveInterval() {
            return this.effectiveInterval;
        }

        @Override
        public final java.lang.Object getEmailSubject() {
            return this.emailSubject;
        }

        @Override
        public final java.lang.Object getInterval() {
            return this.interval;
        }

        @Override
        public final java.lang.Object getLabels() {
            return this.labels;
        }

        @Override
        public final java.lang.Object getNoDataPolicy() {
            return this.noDataPolicy;
        }

        @Override
        public final java.lang.Object getNoEffectiveInterval() {
            return this.noEffectiveInterval;
        }

        @Override
        public final java.lang.Object getPeriod() {
            return this.period;
        }

        @Override
        public final java.lang.Object getPrometheus() {
            return this.prometheus;
        }

        @Override
        public final java.lang.Object getRuleId() {
            return this.ruleId;
        }

        @Override
        public final java.lang.Object getRuleName() {
            return this.ruleName;
        }

        @Override
        public final java.lang.Object getSilenceTime() {
            return this.silenceTime;
        }

        @Override
        public final java.lang.Object getWebhook() {
            return this.webhook;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("contactGroups", om.valueToTree(this.getContactGroups()));
            data.set("escalations", om.valueToTree(this.getEscalations()));
            data.set("metricName", om.valueToTree(this.getMetricName()));
            data.set("namespace", om.valueToTree(this.getNamespace()));
            data.set("resources", om.valueToTree(this.getResources()));
            if (this.getCompositeExpression() != null) {
                data.set("compositeExpression", om.valueToTree(this.getCompositeExpression()));
            }
            if (this.getDeletionForce() != null) {
                data.set("deletionForce", om.valueToTree(this.getDeletionForce()));
            }
            if (this.getEffectiveInterval() != null) {
                data.set("effectiveInterval", om.valueToTree(this.getEffectiveInterval()));
            }
            if (this.getEmailSubject() != null) {
                data.set("emailSubject", om.valueToTree(this.getEmailSubject()));
            }
            if (this.getInterval() != null) {
                data.set("interval", om.valueToTree(this.getInterval()));
            }
            if (this.getLabels() != null) {
                data.set("labels", om.valueToTree(this.getLabels()));
            }
            if (this.getNoDataPolicy() != null) {
                data.set("noDataPolicy", om.valueToTree(this.getNoDataPolicy()));
            }
            if (this.getNoEffectiveInterval() != null) {
                data.set("noEffectiveInterval", om.valueToTree(this.getNoEffectiveInterval()));
            }
            if (this.getPeriod() != null) {
                data.set("period", om.valueToTree(this.getPeriod()));
            }
            if (this.getPrometheus() != null) {
                data.set("prometheus", om.valueToTree(this.getPrometheus()));
            }
            if (this.getRuleId() != null) {
                data.set("ruleId", om.valueToTree(this.getRuleId()));
            }
            if (this.getRuleName() != null) {
                data.set("ruleName", om.valueToTree(this.getRuleName()));
            }
            if (this.getSilenceTime() != null) {
                data.set("silenceTime", om.valueToTree(this.getSilenceTime()));
            }
            if (this.getWebhook() != null) {
                data.set("webhook", om.valueToTree(this.getWebhook()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cms.ResourceMetricRuleProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            ResourceMetricRuleProps.Jsii$Proxy that = (ResourceMetricRuleProps.Jsii$Proxy) o;

            if (!contactGroups.equals(that.contactGroups)) return false;
            if (!escalations.equals(that.escalations)) return false;
            if (!metricName.equals(that.metricName)) return false;
            if (!namespace.equals(that.namespace)) return false;
            if (!resources.equals(that.resources)) return false;
            if (this.compositeExpression != null ? !this.compositeExpression.equals(that.compositeExpression) : that.compositeExpression != null) return false;
            if (this.deletionForce != null ? !this.deletionForce.equals(that.deletionForce) : that.deletionForce != null) return false;
            if (this.effectiveInterval != null ? !this.effectiveInterval.equals(that.effectiveInterval) : that.effectiveInterval != null) return false;
            if (this.emailSubject != null ? !this.emailSubject.equals(that.emailSubject) : that.emailSubject != null) return false;
            if (this.interval != null ? !this.interval.equals(that.interval) : that.interval != null) return false;
            if (this.labels != null ? !this.labels.equals(that.labels) : that.labels != null) return false;
            if (this.noDataPolicy != null ? !this.noDataPolicy.equals(that.noDataPolicy) : that.noDataPolicy != null) return false;
            if (this.noEffectiveInterval != null ? !this.noEffectiveInterval.equals(that.noEffectiveInterval) : that.noEffectiveInterval != null) return false;
            if (this.period != null ? !this.period.equals(that.period) : that.period != null) return false;
            if (this.prometheus != null ? !this.prometheus.equals(that.prometheus) : that.prometheus != null) return false;
            if (this.ruleId != null ? !this.ruleId.equals(that.ruleId) : that.ruleId != null) return false;
            if (this.ruleName != null ? !this.ruleName.equals(that.ruleName) : that.ruleName != null) return false;
            if (this.silenceTime != null ? !this.silenceTime.equals(that.silenceTime) : that.silenceTime != null) return false;
            return this.webhook != null ? this.webhook.equals(that.webhook) : that.webhook == null;
        }

        @Override
        public final int hashCode() {
            int result = this.contactGroups.hashCode();
            result = 31 * result + (this.escalations.hashCode());
            result = 31 * result + (this.metricName.hashCode());
            result = 31 * result + (this.namespace.hashCode());
            result = 31 * result + (this.resources.hashCode());
            result = 31 * result + (this.compositeExpression != null ? this.compositeExpression.hashCode() : 0);
            result = 31 * result + (this.deletionForce != null ? this.deletionForce.hashCode() : 0);
            result = 31 * result + (this.effectiveInterval != null ? this.effectiveInterval.hashCode() : 0);
            result = 31 * result + (this.emailSubject != null ? this.emailSubject.hashCode() : 0);
            result = 31 * result + (this.interval != null ? this.interval.hashCode() : 0);
            result = 31 * result + (this.labels != null ? this.labels.hashCode() : 0);
            result = 31 * result + (this.noDataPolicy != null ? this.noDataPolicy.hashCode() : 0);
            result = 31 * result + (this.noEffectiveInterval != null ? this.noEffectiveInterval.hashCode() : 0);
            result = 31 * result + (this.period != null ? this.period.hashCode() : 0);
            result = 31 * result + (this.prometheus != null ? this.prometheus.hashCode() : 0);
            result = 31 * result + (this.ruleId != null ? this.ruleId.hashCode() : 0);
            result = 31 * result + (this.ruleName != null ? this.ruleName.hashCode() : 0);
            result = 31 * result + (this.silenceTime != null ? this.silenceTime.hashCode() : 0);
            result = 31 * result + (this.webhook != null ? this.webhook.hashCode() : 0);
            return result;
        }
    }
}
