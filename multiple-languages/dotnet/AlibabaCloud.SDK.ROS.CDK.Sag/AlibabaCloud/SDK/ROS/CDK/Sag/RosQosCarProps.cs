using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Sag
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::SAG::QosCar`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-sag.RosQosCarProps")]
    public class RosQosCarProps : AlibabaCloud.SDK.ROS.CDK.Sag.IRosQosCarProps
    {
        /// <remarks>
        /// <strong>Property</strong>: limitType: The type of the traffic throttling policy. Valid values:
        /// Absolute: throttles traffic by a specific bandwidth range.
        /// Percent: throttles traffic by a specific range of bandwidth percentage.
        /// </remarks>
        [JsiiProperty(name: "limitType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object LimitType
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: priority: The priority of the traffic throttling policy. A smaller value represents a higher
        /// priority. If policies are assigned the same priority, the one applied the earliest
        /// prevails. Valid values: 1 to 7.
        /// </remarks>
        [JsiiProperty(name: "priority", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object Priority
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: qosId: The ID of the QoS policy.
        /// </remarks>
        [JsiiProperty(name: "qosId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object QosId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: description: The description of the traffic throttling policy.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? Description
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: maxBandwidthAbs: The maximum bandwidth. This parameter is required when LimitType is set to Absolute.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "maxBandwidthAbs", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? MaxBandwidthAbs
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: maxBandwidthPercent: The maximum percentage that is based on the maximum upstream bandwidth of the SAG
        /// instance.
        /// This parameter is required when LimitType is set to Percent.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "maxBandwidthPercent", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? MaxBandwidthPercent
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: minBandwidthAbs: The minimum bandwidth. This parameter is required when LimitType is set to Absolute.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "minBandwidthAbs", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? MinBandwidthAbs
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: minBandwidthPercent: The minimum percentage that is based on the maximum upstream bandwidth of the SAG
        /// instance.
        /// This parameter is required when LimitType is set to Percent.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "minBandwidthPercent", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? MinBandwidthPercent
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: name: The name of the traffic throttling policy. The name must be 2 to 128 characters in
        /// length, and can contain Chinese characters, letters, digits, periods (.), underscores
        /// (_), and hyphens (-).
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? Name
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: percentSourceType: If the policy throttles traffic based on a specified bandwidth percentage, the following
        /// options are available:
        /// CcnBandwidth: Cloud Enterprise Network (CCN) bandwidth.
        /// InternetUpBandwidth: Internet upstream bandwidth.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "percentSourceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? PercentSourceType
        {
            get;
            set;
        }
    }
}
