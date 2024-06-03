using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ga
{
    /// <summary>Properties for defining a `RosApplicationMonitor`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-applicationmonitor
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosApplicationMonitorProps), fullyQualifiedName: "@alicloud/ros-cdk-ga.RosApplicationMonitorProps")]
    public interface IRosApplicationMonitorProps
    {
        /// <remarks>
        /// <strong>Property</strong>: acceleratorId: The ID of the GA instance on which you want to perform the origin probing task.
        /// </remarks>
        [JsiiProperty(name: "acceleratorId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AcceleratorId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: address: The URL or IP address that you want to probe.
        /// </remarks>
        [JsiiProperty(name: "address", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Address
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: listenerId: The ID of the listener on which you want to perform the origin probing task.
        /// </remarks>
        [JsiiProperty(name: "listenerId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ListenerId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: taskName: The name of the origin probing task. The name must be 1 to 128 characters in length and can contain letters, digits, periods (.), underscores (_), and hyphens (-). The name must start with a letter.
        /// </remarks>
        [JsiiProperty(name: "taskName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object TaskName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: detectEnable: Specifies whether to enable the automatic diagnostics feature.
        /// </remarks>
        [JsiiProperty(name: "detectEnable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DetectEnable
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: detectThreshold: The threshold that is used to trigger the automatic diagnostics feature. Unit: percentage.Valid values: 0 to 100.The default value is 0, which indicates that the automatic diagnostics feature is not triggered.
        /// </remarks>
        [JsiiProperty(name: "detectThreshold", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DetectThreshold
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: detectTimes: The number of times that the threshold must be reached before the automatic diagnostics feature is triggered. Valid values: 1 to 20. Default value: 1.
        /// </remarks>
        [JsiiProperty(name: "detectTimes", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DetectTimes
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: optionsJson: The extended options of the listener protocol that is used by the origin probing task. The options vary based on the listener protocol.
        /// </remarks>
        [JsiiProperty(name: "optionsJson", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? OptionsJson
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: silenceTime: The silence period of the automatic diagnostics feature. This parameter specifies the interval at which the automatic diagnostics feature is triggered. If the availability rate does not return to normal after GA triggers an automatic diagnostic task, GA must wait until the silence period ends before GA can trigger another automatic diagnostic task.If the number of consecutive times that the availability rate drops below the threshold of automatic diagnostics reaches the value of DetectTimes, the automatic diagnostics feature is triggered. The automatic diagnostics feature is not triggered again within the silence period even if the availability rate remains below the threshold. If the availability rate does not return to normal after the silence period ends, the automatic diagnostics feature is triggered again.Unit: seconds. Valid values: 300 to 86400. Default value: 300.
        /// </remarks>
        [JsiiProperty(name: "silenceTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SilenceTime
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosApplicationMonitor`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-applicationmonitor
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosApplicationMonitorProps), fullyQualifiedName: "@alicloud/ros-cdk-ga.RosApplicationMonitorProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ga.IRosApplicationMonitorProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: acceleratorId: The ID of the GA instance on which you want to perform the origin probing task.
            /// </remarks>
            [JsiiProperty(name: "acceleratorId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AcceleratorId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: address: The URL or IP address that you want to probe.
            /// </remarks>
            [JsiiProperty(name: "address", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Address
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: listenerId: The ID of the listener on which you want to perform the origin probing task.
            /// </remarks>
            [JsiiProperty(name: "listenerId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ListenerId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: taskName: The name of the origin probing task. The name must be 1 to 128 characters in length and can contain letters, digits, periods (.), underscores (_), and hyphens (-). The name must start with a letter.
            /// </remarks>
            [JsiiProperty(name: "taskName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object TaskName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: detectEnable: Specifies whether to enable the automatic diagnostics feature.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "detectEnable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DetectEnable
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: detectThreshold: The threshold that is used to trigger the automatic diagnostics feature. Unit: percentage.Valid values: 0 to 100.The default value is 0, which indicates that the automatic diagnostics feature is not triggered.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "detectThreshold", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DetectThreshold
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: detectTimes: The number of times that the threshold must be reached before the automatic diagnostics feature is triggered. Valid values: 1 to 20. Default value: 1.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "detectTimes", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DetectTimes
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: optionsJson: The extended options of the listener protocol that is used by the origin probing task. The options vary based on the listener protocol.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "optionsJson", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
            public object? OptionsJson
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: silenceTime: The silence period of the automatic diagnostics feature. This parameter specifies the interval at which the automatic diagnostics feature is triggered. If the availability rate does not return to normal after GA triggers an automatic diagnostic task, GA must wait until the silence period ends before GA can trigger another automatic diagnostic task.If the number of consecutive times that the availability rate drops below the threshold of automatic diagnostics reaches the value of DetectTimes, the automatic diagnostics feature is triggered. The automatic diagnostics feature is not triggered again within the silence period even if the availability rate remains below the threshold. If the availability rate does not return to normal after the silence period ends, the automatic diagnostics feature is triggered again.Unit: seconds. Valid values: 300 to 86400. Default value: 300.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "silenceTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SilenceTime
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
