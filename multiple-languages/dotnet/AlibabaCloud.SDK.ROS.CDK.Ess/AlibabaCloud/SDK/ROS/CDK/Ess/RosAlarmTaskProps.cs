using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ess
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::ESS::AlarmTask`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-ess.RosAlarmTaskProps")]
    public class RosAlarmTaskProps : AlibabaCloud.SDK.ROS.CDK.Ess.IRosAlarmTaskProps
    {
        /// <remarks>
        /// <strong>Property</strong>: alarmAction: Alarm Actions
        /// </remarks>
        [JsiiProperty(name: "alarmAction", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"array\"}}", isOverride: true)]
        public string[] AlarmAction
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: metricName: Metric Name
        /// </remarks>
        [JsiiProperty(name: "metricName", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string MetricName
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: scalingGroupId: The ID of the scaling group.
        /// </remarks>
        [JsiiProperty(name: "scalingGroupId", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string ScalingGroupId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: threshold: Threshold
        /// </remarks>
        [JsiiProperty(name: "threshold", typeJson: "{\"primitive\":\"number\"}", isOverride: true)]
        public double Threshold
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: comparisonOperator: Comparison Operator
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "comparisonOperator", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? ComparisonOperator
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: description: Description
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? Description
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: dimensions: Dimensions
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "dimensions", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-ess.RosAlarmTask.DimensionsProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true, isOverride: true)]
        public object? Dimensions
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: evaluationCount: Evaluation Count
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "evaluationCount", typeJson: "{\"primitive\":\"number\"}", isOptional: true, isOverride: true)]
        public double? EvaluationCount
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: groupId: Group Id
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "groupId", typeJson: "{\"primitive\":\"number\"}", isOptional: true, isOverride: true)]
        public double? GroupId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: metricType: Metric Type
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "metricType", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? MetricType
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: name: Name
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "name", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? Name
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: period: Period
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "period", typeJson: "{\"primitive\":\"number\"}", isOptional: true, isOverride: true)]
        public double? Period
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: statistics: Statistics
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "statistics", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? Statistics
        {
            get;
            set;
        }
    }
}
