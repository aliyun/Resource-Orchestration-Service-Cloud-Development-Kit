using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ess
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::ESS::AlarmTask`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-ess.AlarmTaskProps")]
    public class AlarmTaskProps : AlibabaCloud.SDK.ROS.CDK.Ess.IAlarmTaskProps
    {
        /// <summary>Property alarmAction: Alarm Actions.</summary>
        [JsiiProperty(name: "alarmAction", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"array\"}}", isOverride: true)]
        public string[] AlarmAction
        {
            get;
            set;
        }

        /// <summary>Property metricName: Metric Name.</summary>
        [JsiiProperty(name: "metricName", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string MetricName
        {
            get;
            set;
        }

        /// <summary>Property scalingGroupId: The ID of the scaling group.</summary>
        [JsiiProperty(name: "scalingGroupId", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string ScalingGroupId
        {
            get;
            set;
        }

        /// <summary>Property threshold: Threshold.</summary>
        [JsiiProperty(name: "threshold", typeJson: "{\"primitive\":\"number\"}", isOverride: true)]
        public double Threshold
        {
            get;
            set;
        }

        /// <summary>Property comparisonOperator: Comparison Operator.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "comparisonOperator", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? ComparisonOperator
        {
            get;
            set;
        }

        /// <summary>Property description: Description.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? Description
        {
            get;
            set;
        }

        /// <summary>Property dimensions: Dimensions.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "dimensions", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ess.RosAlarmTask.DimensionsProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true, isOverride: true)]
        public object? Dimensions
        {
            get;
            set;
        }

        /// <summary>Property evaluationCount: Evaluation Count.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "evaluationCount", typeJson: "{\"primitive\":\"number\"}", isOptional: true, isOverride: true)]
        public double? EvaluationCount
        {
            get;
            set;
        }

        /// <summary>Property groupId: Group Id.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "groupId", typeJson: "{\"primitive\":\"number\"}", isOptional: true, isOverride: true)]
        public double? GroupId
        {
            get;
            set;
        }

        /// <summary>Property metricType: Metric Type.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "metricType", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? MetricType
        {
            get;
            set;
        }

        /// <summary>Property name: Name.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "name", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? Name
        {
            get;
            set;
        }

        /// <summary>Property period: Period.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "period", typeJson: "{\"primitive\":\"number\"}", isOptional: true, isOverride: true)]
        public double? Period
        {
            get;
            set;
        }

        /// <summary>Property statistics: Statistics.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "statistics", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? Statistics
        {
            get;
            set;
        }
    }
}
