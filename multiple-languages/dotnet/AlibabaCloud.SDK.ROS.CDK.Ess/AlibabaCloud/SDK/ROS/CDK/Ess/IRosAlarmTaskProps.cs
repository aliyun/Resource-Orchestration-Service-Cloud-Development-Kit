using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ess
{
    /// <summary>Properties for defining a `ALIYUN::ESS::AlarmTask`.</summary>
    [JsiiInterface(nativeType: typeof(IRosAlarmTaskProps), fullyQualifiedName: "@alicloud/ros-cdk-ess.RosAlarmTaskProps")]
    public interface IRosAlarmTaskProps
    {
        /// <remarks>
        /// <strong>Property</strong>: alarmAction: Alarm Actions
        /// </remarks>
        [JsiiProperty(name: "alarmAction", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"array\"}}")]
        string[] AlarmAction
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: metricName: Metric Name
        /// </remarks>
        [JsiiProperty(name: "metricName", typeJson: "{\"primitive\":\"string\"}")]
        string MetricName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: scalingGroupId: The ID of the scaling group.
        /// </remarks>
        [JsiiProperty(name: "scalingGroupId", typeJson: "{\"primitive\":\"string\"}")]
        string ScalingGroupId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: threshold: Threshold
        /// </remarks>
        [JsiiProperty(name: "threshold", typeJson: "{\"primitive\":\"number\"}")]
        double Threshold
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: comparisonOperator: Comparison Operator
        /// </remarks>
        [JsiiProperty(name: "comparisonOperator", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? ComparisonOperator
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: description: Description
        /// </remarks>
        [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? Description
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: dimensions: Dimensions
        /// </remarks>
        [JsiiProperty(name: "dimensions", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ess.RosAlarmTask.DimensionsProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Dimensions
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: evaluationCount: Evaluation Count
        /// </remarks>
        [JsiiProperty(name: "evaluationCount", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        double? EvaluationCount
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: groupId: Group Id
        /// </remarks>
        [JsiiProperty(name: "groupId", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        double? GroupId
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: metricType: Metric Type
        /// </remarks>
        [JsiiProperty(name: "metricType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? MetricType
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: name: Name
        /// </remarks>
        [JsiiProperty(name: "name", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? Name
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: period: Period
        /// </remarks>
        [JsiiProperty(name: "period", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        double? Period
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: statistics: Statistics
        /// </remarks>
        [JsiiProperty(name: "statistics", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? Statistics
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::ESS::AlarmTask`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRosAlarmTaskProps), fullyQualifiedName: "@alicloud/ros-cdk-ess.RosAlarmTaskProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ess.IRosAlarmTaskProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: alarmAction: Alarm Actions
            /// </remarks>
            [JsiiProperty(name: "alarmAction", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"array\"}}")]
            public string[] AlarmAction
            {
                get => GetInstanceProperty<string[]>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: metricName: Metric Name
            /// </remarks>
            [JsiiProperty(name: "metricName", typeJson: "{\"primitive\":\"string\"}")]
            public string MetricName
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: scalingGroupId: The ID of the scaling group.
            /// </remarks>
            [JsiiProperty(name: "scalingGroupId", typeJson: "{\"primitive\":\"string\"}")]
            public string ScalingGroupId
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: threshold: Threshold
            /// </remarks>
            [JsiiProperty(name: "threshold", typeJson: "{\"primitive\":\"number\"}")]
            public double Threshold
            {
                get => GetInstanceProperty<double>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: comparisonOperator: Comparison Operator
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "comparisonOperator", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? ComparisonOperator
            {
                get => GetInstanceProperty<string?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: description: Description
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? Description
            {
                get => GetInstanceProperty<string?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: dimensions: Dimensions
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "dimensions", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ess.RosAlarmTask.DimensionsProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? Dimensions
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: evaluationCount: Evaluation Count
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "evaluationCount", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
            public double? EvaluationCount
            {
                get => GetInstanceProperty<double?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: groupId: Group Id
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "groupId", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
            public double? GroupId
            {
                get => GetInstanceProperty<double?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: metricType: Metric Type
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "metricType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? MetricType
            {
                get => GetInstanceProperty<string?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: name: Name
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "name", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? Name
            {
                get => GetInstanceProperty<string?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: period: Period
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "period", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
            public double? Period
            {
                get => GetInstanceProperty<double?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: statistics: Statistics
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "statistics", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? Statistics
            {
                get => GetInstanceProperty<string?>();
            }
        }
    }
}
