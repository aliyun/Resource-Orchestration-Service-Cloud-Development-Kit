using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Sag
{
    /// <summary>Properties for defining a `RosQosCar`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sag-qoscar
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosQosCarProps), fullyQualifiedName: "@alicloud/ros-cdk-sag.RosQosCarProps")]
    public interface IRosQosCarProps
    {
        /// <remarks>
        /// <strong>Property</strong>: limitType: The type of the traffic throttling policy. Valid values:
        /// Absolute: throttles traffic by a specific bandwidth range.
        /// Percent: throttles traffic by a specific range of bandwidth percentage.
        /// </remarks>
        [JsiiProperty(name: "limitType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object LimitType
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: priority: The priority of the traffic throttling policy. A smaller value represents a higher
        /// priority. If policies are assigned the same priority, the one applied the earliest
        /// prevails. Valid values: 1 to 7.
        /// </remarks>
        [JsiiProperty(name: "priority", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Priority
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: qosId: The ID of the QoS policy.
        /// </remarks>
        [JsiiProperty(name: "qosId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object QosId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: description: The description of the traffic throttling policy.
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
        /// <strong>Property</strong>: maxBandwidthAbs: The maximum bandwidth. This parameter is required when LimitType is set to Absolute.
        /// </remarks>
        [JsiiProperty(name: "maxBandwidthAbs", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? MaxBandwidthAbs
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: maxBandwidthPercent: The maximum percentage that is based on the maximum upstream bandwidth of the SAG
        /// instance.
        /// This parameter is required when LimitType is set to Percent.
        /// </remarks>
        [JsiiProperty(name: "maxBandwidthPercent", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? MaxBandwidthPercent
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: minBandwidthAbs: The minimum bandwidth. This parameter is required when LimitType is set to Absolute.
        /// </remarks>
        [JsiiProperty(name: "minBandwidthAbs", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? MinBandwidthAbs
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: minBandwidthPercent: The minimum percentage that is based on the maximum upstream bandwidth of the SAG
        /// instance.
        /// This parameter is required when LimitType is set to Percent.
        /// </remarks>
        [JsiiProperty(name: "minBandwidthPercent", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? MinBandwidthPercent
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: name: The name of the traffic throttling policy. The name must be 2 to 128 characters in
        /// length, and can contain Chinese characters, letters, digits, periods (.), underscores
        /// (_), and hyphens (-).
        /// </remarks>
        [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Name
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: percentSourceType: If the policy throttles traffic based on a specified bandwidth percentage, the following
        /// options are available:
        /// CcnBandwidth: Cloud Enterprise Network (CCN) bandwidth.
        /// InternetUpBandwidth: Internet upstream bandwidth.
        /// </remarks>
        [JsiiProperty(name: "percentSourceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? PercentSourceType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosQosCar`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sag-qoscar
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosQosCarProps), fullyQualifiedName: "@alicloud/ros-cdk-sag.RosQosCarProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Sag.IRosQosCarProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: limitType: The type of the traffic throttling policy. Valid values:
            /// Absolute: throttles traffic by a specific bandwidth range.
            /// Percent: throttles traffic by a specific range of bandwidth percentage.
            /// </remarks>
            [JsiiProperty(name: "limitType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object LimitType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: priority: The priority of the traffic throttling policy. A smaller value represents a higher
            /// priority. If policies are assigned the same priority, the one applied the earliest
            /// prevails. Valid values: 1 to 7.
            /// </remarks>
            [JsiiProperty(name: "priority", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Priority
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: qosId: The ID of the QoS policy.
            /// </remarks>
            [JsiiProperty(name: "qosId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object QosId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: description: The description of the traffic throttling policy.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Description
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: maxBandwidthAbs: The maximum bandwidth. This parameter is required when LimitType is set to Absolute.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "maxBandwidthAbs", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? MaxBandwidthAbs
            {
                get => GetInstanceProperty<object?>();
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
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: minBandwidthAbs: The minimum bandwidth. This parameter is required when LimitType is set to Absolute.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "minBandwidthAbs", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? MinBandwidthAbs
            {
                get => GetInstanceProperty<object?>();
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
                get => GetInstanceProperty<object?>();
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
                get => GetInstanceProperty<object?>();
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
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
