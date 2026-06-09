using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Dts
{
    /// <summary>Properties for defining a `JobMonitorRule`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dts-jobmonitorrule
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IJobMonitorRuleProps), fullyQualifiedName: "@alicloud/ros-cdk-dts.JobMonitorRuleProps")]
    public interface IJobMonitorRuleProps
    {
        /// <summary>Property dtsJobId: Migration, synchronization or subscription task ID can be by calling the [DescribeDtsJobs](~~ 209702 ~~) get.</summary>
        [JsiiProperty(name: "dtsJobId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DtsJobId
        {
            get;
        }

        /// <summary>Property type: Monitoring rules of type, the return value: - **delay**: delay alarm.</summary>
        /// <remarks>
        /// <list type="bullet">
        /// <description><strong>error</strong>: abnormal alarm.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "type", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Type
        {
            get;
        }

        /// <summary>Property delayRuleTime: Trigger delay alarm threshold, which is measured in seconds.</summary>
        [JsiiProperty(name: "delayRuleTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DelayRuleTime
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property period: The statistical period of the incremental verification task.</summary>
        /// <remarks>
        /// Unit: minutes.
        ///
        ///     currently supported values are 1 minute, 3 minutes, 5 minutes and 30 minutes.
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

        /// <summary>Property phones: The alarm is triggered after notification of the contact phone number.</summary>
        [JsiiProperty(name: "phones", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Phones
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property state: Whether to enable monitoring rules, return value: - **Y**: enable.</summary>
        /// <remarks>
        /// <list type="bullet">
        /// <description><strong>N</strong>: Inactive.</description>
        /// </list>
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

        /// <summary>Property times: The number of cycles of the incremental verification task.</summary>
        [JsiiProperty(name: "times", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Times
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `JobMonitorRule`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dts-jobmonitorrule
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IJobMonitorRuleProps), fullyQualifiedName: "@alicloud/ros-cdk-dts.JobMonitorRuleProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Dts.IJobMonitorRuleProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property dtsJobId: Migration, synchronization or subscription task ID can be by calling the [DescribeDtsJobs](~~ 209702 ~~) get.</summary>
            [JsiiProperty(name: "dtsJobId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DtsJobId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property type: Monitoring rules of type, the return value: - **delay**: delay alarm.</summary>
            /// <remarks>
            /// <list type="bullet">
            /// <description><strong>error</strong>: abnormal alarm.</description>
            /// </list>
            /// </remarks>
            [JsiiProperty(name: "type", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Type
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property delayRuleTime: Trigger delay alarm threshold, which is measured in seconds.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "delayRuleTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DelayRuleTime
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property period: The statistical period of the incremental verification task.</summary>
            /// <remarks>
            /// Unit: minutes.
            ///
            ///     currently supported values are 1 minute, 3 minutes, 5 minutes and 30 minutes.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "period", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Period
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property phones: The alarm is triggered after notification of the contact phone number.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "phones", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Phones
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property state: Whether to enable monitoring rules, return value: - **Y**: enable.</summary>
            /// <remarks>
            /// <list type="bullet">
            /// <description><strong>N</strong>: Inactive.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "state", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? State
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property times: The number of cycles of the incremental verification task.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "times", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Times
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
