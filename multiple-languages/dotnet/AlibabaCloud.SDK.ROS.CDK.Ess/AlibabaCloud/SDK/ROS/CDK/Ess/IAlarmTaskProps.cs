using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ess
{
    /// <summary>Properties for defining a `ALIYUN::ESS::AlarmTask`.</summary>
    [JsiiInterface(nativeType: typeof(IAlarmTaskProps), fullyQualifiedName: "@alicloud/ros-cdk-ess.AlarmTaskProps")]
    public interface IAlarmTaskProps
    {
        /// <summary>Property alarmAction: Alarm Actions.</summary>
        [JsiiProperty(name: "alarmAction", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"array\"}}")]
        string[] AlarmAction
        {
            get;
        }

        /// <summary>Property metricName: Metric Name.</summary>
        [JsiiProperty(name: "metricName", typeJson: "{\"primitive\":\"string\"}")]
        string MetricName
        {
            get;
        }

        /// <summary>Property scalingGroupId: The ID of the scaling group.</summary>
        [JsiiProperty(name: "scalingGroupId", typeJson: "{\"primitive\":\"string\"}")]
        string ScalingGroupId
        {
            get;
        }

        /// <summary>Property threshold: Threshold.</summary>
        [JsiiProperty(name: "threshold", typeJson: "{\"primitive\":\"number\"}")]
        double Threshold
        {
            get;
        }

        /// <summary>Property comparisonOperator: Comparison Operator.</summary>
        [JsiiProperty(name: "comparisonOperator", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? ComparisonOperator
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property description: Description.</summary>
        [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? Description
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property dimensions: Dimensions.</summary>
        [JsiiProperty(name: "dimensions", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ess.RosAlarmTask.DimensionsProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Dimensions
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property evaluationCount: Evaluation Count.</summary>
        [JsiiProperty(name: "evaluationCount", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        double? EvaluationCount
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property groupId: Group Id.</summary>
        [JsiiProperty(name: "groupId", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        double? GroupId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property metricType: Metric Type.</summary>
        [JsiiProperty(name: "metricType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? MetricType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property name: Name.</summary>
        [JsiiProperty(name: "name", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? Name
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property period: Period.</summary>
        [JsiiProperty(name: "period", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        double? Period
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property statistics: Statistics.</summary>
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
        [JsiiTypeProxy(nativeType: typeof(IAlarmTaskProps), fullyQualifiedName: "@alicloud/ros-cdk-ess.AlarmTaskProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ess.IAlarmTaskProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property alarmAction: Alarm Actions.</summary>
            [JsiiProperty(name: "alarmAction", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"array\"}}")]
            public string[] AlarmAction
            {
                get => GetInstanceProperty<string[]>()!;
            }

            /// <summary>Property metricName: Metric Name.</summary>
            [JsiiProperty(name: "metricName", typeJson: "{\"primitive\":\"string\"}")]
            public string MetricName
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property scalingGroupId: The ID of the scaling group.</summary>
            [JsiiProperty(name: "scalingGroupId", typeJson: "{\"primitive\":\"string\"}")]
            public string ScalingGroupId
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property threshold: Threshold.</summary>
            [JsiiProperty(name: "threshold", typeJson: "{\"primitive\":\"number\"}")]
            public double Threshold
            {
                get => GetInstanceProperty<double>()!;
            }

            /// <summary>Property comparisonOperator: Comparison Operator.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "comparisonOperator", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? ComparisonOperator
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property description: Description.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? Description
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property dimensions: Dimensions.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "dimensions", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ess.RosAlarmTask.DimensionsProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? Dimensions
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property evaluationCount: Evaluation Count.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "evaluationCount", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
            public double? EvaluationCount
            {
                get => GetInstanceProperty<double?>();
            }

            /// <summary>Property groupId: Group Id.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "groupId", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
            public double? GroupId
            {
                get => GetInstanceProperty<double?>();
            }

            /// <summary>Property metricType: Metric Type.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "metricType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? MetricType
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property name: Name.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "name", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? Name
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property period: Period.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "period", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
            public double? Period
            {
                get => GetInstanceProperty<double?>();
            }

            /// <summary>Property statistics: Statistics.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "statistics", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? Statistics
            {
                get => GetInstanceProperty<string?>();
            }
        }
    }
}
