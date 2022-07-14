using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cms
{
    /// <summary>A ROS template type:  `ALIYUN::CMS::ResourceMetricRule`.</summary>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Cms.RosResourceMetricRule), fullyQualifiedName: "@alicloud/ros-cdk-cms.RosResourceMetricRule", parametersJson: "[{\"docs\":{\"summary\":\"- scope in which this resource is defined.\"},\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"docs\":{\"summary\":\"- scoped id of the resource.\"},\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"docs\":{\"summary\":\"- resource properties.\"},\"name\":\"props\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-cms.RosResourceMetricRuleProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"type\":{\"primitive\":\"boolean\"}}]")]
    public class RosResourceMetricRule : AlibabaCloud.SDK.ROS.CDK.Core.RosResource
    {
        /// <summary>Create a new `ALIYUN::CMS::ResourceMetricRule`.</summary>
        /// <param name="scope">- scope in which this resource is defined.</param>
        /// <param name="id">- scoped id of the resource.</param>
        /// <param name="props">- resource properties.</param>
        public RosResourceMetricRule(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Cms.IRosResourceMetricRuleProps props, bool enableResourcePropertyConstraint): base(new DeputyProps(new object?[]{scope, id, props, enableResourcePropertyConstraint}))
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected RosResourceMetricRule(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected RosResourceMetricRule(DeputyProps props): base(props)
        {
        }

        [JsiiMethod(name: "renderProperties", returnsJson: "{\"type\":{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}}", parametersJson: "[{\"name\":\"props\",\"type\":{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}}]")]
        protected override System.Collections.Generic.IDictionary<string, object> RenderProperties(System.Collections.Generic.IDictionary<string, object> props)
        {
            return InvokeInstanceMethod<System.Collections.Generic.IDictionary<string, object>>(new System.Type[]{typeof(System.Collections.Generic.IDictionary<string, object>)}, new object[]{props})!;
        }

        /// <summary>The resource type name for this resource class.</summary>
        [JsiiProperty(name: "ROS_RESOURCE_TYPE_NAME", typeJson: "{\"primitive\":\"string\"}")]
        public static string ROS_RESOURCE_TYPE_NAME
        {
            get;
        }
        = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Cms.RosResourceMetricRule))!;

        /// <remarks>
        /// <strong>Attribute</strong>: RuleId: The ID of the alert rule.
        /// </remarks>
        [JsiiProperty(name: "attrRuleId", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrRuleId
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: RuleName: The name of the alert rule.
        /// </remarks>
        [JsiiProperty(name: "attrRuleName", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrRuleName
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        [JsiiProperty(name: "rosProperties", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}")]
        protected override System.Collections.Generic.IDictionary<string, object> RosProperties
        {
            get => GetInstanceProperty<System.Collections.Generic.IDictionary<string, object>>()!;
        }

        /// <remarks>
        /// <strong>Property</strong>: contactGroups: The alert contact group.
        /// The alert notifications are sent to the contacts that belong to the alert contact group.
        /// Note: An alert contact group can contain one or more alert contacts. For information about how to create alert contacts and alert contact groups, see PutContact and PutContactGroup.
        /// </remarks>
        [JsiiProperty(name: "contactGroups", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
        public virtual object ContactGroups
        {
            get => GetInstanceProperty<object>()!;
            set => SetInstanceProperty(value);
        }

        [JsiiProperty(name: "enableResourcePropertyConstraint", typeJson: "{\"primitive\":\"boolean\"}")]
        public virtual bool EnableResourcePropertyConstraint
        {
            get => GetInstanceProperty<bool>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: escalations: You must select at least one of the Critical, Warn, and Info alert levels.
        /// </remarks>
        [JsiiProperty(name: "escalations", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cms.RosResourceMetricRule.EscalationsProperty\"}]}}")]
        public virtual object Escalations
        {
            get => GetInstanceProperty<object>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: metricName: The name of the metric.
        /// For information about how to query the name of a metric, see Appendix 1: Metrics.
        /// Note: If you create a Prometheus alert rule for Hybrid Cloud Monitoring, you must set this parameter to the name of the namespace. For information about how to obtain the name of a namespace, see DescribeHybridMonitorNamespaceList.
        /// </remarks>
        [JsiiProperty(name: "metricName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object MetricName
        {
            get => GetInstanceProperty<object>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: namespace: The namespace of the cloud service.
        /// For information about how to query the namespace of a cloud service, Appendix 1: Metrics.
        /// Note: If you create a Prometheus alert rule for Hybrid Cloud Monitoring, you must set this parameter to acs_prometheus.
        /// </remarks>
        [JsiiProperty(name: "namespace", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object Namespace
        {
            get => GetInstanceProperty<object>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: resources: The information about the resource.
        /// Examples: [{"instanceId":"i-uf6j91r34rnwawoo****"}] and [{"userId":"100931896542****"}].
        /// For information about the supported dimensions that are used to query resources, see Appendix 1: Metrics.
        /// </remarks>
        [JsiiProperty(name: "resources", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}},\"kind\":\"array\"}}]}}")]
        public virtual object Resources
        {
            get => GetInstanceProperty<object>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: compositeExpression: The trigger conditions for multiple metrics.
        /// Note: The trigger conditions for a single metric and multiple metrics are mutually exclusive. You cannot specify trigger conditions for a single metric and multiple metrics at the same time.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "compositeExpression", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cms.RosResourceMetricRule.CompositeExpressionProperty\"}]}}", isOptional: true)]
        public virtual object? CompositeExpression
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: deletionForce: Whether to delete rule even if it is not created by ROS. Default is false
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "deletionForce", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? DeletionForce
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: effectiveInterval: The time period during which the alert rule is effective.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "effectiveInterval", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? EffectiveInterval
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: emailSubject: The subject of the alert notification email.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "emailSubject", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? EmailSubject
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: interval: The interval at which the alert is triggered. Unit: seconds.
        /// Note: For information about how to query the statistical period of a metric, see Appendix 1: Metrics.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "interval", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? Interval
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: labels:
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "labels", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cms.RosResourceMetricRule.LabelsProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        public virtual object? Labels
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: noDataPolicy: The processing method of alerts when no monitoring data is found. Valid values:
        /// - KEEP_LAST_STATE (default value): No operation is performed.
        /// - INSUFFICIENT_DATA: An alert whose content is "Insufficient data" is triggered.
        /// - OK: The status is considered normal.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "noDataPolicy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? NoDataPolicy
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: noEffectiveInterval: The time period during which the alert rule is ineffective.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "noEffectiveInterval", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? NoEffectiveInterval
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: period: The statistical period of the metric. Unit: seconds. The default value is the interval at which the monitoring data of the metric is collected.
        /// Note: For information about how to query the statistical period of a metric, see Appendix 1: Metrics.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "period", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? Period
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: prometheus: The Prometheus alert rule.
        /// Note: This parameter is required only when you create a Prometheus alert rule for Hybrid Cloud Monitoring.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "prometheus", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cms.RosResourceMetricRule.PrometheusProperty\"}]}}", isOptional: true)]
        public virtual object? Prometheus
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: ruleId: The ID of the alert rule. If not specified, ROS will generate one.
        /// You can specify a new ID or the ID of an existing alert rule. For information about how to query the ID of an alert rule, see DescribeMetricRuleList.
        /// Note: If you specify a new ID, a threshold-triggered alert rule is created.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "ruleId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? RuleId
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: ruleName: The name of the alert rule. If not specified and the rule is created by ROS, default to RuleId.
        /// You can specify a new name or the name of an existing alert rule. For information about how to query the name of an alert rule, see DescribeMetricRuleList.
        /// Note: If you specify a new name, a threshold-triggered alert rule is created.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "ruleName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? RuleName
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: silenceTime: The mute period during which new alerts are not sent even if the trigger conditions are met. Unit: seconds. Default value: 86400.
        /// Note: If an alert is not cleared within the mute period, a new alert notification is sent when the mute period ends.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "silenceTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? SilenceTime
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: webhook: The callback URL to which a POST request is sent when an alert is triggered based on the alert rule.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "webhook", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? Webhook
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }
        [JsiiInterface(nativeType: typeof(IAnnotationsProperty), fullyQualifiedName: "@alicloud/ros-cdk-cms.RosResourceMetricRule.AnnotationsProperty")]
        public interface IAnnotationsProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: key: The key of the annotation.
            /// </remarks>
            [JsiiProperty(name: "key", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Key
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: value: The value of the annotation.
            /// </remarks>
            [JsiiProperty(name: "value", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Value
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(IAnnotationsProperty), fullyQualifiedName: "@alicloud/ros-cdk-cms.RosResourceMetricRule.AnnotationsProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cms.RosResourceMetricRule.IAnnotationsProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: key: The key of the annotation.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "key", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? Key
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: value: The value of the annotation.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "value", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? Value
                {
                    get => GetInstanceProperty<object?>();
                }
            }
        }
        [JsiiByValue(fqn: "@alicloud/ros-cdk-cms.RosResourceMetricRule.AnnotationsProperty")]
        public class AnnotationsProperty : AlibabaCloud.SDK.ROS.CDK.Cms.RosResourceMetricRule.IAnnotationsProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: key: The key of the annotation.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "key", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Key
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: value: The value of the annotation.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "value", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Value
            {
                get;
                set;
            }
        }
        [JsiiInterface(nativeType: typeof(ICompositeExpressionProperty), fullyQualifiedName: "@alicloud/ros-cdk-cms.RosResourceMetricRule.CompositeExpressionProperty")]
        public interface ICompositeExpressionProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: level: The level of the alert. Valid values:
            /// - Critical
            /// - Warn
            /// - Info
            /// </remarks>
            [JsiiProperty(name: "level", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            object Level
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: times: The number of consecutive triggers. If the number of times that the metric values meet the trigger conditions reaches the value of this parameter, CloudMonitor sends alert notifications.
            /// </remarks>
            [JsiiProperty(name: "times", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            object Times
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: expressionList: The trigger conditions that are created in standard mode.
            /// </remarks>
            [JsiiProperty(name: "expressionList", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cms.RosResourceMetricRule.ExpressionListProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? ExpressionList
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: expressionListJoin: The relationship between the trigger conditions for multiple metrics. Valid values:
            /// - &&: An alert is triggered only if all metrics meet the trigger conditions. An alert is triggered only if the results of all expressions specified in the ExpressionList parameter are true.
            /// - ||: If one of the metrics meets the trigger conditions, an alert is triggered.
            /// </remarks>
            [JsiiProperty(name: "expressionListJoin", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? ExpressionListJoin
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: expressionRaw: The trigger conditions that are created by using expressions. You can use expressions to create trigger conditions in the following scenarios:
            /// - Set an alert blacklist for specific resources. For example, if you specify $instanceId != 'i-io8kfvcpp7x5****' && $Average > 50, no alert is generated even when the average metric value of the i-io8kfvcpp7x5**** instance exceeds 50.
            /// - Set a special alert threshold for a specified instance in the rule. For example, if you specify $Average > ($instanceId == 'i-io8kfvcpp7x5****'? 80: 50), an alert is triggered when the average metric value of the i-io8kfvcpp7x5**** instance exceeds 80 or the average metric value of other instances exceeds 50.
            /// - Limits the number of instances whose metric values exceed the threshold. For example, if you specify count($Average > 20) > 3, an alert is triggered only when the number of instances whose average metric value exceeds 20 exceeds three.
            /// </remarks>
            [JsiiProperty(name: "expressionRaw", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? ExpressionRaw
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(ICompositeExpressionProperty), fullyQualifiedName: "@alicloud/ros-cdk-cms.RosResourceMetricRule.CompositeExpressionProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cms.RosResourceMetricRule.ICompositeExpressionProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: level: The level of the alert. Valid values:
                /// - Critical
                /// - Warn
                /// - Info
                /// </remarks>
                [JsiiProperty(name: "level", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
                public object Level
                {
                    get => GetInstanceProperty<object>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: times: The number of consecutive triggers. If the number of times that the metric values meet the trigger conditions reaches the value of this parameter, CloudMonitor sends alert notifications.
                /// </remarks>
                [JsiiProperty(name: "times", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
                public object Times
                {
                    get => GetInstanceProperty<object>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: expressionList: The trigger conditions that are created in standard mode.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "expressionList", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cms.RosResourceMetricRule.ExpressionListProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
                public object? ExpressionList
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: expressionListJoin: The relationship between the trigger conditions for multiple metrics. Valid values:
                /// - &&: An alert is triggered only if all metrics meet the trigger conditions. An alert is triggered only if the results of all expressions specified in the ExpressionList parameter are true.
                /// - ||: If one of the metrics meets the trigger conditions, an alert is triggered.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "expressionListJoin", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? ExpressionListJoin
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: expressionRaw: The trigger conditions that are created by using expressions. You can use expressions to create trigger conditions in the following scenarios:
                /// - Set an alert blacklist for specific resources. For example, if you specify $instanceId != 'i-io8kfvcpp7x5****' && $Average > 50, no alert is generated even when the average metric value of the i-io8kfvcpp7x5**** instance exceeds 50.
                /// - Set a special alert threshold for a specified instance in the rule. For example, if you specify $Average > ($instanceId == 'i-io8kfvcpp7x5****'? 80: 50), an alert is triggered when the average metric value of the i-io8kfvcpp7x5**** instance exceeds 80 or the average metric value of other instances exceeds 50.
                /// - Limits the number of instances whose metric values exceed the threshold. For example, if you specify count($Average > 20) > 3, an alert is triggered only when the number of instances whose average metric value exceeds 20 exceeds three.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "expressionRaw", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? ExpressionRaw
                {
                    get => GetInstanceProperty<object?>();
                }
            }
        }
        #pragma warning disable CS8618

        [JsiiByValue(fqn: "@alicloud/ros-cdk-cms.RosResourceMetricRule.CompositeExpressionProperty")]
        public class CompositeExpressionProperty : AlibabaCloud.SDK.ROS.CDK.Cms.RosResourceMetricRule.ICompositeExpressionProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: level: The level of the alert. Valid values:
            /// - Critical
            /// - Warn
            /// - Info
            /// </remarks>
            [JsiiProperty(name: "level", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Level
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: times: The number of consecutive triggers. If the number of times that the metric values meet the trigger conditions reaches the value of this parameter, CloudMonitor sends alert notifications.
            /// </remarks>
            [JsiiProperty(name: "times", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Times
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: expressionList: The trigger conditions that are created in standard mode.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "expressionList", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cms.RosResourceMetricRule.ExpressionListProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? ExpressionList
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: expressionListJoin: The relationship between the trigger conditions for multiple metrics. Valid values:
            /// - &&: An alert is triggered only if all metrics meet the trigger conditions. An alert is triggered only if the results of all expressions specified in the ExpressionList parameter are true.
            /// - ||: If one of the metrics meets the trigger conditions, an alert is triggered.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "expressionListJoin", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ExpressionListJoin
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: expressionRaw: The trigger conditions that are created by using expressions. You can use expressions to create trigger conditions in the following scenarios:
            /// - Set an alert blacklist for specific resources. For example, if you specify $instanceId != 'i-io8kfvcpp7x5****' && $Average > 50, no alert is generated even when the average metric value of the i-io8kfvcpp7x5**** instance exceeds 50.
            /// - Set a special alert threshold for a specified instance in the rule. For example, if you specify $Average > ($instanceId == 'i-io8kfvcpp7x5****'? 80: 50), an alert is triggered when the average metric value of the i-io8kfvcpp7x5**** instance exceeds 80 or the average metric value of other instances exceeds 50.
            /// - Limits the number of instances whose metric values exceed the threshold. For example, if you specify count($Average > 20) > 3, an alert is triggered only when the number of instances whose average metric value exceeds 20 exceeds three.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "expressionRaw", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ExpressionRaw
            {
                get;
                set;
            }
        }
        [JsiiInterface(nativeType: typeof(ICriticalProperty), fullyQualifiedName: "@alicloud/ros-cdk-cms.RosResourceMetricRule.CriticalProperty")]
        public interface ICriticalProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: comparisonOperator: The operator that is used to compare the metric value with the threshold. Valid values:
            /// - GreaterThanOrEqualToThreshold: greater than or equal to the threshold
            /// - GreaterThanThreshold: greater than the threshold
            /// - LessThanOrEqualToThreshold: less than or equal to the threshold
            /// - LessThanThreshold: less than the threshold
            /// - NotEqualToThreshold: not equal to the threshold
            /// - GreaterThanYesterday: greater than the metric value at the same time yesterday
            /// - LessThanYesterday: less than the metric value at the same time yesterday
            /// - GreaterThanLastWeek: greater than the metric value at the same time last week
            /// - LessThanLastWeek: less than the metric value at the same time last week
            /// - GreaterThanLastPeriod: greater than the metric value in the last monitoring cycle
            /// - LessThanLastPeriod: less than the metric value in the last monitoring cycle
            /// </remarks>
            [JsiiProperty(name: "comparisonOperator", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            object ComparisonOperator
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: statistics: The statistical methods for Critical-level alerts. Valid values:
            /// - Maximum: the maximum value
            /// - Minimum: the minimum value
            /// - Average: the average value
            /// - Availability: the availability rate
            /// </remarks>
            [JsiiProperty(name: "statistics", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            object Statistics
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: threshold: The threshold for Critical-level alerts.
            /// </remarks>
            [JsiiProperty(name: "threshold", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            object Threshold
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: times: The consecutive number of times for which the metric value meets the trigger condition before a Critical-level alert is triggered.
            /// </remarks>
            [JsiiProperty(name: "times", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            object Times
            {
                get;
            }

            [JsiiTypeProxy(nativeType: typeof(ICriticalProperty), fullyQualifiedName: "@alicloud/ros-cdk-cms.RosResourceMetricRule.CriticalProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cms.RosResourceMetricRule.ICriticalProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: comparisonOperator: The operator that is used to compare the metric value with the threshold. Valid values:
                /// - GreaterThanOrEqualToThreshold: greater than or equal to the threshold
                /// - GreaterThanThreshold: greater than the threshold
                /// - LessThanOrEqualToThreshold: less than or equal to the threshold
                /// - LessThanThreshold: less than the threshold
                /// - NotEqualToThreshold: not equal to the threshold
                /// - GreaterThanYesterday: greater than the metric value at the same time yesterday
                /// - LessThanYesterday: less than the metric value at the same time yesterday
                /// - GreaterThanLastWeek: greater than the metric value at the same time last week
                /// - LessThanLastWeek: less than the metric value at the same time last week
                /// - GreaterThanLastPeriod: greater than the metric value in the last monitoring cycle
                /// - LessThanLastPeriod: less than the metric value in the last monitoring cycle
                /// </remarks>
                [JsiiProperty(name: "comparisonOperator", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
                public object ComparisonOperator
                {
                    get => GetInstanceProperty<object>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: statistics: The statistical methods for Critical-level alerts. Valid values:
                /// - Maximum: the maximum value
                /// - Minimum: the minimum value
                /// - Average: the average value
                /// - Availability: the availability rate
                /// </remarks>
                [JsiiProperty(name: "statistics", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
                public object Statistics
                {
                    get => GetInstanceProperty<object>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: threshold: The threshold for Critical-level alerts.
                /// </remarks>
                [JsiiProperty(name: "threshold", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
                public object Threshold
                {
                    get => GetInstanceProperty<object>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: times: The consecutive number of times for which the metric value meets the trigger condition before a Critical-level alert is triggered.
                /// </remarks>
                [JsiiProperty(name: "times", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
                public object Times
                {
                    get => GetInstanceProperty<object>()!;
                }
            }
        }
        #pragma warning disable CS8618

        [JsiiByValue(fqn: "@alicloud/ros-cdk-cms.RosResourceMetricRule.CriticalProperty")]
        public class CriticalProperty : AlibabaCloud.SDK.ROS.CDK.Cms.RosResourceMetricRule.ICriticalProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: comparisonOperator: The operator that is used to compare the metric value with the threshold. Valid values:
            /// - GreaterThanOrEqualToThreshold: greater than or equal to the threshold
            /// - GreaterThanThreshold: greater than the threshold
            /// - LessThanOrEqualToThreshold: less than or equal to the threshold
            /// - LessThanThreshold: less than the threshold
            /// - NotEqualToThreshold: not equal to the threshold
            /// - GreaterThanYesterday: greater than the metric value at the same time yesterday
            /// - LessThanYesterday: less than the metric value at the same time yesterday
            /// - GreaterThanLastWeek: greater than the metric value at the same time last week
            /// - LessThanLastWeek: less than the metric value at the same time last week
            /// - GreaterThanLastPeriod: greater than the metric value in the last monitoring cycle
            /// - LessThanLastPeriod: less than the metric value in the last monitoring cycle
            /// </remarks>
            [JsiiProperty(name: "comparisonOperator", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ComparisonOperator
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: statistics: The statistical methods for Critical-level alerts. Valid values:
            /// - Maximum: the maximum value
            /// - Minimum: the minimum value
            /// - Average: the average value
            /// - Availability: the availability rate
            /// </remarks>
            [JsiiProperty(name: "statistics", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Statistics
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: threshold: The threshold for Critical-level alerts.
            /// </remarks>
            [JsiiProperty(name: "threshold", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Threshold
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: times: The consecutive number of times for which the metric value meets the trigger condition before a Critical-level alert is triggered.
            /// </remarks>
            [JsiiProperty(name: "times", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Times
            {
                get;
                set;
            }
        }
        [JsiiInterface(nativeType: typeof(IEscalationsProperty), fullyQualifiedName: "@alicloud/ros-cdk-cms.RosResourceMetricRule.EscalationsProperty")]
        public interface IEscalationsProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: critical: You must specify the Statistics, ComparisonOperator, Threshold, and Times parameters for the selected alert level.
            /// </remarks>
            [JsiiProperty(name: "critical", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cms.RosResourceMetricRule.CriticalProperty\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Critical
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: info: You must specify the Statistics, ComparisonOperator, Threshold, and Times parameters for the selected alert level.
            /// </remarks>
            [JsiiProperty(name: "info", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cms.RosResourceMetricRule.InfoProperty\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Info
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: warn: You must specify the Statistics, ComparisonOperator, Threshold, and Times parameters for the selected alert level.
            /// </remarks>
            [JsiiProperty(name: "warn", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cms.RosResourceMetricRule.WarnProperty\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Warn
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(IEscalationsProperty), fullyQualifiedName: "@alicloud/ros-cdk-cms.RosResourceMetricRule.EscalationsProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cms.RosResourceMetricRule.IEscalationsProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: critical: You must specify the Statistics, ComparisonOperator, Threshold, and Times parameters for the selected alert level.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "critical", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cms.RosResourceMetricRule.CriticalProperty\"}]}}", isOptional: true)]
                public object? Critical
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: info: You must specify the Statistics, ComparisonOperator, Threshold, and Times parameters for the selected alert level.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "info", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cms.RosResourceMetricRule.InfoProperty\"}]}}", isOptional: true)]
                public object? Info
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: warn: You must specify the Statistics, ComparisonOperator, Threshold, and Times parameters for the selected alert level.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "warn", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cms.RosResourceMetricRule.WarnProperty\"}]}}", isOptional: true)]
                public object? Warn
                {
                    get => GetInstanceProperty<object?>();
                }
            }
        }
        [JsiiByValue(fqn: "@alicloud/ros-cdk-cms.RosResourceMetricRule.EscalationsProperty")]
        public class EscalationsProperty : AlibabaCloud.SDK.ROS.CDK.Cms.RosResourceMetricRule.IEscalationsProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: critical: You must specify the Statistics, ComparisonOperator, Threshold, and Times parameters for the selected alert level.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "critical", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cms.RosResourceMetricRule.CriticalProperty\"}]}}", isOptional: true)]
            public object? Critical
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: info: You must specify the Statistics, ComparisonOperator, Threshold, and Times parameters for the selected alert level.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "info", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cms.RosResourceMetricRule.InfoProperty\"}]}}", isOptional: true)]
            public object? Info
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: warn: You must specify the Statistics, ComparisonOperator, Threshold, and Times parameters for the selected alert level.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "warn", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cms.RosResourceMetricRule.WarnProperty\"}]}}", isOptional: true)]
            public object? Warn
            {
                get;
                set;
            }
        }
        [JsiiInterface(nativeType: typeof(IExpressionListProperty), fullyQualifiedName: "@alicloud/ros-cdk-cms.RosResourceMetricRule.ExpressionListProperty")]
        public interface IExpressionListProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: comparisonOperator: The operator that is used to compare the metric value with the threshold. Valid values:
            /// - GreaterThanOrEqualToThreshold: greater than or equal to the threshold
            /// - GreaterThanThreshold: greater than the threshold
            /// - LessThanOrEqualToThreshold: less than or equal to the threshold
            /// - LessThanThreshold: less than the threshold
            /// - NotEqualToThreshold: not equal to the threshold
            /// - GreaterThanYesterday: greater than the metric value at the same time yesterday
            /// - LessThanYesterday: less than the metric value at the same time yesterday
            /// - GreaterThanLastWeek: greater than the metric value at the same time last week
            /// - LessThanLastWeek: less than the metric value at the same time last week
            /// - GreaterThanLastPeriod: greater than the metric value in the last monitoring cycle
            /// - LessThanLastPeriod: less than the metric value in the last monitoring cycle
            /// </remarks>
            [JsiiProperty(name: "comparisonOperator", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            object ComparisonOperator
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: metricName: The metric that is used to monitor the cloud service.
            /// </remarks>
            [JsiiProperty(name: "metricName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            object MetricName
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: period: The aggregation period of the metric.
            /// Unit: seconds.
            /// </remarks>
            [JsiiProperty(name: "period", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            object Period
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: statistics: The statistical method of the metric. Valid values:
            /// $Maximum: the maximum value
            /// $Minimum: the minimum value
            /// $Average: the average value
            /// $Availability: the availability rate (usually used for site monitoring)
            /// Note: $ is the prefix of the metric. For information about the Alibaba Cloud services that are supported by CloudMonitor, see Appendix 1: Metrics.
            /// </remarks>
            [JsiiProperty(name: "statistics", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            object Statistics
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: threshold: The alert threshold.
            /// </remarks>
            [JsiiProperty(name: "threshold", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            object Threshold
            {
                get;
            }

            [JsiiTypeProxy(nativeType: typeof(IExpressionListProperty), fullyQualifiedName: "@alicloud/ros-cdk-cms.RosResourceMetricRule.ExpressionListProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cms.RosResourceMetricRule.IExpressionListProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: comparisonOperator: The operator that is used to compare the metric value with the threshold. Valid values:
                /// - GreaterThanOrEqualToThreshold: greater than or equal to the threshold
                /// - GreaterThanThreshold: greater than the threshold
                /// - LessThanOrEqualToThreshold: less than or equal to the threshold
                /// - LessThanThreshold: less than the threshold
                /// - NotEqualToThreshold: not equal to the threshold
                /// - GreaterThanYesterday: greater than the metric value at the same time yesterday
                /// - LessThanYesterday: less than the metric value at the same time yesterday
                /// - GreaterThanLastWeek: greater than the metric value at the same time last week
                /// - LessThanLastWeek: less than the metric value at the same time last week
                /// - GreaterThanLastPeriod: greater than the metric value in the last monitoring cycle
                /// - LessThanLastPeriod: less than the metric value in the last monitoring cycle
                /// </remarks>
                [JsiiProperty(name: "comparisonOperator", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
                public object ComparisonOperator
                {
                    get => GetInstanceProperty<object>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: metricName: The metric that is used to monitor the cloud service.
                /// </remarks>
                [JsiiProperty(name: "metricName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
                public object MetricName
                {
                    get => GetInstanceProperty<object>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: period: The aggregation period of the metric.
                /// Unit: seconds.
                /// </remarks>
                [JsiiProperty(name: "period", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
                public object Period
                {
                    get => GetInstanceProperty<object>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: statistics: The statistical method of the metric. Valid values:
                /// $Maximum: the maximum value
                /// $Minimum: the minimum value
                /// $Average: the average value
                /// $Availability: the availability rate (usually used for site monitoring)
                /// Note: $ is the prefix of the metric. For information about the Alibaba Cloud services that are supported by CloudMonitor, see Appendix 1: Metrics.
                /// </remarks>
                [JsiiProperty(name: "statistics", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
                public object Statistics
                {
                    get => GetInstanceProperty<object>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: threshold: The alert threshold.
                /// </remarks>
                [JsiiProperty(name: "threshold", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
                public object Threshold
                {
                    get => GetInstanceProperty<object>()!;
                }
            }
        }
        #pragma warning disable CS8618

        [JsiiByValue(fqn: "@alicloud/ros-cdk-cms.RosResourceMetricRule.ExpressionListProperty")]
        public class ExpressionListProperty : AlibabaCloud.SDK.ROS.CDK.Cms.RosResourceMetricRule.IExpressionListProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: comparisonOperator: The operator that is used to compare the metric value with the threshold. Valid values:
            /// - GreaterThanOrEqualToThreshold: greater than or equal to the threshold
            /// - GreaterThanThreshold: greater than the threshold
            /// - LessThanOrEqualToThreshold: less than or equal to the threshold
            /// - LessThanThreshold: less than the threshold
            /// - NotEqualToThreshold: not equal to the threshold
            /// - GreaterThanYesterday: greater than the metric value at the same time yesterday
            /// - LessThanYesterday: less than the metric value at the same time yesterday
            /// - GreaterThanLastWeek: greater than the metric value at the same time last week
            /// - LessThanLastWeek: less than the metric value at the same time last week
            /// - GreaterThanLastPeriod: greater than the metric value in the last monitoring cycle
            /// - LessThanLastPeriod: less than the metric value in the last monitoring cycle
            /// </remarks>
            [JsiiProperty(name: "comparisonOperator", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ComparisonOperator
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: metricName: The metric that is used to monitor the cloud service.
            /// </remarks>
            [JsiiProperty(name: "metricName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object MetricName
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: period: The aggregation period of the metric.
            /// Unit: seconds.
            /// </remarks>
            [JsiiProperty(name: "period", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Period
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: statistics: The statistical method of the metric. Valid values:
            /// $Maximum: the maximum value
            /// $Minimum: the minimum value
            /// $Average: the average value
            /// $Availability: the availability rate (usually used for site monitoring)
            /// Note: $ is the prefix of the metric. For information about the Alibaba Cloud services that are supported by CloudMonitor, see Appendix 1: Metrics.
            /// </remarks>
            [JsiiProperty(name: "statistics", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Statistics
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: threshold: The alert threshold.
            /// </remarks>
            [JsiiProperty(name: "threshold", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Threshold
            {
                get;
                set;
            }
        }
        [JsiiInterface(nativeType: typeof(IInfoProperty), fullyQualifiedName: "@alicloud/ros-cdk-cms.RosResourceMetricRule.InfoProperty")]
        public interface IInfoProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: comparisonOperator: The operator that is used to compare the metric value with the threshold. Valid values:
            /// - GreaterThanOrEqualToThreshold: greater than or equal to the threshold
            /// - GreaterThanThreshold: greater than the threshold
            /// - LessThanOrEqualToThreshold: less than or equal to the threshold
            /// - LessThanThreshold: less than the threshold
            /// - NotEqualToThreshold: not equal to the threshold
            /// - GreaterThanYesterday: greater than the metric value at the same time yesterday
            /// - LessThanYesterday: less than the metric value at the same time yesterday
            /// - GreaterThanLastWeek: greater than the metric value at the same time last week
            /// - LessThanLastWeek: less than the metric value at the same time last week
            /// - GreaterThanLastPeriod: greater than the metric value in the last monitoring cycle
            /// - LessThanLastPeriod: less than the metric value in the last monitoring cycle
            /// </remarks>
            [JsiiProperty(name: "comparisonOperator", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            object ComparisonOperator
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: statistics: The statistical methods for Info-level alerts. Valid values:
            /// - Maximum: the maximum value
            /// - Minimum: the minimum value
            /// - Average: the average value
            /// - Availability: the availability rate
            /// </remarks>
            [JsiiProperty(name: "statistics", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            object Statistics
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: threshold: The threshold for Info-level alerts.
            /// </remarks>
            [JsiiProperty(name: "threshold", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            object Threshold
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: times: The consecutive number of times for which the metric value meets the trigger condition before an Info-level alert is triggered.
            /// </remarks>
            [JsiiProperty(name: "times", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            object Times
            {
                get;
            }

            [JsiiTypeProxy(nativeType: typeof(IInfoProperty), fullyQualifiedName: "@alicloud/ros-cdk-cms.RosResourceMetricRule.InfoProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cms.RosResourceMetricRule.IInfoProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: comparisonOperator: The operator that is used to compare the metric value with the threshold. Valid values:
                /// - GreaterThanOrEqualToThreshold: greater than or equal to the threshold
                /// - GreaterThanThreshold: greater than the threshold
                /// - LessThanOrEqualToThreshold: less than or equal to the threshold
                /// - LessThanThreshold: less than the threshold
                /// - NotEqualToThreshold: not equal to the threshold
                /// - GreaterThanYesterday: greater than the metric value at the same time yesterday
                /// - LessThanYesterday: less than the metric value at the same time yesterday
                /// - GreaterThanLastWeek: greater than the metric value at the same time last week
                /// - LessThanLastWeek: less than the metric value at the same time last week
                /// - GreaterThanLastPeriod: greater than the metric value in the last monitoring cycle
                /// - LessThanLastPeriod: less than the metric value in the last monitoring cycle
                /// </remarks>
                [JsiiProperty(name: "comparisonOperator", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
                public object ComparisonOperator
                {
                    get => GetInstanceProperty<object>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: statistics: The statistical methods for Info-level alerts. Valid values:
                /// - Maximum: the maximum value
                /// - Minimum: the minimum value
                /// - Average: the average value
                /// - Availability: the availability rate
                /// </remarks>
                [JsiiProperty(name: "statistics", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
                public object Statistics
                {
                    get => GetInstanceProperty<object>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: threshold: The threshold for Info-level alerts.
                /// </remarks>
                [JsiiProperty(name: "threshold", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
                public object Threshold
                {
                    get => GetInstanceProperty<object>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: times: The consecutive number of times for which the metric value meets the trigger condition before an Info-level alert is triggered.
                /// </remarks>
                [JsiiProperty(name: "times", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
                public object Times
                {
                    get => GetInstanceProperty<object>()!;
                }
            }
        }
        #pragma warning disable CS8618

        [JsiiByValue(fqn: "@alicloud/ros-cdk-cms.RosResourceMetricRule.InfoProperty")]
        public class InfoProperty : AlibabaCloud.SDK.ROS.CDK.Cms.RosResourceMetricRule.IInfoProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: comparisonOperator: The operator that is used to compare the metric value with the threshold. Valid values:
            /// - GreaterThanOrEqualToThreshold: greater than or equal to the threshold
            /// - GreaterThanThreshold: greater than the threshold
            /// - LessThanOrEqualToThreshold: less than or equal to the threshold
            /// - LessThanThreshold: less than the threshold
            /// - NotEqualToThreshold: not equal to the threshold
            /// - GreaterThanYesterday: greater than the metric value at the same time yesterday
            /// - LessThanYesterday: less than the metric value at the same time yesterday
            /// - GreaterThanLastWeek: greater than the metric value at the same time last week
            /// - LessThanLastWeek: less than the metric value at the same time last week
            /// - GreaterThanLastPeriod: greater than the metric value in the last monitoring cycle
            /// - LessThanLastPeriod: less than the metric value in the last monitoring cycle
            /// </remarks>
            [JsiiProperty(name: "comparisonOperator", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ComparisonOperator
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: statistics: The statistical methods for Info-level alerts. Valid values:
            /// - Maximum: the maximum value
            /// - Minimum: the minimum value
            /// - Average: the average value
            /// - Availability: the availability rate
            /// </remarks>
            [JsiiProperty(name: "statistics", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Statistics
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: threshold: The threshold for Info-level alerts.
            /// </remarks>
            [JsiiProperty(name: "threshold", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Threshold
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: times: The consecutive number of times for which the metric value meets the trigger condition before an Info-level alert is triggered.
            /// </remarks>
            [JsiiProperty(name: "times", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Times
            {
                get;
                set;
            }
        }
        [JsiiInterface(nativeType: typeof(ILabelsProperty), fullyQualifiedName: "@alicloud/ros-cdk-cms.RosResourceMetricRule.LabelsProperty")]
        public interface ILabelsProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: key: The key of the tag.
            /// </remarks>
            [JsiiProperty(name: "key", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            object Key
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: value: The value of the tag.
            /// Note: You can use a template parameter to specify a tag value. CloudMonitor replaces the value of the template parameter with an actual tag value.
            /// </remarks>
            [JsiiProperty(name: "value", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Value
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(ILabelsProperty), fullyQualifiedName: "@alicloud/ros-cdk-cms.RosResourceMetricRule.LabelsProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cms.RosResourceMetricRule.ILabelsProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: key: The key of the tag.
                /// </remarks>
                [JsiiProperty(name: "key", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
                public object Key
                {
                    get => GetInstanceProperty<object>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: value: The value of the tag.
                /// Note: You can use a template parameter to specify a tag value. CloudMonitor replaces the value of the template parameter with an actual tag value.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "value", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
                public object? Value
                {
                    get => GetInstanceProperty<object?>();
                }
            }
        }
        #pragma warning disable CS8618

        [JsiiByValue(fqn: "@alicloud/ros-cdk-cms.RosResourceMetricRule.LabelsProperty")]
        public class LabelsProperty : AlibabaCloud.SDK.ROS.CDK.Cms.RosResourceMetricRule.ILabelsProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: key: The key of the tag.
            /// </remarks>
            [JsiiProperty(name: "key", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Key
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: value: The value of the tag.
            /// Note: You can use a template parameter to specify a tag value. CloudMonitor replaces the value of the template parameter with an actual tag value.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "value", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Value
            {
                get;
                set;
            }
        }
        [JsiiInterface(nativeType: typeof(IPrometheusProperty), fullyQualifiedName: "@alicloud/ros-cdk-cms.RosResourceMetricRule.PrometheusProperty")]
        public interface IPrometheusProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: level: The level of the alert. Valid values:
            /// - Critical
            /// - Warn
            /// - Info
            /// </remarks>
            [JsiiProperty(name: "level", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            object Level
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: promQl: The PromQL query statement.
            /// Note: The data obtained by using the PromQL query statement is the monitoring data. You must include the alert threshold in this statement.
            /// </remarks>
            [JsiiProperty(name: "promQl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            object PromQl
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: times: The number of consecutive triggers. If the number of times that the metric values meet the trigger conditions reaches the value of this parameter, CloudMonitor sends alert notifications.
            /// </remarks>
            [JsiiProperty(name: "times", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            object Times
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: annotations: The annotations of the Prometheus alert rule. When a Prometheus alert is triggered, the system renders the annotated keys and values to help you understand the metrics and alert rule.
            /// Note: This parameter is equivalent to the annotations parameter of open source Prometheus.
            /// </remarks>
            [JsiiProperty(name: "annotations", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cms.RosResourceMetricRule.AnnotationsProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Annotations
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(IPrometheusProperty), fullyQualifiedName: "@alicloud/ros-cdk-cms.RosResourceMetricRule.PrometheusProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cms.RosResourceMetricRule.IPrometheusProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: level: The level of the alert. Valid values:
                /// - Critical
                /// - Warn
                /// - Info
                /// </remarks>
                [JsiiProperty(name: "level", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
                public object Level
                {
                    get => GetInstanceProperty<object>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: promQl: The PromQL query statement.
                /// Note: The data obtained by using the PromQL query statement is the monitoring data. You must include the alert threshold in this statement.
                /// </remarks>
                [JsiiProperty(name: "promQl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
                public object PromQl
                {
                    get => GetInstanceProperty<object>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: times: The number of consecutive triggers. If the number of times that the metric values meet the trigger conditions reaches the value of this parameter, CloudMonitor sends alert notifications.
                /// </remarks>
                [JsiiProperty(name: "times", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
                public object Times
                {
                    get => GetInstanceProperty<object>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: annotations: The annotations of the Prometheus alert rule. When a Prometheus alert is triggered, the system renders the annotated keys and values to help you understand the metrics and alert rule.
                /// Note: This parameter is equivalent to the annotations parameter of open source Prometheus.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "annotations", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cms.RosResourceMetricRule.AnnotationsProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
                public object? Annotations
                {
                    get => GetInstanceProperty<object?>();
                }
            }
        }
        #pragma warning disable CS8618

        [JsiiByValue(fqn: "@alicloud/ros-cdk-cms.RosResourceMetricRule.PrometheusProperty")]
        public class PrometheusProperty : AlibabaCloud.SDK.ROS.CDK.Cms.RosResourceMetricRule.IPrometheusProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: level: The level of the alert. Valid values:
            /// - Critical
            /// - Warn
            /// - Info
            /// </remarks>
            [JsiiProperty(name: "level", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Level
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: promQl: The PromQL query statement.
            /// Note: The data obtained by using the PromQL query statement is the monitoring data. You must include the alert threshold in this statement.
            /// </remarks>
            [JsiiProperty(name: "promQl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object PromQl
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: times: The number of consecutive triggers. If the number of times that the metric values meet the trigger conditions reaches the value of this parameter, CloudMonitor sends alert notifications.
            /// </remarks>
            [JsiiProperty(name: "times", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Times
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: annotations: The annotations of the Prometheus alert rule. When a Prometheus alert is triggered, the system renders the annotated keys and values to help you understand the metrics and alert rule.
            /// Note: This parameter is equivalent to the annotations parameter of open source Prometheus.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "annotations", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cms.RosResourceMetricRule.AnnotationsProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? Annotations
            {
                get;
                set;
            }
        }
        [JsiiInterface(nativeType: typeof(IWarnProperty), fullyQualifiedName: "@alicloud/ros-cdk-cms.RosResourceMetricRule.WarnProperty")]
        public interface IWarnProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: comparisonOperator: The operator that is used to compare the metric value with the threshold. Valid values:
            /// - GreaterThanOrEqualToThreshold: greater than or equal to the threshold
            /// - GreaterThanThreshold: greater than the threshold
            /// - LessThanOrEqualToThreshold: less than or equal to the threshold
            /// - LessThanThreshold: less than the threshold
            /// - NotEqualToThreshold: not equal to the threshold
            /// - GreaterThanYesterday: greater than the metric value at the same time yesterday
            /// - LessThanYesterday: less than the metric value at the same time yesterday
            /// - GreaterThanLastWeek: greater than the metric value at the same time last week
            /// - LessThanLastWeek: less than the metric value at the same time last week
            /// - GreaterThanLastPeriod: greater than the metric value in the last monitoring cycle
            /// - LessThanLastPeriod: less than the metric value in the last monitoring cycle
            /// </remarks>
            [JsiiProperty(name: "comparisonOperator", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            object ComparisonOperator
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: statistics: The statistical methods for Warn-level alerts. Valid values:
            /// - Maximum: the maximum value
            /// - Minimum: the minimum value
            /// - Average: the average value
            /// - Availability: the availability rate
            /// </remarks>
            [JsiiProperty(name: "statistics", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            object Statistics
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: threshold: The threshold for Warn-level alerts.
            /// </remarks>
            [JsiiProperty(name: "threshold", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            object Threshold
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: times: The consecutive number of times for which the metric value meets the trigger condition before a Warn-level alert is triggered.
            /// </remarks>
            [JsiiProperty(name: "times", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            object Times
            {
                get;
            }

            [JsiiTypeProxy(nativeType: typeof(IWarnProperty), fullyQualifiedName: "@alicloud/ros-cdk-cms.RosResourceMetricRule.WarnProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cms.RosResourceMetricRule.IWarnProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: comparisonOperator: The operator that is used to compare the metric value with the threshold. Valid values:
                /// - GreaterThanOrEqualToThreshold: greater than or equal to the threshold
                /// - GreaterThanThreshold: greater than the threshold
                /// - LessThanOrEqualToThreshold: less than or equal to the threshold
                /// - LessThanThreshold: less than the threshold
                /// - NotEqualToThreshold: not equal to the threshold
                /// - GreaterThanYesterday: greater than the metric value at the same time yesterday
                /// - LessThanYesterday: less than the metric value at the same time yesterday
                /// - GreaterThanLastWeek: greater than the metric value at the same time last week
                /// - LessThanLastWeek: less than the metric value at the same time last week
                /// - GreaterThanLastPeriod: greater than the metric value in the last monitoring cycle
                /// - LessThanLastPeriod: less than the metric value in the last monitoring cycle
                /// </remarks>
                [JsiiProperty(name: "comparisonOperator", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
                public object ComparisonOperator
                {
                    get => GetInstanceProperty<object>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: statistics: The statistical methods for Warn-level alerts. Valid values:
                /// - Maximum: the maximum value
                /// - Minimum: the minimum value
                /// - Average: the average value
                /// - Availability: the availability rate
                /// </remarks>
                [JsiiProperty(name: "statistics", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
                public object Statistics
                {
                    get => GetInstanceProperty<object>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: threshold: The threshold for Warn-level alerts.
                /// </remarks>
                [JsiiProperty(name: "threshold", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
                public object Threshold
                {
                    get => GetInstanceProperty<object>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: times: The consecutive number of times for which the metric value meets the trigger condition before a Warn-level alert is triggered.
                /// </remarks>
                [JsiiProperty(name: "times", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
                public object Times
                {
                    get => GetInstanceProperty<object>()!;
                }
            }
        }
        #pragma warning disable CS8618

        [JsiiByValue(fqn: "@alicloud/ros-cdk-cms.RosResourceMetricRule.WarnProperty")]
        public class WarnProperty : AlibabaCloud.SDK.ROS.CDK.Cms.RosResourceMetricRule.IWarnProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: comparisonOperator: The operator that is used to compare the metric value with the threshold. Valid values:
            /// - GreaterThanOrEqualToThreshold: greater than or equal to the threshold
            /// - GreaterThanThreshold: greater than the threshold
            /// - LessThanOrEqualToThreshold: less than or equal to the threshold
            /// - LessThanThreshold: less than the threshold
            /// - NotEqualToThreshold: not equal to the threshold
            /// - GreaterThanYesterday: greater than the metric value at the same time yesterday
            /// - LessThanYesterday: less than the metric value at the same time yesterday
            /// - GreaterThanLastWeek: greater than the metric value at the same time last week
            /// - LessThanLastWeek: less than the metric value at the same time last week
            /// - GreaterThanLastPeriod: greater than the metric value in the last monitoring cycle
            /// - LessThanLastPeriod: less than the metric value in the last monitoring cycle
            /// </remarks>
            [JsiiProperty(name: "comparisonOperator", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ComparisonOperator
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: statistics: The statistical methods for Warn-level alerts. Valid values:
            /// - Maximum: the maximum value
            /// - Minimum: the minimum value
            /// - Average: the average value
            /// - Availability: the availability rate
            /// </remarks>
            [JsiiProperty(name: "statistics", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Statistics
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: threshold: The threshold for Warn-level alerts.
            /// </remarks>
            [JsiiProperty(name: "threshold", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Threshold
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: times: The consecutive number of times for which the metric value meets the trigger condition before a Warn-level alert is triggered.
            /// </remarks>
            [JsiiProperty(name: "times", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Times
            {
                get;
                set;
            }
        }
    }
}
