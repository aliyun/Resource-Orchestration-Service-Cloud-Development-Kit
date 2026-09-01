using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cms2
{
    /// <summary>Properties for defining a `AggTaskGroup`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms2-aggtaskgroup
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IAggTaskGroupProps), fullyQualifiedName: "@alicloud/ros-cdk-cms2.AggTaskGroupProps")]
    public interface IAggTaskGroupProps
    {
        /// <summary>Property aggTaskGroupConfig: The config of the agg task group.</summary>
        /// <remarks>
        /// Only "RecordingRuleYaml" format is supported, which must conform to the RecordingRule format of the open source Prometheus.
        /// </remarks>
        [JsiiProperty(name: "aggTaskGroupConfig", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AggTaskGroupConfig
        {
            get;
        }

        /// <summary>Property aggTaskGroupName: The name of the agg task group.</summary>
        [JsiiProperty(name: "aggTaskGroupName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AggTaskGroupName
        {
            get;
        }

        /// <summary>Property instanceId: The ID of the source Prometheus instance the agg task group reads data from.</summary>
        [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object InstanceId
        {
            get;
        }

        /// <summary>Property targetPrometheusId: The ID of the target Prometheus instance of the agg task group.</summary>
        [JsiiProperty(name: "targetPrometheusId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object TargetPrometheusId
        {
            get;
        }

        /// <summary>Property aggTaskGroupConfigType: The config type of the agg task group.</summary>
        /// <remarks>
        /// Default: "RecordingRuleYaml".
        /// </remarks>
        [JsiiProperty(name: "aggTaskGroupConfigType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AggTaskGroupConfigType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property cronExpr: The cron expression used when ScheduleMode is "Cron".</summary>
        /// <remarks>
        /// For example, "0/1 * * * *" means scheduling every 1 minute starting from minute 0.
        /// </remarks>
        [JsiiProperty(name: "cronExpr", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? CronExpr
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property delay: The fixed delay of the schedule, in seconds.</summary>
        /// <remarks>
        /// Default: 30.
        /// </remarks>
        [JsiiProperty(name: "delay", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Delay
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property description: The description of the agg task group.</summary>
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Description
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property fromTime: The second-level timestamp corresponding to the schedule start time.</summary>
        [JsiiProperty(name: "fromTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? FromTime
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property maxRetries: The maximum number of retries for executing the agg task.</summary>
        /// <remarks>
        /// Default: 20.
        /// </remarks>
        [JsiiProperty(name: "maxRetries", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? MaxRetries
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property maxRunTimeInSeconds: The maximum retry time for executing the agg task, in seconds.</summary>
        /// <remarks>
        /// Default: 600.
        /// </remarks>
        [JsiiProperty(name: "maxRunTimeInSeconds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? MaxRunTimeInSeconds
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property overrideIfExists: Whether to override and update an existing agg task group with the same name when creating.</summary>
        /// <remarks>
        /// Create-only, cannot be updated.
        /// </remarks>
        [JsiiProperty(name: "overrideIfExists", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? OverrideIfExists
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property precheckString: The precheck config.</summary>
        /// <remarks>
        /// Not configured by default.
        /// </remarks>
        [JsiiProperty(name: "precheckString", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? PrecheckString
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property scheduleMode: The schedule mode, "Cron" or "FixedRate".</summary>
        /// <remarks>
        /// Default: "FixedRate".
        /// </remarks>
        [JsiiProperty(name: "scheduleMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ScheduleMode
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property scheduleTimeExpr: The schedule time expression, "@s" or "@m" is recommended, indicating the rounding granularity of the schedule time window.</summary>
        /// <remarks>
        /// Default: "@m".
        /// </remarks>
        [JsiiProperty(name: "scheduleTimeExpr", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ScheduleTimeExpr
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property status: The status of the agg task group, "Running" or "Stopped".</summary>
        /// <remarks>
        /// Default: Running.
        /// </remarks>
        [JsiiProperty(name: "status", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Status
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property tags: The tags of the agg task group.</summary>
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-cms2.RosAggTaskGroup.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        AlibabaCloud.SDK.ROS.CDK.Cms2.RosAggTaskGroup.ITagsProperty[]? Tags
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property toTime: The second-level timestamp corresponding to the schedule end time.</summary>
        /// <remarks>
        /// 0 means the schedule never stops.
        /// </remarks>
        [JsiiProperty(name: "toTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ToTime
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `AggTaskGroup`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms2-aggtaskgroup
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IAggTaskGroupProps), fullyQualifiedName: "@alicloud/ros-cdk-cms2.AggTaskGroupProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cms2.IAggTaskGroupProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property aggTaskGroupConfig: The config of the agg task group.</summary>
            /// <remarks>
            /// Only "RecordingRuleYaml" format is supported, which must conform to the RecordingRule format of the open source Prometheus.
            /// </remarks>
            [JsiiProperty(name: "aggTaskGroupConfig", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AggTaskGroupConfig
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property aggTaskGroupName: The name of the agg task group.</summary>
            [JsiiProperty(name: "aggTaskGroupName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AggTaskGroupName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property instanceId: The ID of the source Prometheus instance the agg task group reads data from.</summary>
            [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object InstanceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property targetPrometheusId: The ID of the target Prometheus instance of the agg task group.</summary>
            [JsiiProperty(name: "targetPrometheusId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object TargetPrometheusId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property aggTaskGroupConfigType: The config type of the agg task group.</summary>
            /// <remarks>
            /// Default: "RecordingRuleYaml".
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "aggTaskGroupConfigType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AggTaskGroupConfigType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property cronExpr: The cron expression used when ScheduleMode is "Cron".</summary>
            /// <remarks>
            /// For example, "0/1 * * * *" means scheduling every 1 minute starting from minute 0.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "cronExpr", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? CronExpr
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property delay: The fixed delay of the schedule, in seconds.</summary>
            /// <remarks>
            /// Default: 30.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "delay", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Delay
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property description: The description of the agg task group.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Description
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property fromTime: The second-level timestamp corresponding to the schedule start time.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "fromTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? FromTime
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property maxRetries: The maximum number of retries for executing the agg task.</summary>
            /// <remarks>
            /// Default: 20.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "maxRetries", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? MaxRetries
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property maxRunTimeInSeconds: The maximum retry time for executing the agg task, in seconds.</summary>
            /// <remarks>
            /// Default: 600.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "maxRunTimeInSeconds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? MaxRunTimeInSeconds
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property overrideIfExists: Whether to override and update an existing agg task group with the same name when creating.</summary>
            /// <remarks>
            /// Create-only, cannot be updated.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "overrideIfExists", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? OverrideIfExists
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property precheckString: The precheck config.</summary>
            /// <remarks>
            /// Not configured by default.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "precheckString", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
            public object? PrecheckString
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property scheduleMode: The schedule mode, "Cron" or "FixedRate".</summary>
            /// <remarks>
            /// Default: "FixedRate".
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "scheduleMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ScheduleMode
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property scheduleTimeExpr: The schedule time expression, "@s" or "@m" is recommended, indicating the rounding granularity of the schedule time window.</summary>
            /// <remarks>
            /// Default: "@m".
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "scheduleTimeExpr", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ScheduleTimeExpr
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property status: The status of the agg task group, "Running" or "Stopped".</summary>
            /// <remarks>
            /// Default: Running.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "status", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Status
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property tags: The tags of the agg task group.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-cms2.RosAggTaskGroup.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
            public AlibabaCloud.SDK.ROS.CDK.Cms2.RosAggTaskGroup.ITagsProperty[]? Tags
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Cms2.RosAggTaskGroup.ITagsProperty[]?>();
            }

            /// <summary>Property toTime: The second-level timestamp corresponding to the schedule end time.</summary>
            /// <remarks>
            /// 0 means the schedule never stops.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "toTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ToTime
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
