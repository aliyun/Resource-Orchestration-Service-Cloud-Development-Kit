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
        [JsiiProperty(name: "alarmAction", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOverride: true)]
        public object AlarmAction
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: metricName: Metric Name
        /// </remarks>
        [JsiiProperty(name: "metricName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object MetricName
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: scalingGroupId: The ID of the scaling group.
        /// </remarks>
        [JsiiProperty(name: "scalingGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object ScalingGroupId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: threshold: Threshold
        /// </remarks>
        [JsiiProperty(name: "threshold", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object Threshold
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: comparisonOperator: Comparison Operator
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "comparisonOperator", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? ComparisonOperator
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: description: Description
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? Description
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
        [JsiiProperty(name: "evaluationCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? EvaluationCount
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: groupId: Group Id
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "groupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? GroupId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: metricType: Metric Type
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "metricType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? MetricType
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: name: Name
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? Name
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: period: Period
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "period", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? Period
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: statistics: Statistics
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "statistics", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? Statistics
        {
            get;
            set;
        }
    }
}
