using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Dts
{
    /// <summary>Properties for defining a `RosJobMonitorRule`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dts-jobmonitorrule
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosJobMonitorRuleProps), fullyQualifiedName: "@alicloud/ros-cdk-dts.RosJobMonitorRuleProps")]
    public interface IRosJobMonitorRuleProps
    {
        /// <remarks>
        /// <strong>Property</strong>: dtsJobId: Migration, synchronization or subscription task ID can be by calling the [DescribeDtsJobs](~~ 209702 ~~) get.
        /// </remarks>
        [JsiiProperty(name: "dtsJobId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DtsJobId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: type: Monitoring rules of type, the return value:
        /// - **delay**: delay alarm.
        /// - **error**: abnormal alarm.
        /// </remarks>
        [JsiiProperty(name: "type", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Type
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: delayRuleTime: Trigger delay alarm threshold, which is measured in seconds.
        /// </remarks>
        [JsiiProperty(name: "delayRuleTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DelayRuleTime
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: period: The statistical period of the incremental verification task. Unit: minutes.
        /// > currently supported values are 1 minute, 3 minutes, 5 minutes and 30 minutes.
        /// </remarks>
        [JsiiProperty(name: "period", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Period
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: phones: The alarm is triggered after notification of the contact phone number.
        /// </remarks>
        [JsiiProperty(name: "phones", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Phones
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: state: Whether to enable monitoring rules, return value:
        /// - **Y**: enable.
        /// - **N**: Inactive.
        /// </remarks>
        [JsiiProperty(name: "state", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? State
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: times: The number of cycles of the incremental verification task.
        /// </remarks>
        [JsiiProperty(name: "times", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Times
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosJobMonitorRule`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dts-jobmonitorrule
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosJobMonitorRuleProps), fullyQualifiedName: "@alicloud/ros-cdk-dts.RosJobMonitorRuleProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Dts.IRosJobMonitorRuleProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: dtsJobId: Migration, synchronization or subscription task ID can be by calling the [DescribeDtsJobs](~~ 209702 ~~) get.
            /// </remarks>
            [JsiiProperty(name: "dtsJobId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DtsJobId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: type: Monitoring rules of type, the return value:
            /// - **delay**: delay alarm.
            /// - **error**: abnormal alarm.
            /// </remarks>
            [JsiiProperty(name: "type", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Type
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: delayRuleTime: Trigger delay alarm threshold, which is measured in seconds.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "delayRuleTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DelayRuleTime
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: period: The statistical period of the incremental verification task. Unit: minutes.
            /// > currently supported values are 1 minute, 3 minutes, 5 minutes and 30 minutes.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "period", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Period
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: phones: The alarm is triggered after notification of the contact phone number.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "phones", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Phones
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: state: Whether to enable monitoring rules, return value:
            /// - **Y**: enable.
            /// - **N**: Inactive.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "state", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? State
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: times: The number of cycles of the incremental verification task.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "times", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Times
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
