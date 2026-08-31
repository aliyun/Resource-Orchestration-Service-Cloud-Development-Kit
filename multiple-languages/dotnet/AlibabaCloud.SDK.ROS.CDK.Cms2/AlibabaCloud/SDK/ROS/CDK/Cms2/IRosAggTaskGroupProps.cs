using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cms2
{
    /// <summary>Properties for defining a `RosAggTaskGroup`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms2-aggtaskgroup
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosAggTaskGroupProps), fullyQualifiedName: "@alicloud/ros-cdk-cms2.RosAggTaskGroupProps")]
    public interface IRosAggTaskGroupProps
    {
        /// <remarks>
        /// <strong>Property</strong>: aggTaskGroupConfig: The config of the agg task group. Only "RecordingRuleYaml" format is supported, which must conform to the RecordingRule format of the open source Prometheus.
        /// </remarks>
        [JsiiProperty(name: "aggTaskGroupConfig", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AggTaskGroupConfig
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: aggTaskGroupName: The name of the agg task group.
        /// </remarks>
        [JsiiProperty(name: "aggTaskGroupName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AggTaskGroupName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: instanceId: The ID of the source Prometheus instance the agg task group reads data from.
        /// </remarks>
        [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object InstanceId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: targetPrometheusId: The ID of the target Prometheus instance of the agg task group.
        /// </remarks>
        [JsiiProperty(name: "targetPrometheusId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object TargetPrometheusId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: aggTaskGroupConfigType: The config type of the agg task group. Default: "RecordingRuleYaml".
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

        /// <remarks>
        /// <strong>Property</strong>: cronExpr: The cron expression used when ScheduleMode is "Cron". For example, "0\/1 * * * *" means scheduling every 1 minute starting from minute 0.
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

        /// <remarks>
        /// <strong>Property</strong>: delay: The fixed delay of the schedule, in seconds. Default: 30.
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

        /// <remarks>
        /// <strong>Property</strong>: description: The description of the agg task group.
        /// </remarks>
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Description
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: fromTime: The second-level timestamp corresponding to the schedule start time.
        /// </remarks>
        [JsiiProperty(name: "fromTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? FromTime
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: maxRetries: The maximum number of retries for executing the agg task. Default: 20.
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

        /// <remarks>
        /// <strong>Property</strong>: maxRunTimeInSeconds: The maximum retry time for executing the agg task, in seconds. Default: 600.
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

        /// <remarks>
        /// <strong>Property</strong>: overrideIfExists: Whether to override and update an existing agg task group with the same name when creating. Create-only, cannot be updated.
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

        /// <remarks>
        /// <strong>Property</strong>: precheckString: The precheck config. Not configured by default.
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

        /// <remarks>
        /// <strong>Property</strong>: scheduleMode: The schedule mode, "Cron" or "FixedRate". Default: "FixedRate".
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

        /// <remarks>
        /// <strong>Property</strong>: scheduleTimeExpr: The schedule time expression, "
        ///
        /// <strong>M</strong>: ".
        ///
        /// <strong>S</strong>: " or "
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

        /// <remarks>
        /// <strong>Property</strong>: status: The status of the agg task group, "Running" or "Stopped". Default: Running.
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

        /// <remarks>
        /// <strong>Property</strong>: tags: The tags of the agg task group.
        /// </remarks>
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-cms2.RosAggTaskGroup.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        AlibabaCloud.SDK.ROS.CDK.Cms2.RosAggTaskGroup.ITagsProperty[]? Tags
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: toTime: The second-level timestamp corresponding to the schedule end time. 0 means the schedule never stops.
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

        /// <summary>Properties for defining a `RosAggTaskGroup`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms2-aggtaskgroup
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosAggTaskGroupProps), fullyQualifiedName: "@alicloud/ros-cdk-cms2.RosAggTaskGroupProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cms2.IRosAggTaskGroupProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: aggTaskGroupConfig: The config of the agg task group. Only "RecordingRuleYaml" format is supported, which must conform to the RecordingRule format of the open source Prometheus.
            /// </remarks>
            [JsiiProperty(name: "aggTaskGroupConfig", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AggTaskGroupConfig
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: aggTaskGroupName: The name of the agg task group.
            /// </remarks>
            [JsiiProperty(name: "aggTaskGroupName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AggTaskGroupName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: instanceId: The ID of the source Prometheus instance the agg task group reads data from.
            /// </remarks>
            [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object InstanceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: targetPrometheusId: The ID of the target Prometheus instance of the agg task group.
            /// </remarks>
            [JsiiProperty(name: "targetPrometheusId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object TargetPrometheusId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: aggTaskGroupConfigType: The config type of the agg task group. Default: "RecordingRuleYaml".
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "aggTaskGroupConfigType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AggTaskGroupConfigType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: cronExpr: The cron expression used when ScheduleMode is "Cron". For example, "0\/1 * * * *" means scheduling every 1 minute starting from minute 0.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "cronExpr", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? CronExpr
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: delay: The fixed delay of the schedule, in seconds. Default: 30.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "delay", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Delay
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: description: The description of the agg task group.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Description
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: fromTime: The second-level timestamp corresponding to the schedule start time.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "fromTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? FromTime
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: maxRetries: The maximum number of retries for executing the agg task. Default: 20.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "maxRetries", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? MaxRetries
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: maxRunTimeInSeconds: The maximum retry time for executing the agg task, in seconds. Default: 600.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "maxRunTimeInSeconds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? MaxRunTimeInSeconds
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: overrideIfExists: Whether to override and update an existing agg task group with the same name when creating. Create-only, cannot be updated.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "overrideIfExists", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? OverrideIfExists
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: precheckString: The precheck config. Not configured by default.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "precheckString", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
            public object? PrecheckString
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: scheduleMode: The schedule mode, "Cron" or "FixedRate". Default: "FixedRate".
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "scheduleMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ScheduleMode
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: scheduleTimeExpr: The schedule time expression, "
            ///
            /// <strong>M</strong>: ".
            ///
            /// <strong>S</strong>: " or "
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "scheduleTimeExpr", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ScheduleTimeExpr
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: status: The status of the agg task group, "Running" or "Stopped". Default: Running.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "status", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Status
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: tags: The tags of the agg task group.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-cms2.RosAggTaskGroup.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
            public AlibabaCloud.SDK.ROS.CDK.Cms2.RosAggTaskGroup.ITagsProperty[]? Tags
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Cms2.RosAggTaskGroup.ITagsProperty[]?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: toTime: The second-level timestamp corresponding to the schedule end time. 0 means the schedule never stops.
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
